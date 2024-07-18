
// all the imports here
import { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";


// order schema
const orderSchema = new Schema<TOrder>({
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
export const Order = model<TOrder>('Order', orderSchema);