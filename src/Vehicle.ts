import {
	getBookingStatus,
	VehicleServerResponseGet,
	ExtractServerResponseData,
	VehicleServerResponseGetAll,
	VehicleServerResponsePost,
	VehicleServerParamsPost,
	VehicleServerParamsPatch,
	VehicleServerResponsePatch,
	VehicleServerResponseDelete,
	BookingServerResponseGetAll,
	BookingStatus,
	BookingServerResponseGet,
	WialonUnitServerResponseGet,
	CategoryServerResponseGetAll,
	CategoryServerResponseGet,
	ReplaceAttributes
} from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { Booking } from "./Booking";
import { WialonUnit } from "./WialonUnit";
import { Category } from "./Category";
import { constructFormDataPayload } from "./utils";
import { ServerResponse } from "./ServerResponse";

export type VehicleServerParamsPatchFormData = ReplaceAttributes<
	VehicleServerParamsPatch,
	{ vehicleImageSrc?: File | null | string }
>;

export type VehicleServerParamsPostFormData = ReplaceAttributes<
	VehicleServerParamsPost,
	{ vehicleImageSrc?: File | null | string }
>;

interface IsVehicleAvailableForBookingFunction {
	(bookings: Booking[]): boolean;
	(bookings: ExtractServerResponseData<VehicleServerResponseGet>[]): boolean;
	(): Promise<boolean>;
}

export interface VehicleGetAllOptions {
	from: number;
	to: number;
}

export class Vehicle {
	constructor(
		private login: Authenticated,
		public data: ExtractServerResponseData<VehicleServerResponseGet>
	) {}

	public static checkAvailabilityFromBookings = (
		bookings: ExtractServerResponseData<BookingServerResponseGet>[]
	) => {
		return bookings.every((booking) => {
			const status = getBookingStatus({
				from: booking.from,
				to: booking.to,
				approved: booking.approved
			});
			if (
				status === BookingStatus.PENDING ||
				status === BookingStatus.APPROVED ||
				status === BookingStatus.ONGOING
			) {
				return false;
			}
			return true;
		});
	};

	public static getOne = async (login: Authenticated, vehicleId: number) => {
		const { data: responseData } = await login.api.get<
			VehicleServerResponseGet
		>(`${login.options.baseUrl}/vehicles/${vehicleId}`);
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new Vehicle(login, data), meta);
	};

	public static getAll = async (
		login: Authenticated,
		options?: VehicleGetAllOptions
	) => {
		let url = `${login.options.baseUrl}/vehicles`;
		if (options && options.from && options.to) {
			url = `${url}/?from=${options.from}&to=${options.to}`;
		}
		const { data: responseData } = await login.api.get<
			VehicleServerResponseGetAll
		>(url);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => data.map((v) => new Vehicle(login, v)),
			meta
		);
	};

	public static create = async (
		login: Authenticated,
		vehicleData: VehicleServerParamsPostFormData
	) => {
		const { data: responseData } = await login.api.post<
			VehicleServerResponsePost
		>(
			`${login.options.baseUrl}/vehicles`,
			...constructFormDataPayload(vehicleData)
		);
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new Vehicle(login, data), meta);
	};

	public static update = async (
		login: Authenticated,
		vehicleId: number,
		vehicleData: VehicleServerParamsPatchFormData
	) => {
		const { data: responseData } = await login.api.patch<
			VehicleServerResponsePatch
		>(
			`${login.options.baseUrl}/vehicles/${vehicleId}`,
			...constructFormDataPayload(vehicleData)
		);
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new Vehicle(login, data), meta);
	};

	public update = async (
		updatedVehicleData: VehicleServerParamsPatchFormData
	) => {
		const { data: responseData } = await this.login.api.patch<
			VehicleServerResponsePatch
		>(
			`${this.login.options.baseUrl}/vehicles/${this.data.id}`,
			...constructFormDataPayload(updatedVehicleData)
		);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => new Vehicle(this.login, data),
			meta
		);
	};

	public destroy = async () => {
		const { data: responseData } = await this.login.api.delete<
			VehicleServerResponseDelete
		>(`${this.login.options.baseUrl}/vehicles/${this.data.id}`);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => new Vehicle(this.login, data),
			meta
		);
	};

	public getBookings = async () => {
		const { data: responseData } = await this.login.api.get<
			BookingServerResponseGetAll
		>(`${this.login.options.baseUrl}/vehicles/${this.data.id}/bookings`);

		const { data, ...meta } = responseData;

		return new ServerResponse(
			data,
			() => data.map((b) => new Booking(this.login, b)),
			meta
		);
	};

	public getWialonUnit = async () => {
		const { data: responseData } = await this.login.api.get<
			WialonUnitServerResponseGet
		>(`${this.login.options.baseUrl}/vehicles/${this.data.id}/wialon_unit`);

		const { data, ...meta } = responseData;

		return new ServerResponse(data, () => new WialonUnit(data), meta);
	};

	public getCategoryCost = async () => {
		const { data: responseData } = await this.login.api.get<
			CategoryServerResponseGet
		>(
			`${this.login.options.baseUrl}/vehicles/${this.data.id}/category_cost`
		);

		const { data, ...meta } = responseData;

		return new ServerResponse(
			data,
			() => new Category(this.login, data),
			meta
		);
	};

	public getCategories = async () => {
		const { data: responseData } = await this.login.api.get<
			CategoryServerResponseGetAll
		>(`${this.login.options.baseUrl}/vehicles/${this.data.id}/categories`);

		const { data, ...meta } = responseData;

		return new ServerResponse(
			data,
			() => data.map((c) => new Category(this.login, c)),
			meta
		);
	};

	public isVehicleAvailableForBooking = ((
		bookings?: Array<
			Booking | ExtractServerResponseData<BookingServerResponseGet>
		>
	): boolean | Promise<boolean> => {
		if (bookings) {
			if (this.data.defleeted === true) {
				return false;
			}
			return Vehicle.checkAvailabilityFromBookings(
				bookings.map((booking) => {
					if (booking instanceof Booking) {
						return booking.data;
					}
					return booking;
				})
			);
		}
		return this.getBookings().then((vehicleBookings) => {
			if (this.data.defleeted === true) {
				return false;
			}
			return Vehicle.checkAvailabilityFromBookings(
				vehicleBookings.rawData.map((vehicle) => vehicle)
			);
		});
	}) as IsVehicleAvailableForBookingFunction;

	public toObject = () => {
		return this.data;
	};
}
