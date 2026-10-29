import { MapPin, GraduationCap, Briefcase, Mail, Github, Linkedin, Download } from 'lucide-react'

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
    description: 'Developed REST APIs with Node.js, built React dashboards, and collaborated in an agile team environment.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Git'],
  },
]

export default function About() {
  return (
    <div className="pt-24 pb-20 section-padding min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary-400 text-sm font-mono mb-2">// about me</p>
          <h1 className="text-5xl font-black text-white mb-4">About & Contact</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Avatar */}
            <div className="glass rounded-2xl p-8 text-center space-y-4">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary-600 to-accent mx-auto flex items-center justify-center text-4xl font-black text-white">
                SH
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Sithum Himsara</h2>
                <p className="text-white/50 text-sm mt-1">Full Stack Developer</p>
                <div className="flex items-center justify-center gap-1.5 mt-2 text-white/40 text-xs">
                  <MapPin size={12} />
                  Sri Lanka
                </div>
              </div>

              {/* Contact links */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <a
                  href="mailto:sithum@example.com"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-all"
                >
                  <Mail size={15} className="text-primary-400" />
                  sithum@example.com
                </a>
                <a
                  href="https://github.com/sithum-himsara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-all"
                >
                  <Github size={15} className="text-primary-400" />
                  github.com/sithum-himsara
                </a>
                <a
                  href="https://linkedin.com/in/sithum-himsara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-all"
                >
                  <Linkedin size={15} className="text-primary-400" />
                  linkedin.com/in/sithum-himsara
                </a>
              </div>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white text-sm font-semibold transition-colors"
              >
                <Download size={15} /> Download CV
              </a>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-lg font-bold text-white mb-4">Who I am</h3>
              <div className="space-y-3 text-white/60 leading-relaxed text-sm">
                <p>
                  I'm a passionate full-stack developer from Sri Lanka currently pursuing my BSc in
                  Information Technology at the University of Moratuwa. I love building things that
                  live on the internet — from snappy web apps to useful developer tools.
                </p>
                <p>
                  My journey in coding started with curiosity and has grown into a deep passion for
                  creating software that's both functional and beautiful. I care deeply about clean
                  code, performance, and user experience.
                </p>
                <p>
                  When I'm not coding, I'm exploring new technologies, contributing to open source,
                  or sharing knowledge with the dev community.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap size={20} className="text-primary-400" />
                <h3 className="text-lg font-bold text-white">Education</h3>
              </div>
              <div className="space-y-5">
                {education.map((edu) => (
                  <div key={edu.degree} className="border-l-2 border-primary-600/50 pl-5 space-y-1">
                    <h4 className="font-semibold text-white">{edu.degree}</h4>
                    <p className="text-primary-400 text-sm">{edu.institution}</p>
                    <p className="text-white/40 text-xs">{edu.period}</p>
                    <p className="text-white/60 text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <Briefcase size={20} className="text-primary-400" />
                <h3 className="text-lg font-bold text-white">Experience</h3>
              </div>
              <div className="space-y-5">
                {experience.map((exp) => (
                  <div key={exp.role} className="border-l-2 border-accent/50 pl-5 space-y-2">
                    <h4 className="font-semibold text-white">{exp.role}</h4>
                    <p className="text-accent text-sm">{exp.company}</p>
                    <p className="text-white/40 text-xs">{exp.period}</p>
                    <p className="text-white/60 text-sm">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-md bg-accent/10 text-accent/80 font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-lg font-bold text-white mb-6">Send a Message</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  window.location.href = 'mailto:sithum@example.com'
                }}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary-500 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    required
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
                <textarea
                  placeholder="Your message..."
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-primary-600/25"
                >
                  <Mail size={16} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
