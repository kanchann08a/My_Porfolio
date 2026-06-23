import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiSend, FiMail, FiGithub, FiLinkedin, FiUser, FiMessageSquare, FiCheckCircle, FiMapPin } from 'react-icons/fi';

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'nishad02004@gmail.com',
    href: 'mailto:nishad02004@gmail.com',
    teal: true,
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/kanchan-n-b160a3385',
    href: 'https://linkedin.com/in/kanchan-n-b160a3385',
    teal: false,
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/kanchann08a',
    href: 'https://github.com/kanchann08a',
    teal: true,
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Navi Mumbai, India',
    href: '#',
    teal: false,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        'service_y32x56s',
        'template_xmcg8k7',
        {
          from_name:  formData.name,
          from_email: formData.email,
          subject:    formData.subject,
          message:    formData.message,
        },
        'ROcq5V16Z0yb1WQN_'
      );
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero CTA Header */}
        <div className="text-center mb-16">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title" style={{ color: '#0F172A' }}>
            Let's Build Something{' '}
            <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto text-lg leading-relaxed">
            Have a project in mind, an opportunity to share, or just want to say hello?
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start max-w-6xl mx-auto">

          {/* Left: Contact info */}
          <div className="lg:col-span-2 space-y-4">

            {/* Intro card */}
            <div
              className="rounded-2xl p-7"
              style={{ background: 'linear-gradient(135deg, rgba(15,118,110,0.06), rgba(212,160,23,0.04))', border: '1px solid rgba(15,118,110,0.14)' }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-md text-white"
                style={{ background: 'linear-gradient(135deg, #0F766E, #0c6259)' }}
              >
                <FiMessageSquare size={24} />
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-2">Let's Work Together</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Whether it's web development, data analytics, or ML — I'm always open to
                new opportunities and interesting conversations.
              </p>
            </div>

            {/* Contact cards */}
            {contactInfo.map(({ icon: Icon, label, value, href, teal }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 premium-card rounded-xl p-4 group cursor-pointer hover:translate-x-1"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0 text-white"
                  style={{
                    background: teal
                      ? 'linear-gradient(135deg, #0F766E, #0c6259)'
                      : 'linear-gradient(135deg, #D4A017, #b8880f)',
                  }}
                >
                  <Icon size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">{label}</p>
                  <p className="text-sm text-slate-700 font-medium truncate">{value}</p>
                </div>
              </a>
            ))}

            {/* Response time note */}
            <div
              className="rounded-xl p-4 flex items-center gap-3"
              style={{ background: 'rgba(15,118,110,0.06)', border: '1px solid rgba(15,118,110,0.14)' }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <p className="text-sm text-slate-600 font-medium">Typically responds within 24 hours</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="premium-card rounded-2xl p-8">
              <h3 className="font-bold text-slate-800 text-xl mb-6">Send a Message</h3>

              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center py-14 text-center animate-scale-in">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ background: 'rgba(15,118,110,0.08)', border: '2px solid rgba(15,118,110,0.3)' }}
                  >
                    <FiCheckCircle size={28} style={{ color: '#0F766E' }} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">Message Sent! 🎉</h4>
                  <p className="text-slate-500 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Full Name
                      </label>
                      <div className="relative">
                        <FiUser size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          placeholder="Kanchan Nishad"
                          value={formData.name}
                          onChange={handleChange}
                          className="contact-input w-full pl-10 pr-4 py-3 rounded-xl text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <FiMail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="contact-input w-full pl-10 pr-4 py-3 rounded-xl text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="Project Collaboration / Job Opportunity / General Enquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      className="contact-input w-full px-4 py-3 rounded-xl text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Hi Kanchan, I'd love to connect about..."
                      value={formData.message}
                      onChange={handleChange}
                      className="contact-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-500 font-medium">
                      Something went wrong. Please try emailing directly at nishad02004@gmail.com
                    </p>
                  )}

                  <button
                    type="submit"
                    id="submit-contact"
                    disabled={status === 'sending'}
                    className="btn-primary w-full py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-70"
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
