import { Authenticated } from "./Authenticated";
import { InviteServerParamsPost, ServerResponse } from "./shared/typings";
export declare class InviteFactory extends Authenticated {
    invite: (inviteOptions: InviteServerParamsPost) => Promise<import("axios").AxiosResponse<ServerResponse<null>>>;
}
