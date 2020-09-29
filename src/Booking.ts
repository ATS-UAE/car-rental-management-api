import moment from "moment";
import {
	BookingServerResponseGet,
	ExtractServerResponseData,
	ServerResponseMeta,
	BookingServerResponseGetAll,
	BookingServerResponsePost,
	BookingServerParamsPost,
	BookingServerParamsPatch,
	BookingServerResponsePatch,
	BookingServerResponseDelete,
	BookingStatus,
	VehicleServerResponseGet,
	UserServerResponseGet
} from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { Vehicle } from "./Vehicle";
import { User } from "./User";

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

	public static update = async (
		login: Authenticated,
		bookingId: number,
		updatedVehicleData: BookingServerParamsPatch
	) => {
		const { data: responseData } = await login.api.patch<
			BookingServerResponsePatch
		>(`${login.options.baseUrl}/bookings/${bookingId}`, updatedVehicleData);
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

	public getBookingStatus = (): BookingStatus => {
		let status = BookingStatus.UNKNOWN;
		const currentTime = moment();
		const hasPassedFrom = moment(this.data.from, "X").isSameOrBefore(
			currentTime
		);
		const hasPassedTo = moment(this.data.to, "X").isSameOrBefore(
			currentTime
		);
		if (this.data.approved) {
			if (hasPassedFrom && !hasPassedTo) {
				status = BookingStatus.ONGOING;
			} else if (hasPassedTo) {
				status = BookingStatus.FINISHED;
			} else {
				status = BookingStatus.APPROVED;
			}
		} else if (this.data.approved === null) {
			status = BookingStatus.PENDING;
		} else if (this.data.approved === false) {
			status = BookingStatus.DENIED;
		}

		return status;
	};

	public getVehicle = async () => {
		const { data: responseData } = await this.login.api.get<
			VehicleServerResponseGet
		>(`${this.login.options.baseUrl}/bookings/${this.data.id}/vehicle`);
		const { data, ...meta } = responseData;
		return new Vehicle(this.login, data, meta);
	};

	public getUser = async () => {
		const { data: responseData } = await this.login.api.get<
			UserServerResponseGet
		>(`${this.login.options.baseUrl}/bookings/${this.data.id}/user`);
		const { data, ...meta } = responseData;
		return new User(this.login, data, meta);
	};
}
