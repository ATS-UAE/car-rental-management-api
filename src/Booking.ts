import {
	BookingServerResponseGet,
	ExtractServerResponseData,
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
import { ServerResponse } from "./ServerResponse";

export class Booking {
	constructor(
		private login: Authenticated,
		public data: ExtractServerResponseData<BookingServerResponseGet>
	) {}

	public static getOne = async (login: Authenticated, bookingId: number) => {
		const { data: responseData } = await login.api.get<
			BookingServerResponseGet
		>(`/bookings/${bookingId}`);
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new Booking(login, data), meta);
	};

	public static getAll = async (login: Authenticated) => {
		const { data: responseData } = await login.api.get<
			BookingServerResponseGetAll
		>(`/bookings`);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => data.map((v) => new Booking(login, v)),
			meta
		);
	};

	public static create = async (
		login: Authenticated,
		bookingData: BookingServerParamsPost
	) => {
		const { data: responseData } = await login.api.post<
			BookingServerResponsePost
		>(`/bookings`, bookingData);
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new Booking(login, data), meta);
	};

	public static update = async (
		login: Authenticated,
		bookingId: number,
		updatedVehicleData: BookingServerParamsPatch
	) => {
		const { data: responseData } = await login.api.patch<
			BookingServerResponsePatch
		>(`/bookings/${bookingId}`, updatedVehicleData);
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new Booking(login, data), meta);
	};

	public isBookedToUser = async () => {
		return this.login.data.id === this.data.userId;
	};

	public update = async (updatedVehicleData: BookingServerParamsPatch) => {
		const { data: responseData } = await this.login.api.patch<
			BookingServerResponsePatch
		>(`/bookings/${this.data.id}`, updatedVehicleData);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => new Booking(this.login, data),
			meta
		);
	};

	public approve = async () => this.update({ approved: true });

	public deny = async () => this.update({ approved: false });

	public destroy = async () => {
		const { data: responseData } = await this.login.api.delete<
			BookingServerResponseDelete
		>(`/bookings/${this.data.id}`);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => new Booking(this.login, data),
			meta
		);
	};

	public getBookingStatus = (): BookingStatus => {
		let status = BookingStatus.UNKNOWN;
		const currentTime = Math.round(Date.now() / 10);
		const hasPassedFrom = this.data.from <= currentTime;
		const hasPassedTo = this.data.to <= currentTime;
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

	public isCurrentlyActive = () => {
		const currentTime = Math.round(Date.now() / 10);

		const isActiveBooking =
			this.data.from <= currentTime && currentTime <= this.data.to;

		const isApproved = this.data.approved === true;

		return isActiveBooking && isApproved;
	};

	public getVehicle = async () => {
		const { data: responseData } = await this.login.api.get<
			VehicleServerResponseGet
		>(`/bookings/${this.data.id}/vehicle`);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => new Vehicle(this.login, data),
			meta
		);
	};

	public getUser = async () => {
		const { data: responseData } = await this.login.api.get<
			UserServerResponseGet
		>(`/bookings/${this.data.id}/user`);
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new User(this.login, data), meta);
	};

	public toObject = () => {
		return this.data;
	};
}
