import { WialonUnitServerResponseGet, ExtractServerResponseData } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { ServerResponse } from "./ServerResponse";
export declare class WialonUnit {
    data: ExtractServerResponseData<WialonUnitServerResponseGet>;
    constructor(data: ExtractServerResponseData<WialonUnitServerResponseGet>);
    static getOne: (login: Authenticated, bookingId: number) => Promise<ServerResponse<import("car-rental-management-shared").WialonUnitAttributes, WialonUnit>>;
    static getAll: (login: Authenticated) => Promise<ServerResponse<import("car-rental-management-shared").WialonUnitAttributes[], WialonUnit[]>>;
    toObject: () => import("car-rental-management-shared").WialonUnitAttributes;
}
