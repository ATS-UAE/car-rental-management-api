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
exports.Location = void 0;
const User_1 = require("./User");
const ServerResponse_1 = require("./ServerResponse");
class Location {
    constructor(login, data) {
        this.login = login;
        this.data = data;
        this.update = (updatedVehicleData) => __awaiter(this, void 0, void 0, function* () {
            const { data: responseData } = yield this.login.api.patch(`/locations/${this.data.id}`, updatedVehicleData);
            const { data } = responseData, meta = __rest(responseData, ["data"]);
            return new ServerResponse_1.ServerResponse(data, () => new Location(this.login, data), meta);
        });
        this.destroy = () => __awaiter(this, void 0, void 0, function* () {
            const { data: responseData } = yield this.login.api.delete(`/locations/${this.data.id}`);
            const { data } = responseData, meta = __rest(responseData, ["data"]);
            return new ServerResponse_1.ServerResponse(data, () => new Location(this.login, data), meta);
        });
        this.getUsers = () => __awaiter(this, void 0, void 0, function* () {
            const { data: responseData } = yield this.login.api.get(`/locations/${this.data.id}/users`);
            const { data } = responseData, meta = __rest(responseData, ["data"]);
            return new ServerResponse_1.ServerResponse(data, () => data.map((user) => new User_1.User(this.login, user)), meta);
        });
        this.toObject = () => {
            return this.data;
        };
    }
}
exports.Location = Location;
Location.getOne = (login, locationId) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: responseData } = yield login.api.get(`/locations/${locationId}`);
    const { data } = responseData, meta = __rest(responseData, ["data"]);
    return new ServerResponse_1.ServerResponse(data, () => new Location(login, data), meta);
});
Location.getAll = (login) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: responseData } = yield login.api.get(`/locations`);
    const { data } = responseData, meta = __rest(responseData, ["data"]);
    return new ServerResponse_1.ServerResponse(data, () => data.map((v) => new Location(login, v)), meta);
});
Location.create = (login, locationData) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: responseData } = yield login.api.post(`/locations`, locationData);
    const { data } = responseData, meta = __rest(responseData, ["data"]);
    return new ServerResponse_1.ServerResponse(data, () => new Location(login, data), meta);
});
Location.update = (login, locationId, updatedVehicleData) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: responseData } = yield login.api.patch(`/locations/${locationId}`, updatedVehicleData);
    const { data } = responseData, meta = __rest(responseData, ["data"]);
    return new ServerResponse_1.ServerResponse(data, () => new Location(login, data), meta);
});
