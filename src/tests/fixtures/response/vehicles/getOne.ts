import {
	VehicleServerResponseGet,
	BookingChargeUnit,
	ServerResponseMeta,
	StatusCode
} from "car-rental-management-shared";
import { createServerResponse } from "../../../utils/createServerResponse";

export const getOne = (
	vehicleData: Partial<VehicleServerResponseGet["data"]> = {},
	meta: Partial<ServerResponseMeta> = {}
): VehicleServerResponseGet => {
	return createServerResponse(
		meta.code || StatusCode.SUCCESS,
		meta.errors || [],
		meta.success || true,
		meta.message || "Success",
		{
			id: 1,
			bookingCharge: 5,
			bookingChargeCount: 1,
			bookingChargeUnit: BookingChargeUnit.KILOMETER,
			brand: "brand 1",
			model: "Model 1",
			plateNumber: "A12345",
			categories: [{ id: 1, name: "Cat 1``" }],
			clientId: 1,
			createdAt: 0,
			defleeted: false,
			locationId: 1,
			parkingLocation: null,
			updatedAt: 0,
			vehicleImageSrc: "www.example.com/vehicle.jpg",
			vin: "VINTEST",
			wialonUnitId: null,
			categoryCostId: 1,
			...vehicleData
		}
	);
};
