
// all the imports here
import { Router } from "express";
import { productControllers } from "./product.controller";


// create product router object
const router = Router();


// create product into database
router.post('/', productControllers.createproduct);

// get single product
router.get('/:productId', productControllers.getSingleProduct);

// get all the products
router.get('/', productControllers.getAllProuducts);

// delete product
router.delete('/:productId', productControllers.deleteProduct);

// update product
router.put('/:productId', productControllers.updateProduct);


// export the product router objecr
export const productRoutes = router;