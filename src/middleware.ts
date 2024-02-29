import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/* The matcher config allows full regex so matching like negative lookaheads or character matching is supported. 
/* An example of a negative lookahead to match all except specific paths can be seen here: 
*/
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

export function middleware(req: NextRequest) {
  const isMobile = req.headers.get("user-agent")?.match(/Mobile/i);

  if (isMobile) return NextResponse.rewrite(new URL("/mobile", req.nextUrl));

  return NextResponse.next();
}