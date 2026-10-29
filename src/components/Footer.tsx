import { Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const links = [
  { to: '/',         label: 'Home'     },
  { to: '/projects', label: 'Projects' },
  { to: '/products', label: 'Products' },
  { to: '/about',    label: 'About'    },
]

const socials = [
  { href: 'https://github.com/sithum-himsara',       icon: Github,   label: 'GitHub'   },
  { href: 'https://linkedin.com/in/sithum-himsara',  icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:sithum@example.com',               icon: Mail,     label: 'Email'    },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-section py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div className="space-y-3">
            <p className="font-bold text-white/90">
              <span className="gradient-text">Sithum</span>
              <span className="text-white/30">.dev</span>
            </p>
            <p className="text-xs text-white/35 leading-relaxed max-w-[220px]">
              Full Stack Developer from Sri Lanka, building modern web
              apps and developer tools.
            </p>
          </div>

          {/* Nav */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest">Pages</p>
            <div className="space-y-2">
              {links.map(l => (
                <Link key={l.to} to={l.to}
                  className="block text-sm text-white/40 hover:text-white/80 transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest">Contact</p>
            <div className="flex gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/35 hover:text-cyan-400 hover:border-cyan-500/20 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <span>&copy; {new Date().getFullYear()} Sithum Himsara. All rights reserved.</span>
          <span>Built with React · TypeScript · Tailwind</span>
        </div>
      </div>
    </footer>
  )
}
