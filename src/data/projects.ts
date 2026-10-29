export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tech: string[]
  github: string
  demo: string
  image: string
  featured: boolean
  category: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'SourceClip',
    description: 'A smart clipboard manager for developers with code snippet organization.',
    longDescription: 'SourceClip is a powerful clipboard manager built specifically for developers. Organize, search and sync your code snippets across sessions with syntax highlighting and smart categorization.',
    tech: ['Electron', 'React', 'TypeScript', 'SQLite'],
    github: 'https://github.com/sithum-himsara/sourceclip',
    demo: '#',
    image: '/images/sourceclip.png',
    featured: true,
    category: 'Desktop App',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'This very portfolio — built with React, TypeScript and Tailwind CSS.',
    longDescription: 'A modern, responsive portfolio website featuring smooth animations, a dark theme, project showcases and a real-time comments system powered by Supabase.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    github: 'https://github.com/sithum-himsara/portfolio',
    demo: '#',
    image: '/images/portfolio.png',
    featured: true,
    category: 'Web App',
  },
  {
    id: 3,
    title: 'Task Manager API',
    description: 'RESTful API for task management with JWT authentication.',
    longDescription: 'A robust REST API built with Node.js and Express, featuring JWT authentication, role-based access control, and PostgreSQL database integration.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    github: 'https://github.com/sithum-himsara/task-api',
    demo: '#',
    image: '/images/taskapi.png',
    featured: false,
    category: 'Backend',
  },
]
