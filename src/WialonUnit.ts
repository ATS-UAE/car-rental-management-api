import {
	WialonUnitServerResponseGet,
	ExtractServerResponseData,
	WialonUnitServerResponseGetAll
} from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { ServerResponse } from "./ServerResponse";

export class WialonUnit {
	constructor(
		public data: ExtractServerResponseData<WialonUnitServerResponseGet>
	) {}

	public static getOne = async (login: Authenticated, bookingId: number) => {
		const { data: responseData } = await login.api.get<
			WialonUnitServerResponseGet
		>(`${login.options.baseUrl}/wialon_units/${bookingId}`);
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new WialonUnit(data), meta);
	};

	public static getAll = async (login: Authenticated) => {
		const { data: responseData } = await login.api.get<
			WialonUnitServerResponseGetAll
		>(`${login.options.baseUrl}/wialon_units`);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => data.map((v) => new WialonUnit(v)),
			meta
		);
	};

	public toObject = () => {
		return this.data;
	};
}
