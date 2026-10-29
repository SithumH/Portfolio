import { useState, useEffect } from 'react'
import { MessageCircle, Send, User } from 'lucide-react'

interface Comment {
  id: number
  name: string
  message: string
  created_at: string
  product_id: string
}

export default function Comments({ productId }: { productId: string }) {
  const [comments,   setComments]   = useState<Comment[]>([])
  const [name,       setName]       = useState('')
  const [message,    setMessage]    = useState('')
  const [loading,    setLoading]    = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error,      setError]      = useState('')

  useEffect(() => { loadComments() }, [productId])

  async function loadComments() {
    setLoading(true)
    try {
      const { supabase } = await import('../lib/supabase')
      const { data, error } = await supabase
        .from('comments').select('*')
        .eq('product_id', productId)
        .order('created_at', { ascending: false })
      if (error) throw error
      setComments(data || [])
    } catch (err) {
      console.error('Failed to load comments:', err)
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return
    setSubmitting(true); setError('')
    try {
      const { supabase } = await import('../lib/supabase')
      const { error } = await supabase.from('comments')
        .insert([{ name: name.trim(), message: message.trim(), product_id: productId }])
      if (error) throw error
      setName(''); setMessage('')
      await loadComments()
    } catch {
      setError('Failed to post. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  function timeAgo(d: string) {
    const m = Math.floor((Date.now() - new Date(d).getTime()) / 60000)
    if (m < 1)  return 'just now'
    if (m < 60) return `${m}m ago`
    const h = Math.floor(m / 60)
    if (h < 24) return `${h}h ago`
    return `${Math.floor(h / 24)}d ago`
  }

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center gap-2">
        <MessageCircle size={18} className="text-violet-400" />
        <span className="font-bold text-white">Comments</span>
        {comments.length > 0 && (
          <span className="text-xs text-white/35 font-normal">({comments.length})</span>
        )}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3 rounded-xl p-4 sm:p-5"
        style={{ background: 'rgba(139,92,246,0.06)', border: '1px solid rgba(139,92,246,0.14)' }}>
        <p className="text-xs text-white/40 font-medium">Leave a comment</p>
        <input type="text" placeholder="Your name" value={name}
          onChange={e => setName(e.target.value)} maxLength={50} required className="inp" />
        <textarea placeholder="Share your thoughts about this product…"
          value={message} onChange={e => setMessage(e.target.value)}
          maxLength={500} required rows={3} className="inp resize-none" />
        {error && <p className="text-red-400 text-xs">{error}</p>}
        <button type="submit"
          disabled={submitting || !name.trim() || !message.trim()}
          className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:transform-none">
          <Send size={13} />
          {submitting ? 'Posting…' : 'Post Comment'}
        </button>
      </form>

      {/* List */}
      <div className="space-y-3">
        {loading ? (
          <p className="text-center py-8 text-white/25 text-sm">Loading…</p>
        ) : comments.length === 0 ? (
          <p className="text-center py-8 text-white/25 text-sm">
            No comments yet — be the first!
          </p>
        ) : comments.map(c => (
          <div key={c.id} className="rounded-xl p-4 space-y-2"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(139,92,246,0.2)', border: '1px solid rgba(139,92,246,0.2)' }}>
                  <User size={13} className="text-violet-400" />
                </div>
                <span className="text-sm font-medium text-white">{c.name}</span>
              </div>
              <span className="text-xs text-white/25 shrink-0">{timeAgo(c.created_at)}</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed pl-9">{c.message}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
