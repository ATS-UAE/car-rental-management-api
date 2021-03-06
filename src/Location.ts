import {
	LocationServerResponseGet,
	ExtractServerResponseData,
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
import { ServerResponse } from "./ServerResponse";

export class Location {
	constructor(
		private login: Authenticated,
		public data: ExtractServerResponseData<LocationServerResponseGet>
	) {}

	public static getOne = async (login: Authenticated, locationId: number) => {
		const { data: responseData } = await login.api.get<
			LocationServerResponseGet
		>(`/locations/${locationId}`);
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new Location(login, data), meta);
	};

	public static getAll = async (login: Authenticated) => {
		const { data: responseData } = await login.api.get<
			LocationServerResponseGetAll
		>(`/locations`);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => data.map((v) => new Location(login, v)),
			meta
		);
	};

	public static create = async (
		login: Authenticated,
		locationData: LocationServerParamsPost
	) => {
		const { data: responseData } = await login.api.post<
			LocationServerResponsePost
		>(`/locations`, locationData);
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new Location(login, data), meta);
	};

	public static update = async (
		login: Authenticated,
		locationId: number,
		updatedVehicleData: LocationServerParamsPatch
	) => {
		const { data: responseData } = await login.api.patch<
			LocationServerResponsePatch
		>(`/locations/${locationId}`, updatedVehicleData);
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new Location(login, data), meta);
	};

	public update = async (updatedVehicleData: LocationServerParamsPatch) => {
		const { data: responseData } = await this.login.api.patch<
			LocationServerResponsePatch
		>(`/locations/${this.data.id}`, updatedVehicleData);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => new Location(this.login, data),
			meta
		);
	};

	public destroy = async () => {
		const { data: responseData } = await this.login.api.delete<
			LocationServerResponseDelete
		>(`/locations/${this.data.id}`);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => new Location(this.login, data),
			meta
		);
	};

	public getUsers = async () => {
		const { data: responseData } = await this.login.api.get<
			UserServerResponseGetAll
		>(`/locations/${this.data.id}/users`);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => data.map((user) => new User(this.login, user)),
			meta
		);
	};

	public toObject = () => {
		return this.data;
	};
}
