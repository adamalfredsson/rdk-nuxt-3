(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    222: function (n, t, e) {
      var content = e(254);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("725ff9b0", content, !0, { sourceMap: !1 });
    },
    253: function (n, t, e) {
      "use strict";
      e(222);
    },
    254: function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n@media (min-width: 768px){\n.article[data-v-9067ef4a]{\n    position:relative\n}\n}\n.article .wrapper[data-v-9067ef4a]{\n    margin-left:auto;\n    margin-right:auto;\n    display:flex;\n    max-width:1200px;\n    flex-wrap:wrap;\n}\n.article .wrapper .search[data-v-9067ef4a]{\n      position:absolute;\n      top:0px;\n      left:0px;\n      display:none;\n      width:100%\n}\n@media (min-width: 768px){\n.article .wrapper .search[data-v-9067ef4a]{\n        display:block\n}\n}\n.article .wrapper main.content[data-v-9067ef4a]{\n      --tw-bg-opacity:1;\n      background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n      padding-left:1rem;\n      padding-right:1rem;\n      padding-top:2rem;\n      padding-bottom:2rem;\n      flex:5 1 400px;\n}\n@media (min-width: 768px){\n.article .wrapper main.content[data-v-9067ef4a]{\n        position:relative;\n\n        margin-top:-6rem;\n\n        padding-left:2.5rem;\n\n        padding-right:2.5rem\n}\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content{\n      font-size:1.125rem;\n      line-height:1.75rem\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content>*{\n      margin-top:2rem\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content h1, .article .wrapper main.content[data-v-9067ef4a] .nuxt-content h2, .article .wrapper main.content[data-v-9067ef4a] .nuxt-content h3, .article .wrapper main.content[data-v-9067ef4a] .nuxt-content h4, .article .wrapper main.content[data-v-9067ef4a] .nuxt-content h5{\n        font-weight:700\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content h1+*, .article .wrapper main.content[data-v-9067ef4a] .nuxt-content h2+*, .article .wrapper main.content[data-v-9067ef4a] .nuxt-content h3+*, .article .wrapper main.content[data-v-9067ef4a] .nuxt-content h4+*, .article .wrapper main.content[data-v-9067ef4a] .nuxt-content h5+*{\n        margin-top:1rem\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content h1{\n        font-size:1.875rem;\n        line-height:2.25rem\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content h2{\n        font-size:1.5rem;\n        line-height:2rem\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content h3{\n        font-size:1.25rem;\n        line-height:1.75rem\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content h4, .article .wrapper main.content[data-v-9067ef4a] .nuxt-content h5{\n        font-size:1.125rem;\n        line-height:1.75rem\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content ul{\n        list-style-type:disc;\n        padding-left:2rem;\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content ul li{\n          margin-top:1rem\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content a{\n        text-decoration:underline\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content img+p em:only-child{\n        margin-top:-1rem;\n        display:block;\n        width:100%;\n        text-align:right\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content p>img{\n        padding-bottom:1.25rem\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content blockquote{\n        margin-left:auto;\n        margin-right:auto;\n        max-width:28rem;\n        padding-left:2rem;\n        padding-right:2rem;\n        padding-top:1.5rem;\n        padding-bottom:1.5rem;\n        border-radius:0 30px 30px 30px;\n        background-color:#5ec19f;\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content blockquote p{\n          margin-top:0px;\n          --tw-text-opacity:1;\n          color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.article .wrapper aside.sidebar[data-v-9067ef4a]{\n      display:flex;\n      min-width:0px;\n      flex-direction:column;\n      padding-left:1rem;\n      padding-right:1rem;\n      padding-top:2rem;\n      padding-bottom:2rem;\n      flex:2 1 300px;\n}\n@media (min-width: 768px){\n.article .wrapper aside.sidebar[data-v-9067ef4a]{\n        position:relative;\n\n        padding-left:2.5rem;\n\n        padding-right:2.5rem\n}\n}\n.article .wrapper:not(.with-cover) main.content[data-v-9067ef4a]{\n      margin-top:0px\n}\n@media (min-width: 768px){\n.article .wrapper:not(.with-cover) aside.sidebar[data-v-9067ef4a]{\n        margin-top:6rem\n}\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    302: function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(0).a.extend({
          props: {
            coverCloudinaryId: { type: String, default: "" },
            document: { type: Object, default: () => {} },
          },
          computed: {
            crosswordAnswerURL() {
              var n;
              return (
                !!(null === (n = this.document) || void 0 === n
                  ? void 0
                  : n.crosswordAnswer) &&
                "https://res.cloudinary.com/klandestino-ab/image/upload".concat(
                  this.document.crosswordAnswer
                )
              );
            },
            puzzleAnswerURL() {
              var n;
              return (
                !!(null === (n = this.document) || void 0 === n
                  ? void 0
                  : n.puzzleAnswer) &&
                "https://res.cloudinary.com/klandestino-ab/image/upload".concat(
                  this.document.puzzleAnswer
                )
              );
            },
            pubId() {
              return this.coverCloudinaryId.replace(/^\/+/, "");
            },
          },
        }),
        o = (e(253), e(2)),
        component = Object(o.a)(
          r,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t("div", { staticClass: "article" }, [
              t("div", { staticClass: "pb-40" }),
              t(
                "div",
                { staticClass: "wrapper" },
                [
                  t("search-input", { staticClass: "search" }),
                  t("main", { staticClass: "content" }, [
                    t(
                      "div",
                      { staticClass: "magazine-card" },
                      [
                        n.coverCloudinaryId
                          ? t("client-only", [
                              t(
                                "div",
                                { staticClass: "magazine" },
                                [
                                  t("app-image", {
                                    attrs: {
                                      publicId: n.pubId,
                                      responsive: "width",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ])
                          : n._e(),
                        t("h3", [n._v(n._s(n.document.title))]),
                      ],
                      1
                    ),
                    n.document.crosswordAnswer
                      ? t("div", [
                          t("h3", [
                            t("a", { attrs: { href: n.crosswordAnswerURL } }, [
                              n._v("Facit till korsordet"),
                            ]),
                          ]),
                        ])
                      : n._e(),
                    n.document.puzzleAnswer
                      ? t("div", [
                          t("h3", [
                            t("a", { attrs: { href: n.puzzleAnswerURL } }, [
                              n._v("Facit till knep och knåp"),
                            ]),
                          ]),
                        ])
                      : n._e(),
                  ]),
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
            ]);
          },
          [],
          !1,
          null,
          "9067ef4a",
          null
        );
      t.default = component.exports;
      installComponents(component, {
        SearchInput: e(32).default,
        AppImage: e(79).default,
      });
    },
  },
]);
