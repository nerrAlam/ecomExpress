"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// all the imports here
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_routes_1 = require("./app/modules/product/product.routes");
const order_routes_1 = require("./app/modules/order/order.routes");
// call the express app
const app = (0, express_1.default)();
// use parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// all the product routes
app.use('/api/products', product_routes_1.productRoutes);
// all the order routes
app.use('/api/orders', order_routes_1.orderRoutes);
// testing routes
app.get('/testRoutes', (req, res) => {
    res.send('Hello programmers, welcome to the world of programming!');
});
// testing routes
app.get('/', (req, res) => {
    res.send('Hello programmers, welcome to the world of programming!');
});
// not found route error handling
app.all('*', (req, res) => {
    res.status(400).json({
        success: false,
        message: "Route not found",
    });
});
// global error handler
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: error || 'something went wrong.',
            error,
        });
    }
});
// all the exports here
exports.default = app;
