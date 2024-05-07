// middleware.ts
import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken'; // Assuming you're using jsonwebtoken

const secret = process.env.JWT_SECRET; // Replace with your actual secret key from environment variables

export function middleware(req) {
  // 1. Extract JWT token from request headers (modify for your chosen storage location)
  const token = req.headers.get('Authorization')?.split(' ')[1]; // Assuming token is in 'Authorization' header

  // 2. Check for presence of token
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    // 3. Verify token using secret key
    const decoded = verify(token, secret);

    // 4. Check if token expiration is valid (optional, depending on your needs)
    // if (decoded.exp < Date.now() / 1000) { // Check if token is expired
    //   return NextResponse.redirect(new URL('/login', req.url));
    // }

    // 5. If valid, allow access to the route
    return NextResponse.next();
  } catch (error) {
    // 6. Handle invalid or expired token
    console.error('Invalid or expired JWT token:', error);
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

// Apply middleware specifically to /dashboard route
export const config = {
  matcher: ['/dashboard'],
};
