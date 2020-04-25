import { AxiosInstance } from "axios";

export interface ApiOptions {
	baseUrl: string;
}

/**
 * All api classes which uses authenticated users will extend this class.
 */
export class Authenticated {
	protected constructor(
		public api: AxiosInstance,
		public options: ApiOptions
	) {}
}
