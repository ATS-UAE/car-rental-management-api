import { CategoryServerResponseGet } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { Category } from "./Category";
export declare class CategoryFactory extends Authenticated {
    getOne: (id: number) => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").CategoryRelationAttributes, Category>>;
    getAll: () => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").CategoryRelationAttributes[], Category[]>>;
    create: (clientData: import("car-rental-management-shared").UseParameters<import("car-rental-management-shared").CategoryAttributes, "clientId" | "name", "bookingChargeCount" | "bookingCharge" | "bookingChargeUnit">) => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").CategoryRelationAttributes, Category>>;
    update: (id: number, updatedCategoryData: import("car-rental-management-shared").DatePropsToUnix<Partial<Pick<import("car-rental-management-shared").CategoryAttributes, "clientId" | "name" | "bookingChargeCount" | "bookingCharge" | "bookingChargeUnit">>>) => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").CategoryRelationAttributes, Category>>;
    destroy: (id: number) => Promise<CategoryServerResponseGet>;
    fromObject: (data: import("car-rental-management-shared").CategoryRelationAttributes) => Category;
}
