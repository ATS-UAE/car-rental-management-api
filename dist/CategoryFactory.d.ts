import { Authenticated } from "./Authenticated";
import { Category } from "./Category";
export declare class CategoryFactory extends Authenticated {
    getOne: (id: number) => Promise<Category>;
    getAll: () => Promise<Category[]>;
    create: (clientData: import("car-rental-management-shared").UseParameters<import("car-rental-management-shared").CategoryAttributes, "clientId" | "name", "bookingChargeCount" | "bookingCharge" | "bookingChargeUnit">) => Promise<Category>;
    update: (id: number, updatedCategoryData: import("car-rental-management-shared").DatePropsToUnix<Partial<Pick<import("car-rental-management-shared").CategoryAttributes, "clientId" | "name" | "bookingChargeCount" | "bookingCharge" | "bookingChargeUnit">>>) => Promise<Category>;
    destroy: (id: number) => Promise<import("car-rental-management-shared").CategoryServerResponseGet>;
}
