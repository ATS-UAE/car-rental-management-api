"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PushSubscription = /** @class */ (function () {
    function PushSubscription() {
    }
    PushSubscription.sendSubscription = function (login, subscription) {
        login.api.post("/push_notifications/subscriptions", subscription);
    };
    return PushSubscription;
}());
exports.PushSubscription = PushSubscription;
