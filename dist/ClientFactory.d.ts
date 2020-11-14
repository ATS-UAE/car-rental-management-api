import { ClientServerParamsPatch } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { Client } from "./Client";
export declare class ClientFactory extends Authenticated {
    getOne: (id: number) => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").ClientAttributes>, Client>>;
    getAll: () => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").ClientAttributes>[], Client[]>>;
    create: (clientData: import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").UseParameters<Pick<import("car-rental-management-shared").ClientAttributes, "name">, "name", never>>) => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").ClientAttributes>, Client>>;
    update: (id: number, updatedClientData: ClientServerParamsPatch) => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").ClientAttributes>, Client>>;
    destroy: (id: number) => Promise<import("car-rental-management-shared").ClientServerResponseGet>;
}
