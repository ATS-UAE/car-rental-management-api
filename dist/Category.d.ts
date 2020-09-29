import { CategoryServerResponseGet, ExtractServerResponseData, ServerResponseMeta } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
export declare class Category {
    private login;
    data: ExtractServerResponseData<CategoryServerResponseGet>;
    meta: ServerResponseMeta;
    constructor(login: Authenticated, data: ExtractServerResponseData<CategoryServerResponseGet>, meta: ServerResponseMeta);
    static getOne: (login: Authenticated, userId: number) => Promise<Category>;
    static getAll: (login: Authenticated) => Promise<Category[]>;
    static create: (login: Authenticated, userData: import("car-rental-management-shared").UseParameters<import("car-rental-management-shared").CategoryAttributes, "clientId" | "name", "bookingChargeCount" | "bookingCharge" | "bookingChargeUnit">) => Promise<Category>;
    update: (updatedVehicleData: import("car-rental-management-shared").DatePropsToUnix<Partial<Pick<import("car-rental-management-shared").CategoryAttributes, "clientId" | "name" | "bookingChargeCount" | "bookingCharge" | "bookingChargeUnit">>>) => Promise<void>;
    static update: (login: Authenticated, userId: number, updatedVehicleData: import("car-rental-management-shared").DatePropsToUnix<Partial<Pick<import("car-rental-management-shared").CategoryAttributes, "clientId" | "name" | "bookingChargeCount" | "bookingCharge" | "bookingChargeUnit">>>) => Promise<Category>;
    destroy: () => Promise<void>;
}
