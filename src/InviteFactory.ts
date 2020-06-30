import axios from "axios";
import { Authenticated } from "./Authenticated";
import { InviteServerParamsPost, ServerResponse } from "./shared/typings";

export class InviteFactory extends Authenticated {
	public invite = (inviteOptions: InviteServerParamsPost) => {
		return axios.post<ServerResponse<null>>(
			`${this.options.baseUrl}/api/carbooking/invites`,
			inviteOptions
		);
	};
}
