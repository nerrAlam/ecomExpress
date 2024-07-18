"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
// all the imports here
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
// create product router object
const router = (0, express_1.Router)();
// create product into database
router.post('/', product_controller_1.productControllers.createproduct);
// get single product
router.get('/:productId', product_controller_1.productControllers.getSingleProduct);
// get all the products
router.get('/', product_controller_1.productControllers.getAllProuducts);
// delete product
router.delete('/:productId', product_controller_1.productControllers.deleteProduct);
// update product
router.put('/:productId', product_controller_1.productControllers.updateProduct);
// export the product router objecr
exports.productRoutes = router;
