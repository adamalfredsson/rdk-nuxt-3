(window.webpackJsonp = window.webpackJsonp || []).push([
  [27, 13],
  {
    182: function (n, t, e) {
      "use strict";
      function r(n) {
        var path = "/" === n.charAt(0) ? n : "/".concat(n);
        return "https://www.raddadjuren.se".concat(path);
      }
      function o(n) {
        return c(n.substr(7));
      }
      function c(n) {
        return n.endsWith("index") ? n.substr(0, n.length - 6) : n;
      }
      e.d(t, "a", function () {
        return r;
      }),
        e.d(t, "c", function () {
          return o;
        }),
        e.d(t, "b", function () {
          return c;
        });
    },
    183: function (n, t, e) {
      var content = e(187);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("25255980", content, !0, { sourceMap: !1 });
    },
    186: function (n, t, e) {
      "use strict";
      e(183);
    },
    187: function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n@media (min-width: 768px){\n.article[data-v-6c9a0298]{\n    position:relative\n}\n}\n.article .cover[data-v-6c9a0298]{\n    width:100%;\n    overflow:hidden;\n    --tw-bg-opacity:1;\n    background-color:rgba(55, 65, 81, var(--tw-bg-opacity));\n    height:60vw;\n    max-height:60vh\n}\n.article .wrapper[data-v-6c9a0298]{\n    margin-left:auto;\n    margin-right:auto;\n    display:flex;\n    max-width:1200px;\n    flex-wrap:wrap;\n}\n.article .wrapper .search[data-v-6c9a0298]{\n      position:absolute;\n      top:0px;\n      left:0px;\n      display:none;\n      width:100%\n}\n@media (min-width: 768px){\n.article .wrapper .search[data-v-6c9a0298]{\n        display:block\n}\n}\n.article .wrapper main.content[data-v-6c9a0298]{\n      --tw-bg-opacity:1;\n      background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n      padding-left:1rem;\n      padding-right:1rem;\n      padding-top:2rem;\n      padding-bottom:2rem;\n      flex:5 1 400px;\n}\n@media (min-width: 768px){\n.article .wrapper main.content[data-v-6c9a0298]{\n        position:relative;\n\n        margin-top:-6rem;\n\n        padding-left:2.5rem;\n\n        padding-right:2.5rem\n}\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content{\n      font-size:1.125rem;\n      line-height:1.75rem\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content>*{\n      margin-top:2rem\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content h1, .article .wrapper main.content[data-v-6c9a0298] .nuxt-content h2, .article .wrapper main.content[data-v-6c9a0298] .nuxt-content h3, .article .wrapper main.content[data-v-6c9a0298] .nuxt-content h4, .article .wrapper main.content[data-v-6c9a0298] .nuxt-content h5{\n        font-weight:700\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content h1+*, .article .wrapper main.content[data-v-6c9a0298] .nuxt-content h2+*, .article .wrapper main.content[data-v-6c9a0298] .nuxt-content h3+*, .article .wrapper main.content[data-v-6c9a0298] .nuxt-content h4+*, .article .wrapper main.content[data-v-6c9a0298] .nuxt-content h5+*{\n        margin-top:1rem\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content h1{\n        font-size:1.875rem;\n        line-height:2.25rem\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content h2{\n        font-size:1.5rem;\n        line-height:2rem\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content h3{\n        font-size:1.25rem;\n        line-height:1.75rem\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content h4, .article .wrapper main.content[data-v-6c9a0298] .nuxt-content h5{\n        font-size:1.125rem;\n        line-height:1.75rem\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content ul{\n        list-style-type:disc;\n        padding-left:2rem;\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content ul li{\n          margin-top:1rem\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content a{\n        text-decoration:underline;\n        color:#70cdce\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content a:visited{\n        color:#7a54c3\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content img+p em:only-child{\n        margin-top:-1rem;\n        display:block;\n        width:100%;\n        text-align:right\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content p>img{\n        padding-bottom:1.25rem\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content blockquote{\n        margin-left:auto;\n        margin-right:auto;\n        max-width:28rem;\n        padding-left:2rem;\n        padding-right:2rem;\n        padding-top:1.5rem;\n        padding-bottom:1.5rem;\n        border-radius:0 30px 30px 30px;\n        background-color:#5ec19f;\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content blockquote p{\n          margin-top:0px;\n          --tw-text-opacity:1;\n          color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.article .wrapper aside.sidebar[data-v-6c9a0298]{\n      display:flex;\n      min-width:0px;\n      flex-direction:column;\n      padding-left:1rem;\n      padding-right:1rem;\n      padding-top:2rem;\n      padding-bottom:2rem;\n      flex:2 1 300px;\n}\n@media (min-width: 768px){\n.article .wrapper aside.sidebar[data-v-6c9a0298]{\n        position:relative;\n\n        padding-left:2.5rem;\n\n        padding-right:2.5rem\n}\n}\n.article .wrapper:not(.with-cover) main.content[data-v-6c9a0298]{\n      margin-top:0px\n}\n@media (min-width: 768px){\n.article .wrapper:not(.with-cover) aside.sidebar[data-v-6c9a0298]{\n        margin-top:6rem\n}\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    189: function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(0).a.extend({
          props: {
            coverCloudinaryId: { type: String, default: "" },
            document: { type: Object, default: null },
          },
          computed: {
            pubId() {
              return this.coverCloudinaryId.replace(/^\/+/, "");
            },
          },
        }),
        o = (e(186), e(2)),
        component = Object(o.a)(
          r,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t(
              "div",
              { staticClass: "article" },
              [
                n.coverCloudinaryId
                  ? t("client-only", [
                      t(
                        "div",
                        { staticClass: "cover" },
                        [
                          t("app-image", {
                            staticClass: "w-full h-full object-cover",
                            attrs: { publicId: n.pubId, responsive: "width" },
                          }),
                        ],
                        1
                      ),
                    ])
                  : t("div", { staticClass: "pb-40" }),
                t(
                  "div",
                  {
                    staticClass: "wrapper",
                    class: { "with-cover": n.coverCloudinaryId },
                  },
                  [
                    t("search-input", { staticClass: "search" }),
                    t(
                      "main",
                      { staticClass: "content max-w-4xl" },
                      [
                        n._t("content"),
                        t("nuxt-content", { attrs: { document: n.document } }),
                      ],
                      2
                    ),
                    n.$slots.sidebar
                      ? t(
                          "aside",
                          { staticClass: "sidebar" },
                          [n._t("sidebar")],
                          2
                        )
                      : n._e(),
                  ],
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "6c9a0298",
          null
        );
      t.default = component.exports;
      installComponents(component, {
        AppImage: e(79).default,
        SearchInput: e(32).default,
      });
    },
    283: function (n, t, e) {
      var content = e(353);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("c831e0e0", content, !0, { sourceMap: !1 });
    },
    352: function (n, t, e) {
      "use strict";
      e(283);
    },
    353: function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n.page-front[data-v-b263107a]{\n  margin-bottom:5rem;\n}\n.page-front h1[data-v-b263107a]{\n    font-size:2.25rem;\n    line-height:2.5rem;\n    font-weight:800;\n    --tw-text-opacity:1;\n    color:rgba(0, 0, 0, var(--tw-text-opacity))\n}\n.page-front .byline[data-v-b263107a]{\n    margin-top:2rem;\n    border-bottom-width:2px;\n    font-size:0.875rem;\n    line-height:1.25rem;\n    font-weight:700\n}\n.page-front .preamble[data-v-b263107a]{\n    margin-top:2rem;\n    font-size:1.25rem;\n    line-height:1.75rem;\n    font-weight:700;\n    line-height:2rem\n}\n.page-front[data-v-b263107a] blockquote{\n  background-color:#fda87f\n}\n.page-front section.sidebar-section[data-v-b263107a]{\n    margin:0px;\n    margin-bottom:2rem;\n}\n.page-front section.sidebar-section h2[data-v-b263107a]{\n      padding-top:1rem;\n      padding-bottom:1rem;\n      font-size:1.5rem;\n      line-height:2rem;\n      font-weight:700\n}\n.page-front section.sidebar-section .block[data-v-b263107a]{\n      overflow:hidden;\n      border-radius:0.375rem;\n}\n.page-front section.sidebar-section .block h2[data-v-b263107a]{\n        --tw-bg-opacity:1;\n        background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n        text-align:center\n}\n.page-front section.sidebar-section .block__content[data-v-b263107a]{\n        padding-left:1rem;\n        padding-right:1rem;\n        padding-top:1rem;\n        padding-bottom:1rem\n}\n.page-front section.sidebar-section.more .block[data-v-b263107a]{\n      background-color:#9b51e0;\n}\n.page-front section.sidebar-section.more .block h2[data-v-b263107a]{\n        color:#9b51e0\n}\n.page-front section.sidebar-section.more .block__content ul[data-v-b263107a]{\n          margin-bottom:1rem;\n}\n.page-front section.sidebar-section.more .block__content ul li[data-v-b263107a]{\n            margin-top:1rem;\n            text-align:center;\n}\n.page-front section.sidebar-section.more .block__content ul li a[data-v-b263107a]{\n              --tw-text-opacity:1;\n              color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.page-front section.sidebar-section.more .block__content ul li a[data-v-b263107a]:hover{\n              opacity:.7\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    408: function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(0),
        o = e(182);
      function c(n, t, e, r, o, c, l) {
        try {
          var d = n[c](l),
            m = d.value;
        } catch (n) {
          return void e(n);
        }
        d.done ? t(m) : Promise.resolve(m).then(r, o);
      }
      var l = r.a.extend({
          asyncData(n) {
            return ((t = function* () {
              var { $content: t, params: e, payload: r } = n;
              return {
                article:
                  r ||
                  (yield t("hjalp-djuren/".concat(e.slug)).fetch().catch()),
                moreArticles: yield t("hjalp-djuren")
                  .only(["title", "path"])
                  .fetch(),
              };
            }),
            function () {
              var n = this,
                e = arguments;
              return new Promise(function (r, o) {
                var l = t.apply(n, e);
                function d(n) {
                  c(l, r, o, d, m, "next", n);
                }
                function m(n) {
                  c(l, r, o, d, m, "throw", n);
                }
                d(void 0);
              });
            })();
            var t;
          },
          data: () => ({ article: null, moreArticles: [] }),
          head() {
            var n, t, e, r, c, l, d;
            return {
              title: (
                null === (n = this.article) || void 0 === n ? void 0 : n.title
              )
                ? "".concat(this.article.title, " | Rädda Djuren-klubben")
                : "Rädda Djuren-klubben",
              link: [
                {
                  hid: "canonical",
                  rel: "canonical",
                  href: Object(o.a)(
                    "".concat(
                      null === (t = this.article) || void 0 === t
                        ? void 0
                        : t.path
                    )
                  ),
                },
              ],
              meta: [
                {
                  hid: "og:title",
                  property: "og:title",
                  content: (
                    null === (e = this.article) || void 0 === e
                      ? void 0
                      : e.title
                  )
                    ? "".concat(this.article.title, " | Rädda Djuren-klubben")
                    : "Rädda Djuren-klubben",
                },
                {
                  hid: "description",
                  property: "description",
                  content:
                    null === (r = this.article) || void 0 === r
                      ? void 0
                      : r.preamble,
                },
                {
                  hid: "og:description",
                  property: "og:description",
                  content: (
                    null === (c = this.article) || void 0 === c
                      ? void 0
                      : c.preamble
                  )
                    ? this.article.preamble
                    : "",
                },
                {
                  hid: "og:image",
                  property: "og:image",
                  content: (
                    null === (l = this.article) || void 0 === l
                      ? void 0
                      : l.image
                  )
                    ? "https://res.cloudinary.com/klandestino-ab/image/upload/c_lfill,dpr_auto,g_faces/c_scale,dpr_2.0,w_1200".concat(
                        this.article.image
                      )
                    : null,
                },
                {
                  hid: "og:url",
                  property: "og:url",
                  content:
                    "https://www.raddadjuren.se/" +
                    "".concat(
                      null === (d = this.article) || void 0 === d
                        ? void 0
                        : d.path
                    ),
                },
              ],
            };
          },
        }),
        d = l,
        m = (e(352), e(2)),
        component = Object(m.a)(
          d,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t("page-article", {
              staticClass: "page-front",
              attrs: {
                document: n.article,
                coverCloudinaryId: n.article.image,
              },
              scopedSlots: n._u(
                [
                  {
                    key: "content",
                    fn: function () {
                      return [
                        t("h1", [n._v(n._s(n.article.title))]),
                        t("div", { staticClass: "byline" }),
                        t("p", { staticClass: "preamble" }, [
                          n._v(n._s(n.article.preamble)),
                        ]),
                      ];
                    },
                    proxy: !0,
                  },
                  n.moreArticles.length > 0
                    ? {
                        key: "sidebar",
                        fn: function () {
                          return [
                            t(
                              "section",
                              { staticClass: "sidebar-section more" },
                              [
                                t("div", { staticClass: "block" }, [
                                  t("h2", [n._v("Fler sidor")]),
                                  t("div", { staticClass: "block__content" }, [
                                    t(
                                      "ul",
                                      n._l(n.moreArticles, function (e) {
                                        return t(
                                          "li",
                                          { key: e.title },
                                          [
                                            t(
                                              "nuxt-link",
                                              { attrs: { to: e.path } },
                                              [n._v(n._s(e.title))]
                                            ),
                                          ],
                                          1
                                        );
                                      }),
                                      0
                                    ),
                                  ]),
                                ]),
                              ]
                            ),
                            t(
                              "div",
                              { staticClass: "text-center text-sm" },
                              [
                                t(
                                  "nuxt-link",
                                  { attrs: { to: "/hjalp-djuren" } },
                                  [
                                    n._v("Tillbaka till "),
                                    t("strong", [
                                      n._v("så kan du hjälpa djuren"),
                                    ]),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ];
                        },
                        proxy: !0,
                      }
                    : null,
                ],
                null,
                !0
              ),
            });
          },
          [],
          !1,
          null,
          "b263107a",
          null
        );
      t.default = component.exports;
      installComponents(component, { PageArticle: e(189).default });
    },
  },
]);
