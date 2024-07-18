
// all the imports here
import { Router } from "express";
import { orderControllers } from "./order.controller";

// creating router object
const router = Router();


// create order
router.post('/', orderControllers.createOrder);

// get all orders
router.get('/', orderControllers.getAllOrders);


// export the router object as order router
export const orderRoutes = router;