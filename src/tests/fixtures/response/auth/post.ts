import { AuthServerResponseGet, Role } from "../../../../shared/typings";

export default (): AuthServerResponseGet => ({
	code: 200,
	errors: [],
	success: true,
	message: "Logged in successfully",
	data: {
		blocked: false,
		clientId: 1,
		contractNo: null,
		createdAt: 0,
		lastLogin: null,
		email: "test@mail.com",
		emailConfirmed: true,
		firstName: "fname",
		lastName: "lname",
		id: 1,
		licenseImageSrc: null,
		mobileNumber: "",
		objectNo: "",
		role: Role.ADMIN,
		timeZone: "asia/dubai",
		updatedAt: 0,
		userCreatorId: 0,
		userImageSrc: null,
		username: "test"
	}
});
