import { Authenticated } from "./Authenticated";
import {
	UserServerResponseGet,
	ExtractServerResponseData,
	ServerResponseMeta,
	UserServerResponseGetAll,
	UserServerResponsePost,
	UserServerParamsPost,
	UserServerParamsPatch,
	UserServerResponsePatch,
	UserServerResponseDelete
} from "./shared/typings";

export class User {
	constructor(
		private login: Authenticated,
		public data: ExtractServerResponseData<UserServerResponseGet>,
		public meta: ServerResponseMeta
	) {}

	public static getOne = async (login: Authenticated, userId: number) => {
		const { data: responseData } = await login.api.get<
			UserServerResponseGet
		>(`${login.options.baseUrl}/users/${userId}`);
		const { data, ...meta } = responseData;
		return new User(login, data, meta);
	};

	public static getAll = async (login: Authenticated) => {
		const { data: responseData } = await login.api.get<
			UserServerResponseGetAll
		>(`${login.options.baseUrl}/users`);
		const { data, ...meta } = responseData;
		return data.map((v) => new User(login, v, meta));
	};

	public static create = async (
		login: Authenticated,
		userData: UserServerParamsPost
	) => {
		const { data: responseData } = await login.api.post<
			UserServerResponsePost
		>(`${login.options.baseUrl}/users`, userData);
		const { data, ...meta } = responseData;
		return new User(login, data, meta);
	};

	public update = async (updatedVehicleData: UserServerParamsPatch) => {
		const { data: responseData } = await this.login.api.patch<
			UserServerResponsePatch
		>(
			`${this.login.options.baseUrl}/users/${this.data.id}`,
			updatedVehicleData
		);
		const { data, ...meta } = responseData;
		this.data = data;
		this.meta = meta;
	};

	public destroy = async () => {
		const { data: responseData } = await this.login.api.delete<
			UserServerResponseDelete
		>(`${this.login.options.baseUrl}/users/${this.data.id}`);
		const { data, ...meta } = responseData;
		this.data = data;
		this.meta = meta;
	};
}
