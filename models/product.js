import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema = new Schema({
name: {
    type: String,
    required: true
},
description: {
    type: String,
    required: true
},
price: {
    type: Number,
    required: true,
    min: 1
},
category: {
       type: String,
    required: true
},
inStock: {
    type: Boolean,
    default: true
},
tags: {
    type: [String]
},
createdAt: {
 type: Date,
 default: new Date()
 
}
})

const Product = mongoose.model('Product', productSchema);
export default Product;