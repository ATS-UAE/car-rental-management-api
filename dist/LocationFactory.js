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
var Location_1 = require("./Location");
var LocationFactory = /** @class */ (function (_super) {
    __extends(LocationFactory, _super);
    function LocationFactory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getOne = function (id) {
            return Location_1.Location.getOne(_this, id);
        };
        _this.getAll = function () {
            return Location_1.Location.getAll(_this);
        };
        _this.create = function (locationData) {
            return Location_1.Location.create(_this, locationData);
        };
        _this.update = function (id, updatedBookingData) {
            return Location_1.Location.update(_this, id, updatedBookingData);
        };
        return _this;
    }
    return LocationFactory;
}(Authenticated_1.Authenticated));
exports.LocationFactory = LocationFactory;
