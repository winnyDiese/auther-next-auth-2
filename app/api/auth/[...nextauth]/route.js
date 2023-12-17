
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
            async authorize(credentials){
                if(!credentials || !credentials.email || !credentials.password) return null
                const user = users.find(item => item.email === credentials.email)
                if(user?.password === credentials.password) return null
                return null
            }
        })
    ]
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}
