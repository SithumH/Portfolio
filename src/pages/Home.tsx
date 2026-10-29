import { ArrowRight, Github, Linkedin, Mail, Download, ChevronDown, ExternalLink, Package } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/projects'
import { skills } from '../data/skills'
import { products } from '../data/products'

/* ─── Typing code block ────────────────────── */
const CODE = [
  [{ t:'const ',         c:'text-violet-400/60' },{ t:'developer',     c:'text-violet-300' },{ t:' = {',          c:'text-white/40' }],
  [{ t:'  name',         c:'text-pink-300'      },{ t:': ',            c:'text-white/35'   },{ t:'"Sithum Himsara"', c:'text-yellow-200/80' },{ t:',', c:'text-white/35' }],
  [{ t:'  role',         c:'text-pink-300'      },{ t:': ',            c:'text-white/35'   },{ t:'"Full Stack Dev"',  c:'text-yellow-200/80' },{ t:',', c:'text-white/35' }],
  [{ t:'  stack',        c:'text-pink-300'      },{ t:': [',           c:'text-white/40'   }],
  [{ t:'    "React"',    c:'text-yellow-200/80' },{ t:', "TypeScript"', c:'text-yellow-200/80' },{ t:',', c:'text-white/35' }],
  [{ t:'    "Node.js"',  c:'text-yellow-200/80' },{ t:', "Supabase"',   c:'text-yellow-200/80' },{ t:',', c:'text-white/35' }],
  [{ t:'  ],',           c:'text-white/40'      }],
  [{ t:'  openToWork',   c:'text-pink-300'      },{ t:': ',            c:'text-white/35'   },{ t:'true',           c:'text-violet-300'    },{ t:',', c:'text-white/35' }],
  [{ t:'}',              c:'text-white/40'      }],
]

function CodeBlock() {
  const [vis,   setVis]   = useState(0)
  const [blink, setBlink] = useState(true)
  useEffect(() => { if (vis < CODE.length) { const t = setTimeout(() => setVis(v => v+1), 130); return () => clearTimeout(t) } }, [vis])
  useEffect(() => { const t = setInterval(() => setBlink(b => !b), 520); return () => clearInterval(t) }, [])

  return (
    <div className="card rounded-2xl overflow-hidden">
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06]" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <span className="w-3 h-3 rounded-full bg-red-500/50" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <span className="w-3 h-3 rounded-full bg-green-500/50" />
        <span className="ml-auto text-xs text-white/20 font-mono">developer.ts</span>
      </div>
      <div className="p-5 font-mono text-sm leading-[1.85] min-h-[240px]">
        {CODE.slice(0, vis).map((line, i) => (
          <div key={i} className="flex">
            <span className="select-none text-white/15 w-5 shrink-0 text-right mr-4 text-xs pt-px">{i+1}</span>
            <span>{line.map((tok, j) => <span key={j} className={tok.c}>{tok.t}</span>)}</span>
          </div>
        ))}
        <div className="flex">
          <span className="select-none text-white/15 w-5 shrink-0 text-right mr-4 text-xs pt-px">{vis+1}</span>
          <span className={`text-violet-400 transition-opacity ${blink ? 'opacity-100':'opacity-0'}`}>▋</span>
        </div>
      </div>
    </div>
  )
}

/* ─── Skill pills marquee ───────────────────── */
function SkillPills() {
  const a = skills.slice(0, 8), b = skills.slice(8, 16)
  return (
    <div className="space-y-3 select-none overflow-hidden py-1">
      <div className="flex gap-2" style={{ animation: 'marquee 28s linear infinite' }}>
        {[...a,...a].map((s,i) => <span key={i} className="badge whitespace-nowrap">{s.name}</span>)}
      </div>
      <div className="flex gap-2" style={{ animation: 'marquee-rev 32s linear infinite' }}>
        {[...b,...b].map((s,i) => <span key={i} className="badge whitespace-nowrap">{s.name}</span>)}
      </div>
    </div>
  )
}

/* ─── Fade-up on scroll ─────────────────────── */
function FadeUp({ children, delay=0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setShow(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
      {children}
    </div>
  )
}

/* ─── Section header ────────────────────────── */
function SectionHead({ eyebrow, title, action }: { eyebrow:string; title:string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10 md:mb-12">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-black text-white">{title}</h2>
      </div>
      {action}
    </div>
  )
}

/* ═══════════════════════════════════════════ */
export default function Home() {
  const featured = projects.filter(p => p.featured).slice(0, 3)
  const product  = products[0]

  return (
    <div className="min-h-screen">

      {/* ── Hero ─────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 inset-x-0 h-[500px]"
            style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,0.13) 0%, transparent 70%)' }} />
          <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full blur-3xl"
            style={{ background: 'rgba(139,92,246,0.05)' }} />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl"
            style={{ background: 'rgba(236,72,153,0.04)' }} />
        </div>

        <div className="wrap relative z-10 pt-24 pb-16 grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left */}
          <div className="space-y-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-violet-500 to-transparent" />
              <span className="text-violet-400 font-mono text-xs tracking-widest uppercase">Full Stack Developer</span>
            </div>

            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight">
              Hi, I'm <span className="grad">Sithum</span>
              <br /><span className="text-white/90">Himsara.</span>
            </h1>

            <p className="text-white/50 text-lg leading-relaxed max-w-[460px]">
              I craft modern web apps and developer tools — focused on
              clean code, performance, and beautiful interfaces.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link to="/projects" className="btn-primary group">
                View Projects <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <Download size={15} /> Resume
              </a>
            </div>

            <div className="flex items-center gap-3">
              {[
                { href:'https://github.com/sithum-himsara',    icon:Github,   label:'GitHub'   },
                { href:'https://linkedin.com/in/sithum-himsara',icon:Linkedin, label:'LinkedIn' },
                { href:'mailto:sithum@example.com',            icon:Mail,     label:'Email'    },
              ].map(({ href, icon:Icon, label }) => (
                <a key={label} href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 rounded-xl card card-hover flex items-center justify-center text-white/40 hover:text-violet-400 transition-all">
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="hidden lg:block">
            <CodeBlock />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 animate-bounce">
          <ChevronDown size={22} />
        </div>
      </section>

      {/* ── Skills strip ─────────────────────── */}
      <div className="border-y border-white/[0.05] py-8 overflow-hidden" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <SkillPills />
      </div>

      {/* ── Featured projects ─────────────────── */}
      <section className="section">
        <div className="wrap">
          <FadeUp>
            <SectionHead eyebrow="// what I've built" title="Featured Projects"
              action={
                <Link to="/projects" className="hidden sm:inline-flex items-center gap-1.5 text-sm text-white/35 hover:text-violet-400 transition-colors">
                  All projects <ArrowRight size={13} />
                </Link>
              }
            />
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((project, i) => (
              <FadeUp key={project.id} delay={i * 70}>
                <div className="card card-hover rounded-2xl overflow-hidden flex flex-col h-full group">
                  <div className="h-1 bg-gradient-to-r from-violet-500 to-pink-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="h-36 flex items-center justify-center relative"
                    style={{ background: 'linear-gradient(135deg,rgba(139,92,246,0.06),rgba(236,72,153,0.03))' }}>
                    {project.featured && (
                      <span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/20">Featured</span>
                    )}
                    <span className="text-5xl font-black font-mono text-white/[0.06]">{project.title[0]}</span>
                  </div>
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-white/90 group-hover:text-violet-300 transition-colors leading-tight">{project.title}</h3>
                      <span className="text-[10px] text-white/30 whitespace-nowrap pt-0.5 shrink-0">{project.category}</span>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0,4).map(t => <span key={t} className="badge">{t}</span>)}
                    </div>
                    <div className="flex items-center gap-4 pt-3 border-t border-white/[0.06]">
                      {project.github !== '#' && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-white/35 hover:text-white transition-colors">
                          <Github size={13} /> Code
                        </a>
                      )}
                      {project.demo !== '#' && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-white/35 hover:text-violet-400 transition-colors">
                          <ExternalLink size={13} /> Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <div className="mt-7 sm:hidden text-center">
            <Link to="/projects" className="text-sm text-violet-400 inline-flex items-center gap-1">
              All projects <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Product teaser ───────────────────── */}
      <section className="section" style={{ background: 'rgba(139,92,246,0.025)' }}>
        <div className="wrap">
          <FadeUp>
            <SectionHead eyebrow="// what I've shipped" title="My Products"
              action={
                <Link to="/products" className="hidden sm:inline-flex items-center gap-1.5 text-sm text-white/35 hover:text-violet-400 transition-colors">
                  See all <ArrowRight size={13} />
                </Link>
              }
            />
          </FadeUp>

          <FadeUp delay={80}>
            <Link to="/products" className="block group">
              <div className="card card-hover rounded-2xl p-6 sm:p-8 grid sm:grid-cols-2 gap-8 items-center">
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full card border-violet-500/20">
                    <Package size={12} className="text-violet-400" />
                    <span className="text-violet-400 font-medium">{product?.category}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-violet-300 transition-colors mb-2">{product?.name}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{product?.tagline}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    {product?.features.slice(0,3).map(f => (
                      <div key={f} className="flex items-center gap-2 text-xs text-white/45">
                        <span className="w-1 h-1 rounded-full bg-pink-400 shrink-0" />{f}
                      </div>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400">
                    Explore &amp; Comment <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <div className="hidden sm:flex items-center justify-center h-44 rounded-xl"
                  style={{ background: 'linear-gradient(135deg,rgba(139,92,246,0.07),rgba(236,72,153,0.04))', border:'1px solid rgba(255,255,255,0.05)' }}>
                  <span className="text-7xl font-black font-mono text-white/[0.06] group-hover:text-white/[0.10] transition-colors">{product?.name[0]}</span>
                </div>
              </div>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── About snippet ────────────────────── */}
      <section className="section">
        <div className="wrap">
          <FadeUp>
            <div className="card rounded-2xl p-6 sm:p-8 grid sm:grid-cols-3 gap-8 items-center">
              <div className="flex sm:flex-col items-center sm:items-start gap-5">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-black text-violet-200 shrink-0"
                  style={{ background:'linear-gradient(135deg,rgba(139,92,246,0.3),rgba(236,72,153,0.2))', border:'1px solid rgba(139,92,246,0.25)' }}>
                  SH
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Sithum Himsara</p>
                  <p className="text-white/40 text-sm">Sri Lanka 🇱🇰</p>
                  <p className="text-violet-400 text-xs mt-1 font-mono">BSc IT · UoM</p>
                </div>
              </div>

              <div className="sm:col-span-2 space-y-4">
                <p className="text-white/55 text-sm leading-relaxed">
                  Passionate full-stack developer at the University of Moratuwa. I build fast,
                  accessible, and beautiful things for the web.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {[{n:'3+',l:'Projects'},{n:'1',l:'Product'},{n:'6mo',l:'Experience'}].map(({n,l}) => (
                    <div key={l} className="rounded-xl py-3 px-4 text-center"
                      style={{ background:'rgba(139,92,246,0.08)', border:'1px solid rgba(139,92,246,0.12)' }}>
                      <p className="text-xl font-black grad">{n}</p>
                      <p className="text-white/35 text-xs mt-0.5">{l}</p>
                    </div>
                  ))}
                </div>
                <Link to="/about" className="inline-flex items-center gap-1.5 text-sm text-violet-400 hover:text-violet-300 font-medium transition-colors">
                  Full story &amp; contact <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA banner ───────────────────────── */}
      <section className="section">
        <div className="wrap">
          <FadeUp>
            <div className="relative rounded-2xl overflow-hidden text-center px-6 py-16">
              <div className="absolute inset-0 rounded-2xl"
                style={{ background:'linear-gradient(135deg,rgba(139,92,246,0.1),rgba(236,72,153,0.07))', border:'1px solid rgba(139,92,246,0.18)' }} />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px"
                style={{ background:'linear-gradient(90deg,transparent,rgba(139,92,246,0.6),transparent)' }} />
              <div className="relative z-10 space-y-5 max-w-lg mx-auto">
                <h2 className="text-3xl md:text-4xl font-black text-white">
                  Let's build something <span className="grad">great</span> together
                </h2>
                <p className="text-white/40 text-sm">
                  Open to internships, freelance projects, and full-time opportunities.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a href="mailto:sithum@example.com" className="btn-primary">
                    <Mail size={15} /> Get In Touch
                  </a>
                  <Link to="/about" className="btn-ghost">About Me</Link>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

    </div>
  )
}
