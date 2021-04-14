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
exports.UserFactory = void 0;
var Authenticated_1 = require("./Authenticated");
var User_1 = require("./User");
var UserFactory = /** @class */ (function (_super) {
    __extends(UserFactory, _super);
    function UserFactory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getOne = function (id) {
            return User_1.User.getOne(_this, id);
        };
        _this.getAll = function () {
            return User_1.User.getAll(_this);
        };
        _this.create = function (userData) {
            return User_1.User.create(_this, userData);
        };
        _this.update = function (userId, userData) {
            return User_1.User.update(_this, userId, userData);
        };
        _this.fromObject = function (data) {
            return new User_1.User(_this, data);
        };
        return _this;
    }
    return UserFactory;
}(Authenticated_1.Authenticated));
exports.UserFactory = UserFactory;
