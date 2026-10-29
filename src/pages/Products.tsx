import { useState } from 'react'
import { Download, Star, CheckCircle2, ChevronRight } from 'lucide-react'
import { products } from '../data/products'
import Comments from '../components/Comments'

export default function Products() {
  const [selected, setSelected] = useState(products[0])
  const [activeScreenshot, setActiveScreenshot] = useState(0)

  return (
    <div className="pt-24 pb-20 section-padding min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-primary-400 text-sm font-mono mb-2">// what I've shipped</p>
          <h1 className="text-5xl font-black text-white mb-4">My Products</h1>
          <p className="text-white/50 max-w-xl">
            Software I've built and released for real users. Not just side projects —
            actual products you can download and use today.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Product list sidebar */}
          <div className="lg:col-span-1 space-y-2">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => { setSelected(product); setActiveScreenshot(0) }}
                className={`w-full text-left p-4 rounded-xl transition-all flex items-center justify-between group ${
                  selected.id === product.id
                    ? 'bg-primary-600/20 border border-primary-500/30 glow-border'
                    : 'glass hover:bg-white/5'
                }`}
              >
                <div>
                  <div className="font-semibold text-white text-sm">{product.name}</div>
                  <div className="text-xs text-white/40 mt-0.5">{product.category}</div>
                </div>
                <ChevronRight
                  size={16}
                  className={`text-white/30 transition-transform ${
                    selected.id === product.id ? 'text-primary-400 rotate-90' : 'group-hover:translate-x-1'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Product detail */}
          <div className="lg:col-span-3 space-y-8">
            {/* Product hero */}
            <div className="glass rounded-2xl p-8">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-3xl font-black text-white">{selected.name}</h2>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-500/15 text-green-400 font-medium">
                      v{selected.version}
                    </span>
                  </div>
                  <p className="text-primary-400 font-medium">{selected.tagline}</p>
                </div>
                <a
                  href={selected.downloadUrl}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm transition-all whitespace-nowrap"
                >
                  <Download size={16} /> Download Free
                </a>
              </div>

              <p className="text-white/60 leading-relaxed mb-6">{selected.description}</p>

              {/* Platforms */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selected.platform.map((p) => (
                  <span key={p} className="text-xs px-3 py-1 rounded-lg glass text-white/60">
                    {p}
                  </span>
                ))}
              </div>

              {/* Screenshots */}
              {selected.screenshots.length > 0 && (
                <div className="space-y-3">
                  <div className="aspect-video rounded-xl bg-dark-700 border border-white/10 flex items-center justify-center overflow-hidden">
                    <div className="text-white/10 text-6xl font-black font-mono">
                      {selected.name[0]}
                    </div>
                  </div>
                  {selected.screenshots.length > 1 && (
                    <div className="flex gap-2">
                      {selected.screenshots.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveScreenshot(i)}
                          className={`w-16 h-10 rounded-lg border transition-all ${
                            activeScreenshot === i
                              ? 'border-primary-500 bg-primary-600/20'
                              : 'border-white/10 bg-white/5 hover:border-white/20'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Features */}
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <Star size={18} className="text-primary-400" />
                <h3 className="text-lg font-bold text-white">Key Features</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {selected.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-green-400 mt-0.5 shrink-0" />
                    <span className="text-white/70 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Comments */}
            <div className="glass rounded-2xl p-8">
              <Comments productId={selected.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
