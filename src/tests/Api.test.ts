import moxios from "moxios";
import { Api } from "../Api";
import authPostResponse from "./fixtures/response/auth/post";

describe("Api", () => {
	beforeEach(() => {
		moxios.install();
	});
	afterEach(() => {
		moxios.uninstall();
	});
	const USERNAME = "test-user";
	const PASSWORD = "test-password";
	const BASE_URL = "https://www.example.com/api";
	describe("auth", () => {
		const LOGIN_URL = `${BASE_URL}/auth/login`;
		const LOGIN_METHOD = "post";
		const COOKIE_SESSION =
			"connect.sid=s%3AZvvHUU93a0rEb7WgfwH79WGtW_ACjM1J.GzEwEsVFFpJDIlJJYaaZPb%2F%2FfHMrVvNyzskVWUBl1hs";
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
			moxios.stubOnce(LOGIN_METHOD, LOGIN_URL, {
				response: LOGIN_RESPONSE,
				status: 200,
				headers: {
					"Set-Cookie": COOKIE_SESSION
				}
			});
			moxios.stubOnce(LOGOUT_METHOD, LOGOUT_URL, {
				status: 200,
				response: {
					code: 200,
					errors: [],
					message: "Logout successful!",
					success: true
				}
			});
			const api = await Api.login({
				username: USERNAME,
				password: PASSWORD,
				baseUrl: BASE_URL
			});
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
