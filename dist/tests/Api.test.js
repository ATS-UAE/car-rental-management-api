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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moxios_1 = __importDefault(require("moxios"));
var Api_1 = require("../Api");
var post_1 = __importDefault(require("./fixtures/response/auth/post"));
var fixtures_1 = require("./fixtures");
var createApiInstance_1 = require("./utils/createApiInstance");
describe("Api", function () {
    beforeEach(function () {
        moxios_1.default.install();
    });
    afterEach(function () {
        moxios_1.default.uninstall();
    });
    describe("auth", function () {
        var LOGIN_RESPONSE = post_1.default();
        describe("Auth using credentials", function () {
            var LOGIN_URL = fixtures_1.BASE_URL + "/auth/login";
            var LOGIN_METHOD = "post";
            it("Logs in", function () { return __awaiter(void 0, void 0, void 0, function () {
                var api, data, meta, mostRecentApiCall;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            moxios_1.default.stubOnce(LOGIN_METHOD, LOGIN_URL, {
                                response: LOGIN_RESPONSE,
                                status: 200,
                                headers: {
                                    "Set-Cookie": fixtures_1.COOKIE_SESSION
                                }
                            });
                            return [4 /*yield*/, Api_1.Api.login({
                                    username: fixtures_1.USERNAME,
                                    password: fixtures_1.PASSWORD,
                                    baseUrl: fixtures_1.BASE_URL
                                })];
                        case 1:
                            api = _a.sent();
                            data = LOGIN_RESPONSE.data, meta = __rest(LOGIN_RESPONSE, ["data"]);
                            mostRecentApiCall = moxios_1.default.requests.mostRecent();
                            expect(mostRecentApiCall.url).toEqual(LOGIN_URL);
                            expect(mostRecentApiCall.config.method).toEqual(LOGIN_METHOD);
                            expect(mostRecentApiCall.withCredentials).toEqual(true);
                            expect(api instanceof Api_1.Api).toEqual(true);
                            expect(api.data).toEqual(data);
                            expect(api.meta).toEqual(meta);
                            return [2 /*return*/];
                    }
                });
            }); });
            it("Throws an error on wrong credentials", function () { return __awaiter(void 0, void 0, void 0, function () {
                var response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            response = {
                                code: 401,
                                data: null,
                                errors: [],
                                message: "Invalid credentials.",
                                success: false
                            };
                            moxios_1.default.stubOnce(LOGIN_METHOD, LOGIN_URL, {
                                response: response,
                                status: 401
                            });
                            return [4 /*yield*/, expect(Api_1.Api.login({
                                    username: fixtures_1.USERNAME,
                                    password: fixtures_1.PASSWORD,
                                    baseUrl: fixtures_1.BASE_URL
                                })).rejects.toBeTruthy()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        it("Logs out", function () { return __awaiter(void 0, void 0, void 0, function () {
            var LOGOUT_METHOD, LOGOUT_URL, api, mostRecentApiCall;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        LOGOUT_METHOD = "get";
                        LOGOUT_URL = fixtures_1.BASE_URL + "/auth/logout";
                        moxios_1.default.stubOnce(LOGOUT_METHOD, LOGOUT_URL, {
                            status: 200,
                            response: {
                                code: 200,
                                errors: [],
                                message: "Logout successful!",
                                success: true
                            }
                        });
                        return [4 /*yield*/, createApiInstance_1.createApiInstance()];
                    case 1:
                        api = _a.sent();
                        return [4 /*yield*/, api.logout()];
                    case 2:
                        _a.sent();
                        mostRecentApiCall = moxios_1.default.requests.mostRecent();
                        expect(mostRecentApiCall.url).toEqual(LOGOUT_URL);
                        expect(mostRecentApiCall.config.method).toEqual(LOGOUT_METHOD);
                        test.todo("Doing anything else when logged out will throw an error.");
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
