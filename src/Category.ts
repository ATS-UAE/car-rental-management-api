import {
	CategoryServerResponseGet,
	ExtractServerResponseData,
	CategoryServerResponseGetAll,
	CategoryServerResponsePost,
	CategoryServerParamsPost,
	CategoryServerParamsPatch,
	CategoryServerResponsePatch,
	CategoryServerResponseDelete
} from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { ServerResponse } from "./ServerResponse";

export class Category {
	constructor(
		private login: Authenticated,
		public data: ExtractServerResponseData<CategoryServerResponseGet>
	) {}

	public static getOne = async (login: Authenticated, userId: number) => {
		const { data: responseData } = await login.api.get<
			CategoryServerResponseGet
		>(`/categories/${userId}`);
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new Category(login, data), meta);
	};

	public static getAll = async (login: Authenticated) => {
		const { data: responseData } = await login.api.get<
			CategoryServerResponseGetAll
		>(`/categories`);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => data.map((v) => new Category(login, v)),
			meta
		);
	};

	public static create = async (
		login: Authenticated,
		userData: CategoryServerParamsPost
	) => {
		const { data: responseData } = await login.api.post<
			CategoryServerResponsePost
		>(`/categories`, userData);
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new Category(login, data), meta);
	};

	public update = async (updatedVehicleData: CategoryServerParamsPatch) => {
		const { data: responseData } = await this.login.api.patch<
			CategoryServerResponsePatch
		>(`/categories/${this.data.id}`, updatedVehicleData);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => new Category(this.login, data),
			meta
		);
	};

	public static update = async (
		login: Authenticated,
		userId: number,
		updatedVehicleData: CategoryServerParamsPatch
	) => {
		const { data: responseData } = await login.api.patch<
			CategoryServerResponsePatch
		>(`/categories/${userId}`, updatedVehicleData);
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new Category(login, data), meta);
	};

	public destroy = async () => {
		const { data: responseData } = await this.login.api.delete<
			CategoryServerResponseDelete
		>(`/categories/${this.data.id}`);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => new Category(this.login, data),
			meta
		);
	};

	public toObject = () => {
		return this.data;
	};
}
