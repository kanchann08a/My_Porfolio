import { FiExternalLink, FiGithub, FiServer, FiTrendingUp, FiBarChart2 } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'VacciLink',
    subtitle: 'Vaccination Management Platform',
    description:
      'A comprehensive vaccination management platform that simplifies vaccination tracking, scheduling, automated reminders, and secure record management for parents and healthcare providers.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    icon: FiServer,
    tag: 'Full-Stack',
    liveUrl: 'https://vaccilink-final.onrender.com/',
    githubUrl: 'https://github.com/kanchann08a/Vaccilink-Final',
    accentIsTeal: true,
    features: ['OTP Authentication', 'Child Profile Management', 'Vaccination Tracking', 'Reminder System'],
  },
  {
    id: 2,
    title: 'Demand Prediction System',
    subtitle: 'ML-Powered Forecasting App',
    description:
      'A machine learning application that accurately predicts product demand using historical sales data and business features, with an interactive Streamlit interface for real-time predictions.',
    tech: ['Python', 'Pandas', 'Scikit-Learn', 'XGBoost', 'Streamlit'],
    icon: FiTrendingUp,
    tag: 'Machine Learning',
    liveUrl: 'https://demand-prediction-fdnxzcewqn7svvsradvcxz.streamlit.app/',
    githubUrl: 'https://github.com/kanchann08a/Demand-Prediction',
    accentIsTeal: false,
    features: ['Demand Forecasting', 'Interactive UI', 'Data Preprocessing', 'Real-time Predictions'],
  },
  {
    id: 3,
    title: 'Uber Analytics Dashboard',
    subtitle: 'Interactive Power BI Dashboard',
    description:
      'An interactive Power BI dashboard analyzing Uber trip data to uncover revenue patterns, booking trends, and location intelligence — helping stakeholders make data-driven decisions.',
    tech: ['Power BI', 'DAX', 'Excel', 'Data Analytics', 'Data Visualization'],
    icon: FiBarChart2,
    tag: 'Data Analytics',
    liveUrl: '#',
    githubUrl: 'https://github.com/kanchann08a',
    accentIsTeal: true,
    features: ['Revenue Insights', 'Booking Trends', 'Location Intelligence', 'KPI Reports'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title" style={{ color: '#0F172A' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Real-world applications built with modern technologies — from web platforms to ML solutions
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="project-card rounded-2xl overflow-hidden group"
            >
              <div className={`grid lg:grid-cols-5 min-h-[300px]`}>

                {/* Visual panel */}
                <div
                  className={`lg:col-span-2 relative overflow-hidden flex flex-col items-center justify-center p-10 ${i % 2 !== 0 ? 'lg:order-last' : ''}`}
                  style={{
                    background: project.accentIsTeal
                      ? 'linear-gradient(135deg, #0F766E, #0c6259)'
                      : 'linear-gradient(135deg, #D4A017, #b8880f)',
                  }}
                >
                  {/* Decorative circles */}
                  <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white opacity-5 -translate-y-12 translate-x-12 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white opacity-5 translate-y-10 -translate-x-10 pointer-events-none" />

                  <div className="relative text-center">
                    <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <project.icon size={36} className="text-white" />
                    </div>
                    <h3 className="text-white font-black text-2xl">{project.title}</h3>
                    <p className="text-white/80 text-sm mt-1 font-medium">{project.subtitle}</p>
                    <div className="mt-4 inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-sm border border-white/30">
                      {project.tag}
                    </div>
                  </div>
                </div>

                {/* Details panel */}
                <div className="lg:col-span-3 p-8 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                        <p className="text-slate-500 text-sm mt-0.5">{project.subtitle}</p>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 border border-slate-200 hover:border-slate-400 hover:text-slate-800 transition-all duration-200"
                          aria-label="GitHub"
                        >
                          <FiGithub size={13} /> GitHub
                        </a>
                        {project.liveUrl !== '#' && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-all duration-200"
                            style={{ background: project.accentIsTeal ? '#0F766E' : '#D4A017' }}
                            aria-label="Live Demo"
                          >
                            <FiExternalLink size={13} /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-5">{project.description}</p>

                    {/* Features */}
                    <div className="mb-5">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Features</p>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map(f => (
                          <span
                            key={f}
                            className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg font-medium"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: project.accentIsTeal ? '#0F766E' : '#D4A017' }}
                            />
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1 rounded-full font-semibold"
                          style={
                            project.accentIsTeal
                              ? { background: 'rgba(15,118,110,0.08)', color: '#0F766E', border: '1px solid rgba(15,118,110,0.2)' }
                              : { background: 'rgba(212,160,23,0.1)', color: '#b8880f', border: '1px solid rgba(212,160,23,0.25)' }
                          }
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More projects CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/kanchann08a"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300"
          >
            <FiGithub size={16} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
