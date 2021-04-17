"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
class ApiError extends Error {
    constructor(axiosError) {
        super(axiosError.message);
        this.axiosError = axiosError;
    }
    get responseData() {
        var _a;
        if (this.axiosError.response) {
            return (_a = this.axiosError.response) === null || _a === void 0 ? void 0 : _a.data;
        }
        return null;
    }
    get statusCode() {
        var _a;
        return ((_a = this.axiosError.response) === null || _a === void 0 ? void 0 : _a.status) || null;
    }
    get isNetworkError() {
        var _a;
        const hasResponse = Boolean((_a = this.axiosError.response) === null || _a === void 0 ? void 0 : _a.status);
        return !hasResponse;
    }
}
exports.ApiError = ApiError;
