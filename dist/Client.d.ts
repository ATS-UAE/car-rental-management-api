import { ClientServerResponseGet, ExtractServerResponseData, ClientServerParamsPost, ClientServerParamsPatch } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { Location } from "./Location";
import { ServerResponse } from "./ServerResponse";
import { User } from "./User";
import { Vehicle, VehicleGetAllOptions } from "./Vehicle";
export declare class Client {
    private login;
    data: ExtractServerResponseData<ClientServerResponseGet>;
    constructor(login: Authenticated, data: ExtractServerResponseData<ClientServerResponseGet>);
    static getOne: (login: Authenticated, clientId: number) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").ClientAttributes>, Client>>;
    static getAll: (login: Authenticated) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").ClientAttributes>[], Client[]>>;
    static create: (login: Authenticated, clientData: ClientServerParamsPost) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").ClientAttributes>, Client>>;
    static update: (login: Authenticated, clientId: number, updatedVehicleData: ClientServerParamsPatch) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").ClientAttributes>, Client>>;
    update: (updatedVehicleData: ClientServerParamsPatch) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").ClientAttributes>, Client>>;
    destroy: () => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").ClientAttributes>, Client>>;
    getLocations: () => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").LocationAttributes>[], Location[]>>;
    getUsers: () => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<Pick<import("car-rental-management-shared").UserAttributes, "blocked" | "id" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "clientId" | "role" | "timeZone" | "createdAt" | "updatedAt">>[], User[]>>;
    getVehicles: (options?: VehicleGetAllOptions | undefined) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").VehicleAttributes>>[], Vehicle[]>>;
    toObject: () => import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").ClientAttributes>;
}
