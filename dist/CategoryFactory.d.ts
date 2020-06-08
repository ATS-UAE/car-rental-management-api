import { Authenticated } from "./Authenticated";
import { Category } from "./Category";
export declare class CategoryFactory extends Authenticated {
    getOne: (id: number) => Promise<Category>;
    getAll: () => Promise<Category[]>;
    create: (clientData: import("./shared/typings").UseParameters<import("./shared/typings").CategoryAttributes, "clientId" | "name", "bookingChargeCount" | "bookingCharge" | "bookingChargeUnit">) => Promise<Category>;
    update: (id: number, updatedCategoryData: import("./shared/typings").DatePropsToUnix<Partial<Pick<import("./shared/typings").CategoryAttributes, "clientId" | "name" | "bookingChargeCount" | "bookingCharge" | "bookingChargeUnit">>>) => Promise<Category>;
    destroy: (id: number) => Promise<import("./shared/typings").CategoryServerResponseGet>;
}
