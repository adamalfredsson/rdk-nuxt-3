import { k as o, D as u, E as d, b as k } from "./entry.bc63e51a.js";
const m = o({
  name: "ClientOnly",
  inheritAttrs: !1,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(b, { slots: a, attrs: c }) {
    const l = u(!1);
    return (
      d(() => {
        l.value = !0;
      }),
      (e) => {
        var t;
        if (l.value) return (t = a.default) == null ? void 0 : t.call(a);
        const n = a.fallback || a.placeholder;
        if (n) return n();
        const r = e.fallback || e.placeholder || "",
          f = e.fallbackTag || e.placeholderTag || "span";
        return k(f, c, r);
      }
    );
  },
});
export { m as _ };
