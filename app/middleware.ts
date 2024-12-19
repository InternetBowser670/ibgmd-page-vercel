import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';

  const [subdomain] = host.split('.');
  if (subdomain && subdomain !== 'www' && subdomain !== 'example') {
    url.searchParams.set('subdomain', subdomain); // Pass subdomain as a query param
    url.pathname = `/tenant${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
