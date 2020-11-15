import { DatePropsToUnix, VehicleCategoryAttributes } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { VehicleCategory } from "./VehicleCategory";
export declare class VehicleCategoryFactory extends Authenticated {
    getAll: () => Promise<import("./ServerResponse").ServerResponse<DatePropsToUnix<VehicleCategoryAttributes>[], VehicleCategory[]>>;
    fromObject: (data: DatePropsToUnix<VehicleCategoryAttributes>) => VehicleCategory;
}
