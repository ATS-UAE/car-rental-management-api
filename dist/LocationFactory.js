"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationFactory = void 0;
const Authenticated_1 = require("./Authenticated");
const Location_1 = require("./Location");
class LocationFactory extends Authenticated_1.Authenticated {
    constructor() {
        super(...arguments);
        this.getOne = (id) => {
            return Location_1.Location.getOne(this, id);
        };
        this.getAll = () => {
            return Location_1.Location.getAll(this);
        };
        this.create = (locationData) => {
            return Location_1.Location.create(this, locationData);
        };
        this.update = (id, updatedBookingData) => {
            return Location_1.Location.update(this, id, updatedBookingData);
        };
        this.fromObject = (data) => {
            return new Location_1.Location(this, data);
        };
    }
}
exports.LocationFactory = LocationFactory;
