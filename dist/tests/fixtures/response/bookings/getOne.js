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
Object.defineProperty(exports, "__esModule", { value: true });
var car_rental_management_shared_1 = require("car-rental-management-shared");
var createServerResponse_1 = require("../../../utils/createServerResponse");
exports.getOne = function (vehicleData, meta) {
    if (vehicleData === void 0) { vehicleData = {}; }
    if (meta === void 0) { meta = {}; }
    return createServerResponse_1.createServerResponse(meta.code || car_rental_management_shared_1.StatusCode.SUCCESS, meta.errors || [], meta.success || true, meta.message || "Success", __assign({ amount: null, approved: null, bookingType: car_rental_management_shared_1.BookingType.BUSINESS, createdAt: 0, updatedAt: 0, endFuel: 0, endMileage: 0, BookingChargeUnit: car_rental_management_shared_1.BookingChargeUnit.KILOMETER, finished: false, from: 0, to: 1, id: 1, paid: false, pickupDate: 0, replaceVehicleId: null, returnDate: null, startFuel: 0, startMileage: 0, userId: 1, vehicleId: 2, replaceBrand: null, replaceModel: null, replacePlateNumber: null, replaceVin: null }, vehicleData));
};
