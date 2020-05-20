"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var typings_1 = require("../typings");
__export(require("./RoleUtils"));
exports.getBookingStatus = function (booking) {
    var status = typings_1.BookingStatus.UNKNOWN;
    var currentTime = moment_1.default();
    var hasPassedFrom = moment_1.default(booking.from, "X").isSameOrBefore(currentTime);
    var hasPassedTo = moment_1.default(booking.to, "X").isSameOrBefore(currentTime);
    if (booking.approved) {
        if (hasPassedFrom && !hasPassedTo)
            status = typings_1.BookingStatus.ONGOING;
        else if (hasPassedTo)
            status = typings_1.BookingStatus.FINISHED;
        else
            status = typings_1.BookingStatus.APPROVED;
    }
    else {
        if (booking.approved === null) {
            status = typings_1.BookingStatus.PENDING;
        }
        else if (booking.approved === false) {
            status = typings_1.BookingStatus.DENIED;
        }
    }
    return status;
};
exports.hasActiveBooking = function (bookings, bookingId) {
    var active = false;
    if (bookings) {
        for (var _i = 0, bookings_1 = bookings; _i < bookings_1.length; _i++) {
            var booking = bookings_1[_i];
            var status_1 = exports.getBookingStatus(booking);
            if (status_1 === typings_1.BookingStatus.PENDING ||
                status_1 === typings_1.BookingStatus.ONGOING ||
                status_1 === typings_1.BookingStatus.APPROVED) {
                if (!bookingId || bookingId !== booking.id)
                    return true;
            }
        }
    }
    return active;
};
exports.rangeOverlap = function (x1, x2, y1, y2) {
    return Math.max(x1, y1) <= Math.min(x2, y2);
};
exports.toTitleWords = function (word, delimiter) {
    if (delimiter === void 0) { delimiter = "_"; }
    var splitWord = word.split(delimiter);
    var result = "";
    for (var _i = 0, splitWord_1 = splitWord; _i < splitWord_1.length; _i++) {
        var word_1 = splitWord_1[_i];
        for (var i = 0; i < word_1.length; i++) {
            var letter = word_1[i];
            if (i === 0) {
                result += letter.toUpperCase();
            }
            else {
                result += letter.toLowerCase();
            }
        }
        result += " ";
    }
    return result;
};
exports.isBookingTimeSlotTaken = function (bookings, from, to, bookingId) {
    var taken = false;
    for (var _i = 0, bookings_2 = bookings; _i < bookings_2.length; _i++) {
        var booking = bookings_2[_i];
        taken = exports.rangeOverlap(from, to, booking.from, booking.to);
        if ((taken && !bookingId) || bookingId !== booking.id) {
            return taken;
        }
    }
    return taken;
};
