import axios, { AxiosInstance } from "axios";

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
		const response = await this.api.get<ResponseData>(
			this.buildUrl(path),
			config
		);
		return {
			data: response.data
		};
	};

	public patch = async <ResponseData>(
		path: string,
		body: unknown,
		config?: RequesterConfig
	): Promise<RequesterResponse<ResponseData>> => {
		const response = await this.api.patch<ResponseData>(
			this.buildUrl(path),
			body,
			config
		);
		return {
			data: response.data
		};
	};

	public post = async <ResponseData>(
		path: string,
		body: unknown,
		config?: RequesterConfig
	): Promise<RequesterResponse<ResponseData>> => {
		const response = await this.api.post(this.buildUrl(path), body, config);
		return {
			data: response.data
		};
	};

	public put = async <ResponseData>(
		path: string,
		body: unknown,
		config?: RequesterConfig
	): Promise<RequesterResponse<ResponseData>> => {
		const response = await this.api.post(this.buildUrl(path), body, config);
		return {
			data: response.data
		};
	};

	public delete = async <ResponseData>(
		path: string,
		config?: RequesterConfig
	): Promise<RequesterResponse<ResponseData>> => {
		const response = await this.api.delete(this.buildUrl(path), config);
		return {
			data: response.data
		};
	};

	private buildUrl = (path: string) => {
		return `${path}`;
	};
}
