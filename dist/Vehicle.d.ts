import { Authenticated } from "./Authenticated";
import { VehicleServerResponseGet, ExtractServerResponseData, ServerResponseMeta } from "./shared/typings";
export declare class Vehicle {
    private login;
    data: ExtractServerResponseData<VehicleServerResponseGet>;
    meta: ServerResponseMeta;
    constructor(login: Authenticated, data: ExtractServerResponseData<VehicleServerResponseGet>, meta: ServerResponseMeta);
    static getOne: (login: Authenticated, vehicleId: number) => Promise<Vehicle>;
    static getAll: (login: Authenticated) => Promise<Vehicle[]>;
    static create: (login: Authenticated, vehicleData: import("./shared/typings").DatePropsToUnix<import("./shared/typings").UseParameters<Pick<import("./shared/typings").VehicleAttributes, "clientId" | "vin" | "brand" | "model" | "plateNumber" | "defleeted" | "parkingLocation" | "vehicleImageSrc" | "bookingChargeCount" | "bookingCharge" | "wialonUnitId" | "bookingChargeUnit" | "locationId">, "vin" | "brand" | "model" | "plateNumber", "clientId" | "defleeted" | "parkingLocation" | "vehicleImageSrc" | "bookingChargeCount" | "bookingCharge" | "wialonUnitId" | "bookingChargeUnit" | "locationId">>) => Promise<Vehicle>;
    update: (updatedVehicleData: import("./shared/typings").DatePropsToUnix<Partial<Pick<import("./shared/typings").VehicleAttributes, "clientId" | "vin" | "brand" | "model" | "plateNumber" | "defleeted" | "parkingLocation" | "vehicleImageSrc" | "bookingChargeCount" | "bookingCharge" | "wialonUnitId" | "bookingChargeUnit" | "locationId">>>) => Promise<void>;
    destroy: () => Promise<void>;
}
