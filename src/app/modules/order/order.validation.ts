
// all the imports here
import { z } from "zod";


// create order validation schema
const createOrderValidationSchema = z.object({
    email: z.string().email("Invalid email address").min(1).max(255),
    productId: z.string().min(1).max(255),
    price: z.number().positive("Price must be a positive number"),
    quantity: z.number().int().min(1).default(1),
});


// all the exports here
export const orderValidationSchema = {
    createOrderValidationSchema,
};