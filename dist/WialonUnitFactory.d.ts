import { WialonUnitServerResponseGet } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { WialonUnit } from "./WialonUnit";
export declare class WialonUnitFactory extends Authenticated {
    getOne: (id: number) => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").WialonUnitAttributes, WialonUnit>>;
    getAll: () => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").WialonUnitAttributes[], WialonUnit[]>>;
    fromObject: (data: WialonUnitServerResponseGet["data"]) => WialonUnit;
}
