"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
// all the imports here
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
// creating router object
const router = (0, express_1.Router)();
// create order
router.post('/', order_controller_1.orderControllers.createOrder);
// get all orders
router.get('/', order_controller_1.orderControllers.getAllOrders);
// export the router object as order router
exports.orderRoutes = router;
