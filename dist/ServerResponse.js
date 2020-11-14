"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ServerResponse = /** @class */ (function () {
    function ServerResponse(rawData, getData, meta) {
        this.rawData = rawData;
        this.getData = getData;
        this.meta = meta;
    }
    return ServerResponse;
}());
exports.ServerResponse = ServerResponse;
