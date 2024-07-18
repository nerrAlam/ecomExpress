
// product varient type
export type TVarient = {
    type: string;
    value: string;
}

// product inventory type
export type TInventory = {
    quantity: number;
    inStock: boolean;
}


// final product type
export type TProduct = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: [
        TVarient
    ];
    inventory: TInventory;
    isDeleted?: boolean;
};