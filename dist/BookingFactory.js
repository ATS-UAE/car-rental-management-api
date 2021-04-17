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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingFactory = void 0;
const Authenticated_1 = require("./Authenticated");
const Booking_1 = require("./Booking");
class BookingFactory extends Authenticated_1.Authenticated {
    constructor() {
        super(...arguments);
        this.getOne = (id) => {
            return Booking_1.Booking.getOne(this, id);
        };
        this.getAll = () => {
            return Booking_1.Booking.getAll(this);
        };
        this.create = (bookingData) => {
            return Booking_1.Booking.create(this, Object.assign(Object.assign({}, bookingData), { userId: bookingData.userId || this.data.id }));
        };
        this.update = (id, updatedBookingData) => {
            return Booking_1.Booking.update(this, id, updatedBookingData);
        };
        this.destroy = (id) => __awaiter(this, void 0, void 0, function* () {
            const { data: responseData } = yield this.api.delete(`/bookings/${id}`);
            return responseData;
        });
        this.fromObject = (data) => {
            return new Booking_1.Booking(this, data);
        };
    }
}
exports.BookingFactory = BookingFactory;
