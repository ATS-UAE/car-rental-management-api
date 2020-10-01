import { PushSubscriptionParamsPost } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
export declare class PushSubscriptionFactory extends Authenticated {
    sendSubscription: (subscription: PushSubscriptionParamsPost) => void;
}
