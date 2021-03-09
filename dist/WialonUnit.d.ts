import { WialonUnitServerResponseGet, ExtractServerResponseData } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { ServerResponse } from "./ServerResponse";
export declare class WialonUnit {
    private login;
    data: ExtractServerResponseData<WialonUnitServerResponseGet>;
    constructor(login: Authenticated, data: ExtractServerResponseData<WialonUnitServerResponseGet>);
    static getOne: (login: Authenticated, bookingId: number) => Promise<ServerResponse<import("car-rental-management-shared").WialonUnitAttributes, WialonUnit>>;
    static getAll: (login: Authenticated) => Promise<ServerResponse<import("car-rental-management-shared").WialonUnitAttributes[], WialonUnit[]>>;
    sendCommand: (command: string) => Promise<void>;
    toObject: () => import("car-rental-management-shared").WialonUnitAttributes;
}
