"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleCategoryFactory = void 0;
const Authenticated_1 = require("./Authenticated");
const VehicleCategory_1 = require("./VehicleCategory");
class VehicleCategoryFactory extends Authenticated_1.Authenticated {
    constructor() {
        super(...arguments);
        this.getAll = () => {
            return VehicleCategory_1.VehicleCategory.getAll(this);
        };
        this.fromObject = (data) => {
            return new VehicleCategory_1.VehicleCategory(this, data);
        };
    }
}
exports.VehicleCategoryFactory = VehicleCategoryFactory;
