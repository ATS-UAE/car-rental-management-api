import { ServerResponse } from "../../shared/typings";

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
