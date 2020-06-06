import { Authenticated } from "./Authenticated";
import { ExtractServerResponseData, ServerResponseMeta, VehicleCategoryServerResponseGetAll, FlattenIfArray } from "./shared/typings";
export declare class VehicleCategory {
    private login;
    data: FlattenIfArray<ExtractServerResponseData<VehicleCategoryServerResponseGetAll>>;
    meta: ServerResponseMeta;
    constructor(login: Authenticated, data: FlattenIfArray<ExtractServerResponseData<VehicleCategoryServerResponseGetAll>>, meta: ServerResponseMeta);
    static getAll: (login: Authenticated) => Promise<VehicleCategory[]>;
}
