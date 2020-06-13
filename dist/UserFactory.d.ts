import { Authenticated } from "./Authenticated";
import { User } from "./User";
export declare class UserFactory extends Authenticated {
    getOne: (id: number) => Promise<User>;
    getAll: () => Promise<User[]>;
    create: (userData: import("./shared/typings").ReplaceAttributes<import("./shared/typings").UserServerParamsPost, {
        userImageSrc?: string | File | null | undefined;
    }>) => Promise<User>;
    update: (userId: number, userData: import("./shared/typings").ReplaceAttributes<import("./shared/typings").DatePropsToUnix<Pick<Pick<import("./shared/typings").UserAttributes, "password" | "blocked" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "clientId" | "role" | "timeZone">, never> & Pick<Partial<Pick<import("./shared/typings").UserAttributes, "password" | "blocked" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "clientId" | "role" | "timeZone">>, "password" | "blocked" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "userImageSrc" | "licenseImageSrc" | "clientId" | "role" | "timeZone"> & {
        categories?: number[] | undefined;
    }>, {
        userImageSrc?: string | File | null | undefined;
    }>) => Promise<User>;
}
