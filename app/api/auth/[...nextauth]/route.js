
import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth, {NextAuthOptions} from "next-auth"
import {users} from "../../../helpers/constants"

export const authOptions = {
    providers:[
        CredentialsProvider({
            name: "creds",
            credentials: {
                email: {label:"Email", type:"text", placeholder:"Enter email..."},
                password: {label:"Password", type:"password", placeholder:"Enter password..."}
            },
            async authorize(credentials){
                if(!credentials || !credentials.email || !credentials.password) return null
                const user = users.find(item => item.email === credentials.email)
                if(user?.password === credentials.password) return null
                return null
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}
