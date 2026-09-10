"use client"

import { useState } from "react"

export default function PublishBestTradingAffiliatePage() {
  const [status, setStatus] = useState("")

  async function publishArticle() {
    setStatus("Publishing...")

    try {
      const response = await fetch(
        "/api/publish-best-trading-affiliate",
        {
          method: "POST",
        }
      )

      const data = await response.json()

      if (!response.ok) {
        setStatus(`Error: ${data.error}`)
        return
      }

      setStatus("Article published successfully!")
    } catch (error) {
      setStatus("Publishing failed.")
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-2xl border p-8">
        <h1 className="text-2xl font-bold mb-4">
          Publish Best Trading Affiliate Program
        </h1>

        <p className="mb-6 text-muted-foreground">
          Publish the article directly to Supabase blog_posts.
        </p>

        <button
          type="button"
          onClick={publishArticle}
          className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground cursor-pointer"
        >
          Publish Article
        </button>

        {status && (
          <p className="mt-6 font-medium">
            {status}
          </p>
        )}
      </div>
    </main>
  )
}