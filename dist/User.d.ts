import { UserServerResponseGet, ExtractServerResponseData, UserServerParamsPatch, ReplaceAttributes, UserCreateOptions } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { Category } from "./Category";
import { Location } from "./Location";
import { ServerResponse } from "./ServerResponse";
export declare type UserServerParamsPostFormData = ReplaceAttributes<UserCreateOptions, {
    userImageSrc?: File | null | string;
}>;
export declare type UserServerParamsPatchFormData = ReplaceAttributes<UserServerParamsPatch, {
    userImageSrc?: File | null | string;
}>;
export declare class User {
    private login;
    data: ExtractServerResponseData<UserServerResponseGet>;
    constructor(login: Authenticated, data: ExtractServerResponseData<UserServerResponseGet>);
    static getOne: (login: Authenticated, userId: number) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<Pick<import("car-rental-management-shared").UserAttributes, "blocked" | "id" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "clientId" | "role" | "timeZone" | "createdAt" | "updatedAt">>, User>>;
    static getAll: (login: Authenticated) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<Pick<import("car-rental-management-shared").UserAttributes, "blocked" | "id" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "clientId" | "role" | "timeZone" | "createdAt" | "updatedAt">>[], User[]>>;
    static create: (login: Authenticated, userData: ReplaceAttributes<UserCreateOptions, {
        userImageSrc?: string | File | null | undefined;
    }>) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<Pick<import("car-rental-management-shared").UserAttributes, "blocked" | "id" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "clientId" | "role" | "timeZone" | "createdAt" | "updatedAt">>, User>>;
    update: (updatedVehicleData: ReplaceAttributes<import("car-rental-management-shared").DatePropsToUnix<Pick<Pick<import("car-rental-management-shared").UserAttributes, "password" | "blocked" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "clientId" | "role" | "timeZone">, never> & Pick<Partial<Pick<import("car-rental-management-shared").UserAttributes, "password" | "blocked" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "clientId" | "role" | "timeZone">>, "password" | "blocked" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "userImageSrc" | "licenseImageSrc" | "clientId" | "role" | "timeZone"> & {
        categories?: number[] | undefined;
        locations?: number[] | undefined;
    }>, {
        userImageSrc?: string | File | null | undefined;
    }>) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<Pick<import("car-rental-management-shared").UserAttributes, "blocked" | "id" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "clientId" | "role" | "timeZone" | "createdAt" | "updatedAt">>, User>>;
    static update: (login: Authenticated, userId: number, updatedVehicleData: ReplaceAttributes<import("car-rental-management-shared").DatePropsToUnix<Pick<Pick<import("car-rental-management-shared").UserAttributes, "password" | "blocked" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "clientId" | "role" | "timeZone">, never> & Pick<Partial<Pick<import("car-rental-management-shared").UserAttributes, "password" | "blocked" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "clientId" | "role" | "timeZone">>, "password" | "blocked" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "userImageSrc" | "licenseImageSrc" | "clientId" | "role" | "timeZone"> & {
        categories?: number[] | undefined;
        locations?: number[] | undefined;
    }>, {
        userImageSrc?: string | File | null | undefined;
    }>) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<Pick<import("car-rental-management-shared").UserAttributes, "blocked" | "id" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "clientId" | "role" | "timeZone" | "createdAt" | "updatedAt">>, User>>;
    destroy: () => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<Pick<import("car-rental-management-shared").UserAttributes, "blocked" | "id" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "clientId" | "role" | "timeZone" | "createdAt" | "updatedAt">>, User>>;
    getCategories: () => Promise<ServerResponse<import("car-rental-management-shared").CategoryRelationAttributes[], Category[]>>;
    getLocations: () => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").LocationAttributes>[], Location[]>>;
}
