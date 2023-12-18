import { users } from "@/app/helpers/constants"
import  { NextResponse } from "next/server"

export async function GET(){
    
    const users = await users.find()
    return NextResponse.json({ message:"The users !", users })
}