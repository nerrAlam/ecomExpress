"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
// all the imports here
const mongoose_1 = require("mongoose");
// varient schema
const varientSchema = new mongoose_1.Schema({
    type: {
        type: String,
        requried: [true, 'Product varient type is required.'],
        trim: true,
    },
    value: {
        type: String,
        required: [true, 'Product varient value is required.'],
        trim: true,
    },
});
// inventory schema
const inventorySchema = new mongoose_1.Schema({
    quantity: {
        type: Number,
        required: [true, 'Product quantity is required.'],
    },
    inStock: {
        type: Boolean,
        default: true,
    }
});
// proudct schema
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required.'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Product description is required.'],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'Product price is required.'],
    },
    category: {
        type: String,
        required: [true, 'Product category is required.'],
        trim: true,
    },
    tags: [
        {
            type: String,
            required: [true, 'Product tag is required.'],
            trim: true,
        }
    ],
    variants: {
        type: [varientSchema],
        required: [true, 'Product varient is required.'],
    },
    inventory: {
        type: inventorySchema,
        required: [true, 'Product inventory description is required.'],
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
});
// create product model and export
exports.Product = (0, mongoose_1.model)('Product', productSchema);
