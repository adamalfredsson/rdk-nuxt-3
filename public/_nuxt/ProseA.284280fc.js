import {
  f as n,
  o as a,
  c as r,
  Z as s,
  Q as f,
  N as l,
} from "./entry.e50f0f50.js";
const p = n({
  __name: "ProseA",
  props: {
    href: { type: String, default: "" },
    blank: { type: Boolean, default: !1 },
  },
  setup(e) {
    return (t, _) => {
      const o = l;
      return (
        a(),
        r(
          o,
          { href: e.href },
          { default: s(() => [f(t.$slots, "default")]), _: 3 },
          8,
          ["href"]
        )
      );
    };
  },
});
export { p as default };
