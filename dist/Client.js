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
exports.Client = void 0;
const Location_1 = require("./Location");
const ServerResponse_1 = require("./ServerResponse");
const User_1 = require("./User");
const Vehicle_1 = require("./Vehicle");
class Client {
    constructor(login, data) {
        this.login = login;
        this.data = data;
        this.update = (updatedVehicleData) => __awaiter(this, void 0, void 0, function* () {
            const { data: responseData } = yield this.login.api.patch(`/clients/${this.data.id}`, updatedVehicleData);
            const { data } = responseData, meta = __rest(responseData, ["data"]);
            return new ServerResponse_1.ServerResponse(data, () => new Client(this.login, data), meta);
        });
        this.destroy = () => __awaiter(this, void 0, void 0, function* () {
            const { data: responseData } = yield this.login.api.delete(`/clients/${this.data.id}`);
            const { data } = responseData, meta = __rest(responseData, ["data"]);
            return new ServerResponse_1.ServerResponse(data, () => new Client(this.login, data), meta);
        });
        this.getLocations = () => __awaiter(this, void 0, void 0, function* () {
            const { data: responseData } = yield this.login.api.get(`/clients/${this.data.id}/locations`);
            const { data } = responseData, meta = __rest(responseData, ["data"]);
            return new ServerResponse_1.ServerResponse(data, () => data.map((item) => new Location_1.Location(this.login, item)), meta);
        });
        this.getUsers = () => __awaiter(this, void 0, void 0, function* () {
            const { data: responseData } = yield this.login.api.get(`/clients/${this.data.id}/users`);
            const { data } = responseData, meta = __rest(responseData, ["data"]);
            return new ServerResponse_1.ServerResponse(data, () => data.map((item) => new User_1.User(this.login, item)), meta);
        });
        this.getVehicles = (options) => __awaiter(this, void 0, void 0, function* () {
            let url = `/clients/${this.data.id}/vehicles`;
            if (options && options.from && options.to) {
                url = `${url}/?from=${options.from}&to=${options.to}`;
            }
            const { data: responseData } = yield this.login.api.get(url);
            const { data } = responseData, meta = __rest(responseData, ["data"]);
            return new ServerResponse_1.ServerResponse(data, () => data.map((item) => new Vehicle_1.Vehicle(this.login, item)), meta);
        });
        this.toObject = () => {
            return this.data;
        };
    }
}
exports.Client = Client;
Client.getOne = (login, clientId) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: responseData } = yield login.api.get(`/clients/${clientId}`);
    const { data } = responseData, meta = __rest(responseData, ["data"]);
    return new ServerResponse_1.ServerResponse(data, () => new Client(login, data), meta);
});
Client.getAll = (login) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: responseData } = yield login.api.get(`/clients`);
    const { data } = responseData, meta = __rest(responseData, ["data"]);
    return new ServerResponse_1.ServerResponse(data, () => data.map((v) => new Client(login, v)), meta);
});
Client.create = (login, clientData) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: responseData } = yield login.api.post(`/clients`, clientData);
    const { data } = responseData, meta = __rest(responseData, ["data"]);
    return new ServerResponse_1.ServerResponse(data, () => new Client(login, data), meta);
});
Client.update = (login, clientId, updatedVehicleData) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: responseData } = yield login.api.patch(`/clients/${clientId}`, updatedVehicleData);
    const { data } = responseData, meta = __rest(responseData, ["data"]);
    return new ServerResponse_1.ServerResponse(data, () => new Client(login, data), meta);
});
