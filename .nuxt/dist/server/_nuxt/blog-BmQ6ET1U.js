import { computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, u as useContent } from "../server.mjs";
import "C:/Users/darkm/OneDrive/Desktop/GravZero/Tech Project/Member Portflio Side/Keo Moni/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/darkm/OneDrive/Desktop/GravZero/Tech Project/Member Portflio Side/Keo Moni/node_modules/hookable/dist/index.mjs";
import "C:/Users/darkm/OneDrive/Desktop/GravZero/Tech Project/Member Portflio Side/Keo Moni/node_modules/unctx/dist/index.mjs";
import "C:/Users/darkm/OneDrive/Desktop/GravZero/Tech Project/Member Portflio Side/Keo Moni/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/darkm/OneDrive/Desktop/GravZero/Tech Project/Member Portflio Side/Keo Moni/node_modules/radix3/dist/index.mjs";
import "C:/Users/darkm/OneDrive/Desktop/GravZero/Tech Project/Member Portflio Side/Keo Moni/node_modules/defu/dist/defu.mjs";
import "C:/Users/darkm/OneDrive/Desktop/GravZero/Tech Project/Member Portflio Side/Keo Moni/node_modules/ufo/dist/index.mjs";
const _sfc_main = {
  __name: "blog",
  __ssrInlineRender: true,
  setup(__props) {
    const { content } = useContent();
    const t = computed(() => content.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container container" }, _attrs))} data-v-45623292><h1 class="page-title" data-v-45623292>${ssrInterpolate(unref(t).nav.blog)}</h1><p data-v-45623292>Coming Soon...</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-45623292"]]);
export {
  blog as default
};
//# sourceMappingURL=blog-BmQ6ET1U.js.map
