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
exports.Booking = void 0;
const car_rental_management_shared_1 = require("car-rental-management-shared");
const Vehicle_1 = require("./Vehicle");
const User_1 = require("./User");
const ServerResponse_1 = require("./ServerResponse");
class Booking {
    constructor(login, data) {
        this.login = login;
        this.data = data;
        this.isBookedToUser = () => __awaiter(this, void 0, void 0, function* () {
            return this.login.data.id === this.data.userId;
        });
        this.update = (updatedVehicleData) => __awaiter(this, void 0, void 0, function* () {
            const { data: responseData } = yield this.login.api.patch(`/bookings/${this.data.id}`, updatedVehicleData);
            const { data } = responseData, meta = __rest(responseData, ["data"]);
            return new ServerResponse_1.ServerResponse(data, () => new Booking(this.login, data), meta);
        });
        this.approve = () => __awaiter(this, void 0, void 0, function* () { return this.update({ approved: true }); });
        this.deny = () => __awaiter(this, void 0, void 0, function* () { return this.update({ approved: false }); });
        this.destroy = () => __awaiter(this, void 0, void 0, function* () {
            const { data: responseData } = yield this.login.api.delete(`/bookings/${this.data.id}`);
            const { data } = responseData, meta = __rest(responseData, ["data"]);
            return new ServerResponse_1.ServerResponse(data, () => new Booking(this.login, data), meta);
        });
        this.getBookingStatus = () => {
            let status = car_rental_management_shared_1.BookingStatus.UNKNOWN;
            const currentTime = Math.round(Date.now() / 10);
            const hasPassedFrom = this.data.from <= currentTime;
            const hasPassedTo = this.data.to <= currentTime;
            if (this.data.approved) {
                if (hasPassedFrom && !hasPassedTo) {
                    status = car_rental_management_shared_1.BookingStatus.ONGOING;
                }
                else if (hasPassedTo) {
                    status = car_rental_management_shared_1.BookingStatus.FINISHED;
                }
                else {
                    status = car_rental_management_shared_1.BookingStatus.APPROVED;
                }
            }
            else if (this.data.approved === null) {
                status = car_rental_management_shared_1.BookingStatus.PENDING;
            }
            else if (this.data.approved === false) {
                status = car_rental_management_shared_1.BookingStatus.DENIED;
            }
            return status;
        };
        this.isCurrentlyActive = () => {
            const currentTime = Math.round(Date.now() / 10);
            const isActiveBooking = this.data.from <= currentTime && currentTime <= this.data.to;
            const isApproved = this.data.approved === true;
            return isActiveBooking && isApproved;
        };
        this.getVehicle = () => __awaiter(this, void 0, void 0, function* () {
            const { data: responseData } = yield this.login.api.get(`/bookings/${this.data.id}/vehicle`);
            const { data } = responseData, meta = __rest(responseData, ["data"]);
            return new ServerResponse_1.ServerResponse(data, () => new Vehicle_1.Vehicle(this.login, data), meta);
        });
        this.getUser = () => __awaiter(this, void 0, void 0, function* () {
            const { data: responseData } = yield this.login.api.get(`/bookings/${this.data.id}/user`);
            const { data } = responseData, meta = __rest(responseData, ["data"]);
            return new ServerResponse_1.ServerResponse(data, () => new User_1.User(this.login, data), meta);
        });
        this.toObject = () => {
            return this.data;
        };
    }
}
exports.Booking = Booking;
Booking.getOne = (login, bookingId) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: responseData } = yield login.api.get(`/bookings/${bookingId}`);
    const { data } = responseData, meta = __rest(responseData, ["data"]);
    return new ServerResponse_1.ServerResponse(data, () => new Booking(login, data), meta);
});
Booking.getAll = (login) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: responseData } = yield login.api.get(`/bookings`);
    const { data } = responseData, meta = __rest(responseData, ["data"]);
    return new ServerResponse_1.ServerResponse(data, () => data.map((v) => new Booking(login, v)), meta);
});
Booking.create = (login, bookingData) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: responseData } = yield login.api.post(`/bookings`, bookingData);
    const { data } = responseData, meta = __rest(responseData, ["data"]);
    return new ServerResponse_1.ServerResponse(data, () => new Booking(login, data), meta);
});
Booking.update = (login, bookingId, updatedVehicleData) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: responseData } = yield login.api.patch(`/bookings/${bookingId}`, updatedVehicleData);
    const { data } = responseData, meta = __rest(responseData, ["data"]);
    return new ServerResponse_1.ServerResponse(data, () => new Booking(login, data), meta);
});
