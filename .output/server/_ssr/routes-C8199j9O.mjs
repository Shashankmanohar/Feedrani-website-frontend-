import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as feedrani_html_default } from "./feedrani.html-HH7AGa95.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C8199j9O.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HomePage() {
	const bodyContent = (0, import_react.useMemo)(() => {
		const match = feedrani_html_default.match(/<body[^>]*>([\s\S]*)<\/body>/i);
		return match ? match[1] : feedrani_html_default;
	}, []);
	(0, import_react.useEffect)(() => {
		if (!document.getElementById("iconify-script")) {
			const script = document.createElement("script");
			script.id = "iconify-script";
			script.src = "https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js";
			script.onload = () => {
				if (window.Iconify) window.Iconify.scan();
			};
			document.head.appendChild(script);
		} else if (window.Iconify) window.Iconify.scan();
		const menuButton = document.getElementById("menuButton");
		const closeDrawerButton = document.getElementById("closeDrawerButton");
		const sideDrawer = document.getElementById("sideDrawer");
		const menuBackdrop = document.getElementById("menuBackdrop");
		const openMenu = () => {
			if (sideDrawer && menuBackdrop) {
				sideDrawer.classList.remove("-translate-x-full");
				menuBackdrop.classList.remove("opacity-0", "pointer-events-none");
			}
		};
		const closeMenu = () => {
			if (sideDrawer && menuBackdrop) {
				sideDrawer.classList.add("-translate-x-full");
				menuBackdrop.classList.add("opacity-0", "pointer-events-none");
			}
		};
		menuButton?.addEventListener("click", openMenu);
		closeDrawerButton?.addEventListener("click", closeMenu);
		menuBackdrop?.addEventListener("click", closeMenu);
		return () => {
			menuButton?.removeEventListener("click", openMenu);
			closeDrawerButton?.removeEventListener("click", closeMenu);
			menuBackdrop?.removeEventListener("click", closeMenu);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { dangerouslySetInnerHTML: { __html: bodyContent } });
}
//#endregion
export { HomePage as component };
