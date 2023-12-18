
import { Schema, model, models } from "mongoose"

const userSchema = new Schema({
    name: String,
    email: String,
    password: String
},{timestamps: true})

const user = models.User || model("User", userSchema)
export default user
