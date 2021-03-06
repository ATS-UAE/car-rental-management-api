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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var car_rental_management_shared_1 = require("car-rental-management-shared");
var Booking_1 = require("./Booking");
var WialonUnit_1 = require("./WialonUnit");
var Category_1 = require("./Category");
var utils_1 = require("./utils");
var ServerResponse_1 = require("./ServerResponse");
var Vehicle = /** @class */ (function () {
    function Vehicle(login, data) {
        var _this = this;
        this.login = login;
        this.data = data;
        this.update = function (updatedVehicleData) { return __awaiter(_this, void 0, void 0, function () {
            var responseData, data, meta;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (_a = this.login.api).patch.apply(_a, __spreadArrays(["/vehicles/" + this.data.id], utils_1.constructFormDataPayload(updatedVehicleData)))];
                    case 1:
                        responseData = (_b.sent()).data;
                        data = responseData.data, meta = __rest(responseData, ["data"]);
                        return [2 /*return*/, new ServerResponse_1.ServerResponse(data, function () { return new Vehicle(_this.login, data); }, meta)];
                }
            });
        }); };
        this.destroy = function () { return __awaiter(_this, void 0, void 0, function () {
            var responseData, data, meta;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.login.api.delete("/vehicles/" + this.data.id)];
                    case 1:
                        responseData = (_a.sent()).data;
                        data = responseData.data, meta = __rest(responseData, ["data"]);
                        return [2 /*return*/, new ServerResponse_1.ServerResponse(data, function () { return new Vehicle(_this.login, data); }, meta)];
                }
            });
        }); };
        this.getBookings = function () { return __awaiter(_this, void 0, void 0, function () {
            var responseData, data, meta;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.login.api.get("/vehicles/" + this.data.id + "/bookings")];
                    case 1:
                        responseData = (_a.sent()).data;
                        data = responseData.data, meta = __rest(responseData, ["data"]);
                        return [2 /*return*/, new ServerResponse_1.ServerResponse(data, function () { return data.map(function (b) { return new Booking_1.Booking(_this.login, b); }); }, meta)];
                }
            });
        }); };
        this.getWialonUnit = function () { return __awaiter(_this, void 0, void 0, function () {
            var responseData, data, meta;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.login.api.get("/vehicles/" + this.data.id + "/wialon_unit")];
                    case 1:
                        responseData = (_a.sent()).data;
                        data = responseData.data, meta = __rest(responseData, ["data"]);
                        return [2 /*return*/, new ServerResponse_1.ServerResponse(data, function () { return new WialonUnit_1.WialonUnit(_this.login, data); }, meta)];
                }
            });
        }); };
        this.getCategoryCost = function () { return __awaiter(_this, void 0, void 0, function () {
            var responseData, data, meta;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.login.api.get("/vehicles/" + this.data.id + "/category_cost")];
                    case 1:
                        responseData = (_a.sent()).data;
                        data = responseData.data, meta = __rest(responseData, ["data"]);
                        return [2 /*return*/, new ServerResponse_1.ServerResponse(data, function () { return new Category_1.Category(_this.login, data); }, meta)];
                }
            });
        }); };
        this.getCategories = function () { return __awaiter(_this, void 0, void 0, function () {
            var responseData, data, meta;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.login.api.get("/vehicles/" + this.data.id + "/categories")];
                    case 1:
                        responseData = (_a.sent()).data;
                        data = responseData.data, meta = __rest(responseData, ["data"]);
                        return [2 /*return*/, new ServerResponse_1.ServerResponse(data, function () { return data.map(function (c) { return new Category_1.Category(_this.login, c); }); }, meta)];
                }
            });
        }); };
        this.isVehicleAvailableForBooking = (function (bookings) {
            if (bookings) {
                if (_this.data.defleeted === true) {
                    return false;
                }
                return Vehicle.checkAvailabilityFromBookings(bookings.map(function (booking) {
                    if (booking instanceof Booking_1.Booking) {
                        return booking.data;
                    }
                    return booking;
                }));
            }
            return _this.getBookings().then(function (vehicleBookings) {
                if (_this.data.defleeted === true) {
                    return false;
                }
                return Vehicle.checkAvailabilityFromBookings(vehicleBookings.rawData.map(function (vehicle) { return vehicle; }));
            });
        });
        this.canUserSendCommand = function () { return __awaiter(_this, void 0, void 0, function () {
            var userRole, canUserRoleSendCommandWithoutBooking;
            return __generator(this, function (_a) {
                userRole = this.login.data.role;
                canUserRoleSendCommandWithoutBooking = Vehicle.ROLES_ALLOWED_TO_SEND_COMMANDS_WITHOUT_BOOKINGS.indexOf(userRole) > 0;
                if (canUserRoleSendCommandWithoutBooking) {
                    return [2 /*return*/, true];
                }
                return [2 /*return*/, this.isVehicleBookedToUser()];
            });
        }); };
        this.isVehicleBookedToUser = function () { return __awaiter(_this, void 0, void 0, function () {
            var bookingData, userBookings;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Booking_1.Booking.getAll(this.login)];
                    case 1:
                        bookingData = _a.sent();
                        userBookings = bookingData.getData();
                        return [2 /*return*/, userBookings.some(function (booking) {
                                if (booking.isBookedToUser()) {
                                    return booking.isCurrentlyActive();
                                }
                                return false;
                            })];
                }
            });
        }); };
        this.toObject = function () {
            return _this.data;
        };
    }
    Vehicle.ROLES_ALLOWED_TO_SEND_COMMANDS_WITHOUT_BOOKINGS = [
        car_rental_management_shared_1.Role.ADMIN,
        car_rental_management_shared_1.Role.KEY_MANAGER,
        car_rental_management_shared_1.Role.MASTER
    ];
    Vehicle.checkAvailabilityFromBookings = function (bookings) {
        return bookings.every(function (booking) {
            var status = car_rental_management_shared_1.getBookingStatus({
                from: booking.from,
                to: booking.to,
                approved: booking.approved
            });
            if (status === car_rental_management_shared_1.BookingStatus.PENDING ||
                status === car_rental_management_shared_1.BookingStatus.APPROVED ||
                status === car_rental_management_shared_1.BookingStatus.ONGOING) {
                return false;
            }
            return true;
        });
    };
    Vehicle.getOne = function (login, vehicleId) { return __awaiter(void 0, void 0, void 0, function () {
        var responseData, data, meta;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, login.api.get("/vehicles/" + vehicleId)];
                case 1:
                    responseData = (_a.sent()).data;
                    data = responseData.data, meta = __rest(responseData, ["data"]);
                    return [2 /*return*/, new ServerResponse_1.ServerResponse(data, function () { return new Vehicle(login, data); }, meta)];
            }
        });
    }); };
    Vehicle.getAll = function (login, options) { return __awaiter(void 0, void 0, void 0, function () {
        var url, responseData, data, meta;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "/vehicles";
                    if (options && options.from && options.to) {
                        url = url + "/?from=" + options.from + "&to=" + options.to;
                    }
                    return [4 /*yield*/, login.api.get(url)];
                case 1:
                    responseData = (_a.sent()).data;
                    data = responseData.data, meta = __rest(responseData, ["data"]);
                    return [2 /*return*/, new ServerResponse_1.ServerResponse(data, function () { return data.map(function (v) { return new Vehicle(login, v); }); }, meta)];
            }
        });
    }); };
    Vehicle.create = function (login, vehicleData) { return __awaiter(void 0, void 0, void 0, function () {
        var responseData, data, meta;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (_a = login.api).post.apply(_a, __spreadArrays(["/vehicles"], utils_1.constructFormDataPayload(vehicleData)))];
                case 1:
                    responseData = (_b.sent()).data;
                    data = responseData.data, meta = __rest(responseData, ["data"]);
                    return [2 /*return*/, new ServerResponse_1.ServerResponse(data, function () { return new Vehicle(login, data); }, meta)];
            }
        });
    }); };
    Vehicle.update = function (login, vehicleId, vehicleData) { return __awaiter(void 0, void 0, void 0, function () {
        var responseData, data, meta;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (_a = login.api).patch.apply(_a, __spreadArrays(["/vehicles/" + vehicleId], utils_1.constructFormDataPayload(vehicleData)))];
                case 1:
                    responseData = (_b.sent()).data;
                    data = responseData.data, meta = __rest(responseData, ["data"]);
                    return [2 /*return*/, new ServerResponse_1.ServerResponse(data, function () { return new Vehicle(login, data); }, meta)];
            }
        });
    }); };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
