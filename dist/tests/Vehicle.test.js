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
const moxios_1 = __importDefault(require("moxios"));
const getOne_1 = require("./fixtures/response/vehicles/getOne");
const getAll_1 = require("./fixtures/response/vehicles/getAll");
const fixtures_1 = require("./fixtures");
const createApiInstance_1 = require("./utils/createApiInstance");
const Vehicle_1 = require("../Vehicle");
beforeEach(() => {
    moxios_1.default.install();
});
afterEach(() => {
    moxios_1.default.uninstall();
});
describe("Vehicle", () => {
    it("Gets one vehicle.", () => __awaiter(void 0, void 0, void 0, function* () {
        const api = yield createApiInstance_1.createApiInstance();
        const VEHICLE_ID = 1;
        const GET_ONE_RESPONSE = getOne_1.getOne();
        moxios_1.default.stubOnce("get", `${fixtures_1.BASE_URL}/vehicles/${VEHICLE_ID}`, {
            response: GET_ONE_RESPONSE
        });
        const vehicle = yield api.vehicle.getOne(VEHICLE_ID);
        expect(vehicle instanceof Vehicle_1.Vehicle).toBe(true);
        expect(vehicle.rawData).toEqual(GET_ONE_RESPONSE.data);
    }));
    it("Gets all vehicles.", () => __awaiter(void 0, void 0, void 0, function* () {
        const api = yield createApiInstance_1.createApiInstance();
        const GET_ALL_RESPONSE = getAll_1.getAll();
        moxios_1.default.stubOnce("get", `${fixtures_1.BASE_URL}/vehicles`, {
            response: GET_ALL_RESPONSE
        });
        const vehicles = yield api.vehicle.getAll();
        expect(vehicles.getData().every((v, index) => {
            const matchesData = v.data === GET_ALL_RESPONSE.data[index];
            return matchesData && v instanceof Vehicle_1.Vehicle;
        })).toBe(true);
    }));
});
