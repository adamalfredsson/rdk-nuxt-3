(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    200: function (n, t, e) {
      var content = e(206);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("b3ca06d2", content, !0, { sourceMap: !1 });
    },
    205: function (n, t, e) {
      "use strict";
      e(200);
    },
    206: function (n, t, e) {
      var r = e(3),
        o = e(80),
        d = e(81),
        l = r(function (i) {
          return i[1];
        }),
        f = o(d);
      l.push([
        n.i,
        "/*purgecss start ignore*/\n.animal-slider-card[data-v-5663ff38]{\n  position:relative;\n  padding-bottom:1rem;\n  font-size:.8em;\n  border-radius:5px;\n  background-color:#fff;\n  text-align:left;\n  line-height:2rem;\n}\n.animal-slider-card h3.title[data-v-5663ff38]{\n    padding:5px 0 0;\n    font-size:1.5rem;\n    font-weight:700;\n    font-family:'Avenir LT Std Heavy', sans-serif;\n    margin:0 auto;\n    text-align:center\n}\n@media (max-width:768px){\n.animal-slider-card h3.title[data-v-5663ff38]{\n      padding-left:0;\n      padding-bottom:0;\n      padding-right:0;\n      padding-top:0\n}\n}\n.animal-slider-card h3.title[data-v-5663ff38]:hover{\n    opacity:.7\n}\n.animal-slider-card h3.title .latin[data-v-5663ff38]{\n      font-weight:200;\n      font-size:1rem;\n      font-family:'Avenir LT Std', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;\n      padding-left:4px\n}\n@media (max-width:768px){\n.animal-slider-card h3.title .latin[data-v-5663ff38]{\n        display:flex;\n        flex-direction:column;\n        justify-content:center;\n        padding-top:2px;\n        padding-left:0;\n        font-style:italic\n}\n}\n.animal-slider-card h3.title .latin[data-v-5663ff38]:before{\n      content:\"\";\n      width:1px;\n      height:21px;\n      background-color:#000;\n      display:inline-block;\n      margin:-4px 9px\n}\n@media (max-width:768px){\n.animal-slider-card h3.title .latin[data-v-5663ff38]:before{\n        display:none\n}\n}\n.animal-slider-card .tags[data-v-5663ff38]{\n    display:inline;\n    margin:0 auto;\n    text-align:center;\n    font-size:1rem;\n}\n.animal-slider-card .tags a[data-v-5663ff38]{\n      color:#5ec19f\n}\n.animal-slider-card .tags a[data-v-5663ff38]:hover{\n      opacity:.7\n}\n.animal-slider-card .image[data-v-5663ff38]{\n    border-radius:5px 5px 0 0;\n    overflow:hidden;\n    -o-object-fit:cover;\n       object-fit:cover\n}\n.animal-slider-card .overlay[data-v-5663ff38]{\n    z-index:10;\n    position:absolute;\n    top:0;\n    right:0;\n    height:120px;\n    width:120px;\n    cursor:pointer;\n    transition:.3s\n}\n.animal-slider-card .overlay:hover .overlay__arrow[data-v-5663ff38]{\n      transform:rotate(135deg) scale(1.2)\n}\n.animal-slider-card .overlay__triangle[data-v-5663ff38]{\n      position:absolute;\n      right:0;\n      top:0;\n      height:0;\n      width:0;\n      border-color:#5ec19f #5ec19f transparent transparent;\n      border-style:solid;\n      border-width:60px;\n      border-radius:0 5px 0 0\n}\n.animal-slider-card .overlay__text[data-v-5663ff38]{\n      right:-18px;\n      top:38%;\n      width:120px;\n      transform:rotate(45deg);\n      font-weight:700;\n      color:#fff;\n      font-family:'Avenir LT Std', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;\n      font-size:1rem\n}\n.animal-slider-card .overlay__arrow[data-v-5663ff38],.animal-slider-card .overlay__text[data-v-5663ff38]{\n      position:absolute\n}\n.animal-slider-card .overlay__arrow[data-v-5663ff38]{\n      top:0;\n      right:0;\n      transform:rotate(135deg);\n      background-image:url(" +
          f +
          ');\n      width:50px;\n      height:50px;\n      background-size:cover;\n      transition:.5s\n}\n.animal-slider-card .text[data-v-5663ff38]{\n    line-height:1.35\n}\n.flip-container[data-v-5663ff38]{\n  perspective:1000px\n}\n.flip-container.flipped .flipper[data-v-5663ff38]{\n  transform:rotateY(-180deg)\n}\n.back[data-v-5663ff38],.flip-container[data-v-5663ff38],.front[data-v-5663ff38]{\n  width:100%\n}\n.flipper[data-v-5663ff38]{\n  position:relative;\n  transform-style:preserve-3d;\n  transition:.4s ease-out;\n}\n@media (min-width: 1024px){\n.flipper.hovered-front[data-v-5663ff38]{\n      transition:.3s ease-out;\n      transform:rotateY(-10deg)\n}\n.flip-container.flipped .flipper.hovered-back[data-v-5663ff38]{\n      transition:.3s ease-out;\n      transform:rotateY(-170deg)\n}\n}\n.flipped .flipper[data-v-5663ff38]{\n    transition:.5s\n}\n.flipper .back[data-v-5663ff38],.flipper .front[data-v-5663ff38]{\n    -webkit-backface-visibility:hidden;\n            backface-visibility:hidden\n}\n.flipper .front[data-v-5663ff38]{\n    transform:rotateY(0deg);\n    z-index:2\n}\n.flipper .back[data-v-5663ff38]{\n    position:absolute;\n    top:0;\n    left:0;\n    height:100%;\n    transform:rotateY(-180deg);\n    background-color:#00ce8f;\n    color:#fff;\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    align-items:center;\n}\n.flipper .back .overlay[data-v-5663ff38]{\n      width:unset;\n      height:unset\n}\n.flipper .back .overlay__arrow[data-v-5663ff38]{\n      transform:rotate(-45deg)\n}\n.facts[data-v-5663ff38]{\n  position:absolute;\n  top:0px;\n  height:100%;\n  overflow:hidden;\n  padding-left:2rem;\n  padding-right:2rem;\n  padding-top:2rem;\n  padding-bottom:2rem;\n  font-size:1rem;\n  line-height:1.5rem;\n  font-weight:700;\n}\n.facts li[data-v-5663ff38]{\n    margin-top:0.5rem\n}\n.facts[data-v-5663ff38]:after{\n  pointer-events:none;\n  position:absolute;\n  bottom:0px;\n  left:0px;\n  height:100%;\n  width:100%;\n  content:"";\n  background:linear-gradient(transparent,#5ec19f 100%)\n}\n.back[data-v-5663ff38]{\n  text-align:center;\n}\n.back a[data-v-5663ff38]{\n    position:absolute;\n    bottom:0px;\n    z-index:10;\n    padding-top:0.75rem;\n    padding-bottom:0.75rem;\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    background-color:transparent;\n    padding-top:0.5rem;\n    padding-bottom:0.5rem;\n    outline:2px solid transparent;\n    outline-offset:2px;\n    margin-top:2rem;\n    margin-bottom:0.5rem;\n    border-radius:9999px;\n    --tw-bg-opacity:1;\n    background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n    font-size:0.75rem;\n    line-height:1rem;\n    font-weight:700;\n    padding:.3em 1em .2em;\n    font-size:1rem;\n    color:#5ec19f\n}\n.back a[data-v-5663ff38]:hover{\n    transform:scale(1.05)\n}\n.content[data-v-5663ff38]{\n  padding:1rem 1.5rem 0;\n  z-index:3;\n  display:flex;\n  flex-direction:column;\n  justify-content:center\n}\n.share[data-v-5663ff38]{\n  font-size:.9rem;\n  padding-bottom:.5rem;\n  opacity:.65\n}\n.share[data-v-5663ff38]:hover{\n  opacity:1\n}\n.share img[data-v-5663ff38]{\n    display:inline;\n    max-width:1.2rem\n}\n\n/*purgecss end ignore*/',
        "",
      ]),
        (l.locals = {}),
        (n.exports = l);
    },
    209: function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(0).a.extend({
          props: { animal: { type: Object, required: !0 } },
          data: () => ({ flipped: !1, hoveredFront: !1, hoveredBack: !1 }),
          computed: {
            pubId() {
              return this.animal.image.replace(/^\/+/, "");
            },
            tags() {
              return this.animal.labels.map((n) => "#".concat(n, " "));
            },
            link() {
              return "djurfakta/".concat(this.animal.slug);
            },
            facts() {
              var n;
              return null === (n = this.animal["facts-block"]) || void 0 === n
                ? void 0
                : n.facts;
            },
            hasFacts() {
              var n;
              return (
                (null === (n = this.facts) || void 0 === n
                  ? void 0
                  : n.length) > 0
              );
            },
          },
          methods: {
            flip() {
              this.flipped = !this.flipped;
            },
          },
        }),
        o = (e(205), e(2)),
        component = Object(o.a)(
          r,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t("div", { staticClass: "animal-slider-card" }, [
              t(
                "div",
                {
                  staticClass: "flip-container",
                  class: { flipped: n.flipped },
                },
                [
                  t(
                    "div",
                    {
                      staticClass: "flipper",
                      class: n.hoveredFront
                        ? "hovered-front"
                        : n.hoveredBack
                        ? "hovered-back"
                        : "",
                    },
                    [
                      t(
                        "div",
                        { staticClass: "front" },
                        [
                          n.hasFacts
                            ? t(
                                "div",
                                {
                                  staticClass: "overlay",
                                  on: {
                                    click: n.flip,
                                    mouseenter: function (t) {
                                      n.hoveredFront = !0;
                                    },
                                    mouseleave: function (t) {
                                      n.hoveredFront = !1;
                                    },
                                  },
                                },
                                [
                                  t("div", {
                                    staticClass: "overlay__triangle",
                                  }),
                                  t("div", { staticClass: "overlay__arrow" }),
                                  t("div", { staticClass: "overlay__text" }, [
                                    n._v("Snabba fakta"),
                                  ]),
                                ]
                              )
                            : n._e(),
                          t("nuxt-link", { attrs: { to: n.link } }, [
                            t(
                              "div",
                              { staticClass: "image aspect-w-16 aspect-h-9" },
                              [
                                t("app-image", {
                                  attrs: {
                                    "public-id": n.pubId,
                                    crop: "fill",
                                    width: "auto",
                                    height: "400",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ],
                        1
                      ),
                      t(
                        "div",
                        { staticClass: "back" },
                        [
                          t(
                            "ul",
                            { staticClass: "facts" },
                            n._l(n.facts, function (e) {
                              return t("li", { key: e }, [n._v(n._s(e))]);
                            }),
                            0
                          ),
                          t("nuxt-link", { attrs: { to: n.link } }, [
                            n._v("mer"),
                          ]),
                          t(
                            "div",
                            {
                              staticClass: "overlay",
                              on: {
                                click: n.flip,
                                mouseenter: function (t) {
                                  n.hoveredBack = !0;
                                },
                                mouseleave: function (t) {
                                  n.hoveredBack = !1;
                                },
                              },
                            },
                            [t("div", { staticClass: "overlay__arrow" })]
                          ),
                        ],
                        1
                      ),
                    ]
                  ),
                ]
              ),
              t("div", { staticClass: "content" }, [
                t(
                  "div",
                  { staticClass: "card__header__title" },
                  [
                    t("nuxt-link", { attrs: { to: n.link } }, [
                      t("h3", { staticClass: "title" }, [
                        n._v(n._s(n.animal.species)),
                        t("span", { staticClass: "latin" }, [
                          n._v(n._s(n.animal.scientificName)),
                        ]),
                      ]),
                    ]),
                  ],
                  1
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          "5663ff38",
          null
        );
      t.default = component.exports;
      installComponents(component, { AppImage: e(79).default });
    },
  },
]);
