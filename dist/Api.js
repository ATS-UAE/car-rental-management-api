"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const Authenticated_1 = require("./Authenticated");
const VehicleFactory_1 = require("./VehicleFactory");
const BookingFactory_1 = require("./BookingFactory");
const AccidentFactory_1 = require("./AccidentFactory");
const UserFactory_1 = require("./UserFactory");
const LocationFactory_1 = require("./LocationFactory");
const ClientFactory_1 = require("./ClientFactory");
const CategoryFactory_1 = require("./CategoryFactory");
const WialonUnitFactory_1 = require("./WialonUnitFactory");
const VehicleCategoryFactory_1 = require("./VehicleCategoryFactory");
const InviteFactory_1 = require("./InviteFactory");
const PushSubscriptionFactory_1 = require("./PushSubscriptionFactory");
const utils_1 = require("./utils");
const Requester_1 = require("./Requester");
class Api extends Authenticated_1.Authenticated {
    constructor(api, options, data, meta) {
        super(api, options, data, meta);
        this.logout = () => __awaiter(this, void 0, void 0, function* () {
            yield this.api.get(`/auth/logout`);
        });
        this.unsubscribePush = (data) => __awaiter(this, void 0, void 0, function* () {
            yield this.api.post(`/push_notifications/unsubscribe`, data);
        });
        this.subscribePush = (data) => __awaiter(this, void 0, void 0, function* () {
            yield this.api.post(`/push_notifications/subscriptions`, data);
        });
        /** Check current axios instance has a valid cookie. */
        this.validate = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.api.get(`/auth/me`);
            const _a = response.data, { data } = _a, meta = __rest(_a, ["data"]);
            this.data = data;
            this.meta = meta;
        });
        this.vehicle = new VehicleFactory_1.VehicleFactory(this.api, this.options, this.data, this.meta);
        this.booking = new BookingFactory_1.BookingFactory(this.api, this.options, this.data, this.meta);
        this.accident = new AccidentFactory_1.AccidentFactory(this.api, this.options, this.data, this.meta);
        this.user = new UserFactory_1.UserFactory(this.api, this.options, this.data, this.meta);
        this.location = new LocationFactory_1.LocationFactory(this.api, this.options, this.data, this.meta);
        this.client = new ClientFactory_1.ClientFactory(this.api, this.options, this.data, this.meta);
        this.category = new CategoryFactory_1.CategoryFactory(this.api, this.options, this.data, this.meta);
        this.wialonUnit = new WialonUnitFactory_1.WialonUnitFactory(this.api, this.options, this.data, this.meta);
        this.vehicleCategory = new VehicleCategoryFactory_1.VehicleCategoryFactory(this.api, this.options, this.data, this.meta);
        this.invite = new InviteFactory_1.InviteFactory(this.api, this.options, this.data, this.meta);
        this.pushSubscription = new PushSubscriptionFactory_1.PushSubscriptionFactory(this.api, this.options, this.data, this.meta);
    }
}
exports.Api = Api;
Api.login = ({ username, password, baseUrl, remember }) => __awaiter(void 0, void 0, void 0, function* () {
    const api = new Requester_1.Requester(baseUrl);
    const response = yield api.post(`/auth/login`, {
        username,
        password,
        remember
    });
    const _a = response.data, { data } = _a, meta = __rest(_a, ["data"]);
    return new Api(api, { baseUrl }, data, meta);
});
Api.signUp = (newUser, { baseUrl }) => __awaiter(void 0, void 0, void 0, function* () {
    const api = new Requester_1.Requester(baseUrl);
    yield api.post(`/users`, ...utils_1.constructFormDataPayload(newUser));
});
/** Check if the cookie stored by the browser is still valid. */
Api.checkCookie = ({ baseUrl }) => __awaiter(void 0, void 0, void 0, function* () {
    const api = new Requester_1.Requester(baseUrl);
    const response = yield api.get(`/auth/me`);
    const _b = response.data, { data } = _b, meta = __rest(_b, ["data"]);
    return new Api(api, { baseUrl }, data, meta);
});
