"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var car_rental_management_shared_1 = require("car-rental-management-shared");
var getOne_1 = require("./fixtures/response/bookings/getOne");
var getAll_1 = require("./fixtures/response/bookings/getAll");
var fixtures_1 = require("./fixtures");
var createApiInstance_1 = require("./utils/createApiInstance");
var Booking_1 = require("../Booking");
var createBookingInstance_1 = require("./utils/createBookingInstance");
var createServerResponse_1 = require("./utils/createServerResponse");
describe("Booking", function () {
    beforeEach(function () {
        moxios_1.default.install();
    });
    afterEach(function () {
        moxios_1.default.uninstall();
    });
    describe("Getting bookings", function () {
        it("Gets one booking.", function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, VEHICLE_ID, GET_ONE_RESPONSE, booking;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, createApiInstance_1.createApiInstance()];
                    case 1:
                        api = _a.sent();
                        VEHICLE_ID = 1;
                        GET_ONE_RESPONSE = getOne_1.getOne();
                        moxios_1.default.stubOnce("get", fixtures_1.BASE_URL + "/bookings/" + VEHICLE_ID, {
                            response: GET_ONE_RESPONSE
                        });
                        return [4 /*yield*/, api.booking.getOne(VEHICLE_ID)];
                    case 2:
                        booking = _a.sent();
                        expect(booking instanceof Booking_1.Booking).toBe(true);
                        expect(booking.rawData).toEqual(GET_ONE_RESPONSE.data);
                        return [2 /*return*/];
                }
            });
        }); });
        it("Gets all bookings.", function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, GET_ALL_RESPONSE, bookings;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, createApiInstance_1.createApiInstance()];
                    case 1:
                        api = _a.sent();
                        GET_ALL_RESPONSE = getAll_1.getAll();
                        moxios_1.default.stubOnce("get", fixtures_1.BASE_URL + "/bookings", {
                            response: GET_ALL_RESPONSE
                        });
                        return [4 /*yield*/, api.booking.getAll()];
                    case 2:
                        bookings = _a.sent();
                        expect(bookings.getData().every(function (v, index) {
                            var matchesData = v.data === GET_ALL_RESPONSE.data[index];
                            return matchesData && v instanceof Booking_1.Booking;
                        })).toBe(true);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("Creating a booking", function () {
        var newBooking = {
            vehicleId: 1,
            bookingType: car_rental_management_shared_1.BookingType.BUSINESS,
            from: 0,
            to: 1
        };
        it("Creates a booking on behalf of someone.", function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, BOOKING_TARGET_USER_ID, GET_ONE_RESPONSE, data, meta, booking;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, createApiInstance_1.createApiInstance()];
                    case 1:
                        api = _a.sent();
                        BOOKING_TARGET_USER_ID = 25;
                        GET_ONE_RESPONSE = getOne_1.getOne(__assign(__assign({}, newBooking), { userId: BOOKING_TARGET_USER_ID }));
                        moxios_1.default.stubOnce("post", fixtures_1.BASE_URL + "/bookings", {
                            response: GET_ONE_RESPONSE
                        });
                        data = GET_ONE_RESPONSE.data, meta = __rest(GET_ONE_RESPONSE, ["data"]);
                        return [4 /*yield*/, api.booking.create(__assign({ userId: BOOKING_TARGET_USER_ID }, newBooking))];
                    case 2:
                        booking = _a.sent();
                        expect(booking instanceof Booking_1.Booking).toBe(true);
                        expect(booking.rawData).toEqual(data);
                        expect(booking.meta).toEqual(meta);
                        return [2 /*return*/];
                }
            });
        }); });
        it("Creates a booking for me.", function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, BOOKING_TARGET_USER_ID, GET_ONE_RESPONSE, data, meta, booking;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, createApiInstance_1.createApiInstance()];
                    case 1:
                        api = _a.sent();
                        BOOKING_TARGET_USER_ID = api.data.id;
                        GET_ONE_RESPONSE = getOne_1.getOne(__assign(__assign({}, newBooking), { userId: BOOKING_TARGET_USER_ID }));
                        moxios_1.default.stubOnce("post", fixtures_1.BASE_URL + "/bookings", {
                            response: GET_ONE_RESPONSE
                        });
                        data = GET_ONE_RESPONSE.data, meta = __rest(GET_ONE_RESPONSE, ["data"]);
                        return [4 /*yield*/, api.booking.create(newBooking)];
                    case 2:
                        booking = _a.sent();
                        expect(booking instanceof Booking_1.Booking).toBe(true);
                        expect(booking.rawData).toEqual(data);
                        expect(booking.meta).toEqual(meta);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("Deleting a booking.", function () {
        it("Deletes a booking", function () { return __awaiter(void 0, void 0, void 0, function () {
            var booking, DELETE_RESPONSE;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, createBookingInstance_1.createBookingInstance()];
                    case 1:
                        booking = _a.sent();
                        DELETE_RESPONSE = createServerResponse_1.createServerResponse(car_rental_management_shared_1.StatusCode.SUCCESS, [], true, "Booking with ID " + booking.rawData.id, getOne_1.getOne(booking.rawData).data);
                        moxios_1.default.stubOnce("delete", fixtures_1.BASE_URL + "/bookings/" + booking.rawData.id, {
                            response: DELETE_RESPONSE
                        });
                        // We only need this function to resolve to pass the test.
                        return [4 /*yield*/, expect(booking.getData().destroy()).resolves.toBeUndefined()];
                    case 2:
                        // We only need this function to resolve to pass the test.
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("Updating a booking", function () {
        it("Updates a booking.", function () { return __awaiter(void 0, void 0, void 0, function () {
            var booking, PATCH_PARAMS, PATCH_RESPONSE, data, meta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, createBookingInstance_1.createBookingInstance({ approved: null })];
                    case 1:
                        booking = _a.sent();
                        PATCH_PARAMS = {
                            vehicleId: 25,
                            approved: false
                        };
                        PATCH_RESPONSE = createServerResponse_1.createServerResponse(car_rental_management_shared_1.StatusCode.SUCCESS, [], true, "Booking with ID " + booking.rawData.id, getOne_1.getOne(PATCH_PARAMS).data);
                        moxios_1.default.stubOnce("patch", fixtures_1.BASE_URL + "/bookings/" + booking.rawData.id, {
                            response: PATCH_RESPONSE
                        });
                        return [4 /*yield*/, booking.getData().update(PATCH_PARAMS)];
                    case 2:
                        _a.sent();
                        data = PATCH_RESPONSE.data, meta = __rest(PATCH_RESPONSE, ["data"]);
                        expect(booking.rawData).toEqual(data);
                        expect(booking.meta).toEqual(meta);
                        return [2 /*return*/];
                }
            });
        }); });
        it("Approves the booking", function () { return __awaiter(void 0, void 0, void 0, function () {
            var booking, PATCH_RESPONSE;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, createBookingInstance_1.createBookingInstance({ approved: null })];
                    case 1:
                        booking = _a.sent();
                        PATCH_RESPONSE = createServerResponse_1.createServerResponse(car_rental_management_shared_1.StatusCode.SUCCESS, [], true, "Booking with ID " + booking.rawData.id, getOne_1.getOne(__assign(__assign({}, booking.rawData), { approved: true })).data);
                        moxios_1.default.stubOnce("patch", fixtures_1.BASE_URL + "/bookings/" + booking.rawData.id, {
                            response: PATCH_RESPONSE
                        });
                        return [4 /*yield*/, booking.getData().approve()];
                    case 2:
                        _a.sent();
                        expect(booking.rawData.approved).toBe(true);
                        return [2 /*return*/];
                }
            });
        }); });
        it("Denies a booking.", function () { return __awaiter(void 0, void 0, void 0, function () {
            var booking, PATCH_RESPONSE;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, createBookingInstance_1.createBookingInstance({ approved: null })];
                    case 1:
                        booking = _a.sent();
                        PATCH_RESPONSE = createServerResponse_1.createServerResponse(car_rental_management_shared_1.StatusCode.SUCCESS, [], true, "Booking with ID " + booking.rawData.id, getOne_1.getOne(__assign(__assign({}, booking.rawData), { approved: false })).data);
                        moxios_1.default.stubOnce("patch", fixtures_1.BASE_URL + "/bookings/" + booking.rawData.id, {
                            response: PATCH_RESPONSE
                        });
                        return [4 /*yield*/, booking.getData().deny()];
                    case 2:
                        _a.sent();
                        expect(booking.rawData.approved).toBe(false);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
