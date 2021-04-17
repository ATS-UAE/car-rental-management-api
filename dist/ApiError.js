"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
var ApiError = /** @class */ (function (_super) {
    __extends(ApiError, _super);
    function ApiError(axiosError) {
        var _this = _super.call(this, axiosError.message) || this;
        _this.axiosError = axiosError;
        return _this;
    }
    Object.defineProperty(ApiError.prototype, "responseData", {
        get: function () {
            if (this.axiosError.response) {
                return this.axiosError.response;
            }
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiError.prototype, "statusCode", {
        get: function () {
            var _a;
            return ((_a = this.axiosError.response) === null || _a === void 0 ? void 0 : _a.status) || null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiError.prototype, "isNetworkError", {
        get: function () {
            var _a;
            var hasResponse = Boolean((_a = this.axiosError.response) === null || _a === void 0 ? void 0 : _a.status);
            return !hasResponse;
        },
        enumerable: false,
        configurable: true
    });
    return ApiError;
}(Error));
exports.ApiError = ApiError;
