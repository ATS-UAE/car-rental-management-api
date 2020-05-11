import { Authenticated } from "./Authenticated";
import { UserServerResponseGet, ExtractServerResponseData, ServerResponseMeta, UserServerParamsPost } from "./shared/typings";
import { Category } from "./Category";
export declare class User {
    private login;
    data: ExtractServerResponseData<UserServerResponseGet>;
    meta: ServerResponseMeta;
    constructor(login: Authenticated, data: ExtractServerResponseData<UserServerResponseGet>, meta: ServerResponseMeta);
    static getOne: (login: Authenticated, userId: number) => Promise<User>;
    static getAll: (login: Authenticated) => Promise<User[]>;
    static create: (login: Authenticated, userData: UserServerParamsPost) => Promise<User>;
    update: (updatedVehicleData: import("./shared/typings").DatePropsToUnix<Pick<Pick<import("./shared/typings").UserAttributes, "password" | "blocked" | "clientId" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "contractNo" | "objectNo" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "role" | "userCreatorId" | "timeZone">, never> & Pick<Partial<Pick<import("./shared/typings").UserAttributes, "password" | "blocked" | "clientId" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "contractNo" | "objectNo" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "role" | "userCreatorId" | "timeZone">>, "password" | "blocked" | "clientId" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "userImageSrc" | "licenseImageSrc" | "role" | "timeZone"> & {
        categories?: number[] | undefined;
    }>) => Promise<void>;
    static update: (login: Authenticated, userId: number, updatedVehicleData: import("./shared/typings").DatePropsToUnix<Pick<Pick<import("./shared/typings").UserAttributes, "password" | "blocked" | "clientId" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "contractNo" | "objectNo" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "role" | "userCreatorId" | "timeZone">, never> & Pick<Partial<Pick<import("./shared/typings").UserAttributes, "password" | "blocked" | "clientId" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "contractNo" | "objectNo" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "role" | "userCreatorId" | "timeZone">>, "password" | "blocked" | "clientId" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "userImageSrc" | "licenseImageSrc" | "role" | "timeZone"> & {
        categories?: number[] | undefined;
    }>) => Promise<User>;
    destroy: () => Promise<void>;
    getCategories: () => Promise<Category[]>;
}
