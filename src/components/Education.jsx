import { FiBookOpen, FiCalendar, FiMapPin, FiCode, FiCpu, FiDatabase } from 'react-icons/fi';

const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Computer Engineering',
    field: 'Computer Engineering',
    institution: 'SIES Graduate College Of Technology',
    location: 'Navi Mumbai, India',
    year: '2024-2028',
    status: 'Pursuing',
    cgpa: '8.3',

    description:
      'Pursuing a comprehensive Computer Engineering degree covering data structures, algorithms, operating systems, database management, computer networks, and modern software development practices. Actively building projects alongside academics.',
    highlights: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
      'Machine Learning',
      'Web Technologies',
      'Software Engineering',
    ],
    icon: FiCpu,
    gradient: 'from-blue-500 to-sky-600',
    accentColor: '#2563eb',
  },
];

const achievementCards = [
  { icon: FiCode, title: '130+ DSA Problems', desc: 'Consistent coding practice', color: 'from-blue-500 to-blue-700' },
  { icon: FiDatabase, title: '3+ Projects', desc: 'Full-stack & ML applications', color: 'from-sky-500 to-sky-700' },
  { icon: FiBookOpen, title: 'Internship', desc: 'Data Analytics at SIES GST', color: 'from-blue-600 to-sky-500' },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-hero-gradient dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag">Academic Background</span>
          <h2 className="section-title text-slate-800">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Building a strong foundation in computer science through academic rigor and practical application
          </p>
        </div>

        <div className="max-w-5xl mx-auto">

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-300 via-sky-400 to-blue-300 -translate-x-1/2" />

            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-12 group"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-10 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-sky-500 border-4 border-white shadow-lg z-10 group-hover:scale-125 transition-transform duration-300" />

                {/* Left: Institution Info */}
                <div className="glass-card rounded-2xl p-7 md:text-right hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-4 md:justify-end">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center shadow-md`}>
                      <edu.icon size={18} className="text-white" />
                    </div>
                    <div className="md:hidden">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full text-blue-700"
                        style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)' }}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                  <div className="hidden md:block mb-2">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full text-blue-700"
                      style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)' }}>
                      {edu.status}
                    </span>
                  </div>
                  <h3 className="font-black text-slate-800 text-xl">{edu.degree}</h3>
                  <p className="gradient-text font-bold text-base mt-1">{edu.field}</p>
                  <p className="text-slate-600 font-semibold text-sm mt-2">{edu.institution}</p>
                  <div className="flex items-center gap-4 mt-3 md:justify-end text-slate-500 text-sm">
                    <span className="flex items-center gap-1">
                      <FiCalendar size={13} />
                      {edu.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiMapPin size={13} />
                      {edu.location}
                    </span>
                  </div>
                  <p className="text-xs text-blue-600 font-semibold mt-2">{edu.gpa}</p>
                </div>

                {/* Right: Details */}
                <div className="glass-card rounded-2xl p-7 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-bold text-slate-800 mb-3">About the Program</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{edu.description}</p>
                  <h4 className="font-bold text-slate-800 mb-3">Key Subjects</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map(h => (
                      <span
                        key={h}
                        className="text-xs px-2.5 py-1 rounded-lg font-medium text-blue-700 bg-blue-50 border border-blue-100 hover:bg-blue-100 transition-colors duration-200"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievement Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6">
            {achievementCards.map(({ icon: Icon, title, desc, color }) => (
              <div
                key={title}
                className="stat-card rounded-2xl p-5 text-center hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={20} className="text-white" />
                </div>
                <p className="font-bold text-slate-800">{title}</p>
                <p className="text-sm text-slate-500 mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
