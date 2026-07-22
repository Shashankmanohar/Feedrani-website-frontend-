import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as updateInquiryStatus, n as deleteInquiry, r as getInquiries, t as adminLogin } from "./api-DNlTiZk9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-BkqBfmA7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminPage() {
	const [token, setToken] = (0, import_react.useState)(() => localStorage.getItem("feedrani_admin_token"));
	const [adminUser, setAdminUser] = (0, import_react.useState)(() => localStorage.getItem("feedrani_admin_user") || "FeedRani Admin");
	const [username, setUsername] = (0, import_react.useState)("admin");
	const [password, setPassword] = (0, import_react.useState)("admin123");
	const [loginError, setLoginError] = (0, import_react.useState)("");
	const [loginLoading, setLoginLoading] = (0, import_react.useState)(false);
	const [inquiries, setInquiries] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	const [selectedStatus, setSelectedStatus] = (0, import_react.useState)("All");
	const [selectedInquiry, setSelectedInquiry] = (0, import_react.useState)(null);
	const fetchInquiriesData = async () => {
		if (!token) return;
		setLoading(true);
		try {
			const res = await getInquiries(token, searchTerm, selectedStatus);
			if (res && res.inquiries) setInquiries(res.inquiries);
		} catch (err) {
			console.error("Failed to fetch inquiries:", err);
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		if (token) fetchInquiriesData();
	}, [token, selectedStatus]);
	const handleLogin = async (e) => {
		e.preventDefault();
		setLoginLoading(true);
		setLoginError("");
		try {
			const res = await adminLogin({
				username,
				password
			});
			if (res.token) {
				setToken(res.token);
				setAdminUser(res.admin?.name || username);
				localStorage.setItem("feedrani_admin_token", res.token);
				localStorage.setItem("feedrani_admin_user", res.admin?.name || username);
			}
		} catch (err) {
			setLoginError(err.message || "Invalid credentials. Use admin / admin123");
		} finally {
			setLoginLoading(false);
		}
	};
	const handleLogout = () => {
		setToken(null);
		localStorage.removeItem("feedrani_admin_token");
		localStorage.removeItem("feedrani_admin_user");
	};
	const handleStatusChange = async (id, newStatus) => {
		if (!token) return;
		await updateInquiryStatus(token, id, newStatus);
		setInquiries((prev) => prev.map((item) => item.id === id || item._id === id ? {
			...item,
			status: newStatus
		} : item));
		if (selectedInquiry && (selectedInquiry.id === id || selectedInquiry._id === id)) setSelectedInquiry((prev) => prev ? {
			...prev,
			status: newStatus
		} : null);
	};
	const handleDelete = async (id) => {
		if (!token) return;
		if (!confirm("Are you sure you want to delete this form submission?")) return;
		await deleteInquiry(token, id);
		setInquiries((prev) => prev.filter((item) => item.id !== id && item._id !== id));
		if (selectedInquiry && (selectedInquiry.id === id || selectedInquiry._id === id)) setSelectedInquiry(null);
	};
	const exportToCSV = () => {
		if (!inquiries.length) return;
		const headers = [
			"ID",
			"Name",
			"Phone",
			"Location",
			"Product/Type",
			"Status",
			"Date",
			"Message"
		];
		const rows = inquiries.map((i) => [
			`"${i.id || i._id}"`,
			`"${i.name}"`,
			`"${i.phone}"`,
			`"${i.location || ""}"`,
			`"${i.product || i.type || ""}"`,
			`"${i.status}"`,
			`"${new Date(i.createdAt).toLocaleString()}"`,
			`"${(i.message || "").replace(/"/g, "\"\"")}"`
		]);
		const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
		const encodedUri = encodeURI(csvContent);
		const link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", `FeedRani_Inquiries_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`);
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
	const totalCount = inquiries.length;
	const pendingCount = inquiries.filter((i) => i.status === "Pending").length;
	const contactedCount = inquiries.filter((i) => i.status === "Contacted").length;
	const completedCount = inquiries.filter((i) => i.status === "Completed").length;
	const filteredInquiries = inquiries.filter((item) => {
		if (!searchTerm) return true;
		const q = searchTerm.toLowerCase();
		return item.name.toLowerCase().includes(q) || item.phone.toLowerCase().includes(q) || item.location && item.location.toLowerCase().includes(q) || item.product && item.product.toLowerCase().includes(q) || item.message && item.message.toLowerCase().includes(q);
	});
	if (!token) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-slate-900 font-['Plus_Jakarta_Sans'] flex items-center justify-center p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md bg-slate-800 border border-slate-700/80 rounded-3xl p-8 shadow-2xl text-white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex size-14 items-center justify-center rounded-2xl bg-[#327411] text-2xl font-bold text-white shadow-lg",
							children: "FR"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 text-2xl font-extrabold tracking-tight",
							children: "FeedRani Admin Portal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-slate-400",
							children: "Sign in to access user form submissions & dealer inquiries"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleLogin,
					className: "mt-8 space-y-4",
					children: [
						loginError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl bg-rose-500/10 border border-rose-500/30 p-3 text-xs text-rose-400 text-center font-medium",
							children: loginError
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-bold text-slate-300 uppercase tracking-wider",
							children: "Username"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							required: true,
							value: username,
							onChange: (e) => setUsername(e.target.value),
							placeholder: "admin",
							className: "mt-1.5 w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-[#327411] focus:ring-2 focus:ring-[#327411]/40"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-bold text-slate-300 uppercase tracking-wider",
							children: "Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							required: true,
							value: password,
							onChange: (e) => setPassword(e.target.value),
							placeholder: "••••••••",
							className: "mt-1.5 w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-[#327411] focus:ring-2 focus:ring-[#327411]/40"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: loginLoading,
								className: "w-full rounded-xl bg-[#327411] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#285e0e] transition-all disabled:opacity-50 flex items-center justify-center gap-2",
								children: loginLoading ? "Authenticating..." : "Sign In to Admin Dashboard"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 border-t border-slate-700/60 pt-4 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[11px] text-slate-500",
						children: [
							"Default credentials: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "text-slate-300 bg-slate-900 px-1.5 py-0.5 rounded",
								children: "admin"
							}),
							" / ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "text-slate-300 bg-slate-900 px-1.5 py-0.5 rounded",
								children: "admin123"
							})
						]
					})
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-slate-950 font-['Plus_Jakarta_Sans'] text-slate-100",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md px-6 py-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-10 items-center justify-center rounded-xl bg-[#327411] font-black text-white shadow-md",
							children: "FR"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-base font-extrabold text-white leading-tight",
							children: "FeedRani Admin Panel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-semibold text-emerald-400",
							children: "● Live Form Database Active"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden sm:flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1.5 border border-slate-700/60 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-emerald-500 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-300 font-medium",
									children: adminUser
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "rounded-xl border border-slate-700 bg-slate-800 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-700 transition-all",
								children: "🌐 View Website"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: handleLogout,
								className: "rounded-xl bg-rose-600/20 border border-rose-500/30 px-3.5 py-2 text-xs font-semibold text-rose-300 hover:bg-rose-600/30 transition-all",
								children: "Sign Out"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-7xl px-6 py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-wider text-slate-400",
									children: "Total Submissions"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-baseline justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-3xl font-black text-white",
										children: totalCount
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-400",
										children: "All Forms"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-amber-500/20 bg-amber-950/10 p-6 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-wider text-amber-400",
									children: "Pending Action"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-baseline justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-3xl font-black text-amber-400",
										children: pendingCount
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-amber-500/20 px-2.5 py-1 text-xs font-bold text-amber-300",
										children: "Requires Contact"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-blue-500/20 bg-blue-950/10 p-6 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-wider text-blue-400",
									children: "In Contact"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-baseline justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-3xl font-black text-blue-400",
										children: contactedCount
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-blue-500/20 px-2.5 py-1 text-xs font-bold text-blue-300",
										children: "Follow-up"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-emerald-500/20 bg-emerald-950/10 p-6 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-wider text-emerald-400",
									children: "Completed"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-baseline justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-3xl font-black text-emerald-400",
										children: completedCount
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs font-bold text-emerald-300",
										children: "Resolved"
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap items-center gap-2 rounded-2xl bg-slate-900 p-1.5 border border-slate-800",
							children: [
								"All",
								"Pending",
								"Contacted",
								"Completed"
							].map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSelectedStatus(status),
								className: `rounded-xl px-4 py-2 text-xs font-bold transition-all ${selectedStatus === status ? "bg-[#327411] text-white shadow-md" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,
								children: status
							}, status))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex-1 sm:w-64",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										placeholder: "Search name, phone, district...",
										value: searchTerm,
										onChange: (e) => setSearchTerm(e.target.value),
										className: "w-full rounded-2xl bg-slate-900 border border-slate-800 pl-4 pr-10 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-[#327411]"
									}), searchTerm && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setSearchTerm(""),
										className: "absolute right-3 top-2.5 text-xs text-slate-500 hover:text-slate-300",
										children: "✕"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: fetchInquiriesData,
									className: "rounded-2xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-xs font-semibold text-slate-300 hover:bg-slate-800 transition-all flex items-center gap-1.5",
									children: "🔄 Refresh"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: exportToCSV,
									className: "rounded-2xl bg-slate-800 border border-slate-700/80 px-4 py-2.5 text-xs font-semibold text-emerald-400 hover:bg-slate-700 transition-all",
									children: "📥 Export CSV"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 rounded-3xl border border-slate-800 bg-slate-900 overflow-hidden shadow-xl",
						children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-12 text-center text-slate-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "inline-block animate-spin rounded-full h-8 w-8 border-3 border-[#327411] border-t-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs font-semibold",
								children: "Loading Form Inquiries..."
							})]
						}) : filteredInquiries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-16 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-4xl",
									children: "📭"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-base font-bold text-slate-200",
									children: "No Form Submissions Found"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-slate-500",
									children: searchTerm ? `No inquiries match your search term "${searchTerm}"` : "Form submissions will appear here automatically when users fill out forms on the website."
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-x-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full text-left text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
									className: "bg-slate-950 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-800",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-6 py-4",
											children: "User Details"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-6 py-4",
											children: "Phone / WhatsApp"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-6 py-4",
											children: "District / Location"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-6 py-4",
											children: "Product Requirement"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-6 py-4",
											children: "Date"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-6 py-4",
											children: "Status"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-6 py-4 text-right",
											children: "Actions"
										})
									] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
									className: "divide-y divide-slate-800/60",
									children: filteredInquiries.map((item) => {
										const itemId = item.id || item._id || "";
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "hover:bg-slate-800/40 transition-colors",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
													className: "px-6 py-4 font-bold text-white",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: item.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] font-normal text-slate-400",
														children: item.type || "Contact Form"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-6 py-4 font-mono font-medium text-slate-200",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
														href: `https://wa.me/${item.phone.replace(/[^0-9]/g, "")}`,
														target: "_blank",
														rel: "noopener noreferrer",
														className: "inline-flex items-center gap-1.5 text-emerald-400 hover:underline",
														children: ["💬 ", item.phone]
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-6 py-4 text-slate-300",
													children: item.location || "—"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-6 py-4",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded-lg bg-slate-800 px-2.5 py-1 text-[11px] font-medium text-slate-300 border border-slate-700/60",
														children: item.product || "General Inquiry"
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-6 py-4 text-slate-400 text-[11px]",
													children: new Date(item.createdAt).toLocaleDateString("en-IN", {
														day: "numeric",
														month: "short",
														year: "numeric",
														hour: "2-digit",
														minute: "2-digit"
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-6 py-4",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: `inline-block rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider ${item.status === "Pending" ? "bg-amber-500/20 text-amber-300 border border-amber-500/30" : item.status === "Contacted" ? "bg-blue-500/20 text-blue-300 border border-blue-500/30" : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"}`,
														children: item.status
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-6 py-4 text-right",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-end gap-2",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																onClick: () => setSelectedInquiry(item),
																className: "rounded-lg bg-slate-800 px-3 py-1.5 text-[11px] font-medium text-slate-200 hover:bg-slate-700 transition-all",
																children: "View Details"
															}),
															item.status === "Pending" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																onClick: () => handleStatusChange(itemId, "Contacted"),
																className: "rounded-lg bg-blue-600/30 border border-blue-500/30 px-3 py-1.5 text-[11px] font-semibold text-blue-300 hover:bg-blue-600/40 transition-all",
																children: "Mark Contacted"
															}),
															item.status !== "Completed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																onClick: () => handleStatusChange(itemId, "Completed"),
																className: "rounded-lg bg-emerald-600/30 border border-emerald-500/30 px-3 py-1.5 text-[11px] font-semibold text-emerald-300 hover:bg-emerald-600/40 transition-all",
																children: "Resolve"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																onClick: () => handleDelete(itemId),
																className: "rounded-lg bg-rose-600/10 border border-rose-500/20 px-2 py-1.5 text-xs text-rose-400 hover:bg-rose-600/30 transition-all",
																title: "Delete inquiry",
																children: "🗑️"
															})
														]
													})
												})
											]
										}, itemId);
									})
								})]
							})
						})
					})
				]
			}),
			selectedInquiry && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-800 p-8 shadow-2xl text-white relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSelectedInquiry(null),
							className: "absolute right-6 top-6 size-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center text-sm font-bold",
							children: "✕"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-bold uppercase tracking-wider text-[#327411]",
							children: "Form Submission Details"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 text-2xl font-black text-white",
							children: selectedInquiry.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-slate-400",
							children: selectedInquiry.type || "Contact Form"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-4 rounded-2xl bg-slate-950 p-5 border border-slate-800",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between border-b border-slate-800/80 pb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold text-slate-400",
										children: "Phone Number:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${selectedInquiry.phone}`,
										className: "text-xs font-bold text-emerald-400 hover:underline font-mono",
										children: selectedInquiry.phone
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between border-b border-slate-800/80 pb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold text-slate-400",
										children: "Location / District:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold text-slate-200",
										children: selectedInquiry.location || "Not specified"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between border-b border-slate-800/80 pb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold text-slate-400",
										children: "Product / Category:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold text-slate-200",
										children: selectedInquiry.product || "General Inquiry"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between border-b border-slate-800/80 pb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold text-slate-400",
										children: "Submitted On:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold text-slate-300",
										children: new Date(selectedInquiry.createdAt).toLocaleString("en-IN")
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs font-semibold text-slate-400",
									children: "Full Message / Notes:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs leading-relaxed text-slate-200 bg-slate-900 p-3 rounded-xl border border-slate-800/60 whitespace-pre-wrap",
									children: selectedInquiry.message || "No message provided."
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `https://wa.me/${selectedInquiry.phone.replace(/[^0-9]/g, "")}?text=Hello%20${encodeURIComponent(selectedInquiry.name)}%2C%20this%20is%20FeedRani%20sales%20team%20regarding%20your%20inquiry.`,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex-1 rounded-xl bg-[#25D366] py-3 text-center text-xs font-bold uppercase tracking-wider text-white hover:bg-[#20ba5a] transition-all",
								children: "💬 Open WhatsApp Chat"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSelectedInquiry(null),
								className: "rounded-xl bg-slate-800 px-5 py-3 text-xs font-bold text-slate-300 hover:bg-slate-700 transition-all",
								children: "Close"
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { AdminPage as component };
