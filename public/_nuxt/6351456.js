(window.webpackJsonp = window.webpackJsonp || []).push([
  [28, 9, 15, 23],
  {
    182: function (n, t, e) {
      "use strict";
      function r(n) {
        var path = "/" === n.charAt(0) ? n : "/".concat(n);
        return "https://www.raddadjuren.se".concat(path);
      }
      function l(n) {
        return o(n.substr(7));
      }
      function o(n) {
        return n.endsWith("index") ? n.substr(0, n.length - 6) : n;
      }
      e.d(t, "a", function () {
        return r;
      }),
        e.d(t, "c", function () {
          return l;
        }),
        e.d(t, "b", function () {
          return o;
        });
    },
    184: function (n, t, e) {
      var content = e(191);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("7d532678", content, !0, { sourceMap: !1 });
    },
    185: function (n, t, e) {
      var content = e(195);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("044ed28b", content, !0, { sourceMap: !1 });
    },
    188: function (n, t, e) {
      var content = e(198);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("6c1ade1a", content, !0, { sourceMap: !1 });
    },
    190: function (n, t, e) {
      "use strict";
      e(184);
    },
    191: function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        '/*purgecss start ignore*/\n.tags-list[data-v-80fa6272]{\n  max-width:100%;\n  display:flex;\n  flex-direction:column;\n  flex-wrap:wrap;\n  align-items:center;\n  width:100vw;\n  padding-top:0;\n  margin:0;\n  font-size:1.25rem;\n  line-height:1.4rem;\n  text-align:center;\n}\n.tags-list ul[data-v-80fa6272]{\n    margin:-0.5rem;\n    display:inline-block;\n    padding-top:0;\n    padding-left:0;\n    list-style-type:none;\n}\n.tags-list ul li[data-v-80fa6272]{\n      display:inline-block;\n      padding:0.5rem\n}\n.tags-list ul li:first-child a[data-v-80fa6272]{\n        color:#e6007e!important\n}\n.tags-list ul li:first-child a[data-v-80fa6272]:first-child:before{\n        border-bottom:3px solid #e6007e;\n        border-right:3px solid #e6007e\n}\n.tags-list ul li a[data-v-80fa6272]{\n        display:inline-block;\n        border-radius:9999px;\n        font-weight:700;\n        position:relative;\n        padding:6px 15px 5px 30px;\n        color:#5ec19f;\n        font-size:1rem;\n        background-color:#ffffff;\n        text-align:center;\n        transition:.3s ease;\n}\n@media (min-width: 768px){\n.tags-list ul li a[data-v-80fa6272]{\n          padding-left:35px;\n\n          padding-bottom:8px;\n\n          padding-right:20px;\n\n          padding-top:9px\n}\n}\n.tags-list ul li a[data-v-80fa6272]:after,.tags-list ul li a[data-v-80fa6272]:before{\n        transition:.4s\n}\n.tags-list ul li a[data-v-80fa6272]:before{\n        position:absolute;\n        left:10px;\n        top:11px;\n        content:"";\n        width:10px;\n        height:10px;\n        border-bottom:3px solid #5ec19f;\n        border-right:3px solid #5ec19f;\n        border-radius:2px;\n        transform:rotate(-45deg);\n}\n@media (min-width: 768px){\n.tags-list ul li a[data-v-80fa6272]:before{\n          left:12px;\n\n          top:14px\n}\n}\n.tags-list ul li a[data-v-80fa6272]:hover:before{\n        transform:rotate(-45deg) translateX(2px) translateY(2px)\n}\n.tags-list ul li a[data-v-80fa6272]:hover:after{\n        transform:scaleX(1)\n}\n@media (min-width: 768px){\n.tags-list[data-v-80fa6272]{\n    margin-bottom:2.5em\n}\n}\n.tags-list .btn-more[data-v-80fa6272]{\n    margin-top:2rem;\n    border-radius:9999px;\n    font-weight:700;\n    border:3px solid #ffffff;\n    padding:.3em 1em .2em;\n    font-size:1rem;\n    color:#ffffff\n}\n.tags-list .btn-more[data-v-80fa6272]:hover{\n    transform:scale(1.05)\n}\n@media only screen and (max-width:768px){\n.tags-list .btn-more[data-v-80fa6272]{\n      text-align:left\n}\n}\n\n/*purgecss end ignore*/',
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    192: function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(0).a.extend({
          props: {
            links: {
              type: Array,
              required: !1,
              validator: (n) => n.length > 0,
              default: () => [],
            },
            moreLink: {
              type: Object,
              validator: (n) => !!n.linkText && !!n.url,
              default: () => {},
            },
            external: { type: Boolean, default: !1 },
          },
        }),
        l = (e(190), e(2)),
        component = Object(l.a)(
          r,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t(
              "div",
              { staticClass: "tags-list" },
              [
                t(
                  "ul",
                  n._l(n.links, function (link) {
                    return t(
                      "li",
                      { key: link.linkText.toLowerCase() },
                      [
                        t(
                          "app-link",
                          { staticClass: "link", attrs: { href: link.url } },
                          [n._v(n._s(link.linkText))]
                        ),
                      ],
                      1
                    );
                  }),
                  0
                ),
                n.moreLink
                  ? t(
                      "app-link",
                      {
                        staticClass: "btn-more",
                        attrs: { href: n.moreLink.url },
                      },
                      [n._v(n._s(n.moreLink.linkText))]
                    )
                  : n._e(),
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
      t.default = component.exports;
      installComponents(component, { AppLink: e(14).default });
    },
    194: function (n, t, e) {
      "use strict";
      e(185);
    },
    195: function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n.page-search[data-v-0e2e8289]{\n  margin-top:0px;\n  margin-bottom:0px;\n  display:flex;\n  flex-direction:column-reverse;\n  align-items:center;\n  padding-left:0.5rem;\n  padding-right:0.5rem;\n}\n@media (min-width: 768px){\n.page-search[data-v-0e2e8289]{\n    flex-direction:column\n}\n}\n.page-search .links[data-v-0e2e8289]{\n    margin-top:1rem;\n    margin-bottom:1rem;\n    max-width:768px;\n}\n@media (min-width: 768px){\n.page-search .links[data-v-0e2e8289]{\n      margin-top:0.5rem;\n\n      margin-bottom:0.5rem\n}\n}\n.page-search .search[data-v-0e2e8289]{\n    width:100%\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    196: function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(0).a.extend({
          props: {
            links: { type: Array, default: () => [] },
            moreLink: {
              type: Object,
              validator: (n) => !!n.linkText && !!n.url,
              default: () => {},
            },
          },
        }),
        l = (e(194), e(2)),
        component = Object(l.a)(
          r,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t(
              "section",
              { staticClass: "page-search" },
              [
                t("search-input", { staticClass: "search" }),
                t("tags-list", {
                  staticClass: "links",
                  attrs: {
                    links: n.links && n.links.length > 0 ? n.links : null,
                    moreLink: n.moreLink,
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
      t.default = component.exports;
      installComponents(component, {
        SearchInput: e(32).default,
        TagsList: e(192).default,
      });
    },
    197: function (n, t, e) {
      "use strict";
      e(188);
    },
    198: function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n.info-card[data-v-11df0678]{\n  display:flex;\n  flex-direction:column;\n  overflow:hidden;\n  border-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n  min-height:340px;\n}\n.info-card__image[data-v-11df0678]{\n    overflow:hidden;\n    height:180px;\n    max-height:50%;\n}\n.info-card__image img[data-v-11df0678]{\n      -o-object-fit:cover;\n         object-fit:cover\n}\n.info-card__content[data-v-11df0678]{\n    display:flex;\n    flex:1 1 0%;\n    flex-direction:column;\n    justify-content:center;\n    padding-left:1rem;\n    padding-right:1rem;\n    padding-top:1.5rem;\n    padding-bottom:1.5rem;\n}\n.info-card__content h3[data-v-11df0678]{\n      font-weight:700;\n      font-family:'Avenir LT Std', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;\n      color:#373737\n}\n.info-card__content .author[data-v-11df0678]{\n      margin-top:0.25rem;\n      font-size:0.875rem;\n      line-height:1.25rem\n}\n.info-card__link[data-v-11df0678]{\n    margin-top:1rem;\n    margin-bottom:1rem;\n    display:block;\n    align-self:center;\n    border-radius:0.375rem;\n    padding-left:2rem;\n    padding-right:2rem;\n    padding-top:0.25rem;\n    padding-bottom:0.25rem;\n    font-size:1.125rem;\n    line-height:1.75rem;\n    font-weight:700;\n    --tw-text-opacity:1;\n    color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.info-card__border[data-v-11df0678],.info-card__link[data-v-11df0678]{\n    background-color:#5ec19f\n}\n.info-card__border[data-v-11df0678]{\n    height:1.5em;\n    border-radius:5px\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    199: function (n, t, e) {
      "use strict";
      e.r(t);
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
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t(
              "div",
              { staticClass: "info-card" },
              [
                n.image
                  ? t("client-only", [
                      t(
                        "div",
                        { staticClass: "info-card__image" },
                        [
                          t("app-image", {
                            attrs: {
                              publicId: n.pubId,
                              width: "auto",
                              height: "260",
                            },
                          }),
                        ],
                        1
                      ),
                    ])
                  : n._e(),
                t("div", { staticClass: "info-card__content" }, [
                  t("h3", [n._v(n._s(n.title))]),
                  n.author
                    ? t("p", { staticClass: "author" }, [
                        n._v("Text av " + n._s(n.author)),
                      ])
                    : n._e(),
                ]),
                n.link
                  ? t(
                      "app-link",
                      {
                        staticClass: "info-card__link themed",
                        attrs: { href: n.link },
                      },
                      [n._v("Läs")]
                    )
                  : t("div", { staticClass: "info-card__border themed" }),
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
      t.default = component.exports;
      installComponents(component, {
        AppImage: e(79).default,
        AppLink: e(14).default,
      });
    },
    258: function (n, t, e) {
      var content = e(308);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("56f63a39", content, !0, { sourceMap: !1 });
    },
    307: function (n, t, e) {
      "use strict";
      e(258);
    },
    308: function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n.page-hjalp-djuren .title[data-v-45ff43cb] h2{\n      background-color:#fda87f\n}\n.page-hjalp-djuren ul[data-v-45ff43cb]{\n    margin-left:auto;\n    margin-right:auto;\n    display:grid;\n    width:100%;\n    max-width:1200px;\n    grid-template-columns:repeat(1, minmax(0, 1fr));\n    gap:1rem;\n    padding-left:1rem;\n    padding-right:1rem;\n}\n@media (min-width: 768px){\n.page-hjalp-djuren ul[data-v-45ff43cb]{\n      grid-template-columns:repeat(3, minmax(0, 1fr))\n}\n}\n.page-hjalp-djuren ul li[data-v-45ff43cb]{\n      margin-left:auto;\n      margin-right:auto;\n      width:100%;\n      max-width:400px\n}\n.page-hjalp-djuren ul li[data-v-45ff43cb] .themed{\n      background-color:#fda87f\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    396: function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(0),
        l = e(182);
      function o(n, t, e, r, l, o, d) {
        try {
          var c = n[o](d),
            f = c.value;
        } catch (n) {
          return void e(n);
        }
        c.done ? t(f) : Promise.resolve(f).then(r, l);
      }
      var d = r.a.extend({
          asyncData(n) {
            return ((t = function* () {
              var { $content: t, payload: e } = n,
                {
                  title: title,
                  links: r,
                  preamble: l,
                  metadescription: o,
                } = e || (yield t("portal-page/hjalp-djuren").fetch());
              return {
                title: title,
                links: r,
                preamble: l,
                articles: yield t("hjalp-djuren")
                  .where({ list: !0 })
                  .only(["title", "path", "image"])
                  .fetch(),
                metadescription: o,
              };
            }),
            function () {
              var n = this,
                e = arguments;
              return new Promise(function (r, l) {
                var d = t.apply(n, e);
                function c(n) {
                  o(d, r, l, c, f, "next", n);
                }
                function f(n) {
                  o(d, r, l, c, f, "throw", n);
                }
                c(void 0);
              });
            })();
            var t;
          },
          data: () => ({
            title: "Du kan rädda djuren!",
            metadescription: null,
            preamble: null,
            articles: [],
            links: [],
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
                  href: Object(l.a)("/hjalp-djuren"),
                },
              ],
              meta: [
                {
                  hid: "og:url",
                  property: "og:url",
                  content: "https://www.raddadjuren.se/hjalp-djuren",
                },
                {
                  hid: "og:title",
                  property: "og:title",
                  content: this.title
                    ? "".concat(this.title, " | Rädda Djuren-klubben")
                    : "Rädda Djuren-klubben",
                },
                {
                  hid: "title",
                  property: "title",
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
        }),
        c = d,
        f = (e(307), e(2)),
        component = Object(f.a)(
          c,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t(
              "div",
              { staticClass: "page-hjalp-djuren" },
              [
                t("page-search", {
                  staticClass: "search",
                  attrs: { links: n.links },
                }),
                t("page-title", {
                  staticClass: "title",
                  attrs: { title: n.title, preamble: n.preamble },
                }),
                t("section", [
                  t(
                    "ul",
                    n._l(n.articles, function (article) {
                      return t(
                        "li",
                        { key: article.path },
                        [
                          t("info-card", {
                            attrs: {
                              title: article.title,
                              link: article.path,
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
              ],
              1
            );
          },
          [],
          !1,
          null,
          "45ff43cb",
          null
        );
      t.default = component.exports;
      installComponents(component, {
        PageSearch: e(196).default,
        PageTitle: e(82).default,
        InfoCard: e(199).default,
      });
    },
  },
]);
