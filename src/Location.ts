import {
	LocationServerResponseGet,
	ExtractServerResponseData,
	ServerResponseMeta,
	LocationServerResponseGetAll,
	LocationServerResponsePost,
	LocationServerParamsPost,
	LocationServerParamsPatch,
	LocationServerResponsePatch,
	LocationServerResponseDelete,
	UserServerResponseGetAll
} from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { User } from "./User";

export class Location {
	constructor(
		private login: Authenticated,
		public data: ExtractServerResponseData<LocationServerResponseGet>,
		public meta: ServerResponseMeta
	) {}

	public static getOne = async (login: Authenticated, locationId: number) => {
		const { data: responseData } = await login.api.get<
			LocationServerResponseGet
		>(`${login.options.baseUrl}/locations/${locationId}`);
		const { data, ...meta } = responseData;
		return new Location(login, data, meta);
	};

	public static getAll = async (login: Authenticated) => {
		const { data: responseData } = await login.api.get<
			LocationServerResponseGetAll
		>(`${login.options.baseUrl}/locations`);
		const { data, ...meta } = responseData;
		return data.map((v) => new Location(login, v, meta));
	};

	public static create = async (
		login: Authenticated,
		locationData: LocationServerParamsPost
	) => {
		const { data: responseData } = await login.api.post<
			LocationServerResponsePost
		>(`${login.options.baseUrl}/locations`, locationData);
		const { data, ...meta } = responseData;
		return new Location(login, data, meta);
	};

	public static update = async (
		login: Authenticated,
		locationId: number,
		updatedVehicleData: LocationServerParamsPatch
	) => {
		const { data: responseData } = await login.api.patch<
			LocationServerResponsePatch
		>(
			`${login.options.baseUrl}/locations/${locationId}`,
			updatedVehicleData
		);
		const { data, ...meta } = responseData;
		return new Location(login, data, meta);
	};

	public update = async (updatedVehicleData: LocationServerParamsPatch) => {
		const { data: responseData } = await this.login.api.patch<
			LocationServerResponsePatch
		>(
			`${this.login.options.baseUrl}/locations/${this.data.id}`,
			updatedVehicleData
		);
		const { data, ...meta } = responseData;
		this.data = data;
		this.meta = meta;
	};

	public destroy = async () => {
		const { data: responseData } = await this.login.api.delete<
			LocationServerResponseDelete
		>(`${this.login.options.baseUrl}/locations/${this.data.id}`);
		const { data, ...meta } = responseData;
		this.data = data;
		this.meta = meta;
	};

	public getUsers = async () => {
		const { data: responseData } = await this.login.api.get<
			UserServerResponseGetAll
		>(`${this.login.options.baseUrl}/locations/${this.data.id}/users`);
		const { data, ...meta } = responseData;
		return data.map((user) => new User(this.login, user, meta));
	};
}
