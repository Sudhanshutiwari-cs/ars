'use client'

import { useState } from 'react'
import { CheckCircle2, Mail, Send } from 'lucide-react'

export function BlogNewsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubscribed(true)
    }, 700)
  }

  return (
    <section className="bg-white py-14 font-alt md:py-20">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-[#081733] p-8 text-white shadow-2xl md:p-14">
          <div aria-hidden="true" className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-green/20 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-green ring-1 ring-white/15">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              Automotive Pulse
            </span>

            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Stay in the Driver’s Seat with Weekly Insights
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
              Subscribe to get curated analysis on India’s EV ecosystem, new car release teardowns,
              maintenance masterclasses, and dealership announcements directly in your inbox.
            </p>

            {subscribed ? (
              <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-emerald-950/80 px-6 py-3 text-sm font-semibold text-emerald-300 ring-1 ring-emerald-500/50">
                <CheckCircle2 className="h-5 w-5 text-brand-green" />
                <span>You’re subscribed! Welcome to the ARS Mobility community.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-sm text-white placeholder-white/50 outline-none backdrop-blur-md transition-all focus:border-brand-green focus:bg-white/15"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0b1a36] shadow-lg transition-transform hover:scale-105 hover:bg-white disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}

            <p className="mt-4 text-[11px] text-white/50">
              Zero spam. Unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
