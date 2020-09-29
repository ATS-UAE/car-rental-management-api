import { ExtractServerResponseData, ServerResponseMeta, VehicleCategoryServerResponseGetAll, FlattenIfArray } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
export declare class VehicleCategory {
    private login;
    data: FlattenIfArray<ExtractServerResponseData<VehicleCategoryServerResponseGetAll>>;
    meta: ServerResponseMeta;
    constructor(login: Authenticated, data: FlattenIfArray<ExtractServerResponseData<VehicleCategoryServerResponseGetAll>>, meta: ServerResponseMeta);
    static getAll: (login: Authenticated) => Promise<VehicleCategory[]>;
}
