// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { HostsEnum } from '@/app/types/hosts.types';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get('host');

  if (host === HostsEnum.GARAVITO) {
    url.pathname = `/garavito${url.pathname}`;
  } else if (host === HostsEnum.MISSING_GATE) {
    url.pathname = `/missinggate${url.pathname}`;
  }

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'], // Excluir rutas que no quieres procesar
};
