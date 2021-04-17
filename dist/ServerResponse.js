"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerResponse = void 0;
class ServerResponse {
    constructor(rawData, getData, meta) {
        this.rawData = rawData;
        this.getData = getData;
        this.meta = meta;
    }
}
exports.ServerResponse = ServerResponse;
