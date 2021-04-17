"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = void 0;
const Authenticated_1 = require("./Authenticated");
const User_1 = require("./User");
class UserFactory extends Authenticated_1.Authenticated {
    constructor() {
        super(...arguments);
        this.getOne = (id) => {
            return User_1.User.getOne(this, id);
        };
        this.getAll = () => {
            return User_1.User.getAll(this);
        };
        this.create = (userData) => {
            return User_1.User.create(this, userData);
        };
        this.update = (userId, userData) => {
            return User_1.User.update(this, userId, userData);
        };
        this.fromObject = (data) => {
            return new User_1.User(this, data);
        };
    }
}
exports.UserFactory = UserFactory;
