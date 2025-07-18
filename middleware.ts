import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('Clerk-Proxy-Url', 'https://term.surf/bind')
  requestHeaders.set(
    'Clerk-Secret-Key',
    String(process.env.CLERK_SECRET_KEY),
  )
  const origin = [
    request.headers.get('x-forwarded-proto'),
    request.headers.get('x-forwarded-host'),
  ]
    .filter(x => x)
    .join('://')

  requestHeaders.set(
    'Origin',
    String(origin || process.env.CLERK_PROXY_ORIGIN),
  )

  const url = request.nextUrl.clone()
  url.protocol = 'https'
  url.hostname = 'frontend-api.clerk.dev'
  url.pathname = url.pathname.replace(/^\/bind/, '')

  return NextResponse.rewrite(url, {
    request: { headers: requestHeaders },
  })
}

export const config = {
  matcher: '/bind/:path*',
}
