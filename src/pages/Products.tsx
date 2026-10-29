import { useState } from 'react'
import { Download, CheckCircle2, ChevronRight, Layers } from 'lucide-react'
import { products } from '../data/products'
import Comments from '../components/Comments'

export default function Products() {
  const [selected, setSelected] = useState(products[0])
  const [tab, setTab] = useState<'features' | 'comments'>('features')

  return (
    <div className="min-h-screen pt-20">

      {/* ── Page hero ── */}
      <div className="relative overflow-hidden border-b border-white/[0.06]" style={{ backgroundColor: '#07070f' }}>
        <div className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(139,92,246,0.12) 0%, transparent 70%)' }} />
        <div className="wrap py-14 md:py-20 relative z-10">
          <p className="eyebrow">// what I've shipped</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">My Products</h1>
          <p className="text-white/45 max-w-xl text-base leading-relaxed">
            Real software I've built and released — not just side projects.
            Download, try, and leave your thoughts below.
          </p>
        </div>
      </div>

      <div className="wrap section">
        <div className="flex flex-col lg:flex-row gap-6 xl:gap-8">

          {/* ── Sidebar ── */}
          <div className="lg:w-56 xl:w-64 shrink-0">
            <p className="text-xs text-white/30 uppercase tracking-widest font-semibold mb-3 px-1">Products</p>
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0">
              {products.map(p => (
                <button key={p.id}
                  onClick={() => { setSelected(p); setTab('features') }}
                  className={`shrink-0 lg:w-full text-left px-4 py-3 rounded-xl flex items-center justify-between gap-3 transition-all text-sm ${
                    selected.id === p.id
                      ? 'text-violet-300 border border-violet-500/30'
                      : 'card text-white/60 hover:text-white border border-transparent'
                  }`}
                  style={selected.id === p.id ? { background: 'rgba(139,92,246,0.12)' } : {}}
                >
                  <div className="min-w-0">
                    <div className="font-semibold truncate">{p.name}</div>
                    <div className="text-xs text-white/35 mt-0.5">{p.category}</div>
                  </div>
                  <ChevronRight size={14} className={`shrink-0 transition-transform ${selected.id === p.id ? 'text-violet-400 rotate-90 lg:rotate-0' : 'text-white/20'}`} />
                </button>
              ))}
            </div>
          </div>

          {/* ── Main detail ── */}
          <div className="flex-1 min-w-0 space-y-5">

            {/* Product header card */}
            <div className="card rounded-2xl overflow-hidden">
              {/* Top gradient strip */}
              <div className="h-1.5 bg-gradient-to-r from-violet-500 via-pink-500 to-violet-500" />

              <div className="p-5 sm:p-7">
                {/* Title row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1.5">
                      <h2 className="text-2xl sm:text-3xl font-black text-white">{selected.name}</h2>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/12 text-emerald-400 border border-emerald-500/20 font-medium">
                        v{selected.version}
                      </span>
                    </div>
                    <p className="text-violet-400 font-medium text-sm">{selected.tagline}</p>
                  </div>
                  <a href={selected.downloadUrl}
                    className="btn-primary shrink-0 whitespace-nowrap self-start">
                    <Download size={15} /> Free Download
                  </a>
                </div>

                <p className="text-white/55 text-sm leading-relaxed mb-5">{selected.description}</p>

                {/* Platform badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  <div className="flex items-center gap-1.5 text-xs text-white/35 mr-1">
                    <Layers size={12} /> Platforms:
                  </div>
                  {selected.platform.map(p => (
                    <span key={p} className="text-xs px-3 py-1 rounded-lg card text-white/55">{p}</span>
                  ))}
                </div>

                {/* Screenshot placeholder */}
                <div className="rounded-xl flex items-center justify-center aspect-video"
                  style={{ background: 'linear-gradient(135deg,rgba(139,92,246,0.07),rgba(236,72,153,0.04))', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="text-8xl font-black font-mono" style={{ color: 'rgba(255,255,255,0.05)' }}>
                    {selected.name[0]}
                  </span>
                </div>
              </div>
            </div>

            {/* ── Tabs: Features / Comments ── */}
            <div className="card rounded-2xl overflow-hidden">
              {/* Tab bar */}
              <div className="flex border-b border-white/[0.07]">
                {(['features', 'comments'] as const).map(t => (
                  <button key={t} onClick={() => setTab(t)}
                    className={`px-6 py-3.5 text-sm font-medium capitalize transition-all ${
                      tab === t
                        ? 'text-violet-400 border-b-2 border-violet-500'
                        : 'text-white/40 hover:text-white/70'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="p-5 sm:p-7">
                {tab === 'features' ? (
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selected.features.map(f => (
                      <div key={f} className="flex items-start gap-3">
                        <CheckCircle2 size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                        <span className="text-sm text-white/65">{f}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <Comments productId={selected.id} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
