import { Authenticated } from "./Authenticated";
import { User } from "./User";
import { UserServerParamsPost } from "./shared/typings";
export declare class UserFactory extends Authenticated {
    getOne: (id: number) => Promise<User>;
    getAll: () => Promise<User[]>;
    create: (userData: UserServerParamsPost) => Promise<User>;
    update: (userId: number, userData: import("./shared/typings").DatePropsToUnix<Pick<Pick<import("./shared/typings").UserAttributes, "password" | "blocked" | "clientId" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "role" | "timeZone">, never> & Pick<Partial<Pick<import("./shared/typings").UserAttributes, "password" | "blocked" | "clientId" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "role" | "timeZone">>, "password" | "blocked" | "clientId" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "userImageSrc" | "licenseImageSrc" | "role" | "timeZone"> & {
        categories?: number[] | undefined;
    }>) => Promise<User>;
}
