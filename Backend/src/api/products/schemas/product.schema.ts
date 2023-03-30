import * as mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    quantity: Number,
    description: String,
})