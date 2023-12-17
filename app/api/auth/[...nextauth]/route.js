
import NextAuth from "next-auth"
import { NextResponse } from "next/server"

const handler = NextAuth()
export { handler as GET, handler as POST}
