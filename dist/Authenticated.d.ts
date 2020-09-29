import { AxiosInstance } from "axios";
import { ServerResponseMeta, AuthServerResponseGet } from "car-rental-management-shared";
export interface ApiOptions {
    baseUrl: string;
}
/**
 * This class will hold the authentication data as well as the tools to communicate to the API server.
 */
export declare class Authenticated {
    api: AxiosInstance;
    options: ApiOptions;
    data: AuthServerResponseGet["data"];
    meta: ServerResponseMeta;
    protected constructor(api: AxiosInstance, options: ApiOptions, data: AuthServerResponseGet["data"], meta: ServerResponseMeta);
}
