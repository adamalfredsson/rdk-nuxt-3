import n from "./ContentQuery.9c156d7e.js";
import { f as c, h, j as o } from "./entry.e50f0f50.js";
const _ = c({
  name: "ContentList",
  props: {
    path: { type: String, required: !1, default: void 0 },
    query: { type: Object, required: !1, default: void 0 },
  },
  render(r) {
    const t = h(),
      { path: p, query: u } = r,
      m = { ...(u || {}), path: p || (u == null ? void 0 : u.path) || "/" },
      f = (e, a) =>
        o(
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
    return o(n, m, {
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
          : ({ data: e }) => f("default", e),
      empty: (e) =>
        t != null && t.empty
          ? t.empty(e)
          : f("default", e == null ? void 0 : e.data),
      "not-found": (e) => {
        var a;
        return t != null && t["not-found"]
          ? (a = t == null ? void 0 : t["not-found"]) == null
            ? void 0
            : a.call(t, e)
          : f("not-found", e == null ? void 0 : e.data);
      },
    });
  },
});
export { _ as default };
