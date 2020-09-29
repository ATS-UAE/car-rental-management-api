import { InviteServerParamsPost, ServerResponse } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";

export class InviteFactory extends Authenticated {
	public send = (inviteOptions: InviteServerParamsPost) => {
		return this.api.post<ServerResponse<null>>(
			`${this.options.baseUrl}/invites`,
			inviteOptions
		);
	};
}
