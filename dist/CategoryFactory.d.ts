import { CategoryServerParamsPost, CategoryServerParamsPatch, CategoryServerResponseGet } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { Category } from "./Category";
export declare class CategoryFactory extends Authenticated {
    getOne: (id: number) => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").CategoryRelationAttributes, Category>>;
    getAll: () => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").CategoryRelationAttributes[], Category[]>>;
    create: (clientData: CategoryServerParamsPost) => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").CategoryRelationAttributes, Category>>;
    update: (id: number, updatedCategoryData: CategoryServerParamsPatch) => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").CategoryRelationAttributes, Category>>;
    destroy: (id: number) => Promise<CategoryServerResponseGet>;
    fromObject: (data: CategoryServerResponseGet["data"]) => Category;
}
