(window.webpackJsonp = window.webpackJsonp || []).push([
  [26, 13, 21, 22],
  {
    182: function (t, n, e) {
      "use strict";
      function r(t) {
        var path = "/" === t.charAt(0) ? t : "/".concat(t);
        return "https://www.raddadjuren.se".concat(path);
      }
      function o(t) {
        return c(t.substr(7));
      }
      function c(t) {
        return t.endsWith("index") ? t.substr(0, t.length - 6) : t;
      }
      e.d(n, "a", function () {
        return r;
      }),
        e.d(n, "c", function () {
          return o;
        }),
        e.d(n, "b", function () {
          return c;
        });
    },
    183: function (t, n, e) {
      var content = e(187);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, e(4).default)("25255980", content, !0, { sourceMap: !1 });
    },
    186: function (t, n, e) {
      "use strict";
      e(183);
    },
    187: function (t, n, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        "/*purgecss start ignore*/\n@media (min-width: 768px){\n.article[data-v-6c9a0298]{\n    position:relative\n}\n}\n.article .cover[data-v-6c9a0298]{\n    width:100%;\n    overflow:hidden;\n    --tw-bg-opacity:1;\n    background-color:rgba(55, 65, 81, var(--tw-bg-opacity));\n    height:60vw;\n    max-height:60vh\n}\n.article .wrapper[data-v-6c9a0298]{\n    margin-left:auto;\n    margin-right:auto;\n    display:flex;\n    max-width:1200px;\n    flex-wrap:wrap;\n}\n.article .wrapper .search[data-v-6c9a0298]{\n      position:absolute;\n      top:0px;\n      left:0px;\n      display:none;\n      width:100%\n}\n@media (min-width: 768px){\n.article .wrapper .search[data-v-6c9a0298]{\n        display:block\n}\n}\n.article .wrapper main.content[data-v-6c9a0298]{\n      --tw-bg-opacity:1;\n      background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n      padding-left:1rem;\n      padding-right:1rem;\n      padding-top:2rem;\n      padding-bottom:2rem;\n      flex:5 1 400px;\n}\n@media (min-width: 768px){\n.article .wrapper main.content[data-v-6c9a0298]{\n        position:relative;\n\n        margin-top:-6rem;\n\n        padding-left:2.5rem;\n\n        padding-right:2.5rem\n}\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content{\n      font-size:1.125rem;\n      line-height:1.75rem\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content>*{\n      margin-top:2rem\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content h1, .article .wrapper main.content[data-v-6c9a0298] .nuxt-content h2, .article .wrapper main.content[data-v-6c9a0298] .nuxt-content h3, .article .wrapper main.content[data-v-6c9a0298] .nuxt-content h4, .article .wrapper main.content[data-v-6c9a0298] .nuxt-content h5{\n        font-weight:700\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content h1+*, .article .wrapper main.content[data-v-6c9a0298] .nuxt-content h2+*, .article .wrapper main.content[data-v-6c9a0298] .nuxt-content h3+*, .article .wrapper main.content[data-v-6c9a0298] .nuxt-content h4+*, .article .wrapper main.content[data-v-6c9a0298] .nuxt-content h5+*{\n        margin-top:1rem\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content h1{\n        font-size:1.875rem;\n        line-height:2.25rem\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content h2{\n        font-size:1.5rem;\n        line-height:2rem\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content h3{\n        font-size:1.25rem;\n        line-height:1.75rem\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content h4, .article .wrapper main.content[data-v-6c9a0298] .nuxt-content h5{\n        font-size:1.125rem;\n        line-height:1.75rem\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content ul{\n        list-style-type:disc;\n        padding-left:2rem;\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content ul li{\n          margin-top:1rem\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content a{\n        text-decoration:underline;\n        color:#70cdce\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content a:visited{\n        color:#7a54c3\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content img+p em:only-child{\n        margin-top:-1rem;\n        display:block;\n        width:100%;\n        text-align:right\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content p>img{\n        padding-bottom:1.25rem\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content blockquote{\n        margin-left:auto;\n        margin-right:auto;\n        max-width:28rem;\n        padding-left:2rem;\n        padding-right:2rem;\n        padding-top:1.5rem;\n        padding-bottom:1.5rem;\n        border-radius:0 30px 30px 30px;\n        background-color:#5ec19f;\n}\n.article .wrapper main.content[data-v-6c9a0298] .nuxt-content blockquote p{\n          margin-top:0px;\n          --tw-text-opacity:1;\n          color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.article .wrapper aside.sidebar[data-v-6c9a0298]{\n      display:flex;\n      min-width:0px;\n      flex-direction:column;\n      padding-left:1rem;\n      padding-right:1rem;\n      padding-top:2rem;\n      padding-bottom:2rem;\n      flex:2 1 300px;\n}\n@media (min-width: 768px){\n.article .wrapper aside.sidebar[data-v-6c9a0298]{\n        position:relative;\n\n        padding-left:2.5rem;\n\n        padding-right:2.5rem\n}\n}\n.article .wrapper:not(.with-cover) main.content[data-v-6c9a0298]{\n      margin-top:0px\n}\n@media (min-width: 768px){\n.article .wrapper:not(.with-cover) aside.sidebar[data-v-6c9a0298]{\n        margin-top:6rem\n}\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    189: function (t, n, e) {
      "use strict";
      e.r(n);
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
            var t = this,
              n = t._self._c;
            t._self._setupProxy;
            return n(
              "div",
              { staticClass: "article" },
              [
                t.coverCloudinaryId
                  ? n("client-only", [
                      n(
                        "div",
                        { staticClass: "cover" },
                        [
                          n("app-image", {
                            staticClass: "w-full h-full object-cover",
                            attrs: { publicId: t.pubId, responsive: "width" },
                          }),
                        ],
                        1
                      ),
                    ])
                  : n("div", { staticClass: "pb-40" }),
                n(
                  "div",
                  {
                    staticClass: "wrapper",
                    class: { "with-cover": t.coverCloudinaryId },
                  },
                  [
                    n("search-input", { staticClass: "search" }),
                    n(
                      "main",
                      { staticClass: "content max-w-4xl" },
                      [
                        t._t("content"),
                        n("nuxt-content", { attrs: { document: t.document } }),
                      ],
                      2
                    ),
                    t.$slots.sidebar
                      ? n(
                          "aside",
                          { staticClass: "sidebar" },
                          [t._t("sidebar")],
                          2
                        )
                      : t._e(),
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
      n.default = component.exports;
      installComponents(component, {
        AppImage: e(79).default,
        SearchInput: e(32).default,
      });
    },
    221: function (t, n, e) {
      var content = e(252);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, e(4).default)("24d2df8b", content, !0, { sourceMap: !1 });
    },
    251: function (t, n, e) {
      "use strict";
      e(221);
    },
    252: function (t, n, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        "/*purgecss start ignore*/\n.source-list-item a[data-v-aedd07ce]{\n    overflow-wrap:break-word;\n    --tw-text-opacity:1;\n    color:rgba(255, 255, 255, var(--tw-text-opacity));\n    text-decoration:underline\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    282: function (t, n, e) {
      var content = e(351);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, e(4).default)("e5941a82", content, !0, { sourceMap: !1 });
    },
    300: function (t, n, e) {
      "use strict";
      e.r(n);
      var r = e(0).a.extend({
          props: {
            title: { type: String, required: !0 },
            description: { type: String, required: !0 },
            image: {
              type: String,
              default: "https://nuxtjs.org/nuxt-card.png",
            },
            cloudinary: { type: Boolean, default: !1 },
          },
          head() {
            return {
              meta: [
                {
                  hid: "twitter:title",
                  name: "twitter:title",
                  content: this.title,
                },
                {
                  hid: "twitter:description",
                  name: "twitter:description",
                  content: this.description,
                },
                {
                  hid: "twitter:image",
                  name: "twitter:image",
                  content: this.absoluteImage,
                },
                {
                  hid: "twitter:image:alt",
                  name: "twitter:image:alt",
                  content: this.title,
                },
                { hid: "og:title", property: "og:title", content: this.title },
                {
                  hid: "og:description",
                  property: "og:description",
                  content: this.description,
                },
                {
                  hid: "og:image",
                  property: "og:image",
                  content: this.absoluteImage,
                },
                {
                  hid: "og:image:secure_url",
                  property: "og:image:secure_url",
                  content: this.absoluteImage,
                },
                {
                  hid: "og:image:alt",
                  property: "og:image:alt",
                  content: this.title,
                },
              ],
            };
          },
          computed: {
            absoluteImage() {
              return this.cloudinary
                ? "https://res.cloudinary.com/klandestino-ab/image/upload/c_lfill,dpr_auto,g_faces/c_scale,dpr_2.0,w_1200".concat(
                    this.image
                  )
                : this.image;
            },
          },
        }),
        o = e(2),
        component = Object(o.a)(
          r,
          function () {
            var t = this;
            t._self._c, t._self._setupProxy;
            return t._e();
          },
          [],
          !1,
          null,
          null,
          null
        );
      n.default = component.exports;
    },
    301: function (t, n, e) {
      "use strict";
      e.r(n);
      var r = e(0).a.extend({
          name: "SourceListItem",
          props: { source: { type: Object, required: !0 } },
        }),
        o = (e(251), e(2)),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              n = t._self._c;
            t._self._setupProxy;
            return n("li", { staticClass: "source-list-item" }, [
              n("span", [t._v(t._s(t.source.sourceName))]),
              t.source.authorOrInstitution
                ? n("span", [
                    t._v(t._s(", ".concat(t.source.authorOrInstitution))),
                  ])
                : t._e(),
              t.source.url
                ? n("span", [
                    t._v(t._s(", URL: ")),
                    n("a", { attrs: { href: t.source.url } }, [
                      t._v(t._s(t.source.url)),
                    ]),
                  ])
                : t._e(),
              t.source.urlDate
                ? n("span", [
                    n("br"),
                    t._v(
                      t._s(" Sidan besökt: ") + "\n" + t._s(t.source.urlDate)
                    ),
                  ])
                : t._e(),
            ]);
          },
          [],
          !1,
          null,
          "aedd07ce",
          null
        );
      n.default = component.exports;
    },
    350: function (t, n, e) {
      "use strict";
      e(282);
    },
    351: function (t, n, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        '/*purgecss start ignore*/\n@media (min-width: 768px){\n.page-djurfakta[data-v-40728fa9]{\n    margin-bottom:5rem\n}\n}\n.page-djurfakta h1[data-v-40728fa9]{\n    font-size:2.25rem;\n    line-height:2.5rem;\n    font-weight:800;\n    --tw-text-opacity:1;\n    color:rgba(0, 0, 0, var(--tw-text-opacity))\n}\n.page-djurfakta .preamble[data-v-40728fa9]{\n    margin-top:2rem;\n    font-size:1.125rem;\n    line-height:1.75rem;\n    font-weight:700;\n    line-height:1.75rem\n}\n.page-djurfakta .byline[data-v-40728fa9]{\n    margin-top:2rem;\n    border-bottom-width:2px;\n    font-size:0.875rem;\n    line-height:1.25rem;\n    font-weight:700;\n}\n.page-djurfakta .byline p[data-v-40728fa9]{\n      margin-bottom:0.5rem\n}\n.page-djurfakta .byline .author[data-v-40728fa9]{\n      float:right\n}\n.page-djurfakta[data-v-40728fa9] blockquote{\n  background-color:#5ec19f\n}\n.page-djurfakta section.sidebar-section[data-v-40728fa9]{\n    margin:0px;\n    margin-bottom:2rem;\n}\n.page-djurfakta section.sidebar-section h2[data-v-40728fa9]{\n      padding-top:1rem;\n      padding-bottom:1rem;\n      font-size:1.5rem;\n      line-height:2rem;\n      font-weight:700\n}\n.page-djurfakta section.sidebar-section .block[data-v-40728fa9]{\n      overflow:hidden;\n      border-radius:0.375rem;\n}\n.page-djurfakta section.sidebar-section .block h2[data-v-40728fa9]{\n        --tw-bg-opacity:1;\n        background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n        text-align:center\n}\n.page-djurfakta section.sidebar-section .block__content[data-v-40728fa9]{\n        padding-left:1rem;\n        padding-right:1rem;\n        padding-top:1rem;\n        padding-bottom:1rem\n}\n.page-djurfakta section.sidebar-section .block__preamble[data-v-40728fa9]{\n        margin-bottom:1rem;\n        font-weight:700\n}\n.page-djurfakta section.sidebar-section .note[data-v-40728fa9]{\n      margin-top:2rem;\n      font-style:italic\n}\n.page-djurfakta section.sidebar-section.facts ul li[data-v-40728fa9]{\n        margin-top:0.5rem;\n        border-radius:0.375rem;\n        padding-left:1rem;\n        padding-right:1rem;\n        padding-top:0.5rem;\n        padding-bottom:0.5rem;\n        font-weight:700;\n        --tw-text-opacity:1;\n        color:rgba(255, 255, 255, var(--tw-text-opacity));\n        background-color:#e6007e;\n        -webkit-clip-path:polygon(0 0,100% 0,95% 100%,0 100%);\n                clip-path:polygon(0 0,100% 0,95% 100%,0 100%);\n        border-top-right-radius:0;\n        border-bottom-right-radius:0\n}\n.page-djurfakta section.sidebar-section.animal-rights .block[data-v-40728fa9]{\n      background-color:#e6007e;\n}\n.page-djurfakta section.sidebar-section.animal-rights .block h2[data-v-40728fa9]{\n        color:#e6007e\n}\n.page-djurfakta section.sidebar-section.animal-rights .block__content[data-v-40728fa9]{\n        --tw-text-opacity:1;\n        color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.page-djurfakta section.sidebar-section.questions .block[data-v-40728fa9]{\n      background-color:#75d7d8;\n}\n.page-djurfakta section.sidebar-section.questions .block h2[data-v-40728fa9]{\n        color:#75d7d8\n}\n.page-djurfakta section.sidebar-section.questions .block__content ul li[data-v-40728fa9]{\n            margin-top:1rem;\n            display:flex;\n}\n.page-djurfakta section.sidebar-section.questions .block__content ul li .bullet[data-v-40728fa9]{\n              margin-right:1.5rem;\n              display:inline-flex;\n              height:2rem;\n              width:2rem;\n              flex-shrink:0;\n              align-items:center;\n              justify-content:center;\n              border-radius:9999px;\n              --tw-bg-opacity:1;\n              background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n              font-weight:700;\n              line-height:1;\n              padding-top:2px;\n              color:#75d7d8\n}\n.page-djurfakta section.sidebar-section.questions .block__content ul li p[data-v-40728fa9]{\n              display:inline-flex;\n              align-items:center\n}\n.page-djurfakta section.sidebar-section.sources .block[data-v-40728fa9]{\n      background-color:#5ec19f;\n}\n.page-djurfakta section.sidebar-section.sources .block h2[data-v-40728fa9]{\n        color:#5ec19f\n}\n.page-djurfakta section.sidebar-section.sources .block__content[data-v-40728fa9]{\n        position:relative;\n        --tw-text-opacity:1;\n        color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.page-djurfakta section.sidebar-section.sources .block__content[data-v-40728fa9]:not(.open){\n        padding-bottom:1.5rem;\n}\n.page-djurfakta section.sidebar-section.sources .block__content:not(.open) button[data-v-40728fa9]{\n          position:absolute;\n          bottom:0px;\n          left:0px;\n          z-index:10;\n          width:100%;\n          padding-top:1rem;\n          padding-bottom:1rem\n}\n.page-djurfakta section.sidebar-section.sources .block__content[data-v-40728fa9]:not(.open):after{\n        pointer-events:none;\n        position:absolute;\n        bottom:0px;\n        left:0px;\n        height:100%;\n        width:100%;\n        content:"";\n        background:linear-gradient(transparent,#5ec19f 90%)\n}\n.page-djurfakta section.sidebar-section.sources .block__content ol[data-v-40728fa9]{\n          list-style-type:decimal;\n          padding-left:1.5rem;\n}\n.page-djurfakta section.sidebar-section.sources .block__content ol li[data-v-40728fa9]{\n            margin-bottom:1rem\n}\n.page-djurfakta section.sidebar-section.sources .block__content button[data-v-40728fa9]{\n          display:flex;\n          flex-direction:column;\n          align-items:center;\n          background-color:transparent;\n          padding-top:0px;\n          padding-bottom:0px;\n          outline:2px solid transparent;\n          outline-offset:2px;\n}\n.page-djurfakta section.sidebar-section.sources .block__content button .icon[data-v-40728fa9]{\n            margin-top:-0.25rem\n}\n\n/*purgecss end ignore*/',
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    407: function (t, n, e) {
      "use strict";
      e.r(n);
      var r = e(0),
        o = e(182);
      function c(t, n, e, r, o, c, l) {
        try {
          var d = t[c](l),
            m = d.value;
        } catch (t) {
          return void e(t);
        }
        d.done ? n(m) : Promise.resolve(m).then(r, o);
      }
      var l = r.a.extend({
          asyncData(t) {
            return ((n = function* () {
              var { $content: n, payload: e, params: r } = t;
              return e
                ? { article: e }
                : {
                    article: yield n("djurfakta/".concat(r.slug)).fetch(),
                    slug: r.slug,
                  };
            }),
            function () {
              var t = this,
                e = arguments;
              return new Promise(function (r, o) {
                var l = n.apply(t, e);
                function d(t) {
                  c(l, r, o, d, m, "next", t);
                }
                function m(t) {
                  c(l, r, o, d, m, "throw", t);
                }
                d(void 0);
              });
            })();
            var n;
          },
          data: () => ({
            slug: "",
            article: null,
            sourcesOpen: !1,
            previewSourcesCount: 2,
          }),
          head() {
            var t, n, e, r, c, l, d, m, f;
            return {
              title: (
                null === (t = this.article) || void 0 === t ? void 0 : t.title
              )
                ? "".concat(this.article.title, " | Rädda Djuren-klubben")
                : "Rädda Djuren-klubben",
              link: [
                {
                  hid: "canonical",
                  rel: "canonical",
                  href: Object(o.a)(
                    "/djurfakta/".concat(
                      null === (n = this.article) || void 0 === n
                        ? void 0
                        : n.slug
                    )
                  ),
                },
              ],
              meta: [
                {
                  hid: "og:url",
                  property: "og:url",
                  content: "https://www.raddadjuren.se/djurfakta/".concat(
                    null === (e = this.article) || void 0 === e
                      ? void 0
                      : e.slug
                  ),
                },
                {
                  hid: "og:title",
                  property: "og:title",
                  content: (
                    null === (r = this.article) || void 0 === r
                      ? void 0
                      : r.title
                  )
                    ? "".concat(this.article.title, " | Rädda Djuren-klubben")
                    : "Rädda Djuren-klubben",
                },
                {
                  hid: "description",
                  property: "description",
                  content: (
                    null === (c = this.article) || void 0 === c
                      ? void 0
                      : c.metadescription
                  )
                    ? this.article.metadescription
                    : (
                        null === (l = this.article) || void 0 === l
                          ? void 0
                          : l.preamble
                      )
                    ? this.article.preamble
                    : "",
                },
                {
                  hid: "og:description",
                  property: "og:description",
                  content: (
                    null === (d = this.article) || void 0 === d
                      ? void 0
                      : d.metadescription
                  )
                    ? this.article.metadescription
                    : (
                        null === (m = this.article) || void 0 === m
                          ? void 0
                          : m.preamble
                      )
                    ? this.article.preamble
                    : "",
                },
                {
                  hid: "og:image",
                  property: "og:image",
                  content: (
                    null === (f = this.article) || void 0 === f
                      ? void 0
                      : f.image
                  )
                    ? "https://res.cloudinary.com/klandestino-ab/image/upload/c_lfill,dpr_auto,g_faces/c_scale,dpr_2.0,w_1200".concat(
                        this.article.image
                      )
                    : null,
                },
              ],
            };
          },
          computed: {
            facts() {
              var t, n;
              return (
                null ===
                  (n =
                    null === (t = this.article) || void 0 === t
                      ? void 0
                      : t["facts-block"]) || void 0 === n
                  ? void 0
                  : n.facts
              )
                ? this.article["facts-block"].facts
                : void 0;
            },
            questions() {
              var t, n;
              return (
                null ===
                  (n =
                    null === (t = this.article) || void 0 === t
                      ? void 0
                      : t["question-block"]) || void 0 === n
                  ? void 0
                  : n.questions
              )
                ? this.article["question-block"].questions
                : void 0;
            },
            sources() {
              var t, n;
              return (
                null ===
                  (n =
                    null === (t = this.article) || void 0 === t
                      ? void 0
                      : t["source-block"]) || void 0 === n
                  ? void 0
                  : n.source
              )
                ? this.article["source-block"].source
                : void 0;
            },
          },
          methods: {
            toggleSourcesOpen() {
              this.sourcesOpen = !this.sourcesOpen;
            },
          },
        }),
        d = l,
        m = (e(350), e(2)),
        component = Object(m.a)(
          d,
          function () {
            var t = this,
              n = t._self._c;
            t._self._setupProxy;
            return n("page-article", {
              staticClass: "page-djurfakta",
              attrs: {
                document: t.article,
                coverCloudinaryId: t.article.image,
              },
              scopedSlots: t._u([
                {
                  key: "content",
                  fn: function () {
                    return [
                      n("social-head", {
                        attrs: {
                          title: t.article.title,
                          description: t.article.metadescription,
                          image: t.article.image,
                          cloudinary: !0,
                        },
                      }),
                      n("h1", [t._v(t._s(t.article.title))]),
                      n("div", { staticClass: "byline" }, [
                        n("p", [t._v(t._s(t.article.species))]),
                        n("p", [
                          t._v("Latin: " + t._s(t.article.scientificName)),
                          t.article.author
                            ? n("span", { staticClass: "author" }, [
                                t._v("Text av " + t._s(t.article.author)),
                              ])
                            : t._e(),
                        ]),
                      ]),
                      n("p", { staticClass: "preamble" }, [
                        t._v(t._s(t.article.preamble)),
                      ]),
                    ];
                  },
                  proxy: !0,
                },
                {
                  key: "sidebar",
                  fn: function () {
                    return [
                      t.facts && t.facts.length > 0
                        ? n(
                            "section",
                            {
                              staticClass: "sidebar-section facts",
                              attrs: { id: "facts" },
                            },
                            [
                              n("h2", [t._v("Snabba fakta")]),
                              n(
                                "ul",
                                t._l(t.facts, function (e) {
                                  return n("li", { key: e }, [t._v(t._s(e))]);
                                }),
                                0
                              ),
                            ]
                          )
                        : t._e(),
                      t.article["animal-rights-block"] &&
                      t.article["animal-rights-block"].body
                        ? n(
                            "section",
                            { staticClass: "sidebar-section animal-rights" },
                            [
                              n("div", { staticClass: "block" }, [
                                n("h2", [
                                  t._v(
                                    t._s(t.article["animal-rights-block"].title)
                                  ),
                                ]),
                                n("div", { staticClass: "block__content" }, [
                                  n("p", { staticClass: "block__preamble" }, [
                                    t._v(
                                      t._s(
                                        t.article["animal-rights-block"]
                                          .preamble
                                      )
                                    ),
                                  ]),
                                  n("p", [
                                    t._v(
                                      t._s(
                                        t.article["animal-rights-block"].body
                                      )
                                    ),
                                  ]),
                                ]),
                              ]),
                              n("p", { staticClass: "note" }, [
                                t._v(
                                  "Här berättar etologerna på Djurens Rätt vad de tänker är bäst för djuren. De är utbildade i djurs behov och beteenden."
                                ),
                              ]),
                            ]
                          )
                        : t._e(),
                      t.questions && t.questions.length > 0
                        ? n(
                            "section",
                            { staticClass: "sidebar-section questions" },
                            [
                              n("div", { staticClass: "block" }, [
                                n("h2", [t._v("Värderingsfrågor")]),
                                n("div", { staticClass: "block__content" }, [
                                  n("p", { staticClass: "block__preamble" }, [
                                    t._v(
                                      t._s(t.article["question-block"].preamble)
                                    ),
                                  ]),
                                  n(
                                    "ul",
                                    t._l(t.questions, function (e, r) {
                                      return n("li", { key: e }, [
                                        n("div", { staticClass: "bullet" }, [
                                          n("span", [t._v(t._s(r + 1))]),
                                        ]),
                                        n("p", [t._v(t._s(e))]),
                                      ]);
                                    }),
                                    0
                                  ),
                                ]),
                              ]),
                              n("p", { staticClass: "note" }, [
                                t._v(
                                  "Värderingsfrågorna gör det lättare att sätta sig in i djurets situation och tänka kring val i vardagen och rätt och fel. Diskutera dem gärna med en vuxen."
                                ),
                              ]),
                            ]
                          )
                        : t._e(),
                      t.sources && t.sources.length > 0
                        ? n(
                            "section",
                            { staticClass: "sidebar-section sources" },
                            [
                              n("div", { staticClass: "block" }, [
                                n("h2", [t._v("Källor")]),
                                n(
                                  "div",
                                  {
                                    staticClass: "block__content",
                                    class: { open: t.sourcesOpen },
                                  },
                                  [
                                    n(
                                      "ol",
                                      t._l(
                                        t.sources.slice(
                                          0,
                                          t.previewSourcesCount
                                        ),
                                        function (source, t) {
                                          return n("source-list-item", {
                                            key: t,
                                            attrs: { source: source },
                                          });
                                        }
                                      ),
                                      1
                                    ),
                                    t.sources.length > t.previewSourcesCount
                                      ? [
                                          n(
                                            "ol",
                                            {
                                              directives: [
                                                {
                                                  name: "show-slide",
                                                  rawName: "v-show-slide",
                                                  value: t.sourcesOpen,
                                                  expression: "sourcesOpen",
                                                },
                                              ],
                                              attrs: {
                                                start:
                                                  t.previewSourcesCount + 1,
                                              },
                                            },
                                            t._l(
                                              t.sources.slice(
                                                t.previewSourcesCount
                                              ),
                                              function (source, t) {
                                                return n("source-list-item", {
                                                  key: t,
                                                  attrs: { source: source },
                                                });
                                              }
                                            ),
                                            1
                                          ),
                                          n(
                                            "button",
                                            {
                                              on: {
                                                click: t.toggleSourcesOpen,
                                              },
                                            },
                                            [
                                              n("span", [
                                                t._v(
                                                  t._s(
                                                    t.sourcesOpen
                                                      ? "Visa mindre"
                                                      : "Visa mer"
                                                  )
                                                ),
                                              ]),
                                              n(
                                                "svg",
                                                {
                                                  staticClass:
                                                    "icon chevron-up w-6 h-6",
                                                  attrs: {
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                  },
                                                },
                                                [
                                                  n("path", {
                                                    attrs: {
                                                      "fill-rule": "evenodd",
                                                      d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
                                                      "clip-rule": "evenodd",
                                                    },
                                                  }),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      : t._e(),
                                  ],
                                  2
                                ),
                              ]),
                            ]
                          )
                        : t._e(),
                      n(
                        "div",
                        { staticClass: "text-center text-sm" },
                        [
                          n(
                            "nuxt-link",
                            { attrs: { to: "/vuxen-eller-pedagog" } },
                            [
                              t._v("Tillbaka till "),
                              n("strong", [t._v("framsidan ")]),
                            ]
                          ),
                          n("span", [t._v("eller ")]),
                          n("nuxt-link", { attrs: { to: "/sok" } }, [
                            t._v("se "),
                            n("strong", [t._v("alla djur")]),
                          ]),
                        ],
                        1
                      ),
                    ];
                  },
                  proxy: !0,
                },
              ]),
            });
          },
          [],
          !1,
          null,
          "40728fa9",
          null
        );
      n.default = component.exports;
      installComponents(component, {
        SocialHead: e(300).default,
        SourceListItem: e(301).default,
        PageArticle: e(189).default,
      });
    },
  },
]);
