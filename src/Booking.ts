import { Authenticated } from "./Authenticated";
import {
	BookingServerResponseGet,
	ExtractServerResponseData,
	ServerResponseMeta,
	BookingServerResponseGetAll,
	BookingServerResponsePost,
	BookingServerParamsPost,
	BookingServerParamsPatch,
	BookingServerResponsePatch,
	BookingServerResponseDelete
} from "./shared/typings";

export class Booking {
	constructor(
		private login: Authenticated,
		public data: ExtractServerResponseData<BookingServerResponseGet>,
		public meta: ServerResponseMeta
	) {}

	public static getOne = async (login: Authenticated, bookingId: number) => {
		const { data: responseData } = await login.api.get<
			BookingServerResponseGet
		>(`${login.options.baseUrl}/bookings/${bookingId}`);
		const { data, ...meta } = responseData;
		return new Booking(login, data, meta);
	};

	public static getAll = async (login: Authenticated) => {
		const { data: responseData } = await login.api.get<
			BookingServerResponseGetAll
		>(`${login.options.baseUrl}/bookings`);
		const { data, ...meta } = responseData;
		return data.map((v) => new Booking(login, v, meta));
	};

	public static create = async (
		login: Authenticated,
		bookingData: BookingServerParamsPost
	) => {
		const { data: responseData } = await login.api.post<
			BookingServerResponsePost
		>(`${login.options.baseUrl}/bookings`, bookingData);
		const { data, ...meta } = responseData;
		return new Booking(login, data, meta);
	};

	public update = async (updatedVehicleData: BookingServerParamsPatch) => {
		const { data: responseData } = await this.login.api.patch<
			BookingServerResponsePatch
		>(
			`${this.login.options.baseUrl}/bookings/${this.data.id}`,
			updatedVehicleData
		);
		const { data, ...meta } = responseData;
		this.data = data;
		this.meta = meta;
	};

	public approve = async () => this.update({ approved: true });

	public deny = async () => this.update({ approved: false });

	public destroy = async () => {
		const { data: responseData } = await this.login.api.delete<
			BookingServerResponseDelete
		>(`${this.login.options.baseUrl}/bookings/${this.data.id}`);
		const { data, ...meta } = responseData;
		this.data = data;
		this.meta = meta;
	};
}
