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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBookingInstance = void 0;
const moxios_1 = __importDefault(require("moxios"));
const createApiInstance_1 = require("./createApiInstance");
const getOne_1 = require("../fixtures/response/bookings/getOne");
const fixtures_1 = require("../fixtures");
exports.createBookingInstance = (data = {}, meta = {}) => __awaiter(void 0, void 0, void 0, function* () {
    const api = yield createApiInstance_1.createApiInstance();
    const VEHICLE_ID = 1;
    const GET_ONE_RESPONSE = getOne_1.getOne(data, meta);
    moxios_1.default.stubOnce("get", `${fixtures_1.BASE_URL}/bookings/${VEHICLE_ID}`, {
        response: GET_ONE_RESPONSE
    });
    return api.booking.getOne(VEHICLE_ID);
});
