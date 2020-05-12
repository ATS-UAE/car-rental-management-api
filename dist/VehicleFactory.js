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
var Vehicle_1 = require("./Vehicle");
var VehicleFactory = /** @class */ (function (_super) {
    __extends(VehicleFactory, _super);
    function VehicleFactory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getOne = function (id) {
            return Vehicle_1.Vehicle.getOne(_this, id);
        };
        _this.getAll = function () {
            return Vehicle_1.Vehicle.getAll(_this);
        };
        _this.update = function (id, updateVehicleData) {
            return Vehicle_1.Vehicle.update(_this, id, updateVehicleData);
        };
        return _this;
    }
    return VehicleFactory;
}(Authenticated_1.Authenticated));
exports.VehicleFactory = VehicleFactory;
