'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Terminal,
  Copy,
  Check,
  Sparkles,
  ArrowRight,
  FolderPlus,
  Play,
  Server,
  BookOpen,
  Route,
  Database,
  Layers,
  ShieldCheck,
  ExternalLink,
  CheckCircle2,
  Cpu,
  HelpCircle,
} from 'lucide-react';

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
  const detectedOS = useOS();
  const [projectName, setProjectName] = useState<string>('my-project');
  const [overrideOS, setOverrideOS] = useState<'' | 'windows' | 'mac' | 'linux'>('');
  const [copiedInstall, setCopiedInstall] = useState<boolean>(false);
  const [copiedServe, setCopiedServe] = useState<boolean>(false);
  const [nowText, setNowText] = useState<string>('');
  const [isStepByStep, setIsStepByStep] = useState<boolean>(false);

  const slugify = (value: string) =>
    value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'my-project';

  const effectiveOS: 'mac' | 'windows' | 'linux' = (overrideOS || detectedOS) as
    | 'mac'
    | 'windows'
    | 'linux';
  const projectSlug = slugify(projectName);

  // Command sequences
  const commandLines: string[] =
    effectiveOS === 'windows'
      ? [
          'Invoke-WebRequest -Uri "https://zerophp.com/get/latest.zip" -OutFile "main.zip";',
          'Expand-Archive -Path "main.zip" -DestinationPath "." -Force;',
          'Remove-Item "main.zip";',
          `Rename-Item "Zero-main" "${projectSlug}";`,
          `Set-Location "${projectSlug}";`,
          'Remove-Item -Recurse -Force docs, todo.md, readme.md; ',
          'Copy-Item ".env.example" ".env"; ',
          'php zero key:generate',
        ]
      : [
          'curl -L -o main.zip https://zerophp.com/get/latest.zip \\',
          '&& unzip -q main.zip \\',
          '&& rm main.zip \\',
          `&& mv Zero-main ${projectSlug} \\`,
          `&& cd ${projectSlug} \\`,
          '&& rm -rf docs todo.md readme.md .git \\',
          '&& cp .env.example .env \\',
          '&& php zero key:generate',
        ];

  const stepByStepCommands = [
    {
      title: 'Download & Extract ZeroPHP archive',
      command:
        effectiveOS === 'windows'
          ? 'Invoke-WebRequest -Uri "https://zerophp.com/get/latest.zip" -OutFile "main.zip"; Expand-Archive -Path "main.zip" -DestinationPath "." -Force; Remove-Item "main.zip"'
          : 'curl -L -o main.zip https://zerophp.com/get/latest.zip && unzip -q main.zip && rm main.zip',
    },
    {
      title: 'Rename project directory & enter folder',
      command:
        effectiveOS === 'windows'
          ? `Rename-Item "Zero-main" "${projectSlug}"; Set-Location "${projectSlug}"`
          : `mv Zero-main ${projectSlug} && cd ${projectSlug}`,
    },
    {
      title: 'Initialize environment configuration and app key',
      command:
        effectiveOS === 'windows'
          ? 'Copy-Item ".env.example" ".env"; php zero key:generate'
          : 'cp .env.example .env && php zero key:generate',
    },
  ];

  const copyInstallToClipboard = async () => {
    try {
      const text = commandLines.join('\n');
      await navigator.clipboard.writeText(text);
      setCopiedInstall(true);
      setTimeout(() => setCopiedInstall(false), 2000);
    } catch (e) {
      console.error('Copy failed', e);
    }
  };

  const copyServeToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('php zero serve');
      setCopiedServe(true);
      setTimeout(() => setCopiedServe(false), 2000);
    } catch (e) {
      console.error('Copy failed', e);
    }
  };

  // Prompt formatting
  const installPrompt =
    effectiveOS === 'windows' ? 'PS C:\\Users\\Zero> ' : 'zero@php ~ % ';
  const devPrompt =
    effectiveOS === 'windows'
      ? `PS C:\\Users\\Zero\\${projectSlug}> `
      : `zero@php ~/${projectSlug} % `;

  // Client timestamp
  useEffect(() => {
    const pad = (n: number) => n.toString().padStart(2, '0');
    const d = new Date();
    const dow = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()];
    const mon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()];
    const day = pad(d.getDate());
    const hh = pad(d.getHours());
    const mm = pad(d.getMinutes());
    const ss = pad(d.getSeconds());
    const yyyy = d.getFullYear();
    setNowText(`${dow} ${mon} ${day} ${hh}:${mm}:${ss} ${yyyy}`);
  }, []);

  return (
    <div className='relative pt-32 pb-24 md:pt-36 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto'>
      {/* Header */}
      <div className='text-center max-w-3xl mx-auto mb-12'>
        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 mb-4'>
          <span className='size-1.5 rounded-full bg-red-500'></span>
          <span>Quick Start in &lt; 30 Seconds</span>
        </div>
        <h1 className='text-3xl sm:text-5xl font-extrabold font-space-grotesk tracking-tight text-neutral-950 dark:text-white mb-3'>
          Installation Guide
        </h1>
        <p className='text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans max-w-xl mx-auto'>
          Get started with ZeroPHP on macOS, Linux, or Windows. No composer or npm dependencies needed.
        </p>
      </div>

      {/* Interactive Project Configurator Card */}
      <div className='p-6 sm:p-8 rounded-2xl bg-neutral-50/60 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800 mb-10'>
        <div className='flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 mb-4'>
          <FolderPlus className='size-4 text-red-500' />
          <span>Project Configuration</span>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-12 gap-4 items-center'>
          {/* Project Name Input */}
          <div className='sm:col-span-6'>
            <label className='block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5 font-space-grotesk'>
              Project Name
            </label>
            <input
              type='text'
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className='w-full px-3.5 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-all'
              placeholder='my-awesome-app'
            />
          </div>

          {/* OS Selector Tabs */}
          <div className='sm:col-span-6'>
            <label className='block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5 font-space-grotesk'>
              Target Operating System
            </label>
            <div className='grid grid-cols-3 gap-1 bg-neutral-200/70 dark:bg-neutral-800/70 p-1 rounded-xl border border-neutral-300/50 dark:border-neutral-700/50'>
              <button
                type='button'
                onClick={() => setOverrideOS('mac')}
                className={`py-1.5 text-xs font-mono font-semibold rounded-lg transition-all ${
                  effectiveOS === 'mac'
                    ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-2xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                macOS
              </button>
              <button
                type='button'
                onClick={() => setOverrideOS('linux')}
                className={`py-1.5 text-xs font-mono font-semibold rounded-lg transition-all ${
                  effectiveOS === 'linux'
                    ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-2xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                Linux
              </button>
              <button
                type='button'
                onClick={() => setOverrideOS('windows')}
                className={`py-1.5 text-xs font-mono font-semibold rounded-lg transition-all ${
                  effectiveOS === 'windows'
                    ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-2xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                Windows
              </button>
            </div>
          </div>
        </div>

        {/* Directory Output Preview */}
        <div className='mt-4 pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between text-xs font-mono text-neutral-500'>
          <span>Destination Folder: <span className='text-red-600 dark:text-red-500 font-semibold'>./{projectSlug}</span></span>
          <span className='capitalize'>Detected OS: {detectedOS}</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* STEP 1: INITIALIZE */}
      {/* ========================================================================= */}
      <div className='mb-12'>
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center gap-3'>
            <span className='flex items-center justify-center size-6 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-bold font-mono text-xs'>
              1
            </span>
            <h2 className='text-lg font-bold font-space-grotesk text-neutral-900 dark:text-white'>
              Download & Initialize Project
            </h2>
          </div>

          {/* Toggle between One-liner vs Step by Step */}
          <div className='flex items-center gap-2'>
            <button
              type='button'
              onClick={() => setIsStepByStep(!isStepByStep)}
              className='text-xs font-mono text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors underline'
            >
              {isStepByStep ? 'Show One-liner' : 'Show Step-by-Step'}
            </button>
          </div>
        </div>

        {isStepByStep ? (
          <div className='space-y-3'>
            {stepByStepCommands.map((step, idx) => (
              <div
                key={idx}
                className='p-4 rounded-xl bg-neutral-950 border border-neutral-800 font-mono text-xs'
              >
                <div className='text-neutral-400 mb-2 font-sans text-xs font-medium'>
                  Step 1.{idx + 1}: {step.title}
                </div>
                <div className='flex items-center justify-between text-red-400'>
                  <code className='break-all'>{step.command}</code>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 terminal-shadow'>
            {/* Window bar */}
            <div className='flex items-center justify-between px-4 py-3 bg-neutral-900 border-b border-neutral-800'>
              <div className='flex items-center gap-2'>
                <span className='size-2.5 rounded-full bg-neutral-700 inline-block'></span>
                <span className='size-2.5 rounded-full bg-neutral-700 inline-block'></span>
                <span className='size-2.5 rounded-full bg-neutral-700 inline-block'></span>
                <span className='ml-2 text-xs font-mono text-neutral-400 font-medium'>
                  Terminal — {effectiveOS}
                </span>
              </div>

              <button
                type='button'
                onClick={copyInstallToClipboard}
                className='inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700/60 transition-colors text-xs font-mono'
              >
                {copiedInstall ? (
                  <>
                    <Check className='size-3.5 text-red-400' />
                    <span className='text-red-400'>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className='size-3.5' />
                    <span>Copy All</span>
                  </>
                )}
              </button>
            </div>

            {/* Terminal Body */}
            <div className='p-6 font-mono text-xs sm:text-sm text-neutral-200 leading-relaxed overflow-x-auto text-left'>
              {commandLines.map((line, idx) => (
                <div key={idx} className='break-all'>
                  {idx === 0 && (
                    <span className='text-red-400 font-bold select-none mr-2'>
                      {installPrompt}
                    </span>
                  )}
                  <span>{line}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* STEP 2: START SERVER */}
      {/* ========================================================================= */}
      <div className='mb-12'>
        <div className='flex items-center gap-3 mb-4'>
          <span className='flex items-center justify-center size-6 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-bold font-mono text-xs'>
            2
          </span>
          <h2 className='text-lg font-bold font-space-grotesk text-neutral-900 dark:text-white'>
            Start Development Server
          </h2>
        </div>

        <div className='rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 terminal-shadow'>
          <div className='flex items-center justify-between px-4 py-3 bg-neutral-900 border-b border-neutral-800'>
            <div className='flex items-center gap-2'>
              <span className='size-2.5 rounded-full bg-neutral-700 inline-block'></span>
              <span className='size-2.5 rounded-full bg-neutral-700 inline-block'></span>
              <span className='size-2.5 rounded-full bg-neutral-700 inline-block'></span>
              <span className='ml-2 text-xs font-mono text-neutral-400 font-medium'>
                Server Log — {projectSlug}
              </span>
            </div>

            <button
              type='button'
              onClick={copyServeToClipboard}
              className='inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700/60 transition-colors text-xs font-mono'
            >
              {copiedServe ? (
                <>
                  <Check className='size-3.5 text-red-400' />
                  <span className='text-red-400'>Copied</span>
                </>
              ) : (
                <>
                  <Copy className='size-3.5' />
                  <span>Copy Command</span>
                </>
              )}
            </button>
          </div>

          <div className='p-6 font-mono text-xs sm:text-sm text-neutral-200 leading-relaxed text-left'>
            <div className='flex items-start gap-2 mb-2'>
              <span className='text-red-400 font-bold select-none'>{devPrompt}</span>
              <span className='text-white font-bold'>php zero serve</span>
            </div>
            <div className='text-neutral-400 pl-4'>Starting PHP server in default mode...</div>
            <div className='text-red-400 pl-4 mt-1'>
              [{nowText || '2026-08-25 12:00:00'}] PHP 8.4 Development Server (http://127.0.0.1:8000) started
            </div>
            <div className='text-neutral-500 pl-4 text-xs mt-2'>
              ➜ Local: <span className='text-neutral-300 underline underline-offset-2'>http://127.0.0.1:8000</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* STEP 3: NEXT STEPS & EXPLORE */}
      {/* ========================================================================= */}
      <div className='mb-12'>
        <div className='flex items-center gap-3 mb-6'>
          <span className='flex items-center justify-center size-6 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-bold font-mono text-xs'>
            3
          </span>
          <h2 className='text-lg font-bold font-space-grotesk text-neutral-900 dark:text-white'>
            Explore Next Steps & Core Docs
          </h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          <Link
            href='/docs/router'
            className='p-5 rounded-xl bg-neutral-50/60 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors group'
          >
            <div className='flex items-center justify-between mb-3'>
              <Route className='size-5 text-neutral-800 dark:text-neutral-200' />
              <ArrowRight className='size-4 text-neutral-400 group-hover:translate-x-0.5 transition-transform' />
            </div>
            <h3 className='font-bold font-space-grotesk text-sm text-neutral-900 dark:text-white mb-1'>
              Routing Guide
            </h3>
            <p className='text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed'>
              Learn how to define endpoints, controllers, and middleware groups.
            </p>
          </Link>

          <Link
            href='/docs/dbml'
            className='p-5 rounded-xl bg-neutral-50/60 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors group'
          >
            <div className='flex items-center justify-between mb-3'>
              <Database className='size-5 text-neutral-800 dark:text-neutral-200' />
              <ArrowRight className='size-4 text-neutral-400 group-hover:translate-x-0.5 transition-transform' />
            </div>
            <h3 className='font-bold font-space-grotesk text-sm text-neutral-900 dark:text-white mb-1'>
              DBML ORM
            </h3>
            <p className='text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed'>
              Query databases with fluent syntax for MySQL, PostgreSQL, and SQLite.
            </p>
          </Link>

          <Link
            href='/docs/migrations'
            className='p-5 rounded-xl bg-neutral-50/60 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors group'
          >
            <div className='flex items-center justify-between mb-3'>
              <Layers className='size-5 text-neutral-800 dark:text-neutral-200' />
              <ArrowRight className='size-4 text-neutral-400 group-hover:translate-x-0.5 transition-transform' />
            </div>
            <h3 className='font-bold font-space-grotesk text-sm text-neutral-900 dark:text-white mb-1'>
              Database Migrations
            </h3>
            <p className='text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed'>
              Version your database schema and execute automated rollback scripts.
            </p>
          </Link>
        </div>
      </div>

      {/* System Requirements Callout */}
      <div className='p-5 rounded-xl bg-neutral-100/60 dark:bg-neutral-900/30 border border-neutral-200/80 dark:border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-sans text-neutral-600 dark:text-neutral-400'>
        <div className='flex items-center gap-3'>
          <Cpu className='size-4 text-neutral-700 dark:text-neutral-300 shrink-0' />
          <div>
            <span className='font-bold text-neutral-900 dark:text-white block'>
              System Requirements:
            </span>
            <span>PHP 8.2 or newer with PDO (SQLite, MySQL, or PostgreSQL) and OpenSSL extensions.</span>
          </div>
        </div>

        <Link
          href='/docs'
          className='inline-flex items-center gap-1 text-xs font-mono font-semibold text-neutral-900 dark:text-neutral-200 hover:underline shrink-0'
        >
          <span>Full Documentation</span>
          <ExternalLink className='size-3.5' />
        </Link>
      </div>
    </div>
  );
}
