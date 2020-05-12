import { Authenticated } from "./Authenticated";
import {
	ClientServerResponseGet,
	ExtractServerResponseData,
	ServerResponseMeta,
	ClientServerResponseGetAll,
	ClientServerResponsePost,
	ClientServerParamsPost,
	ClientServerParamsPatch,
	ClientServerResponsePatch,
	ClientServerResponseDelete,
	LocationServerResponseGetAll,
	UserServerResponseGetAll,
	VehicleServerResponseGetAll
} from "./shared/typings";
import { Location } from "./Location";
import { User } from "./User";
import { Vehicle } from "./Vehicle";

export class Client {
	constructor(
		private login: Authenticated,
		public data: ExtractServerResponseData<ClientServerResponseGet>,
		public meta: ServerResponseMeta
	) {}

	public static getOne = async (login: Authenticated, clientId: number) => {
		const { data: responseData } = await login.api.get<
			ClientServerResponseGet
		>(`${login.options.baseUrl}/clients/${clientId}`);
		const { data, ...meta } = responseData;
		return new Client(login, data, meta);
	};

	public static getAll = async (login: Authenticated) => {
		const { data: responseData } = await login.api.get<
			ClientServerResponseGetAll
		>(`${login.options.baseUrl}/clients`);
		const { data, ...meta } = responseData;
		return data.map((v) => new Client(login, v, meta));
	};

	public static create = async (
		login: Authenticated,
		clientData: ClientServerParamsPost
	) => {
		const { data: responseData } = await login.api.post<
			ClientServerResponsePost
		>(`${login.options.baseUrl}/clients`, clientData);
		const { data, ...meta } = responseData;
		return new Client(login, data, meta);
	};

	public static update = async (
		login: Authenticated,
		clientId: number,
		updatedVehicleData: ClientServerParamsPatch
	) => {
		const { data: responseData } = await login.api.patch<
			ClientServerResponsePatch
		>(`${login.options.baseUrl}/clients/${clientId}`, updatedVehicleData);
		const { data, ...meta } = responseData;
		return new Client(login, data, meta);
	};

	public update = async (updatedVehicleData: ClientServerParamsPatch) => {
		const { data: responseData } = await this.login.api.patch<
			ClientServerResponsePatch
		>(
			`${this.login.options.baseUrl}/clients/${this.data.id}`,
			updatedVehicleData
		);
		const { data, ...meta } = responseData;
		this.data = data;
		this.meta = meta;
	};

	public destroy = async () => {
		const { data: responseData } = await this.login.api.delete<
			ClientServerResponseDelete
		>(`${this.login.options.baseUrl}/clients/${this.data.id}`);
		const { data, ...meta } = responseData;
		this.data = data;
		this.meta = meta;
	};

	public getLocations = async () => {
		const { data: responseData } = await this.login.api.get<
			LocationServerResponseGetAll
		>(`${this.login.options.baseUrl}/clients/locations`);
		const { data, ...meta } = responseData;
		return data.map((item) => new Location(this.login, item, meta));
	};

	public getUsers = async () => {
		const { data: responseData } = await this.login.api.get<
			UserServerResponseGetAll
		>(`${this.login.options.baseUrl}/clients/users`);
		const { data, ...meta } = responseData;
		return data.map((item) => new User(this.login, item, meta));
	};

	public getVehicles = async () => {
		const { data: responseData } = await this.login.api.get<
			VehicleServerResponseGetAll
		>(`${this.login.options.baseUrl}/clients/vehicles`);
		const { data, ...meta } = responseData;
		return data.map((item) => new Vehicle(this.login, item, meta));
	};
}
