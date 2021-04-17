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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
const car_rental_management_shared_1 = require("car-rental-management-shared");
const Booking_1 = require("./Booking");
const WialonUnit_1 = require("./WialonUnit");
const Category_1 = require("./Category");
const utils_1 = require("./utils");
const ServerResponse_1 = require("./ServerResponse");
class Vehicle {
    constructor(login, data) {
        this.login = login;
        this.data = data;
        this.update = (updatedVehicleData) => __awaiter(this, void 0, void 0, function* () {
            const { data: responseData } = yield this.login.api.patch(`/vehicles/${this.data.id}`, ...utils_1.constructFormDataPayload(updatedVehicleData));
            const { data } = responseData, meta = __rest(responseData, ["data"]);
            return new ServerResponse_1.ServerResponse(data, () => new Vehicle(this.login, data), meta);
        });
        this.destroy = () => __awaiter(this, void 0, void 0, function* () {
            const { data: responseData } = yield this.login.api.delete(`/vehicles/${this.data.id}`);
            const { data } = responseData, meta = __rest(responseData, ["data"]);
            return new ServerResponse_1.ServerResponse(data, () => new Vehicle(this.login, data), meta);
        });
        this.getBookings = () => __awaiter(this, void 0, void 0, function* () {
            const { data: responseData } = yield this.login.api.get(`/vehicles/${this.data.id}/bookings`);
            const { data } = responseData, meta = __rest(responseData, ["data"]);
            return new ServerResponse_1.ServerResponse(data, () => data.map((b) => new Booking_1.Booking(this.login, b)), meta);
        });
        this.getWialonUnit = () => __awaiter(this, void 0, void 0, function* () {
            const { data: responseData } = yield this.login.api.get(`/vehicles/${this.data.id}/wialon_unit`);
            const { data } = responseData, meta = __rest(responseData, ["data"]);
            return new ServerResponse_1.ServerResponse(data, () => new WialonUnit_1.WialonUnit(this.login, data), meta);
        });
        this.getCategoryCost = () => __awaiter(this, void 0, void 0, function* () {
            const { data: responseData } = yield this.login.api.get(`/vehicles/${this.data.id}/category_cost`);
            const { data } = responseData, meta = __rest(responseData, ["data"]);
            return new ServerResponse_1.ServerResponse(data, () => new Category_1.Category(this.login, data), meta);
        });
        this.getCategories = () => __awaiter(this, void 0, void 0, function* () {
            const { data: responseData } = yield this.login.api.get(`/vehicles/${this.data.id}/categories`);
            const { data } = responseData, meta = __rest(responseData, ["data"]);
            return new ServerResponse_1.ServerResponse(data, () => data.map((c) => new Category_1.Category(this.login, c)), meta);
        });
        this.canUserSendCommand = () => __awaiter(this, void 0, void 0, function* () {
            const userRole = this.login.data.role;
            const canUserRoleSendCommandWithoutBooking = Vehicle.ROLES_ALLOWED_TO_SEND_COMMANDS_WITHOUT_BOOKINGS.indexOf(userRole) > 0;
            if (canUserRoleSendCommandWithoutBooking) {
                return true;
            }
            return this.isVehicleBookedToUser();
        });
        this.isVehicleBookedToUser = () => __awaiter(this, void 0, void 0, function* () {
            const bookingData = yield Booking_1.Booking.getAll(this.login);
            const userBookings = bookingData.getData();
            return userBookings.some((booking) => {
                if (booking.isBookedToUser()) {
                    return booking.isCurrentlyActive();
                }
                return false;
            });
        });
        this.toObject = () => {
            return this.data;
        };
    }
}
exports.Vehicle = Vehicle;
Vehicle.ROLES_ALLOWED_TO_SEND_COMMANDS_WITHOUT_BOOKINGS = [
    car_rental_management_shared_1.Role.ADMIN,
    car_rental_management_shared_1.Role.KEY_MANAGER,
    car_rental_management_shared_1.Role.MASTER
];
Vehicle.getOne = (login, vehicleId) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: responseData } = yield login.api.get(`/vehicles/${vehicleId}`);
    const { data } = responseData, meta = __rest(responseData, ["data"]);
    return new ServerResponse_1.ServerResponse(data, () => new Vehicle(login, data), meta);
});
Vehicle.getAll = (login, options) => __awaiter(void 0, void 0, void 0, function* () {
    let url = `/vehicles`;
    if (options && options.from && options.to) {
        url = `${url}/?from=${options.from}&to=${options.to}`;
    }
    const { data: responseData } = yield login.api.get(url);
    const { data } = responseData, meta = __rest(responseData, ["data"]);
    return new ServerResponse_1.ServerResponse(data, () => data.map((v) => new Vehicle(login, v)), meta);
});
Vehicle.create = (login, vehicleData) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: responseData } = yield login.api.post(`/vehicles`, ...utils_1.constructFormDataPayload(vehicleData));
    const { data } = responseData, meta = __rest(responseData, ["data"]);
    return new ServerResponse_1.ServerResponse(data, () => new Vehicle(login, data), meta);
});
Vehicle.update = (login, vehicleId, vehicleData) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: responseData } = yield login.api.patch(`/vehicles/${vehicleId}`, ...utils_1.constructFormDataPayload(vehicleData));
    const { data } = responseData, meta = __rest(responseData, ["data"]);
    return new ServerResponse_1.ServerResponse(data, () => new Vehicle(login, data), meta);
});
