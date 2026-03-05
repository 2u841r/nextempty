import { NextRequest, NextResponse } from 'next/server';

export function proxy(_request: NextRequest) {
  return NextResponse.redirect('https://zubairiz.com', 307);
}