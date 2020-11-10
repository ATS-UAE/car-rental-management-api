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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var User_1 = require("./User");
var Location = /** @class */ (function () {
    function Location(login, data, meta) {
        var _this = this;
        this.login = login;
        this.data = data;
        this.meta = meta;
        this.update = function (updatedVehicleData) { return __awaiter(_this, void 0, void 0, function () {
            var responseData, data, meta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.login.api.patch(this.login.options.baseUrl + "/locations/" + this.data.id, updatedVehicleData)];
                    case 1:
                        responseData = (_a.sent()).data;
                        data = responseData.data, meta = __rest(responseData, ["data"]);
                        this.data = data;
                        this.meta = meta;
                        return [2 /*return*/];
                }
            });
        }); };
        this.destroy = function () { return __awaiter(_this, void 0, void 0, function () {
            var responseData, data, meta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.login.api.delete(this.login.options.baseUrl + "/locations/" + this.data.id)];
                    case 1:
                        responseData = (_a.sent()).data;
                        data = responseData.data, meta = __rest(responseData, ["data"]);
                        this.data = data;
                        this.meta = meta;
                        return [2 /*return*/];
                }
            });
        }); };
        this.getUsers = function () { return __awaiter(_this, void 0, void 0, function () {
            var responseData, data, meta;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.login.api.get(this.login.options.baseUrl + "/locations/" + this.data.id + "/users")];
                    case 1:
                        responseData = (_a.sent()).data;
                        data = responseData.data, meta = __rest(responseData, ["data"]);
                        return [2 /*return*/, data.map(function (user) { return new User_1.User(_this.login, user, meta); })];
                }
            });
        }); };
    }
    Location.getOne = function (login, locationId) { return __awaiter(void 0, void 0, void 0, function () {
        var responseData, data, meta;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, login.api.get(login.options.baseUrl + "/locations/" + locationId)];
                case 1:
                    responseData = (_a.sent()).data;
                    data = responseData.data, meta = __rest(responseData, ["data"]);
                    return [2 /*return*/, new Location(login, data, meta)];
            }
        });
    }); };
    Location.getAll = function (login) { return __awaiter(void 0, void 0, void 0, function () {
        var responseData, data, meta;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, login.api.get(login.options.baseUrl + "/locations")];
                case 1:
                    responseData = (_a.sent()).data;
                    data = responseData.data, meta = __rest(responseData, ["data"]);
                    return [2 /*return*/, data.map(function (v) { return new Location(login, v, meta); })];
            }
        });
    }); };
    Location.create = function (login, locationData) { return __awaiter(void 0, void 0, void 0, function () {
        var responseData, data, meta;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, login.api.post(login.options.baseUrl + "/locations", locationData)];
                case 1:
                    responseData = (_a.sent()).data;
                    data = responseData.data, meta = __rest(responseData, ["data"]);
                    return [2 /*return*/, new Location(login, data, meta)];
            }
        });
    }); };
    Location.update = function (login, locationId, updatedVehicleData) { return __awaiter(void 0, void 0, void 0, function () {
        var responseData, data, meta;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, login.api.patch(login.options.baseUrl + "/locations/" + locationId, updatedVehicleData)];
                case 1:
                    responseData = (_a.sent()).data;
                    data = responseData.data, meta = __rest(responseData, ["data"]);
                    return [2 /*return*/, new Location(login, data, meta)];
            }
        });
    }); };
    return Location;
}());
exports.Location = Location;
