import n from "./ContentQuery.b8887574.js";
import { k as c, l as h, p as u } from "./entry.bc63e51a.js";
import "./query.02b33be6.js";
import "./utils.0216015b.js";
const S = c({
  name: "ContentList",
  props: {
    path: { type: String, required: !1, default: void 0 },
    query: { type: Object, required: !1, default: void 0 },
  },
  render(p) {
    const t = h(),
      { path: f, query: o } = p,
      m = { ...(o || {}), path: f || (o == null ? void 0 : o.path) || "/" },
      r = (e, a) =>
        u(
          "pre",
          null,
          JSON.stringify(
            {
              message: "You should use slots with <ContentList>",
              slot: e,
              data: a,
            },
            null,
            2
          )
        );
    return u(n, m, {
      default:
        t != null && t.default
          ? ({ data: e, refresh: a, isPartial: d }) =>
              t == null
                ? void 0
                : t.default({
                    list: e,
                    refresh: a,
                    isPartial: d,
                    ...this.$attrs,
                  })
          : ({ data: e }) => r("default", e),
      empty: (e) =>
        t != null && t.empty
          ? t.empty(e)
          : r("default", e == null ? void 0 : e.data),
      "not-found": (e) => {
        var a;
        return t != null && t["not-found"]
          ? (a = t == null ? void 0 : t["not-found"]) == null
            ? void 0
            : a.call(t, e)
          : r("not-found", e == null ? void 0 : e.data);
      },
    });
  },
});
export { S as default };