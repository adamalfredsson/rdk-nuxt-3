(window.webpackJsonp = window.webpackJsonp || []).push([
  [36, 9, 15, 23],
  {
    182: function (t, n, e) {
      "use strict";
      function r(t) {
        var path = "/" === t.charAt(0) ? t : "/".concat(t);
        return "https://www.raddadjuren.se".concat(path);
      }
      function l(t) {
        return o(t.substr(7));
      }
      function o(t) {
        return t.endsWith("index") ? t.substr(0, t.length - 6) : t;
      }
      e.d(n, "a", function () {
        return r;
      }),
        e.d(n, "c", function () {
          return l;
        }),
        e.d(n, "b", function () {
          return o;
        });
    },
    184: function (t, n, e) {
      var content = e(191);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, e(4).default)("7d532678", content, !0, { sourceMap: !1 });
    },
    185: function (t, n, e) {
      var content = e(195);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, e(4).default)("044ed28b", content, !0, { sourceMap: !1 });
    },
    188: function (t, n, e) {
      var content = e(198);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, e(4).default)("6c1ade1a", content, !0, { sourceMap: !1 });
    },
    190: function (t, n, e) {
      "use strict";
      e(184);
    },
    191: function (t, n, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        '/*purgecss start ignore*/\n.tags-list[data-v-80fa6272]{\n  max-width:100%;\n  display:flex;\n  flex-direction:column;\n  flex-wrap:wrap;\n  align-items:center;\n  width:100vw;\n  padding-top:0;\n  margin:0;\n  font-size:1.25rem;\n  line-height:1.4rem;\n  text-align:center;\n}\n.tags-list ul[data-v-80fa6272]{\n    margin:-0.5rem;\n    display:inline-block;\n    padding-top:0;\n    padding-left:0;\n    list-style-type:none;\n}\n.tags-list ul li[data-v-80fa6272]{\n      display:inline-block;\n      padding:0.5rem\n}\n.tags-list ul li:first-child a[data-v-80fa6272]{\n        color:#e6007e!important\n}\n.tags-list ul li:first-child a[data-v-80fa6272]:first-child:before{\n        border-bottom:3px solid #e6007e;\n        border-right:3px solid #e6007e\n}\n.tags-list ul li a[data-v-80fa6272]{\n        display:inline-block;\n        border-radius:9999px;\n        font-weight:700;\n        position:relative;\n        padding:6px 15px 5px 30px;\n        color:#5ec19f;\n        font-size:1rem;\n        background-color:#ffffff;\n        text-align:center;\n        transition:.3s ease;\n}\n@media (min-width: 768px){\n.tags-list ul li a[data-v-80fa6272]{\n          padding-left:35px;\n\n          padding-bottom:8px;\n\n          padding-right:20px;\n\n          padding-top:9px\n}\n}\n.tags-list ul li a[data-v-80fa6272]:after,.tags-list ul li a[data-v-80fa6272]:before{\n        transition:.4s\n}\n.tags-list ul li a[data-v-80fa6272]:before{\n        position:absolute;\n        left:10px;\n        top:11px;\n        content:"";\n        width:10px;\n        height:10px;\n        border-bottom:3px solid #5ec19f;\n        border-right:3px solid #5ec19f;\n        border-radius:2px;\n        transform:rotate(-45deg);\n}\n@media (min-width: 768px){\n.tags-list ul li a[data-v-80fa6272]:before{\n          left:12px;\n\n          top:14px\n}\n}\n.tags-list ul li a[data-v-80fa6272]:hover:before{\n        transform:rotate(-45deg) translateX(2px) translateY(2px)\n}\n.tags-list ul li a[data-v-80fa6272]:hover:after{\n        transform:scaleX(1)\n}\n@media (min-width: 768px){\n.tags-list[data-v-80fa6272]{\n    margin-bottom:2.5em\n}\n}\n.tags-list .btn-more[data-v-80fa6272]{\n    margin-top:2rem;\n    border-radius:9999px;\n    font-weight:700;\n    border:3px solid #ffffff;\n    padding:.3em 1em .2em;\n    font-size:1rem;\n    color:#ffffff\n}\n.tags-list .btn-more[data-v-80fa6272]:hover{\n    transform:scale(1.05)\n}\n@media only screen and (max-width:768px){\n.tags-list .btn-more[data-v-80fa6272]{\n      text-align:left\n}\n}\n\n/*purgecss end ignore*/',
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    192: function (t, n, e) {
      "use strict";
      e.r(n);
      var r = e(0).a.extend({
          props: {
            links: {
              type: Array,
              required: !1,
              validator: (t) => t.length > 0,
              default: () => [],
            },
            moreLink: {
              type: Object,
              validator: (t) => !!t.linkText && !!t.url,
              default: () => {},
            },
            external: { type: Boolean, default: !1 },
          },
        }),
        l = (e(190), e(2)),
        component = Object(l.a)(
          r,
          function () {
            var t = this,
              n = t._self._c;
            t._self._setupProxy;
            return n(
              "div",
              { staticClass: "tags-list" },
              [
                n(
                  "ul",
                  t._l(t.links, function (link) {
                    return n(
                      "li",
                      { key: link.linkText.toLowerCase() },
                      [
                        n(
                          "app-link",
                          { staticClass: "link", attrs: { href: link.url } },
                          [t._v(t._s(link.linkText))]
                        ),
                      ],
                      1
                    );
                  }),
                  0
                ),
                t.moreLink
                  ? n(
                      "app-link",
                      {
                        staticClass: "btn-more",
                        attrs: { href: t.moreLink.url },
                      },
                      [t._v(t._s(t.moreLink.linkText))]
                    )
                  : t._e(),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "80fa6272",
          null
        );
      n.default = component.exports;
      installComponents(component, { AppLink: e(14).default });
    },
    194: function (t, n, e) {
      "use strict";
      e(185);
    },
    195: function (t, n, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        "/*purgecss start ignore*/\n.page-search[data-v-0e2e8289]{\n  margin-top:0px;\n  margin-bottom:0px;\n  display:flex;\n  flex-direction:column-reverse;\n  align-items:center;\n  padding-left:0.5rem;\n  padding-right:0.5rem;\n}\n@media (min-width: 768px){\n.page-search[data-v-0e2e8289]{\n    flex-direction:column\n}\n}\n.page-search .links[data-v-0e2e8289]{\n    margin-top:1rem;\n    margin-bottom:1rem;\n    max-width:768px;\n}\n@media (min-width: 768px){\n.page-search .links[data-v-0e2e8289]{\n      margin-top:0.5rem;\n\n      margin-bottom:0.5rem\n}\n}\n.page-search .search[data-v-0e2e8289]{\n    width:100%\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    196: function (t, n, e) {
      "use strict";
      e.r(n);
      var r = e(0).a.extend({
          props: {
            links: { type: Array, default: () => [] },
            moreLink: {
              type: Object,
              validator: (t) => !!t.linkText && !!t.url,
              default: () => {},
            },
          },
        }),
        l = (e(194), e(2)),
        component = Object(l.a)(
          r,
          function () {
            var t = this,
              n = t._self._c;
            t._self._setupProxy;
            return n(
              "section",
              { staticClass: "page-search" },
              [
                n("search-input", { staticClass: "search" }),
                n("tags-list", {
                  staticClass: "links",
                  attrs: {
                    links: t.links && t.links.length > 0 ? t.links : null,
                    moreLink: t.moreLink,
                  },
                }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "0e2e8289",
          null
        );
      n.default = component.exports;
      installComponents(component, {
        SearchInput: e(32).default,
        TagsList: e(192).default,
      });
    },
    197: function (t, n, e) {
      "use strict";
      e(188);
    },
    198: function (t, n, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        "/*purgecss start ignore*/\n.info-card[data-v-11df0678]{\n  display:flex;\n  flex-direction:column;\n  overflow:hidden;\n  border-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n  min-height:340px;\n}\n.info-card__image[data-v-11df0678]{\n    overflow:hidden;\n    height:180px;\n    max-height:50%;\n}\n.info-card__image img[data-v-11df0678]{\n      -o-object-fit:cover;\n         object-fit:cover\n}\n.info-card__content[data-v-11df0678]{\n    display:flex;\n    flex:1 1 0%;\n    flex-direction:column;\n    justify-content:center;\n    padding-left:1rem;\n    padding-right:1rem;\n    padding-top:1.5rem;\n    padding-bottom:1.5rem;\n}\n.info-card__content h3[data-v-11df0678]{\n      font-weight:700;\n      font-family:'Avenir LT Std', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;\n      color:#373737\n}\n.info-card__content .author[data-v-11df0678]{\n      margin-top:0.25rem;\n      font-size:0.875rem;\n      line-height:1.25rem\n}\n.info-card__link[data-v-11df0678]{\n    margin-top:1rem;\n    margin-bottom:1rem;\n    display:block;\n    align-self:center;\n    border-radius:0.375rem;\n    padding-left:2rem;\n    padding-right:2rem;\n    padding-top:0.25rem;\n    padding-bottom:0.25rem;\n    font-size:1.125rem;\n    line-height:1.75rem;\n    font-weight:700;\n    --tw-text-opacity:1;\n    color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.info-card__border[data-v-11df0678],.info-card__link[data-v-11df0678]{\n    background-color:#5ec19f\n}\n.info-card__border[data-v-11df0678]{\n    height:1.5em;\n    border-radius:5px\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    199: function (t, n, e) {
      "use strict";
      e.r(n);
      var r = e(0).a.extend({
          props: {
            title: { type: String, required: !0 },
            image: { type: String, default: "" },
            author: { type: String, default: "" },
            link: { type: String, default: "" },
          },
          computed: {
            pubId() {
              return this.image.replace(/^\/+/, "");
            },
          },
        }),
        l = (e(197), e(2)),
        component = Object(l.a)(
          r,
          function () {
            var t = this,
              n = t._self._c;
            t._self._setupProxy;
            return n(
              "div",
              { staticClass: "info-card" },
              [
                t.image
                  ? n("client-only", [
                      n(
                        "div",
                        { staticClass: "info-card__image" },
                        [
                          n("app-image", {
                            attrs: {
                              publicId: t.pubId,
                              width: "auto",
                              height: "260",
                            },
                          }),
                        ],
                        1
                      ),
                    ])
                  : t._e(),
                n("div", { staticClass: "info-card__content" }, [
                  n("h3", [t._v(t._s(t.title))]),
                  t.author
                    ? n("p", { staticClass: "author" }, [
                        t._v("Text av " + t._s(t.author)),
                      ])
                    : t._e(),
                ]),
                t.link
                  ? n(
                      "app-link",
                      {
                        staticClass: "info-card__link themed",
                        attrs: { href: t.link },
                      },
                      [t._v("Läs")]
                    )
                  : n("div", { staticClass: "info-card__border themed" }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "11df0678",
          null
        );
      n.default = component.exports;
      installComponents(component, {
        AppImage: e(79).default,
        AppLink: e(14).default,
      });
    },
    275: function (t, n, e) {
      var content = e(337);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, e(4).default)("9818d81c", content, !0, { sourceMap: !1 });
    },
    336: function (t, n, e) {
      "use strict";
      e(275);
    },
    337: function (t, n, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        "/*purgecss start ignore*/\n.page-vego p[data-v-0c9f8384]{\n    margin:1rem auto 3rem;\n    width:90%;\n    max-width:50rem;\n    text-align:center;\n    font-size:1rem;\n    line-height:1.5rem\n}\n.page-vego .title[data-v-0c9f8384] h2{\n      background-color:#38AA83\n}\n.page-vego ul[data-v-0c9f8384]{\n    display:grid;\n    width:100%;\n    max-width:1200px;\n    grid-template-columns:repeat(1, minmax(0, 1fr));\n    gap:1rem;\n    padding-left:1rem;\n    padding-right:1rem;\n    margin:auto;\n}\n@media (min-width: 768px){\n.page-vego ul[data-v-0c9f8384]{\n      grid-template-columns:repeat(3, minmax(0, 1fr))\n}\n}\n.page-vego ul li[data-v-0c9f8384]{\n      margin-left:auto;\n      margin-right:auto;\n      width:100%;\n      max-width:400px\n}\n.page-vego ul li[data-v-0c9f8384] .themed{\n      background-color:#38AA83\n}\n.page-vego .social[data-v-0c9f8384]{\n    display:flex;\n    flex-wrap:wrap;\n    flex-direction:column;\n    justify-content:center\n}\n@media screen and (max-width:768px){\n.page-vego .social[data-v-0c9f8384]{\n      margin-bottom:1em;\n      align-items:center;\n      justify-content:center\n}\n}\n.page-vego .social__link[data-v-0c9f8384]{\n    width:40px;\n    height:40px;\n    transition:.5s;\n    margin:auto\n}\n.page-vego .social__link[data-v-0c9f8384]:hover{\n    transform:scale(1.5)\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    400: function (t, n, e) {
      "use strict";
      e.r(n);
      var r = [
          function () {
            var t = this,
              n = t._self._c;
            t._self._setupProxy;
            return n("div", { staticClass: "social text-center" }, [
              n("p", [
                t._v(
                  "Följ Rädda Djuren-klubben på TikTok, här tipsar vi också om goda och enkla mellanmål!"
                ),
              ]),
              n(
                "a",
                {
                  staticClass: "social__link",
                  attrs: { href: "https://www.tiktok.com/@raddadjurenklubben" },
                },
                [n("img", { staticClass: "icon", attrs: { src: e(84) } })]
              ),
            ]);
          },
        ],
        l = e(0),
        o = e(182);
      function d(t, n, e, r, l, o, d) {
        try {
          var c = t[o](d),
            f = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? n(f) : Promise.resolve(f).then(r, l);
      }
      var c = l.a.extend({
          asyncData(t) {
            return ((n = function* () {
              var { $content: n, payload: e } = t,
                {
                  title: title,
                  links: r,
                  preamble: l,
                  metadescription: o,
                  textfield: d,
                  extratextfield: c,
                } = e || (yield n("portal-page/vego").fetch());
              return {
                title: title,
                links: r,
                preamble: l,
                articles: yield n("vego/tips", { deep: !0 })
                  .only(["title", "path", "image"])
                  .fetch(),
                recipes: yield n("vego/recept")
                  .only(["title", "path", "image"])
                  .fetch(),
                metadescription: o,
                textfield: d,
                extratextfield: c,
              };
            }),
            function () {
              var t = this,
                e = arguments;
              return new Promise(function (r, l) {
                var o = n.apply(t, e);
                function c(t) {
                  d(o, r, l, c, f, "next", t);
                }
                function f(t) {
                  d(o, r, l, c, f, "throw", t);
                }
                c(void 0);
              });
            })();
            var n;
          },
          data: () => ({
            title: "Vego",
            preamble: null,
            metadescription: null,
            articles: [],
            recipes: [],
          }),
          head() {
            return {
              title: this.title
                ? "".concat(this.title, " | Rädda Djuren-klubben")
                : "Rädda Djuren-klubben",
              link: [
                {
                  hid: "canonical",
                  rel: "canonical",
                  href: Object(o.a)("/vego"),
                },
              ],
              meta: [
                {
                  hid: "og:url",
                  property: "og:url",
                  content: "https://www.raddadjuren.se/vego",
                },
                {
                  hid: "og:title",
                  property: "og:title",
                  content: this.title
                    ? "".concat(this.title, " | Rädda Djuren-klubben")
                    : "Rädda Djuren-klubben",
                },
                {
                  hid: "description",
                  property: "description",
                  content: this.metadescription || this.preamble || "",
                },
                {
                  hid: "og:description",
                  property: "og:description",
                  content: this.metadescription || this.preamble || "",
                },
              ],
            };
          },
          methods: { stripIndex: o.b },
        }),
        f = c,
        m = (e(336), e(2)),
        component = Object(m.a)(
          f,
          function () {
            var t = this,
              n = t._self._c;
            t._self._setupProxy;
            return n(
              "div",
              { staticClass: "page-vego" },
              [
                n("page-search", {
                  staticClass: "search",
                  attrs: { links: t.links },
                }),
                n("page-title", {
                  staticClass: "title",
                  attrs: { title: t.title, preamble: t.preamble },
                }),
                n("h2", { staticClass: "text-center pb-4 text-2xl" }, [
                  t._v("Vegorecept"),
                ]),
                n("p", { staticClass: "textfield" }, [t._v(t._s(t.textfield))]),
                n("section", { staticClass: "text-center" }, [
                  n(
                    "ul",
                    t._l(t.recipes, function (t) {
                      return n(
                        "li",
                        { key: t.path },
                        [
                          n("info-card", {
                            attrs: {
                              title: t.title,
                              link: t.path,
                              image: t.image,
                            },
                          }),
                        ],
                        1
                      );
                    }),
                    0
                  ),
                ]),
                n("h2", { staticClass: "text-center pb-4 text-2xl" }, [
                  t._v("Vegoartiklar"),
                ]),
                n("p", { staticClass: "extratextfield" }, [
                  t._v(t._s(t.extratextfield)),
                ]),
                n("section", { staticClass: "text-center" }, [
                  n(
                    "ul",
                    t._l(t.articles, function (article) {
                      return n(
                        "li",
                        { key: article.path },
                        [
                          n("info-card", {
                            attrs: {
                              title: article.title,
                              link: t.stripIndex(article.path),
                              image: article.image,
                            },
                          }),
                        ],
                        1
                      );
                    }),
                    0
                  ),
                ]),
                t._m(0),
              ],
              1
            );
          },
          r,
          !1,
          null,
          "0c9f8384",
          null
        );
      n.default = component.exports;
      installComponents(component, {
        PageSearch: e(196).default,
        PageTitle: e(82).default,
        InfoCard: e(199).default,
      });
    },
  },
]);
