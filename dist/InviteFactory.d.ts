import { InviteServerParamsPost, ServerResponse } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
export declare class InviteFactory extends Authenticated {
    send: (inviteOptions: InviteServerParamsPost) => Promise<import("axios").AxiosResponse<ServerResponse<null>>>;
}
