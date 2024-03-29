(window.webpackJsonp = window.webpackJsonp || []).push([
  [29, 6, 7, 15, 23],
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
        l = e(80),
        o = e(81),
        d = r(function (i) {
          return i[1];
        }),
        f = l(o);
      d.push([
        n.i,
        "/*purgecss start ignore*/\n.animal-slider-card[data-v-5663ff38]{\n  position:relative;\n  padding-bottom:1rem;\n  font-size:.8em;\n  border-radius:5px;\n  background-color:#fff;\n  text-align:left;\n  line-height:2rem;\n}\n.animal-slider-card h3.title[data-v-5663ff38]{\n    padding:5px 0 0;\n    font-size:1.5rem;\n    font-weight:700;\n    font-family:'Avenir LT Std Heavy', sans-serif;\n    margin:0 auto;\n    text-align:center\n}\n@media (max-width:768px){\n.animal-slider-card h3.title[data-v-5663ff38]{\n      padding-left:0;\n      padding-bottom:0;\n      padding-right:0;\n      padding-top:0\n}\n}\n.animal-slider-card h3.title[data-v-5663ff38]:hover{\n    opacity:.7\n}\n.animal-slider-card h3.title .latin[data-v-5663ff38]{\n      font-weight:200;\n      font-size:1rem;\n      font-family:'Avenir LT Std', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;\n      padding-left:4px\n}\n@media (max-width:768px){\n.animal-slider-card h3.title .latin[data-v-5663ff38]{\n        display:flex;\n        flex-direction:column;\n        justify-content:center;\n        padding-top:2px;\n        padding-left:0;\n        font-style:italic\n}\n}\n.animal-slider-card h3.title .latin[data-v-5663ff38]:before{\n      content:\"\";\n      width:1px;\n      height:21px;\n      background-color:#000;\n      display:inline-block;\n      margin:-4px 9px\n}\n@media (max-width:768px){\n.animal-slider-card h3.title .latin[data-v-5663ff38]:before{\n        display:none\n}\n}\n.animal-slider-card .tags[data-v-5663ff38]{\n    display:inline;\n    margin:0 auto;\n    text-align:center;\n    font-size:1rem;\n}\n.animal-slider-card .tags a[data-v-5663ff38]{\n      color:#5ec19f\n}\n.animal-slider-card .tags a[data-v-5663ff38]:hover{\n      opacity:.7\n}\n.animal-slider-card .image[data-v-5663ff38]{\n    border-radius:5px 5px 0 0;\n    overflow:hidden;\n    -o-object-fit:cover;\n       object-fit:cover\n}\n.animal-slider-card .overlay[data-v-5663ff38]{\n    z-index:10;\n    position:absolute;\n    top:0;\n    right:0;\n    height:120px;\n    width:120px;\n    cursor:pointer;\n    transition:.3s\n}\n.animal-slider-card .overlay:hover .overlay__arrow[data-v-5663ff38]{\n      transform:rotate(135deg) scale(1.2)\n}\n.animal-slider-card .overlay__triangle[data-v-5663ff38]{\n      position:absolute;\n      right:0;\n      top:0;\n      height:0;\n      width:0;\n      border-color:#5ec19f #5ec19f transparent transparent;\n      border-style:solid;\n      border-width:60px;\n      border-radius:0 5px 0 0\n}\n.animal-slider-card .overlay__text[data-v-5663ff38]{\n      right:-18px;\n      top:38%;\n      width:120px;\n      transform:rotate(45deg);\n      font-weight:700;\n      color:#fff;\n      font-family:'Avenir LT Std', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;\n      font-size:1rem\n}\n.animal-slider-card .overlay__arrow[data-v-5663ff38],.animal-slider-card .overlay__text[data-v-5663ff38]{\n      position:absolute\n}\n.animal-slider-card .overlay__arrow[data-v-5663ff38]{\n      top:0;\n      right:0;\n      transform:rotate(135deg);\n      background-image:url(" +
          f +
          ');\n      width:50px;\n      height:50px;\n      background-size:cover;\n      transition:.5s\n}\n.animal-slider-card .text[data-v-5663ff38]{\n    line-height:1.35\n}\n.flip-container[data-v-5663ff38]{\n  perspective:1000px\n}\n.flip-container.flipped .flipper[data-v-5663ff38]{\n  transform:rotateY(-180deg)\n}\n.back[data-v-5663ff38],.flip-container[data-v-5663ff38],.front[data-v-5663ff38]{\n  width:100%\n}\n.flipper[data-v-5663ff38]{\n  position:relative;\n  transform-style:preserve-3d;\n  transition:.4s ease-out;\n}\n@media (min-width: 1024px){\n.flipper.hovered-front[data-v-5663ff38]{\n      transition:.3s ease-out;\n      transform:rotateY(-10deg)\n}\n.flip-container.flipped .flipper.hovered-back[data-v-5663ff38]{\n      transition:.3s ease-out;\n      transform:rotateY(-170deg)\n}\n}\n.flipped .flipper[data-v-5663ff38]{\n    transition:.5s\n}\n.flipper .back[data-v-5663ff38],.flipper .front[data-v-5663ff38]{\n    -webkit-backface-visibility:hidden;\n            backface-visibility:hidden\n}\n.flipper .front[data-v-5663ff38]{\n    transform:rotateY(0deg);\n    z-index:2\n}\n.flipper .back[data-v-5663ff38]{\n    position:absolute;\n    top:0;\n    left:0;\n    height:100%;\n    transform:rotateY(-180deg);\n    background-color:#00ce8f;\n    color:#fff;\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    align-items:center;\n}\n.flipper .back .overlay[data-v-5663ff38]{\n      width:unset;\n      height:unset\n}\n.flipper .back .overlay__arrow[data-v-5663ff38]{\n      transform:rotate(-45deg)\n}\n.facts[data-v-5663ff38]{\n  position:absolute;\n  top:0px;\n  height:100%;\n  overflow:hidden;\n  padding-left:2rem;\n  padding-right:2rem;\n  padding-top:2rem;\n  padding-bottom:2rem;\n  font-size:1rem;\n  line-height:1.5rem;\n  font-weight:700;\n}\n.facts li[data-v-5663ff38]{\n    margin-top:0.5rem\n}\n.facts[data-v-5663ff38]:after{\n  pointer-events:none;\n  position:absolute;\n  bottom:0px;\n  left:0px;\n  height:100%;\n  width:100%;\n  content:"";\n  background:linear-gradient(transparent,#5ec19f 100%)\n}\n.back[data-v-5663ff38]{\n  text-align:center;\n}\n.back a[data-v-5663ff38]{\n    position:absolute;\n    bottom:0px;\n    z-index:10;\n    padding-top:0.75rem;\n    padding-bottom:0.75rem;\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    background-color:transparent;\n    padding-top:0.5rem;\n    padding-bottom:0.5rem;\n    outline:2px solid transparent;\n    outline-offset:2px;\n    margin-top:2rem;\n    margin-bottom:0.5rem;\n    border-radius:9999px;\n    --tw-bg-opacity:1;\n    background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n    font-size:0.75rem;\n    line-height:1rem;\n    font-weight:700;\n    padding:.3em 1em .2em;\n    font-size:1rem;\n    color:#5ec19f\n}\n.back a[data-v-5663ff38]:hover{\n    transform:scale(1.05)\n}\n.content[data-v-5663ff38]{\n  padding:1rem 1.5rem 0;\n  z-index:3;\n  display:flex;\n  flex-direction:column;\n  justify-content:center\n}\n.share[data-v-5663ff38]{\n  font-size:.9rem;\n  padding-bottom:.5rem;\n  opacity:.65\n}\n.share[data-v-5663ff38]:hover{\n  opacity:1\n}\n.share img[data-v-5663ff38]{\n    display:inline;\n    max-width:1.2rem\n}\n\n/*purgecss end ignore*/',
        "",
      ]),
        (d.locals = {}),
        (n.exports = d);
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
        l = (e(205), e(2)),
        component = Object(l.a)(
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
    223: function (n, t, e) {
      var content = e(256);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("565a9fff", content, !0, { sourceMap: !1 });
    },
    255: function (n, t, e) {
      "use strict";
      e(223);
    },
    256: function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n.min-h-slider[data-v-37a6ae86]{\n  min-height:min(400px,80vw);\n}\n@media (min-width: 1024px){\n.min-h-slider[data-v-37a6ae86]{\n    min-height:300px\n}\n}\n.w-cell[data-v-37a6ae86]{\n  width:90%;\n}\n@media (min-width: 768px){\n.w-cell[data-v-37a6ae86]{\n    width:47.74875%\n}\n}\n@media (min-width: 1024px){\n.w-cell[data-v-37a6ae86]{\n    width:33%\n}\n}\n@media (min-width: 1200px){\n.w-cell[data-v-37a6ae86]{\n    width:25%\n}\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    288: function (n, t, e) {
      var content = e(363);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("1822300d", content, !0, { sourceMap: !1 });
    },
    303: function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(0).a.extend({
          props: { animals: { type: Array, required: !0 } },
        }),
        l = (e(255), e(2)),
        component = Object(l.a)(
          r,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t(
              "div",
              { staticClass: "min-h-slider flex flex-col justify-center" },
              [
                n.animals.length > 0
                  ? t(
                      "slider",
                      n._l(n.animals, function (n) {
                        return t("animal-slider-card", {
                          key: n.objectID,
                          staticClass: "w-cell mx-1 md_mx-2 lg_mx-8 xl_mx-12",
                          attrs: { animal: n },
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
          "37a6ae86",
          null
        );
      t.default = component.exports;
      installComponents(component, {
        AnimalSliderCard: e(209).default,
        Slider: e(83).default,
      });
    },
    362: function (n, t, e) {
      "use strict";
      e(288);
    },
    363: function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n.page-front .title[data-v-9ad38e0e] h2{\n      background-color:#e6007e\n}\n.page-front .wrapper[data-v-9ad38e0e]{\n    position:relative;\n    margin-bottom:2rem;\n    display:inline-block;\n    width:100%;\n    --tw-bg-opacity:1;\n    background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.page-front .wrapper p.preamble[data-v-9ad38e0e]{\n      margin-left:auto;\n      margin-right:auto;\n      margin-top:3rem;\n      margin-bottom:3rem;\n      width:83.333333%;\n      max-width:42rem;\n      text-align:center;\n      font-size:1rem;\n      line-height:1.5rem\n}\n.page-front .wrapper ul[data-v-9ad38e0e]{\n      display:grid;\n      width:100%;\n      max-width:1200px;\n      grid-template-columns:repeat(1, minmax(0, 1fr));\n      gap:1rem;\n      padding-left:1rem;\n      padding-right:1rem;\n}\n@media (min-width: 768px){\n.page-front .wrapper ul[data-v-9ad38e0e]{\n        grid-template-columns:repeat(3, minmax(0, 1fr))\n}\n}\n@media (min-width: 1024px){\n.page-front .wrapper ul[data-v-9ad38e0e]{\n        grid-template-columns:repeat(4, minmax(0, 1fr))\n}\n}\n.page-front .wrapper ul li[data-v-9ad38e0e]{\n        margin-left:auto;\n        margin-right:auto;\n        max-width:400px\n}\n.page-front .wrapper ul li[data-v-9ad38e0e] .themed{\n        background-color:#e6007e\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    413: function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(0),
        l = e(182);
      function o(n, t, e, r, l, o, d) {
        try {
          var f = n[o](d),
            c = f.value;
        } catch (n) {
          return void e(n);
        }
        f.done ? t(c) : Promise.resolve(c).then(r, l);
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
                } = e || (yield t("portal-page/djurfakta").fetch());
              return {
                title: title,
                links: r,
                preamble: l,
                metadescription: o,
                animals: yield t("djurfakta").limit(5).fetch(),
              };
            }),
            function () {
              var n = this,
                e = arguments;
              return new Promise(function (r, l) {
                var d = t.apply(n, e);
                function f(n) {
                  o(d, r, l, f, c, "next", n);
                }
                function c(n) {
                  o(d, r, l, f, c, "throw", n);
                }
                f(void 0);
              });
            })();
            var t;
          },
          data: () => ({
            title: "",
            preamble: null,
            metadescription: "",
            links: [],
            animals: [],
            moreLink: {
              url: "/sok?contentType=Fakta om djur",
              linkText: "Se alla djur",
            },
          }),
          head() {
            return {
              title: this.title
                ? "".concat(this.title, " | Rädda Djuren-klubben")
                : "Rädda Djuren-klubben",
              link: [
                { hid: "canonical", rel: "canonical", href: Object(l.a)("") },
              ],
              meta: [
                {
                  hid: "og:url",
                  property: "og:url",
                  content: "https://www.raddadjuren.se",
                },
                {
                  hid: "og:title",
                  property: "og:title",
                  content: this.title
                    ? "".concat(this.title, " | Rädda Djuren-klubben")
                    : "Rädda Djuren-klubben",
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
        f = d,
        c = (e(362), e(2)),
        component = Object(c.a)(
          f,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t(
              "div",
              { staticClass: "page-front" },
              [
                t("page-search", {
                  staticClass: "search",
                  attrs: { links: n.links, moreLink: n.moreLink },
                }),
                t("animal-slider", {
                  staticClass: "my-8",
                  attrs: { animals: n.animals },
                }),
                t("learn-more-block"),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "9ad38e0e",
          null
        );
      t.default = component.exports;
      installComponents(component, {
        PageSearch: e(196).default,
        AnimalSlider: e(303).default,
        LearnMoreBlock: e(85).default,
      });
    },
  },
]);
