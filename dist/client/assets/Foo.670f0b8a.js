import { v as defineComponent, a as createVNode, d as createTextVNode } from "./vendor.28417265.js";
var foo = ".jsx {\n  color: blue;\n}\n";
const Foo = defineComponent({
  name: "foo",
  setup() {
    return () => createVNode("div", {
      "class": "jsx"
    }, [createTextVNode("from JSX")]);
  }
});
export { Foo };
