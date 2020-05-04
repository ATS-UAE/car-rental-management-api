"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiError_1 = require("../../exceptions/ApiError");
describe("ApiError", function () {
    it("Extends error", function () {
        var error = new ApiError_1.ApiError("test");
        expect(error instanceof Error).toBe(true);
    });
});
