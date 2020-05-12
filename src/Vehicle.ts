import { Authenticated } from "./Authenticated";
import {
	VehicleServerResponseGet,
	ExtractServerResponseData,
	ServerResponseMeta,
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
	CategoryServerResponseGetAll
} from "./shared/typings";
import { Booking } from "./Booking";
import { getBookingStatus } from "./shared/utils";
import { WialonUnit } from "./WialonUnit";
import { Category } from "./Category";

interface IsVehicleAvailableForBookingFunction {
	(bookings: Booking[]): boolean;
	(bookings: ExtractServerResponseData<VehicleServerResponseGet>[]): boolean;
	(): Promise<boolean>;
}

export class Vehicle {
	constructor(
		private login: Authenticated,
		public data: ExtractServerResponseData<VehicleServerResponseGet>,
		public meta: ServerResponseMeta
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
		return new Vehicle(login, data, meta);
	};

	public static getAll = async (login: Authenticated) => {
		const { data: responseData } = await login.api.get<
			VehicleServerResponseGetAll
		>(`${login.options.baseUrl}/vehicles`);
		const { data, ...meta } = responseData;
		return data.map((v) => new Vehicle(login, v, meta));
	};

	public static create = async (
		login: Authenticated,
		vehicleData: VehicleServerParamsPost
	) => {
		const { data: responseData } = await login.api.post<
			VehicleServerResponsePost
		>(`${login.options.baseUrl}/vehicles`, vehicleData);
		const { data, ...meta } = responseData;
		return new Vehicle(login, data, meta);
	};

	public update = async (updatedVehicleData: VehicleServerParamsPatch) => {
		const { data: responseData } = await this.login.api.patch<
			VehicleServerResponsePatch
		>(
			`${this.login.options.baseUrl}/vehicles/${this.data.id}`,
			updatedVehicleData
		);
		const { data, ...meta } = responseData;
		this.data = data;
		this.meta = meta;
	};

	public destroy = async () => {
		const { data: responseData } = await this.login.api.delete<
			VehicleServerResponseDelete
		>(`${this.login.options.baseUrl}/vehicles/${this.data.id}`);
		const { data, ...meta } = responseData;
		this.data = data;
		this.meta = meta;
	};

	public getBookings = async () => {
		const { data: responseData } = await this.login.api.get<
			BookingServerResponseGetAll
		>(`${this.login.options.baseUrl}/vehicles/${this.data.id}/bookings`);

		const { data, ...meta } = responseData;

		return data.map((b) => new Booking(this.login, b, meta));
	};

	public getWialonUnit = async () => {
		const { data: responseData } = await this.login.api.get<
			WialonUnitServerResponseGet
		>(`${this.login.options.baseUrl}/vehicles/${this.data.id}/wialonUnit`);

		const { data, ...meta } = responseData;

		return new WialonUnit(data, meta);
	};

	public getCategories = async () => {
		const { data: responseData } = await this.login.api.get<
			CategoryServerResponseGetAll
		>(`${this.login.options.baseUrl}/vehicles/${this.data.id}/categories`);

		const { data, ...meta } = responseData;

		return data.map((c) => new Category(this.login, c, meta));
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
				vehicleBookings.map((vehicle) => vehicle.data)
			);
		});
	}) as IsVehicleAvailableForBookingFunction;
}
