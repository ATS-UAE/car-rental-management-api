import { ServerResponseMeta, AuthServerResponseGet } from "car-rental-management-shared";
import type { Requester } from "./Requester";
export interface ApiOptions {
    baseUrl: string;
}
/**
 * This class will hold the authentication data as well as the tools to communicate to the API server.
 */
export declare class Authenticated {
    api: Requester;
    options: ApiOptions;
    data: AuthServerResponseGet["data"];
    meta: ServerResponseMeta;
    protected constructor(api: Requester, options: ApiOptions, data: AuthServerResponseGet["data"], meta: ServerResponseMeta);
}
