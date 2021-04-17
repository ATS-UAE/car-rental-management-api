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
const car_rental_management_shared_1 = require("car-rental-management-shared");
const getOne_1 = require("./fixtures/response/bookings/getOne");
const getAll_1 = require("./fixtures/response/bookings/getAll");
const fixtures_1 = require("./fixtures");
const createApiInstance_1 = require("./utils/createApiInstance");
const Booking_1 = require("../Booking");
const createBookingInstance_1 = require("./utils/createBookingInstance");
const createServerResponse_1 = require("./utils/createServerResponse");
describe("Booking", () => {
    beforeEach(() => {
        moxios_1.default.install();
    });
    afterEach(() => {
        moxios_1.default.uninstall();
    });
    describe("Getting bookings", () => {
        it("Gets one booking.", () => __awaiter(void 0, void 0, void 0, function* () {
            const api = yield createApiInstance_1.createApiInstance();
            const VEHICLE_ID = 1;
            const GET_ONE_RESPONSE = getOne_1.getOne();
            moxios_1.default.stubOnce("get", `${fixtures_1.BASE_URL}/bookings/${VEHICLE_ID}`, {
                response: GET_ONE_RESPONSE
            });
            const booking = yield api.booking.getOne(VEHICLE_ID);
            expect(booking instanceof Booking_1.Booking).toBe(true);
            expect(booking.rawData).toEqual(GET_ONE_RESPONSE.data);
        }));
        it("Gets all bookings.", () => __awaiter(void 0, void 0, void 0, function* () {
            const api = yield createApiInstance_1.createApiInstance();
            const GET_ALL_RESPONSE = getAll_1.getAll();
            moxios_1.default.stubOnce("get", `${fixtures_1.BASE_URL}/bookings`, {
                response: GET_ALL_RESPONSE
            });
            const bookings = yield api.booking.getAll();
            expect(bookings.getData().every((v, index) => {
                const matchesData = v.data === GET_ALL_RESPONSE.data[index];
                return matchesData && v instanceof Booking_1.Booking;
            })).toBe(true);
        }));
    });
    describe("Creating a booking", () => {
        const newBooking = {
            vehicleId: 1,
            bookingType: car_rental_management_shared_1.BookingType.BUSINESS,
            from: 0,
            to: 1
        };
        it("Creates a booking on behalf of someone.", () => __awaiter(void 0, void 0, void 0, function* () {
            const api = yield createApiInstance_1.createApiInstance();
            const BOOKING_TARGET_USER_ID = 25;
            const GET_ONE_RESPONSE = getOne_1.getOne(Object.assign(Object.assign({}, newBooking), { userId: BOOKING_TARGET_USER_ID }));
            moxios_1.default.stubOnce("post", `${fixtures_1.BASE_URL}/bookings`, {
                response: GET_ONE_RESPONSE
            });
            const { data } = GET_ONE_RESPONSE, meta = __rest(GET_ONE_RESPONSE, ["data"]);
            const booking = yield api.booking.create(Object.assign({ userId: BOOKING_TARGET_USER_ID }, newBooking));
            expect(booking instanceof Booking_1.Booking).toBe(true);
            expect(booking.rawData).toEqual(data);
            expect(booking.meta).toEqual(meta);
        }));
        it("Creates a booking for me.", () => __awaiter(void 0, void 0, void 0, function* () {
            const api = yield createApiInstance_1.createApiInstance();
            const BOOKING_TARGET_USER_ID = api.data.id;
            const GET_ONE_RESPONSE = getOne_1.getOne(Object.assign(Object.assign({}, newBooking), { userId: BOOKING_TARGET_USER_ID }));
            moxios_1.default.stubOnce("post", `${fixtures_1.BASE_URL}/bookings`, {
                response: GET_ONE_RESPONSE
            });
            const { data } = GET_ONE_RESPONSE, meta = __rest(GET_ONE_RESPONSE, ["data"]);
            const booking = yield api.booking.create(newBooking);
            expect(booking instanceof Booking_1.Booking).toBe(true);
            expect(booking.rawData).toEqual(data);
            expect(booking.meta).toEqual(meta);
        }));
    });
    describe("Deleting a booking.", () => {
        it("Deletes a booking", () => __awaiter(void 0, void 0, void 0, function* () {
            const booking = yield createBookingInstance_1.createBookingInstance();
            const DELETE_RESPONSE = createServerResponse_1.createServerResponse(car_rental_management_shared_1.StatusCode.SUCCESS, [], true, `Booking with ID ${booking.rawData.id}`, getOne_1.getOne(booking.rawData).data);
            moxios_1.default.stubOnce("delete", `${fixtures_1.BASE_URL}/bookings/${booking.rawData.id}`, {
                response: DELETE_RESPONSE
            });
            // We only need this function to resolve to pass the test.
            yield expect(booking.getData().destroy()).resolves.toBeUndefined();
        }));
    });
    describe("Updating a booking", () => {
        it("Updates a booking.", () => __awaiter(void 0, void 0, void 0, function* () {
            const booking = yield createBookingInstance_1.createBookingInstance({ approved: null });
            const PATCH_PARAMS = {
                vehicleId: 25,
                approved: false
            };
            const PATCH_RESPONSE = createServerResponse_1.createServerResponse(car_rental_management_shared_1.StatusCode.SUCCESS, [], true, `Booking with ID ${booking.rawData.id}`, getOne_1.getOne(PATCH_PARAMS).data);
            moxios_1.default.stubOnce("patch", `${fixtures_1.BASE_URL}/bookings/${booking.rawData.id}`, {
                response: PATCH_RESPONSE
            });
            yield booking.getData().update(PATCH_PARAMS);
            const { data } = PATCH_RESPONSE, meta = __rest(PATCH_RESPONSE, ["data"]);
            expect(booking.rawData).toEqual(data);
            expect(booking.meta).toEqual(meta);
        }));
        it("Approves the booking", () => __awaiter(void 0, void 0, void 0, function* () {
            const booking = yield createBookingInstance_1.createBookingInstance({ approved: null });
            const PATCH_RESPONSE = createServerResponse_1.createServerResponse(car_rental_management_shared_1.StatusCode.SUCCESS, [], true, `Booking with ID ${booking.rawData.id}`, getOne_1.getOne(Object.assign(Object.assign({}, booking.rawData), { approved: true })).data);
            moxios_1.default.stubOnce("patch", `${fixtures_1.BASE_URL}/bookings/${booking.rawData.id}`, {
                response: PATCH_RESPONSE
            });
            yield booking.getData().approve();
            expect(booking.rawData.approved).toBe(true);
        }));
        it("Denies a booking.", () => __awaiter(void 0, void 0, void 0, function* () {
            const booking = yield createBookingInstance_1.createBookingInstance({ approved: null });
            const PATCH_RESPONSE = createServerResponse_1.createServerResponse(car_rental_management_shared_1.StatusCode.SUCCESS, [], true, `Booking with ID ${booking.rawData.id}`, getOne_1.getOne(Object.assign(Object.assign({}, booking.rawData), { approved: false })).data);
            moxios_1.default.stubOnce("patch", `${fixtures_1.BASE_URL}/bookings/${booking.rawData.id}`, {
                response: PATCH_RESPONSE
            });
            yield booking.getData().deny();
            expect(booking.rawData.approved).toBe(false);
        }));
    });
});
