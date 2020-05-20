"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typings_1 = require("../../../../shared/typings");
exports.default = (function () { return ({
    code: 200,
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
        role: typings_1.Role.ADMIN,
        timeZone: "asia/dubai",
        updatedAt: 0,
        userImageSrc: null,
        username: "test"
    }
}); });
