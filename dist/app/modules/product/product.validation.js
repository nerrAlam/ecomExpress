"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidationSchema = void 0;
// all the imports here
const zod_1 = require("zod");
// create product varient validation schema
const createProductVariantSchema = zod_1.z.object({
    type: zod_1.z.string().min(1).trim(),
    value: zod_1.z.string().min(1).trim(),
});
// create product inventory validation schema
const createProductInventorySchema = zod_1.z.object({
    quantity: zod_1.z.number().min(0),
    inStock: zod_1.z.boolean().optional(),
});
// create product validation schema using zod
const createProductValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1).trim(),
    description: zod_1.z.string().min(1).trim(),
    price: zod_1.z.number().min(0),
    category: zod_1.z.string().min(1).trim(),
    tags: zod_1.z.array(zod_1.z.string().min(1).trim()),
    variants: zod_1.z.array(createProductVariantSchema),
    inventory: createProductInventorySchema,
    isDeleted: zod_1.z.boolean().optional(),
});
// update product varient validation schema
const updateProductVariantSchema = zod_1.z.object({
    type: zod_1.z.string().min(1).trim().optional(),
    value: zod_1.z.string().min(1).trim().optional(),
});
// upadte product inventory validation schema
const updateProductInventorySchema = zod_1.z.object({
    quantity: zod_1.z.number().min(0).optional(),
    inStock: zod_1.z.boolean().optional().optional(),
});
// update product validation schema using zod
const updateProductValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1).trim().optional(),
    description: zod_1.z.string().min(1).trim().optional(),
    price: zod_1.z.number().min(0).optional(),
    category: zod_1.z.string().min(1).trim().optional(),
    tags: zod_1.z.array(zod_1.z.string().min(1).trim()).optional(),
    variants: zod_1.z.array(updateProductVariantSchema).optional(),
    inventory: updateProductInventorySchema.optional(),
    isDeleted: zod_1.z.boolean().optional(),
});
// all the exports here
exports.productValidationSchema = {
    createProductValidationSchema,
    updateProductValidationSchema,
};
