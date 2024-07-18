
// all the imports here
import { NextFunction, Request, Response } from "express";
import { productServices } from "./product.service"


// create product into database
const createproduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = await req.body;
        const result = await productServices.createProductIntoDb(product);


        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    } catch (error) {
        // res.status(400).json({
        //     success: false,
        //     message: "Product can not created for something unusual",
        //     error,
        // });
        next(error);
    }
}


// get single product
const getSingleProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { productId } = await req.params;
        const result = await productServices.getSingleProductFromDb(productId);

        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    } catch (error) {
        // res.status(400).json({
        //     success: false,
        //     message: "Product can not retrived for something unusual",
        //     error,
        // });
        next(error);
    }

};


// get all the products
const getAllProuducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await productServices.getAllProductsFromDb();

        res.status(200).json({
            success: true,
            message: 'Products fetched successfully!',
            data: result,
        });
    } catch (error) {
        // res.status(400).json({
        //     success: false,
        //     message: 'Products can not fetch for something unusal',
        //     error,
        // });
        next(error);
    }
}



// delete product
const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { productId } = req.params;
        const result = await productServices.deleteProductFromDb(productId);

        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result,
        });
    } catch (error) {
        // res.status(400).json({
        //     success: false,
        //     message: 'Product can not deleted form the database',
        //     error,
        // });
        next(error);
    }
}


// update product
const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productData = req.body;
        const {productId} = req.params;
        const result = await productServices.updateProductIntoDb(productId, productData);


        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    } catch (error) {
        // res.status(400).json({
        //     success: false,
        //     message: 'Product can not updated form the database',
        //     error,
        // });
        next(error);
    }
}


// all the exports here
export const productControllers = {
    createproduct,
    getSingleProduct,
    getAllProuducts,
    deleteProduct,
    updateProduct
};