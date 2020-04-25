import { ApiError } from "../../exceptions/ApiError";

describe("ApiError", () => {
	it("Extends error", () => {
		const error = new ApiError("test");
		expect(error instanceof Error).toBe(true);
	});
});
