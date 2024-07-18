"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
// all the imports here
const mongoose_1 = require("mongoose");
// order schema
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, 'User email address is required.'],
        trim: true,
    },
    productId: {
        type: String,
        required: [true, 'A valid product id is required.'],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'Exact product price is required.'],
    },
    quantity: {
        type: Number,
        required: [true, 'Product quantity is required.'],
        default: 1,
    }
});
// create order model and export
exports.Order = (0, mongoose_1.model)('Order', orderSchema);
