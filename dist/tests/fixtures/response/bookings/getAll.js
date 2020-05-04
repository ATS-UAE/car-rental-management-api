"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createServerResponse_1 = require("../../../utils/createServerResponse");
var getOne_1 = require("./getOne");
exports.getAll = function (meta) {
    if (meta === void 0) { meta = {}; }
    return createServerResponse_1.createServerResponse(meta.code || 200, meta.errors || [], meta.success || true, meta.message || "Success", [getOne_1.getOne().data, getOne_1.getOne({ id: 2 }).data]);
};
