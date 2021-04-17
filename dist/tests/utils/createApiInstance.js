"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApiInstance = void 0;
const moxios_1 = __importDefault(require("moxios"));
const Api_1 = require("../../Api");
const fixtures_1 = require("../fixtures");
const post_1 = __importDefault(require("../fixtures/response/auth/post"));
exports.createApiInstance = () => {
    const LOGIN_URL = `${fixtures_1.BASE_URL}/auth/login`;
    const LOGIN_METHOD = "post";
    const LOGIN_RESPONSE = post_1.default();
    moxios_1.default.stubOnce(LOGIN_METHOD, LOGIN_URL, {
        response: LOGIN_RESPONSE,
        status: 200,
        headers: {
            "Set-Cookie": fixtures_1.COOKIE_SESSION
        }
    });
    return Api_1.Api.login({
        username: fixtures_1.USERNAME,
        password: fixtures_1.PASSWORD,
        baseUrl: fixtures_1.BASE_URL
    });
};
