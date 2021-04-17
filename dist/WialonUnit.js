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
exports.WialonUnit = void 0;
const ServerResponse_1 = require("./ServerResponse");
class WialonUnit {
    constructor(login, data) {
        this.login = login;
        this.data = data;
        this.sendCommand = (command) => __awaiter(this, void 0, void 0, function* () {
            yield this.login.api.post(`/wialon_units1/${this.data.id}`, {
                command
            });
        });
        this.toObject = () => {
            return this.data;
        };
    }
}
exports.WialonUnit = WialonUnit;
WialonUnit.getOne = (login, bookingId) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: responseData } = yield login.api.get(`/wialon_units/${bookingId}`);
    const { data } = responseData, meta = __rest(responseData, ["data"]);
    return new ServerResponse_1.ServerResponse(data, () => new WialonUnit(login, data), meta);
});
WialonUnit.getAll = (login) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: responseData } = yield login.api.get(`/wialon_units`);
    const { data } = responseData, meta = __rest(responseData, ["data"]);
    return new ServerResponse_1.ServerResponse(data, () => data.map((v) => new WialonUnit(login, v)), meta);
});
