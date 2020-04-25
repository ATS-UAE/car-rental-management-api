import moxios from "moxios";
import { Api } from "../../Api";
import { USERNAME, PASSWORD, BASE_URL, COOKIE_SESSION } from "../fixtures";
import authPostResponse from "../fixtures/response/auth/post";

export const createApiInstance = () => {
	const LOGIN_URL = `${BASE_URL}/auth/login`;
	const LOGIN_METHOD = "post";
	const LOGIN_RESPONSE = authPostResponse();
	moxios.stubOnce(LOGIN_METHOD, LOGIN_URL, {
		response: LOGIN_RESPONSE,
		status: 200,
		headers: {
			"Set-Cookie": COOKIE_SESSION
		}
	});
	return Api.login({
		username: USERNAME,
		password: PASSWORD,
		baseUrl: BASE_URL
	});
};
