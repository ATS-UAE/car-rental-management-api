"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushSubscription = void 0;
class PushSubscription {
}
exports.PushSubscription = PushSubscription;
PushSubscription.sendSubscription = (login, subscription) => {
    login.api.post(`/push_notifications/subscriptions`, subscription);
};
