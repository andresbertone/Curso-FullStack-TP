import { ProductModel } from "./product-model";

export interface ObjProductResponseArray {
    data:  ProductModel[];
    error: boolean;
}