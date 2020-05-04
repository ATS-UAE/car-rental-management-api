"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
var Authenticated_1 = require("./Authenticated");
var Booking_1 = require("./Booking");
var BookingFactory = /** @class */ (function (_super) {
    __extends(BookingFactory, _super);
    function BookingFactory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getOne = function (id) {
            return Booking_1.Booking.getOne(_this, id);
        };
        _this.getAll = function () {
            return Booking_1.Booking.getAll(_this);
        };
        _this.create = function (bookingData) {
            return Booking_1.Booking.create(_this, __assign(__assign({}, bookingData), { userId: bookingData.userId || _this.data.id }));
        };
        return _this;
    }
    return BookingFactory;
}(Authenticated_1.Authenticated));
exports.BookingFactory = BookingFactory;
