"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOne = void 0;
const car_rental_management_shared_1 = require("car-rental-management-shared");
const createServerResponse_1 = require("../../../utils/createServerResponse");
exports.getOne = (vehicleData = {}, meta = {}) => {
    return createServerResponse_1.createServerResponse(meta.code || car_rental_management_shared_1.StatusCode.SUCCESS, meta.errors || [], meta.success || true, meta.message || "Success", Object.assign({ id: 1, bookingCharge: 5, bookingChargeCount: 1, bookingChargeUnit: car_rental_management_shared_1.BookingChargeUnit.KILOMETER, brand: "brand 1", model: "Model 1", plateNumber: "A12345", categories: [{ id: 1, name: "Cat 1``" }], clientId: 1, createdAt: 0, defleeted: false, locationId: 1, parkingLocation: null, updatedAt: 0, vehicleImageSrc: "www.example.com/vehicle.jpg", vin: "VINTEST", wialonUnitId: null, categoryCostId: 1 }, vehicleData));
};
