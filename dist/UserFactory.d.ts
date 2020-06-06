import { Authenticated } from "./Authenticated";
import { User } from "./User";
import { UserServerParamsPost } from "./shared/typings";
export declare class UserFactory extends Authenticated {
    getOne: (id: number) => Promise<User>;
    getAll: () => Promise<User[]>;
    create: (userData: UserServerParamsPost) => Promise<User>;
    update: (userId: number, userData: import("./shared/typings").DatePropsToUnix<Pick<Pick<import("./shared/typings").UserAttributes, "password" | "blocked" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "clientId" | "role" | "timeZone">, never> & Pick<Partial<Pick<import("./shared/typings").UserAttributes, "password" | "blocked" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "clientId" | "role" | "timeZone">>, "password" | "blocked" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "userImageSrc" | "licenseImageSrc" | "clientId" | "role" | "timeZone"> & {
        categories?: number[] | undefined;
    }>) => Promise<User>;
}
