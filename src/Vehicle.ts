import {
	VehicleServerResponseGet,
	ExtractServerResponseData,
	VehicleServerResponseGetAll,
	VehicleServerResponsePost,
	VehicleServerParamsPost,
	VehicleServerParamsPatch,
	VehicleServerResponsePatch,
	VehicleServerResponseDelete,
	BookingServerResponseGetAll,
	WialonUnitServerResponseGet,
	CategoryServerResponseGetAll,
	CategoryServerResponseGet,
	ReplaceAttributes,
	Role
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

export interface VehicleGetAllOptions {
	from: number;
	to: number;
}

export class Vehicle {
	constructor(
		private login: Authenticated,
		public data: ExtractServerResponseData<VehicleServerResponseGet>
	) {}

	public static ROLES_ALLOWED_TO_SEND_COMMANDS_WITHOUT_BOOKINGS = [
		Role.ADMIN,
		Role.KEY_MANAGER,
		Role.MASTER
	];

	public static getOne = async (login: Authenticated, vehicleId: number) => {
		const { data: responseData } = await login.api.get<
			VehicleServerResponseGet
		>(`/vehicles/${vehicleId}`);
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new Vehicle(login, data), meta);
	};

	public static getAll = async (
		login: Authenticated,
		options?: VehicleGetAllOptions
	) => {
		let url = `/vehicles`;
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
		>(`/vehicles`, ...constructFormDataPayload(vehicleData));
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
		>(`/vehicles/${vehicleId}`, ...constructFormDataPayload(vehicleData));
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new Vehicle(login, data), meta);
	};

	public update = async (
		updatedVehicleData: VehicleServerParamsPatchFormData
	) => {
		const { data: responseData } = await this.login.api.patch<
			VehicleServerResponsePatch
		>(
			`/vehicles/${this.data.id}`,
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
		>(`/vehicles/${this.data.id}`);
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
		>(`/vehicles/${this.data.id}/bookings`);

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
		>(`/vehicles/${this.data.id}/wialon_unit`);

		const { data, ...meta } = responseData;

		return new ServerResponse(
			data,
			() => new WialonUnit(this.login, data),
			meta
		);
	};

	public getCategoryCost = async () => {
		const { data: responseData } = await this.login.api.get<
			CategoryServerResponseGet
		>(`/vehicles/${this.data.id}/category_cost`);

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
		>(`/vehicles/${this.data.id}/categories`);

		const { data, ...meta } = responseData;

		return new ServerResponse(
			data,
			() => data.map((c) => new Category(this.login, c)),
			meta
		);
	};

	public canUserSendCommand = async () => {
		const userRole = this.login.data.role;
		const canUserRoleSendCommandWithoutBooking =
			Vehicle.ROLES_ALLOWED_TO_SEND_COMMANDS_WITHOUT_BOOKINGS.indexOf(
				userRole
			) > 0;

		if (canUserRoleSendCommandWithoutBooking) {
			return true;
		}
		return this.isVehicleBookedToUser();
	};

	public isVehicleBookedToUser = async () => {
		const bookingData = await Booking.getAll(this.login);
		const userBookings = bookingData.getData();
		return userBookings.some((booking) => {
			if (booking.isBookedToUser()) {
				return booking.isCurrentlyActive();
			}
			return false;
		});
	};

	public toObject = () => {
		return this.data;
	};
}
