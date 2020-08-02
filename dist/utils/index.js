"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructFormDataPayload = function (payload) {
    var formData = new FormData();
    Object.keys(payload).forEach(function (key) {
        var value = payload[key];
        if (value instanceof Blob) {
            formData.append(key, value);
        }
        else if (value !== undefined) {
            formData.append(key, JSON.stringify(value));
        }
    });
    return [
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    ];
};
