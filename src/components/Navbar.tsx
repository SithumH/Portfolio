import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { path: '/',         label: 'Home'     },
  { path: '/projects', label: 'Projects' },
  { path: '/products', label: 'Products' },
  { path: '/about',    label: 'About'    },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setIsOpen(false) }, [location])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.06] shadow-[0_4px_32px_rgba(0,0,0,0.5)]"
           style={{ backgroundColor: '#060b14' }}
      >
        <div className="max-w-7xl mx-auto px-section">
          <div className="flex items-center justify-between h-16">

            {/* ── Logo ── */}
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
              {/* Hexagon-ish logo mark */}
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-[1px] rounded-lg border border-cyan-500/40 flex items-center justify-center">
                  <span className="text-cyan-400 font-black font-mono text-sm leading-none">S</span>
                </div>
              </div>
              <span className="font-bold text-base tracking-tight">
                <span className="gradient-text">Sithum</span>
                <span className="text-white/30">.dev</span>
              </span>
            </Link>

            {/* ── Desktop links ── */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      active
                        ? 'text-cyan-400'
                        : 'text-white/50 hover:text-white/90'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-px bg-cyan-400 rounded-full" />
                    )}
                  </Link>
                )
              })}

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 px-4 py-2 rounded-lg text-sm font-semibold border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
              >
                Resume
              </a>
            </div>

            {/* ── Mobile toggle ── */}
            <button
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-white/50 hover:text-white border border-white/[0.07] hover:border-white/20 transition-all"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

          </div>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-surface-950/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 glass-lg flex flex-col pt-20 pb-8 px-6 gap-1 transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navLinks.map((link) => {
            const active = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
                  active
                    ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {active && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />}
                {link.label}
              </Link>
            )
          })}

          <div className="mt-auto">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-3 rounded-xl text-sm font-semibold border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-all"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
