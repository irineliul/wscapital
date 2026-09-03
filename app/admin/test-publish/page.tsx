'use client'

import { useState } from 'react'
import { highLeverageForexArticle } from '@/components/articles/high-leverage-forex'

export default function TestPublishPage() {
  const [response, setResponse] = useState<unknown>(null)
  const [loading, setLoading] = useState(false)

  async function publishTestArticle() {
    setLoading(true)
    setResponse(null)

    try {
      const result = await fetch('/webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(highLeverageForexArticle),
      })

      const data: unknown = await result.json()
      setResponse(data)
    } catch (error) {
      setResponse({
        success: false,
        error: error instanceof Error ? error.message : 'Request failed',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background px-6 py-12 text-foreground">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <h1 className="text-2xl font-semibold">Temporary Article Test</h1>
        <button
          type="button"
          onClick={publishTestArticle}
          disabled={loading}
          className="w-fit rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? 'Publishing…' : 'Publish Test Article'}
        </button>
        {response !== null && (
          <pre className="overflow-x-auto rounded-md border border-border bg-muted p-4 font-mono text-sm leading-relaxed">
            {JSON.stringify(response, null, 2)}
          </pre>
        )}
      </div>
    </main>
  )
}
