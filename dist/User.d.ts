import { UserServerResponseGet, ExtractServerResponseData, ServerResponseMeta, UserServerParamsPatch, ReplaceAttributes, UserCreateOptions } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { Category } from "./Category";
export declare type UserServerParamsPostFormData = ReplaceAttributes<UserCreateOptions, {
    userImageSrc?: File | null | string;
}>;
export declare type UserServerParamsPatchFormData = ReplaceAttributes<UserServerParamsPatch, {
    userImageSrc?: File | null | string;
}>;
export declare class User {
    private login;
    data: ExtractServerResponseData<UserServerResponseGet>;
    meta: ServerResponseMeta;
    constructor(login: Authenticated, data: ExtractServerResponseData<UserServerResponseGet>, meta: ServerResponseMeta);
    static getOne: (login: Authenticated, userId: number) => Promise<User>;
    static getAll: (login: Authenticated) => Promise<User[]>;
    static create: (login: Authenticated, userData: ReplaceAttributes<UserCreateOptions, {
        userImageSrc?: string | File | null | undefined;
    }>) => Promise<User>;
    update: (updatedVehicleData: ReplaceAttributes<import("car-rental-management-shared").DatePropsToUnix<Pick<Pick<import("car-rental-management-shared").UserAttributes, "password" | "blocked" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "clientId" | "role" | "timeZone">, never> & Pick<Partial<Pick<import("car-rental-management-shared").UserAttributes, "password" | "blocked" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "clientId" | "role" | "timeZone">>, "password" | "blocked" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "userImageSrc" | "licenseImageSrc" | "clientId" | "role" | "timeZone"> & {
        categories?: number[] | undefined;
    }>, {
        userImageSrc?: string | File | null | undefined;
    }>) => Promise<void>;
    static update: (login: Authenticated, userId: number, updatedVehicleData: ReplaceAttributes<import("car-rental-management-shared").DatePropsToUnix<Pick<Pick<import("car-rental-management-shared").UserAttributes, "password" | "blocked" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "clientId" | "role" | "timeZone">, never> & Pick<Partial<Pick<import("car-rental-management-shared").UserAttributes, "password" | "blocked" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "clientId" | "role" | "timeZone">>, "password" | "blocked" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "userImageSrc" | "licenseImageSrc" | "clientId" | "role" | "timeZone"> & {
        categories?: number[] | undefined;
    }>, {
        userImageSrc?: string | File | null | undefined;
    }>) => Promise<User>;
    destroy: () => Promise<void>;
    getCategories: () => Promise<Category[]>;
}
