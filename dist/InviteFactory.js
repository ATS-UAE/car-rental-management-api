"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var Authenticated_1 = require("./Authenticated");
var InviteFactory = /** @class */ (function (_super) {
    __extends(InviteFactory, _super);
    function InviteFactory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.send = function (inviteOptions) {
            return axios_1.default.post(_this.options.baseUrl + "/invites", inviteOptions);
        };
        return _this;
    }
    return InviteFactory;
}(Authenticated_1.Authenticated));
exports.InviteFactory = InviteFactory;
