import { Authenticated } from "./Authenticated";
import { Vehicle } from "./Vehicle";
export declare class VehicleFactory extends Authenticated {
    getOne: (id: number) => Promise<Vehicle>;
    getAll: () => Promise<Vehicle[]>;
}
