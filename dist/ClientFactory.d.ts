import { Authenticated } from "./Authenticated";
import { Client } from "./Client";
import { ClientServerParamsPatch } from "./shared/typings";
export declare class ClientFactory extends Authenticated {
    getOne: (id: number) => Promise<Client>;
    getAll: () => Promise<Client[]>;
    create: (clientData: import("./shared/typings").DatePropsToUnix<import("./shared/typings").UseParameters<Pick<import("./shared/typings").ClientAttributes, "name">, "name", never>>) => Promise<Client>;
    update: (id: number, updatedClientData: ClientServerParamsPatch) => Promise<Client>;
    destroy: (id: number) => Promise<import("./shared/typings").ClientServerResponseGet>;
}
