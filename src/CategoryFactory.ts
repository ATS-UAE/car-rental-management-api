import {
	CategoryServerParamsPost,
	CategoryServerParamsPatch,
	CategoryServerResponseDelete,
	CategoryServerResponseGet
} from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { Category } from "./Category";

export class CategoryFactory extends Authenticated {
	public getOne = (id: number) => {
		return Category.getOne(this, id);
	};

	public getAll = () => {
		return Category.getAll(this);
	};

	public create = (clientData: CategoryServerParamsPost) => {
		return Category.create(this, clientData);
	};

	public update = (
		id: number,
		updatedCategoryData: CategoryServerParamsPatch
	) => {
		return Category.update(this, id, updatedCategoryData);
	};

	public destroy = async (id: number) => {
		const { data: responseData } = await this.api.delete<
			CategoryServerResponseDelete
		>(`${this.options.baseUrl}/categories/${id}`);
		return responseData;
	};

	public fromObject = (data: CategoryServerResponseGet["data"]) => {
		return new Category(this, data);
	};
}
