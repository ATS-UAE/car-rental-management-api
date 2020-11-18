import { ServerResponse, StatusCode } from "car-rental-management-shared";

export const createServerResponse = <T>(
	code: StatusCode,
	errors: ServerResponse<T>["errors"],
	success: boolean,
	message: string,
	data: T
): ServerResponse<T> => {
	return {
		code,
		errors,
		success,
		message,
		data
	};
};
