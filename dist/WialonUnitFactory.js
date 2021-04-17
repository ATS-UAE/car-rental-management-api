"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WialonUnitFactory = void 0;
const Authenticated_1 = require("./Authenticated");
const WialonUnit_1 = require("./WialonUnit");
class WialonUnitFactory extends Authenticated_1.Authenticated {
    constructor() {
        super(...arguments);
        this.getOne = (id) => {
            return WialonUnit_1.WialonUnit.getOne(this, id);
        };
        this.getAll = () => {
            return WialonUnit_1.WialonUnit.getAll(this);
        };
        this.fromObject = (data) => {
            return new WialonUnit_1.WialonUnit(this, data);
        };
    }
}
exports.WialonUnitFactory = WialonUnitFactory;
