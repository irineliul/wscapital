import { NextRequest, NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    webhook: "OK",
    message: "WSCapital webhook is ready",
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    console.log("WEBHOOK RECEIVED:", body)

    return NextResponse.json({
      success: true,
      received: body,
    })
  } catch (error) {
    console.error("Webhook error:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Invalid JSON",
      },
      { status: 400 }
    )
  }
}