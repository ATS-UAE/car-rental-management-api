"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushSubscriptionFactory = void 0;
const Authenticated_1 = require("./Authenticated");
const PushSubscription_1 = require("./PushSubscription");
class PushSubscriptionFactory extends Authenticated_1.Authenticated {
    constructor() {
        super(...arguments);
        this.sendSubscription = (subscription) => {
            return PushSubscription_1.PushSubscription.sendSubscription(this, subscription);
        };
    }
}
exports.PushSubscriptionFactory = PushSubscriptionFactory;
