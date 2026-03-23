import { computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const { content } = useContent();
    const t = computed(() => content.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container container" }, _attrs))} data-v-101f2d32><h1 class="page-title" data-v-101f2d32>${ssrInterpolate(unref(t).contact.title)}</h1><p data-v-101f2d32>Email: <a${ssrRenderAttr("href", "mailto:" + unref(t).contact.email)} data-v-101f2d32>${ssrInterpolate(unref(t).contact.email)}</a></p><div class="open-to" data-v-101f2d32><h3 data-v-101f2d32>Open To:</h3><ul data-v-101f2d32><!--[-->`);
      ssrRenderList(unref(t).contact.openTo, (item) => {
        _push(`<li data-v-101f2d32>${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-101f2d32"]]);
export {
  contact as default
};
//# sourceMappingURL=contact-CpWXbLoy.js.map
