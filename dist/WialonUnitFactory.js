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
var Authenticated_1 = require("./Authenticated");
var WialonUnit_1 = require("./WialonUnit");
var WialonUnitFactory = /** @class */ (function (_super) {
    __extends(WialonUnitFactory, _super);
    function WialonUnitFactory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getOne = function (id) {
            return WialonUnit_1.WialonUnit.getOne(_this, id);
        };
        _this.getAll = function () {
            return WialonUnit_1.WialonUnit.getAll(_this);
        };
        return _this;
    }
    return WialonUnitFactory;
}(Authenticated_1.Authenticated));
exports.WialonUnitFactory = WialonUnitFactory;