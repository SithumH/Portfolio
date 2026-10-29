import { Github, ExternalLink } from 'lucide-react'
import type { Project } from '../data/projects'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="glass rounded-2xl overflow-hidden hover:glow-border transition-all duration-300 group flex flex-col">
      {/* Image placeholder */}
      <div className="h-48 bg-gradient-to-br from-primary-900/50 to-dark-700 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="text-white/20 text-4xl font-bold font-mono">{project.title[0]}</span>
        {project.featured && (
          <span className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full bg-primary-600/80 text-white font-medium">
            Featured
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1 gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/50 whitespace-nowrap">
            {project.category}
          </span>
        </div>

        <p className="text-white/60 text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-md bg-primary-600/15 text-primary-300 font-mono"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-2 border-t border-white/10">
          {project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
            >
              <Github size={15} /> Code
            </a>
          )}
          {project.demo !== '#' && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
            >
              <ExternalLink size={15} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
