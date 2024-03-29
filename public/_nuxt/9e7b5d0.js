(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    216: function (t, e, n) {
      var content = n(246);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("78611193", content, !0, { sourceMap: !1 });
    },
    245: function (t, e, n) {
      "use strict";
      n(216);
    },
    246: function (t, e, n) {
      var r = n(3)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        "/*purgecss start ignore*/\n.info-card__image[data-v-8a16feca]{\n    overflow:hidden;\n    height:180px;\n    max-height:50%;\n}\n.info-card__image img[data-v-8a16feca]{\n      -o-object-fit:cover;\n         object-fit:cover\n}\n.info-card__content[data-v-8a16feca]{\n    display:flex;\n    flex:1 1 0%;\n    flex-direction:column;\n    justify-content:center;\n    padding-left:1rem;\n    padding-right:1rem;\n    padding-top:1.5rem;\n    padding-bottom:1.5rem;\n}\n.info-card__content h3[data-v-8a16feca]{\n      font-weight:700;\n      font-family:'Avenir LT Std', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;\n      color:#373737\n}\n.info-card__content .author[data-v-8a16feca]{\n      margin-top:0.25rem;\n      font-size:0.875rem;\n      line-height:1.25rem\n}\n.info-card__link[data-v-8a16feca]{\n    margin-top:1rem;\n    margin-bottom:1rem;\n    display:block;\n    align-self:center;\n    border-radius:0.375rem;\n    padding-left:2rem;\n    padding-right:2rem;\n    padding-top:0.25rem;\n    padding-bottom:0.25rem;\n    font-size:1.125rem;\n    line-height:1.75rem;\n    font-weight:700;\n    --tw-text-opacity:1;\n    color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.info-card__border[data-v-8a16feca],.info-card__link[data-v-8a16feca]{\n    background-color:#5ec19f\n}\n.info-card__border[data-v-8a16feca]{\n    height:1.5em;\n    border-radius:5px\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    297: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(0).a.extend({
          props: {
            title: { type: String, required: !0, default: "" },
            image: { type: String, default: "" },
            author: { type: String, default: "" },
            link: { type: String, default: "" },
            preamble: { type: String, default: "" },
          },
          computed: {
            pubId() {
              return this.image ? this.image.replace(/^\/+/, "") : "";
            },
          },
        }),
        o = (n(245), n(2)),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e(
              "div",
              {
                staticClass:
                  "flex flex-col bg-white rounded-md overflow-hidden items-center pb-0 w-full min-w-full",
              },
              [
                t.link
                  ? e(
                      "nuxt-link",
                      { staticClass: "pt-4 pb-2 px-5", attrs: { to: t.link } },
                      [
                        t.image
                          ? e("client-only", [
                              e(
                                "div",
                                {
                                  staticClass:
                                    "w-48 h-48 overflow-hidden rounded-full",
                                },
                                [
                                  e("app-image", {
                                    attrs: {
                                      publicId: t.pubId,
                                      width: "200",
                                      height: "200",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ])
                          : t._e(),
                      ],
                      1
                    )
                  : t._e(),
                e(
                  "h3",
                  {
                    staticClass:
                      "text-2xl text-left font-bold py-2 w-full pl-10 pr-20",
                  },
                  [
                    e("nuxt-link", { attrs: { to: t.link } }, [
                      t._v(t._s(t.title)),
                    ]),
                  ],
                  1
                ),
                t.preamble
                  ? e(
                      "p",
                      { staticClass: "w-full text-sm pl-10 pr-20 pb-10" },
                      [
                        e("nuxt-link", { attrs: { to: t.link } }, [
                          t._v(t._s(t.preamble)),
                        ]),
                      ],
                      1
                    )
                  : t._e(),
                e(
                  "div",
                  {
                    staticClass:
                      "bg-pink p-3 w-full text-center font-bold rounded-sm",
                  },
                  [
                    t.link
                      ? e(
                          "nuxt-link",
                          {
                            staticClass: "text-white w-full",
                            attrs: { to: t.link },
                          },
                          [t._v("››")]
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
          "8a16feca",
          null
        );
      e.default = component.exports;
      installComponents(component, { AppImage: n(79).default });
    },
  },
]);
