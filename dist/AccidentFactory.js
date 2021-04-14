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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccidentFactory = void 0;
var Authenticated_1 = require("./Authenticated");
var Accident_1 = require("./Accident");
var AccidentFactory = /** @class */ (function (_super) {
    __extends(AccidentFactory, _super);
    function AccidentFactory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getOne = function (id) {
            return Accident_1.Accident.getOne(_this, id);
        };
        _this.getAll = function () {
            return Accident_1.Accident.getAll(_this);
        };
        _this.create = function (accidentData) {
            return Accident_1.Accident.create(_this, __assign(__assign({}, accidentData), { userId: accidentData.userId || _this.data.id }));
        };
        _this.destroy = function (accidentId) {
            return Accident_1.Accident.destroy(_this, accidentId);
        };
        _this.fromObject = function (data) {
            return new Accident_1.Accident(_this, data);
        };
        return _this;
    }
    return AccidentFactory;
}(Authenticated_1.Authenticated));
exports.AccidentFactory = AccidentFactory;
