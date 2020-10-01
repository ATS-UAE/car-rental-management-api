import { PushSubscriptionParamsPost } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { PushSubscription } from "./PushSubscription";

export class PushSubscriptionFactory extends Authenticated {
	public sendSubscription = (subscription: PushSubscriptionParamsPost) => {
		return PushSubscription.sendSubscription(this, subscription);
	};
}
