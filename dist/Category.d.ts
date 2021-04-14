import { CategoryServerResponseGet, ExtractServerResponseData, CategoryServerParamsPost, CategoryServerParamsPatch } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { ServerResponse } from "./ServerResponse";
export declare class Category {
    private login;
    data: ExtractServerResponseData<CategoryServerResponseGet>;
    constructor(login: Authenticated, data: ExtractServerResponseData<CategoryServerResponseGet>);
    static getOne: (login: Authenticated, userId: number) => Promise<ServerResponse<import("car-rental-management-shared").CategoryRelationAttributes, Category>>;
    static getAll: (login: Authenticated) => Promise<ServerResponse<import("car-rental-management-shared").CategoryRelationAttributes[], Category[]>>;
    static create: (login: Authenticated, userData: CategoryServerParamsPost) => Promise<ServerResponse<import("car-rental-management-shared").CategoryRelationAttributes, Category>>;
    update: (updatedVehicleData: CategoryServerParamsPatch) => Promise<ServerResponse<import("car-rental-management-shared").CategoryRelationAttributes, Category>>;
    static update: (login: Authenticated, userId: number, updatedVehicleData: CategoryServerParamsPatch) => Promise<ServerResponse<import("car-rental-management-shared").CategoryRelationAttributes, Category>>;
    destroy: () => Promise<ServerResponse<import("car-rental-management-shared").CategoryRelationAttributes, Category>>;
    toObject: () => import("car-rental-management-shared").CategoryRelationAttributes;
}
