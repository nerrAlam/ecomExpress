
// all the imports here
import { TProduct } from "./product.interface";
import { Product } from "./product.model"
import { productValidationSchema } from "./product.validation";


// create product into database
const createProductIntoDb = async (payload: TProduct) => {
    const productData = await productValidationSchema.createProductValidationSchema.parse(payload);
    const result = await Product.create(productData);
    return result;
};


// get single product form db
const getSingleProductFromDb = async (id: string) => {
    const result = await Product.findById({_id: id});
    if(result?.isDeleted) {
        throw new Error ('The product is not in the data base');
    }
    return result;
};


// get all the products from db
const getAllProductsFromDb = async () => {
    const result = await Product.find({isDeleted: false});
    return result;
};


// delete product from db
const deleteProductFromDb = async (productId: string) => {
    await Product.findOneAndUpdate({_id: productId}, {isDeleted: true});
    return null;
};


// update product into database
const updateProductIntoDb = async (productId: string, payload: Partial<TProduct>) => {
    const product = await Product.findById({_id: productId});
    
    if(!product) {
        throw new Error ('The product is not in the data base');
    }

    if(product?.isDeleted) {
        throw new Error ('The product is not in the data base');
    }

    const productData = await productValidationSchema.updateProductValidationSchema.parse(payload);
    const result = await Product.findByIdAndUpdate({_id: productId}, productData, {new: true});
    return result;

};


// all the exports here
export const productServices = {
    createProductIntoDb,
    getSingleProductFromDb,
    getAllProductsFromDb,
    deleteProductFromDb,
    updateProductIntoDb,
};