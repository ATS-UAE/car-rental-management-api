import { Authenticated } from "./Authenticated";
import { VehicleCategory } from "./VehicleCategory";
export declare class VehicleCategoryFactory extends Authenticated {
    getAll: () => Promise<VehicleCategory[]>;
}
