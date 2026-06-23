import { FiCode, FiCpu, FiDatabase, FiBookOpen, FiGlobe, FiGitBranch } from 'react-icons/fi';

const stats = [
  { value: '100+', label: 'DSA Problems Solved', emoji: '🧩' },
  { value: '4+', label: 'Projects Built', emoji: '🚀' },
  { value: 'ML', label: 'Enrolled in the Course', emoji: '🤖' },
  { value: '1', label: 'Internship Experience', emoji: '💼' },
];

const interests = [
  { icon: FiCode, label: 'Web Development', desc: 'Modern, responsive web apps', color: 'from-teal-500 to-teal-700' },
  { icon: FiCpu, label: 'Machine Learning', desc: 'Applying AI to real problems', color: 'from-amber-500 to-amber-600' },
  { icon: FiDatabase, label: 'Data Analytics', desc: 'Transforming data into insights', color: 'from-teal-600 to-teal-800' },
  { icon: FiBookOpen, label: 'Problem Solving', desc: 'DSA & algorithmic thinking', color: 'from-amber-400 to-amber-600' },
  // { icon: FiGlobe, label: 'Open Source', desc: 'Contributing to the community', color: 'from-teal-500 to-amber-500' },
  { icon: FiGitBranch, label: 'System Design', desc: 'Understanding how systems scale', color: 'from-teal-700 to-teal-500' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag">Who I Am</span>
          <h2 className="section-title" style={{ color: '#0F172A' }}>
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            A passionate developer crafting impactful digital experiences at the intersection of web and AI
          </p>
        </div>

        {/* Main 2-col grid */}
        <div className="grid lg:grid-cols-2 gap-14 items-start mb-16">

          {/* Left: Story */}
          <div className="space-y-6">
            <div className="premium-card rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-5" style={{ color: '#0F172A' }}>
                My <span className="gradient-text">Journey</span>
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  I'm <span className="font-semibold text-slate-800">Kanchan Nishad</span>, a Computer
                  Engineering student with a deep passion for technology and software development. My journey
                  started with curiosity about how websites are built — which quickly grew into a love for
                  crafting full-stack applications from scratch.
                </p>
                <p>
                  On the{' '}
                  <span style={{ color: '#0F766E' }} className="font-semibold">Web Development</span> side,
                  I build with React, Node.js, and modern tooling. On the{' '}
                  <span style={{ color: '#D4A017' }} className="font-semibold">DSA &amp; Algorithms</span>{' '}
                  front, I practice consistently — having solved 130+ problems in arrays, binary search,
                  two pointers, hashing, and more.
                </p>
                <p>
                  I completed a Data Analytics internship at SIES GST and have been exploring Machine
                  Learning through coursework and projects. I believe in learning by building.
                </p>
              </div>
            </div>

            {/* Education card */}
            <div className="premium-card rounded-2xl p-7" style={{ borderLeft: '4px solid #0F766E' }}>
              <h4 className="font-bold text-slate-800 mb-1">🎓 Bachelor of Computer Engineering</h4>
              <p className="font-semibold text-sm mb-1" style={{ color: '#0F766E' }}>
                SIES Graduate College of Technology, Navi Mumbai
              </p>
              <p className="text-slate-500 text-sm mb-3">2024 – 2028 &nbsp;·&nbsp; CGPA: 8.3</p>
              <div className="flex flex-wrap gap-2">
                {['DSA', 'OOP', 'DBMS', 'OS', 'CN', 'ML', 'Web Tech'].map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-lg font-medium"
                    style={{ background: 'rgba(15,118,110,0.08)', color: '#0F766E', border: '1px solid rgba(15,118,110,0.2)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-5">
              {stats.map(({ value, label, emoji }, i) => (
                <div
                  key={label}
                  className={`stat-card rounded-2xl p-6 text-center stagger-${i + 1}`}
                >
                  <div className="text-3xl mb-2">{emoji}</div>
                  <p className="text-3xl font-black mb-1 gradient-text">{value}</p>
                  <p className="text-sm text-slate-500 font-medium leading-tight">{label}</p>
                </div>
              ))}
            </div>

            {/* Core strengths */}
            <div className="premium-card rounded-2xl p-7">
              <h4 className="font-bold text-slate-800 mb-5">Core Strengths</h4>
              <div className="space-y-4">
                {[
                  { label: 'Full-Stack Web Development', value: 80, color: '#0F766E' },
                  { label: 'Problem Solving & DSA', value: 75, color: '#0F766E' },
                  { label: 'Data Analytics & Power BI', value: 70, color: '#D4A017' },
                  { label: 'Machine Learning', value: 60, color: '#D4A017' },
                ].map(({ label, value, color }) => (
                  <div key={label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-slate-600 font-medium">{label}</span>
                      <span className="font-semibold" style={{ color }}>{value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${value}%`,
                          background: `linear-gradient(90deg, ${color}, ${color}aa)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
