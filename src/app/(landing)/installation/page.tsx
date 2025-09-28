'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const useOS = () => {
  const [os, setOs] = useState<'mac' | 'windows' | 'linux'>('linux');

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes('mac')) {
      setOs('mac');
    } else if (userAgent.includes('win')) {
      setOs('windows');
    } else {
      setOs('linux');
    }
  }, []);

  return os;
};

export default function InstallationPage() {
  const os = useOS();
  const [projectName, setProjectName] = useState<string>('');
  const [overrideOS, setOverrideOS] = useState<'' | 'windows' | 'mac' | 'linux'>('');
  const [copied, setCopied] = useState<boolean>(false);

  const slugify = (value: string) =>
    value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'my-project';

  const effectiveOS: 'mac' | 'windows' | 'linux' = (overrideOS || os) as 'mac' | 'windows' | 'linux';
  const projectSlug = slugify(projectName);

  // Build a single, installation-only command sequence based on OS
  const commandLines: string[] =
    effectiveOS === 'windows'
      ? [
          'Invoke-WebRequest -Uri "https://zerophp.com/get/latest.zip" -OutFile "main.zip";',
          'Expand-Archive -Path "main.zip" -DestinationPath "." -Force;',
          'Remove-Item "main.zip";',
          'Rename-Item "Zero-main" "${projectSlug}";',
          'Set-Location "${projectSlug}";',
          'Remove-Item -Recurse -Force docs, todo.md, readme.md; ',
          'Copy-Item ".env.example" ".env"; ',
          'php zero key:generate',
        ]
      : [
          'curl -L -o main.zip https://zerophp.com/get/latest.zip \\',
          '&& unzip -q main.zip \\',
          '&& rm main.zip \\',
          '&& mv Zero-main ${projectSlug} \\',
          '&& cd ${projectSlug} \\',
          '&& rm -rf docs todo.md readme.md .git \\',
          '&& cp .env.example .env \\',
          '&& php zero key:generate',
        ];

  const copyToClipboard = async () => {
    try {
      const text = commandLines.join('\n');
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error('Copy failed', e);
    }
  };

  // Prompt for the install section (no project folder yet)
  const installPrompt = effectiveOS === 'windows' ? 'PS C\\Users\\Zero\\> ' : 'zero@php ~ % ';

  // Prompt for the dev server section including project folder name
  const devPrompt =
    effectiveOS === 'windows'
      ? `PS C\\Users\\Zero\\${projectSlug}> `
      : `syntac@zero ~  ${projectSlug} % `;

  // Format current timestamp
  const pad = (n: number) => n.toString().padStart(2, '0');
  const formatNow = () => {
    const d = new Date();
    const dow = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()];
    const mon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()];
    const day = pad(d.getDate());
    const hh = pad(d.getHours());
    const mm = pad(d.getMinutes());
    const ss = pad(d.getSeconds());
    const yyyy = d.getFullYear();
    return `${dow} ${mon} ${day} ${hh}:${mm}:${ss} ${yyyy}`;
  };

  return (
    <section className='px-6 lg:px-[155px] pb-40 pt-25 lg:py-[15vh]'>
      <div className='max-w-[1224px] mx-auto'>
        <h1 className='text-3xl inline-block lg:text-4xl font-bold font-space-grotesk text-styled mb-8'>
        Installation Guides
        </h1>

        <h2 className="text-white mb-2">
          1. Paste the command below in terminal
        </h2>

        <div className="md:flex gap-3 grid grid-cols-2 mb-4">
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className='p-4 rounded-[15px] border border-[#2D2D4C] text-white placeholder:text-white/60 bg-[linear-gradient(120deg,rgba(22,27,38,0.10)_2.43%,rgba(14,14,14,0.20)_99.14%)] focus:outline-0 md:w-auto w-full'
            placeholder="Project Name"
          />
          <div className='relative'>
            <select
              value={effectiveOS}
              onChange={(e) => setOverrideOS(e.target.value as any)}
              className='p-4 pr-10 rounded-[15px] border border-[#2D2D4C] text-white bg-[linear-gradient(120deg,rgba(22,27,38,0.10)_2.43%,rgba(14,14,14,0.20)_99.14%)] focus:outline-0 appearance-none md:w-auto w-full'
            >
              <option className='bg-[#2D2D4C] text-white' value="windows">Windows</option>
              <option className='bg-[#2D2D4C] text-white' value="mac">Mac</option>
              <option className='bg-[#2D2D4C] text-white' value="linux">Linux</option>
            </select>
            <svg
              className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white'
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
            </svg>
          </div>
          <button
            type="button"
            onClick={copyToClipboard}
            className='p-4 rounded-[15px] cursor-pointer bg-white hover:bg-white/90 text-[#2D2D4C] font-space-grotesk focus:outline-0'
          >
            {copied ? 'Copied!' : 'Copy Command'}
          </button>
        </div>
        <div className='rounded-[20px] border border-[#2D2D4C] bg-[linear-gradient(120deg,rgba(22,27,38,0.10)_2.43%,rgba(14,14,14,0.20)_99.14%)] mb-8'>
          <div className='rounded-[20px] md:p-8 p-6'>
            <div className='flex w-full justify-between items-center mb-3'>
              <div className='font-bold text-xl text-white capitalize'>{effectiveOS}</div>
              {effectiveOS === 'windows' ? (
                <div className='flex items-center gap-3 mb-5'>
                  <span className='w-6 h-6 text-[11px] text-white border border-[#2D2D4C] flex items-center justify-center'>
                    &#9587;
                  </span>
                  <span className='w-6 h-6 text-[12px] border text-white border-[#2D2D4C] flex items-center justify-center'>
                    &#10064;
                  </span>
                  <span className='w-6 h-6 text-[11px] border text-white border-[#2D2D4C] flex items-center justify-center'>
                    &#8212;
                  </span>
                </div>
              ) : (
                <div className='flex items-center gap-3 mb-5'>
                  <div className='w-3 h-3 rounded-full bg-red-500'></div>
                  <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                  <div className='w-3 h-3 rounded-full bg-green-500'></div>
                </div>
              )}
            </div>

            <div className='space-y-1 font-space-grotesk text-base text-left'>
              <div className='text-white font-bold text-pretty'>
                <p className='break-all leading-loose'>
                  {commandLines.map((line, idx, arr) => (
                    <span key={idx}>
                      {idx === 0 && (
                        <span className='text-[#5972E5] font-bold'>{installPrompt}</span>
                      )}
                      {line}
                      {idx !== arr.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-white mb-2">2. Run the command to start dev server</h2>
        <div className='rounded-[20px] border border-[#2D2D4C] bg-[linear-gradient(120deg,rgba(22,27,38,0.10)_2.43%,rgba(14,14,14,0.20)_99.14%)] mb-8'>
          <div className='rounded-[20px] md:p-8 p-6'>
            <div className='flex w-full justify-between items-center mb-3'>
              <div className='font-bold text-xl text-white capitalize'>{effectiveOS}</div>
              {effectiveOS === 'windows' ? (
                <div className='flex items-center gap-3 mb-5'>
                  <span className='w-6 h-6 text-[11px] text-white border border-[#2D2D4C] flex items-center justify-center'>
                    &#9587;
                  </span>
                  <span className='w-6 h-6 text-[12px] border text-white border-[#2D2D4C] flex items-center justify-center'>
                    &#10064;
                  </span>
                  <span className='w-6 h-6 text-[11px] border text-white border-[#2D2D4C] flex items-center justify-center'>
                    &#8212;
                  </span>
                </div>
              ) : (
                <div className='flex items-center gap-3 mb-5'>
                  <div className='w-3 h-3 rounded-full bg-red-500'></div>
                  <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                  <div className='w-3 h-3 rounded-full bg-green-500'></div>
                </div>
              )}
            </div>

            <div className='space-y-1 font-space-grotesk text-base text-left'>
              <div className='text-white font-bold text-pretty'>
                <p className='break-all leading-loose'>
                  <span className='text-[#5972E5] font-bold'>{devPrompt}</span>php zero serve<br />
                  <span>Starting PHP server in default mode...</span> <br />
                  <span>[{formatNow()}] PHP 8.4.12 Development Server (http://127.0.0.1:8000) started</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-white mb-2">3. Read our <Link href="/docs/" className='underline hover:no-underline'>documentations</Link></h2>
      </div>
    </section>
  );
}
