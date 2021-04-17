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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moxios_1 = __importDefault(require("moxios"));
const Api_1 = require("../Api");
const post_1 = __importDefault(require("./fixtures/response/auth/post"));
const fixtures_1 = require("./fixtures");
const createApiInstance_1 = require("./utils/createApiInstance");
describe("Api", () => {
    beforeEach(() => {
        moxios_1.default.install();
    });
    afterEach(() => {
        moxios_1.default.uninstall();
    });
    describe("auth", () => {
        const LOGIN_RESPONSE = post_1.default();
        describe("Auth using credentials", () => {
            const LOGIN_URL = `${fixtures_1.BASE_URL}/auth/login`;
            const LOGIN_METHOD = "post";
            it("Logs in", () => __awaiter(void 0, void 0, void 0, function* () {
                moxios_1.default.stubOnce(LOGIN_METHOD, LOGIN_URL, {
                    response: LOGIN_RESPONSE,
                    status: 200,
                    headers: {
                        "Set-Cookie": fixtures_1.COOKIE_SESSION
                    }
                });
                const api = yield Api_1.Api.login({
                    username: fixtures_1.USERNAME,
                    password: fixtures_1.PASSWORD,
                    baseUrl: fixtures_1.BASE_URL
                });
                const { data } = LOGIN_RESPONSE, meta = __rest(LOGIN_RESPONSE, ["data"]);
                const mostRecentApiCall = moxios_1.default.requests.mostRecent();
                expect(mostRecentApiCall.url).toEqual(LOGIN_URL);
                expect(mostRecentApiCall.config.method).toEqual(LOGIN_METHOD);
                expect(mostRecentApiCall.withCredentials).toEqual(true);
                expect(api instanceof Api_1.Api).toEqual(true);
                expect(api.data).toEqual(data);
                expect(api.meta).toEqual(meta);
            }));
            it("Throws an error on wrong credentials", () => __awaiter(void 0, void 0, void 0, function* () {
                const response = {
                    code: 401,
                    data: null,
                    errors: [],
                    message: "Invalid credentials.",
                    success: false
                };
                moxios_1.default.stubOnce(LOGIN_METHOD, LOGIN_URL, {
                    response,
                    status: 401
                });
                yield expect(Api_1.Api.login({
                    username: fixtures_1.USERNAME,
                    password: fixtures_1.PASSWORD,
                    baseUrl: fixtures_1.BASE_URL
                })).rejects.toBeTruthy();
            }));
        });
        it("Logs out", () => __awaiter(void 0, void 0, void 0, function* () {
            const LOGOUT_METHOD = "get";
            const LOGOUT_URL = `${fixtures_1.BASE_URL}/auth/logout`;
            moxios_1.default.stubOnce(LOGOUT_METHOD, LOGOUT_URL, {
                status: 200,
                response: {
                    code: 200,
                    errors: [],
                    message: "Logout successful!",
                    success: true
                }
            });
            const api = yield createApiInstance_1.createApiInstance();
            yield api.logout();
            const mostRecentApiCall = moxios_1.default.requests.mostRecent();
            expect(mostRecentApiCall.url).toEqual(LOGOUT_URL);
            expect(mostRecentApiCall.config.method).toEqual(LOGOUT_METHOD);
            test.todo("Doing anything else when logged out will throw an error.");
        }));
    });
});
