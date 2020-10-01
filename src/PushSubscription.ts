import {
	PushSubscriptionParamsPost,
	PushSubscriptionResponsePost
} from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";

export class PushSubscription extends Authenticated {
	public sendSubscription = (subscription: PushSubscriptionParamsPost) => {
		this.api.post<PushSubscriptionResponsePost>(
			`${this.options.baseUrl}/push_notifications/subscriptions`,
			subscription
		);
	};
}
