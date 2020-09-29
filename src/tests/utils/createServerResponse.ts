import { ServerResponse } from "car-rental-management-shared";

export const createServerResponse = <T>(
	code: number,
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
