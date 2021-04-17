import { AxiosError } from "axios";
import { ServerResponse } from "car-rental-management-shared";

export class ApiError extends Error {
	constructor(private axiosError: AxiosError<ServerResponse<null>>) {
		super(axiosError.message);
	}

	public get responseData() {
		if (this.axiosError.response) {
			return this.axiosError.response?.data;
		}
		return null;
	}

	public get statusCode() {
		return this.axiosError.response?.status || null;
	}

	public get isNetworkError() {
		const hasResponse = Boolean(this.axiosError.response?.status);
		return !hasResponse;
	}
}
