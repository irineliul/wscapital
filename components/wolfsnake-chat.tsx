'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'

const whatsappGroupUrl = 'https://chat.whatsapp.com/Ltb2Fhx9dXL5VJCI0oexED'

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

const welcomeMessage: ChatMessage = {
  role: 'assistant',
  content: 'Hello, I am WolfSnake. What information can I help you with about WS Capital?',
}

export function WolfSnakeChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const content = input.trim()
    if (!content || loading) return

    const nextMessages = [...messages, { role: 'user' as const, content }]
    setMessages(nextMessages)
    setInput('')
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/wolfsnake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      })

      if (!response.ok || !response.body) throw new Error('Request failed')

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let answer = ''
      setMessages((current) => [...current, { role: 'assistant', content: '' }])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        answer += decoder.decode(value, { stream: true })
        setMessages((current) => {
          const updated = [...current]
          updated[updated.length - 1] = { role: 'assistant', content: answer }
          return updated
        })
      }
    } catch {
      setError('WolfSnake is temporarily unavailable. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {open && (
        <section
          aria-label="WolfSnake chat"
          className="mb-3 flex h-[min(32rem,calc(100vh-6rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/20"
        >
          <header className="flex items-center justify-between border-b border-border bg-primary px-4 py-3 text-primary-foreground">
            <div>
              <p className="font-semibold">WolfSnake</p>
              <p className="text-xs opacity-80">WS Capital assistant</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close WolfSnake">
              <X className="size-5" aria-hidden="true" />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto p-4" aria-live="polite">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[88%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                  message.role === 'user'
                    ? 'ml-auto bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground'
                }`}
              >
                {message.content || (loading && index === messages.length - 1 ? 'WolfSnake is thinking…' : '')}
              </div>
            ))}
            {error && <p className="text-xs text-destructive">{error}</p>}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2 border-t border-border p-3">
            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about WS Capital..."
              aria-label="Message WolfSnake"
              className="min-w-0 flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground disabled:opacity-50"
            >
              <Send className="size-4" aria-hidden="true" />
            </button>
          </form>
        </section>
      )}

      {!open && (
        <div className="flex items-center gap-3">
          <a
            href={whatsappGroupUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Join the WS Capital WhatsApp group"
            className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/25 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <MessageCircle className="size-6" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open WolfSnake chat"
            className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105"
          >
            <MessageCircle className="size-6" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  )
}
