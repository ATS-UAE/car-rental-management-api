import { Authenticated } from "./Authenticated";
import { CategoryServerResponseGet, ExtractServerResponseData, ServerResponseMeta } from "./shared/typings";
export declare class Category {
    private login;
    data: ExtractServerResponseData<CategoryServerResponseGet>;
    meta: ServerResponseMeta;
    constructor(login: Authenticated, data: ExtractServerResponseData<CategoryServerResponseGet>, meta: ServerResponseMeta);
    static getOne: (login: Authenticated, userId: number) => Promise<Category>;
    static getAll: (login: Authenticated) => Promise<Category[]>;
    static create: (login: Authenticated, userData: Pick<import("./shared/typings").CategoryAttributes, "clientId" | "name">) => Promise<Category>;
    update: (updatedVehicleData: import("./shared/typings").DatePropsToUnix<Partial<Pick<import("./shared/typings").CategoryAttributes, "clientId" | "name">>>) => Promise<void>;
    static update: (login: Authenticated, userId: number, updatedVehicleData: import("./shared/typings").DatePropsToUnix<Partial<Pick<import("./shared/typings").CategoryAttributes, "clientId" | "name">>>) => Promise<Category>;
    destroy: () => Promise<void>;
}
