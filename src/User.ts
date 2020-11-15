import {
	UserServerResponseGet,
	ExtractServerResponseData,
	UserServerResponseGetAll,
	UserServerResponsePost,
	UserServerParamsPatch,
	UserServerResponsePatch,
	UserServerResponseDelete,
	CategoryServerResponseGetAll,
	ReplaceAttributes,
	UserCreateOptions,
	LocationServerResponseGetAll
} from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { Category } from "./Category";
import { Location } from "./Location";
import { ServerResponse } from "./ServerResponse";
import { constructFormDataPayload } from "./utils";

export type UserServerParamsPostFormData = ReplaceAttributes<
	UserCreateOptions,
	{ userImageSrc?: File | null | string }
>;

export type UserServerParamsPatchFormData = ReplaceAttributes<
	UserServerParamsPatch,
	{ userImageSrc?: File | null | string }
>;

export class User {
	constructor(
		private login: Authenticated,
		public data: ExtractServerResponseData<UserServerResponseGet>
	) {}

	public static getOne = async (login: Authenticated, userId: number) => {
		const { data: responseData } = await login.api.get<
			UserServerResponseGet
		>(`${login.options.baseUrl}/users/${userId}`);
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new User(login, data), meta);
	};

	public static getAll = async (login: Authenticated) => {
		const { data: responseData } = await login.api.get<
			UserServerResponseGetAll
		>(`${login.options.baseUrl}/users`);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => data.map((v) => new User(login, v)),
			meta
		);
	};

	public static create = async (
		login: Authenticated,
		userData: UserServerParamsPostFormData
	) => {
		const { data: responseData } = await login.api.post<
			UserServerResponsePost
		>(
			`${login.options.baseUrl}/users`,
			...constructFormDataPayload(userData)
		);
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new User(login, data), meta);
	};

	public update = async (
		updatedVehicleData: UserServerParamsPatchFormData
	) => {
		const { data: responseData } = await this.login.api.patch<
			UserServerResponsePatch
		>(
			`${this.login.options.baseUrl}/users/${this.data.id}`,
			...constructFormDataPayload(updatedVehicleData)
		);
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new User(this.login, data), meta);
	};

	public static update = async (
		login: Authenticated,
		userId: number,
		updatedVehicleData: UserServerParamsPatchFormData
	) => {
		const { data: responseData } = await login.api.patch<
			UserServerResponsePatch
		>(
			`${login.options.baseUrl}/users/${userId}`,
			...constructFormDataPayload(updatedVehicleData)
		);
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new User(login, data), meta);
	};

	public destroy = async () => {
		const { data: responseData } = await this.login.api.delete<
			UserServerResponseDelete
		>(`${this.login.options.baseUrl}/users/${this.data.id}`);
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new User(this.login, data), meta);
	};

	public getCategories = async () => {
		const { data: responseData } = await this.login.api.get<
			CategoryServerResponseGetAll
		>(`${this.login.options.baseUrl}/users/${this.data.id}/categories`);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => data.map((c) => new Category(this.login, c)),
			meta
		);
	};

	public getLocations = async () => {
		const { data: responseData } = await this.login.api.get<
			LocationServerResponseGetAll
		>(`${this.login.options.baseUrl}/users/${this.data.id}/locations`);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => data.map((location) => new Location(this.login, location)),
			meta
		);
	};

	public toObject = () => {
		return this.data;
	};
}
