import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()

    const signature = request.headers.get("x-draftseo-signature")
    const secret = process.env.DRAFTSEO_WEBHOOK_SECRET

    if (!secret) {
      console.error("DRAFTSEO_WEBHOOK_SECRET is missing")
      return NextResponse.json(
        { error: "Webhook secret is not configured" },
        { status: 500 }
      )
    }

    if (!signature) {
      return NextResponse.json(
        { error: "Missing webhook signature" },
        { status: 401 }
      )
    }

    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(body)
      .digest("hex")

    const isValid = crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expectedSignature)
    )

    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 401 }
      )
    }

    const data = JSON.parse(body)

    console.log("DraftSEO webhook received:", data)

    // Aici putem procesa automat articolul publicat.
    // De exemplu:
    // - salva articolul în Supabase
    // - trimite notificare
    // - actualiza date SEO
    // - declanșa alte acțiuni

    return NextResponse.json({
      success: true,
      message: "Webhook received successfully",
    })
  } catch (error) {
    console.error("Webhook error:", error)

    return NextResponse.json(
      { error: "Invalid webhook request" },
      { status: 400 }
    )
  }
}