import { _ as n } from "./TransitionExpand.vue.07423dbf.js";
import {
  o as t,
  c as o,
  w as r,
  z as a,
  a8 as s,
  g as p,
} from "./entry.bc63e51a.js";
function d(e, f, _, c, i, u) {
  return (
    t(),
    o(
      s,
      {
        name: "expand",
        onEnter: e.enter,
        onAfterEnter: e.afterEnter,
        onLeave: e.leave,
      },
      { default: r(() => [a(e.$slots, "default", {}, void 0, !0)]), _: 3 },
      8,
      ["onEnter", "onAfterEnter", "onLeave"]
    )
  );
}
const E = p(n, [
  ["render", d],
  ["__scopeId", "data-v-ab5478b5"],
]);
export { E as _ };