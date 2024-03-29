"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructFormDataPayload = void 0;
exports.constructFormDataPayload = (payload) => {
    const formData = new FormData();
    Object.keys(payload).forEach((key) => {
        const value = payload[key];
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
