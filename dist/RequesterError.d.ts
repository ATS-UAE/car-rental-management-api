import { AxiosError } from "axios";
import { ServerResponse } from "car-rental-management-shared";
export declare class RequesterError extends Error {
    private axiosError;
    constructor(axiosError: AxiosError<ServerResponse<null>>);
    get responseData(): import("axios").AxiosResponse<ServerResponse<null>> | null;
    get statusCode(): number | null;
    get isNetworkError(): boolean;
}
