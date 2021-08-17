"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var serverRenderer = require("@vue/server-renderer");
var vue = require("vue");
var vueRouter = require("vue-router");
var axios = require("axios");
var runtimeCore = require("@vue/runtime-core");
var vuex = require("vuex");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var axios__default = /* @__PURE__ */ _interopDefaultLegacy(axios);
const _sfc_main$6 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>something cool</div>`);
}
_sfc_main$6.ssrRender = _sfc_ssrRender$4;
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/dynamic/something.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var __glob_5_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$6
});
var App_vue_vue_type_style_index_0_lang = "\n@font-face {\n  font-family: 'Inter';\n  font-style: italic;\n  font-weight: 400;\n  font-display: swap;\n  src: url('__VITE_ASSET__bab4e808__$_#iefix__') format('woff2'),\n    url('__VITE_ASSET__7b187d57__') format('woff');\n}\n.inter {\n  font-family: 'Inter';\n}\n#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 60px;\n}\n";
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_router_link = vue.resolveComponent("router-link");
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          vue.createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`| `);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/about" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          vue.createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` default layout `);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
_sfc_main$5.ssrRender = _sfc_ssrRender$3;
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/layouts/default.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var __glob_2_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$5
});
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}> Page not found </div>`);
}
_sfc_main$4.ssrRender = _sfc_ssrRender$2;
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/layouts/error.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var __glob_2_1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$4
});
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_router_link = vue.resolveComponent("router-link");
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          vue.createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`| `);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/about" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          vue.createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` adasdasdasdasd `);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
_sfc_main$3.ssrRender = _sfc_ssrRender$1;
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/layouts/home.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var __glob_2_2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$3
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
    const routerView = vue.h(vueRouter.RouterView, {}, {
      default({ Component }) {
        return [
          vue.h(vue.Suspense, {}, {
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
    const layoutEl = vue.h(CurLayout, {}, {
      default() {
        return [
          routerView
        ];
      }
    });
    const template = vue.h("div", {
      domProps: {
        id: "__layout"
      },
      key: layoutName
    }, [layoutEl]);
    return template;
  }
};
const pages = { "./pages/About.vue": () => Promise.resolve().then(function() {
  return About;
}), "./pages/Home.vue": () => Promise.resolve().then(function() {
  return Home;
}) };
const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase();
  return {
    path: name === "/home" ? "/" : name,
    component: pages[path]
  };
});
function createRouter() {
  return vueRouter.createRouter({
    history: vueRouter.createMemoryHistory(),
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
  const store = vuex.createStore({
    strict: true,
    modules: {
      config: config(),
      placeholder: placeholder()
    }
  });
  return store;
};
const useStore = () => {
  return vuex.useStore();
};
const _components = { "./dynamic/something.vue": __glob_5_0 };
const components = {};
Object.keys(_components).forEach((path) => {
  const name = "dynamic-" + path.match(/\.\/dynamic\/(.*)\.vue$/)[1].toLowerCase();
  components[name] = _components[path].default;
});
function createApp() {
  const app = vue.createSSRApp(_App);
  const router = createRouter();
  const store = createStore();
  app.use(router);
  app.use(store);
  Object.keys(components).forEach((key) => {
    app.component(key, components[key]);
  });
  return { app, router, store };
}
function getMatchedComponents(route, matches = false, prop = "components") {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map((key) => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
async function render(url, manifest) {
  const { app, router, store } = createApp();
  router.push(url);
  await router.isReady();
  const currentRoute = router.currentRoute.value;
  const Components = getMatchedComponents(currentRoute);
  let layout = Components.length ? Components[0].layout : "error";
  store.commit("config/setLayout", layout);
  const asyncDataFuncs = Components.map((component) => {
    const asyncData = component.asyncData || null;
    if (asyncData) {
      const config2 = {
        store
      };
      return asyncData(config2);
    }
  });
  await Promise.all(asyncDataFuncs);
  const ctx = {};
  const html = await serverRenderer.renderToString(app, ctx);
  const preloadLinks = renderPreloadLinks(ctx.modules, manifest);
  return [html, preloadLinks, JSON.stringify(store.state)];
}
function renderPreloadLinks(modules, manifest) {
  let links = "";
  const seen = new Set();
  if (!modules)
    return links;
  modules.forEach((id) => {
    const files = manifest[id];
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file);
          links += renderPreloadLink(file);
        }
      });
    }
  });
  return links;
}
function renderPreloadLink(file) {
  if (file.endsWith(".js")) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  } else if (file.endsWith(".css")) {
    return `<link rel="stylesheet" href="${file}">`;
  } else if (file.endsWith(".woff")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`;
  } else if (file.endsWith(".woff2")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`;
  } else if (file.endsWith(".gif")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/gif">`;
  } else if (file.endsWith(".jpg") || file.endsWith(".jpeg")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/jpeg">`;
  } else if (file.endsWith(".png")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/png">`;
  } else {
    return "";
  }
}
var About_vue_vue_type_style_index_0_scoped_true_lang = "\nh1[data-v-457a6a29] {\n  color: red;\n}\n";
const _sfc_main$2 = {
  data() {
    return {
      something: true
    };
  },
  layout: "home",
  async asyncData({ store }) {
    const { data } = await axios__default["default"].get("https://jsonplaceholder.typicode.com/posts");
    store.commit("placeholder/setPosts", data);
    return {
      hi: true
    };
  },
  async setup() {
    const store = useStore();
    console.log("setting up");
    const posts = runtimeCore.computed(() => store.state.placeholder.posts);
    return {
      msg: "About",
      posts
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_dynamic_something = vue.resolveComponent("dynamic-something");
  _push(`<!--[--><h1 data-v-457a6a29>${serverRenderer.ssrInterpolate($setup.msg)}</h1>`);
  _push(serverRenderer.ssrRenderComponent(_component_dynamic_something, null, null, _parent));
  _push(`<div data-v-457a6a29><!--[-->`);
  serverRenderer.ssrRenderList($setup.posts, (post) => {
    _push(`<h2 data-v-457a6a29>${serverRenderer.ssrInterpolate(post.title)}</h2>`);
  });
  _push(`<!--]--></div><!--]-->`);
}
_sfc_main$2.ssrRender = _sfc_ssrRender;
_sfc_main$2.__scopeId = "data-v-457a6a29";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/About.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var About = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$2
});
var _imports_0 = "/assets/logo.03d6d6da.png";
var foo$1 = { msg: "hi" };
var Home_vue_vue_type_style_index_0_scoped_true_lang = "\nh1[data-v-ec178246],\na[data-v-ec178246] {\n  color: green;\n}\n";
function __variableDynamicImportRuntime1__(path) {
  switch (path) {
    case "../components/ImportType.vue":
      return Promise.resolve().then(function() {
        return ImportType;
      });
    default:
      return new Promise(function(resolve, reject) {
        (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
      });
  }
}
const _sfc_main$1 = {
  __ssrInlineRender: true,
  setup(__props) {
    const ImportType2 = load("ImportType");
    const Foo2 = vue.defineAsyncComponent(() => Promise.resolve().then(function() {
      return Foo$1;
    }).then((mod) => mod.Foo));
    function load(file) {
      return vue.defineAsyncComponent(() => __variableDynamicImportRuntime1__(`../components/${file}.vue`));
    }
    const state = vue.reactive({ count: 0 });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 data-v-ec178246>Home</h1><p data-v-ec178246><img${serverRenderer.ssrRenderAttr("src", _imports_0)} alt="logo" data-v-ec178246></p><button data-v-ec178246>count is: ${serverRenderer.ssrInterpolate(vue.unref(state).count)}</button>`);
      _push(serverRenderer.ssrRenderComponent(vue.unref(Foo2), null, null, _parent));
      _push(`<p class="virtual" data-v-ec178246>msg from virtual module: ${serverRenderer.ssrInterpolate(vue.unref(foo$1).msg)}</p><p class="inter" data-v-ec178246>this will be styled with a font-face</p>`);
      _push(serverRenderer.ssrRenderComponent(vue.unref(ImportType2), null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
_sfc_main$1.__scopeId = "data-v-ec178246";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/Home.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Home = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$1
});
var _sfc_main = vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${serverRenderer.ssrRenderAttrs(_attrs)}>import type should be removed without side-effect</p>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/ImportType.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ImportType = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main
});
var foo = ".jsx {\n  color: blue;\n}\n";
function ssrRegisterHelper(comp, filename) {
  const setup = comp.setup;
  comp.setup = (props, ctx) => {
    const ssrContext = vue.useSSRContext();
    (ssrContext.modules || (ssrContext.modules = new Set())).add(filename);
    if (setup) {
      return setup(props, ctx);
    }
  };
}
const Foo = vue.defineComponent({
  name: "foo",
  setup() {
    return () => vue.createVNode("div", {
      "class": "jsx"
    }, [vue.createTextVNode("from JSX")]);
  }
});
const __moduleId = "src/components/Foo.jsx";
ssrRegisterHelper(Foo, __moduleId);
var Foo$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  Foo
});
exports.render = render;
