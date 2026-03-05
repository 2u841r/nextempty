import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  console.log("Proxy hit:", request.nextUrl.pathname);

  return NextResponse.next();
}