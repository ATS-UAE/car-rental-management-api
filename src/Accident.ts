import { Authenticated } from "./Authenticated";
import {
	AccidentServerResponseGet,
	ExtractServerResponseData,
	ServerResponseMeta,
	AccidentServerResponseGetAll,
	AccidentServerResponsePost,
	AccidentServerParamsPost,
	AccidentServerParamsPatch,
	AccidentServerResponsePatch,
	AccidentServerResponseDelete
} from "./shared/typings";

export class Accident {
	constructor(
		private login: Authenticated,
		public data: ExtractServerResponseData<AccidentServerResponseGet>,
		public meta: ServerResponseMeta
	) {}

	public static getOne = async (login: Authenticated, accidentId: number) => {
		const { data: responseData } = await login.api.get<
			AccidentServerResponseGet
		>(`${login.options.baseUrl}/accidents/${accidentId}`);
		const { data, ...meta } = responseData;
		return new Accident(login, data, meta);
	};

	public static getAll = async (login: Authenticated) => {
		const { data: responseData } = await login.api.get<
			AccidentServerResponseGetAll
		>(`${login.options.baseUrl}/accidents`);
		const { data, ...meta } = responseData;
		return data.map((v) => new Accident(login, v, meta));
	};

	public static create = async (
		login: Authenticated,
		accidentData: AccidentServerParamsPost
	) => {
		const { data: responseData } = await login.api.post<
			AccidentServerResponsePost
		>(`${login.options.baseUrl}/accidents`, accidentData);
		const { data, ...meta } = responseData;
		return new Accident(login, data, meta);
	};

	public static destroy = async (
		login: Authenticated,
		accidentId: number
	) => {
		const { data: responseData } = await login.api.delete<
			AccidentServerResponseDelete
		>(`${login.options.baseUrl}/accidents/${accidentId}`);
		const { data, ...meta } = responseData;
		return new Accident(login, data, meta);
	};

	public update = async (updatedVehicleData: AccidentServerParamsPatch) => {
		const { data: responseData } = await this.login.api.patch<
			AccidentServerResponsePatch
		>(
			`${this.login.options.baseUrl}/accidents/${this.data.id}`,
			updatedVehicleData
		);
		const { data, ...meta } = responseData;
		this.data = data;
		this.meta = meta;
	};

	public destroy = async () => {
		const { data: responseData } = await this.login.api.delete<
			AccidentServerResponseDelete
		>(`${this.login.options.baseUrl}/accidents/${this.data.id}`);
		const { data, ...meta } = responseData;
		this.data = data;
		this.meta = meta;
	};
}
