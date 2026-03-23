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
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const { content } = useContent();
    const t = computed(() => content.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container container" }, _attrs))} data-v-f8d5a1c7><h1 class="page-title animate-fade-up" data-v-f8d5a1c7>${ssrInterpolate(unref(t).nav.about)}</h1><div class="content-wrapper animate-fade-up animate-delay-1" data-v-f8d5a1c7><p class="lead" data-v-f8d5a1c7>${ssrInterpolate(unref(t).about.summary)}</p><div class="expertise-list" data-v-f8d5a1c7><h2 data-v-f8d5a1c7>Expertise</h2><ul data-v-f8d5a1c7><!--[-->`);
      ssrRenderList(unref(t).expertise, (item, i) => {
        _push(`<li data-v-f8d5a1c7>${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="vision-list" data-v-f8d5a1c7><h2 data-v-f8d5a1c7>${ssrInterpolate(unref(t).vision.title)}</h2><ul data-v-f8d5a1c7><!--[-->`);
      ssrRenderList(unref(t).vision.items, (item, i) => {
        _push(`<li data-v-f8d5a1c7>${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f8d5a1c7"]]);
export {
  about as default
};
//# sourceMappingURL=about-Cda_2M30.js.map
