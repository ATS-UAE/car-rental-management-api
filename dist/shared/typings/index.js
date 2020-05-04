"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./enums"));
// TODO remove RBAC
var Operation;
(function (Operation) {
    Operation["READ"] = "READ";
    Operation["UPDATE"] = "UPDATE";
    Operation["DELETE"] = "DELETE";
    Operation["CREATE"] = "CREATE";
})(Operation = exports.Operation || (exports.Operation = {}));
var Resource;
(function (Resource) {
    Resource["BOOKINGS"] = "BOOKINGS";
    Resource["LOCATIONS"] = "LOCATIONS";
    Resource["VEHICLES"] = "VEHICLES";
    Resource["USERS"] = "USERS";
    Resource["ENUMS"] = "ENUMS";
    Resource["INVITES"] = "INVITES";
    Resource["ACCIDENTS"] = "ACCIDENTS";
    Resource["CLIENTS"] = "CLIENTS";
    Resource["CATEGORIES"] = "CATEGORIES";
})(Resource = exports.Resource || (exports.Resource = {}));
