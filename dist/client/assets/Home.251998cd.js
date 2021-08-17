import { _ as __vitePreload } from "./index.13949d54.js";
import { p as pushScopeId, m as popScopeId, n as defineAsyncComponent, q as reactive, o as openBlock, c as createElementBlock, k as createBaseVNode, t as toDisplayString, s as unref, a as createVNode, F as Fragment } from "./vendor.28417265.js";
var _imports_0 = "/assets/logo.03d6d6da.png";
var foo = { msg: "hi" };
var Home_vue_vue_type_style_index_0_scoped_true_lang = "\nh1[data-v-ec178246],\na[data-v-ec178246] {\n  color: green;\n}\n";
function __variableDynamicImportRuntime1__(path) {
  switch (path) {
    case "../components/ImportType.vue":
      return __vitePreload(() => import("./ImportType.70332d2a.js"), true ? ["assets/ImportType.70332d2a.js","assets/vendor.28417265.js"] : void 0);
    default:
      return new Promise(function(resolve, reject) {
        (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
      });
  }
}
pushScopeId("data-v-ec178246");
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", null, "Home", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    alt: "logo"
  })
], -1);
const _hoisted_3 = { class: "virtual" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("p", { class: "inter" }, "this will be styled with a font-face", -1);
popScopeId();
const _sfc_main = {
  setup(__props) {
    const ImportType = load("ImportType");
    const Foo = defineAsyncComponent(() => __vitePreload(() => import("./Foo.670f0b8a.js"), true ? ["assets/Foo.670f0b8a.js","assets/Foo.a8752494.css","assets/vendor.28417265.js"] : void 0).then((mod) => mod.Foo));
    function load(file) {
      return defineAsyncComponent(() => __variableDynamicImportRuntime1__(`../components/${file}.vue`));
    }
    const state = reactive({ count: 0 });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1,
        _hoisted_2,
        createBaseVNode("button", {
          onClick: _cache[0] || (_cache[0] = ($event) => unref(state).count++)
        }, "count is: " + toDisplayString(unref(state).count), 1),
        createVNode(unref(Foo)),
        createBaseVNode("p", _hoisted_3, "msg from virtual module: " + toDisplayString(unref(foo).msg), 1),
        _hoisted_4,
        createVNode(unref(ImportType))
      ], 64);
    };
  }
};
_sfc_main.__scopeId = "data-v-ec178246";
export { _sfc_main as default };
