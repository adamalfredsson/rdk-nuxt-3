import { P as U, Q as F, q as D, R as H, r as N } from "./entry.bc63e51a.js";
import { w, s as v, u as I } from "./utils.0216015b.js";
const M = {
  ignoreUnknown: !1,
  respectType: !1,
  respectFunctionNames: !1,
  respectFunctionProperties: !1,
  unorderedObjects: !0,
  unorderedArrays: !1,
  unorderedSets: !1,
};
function Q(s, r = {}) {
  r = { ...M, ...r };
  const n = $(r);
  return n.dispatch(s), n.toString();
}
function $(s) {
  const r = [];
  let n = [];
  const t = (e) => {
    r.push(e);
  };
  return {
    toString() {
      return r.join("");
    },
    getContext() {
      return n;
    },
    dispatch(e) {
      return (
        s.replacer && (e = s.replacer(e)),
        this["_" + (e === null ? "null" : typeof e)](e)
      );
    },
    _object(e) {
      const i = /\[object (.*)]/i,
        a = Object.prototype.toString.call(e),
        c = i.exec(a),
        o = c ? c[1].toLowerCase() : "unknown:[" + a.toLowerCase() + "]";
      let l = null;
      if ((l = n.indexOf(e)) >= 0) return this.dispatch("[CIRCULAR:" + l + "]");
      if (
        (n.push(e),
        typeof Buffer < "u" && Buffer.isBuffer && Buffer.isBuffer(e))
      )
        return t("buffer:"), t(e.toString("utf8"));
      if (o !== "object" && o !== "function" && o !== "asyncfunction")
        if (this["_" + o]) this["_" + o](e);
        else {
          if (s.ignoreUnknown) return t("[" + o + "]");
          throw new Error('Unknown object type "' + o + '"');
        }
      else {
        let u = Object.keys(e);
        s.unorderedObjects && (u = u.sort()),
          s.respectType !== !1 &&
            !B(e) &&
            u.splice(0, 0, "prototype", "__proto__", "letructor"),
          s.excludeKeys &&
            (u = u.filter(function (f) {
              return !s.excludeKeys(f);
            })),
          t("object:" + u.length + ":");
        for (const f of u)
          this.dispatch(f),
            t(":"),
            s.excludeValues || this.dispatch(e[f]),
            t(",");
      }
    },
    _array(e, i) {
      if (
        ((i = typeof i < "u" ? i : s.unorderedArrays !== !1),
        t("array:" + e.length + ":"),
        !i || e.length <= 1)
      ) {
        for (const o of e) this.dispatch(o);
        return;
      }
      const a = [],
        c = e.map((o) => {
          const l = $(s);
          return l.dispatch(o), a.push(l.getContext()), l.toString();
        });
      return (n = [...n, ...a]), c.sort(), this._array(c, !1);
    },
    _date(e) {
      return t("date:" + e.toJSON());
    },
    _symbol(e) {
      return t("symbol:" + e.toString());
    },
    _error(e) {
      return t("error:" + e.toString());
    },
    _boolean(e) {
      return t("bool:" + e.toString());
    },
    _string(e) {
      t("string:" + e.length + ":"), t(e.toString());
    },
    _function(e) {
      t("fn:"),
        B(e) ? this.dispatch("[native]") : this.dispatch(e.toString()),
        s.respectFunctionNames !== !1 &&
          this.dispatch("function-name:" + String(e.name)),
        s.respectFunctionProperties && this._object(e);
    },
    _number(e) {
      return t("number:" + e.toString());
    },
    _xml(e) {
      return t("xml:" + e.toString());
    },
    _null() {
      return t("Null");
    },
    _undefined() {
      return t("Undefined");
    },
    _regexp(e) {
      return t("regex:" + e.toString());
    },
    _uint8array(e) {
      return t("uint8array:"), this.dispatch(Array.prototype.slice.call(e));
    },
    _uint8clampedarray(e) {
      return (
        t("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(e))
      );
    },
    _int8array(e) {
      return t("int8array:"), this.dispatch(Array.prototype.slice.call(e));
    },
    _uint16array(e) {
      return t("uint16array:"), this.dispatch(Array.prototype.slice.call(e));
    },
    _int16array(e) {
      return t("int16array:"), this.dispatch(Array.prototype.slice.call(e));
    },
    _uint32array(e) {
      return t("uint32array:"), this.dispatch(Array.prototype.slice.call(e));
    },
    _int32array(e) {
      return t("int32array:"), this.dispatch(Array.prototype.slice.call(e));
    },
    _float32array(e) {
      return t("float32array:"), this.dispatch(Array.prototype.slice.call(e));
    },
    _float64array(e) {
      return t("float64array:"), this.dispatch(Array.prototype.slice.call(e));
    },
    _arraybuffer(e) {
      return t("arraybuffer:"), this.dispatch(new Uint8Array(e));
    },
    _url(e) {
      return t("url:" + e.toString());
    },
    _map(e) {
      t("map:");
      const i = [...e];
      return this._array(i, s.unorderedSets !== !1);
    },
    _set(e) {
      t("set:");
      const i = [...e];
      return this._array(i, s.unorderedSets !== !1);
    },
    _file(e) {
      return t("file:"), this.dispatch([e.name, e.size, e.type, e.lastModfied]);
    },
    _blob() {
      if (s.ignoreUnknown) return t("[blob]");
      throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`);
    },
    _domwindow() {
      return t("domwindow");
    },
    _bigint(e) {
      return t("bigint:" + e.toString());
    },
    _process() {
      return t("process");
    },
    _timer() {
      return t("timer");
    },
    _pipe() {
      return t("pipe");
    },
    _tcp() {
      return t("tcp");
    },
    _udp() {
      return t("udp");
    },
    _tty() {
      return t("tty");
    },
    _statwatcher() {
      return t("statwatcher");
    },
    _securecontext() {
      return t("securecontext");
    },
    _connection() {
      return t("connection");
    },
    _zlib() {
      return t("zlib");
    },
    _context() {
      return t("context");
    },
    _nodescript() {
      return t("nodescript");
    },
    _httpparser() {
      return t("httpparser");
    },
    _dataview() {
      return t("dataview");
    },
    _signal() {
      return t("signal");
    },
    _fsevent() {
      return t("fsevent");
    },
    _tlswrap() {
      return t("tlswrap");
    },
  };
}
function B(s) {
  return typeof s != "function"
    ? !1
    : /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(
        Function.prototype.toString.call(s)
      ) != null;
}
class d {
  constructor(r, n) {
    (r = this.words = r || []),
      (this.sigBytes = n !== void 0 ? n : r.length * 4);
  }
  toString(r) {
    return (r || W).stringify(this);
  }
  concat(r) {
    if ((this.clamp(), this.sigBytes % 4))
      for (let n = 0; n < r.sigBytes; n++) {
        const t = (r.words[n >>> 2] >>> (24 - (n % 4) * 8)) & 255;
        this.words[(this.sigBytes + n) >>> 2] |=
          t << (24 - ((this.sigBytes + n) % 4) * 8);
      }
    else
      for (let n = 0; n < r.sigBytes; n += 4)
        this.words[(this.sigBytes + n) >>> 2] = r.words[n >>> 2];
    return (this.sigBytes += r.sigBytes), this;
  }
  clamp() {
    (this.words[this.sigBytes >>> 2] &=
      4294967295 << (32 - (this.sigBytes % 4) * 8)),
      (this.words.length = Math.ceil(this.sigBytes / 4));
  }
  clone() {
    return new d([...this.words]);
  }
}
const W = {
    stringify(s) {
      const r = [];
      for (let n = 0; n < s.sigBytes; n++) {
        const t = (s.words[n >>> 2] >>> (24 - (n % 4) * 8)) & 255;
        r.push((t >>> 4).toString(16), (t & 15).toString(16));
      }
      return r.join("");
    },
  },
  K = {
    stringify(s) {
      const r =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        n = [];
      for (let t = 0; t < s.sigBytes; t += 3) {
        const e = (s.words[t >>> 2] >>> (24 - (t % 4) * 8)) & 255,
          i = (s.words[(t + 1) >>> 2] >>> (24 - ((t + 1) % 4) * 8)) & 255,
          a = (s.words[(t + 2) >>> 2] >>> (24 - ((t + 2) % 4) * 8)) & 255,
          c = (e << 16) | (i << 8) | a;
        for (let o = 0; o < 4 && t * 8 + o * 6 < s.sigBytes * 8; o++)
          n.push(r.charAt((c >>> (6 * (3 - o))) & 63));
      }
      return n.join("");
    },
  },
  G = {
    parse(s) {
      const r = s.length,
        n = [];
      for (let t = 0; t < r; t++)
        n[t >>> 2] |= (s.charCodeAt(t) & 255) << (24 - (t % 4) * 8);
      return new d(n, r);
    },
  },
  J = {
    parse(s) {
      return G.parse(unescape(encodeURIComponent(s)));
    },
  };
class V {
  constructor() {
    (this._minBufferSize = 0), (this.blockSize = 512 / 32), this.reset();
  }
  reset() {
    (this._data = new d()), (this._nDataBytes = 0);
  }
  _append(r) {
    typeof r == "string" && (r = J.parse(r)),
      this._data.concat(r),
      (this._nDataBytes += r.sigBytes);
  }
  _doProcessBlock(r, n) {}
  _process(r) {
    let n,
      t = this._data.sigBytes / (this.blockSize * 4);
    r ? (t = Math.ceil(t)) : (t = Math.max((t | 0) - this._minBufferSize, 0));
    const e = t * this.blockSize,
      i = Math.min(e * 4, this._data.sigBytes);
    if (e) {
      for (let a = 0; a < e; a += this.blockSize)
        this._doProcessBlock(this._data.words, a);
      (n = this._data.words.splice(0, e)), (this._data.sigBytes -= i);
    }
    return new d(n, i);
  }
}
class X extends V {
  update(r) {
    return this._append(r), this._process(), this;
  }
  finalize(r) {
    r && this._append(r);
  }
}
const Y = [
    1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372,
    528734635, 1541459225,
  ],
  Z = [
    1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993,
    -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987,
    1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885,
    -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872,
    -1866530822, -1538233109, -1090935817, -965641998,
  ],
  p = [];
class q extends X {
  constructor() {
    super(), this.reset();
  }
  reset() {
    super.reset(), (this._hash = new d([...Y]));
  }
  _doProcessBlock(r, n) {
    const t = this._hash.words;
    let e = t[0],
      i = t[1],
      a = t[2],
      c = t[3],
      o = t[4],
      l = t[5],
      u = t[6],
      f = t[7];
    for (let h = 0; h < 64; h++) {
      if (h < 16) p[h] = r[n + h] | 0;
      else {
        const g = p[h - 15],
          L = ((g << 25) | (g >>> 7)) ^ ((g << 14) | (g >>> 18)) ^ (g >>> 3),
          _ = p[h - 2],
          T = ((_ << 15) | (_ >>> 17)) ^ ((_ << 13) | (_ >>> 19)) ^ (_ >>> 10);
        p[h] = L + p[h - 7] + T + p[h - 16];
      }
      const P = (o & l) ^ (~o & u),
        E = (e & i) ^ (e & a) ^ (i & a),
        O =
          ((e << 30) | (e >>> 2)) ^
          ((e << 19) | (e >>> 13)) ^
          ((e << 10) | (e >>> 22)),
        R =
          ((o << 26) | (o >>> 6)) ^
          ((o << 21) | (o >>> 11)) ^
          ((o << 7) | (o >>> 25)),
        m = f + R + P + Z[h] + p[h],
        z = O + E;
      (f = u),
        (u = l),
        (l = o),
        (o = (c + m) | 0),
        (c = a),
        (a = i),
        (i = e),
        (e = (m + z) | 0);
    }
    (t[0] = (t[0] + e) | 0),
      (t[1] = (t[1] + i) | 0),
      (t[2] = (t[2] + a) | 0),
      (t[3] = (t[3] + c) | 0),
      (t[4] = (t[4] + o) | 0),
      (t[5] = (t[5] + l) | 0),
      (t[6] = (t[6] + u) | 0),
      (t[7] = (t[7] + f) | 0);
  }
  finalize(r) {
    super.finalize(r);
    const n = this._nDataBytes * 8,
      t = this._data.sigBytes * 8;
    return (
      (this._data.words[t >>> 5] |= 128 << (24 - (t % 32))),
      (this._data.words[(((t + 64) >>> 9) << 4) + 14] = Math.floor(
        n / 4294967296
      )),
      (this._data.words[(((t + 64) >>> 9) << 4) + 15] = n),
      (this._data.sigBytes = this._data.words.length * 4),
      this._process(),
      this._hash
    );
  }
}
function tt(s) {
  return new q().finalize(s).toString(K);
}
function S(s, r = {}) {
  const n = typeof s == "string" ? s : Q(s, r);
  return tt(n).slice(0, 10);
}
const b = (s, r) => r.split(".").reduce((n, t) => n && n[t], s),
  A = (s, r) =>
    Object.keys(s)
      .filter(r)
      .reduce((n, t) => Object.assign(n, { [t]: s[t] }), {}),
  ot = (s) => (r) => Array.isArray(r) ? r.map((n) => s(n)) : s(r),
  C = (s) => {
    const r = [],
      n = [];
    for (const t of s) ["$", "_"].includes(t) ? r.push(t) : n.push(t);
    return { prefixes: r, properties: n };
  },
  at =
    (s = []) =>
    (r) => {
      if (s.length === 0 || !r) return r;
      const { prefixes: n, properties: t } = C(s);
      return A(r, (e) => !t.includes(e) && !n.includes(e[0]));
    },
  ct =
    (s = []) =>
    (r) => {
      if (s.length === 0 || !r) return r;
      const { prefixes: n, properties: t } = C(s);
      return A(r, (e) => t.includes(e) || n.includes(e[0]));
    },
  ut = (s, r) => {
    const n = new Intl.Collator(r.$locale, {
        numeric: r.$numeric,
        caseFirst: r.$caseFirst,
        sensitivity: r.$sensitivity,
      }),
      t = Object.keys(r).filter((e) => !e.startsWith("$"));
    for (const e of t)
      s = s.sort((i, a) => {
        const c = [b(i, e), b(a, e)].map((o) => {
          if (o !== null) return o instanceof Date ? o.toISOString() : o;
        });
        return r[e] === -1 && c.reverse(), n.compare(c[0], c[1]);
      });
    return s;
  },
  lt = (s, r = "Expected an array") => {
    if (!Array.isArray(s)) throw new TypeError(r);
  },
  y = (s) => (Array.isArray(s) ? s : s ? [s] : []),
  et = ["sort", "where", "only", "without"],
  x = (s, r) => {
    const n = { ...r };
    for (const i of et) n[i] && (n[i] = y(n[i]));
    const t =
        (i, a = (c) => c) =>
        (...c) => ((n[i] = a(...c)), e),
      e = {
        params: () => n,
        only: t("only", y),
        without: t("without", y),
        where: t("where", (i) => [...y(n.where), i]),
        sort: t("sort", (i) => [...y(n.sort), ...y(i)]),
        limit: t("limit", (i) => parseInt(String(i), 10)),
        skip: t("skip", (i) => parseInt(String(i), 10)),
        find: () => s(e),
        findOne: () => ((n.first = !0), s(e)),
        findSurround: (i, a) => ((n.surround = { query: i, ...a }), s(e)),
        locale: (i) => e.where({ _locale: i }),
      };
    return e;
  };
function j(s) {
  return JSON.stringify(s, rt);
}
function rt(s, r) {
  return r instanceof RegExp ? `--REGEX ${r.toString()}` : r;
}
const st = (s) => {
    let r = j(s);
    return (
      (r = typeof Buffer < "u" ? Buffer.from(r).toString("base64") : btoa(r)),
      (r = r.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")),
      (r.match(/.{1,100}/g) || []).join("/")
    );
  },
  k = (s) => async (r) => {
    var a, c, o;
    const { content: n } = D().public;
    s &&
      (r.params().first && (r.params().where || []).length === 0
        ? r.where({ _path: H(s) })
        : r.where({
            _path: new RegExp(`^${s.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`),
          })),
      ((a = r.params().sort) != null && a.length) ||
        r.sort({ _file: 1, $numeric: !0 }),
      n.locales.length &&
        (((o =
          (c = r.params().where) == null ? void 0 : c.find((u) => u._locale)) !=
          null &&
          o._locale) ||
          r.locale(n.defaultLocale));
    const t = r.params(),
      e = n.experimental.stripQueryParameters
        ? w(`/query/${`${S(t)}.${n.integrity}`}/${st(t)}.json`)
        : w(`/query/${S(t)}.${n.integrity}.json`);
    if (v())
      return (
        await N(
          () => import("./client-db.979d0e67.js"),
          [
            "./client-db.979d0e67.js",
            "./entry.bc63e51a.js",
            "./entry.91abefef.css",
            "./utils.0216015b.js",
            "./index.a6ef77ff.js",
          ],
          import.meta.url
        ).then((u) => u.useContentDatabase())
      ).fetch(r);
    const i = await $fetch(e, {
      method: "GET",
      responseType: "json",
      params: n.experimental.stripQueryParameters
        ? void 0
        : { _params: j(t), previewToken: I("previewToken").value },
    });
    if (typeof i == "string" && i.startsWith("<!DOCTYPE html>"))
      throw new Error("Not found");
    return i;
  };
function ht(s, ...r) {
  return typeof s == "string" ? x(k(U(F(s, ...r)))) : x(k(), s);
}
export {
  lt as a,
  y as b,
  ot as c,
  ct as d,
  st as e,
  x as f,
  b as g,
  S as h,
  j,
  ht as q,
  ut as s,
  at as w,
};
