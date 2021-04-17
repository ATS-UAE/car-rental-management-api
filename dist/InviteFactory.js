"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteFactory = void 0;
const Authenticated_1 = require("./Authenticated");
class InviteFactory extends Authenticated_1.Authenticated {
    constructor() {
        super(...arguments);
        this.send = (inviteOptions) => {
            return this.api.post(`/invites`, inviteOptions);
        };
    }
}
exports.InviteFactory = InviteFactory;
