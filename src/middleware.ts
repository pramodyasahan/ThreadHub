import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@/auth';

export async function middleware(req: NextRequest) {
    const session = await auth();

    console.log('🛂 Checking authentication status...');

    if (!session) {
        console.log('❌ No session found. Redirecting to login...');
        // return NextResponse.redirect(new URL('/api/auth/signin', req.url))
        return NextResponse.next();
    }

    if (session.user?.email && session.user?.email.includes('@github.com')) {
        console.log('Req', JSON.stringify(req));
        console.log('✅ Authenticated via GitHub:', session.user?.email);
    } else {
        console.log('🔐 Authenticated user:', session.user?.email);
    }

    return NextResponse.next();
}
