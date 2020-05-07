import { Authenticated } from "./Authenticated";
import { LocationServerResponseGet, ExtractServerResponseData, ServerResponseMeta } from "./shared/typings";
export declare class Location {
    private login;
    data: ExtractServerResponseData<LocationServerResponseGet>;
    meta: ServerResponseMeta;
    constructor(login: Authenticated, data: ExtractServerResponseData<LocationServerResponseGet>, meta: ServerResponseMeta);
    static getOne: (login: Authenticated, locationId: number) => Promise<Location>;
    static getAll: (login: Authenticated) => Promise<Location[]>;
    static create: (login: Authenticated, locationData: import("./shared/typings").DatePropsToUnix<import("./shared/typings").UseParameters<Pick<import("./shared/typings").LocationAttributes, "address" | "lat" | "lng" | "name" | "locationImageSrc">, "address" | "lat" | "lng" | "name", "locationImageSrc">>) => Promise<Location>;
    static update: (login: Authenticated, locationId: number, updatedVehicleData: import("./shared/typings").DatePropsToUnix<Partial<Pick<import("./shared/typings").LocationAttributes, "address" | "lat" | "lng" | "name" | "locationImageSrc">>>) => Promise<Location>;
    update: (updatedVehicleData: import("./shared/typings").DatePropsToUnix<Partial<Pick<import("./shared/typings").LocationAttributes, "address" | "lat" | "lng" | "name" | "locationImageSrc">>>) => Promise<void>;
    destroy: () => Promise<void>;
}
