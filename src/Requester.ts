import axios, { AxiosInstance } from "axios";
import { RequesterError } from "./RequesterError";

export interface RequesterConfig {
	headers: Record<string, string>;
}

export interface RequesterResponse<Data> {
	data: Data;
}

export class Requester {
	private api: AxiosInstance;

	constructor(private baseUrl: string) {
		this.api = axios.create({
			withCredentials: true
		});
	}

	public get = async <ResponseData>(
		path: string,
		config?: RequesterConfig
	): Promise<RequesterResponse<ResponseData>> => {
		try {
			const response = await this.api.get<ResponseData>(
				this.buildUrl(path),
				config
			);
			return {
				data: response.data
			};
		} catch (e) {
			throw new RequesterError(e);
		}
	};

	public patch = async <ResponseData>(
		path: string,
		body: unknown,
		config?: RequesterConfig
	): Promise<RequesterResponse<ResponseData>> => {
		try {
			const response = await this.api.patch<ResponseData>(
				this.buildUrl(path),
				body,
				config
			);
			return {
				data: response.data
			};
		} catch (e) {
			throw new RequesterError(e);
		}
	};

	public post = async <ResponseData>(
		path: string,
		body: unknown,
		config?: RequesterConfig
	): Promise<RequesterResponse<ResponseData>> => {
		try {
			const response = await this.api.post(
				this.buildUrl(path),
				body,
				config
			);
			return {
				data: response.data
			};
		} catch (e) {
			throw new RequesterError(e);
		}
	};

	public put = async <ResponseData>(
		path: string,
		body: unknown,
		config?: RequesterConfig
	): Promise<RequesterResponse<ResponseData>> => {
		try {
			const response = await this.api.post(
				this.buildUrl(path),
				body,
				config
			);
			return {
				data: response.data
			};
		} catch (e) {
			throw new RequesterError(e);
		}
	};

	public delete = async <ResponseData>(
		path: string,
		config?: RequesterConfig
	): Promise<RequesterResponse<ResponseData>> => {
		try {
			const response = await this.api.delete(this.buildUrl(path), config);
			return {
				data: response.data
			};
		} catch (e) {
			throw new RequesterError(e);
		}
	};

	private buildUrl = (path: string) => {
		return `${this.baseUrl}${path}`;
	};
}
