import { Authenticated } from "./Authenticated";
import { Category } from "./Category";
export declare class CategoryFactory extends Authenticated {
    getOne: (id: number) => Promise<Category>;
    getAll: () => Promise<Category[]>;
    create: (clientData: Pick<import("./shared/typings").CategoryAttributes, "clientId" | "name">) => Promise<Category>;
    update: (id: number, updatedCategoryData: import("./shared/typings").DatePropsToUnix<Partial<Pick<import("./shared/typings").CategoryAttributes, "clientId" | "name">>>) => Promise<Category>;
    destroy: (id: number) => Promise<import("./shared/typings").CategoryServerResponseGet>;
}
