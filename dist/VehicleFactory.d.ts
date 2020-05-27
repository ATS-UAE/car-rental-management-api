import { Authenticated } from "./Authenticated";
import { Vehicle, VehicleGetAllOptions } from "./Vehicle";
export declare class VehicleFactory extends Authenticated {
    getOne: (id: number) => Promise<Vehicle>;
    getAll: (options?: VehicleGetAllOptions | undefined) => Promise<Vehicle[]>;
    update: (id: number, updateVehicleData: import("./shared/typings").DatePropsToUnix<Partial<Pick<import("./shared/typings").VehicleAttributes, "clientId" | "brand" | "model" | "plateNumber" | "vin" | "defleeted" | "parkingLocation" | "vehicleImageSrc" | "bookingChargeCount" | "bookingCharge" | "wialonUnitId" | "bookingChargeUnit" | "locationId">> & {
        categories?: number[] | undefined;
    }>) => Promise<Vehicle>;
}
