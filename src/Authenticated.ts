import { AxiosInstance } from "axios";
import { ServerResponseMeta, AuthServerResponseGet } from "car-rental-management-shared";

export interface ApiOptions {
	baseUrl: string;
}

/**
 * This class will hold the authentication data as well as the tools to communicate to the API server.
 */
export class Authenticated {
	protected constructor(
		public api: AxiosInstance,
		public options: ApiOptions,
		public data: AuthServerResponseGet["data"],
		public meta: ServerResponseMeta
	) {}
}
