import { VehicleServerResponseGet, ExtractServerResponseData, VehicleServerParamsPost, VehicleServerParamsPatch, ReplaceAttributes, Role } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { Booking } from "./Booking";
import { WialonUnit } from "./WialonUnit";
import { Category } from "./Category";
import { ServerResponse } from "./ServerResponse";
export declare type VehicleServerParamsPatchFormData = ReplaceAttributes<VehicleServerParamsPatch, {
    vehicleImageSrc?: File | null | string;
}>;
export declare type VehicleServerParamsPostFormData = ReplaceAttributes<VehicleServerParamsPost, {
    vehicleImageSrc?: File | null | string;
}>;
export interface VehicleGetAllOptions {
    from: number;
    to: number;
}
export declare class Vehicle {
    private login;
    data: ExtractServerResponseData<VehicleServerResponseGet>;
    constructor(login: Authenticated, data: ExtractServerResponseData<VehicleServerResponseGet>);
    static ROLES_ALLOWED_TO_SEND_COMMANDS_WITHOUT_BOOKINGS: Role[];
    static getOne: (login: Authenticated, vehicleId: number) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").VehicleAttributes>, Vehicle>>;
    static getAll: (login: Authenticated, options?: VehicleGetAllOptions | undefined) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").VehicleAttributes>>[], Vehicle[]>>;
    static create: (login: Authenticated, vehicleData: VehicleServerParamsPostFormData) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").VehicleAttributes>, Vehicle>>;
    static update: (login: Authenticated, vehicleId: number, vehicleData: VehicleServerParamsPatchFormData) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").VehicleAttributes>, Vehicle>>;
    update: (updatedVehicleData: VehicleServerParamsPatchFormData) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").VehicleAttributes>, Vehicle>>;
    destroy: () => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").VehicleAttributes>, Vehicle>>;
    getBookings: () => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").BookingAttributes>>[], Booking[]>>;
    getWialonUnit: () => Promise<ServerResponse<import("car-rental-management-shared").WialonUnitAttributes, WialonUnit>>;
    getCategoryCost: () => Promise<ServerResponse<import("car-rental-management-shared").CategoryRelationAttributes, Category>>;
    getCategories: () => Promise<ServerResponse<import("car-rental-management-shared").CategoryRelationAttributes[], Category[]>>;
    canUserSendCommand: () => Promise<boolean>;
    isVehicleBookedToUser: () => Promise<boolean>;
    toObject: () => import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").VehicleAttributes>;
}
