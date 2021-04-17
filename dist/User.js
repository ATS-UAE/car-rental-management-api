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
exports.User = void 0;
const Category_1 = require("./Category");
const Location_1 = require("./Location");
const ServerResponse_1 = require("./ServerResponse");
const utils_1 = require("./utils");
class User {
    constructor(login, data) {
        this.login = login;
        this.data = data;
        this.update = (updatedVehicleData) => __awaiter(this, void 0, void 0, function* () {
            const { data: responseData } = yield this.login.api.patch(`/users/${this.data.id}`, ...utils_1.constructFormDataPayload(updatedVehicleData));
            const { data } = responseData, meta = __rest(responseData, ["data"]);
            return new ServerResponse_1.ServerResponse(data, () => new User(this.login, data), meta);
        });
        this.destroy = () => __awaiter(this, void 0, void 0, function* () {
            const { data: responseData } = yield this.login.api.delete(`/users/${this.data.id}`);
            const { data } = responseData, meta = __rest(responseData, ["data"]);
            return new ServerResponse_1.ServerResponse(data, () => new User(this.login, data), meta);
        });
        this.getCategories = () => __awaiter(this, void 0, void 0, function* () {
            const { data: responseData } = yield this.login.api.get(`/users/${this.data.id}/categories`);
            const { data } = responseData, meta = __rest(responseData, ["data"]);
            return new ServerResponse_1.ServerResponse(data, () => data.map((c) => new Category_1.Category(this.login, c)), meta);
        });
        this.getLocations = () => __awaiter(this, void 0, void 0, function* () {
            const { data: responseData } = yield this.login.api.get(`/users/${this.data.id}/locations`);
            const { data } = responseData, meta = __rest(responseData, ["data"]);
            return new ServerResponse_1.ServerResponse(data, () => data.map((location) => new Location_1.Location(this.login, location)), meta);
        });
        this.toObject = () => {
            return this.data;
        };
    }
}
exports.User = User;
User.getOne = (login, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: responseData } = yield login.api.get(`/users/${userId}`);
    const { data } = responseData, meta = __rest(responseData, ["data"]);
    return new ServerResponse_1.ServerResponse(data, () => new User(login, data), meta);
});
User.getAll = (login) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: responseData } = yield login.api.get(`/users`);
    const { data } = responseData, meta = __rest(responseData, ["data"]);
    return new ServerResponse_1.ServerResponse(data, () => data.map((v) => new User(login, v)), meta);
});
User.create = (login, userData) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: responseData } = yield login.api.post(`/users`, ...utils_1.constructFormDataPayload(userData));
    const { data } = responseData, meta = __rest(responseData, ["data"]);
    return new ServerResponse_1.ServerResponse(data, () => new User(login, data), meta);
});
User.update = (login, userId, updatedVehicleData) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: responseData } = yield login.api.patch(`/users/${userId}`, ...utils_1.constructFormDataPayload(updatedVehicleData));
    const { data } = responseData, meta = __rest(responseData, ["data"]);
    return new ServerResponse_1.ServerResponse(data, () => new User(login, data), meta);
});
