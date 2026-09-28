const videoSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>https://wscapital.app/</loc>
    <video:video>
      <video:thumbnail_loc>https://wscapital.app/images/trading-terminal.png</video:thumbnail_loc>
      <video:title><![CDATA[WS Capital Forex Trading Tools & Free Affiliate Program]]></video:title>
      <video:description><![CDATA[Discover WS Capital forex trading tools, TradingView resources, AI-powered Pine Script signals, copy trading and the free affiliate program with commissions of up to $500 per active investor.]]></video:description>
      <video:content_loc>https://wscapital.app/video/wscapital.mp4</video:content_loc>
      <video:duration>10</video:duration>
      <video:publication_date>2026-08-31T13:58:39Z</video:publication_date>
      <video:uploader info="https://wscapital.app/">WS Capital</video:uploader>
      <video:family_friendly>yes</video:family_friendly>
      <video:tag>Forex trading tools</video:tag>
      <video:tag>TradingView</video:tag>
      <video:tag>Pine Script</video:tag>
      <video:tag>Forex affiliate program</video:tag>
      <video:tag>Copy trading</video:tag>
      <video:tag>Trading tools</video:tag>
    </video:video>
  </url>
</urlset>`

export function GET() {
  return new Response(videoSitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
