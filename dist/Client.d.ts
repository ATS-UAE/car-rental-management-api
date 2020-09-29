import { ClientServerResponseGet, ExtractServerResponseData, ServerResponseMeta, ClientServerParamsPatch } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { Location } from "./Location";
import { User } from "./User";
import { Vehicle, VehicleGetAllOptions } from "./Vehicle";
export declare class Client {
    private login;
    data: ExtractServerResponseData<ClientServerResponseGet>;
    meta: ServerResponseMeta;
    constructor(login: Authenticated, data: ExtractServerResponseData<ClientServerResponseGet>, meta: ServerResponseMeta);
    static getOne: (login: Authenticated, clientId: number) => Promise<Client>;
    static getAll: (login: Authenticated) => Promise<Client[]>;
    static create: (login: Authenticated, clientData: import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").UseParameters<Pick<import("car-rental-management-shared").ClientAttributes, "name">, "name", never>>) => Promise<Client>;
    static update: (login: Authenticated, clientId: number, updatedVehicleData: ClientServerParamsPatch) => Promise<Client>;
    update: (updatedVehicleData: ClientServerParamsPatch) => Promise<void>;
    destroy: () => Promise<void>;
    getLocations: () => Promise<Location[]>;
    getUsers: () => Promise<User[]>;
    getVehicles: (options?: VehicleGetAllOptions | undefined) => Promise<Vehicle[]>;
}
