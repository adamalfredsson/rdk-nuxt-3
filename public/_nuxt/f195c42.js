(window.webpackJsonp = window.webpackJsonp || []).push([
  [16, 17],
  {
    202: function (n, e, t) {
      var content = t(220);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, t(4).default)("47661a37", content, !0, { sourceMap: !1 });
    },
    218: function (n, e, t) {
      var content = t(250);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, t(4).default)("6a25c18a", content, !0, { sourceMap: !1 });
    },
    219: function (n, e, t) {
      "use strict";
      t(202);
    },
    220: function (n, e, t) {
      var r = t(3),
        d = t(80),
        o = t(81),
        c = r(function (i) {
          return i[1];
        }),
        f = d(o);
      c.push([
        n.i,
        "/*purgecss start ignore*/\n.recipe-slider-card[data-v-a01fbfdc]{\n  position:relative;\n  padding-bottom:1rem;\n  font-size:.8em;\n  border-radius:5px;\n  background-color:#fff;\n  text-align:left;\n  line-height:2rem;\n}\n.recipe-slider-card h4.title[data-v-a01fbfdc]{\n    padding:5px 0 0;\n    font-size:1 rem;\n    font-weight:700;\n    font-family:'Avenir LT Std Heavy', sans-serif;\n    margin:0 auto;\n    text-align:center\n}\n@media (max-width:768px){\n.recipe-slider-card h4.title[data-v-a01fbfdc]{\n      padding-left:0;\n      padding-bottom:0;\n      padding-right:0;\n      padding-top:0\n}\n}\n.recipe-slider-card h4.title[data-v-a01fbfdc]:hover{\n    opacity:.7\n}\n.recipe-slider-card h4.title .latin[data-v-a01fbfdc]{\n      font-weight:200;\n      font-size:1rem;\n      font-family:'Avenir LT Std', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;\n      padding-left:4px\n}\n@media (max-width:768px){\n.recipe-slider-card h4.title .latin[data-v-a01fbfdc]{\n        display:flex;\n        flex-direction:column;\n        justify-content:center;\n        padding-top:2px;\n        padding-left:0;\n        font-style:italic\n}\n}\n.recipe-slider-card h4.title .latin[data-v-a01fbfdc]:before{\n      content:\"\";\n      width:1px;\n      height:21px;\n      background-color:#000;\n      display:inline-block;\n      margin:-4px 9px\n}\n@media (max-width:768px){\n.recipe-slider-card h4.title .latin[data-v-a01fbfdc]:before{\n        display:none\n}\n}\n.recipe-slider-card .tags[data-v-a01fbfdc]{\n    display:inline;\n    margin:0 auto;\n    text-align:center;\n    font-size:1rem;\n}\n.recipe-slider-card .tags a[data-v-a01fbfdc]{\n      color:#5ec19f\n}\n.recipe-slider-card .tags a[data-v-a01fbfdc]:hover{\n      opacity:.7\n}\n.recipe-slider-card .image[data-v-a01fbfdc]{\n    border-radius:5px 5px 0 0;\n    overflow:hidden;\n    -o-object-fit:cover;\n       object-fit:cover\n}\n.recipe-slider-card .overlay[data-v-a01fbfdc]{\n    position:absolute;\n    top:0;\n    right:0;\n    height:120px;\n    width:120px;\n    cursor:pointer;\n    transition:.3s\n}\n.recipe-slider-card .overlay:hover .overlay__arrow[data-v-a01fbfdc]{\n      transform:rotate(135deg) scale(1.2)\n}\n.recipe-slider-card .overlay__triangle[data-v-a01fbfdc]{\n      position:absolute;\n      right:0;\n      top:0;\n      height:0;\n      width:0;\n      border-color:#5ec19f #5ec19f transparent transparent;\n      border-style:solid;\n      border-width:60px;\n      border-radius:0 5px 0 0\n}\n.recipe-slider-card .overlay__text[data-v-a01fbfdc]{\n      right:-18px;\n      top:38%;\n      width:120px;\n      transform:rotate(45deg);\n      font-weight:700;\n      color:#fff;\n      font-family:'Avenir LT Std', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;\n      font-size:1rem\n}\n.recipe-slider-card .overlay__arrow[data-v-a01fbfdc],.recipe-slider-card .overlay__text[data-v-a01fbfdc]{\n      position:absolute\n}\n.recipe-slider-card .overlay__arrow[data-v-a01fbfdc]{\n      top:0;\n      right:0;\n      transform:rotate(135deg);\n      background-image:url(" +
          f +
          ');\n      width:50px;\n      height:50px;\n      background-size:cover;\n      transition:.5s\n}\n.recipe-slider-card .text[data-v-a01fbfdc]{\n    line-height:1.35\n}\n.flip-container[data-v-a01fbfdc]{\n  perspective:1000px\n}\n.flip-container.flipped .flipper[data-v-a01fbfdc]{\n  transform:rotateY(-180deg)\n}\n.back[data-v-a01fbfdc],.flip-container[data-v-a01fbfdc],.front[data-v-a01fbfdc]{\n  width:100%\n}\n.flipper[data-v-a01fbfdc]{\n  position:relative;\n  transform-style:preserve-3d;\n  transition:.4s ease-out;\n}\n@media (min-width: 1024px){\n.flipper.hovered-front[data-v-a01fbfdc]{\n      transition:.3s ease-out;\n      transform:rotateY(-10deg)\n}\n.flip-container.flipped .flipper.hovered-back[data-v-a01fbfdc]{\n      transition:.3s ease-out;\n      transform:rotateY(-170deg)\n}\n}\n.flipped .flipper[data-v-a01fbfdc]{\n    transition:.5s\n}\n.flipper .back[data-v-a01fbfdc],.flipper .front[data-v-a01fbfdc]{\n    -webkit-backface-visibility:hidden;\n            backface-visibility:hidden\n}\n.flipper .front[data-v-a01fbfdc]{\n    transform:rotateY(0deg);\n    z-index:2\n}\n.flipper .back[data-v-a01fbfdc]{\n    position:absolute;\n    top:0;\n    left:0;\n    height:100%;\n    transform:rotateY(-180deg);\n    background-color:#00ce8f;\n    color:#fff;\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    align-items:center;\n}\n.flipper .back .overlay[data-v-a01fbfdc]{\n      width:unset;\n      height:unset\n}\n.flipper .back .overlay__arrow[data-v-a01fbfdc]{\n      transform:rotate(-45deg)\n}\n.facts[data-v-a01fbfdc]{\n  position:absolute;\n  top:0px;\n  height:100%;\n  overflow:hidden;\n  padding-left:2rem;\n  padding-right:2rem;\n  padding-top:2rem;\n  padding-bottom:2rem;\n  font-size:1rem;\n  line-height:1.5rem;\n  font-weight:700;\n}\n.facts li[data-v-a01fbfdc]{\n    margin-top:0.5rem\n}\n.facts[data-v-a01fbfdc]:after{\n  pointer-events:none;\n  position:absolute;\n  bottom:0px;\n  left:0px;\n  height:100%;\n  width:100%;\n  content:"";\n  background:linear-gradient(transparent,#5ec19f 100%)\n}\n.back[data-v-a01fbfdc]{\n  text-align:center;\n}\n.back a[data-v-a01fbfdc]{\n    position:absolute;\n    bottom:0px;\n    z-index:10;\n    padding-top:0.75rem;\n    padding-bottom:0.75rem;\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    background-color:transparent;\n    padding-top:0.5rem;\n    padding-bottom:0.5rem;\n    outline:2px solid transparent;\n    outline-offset:2px;\n    margin-top:2rem;\n    margin-bottom:0.5rem;\n    border-radius:9999px;\n    --tw-bg-opacity:1;\n    background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n    font-size:0.75rem;\n    line-height:1rem;\n    font-weight:700;\n    padding:.3em 1em .2em;\n    font-size:1rem;\n    color:#5ec19f\n}\n.back a[data-v-a01fbfdc]:hover{\n    transform:scale(1.05)\n}\n.content[data-v-a01fbfdc]{\n  padding:1rem 1.5rem 0;\n  z-index:3;\n  display:flex;\n  flex-direction:column;\n  justify-content:center\n}\n.share[data-v-a01fbfdc]{\n  font-size:.9rem;\n  padding-bottom:.5rem;\n  opacity:.65\n}\n.share[data-v-a01fbfdc]:hover{\n  opacity:1\n}\n.share img[data-v-a01fbfdc]{\n    display:inline;\n    max-width:1.2rem\n}\n\n/*purgecss end ignore*/',
        "",
      ]),
        (c.locals = {}),
        (n.exports = c);
    },
    227: function (n, e, t) {
      "use strict";
      t.r(e);
      var r = t(0).a.extend({
          props: { recipe: { type: Object, required: !0 } },
          computed: {
            pubId() {
              return this.recipe.image.replace(/^\/+/, "");
            },
            link() {
              return "/vego/recept/".concat(this.recipe.slug);
            },
          },
        }),
        d = (t(219), t(2)),
        component = Object(d.a)(
          r,
          function () {
            var n = this,
              e = n._self._c;
            n._self._setupProxy;
            return e("div", { staticClass: "recipe-slider-card" }, [
              e("div", { staticClass: "flip-container" }, [
                e("div", { staticClass: "flipper" }, [
                  e(
                    "div",
                    { staticClass: "front" },
                    [
                      e("nuxt-link", { attrs: { to: n.link } }, [
                        e(
                          "div",
                          { staticClass: "image aspect-w-16 aspect-h-9" },
                          [
                            e(
                              "client-only",
                              [
                                e("app-image", {
                                  attrs: {
                                    "public-id": n.pubId,
                                    width: "auto",
                                    height: "400",
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ]),
                    ],
                    1
                  ),
                ]),
              ]),
              e("div", { staticClass: "content" }, [
                e(
                  "div",
                  { staticClass: "card__header__title" },
                  [
                    e("nuxt-link", { attrs: { to: n.link } }, [
                      e("h4", { staticClass: "title" }, [
                        n._v(n._s(n.recipe.title)),
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
          "a01fbfdc",
          null
        );
      e.default = component.exports;
      installComponents(component, { AppImage: t(79).default });
    },
    249: function (n, e, t) {
      "use strict";
      t(218);
    },
    250: function (n, e, t) {
      var r = t(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n.w-cell[data-v-84293c34]{\n  width:90%;\n}\n@media (min-width: 1024px){\n.w-cell[data-v-84293c34]{\n    width:100%\n}\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    299: function (n, e, t) {
      "use strict";
      t.r(e);
      function r(n, e, t, r, d, o, c) {
        try {
          var f = n[o](c),
            l = f.value;
        } catch (n) {
          return void t(n);
        }
        f.done ? e(l) : Promise.resolve(l).then(r, d);
      }
      var d = t(0).a.extend({
          props: { recipes: { default: null, type: Array } },
          data: () => ({ tagrecipes: [] }),
          fetch() {
            var n,
              e = this;
            return ((n = function* () {
              e.tagrecipes = yield e
                .$content("vego/recept")
                .where({ recipeLabels: { $contains: "slider" } })
                .sortBy("title", "asc")
                .fetch();
            }),
            function () {
              var e = this,
                t = arguments;
              return new Promise(function (d, o) {
                var c = n.apply(e, t);
                function f(n) {
                  r(c, d, o, f, l, "next", n);
                }
                function l(n) {
                  r(c, d, o, f, l, "throw", n);
                }
                f(void 0);
              });
            })();
          },
          computed: {
            recipeList() {
              var n;
              return null !== (n = this.recipes) && void 0 !== n
                ? n
                : this.tagrecipes;
            },
          },
          methods: {
            onResize() {
              this.$refs.swiper.$flickity.resize();
            },
          },
        }),
        o = d,
        c = (t(249), t(2)),
        component = Object(c.a)(
          o,
          function () {
            var n = this,
              e = n._self._c;
            n._self._setupProxy;
            return e(
              "div",
              [
                n.recipeList.length > 0
                  ? e(
                      "slider",
                      {
                        ref: "swiper",
                        staticClass: "mb-8",
                        on: { init: n.onResize },
                      },
                      n._l(n.recipeList, function (n) {
                        return e("recipe-slider-card", {
                          key: n.objectID,
                          staticClass: "w-cell mx-1 md_mx-2 lg_mx-8",
                          attrs: { recipe: n },
                        });
                      }),
                      1
                    )
                  : n._e(),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "84293c34",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        RecipeSliderCard: t(227).default,
        Slider: t(83).default,
      });
    },
  },
]);
