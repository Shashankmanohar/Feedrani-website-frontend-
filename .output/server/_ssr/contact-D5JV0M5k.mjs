import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as Header, t as Footer } from "./ProductLayout-BiewZlIP.mjs";
import { i as submitInquiry } from "./api-DNlTiZk9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-D5JV0M5k.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		phone: "",
		location: "",
		message: "",
		product: "General / Dealer Inquiry"
	});
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [errorMsg, setErrorMsg] = (0, import_react.useState)("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!formData.name || !formData.phone) {
			setErrorMsg("Please fill in your Name and Phone number.");
			return;
		}
		setLoading(true);
		setErrorMsg("");
		try {
			const res = await submitInquiry({
				name: formData.name,
				phone: formData.phone,
				location: formData.location,
				message: formData.message,
				product: formData.product,
				type: "Contact Page Form"
			});
			if (res && res.success) {
				setSubmitted(true);
				setFormData({
					name: "",
					phone: "",
					location: "",
					message: "",
					product: "General / Dealer Inquiry"
				});
			} else setErrorMsg(res?.message || "Failed to submit. Please try again.");
		} catch {
			setErrorMsg("Something went wrong. Please check your connection and try again.");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-slate-50 font-['Plus_Jakarta_Sans'] text-slate-900",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "pt-36 lg:pt-44 pb-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "mx-auto max-w-[1400px] px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-3xl bg-gradient-to-br from-[#002144] via-[#003822] to-[#327411] p-8 md:p-16 text-white shadow-2xl overflow-hidden relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl relative z-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block rounded-full bg-[#8ec44a]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#8ec44a] backdrop-blur-md",
									children: "Get In Touch With Us"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl",
									children: "Contact FeedRani & Dealer Support"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-lg leading-relaxed text-slate-200",
									children: "Have questions about our livestock feed formulations, bulk delivery schedules, or dealership opportunities? Connect with our dedicated sales and customer support team."
								})
							]
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "mx-auto max-w-[1400px] px-6 lg:px-8 mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 lg:grid-cols-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-5 space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid size-12 place-items-center rounded-2xl bg-[#327411]/10 text-xl text-[#327411]",
												children: "📞"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold uppercase tracking-wider text-slate-400",
												children: "Call Us Directly"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-lg font-bold text-[#002144]",
												children: "+91 7544000912"
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-xs text-slate-500",
											children: "Available Monday – Saturday, 9:00 AM – 7:00 PM IST."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "tel:+917544000912",
											className: "mt-4 inline-flex items-center justify-center rounded-xl bg-[#327411] px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#285e0e] transition-all",
											children: "Call Now"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid size-12 place-items-center rounded-2xl bg-[#25D366]/10 text-xl text-[#25D366]",
												children: "💬"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold uppercase tracking-wider text-slate-400",
												children: "WhatsApp Sales Support"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-lg font-bold text-[#002144]",
												children: "Instant Chat"
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-xs text-slate-500",
											children: "Quick inquiries about feed stock, bag prices, and dealer terms."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://wa.me/917544000912?text=Hello%20FeedRani%2C%20I%20would%20like%20to%20inquire%20about%20your%20feed%20products.",
											target: "_blank",
											rel: "noopener noreferrer",
											className: "mt-4 inline-flex items-center justify-center rounded-xl bg-[#25D366] px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#20ba5a] transition-all",
											children: "Chat on WhatsApp"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid size-12 place-items-center rounded-2xl bg-amber-500/10 text-xl text-amber-500",
											children: "📍"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold uppercase tracking-wider text-slate-400",
											children: "Head Office"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-base font-bold text-[#002144]",
											children: "Khajekalan, Patna City, Bihar 800008"
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-xs text-slate-500",
										children: "FeedRani Feeds & Nutrition Private Limited"
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-slate-200/80 bg-white p-8 md:p-12 shadow-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold uppercase tracking-widest text-[#327411]",
										children: "Send Message"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-1 text-3xl font-extrabold text-[#002144]",
										children: "Contact & Dealer Inquiry"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs text-slate-500",
										children: "Fill in the details below and our sales representative will get back to you."
									}),
									submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-500 text-3xl text-white",
												children: "✓"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-4 text-xl font-bold text-emerald-900",
												children: "Thank You! Inquiry Received"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm text-emerald-700",
												children: "Your details have been registered in our Admin system. Our sales representative will contact you shortly."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setSubmitted(false),
												className: "mt-6 rounded-xl bg-[#327411] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#285e0e] transition-all",
												children: "Send Another Inquiry"
											})
										]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
										onSubmit: handleSubmit,
										className: "mt-8 space-y-5",
										children: [
											errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "rounded-xl bg-rose-50 border border-rose-200 p-4 text-xs font-semibold text-rose-700",
												children: errorMsg
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid gap-5 sm:grid-cols-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "block text-xs font-bold text-slate-700",
													children: "Your Full Name *"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													required: true,
													value: formData.name,
													onChange: (e) => setFormData({
														...formData,
														name: e.target.value
													}),
													placeholder: "e.g. Rajesh Sharma",
													className: "mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#327411] focus:ring-2 focus:ring-[#327411]/20"
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "block text-xs font-bold text-slate-700",
													children: "Phone / WhatsApp *"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "tel",
													required: true,
													value: formData.phone,
													onChange: (e) => setFormData({
														...formData,
														phone: e.target.value
													}),
													placeholder: "+91 98765 43210",
													className: "mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#327411] focus:ring-2 focus:ring-[#327411]/20"
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid gap-5 sm:grid-cols-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "block text-xs font-bold text-slate-700",
													children: "District / Location *"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													required: true,
													value: formData.location,
													onChange: (e) => setFormData({
														...formData,
														location: e.target.value
													}),
													placeholder: "e.g. Muzaffarpur, Bihar",
													className: "mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#327411] focus:ring-2 focus:ring-[#327411]/20"
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "block text-xs font-bold text-slate-700",
													children: "Inquiry Type / Feed Product"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
													value: formData.product,
													onChange: (e) => setFormData({
														...formData,
														product: e.target.value
													}),
													className: "mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#327411] focus:ring-2 focus:ring-[#327411]/20 bg-white",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "General / Dealer Inquiry",
															children: "General / Dealer Dealership"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "Cattle Feed (Milch Cattle)",
															children: "Cattle Feed (High Fat/SNF)"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "Poultry Feed (Broiler/Layer)",
															children: "Poultry Feed"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "Aqua & Fish Feed",
															children: "Aqua & Fish Feed"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "Goat & Swine Feed",
															children: "Goat & Swine Feed"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "Mineral Mixture & Supplements",
															children: "Mineral Mixture & Supplements"
														})
													]
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-xs font-bold text-slate-700",
												children: "Message / Requirement Details"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												rows: 4,
												value: formData.message,
												onChange: (e) => setFormData({
													...formData,
													message: e.target.value
												}),
												placeholder: "Write your requirement or questions here (e.g. 50 bags required per month)...",
												className: "mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#327411] focus:ring-2 focus:ring-[#327411]/20"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "submit",
												disabled: loading,
												className: "w-full rounded-xl bg-[#327411] py-4 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#285e0e] transition-all disabled:opacity-50 flex items-center justify-center gap-2",
												children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" }), "Submitting..."] }) : "Submit Message"
											})
										]
									})
								]
							})
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ContactPage as component };
