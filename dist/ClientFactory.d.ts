import { ClientServerParamsPost, ClientServerParamsPatch, ClientServerResponseGet } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { Client } from "./Client";
export declare class ClientFactory extends Authenticated {
    getOne: (id: number) => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").ClientAttributes>, Client>>;
    getAll: () => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").ClientAttributes>[], Client[]>>;
    create: (clientData: ClientServerParamsPost) => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").ClientAttributes>, Client>>;
    update: (id: number, updatedClientData: ClientServerParamsPatch) => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").ClientAttributes>, Client>>;
    destroy: (id: number) => Promise<ClientServerResponseGet>;
    fromObject: (data: ClientServerResponseGet["data"]) => Client;
}
