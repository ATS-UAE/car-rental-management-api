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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moxios_1 = __importDefault(require("moxios"));
var getOne_1 = require("./fixtures/response/vehicles/getOne");
var getAll_1 = require("./fixtures/response/vehicles/getAll");
var fixtures_1 = require("./fixtures");
var createApiInstance_1 = require("./utils/createApiInstance");
var Vehicle_1 = require("../Vehicle");
beforeEach(function () {
    moxios_1.default.install();
});
afterEach(function () {
    moxios_1.default.uninstall();
});
describe("Vehicle", function () {
    it("Gets one vehicle.", function () { return __awaiter(void 0, void 0, void 0, function () {
        var api, VEHICLE_ID, GET_ONE_RESPONSE, vehicle;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createApiInstance_1.createApiInstance()];
                case 1:
                    api = _a.sent();
                    VEHICLE_ID = 1;
                    GET_ONE_RESPONSE = getOne_1.getOne();
                    moxios_1.default.stubOnce("get", fixtures_1.BASE_URL + "/vehicles/" + VEHICLE_ID, {
                        response: GET_ONE_RESPONSE
                    });
                    return [4 /*yield*/, api.vehicle.getOne(VEHICLE_ID)];
                case 2:
                    vehicle = _a.sent();
                    expect(vehicle instanceof Vehicle_1.Vehicle).toBe(true);
                    expect(vehicle.rawData).toEqual(GET_ONE_RESPONSE.data);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Gets all vehicles.", function () { return __awaiter(void 0, void 0, void 0, function () {
        var api, GET_ALL_RESPONSE, vehicles;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createApiInstance_1.createApiInstance()];
                case 1:
                    api = _a.sent();
                    GET_ALL_RESPONSE = getAll_1.getAll();
                    moxios_1.default.stubOnce("get", fixtures_1.BASE_URL + "/vehicles", {
                        response: GET_ALL_RESPONSE
                    });
                    return [4 /*yield*/, api.vehicle.getAll()];
                case 2:
                    vehicles = _a.sent();
                    expect(vehicles.getData().every(function (v, index) {
                        var matchesData = v.data === GET_ALL_RESPONSE.data[index];
                        return matchesData && v instanceof Vehicle_1.Vehicle;
                    })).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
});
