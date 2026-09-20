'use client'

import { MessageCircle } from 'lucide-react'

const whatsappGroupUrl = 'https://chat.whatsapp.com/Ltb2Fhx9dXL5VJCI0oexED'

export function WhatsAppButton() {
  return (
    <a
      href={whatsappGroupUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Join the WS Capital WhatsApp group"
      className="fixed bottom-4 right-4 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/25 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  )
}
