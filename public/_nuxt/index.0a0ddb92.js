import {
  d as h,
  x as _,
  j as k,
  o as d,
  b as c,
  f as u,
  a as r,
  N as f,
  O as x,
  L as y,
  u as j,
  J as $,
  K as I,
  g as D,
} from "./entry.bc63e51a.js";
import { q as g } from "./query.02b33be6.js";
import { c as N, a as v } from "./urlTools.cc793b8f.js";
import { _ as w } from "./PageSearch.47a8baba.js";
import { _ as R } from "./PageTitle.a79fb585.js";
import { _ as A } from "./InfoCard.f70abe04.js";
import "./utils.0216015b.js";
import "./PageSearch.vue.293e2aff.js";
import "./SearchInput.ae3910f0.js";
import "./SearchInput.vue.750aef33.js";
import "./AppLink.ef6e30e4.js";
import "./AppLink.vue.55029462.js";
import "./nuxt-link.b84c39ea.js";
import "./PageTitle.vue.14c34ae6.js";
import "./InfoCard.vue.249e50fd.js";
import "./AppImage.1a4d91cf.js";
import "./AppImage.vue.fa386efd.js";
import "./client-only.9e138b79.js";
const V = h({
    data() {
      return {
        title: "Vego",
        preamble: null,
        metadescription: null,
        articles: [],
      };
    },
    setup() {
      var i, s, l, p, n, a, o, t;
      const { data: e } = _(
          async () => g("portal-page/vego").findOne(),
          "$1jp563mNAA"
        ),
        { data: m } = _(
          async () => g("vego/tips").only(["title", "_path", "image"]).find(),
          "$YRJ3EwY2Db"
        );
      return (
        k({
          title:
            (i = e.value) != null && i.title
              ? `${
                  (s = e.value) == null ? void 0 : s.title
                } | Rädda Djuren-klubben`
              : "Rädda Djuren-klubben",
          link: [{ hid: "canonical", rel: "canonical", href: N("/vego/tips") }],
          meta: [
            {
              hid: "og:url",
              property: "og:url",
              content: "https://www.raddadjuren.se/vego/tips",
            },
            {
              hid: "og:title",
              property: "og:title",
              content:
                (l = e.value) != null && l.title
                  ? `${
                      (p = e.value) == null ? void 0 : p.title
                    } | Rädda Djuren-klubben`
                  : "Rädda Djuren-klubben",
            },
            {
              hid: "description",
              property: "description",
              content:
                ((n = e.value) == null ? void 0 : n.metadescription) ||
                ((a = e.value) == null ? void 0 : a.preamble) ||
                "",
            },
            {
              hid: "og:description",
              property: "og:description",
              content:
                ((o = e.value) == null ? void 0 : o.metadescription) ||
                ((t = e.value) == null ? void 0 : t.preamble) ||
                "",
            },
          ],
        }),
        { page: e, articles: m }
      );
    },
    methods: { stripIndex: v },
  }),
  b = (e) => ($("data-v-1b76e08b"), (e = e()), I(), e),
  B = { key: 0, class: "page-vego" },
  C = b(() =>
    r(
      "h2",
      { class: "text-center pb-4 text-2xl mt-6" },
      "Alla vegotips & artiklar",
      -1
    )
  ),
  S = b(() =>
    r(
      "p",
      null,
      "Kanhända att du känner ett barn som vill testa mer vego och du önskar tips, recept & råd när det kommer till barn och vegokost. Här har vi samlat en bunt artiklar för dig att läsa, så att det ska bli lätt att välja vego för både vuxna och barn, unga som äldre djurvänner!",
      -1
    )
  ),
  q = { class: "text-center" };
function E(e, m, i, s, l, p) {
  const n = w,
    a = R,
    o = A;
  return e.page
    ? (d(),
      c("div", B, [
        u(n, { class: "search", links: e.page.links }, null, 8, ["links"]),
        u(a, { class: "title", title: e.page.title }, null, 8, ["title"]),
        C,
        S,
        r("section", q, [
          r("ul", null, [
            (d(!0),
            c(
              f,
              null,
              x(
                e.articles,
                (t) => (
                  d(),
                  c("li", { key: t._path }, [
                    u(
                      o,
                      {
                        title: t.title,
                        link: ("stripIndex" in e ? e.stripIndex : j(v))(
                          t._path
                        ),
                        image: t.image,
                      },
                      null,
                      8,
                      ["title", "link", "image"]
                    ),
                  ])
                )
              ),
              128
            )),
          ]),
        ]),
      ]))
    : y("", !0);
}
const te = D(V, [
  ["render", E],
  ["__scopeId", "data-v-1b76e08b"],
]);
export { te as default };