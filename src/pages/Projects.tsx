import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <div className="pt-24 pb-20 section-padding min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-primary-400 text-sm font-mono mb-2">// my work</p>
          <h1 className="text-5xl font-black text-white mb-4">Projects</h1>
          <p className="text-white/50 max-w-xl">
            A collection of things I've built — from web apps to developer tools.
            Each project is a learning journey.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                active === cat
                  ? 'bg-primary-600 text-white'
                  : 'glass text-white/50 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-white/30">No projects in this category yet.</div>
        )}
      </div>
    </div>
  )
}
