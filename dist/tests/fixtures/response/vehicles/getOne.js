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
    return createServerResponse_1.createServerResponse(meta.code || 200, meta.errors || [], meta.success || true, meta.message || "Success", __assign({ id: 1, bookingCharge: 5, bookingChargeCount: 1, bookingChargeUnit: car_rental_management_shared_1.BookingChargeUnit.KILOMETER, brand: "brand 1", model: "Model 1", plateNumber: "A12345", categories: [{ id: 1, name: "Cat 1``" }], clientId: 1, createdAt: 0, defleeted: false, locationId: 1, parkingLocation: null, updatedAt: 0, vehicleImageSrc: "www.example.com/vehicle.jpg", vin: "VINTEST", wialonUnitId: null, categoryCostId: 1 }, vehicleData));
};
