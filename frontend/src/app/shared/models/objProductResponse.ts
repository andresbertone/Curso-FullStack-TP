import { ProductModel } from "./product-model";

export interface ObjProductResponse {
    data:  ProductModel;
    error: boolean;
}