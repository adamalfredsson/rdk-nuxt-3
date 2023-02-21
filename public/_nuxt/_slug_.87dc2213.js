import {
  d as A,
  i as j,
  x as f,
  j as w,
  o as c,
  c as I,
  a0 as N,
  w as i,
  L as C,
  a,
  b,
  O as D,
  f as y,
  e as k,
  M as d,
  N as S,
  J as R,
  K as x,
  g as B,
} from "./entry.bc63e51a.js";
import { q as $ } from "./query.02b33be6.js";
import { c as V } from "./urlTools.cc793b8f.js";
import { _ as L } from "./nuxt-link.b84c39ea.js";
import { _ as q } from "./PageArticle.aa3be229.js";
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
const E = A({
    setup() {
      var n, s, r, l, o, _, g, h, v;
      const { params: t, fullPath: p } = j(),
        { data: e } = f(
          p,
          async () => $(`lar-dig-mer/${t.slug}`).findOne(),
          "$NEnG5UWk8I"
        ),
        { data: m } = f(async () => $("lar-dig-mer").find(), "$XcugjcSJaQ");
      return (
        w({
          title:
            (n = e.value) != null && n.title
              ? `${e.value.title} | Rädda Djuren-klubben`
              : "Rädda Djuren-klubben",
          link: [
            {
              hid: "canonical",
              rel: "canonical",
              href: V(
                `/lar-dig-mer/${(s = e.value) == null ? void 0 : s.slug}`
              ),
            },
          ],
          meta: [
            {
              hid: "og:url",
              property: "og:url",
              content: `https://www.raddadjuren.se/lar-dig-mer/${
                (r = e.value) == null ? void 0 : r.slug
              }`,
            },
            {
              hid: "og:title",
              property: "og:title",
              content:
                (l = e.value) != null && l.title
                  ? `${e.value.title} | Rädda Djuren-klubben`
                  : "Rädda Djuren-klubben",
            },
            {
              hid: "description",
              property: "description",
              content:
                (o = e.value) != null && o.metadescription
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
                  : (h = e.value) != null && h.preamble
                  ? e.value.preamble
                  : "",
            },
            {
              hid: "og:image",
              property: "og:image",
              content:
                (v = e.value) != null && v.image
                  ? `https://res.cloudinary.com/klandestino-ab/image/upload/c_lfill,dpr_auto,g_faces/c_scale,dpr_2.0,w_1200${e.value.image}`
                  : "",
            },
          ],
        }),
        { article: e, moreArticles: m }
      );
    },
  }),
  u = (t) => (R("data-v-f1ad3d4c"), (t = t()), x(), t),
  F = u(() => a("div", { class: "byline" }, null, -1)),
  J = { class: "preamble" },
  O = { class: "sidebar-section more" },
  T = { class: "block" },
  U = u(() => a("h2", null, "Fler sidor", -1)),
  G = { class: "block__content" },
  H = { class: "text-center text-sm" },
  K = u(() => a("strong", null, "Lär dig mer", -1));
function M(t, p, e, m, n, s) {
  const r = L,
    l = q;
  return t.article
    ? (c(),
      I(
        l,
        {
          key: 0,
          class: "page-front",
          document: t.article,
          coverCloudinaryId: t.article.image,
        },
        N(
          {
            content: i(() => [
              a("h1", null, d(t.article.title), 1),
              F,
              a("p", J, d(t.article.preamble), 1),
            ]),
            _: 2,
          },
          [
            t.moreArticles &&
            Array.isArray(t.moreArticles) &&
            t.moreArticles.length > 0
              ? {
                  name: "sidebar",
                  fn: i(() => [
                    a("section", O, [
                      a("div", T, [
                        U,
                        a("div", G, [
                          a("ul", null, [
                            (c(!0),
                            b(
                              S,
                              null,
                              D(
                                t.moreArticles,
                                (o) => (
                                  c(),
                                  b("li", { key: o.title }, [
                                    y(
                                      r,
                                      { to: o._path },
                                      {
                                        default: i(() => [k(d(o.title), 1)]),
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
                    a("div", H, [
                      y(
                        r,
                        { to: "/lar-dig-mer" },
                        { default: i(() => [k("Tillbaka till "), K]), _: 1 }
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
    : C("", !0);
}
const ce = B(E, [
  ["render", M],
  ["__scopeId", "data-v-f1ad3d4c"],
]);
export { ce as default };