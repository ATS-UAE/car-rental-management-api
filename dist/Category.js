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
exports.Category = void 0;
const ServerResponse_1 = require("./ServerResponse");
class Category {
    constructor(login, data) {
        this.login = login;
        this.data = data;
        this.update = (updatedVehicleData) => __awaiter(this, void 0, void 0, function* () {
            const { data: responseData } = yield this.login.api.patch(`/categories/${this.data.id}`, updatedVehicleData);
            const { data } = responseData, meta = __rest(responseData, ["data"]);
            return new ServerResponse_1.ServerResponse(data, () => new Category(this.login, data), meta);
        });
        this.destroy = () => __awaiter(this, void 0, void 0, function* () {
            const { data: responseData } = yield this.login.api.delete(`/categories/${this.data.id}`);
            const { data } = responseData, meta = __rest(responseData, ["data"]);
            return new ServerResponse_1.ServerResponse(data, () => new Category(this.login, data), meta);
        });
        this.toObject = () => {
            return this.data;
        };
    }
}
exports.Category = Category;
Category.getOne = (login, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: responseData } = yield login.api.get(`/categories/${userId}`);
    const { data } = responseData, meta = __rest(responseData, ["data"]);
    return new ServerResponse_1.ServerResponse(data, () => new Category(login, data), meta);
});
Category.getAll = (login) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: responseData } = yield login.api.get(`/categories`);
    const { data } = responseData, meta = __rest(responseData, ["data"]);
    return new ServerResponse_1.ServerResponse(data, () => data.map((v) => new Category(login, v)), meta);
});
Category.create = (login, userData) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: responseData } = yield login.api.post(`/categories`, userData);
    const { data } = responseData, meta = __rest(responseData, ["data"]);
    return new ServerResponse_1.ServerResponse(data, () => new Category(login, data), meta);
});
Category.update = (login, userId, updatedVehicleData) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: responseData } = yield login.api.patch(`/categories/${userId}`, updatedVehicleData);
    const { data } = responseData, meta = __rest(responseData, ["data"]);
    return new ServerResponse_1.ServerResponse(data, () => new Category(login, data), meta);
});
