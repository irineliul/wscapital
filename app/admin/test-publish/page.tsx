'use client'

import { useState } from 'react'

export default function TestPublishPage() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function publishArticle() {
    setLoading(true)
    setMessage('Publishing...')

    try {
      const response = await fetch('/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          slug: 'best-trading-affiliate-program',
          title:
            'Best Trading Affiliate Program: WS Capital Commissions, Country Rates and Qualified Investors',
          meta_title:
            'Best Trading Affiliate Program | WS Capital Commissions & Country Rates',
          meta_description:
            'Compare the best trading affiliate program factors and learn how WS Capital commissions, country rates, qualified investors and sub-affiliate earnings work.',
          published: true,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data?.error || 'Publishing failed')
      }

      setMessage(
        `Article published successfully! ID: ${data.id || 'saved'}`
      )
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold">
          WS Capital Article Publisher
        </h1>

        <p className="mt-3 text-muted-foreground">
          Publish the Best Trading Affiliate Program article to Supabase.
        </p>

        <button
          onClick={publishArticle}
          disabled={loading}
          className="mt-8 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground disabled:opacity-50"
        >
          {loading ? 'Publishing...' : 'Publish Article'}
        </button>

        {message && (
          <p className="mt-6 rounded-lg border border-border p-4">
            {message}
          </p>
        )}
      </div>
    </main>
  )
}