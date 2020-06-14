import { Authenticated } from "./Authenticated";
import { Vehicle, VehicleGetAllOptions } from "./Vehicle";
export declare class VehicleFactory extends Authenticated {
    getOne: (id: number) => Promise<Vehicle>;
    getAll: (options?: VehicleGetAllOptions | undefined) => Promise<Vehicle[]>;
    update: (id: number, updateVehicleData: import("./shared/typings").ReplaceAttributes<import("./shared/typings").DatePropsToUnix<Partial<Pick<import("./shared/typings").VehicleAttributes, "clientId" | "bookingChargeCount" | "bookingCharge" | "bookingChargeUnit" | "brand" | "model" | "plateNumber" | "vin" | "defleeted" | "parkingLocation" | "vehicleImageSrc" | "wialonUnitId" | "locationId" | "categoryCostId">> & {
        categories?: number[] | undefined;
    }>, {
        vehicleImageSrc?: string | File | null | undefined;
    }>) => Promise<Vehicle>;
    create: (vehicleData: import("./shared/typings").ReplaceAttributes<import("./shared/typings").DatePropsToUnix<Pick<Pick<import("./shared/typings").VehicleAttributes, "clientId" | "bookingChargeCount" | "bookingCharge" | "bookingChargeUnit" | "brand" | "model" | "plateNumber" | "vin" | "defleeted" | "parkingLocation" | "vehicleImageSrc" | "wialonUnitId" | "locationId" | "categoryCostId">, "brand" | "model" | "plateNumber" | "vin"> & Pick<Partial<Pick<import("./shared/typings").VehicleAttributes, "clientId" | "bookingChargeCount" | "bookingCharge" | "bookingChargeUnit" | "brand" | "model" | "plateNumber" | "vin" | "defleeted" | "parkingLocation" | "vehicleImageSrc" | "wialonUnitId" | "locationId" | "categoryCostId">>, "clientId" | "bookingChargeCount" | "bookingCharge" | "bookingChargeUnit" | "defleeted" | "parkingLocation" | "vehicleImageSrc" | "wialonUnitId" | "locationId"> & {
        categories?: number[] | undefined;
    }>, {
        vehicleImageSrc?: string | File | null | undefined;
    }>) => Promise<Vehicle>;
    destroy: (id: number) => Promise<Vehicle>;
}
