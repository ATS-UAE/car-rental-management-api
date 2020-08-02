import { AxiosRequestConfig } from "axios";

export const constructFormDataPayload = (payload: {
	[key: string]: unknown;
}): [FormData, AxiosRequestConfig] => {
	const formData = new FormData();
	Object.keys(payload).forEach((key) => {
		const value: unknown = payload[key];
		if (value instanceof Blob) {
			formData.append(key, value);
		} else if (value !== undefined) {
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
