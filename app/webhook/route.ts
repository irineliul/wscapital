import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    webhook: "OK",
    message: "WSCapital webhook is working",
  })
}

export async function POST() {
  return NextResponse.json({
    webhook: "OK",
    message: "POST received",
  })
}