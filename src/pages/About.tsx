import { MapPin, GraduationCap, Briefcase, Mail, Github, Linkedin, Download, Send } from 'lucide-react'

const education = [
  {
    degree: 'BSc (Hons) in Information Technology',
    institution: 'University of Moratuwa',
    period: '2022 – Present',
    description: 'Studying software engineering, data structures, algorithms, and system design.',
  },
]

const experience = [
  {
    role: 'Software Engineering Intern',
    company: 'Tech Company Pvt Ltd',
    period: 'Jun 2024 – Dec 2024',
    description: 'Developed REST APIs with Node.js, built React dashboards, and collaborated in an agile team.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Git'],
  },
]

const stats = [
  { n: '3+',  l: 'Projects'  },
  { n: '1',   l: 'Product'   },
  { n: '6mo', l: 'Intern'    },
]

export default function About() {
  return (
    <div className="min-h-screen pt-20">

      {/* ── Page hero ── */}
      <div className="relative overflow-hidden border-b border-white/[0.06]" style={{ backgroundColor: '#07070f' }}>
        <div className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(139,92,246,0.12) 0%, transparent 70%)' }} />
        <div className="wrap py-14 md:py-20 relative z-10">
          <p className="eyebrow">// about me</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">About &amp; Contact</h1>
          <p className="text-white/45 max-w-xl text-base leading-relaxed">
            A bit about who I am, what I've studied, and where I've worked.
          </p>
        </div>
      </div>

      <div className="wrap section">
        <div className="flex flex-col lg:flex-row gap-6 xl:gap-10">

          {/* ── Sidebar / profile card ── */}
          <div className="lg:w-64 xl:w-72 shrink-0 space-y-5">

            {/* Avatar card */}
            <div className="card rounded-2xl p-6 flex flex-col items-center text-center gap-4">
              <div className="w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-black text-white shrink-0"
                style={{ background: 'linear-gradient(135deg,rgba(139,92,246,0.35),rgba(236,72,153,0.25))', border: '1px solid rgba(139,92,246,0.25)' }}>
                SH
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Sithum Himsara</h2>
                <p className="text-white/45 text-sm mt-0.5">Full Stack Developer</p>
                <div className="flex items-center justify-center gap-1.5 mt-1.5 text-white/35 text-xs">
                  <MapPin size={11} /> Sri Lanka 🇱🇰
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 w-full">
                {stats.map(({ n, l }) => (
                  <div key={l} className="rounded-xl py-2.5 text-center"
                    style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.12)' }}>
                    <p className="text-base font-black grad">{n}</p>
                    <p className="text-white/35 text-[10px] mt-0.5">{l}</p>
                  </div>
                ))}
              </div>

              {/* Links */}
              <div className="w-full space-y-1.5 pt-1 border-t border-white/[0.07]">
                {[
                  { href: 'mailto:sithum@example.com',                    icon: Mail,    label: 'sithum@example.com'       },
                  { href: 'https://github.com/sithum-himsara',             icon: Github,  label: 'github.com/sithum-himsara' },
                  { href: 'https://linkedin.com/in/sithum-himsara',        icon: Linkedin,label: 'in/sithum-himsara'         },
                ].map(({ href, icon: Icon, label }) => (
                  <a key={label} href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs text-white/50 hover:text-white hover:bg-white/[0.04] transition-all truncate">
                    <Icon size={13} className="text-violet-400 shrink-0" />
                    <span className="truncate">{label}</span>
                  </a>
                ))}
              </div>

              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer"
                className="btn-primary w-full justify-center">
                <Download size={14} /> Download CV
              </a>
            </div>
          </div>

          {/* ── Main content ── */}
          <div className="flex-1 min-w-0 space-y-5">

            {/* Bio */}
            <div className="card rounded-2xl p-5 sm:p-7">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-4 rounded-full bg-gradient-to-b from-violet-500 to-pink-500" />
                Who I am
              </h3>
              <div className="space-y-3 text-white/55 text-sm leading-relaxed">
                <p>Passionate full-stack developer from Sri Lanka, currently pursuing a BSc in Information Technology at the University of Moratuwa. I love building things that live on the internet — fast, accessible, and beautiful.</p>
                <p>My journey in coding started with curiosity and grew into a deep passion for crafting software that's both functional and delightful. I care about clean code, great performance, and user experience.</p>
                <p>When I'm not coding, I'm exploring new technologies, contributing to open source, or sharing knowledge with the dev community.</p>
              </div>
            </div>

            {/* Education */}
            <div className="card rounded-2xl p-5 sm:p-7">
              <h3 className="font-bold text-white mb-5 flex items-center gap-2.5">
                <GraduationCap size={18} className="text-violet-400" /> Education
              </h3>
              <div className="space-y-5">
                {education.map(edu => (
                  <div key={edu.degree} className="relative pl-5 space-y-1"
                    style={{ borderLeft: '2px solid rgba(139,92,246,0.4)' }}>
                    <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-violet-500" />
                    <h4 className="font-semibold text-white text-sm">{edu.degree}</h4>
                    <p className="text-violet-400 text-sm">{edu.institution}</p>
                    <p className="text-white/35 text-xs">{edu.period}</p>
                    <p className="text-white/55 text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="card rounded-2xl p-5 sm:p-7">
              <h3 className="font-bold text-white mb-5 flex items-center gap-2.5">
                <Briefcase size={18} className="text-pink-400" /> Experience
              </h3>
              <div className="space-y-5">
                {experience.map(exp => (
                  <div key={exp.role} className="relative pl-5 space-y-2"
                    style={{ borderLeft: '2px solid rgba(236,72,153,0.4)' }}>
                    <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-pink-500" />
                    <h4 className="font-semibold text-white text-sm">{exp.role}</h4>
                    <p className="text-pink-400 text-sm">{exp.company}</p>
                    <p className="text-white/35 text-xs">{exp.period}</p>
                    <p className="text-white/55 text-sm">{exp.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map(t => (
                        <span key={t} className="text-xs px-2 py-0.5 rounded-md font-mono"
                          style={{ background: 'rgba(236,72,153,0.1)', color: 'rgba(244,114,182,0.85)', border: '1px solid rgba(236,72,153,0.15)' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className="card rounded-2xl p-5 sm:p-7">
              <h3 className="font-bold text-white mb-5 flex items-center gap-2.5">
                <Send size={16} className="text-violet-400" /> Send a Message
              </h3>
              <form
                onSubmit={e => { e.preventDefault(); window.location.href = 'mailto:sithum@example.com' }}
                className="space-y-3"
              >
                <div className="grid sm:grid-cols-2 gap-3">
                  <input type="text"  placeholder="Your name"  required className="inp" />
                  <input type="email" placeholder="Your email" required className="inp" />
                </div>
                <textarea placeholder="Your message..." required rows={4} className="inp resize-none" />
                <button type="submit" className="btn-primary">
                  <Send size={14} /> Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
