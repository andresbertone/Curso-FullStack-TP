import { SupplierModel } from "./supplier-model";

export interface ObjSupplierResponseArray {
    data:  SupplierModel[];
    error: boolean;
}