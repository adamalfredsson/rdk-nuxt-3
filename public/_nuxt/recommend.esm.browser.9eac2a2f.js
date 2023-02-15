function x(e) {
  const t = `algoliasearch-client-js-${e.key}`;
  let r;
  const n = () => (
      r === void 0 && (r = e.localStorage || window.localStorage), r
    ),
    s = () => JSON.parse(n().getItem(t) || "{}");
  return {
    get(a, o, c = { miss: () => Promise.resolve() }) {
      return Promise.resolve()
        .then(() => {
          const l = JSON.stringify(a),
            h = s()[l];
          return Promise.all([h || o(), h !== void 0]);
        })
        .then(([l, h]) => Promise.all([l, h || c.miss(l)]))
        .then(([l]) => l);
    },
    set(a, o) {
      return Promise.resolve().then(() => {
        const c = s();
        return (c[JSON.stringify(a)] = o), n().setItem(t, JSON.stringify(c)), o;
      });
    },
    delete(a) {
      return Promise.resolve().then(() => {
        const o = s();
        delete o[JSON.stringify(a)], n().setItem(t, JSON.stringify(o));
      });
    },
    clear() {
      return Promise.resolve().then(() => {
        n().removeItem(t);
      });
    },
  };
}
function T(e) {
  const t = [...e.caches],
    r = t.shift();
  return r === void 0
    ? U()
    : {
        get(n, s, a = { miss: () => Promise.resolve() }) {
          return r.get(n, s, a).catch(() => T({ caches: t }).get(n, s, a));
        },
        set(n, s) {
          return r.set(n, s).catch(() => T({ caches: t }).set(n, s));
        },
        delete(n) {
          return r.delete(n).catch(() => T({ caches: t }).delete(n));
        },
        clear() {
          return r.clear().catch(() => T({ caches: t }).clear());
        },
      };
}
function U() {
  return {
    get(e, t, r = { miss: () => Promise.resolve() }) {
      return t()
        .then((s) => Promise.all([s, r.miss(s)]))
        .then(([s]) => s);
    },
    set(e, t) {
      return Promise.resolve(t);
    },
    delete(e) {
      return Promise.resolve();
    },
    clear() {
      return Promise.resolve();
    },
  };
}
function E(e = { serializable: !0 }) {
  let t = {};
  return {
    get(r, n, s = { miss: () => Promise.resolve() }) {
      const a = JSON.stringify(r);
      if (a in t)
        return Promise.resolve(e.serializable ? JSON.parse(t[a]) : t[a]);
      const o = n(),
        c = (s && s.miss) || (() => Promise.resolve());
      return o.then((l) => c(l)).then(() => o);
    },
    set(r, n) {
      return (
        (t[JSON.stringify(r)] = e.serializable ? JSON.stringify(n) : n),
        Promise.resolve(n)
      );
    },
    delete(r) {
      return delete t[JSON.stringify(r)], Promise.resolve();
    },
    clear() {
      return (t = {}), Promise.resolve();
    },
  };
}
function z(e, t, r) {
  const n = { "x-algolia-api-key": r, "x-algolia-application-id": t };
  return {
    headers() {
      return e === C.WithinHeaders ? n : {};
    },
    queryParameters() {
      return e === C.WithinQueryParameters ? n : {};
    },
  };
}
function H(e) {
  let t = e.length - 1;
  for (t; t > 0; t--) {
    const r = Math.floor(Math.random() * (t + 1)),
      n = e[t];
    (e[t] = e[r]), (e[r] = n);
  }
  return e;
}
function I(e, t) {
  return (
    t &&
      Object.keys(t).forEach((r) => {
        e[r] = t[r](e);
      }),
    e
  );
}
function M(e, ...t) {
  let r = 0;
  return e.replace(/%s/g, () => encodeURIComponent(t[r++]));
}
const A = "4.14.3",
  C = { WithinQueryParameters: 0, WithinHeaders: 1 },
  R = { Debug: 1, Info: 2, Error: 3 };
function W(e) {
  return {
    debug(t, r) {
      return R.Debug >= e && console.debug(t, r), Promise.resolve();
    },
    info(t, r) {
      return R.Info >= e && console.info(t, r), Promise.resolve();
    },
    error(t, r) {
      return console.error(t, r), Promise.resolve();
    },
  };
}
function L() {
  return {
    send(e) {
      return new Promise((t) => {
        const r = new XMLHttpRequest();
        r.open(e.method, e.url, !0),
          Object.keys(e.headers).forEach((o) =>
            r.setRequestHeader(o, e.headers[o])
          );
        const n = (o, c) =>
            setTimeout(() => {
              r.abort(), t({ status: 0, content: c, isTimedOut: !0 });
            }, o * 1e3),
          s = n(e.connectTimeout, "Connection timeout");
        let a;
        (r.onreadystatechange = () => {
          r.readyState > r.OPENED &&
            a === void 0 &&
            (clearTimeout(s), (a = n(e.responseTimeout, "Socket timeout")));
        }),
          (r.onerror = () => {
            r.status === 0 &&
              (clearTimeout(s),
              clearTimeout(a),
              t({
                content: r.responseText || "Network request failed",
                status: r.status,
                isTimedOut: !1,
              }));
          }),
          (r.onload = () => {
            clearTimeout(s),
              clearTimeout(a),
              t({ content: r.responseText, status: r.status, isTimedOut: !1 });
          }),
          r.send(e.data);
      });
    },
  };
}
function N(e, t) {
  const r = e || {},
    n = r.data || {};
  return (
    Object.keys(r).forEach((s) => {
      ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(
        s
      ) === -1 && (n[s] = r[s]);
    }),
    {
      data: Object.entries(n).length > 0 ? n : void 0,
      timeout: r.timeout || t,
      headers: r.headers || {},
      queryParameters: r.queryParameters || {},
      cacheable: r.cacheable,
    }
  );
}
const y = { Read: 1, Write: 2, Any: 3 },
  O = { Up: 1, Down: 2, Timeouted: 3 },
  J = 2 * 60 * 1e3;
function j(e, t = O.Up) {
  return { ...e, status: t, lastUpdate: Date.now() };
}
function F(e) {
  return e.status === O.Up || Date.now() - e.lastUpdate > J;
}
function Q(e) {
  return e.status === O.Timeouted && Date.now() - e.lastUpdate <= J;
}
function D(e) {
  return typeof e == "string"
    ? { protocol: "https", url: e, accept: y.Any }
    : {
        protocol: e.protocol || "https",
        url: e.url,
        accept: e.accept || y.Any,
      };
}
const S = { Delete: "DELETE", Get: "GET", Post: "POST", Put: "PUT" };
function _(e, t) {
  return Promise.all(t.map((r) => e.get(r, () => Promise.resolve(j(r))))).then(
    (r) => {
      const n = r.filter((c) => F(c)),
        s = r.filter((c) => Q(c)),
        a = [...n, ...s],
        o = a.length > 0 ? a.map((c) => D(c)) : t;
      return {
        getTimeout(c, l) {
          return (s.length === 0 && c === 0 ? 1 : s.length + 3 + c) * l;
        },
        statelessHosts: o,
      };
    }
  );
}
const B = ({ isTimedOut: e, status: t }) => !e && ~~t === 0,
  G = (e) => {
    const t = e.status;
    return e.isTimedOut || B(e) || (~~(t / 100) !== 2 && ~~(t / 100) !== 4);
  },
  X = ({ status: e }) => ~~(e / 100) === 2,
  K = (e, t) => (G(e) ? t.onRetry(e) : X(e) ? t.onSuccess(e) : t.onFail(e));
function q(e, t, r, n) {
  const s = [],
    a = ne(r, n),
    o = se(e, n),
    c = r.method,
    l = r.method !== S.Get ? {} : { ...r.data, ...n.data },
    h = {
      "x-algolia-agent": e.userAgent.value,
      ...e.queryParameters,
      ...l,
      ...n.queryParameters,
    };
  let P = 0;
  const u = (d, g) => {
    const m = d.pop();
    if (m === void 0) throw ce($(s));
    const b = {
        data: a,
        headers: o,
        method: c,
        url: te(m, r.path, h),
        connectTimeout: g(P, e.timeouts.connect),
        responseTimeout: g(P, n.timeout),
      },
      v = (i) => {
        const p = { request: b, response: i, host: m, triesLeft: d.length };
        return s.push(p), p;
      },
      f = {
        onSuccess: (i) => V(i),
        onRetry(i) {
          const p = v(i);
          return (
            i.isTimedOut && P++,
            Promise.all([
              e.logger.info("Retryable failure", k(p)),
              e.hostsCache.set(m, j(m, i.isTimedOut ? O.Timeouted : O.Down)),
            ]).then(() => u(d, g))
          );
        },
        onFail(i) {
          throw (v(i), ee(i, $(s)));
        },
      };
    return e.requester.send(b).then((i) => K(i, f));
  };
  return _(e.hostsCache, t).then((d) =>
    u([...d.statelessHosts].reverse(), d.getTimeout)
  );
}
function Y(e) {
  const {
      hostsCache: t,
      logger: r,
      requester: n,
      requestsCache: s,
      responsesCache: a,
      timeouts: o,
      userAgent: c,
      hosts: l,
      queryParameters: h,
      headers: P,
    } = e,
    u = {
      hostsCache: t,
      logger: r,
      requester: n,
      requestsCache: s,
      responsesCache: a,
      timeouts: o,
      userAgent: c,
      headers: P,
      queryParameters: h,
      hosts: l.map((d) => D(d)),
      read(d, g) {
        const m = N(g, u.timeouts.read),
          b = () =>
            q(
              u,
              u.hosts.filter((i) => (i.accept & y.Read) !== 0),
              d,
              m
            );
        if ((m.cacheable !== void 0 ? m.cacheable : d.cacheable) !== !0)
          return b();
        const f = {
          request: d,
          mappedRequestOptions: m,
          transporter: {
            queryParameters: u.queryParameters,
            headers: u.headers,
          },
        };
        return u.responsesCache.get(
          f,
          () =>
            u.requestsCache.get(f, () =>
              u.requestsCache
                .set(f, b())
                .then(
                  (i) => Promise.all([u.requestsCache.delete(f), i]),
                  (i) =>
                    Promise.all([u.requestsCache.delete(f), Promise.reject(i)])
                )
                .then(([i, p]) => p)
            ),
          { miss: (i) => u.responsesCache.set(f, i) }
        );
      },
      write(d, g) {
        return q(
          u,
          u.hosts.filter((m) => (m.accept & y.Write) !== 0),
          d,
          N(g, u.timeouts.write)
        );
      },
    };
  return u;
}
function Z(e) {
  const t = {
    value: `Algolia for JavaScript (${e})`,
    add(r) {
      const n = `; ${r.segment}${
        r.version !== void 0 ? ` (${r.version})` : ""
      }`;
      return t.value.indexOf(n) === -1 && (t.value = `${t.value}${n}`), t;
    },
  };
  return t;
}
function V(e) {
  try {
    return JSON.parse(e.content);
  } catch (t) {
    throw oe(t.message, e);
  }
}
function ee({ content: e, status: t }, r) {
  let n = e;
  try {
    n = JSON.parse(e).message;
  } catch {}
  return ae(n, t, r);
}
function te(e, t, r) {
  const n = re(r);
  let s = `${e.protocol}://${e.url}/${t.charAt(0) === "/" ? t.substr(1) : t}`;
  return n.length && (s += `?${n}`), s;
}
function re(e) {
  const t = (r) =>
    Object.prototype.toString.call(r) === "[object Object]" ||
    Object.prototype.toString.call(r) === "[object Array]";
  return Object.keys(e)
    .map((r) => M("%s=%s", r, t(e[r]) ? JSON.stringify(e[r]) : e[r]))
    .join("&");
}
function ne(e, t) {
  if (e.method === S.Get || (e.data === void 0 && t.data === void 0)) return;
  const r = Array.isArray(e.data) ? e.data : { ...e.data, ...t.data };
  return JSON.stringify(r);
}
function se(e, t) {
  const r = { ...e.headers, ...t.headers },
    n = {};
  return (
    Object.keys(r).forEach((s) => {
      const a = r[s];
      n[s.toLowerCase()] = a;
    }),
    n
  );
}
function $(e) {
  return e.map((t) => k(t));
}
function k(e) {
  const t = e.request.headers["x-algolia-api-key"]
    ? { "x-algolia-api-key": "*****" }
    : {};
  return {
    ...e,
    request: { ...e.request, headers: { ...e.request.headers, ...t } },
  };
}
function ae(e, t, r) {
  return { name: "ApiError", message: e, status: t, transporterStackTrace: r };
}
function oe(e, t) {
  return { name: "DeserializationError", message: e, response: t };
}
function ce(e) {
  return {
    name: "RetryError",
    message:
      "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
    transporterStackTrace: e,
  };
}
const ie = (e) => {
    const t = e.appId,
      r = z(e.authMode !== void 0 ? e.authMode : C.WithinHeaders, t, e.apiKey),
      n = Y({
        hosts: [
          { url: `${t}-dsn.algolia.net`, accept: y.Read },
          { url: `${t}.algolia.net`, accept: y.Write },
        ].concat(
          H([
            { url: `${t}-1.algolianet.com` },
            { url: `${t}-2.algolianet.com` },
            { url: `${t}-3.algolianet.com` },
          ])
        ),
        ...e,
        headers: {
          ...r.headers(),
          "content-type": "application/x-www-form-urlencoded",
          ...e.headers,
        },
        queryParameters: { ...r.queryParameters(), ...e.queryParameters },
      });
    return I(
      {
        transporter: n,
        appId: t,
        addAlgoliaAgent(a, o) {
          n.userAgent.add({ segment: a, version: o });
        },
        clearCache() {
          return Promise.all([
            n.requestsCache.clear(),
            n.responsesCache.clear(),
          ]).then(() => {});
        },
      },
      e.methods
    );
  },
  w = (e) => (t, r) => {
    const n = t.map((s) => ({ ...s, threshold: s.threshold || 0 }));
    return e.transporter.read(
      {
        method: S.Post,
        path: "1/indexes/*/recommendations",
        data: { requests: n },
        cacheable: !0,
      },
      r
    );
  },
  ue = (e) => (t, r) =>
    w(e)(
      t.map((n) => ({
        ...n,
        fallbackParameters: {},
        model: "bought-together",
      })),
      r
    ),
  le = (e) => (t, r) =>
    w(e)(
      t.map((n) => ({ ...n, model: "related-products" })),
      r
    ),
  de = (e) => (t, r) => {
    const n = t.map((s) => ({
      ...s,
      model: "trending-facets",
      threshold: s.threshold || 0,
    }));
    return e.transporter.read(
      {
        method: S.Post,
        path: "1/indexes/*/recommendations",
        data: { requests: n },
        cacheable: !0,
      },
      r
    );
  },
  me = (e) => (t, r) => {
    const n = t.map((s) => ({
      ...s,
      model: "trending-items",
      threshold: s.threshold || 0,
    }));
    return e.transporter.read(
      {
        method: S.Post,
        path: "1/indexes/*/recommendations",
        data: { requests: n },
        cacheable: !0,
      },
      r
    );
  };
function he(e, t, r) {
  const n = {
    appId: e,
    apiKey: t,
    timeouts: { connect: 1, read: 2, write: 30 },
    requester: L(),
    logger: W(R.Error),
    responsesCache: E(),
    requestsCache: E({ serializable: !1 }),
    hostsCache: T({ caches: [x({ key: `${A}-${e}` }), E()] }),
    userAgent: Z(A)
      .add({ segment: "Recommend", version: A })
      .add({ segment: "Browser" }),
    authMode: C.WithinQueryParameters,
  };
  return ie({
    ...n,
    ...r,
    methods: {
      getFrequentlyBoughtTogether: ue,
      getRecommendations: w,
      getRelatedProducts: le,
      getTrendingFacets: de,
      getTrendingItems: me,
    },
  });
}
he.version = A;
export { he as default };
