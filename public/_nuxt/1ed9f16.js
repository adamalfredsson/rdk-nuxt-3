(window.webpackJsonp = window.webpackJsonp || []).push([
  [22],
  {
    221: function (e, t, r) {
      var content = r(252);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, r(4).default)("24d2df8b", content, !0, { sourceMap: !1 });
    },
    251: function (e, t, r) {
      "use strict";
      r(221);
    },
    252: function (e, t, r) {
      var o = r(3)(function (i) {
        return i[1];
      });
      o.push([
        e.i,
        "/*purgecss start ignore*/\n.source-list-item a[data-v-aedd07ce]{\n    overflow-wrap:break-word;\n    --tw-text-opacity:1;\n    color:rgba(255, 255, 255, var(--tw-text-opacity));\n    text-decoration:underline\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (o.locals = {}),
        (e.exports = o);
    },
    301: function (e, t, r) {
      "use strict";
      r.r(t);
      var o = r(0).a.extend({
          name: "SourceListItem",
          props: { source: { type: Object, required: !0 } },
        }),
        n = (r(251), r(2)),
        component = Object(n.a)(
          o,
          function () {
            var e = this,
              t = e._self._c;
            e._self._setupProxy;
            return t("li", { staticClass: "source-list-item" }, [
              t("span", [e._v(e._s(e.source.sourceName))]),
              e.source.authorOrInstitution
                ? t("span", [
                    e._v(e._s(", ".concat(e.source.authorOrInstitution))),
                  ])
                : e._e(),
              e.source.url
                ? t("span", [
                    e._v(e._s(", URL: ")),
                    t("a", { attrs: { href: e.source.url } }, [
                      e._v(e._s(e.source.url)),
                    ]),
                  ])
                : e._e(),
              e.source.urlDate
                ? t("span", [
                    t("br"),
                    e._v(
                      e._s(" Sidan besökt: ") + "\n" + e._s(e.source.urlDate)
                    ),
                  ])
                : e._e(),
            ]);
          },
          [],
          !1,
          null,
          "aedd07ce",
          null
        );
      t.default = component.exports;
    },
  },
]);
