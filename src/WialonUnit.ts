import {
	WialonUnitServerResponseGet,
	ExtractServerResponseData,
	ServerResponseMeta,
	WialonUnitServerResponseGetAll
} from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";

export class WialonUnit {
	constructor(
		public data: ExtractServerResponseData<WialonUnitServerResponseGet>,
		public meta: ServerResponseMeta
	) {}

	public static getOne = async (login: Authenticated, bookingId: number) => {
		const { data: responseData } = await login.api.get<
			WialonUnitServerResponseGet
		>(`${login.options.baseUrl}/wialon_units/${bookingId}`);
		const { data, ...meta } = responseData;
		return new WialonUnit(data, meta);
	};

	public static getAll = async (login: Authenticated) => {
		const { data: responseData } = await login.api.get<
			WialonUnitServerResponseGetAll
		>(`${login.options.baseUrl}/wialon_units`);
		const { data, ...meta } = responseData;
		return data.map((v) => new WialonUnit(v, meta));
	};
}
