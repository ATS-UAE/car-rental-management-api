import { Authenticated } from "./Authenticated";
import { VehicleCategory } from "./VehicleCategory";
export declare class VehicleCategoryFactory extends Authenticated {
    getAll: () => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").VehicleCategoryAttributes>[], VehicleCategory[]>>;
}
