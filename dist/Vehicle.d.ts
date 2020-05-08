import { Authenticated } from "./Authenticated";
import { VehicleServerResponseGet, ExtractServerResponseData, ServerResponseMeta } from "./shared/typings";
import { Booking } from "./Booking";
import { WialonUnit } from "./WialonUnit";
interface IsVehicleAvailableForBookingFunction {
    (bookings: Booking[]): boolean;
    (bookings: ExtractServerResponseData<VehicleServerResponseGet>[]): boolean;
    (): Promise<boolean>;
}
export declare class Vehicle {
    private login;
    data: ExtractServerResponseData<VehicleServerResponseGet>;
    meta: ServerResponseMeta;
    constructor(login: Authenticated, data: ExtractServerResponseData<VehicleServerResponseGet>, meta: ServerResponseMeta);
    static checkAvailabilityFromBookings: (bookings: import("./shared/typings").DatePropsToUnix<import("./shared/typings").BookingAttributes>[]) => boolean;
    static getOne: (login: Authenticated, vehicleId: number) => Promise<Vehicle>;
    static getAll: (login: Authenticated) => Promise<Vehicle[]>;
    static create: (login: Authenticated, vehicleData: import("./shared/typings").DatePropsToUnix<import("./shared/typings").UseParameters<Pick<import("./shared/typings").VehicleAttributes, "clientId" | "brand" | "model" | "plateNumber" | "vin" | "defleeted" | "parkingLocation" | "vehicleImageSrc" | "bookingChargeCount" | "bookingCharge" | "wialonUnitId" | "bookingChargeUnit" | "locationId">, "brand" | "model" | "plateNumber" | "vin", "clientId" | "defleeted" | "parkingLocation" | "vehicleImageSrc" | "bookingChargeCount" | "bookingCharge" | "wialonUnitId" | "bookingChargeUnit" | "locationId">>) => Promise<Vehicle>;
    update: (updatedVehicleData: import("./shared/typings").DatePropsToUnix<Partial<Pick<import("./shared/typings").VehicleAttributes, "clientId" | "brand" | "model" | "plateNumber" | "vin" | "defleeted" | "parkingLocation" | "vehicleImageSrc" | "bookingChargeCount" | "bookingCharge" | "wialonUnitId" | "bookingChargeUnit" | "locationId">>>) => Promise<void>;
    destroy: () => Promise<void>;
    getBookings: () => Promise<Booking[]>;
    getWialonUnit: () => Promise<WialonUnit>;
    isVehicleAvailableForBooking: IsVehicleAvailableForBookingFunction;
}
export {};
