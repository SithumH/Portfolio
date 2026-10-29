import { useState, useEffect } from 'react'
import { MessageCircle, Send, User } from 'lucide-react'

interface Comment {
  id: number
  name: string
  message: string
  created_at: string
  product_id: string
}

interface Props {
  productId: string
}

export default function Comments({ productId }: Props) {
  const [comments, setComments] = useState<Comment[]>([])
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    loadComments()
  }, [productId])

  async function loadComments() {
    setLoading(true)
    try {
      // Import supabase dynamically to avoid breaking if not configured yet
      const { supabase } = await import('../lib/supabase')
      const { data, error } = await supabase
        .from('comments')
        .select('*')
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

    setSubmitting(true)
    setError('')
    try {
      const { supabase } = await import('../lib/supabase')
      const { error } = await supabase.from('comments').insert([
        { name: name.trim(), message: message.trim(), product_id: productId },
      ])
      if (error) throw error
      setName('')
      setMessage('')
      await loadComments()
    } catch (err) {
      setError('Failed to post comment. Please try again.')
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  function timeAgo(dateStr: string) {
    const diff = Date.now() - new Date(dateStr).getTime()
    const mins = Math.floor(diff / 60000)
    if (mins < 1) return 'just now'
    if (mins < 60) return `${mins}m ago`
    const hrs = Math.floor(mins / 60)
    if (hrs < 24) return `${hrs}h ago`
    return `${Math.floor(hrs / 24)}d ago`
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-lg font-bold">
        <MessageCircle size={20} className="text-primary-400" />
        <span>Comments</span>
        {comments.length > 0 && (
          <span className="text-sm text-white/40 font-normal">({comments.length})</span>
        )}
      </div>

      {/* Comment form */}
      <form onSubmit={handleSubmit} className="glass rounded-xl p-5 space-y-4">
        <h4 className="text-sm font-medium text-white/60">Leave a comment</h4>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={50}
          required
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary-500 transition-colors"
        />
        <textarea
          placeholder="Share your thoughts about this product..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={500}
          required
          rows={3}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary-500 transition-colors resize-none"
        />
        {error && <p className="text-red-400 text-xs">{error}</p>}
        <button
          type="submit"
          disabled={submitting || !name.trim() || !message.trim()}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-600 hover:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors"
        >
          <Send size={14} />
          {submitting ? 'Posting...' : 'Post Comment'}
        </button>
      </form>

      {/* Comments list */}
      <div className="space-y-3">
        {loading ? (
          <div className="text-center py-8 text-white/30 text-sm">Loading comments...</div>
        ) : comments.length === 0 ? (
          <div className="text-center py-8 text-white/30 text-sm">
            No comments yet. Be the first to share your thoughts!
          </div>
        ) : (
          comments.map((c) => (
            <div key={c.id} className="glass rounded-xl p-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary-600/30 flex items-center justify-center">
                    <User size={14} className="text-primary-400" />
                  </div>
                  <span className="text-sm font-medium text-white">{c.name}</span>
                </div>
                <span className="text-xs text-white/30">{timeAgo(c.created_at)}</span>
              </div>
              <p className="text-sm text-white/70 leading-relaxed pl-9">{c.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
