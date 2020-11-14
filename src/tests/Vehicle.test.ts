import moxios from "moxios";
import { getOne as vehicleGetResponse } from "./fixtures/response/vehicles/getOne";
import { getAll as vehicleGetAllResponse } from "./fixtures/response/vehicles/getAll";
import { BASE_URL } from "./fixtures";
import { createApiInstance } from "./utils/createApiInstance";
import { Vehicle } from "../Vehicle";

beforeEach(() => {
	moxios.install();
});
afterEach(() => {
	moxios.uninstall();
});
describe("Vehicle", () => {
	it("Gets one vehicle.", async () => {
		const api = await createApiInstance();
		const VEHICLE_ID = 1;
		const GET_ONE_RESPONSE = vehicleGetResponse();
		moxios.stubOnce("get", `${BASE_URL}/vehicles/${VEHICLE_ID}`, {
			response: GET_ONE_RESPONSE
		});
		const vehicle = await api.vehicle.getOne(VEHICLE_ID);
		expect(vehicle instanceof Vehicle).toBe(true);
		expect(vehicle.rawData).toEqual(GET_ONE_RESPONSE.data);
	});

	it("Gets all vehicles.", async () => {
		const api = await createApiInstance();
		const GET_ALL_RESPONSE = vehicleGetAllResponse();
		moxios.stubOnce("get", `${BASE_URL}/vehicles`, {
			response: GET_ALL_RESPONSE
		});
		const vehicles = await api.vehicle.getAll();
		expect(
			vehicles.getData().every((v, index) => {
				const matchesData = v.data === GET_ALL_RESPONSE.data[index];
				return matchesData && v instanceof Vehicle;
			})
		).toBe(true);
	});
});
