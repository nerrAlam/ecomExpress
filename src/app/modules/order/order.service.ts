
// all the imports here
import { Product } from "../product/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";
import { orderValidationSchema } from "./order.validation";


// create order into database
const createOrderIntoDb = async (payload: TOrder) => {
    const {productId, quantity} = payload;

    if(!productId) {
        throw new Error('you do not give any valid product id');
    }

    const product = await Product.findById(productId);
    if(!product) {
        throw new Error('the product is not found.');
    }

    if(product.isDeleted) {
        throw new Error('the product is already deleted.');
    }

    // check the product is in available or not
    let productQuantity = product.inventory.quantity;
    if(productQuantity < quantity) {
        throw new Error("Insufficient quantity available in inventory");
    }

    // validation order
    const orderData = await orderValidationSchema.createOrderValidationSchema.parse(payload);

    const result = await Order.create(orderData);
    productQuantity -= quantity;

    // update product quantity in prouduct
    await Product.findByIdAndUpdate({_id: productId}, {'inventory.quantity': productQuantity}, {new: true});

    // in stock false if quanty is 0
    if (productQuantity === 0) {
        await Product.findByIdAndUpdate({_id: productId}, {'inventory.inStock': false}, {new: true});
    }

    return result;
};


// get all the orders
const getAllOrdersFromDb = async () => {
    const result = await Order.find();
    return result;
};


// all the exports here
export const orderServices = {
    createOrderIntoDb,
    getAllOrdersFromDb,
}