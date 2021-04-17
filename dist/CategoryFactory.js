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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryFactory = void 0;
const Authenticated_1 = require("./Authenticated");
const Category_1 = require("./Category");
class CategoryFactory extends Authenticated_1.Authenticated {
    constructor() {
        super(...arguments);
        this.getOne = (id) => {
            return Category_1.Category.getOne(this, id);
        };
        this.getAll = () => {
            return Category_1.Category.getAll(this);
        };
        this.create = (clientData) => {
            return Category_1.Category.create(this, clientData);
        };
        this.update = (id, updatedCategoryData) => {
            return Category_1.Category.update(this, id, updatedCategoryData);
        };
        this.destroy = (id) => __awaiter(this, void 0, void 0, function* () {
            const { data: responseData } = yield this.api.delete(`/categories/${id}`);
            return responseData;
        });
        this.fromObject = (data) => {
            return new Category_1.Category(this, data);
        };
    }
}
exports.CategoryFactory = CategoryFactory;
