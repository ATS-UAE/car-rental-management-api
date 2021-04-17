import { AxiosError } from "axios";
import { ServerResponse } from "car-rental-management-shared";
export declare class ApiError extends Error {
    private axiosError;
    constructor(axiosError: AxiosError<ServerResponse<null>>);
    get responseData(): ServerResponse<null> | null;
    get statusCode(): number | null;
    get isNetworkError(): boolean;
}
