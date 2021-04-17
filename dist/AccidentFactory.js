"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccidentFactory = void 0;
const Authenticated_1 = require("./Authenticated");
const Accident_1 = require("./Accident");
class AccidentFactory extends Authenticated_1.Authenticated {
    constructor() {
        super(...arguments);
        this.getOne = (id) => {
            return Accident_1.Accident.getOne(this, id);
        };
        this.getAll = () => {
            return Accident_1.Accident.getAll(this);
        };
        this.create = (accidentData) => {
            return Accident_1.Accident.create(this, Object.assign(Object.assign({}, accidentData), { userId: accidentData.userId || this.data.id }));
        };
        this.destroy = (accidentId) => {
            return Accident_1.Accident.destroy(this, accidentId);
        };
        this.fromObject = (data) => {
            return new Accident_1.Accident(this, data);
        };
    }
}
exports.AccidentFactory = AccidentFactory;
