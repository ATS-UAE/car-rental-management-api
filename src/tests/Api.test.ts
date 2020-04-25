import moxios from "moxios";
import { Api } from "../Api";
import authPostResponse from "./fixtures/response/auth/post";
import { BASE_URL, COOKIE_SESSION, USERNAME, PASSWORD } from "./fixtures";
import { createApiInstance } from "./utils/createApiInstance";

describe("Api", () => {
	beforeEach(() => {
		moxios.install();
	});
	afterEach(() => {
		moxios.uninstall();
	});
	describe("auth", () => {
		const LOGIN_URL = `${BASE_URL}/auth/login`;
		const LOGIN_METHOD = "post";
		const LOGIN_RESPONSE = authPostResponse();

		it("Logs in", async () => {
			moxios.stubOnce(LOGIN_METHOD, LOGIN_URL, {
				response: LOGIN_RESPONSE,
				status: 200,
				headers: {
					"Set-Cookie": COOKIE_SESSION
				}
			});
			const api = await Api.login({
				username: USERNAME,
				password: PASSWORD,
				baseUrl: BASE_URL
			});
			const mostRecentApiCall = moxios.requests.mostRecent();
			expect(mostRecentApiCall.url).toEqual(LOGIN_URL);
			expect(mostRecentApiCall.config.method).toEqual(LOGIN_METHOD);
			expect(mostRecentApiCall.withCredentials).toEqual(true);
			expect(api instanceof Api).toEqual(true);
			expect(api.data).toEqual(LOGIN_RESPONSE);
		});

		it("Throws an error on wrong credentials", async () => {
			const response = {
				code: 401,
				data: null,
				errors: [],
				message: "Invalid credentials.",
				success: false
			};

			moxios.stubOnce(LOGIN_METHOD, LOGIN_URL, {
				response,
				status: 401
			});
			await expect(
				Api.login({
					username: USERNAME,
					password: PASSWORD,
					baseUrl: BASE_URL
				})
			).rejects.toBeTruthy();
		});

		it("Logs out", async () => {
			const LOGOUT_METHOD = "get";
			const LOGOUT_URL = `${BASE_URL}/auth/logout`;
			moxios.stubOnce(LOGOUT_METHOD, LOGOUT_URL, {
				status: 200,
				response: {
					code: 200,
					errors: [],
					message: "Logout successful!",
					success: true
				}
			});
			const api = await createApiInstance();
			await api.logout();
			const mostRecentApiCall = moxios.requests.mostRecent();
			expect(mostRecentApiCall.url).toEqual(LOGOUT_URL);
			expect(mostRecentApiCall.config.method).toEqual(LOGOUT_METHOD);
			test.todo(
				"Doing anything else when logged out will throw an error."
			);
		});
	});
});
