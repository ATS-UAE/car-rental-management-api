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
interface IsVehicleAvailableForBookingFunction {
    (bookings: Booking[]): boolean;
    (bookings: ExtractServerResponseData<VehicleServerResponseGet>[]): boolean;
    (): Promise<boolean>;
}
export interface VehicleGetAllOptions {
    from: number;
    to: number;
}
export declare class Vehicle {
    private login;
    data: ExtractServerResponseData<VehicleServerResponseGet>;
    constructor(login: Authenticated, data: ExtractServerResponseData<VehicleServerResponseGet>);
    static ROLES_ALLOWED_TO_SEND_COMMANDS_WITHOUT_BOOKINGS: Role[];
    static checkAvailabilityFromBookings: (bookings: import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").BookingAttributes>[]) => boolean;
    static getOne: (login: Authenticated, vehicleId: number) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").VehicleAttributes>, Vehicle>>;
    static getAll: (login: Authenticated, options?: VehicleGetAllOptions | undefined) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").VehicleAttributes>>[], Vehicle[]>>;
    static create: (login: Authenticated, vehicleData: ReplaceAttributes<import("car-rental-management-shared").DatePropsToUnix<Pick<Pick<import("car-rental-management-shared").VehicleAttributes, "clientId" | "bookingChargeCount" | "bookingCharge" | "bookingChargeUnit" | "brand" | "model" | "plateNumber" | "vin" | "defleeted" | "parkingLocation" | "vehicleImageSrc" | "wialonUnitId" | "locationId" | "categoryCostId">, "brand" | "model" | "plateNumber" | "vin"> & Pick<Partial<Pick<import("car-rental-management-shared").VehicleAttributes, "clientId" | "bookingChargeCount" | "bookingCharge" | "bookingChargeUnit" | "brand" | "model" | "plateNumber" | "vin" | "defleeted" | "parkingLocation" | "vehicleImageSrc" | "wialonUnitId" | "locationId" | "categoryCostId">>, "clientId" | "bookingChargeCount" | "bookingCharge" | "bookingChargeUnit" | "defleeted" | "parkingLocation" | "vehicleImageSrc" | "wialonUnitId" | "locationId" | "categoryCostId"> & {
        categories?: number[] | undefined;
    }>, {
        vehicleImageSrc?: string | File | null | undefined;
    }>) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").VehicleAttributes>, Vehicle>>;
    static update: (login: Authenticated, vehicleId: number, vehicleData: ReplaceAttributes<import("car-rental-management-shared").DatePropsToUnix<Partial<Pick<import("car-rental-management-shared").VehicleAttributes, "clientId" | "bookingChargeCount" | "bookingCharge" | "bookingChargeUnit" | "brand" | "model" | "plateNumber" | "vin" | "defleeted" | "parkingLocation" | "vehicleImageSrc" | "wialonUnitId" | "locationId" | "categoryCostId">> & {
        categories?: number[] | undefined;
    }>, {
        vehicleImageSrc?: string | File | null | undefined;
    }>) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").VehicleAttributes>, Vehicle>>;
    update: (updatedVehicleData: ReplaceAttributes<import("car-rental-management-shared").DatePropsToUnix<Partial<Pick<import("car-rental-management-shared").VehicleAttributes, "clientId" | "bookingChargeCount" | "bookingCharge" | "bookingChargeUnit" | "brand" | "model" | "plateNumber" | "vin" | "defleeted" | "parkingLocation" | "vehicleImageSrc" | "wialonUnitId" | "locationId" | "categoryCostId">> & {
        categories?: number[] | undefined;
    }>, {
        vehicleImageSrc?: string | File | null | undefined;
    }>) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").VehicleAttributes>, Vehicle>>;
    destroy: () => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").VehicleAttributes>, Vehicle>>;
    getBookings: () => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").BookingAttributes>>[], Booking[]>>;
    getWialonUnit: () => Promise<ServerResponse<import("car-rental-management-shared").WialonUnitAttributes, WialonUnit>>;
    getCategoryCost: () => Promise<ServerResponse<import("car-rental-management-shared").CategoryRelationAttributes, Category>>;
    getCategories: () => Promise<ServerResponse<import("car-rental-management-shared").CategoryRelationAttributes[], Category[]>>;
    isVehicleAvailableForBooking: IsVehicleAvailableForBookingFunction;
    canUserSendCommand: () => Promise<boolean>;
    isVehicleBookedToUser: () => Promise<boolean>;
    toObject: () => import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").VehicleAttributes>;
}
export {};
