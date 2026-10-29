import { ArrowRight, Github, Linkedin, Mail, Download, ChevronDown, ExternalLink, Star, Package } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/projects'
import { skills } from '../data/skills'
import { products } from '../data/products'

/* ─── Typing animation for the code block ─────────────────── */
const codeLines = [
  { indent: 0, tokens: [{ t: 'const ', c: 'text-cyan-500/60' }, { t: 'developer', c: 'text-cyan-300' }, { t: ' = {', c: 'text-white/50' }] },
  { indent: 1, tokens: [{ t: 'name', c: 'text-emerald-400' }, { t: ': ', c: 'text-white/40' }, { t: '"Sithum Himsara"', c: 'text-yellow-300/90' }, { t: ',', c: 'text-white/40' }] },
  { indent: 1, tokens: [{ t: 'role', c: 'text-emerald-400' }, { t: ': ', c: 'text-white/40' }, { t: '"Full Stack Developer"', c: 'text-yellow-300/90' }, { t: ',', c: 'text-white/40' }] },
  { indent: 1, tokens: [{ t: 'stack', c: 'text-emerald-400' }, { t: ': [', c: 'text-white/50' }] },
  { indent: 2, tokens: [{ t: '"React"', c: 'text-yellow-300/90' }, { t: ', ', c: 'text-white/40' }, { t: '"TypeScript"', c: 'text-yellow-300/90' }, { t: ',', c: 'text-white/40' }] },
  { indent: 2, tokens: [{ t: '"Node.js"', c: 'text-yellow-300/90' }, { t: ', ', c: 'text-white/40' }, { t: '"Supabase"', c: 'text-yellow-300/90' }, { t: ',', c: 'text-white/40' }] },
  { indent: 1, tokens: [{ t: '],', c: 'text-white/50' }] },
  { indent: 1, tokens: [{ t: 'passion', c: 'text-emerald-400' }, { t: ': ', c: 'text-white/40' }, { t: '"Building great things"', c: 'text-yellow-300/90' }, { t: ',', c: 'text-white/40' }] },
  { indent: 1, tokens: [{ t: 'openToWork', c: 'text-emerald-400' }, { t: ': ', c: 'text-white/40' }, { t: 'true', c: 'text-cyan-400' }, { t: ',', c: 'text-white/40' }] },
  { indent: 0, tokens: [{ t: '}', c: 'text-white/50' }] },
]

function CodeBlock() {
  const [visible, setVisible] = useState(0)
  const [blink, setBlink]     = useState(true)

  useEffect(() => {
    if (visible < codeLines.length) {
      const t = setTimeout(() => setVisible(v => v + 1), 130)
      return () => clearTimeout(t)
    }
  }, [visible])

  useEffect(() => {
    const t = setInterval(() => setBlink(b => !b), 520)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="glass-lg rounded-2xl overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02]">
        <span className="w-3 h-3 rounded-full bg-red-500/50" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <span className="w-3 h-3 rounded-full bg-green-500/50" />
        <span className="ml-auto text-xs text-white/20 font-mono">developer.ts</span>
      </div>

      {/* Code */}
      <div className="p-5 font-mono text-sm leading-[1.8] min-h-[260px]">
        {codeLines.slice(0, visible).map((line, i) => (
          <div key={i} className="flex">
            <span className="select-none text-white/15 w-6 shrink-0 text-right mr-4 text-xs pt-[2px]">{i + 1}</span>
            <span style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
              {line.tokens.map((tok, j) => (
                <span key={j} className={tok.c}>{tok.t}</span>
              ))}
            </span>
          </div>
        ))}

        {/* Cursor line */}
        <div className="flex">
          <span className="select-none text-white/15 w-6 shrink-0 text-right mr-4 text-xs pt-[2px]">
            {visible + 1}
          </span>
          <span className={`text-cyan-400 ${blink ? 'opacity-100' : 'opacity-0'} transition-opacity`}>▋</span>
        </div>
      </div>
    </div>
  )
}

/* ─── Animated skill pill row ──────────────────────────────── */
function SkillPills() {
  const topRow    = skills.slice(0, 8)
  const bottomRow = skills.slice(8, 16)

  return (
    <div className="relative overflow-hidden py-1 space-y-3 select-none">
      {/* Row 1 — scrolls left */}
      <div className="flex gap-2 animate-[marquee_28s_linear_infinite]">
        {[...topRow, ...topRow].map((s, i) => (
          <span key={i} className="tag whitespace-nowrap">{s.name}</span>
        ))}
      </div>
      {/* Row 2 — scrolls right */}
      <div className="flex gap-2 animate-[marquee-reverse_32s_linear_infinite]">
        {[...bottomRow, ...bottomRow].map((s, i) => (
          <span key={i} className="tag whitespace-nowrap">{s.name}</span>
        ))}
      </div>
    </div>
  )
}

/* ─── Section header ───────────────────────────────────────── */
function SectionHeader({ eyebrow, title, action }: { eyebrow: string; title: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-14">
      <div>
        <p className="text-cyan-500 text-xs font-mono tracking-[0.2em] uppercase mb-2">{eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">{title}</h2>
      </div>
      {action}
    </div>
  )
}

/* ─── Intersection fade-up wrapper ────────────────────────── */
function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      {children}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════ */
export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3)
  const featuredProduct  = products[0]

  return (
    <div className="min-h-screen">

      {/* ╔══════════════════════════════════════╗ */}
      {/* ║              H E R O                ║ */}
      {/* ╚══════════════════════════════════════╝ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-hero-glow" />
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-cyan-500/[0.04] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/[0.04] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-section pt-24 pb-16 grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-cyan-500 to-transparent" />
              <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Full Stack Developer</span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight">
                Hi, I'm{' '}
                <span className="gradient-text">Sithum</span>
                <br />
                <span className="text-white/90">Himsara.</span>
              </h1>
            </div>

            {/* Bio */}
            <p className="text-white/50 text-lg leading-relaxed max-w-[480px]">
              I craft modern web apps and developer tools — focused on
              clean code, great performance, and beautiful interfaces.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white
                           bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-emerald-500
                           shadow-[0_0_24px_rgba(6,182,212,0.25)] hover:shadow-[0_0_32px_rgba(6,182,212,0.4)]
                           transition-all duration-300"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                           text-white/70 hover:text-white glass glass-hover transition-all duration-200"
              >
                <Download size={16} /> Resume
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                { href: 'https://github.com/sithum-himsara',   icon: Github,   label: 'GitHub'   },
                { href: 'https://linkedin.com/in/sithum-himsara', icon: Linkedin, label: 'LinkedIn' },
                { href: 'mailto:sithum@example.com',            icon: Mail,     label: 'Email'    },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl glass glass-hover flex items-center justify-center text-white/40 hover:text-cyan-400 transition-all"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — code animation */}
          <div className="hidden lg:block animate-[fadeIn_0.8s_ease_0.3s_both]">
            <CodeBlock />
          </div>
        </div>

        {/* Scroll nudge */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/20 animate-bounce">
          <ChevronDown size={22} />
        </div>
      </section>

      {/* ╔══════════════════════════════════════╗ */}
      {/* ║          S K I L L S  strip         ║ */}
      {/* ╚══════════════════════════════════════╝ */}
      <div className="border-y border-white/[0.05] bg-white/[0.015] py-8 overflow-hidden">
        <SkillPills />
      </div>

      {/* ╔══════════════════════════════════════╗ */}
      {/* ║     F E A T U R E D  P R O J E C T S║ */}
      {/* ╚══════════════════════════════════════╝ */}
      <section className="py-section px-section">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <SectionHeader
              eyebrow="// what I've built"
              title="Featured Projects"
              action={
                <Link
                  to="/projects"
                  className="hidden sm:inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-cyan-400 transition-colors"
                >
                  All projects <ArrowRight size={14} />
                </Link>
              }
            />
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProjects.map((project, i) => (
              <FadeUp key={project.id} delay={i * 80}>
                <div className="glass glass-hover rounded-2xl overflow-hidden flex flex-col h-full group">
                  {/* Colour band */}
                  <div className="h-1.5 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" />

                  {/* Image placeholder */}
                  <div className="h-40 flex items-center justify-center bg-gradient-to-br from-white/[0.02] to-white/[0.00] relative">
                    {project.featured && (
                      <span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/20 font-medium">
                        Featured
                      </span>
                    )}
                    <span className="text-5xl font-black font-mono text-white/[0.06]">{project.title[0]}</span>
                  </div>

                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-white/90 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                      <span className="text-[10px] text-white/30 whitespace-nowrap pt-0.5">{project.category}</span>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                    <div className="flex items-center gap-4 pt-3 border-t border-white/[0.06]">
                      {project.github !== '#' && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                           className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors">
                          <Github size={13} /> Code
                        </a>
                      )}
                      {project.demo !== '#' && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer"
                           className="flex items-center gap-1.5 text-xs text-white/40 hover:text-cyan-400 transition-colors">
                          <ExternalLink size={13} /> Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Mobile "view all" */}
          <div className="mt-8 sm:hidden text-center">
            <Link to="/projects" className="text-sm text-cyan-400 inline-flex items-center gap-1">
              All projects <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════╗ */}
      {/* ║       P R O D U C T  T E A S E R    ║ */}
      {/* ╚══════════════════════════════════════╝ */}
      <section className="py-section px-section">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <SectionHeader
              eyebrow="// what I've shipped"
              title="My Products"
              action={
                <Link
                  to="/products"
                  className="hidden sm:inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-cyan-400 transition-colors"
                >
                  See all <ArrowRight size={14} />
                </Link>
              }
            />
          </FadeUp>

          <FadeUp delay={80}>
            <Link to="/products" className="block group">
              <div className="glass glass-hover rounded-2xl p-6 sm:p-8 grid sm:grid-cols-2 gap-8 items-center">
                {/* Text */}
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full glass border-cyan-500/20">
                    <Package size={13} className="text-cyan-400" />
                    <span className="text-cyan-400 font-medium">{featuredProduct?.category ?? 'Developer Tool'}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {featuredProduct?.name}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">{featuredProduct?.tagline}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(featuredProduct?.features ?? []).slice(0, 3).map(f => (
                      <div key={f} className="flex items-center gap-1.5 text-xs text-white/50">
                        <span className="w-1 h-1 rounded-full bg-emerald-400" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400">
                    Explore &amp; Leave a Comment <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Visual placeholder */}
                <div className="hidden sm:flex items-center justify-center h-44 rounded-xl bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 border border-white/[0.05]">
                  <span className="text-7xl font-black font-mono text-white/[0.06] group-hover:text-white/[0.10] transition-colors">
                    {featuredProduct?.name?.[0]}
                  </span>
                </div>
              </div>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ╔══════════════════════════════════════╗ */}
      {/* ║     A B O U T  S N I P P E T        ║ */}
      {/* ╚══════════════════════════════════════╝ */}
      <section className="py-section px-section">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="glass rounded-2xl p-6 sm:p-10 grid sm:grid-cols-3 gap-8 items-center">

              {/* Avatar + name */}
              <div className="flex sm:flex-col items-center sm:items-start gap-5">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-emerald-500/20 border border-cyan-500/20 flex items-center justify-center text-2xl font-black text-cyan-300 shrink-0">
                  SH
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Sithum Himsara</p>
                  <p className="text-white/40 text-sm">Sri Lanka 🇱🇰</p>
                  <p className="text-cyan-400 text-xs mt-1 font-mono">BSc IT · UoM</p>
                </div>
              </div>

              {/* Bio */}
              <div className="sm:col-span-2 space-y-4">
                <p className="text-white/60 text-sm leading-relaxed">
                  Passionate full-stack developer pursuing a BSc in Information Technology
                  at the University of Moratuwa. I love building things that live on the
                  internet — fast, accessible, and beautiful.
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { n: '3+',  l: 'Projects'   },
                    { n: '1',   l: 'Product'     },
                    { n: '6mo', l: 'Experience'  },
                  ].map(({ n, l }) => (
                    <div key={l} className="glass rounded-xl py-3 px-4 text-center">
                      <p className="text-xl font-black gradient-text">{n}</p>
                      <p className="text-white/40 text-xs mt-0.5">{l}</p>
                    </div>
                  ))}
                </div>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Full story &amp; contact <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ╔══════════════════════════════════════╗ */}
      {/* ║         C T A  B A N N E R          ║ */}
      {/* ╚══════════════════════════════════════╝ */}
      <section className="py-section px-section">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="relative rounded-2xl overflow-hidden">
              {/* Glow bg */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-emerald-600/5 to-cyan-600/10 border border-cyan-500/15" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

              <div className="relative z-10 px-8 py-14 text-center space-y-6">
                <div className="flex justify-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white">
                  Let's build something{' '}
                  <span className="gradient-text">great</span> together
                </h2>
                <p className="text-white/40 max-w-md mx-auto">
                  Open to internships, freelance projects, and full-time opportunities.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="mailto:sithum@example.com"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white
                               bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-emerald-500
                               shadow-[0_0_24px_rgba(6,182,212,0.25)] hover:shadow-[0_0_32px_rgba(6,182,212,0.4)]
                               transition-all duration-300"
                  >
                    <Mail size={16} /> Get In Touch
                  </a>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm glass glass-hover text-white/70 hover:text-white transition-all"
                  >
                    About Me
                  </Link>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

    </div>
  )
}
