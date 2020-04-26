import moxios from "moxios";
import { createApiInstance } from "./createApiInstance";
import { getOne as bookingGetResponse } from "../fixtures/response/bookings/getOne";
import { BASE_URL } from "../fixtures";

type CreateApiInstanceParams = Parameters<typeof bookingGetResponse>;

export const createBookingInstance = async (
	data: CreateApiInstanceParams[0] = {},
	meta: CreateApiInstanceParams[1] = {}
) => {
	const api = await createApiInstance();
	const VEHICLE_ID = 1;
	const GET_ONE_RESPONSE = bookingGetResponse(data, meta);
	moxios.stubOnce("get", `${BASE_URL}/bookings/${VEHICLE_ID}`, {
		response: GET_ONE_RESPONSE
	});
	return api.booking.getOne(VEHICLE_ID);
};
