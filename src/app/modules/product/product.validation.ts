
// all the imports here
import { z } from "zod";


// create product varient validation schema
const createProductVariantSchema = z.object({
    type: z.string().min(1).trim(),
    value: z.string().min(1).trim(),
});


// create product inventory validation schema
const createProductInventorySchema = z.object({
    quantity: z.number().min(0),
    inStock: z.boolean().optional(),
});



// create product validation schema using zod
const createProductValidationSchema = z.object({
    name: z.string().min(1).trim(),
    description: z.string().min(1).trim(),
    price: z.number().min(0),
    category: z.string().min(1).trim(),
    tags: z.array(z.string().min(1).trim()),
    variants: z.array(createProductVariantSchema),
    inventory: createProductInventorySchema,
    isDeleted: z.boolean().optional(),
});


// update product varient validation schema
const updateProductVariantSchema = z.object({
    type: z.string().min(1).trim().optional(),
    value: z.string().min(1).trim().optional(),
});



// upadte product inventory validation schema
const updateProductInventorySchema = z.object({
    quantity: z.number().min(0).optional(),
    inStock: z.boolean().optional().optional(),
});


// update product validation schema using zod
const updateProductValidationSchema = z.object({
    name: z.string().min(1).trim().optional(),
    description: z.string().min(1).trim().optional(),
    price: z.number().min(0).optional(),
    category: z.string().min(1).trim().optional(),
    tags: z.array(z.string().min(1).trim()).optional(),
    variants: z.array(updateProductVariantSchema).optional(),
    inventory: updateProductInventorySchema.optional(),
    isDeleted: z.boolean().optional(),
});


// all the exports here
export const productValidationSchema = {
    createProductValidationSchema,
    updateProductValidationSchema,
};