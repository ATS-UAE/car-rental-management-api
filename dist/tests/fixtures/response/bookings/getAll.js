"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = void 0;
const car_rental_management_shared_1 = require("car-rental-management-shared");
const createServerResponse_1 = require("../../../utils/createServerResponse");
const getOne_1 = require("./getOne");
exports.getAll = (meta = {}) => {
    return createServerResponse_1.createServerResponse(meta.code || car_rental_management_shared_1.StatusCode.SUCCESS, meta.errors || [], meta.success || true, meta.message || "Success", [getOne_1.getOne().data, getOne_1.getOne({ id: 2 }).data]);
};
