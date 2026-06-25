import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';

const socials = [
  { icon: FiGithub,   href: 'https://github.com/kanchann08a',                       label: 'GitHub'   },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/kanchan-n-b160a3385/',      label: 'LinkedIn' },
  { icon: FiMail,     href: 'mailto:nishad02004@gmail.com',                          label: 'Email'    },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient"
    >
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-60 pointer-events-none" />

      {/* Decorative blobs */}
      <div
        className="absolute top-16 right-8 w-80 h-80 rounded-full opacity-25 blur-3xl animate-blob pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0F766E, #14b8a6)' }}
      />
      <div
        className="absolute bottom-20 left-8 w-72 h-72 rounded-full opacity-20 blur-3xl animate-blob-delay pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4A017, #f5c842)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0F766E, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Content ── */}
          <div className="order-2 lg:order-1 animate-fade-up">

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border shadow-sm mb-7"
              style={{ borderColor: 'rgba(15,118,110,0.2)' }}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-slate-600">Available for opportunities</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-3" style={{ color: '#0F172A' }}>
              Hey There, I'm{' '}
              <span className="gradient-text">Kanchan</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-500 mb-6 leading-snug">
              Frontend Developer &amp;{' '}
              <span className="gradient-text-gold">Machine Learning Enthusiast</span>
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-lg">
              A Computer Engineering student who builds{' '}
              <span style={{ color: '#0F766E' }} className="font-semibold">modern web applications</span>,
              explores{' '}
              <span style={{ color: '#D4A017' }} className="font-semibold">machine learning</span>, and
              solves real problems through clean, efficient code.
            </p>

            {/* Contact info strip */}
            <div className="flex flex-wrap items-center gap-4 mb-7 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <FiMail size={14} style={{ color: '#0F766E' }} />
                nishad02004@gmail.com
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300 hidden sm:block" />
              <span className="flex items-center gap-1.5">
                <span style={{ color: '#0F766E' }}>📍</span>
                Navi Mumbai, India
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-9">
              <a
                href="/resume (2).pdf"
                download="Kanchan_Nishad_Resume.pdf"
                className="btn-primary flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
              >
                <FiDownload size={16} />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-outline flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
              >
                Contact Me
                <FiArrowRight size={16} />
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-400 font-medium mr-1">Connect:</span>
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                  style={{ color: '#0F766E' }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: Profile Photo ── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">

              {/* Animated blob background shape */}
              <div
                className="absolute -inset-8 rounded-full opacity-30 blur-2xl animate-blob pointer-events-none"
                style={{ background: 'linear-gradient(135deg, #0F766E, #D4A017)' }}
              />

              {/* Dots decoration */}
              <div className="absolute -right-8 top-16 grid grid-cols-4 gap-3 opacity-25 pointer-events-none">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{ background: i % 2 === 0 ? '#0F766E' : '#D4A017' }}
                  />
                ))}
              </div>

              {/* Gold ring */}
              <div
                className="absolute -inset-1.5 rounded-[2.5rem] opacity-60 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, #0F766E, #D4A017, #0F766E)',
                  padding: '2px',
                  borderRadius: '2.5rem',
                  animation: 'spin-slow 8s linear infinite',
                }}
              />

              {/* Photo card */}
              <div
                className="relative w-[320px] h-[420px] sm:w-[380px] sm:h-[480px] overflow-hidden border-4 border-white shadow-2xl bg-white"
                style={{ borderRadius: '2.25rem' }}
              >
                <img
                  src="/kanchan.png"
                  alt="Kanchan Nishad – Frontend Developer & ML Enthusiast"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24"
                  style={{ background: 'linear-gradient(to top, rgba(15,118,110,0.15), transparent)' }}
                />
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-2.5 rounded-full shadow-lg text-white text-sm font-semibold whitespace-nowrap"
                style={{ background: 'linear-gradient(135deg, #0F766E, #0c6259)' }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                Frontend Dev & ML Student
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
