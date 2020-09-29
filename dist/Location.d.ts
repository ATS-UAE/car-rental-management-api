import { LocationServerResponseGet, ExtractServerResponseData, ServerResponseMeta } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
export declare class Location {
    private login;
    data: ExtractServerResponseData<LocationServerResponseGet>;
    meta: ServerResponseMeta;
    constructor(login: Authenticated, data: ExtractServerResponseData<LocationServerResponseGet>, meta: ServerResponseMeta);
    static getOne: (login: Authenticated, locationId: number) => Promise<Location>;
    static getAll: (login: Authenticated) => Promise<Location[]>;
    static create: (login: Authenticated, locationData: import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").UseParameters<Pick<import("car-rental-management-shared").LocationAttributes, "address" | "lat" | "lng" | "name" | "locationImageSrc">, "address" | "lat" | "lng" | "name", "locationImageSrc">>) => Promise<Location>;
    static update: (login: Authenticated, locationId: number, updatedVehicleData: import("car-rental-management-shared").DatePropsToUnix<Partial<Pick<import("car-rental-management-shared").LocationAttributes, "address" | "lat" | "lng" | "name" | "locationImageSrc">>>) => Promise<Location>;
    update: (updatedVehicleData: import("car-rental-management-shared").DatePropsToUnix<Partial<Pick<import("car-rental-management-shared").LocationAttributes, "address" | "lat" | "lng" | "name" | "locationImageSrc">>>) => Promise<void>;
    destroy: () => Promise<void>;
}
