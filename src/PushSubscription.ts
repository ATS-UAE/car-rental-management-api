import {
	PushSubscriptionParamsPost,
	PushSubscriptionResponsePost
} from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";

export class PushSubscription {
	public static sendSubscription = (
		login: Authenticated,
		subscription: PushSubscriptionParamsPost
	) => {
		login.api.post<PushSubscriptionResponsePost>(
			`/push_notifications/subscriptions`,
			subscription
		);
	};
}
