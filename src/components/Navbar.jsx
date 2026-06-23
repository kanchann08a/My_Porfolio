import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiCode } from 'react-icons/fi';

const navLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [active,      setActive]      = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 110) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-blur shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={e => { e.preventDefault(); handleNav('#home'); }}
          className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shadow-md"
            style={{ background: 'linear-gradient(135deg, #0F766E, #0c6259)' }}
          >
            <FiCode className="text-white" size={18} />
          </div>
          <span className="font-bold text-lg" style={{ color: '#0F172A' }}>
            Kanchan<span className="gradient-text">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  active === link.href.replace('#', '')
                    ? 'font-semibold'
                    : 'text-slate-600 hover:bg-teal-50'
                }`}
                style={
                  active === link.href.replace('#', '')
                    ? { color: '#0F766E', background: 'rgba(15,118,110,0.08)' }
                    : {}
                }
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); handleNav('#contact'); }}
            className="btn-primary px-5 py-2 rounded-xl text-sm font-semibold cursor-pointer hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-600 transition-colors"
          style={{ background: mobileOpen ? 'rgba(15,118,110,0.08)' : 'transparent' }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          background: 'rgba(250,250,247,0.97)',
          backdropFilter: 'blur(20px)',
          borderBottom: mobileOpen ? '1px solid rgba(15,118,110,0.14)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === link.href.replace('#', '')
                  ? 'font-semibold'
                  : 'text-slate-600'
              }`}
              style={
                active === link.href.replace('#', '')
                  ? { color: '#0F766E', background: 'rgba(15,118,110,0.08)' }
                  : {}
              }
            >
              {link.label}
            </button>
          ))}
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); handleNav('#contact'); }}
            className="btn-primary text-center px-5 py-2.5 rounded-xl text-sm font-semibold mt-2 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
