import { WialonUnitServerResponseGet, ExtractServerResponseData, ServerResponseMeta } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
export declare class WialonUnit {
    data: ExtractServerResponseData<WialonUnitServerResponseGet>;
    meta: ServerResponseMeta;
    constructor(data: ExtractServerResponseData<WialonUnitServerResponseGet>, meta: ServerResponseMeta);
    static getOne: (login: Authenticated, bookingId: number) => Promise<WialonUnit>;
    static getAll: (login: Authenticated) => Promise<WialonUnit[]>;
}
