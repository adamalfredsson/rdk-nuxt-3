function le(e) {
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
            p = s()[l];
          return Promise.all([p || o(), p !== void 0]);
        })
        .then(([l, p]) => Promise.all([l, p || c.miss(l)]))
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
function R(e) {
  const t = [...e.caches],
    r = t.shift();
  return r === void 0
    ? he()
    : {
        get(n, s, a = { miss: () => Promise.resolve() }) {
          return r.get(n, s, a).catch(() => R({ caches: t }).get(n, s, a));
        },
        set(n, s) {
          return r.set(n, s).catch(() => R({ caches: t }).set(n, s));
        },
        delete(n) {
          return r.delete(n).catch(() => R({ caches: t }).delete(n));
        },
        clear() {
          return r.clear().catch(() => R({ caches: t }).clear());
        },
      };
}
function he() {
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
function U(e = { serializable: !0 }) {
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
function $(e, t, r) {
  const n = { "x-algolia-api-key": r, "x-algolia-application-id": t };
  return {
    headers() {
      return e === N.WithinHeaders ? n : {};
    },
    queryParameters() {
      return e === N.WithinQueryParameters ? n : {};
    },
  };
}
function k(e) {
  let t = 0;
  const r = () => (
    t++,
    new Promise((n) => {
      setTimeout(() => {
        n(e(r));
      }, Math.min(100 * t, 1e3));
    })
  );
  return e(r);
}
function h(e, t = (r, n) => Promise.resolve()) {
  return Object.assign(e, {
    wait(r) {
      return h(e.then((n) => Promise.all([t(n, r), n])).then((n) => n[1]));
    },
  });
}
function pe(e) {
  let t = e.length - 1;
  for (t; t > 0; t--) {
    const r = Math.floor(Math.random() * (t + 1)),
      n = e[t];
    (e[t] = e[r]), (e[r] = n);
  }
  return e;
}
function v(e, t) {
  return (
    t &&
      Object.keys(t).forEach((r) => {
        e[r] = t[r](e);
      }),
    e
  );
}
function u(e, ...t) {
  let r = 0;
  return e.replace(/%s/g, () => encodeURIComponent(t[r++]));
}
const G = "4.14.3",
  N = { WithinQueryParameters: 0, WithinHeaders: 1 };
function D(e, t) {
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
const S = { Read: 1, Write: 2, Any: 3 },
  E = { Up: 1, Down: 2, Timeouted: 3 },
  V = 2 * 60 * 1e3;
function Y(e, t = E.Up) {
  return { ...e, status: t, lastUpdate: Date.now() };
}
function me(e) {
  return e.status === E.Up || Date.now() - e.lastUpdate > V;
}
function ge(e) {
  return e.status === E.Timeouted && Date.now() - e.lastUpdate <= V;
}
function Z(e) {
  return typeof e == "string"
    ? { protocol: "https", url: e, accept: S.Any }
    : {
        protocol: e.protocol || "https",
        url: e.url,
        accept: e.accept || S.Any,
      };
}
const i = { Delete: "DELETE", Get: "GET", Post: "POST", Put: "PUT" };
function ye(e, t) {
  return Promise.all(t.map((r) => e.get(r, () => Promise.resolve(Y(r))))).then(
    (r) => {
      const n = r.filter((c) => me(c)),
        s = r.filter((c) => ge(c)),
        a = [...n, ...s],
        o = a.length > 0 ? a.map((c) => Z(c)) : t;
      return {
        getTimeout(c, l) {
          return (s.length === 0 && c === 0 ? 1 : s.length + 3 + c) * l;
        },
        statelessHosts: o,
      };
    }
  );
}
const fe = ({ isTimedOut: e, status: t }) => !e && ~~t === 0,
  Pe = (e) => {
    const t = e.status;
    return e.isTimedOut || fe(e) || (~~(t / 100) !== 2 && ~~(t / 100) !== 4);
  },
  Ie = ({ status: e }) => ~~(e / 100) === 2,
  we = (e, t) => (Pe(e) ? t.onRetry(e) : Ie(e) ? t.onSuccess(e) : t.onFail(e));
function L(e, t, r, n) {
  const s = [],
    a = je(r, n),
    o = Se(e, n),
    c = r.method,
    l = r.method !== i.Get ? {} : { ...r.data, ...n.data },
    p = {
      "x-algolia-agent": e.userAgent.value,
      ...e.queryParameters,
      ...l,
      ...n.queryParameters,
    };
  let m = 0;
  const d = (f, w) => {
    const g = f.pop();
    if (g === void 0) throw Re(Q(s));
    const I = {
        data: a,
        headers: o,
        method: c,
        url: Oe(g, r.path, p),
        connectTimeout: w(m, e.timeouts.connect),
        responseTimeout: w(m, n.timeout),
      },
      b = (y) => {
        const O = { request: I, response: y, host: g, triesLeft: f.length };
        return s.push(O), O;
      },
      x = {
        onSuccess: (y) => xe(y),
        onRetry(y) {
          const O = b(y);
          return (
            y.isTimedOut && m++,
            Promise.all([
              e.logger.info("Retryable failure", te(O)),
              e.hostsCache.set(g, Y(g, y.isTimedOut ? E.Timeouted : E.Down)),
            ]).then(() => d(f, w))
          );
        },
        onFail(y) {
          throw (b(y), be(y, Q(s)));
        },
      };
    return e.requester.send(I).then((y) => we(y, x));
  };
  return ye(e.hostsCache, t).then((f) =>
    d([...f.statelessHosts].reverse(), f.getTimeout)
  );
}
function H(e) {
  const {
      hostsCache: t,
      logger: r,
      requester: n,
      requestsCache: s,
      responsesCache: a,
      timeouts: o,
      userAgent: c,
      hosts: l,
      queryParameters: p,
      headers: m,
    } = e,
    d = {
      hostsCache: t,
      logger: r,
      requester: n,
      requestsCache: s,
      responsesCache: a,
      timeouts: o,
      userAgent: c,
      headers: m,
      queryParameters: p,
      hosts: l.map((f) => Z(f)),
      read(f, w) {
        const g = D(w, d.timeouts.read),
          I = () =>
            L(
              d,
              d.hosts.filter((y) => (y.accept & S.Read) !== 0),
              f,
              g
            );
        if ((g.cacheable !== void 0 ? g.cacheable : f.cacheable) !== !0)
          return I();
        const x = {
          request: f,
          mappedRequestOptions: g,
          transporter: {
            queryParameters: d.queryParameters,
            headers: d.headers,
          },
        };
        return d.responsesCache.get(
          x,
          () =>
            d.requestsCache.get(x, () =>
              d.requestsCache
                .set(x, I())
                .then(
                  (y) => Promise.all([d.requestsCache.delete(x), y]),
                  (y) =>
                    Promise.all([d.requestsCache.delete(x), Promise.reject(y)])
                )
                .then(([y, O]) => O)
            ),
          { miss: (y) => d.responsesCache.set(x, y) }
        );
      },
      write(f, w) {
        return L(
          d,
          d.hosts.filter((g) => (g.accept & S.Write) !== 0),
          f,
          D(w, d.timeouts.write)
        );
      },
    };
  return d;
}
function De(e) {
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
function xe(e) {
  try {
    return JSON.parse(e.content);
  } catch (t) {
    throw Te(t.message, e);
  }
}
function be({ content: e, status: t }, r) {
  let n = e;
  try {
    n = JSON.parse(e).message;
  } catch {}
  return ke(n, t, r);
}
function Oe(e, t, r) {
  const n = ee(r);
  let s = `${e.protocol}://${e.url}/${t.charAt(0) === "/" ? t.substr(1) : t}`;
  return n.length && (s += `?${n}`), s;
}
function ee(e) {
  const t = (r) =>
    Object.prototype.toString.call(r) === "[object Object]" ||
    Object.prototype.toString.call(r) === "[object Array]";
  return Object.keys(e)
    .map((r) => u("%s=%s", r, t(e[r]) ? JSON.stringify(e[r]) : e[r]))
    .join("&");
}
function je(e, t) {
  if (e.method === i.Get || (e.data === void 0 && t.data === void 0)) return;
  const r = Array.isArray(e.data) ? e.data : { ...e.data, ...t.data };
  return JSON.stringify(r);
}
function Se(e, t) {
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
function Q(e) {
  return e.map((t) => te(t));
}
function te(e) {
  const t = e.request.headers["x-algolia-api-key"]
    ? { "x-algolia-api-key": "*****" }
    : {};
  return {
    ...e,
    request: { ...e.request, headers: { ...e.request.headers, ...t } },
  };
}
function ke(e, t, r) {
  return { name: "ApiError", message: e, status: t, transporterStackTrace: r };
}
function Te(e, t) {
  return { name: "DeserializationError", message: e, response: t };
}
function Re(e) {
  return {
    name: "RetryError",
    message:
      "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
    transporterStackTrace: e,
  };
}
const Ne = (e) => {
    const t = e.region || "us",
      r = $(N.WithinHeaders, e.appId, e.apiKey),
      n = H({
        hosts: [{ url: `analytics.${t}.algolia.com` }],
        ...e,
        headers: {
          ...r.headers(),
          "content-type": "application/json",
          ...e.headers,
        },
        queryParameters: { ...r.queryParameters(), ...e.queryParameters },
      }),
      s = e.appId;
    return v({ appId: s, transporter: n }, e.methods);
  },
  Ee = (e) => (t, r) =>
    e.transporter.write({ method: i.Post, path: "2/abtests", data: t }, r),
  qe = (e) => (t, r) =>
    e.transporter.write({ method: i.Delete, path: u("2/abtests/%s", t) }, r),
  Ae = (e) => (t, r) =>
    e.transporter.read({ method: i.Get, path: u("2/abtests/%s", t) }, r),
  ve = (e) => (t) =>
    e.transporter.read({ method: i.Get, path: "2/abtests" }, t),
  Ce = (e) => (t, r) =>
    e.transporter.write({ method: i.Post, path: u("2/abtests/%s/stop", t) }, r),
  Ue = (e) => {
    const t = e.region || "us",
      r = $(N.WithinHeaders, e.appId, e.apiKey),
      n = H({
        hosts: [{ url: `personalization.${t}.algolia.com` }],
        ...e,
        headers: {
          ...r.headers(),
          "content-type": "application/json",
          ...e.headers,
        },
        queryParameters: { ...r.queryParameters(), ...e.queryParameters },
      });
    return v({ appId: e.appId, transporter: n }, e.methods);
  },
  Ge = (e) => (t) =>
    e.transporter.read(
      { method: i.Get, path: "1/strategies/personalization" },
      t
    ),
  ze = (e) => (t, r) =>
    e.transporter.write(
      { method: i.Post, path: "1/strategies/personalization", data: t },
      r
    );
function M(e) {
  const t = (r) =>
    e.request(r).then((n) => {
      if ((e.batch !== void 0 && e.batch(n.hits), !e.shouldStop(n)))
        return n.cursor
          ? t({ cursor: n.cursor })
          : t({ page: (r.page || 0) + 1 });
    });
  return t({});
}
const $e = (e) => {
  const t = e.appId,
    r = $(e.authMode !== void 0 ? e.authMode : N.WithinHeaders, t, e.apiKey),
    n = H({
      hosts: [
        { url: `${t}-dsn.algolia.net`, accept: S.Read },
        { url: `${t}.algolia.net`, accept: S.Write },
      ].concat(
        pe([
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
  return v(
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
};
function He() {
  return {
    name: "MissingObjectIDError",
    message:
      "All objects must have an unique objectID (like a primary key) to be valid. Algolia is also able to generate objectIDs automatically but *it's not recommended*. To do it, use the `{'autoGenerateObjectIDIfNotExist': true}` option.",
  };
}
function Me() {
  return { name: "ObjectNotFoundError", message: "Object not found." };
}
const Je = (e) => (t, r) => {
    const { queryParameters: n, ...s } = r || {},
      a = { acl: t, ...(n !== void 0 ? { queryParameters: n } : {}) },
      o = (c, l) =>
        k((p) =>
          q(e)(c.key, l).catch((m) => {
            if (m.status !== 404) throw m;
            return p();
          })
        );
    return h(
      e.transporter.write({ method: i.Post, path: "1/keys", data: a }, s),
      o
    );
  },
  We = (e) => (t, r, n) => {
    const s = D(n);
    return (
      (s.queryParameters["X-Algolia-User-ID"] = t),
      e.transporter.write(
        { method: i.Post, path: "1/clusters/mapping", data: { cluster: r } },
        s
      )
    );
  },
  Be = (e) => (t, r, n) =>
    e.transporter.write(
      {
        method: i.Post,
        path: "1/clusters/mapping/batch",
        data: { users: t, cluster: r },
      },
      n
    ),
  Fe = (e) => (t, r) =>
    h(
      e.transporter.write(
        {
          method: i.Post,
          path: u("/1/dictionaries/%s/batch", t),
          data: {
            clearExistingDictionaryEntries: !0,
            requests: { action: "addEntry", body: [] },
          },
        },
        r
      ),
      (n, s) => T(e)(n.taskID, s)
    ),
  C = (e) => (t, r, n) => {
    const s = (a, o) =>
      A(e)(t, { methods: { waitTask: P } }).waitTask(a.taskID, o);
    return h(
      e.transporter.write(
        {
          method: i.Post,
          path: u("1/indexes/%s/operation", t),
          data: { operation: "copy", destination: r },
        },
        n
      ),
      s
    );
  },
  _e = (e) => (t, r, n) => C(e)(t, r, { ...n, scope: [_.Rules] }),
  Le = (e) => (t, r, n) => C(e)(t, r, { ...n, scope: [_.Settings] }),
  Qe = (e) => (t, r, n) => C(e)(t, r, { ...n, scope: [_.Synonyms] }),
  Ke = (e) => (t, r) =>
    t.method === i.Get ? e.transporter.read(t, r) : e.transporter.write(t, r),
  Xe = (e) => (t, r) => {
    const n = (s, a) =>
      k((o) =>
        q(e)(t, a)
          .then(o)
          .catch((c) => {
            if (c.status !== 404) throw c;
          })
      );
    return h(
      e.transporter.write({ method: i.Delete, path: u("1/keys/%s", t) }, r),
      n
    );
  },
  Ve = (e) => (t, r, n) => {
    const s = r.map((a) => ({ action: "deleteEntry", body: { objectID: a } }));
    return h(
      e.transporter.write(
        {
          method: i.Post,
          path: u("/1/dictionaries/%s/batch", t),
          data: { clearExistingDictionaryEntries: !1, requests: s },
        },
        n
      ),
      (a, o) => T(e)(a.taskID, o)
    );
  },
  q = (e) => (t, r) =>
    e.transporter.read({ method: i.Get, path: u("1/keys/%s", t) }, r),
  re = (e) => (t, r) =>
    e.transporter.read(
      { method: i.Get, path: u("1/task/%s", t.toString()) },
      r
    ),
  Ye = (e) => (t) =>
    e.transporter.read(
      { method: i.Get, path: "/1/dictionaries/*/settings" },
      t
    ),
  Ze = (e) => (t) => e.transporter.read({ method: i.Get, path: "1/logs" }, t),
  et = (e) => (t) =>
    e.transporter.read({ method: i.Get, path: "1/clusters/mapping/top" }, t),
  tt = (e) => (t, r) =>
    e.transporter.read(
      { method: i.Get, path: u("1/clusters/mapping/%s", t) },
      r
    ),
  rt = (e) => (t) => {
    const { retrieveMappings: r, ...n } = t || {};
    return (
      r === !0 && (n.getClusters = !0),
      e.transporter.read(
        { method: i.Get, path: "1/clusters/mapping/pending" },
        n
      )
    );
  },
  A =
    (e) =>
    (t, r = {}) => {
      const n = { transporter: e.transporter, appId: e.appId, indexName: t };
      return v(n, r.methods);
    },
  nt = (e) => (t) => e.transporter.read({ method: i.Get, path: "1/keys" }, t),
  st = (e) => (t) =>
    e.transporter.read({ method: i.Get, path: "1/clusters" }, t),
  at = (e) => (t) =>
    e.transporter.read({ method: i.Get, path: "1/indexes" }, t),
  ot = (e) => (t) =>
    e.transporter.read({ method: i.Get, path: "1/clusters/mapping" }, t),
  it = (e) => (t, r, n) => {
    const s = (a, o) =>
      A(e)(t, { methods: { waitTask: P } }).waitTask(a.taskID, o);
    return h(
      e.transporter.write(
        {
          method: i.Post,
          path: u("1/indexes/%s/operation", t),
          data: { operation: "move", destination: r },
        },
        n
      ),
      s
    );
  },
  ct = (e) => (t, r) => {
    const n = (s, a) =>
      Promise.all(
        Object.keys(s.taskID).map((o) =>
          A(e)(o, { methods: { waitTask: P } }).waitTask(s.taskID[o], a)
        )
      );
    return h(
      e.transporter.write(
        { method: i.Post, path: "1/indexes/*/batch", data: { requests: t } },
        r
      ),
      n
    );
  },
  ut = (e) => (t, r) =>
    e.transporter.read(
      { method: i.Post, path: "1/indexes/*/objects", data: { requests: t } },
      r
    ),
  K = (e) => (t, r) => {
    const n = t.map((s) => ({ ...s, params: ee(s.params || {}) }));
    return e.transporter.read(
      {
        method: i.Post,
        path: "1/indexes/*/queries",
        data: { requests: n },
        cacheable: !0,
      },
      r
    );
  },
  X = (e) => (t, r) =>
    Promise.all(
      t.map((n) => {
        const { facetName: s, facetQuery: a, ...o } = n.params;
        return A(e)(n.indexName, {
          methods: { searchForFacetValues: ce },
        }).searchForFacetValues(s, a, { ...r, ...o });
      })
    ),
  dt = (e) => (t, r) => {
    const n = D(r);
    return (
      (n.queryParameters["X-Algolia-User-ID"] = t),
      e.transporter.write({ method: i.Delete, path: "1/clusters/mapping" }, n)
    );
  },
  lt = (e) => (t, r, n) => {
    const s = r.map((a) => ({ action: "addEntry", body: a }));
    return h(
      e.transporter.write(
        {
          method: i.Post,
          path: u("/1/dictionaries/%s/batch", t),
          data: { clearExistingDictionaryEntries: !0, requests: s },
        },
        n
      ),
      (a, o) => T(e)(a.taskID, o)
    );
  },
  ht = (e) => (t, r) => {
    const n = (s, a) =>
      k((o) =>
        q(e)(t, a).catch((c) => {
          if (c.status !== 404) throw c;
          return o();
        })
      );
    return h(
      e.transporter.write(
        { method: i.Post, path: u("1/keys/%s/restore", t) },
        r
      ),
      n
    );
  },
  pt = (e) => (t, r, n) => {
    const s = r.map((a) => ({ action: "addEntry", body: a }));
    return h(
      e.transporter.write(
        {
          method: i.Post,
          path: u("/1/dictionaries/%s/batch", t),
          data: { clearExistingDictionaryEntries: !1, requests: s },
        },
        n
      ),
      (a, o) => T(e)(a.taskID, o)
    );
  },
  mt = (e) => (t, r, n) =>
    e.transporter.read(
      {
        method: i.Post,
        path: u("/1/dictionaries/%s/search", t),
        data: { query: r },
        cacheable: !0,
      },
      n
    ),
  gt = (e) => (t, r) =>
    e.transporter.read(
      { method: i.Post, path: "1/clusters/mapping/search", data: { query: t } },
      r
    ),
  yt = (e) => (t, r) =>
    h(
      e.transporter.write(
        { method: i.Put, path: "/1/dictionaries/*/settings", data: t },
        r
      ),
      (n, s) => T(e)(n.taskID, s)
    ),
  ft = (e) => (t, r) => {
    const n = Object.assign({}, r),
      { queryParameters: s, ...a } = r || {},
      o = s ? { queryParameters: s } : {},
      c = [
        "acl",
        "indexes",
        "referers",
        "restrictSources",
        "queryParameters",
        "description",
        "maxQueriesPerIPPerHour",
        "maxHitsPerQuery",
      ],
      l = (m) =>
        Object.keys(n)
          .filter((d) => c.indexOf(d) !== -1)
          .every((d) => m[d] === n[d]),
      p = (m, d) =>
        k((f) => q(e)(t, d).then((w) => (l(w) ? Promise.resolve() : f())));
    return h(
      e.transporter.write(
        { method: i.Put, path: u("1/keys/%s", t), data: o },
        a
      ),
      p
    );
  },
  T = (e) => (t, r) =>
    k((n) =>
      re(e)(t, r).then((s) => (s.status !== "published" ? n() : void 0))
    ),
  ne = (e) => (t, r) => {
    const n = (s, a) => P(e)(s.taskID, a);
    return h(
      e.transporter.write(
        {
          method: i.Post,
          path: u("1/indexes/%s/batch", e.indexName),
          data: { requests: t },
        },
        r
      ),
      n
    );
  },
  Pt = (e) => (t) =>
    M({
      shouldStop: (r) => r.cursor === void 0,
      ...t,
      request: (r) =>
        e.transporter.read(
          {
            method: i.Post,
            path: u("1/indexes/%s/browse", e.indexName),
            data: r,
          },
          t
        ),
    }),
  It = (e) => (t) => {
    const r = { hitsPerPage: 1e3, ...t };
    return M({
      shouldStop: (n) => n.hits.length < r.hitsPerPage,
      ...r,
      request(n) {
        return ue(e)("", { ...r, ...n }).then((s) => ({
          ...s,
          hits: s.hits.map((a) => (delete a._highlightResult, a)),
        }));
      },
    });
  },
  wt = (e) => (t) => {
    const r = { hitsPerPage: 1e3, ...t };
    return M({
      shouldStop: (n) => n.hits.length < r.hitsPerPage,
      ...r,
      request(n) {
        return de(e)("", { ...r, ...n }).then((s) => ({
          ...s,
          hits: s.hits.map((a) => (delete a._highlightResult, a)),
        }));
      },
    });
  },
  J = (e) => (t, r, n) => {
    const { batchSize: s, ...a } = n || {},
      o = { taskIDs: [], objectIDs: [] },
      c = (l = 0) => {
        const p = [];
        let m;
        for (
          m = l;
          m < t.length && (p.push(t[m]), p.length !== (s || 1e3));
          m++
        );
        return p.length === 0
          ? Promise.resolve(o)
          : ne(e)(
              p.map((d) => ({ action: r, body: d })),
              a
            ).then(
              (d) => (
                (o.objectIDs = o.objectIDs.concat(d.objectIDs)),
                o.taskIDs.push(d.taskID),
                m++,
                c(m)
              )
            );
      };
    return h(c(), (l, p) => Promise.all(l.taskIDs.map((m) => P(e)(m, p))));
  },
  Dt = (e) => (t) =>
    h(
      e.transporter.write(
        { method: i.Post, path: u("1/indexes/%s/clear", e.indexName) },
        t
      ),
      (r, n) => P(e)(r.taskID, n)
    ),
  xt = (e) => (t) => {
    const { forwardToReplicas: r, ...n } = t || {},
      s = D(n);
    return (
      r && (s.queryParameters.forwardToReplicas = 1),
      h(
        e.transporter.write(
          { method: i.Post, path: u("1/indexes/%s/rules/clear", e.indexName) },
          s
        ),
        (a, o) => P(e)(a.taskID, o)
      )
    );
  },
  bt = (e) => (t) => {
    const { forwardToReplicas: r, ...n } = t || {},
      s = D(n);
    return (
      r && (s.queryParameters.forwardToReplicas = 1),
      h(
        e.transporter.write(
          {
            method: i.Post,
            path: u("1/indexes/%s/synonyms/clear", e.indexName),
          },
          s
        ),
        (a, o) => P(e)(a.taskID, o)
      )
    );
  },
  Ot = (e) => (t, r) =>
    h(
      e.transporter.write(
        {
          method: i.Post,
          path: u("1/indexes/%s/deleteByQuery", e.indexName),
          data: t,
        },
        r
      ),
      (n, s) => P(e)(n.taskID, s)
    ),
  jt = (e) => (t) =>
    h(
      e.transporter.write(
        { method: i.Delete, path: u("1/indexes/%s", e.indexName) },
        t
      ),
      (r, n) => P(e)(r.taskID, n)
    ),
  St = (e) => (t, r) =>
    h(
      se(e)([t], r).then((n) => ({ taskID: n.taskIDs[0] })),
      (n, s) => P(e)(n.taskID, s)
    ),
  se = (e) => (t, r) => {
    const n = t.map((s) => ({ objectID: s }));
    return J(e)(n, j.DeleteObject, r);
  },
  kt = (e) => (t, r) => {
    const { forwardToReplicas: n, ...s } = r || {},
      a = D(s);
    return (
      n && (a.queryParameters.forwardToReplicas = 1),
      h(
        e.transporter.write(
          {
            method: i.Delete,
            path: u("1/indexes/%s/rules/%s", e.indexName, t),
          },
          a
        ),
        (o, c) => P(e)(o.taskID, c)
      )
    );
  },
  Tt = (e) => (t, r) => {
    const { forwardToReplicas: n, ...s } = r || {},
      a = D(s);
    return (
      n && (a.queryParameters.forwardToReplicas = 1),
      h(
        e.transporter.write(
          {
            method: i.Delete,
            path: u("1/indexes/%s/synonyms/%s", e.indexName, t),
          },
          a
        ),
        (o, c) => P(e)(o.taskID, c)
      )
    );
  },
  Rt = (e) => (t) =>
    ae(e)(t)
      .then(() => !0)
      .catch((r) => {
        if (r.status !== 404) throw r;
        return !1;
      }),
  Nt = (e) => (t, r, n) =>
    e.transporter.read(
      {
        method: i.Post,
        path: u("1/answers/%s/prediction", e.indexName),
        data: { query: t, queryLanguages: r },
        cacheable: !0,
      },
      n
    ),
  Et = (e) => (t, r) => {
    const { query: n, paginate: s, ...a } = r || {};
    let o = 0;
    const c = () =>
      ie(e)(n || "", { ...a, page: o }).then((l) => {
        for (const [p, m] of Object.entries(l.hits))
          if (t(m)) return { object: m, position: parseInt(p, 10), page: o };
        if ((o++, s === !1 || o >= l.nbPages)) throw Me();
        return c();
      });
    return c();
  },
  qt = (e) => (t, r) =>
    e.transporter.read(
      { method: i.Get, path: u("1/indexes/%s/%s", e.indexName, t) },
      r
    ),
  At = () => (e, t) => {
    for (const [r, n] of Object.entries(e.hits))
      if (n.objectID === t) return parseInt(r, 10);
    return -1;
  },
  vt = (e) => (t, r) => {
    const { attributesToRetrieve: n, ...s } = r || {},
      a = t.map((o) => ({
        indexName: e.indexName,
        objectID: o,
        ...(n ? { attributesToRetrieve: n } : {}),
      }));
    return e.transporter.read(
      { method: i.Post, path: "1/indexes/*/objects", data: { requests: a } },
      s
    );
  },
  Ct = (e) => (t, r) =>
    e.transporter.read(
      { method: i.Get, path: u("1/indexes/%s/rules/%s", e.indexName, t) },
      r
    ),
  ae = (e) => (t) =>
    e.transporter.read(
      {
        method: i.Get,
        path: u("1/indexes/%s/settings", e.indexName),
        data: { getVersion: 2 },
      },
      t
    ),
  Ut = (e) => (t, r) =>
    e.transporter.read(
      { method: i.Get, path: u("1/indexes/%s/synonyms/%s", e.indexName, t) },
      r
    ),
  Gt = (e) => (t, r) =>
    e.transporter.read(
      {
        method: i.Get,
        path: u("1/indexes/%s/task/%s", e.indexName, t.toString()),
      },
      r
    ),
  zt = (e) => (t, r) =>
    h(
      oe(e)([t], r).then((n) => ({
        objectID: n.objectIDs[0],
        taskID: n.taskIDs[0],
      })),
      (n, s) => P(e)(n.taskID, s)
    ),
  oe = (e) => (t, r) => {
    const { createIfNotExists: n, ...s } = r || {},
      a = n ? j.PartialUpdateObject : j.PartialUpdateObjectNoCreate;
    return J(e)(t, a, s);
  },
  $t = (e) => (t, r) => {
    const {
        safe: n,
        autoGenerateObjectIDIfNotExist: s,
        batchSize: a,
        ...o
      } = r || {},
      c = (g, I, b, x) =>
        h(
          e.transporter.write(
            {
              method: i.Post,
              path: u("1/indexes/%s/operation", g),
              data: { operation: b, destination: I },
            },
            x
          ),
          (y, O) => P(e)(y.taskID, O)
        ),
      l = Math.random().toString(36).substring(7),
      p = `${e.indexName}_tmp_${l}`,
      m = W({ appId: e.appId, transporter: e.transporter, indexName: p });
    let d = [];
    const f = c(e.indexName, p, "copy", {
      ...o,
      scope: ["settings", "synonyms", "rules"],
    });
    d.push(f);
    const w = (n ? f.wait(o) : f)
      .then(() => {
        const g = m(t, {
          ...o,
          autoGenerateObjectIDIfNotExist: s,
          batchSize: a,
        });
        return d.push(g), n ? g.wait(o) : g;
      })
      .then(() => {
        const g = c(p, e.indexName, "move", o);
        return d.push(g), n ? g.wait(o) : g;
      })
      .then(() => Promise.all(d))
      .then(([g, I, b]) => ({
        objectIDs: I.objectIDs,
        taskIDs: [g.taskID, ...I.taskIDs, b.taskID],
      }));
    return h(w, (g, I) => Promise.all(d.map((b) => b.wait(I))));
  },
  Ht = (e) => (t, r) => B(e)(t, { ...r, clearExistingRules: !0 }),
  Mt = (e) => (t, r) => F(e)(t, { ...r, clearExistingSynonyms: !0 }),
  Jt = (e) => (t, r) =>
    h(
      W(e)([t], r).then((n) => ({
        objectID: n.objectIDs[0],
        taskID: n.taskIDs[0],
      })),
      (n, s) => P(e)(n.taskID, s)
    ),
  W = (e) => (t, r) => {
    const { autoGenerateObjectIDIfNotExist: n, ...s } = r || {},
      a = n ? j.AddObject : j.UpdateObject;
    if (a === j.UpdateObject) {
      for (const o of t)
        if (o.objectID === void 0) return h(Promise.reject(He()));
    }
    return J(e)(t, a, s);
  },
  Wt = (e) => (t, r) => B(e)([t], r),
  B = (e) => (t, r) => {
    const { forwardToReplicas: n, clearExistingRules: s, ...a } = r || {},
      o = D(a);
    return (
      n && (o.queryParameters.forwardToReplicas = 1),
      s && (o.queryParameters.clearExistingRules = 1),
      h(
        e.transporter.write(
          {
            method: i.Post,
            path: u("1/indexes/%s/rules/batch", e.indexName),
            data: t,
          },
          o
        ),
        (c, l) => P(e)(c.taskID, l)
      )
    );
  },
  Bt = (e) => (t, r) => F(e)([t], r),
  F = (e) => (t, r) => {
    const {
        forwardToReplicas: n,
        clearExistingSynonyms: s,
        replaceExistingSynonyms: a,
        ...o
      } = r || {},
      c = D(o);
    return (
      n && (c.queryParameters.forwardToReplicas = 1),
      (a || s) && (c.queryParameters.replaceExistingSynonyms = 1),
      h(
        e.transporter.write(
          {
            method: i.Post,
            path: u("1/indexes/%s/synonyms/batch", e.indexName),
            data: t,
          },
          c
        ),
        (l, p) => P(e)(l.taskID, p)
      )
    );
  },
  ie = (e) => (t, r) =>
    e.transporter.read(
      {
        method: i.Post,
        path: u("1/indexes/%s/query", e.indexName),
        data: { query: t },
        cacheable: !0,
      },
      r
    ),
  ce = (e) => (t, r, n) =>
    e.transporter.read(
      {
        method: i.Post,
        path: u("1/indexes/%s/facets/%s/query", e.indexName, t),
        data: { facetQuery: r },
        cacheable: !0,
      },
      n
    ),
  ue = (e) => (t, r) =>
    e.transporter.read(
      {
        method: i.Post,
        path: u("1/indexes/%s/rules/search", e.indexName),
        data: { query: t },
      },
      r
    ),
  de = (e) => (t, r) =>
    e.transporter.read(
      {
        method: i.Post,
        path: u("1/indexes/%s/synonyms/search", e.indexName),
        data: { query: t },
      },
      r
    ),
  Ft = (e) => (t, r) => {
    const { forwardToReplicas: n, ...s } = r || {},
      a = D(s);
    return (
      n && (a.queryParameters.forwardToReplicas = 1),
      h(
        e.transporter.write(
          {
            method: i.Put,
            path: u("1/indexes/%s/settings", e.indexName),
            data: t,
          },
          a
        ),
        (o, c) => P(e)(o.taskID, c)
      )
    );
  },
  P = (e) => (t, r) =>
    k((n) =>
      Gt(e)(t, r).then((s) => (s.status !== "published" ? n() : void 0))
    ),
  j = {
    AddObject: "addObject",
    UpdateObject: "updateObject",
    PartialUpdateObject: "partialUpdateObject",
    PartialUpdateObjectNoCreate: "partialUpdateObjectNoCreate",
    DeleteObject: "deleteObject",
    DeleteIndex: "delete",
    ClearIndex: "clear",
  },
  _ = { Settings: "settings", Synonyms: "synonyms", Rules: "rules" },
  z = { Debug: 1, Info: 2, Error: 3 };
function _t(e) {
  return {
    debug(t, r) {
      return z.Debug >= e && console.debug(t, r), Promise.resolve();
    },
    info(t, r) {
      return z.Info >= e && console.info(t, r), Promise.resolve();
    },
    error(t, r) {
      return console.error(t, r), Promise.resolve();
    },
  };
}
function Lt() {
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
function Qt(e, t, r) {
  const n = {
      appId: e,
      apiKey: t,
      timeouts: { connect: 1, read: 2, write: 30 },
      requester: Lt(),
      logger: _t(z.Error),
      responsesCache: U(),
      requestsCache: U({ serializable: !1 }),
      hostsCache: R({ caches: [le({ key: `${G}-${e}` }), U()] }),
      userAgent: De(G).add({ segment: "Browser" }),
    },
    s = { ...n, ...r },
    a = () => (o) =>
      Ue({
        ...n,
        ...o,
        methods: {
          getPersonalizationStrategy: Ge,
          setPersonalizationStrategy: ze,
        },
      });
  return $e({
    ...s,
    methods: {
      search: K,
      searchForFacetValues: X,
      multipleBatch: ct,
      multipleGetObjects: ut,
      multipleQueries: K,
      copyIndex: C,
      copySettings: Le,
      copySynonyms: Qe,
      copyRules: _e,
      moveIndex: it,
      listIndices: at,
      getLogs: Ze,
      listClusters: st,
      multipleSearchForFacetValues: X,
      getApiKey: q,
      addApiKey: Je,
      listApiKeys: nt,
      updateApiKey: ft,
      deleteApiKey: Xe,
      restoreApiKey: ht,
      assignUserID: We,
      assignUserIDs: Be,
      getUserID: tt,
      searchUserIDs: gt,
      listUserIDs: ot,
      getTopUserIDs: et,
      removeUserID: dt,
      hasPendingMappings: rt,
      clearDictionaryEntries: Fe,
      deleteDictionaryEntries: Ve,
      getDictionarySettings: Ye,
      getAppTask: re,
      replaceDictionaryEntries: lt,
      saveDictionaryEntries: pt,
      searchDictionaryEntries: mt,
      setDictionarySettings: yt,
      waitAppTask: T,
      customRequest: Ke,
      initIndex: (o) => (c) =>
        A(o)(c, {
          methods: {
            batch: ne,
            delete: jt,
            findAnswers: Nt,
            getObject: qt,
            getObjects: vt,
            saveObject: Jt,
            saveObjects: W,
            search: ie,
            searchForFacetValues: ce,
            waitTask: P,
            setSettings: Ft,
            getSettings: ae,
            partialUpdateObject: zt,
            partialUpdateObjects: oe,
            deleteObject: St,
            deleteObjects: se,
            deleteBy: Ot,
            clearObjects: Dt,
            browseObjects: Pt,
            getObjectPosition: At,
            findObject: Et,
            exists: Rt,
            saveSynonym: Bt,
            saveSynonyms: F,
            getSynonym: Ut,
            searchSynonyms: de,
            browseSynonyms: wt,
            deleteSynonym: Tt,
            clearSynonyms: bt,
            replaceAllObjects: $t,
            replaceAllSynonyms: Mt,
            searchRules: ue,
            getRule: Ct,
            deleteRule: kt,
            saveRule: Wt,
            saveRules: B,
            replaceAllRules: Ht,
            browseRules: It,
            clearRules: xt,
          },
        }),
      initAnalytics: () => (o) =>
        Ne({
          ...n,
          ...o,
          methods: {
            addABTest: Ee,
            getABTest: Ae,
            getABTests: ve,
            stopABTest: Ce,
            deleteABTest: qe,
          },
        }),
      initPersonalization: a,
      initRecommendation: () => (o) => (
        s.logger.info(
          "The `initRecommendation` method is deprecated. Use `initPersonalization` instead."
        ),
        a()(o)
      ),
    },
  });
}
Qt.version = G;
export { Qt as default };
