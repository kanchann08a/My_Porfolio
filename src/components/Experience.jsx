import { FiCheckCircle, FiCalendar, FiMapPin, FiBarChart2, FiBook } from 'react-icons/fi';

const timeline = [
  {
    id: 1,
    type: 'experience',
    role: 'Data Analytics Intern',
    company: 'SIES GST',
    duration: 'Nov 2025 – Dec 2025',
    location: 'Nerul, Navi Mumbai',
    badge: 'Internship',
    description:
      'Worked as a Data Analytics Intern, focusing on business intelligence and data visualization. Developed interactive dashboards and extracted actionable insights from complex datasets.',
    points: [
      'Built an interactive Uber Ride Analytics Dashboard using Power BI',
      'Created complex DAX measures and calculated KPIs for business reporting',
      'Analyzed booking trends, revenue patterns, and distance analytics',
      'Presented data-driven business insights to stakeholders',
      'Handled data cleaning, transformation, and modeling workflows',
    ],
    tags: ['Power BI', 'DAX', 'Data Analytics', 'KPI Reporting', 'Excel'],
    accentIsTeal: true,
    icon: FiBarChart2,
  },

];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag">Work & Learning</span>
          <h2 className="section-title" style={{ color: '#0F172A' }}>
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Professional experience and continuous self-improvement across web, data, and machine learning
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-3xl mx-auto relative">

          {/* Timeline vertical line */}
          <div
            className="hidden md:block absolute left-6 top-6 bottom-6 w-0.5"
            style={{ background: 'linear-gradient(180deg, #0F766E, #D4A017, #0F766E)' }}
          />

          <div className="space-y-10">
            {timeline.map((item) => (
              <div key={item.id} className="relative flex gap-8 md:gap-12">

                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md z-10 flex-shrink-0 mt-1 text-white"
                    style={{
                      background: item.accentIsTeal
                        ? 'linear-gradient(135deg, #0F766E, #0c6259)'
                        : 'linear-gradient(135deg, #D4A017, #b8880f)',
                    }}
                  >
                    <item.icon size={22} />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 premium-card rounded-2xl overflow-hidden">

                  {/* Card header */}
                  <div
                    className="p-6 text-white relative overflow-hidden"
                    style={{
                      background: item.accentIsTeal
                        ? 'linear-gradient(135deg, #0F766E, #0c6259)'
                        : 'linear-gradient(135deg, #D4A017, #b8880f)',
                    }}
                  >
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white opacity-5 -translate-y-8 translate-x-8 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white opacity-5 translate-y-6 -translate-x-6 pointer-events-none" />

                    <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div>
                        <h3 className="font-black text-xl">{item.role}</h3>
                        <p className="text-white/85 font-semibold mt-0.5">{item.company}</p>
                        <div className="flex flex-wrap gap-3 mt-2 text-white/70 text-sm">
                          <span className="flex items-center gap-1">
                            <FiCalendar size={12} />
                            {item.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <FiMapPin size={12} />
                            {item.location}
                          </span>
                        </div>
                      </div>
                      <span className="shrink-0 self-start px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold backdrop-blur-sm">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-7">
                    <p className="text-slate-600 leading-relaxed mb-6">{item.description}</p>

                    {/* Points */}
                    <div className="space-y-2.5 mb-6">
                      {item.points.map((pt, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <FiCheckCircle
                            size={15}
                            className="mt-0.5 shrink-0"
                            style={{ color: item.accentIsTeal ? '#0F766E' : '#D4A017' }}
                          />
                          <p className="text-slate-600 text-sm leading-relaxed">{pt}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full font-semibold"
                          style={
                            item.accentIsTeal
                              ? { background: 'rgba(15,118,110,0.08)', color: '#0F766E', border: '1px solid rgba(15,118,110,0.2)' }
                              : { background: 'rgba(212,160,23,0.1)', color: '#b8880f', border: '1px solid rgba(212,160,23,0.25)' }
                          }
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className="mt-10 rounded-2xl p-7 text-center"
            style={{ background: 'rgba(15,118,110,0.04)', border: '1px solid rgba(15,118,110,0.14)' }}
          >
            <p className="text-2xl mb-1">🚀</p>
            <h3 className="font-bold text-slate-800 text-lg mb-2">Open to New Opportunities</h3>
            <p className="text-slate-500 text-sm mb-5 max-w-md mx-auto">
              Actively seeking internships, full-time roles, and freelance work in web development,
              data analytics, and machine learning.
            </p>
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-primary inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
