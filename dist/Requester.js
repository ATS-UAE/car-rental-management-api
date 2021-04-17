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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Requester = void 0;
const axios_1 = __importDefault(require("axios"));
const ApiError_1 = require("./ApiError");
class Requester {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.get = (path, config) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.api.get(this.buildUrl(path), config);
                return {
                    data: response.data
                };
            }
            catch (e) {
                throw new ApiError_1.ApiError(e);
            }
        });
        this.patch = (path, body, config) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.api.patch(this.buildUrl(path), body, config);
                return {
                    data: response.data
                };
            }
            catch (e) {
                throw new ApiError_1.ApiError(e);
            }
        });
        this.post = (path, body, config) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.api.post(this.buildUrl(path), body, config);
                return {
                    data: response.data
                };
            }
            catch (e) {
                throw new ApiError_1.ApiError(e);
            }
        });
        this.put = (path, body, config) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.api.post(this.buildUrl(path), body, config);
                return {
                    data: response.data
                };
            }
            catch (e) {
                throw new ApiError_1.ApiError(e);
            }
        });
        this.delete = (path, config) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.api.delete(this.buildUrl(path), config);
                return {
                    data: response.data
                };
            }
            catch (e) {
                throw new ApiError_1.ApiError(e);
            }
        });
        this.buildUrl = (path) => {
            return `${this.baseUrl}${path}`;
        };
        this.api = axios_1.default.create({
            withCredentials: true
        });
    }
}
exports.Requester = Requester;
