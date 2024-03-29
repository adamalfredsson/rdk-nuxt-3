(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    212: function (n, e, t) {
      var content = t(238);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, t(4).default)("368e5bb5", content, !0, { sourceMap: !1 });
    },
    237: function (n, e, t) {
      "use strict";
      t(212);
    },
    238: function (n, e, t) {
      var r = t(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n.info-card__image[data-v-2277ecf3]{\n    overflow:hidden;\n    height:180px;\n    max-height:50%;\n}\n.info-card__image img[data-v-2277ecf3]{\n      -o-object-fit:cover;\n         object-fit:cover\n}\n.info-card__content[data-v-2277ecf3]{\n    display:flex;\n    flex:1 1 0%;\n    flex-direction:column;\n    justify-content:center;\n    padding-left:1rem;\n    padding-right:1rem;\n    padding-top:1.5rem;\n    padding-bottom:1.5rem;\n}\n.info-card__content h3[data-v-2277ecf3]{\n      font-weight:700;\n      font-family:'Avenir LT Std', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;\n      color:#373737\n}\n.info-card__content .author[data-v-2277ecf3]{\n      margin-top:0.25rem;\n      font-size:0.875rem;\n      line-height:1.25rem\n}\n.info-card__link[data-v-2277ecf3]{\n    margin-top:1rem;\n    margin-bottom:1rem;\n    display:block;\n    align-self:center;\n    border-radius:0.375rem;\n    padding-left:2rem;\n    padding-right:2rem;\n    padding-top:0.25rem;\n    padding-bottom:0.25rem;\n    font-size:1.125rem;\n    line-height:1.75rem;\n    font-weight:700;\n    --tw-text-opacity:1;\n    color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.info-card__border[data-v-2277ecf3],.info-card__link[data-v-2277ecf3]{\n    background-color:#5ec19f\n}\n.info-card__border[data-v-2277ecf3]{\n    height:1.5em;\n    border-radius:5px\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    293: function (n, e, t) {
      "use strict";
      t.r(e);
      var r = t(0).a.extend({
          props: {
            title: { type: String, required: !0 },
            image: { type: String, default: "" },
            author: { type: String, default: "" },
            link: { type: String, default: "" },
          },
          computed: {
            pubId() {
              return this.image ? this.image.replace(/^\/+/, "") : "";
            },
          },
        }),
        o = (t(237), t(2)),
        component = Object(o.a)(
          r,
          function () {
            var n = this,
              e = n._self._c;
            n._self._setupProxy;
            return e(
              "div",
              {
                staticClass:
                  "flex flex-col bg-white rounded-md overflow-hidden items-center pb-0 w-full min-w-full",
              },
              [
                n.link
                  ? e(
                      "nuxt-link",
                      { staticClass: "pt-4 pb-2 px-5", attrs: { to: n.link } },
                      [
                        n.image
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
                                      publicId: n.pubId,
                                      width: "200",
                                      height: "200",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ])
                          : n._e(),
                      ],
                      1
                    )
                  : n._e(),
                e(
                  "h3",
                  { staticClass: "text-center font-bold px-2 py-2 w-2/3" },
                  [n._v(n._s(n.title))]
                ),
                e(
                  "div",
                  {
                    staticClass:
                      "bg-pink p-3 w-full text-center font-bold rounded-sm",
                  },
                  [
                    n.link
                      ? e(
                          "nuxt-link",
                          {
                            staticClass: "text-white w-full",
                            attrs: { to: n.link },
                          },
                          [n._v("Lär dig mer")]
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
          "2277ecf3",
          null
        );
      e.default = component.exports;
      installComponents(component, { AppImage: t(79).default });
    },
  },
]);
