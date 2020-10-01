import { PushSubscriptionParamsPost } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
export declare class PushSubscription {
    static sendSubscription: (login: Authenticated, subscription: PushSubscriptionParamsPost) => void;
}
