import { ProductCategory } from "./product-category";

export interface Product {

    id?:string,
    title?:string,
    description?:string,
    price?:number,
    ratings?:string,
    unitInStock?:number,
    productImagePath?:string,
    category?:ProductCategory,
    ceatedAt?:Date,
    updatedAt?:Date
}
