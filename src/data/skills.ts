export interface Skill {
  name: string
  level: number // 0-100
  category: string
  icon?: string
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 85, category: 'Frontend' },
  { name: 'TypeScript', level: 80, category: 'Frontend' },
  { name: 'JavaScript', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 88, category: 'Frontend' },
  { name: 'HTML/CSS', level: 92, category: 'Frontend' },
  // Backend
  { name: 'Node.js', level: 78, category: 'Backend' },
  { name: 'Python', level: 75, category: 'Backend' },
  { name: 'Java', level: 70, category: 'Backend' },
  { name: 'REST APIs', level: 82, category: 'Backend' },
  // Database
  { name: 'PostgreSQL', level: 72, category: 'Database' },
  { name: 'MySQL', level: 75, category: 'Database' },
  { name: 'Supabase', level: 80, category: 'Database' },
  // Tools
  { name: 'Git & GitHub', level: 88, category: 'Tools' },
  { name: 'VS Code', level: 95, category: 'Tools' },
  { name: 'Docker', level: 60, category: 'Tools' },
  { name: 'Linux', level: 70, category: 'Tools' },
]

export const skillCategories = ['Frontend', 'Backend', 'Database', 'Tools']
