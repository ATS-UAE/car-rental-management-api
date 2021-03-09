import {
	WialonUnitServerResponseGet,
	ExtractServerResponseData,
	WialonUnitServerResponseGetAll
} from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { ServerResponse } from "./ServerResponse";

export class WialonUnit {
	constructor(
		private login: Authenticated,
		public data: ExtractServerResponseData<WialonUnitServerResponseGet>
	) {}

	public static getOne = async (login: Authenticated, bookingId: number) => {
		const { data: responseData } = await login.api.get<
			WialonUnitServerResponseGet
		>(`/wialon_units/${bookingId}`);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => new WialonUnit(login, data),
			meta
		);
	};

	public static getAll = async (login: Authenticated) => {
		const { data: responseData } = await login.api.get<
			WialonUnitServerResponseGetAll
		>(`/wialon_units`);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => data.map((v) => new WialonUnit(login, v)),
			meta
		);
	};

	public sendCommand = async (command: string) => {
		await this.login.api.post(`/wialon_units1/${this.data.id}`, {
			command
		});
	};

	public toObject = () => {
		return this.data;
	};
}
