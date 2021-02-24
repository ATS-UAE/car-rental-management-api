import {
	ExtractServerResponseData,
	VehicleCategoryServerResponseGetAll,
	FlattenIfArray
} from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { ServerResponse } from "./ServerResponse";

export class VehicleCategory {
	constructor(
		private login: Authenticated,
		public data: FlattenIfArray<
			ExtractServerResponseData<VehicleCategoryServerResponseGetAll>
		>
	) {}

	public static getAll = async (login: Authenticated) => {
		const { data: responseData } = await login.api.get<
			VehicleCategoryServerResponseGetAll
		>(`/vehicle_categories`);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => data.map((v) => new VehicleCategory(login, v)),
			meta
		);
	};

	public toObject = () => {
		return this.data;
	};
}
