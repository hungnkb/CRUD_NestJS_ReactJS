import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    role: {
        type: String,
        default: 'user',
    },
})