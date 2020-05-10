import { Authenticated } from "./Authenticated";
import { ClientServerResponseGet, ExtractServerResponseData, ServerResponseMeta, ClientServerParamsPatch } from "./shared/typings";
export declare class Client {
    private login;
    data: ExtractServerResponseData<ClientServerResponseGet>;
    meta: ServerResponseMeta;
    constructor(login: Authenticated, data: ExtractServerResponseData<ClientServerResponseGet>, meta: ServerResponseMeta);
    static getOne: (login: Authenticated, clientId: number) => Promise<Client>;
    static getAll: (login: Authenticated) => Promise<Client[]>;
    static create: (login: Authenticated, clientData: import("./shared/typings").DatePropsToUnix<import("./shared/typings").UseParameters<Pick<import("./shared/typings").ClientAttributes, "name">, "name", never>>) => Promise<Client>;
    static update: (login: Authenticated, clientId: number, updatedVehicleData: ClientServerParamsPatch) => Promise<Client>;
    update: (updatedVehicleData: ClientServerParamsPatch) => Promise<void>;
    destroy: () => Promise<void>;
}
