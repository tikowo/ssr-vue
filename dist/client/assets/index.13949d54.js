import { o as openBlock, c as createElementBlock, r as resolveComponent, a as createVNode, w as withCtx, b as renderSlot, d as createTextVNode, h, R as RouterView, S as Suspense, e as createRouter$1, f as createWebHistory, u as useStore$1, g as createStore$1, i as createSSRApp } from "./vendor.28417265.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
const _sfc_main$3 = {};
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, "something cool");
}
_sfc_main$3.render = _sfc_render$3;
var __glob_5_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$3
});
var App_vue_vue_type_style_index_0_lang = "\n@font-face {\n  font-family: 'Inter';\n  font-style: italic;\n  font-weight: 400;\n  font-display: swap;\n  src: url('__VITE_ASSET__bab4e808__$_#iefix__') format('woff2'),\n    url('__VITE_ASSET__7b187d57__') format('woff');\n}\n.inter {\n  font-family: 'Inter';\n}\n#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 60px;\n}\n";
const _sfc_main$2 = {};
const _hoisted_1$1 = /* @__PURE__ */ createTextVNode("Home");
const _hoisted_2$1 = /* @__PURE__ */ createTextVNode("| ");
const _hoisted_3$1 = /* @__PURE__ */ createTextVNode("About");
const _hoisted_4$1 = /* @__PURE__ */ createTextVNode(" default layout ");
function _sfc_render$2(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_router_link, { to: "/" }, {
      default: withCtx(() => [
        _hoisted_1$1
      ]),
      _: 1
    }),
    _hoisted_2$1,
    createVNode(_component_router_link, { to: "/about" }, {
      default: withCtx(() => [
        _hoisted_3$1
      ]),
      _: 1
    }),
    _hoisted_4$1,
    renderSlot(_ctx.$slots, "default")
  ]);
}
_sfc_main$2.render = _sfc_render$2;
var __glob_2_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$2
});
const _sfc_main$1 = {};
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, " Page not found ");
}
_sfc_main$1.render = _sfc_render$1;
var __glob_2_1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$1
});
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createTextVNode("Home");
const _hoisted_2 = /* @__PURE__ */ createTextVNode("| ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode("About");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" adasdasdasdasd ");
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_router_link, { to: "/" }, {
      default: withCtx(() => [
        _hoisted_1
      ]),
      _: 1
    }),
    _hoisted_2,
    createVNode(_component_router_link, { to: "/about" }, {
      default: withCtx(() => [
        _hoisted_3
      ]),
      _: 1
    }),
    _hoisted_4,
    renderSlot(_ctx.$slots, "default")
  ]);
}
_sfc_main.render = _sfc_render;
var __glob_2_2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main
});
const _layouts = { "./layouts/default.vue": __glob_2_0, "./layouts/error.vue": __glob_2_1, "./layouts/home.vue": __glob_2_2 };
const layouts = {};
Object.keys(_layouts).forEach((path) => {
  const name = path.match(/\.\/layouts\/(.*)\.vue$/)[1].toLowerCase();
  layouts[name] = _layouts[path].default;
});
var _App = {
  render() {
    const layoutName = this.$store.state.config.layout;
    const routerView = h(RouterView, {}, {
      default({ Component }) {
        return [
          h(Suspense, {}, {
            default() {
              return [
                Component
              ];
            }
          })
        ];
      }
    });
    const CurLayout = layouts[layoutName] || layouts["default"];
    const layoutEl = h(CurLayout, {}, {
      default() {
        return [
          routerView
        ];
      }
    });
    const template = h("div", {
      domProps: {
        id: "__layout"
      },
      key: layoutName
    }, [layoutEl]);
    return template;
  }
};
const scriptRel = "modulepreload";
const seen = {};
const base = "/";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", rej);
      });
    }
  })).then(() => baseModule());
};
const pages = { "./pages/About.vue": () => true ? __vitePreload(() => import("./About.814b572e.js"), ["assets/About.814b572e.js","assets/About.5dcda792.css","assets/vendor.28417265.js"]) : null, "./pages/Home.vue": () => true ? __vitePreload(() => import("./Home.251998cd.js"), ["assets/Home.251998cd.js","assets/Home.b0141ad0.css","assets/vendor.28417265.js"]) : null };
const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase();
  return {
    path: name === "/home" ? "/" : name,
    component: pages[path]
  };
});
function createRouter() {
  return createRouter$1({
    history: createWebHistory(),
    routes
  });
}
var config = () => {
  const config2 = {
    namespaced: true,
    state: {
      layout: "default"
    },
    mutations: {
      setLayout(state, layout) {
        state.layout = layout;
      }
    }
  };
  return config2;
};
var placeholder = () => {
  const config2 = {
    namespaced: true,
    state: {
      posts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.posts = posts;
      }
    }
  };
  return config2;
};
const createStore = () => {
  const store2 = createStore$1({
    strict: true,
    modules: {
      config: config(),
      placeholder: placeholder()
    }
  });
  return store2;
};
const useStore = () => {
  return useStore$1();
};
const _components = { "./dynamic/something.vue": __glob_5_0 };
const components = {};
Object.keys(_components).forEach((path) => {
  const name = "dynamic-" + path.match(/\.\/dynamic\/(.*)\.vue$/)[1].toLowerCase();
  components[name] = _components[path].default;
});
function createApp() {
  const app2 = createSSRApp(_App);
  const router2 = createRouter();
  const store2 = createStore();
  app2.use(router2);
  app2.use(store2);
  Object.keys(components).forEach((key) => {
    app2.component(key, components[key]);
  });
  return { app: app2, router: router2, store: store2 };
}
function getMatchedComponents(route, matches = false, prop = "components") {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map((key) => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
const { app, router, store } = createApp();
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}
router.beforeResolve((to, from, next) => {
  const Components = getMatchedComponents(to, []);
  const asyncDataFuncs = Components.map((component) => {
    const asyncData = component.asyncData || null;
    if (asyncData) {
      const config2 = {
        store,
        route: to
      };
      return asyncData(config2);
    }
  });
  try {
    Promise.all(asyncDataFuncs).then(() => {
      next();
    });
  } catch (err) {
    next(err);
  }
});
router.afterEach((to) => {
  try {
    const layout = to.matched[0].components.default.layout;
    store.commit("config/setLayout", layout);
  } catch {
  }
});
router.isReady().then(() => {
  app.mount("#app");
});
export { __vitePreload as _, useStore as u };
