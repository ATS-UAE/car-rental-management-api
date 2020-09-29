import { VehicleServerResponseGet, ExtractServerResponseData, ServerResponseMeta, VehicleServerParamsPost, VehicleServerParamsPatch, ReplaceAttributes } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { Booking } from "./Booking";
import { WialonUnit } from "./WialonUnit";
import { Category } from "./Category";
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
    meta: ServerResponseMeta;
    constructor(login: Authenticated, data: ExtractServerResponseData<VehicleServerResponseGet>, meta: ServerResponseMeta);
    static checkAvailabilityFromBookings: (bookings: import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").BookingAttributes>[]) => boolean;
    static getOne: (login: Authenticated, vehicleId: number) => Promise<Vehicle>;
    static getAll: (login: Authenticated, options?: VehicleGetAllOptions | undefined) => Promise<Vehicle[]>;
    static create: (login: Authenticated, vehicleData: ReplaceAttributes<import("car-rental-management-shared").DatePropsToUnix<Pick<Pick<import("car-rental-management-shared").VehicleAttributes, "clientId" | "bookingChargeCount" | "bookingCharge" | "bookingChargeUnit" | "brand" | "model" | "plateNumber" | "vin" | "defleeted" | "parkingLocation" | "vehicleImageSrc" | "wialonUnitId" | "locationId" | "categoryCostId">, "brand" | "model" | "plateNumber" | "vin"> & Pick<Partial<Pick<import("car-rental-management-shared").VehicleAttributes, "clientId" | "bookingChargeCount" | "bookingCharge" | "bookingChargeUnit" | "brand" | "model" | "plateNumber" | "vin" | "defleeted" | "parkingLocation" | "vehicleImageSrc" | "wialonUnitId" | "locationId" | "categoryCostId">>, "clientId" | "bookingChargeCount" | "bookingCharge" | "bookingChargeUnit" | "defleeted" | "parkingLocation" | "vehicleImageSrc" | "wialonUnitId" | "locationId" | "categoryCostId"> & {
        categories?: number[] | undefined;
    }>, {
        vehicleImageSrc?: string | File | null | undefined;
    }>) => Promise<Vehicle>;
    static update: (login: Authenticated, vehicleId: number, vehicleData: ReplaceAttributes<import("car-rental-management-shared").DatePropsToUnix<Partial<Pick<import("car-rental-management-shared").VehicleAttributes, "clientId" | "bookingChargeCount" | "bookingCharge" | "bookingChargeUnit" | "brand" | "model" | "plateNumber" | "vin" | "defleeted" | "parkingLocation" | "vehicleImageSrc" | "wialonUnitId" | "locationId" | "categoryCostId">> & {
        categories?: number[] | undefined;
    }>, {
        vehicleImageSrc?: string | File | null | undefined;
    }>) => Promise<Vehicle>;
    update: (updatedVehicleData: ReplaceAttributes<import("car-rental-management-shared").DatePropsToUnix<Partial<Pick<import("car-rental-management-shared").VehicleAttributes, "clientId" | "bookingChargeCount" | "bookingCharge" | "bookingChargeUnit" | "brand" | "model" | "plateNumber" | "vin" | "defleeted" | "parkingLocation" | "vehicleImageSrc" | "wialonUnitId" | "locationId" | "categoryCostId">> & {
        categories?: number[] | undefined;
    }>, {
        vehicleImageSrc?: string | File | null | undefined;
    }>) => Promise<void>;
    destroy: () => Promise<void>;
    getBookings: () => Promise<Booking[]>;
    getWialonUnit: () => Promise<WialonUnit>;
    getCategoryCost: () => Promise<Category>;
    getCategories: () => Promise<Category[]>;
    isVehicleAvailableForBooking: IsVehicleAvailableForBookingFunction;
}
export {};
