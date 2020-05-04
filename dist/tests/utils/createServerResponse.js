"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServerResponse = function (code, errors, success, message, data) {
    return {
        code: code,
        errors: errors,
        success: success,
        message: message,
        data: data
    };
};
