import { Authenticated } from "./Authenticated";
import { Category } from "./Category";
import {
	CategoryServerParamsPost,
	CategoryServerParamsPatch,
	CategoryServerResponseDelete
} from "./shared/typings";

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
}
