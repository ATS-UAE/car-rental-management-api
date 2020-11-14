import { ExtractServerResponseData, VehicleCategoryServerResponseGetAll, FlattenIfArray } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { ServerResponse } from "./ServerResponse";
export declare class VehicleCategory {
    private login;
    data: FlattenIfArray<ExtractServerResponseData<VehicleCategoryServerResponseGetAll>>;
    constructor(login: Authenticated, data: FlattenIfArray<ExtractServerResponseData<VehicleCategoryServerResponseGetAll>>);
    static getAll: (login: Authenticated) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").VehicleCategoryAttributes>[], VehicleCategory[]>>;
}
