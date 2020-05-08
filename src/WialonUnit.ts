import { Authenticated } from "./Authenticated";
import {
	WialonUnitServerResponseGet,
	ExtractServerResponseData,
	ServerResponseMeta,
	WialonUnitServerResponseGetAll
} from "./shared/typings";

export class WialonUnit {
	constructor(
		public data: ExtractServerResponseData<WialonUnitServerResponseGet>,
		public meta: ServerResponseMeta
	) {}

	public static getOne = async (login: Authenticated, bookingId: number) => {
		const { data: responseData } = await login.api.get<
			WialonUnitServerResponseGet
		>(`${login.options.baseUrl}/units/${bookingId}`);
		const { data, ...meta } = responseData;
		return new WialonUnit(data, meta);
	};

	public static getAll = async (login: Authenticated) => {
		const { data: responseData } = await login.api.get<
			WialonUnitServerResponseGetAll
		>(`${login.options.baseUrl}/units`);
		const { data, ...meta } = responseData;
		return data.map((v) => new WialonUnit(v, meta));
	};
}
