import {
  d as x,
  i as A,
  x as b,
  j as w,
  o as c,
  c as j,
  a0 as C,
  w as n,
  L as D,
  a as o,
  b as y,
  O as I,
  f,
  e as k,
  M as d,
  N,
  J as R,
  K as S,
  g as V,
} from "./entry.bc63e51a.js";
import { q as $ } from "./query.02b33be6.js";
import { c as B } from "./urlTools.cc793b8f.js";
import { _ as F } from "./nuxt-link.b84c39ea.js";
import { _ as L } from "./PageArticle.aa3be229.js";
import "./utils.0216015b.js";
import "./PageArticle.vue.e748534d.js";
import "./AppImage.1a4d91cf.js";
import "./AppImage.vue.fa386efd.js";
import "./client-only.9e138b79.js";
import "./SearchInput.ae3910f0.js";
import "./SearchInput.vue.750aef33.js";
import "./ContentRenderer.32ebd34d.js";
import "./ContentRendererMarkdown.291b27e1.js";
import "./index.a6ef77ff.js";
import "./index.23a876b0.js";
const q = x({
    setup() {
      var s, i, l, r, a, _, g, v, h;
      const { params: t, fullPath: u } = A(),
        { data: e } = b(
          u,
          async () => $(`vuxen-eller-pedagog/${t.slug}`).findOne(),
          "$XLSbdmG2Ry"
        ),
        { data: m } = b(
          async () => $("vuxen-eller-pedagog").only(["title", "_path"]).find(),
          "$cp973EggmF"
        );
      return (
        w({
          title:
            (s = e.value) != null && s.title
              ? `${e.value.title} | Rädda Djuren-klubben`
              : "Rädda Djuren-klubben",
          link: [
            {
              hid: "canonical",
              rel: "canonical",
              href: B(
                `/vuxen-eller-pedagog/${
                  (i = e.value) == null ? void 0 : i.slug
                }`
              ),
            },
          ],
          meta: [
            {
              hid: "og:url",
              property: "og:url",
              content: `https://www.raddadjuren.se/vuxen-eller-pedagog/${
                (l = e.value) == null ? void 0 : l.slug
              }`,
            },
            {
              hid: "og:title",
              property: "og:title",
              content:
                (r = e.value) != null && r.title
                  ? `${e.value.title} | Rädda Djuren-klubben`
                  : "Rädda Djuren-klubben",
            },
            {
              hid: "description",
              property: "description",
              content:
                (a = e.value) != null && a.metadescription
                  ? e.value.metadescription
                  : (_ = e.value) != null && _.preamble
                  ? e.value.preamble
                  : "",
            },
            {
              hid: "og:description",
              property: "og:description",
              content:
                (g = e.value) != null && g.metadescription
                  ? e.value.metadescription
                  : (v = e.value) != null && v.preamble
                  ? e.value.preamble
                  : "",
            },
            (h = e.value) != null && h.image
              ? {
                  hid: "og:image",
                  property: "og:image",
                  content: `https://res.cloudinary.com/klandestino-ab/image/upload/c_lfill,dpr_auto,g_faces/c_scale,dpr_2.0,w_1200${e.value.image}`,
                }
              : {},
          ],
        }),
        { article: e, moreArticles: m }
      );
    },
  }),
  p = (t) => (R("data-v-15de2b43"), (t = t()), S(), t),
  E = p(() => o("div", { class: "byline" }, null, -1)),
  O = { class: "preamble" },
  T = { class: "sidebar-section more" },
  G = { class: "block" },
  H = p(() => o("h2", null, "Fler sidor", -1)),
  J = { class: "block__content" },
  K = { class: "text-center text-sm" },
  M = p(() => o("strong", null, "Vuxen eller pegagog", -1));
function P(t, u, e, m, s, i) {
  const l = F,
    r = L;
  return t.article
    ? (c(),
      j(
        r,
        {
          key: 0,
          class: "page-front",
          document: t.article,
          coverCloudinaryId: t.article.image,
        },
        C(
          {
            content: n(() => [
              o("h1", null, d(t.article.title), 1),
              E,
              o("p", O, d(t.article.preamble), 1),
            ]),
            _: 2,
          },
          [
            t.moreArticles &&
            Array.isArray(t.moreArticles) &&
            t.moreArticles.length > 0
              ? {
                  name: "sidebar",
                  fn: n(() => [
                    o("section", T, [
                      o("div", G, [
                        H,
                        o("div", J, [
                          o("ul", null, [
                            (c(!0),
                            y(
                              N,
                              null,
                              I(
                                t.moreArticles,
                                (a) => (
                                  c(),
                                  y("li", { key: a.title }, [
                                    f(
                                      l,
                                      { to: a._path },
                                      {
                                        default: n(() => [k(d(a.title), 1)]),
                                        _: 2,
                                      },
                                      1032,
                                      ["to"]
                                    ),
                                  ])
                                )
                              ),
                              128
                            )),
                          ]),
                        ]),
                      ]),
                    ]),
                    o("div", K, [
                      f(
                        l,
                        { to: "/vuxen-eller-pedagog" },
                        { default: n(() => [k("Tillbaka till "), M]), _: 1 }
                      ),
                    ]),
                  ]),
                  key: "0",
                }
              : void 0,
          ]
        ),
        1032,
        ["document", "coverCloudinaryId"]
      ))
    : D("", !0);
}
const ce = V(q, [
  ["render", P],
  ["__scopeId", "data-v-15de2b43"],
]);
export { ce as default };