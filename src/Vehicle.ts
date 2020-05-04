import { Authenticated } from "./Authenticated";
import {
	VehicleServerResponseGet,
	ExtractServerResponseData,
	ServerResponseMeta,
	VehicleServerResponseGetAll,
	VehicleServerResponsePost,
	VehicleServerParamsPost,
	VehicleServerParamsPatch,
	VehicleServerResponsePatch,
	VehicleServerResponseDelete
} from "./shared/typings";

export class Vehicle {
	constructor(
		private login: Authenticated,
		public data: ExtractServerResponseData<VehicleServerResponseGet>,
		public meta: ServerResponseMeta
	) {}

	public static getOne = async (login: Authenticated, vehicleId: number) => {
		const { data: responseData } = await login.api.get<
			VehicleServerResponseGet
		>(`${login.options.baseUrl}/vehicles/${vehicleId}`);
		const { data, ...meta } = responseData;
		return new Vehicle(login, data, meta);
	};

	public static getAll = async (login: Authenticated) => {
		const { data: responseData } = await login.api.get<
			VehicleServerResponseGetAll
		>(`${login.options.baseUrl}/vehicles`);
		const { data, ...meta } = responseData;
		return data.map((v) => new Vehicle(login, v, meta));
	};

	public static create = async (
		login: Authenticated,
		vehicleData: VehicleServerParamsPost
	) => {
		const { data: responseData } = await login.api.post<
			VehicleServerResponsePost
		>(`${login.options.baseUrl}/vehicles`, vehicleData);
		const { data, ...meta } = responseData;
		return new Vehicle(login, data, meta);
	};

	public update = async (updatedVehicleData: VehicleServerParamsPatch) => {
		const { data: responseData } = await this.login.api.patch<
			VehicleServerResponsePatch
		>(
			`${this.login.options.baseUrl}/vehicles/${this.data.id}`,
			updatedVehicleData
		);
		const { data, ...meta } = responseData;
		this.data = data;
		this.meta = meta;
	};

	public destroy = async () => {
		const { data: responseData } = await this.login.api.delete<
			VehicleServerResponseDelete
		>(`${this.login.options.baseUrl}/vehicles/${this.data.id}`);
		const { data, ...meta } = responseData;
		this.data = data;
		this.meta = meta;
	};
}
