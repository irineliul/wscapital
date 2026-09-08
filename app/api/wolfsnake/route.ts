import { gateway, streamText } from 'ai'
import { NextResponse } from 'next/server'

const systemPrompt = `You are WolfSnake, the official website assistant for WS Capital.

Scope: Answer only questions about the public content of https://wscapital.app, including its affiliate program, promotion methods, QR codes, trading tools, Pine Script/TradingView references, registration flow, commissions, and the information presented on the site.

Rules:
- Be concise, helpful, professional, and clear.
- Never invent policies, prices, guarantees, broker terms, performance results, or features not present on the website.
- Do not provide personalized financial, investment, tax, or legal advice.
- Never promise profits. Explain that trading involves risk and that examples or projections are not guaranteed returns.
- If asked about anything unrelated to WS Capital, say that you can only help with information about the WS Capital website.
- If the website does not provide enough information, say so and direct the visitor to the relevant page or registration form.
- Reply in the language used by the visitor. Support English and Romanian.

Website context:
WS Capital presents a free affiliate partnership program with personalized affiliate links, promotion through online communities and social media, offline QR promotion using business cards, posters, banners, phones, fitness studios, gyms, sports clubs, wellness centers, hotels, stores, and partners, plus references to TradingView Pine Script tools and AI-created trading resources. The site explains that trading carries risk and does not guarantee returns.`

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      messages?: Array<{ role: 'user' | 'assistant'; content: string }>
    }

    const messages = body.messages?.slice(-12) ?? []
    if (!messages.length || messages[messages.length - 1]?.role !== 'user') {
      return NextResponse.json({ error: 'A user message is required.' }, { status: 400 })
    }

    const result = streamText({
      model: gateway('google/gemini-3.8-flash'),
      system: systemPrompt,
      messages,
      maxOutputTokens: 500,
    })

    return result.toTextStreamResponse()
  } catch {
    return NextResponse.json(
      { error: 'WolfSnake is temporarily unavailable. Please try again.' },
      { status: 500 },
    )
  }
}
