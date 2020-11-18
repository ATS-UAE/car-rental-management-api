import {
	ServerResponseMeta,
	BookingServerResponseGetAll,
	StatusCode
} from "car-rental-management-shared";
import { createServerResponse } from "../../../utils/createServerResponse";
import { getOne } from "./getOne";

export const getAll = (
	meta: Partial<ServerResponseMeta> = {}
): BookingServerResponseGetAll => {
	return createServerResponse(
		meta.code || StatusCode.SUCCESS,
		meta.errors || [],
		meta.success || true,
		meta.message || "Success",
		[getOne().data, getOne({ id: 2 }).data]
	);
};
