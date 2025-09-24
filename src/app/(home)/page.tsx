import Link from 'next/link';

const features = [
  {
    title: 'Dependency-Free',
    description: 'ZeroPHP is a PHP framework with zero external dependencies. ZeroPHP keeps your applications lean, independent, no packages, no bloat.'
  },
  {
    title: 'Zero CLI',
    description: 'Zero CLI is the command-line interface included with ZeroPHP. It provides a set of helpful commands to assist you while building your application.'
  },
  {
    title: 'DBML',
    description: 'Writing raw SQL queries can be painful. We built DBML to help you interact with your database without the hassle. It supports MySQL, PostgreSQL, and SQLite.'
  },
  {
    title: 'Routing',
    description: 'Our routing system is simple, well-structured, and easy to maintain. It helps keep your apps long-lasting, free from dependencies, and effortless to manage.'
  },
  {
    title: 'Database Migration',
    description: 'DB Migration makes it easy to version and manage your database schema. It provides simple commands to create, modify, and roll back tables, ensuring your database stays consistent across all environments.'
  },
  {
    title: 'Middleware',
    description: 'Middleware allows you to filter and process HTTP requests before they reach your application. It\'s a simple way to handle tasks like authentication, logging, or modifying requests and responses.'
  },
  {
    title: 'SMTP',
    description: 'SMTP and Mail make sending emails from your application simple. ZeroPHP provides a clean API to send messages through any SMTP server, with support for plain text, HTML, and attachments, no external bloat.'
  },
  {
    title: 'Template System',
    description: 'The Templating System helps you separate logic from presentation, making your views clean and easy to manage. It supports layouts, partials, and simple syntax to build dynamic pages with minimal effort.'
  }
];

const installationSteps = [
  'Create Model',
  'Create Migration',
  'Create Seeder',
  'Create Controller',
  'Create Helper',
  'Update ZeroPHP'
];

const linuxInstallation = `syntac@zero ~ % curl -L -o main.zip https://github.com/0php/Zero/archive/refs/heads/main.zip \
  && unzip -q main.zip \
  && rm main.zip \
  && mv Zero-main my-project \
  && cd my-project \
  && rm -rf docs todo.md readme.md .git \
  && php zero key:generate`;

export default function HomePage() {
  return (
      <div className="min-h-screen bg-[#0E0E0E] relative overflow-hidden">
          {/* Header */}
          <header className="flex justify-between items-center px-6 lg:px-[108px] py-8 z-[-1]">
              <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute w-[429px] h-[701px] rounded-full  bg-[#AD90FF] opacity-50 blur-[197px] rotate-[105deg] top-[252px] left-0" />
                  <div className="absolute w-[429px] h-[701px] rounded-full  bg-[#AD90FF] opacity-50 blur-[197px] rotate-[105deg] top-[979px] left-[226px]" />
                  <div className="absolute w-[429px] h-[701px] rounded-full  bg-[#AD90FF] opacity-50 blur-[197px] rotate-[105deg] top-[1524px] left-[-62px]" />
                  <div className="absolute w-[429px] h-[701px] rounded-full  bg-[#AD90FF] opacity-50 blur-[197px] rotate-[92deg] top-[1932px] left-[793px]" />
                  <div className="absolute w-[429px] h-[701px] rounded-full bg-[#0554CB] opacity-50 blur-[197px] rotate-[38deg] top-[-57px] left-[620px]" />
                  <div className="absolute w-[429px] h-[701px] rounded-full bg-[#0554CB] opacity-50 blur-[197px] rotate-[38deg] top-[666px] left-[620px]" />
              </div>
              <div className="text-white relative text-2xl font-medium font-space-grotesk z-[99]">
                  ZeroPHP
              </div>
              <nav className="hidden lg:flex items-center gap-6">
                  <a href="#" className="text-white text-lg font-space-grotesk underline hover:text-zerophp-purple transition-colors">Features</a>
                  <a href="#" className="text-white text-lg font-space-grotesk underline hover:text-zerophp-purple transition-colors">Installation</a>
                  <a href="#" className="text-white text-lg font-space-grotesk underline hover:text-zerophp-purple transition-colors">Documentation</a>
                  <a href="#" className="text-white hover:text-zerophp-purple transition-colors">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-github w-6 h-6"
                          aria-hidden="true"
                      >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                  </a>
              </nav>
              <button className="lg:hidden text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
              </button>
          </header>

          {/* Hero Section */}
          <section className="px-6 lg:px-[155px] py-16 lg:py-24 text-center">
              <div className="max-w-[1131px] mx-auto">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk mb-6 leading-tight">
                      <span className="text-white">ZeroPHP is</span>
                      <br />
                      <span className="bg-[linear-gradient(94deg,#0554CB_16.78%,#AD90FF_53.33%)] bg-clip-text text-transparent">Dependency-Free Framework</span>
                  </h1>
                  <p className="text-white text-xl lg:text-2xl font-space-grotesk max-w-[1131px] mx-auto mb-12 leading-relaxed">
                      It's designed to be simple — no need to install or maintain third-party packages. With ZeroPHP, your applications stay lean, independent, no packages, no bloat.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-12">
                      <div className="relative">
                          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[190px] h-[42px] bg-blue/40 blur-[32px] rounded-full" />
                          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-white text-zerophp-dark font-space-grotesk px-6 py-2 rounded-[14px] hover:bg-white/90 relative z-10">
                              Installation Guides
                          </button>
                      </div>
                      <a href="#" className="text-white font-space-grotesk underline hover:text-zerophp-purple transition-colors">
                          Read Documentation
                      </a>
                  </div>
              </div>
          </section>

      {/* ... previous sections ... */}

      {/* Features Section */}
      <section className="px-6 lg:px-[108px] py-16 lg:py-24">
        <div className="max-w-[1224px] mx-auto">
          <h2 className="text-center text-3xl lg:text-4xl font-bold font-space-grotesk gradient-text mb-12">
            Zero Dependencies, Rich Features
          </h2>
          
          {/* First row of features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {features.map((feature, index) => (
                <div key={index} className="rounded-[20px] p-4 space-y-1 border border-[#2D2D4C] bg-[linear-gradient(120deg,rgba(22,27,38,0.10)_2.43%,rgba(14,14,14,0.20)_99.14%)]">
                <h3 className="text-white font-space-grotesk text-xl lg:text-[22px] font-bold">
                  {feature.title}
                </h3>
                <p className="text-white font-plus-jakarta text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="px-6 lg:px-[108px] py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 max-w-[1224px] mx-auto">
          <div className="lg:w-[264px]">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-space-grotesk gradient-text">Install ZeroPHP</h3>
              <div className="space-y-3 text-white font-space-grotesk text-xl lg:text-2xl font-bold">
                {installationSteps.map((step, index) => (
                  <div key={index}>{step}</div>
                ))}
              </div>
            </div>
          </div>
          
            <div className="flex-1 rounded-[20px] border border-[#2D2D4C] bg-[linear-gradient(120deg,rgba(22,27,38,0.10)_2.43%,rgba(14,14,14,0.20)_99.14%)]">
            <div className="glass-card rounded-[20px] p-8 lg:max-w-[832px]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              
              <div className="space-y-1 font-space-grotesk text-base">
                <div>
                  <span className="text-[#5972E5] font-bold">syntac@zero ~ % </span>
                  <span className="text-white font-bold">{linuxInstallation}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="px-6 lg:px-[108px] py-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 max-w-[1224px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-2">
            <span className="text-white font-space-grotesk text-lg font-bold">In Collaboration with</span>
            <div className="flex items-center gap-1">
              <svg className="w-5 h-6" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* SVG paths remain the same */}
                <path d="M2.80791 18.3063C2.55253 17.8728 2.32323 17.4243 2.12124 16.9633C2.07312 16.8535 2.02664 16.7444 1.98294 16.6368C1.74709 16.056 1.61186 15.4365 1.62394 14.8097C1.91114 15.4204 2.26219 15.9987 2.67118 16.5349C2.7387 16.7049 2.81046 16.8759 2.8871 17.0482C3.12928 17.5911 3.40595 18.1177 3.71542 18.6249C5.12964 20.9463 6.99949 22.5053 8.44924 23.4833C7.00178 22.7508 4.52107 21.212 2.80791 18.3063ZM7.6626 20.6473C7.37656 20.323 7.1001 19.9909 6.83698 19.6488C6.38895 19.0728 5.98833 18.4611 5.6391 17.8198C5.15822 16.9053 4.80729 15.8635 4.95802 14.8182C5.10736 13.7437 5.87201 12.8432 6.79069 12.3212C6.89623 12.4973 7.00235 12.6734 7.10906 12.8494C6.47056 13.2886 5.87355 13.8708 5.67575 14.6481C5.3875 15.758 5.83941 16.8907 6.38473 17.8438C6.84601 18.6039 7.36958 19.3241 7.94998 19.9969C8.20419 20.2937 8.46729 20.5825 8.73928 20.8632C8.97186 21.1038 9.2095 21.3388 9.45221 21.568C9.48384 21.3623 9.51571 21.1555 9.54779 20.9478C9.5833 20.7167 9.6182 20.4849 9.65249 20.2521C9.83416 20.2628 10.0171 20.2688 10.2015 20.2688C10.017 20.2688 9.8342 20.2628 9.65249 20.2521C9.98853 17.9518 10.2031 15.5784 9.3501 13.3726C9.55192 13.2956 9.75569 13.2253 9.96309 13.1623C10.8454 15.4355 10.6386 17.8964 10.3052 20.2669C10.2722 20.5018 10.2382 20.7357 10.2033 20.9685C10.1952 21.0229 10.1871 21.0773 10.179 21.1317L10.0466 21.9184L9.91001 21.8987L10.0467 21.9185C9.99764 22.2608 9.94771 22.6041 9.89381 22.9459C9.1332 22.2035 8.36937 21.4487 7.6626 20.6473ZM10.7779 20.2498C13.1895 20.1031 15.4544 19.0377 17.1103 17.271C18.7661 15.5044 19.688 13.1697 19.6877 10.7437C19.6874 9.35701 19.3857 7.98715 18.8035 6.72976C18.2213 5.47237 17.3727 4.35778 16.317 3.46385C15.2614 2.56993 14.0241 1.91823 12.6915 1.55427C11.359 1.19032 9.96343 1.12289 8.60226 1.3567C7.2411 1.59051 5.94719 2.11992 4.81093 2.90795C3.67466 3.69597 2.72344 4.7236 2.02371 5.91906C1.32399 7.11451 0.89264 8.44896 0.759795 9.82917C0.62695 11.2094 0.795815 12.6021 1.25459 13.91C1.19913 14.1949 1.16724 14.484 1.15924 14.7742C1.15308 15.0275 1.16766 15.2809 1.20283 15.5318C0.478771 14.1597 0.0754143 12.6401 0.0233517 11.0882C-0.0287109 9.53632 0.271888 7.99289 0.902347 6.57503C1.53281 5.15716 2.47656 3.90209 3.66203 2.90502C4.8475 1.90795 6.24354 1.19507 7.74425 0.820464C9.24496 0.445856 10.8109 0.419356 12.3233 0.742974C13.8358 1.06659 15.2549 1.73183 16.4732 2.68822C17.6915 3.64461 18.6768 4.86704 19.3545 6.26277C20.0322 7.6585 20.3844 9.19088 20.3844 10.7437C20.3844 13.3731 19.3756 15.9015 17.5675 17.8036C15.7593 19.7056 13.2909 20.835 10.6751 20.9572C10.7095 20.7262 10.7437 20.4904 10.7778 20.2498L10.7779 20.2498ZM1.6239 14.8098C1.6239 14.802 1.6236 14.7941 1.6239 14.7863C1.64491 13.9541 1.87407 13.1289 2.34077 12.4344C2.56209 12.1476 2.32156 11.8019 2.29069 11.492C2.09026 10.2991 2.25063 8.92687 3.11326 8.01603C3.26361 8.15672 3.4131 8.29895 3.56248 8.44122C2.66008 9.53573 2.7414 11.0831 3.1749 12.3511C2.85435 12.7722 2.31961 13.612 2.26946 14.7446C2.26946 14.7475 2.26912 14.7503 2.26904 14.7532C2.25436 15.1581 2.31607 15.5622 2.45094 15.944C2.51847 16.1389 2.59189 16.3358 2.67122 16.5347C2.26222 15.9987 1.91114 15.4205 1.6239 14.8098ZM8.0818 12.7641C7.89664 12.1743 7.67772 11.5841 7.30207 11.0865C6.46227 11.4297 5.40093 10.9957 5.1311 10.1066C4.97175 9.74878 5.19487 9.34645 5.09734 8.99704C4.25987 8.16327 3.61364 7.1314 3.3003 5.98363C3.47328 5.87583 3.64697 5.76998 3.82135 5.6661C4.42433 6.06398 5.01905 6.86317 5.82355 6.58586C6.6085 6.40841 7.42199 6.45749 8.21099 6.58021C8.04748 6.38947 7.87897 6.20245 7.71122 6.01622C7.84441 5.85919 7.9781 5.70273 8.1123 5.54684C8.98518 6.27044 9.59029 7.31842 9.72733 8.45101C9.9096 9.9121 9.45315 11.3766 8.76723 12.6513C8.71554 12.7896 8.61789 12.8286 8.50464 12.8286C8.36855 12.8283 8.21002 12.772 8.0818 12.7639V12.7641ZM7.52992 10.3312C7.92477 10.7636 8.1943 11.2873 8.45599 11.8072C9.01354 10.6502 9.31416 9.3017 8.99186 8.03343C8.92144 7.79319 8.86806 7.48202 8.59193 7.40016C7.63191 7.00842 6.54262 7.0491 5.55267 7.30415C5.11707 7.44164 4.75429 7.09355 4.38228 6.9292C5.03117 8.39557 6.49765 9.18414 7.52992 10.3312ZM6.81099 10.5634C6.50021 10.1697 6.12144 9.83545 5.69278 9.57648C5.65016 10.3015 6.14402 10.8331 6.81103 10.5633L6.81099 10.5634Z" fill="white"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M2.93945 16.043H2.12625C0.99982 16.043 0.0866699 16.9559 0.0866699 18.0822C0.0866699 19.2085 0.999822 20.1217 2.12625 20.1217H6.43123C4.8076 19.259 3.54731 17.803 2.93945 16.043ZM3.69723 16.043C4.49611 18.1011 6.29608 19.6598 8.49947 20.1217H10.4956C10.4956 17.8691 8.66925 16.043 6.41639 16.043H3.69723Z" fill="#005ACC"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M12.3948 20.5247V21.2475C12.3948 22.3739 13.3079 23.2871 14.4344 23.2871C15.5608 23.2871 16.474 22.3739 16.474 21.2475V16.8042C15.6554 18.5175 14.1905 19.863 12.3948 20.5247ZM12.3948 19.7607C14.7896 18.767 16.4738 16.4061 16.4738 13.6519V12.8782C14.221 12.8782 12.3948 14.7045 12.3948 16.9574V19.7607Z" fill="#005ACC"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M16.7355 8.37659H18.0912C19.2176 8.37659 20.1308 7.46354 20.1308 6.33721C20.1308 5.2109 19.2176 4.29785 18.0912 4.29785H13.0151C14.7284 5.11626 16.0738 6.58106 16.7355 8.37659ZM9.82991 4.29785H9.89519C12.6355 4.31109 14.9818 5.99142 15.9715 8.37659H13.8011C11.5487 8.37659 9.72268 6.55122 9.72192 4.29924C9.75785 4.29849 9.79384 4.29803 9.82991 4.29785Z" fill="#005ACC"></path>
                <path d="M3.26538 2.54844C3.26538 1.41712 4.18251 0.5 5.31383 0.5C6.44516 0.5 7.36227 1.41712 7.36227 2.54844V6.85724C7.36227 9.1199 5.52804 10.9541 3.26538 10.9541V2.54844Z" fill="#E62615"></path>
                <path d="M18.1697 4.31433C19.3009 4.31433 20.218 5.23135 20.218 6.36257C20.218 7.49377 19.3009 8.4108 18.1697 8.4108H13.8608C11.5982 8.4108 9.76392 6.57674 9.76392 4.31433H18.1697Z" fill="#2064D2"></path>
                <path d="M16.5449 21.3375C16.5449 22.469 15.6278 23.386 14.4964 23.386C13.3651 23.386 12.448 22.469 12.448 21.3375V17.0287C12.448 14.7661 14.2822 12.9319 16.5449 12.9319V21.3375Z" fill="#0BAC7C"></path>
                <path d="M2.13511 20.2071C1.00379 20.2071 0.08667 19.2901 0.0866699 18.1588C0.0866699 17.0277 1.00379 16.1107 2.13511 16.1107H6.44391C8.70657 16.1107 10.5408 17.9446 10.5408 20.2071H2.13511Z" fill="#FABE0C"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M9.90517 4.31433C6.23812 4.31433 3.26538 7.28707 3.26538 10.9541V13.7089C3.26538 17.376 6.23812 20.3487 9.90517 20.3487C13.5722 20.3487 16.545 17.376 16.545 13.7089V10.9541C16.545 7.28707 13.5722 4.31433 9.90517 4.31433ZM9.76391 9.04695C7.93037 9.04695 6.44401 10.5333 6.44401 12.3669C6.44401 14.2004 7.93037 15.6868 9.7639 15.6868H10.0464C11.88 15.6868 13.3663 14.2004 13.3663 12.3669C13.3663 10.5333 11.88 9.04695 10.0464 9.04695H9.76391Z" fill="#4659B5"></path>
                <path d="M16.8628 10.9544C16.8628 7.11176 13.7478 3.9967 9.90516 3.9967C6.06256 3.9967 2.94751 7.11176 2.94751 10.9544V13.7092C2.94751 17.5518 6.06256 20.6668 9.90516 20.6668C13.7478 20.6668 16.8628 17.5518 16.8628 13.7092V10.9544Z" stroke="#191259" strokeWidth="1.59941"></path>
              </svg>
              <span className="text-white font-space-grotesk text-base font-bold">Syntac LLC</span>
            </div>
            <span className="text-white font-space-grotesk text-lg font-bold">&</span>
            <svg className="w-24 h-6" viewBox="0 0 94 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.3294 12.3952C31.8404 12.5149 32.2355 12.7625 32.515 13.1377C32.8024 13.505 32.9461 13.9322 32.9461 14.4192C32.9461 15.1618 32.6986 15.7367 32.2037 16.1439C31.7165 16.543 31.014 16.7427 30.0958 16.7427H25.6523V8.26323H29.9759C30.8383 8.26323 31.5169 8.45085 32.012 8.82612C32.5071 9.20139 32.7546 9.74833 32.7546 10.4669C32.7546 10.962 32.6228 11.3812 32.3593 11.7245C32.1038 12.0598 31.7605 12.2834 31.3294 12.3952ZM28.3112 11.5688H29.3412C29.5808 11.5688 29.7564 11.5209 29.8681 11.4251C29.988 11.3292 30.0479 11.1815 30.0479 10.9819C30.0479 10.7743 29.988 10.6226 29.8681 10.5268C29.7564 10.423 29.5808 10.3711 29.3412 10.3711H28.3112V11.5688ZM29.5209 14.6109C29.7603 14.6109 29.9361 14.567 30.0479 14.4791C30.1676 14.3833 30.2274 14.2316 30.2274 14.024C30.2274 13.6168 29.992 13.4132 29.5209 13.4132H28.3112V14.6109H29.5209ZM41.9837 8.26323L38.9416 14.1677V16.7427H36.2828V14.1677L33.2407 8.26323H36.2828L37.6362 11.2694L38.9895 8.26323H41.9837ZM49.2472 8.26323V10.3711H46.9956V16.7427H44.3367V10.3711H42.1091V8.26323H49.2472ZM52.6271 10.3831V11.4251H55.262V13.4252H52.6271V14.6228H55.6213V16.7427H49.9684V8.26323H55.6213V10.3831H52.6271ZM59.2822 14.7306H61.8452V16.7427H56.6233V8.26323H59.2822V14.7306ZM66.8138 16.8266C66.0153 16.8266 65.2808 16.6389 64.6101 16.2636C63.9473 15.8884 63.4204 15.3694 63.0291 14.7067C62.638 14.044 62.4423 13.2974 62.4423 12.467C62.4423 11.6366 62.638 10.8901 63.0291 10.2274C63.4204 9.56469 63.9473 9.04969 64.6101 8.6824C65.2808 8.30713 66.0153 8.11951 66.8138 8.11951C67.6122 8.11951 68.3428 8.30713 69.0056 8.6824C69.6681 9.04969 70.1912 9.56469 70.5744 10.2274C70.9657 10.8901 71.1612 11.6366 71.1612 12.467C71.1612 13.2974 70.9657 14.044 70.5744 14.7067C70.1912 15.3694 69.6642 15.8884 68.9935 16.2636C68.3308 16.6389 67.6042 16.8266 66.8138 16.8266ZM66.8138 14.3474C67.3407 14.3474 67.7479 14.1797 68.0354 13.8444C68.3228 13.501 68.4665 13.0419 68.4665 12.467C68.4665 11.8842 68.3228 11.4251 68.0354 11.0897C67.7479 10.7464 67.3407 10.5747 66.8138 10.5747C66.2787 10.5747 65.8675 10.7464 65.5802 11.0897C65.2927 11.4251 65.1489 11.8842 65.1489 12.467C65.1489 13.0419 65.2927 13.501 65.5802 13.8444C65.8675 14.1797 66.2787 14.3474 66.8138 14.3474ZM77.3183 11.1616C77.2145 10.9939 77.0668 10.8661 76.8753 10.7783C76.6836 10.6825 76.452 10.6346 76.1805 10.6346C75.6695 10.6346 75.2743 10.8023 74.9949 11.1376C74.7155 11.465 74.5757 11.9161 74.5757 12.491C74.5757 13.1537 74.7314 13.6487 75.0428 13.9761C75.3542 14.3035 75.8332 14.4671 76.48 14.4671C77.0948 14.4671 77.5899 14.2196 77.9651 13.7246H75.8453V11.8443H80.1688V14.5031C79.8016 15.1338 79.2945 15.6768 78.6477 16.1318C78.0011 16.579 77.1827 16.8025 76.1925 16.8025C75.3142 16.8025 74.5477 16.6229 73.8931 16.2636C73.2463 15.8964 72.7472 15.3854 72.3959 14.7306C72.0526 14.0759 71.8809 13.3294 71.8809 12.491C71.8809 11.6526 72.0526 10.9061 72.3959 10.2514C72.7472 9.59662 73.2463 9.08962 73.8931 8.73032C74.5397 8.36303 75.2983 8.17938 76.1686 8.17938C77.2784 8.17938 78.1807 8.44687 78.8754 8.98183C79.5779 9.51679 79.9931 10.2434 80.1209 11.1616H77.3183ZM83.7851 8.26323V16.7427H81.1264V8.26323H83.7851ZM84.7466 12.491C84.7466 11.6526 84.9142 10.9061 85.2495 10.2514C85.5928 9.59662 86.0798 9.08962 86.7107 8.73032C87.3414 8.36303 88.0839 8.17938 88.9383 8.17938C89.6728 8.17938 90.3276 8.31912 90.9025 8.59857C91.4854 8.87004 91.9565 9.25728 92.3158 9.76031C92.683 10.2633 92.9266 10.8502 93.0463 11.5209H90.2437C90.116 11.2414 89.9323 11.0258 89.6929 10.8741C89.4613 10.7145 89.1938 10.6346 88.8904 10.6346C88.4432 10.6346 88.0881 10.8023 87.8244 11.1376C87.5689 11.473 87.4413 11.9241 87.4413 12.491C87.4413 13.0579 87.5689 13.509 87.8244 13.8444C88.0881 14.1797 88.4432 14.3474 88.8904 14.3474C89.1938 14.3474 89.4613 14.2715 89.6929 14.1198C89.9323 13.9601 90.116 13.7406 90.2437 13.4611H93.0463C92.9266 14.1318 92.683 14.7186 92.3158 15.2217C91.9565 15.7246 91.4854 16.1159 90.9025 16.3955C90.3276 16.6669 89.6728 16.8025 88.9383 16.8025C88.0839 16.8025 87.3414 16.6229 86.7107 16.2636C86.0798 15.8964 85.5928 15.3854 85.2495 14.7306C84.9142 14.0759 84.7466 13.3294 84.7466 12.491Z" fill="white"></path>
            </svg>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white font-space-grotesk">
            <Link href="#" className="hover:text-zerophp-purple transition-colors">License</Link>
            <Link href="#" className="hover:text-zerophp-purple transition-colors">Term of Services</Link>
            <Link href="#" className="hover:text-zerophp-purple transition-colors">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
