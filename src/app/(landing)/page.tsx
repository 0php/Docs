'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Terminal,
  Copy,
  Check,
  Zap,
  ShieldCheck,
  Layers,
  Database,
  Route,
  Mail,
  Layout as LayoutIcon,
  ArrowRight,
  Sparkles,
  PackageX,
  RefreshCw,
  Play,
  Clock,
  BookOpen,
  ChevronRight,
  Code2,
  FileCode2,
  Cpu,
  Boxes,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon } from '@/components/icons';

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

interface Feature {
  icon: any;
  title: string;
  badge?: string;
  description: string;
  codeSnippet?: string;
}

const features: Feature[] = [
  {
    icon: PackageX,
    title: 'Dependency-Free Core',
    badge: '0 External Packages',
    description:
      'ZeroPHP is built entirely on native PHP with zero third-party packages. No vendor bloat, no supply chain vulnerabilities, and zero upgrade headaches.',
    codeSnippet: '// Zero composer packages required\n$app = new ZeroPHP\\Application();',
  },
  {
    icon: Terminal,
    title: 'Zero CLI Toolbelt',
    badge: 'Code Generation',
    description:
      'A powerful command-line interface out of the box. Rapidly scaffold models, controllers, migrations, seeders, and custom helpers with a single command.',
    codeSnippet: 'php zero make:model User\nphp zero make:controller PostController',
  },
  {
    icon: Database,
    title: 'Built-in DBML ORM',
    badge: 'MySQL • PG • SQLite',
    description:
      'Interact with your database fluently without raw SQL friction. Native support for MySQL, PostgreSQL, and SQLite with relationship helpers.',
    codeSnippet: 'User::where(\'active\', true)\n  ->orderBy(\'created_at\', \'desc\')\n  ->get();',
  },
  {
    icon: Route,
    title: 'Lightning Routing',
    badge: '< 1ms Overhead',
    description:
      'Expressive and structured routing engine supporting route groups, parameter patterns, sub-domains, and nested middleware pipelines.',
    codeSnippet: 'Route::get(\'/api/users/{id}\', [UserController::class, \'show\'])\n  ->middleware(\'auth\');',
  },
  {
    icon: Layers,
    title: 'Schema Migrations',
    badge: 'Version Controlled',
    description:
      'Effortlessly version and evolve your database schema across teams. Simple commands to create, run, and rollback migration files.',
    codeSnippet: 'php zero migrate\nphp zero migrate:rollback',
  },
  {
    icon: ShieldCheck,
    title: 'Middleware & Security',
    badge: 'Auth & Rate Limiting',
    description:
      'Filter HTTP requests seamlessly. Built-in rate limiting, CSRF protection, request validation, and customizable auth guards.',
    codeSnippet: '$request->validate([\n  \'email\' => \'required|email\',\n  \'password\' => \'min:8\'\n]);',
  },
  {
    icon: Mail,
    title: 'Native SMTP & Mailer',
    badge: 'HTML & Attachments',
    description:
      'Send rich transactional emails directly through any SMTP server. Clean API supporting HTML views, plain text fallbacks, and multi-file attachments.',
    codeSnippet: 'Mail::to($user->email)\n  ->subject(\'Welcome to ZeroPHP\')\n  ->send(\'emails.welcome\', $data);',
  },
  {
    icon: LayoutIcon,
    title: 'View & Template System',
    badge: 'Clean Separation',
    description:
      'Separate logic from presentation with high-performance layouts, slots, and partials. Fast dynamic page rendering without heavy template engines.',
    codeSnippet: 'return View::render(\'dashboard.index\', [\n  \'title\' => \'Overview\',\n  \'stats\' => $stats\n]);',
  },
];

interface CommandItem {
  id: string;
  name: string;
  desc: string;
  category: string;
}

const commandsList: CommandItem[] = [
  { id: 'create', name: 'Create Project', desc: 'Download and initialize a new ZeroPHP app', category: 'Setup' },
  { id: 'model', name: 'Create Model', desc: 'Scaffold a DBML model entity', category: 'Scaffolding' },
  { id: 'controller', name: 'Create Controller', desc: 'Generate a request controller', category: 'Scaffolding' },
  { id: 'migration', name: 'Create Migration', desc: 'Create a schema migration file', category: 'Database' },
  { id: 'seeder', name: 'Create Seeder', desc: 'Generate database seed records', category: 'Database' },
  { id: 'helper', name: 'Create Helper', desc: 'Scaffold reusable helper utilities', category: 'Utilities' },
  { id: 'serve', name: 'Start Dev Server', desc: 'Launch the built-in development server', category: 'Server' },
  { id: 'updater', name: 'Update ZeroPHP', desc: 'Check and update framework core', category: 'Maintenance' },
];

const codeExamples = [
  {
    filename: 'routes/web.php',
    language: 'php',
    code: `<?php

use App\\Controllers\\PostController;
use App\\Controllers\\UserController;
use ZeroPHP\\Http\\Route;

// Public routes
Route::get('/', function() {
    return view('welcome', ['title' => 'ZeroPHP Framework']);
});

// Grouped API routes with middleware
Route::prefix('/api/v1')->middleware('api.auth')->group(function() {
    Route::get('/posts', [PostController::class, 'index']);
    Route::post('/posts', [PostController::class, 'store']);
    Route::get('/posts/{id}', [PostController::class, 'show']);
    Route::get('/user/profile', [UserController::class, 'profile']);
});`,
  },
  {
    filename: 'app/Models/User.php',
    language: 'php',
    code: `<?php

namespace App\\Models;

use ZeroPHP\\Database\\Model;

class User extends Model
{
    protected static string $table = 'users';

    protected array $fillable = [
        'name',
        'email',
        'password',
        'is_active',
    ];

    protected array $hidden = [
        'password',
    ];

    public function posts()
    {
        return $this->hasMany(Post::class, 'user_id');
    }
}`,
  },
  {
    filename: 'app/Controllers/PostController.php',
    language: 'php',
    code: `<?php

namespace App\\Controllers;

use App\\Models\\Post;
use ZeroPHP\\Http\\Request;
use ZeroPHP\\Http\\Response;

class PostController
{
    public function index(Request $request): Response
    {
        $posts = Post::where('published', true)
            ->orderBy('created_at', 'desc')
            ->limit(15)
            ->get();

        return Response::json([
            'status' => 'success',
            'data'   => $posts,
        ]);
    }
}`,
  },
  {
    filename: 'database/migrations/create_posts.php',
    language: 'php',
    code: `<?php

use ZeroPHP\\Database\\Migration;
use ZeroPHP\\Database\\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('posts', function ($table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->string('title');
            $table->text('content');
            $table->boolean('published')->default(false);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};`,
  },
];

export default function HomePage() {
  const detectedOS = useOS();
  const [selectedOS, setSelectedOS] = useState<'mac' | 'windows' | 'linux'>('linux');
  const [selectedCommand, setSelectedCommand] = useState<string>('Create Project');
  const [activeCodeTab, setActiveCodeTab] = useState<number>(0);
  const [copiedInstall, setCopiedInstall] = useState<boolean>(false);
  const [copiedCli, setCopiedCli] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  useEffect(() => {
    setSelectedOS(detectedOS);
  }, [detectedOS]);

  const commandOutputs: Record<string, string[]> = {
    'Create Project':
      selectedOS === 'windows'
        ? [
            'Invoke-WebRequest -Uri "https://zerophp.com/get/latest.zip" -OutFile "main.zip";',
            'Expand-Archive -Path "main.zip" -DestinationPath "." -Force;',
            'Remove-Item "main.zip";',
            'Rename-Item "Zero-main" "my-project";',
            'Set-Location "my-project";',
            'Remove-Item -Recurse -Force docs, todo.md, readme.md; ',
            'Copy-Item ".env.example" ".env";',
            'php zero key:generate',
          ]
        : [
            'curl -L -o main.zip https://zerophp.com/get/latest.zip \\',
            '&& unzip -q main.zip \\',
            '&& rm main.zip \\',
            '&& mv Zero-main my-project \\',
            '&& cd my-project \\',
            '&& rm -rf docs todo.md readme.md .git \\',
            '&& cp .env.example .env \\',
            '&& php zero key:generate',
          ],
    'Create Model': [
      'php zero make:model User',
      '[SUCCESS] Model app/Models/User.php created successfully.',
    ],
    'Create Controller': [
      'php zero make:controller UserController --resource',
      '[SUCCESS] Controller app/Controllers/UserController.php created with resource methods.',
    ],
    'Create Migration': [
      'php zero make:migration create_users_table',
      '[SUCCESS] Migration database/migrations/2026_08_25_000001_create_users_table.php generated.',
    ],
    'Create Seeder': [
      'php zero make:seeder UsersSeeder',
      '[SUCCESS] Database Seeder database/seeders/UsersSeeder.php created.',
    ],
    'Create Helper': [
      'php zero make:helper StringHelper',
      '[SUCCESS] Helper app/Helpers/StringHelper.php created.',
    ],
    'Start Dev Server': [
      'php zero serve --port=8000',
      'Starting ZeroPHP development server...',
      '[INFO] PHP 8.4.0 Development Server started on http://127.0.0.1:8000',
      '[INFO] Press Ctrl+C to stop the server.',
    ],
    'Update ZeroPHP': [
      'php updater',
      'Checking for ZeroPHP framework updates...',
      '[INFO] You are running the latest version of ZeroPHP (v1.0.0).',
    ],
  };

  const isCreateProject = selectedCommand === 'Create Project';
  const prompt =
    selectedOS === 'windows'
      ? isCreateProject
        ? 'PS C:\\Users\\Zero> '
        : 'PS C:\\Users\\Zero\\my-project> '
      : isCreateProject
      ? 'zero@php ~ % '
      : 'zero@php ~/my-project % ';

  const quickInstallCommand =
    selectedOS === 'windows'
      ? 'Invoke-WebRequest -Uri "https://zerophp.com/get/latest.zip" -OutFile "main.zip"; Expand-Archive -Path "main.zip" -DestinationPath "."; Rename-Item "Zero-main" "my-project"'
      : 'curl -L -o main.zip https://zerophp.com/get/latest.zip && unzip -q main.zip && mv Zero-main my-project';

  const copyHeroInstall = async () => {
    try {
      await navigator.clipboard.writeText(quickInstallCommand);
      setCopiedInstall(true);
      setTimeout(() => setCopiedInstall(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  const copyCliTerminal = async () => {
    try {
      const lines = commandOutputs[selectedCommand] || [];
      await navigator.clipboard.writeText(lines.join('\n'));
      setCopiedCli(true);
      setTimeout(() => setCopiedCli(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  const copyCurrentCode = async () => {
    try {
      await navigator.clipboard.writeText(codeExamples[activeCodeTab].code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='relative overflow-hidden'>
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className='relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
        {/* Subtle background dot pattern */}
        <div className='absolute inset-0 -z-10 bg-dot-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none' />

        <div className='flex flex-col items-center text-center max-w-4xl mx-auto'>
          {/* Release Badge Pill */}
          <Link
            href='/installation'
            className='inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-2xs mb-8 group'
          >
            <span className='size-1.5 rounded-full bg-red-500'></span>
            <span className='font-semibold text-neutral-900 dark:text-white'>ZeroPHP 1.0</span>
            <span className='text-neutral-300 dark:text-neutral-700'>|</span>
            <span className='text-neutral-600 dark:text-neutral-400'>Zero Dependencies Framework</span>
            <ChevronRight className='size-3.5 text-neutral-400 group-hover:translate-x-0.5 transition-transform' />
          </Link>

          {/* Main Hero Headline */}
          <h1 className='text-4xl sm:text-6xl lg:text-7xl font-extrabold font-space-grotesk tracking-tight leading-[1.08] mb-6 text-neutral-950 dark:text-white'>
            Zero Dependencies. <br className='hidden sm:inline' />
            <span className='text-red-600 dark:text-red-500'>
              Pure PHP Performance.
            </span>
          </h1>

          {/* Subtitle */}
          <p className='text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 font-sans max-w-2xl mx-auto mb-10 leading-relaxed'>
            Build ultra-fast, rock-solid web applications with zero composer bloat.
            Enjoy a built-in CLI, DBML ORM, native migrations, routing, and mailer without third-party friction.
          </p>

          {/* Hero Action Buttons */}
          <div className='flex flex-wrap items-center justify-center gap-3 mb-12 w-full sm:w-auto'>
            <Link
              href='/installation'
              className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold font-space-grotesk bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-neutral-950 transition-colors shadow-xs group'
            >
              <span>Get Started</span>
              <ArrowRight className='size-4 group-hover:translate-x-0.5 transition-transform' />
            </Link>

            <Link
              href='/docs'
              className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold font-space-grotesk bg-neutral-100 hover:bg-neutral-200/80 text-neutral-900 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-100 border border-neutral-200/80 dark:border-neutral-800 transition-colors'
            >
              <BookOpen className='size-4 text-neutral-500' />
              <span>Documentation</span>
            </Link>

            <a
              href='https://github.com/0php/Zero'
              target='_blank'
              rel='noopener noreferrer'
              className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold font-space-grotesk bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 transition-colors'
            >
              <GithubIcon className='size-4' />
              <span>GitHub</span>
            </a>
          </div>

          {/* Quick-Install Copy Snippet Box */}
          <div className='w-full max-w-xl mx-auto'>
            <div className='flex items-center justify-between bg-neutral-950 text-neutral-200 p-2 pl-4 rounded-xl border border-neutral-800 shadow-md'>
              <div className='flex items-center gap-3 overflow-hidden text-left'>
                <span className='text-red-400 font-mono text-xs select-none font-bold'>$</span>
                <span className='font-mono text-xs truncate text-neutral-300 select-all'>
                  {selectedOS === 'windows'
                    ? 'Invoke-WebRequest https://zerophp.com/get/latest.zip -OutFile main.zip'
                    : 'curl -L -o main.zip https://zerophp.com/get/latest.zip && unzip main.zip'}
                </span>
              </div>

              <div className='flex items-center gap-1.5 shrink-0 pl-2'>
                {/* OS Switcher mini pills */}
                <div className='flex items-center bg-neutral-900 rounded-lg p-0.5 text-[10px] font-mono border border-neutral-800'>
                  <button
                    type='button'
                    onClick={() => setSelectedOS('mac')}
                    className={`px-2 py-0.5 rounded-md transition-colors ${
                      selectedOS === 'mac' ? 'bg-neutral-800 text-white font-bold' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Mac
                  </button>
                  <button
                    type='button'
                    onClick={() => setSelectedOS('linux')}
                    className={`px-2 py-0.5 rounded-md transition-colors ${
                      selectedOS === 'linux' ? 'bg-neutral-800 text-white font-bold' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Linux
                  </button>
                  <button
                    type='button'
                    onClick={() => setSelectedOS('windows')}
                    className={`px-2 py-0.5 rounded-md transition-colors ${
                      selectedOS === 'windows' ? 'bg-neutral-800 text-white font-bold' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Win
                  </button>
                </div>

                <button
                  type='button'
                  onClick={copyHeroInstall}
                  className='p-1.5 px-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700/60 transition-colors flex items-center gap-1.5 text-xs font-mono'
                  title='Copy install command'
                >
                  {copiedInstall ? (
                    <>
                      <Check className='size-3.5 text-red-400' />
                      <span className='hidden sm:inline text-[11px] font-sans text-red-400'>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className='size-3.5' />
                      <span className='hidden sm:inline text-[11px] font-sans'>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Metric Highlights */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-16 pt-12 border-t border-neutral-200/80 dark:border-neutral-800/80 w-full'>
            <div className='flex flex-col items-center p-4 rounded-xl bg-neutral-50/50 dark:bg-neutral-900/30 border border-neutral-200/60 dark:border-neutral-800/60'>
              <span className='text-2xl sm:text-3xl font-extrabold font-space-grotesk text-neutral-900 dark:text-white'>
                0 KB
              </span>
              <span className='text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mt-1'>
                Vendor Dependencies
              </span>
            </div>

            <div className='flex flex-col items-center p-4 rounded-xl bg-neutral-50/50 dark:bg-neutral-900/30 border border-neutral-200/60 dark:border-neutral-800/60'>
              <span className='text-2xl sm:text-3xl font-extrabold font-space-grotesk text-red-600 dark:text-red-500'>
                &lt; 5ms
              </span>
              <span className='text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mt-1'>
                Cold Start Time
              </span>
            </div>

            <div className='flex flex-col items-center p-4 rounded-xl bg-neutral-50/50 dark:bg-neutral-900/30 border border-neutral-200/60 dark:border-neutral-800/60'>
              <span className='text-2xl sm:text-3xl font-extrabold font-space-grotesk text-neutral-900 dark:text-white'>
                100%
              </span>
              <span className='text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mt-1'>
                Native PHP 8.2+
              </span>
            </div>

            <div className='flex flex-col items-center p-4 rounded-xl bg-neutral-50/50 dark:bg-neutral-900/30 border border-neutral-200/60 dark:border-neutral-800/60'>
              <span className='text-2xl sm:text-3xl font-extrabold font-space-grotesk text-neutral-900 dark:text-white'>
                1 CLI
              </span>
              <span className='text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mt-1'>
                Full Toolbelt
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INTERACTIVE ZERO CLI PLAYGROUND SECTION */}
      {/* ========================================================================= */}
      <section id='cli' className='py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
        <div className='text-center max-w-3xl mx-auto mb-14'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 mb-4'>
            <Terminal className='size-3.5 text-red-500' />
            <span>Built-in Command Line Engine</span>
          </div>
          <h2 className='text-3xl sm:text-4xl font-bold font-space-grotesk tracking-tight text-neutral-900 dark:text-white mb-3'>
            Rapid Scaffolding with <span className='text-red-600 dark:text-red-500'>Zero CLI</span>
          </h2>
          <p className='text-base text-neutral-600 dark:text-neutral-400 font-sans max-w-xl mx-auto'>
            Zero CLI delivers the developer ergonomics of modern frameworks without requiring external node or composer dependencies.
          </p>
        </div>

        {/* Interactive Terminal Wrapper */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 items-start max-w-6xl mx-auto'>
          {/* Command List Sidebar (4 cols) */}
          <div className='lg:col-span-4 flex flex-col gap-2'>
            <div className='flex items-center justify-between px-2 py-1.5 text-xs font-mono text-neutral-500 uppercase tracking-wider font-semibold border-b border-neutral-200 dark:border-neutral-800 mb-1'>
              <span>Available Commands</span>
              <span>{commandsList.length} items</span>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-2'>
              {commandsList.map((cmd) => {
                const isSelected = selectedCommand === cmd.name;
                return (
                  <button
                    key={cmd.id}
                    type='button'
                    onClick={() => setSelectedCommand(cmd.name)}
                    className={`text-left p-3 rounded-xl transition-all flex flex-col justify-between border ${
                      isSelected
                        ? 'bg-neutral-900 text-white dark:bg-neutral-800 dark:text-white border-neutral-900 dark:border-neutral-700 shadow-2xs'
                        : 'bg-white dark:bg-neutral-900/40 text-neutral-700 dark:text-neutral-300 border-neutral-200/80 dark:border-neutral-800/80 hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                    }`}
                  >
                    <div className='flex items-center justify-between w-full mb-1'>
                      <span className='font-bold font-space-grotesk text-sm'>{cmd.name}</span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${
                          isSelected
                            ? 'bg-neutral-800 text-neutral-300 dark:bg-neutral-700 dark:text-neutral-200'
                            : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500'
                        }`}
                      >
                        {cmd.category}
                      </span>
                    </div>
                    <p
                      className={`text-xs line-clamp-1 ${
                        isSelected ? 'text-neutral-300 dark:text-neutral-400' : 'text-neutral-500 dark:text-neutral-500'
                      }`}
                    >
                      {cmd.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Terminal Display Frame (8 cols) */}
          <div className='lg:col-span-8'>
            <div className='rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 terminal-shadow'>
              {/* Terminal Window Header Bar */}
              <div className='flex items-center justify-between px-4 py-3 bg-neutral-900/90 border-b border-neutral-800/80'>
                {/* Traffic lights / OS buttons */}
                <div className='flex items-center gap-2'>
                  <span className='size-2.5 rounded-full bg-neutral-700 inline-block'></span>
                  <span className='size-2.5 rounded-full bg-neutral-700 inline-block'></span>
                  <span className='size-2.5 rounded-full bg-neutral-700 inline-block'></span>
                  <span className='ml-2 text-xs font-mono text-neutral-400 font-medium hidden sm:inline'>
                    zero-cli — {selectedOS}
                  </span>
                </div>

                {/* OS Toggle & Copy Action */}
                <div className='flex items-center gap-2'>
                  <div className='flex items-center bg-neutral-800/90 rounded-lg p-0.5 text-xs font-mono border border-neutral-700/60'>
                    <button
                      type='button'
                      onClick={() => setSelectedOS('mac')}
                      className={`px-2.5 py-1 rounded-md text-[11px] transition-colors ${
                        selectedOS === 'mac'
                          ? 'bg-neutral-700 text-white font-semibold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      macOS
                    </button>
                    <button
                      type='button'
                      onClick={() => setSelectedOS('linux')}
                      className={`px-2.5 py-1 rounded-md text-[11px] transition-colors ${
                        selectedOS === 'linux'
                          ? 'bg-neutral-700 text-white font-semibold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Linux
                    </button>
                    <button
                      type='button'
                      onClick={() => setSelectedOS('windows')}
                      className={`px-2.5 py-1 rounded-md text-[11px] transition-colors ${
                        selectedOS === 'windows'
                          ? 'bg-neutral-700 text-white font-semibold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      PowerShell
                    </button>
                  </div>

                  <button
                    type='button'
                    onClick={copyCliTerminal}
                    className='p-1.5 px-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700/60 transition-colors flex items-center gap-1.5 text-xs font-mono'
                    title='Copy command output'
                  >
                    {copiedCli ? (
                      <>
                        <Check className='size-3.5 text-red-400' />
                        <span className='text-[11px] text-red-400 font-sans'>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className='size-3.5' />
                        <span className='text-[11px] font-sans'>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Terminal Screen Content */}
              <div className='p-6 font-mono text-sm leading-relaxed overflow-x-auto min-h-[290px] flex flex-col justify-start text-left bg-neutral-950 text-neutral-200'>
                <div className='mb-3 text-neutral-500 text-xs select-none'>
                  # ZeroPHP Command Runner • {selectedCommand}
                </div>

                <div className='space-y-1 text-sm'>
                  {(commandOutputs[selectedCommand] || []).map((line, idx) => {
                    const isFirst = idx === 0;
                    const isSuccess = line.startsWith('[SUCCESS]');
                    const isInfo = line.startsWith('[INFO]');
                    return (
                      <div key={`${selectedCommand}-${idx}`} className='break-all'>
                        {isFirst ? (
                          <div className='flex items-start gap-2'>
                            <span className='text-red-400 font-bold select-none shrink-0'>{prompt}</span>
                            <span className='text-white font-semibold'>{line}</span>
                          </div>
                        ) : (
                          <div
                            className={`pl-4 ${
                              isSuccess
                                ? 'text-red-400 font-semibold'
                                : isInfo
                                ? 'text-neutral-300'
                                : 'text-neutral-400'
                            }`}
                          >
                            {line}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Blinking Cursor */}
                <div className='mt-6 flex items-center gap-2 text-xs text-neutral-600 select-none'>
                  <span className='size-2 rounded-full bg-red-500 inline-block animate-pulse'></span>
                  <span>Terminal ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. BENTO GRID FEATURE SHOWCASE */}
      {/* ========================================================================= */}
      <section id='features' className='py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
        <div className='text-center max-w-3xl mx-auto mb-14'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 mb-4'>
            <Boxes className='size-3.5 text-red-500' />
            <span>Comprehensive Native Architecture</span>
          </div>
          <h2 className='text-3xl sm:text-4xl font-bold font-space-grotesk tracking-tight text-neutral-900 dark:text-white mb-3'>
            Zero Dependencies. <span className='text-red-600 dark:text-red-500'>Rich Features.</span>
          </h2>
          <p className='text-base text-neutral-600 dark:text-neutral-400 font-sans max-w-2xl mx-auto'>
            Everything required to build industrial-grade web APIs, services, and applications is built right into the framework core.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className='group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200'
              >
                <div>
                  <div className='flex items-center justify-between mb-4'>
                    <div className='flex items-center justify-center size-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700'>
                      <Icon className='size-5' />
                    </div>
                    {feature.badge && (
                      <span className='px-2.5 py-0.5 rounded-md text-[10px] font-mono font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200/60 dark:border-neutral-700/60'>
                        {feature.badge}
                      </span>
                    )}
                  </div>

                  <h3 className='text-base font-bold font-space-grotesk text-neutral-900 dark:text-white mb-2'>
                    {feature.title}
                  </h3>

                  <p className='text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed mb-5'>
                    {feature.description}
                  </p>
                </div>

                {feature.codeSnippet && (
                  <div className='rounded-lg bg-neutral-950 p-3 font-mono text-[11px] text-neutral-300 border border-neutral-800 overflow-x-auto select-all'>
                    <pre className='text-neutral-300 leading-tight'>
                      <code>{feature.codeSnippet}</code>
                    </pre>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CODE SHOWCASE & DEVELOPER EXPERIENCE */}
      {/* ========================================================================= */}
      <section id='architecture' className='py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200/80 dark:border-neutral-800/80'>
        <div className='text-center max-w-3xl mx-auto mb-14'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 mb-4'>
            <Code2 className='size-3.5 text-red-500' />
            <span>Intuitive Developer Experience</span>
          </div>
          <h2 className='text-3xl sm:text-4xl font-bold font-space-grotesk tracking-tight text-neutral-900 dark:text-white mb-3'>
            See ZeroPHP in Action
          </h2>
          <p className='text-base text-neutral-600 dark:text-neutral-400 font-sans max-w-xl mx-auto'>
            Clean, readable, and standard PHP 8 syntax with full IDE autocompletion and zero complicated config files.
          </p>
        </div>

        {/* Code Showcase Tab Frame */}
        <div className='max-w-5xl mx-auto rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 terminal-shadow'>
          {/* File Tabs Navigation */}
          <div className='flex items-center justify-between px-4 py-2 bg-neutral-900 border-b border-neutral-800 overflow-x-auto'>
            <div className='flex items-center gap-1.5'>
              {codeExamples.map((item, index) => (
                <button
                  key={item.filename}
                  type='button'
                  onClick={() => setActiveCodeTab(index)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                    activeCodeTab === index
                      ? 'bg-neutral-800 text-white border border-neutral-700 shadow-2xs'
                      : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50'
                  }`}
                >
                  <FileCode2 className='size-3.5 text-neutral-400' />
                  <span>{item.filename}</span>
                </button>
              ))}
            </div>

            <button
              type='button'
              onClick={copyCurrentCode}
              className='p-1.5 px-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700/60 transition-colors flex items-center gap-1.5 text-xs font-mono shrink-0 ml-3'
            >
              {copiedCode ? (
                <>
                  <Check className='size-3.5 text-red-400' />
                  <span className='text-[11px] text-red-400 font-sans'>Copied</span>
                </>
              ) : (
                <>
                  <Copy className='size-3.5' />
                  <span className='text-[11px] font-sans'>Copy Code</span>
                </>
              )}
            </button>
          </div>

          {/* Code Viewer Box */}
          <div className='p-6 font-mono text-xs sm:text-sm text-neutral-200 overflow-x-auto bg-neutral-950 leading-relaxed text-left'>
            <pre className='text-neutral-300'>
              <code>{codeExamples[activeCodeTab].code}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. COMPARISON SECTION: ZeroPHP vs Bloated Stacks */}
      {/* ========================================================================= */}
      <section className='py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto'>
        <div className='rounded-2xl p-8 sm:p-12 bg-neutral-50/60 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800'>
          <div className='text-center max-w-2xl mx-auto mb-10'>
            <h3 className='text-2xl sm:text-3xl font-bold font-space-grotesk text-neutral-900 dark:text-white mb-2'>
              Why Developers Choose ZeroPHP
            </h3>
            <p className='text-sm text-neutral-600 dark:text-neutral-400 font-sans'>
              Skip the complexity of hundred-megabyte vendor folders and endless dependency maintenance.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 text-center'>
            <div className='p-6 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800'>
              <div className='font-mono text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white mb-1'>
                0 MB
              </div>
              <div className='text-xs font-mono font-semibold uppercase tracking-wider text-red-600 dark:text-red-500 mb-2'>
                Vendor Footprint
              </div>
              <p className='text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed'>
                Versus 150+ MB for traditional full-stack frameworks.
              </p>
            </div>

            <div className='p-6 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800'>
              <div className='font-mono text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white mb-1'>
                &lt; 10s
              </div>
              <div className='text-xs font-mono font-semibold uppercase tracking-wider text-red-600 dark:text-red-500 mb-2'>
                Setup & Install
              </div>
              <p className='text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed'>
                Just unzip and run. No slow composer resolution required.
              </p>
            </div>

            <div className='p-6 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800'>
              <div className='font-mono text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white mb-1'>
                Zero
              </div>
              <div className='text-xs font-mono font-semibold uppercase tracking-wider text-red-600 dark:text-red-500 mb-2'>
                Breaking Upgrades
              </div>
              <p className='text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed'>
                No transitive dependency conflicts breaking production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CALL TO ACTION (CTA) SECTION */}
      {/* ========================================================================= */}
      <section className='py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
        <div className='relative overflow-hidden rounded-2xl bg-neutral-950 text-white p-8 sm:p-14 border border-neutral-800 terminal-shadow text-center'>
          <div className='relative z-10 max-w-2xl mx-auto space-y-6'>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-neutral-900 text-neutral-300 border border-neutral-800'>
              <Zap className='size-3.5 text-red-400' />
              <span>Ready for Next-Gen PHP?</span>
            </div>

            <h2 className='text-3xl sm:text-4xl font-extrabold font-space-grotesk tracking-tight leading-tight'>
              Start Building Leaner, Faster PHP Apps Today.
            </h2>

            <p className='text-neutral-400 text-sm sm:text-base font-sans max-w-xl mx-auto'>
              Get up and running in under 30 seconds with ZeroPHP. Download the latest release or dive straight into our documentation.
            </p>

            <div className='flex flex-wrap items-center justify-center gap-3 pt-2'>
              <Link
                href='/installation'
                className='inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold font-space-grotesk bg-white hover:bg-neutral-200 text-neutral-950 transition-colors shadow-xs'
              >
                <Terminal className='size-4' />
                <span>Installation Guide</span>
                <ArrowRight className='size-4' />
              </Link>

              <Link
                href='/docs'
                className='inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold font-space-grotesk bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 transition-colors'
              >
                <BookOpen className='size-4 text-neutral-400' />
                <span>Browse Docs</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
