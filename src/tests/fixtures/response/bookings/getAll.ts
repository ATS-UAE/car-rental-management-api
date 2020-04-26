import { createServerResponse } from "../../../utils/createServerResponse";
import {
	ServerResponseMeta,
	BookingServerResponseGetAll
} from "../../../../shared/typings";
import { getOne } from "./getOne";

export const getAll = (
	meta: Partial<ServerResponseMeta> = {}
): BookingServerResponseGetAll => {
	return createServerResponse(
		meta.code || 200,
		meta.errors || [],
		meta.success || true,
		meta.message || "Success",
		[getOne().data, getOne({ id: 2 }).data]
	);
};
