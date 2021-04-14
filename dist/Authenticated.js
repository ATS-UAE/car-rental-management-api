"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authenticated = void 0;
/**
 * This class will hold the authentication data as well as the tools to communicate to the API server.
 */
var Authenticated = /** @class */ (function () {
    function Authenticated(api, options, data, meta) {
        this.api = api;
        this.options = options;
        this.data = data;
        this.meta = meta;
    }
    return Authenticated;
}());
exports.Authenticated = Authenticated;
