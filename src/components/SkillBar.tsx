import { useEffect, useRef, useState } from 'react'
import type { Skill } from '../data/skills'

interface Props {
  skill: Skill
  delay?: number
}

export default function SkillBar({ skill, delay = 0 }: Props) {
  const [animated, setAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimated(true), delay)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-white/80 font-medium">{skill.name}</span>
        <span className="text-primary-400 font-mono text-xs">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary-600 to-accent transition-all duration-1000 ease-out"
          style={{ width: animated ? `${skill.level}%` : '0%' }}
        />
      </div>
    </div>
  )
}
