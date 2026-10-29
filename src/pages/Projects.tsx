import { useState } from 'react'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div className="min-h-screen pt-20">

      {/* ── Page hero ── */}
      <div className="relative overflow-hidden border-b border-white/[0.06]" style={{ backgroundColor: '#07070f' }}>
        <div className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(139,92,246,0.12) 0%, transparent 70%)' }} />
        <div className="wrap py-14 md:py-20 relative z-10">
          <p className="eyebrow">// my work</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Projects</h1>
          <p className="text-white/45 max-w-xl text-base leading-relaxed">
            Things I've built — from full-stack web apps to developer tools.
            Every project is a chance to learn something new.
          </p>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="wrap section">

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? 'text-white border border-violet-500/50'
                  : 'card text-white/50 hover:text-white hover:border-white/20 border border-transparent'
              }`}
              style={active === cat ? { background: 'linear-gradient(135deg,#7c3aed,#8b5cf6)' } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="card card-hover rounded-2xl overflow-hidden flex flex-col group"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {/* Coloured top strip */}
              <div className="h-1 bg-gradient-to-r from-violet-500 to-pink-500 opacity-50 group-hover:opacity-100 transition-opacity" />

              {/* Visual area */}
              <div className="relative h-36 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg,rgba(139,92,246,0.06),rgba(236,72,153,0.03))' }}>
                {project.featured && (
                  <span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/20">
                    Featured
                  </span>
                )}
                <span className="text-5xl font-black font-mono text-white/[0.06]">{project.title[0]}</span>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-white/90 group-hover:text-violet-300 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <span className="text-[10px] text-white/30 whitespace-nowrap pt-0.5 shrink-0">{project.category}</span>
                </div>

                <p className="text-sm text-white/50 leading-relaxed flex-1">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map(t => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-3 border-t border-white/[0.06]">
                  {project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors">
                      <Github size={13} /> Code
                    </a>
                  )}
                  {project.demo !== '#' && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-white/40 hover:text-violet-400 transition-colors">
                      <ExternalLink size={13} /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-white/25">No projects in this category yet.</div>
        )}
      </div>
    </div>
  )
}
