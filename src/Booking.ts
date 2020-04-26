import { Authenticated } from "./Authenticated";
import {
	BookingServerResponseGet,
	ExtractServerResponseData,
	ServerResponseMeta,
	BookingServerResponseGetAll,
	BookingServerResponsePost,
	BookingServerParamsPost
} from "./shared/typings";

export class Booking {
	constructor(
		public data: ExtractServerResponseData<BookingServerResponseGet>,
		public meta: ServerResponseMeta
	) {}

	public static getOne = async (login: Authenticated, bookingId: number) => {
		const { data: responseData } = await login.api.get<
			BookingServerResponseGet
		>(`${login.options.baseUrl}/bookings/${bookingId}`);
		const { data, ...meta } = responseData;
		return new Booking(data, meta);
	};

	public static getAll = async (login: Authenticated) => {
		const { data: responseData } = await login.api.get<
			BookingServerResponseGetAll
		>(`${login.options.baseUrl}/bookings`);
		const { data, ...meta } = responseData;
		return data.map((v) => new Booking(v, meta));
	};

	public static create = async (
		login: Authenticated,
		bookingData: BookingServerParamsPost
	) => {
		const { data: responseData } = await login.api.post<
			BookingServerResponsePost
		>(`${login.options.baseUrl}/bookings`, bookingData);
		const { data, ...meta } = responseData;
		return new Booking(data, meta);
	};
}
