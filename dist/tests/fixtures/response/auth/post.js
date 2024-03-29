"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_rental_management_shared_1 = require("car-rental-management-shared");
exports.default = () => ({
    code: car_rental_management_shared_1.StatusCode.SUCCESS,
    errors: [],
    success: true,
    message: "Logged in successfully",
    data: {
        blocked: false,
        clientId: 1,
        createdAt: 0,
        lastLogin: null,
        email: "test@mail.com",
        emailConfirmed: true,
        firstName: "fname",
        lastName: "lname",
        id: 1,
        licenseImageSrc: null,
        mobileNumber: "",
        role: car_rental_management_shared_1.Role.ADMIN,
        timeZone: "asia/dubai",
        updatedAt: 0,
        userImageSrc: null,
        username: "test"
    }
});
