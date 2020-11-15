import { LocationServerResponseGet, ExtractServerResponseData, LocationServerParamsPost, LocationServerParamsPatch } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { User } from "./User";
import { ServerResponse } from "./ServerResponse";
export declare class Location {
    private login;
    data: ExtractServerResponseData<LocationServerResponseGet>;
    constructor(login: Authenticated, data: ExtractServerResponseData<LocationServerResponseGet>);
    static getOne: (login: Authenticated, locationId: number) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").LocationAttributes>, Location>>;
    static getAll: (login: Authenticated) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").LocationAttributes>[], Location[]>>;
    static create: (login: Authenticated, locationData: LocationServerParamsPost) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").LocationAttributes>, Location>>;
    static update: (login: Authenticated, locationId: number, updatedVehicleData: LocationServerParamsPatch) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").LocationAttributes>, Location>>;
    update: (updatedVehicleData: LocationServerParamsPatch) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").LocationAttributes>, Location>>;
    destroy: () => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").LocationAttributes>, Location>>;
    getUsers: () => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<Pick<import("car-rental-management-shared").UserAttributes, "blocked" | "id" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "clientId" | "role" | "timeZone" | "createdAt" | "updatedAt">>[], User[]>>;
    toObject: () => import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").LocationAttributes>;
}
