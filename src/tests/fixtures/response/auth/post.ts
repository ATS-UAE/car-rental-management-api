import { AuthServerResponseGet, Role } from "car-rental-management-shared";

export default (): AuthServerResponseGet => ({
	code: 200,
	errors: [],
	success: true,
	message: "Logged in successfully",
	data: {
		blocked: false,
		clientId: 1,
		createdAt: 0,
		lastLogin: null,
		email: "test@mail.com",
		emailConfirmed: true,
		firstName: "fname",
		lastName: "lname",
		id: 1,
		licenseImageSrc: null,
		mobileNumber: "",
		role: Role.ADMIN,
		timeZone: "asia/dubai",
		updatedAt: 0,
		userImageSrc: null,
		username: "test"
	}
});
