"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleFactory = void 0;
const Authenticated_1 = require("./Authenticated");
const ServerResponse_1 = require("./ServerResponse");
const Vehicle_1 = require("./Vehicle");
class VehicleFactory extends Authenticated_1.Authenticated {
    constructor() {
        super(...arguments);
        this.getOne = (id) => {
            return Vehicle_1.Vehicle.getOne(this, id);
        };
        this.getAll = (options) => {
            return Vehicle_1.Vehicle.getAll(this, options);
        };
        this.update = (id, updateVehicleData) => {
            return Vehicle_1.Vehicle.update(this, id, updateVehicleData);
        };
        this.create = (vehicleData) => {
            return Vehicle_1.Vehicle.create(this, vehicleData);
        };
        this.destroy = (id) => __awaiter(this, void 0, void 0, function* () {
            const { data: responseData } = yield this.api.delete(`/vehicle/${id}`);
            const { data } = responseData, meta = __rest(responseData, ["data"]);
            return new ServerResponse_1.ServerResponse(data, () => new Vehicle_1.Vehicle(this, data), meta);
        });
        this.fromObject = (data) => {
            return new Vehicle_1.Vehicle(this, data);
        };
    }
}
exports.VehicleFactory = VehicleFactory;
