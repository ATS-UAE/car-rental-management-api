import { Authenticated } from "./Authenticated";
import {
	VehicleServerResponseGet,
	ExtractServerResponseData,
	ServerResponseMeta,
	VehicleServerResponseGetAll
} from "./shared/typings";

export class Vehicle {
	constructor(
		public data: ExtractServerResponseData<VehicleServerResponseGet>,
		public meta: ServerResponseMeta
	) {}

	public static getOne = async (login: Authenticated, vehicleId: number) => {
		const { data: responseData } = await login.api.get<
			VehicleServerResponseGet
		>(`${login.options.baseUrl}/vehicles/${vehicleId}`);
		const { data, ...meta } = responseData;
		return new Vehicle(data, meta);
	};

	public static getAll = async (login: Authenticated) => {
		const { data: responseData } = await login.api.get<
			VehicleServerResponseGetAll
		>(`${login.options.baseUrl}/vehicles`);
		const { data, ...meta } = responseData;
		return data.map((v) => new Vehicle(v, meta));
	};
}
