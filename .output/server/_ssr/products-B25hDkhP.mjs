import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Header, t as Footer } from "./ProductLayout-BiewZlIP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-B25hDkhP.js
var import_jsx_runtime = require_jsx_runtime();
function ProductsOverviewPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-slate-50 font-['Plus_Jakarta_Sans'] text-slate-900",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "pt-36 lg:pt-44 pb-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-[1400px] px-6 lg:px-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold uppercase tracking-widest text-[#327411]",
							children: "Comprehensive Animal Nutrition"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 text-4xl font-extrabold tracking-tight text-[#002144] sm:text-5xl lg:text-6xl",
							children: "FeedRani Product Portfolio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl mx-auto text-lg text-slate-600",
							children: "Explore our specialized range of scientifically formulated livestock feed, aqua diets, and mineral supplements."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-16 grid gap-8 md:grid-cols-2",
							children: [
								{
									title: "Poultry Feed Line",
									path: "/products/poultry-feed",
									img: "/assets/hen.webp",
									desc: "Pre-starter, starter, finisher, and layer feeds designed for high FCR, fast weight gains, and durable egg shell structure.",
									tags: [
										"Broiler Pellets",
										"Layer Mash",
										"Pre-Starter Crumbles"
									]
								},
								{
									title: "Aqua & Fish Feed",
									path: "/products/aqua-fish-feed",
									img: "/assets/fish-feed.webp",
									desc: "Water-stable floating and sinking pellets for freshwater and brackish fish, shrimp, fingerlings, and hatcheries.",
									tags: [
										"Floating Pellets",
										"Sinking Aqua Feed",
										"Fry Crumbles"
									]
								},
								{
									title: "Goat, Swine & Mineral Mixtures",
									path: "/products/goat-swine-minerals",
									img: "/assets/goat.webp",
									desc: "High-protein fattening feed for goats & swine plus chelated mineral mixtures and vitamin premixes.",
									tags: [
										"Goat Fattening Pellets",
										"Swine Grower",
										"Chelated Minerals"
									]
								},
								{
									title: "Cattle & Dairy Feed",
									path: "/products/cattle-dairy-feed",
									img: "/assets/cow.webp",
									desc: "Nutrient-rich compound cattle feed formulated with bypass protein and bypass fat for maximum milk volume, FAT, and SNF.",
									tags: [
										"Lactation Pellets",
										"Bypass Fat Feed",
										"Calf Starter"
									]
								}
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "overflow-hidden rounded-2xl bg-slate-100 h-56 mb-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: item.img,
											alt: item.title,
											className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-2xl font-bold text-[#002144]",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-slate-600 leading-relaxed",
										children: item.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 flex flex-wrap gap-2",
										children: item.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700",
											children: t
										}, t))
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 pt-4 border-t border-slate-100 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold uppercase tracking-wider text-[#327411]",
										children: "Dedicated Page"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: item.path,
										className: "inline-flex items-center gap-2 rounded-full bg-[#002144] px-5 py-2.5 text-xs font-semibold text-white transition-colors group-hover:bg-[#327411]",
										children: "View Product Page →"
									})]
								})]
							}, item.path))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "mx-auto max-w-[1400px] px-6 lg:px-8 mt-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl bg-gradient-to-r from-[#002144] to-[#327411] p-8 md:p-12 text-white text-center shadow-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-widest text-[#8ec44a]",
								children: "Direct Factory Dispatch"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 text-3xl font-extrabold sm:text-4xl",
								children: "Interested in Bulk Feed Orders or Dealership?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-xl mx-auto text-sm text-slate-200",
								children: "Connect with our regional distribution managers to get bulk pricing, dealer margins, and logistics support."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap items-center justify-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "rounded-xl bg-[#8ec44a] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#002144] shadow-md hover:bg-white transition-all",
									children: "Contact Sales & Dealer Team →"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/about",
									className: "rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md hover:bg-white/20 transition-all",
									children: "Learn About Our Quality Science →"
								})]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ProductsOverviewPage as component };
