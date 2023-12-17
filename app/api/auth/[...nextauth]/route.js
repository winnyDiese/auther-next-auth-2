
import NextAuth, {NextAuthOptions} from "next-auth"
import { NextResponse } from "next/server"

const authOptions = {
    providers:[
        CredentialsProvider({
            name: "creds",
            credentials: {
                email: {label:"Email", placeholder:"Enter email..."},
                password: {label:"Password", placeholder:"Enter password..."}
            }, 
            async authorize(credentials, req){

            }
        })
    ]
}
const handler = NextAuth()
export { handler as GET, handler as POST}
