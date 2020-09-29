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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var Authenticated_1 = require("./Authenticated");
var VehicleFactory_1 = require("./VehicleFactory");
var BookingFactory_1 = require("./BookingFactory");
var AccidentFactory_1 = require("./AccidentFactory");
var UserFactory_1 = require("./UserFactory");
var LocationFactory_1 = require("./LocationFactory");
var ClientFactory_1 = require("./ClientFactory");
var CategoryFactory_1 = require("./CategoryFactory");
var WialonUnitFactory_1 = require("./WialonUnitFactory");
var VehicleCategoryFactory_1 = require("./VehicleCategoryFactory");
var InviteFactory_1 = require("./InviteFactory");
var utils_1 = require("./utils");
var Api = /** @class */ (function (_super) {
    __extends(Api, _super);
    function Api(api, options, data, meta) {
        var _this = _super.call(this, api, options, data, meta) || this;
        _this.logout = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.get(this.options.baseUrl + "/auth/logout")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /** Check current axios instance has a valid cookie. */
        _this.validate = function () { return __awaiter(_this, void 0, void 0, function () {
            var response, _a, data, meta;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.api.get(this.options.baseUrl + "/auth/me")];
                    case 1:
                        response = _b.sent();
                        _a = response.data, data = _a.data, meta = __rest(_a, ["data"]);
                        this.data = data;
                        this.meta = meta;
                        return [2 /*return*/];
                }
            });
        }); };
        _this.vehicle = new VehicleFactory_1.VehicleFactory(_this.api, _this.options, _this.data, _this.meta);
        _this.booking = new BookingFactory_1.BookingFactory(_this.api, _this.options, _this.data, _this.meta);
        _this.accident = new AccidentFactory_1.AccidentFactory(_this.api, _this.options, _this.data, _this.meta);
        _this.user = new UserFactory_1.UserFactory(_this.api, _this.options, _this.data, _this.meta);
        _this.location = new LocationFactory_1.LocationFactory(_this.api, _this.options, _this.data, _this.meta);
        _this.client = new ClientFactory_1.ClientFactory(_this.api, _this.options, _this.data, _this.meta);
        _this.category = new CategoryFactory_1.CategoryFactory(_this.api, _this.options, _this.data, _this.meta);
        _this.wialonUnit = new WialonUnitFactory_1.WialonUnitFactory(_this.api, _this.options, _this.data, _this.meta);
        _this.vehicleCategory = new VehicleCategoryFactory_1.VehicleCategoryFactory(_this.api, _this.options, _this.data, _this.meta);
        _this.invite = new InviteFactory_1.InviteFactory(_this.api, _this.options, _this.data, _this.meta);
        return _this;
    }
    Api.login = function (_a) {
        var username = _a.username, password = _a.password, baseUrl = _a.baseUrl, remember = _a.remember;
        return __awaiter(void 0, void 0, void 0, function () {
            var api, response, _b, data, meta;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        api = axios_1.default.create({
                            withCredentials: true
                        });
                        return [4 /*yield*/, api.post(baseUrl + "/auth/login", {
                                username: username,
                                password: password,
                                remember: remember
                            })];
                    case 1:
                        response = _c.sent();
                        _b = response.data, data = _b.data, meta = __rest(_b, ["data"]);
                        return [2 /*return*/, new Api(api, { baseUrl: baseUrl }, data, meta)];
                }
            });
        });
    };
    Api.signUp = function (newUser, _a) {
        var baseUrl = _a.baseUrl;
        return __awaiter(void 0, void 0, void 0, function () {
            var api;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        api = axios_1.default.create({
                            withCredentials: true
                        });
                        return [4 /*yield*/, api.post.apply(api, __spreadArrays([baseUrl + "/users"], utils_1.constructFormDataPayload(newUser)))];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** Check if the cookie stored by the browser is still valid. */
    Api.checkCookie = function (_a) {
        var baseUrl = _a.baseUrl;
        return __awaiter(void 0, void 0, void 0, function () {
            var api, response, _b, data, meta;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        api = axios_1.default.create({
                            withCredentials: true
                        });
                        return [4 /*yield*/, api.get(baseUrl + "/auth/me")];
                    case 1:
                        response = _c.sent();
                        _b = response.data, data = _b.data, meta = __rest(_b, ["data"]);
                        return [2 /*return*/, new Api(api, { baseUrl: baseUrl }, data, meta)];
                }
            });
        });
    };
    return Api;
}(Authenticated_1.Authenticated));
exports.Api = Api;
