import { t as axios } from "../_libs/axios+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-DNlTiZk9.js
var api = axios.create({
	baseURL: "http://localhost:5000/api",
	headers: { "Content-Type": "application/json" }
});
async function submitInquiry(data) {
	return (await api.post("/inquiries", data)).data;
}
async function adminLogin(credentials) {
	try {
		return (await api.post("/admin/login", credentials)).data;
	} catch (err) {
		const message = err.response?.data?.message || "Login failed";
		throw new Error(message);
	}
}
async function getInquiries(token, search, status) {
	return (await api.get("/inquiries", {
		headers: { Authorization: `Bearer ${token}` },
		params: {
			search,
			status
		}
	})).data;
}
async function updateInquiryStatus(token, id, status) {
	return (await api.patch(`/inquiries/${id}`, { status }, { headers: { Authorization: `Bearer ${token}` } })).data;
}
async function deleteInquiry(token, id) {
	return (await api.delete(`/inquiries/${id}`, { headers: { Authorization: `Bearer ${token}` } })).data;
}
//#endregion
export { updateInquiryStatus as a, submitInquiry as i, deleteInquiry as n, getInquiries as r, adminLogin as t };
