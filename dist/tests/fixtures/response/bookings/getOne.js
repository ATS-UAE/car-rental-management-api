"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOne = void 0;
const car_rental_management_shared_1 = require("car-rental-management-shared");
const createServerResponse_1 = require("../../../utils/createServerResponse");
exports.getOne = (vehicleData = {}, meta = {}) => {
    return createServerResponse_1.createServerResponse(meta.code || car_rental_management_shared_1.StatusCode.SUCCESS, meta.errors || [], meta.success || true, meta.message || "Success", Object.assign({ amount: null, approved: null, bookingType: car_rental_management_shared_1.BookingType.BUSINESS, createdAt: 0, updatedAt: 0, endFuel: 0, endMileage: 0, BookingChargeUnit: car_rental_management_shared_1.BookingChargeUnit.KILOMETER, finished: false, from: 0, to: 1, id: 1, paid: false, pickupDate: 0, replaceVehicleId: null, returnDate: null, startFuel: 0, startMileage: 0, userId: 1, vehicleId: 2, replaceBrand: null, replaceModel: null, replacePlateNumber: null, replaceVin: null }, vehicleData));
};
