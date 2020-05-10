import { Authenticated } from "./Authenticated";
import { User } from "./User";
export declare class UserFactory extends Authenticated {
    getOne: (id: number) => Promise<User>;
    getAll: () => Promise<User[]>;
    create: (userData: import("./shared/typings").DatePropsToUnix<import("./shared/typings").UseParameters<Pick<import("./shared/typings").UserAttributes, "password" | "blocked" | "clientId" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "contractNo" | "objectNo" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "role" | "userCreatorId" | "timeZone">, "password" | "clientId" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "role", "userImageSrc" | "timeZone">>) => Promise<User>;
    update: (userId: number, userData: import("./shared/typings").DatePropsToUnix<import("./shared/typings").UseParameters<Pick<import("./shared/typings").UserAttributes, "password" | "blocked" | "clientId" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "contractNo" | "objectNo" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "role" | "userCreatorId" | "timeZone">, never, "password" | "blocked" | "clientId" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "userImageSrc" | "licenseImageSrc" | "role" | "timeZone">>) => Promise<User>;
}
