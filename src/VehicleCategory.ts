import { Authenticated } from "./Authenticated";
import {
	ExtractServerResponseData,
	ServerResponseMeta,
	VehicleCategoryServerResponseGetAll,
	FlattenIfArray
} from "./shared/typings";

export class VehicleCategory {
	constructor(
		private login: Authenticated,
		public data: FlattenIfArray<
			ExtractServerResponseData<VehicleCategoryServerResponseGetAll>
		>,
		public meta: ServerResponseMeta
	) {}

	public static getAll = async (login: Authenticated) => {
		const { data: responseData } = await login.api.get<
			VehicleCategoryServerResponseGetAll
		>(`${login.options.baseUrl}/vehicle_categories`);
		const { data, ...meta } = responseData;
		return data.map((v) => new VehicleCategory(login, v, meta));
	};
}
