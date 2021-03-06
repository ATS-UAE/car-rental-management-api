import {
	ClientServerResponseGet,
	ExtractServerResponseData,
	ClientServerResponseGetAll,
	ClientServerResponsePost,
	ClientServerParamsPost,
	ClientServerParamsPatch,
	ClientServerResponsePatch,
	ClientServerResponseDelete,
	LocationServerResponseGetAll,
	UserServerResponseGetAll,
	VehicleServerResponseGetAll
} from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { Location } from "./Location";
import { ServerResponse } from "./ServerResponse";
import { User } from "./User";
import { Vehicle, VehicleGetAllOptions } from "./Vehicle";

export class Client {
	constructor(
		private login: Authenticated,
		public data: ExtractServerResponseData<ClientServerResponseGet>
	) {}

	public static getOne = async (login: Authenticated, clientId: number) => {
		const { data: responseData } = await login.api.get<
			ClientServerResponseGet
		>(`/clients/${clientId}`);
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new Client(login, data), meta);
	};

	public static getAll = async (login: Authenticated) => {
		const { data: responseData } = await login.api.get<
			ClientServerResponseGetAll
		>(`/clients`);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => data.map((v) => new Client(login, v)),
			meta
		);
	};

	public static create = async (
		login: Authenticated,
		clientData: ClientServerParamsPost
	) => {
		const { data: responseData } = await login.api.post<
			ClientServerResponsePost
		>(`/clients`, clientData);
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new Client(login, data), meta);
	};

	public static update = async (
		login: Authenticated,
		clientId: number,
		updatedVehicleData: ClientServerParamsPatch
	) => {
		const { data: responseData } = await login.api.patch<
			ClientServerResponsePatch
		>(`/clients/${clientId}`, updatedVehicleData);
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new Client(login, data), meta);
	};

	public update = async (updatedVehicleData: ClientServerParamsPatch) => {
		const { data: responseData } = await this.login.api.patch<
			ClientServerResponsePatch
		>(`/clients/${this.data.id}`, updatedVehicleData);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => new Client(this.login, data),
			meta
		);
	};

	public destroy = async () => {
		const { data: responseData } = await this.login.api.delete<
			ClientServerResponseDelete
		>(`/clients/${this.data.id}`);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => new Client(this.login, data),
			meta
		);
	};

	public getLocations = async () => {
		const { data: responseData } = await this.login.api.get<
			LocationServerResponseGetAll
		>(`/clients/${this.data.id}/locations`);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => data.map((item) => new Location(this.login, item)),
			meta
		);
	};

	public getUsers = async () => {
		const { data: responseData } = await this.login.api.get<
			UserServerResponseGetAll
		>(`/clients/${this.data.id}/users`);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => data.map((item) => new User(this.login, item)),
			meta
		);
	};

	public getVehicles = async (options?: VehicleGetAllOptions) => {
		let url = `/clients/${this.data.id}/vehicles`;
		if (options && options.from && options.to) {
			url = `${url}/?from=${options.from}&to=${options.to}`;
		}
		const { data: responseData } = await this.login.api.get<
			VehicleServerResponseGetAll
		>(url);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => data.map((item) => new Vehicle(this.login, item)),
			meta
		);
	};

	public toObject = () => {
		return this.data;
	};
}
