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
exports.ClientFactory = void 0;
const Authenticated_1 = require("./Authenticated");
const Client_1 = require("./Client");
class ClientFactory extends Authenticated_1.Authenticated {
    constructor() {
        super(...arguments);
        this.getOne = (id) => {
            return Client_1.Client.getOne(this, id);
        };
        this.getAll = () => {
            return Client_1.Client.getAll(this);
        };
        this.create = (clientData) => {
            return Client_1.Client.create(this, clientData);
        };
        this.update = (id, updatedClientData) => {
            return Client_1.Client.update(this, id, updatedClientData);
        };
        this.destroy = (id) => __awaiter(this, void 0, void 0, function* () {
            const { data: responseData } = yield this.api.delete(`/clients/${id}`);
            return responseData;
        });
        this.fromObject = (data) => {
            return new Client_1.Client(this, data);
        };
    }
}
exports.ClientFactory = ClientFactory;
