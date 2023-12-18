
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth, {NextAuthOptions} from "next-auth"
// import {users} from "../../../helpers/constants"
import user from "@/models/User"

export const authOptions = {
    // session:{
    //     maxAge : 85000,
    //     strategy: 'jwt'
    // },
    // callbacks: {
    //     async jwt({token,user}){
    //         if(user){
    //             token.id = user.token
    //             token.data = user
    //         }
    //         return token
    //     },
    //     async session({session,token,user}){
    //         const userInfo = token?.data?.data
    //         session.user = userInfo
    //         session.token = userInfo.token
    //         return session
    //     }
    // },
    // pages:{
    //     signIn :"/api/auth/signin"
    // },
    // // secret:process.env.NEXTAUTH_SECRET,
    providers:[
        GithubProvider({
            profile(profile){
                console.log("Profil Github :",profile)

                let userRole = "Github User"
                if(profile?.email == "maradona@gmail.com") userRole = "admin"
                
                return {
                    ...profile,
                    role: userRole
                }
            },
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_Secret,
        }),
        CredentialsProvider({
            name: "creds",
            credentials: {
                email: {label:"Email", type:"text", placeholder:"Enter email..."},
                password: {label:"Password", type:"password", placeholder:"Enter password..."}
            },
            async authorize(credentials){
                if(!credentials || !credentials.email || !credentials.password) return null
                const user = await user.find(item => item.email === credentials.email)
                if(user?.password === credentials.password) return user
                return null



                // const Options = {
                //     method: "POST",
                //     headers: { "Content-Type":"application/json" },
                //     body: JSON.stringify({
                //         email: credentials.email,
                //         password: credentials.password
                //     })
                // }
                // const response = await fetch("http://localhost:3000/api/user/login",Options)
                // const json = await response.json()

                // if(!json.state) throw new Error(json.message)
                // console.log(json)
                // return json
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}
