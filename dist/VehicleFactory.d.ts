import { VehicleServerResponseGet } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { ServerResponse } from "./ServerResponse";
import { Vehicle, VehicleGetAllOptions, VehicleServerParamsPatchFormData, VehicleServerParamsPostFormData } from "./Vehicle";
export declare class VehicleFactory extends Authenticated {
    getOne: (id: number) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").VehicleAttributes>, Vehicle>>;
    getAll: (options?: VehicleGetAllOptions | undefined) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").VehicleAttributes>>[], Vehicle[]>>;
    update: (id: number, updateVehicleData: VehicleServerParamsPatchFormData) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").VehicleAttributes>, Vehicle>>;
    create: (vehicleData: VehicleServerParamsPostFormData) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").VehicleAttributes>, Vehicle>>;
    destroy: (id: number) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").VehicleAttributes>, Vehicle>>;
    fromObject: (data: VehicleServerResponseGet["data"]) => Vehicle;
}
