import { Authenticated } from "./Authenticated";
import { UserServerResponseGet, ExtractServerResponseData, ServerResponseMeta } from "./shared/typings";
export declare class User {
    private login;
    data: ExtractServerResponseData<UserServerResponseGet>;
    meta: ServerResponseMeta;
    constructor(login: Authenticated, data: ExtractServerResponseData<UserServerResponseGet>, meta: ServerResponseMeta);
    static getOne: (login: Authenticated, userId: number) => Promise<User>;
    static getAll: (login: Authenticated) => Promise<User[]>;
    static create: (login: Authenticated, userData: import("./shared/typings").DatePropsToUnix<import("./shared/typings").UseParameters<Pick<import("./shared/typings").UserAttributes, "password" | "blocked" | "clientId" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "contractNo" | "objectNo" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "role" | "userCreatorId" | "timeZone">, "password" | "clientId" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "role", "userImageSrc" | "timeZone">>) => Promise<User>;
    update: (updatedVehicleData: import("./shared/typings").DatePropsToUnix<import("./shared/typings").UseParameters<Pick<import("./shared/typings").UserAttributes, "password" | "blocked" | "clientId" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "contractNo" | "objectNo" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "role" | "userCreatorId" | "timeZone">, never, "password" | "blocked" | "clientId" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "userImageSrc" | "licenseImageSrc" | "role" | "timeZone">>) => Promise<void>;
    static update: (login: Authenticated, userId: number, updatedVehicleData: import("./shared/typings").DatePropsToUnix<import("./shared/typings").UseParameters<Pick<import("./shared/typings").UserAttributes, "password" | "blocked" | "clientId" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "contractNo" | "objectNo" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "role" | "userCreatorId" | "timeZone">, never, "password" | "blocked" | "clientId" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "userImageSrc" | "licenseImageSrc" | "role" | "timeZone">>) => Promise<User>;
    destroy: () => Promise<void>;
}
