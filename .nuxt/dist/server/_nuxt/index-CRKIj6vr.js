import { _ as _export_sfc, u as useContent, a as __nuxt_component_0 } from "../server.mjs";
import { computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { content } = useContent();
    const t = computed(() => content.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "modern-authentic-home" }, _attrs))} data-v-9162e6e5><section class="min-h-screen flex-center relative overflow-hidden" data-v-9162e6e5><div class="glow-blob" data-v-9162e6e5></div><div class="container grid-split" data-v-9162e6e5><div class="hero-content" data-v-9162e6e5><span class="pill-label reveal-on-scroll" data-v-9162e6e5>Taekwondo Athlete &amp; Creator</span><h1 class="hero-title reveal-on-scroll delay-100" data-v-9162e6e5> Authentic <br data-v-9162e6e5><span class="text-gradient" data-v-9162e6e5>Movement.</span></h1><p class="hero-desc reveal-on-scroll delay-200" data-v-9162e6e5>${ssrInterpolate(unref(t).hero.subtitle)}</p><div class="btn-group reveal-on-scroll delay-300" data-v-9162e6e5>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/media",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View Portfolio`);
          } else {
            return [
              createTextVNode("View Portfolio")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "btn btn-outline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`My Story`);
          } else {
            return [
              createTextVNode("My Story")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hero-visual reveal-on-scroll delay-200" data-v-9162e6e5><div class="image-card glow-hover" data-v-9162e6e5><div class="img-bg" data-v-9162e6e5></div></div><div class="floating-stat glass" data-v-9162e6e5><span class="stat-num" data-v-9162e6e5>10+</span><span class="stat-label" data-v-9162e6e5>Years Exp.</span></div></div></div></section><section class="section" data-v-9162e6e5><div class="container" data-v-9162e6e5><div class="section-head reveal-on-scroll" data-v-9162e6e5><h2 data-v-9162e6e5>GravZero Ecosystem</h2><p data-v-9162e6e5>${ssrInterpolate(unref(t).gravzero.p1)}</p></div><div class="ecosystem-grid" data-v-9162e6e5><div class="eco-card glass reveal-on-scroll" data-v-9162e6e5><div class="card-icon" data-v-9162e6e5>🥋</div><h3 data-v-9162e6e5>${ssrInterpolate(unref(t).gravzero.team.title)}</h3><p data-v-9162e6e5>${ssrInterpolate(unref(t).gravzero.team.desc)}</p><div class="card-arrow" data-v-9162e6e5>→</div></div><div class="eco-card glass reveal-on-scroll delay-100" data-v-9162e6e5><div class="card-icon" data-v-9162e6e5>📸</div><h3 data-v-9162e6e5>${ssrInterpolate(unref(t).gravzero.studio.title)}</h3><p data-v-9162e6e5>${ssrInterpolate(unref(t).gravzero.studio.desc)}</p><div class="card-arrow" data-v-9162e6e5>→</div></div></div></div></section><section class="section bg-soft" data-v-9162e6e5><div class="container" data-v-9162e6e5><h2 class="section-title reveal-on-scroll" data-v-9162e6e5>${ssrInterpolate(unref(t).philosophy.title)}</h2><div class="philosophy-list" data-v-9162e6e5><!--[-->`);
      ssrRenderList(unref(t).philosophy.items, (item, i) => {
        _push(`<div class="${ssrRenderClass([`delay-${i * 100}`, "phi-item reveal-on-scroll"])}" data-v-9162e6e5><span class="phi-num" data-v-9162e6e5>0${ssrInterpolate(i + 1)}</span><div class="phi-content" data-v-9162e6e5><h4 data-v-9162e6e5>${ssrInterpolate(item.title)}</h4><p data-v-9162e6e5>${ssrInterpolate(item.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="section" data-v-9162e6e5><div class="container" data-v-9162e6e5><div class="services-banner reveal-on-scroll" data-v-9162e6e5><!--[-->`);
      ssrRenderList(unref(t).services.items, (s) => {
        _push(`<span class="service-pill" data-v-9162e6e5>${ssrInterpolate(s)}</span>`);
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9162e6e5"]]);
export {
  index as default
};
//# sourceMappingURL=index-CRKIj6vr.js.map
