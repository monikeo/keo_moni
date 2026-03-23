import { computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
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
  __name: "media",
  __ssrInlineRender: true,
  setup(__props) {
    const { content } = useContent();
    const t = computed(() => content.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container container" }, _attrs))} data-v-ea9f25d0><h1 class="page-title" data-v-ea9f25d0>${ssrInterpolate(unref(t).nav.media)}</h1><div class="grid-gallery" data-v-ea9f25d0><!--[-->`);
      ssrRenderList(6, (n) => {
        _push(`<div class="gallery-item" data-v-ea9f25d0><div class="placeholder-img" data-v-ea9f25d0>Media Item ${ssrInterpolate(n)}</div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/media.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const media = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ea9f25d0"]]);
export {
  media as default
};
//# sourceMappingURL=media-C7ml2UNJ.js.map
