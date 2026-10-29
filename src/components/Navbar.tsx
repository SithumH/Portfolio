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
      <nav
        className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.07]"
        style={{ backgroundColor: '#07070f', boxShadow: '0 4px 32px rgba(0,0,0,0.6)' }}
      >
        <div className="wrap">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-[1px] rounded-lg border border-violet-500/40 flex items-center justify-center">
                  <span className="text-violet-400 font-black font-mono text-sm">S</span>
                </div>
              </div>
              <span className="font-bold text-base tracking-tight">
                <span className="grad">Sithum</span>
                <span className="text-white/30">.dev</span>
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(({ path, label }) => {
                const active = location.pathname === path
                return (
                  <Link key={path} to={path}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      active ? 'text-violet-400' : 'text-white/50 hover:text-white/90'
                    }`}
                  >
                    {label}
                    {active && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-px bg-violet-400 rounded-full" />
                    )}
                  </Link>
                )
              })}
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer"
                className="ml-3 px-4 py-2 rounded-lg text-sm font-semibold border border-violet-500/40 text-violet-400 hover:bg-violet-500/10 transition-all duration-200">
                Resume
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-white/50 hover:text-white border border-white/[0.08] hover:border-white/20 transition-all"
              onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-72 flex flex-col pt-20 pb-8 px-5 gap-1 transition-transform duration-300 border-l border-white/[0.07] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ backgroundColor: '#0d0d1a' }}>
          {navLinks.map(({ path, label }) => {
            const active = location.pathname === path
            return (
              <Link key={path} to={path}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
                  active ? 'text-violet-400 bg-violet-500/10 border border-violet-500/20' : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                }`}>
                {active && <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />}
                {label}
              </Link>
            )
          })}
          <div className="mt-auto">
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-3 rounded-xl text-sm font-semibold border border-violet-500/30 text-violet-400 hover:bg-violet-500/10 transition-all">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
