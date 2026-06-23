import { FiAward, FiUsers, FiSmartphone, FiMapPin } from 'react-icons/fi';
import { SiFigma } from 'react-icons/si';

const contributions = [
  { label: 'UI/UX Design' },
  { label: 'Wireframing' },
  { label: 'Prototyping in Figma' },
  { label: 'Team Collaboration' },
];

const tools = [
  { label: 'Figma',            icon: SiFigma,       color: '#F24E1E' },
  { label: 'Design Thinking',  icon: FiAward,       color: '#0F766E' },
  { label: 'Prototyping',      icon: FiSmartphone,  color: '#D4A017' },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24"
      style={{ background: 'linear-gradient(135deg, #FAFAF7 0%, #f0faf9 50%, #fdf8ec 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag">Milestones</span>
          <h2 className="section-title" style={{ color: '#0F172A' }}>
            My <span className="gradient-text">Achievement</span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-md mx-auto">
            A highlight from my journey of learning, designing, and building
          </p>
        </div>

        {/* Single Achievement Card */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative rounded-3xl overflow-hidden group transition-all duration-500 hover:-translate-y-2"
            style={{
              background: '#ffffff',
              border: '1px solid rgba(15,118,110,0.15)',
              boxShadow: '0 8px 40px rgba(15,118,110,0.10), 0 2px 8px rgba(0,0,0,0.05)',
            }}
          >
            {/* Hover shadow upgrade */}
            <div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ boxShadow: '0 24px 60px rgba(15,118,110,0.18), 0 8px 20px rgba(0,0,0,0.08)' }}
            />

            {/* Top gradient banner */}
            <div
              className="relative px-8 pt-10 pb-8 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0F766E 0%, #0c6259 60%, #065f58 100%)' }}
            >
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-56 h-56 rounded-full bg-white opacity-5 -translate-y-20 translate-x-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white opacity-5 translate-y-14 -translate-x-14 pointer-events-none" />
              <div
                className="absolute top-4 right-4 w-32 h-32 rounded-full opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #D4A017, transparent)' }}
              />

              <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">

                {/* Left: Trophy + title */}
                <div className="flex items-start gap-5">
                  {/* Trophy icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: 'linear-gradient(135deg, #D4A017, #b8880f)', boxShadow: '0 8px 24px rgba(212,160,23,0.4)' }}
                  >
                    <span className="text-3xl">🏆</span>
                  </div>

                  <div>
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-3"
                      style={{ background: 'rgba(212,160,23,0.2)', color: '#f5c842', border: '1px solid rgba(212,160,23,0.4)' }}
                    >
                      <FiAward size={11} />
                      Top 10 Finalist
                    </div>
                    <h3 className="text-white font-black text-xl sm:text-2xl leading-tight">
                      PIXELVERSE Design Hackathon
                    </h3>
                    <p className="text-white/75 text-sm font-medium mt-1.5 leading-snug">
                      Google Developer Groups On Campus (GDG) · SIESGST
                    </p>
                  </div>
                </div>

                {/* Right: Team badge */}
                <div
                  className="self-start shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold"
                  style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(8px)' }}
                >
                  <FiUsers size={14} />
                  Team Nakshatra
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="px-8 py-8">

              {/* Project description */}
              <div className="mb-8">
                <div className="flex items-center gap-2.5 mb-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(15,118,110,0.08)' }}
                  >
                    <FiSmartphone size={15} style={{ color: '#0F766E' }} />
                  </div>
                  <h4 className="font-bold text-slate-800">
                    Majha Parisar — Civic Issue Reporting App
                  </h4>
                </div>
                <p className="text-slate-600 leading-relaxed text-[15px] pl-[2.75rem]">
                  Designed a mobile app concept that enables citizens to report civic issues such as{' '}
                  <span className="font-medium text-slate-700">potholes, garbage accumulation, and broken streetlights</span>{' '}
                  while tracking their resolution status — empowering communities through technology.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">

                {/* Key Contributions */}
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-4"
                    style={{ color: '#0F766E' }}
                  >
                    Key Contributions
                  </p>
                  <div className="space-y-2.5">
                    {contributions.map(({ label }) => (
                      <div key={label} className="flex items-center gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: 'rgba(15,118,110,0.1)' }}
                        >
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ background: '#0F766E' }}
                          />
                        </div>
                        <span className="text-slate-700 text-sm font-medium">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-4"
                    style={{ color: '#D4A017' }}
                  >
                    Tools & Methods
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tools.map(({ label, icon: Icon, color }) => (
                      <span
                        key={label}
                        className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-semibold transition-transform duration-200 hover:scale-105 cursor-default"
                        style={{
                          background: `${color}12`,
                          color: color,
                          border: `1px solid ${color}30`,
                        }}
                      >
                        <Icon size={12} />
                        {label}
                      </span>
                    ))}
                  </div>

                  {/* Location / organiser detail */}
                  <div
                    className="flex items-center gap-2 mt-6 p-4 rounded-xl"
                    style={{ background: 'rgba(15,118,110,0.05)', border: '1px solid rgba(15,118,110,0.12)' }}
                  >
                    <FiMapPin size={14} style={{ color: '#0F766E' }} className="flex-shrink-0" />
                    <p className="text-slate-600 text-xs leading-snug">
                      Organised by{' '}
                      <span className="font-semibold text-slate-800">GDG On Campus, SIESGST</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom accent bar */}
            <div
              className="h-1 w-full"
              style={{ background: 'linear-gradient(90deg, #0F766E, #D4A017, #0F766E)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
