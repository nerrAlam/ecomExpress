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
exports.productControllers = void 0;
const product_service_1 = require("./product.service");
// create product into database
const createproduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield req.body;
        const result = yield product_service_1.productServices.createProductIntoDb(product);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (error) {
        // res.status(400).json({
        //     success: false,
        //     message: "Product can not created for something unusual",
        //     error,
        // });
        next(error);
    }
});
// get single product
const getSingleProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = yield req.params;
        const result = yield product_service_1.productServices.getSingleProductFromDb(productId);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        // res.status(400).json({
        //     success: false,
        //     message: "Product can not retrived for something unusual",
        //     error,
        // });
        next(error);
    }
});
// get all the products
const getAllProuducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.productServices.getAllProductsFromDb();
        res.status(200).json({
            success: true,
            message: 'Products fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        // res.status(400).json({
        //     success: false,
        //     message: 'Products can not fetch for something unusal',
        //     error,
        // });
        next(error);
    }
});
// delete product
const deleteProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.productServices.deleteProductFromDb(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result,
        });
    }
    catch (error) {
        // res.status(400).json({
        //     success: false,
        //     message: 'Product can not deleted form the database',
        //     error,
        // });
        next(error);
    }
});
// update product
const updateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const { productId } = req.params;
        const result = yield product_service_1.productServices.updateProductIntoDb(productId, productData);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (error) {
        // res.status(400).json({
        //     success: false,
        //     message: 'Product can not updated form the database',
        //     error,
        // });
        next(error);
    }
});
// all the exports here
exports.productControllers = {
    createproduct,
    getSingleProduct,
    getAllProuducts,
    deleteProduct,
    updateProduct
};
