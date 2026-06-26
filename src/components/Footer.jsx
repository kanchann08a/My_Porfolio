import { FiGithub, FiLinkedin, FiMail, FiCode, FiArrowUp } from 'react-icons/fi';

const quickLinks = [
  { label: 'Home',         href: '#home'         },
  { label: 'About',        href: '#about'        },
  { label: 'Experience',   href: '#experience'   },
  { label: 'Projects',     href: '#projects'     },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact',      href: '#contact'      },
];

const socials = [
  { icon: FiGithub,   href: 'https://github.com/kanchann08a',                  label: 'GitHub'   },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/kanchan-n-b160a3385',     label: 'LinkedIn' },
  { icon: FiMail,     href: 'mailto:nishad02004@gmail.com',                    label: 'Email'    },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(180deg, #0F172A 0%, #030712 100%)' }}>
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #0F766E, #D4A017, #0F766E, transparent)', opacity: 0.7 }}
      />

      {/* Background blobs */}
      <div className="absolute top-0 left-20 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: '#0F766E', opacity: 0.04 }} />
      <div className="absolute bottom-0 right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: '#D4A017', opacity: 0.04 }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8 relative">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
                style={{ background: 'linear-gradient(135deg, #0F766E, #0c6259)' }}
              >
                <FiCode size={18} className="text-white" />
              </div>
              <span className="font-black text-xl text-white">
                Kanchan<span style={{ color: '#D4A017' }}>.</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-5">
              Computer Engineering student passionate about building modern web applications,
              exploring machine learning, and solving complex problems through elegant code.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:-translate-y-1 hover:scale-110 transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links – left half */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.slice(0, 4).map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-slate-400 text-sm font-medium transition-colors duration-200 cursor-pointer flex items-center gap-1.5 group hover:text-white"
                  >
                    <span
                      className="w-1 h-1 rounded-full transition-colors group-hover:bg-teal-400"
                      style={{ background: '#0F766E' }}
                    />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links – right half */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5">More</h4>
            <ul className="space-y-2.5">
              {quickLinks.slice(4).map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-slate-400 text-sm font-medium transition-colors duration-200 cursor-pointer flex items-center gap-1.5 group hover:text-white"
                  >
                    <span
                      className="w-1 h-1 rounded-full transition-colors group-hover:bg-amber-400"
                      style={{ background: '#D4A017' }}
                    />
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  download
                  className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 group"
                >
                  <span
                    className="w-1 h-1 rounded-full transition-colors group-hover:bg-amber-400"
                    style={{ background: '#D4A017' }}
                  />
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Tech stack row */}
        <div className="py-6 border-t mb-6" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <div className="flex flex-wrap items-center justify-center gap-2">
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
        >
          <p className="text-slate-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()}{' '}
            <span className="text-slate-300 font-semibold">Kanchan Nishad</span>.
            All rights reserved.
          </p>
          <p className="text-slate-500 text-xs">
            Designed &amp; Developed with <span className="text-red-400">♥</span> by Kanchan
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-200 cursor-pointer"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            aria-label="Back to top"
          >
            <FiArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
