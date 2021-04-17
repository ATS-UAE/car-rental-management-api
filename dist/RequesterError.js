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
exports.RequesterError = void 0;
var RequesterError = /** @class */ (function (_super) {
    __extends(RequesterError, _super);
    function RequesterError(axiosError) {
        var _this = _super.call(this, axiosError.message) || this;
        _this.axiosError = axiosError;
        return _this;
    }
    Object.defineProperty(RequesterError.prototype, "responseData", {
        get: function () {
            if (this.axiosError.response) {
                return this.axiosError.response;
            }
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RequesterError.prototype, "statusCode", {
        get: function () {
            var _a;
            return ((_a = this.axiosError.response) === null || _a === void 0 ? void 0 : _a.status) || null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RequesterError.prototype, "isNetworkError", {
        get: function () {
            var _a;
            var hasResponse = Boolean((_a = this.axiosError.response) === null || _a === void 0 ? void 0 : _a.status);
            return !hasResponse;
        },
        enumerable: false,
        configurable: true
    });
    return RequesterError;
}(Error));
exports.RequesterError = RequesterError;
