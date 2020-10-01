import { PushSubscriptionParamsPost } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
export declare class PushSubscription extends Authenticated {
    sendSubscription: (subscription: PushSubscriptionParamsPost) => void;
}
