import { Authenticated } from "./Authenticated";
import { User } from "./User";
export declare class UserFactory extends Authenticated {
    getOne: (id: number) => Promise<User>;
    getAll: () => Promise<User[]>;
    create: (userData: import("car-rental-management-shared").ReplaceAttributes<import("car-rental-management-shared").UserCreateOptions, {
        userImageSrc?: string | File | null | undefined;
    }>) => Promise<User>;
    update: (userId: number, userData: import("car-rental-management-shared").ReplaceAttributes<import("car-rental-management-shared").DatePropsToUnix<Pick<Pick<import("car-rental-management-shared").UserAttributes, "password" | "blocked" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "clientId" | "role" | "timeZone">, never> & Pick<Partial<Pick<import("car-rental-management-shared").UserAttributes, "password" | "blocked" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "clientId" | "role" | "timeZone">>, "password" | "blocked" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "userImageSrc" | "licenseImageSrc" | "clientId" | "role" | "timeZone"> & {
        categories?: number[] | undefined;
    }>, {
        userImageSrc?: string | File | null | undefined;
    }>) => Promise<User>;
}
