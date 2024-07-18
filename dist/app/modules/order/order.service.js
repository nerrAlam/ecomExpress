"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderServices = void 0;
// all the imports here
const product_model_1 = require("../product/product.model");
const order_model_1 = require("./order.model");
const order_validation_1 = require("./order.validation");
// create order into database
const createOrderIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, quantity } = payload;
    if (!productId) {
        throw new Error('you do not give any valid product id');
    }
    const product = yield product_model_1.Product.findById(productId);
    if (!product) {
        throw new Error('the product is not found.');
    }
    if (product.isDeleted) {
        throw new Error('the product is already deleted.');
    }
    // check the product is in available or not
    let productQuantity = product.inventory.quantity;
    if (productQuantity < quantity) {
        throw new Error("Insufficient quantity available in inventory");
    }
    // validation order
    const orderData = yield order_validation_1.orderValidationSchema.createOrderValidationSchema.parse(payload);
    const result = yield order_model_1.Order.create(orderData);
    productQuantity -= quantity;
    // update product quantity in prouduct
    yield product_model_1.Product.findByIdAndUpdate({ _id: productId }, { 'inventory.quantity': productQuantity }, { new: true });
    // in stock false if quanty is 0
    if (productQuantity === 0) {
        yield product_model_1.Product.findByIdAndUpdate({ _id: productId }, { 'inventory.inStock': false }, { new: true });
    }
    return result;
});
// get all the orders
const getAllOrdersFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.find();
    return result;
});
// all the exports here
exports.orderServices = {
    createOrderIntoDb,
    getAllOrdersFromDb,
};
