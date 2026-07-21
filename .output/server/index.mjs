globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/aqua-fish-feed-B7w-TO8A.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b42-G+AS+2gn9G958t6wsoyN4P+qWZE\"",
		"mtime": "2026-07-21T12:51:00.236Z",
		"size": 11074,
		"path": "../public/assets/aqua-fish-feed-B7w-TO8A.js"
	},
	"/assets/about-Y_DnbqNN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1fc2-k/Eg+zhf8MgH8aFfMu8csAtX6Vk\"",
		"mtime": "2026-07-21T12:51:00.236Z",
		"size": 8130,
		"path": "../public/assets/about-Y_DnbqNN.js"
	},
	"/assets/contact-BMcNkbFU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"192a-XUBOL6GqVOTpxja2C6wUPc8fZvw\"",
		"mtime": "2026-07-21T12:51:00.237Z",
		"size": 6442,
		"path": "../public/assets/contact-BMcNkbFU.js"
	},
	"/assets/cattle-dairy-feed-BOomd9YH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2bce-aTasKOUvgfL+6o1aYEjjX/J2opU\"",
		"mtime": "2026-07-21T12:51:00.237Z",
		"size": 11214,
		"path": "../public/assets/cattle-dairy-feed-BOomd9YH.js"
	},
	"/assets/cows.jpg": {
		"type": "image/jpeg",
		"etag": "\"35cc3-wAmueDvq3GwHQCo7Fu01YF8XiiY\"",
		"mtime": "2026-07-18T02:18:12.000Z",
		"size": 220355,
		"path": "../public/assets/cows.jpg"
	},
	"/assets/cow feed.webp": {
		"type": "image/webp",
		"etag": "\"256a4-vIsNJhjjXaSfvkdjRZ6xR/iHGC0\"",
		"mtime": "2026-07-19T11:05:49.387Z",
		"size": 153252,
		"path": "../public/assets/cow feed.webp"
	},
	"/assets/cow.webp": {
		"type": "image/webp",
		"etag": "\"270c6-ObT3qK3Q8J28gEXuG6UOWXv7p/w\"",
		"mtime": "2026-07-19T11:05:20.006Z",
		"size": 159942,
		"path": "../public/assets/cow.webp"
	},
	"/assets/dairy-farm.jpg": {
		"type": "image/jpeg",
		"etag": "\"3508f-fhCfDqGBrADLmgD9lAUZahAwR6I\"",
		"mtime": "2026-07-18T02:18:12.000Z",
		"size": 217231,
		"path": "../public/assets/dairy-farm.jpg"
	},
	"/feedrani-logo.png": {
		"type": "image/png",
		"etag": "\"4100c-GeKvdlwf6jW7Y5JQWVTuDcHVuEc\"",
		"mtime": "2026-07-18T02:18:12.000Z",
		"size": 266252,
		"path": "../public/feedrani-logo.png"
	},
	"/assets/facility.jpg": {
		"type": "image/jpeg",
		"etag": "\"2837f-cQbQg9IHWSQ53HbZN9Qr8hBrcEA\"",
		"mtime": "2026-07-18T02:18:12.000Z",
		"size": 164735,
		"path": "../public/assets/facility.jpg"
	},
	"/assets/goat-swine-minerals-BbmXBTkU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2bb5-t6BPKi8Z+3V1dkUXrwN341w8Vj4\"",
		"mtime": "2026-07-21T12:51:00.238Z",
		"size": 11189,
		"path": "../public/assets/goat-swine-minerals-BbmXBTkU.js"
	},
	"/assets/fish-feed.webp": {
		"type": "image/webp",
		"etag": "\"22c5a-gMnbUQLQO3auxps2WARTEjL0gPw\"",
		"mtime": "2026-07-19T11:06:19.562Z",
		"size": 142426,
		"path": "../public/assets/fish-feed.webp"
	},
	"/assets/fodder.jpg": {
		"type": "image/jpeg",
		"etag": "\"31ade-Mnpnm4kiQJ1Uqsy47tMVjn8NHwU\"",
		"mtime": "2026-07-18T02:18:12.000Z",
		"size": 203486,
		"path": "../public/assets/fodder.jpg"
	},
	"/assets/goat.webp": {
		"type": "image/webp",
		"etag": "\"2dfba-O4UFA0TkSt5sWYYP+Gx+ITcDpU4\"",
		"mtime": "2026-07-19T11:04:54.631Z",
		"size": 188346,
		"path": "../public/assets/goat.webp"
	},
	"/assets/hero-bg-960.jpg": {
		"type": "image/jpeg",
		"etag": "\"23174-WYMA3c25EmDhkOpde8QhycSIrk8\"",
		"mtime": "2026-07-18T02:18:12.000Z",
		"size": 143732,
		"path": "../public/assets/hero-bg-960.jpg"
	},
	"/assets/poultry-feed-CGYlidmP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"513c-REAxH5oAjQsJ5/t5DsBt9GoBvmw\"",
		"mtime": "2026-07-21T12:51:00.238Z",
		"size": 20796,
		"path": "../public/assets/poultry-feed-CGYlidmP.js"
	},
	"/assets/ProductLayout-AYvNBbYT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"490e-LhORrr5PGpq1m0fW1NqvIRGYwBM\"",
		"mtime": "2026-07-21T12:51:00.235Z",
		"size": 18702,
		"path": "../public/assets/ProductLayout-AYvNBbYT.js"
	},
	"/assets/index-CgKe9syx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54976-iUXWRqS575Dz2W+4KF7Pfru1kAI\"",
		"mtime": "2026-07-21T12:51:00.235Z",
		"size": 346486,
		"path": "../public/assets/index-CgKe9syx.js"
	},
	"/assets/hen.webp": {
		"type": "image/webp",
		"etag": "\"214c6-bdjhU3bqEhhTKPjm/6nFkKp/G5Q\"",
		"mtime": "2026-07-19T11:06:26.034Z",
		"size": 136390,
		"path": "../public/assets/hen.webp"
	},
	"/assets/products-BuvDVewd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d44-i98ax0eliER7I3abpfKK0uAq7yE\"",
		"mtime": "2026-07-21T12:51:00.239Z",
		"size": 3396,
		"path": "../public/assets/products-BuvDVewd.js"
	},
	"/assets/lab.jpg": {
		"type": "image/jpeg",
		"etag": "\"2385a-MJWRG1tv1qDe+pMMS37nqR6uj9Y\"",
		"mtime": "2026-07-18T02:18:12.000Z",
		"size": 145498,
		"path": "../public/assets/lab.jpg"
	},
	"/assets/hero-bg.jpg": {
		"type": "image/jpeg",
		"etag": "\"75fa0-DyEiNWNKUVbND5mUuNx5M/GCb10\"",
		"mtime": "2026-07-18T02:18:12.000Z",
		"size": 483232,
		"path": "../public/assets/hero-bg.jpg"
	},
	"/assets/logo.png": {
		"type": "image/png",
		"etag": "\"11d15-IFIsK6n107dDKnId0j4r+y/49Vk\"",
		"mtime": "2026-07-18T02:18:12.000Z",
		"size": 72981,
		"path": "../public/assets/logo.png"
	},
	"/assets/packaging.jpg": {
		"type": "image/jpeg",
		"etag": "\"300b1-KHBCoEht+fy+yBRb91YyMHK8sHs\"",
		"mtime": "2026-07-18T02:18:12.000Z",
		"size": 196785,
		"path": "../public/assets/packaging.jpg"
	},
	"/assets/hen-2.webp": {
		"type": "image/webp",
		"etag": "\"2f166-QHXAKCAIFLLPOjIdp/7th48gQiw\"",
		"mtime": "2026-07-19T11:06:00.730Z",
		"size": 192870,
		"path": "../public/assets/hen-2.webp"
	},
	"/assets/styles-BsZMo6WH.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1e81c-4Mgs++whsvk3CdnG4D8LI6k4YYw\"",
		"mtime": "2026-07-21T12:51:00.240Z",
		"size": 124956,
		"path": "../public/assets/styles-BsZMo6WH.css"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_wVqC53 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_wVqC53
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
