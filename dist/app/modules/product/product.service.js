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
exports.productServices = void 0;
const product_model_1 = require("./product.model");
const product_validation_1 = require("./product.validation");
// create product into database
const createProductIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = yield product_validation_1.productValidationSchema.createProductValidationSchema.parse(payload);
    const result = yield product_model_1.Product.create(productData);
    return result;
});
// get single product form db
const getSingleProductFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findById({ _id: id });
    if (result === null || result === void 0 ? void 0 : result.isDeleted) {
        throw new Error('The product is not in the data base');
    }
    return result;
});
// get all the products from db
const getAllProductsFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.find({ isDeleted: false });
    return result;
});
// delete product from db
const deleteProductFromDb = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    yield product_model_1.Product.findOneAndUpdate({ _id: productId }, { isDeleted: true });
    return null;
});
// update product into database
const updateProductIntoDb = (productId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.findById({ _id: productId });
    if (!product) {
        throw new Error('The product is not in the data base');
    }
    if (product === null || product === void 0 ? void 0 : product.isDeleted) {
        throw new Error('The product is not in the data base');
    }
    const productData = yield product_validation_1.productValidationSchema.updateProductValidationSchema.parse(payload);
    const result = yield product_model_1.Product.findByIdAndUpdate({ _id: productId }, productData, { new: true });
    return result;
});
// all the exports here
exports.productServices = {
    createProductIntoDb,
    getSingleProductFromDb,
    getAllProductsFromDb,
    deleteProductFromDb,
    updateProductIntoDb,
};
