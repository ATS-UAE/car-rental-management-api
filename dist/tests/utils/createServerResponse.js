"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServerResponse = void 0;
exports.createServerResponse = (code, errors, success, message, data) => {
    return {
        code,
        errors,
        success,
        message,
        data
    };
};
