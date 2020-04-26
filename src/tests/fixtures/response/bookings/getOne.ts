import { createServerResponse } from "../../../utils/createServerResponse";
import {
	BookingServerResponseGet,
	BookingChargeUnit,
	ServerResponseMeta,
	BookingType
} from "../../../../shared/typings";

export const getOne = (
	vehicleData: Partial<BookingServerResponseGet["data"]> = {},
	meta: Partial<ServerResponseMeta> = {}
): BookingServerResponseGet => {
	return createServerResponse(
		meta.code || 200,
		meta.errors || [],
		meta.success || true,
		meta.message || "Success",
		{
			amount: null,
			approved: null,
			bookingType: BookingType.BUSINESS,
			createdAt: 0,
			updatedAt: 0,
			endFuel: 0,
			endMileage: 0,
			BookingChargeUnit: BookingChargeUnit.KILOMETER,
			finished: false,
			from: 0,
			to: 1,
			id: 1,
			paid: false,
			pickupDate: 0,
			replaceVehicleId: null,
			returnDate: null,
			startFuel: 0,
			startMileage: 0,
			userId: 1,
			vehicleId: 2
		}
	);
};
