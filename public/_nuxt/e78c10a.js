(window.webpackJsonp = window.webpackJsonp || []).push([
  [37, 13, 16, 17],
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
    202: function (n, t, e) {
      var content = e(220);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("47661a37", content, !0, { sourceMap: !1 });
    },
    218: function (n, t, e) {
      var content = e(250);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("6a25c18a", content, !0, { sourceMap: !1 });
    },
    219: function (n, t, e) {
      "use strict";
      e(202);
    },
    220: function (n, t, e) {
      var r = e(3),
        o = e(80),
        c = e(81),
        d = r(function (i) {
          return i[1];
        }),
        l = o(c);
      d.push([
        n.i,
        "/*purgecss start ignore*/\n.recipe-slider-card[data-v-a01fbfdc]{\n  position:relative;\n  padding-bottom:1rem;\n  font-size:.8em;\n  border-radius:5px;\n  background-color:#fff;\n  text-align:left;\n  line-height:2rem;\n}\n.recipe-slider-card h4.title[data-v-a01fbfdc]{\n    padding:5px 0 0;\n    font-size:1 rem;\n    font-weight:700;\n    font-family:'Avenir LT Std Heavy', sans-serif;\n    margin:0 auto;\n    text-align:center\n}\n@media (max-width:768px){\n.recipe-slider-card h4.title[data-v-a01fbfdc]{\n      padding-left:0;\n      padding-bottom:0;\n      padding-right:0;\n      padding-top:0\n}\n}\n.recipe-slider-card h4.title[data-v-a01fbfdc]:hover{\n    opacity:.7\n}\n.recipe-slider-card h4.title .latin[data-v-a01fbfdc]{\n      font-weight:200;\n      font-size:1rem;\n      font-family:'Avenir LT Std', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;\n      padding-left:4px\n}\n@media (max-width:768px){\n.recipe-slider-card h4.title .latin[data-v-a01fbfdc]{\n        display:flex;\n        flex-direction:column;\n        justify-content:center;\n        padding-top:2px;\n        padding-left:0;\n        font-style:italic\n}\n}\n.recipe-slider-card h4.title .latin[data-v-a01fbfdc]:before{\n      content:\"\";\n      width:1px;\n      height:21px;\n      background-color:#000;\n      display:inline-block;\n      margin:-4px 9px\n}\n@media (max-width:768px){\n.recipe-slider-card h4.title .latin[data-v-a01fbfdc]:before{\n        display:none\n}\n}\n.recipe-slider-card .tags[data-v-a01fbfdc]{\n    display:inline;\n    margin:0 auto;\n    text-align:center;\n    font-size:1rem;\n}\n.recipe-slider-card .tags a[data-v-a01fbfdc]{\n      color:#5ec19f\n}\n.recipe-slider-card .tags a[data-v-a01fbfdc]:hover{\n      opacity:.7\n}\n.recipe-slider-card .image[data-v-a01fbfdc]{\n    border-radius:5px 5px 0 0;\n    overflow:hidden;\n    -o-object-fit:cover;\n       object-fit:cover\n}\n.recipe-slider-card .overlay[data-v-a01fbfdc]{\n    position:absolute;\n    top:0;\n    right:0;\n    height:120px;\n    width:120px;\n    cursor:pointer;\n    transition:.3s\n}\n.recipe-slider-card .overlay:hover .overlay__arrow[data-v-a01fbfdc]{\n      transform:rotate(135deg) scale(1.2)\n}\n.recipe-slider-card .overlay__triangle[data-v-a01fbfdc]{\n      position:absolute;\n      right:0;\n      top:0;\n      height:0;\n      width:0;\n      border-color:#5ec19f #5ec19f transparent transparent;\n      border-style:solid;\n      border-width:60px;\n      border-radius:0 5px 0 0\n}\n.recipe-slider-card .overlay__text[data-v-a01fbfdc]{\n      right:-18px;\n      top:38%;\n      width:120px;\n      transform:rotate(45deg);\n      font-weight:700;\n      color:#fff;\n      font-family:'Avenir LT Std', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;\n      font-size:1rem\n}\n.recipe-slider-card .overlay__arrow[data-v-a01fbfdc],.recipe-slider-card .overlay__text[data-v-a01fbfdc]{\n      position:absolute\n}\n.recipe-slider-card .overlay__arrow[data-v-a01fbfdc]{\n      top:0;\n      right:0;\n      transform:rotate(135deg);\n      background-image:url(" +
          l +
          ');\n      width:50px;\n      height:50px;\n      background-size:cover;\n      transition:.5s\n}\n.recipe-slider-card .text[data-v-a01fbfdc]{\n    line-height:1.35\n}\n.flip-container[data-v-a01fbfdc]{\n  perspective:1000px\n}\n.flip-container.flipped .flipper[data-v-a01fbfdc]{\n  transform:rotateY(-180deg)\n}\n.back[data-v-a01fbfdc],.flip-container[data-v-a01fbfdc],.front[data-v-a01fbfdc]{\n  width:100%\n}\n.flipper[data-v-a01fbfdc]{\n  position:relative;\n  transform-style:preserve-3d;\n  transition:.4s ease-out;\n}\n@media (min-width: 1024px){\n.flipper.hovered-front[data-v-a01fbfdc]{\n      transition:.3s ease-out;\n      transform:rotateY(-10deg)\n}\n.flip-container.flipped .flipper.hovered-back[data-v-a01fbfdc]{\n      transition:.3s ease-out;\n      transform:rotateY(-170deg)\n}\n}\n.flipped .flipper[data-v-a01fbfdc]{\n    transition:.5s\n}\n.flipper .back[data-v-a01fbfdc],.flipper .front[data-v-a01fbfdc]{\n    -webkit-backface-visibility:hidden;\n            backface-visibility:hidden\n}\n.flipper .front[data-v-a01fbfdc]{\n    transform:rotateY(0deg);\n    z-index:2\n}\n.flipper .back[data-v-a01fbfdc]{\n    position:absolute;\n    top:0;\n    left:0;\n    height:100%;\n    transform:rotateY(-180deg);\n    background-color:#00ce8f;\n    color:#fff;\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    align-items:center;\n}\n.flipper .back .overlay[data-v-a01fbfdc]{\n      width:unset;\n      height:unset\n}\n.flipper .back .overlay__arrow[data-v-a01fbfdc]{\n      transform:rotate(-45deg)\n}\n.facts[data-v-a01fbfdc]{\n  position:absolute;\n  top:0px;\n  height:100%;\n  overflow:hidden;\n  padding-left:2rem;\n  padding-right:2rem;\n  padding-top:2rem;\n  padding-bottom:2rem;\n  font-size:1rem;\n  line-height:1.5rem;\n  font-weight:700;\n}\n.facts li[data-v-a01fbfdc]{\n    margin-top:0.5rem\n}\n.facts[data-v-a01fbfdc]:after{\n  pointer-events:none;\n  position:absolute;\n  bottom:0px;\n  left:0px;\n  height:100%;\n  width:100%;\n  content:"";\n  background:linear-gradient(transparent,#5ec19f 100%)\n}\n.back[data-v-a01fbfdc]{\n  text-align:center;\n}\n.back a[data-v-a01fbfdc]{\n    position:absolute;\n    bottom:0px;\n    z-index:10;\n    padding-top:0.75rem;\n    padding-bottom:0.75rem;\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    background-color:transparent;\n    padding-top:0.5rem;\n    padding-bottom:0.5rem;\n    outline:2px solid transparent;\n    outline-offset:2px;\n    margin-top:2rem;\n    margin-bottom:0.5rem;\n    border-radius:9999px;\n    --tw-bg-opacity:1;\n    background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n    font-size:0.75rem;\n    line-height:1rem;\n    font-weight:700;\n    padding:.3em 1em .2em;\n    font-size:1rem;\n    color:#5ec19f\n}\n.back a[data-v-a01fbfdc]:hover{\n    transform:scale(1.05)\n}\n.content[data-v-a01fbfdc]{\n  padding:1rem 1.5rem 0;\n  z-index:3;\n  display:flex;\n  flex-direction:column;\n  justify-content:center\n}\n.share[data-v-a01fbfdc]{\n  font-size:.9rem;\n  padding-bottom:.5rem;\n  opacity:.65\n}\n.share[data-v-a01fbfdc]:hover{\n  opacity:1\n}\n.share img[data-v-a01fbfdc]{\n    display:inline;\n    max-width:1.2rem\n}\n\n/*purgecss end ignore*/',
        "",
      ]),
        (d.locals = {}),
        (n.exports = d);
    },
    227: function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(0).a.extend({
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
        o = (e(219), e(2)),
        component = Object(o.a)(
          r,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t("div", { staticClass: "recipe-slider-card" }, [
              t("div", { staticClass: "flip-container" }, [
                t("div", { staticClass: "flipper" }, [
                  t(
                    "div",
                    { staticClass: "front" },
                    [
                      t("nuxt-link", { attrs: { to: n.link } }, [
                        t(
                          "div",
                          { staticClass: "image aspect-w-16 aspect-h-9" },
                          [
                            t(
                              "client-only",
                              [
                                t("app-image", {
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
              t("div", { staticClass: "content" }, [
                t(
                  "div",
                  { staticClass: "card__header__title" },
                  [
                    t("nuxt-link", { attrs: { to: n.link } }, [
                      t("h4", { staticClass: "title" }, [
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
      t.default = component.exports;
      installComponents(component, { AppImage: e(79).default });
    },
    249: function (n, t, e) {
      "use strict";
      e(218);
    },
    250: function (n, t, e) {
      var r = e(3)(function (i) {
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
    279: function (n, t, e) {
      var content = e(345);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("9999377c", content, !0, { sourceMap: !1 });
    },
    299: function (n, t, e) {
      "use strict";
      e.r(t);
      function r(n, t, e, r, o, c, d) {
        try {
          var l = n[c](d),
            f = l.value;
        } catch (n) {
          return void e(n);
        }
        l.done ? t(f) : Promise.resolve(f).then(r, o);
      }
      var o = e(0).a.extend({
          props: { recipes: { default: null, type: Array } },
          data: () => ({ tagrecipes: [] }),
          fetch() {
            var n,
              t = this;
            return ((n = function* () {
              t.tagrecipes = yield t
                .$content("vego/recept")
                .where({ recipeLabels: { $contains: "slider" } })
                .sortBy("title", "asc")
                .fetch();
            }),
            function () {
              var t = this,
                e = arguments;
              return new Promise(function (o, c) {
                var d = n.apply(t, e);
                function l(n) {
                  r(d, o, c, l, f, "next", n);
                }
                function f(n) {
                  r(d, o, c, l, f, "throw", n);
                }
                l(void 0);
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
        c = o,
        d = (e(249), e(2)),
        component = Object(d.a)(
          c,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t(
              "div",
              [
                n.recipeList.length > 0
                  ? t(
                      "slider",
                      {
                        ref: "swiper",
                        staticClass: "mb-8",
                        on: { init: n.onResize },
                      },
                      n._l(n.recipeList, function (n) {
                        return t("recipe-slider-card", {
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
      t.default = component.exports;
      installComponents(component, {
        RecipeSliderCard: e(227).default,
        Slider: e(83).default,
      });
    },
    344: function (n, t, e) {
      "use strict";
      e(279);
    },
    345: function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n.page-front[data-v-6042ec11]{\n  margin-bottom:5rem;\n}\n.page-front h1[data-v-6042ec11]{\n    font-size:2.25rem;\n    line-height:2.5rem;\n    font-weight:800;\n    --tw-text-opacity:1;\n    color:rgba(0, 0, 0, var(--tw-text-opacity))\n}\n.page-front .byline[data-v-6042ec11]{\n    margin-top:2rem;\n    border-bottom-width:2px;\n    font-size:0.875rem;\n    line-height:1.25rem;\n    font-weight:700\n}\n.page-front .preamble[data-v-6042ec11]{\n    margin-top:2rem;\n    font-size:1.25rem;\n    line-height:1.75rem;\n    font-weight:700;\n    line-height:2rem\n}\n.page-front[data-v-6042ec11] blockquote{\n  background-color:#38AA83\n}\n.page-front section.sidebar-section[data-v-6042ec11]{\n    margin:0px;\n    margin-bottom:2rem;\n}\n.page-front section.sidebar-section h2[data-v-6042ec11]{\n      padding-top:1rem;\n      padding-bottom:1rem;\n      font-size:1.5rem;\n      line-height:2rem;\n      font-weight:700\n}\n.page-front section.sidebar-section .block[data-v-6042ec11]{\n      overflow:hidden;\n      border-radius:0.375rem;\n}\n.page-front section.sidebar-section .block h2[data-v-6042ec11]{\n        --tw-bg-opacity:1;\n        background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n        text-align:center\n}\n.page-front section.sidebar-section .block__content[data-v-6042ec11]{\n        padding-left:1rem;\n        padding-right:1rem;\n        padding-top:1rem;\n        padding-bottom:1rem\n}\n.page-front section.sidebar-section.more .block[data-v-6042ec11]{\n      background-color:#38AA83;\n}\n.page-front section.sidebar-section.more .block h2[data-v-6042ec11]{\n        color:#38AA83\n}\n.page-front section.sidebar-section.more .block__content ul[data-v-6042ec11]{\n          margin-bottom:1rem;\n}\n.page-front section.sidebar-section.more .block__content ul li[data-v-6042ec11]{\n            margin-top:1rem;\n            text-align:center;\n}\n.page-front section.sidebar-section.more .block__content ul li a[data-v-6042ec11]{\n              --tw-text-opacity:1;\n              color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.page-front section.sidebar-section.more .block__content ul li a[data-v-6042ec11]:hover{\n              opacity:.7\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    404: function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(0),
        o = e(182);
      function c(n, t, e, r, o, c, d) {
        try {
          var l = n[c](d),
            f = l.value;
        } catch (n) {
          return void e(n);
        }
        l.done ? t(f) : Promise.resolve(f).then(r, o);
      }
      var d = r.a.extend({
          asyncData(n) {
            return ((t = function* () {
              var { $content: t, params: e, payload: r } = n;
              return {
                article: r || (yield t("vego/recept/".concat(e.slug)).fetch()),
                moreArticles: yield t("vego/recept")
                  .only(["title", "path", "recipeLabels"])
                  .fetch(),
              };
            }),
            function () {
              var n = this,
                e = arguments;
              return new Promise(function (r, o) {
                var d = t.apply(n, e);
                function l(n) {
                  c(d, r, o, l, f, "next", n);
                }
                function f(n) {
                  c(d, r, o, l, f, "throw", n);
                }
                l(void 0);
              });
            })();
            var t;
          },
          data: () => ({ article: null, moreArticles: [] }),
          head() {
            var n, t, e, r, c, d, l, f, m;
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
                    "/vego/".concat(
                      null === (t = this.article) || void 0 === t
                        ? void 0
                        : t.slug
                    )
                  ),
                },
              ],
              meta: [
                {
                  hid: "og:url",
                  property: "og:url",
                  content: "https://www.raddadjuren.se/vego/".concat(
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
                        null === (d = this.article) || void 0 === d
                          ? void 0
                          : d.preamble
                      )
                    ? this.article.preamble
                    : "",
                },
                {
                  hid: "og:description",
                  property: "og:description",
                  content: (
                    null === (l = this.article) || void 0 === l
                      ? void 0
                      : l.metadescription
                  )
                    ? this.article.metadescription
                    : (
                        null === (f = this.article) || void 0 === f
                          ? void 0
                          : f.preamble
                      )
                    ? this.article.preamble
                    : "",
                },
                {
                  hid: "og:image",
                  property: "og:image",
                  content: (
                    null === (m = this.article) || void 0 === m
                      ? void 0
                      : m.image
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
            tags() {
              var n;
              return null === (n = this.article) || void 0 === n
                ? void 0
                : n.recipeLabels.map((n) => "#".concat(n, " "));
            },
          },
          methods: {},
        }),
        l = d,
        f = (e(344), e(2)),
        component = Object(f.a)(
          l,
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
                  n.moreArticles &&
                  Array.isArray(n.moreArticles) &&
                  n.moreArticles.length > 0
                    ? {
                        key: "sidebar",
                        fn: function () {
                          return [
                            t(
                              "section",
                              { staticClass: "sidebar-section more" },
                              [
                                t("h2", [
                                  n._v("Barnens veganska favoriträtter"),
                                ]),
                                t("recipe-slider"),
                                t("div", { staticClass: "block" }, [
                                  t("h2", [n._v("Fler vegorecept")]),
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
                              ],
                              1
                            ),
                            t(
                              "div",
                              { staticClass: "text-center text-sm" },
                              [
                                t("nuxt-link", { attrs: { to: "/vego" } }, [
                                  n._v("Tillbaka till "),
                                  t("strong", [n._v("Vego")]),
                                ]),
                                t(
                                  "nuxt-link",
                                  { attrs: { to: "/vego/recept" } },
                                  [
                                    n._v("  eller  "),
                                    t("strong", [n._v("Alla recept")]),
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
          "6042ec11",
          null
        );
      t.default = component.exports;
      installComponents(component, {
        RecipeSlider: e(299).default,
        PageArticle: e(189).default,
      });
    },
  },
]);
