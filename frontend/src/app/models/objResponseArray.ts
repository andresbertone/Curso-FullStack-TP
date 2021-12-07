import { ProductModel } from "./product-model";

export interface ObjResponseArray {
    data:  ProductModel[];
    error: boolean;
}