"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidationSchema = void 0;
// all the imports here
const zod_1 = require("zod");
// create order validation schema
const createOrderValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email address").min(1).max(255),
    productId: zod_1.z.string().min(1).max(255),
    price: zod_1.z.number().positive("Price must be a positive number"),
    quantity: zod_1.z.number().int().min(1).default(1),
});
// all the exports here
exports.orderValidationSchema = {
    createOrderValidationSchema,
};
