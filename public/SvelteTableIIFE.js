var SvelteTable = (function () {
  "use strict";
  function e() {}
  function t(e) {
    return e();
  }
  function n() {
    return Object.create(null);
  }
  function l(e) {
    e.forEach(t);
  }
  function o(e) {
    return "function" == typeof e;
  }
  function r(e, t) {
    return e != e
      ? t == t
      : e !== t || (e && "object" == typeof e) || "function" == typeof e;
  }
  function c(e, t, n, l) {
    if (e) {
      const o = s(e, t, n, l);
      return e[0](o);
    }
  }
  function s(e, t, n, l) {
    return e[1] && l
      ? (function (e, t) {
          for (const n in t) e[n] = t[n];
          return e;
        })(n.ctx.slice(), e[1](l(t)))
      : n.ctx;
  }
  function i(e, t, n, l) {
    if (e[2] && l) {
      const o = e[2](l(n));
      if (void 0 === t.dirty) return o;
      if ("object" == typeof o) {
        const e = [],
          n = Math.max(t.dirty.length, o.length);
        for (let l = 0; l < n; l += 1) e[l] = t.dirty[l] | o[l];
        return e;
      }
      return t.dirty | o;
    }
    return t.dirty;
  }
  function u(e) {
    return null == e ? "" : e;
  }
  function a(e, t) {
    e.appendChild(t);
  }
  function f(e, t, n) {
    e.insertBefore(t, n || null);
  }
  function d(e) {
    e.parentNode.removeChild(e);
  }
  function m(e, t) {
    for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
  }
  function h(e) {
    return document.createElement(e);
  }
  function p(e) {
    return document.createTextNode(e);
  }
  function g() {
    return p(" ");
  }
  function y(e, t, n, l) {
    return e.addEventListener(t, n, l), () => e.removeEventListener(t, n, l);
  }
  function v(e, t, n) {
    null == n
      ? e.removeAttribute(t)
      : e.getAttribute(t) !== n && e.setAttribute(t, n);
  }
  function $(e, t) {
    (t = "" + t), e.data !== t && (e.data = t);
  }
  function w(e, t) {
    for (let n = 0; n < e.options.length; n += 1) {
      const l = e.options[n];
      if (l.__value === t) return void (l.selected = !0);
    }
  }
  let b;
  function k(e) {
    b = e;
  }
  function _() {
    const e = (function () {
      if (!b)
        throw new Error("Function called outside component initialization");
      return b;
    })();
    return (t, n) => {
      const l = e.$$.callbacks[t];
      if (l) {
        const o = (function (e, t) {
          const n = document.createEvent("CustomEvent");
          return n.initCustomEvent(e, !1, !1, t), n;
        })(t, n);
        l.slice().forEach((t) => {
          t.call(e, o);
        });
      }
    };
  }
  const N = [],
    O = [],
    x = [],
    T = [],
    E = Promise.resolve();
  let C = !1;
  function S(e) {
    x.push(e);
  }
  let A = !1;
  const B = new Set();
  function j() {
    if (!A) {
      A = !0;
      do {
        for (let e = 0; e < N.length; e += 1) {
          const t = N[e];
          k(t), V(t.$$);
        }
        for (N.length = 0; O.length; ) O.pop()();
        for (let e = 0; e < x.length; e += 1) {
          const t = x[e];
          B.has(t) || (B.add(t), t());
        }
        x.length = 0;
      } while (N.length);
      for (; T.length; ) T.pop()();
      (C = !1), (A = !1), B.clear();
    }
  }
  function V(e) {
    if (null !== e.fragment) {
      e.update(), l(e.before_update);
      const t = e.dirty;
      (e.dirty = [-1]),
        e.fragment && e.fragment.p(e.ctx, t),
        e.after_update.forEach(S);
    }
  }
  const R = new Set();
  let D;
  function L(e, t) {
    e && e.i && (R.delete(e), e.i(t));
  }
  function M(e, t, n, l) {
    if (e && e.o) {
      if (R.has(e)) return;
      R.add(e),
        D.c.push(() => {
          R.delete(e), l && (n && e.d(1), l());
        }),
        e.o(t);
    }
  }
  function q(e, t) {
    -1 === e.$$.dirty[0] &&
      (N.push(e), C || ((C = !0), E.then(j)), e.$$.dirty.fill(0)),
      (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
  }
  function H(r, c, s, i, u, a, f = [-1]) {
    const m = b;
    k(r);
    const h = c.props || {},
      p = (r.$$ = {
        fragment: null,
        ctx: null,
        props: a,
        update: e,
        not_equal: u,
        bound: n(),
        on_mount: [],
        on_destroy: [],
        before_update: [],
        after_update: [],
        context: new Map(m ? m.$$.context : []),
        callbacks: n(),
        dirty: f,
      });
    let g = !1;
    if (
      ((p.ctx = s
        ? s(r, h, (e, t, ...n) => {
            const l = n.length ? n[0] : t;
            return (
              p.ctx &&
                u(p.ctx[e], (p.ctx[e] = l)) &&
                (p.bound[e] && p.bound[e](l), g && q(r, e)),
              t
            );
          })
        : []),
      p.update(),
      (g = !0),
      l(p.before_update),
      (p.fragment = !!i && i(p.ctx)),
      c.target)
    ) {
      if (c.hydrate) {
        const e = (function (e) {
          return Array.from(e.childNodes);
        })(c.target);
        p.fragment && p.fragment.l(e), e.forEach(d);
      } else p.fragment && p.fragment.c();
      c.intro && L(r.$$.fragment),
        (function (e, n, r) {
          const {
            fragment: c,
            on_mount: s,
            on_destroy: i,
            after_update: u,
          } = e.$$;
          c && c.m(n, r),
            S(() => {
              const n = s.map(t).filter(o);
              i ? i.push(...n) : l(n), (e.$$.on_mount = []);
            }),
            u.forEach(S);
        })(r, c.target, c.anchor),
        j();
    }
    k(m);
  }
  function z(e, t, n) {
    const l = e.slice();
    return (l[34] = t[n]), l;
  }
  const F = (e) => ({ row: 8192 & e[0] }),
    I = (e) => ({ row: e[31], n: e[33] });
  function P(e, t, n) {
    const l = e.slice();
    return (l[31] = t[n]), (l[33] = n), l;
  }
  function G(e, t, n) {
    const l = e.slice();
    return (l[34] = t[n]), l;
  }
  const J = (e) => ({ sortOrder: 2 & e[0], sortBy: 1 & e[0] }),
    K = (e) => ({ sortOrder: e[1], sortBy: e[0] });
  function Q(e, t, n) {
    const l = e.slice();
    return (l[41] = t[n]), l;
  }
  function U(e, t, n) {
    const l = e.slice();
    return (l[34] = t[n]), l;
  }
  function W(e) {
    let t,
      n,
      l,
      o,
      r = e[11][e[34].key],
      c = [];
    for (let t = 0; t < r.length; t += 1) c[t] = X(Q(e, r, t));
    function s() {
      e[27].call(t, e[34]);
    }
    return {
      c() {
        (t = h("select")), (n = h("option"));
        for (let e = 0; e < c.length; e += 1) c[e].c();
        (n.__value = void 0),
          (n.value = n.__value),
          v(t, "class", (l = u(e[15](e[8])) + " svelte-w7dofd")),
          void 0 === e[12][e[34].key] && S(s);
      },
      m(l, r, i) {
        f(l, t, r), a(t, n);
        for (let e = 0; e < c.length; e += 1) c[e].m(t, null);
        w(t, e[12][e[34].key]), i && o(), (o = y(t, "change", s));
      },
      p(n, o) {
        if (((e = n), 2052 & o[0])) {
          let n;
          for (r = e[11][e[34].key], n = 0; n < r.length; n += 1) {
            const l = Q(e, r, n);
            c[n] ? c[n].p(l, o) : ((c[n] = X(l)), c[n].c(), c[n].m(t, null));
          }
          for (; n < c.length; n += 1) c[n].d(1);
          c.length = r.length;
        }
        256 & o[0] &&
          l !== (l = u(e[15](e[8])) + " svelte-w7dofd") &&
          v(t, "class", l),
          4100 & o[0] && w(t, e[12][e[34].key]);
      },
      d(e) {
        e && d(t), m(c, e), o();
      },
    };
  }
  function X(e) {
    let t,
      n,
      l,
      o = e[41].name + "";
    return {
      c() {
        (t = h("option")),
          (n = p(o)),
          (t.__value = l = e[41].value),
          (t.value = t.__value);
      },
      m(e, l) {
        f(e, t, l), a(t, n);
      },
      p(e, r) {
        2052 & r[0] && o !== (o = e[41].name + "") && $(n, o),
          2052 & r[0] && l !== (l = e[41].value) && (t.__value = l),
          (t.value = t.__value);
      },
      d(e) {
        e && d(t);
      },
    };
  }
  function Y(e) {
    let t,
      n,
      l = void 0 !== e[11][e[34].key] && W(e);
    return {
      c() {
        (t = h("th")), l && l.c(), (n = g());
      },
      m(e, o) {
        f(e, t, o), l && l.m(t, null), a(t, n);
      },
      p(e, o) {
        void 0 !== e[11][e[34].key]
          ? l
            ? l.p(e, o)
            : ((l = W(e)), l.c(), l.m(t, n))
          : l && (l.d(1), (l = null));
      },
      d(e) {
        e && d(t), l && l.d();
      },
    };
  }
  function Z(e) {
    let t,
      n = (1 === e[1] ? e[3] : e[4]) + "";
    return {
      c() {
        t = p(n);
      },
      m(e, n) {
        f(e, t, n);
      },
      p(e, l) {
        26 & l[0] && n !== (n = (1 === e[1] ? e[3] : e[4]) + "") && $(t, n);
      },
      d(e) {
        e && d(t);
      },
    };
  }
  function ee(e) {
    let t,
      n,
      l,
      o,
      r,
      c,
      s = e[34].title + "",
      i = e[0] === e[34].key && Z(e);
    function m(...t) {
      return e[28](e[34], ...t);
    }
    return {
      c() {
        (t = h("th")),
          (n = p(s)),
          (l = g()),
          i && i.c(),
          (o = g()),
          v(
            t,
            "class",
            (r =
              u(
                e[15]([e[34].sortable ? "isSortable" : null, e[34].headerClass])
              ) + " svelte-w7dofd")
          );
      },
      m(e, r, s) {
        f(e, t, r),
          a(t, n),
          a(t, l),
          i && i.m(t, null),
          a(t, o),
          s && c(),
          (c = y(t, "click", m));
      },
      p(l, c) {
        (e = l),
          4 & c[0] && s !== (s = e[34].title + "") && $(n, s),
          e[0] === e[34].key
            ? i
              ? i.p(e, c)
              : ((i = Z(e)), i.c(), i.m(t, o))
            : i && (i.d(1), (i = null)),
          4 & c[0] &&
            r !==
              (r =
                u(
                  e[15]([
                    e[34].sortable ? "isSortable" : null,
                    e[34].headerClass,
                  ])
                ) + " svelte-w7dofd") &&
            v(t, "class", r);
      },
      d(e) {
        e && d(t), i && i.d(), c();
      },
    };
  }
  function te(e) {
    let t,
      n,
      l,
      o =
        (e[34].renderValue ? e[34].renderValue(e[31]) : e[34].value(e[31])) +
        "";
    function r(...t) {
      return e[29](e[31], e[34], ...t);
    }
    return {
      c() {
        (t = h("td")),
          v(
            t,
            "class",
            (n = u(e[15]([e[34].class, e[10]])) + " svelte-w7dofd")
          );
      },
      m(e, n, c) {
        f(e, t, n), (t.innerHTML = o), c && l(), (l = y(t, "click", r));
      },
      p(l, r) {
        (e = l),
          8196 & r[0] &&
            o !==
              (o =
                (e[34].renderValue
                  ? e[34].renderValue(e[31])
                  : e[34].value(e[31])) + "") &&
            (t.innerHTML = o),
          1028 & r[0] &&
            n !== (n = u(e[15]([e[34].class, e[10]])) + " svelte-w7dofd") &&
            v(t, "class", n);
      },
      d(e) {
        e && d(t), l();
      },
    };
  }
  function ne(e) {
    let t;
    const n = e[26].row,
      l = c(n, e, e[25], I),
      o =
        l ||
        (function (e) {
          let t,
            n,
            l,
            o,
            r = e[2],
            c = [];
          for (let t = 0; t < r.length; t += 1) c[t] = te(z(e, r, t));
          function s(...t) {
            return e[30](e[31], ...t);
          }
          return {
            c() {
              t = h("tr");
              for (let e = 0; e < c.length; e += 1) c[e].c();
              (l = g()), v(t, "class", (n = u(e[15](e[9])) + " svelte-w7dofd"));
            },
            m(e, n, r) {
              f(e, t, n);
              for (let e = 0; e < c.length; e += 1) c[e].m(t, null);
              f(e, l, n), r && o(), (o = y(t, "click", s));
            },
            p(l, o) {
              if (((e = l), 304132 & o[0])) {
                let n;
                for (r = e[2], n = 0; n < r.length; n += 1) {
                  const l = z(e, r, n);
                  c[n]
                    ? c[n].p(l, o)
                    : ((c[n] = te(l)), c[n].c(), c[n].m(t, null));
                }
                for (; n < c.length; n += 1) c[n].d(1);
                c.length = r.length;
              }
              512 & o[0] &&
                n !== (n = u(e[15](e[9])) + " svelte-w7dofd") &&
                v(t, "class", n);
            },
            d(e) {
              e && d(t), m(c, e), e && d(l), o();
            },
          };
        })(e);
    return {
      c() {
        o && o.c();
      },
      m(e, n) {
        o && o.m(e, n), (t = !0);
      },
      p(e, t) {
        l
          ? l.p && 33562624 & t[0] && l.p(s(n, e, e[25], I), i(n, e[25], t, F))
          : o && o.p && 9732 & t[0] && o.p(e, t);
      },
      i(e) {
        t || (L(o, e), (t = !0));
      },
      o(e) {
        M(o, e), (t = !1);
      },
      d(e) {
        o && o.d(e);
      },
    };
  }
  function le(e) {
    let t,
      n,
      o,
      r,
      p,
      y,
      $,
      w,
      b,
      k =
        e[14] &&
        (function (e) {
          let t,
            n = e[2],
            l = [];
          for (let t = 0; t < n.length; t += 1) l[t] = Y(U(e, n, t));
          return {
            c() {
              t = h("tr");
              for (let e = 0; e < l.length; e += 1) l[e].c();
              v(t, "class", "svelte-w7dofd");
            },
            m(e, n) {
              f(e, t, n);
              for (let e = 0; e < l.length; e += 1) l[e].m(t, null);
            },
            p(e, o) {
              if (39172 & o[0]) {
                let r;
                for (n = e[2], r = 0; r < n.length; r += 1) {
                  const c = U(e, n, r);
                  l[r]
                    ? l[r].p(c, o)
                    : ((l[r] = Y(c)), l[r].c(), l[r].m(t, null));
                }
                for (; r < l.length; r += 1) l[r].d(1);
                l.length = n.length;
              }
            },
            d(e) {
              e && d(t), m(l, e);
            },
          };
        })(e);
    const _ = e[26].header,
      N = c(_, e, e[25], K),
      O =
        N ||
        (function (e) {
          let t,
            n = e[2],
            l = [];
          for (let t = 0; t < n.length; t += 1) l[t] = ee(G(e, n, t));
          return {
            c() {
              t = h("tr");
              for (let e = 0; e < l.length; e += 1) l[e].c();
            },
            m(e, n) {
              f(e, t, n);
              for (let e = 0; e < l.length; e += 1) l[e].m(t, null);
            },
            p(e, o) {
              if (98335 & o[0]) {
                let r;
                for (n = e[2], r = 0; r < n.length; r += 1) {
                  const c = G(e, n, r);
                  l[r]
                    ? l[r].p(c, o)
                    : ((l[r] = ee(c)), l[r].c(), l[r].m(t, null));
                }
                for (; r < l.length; r += 1) l[r].d(1);
                l.length = n.length;
              }
            },
            d(e) {
              e && d(t), m(l, e);
            },
          };
        })(e);
    let x = e[13],
      T = [];
    for (let t = 0; t < x.length; t += 1) T[t] = ne(P(e, x, t));
    const E = (e) =>
      M(T[e], 1, 1, () => {
        T[e] = null;
      });
    return {
      c() {
        (t = h("table")),
          (n = h("thead")),
          k && k.c(),
          (o = g()),
          O && O.c(),
          (p = g()),
          (y = h("tbody"));
        for (let e = 0; e < T.length; e += 1) T[e].c();
        v(n, "class", (r = u(e[15](e[6])) + " svelte-w7dofd")),
          v(y, "class", ($ = u(e[15](e[7])) + " svelte-w7dofd")),
          v(t, "class", (w = u(e[15](e[5])) + " svelte-w7dofd"));
      },
      m(e, l) {
        f(e, t, l),
          a(t, n),
          k && k.m(n, null),
          a(n, o),
          O && O.m(n, null),
          a(t, p),
          a(t, y);
        for (let e = 0; e < T.length; e += 1) T[e].m(y, null);
        b = !0;
      },
      p(e, o) {
        if (
          (e[14] && k.p(e, o),
          N
            ? N.p &&
              33554435 & o[0] &&
              N.p(s(_, e, e[25], K), i(_, e[25], o, J))
            : O && O.p && 31 & o[0] && O.p(e, o),
          (!b ||
            (64 & o[0] && r !== (r = u(e[15](e[6])) + " svelte-w7dofd"))) &&
            v(n, "class", r),
          33990148 & o[0])
        ) {
          let t;
          for (x = e[13], t = 0; t < x.length; t += 1) {
            const n = P(e, x, t);
            T[t]
              ? (T[t].p(n, o), L(T[t], 1))
              : ((T[t] = ne(n)), T[t].c(), L(T[t], 1), T[t].m(y, null));
          }
          for (D = { r: 0, c: [], p: D }, t = x.length; t < T.length; t += 1)
            E(t);
          D.r || l(D.c), (D = D.p);
        }
        (!b || (128 & o[0] && $ !== ($ = u(e[15](e[7])) + " svelte-w7dofd"))) &&
          v(y, "class", $),
          (!b ||
            (32 & o[0] && w !== (w = u(e[15](e[5])) + " svelte-w7dofd"))) &&
            v(t, "class", w);
      },
      i(e) {
        if (!b) {
          L(O, e);
          for (let e = 0; e < x.length; e += 1) L(T[e]);
          b = !0;
        }
      },
      o(e) {
        M(O, e), (T = T.filter(Boolean));
        for (let e = 0; e < T.length; e += 1) M(T[e]);
        b = !1;
      },
      d(e) {
        e && d(t), k && k.d(), O && O.d(e), m(T, e);
      },
    };
  }
  function oe(e, t, n) {
    const l = _();
    let { columns: o } = t,
      { rows: r } = t,
      { sortBy: c = "" } = t,
      { sortOrder: s = 1 } = t,
      { iconAsc: i = "▲" } = t,
      { iconDesc: u = "▼" } = t,
      { classNameTable: a = "" } = t,
      { classNameThead: f = "" } = t,
      { classNameTbody: d = "" } = t,
      { classNameSelect: m = "" } = t,
      { classNameRow: h = "" } = t,
      { classNameCell: p = "" } = t,
      g = () => "",
      y = o.some((e) => void 0 !== e.filterOptions),
      v = {},
      $ = {},
      w = {};
    o.forEach((e) => {
      n(21, (w[e.key] = e), w);
    });
    const b = () => {
        n(11, (v = {})),
          o.forEach((e) => {
            "function" == typeof e.filterOptions
              ? n(11, (v[e.key] = e.filterOptions(r)), v)
              : Array.isArray(e.filterOptions) &&
                n(
                  11,
                  (v[e.key] = e.filterOptions.map((e) => ({
                    name: e,
                    value: e,
                  }))),
                  v
                );
          });
      },
      k = (e) => {
        n(1, (s = e === c && 1 === s ? -1 : 1));
      },
      N = (e, t) => {
        k(t.key),
          n(0, (c = t.key)),
          l("clickCol", { event: e, col: t, key: t.key });
      },
      O = (e, t) => {
        l("clickRow", { event: e, row: t });
      },
      x = (e, t, n) => {
        l("clickCell", { event: e, row: t, key: n });
      };
    y && b();
    let { $$slots: T = {}, $$scope: E } = t;
    let C;
    return (
      (e.$set = (e) => {
        "columns" in e && n(2, (o = e.columns)),
          "rows" in e && n(19, (r = e.rows)),
          "sortBy" in e && n(0, (c = e.sortBy)),
          "sortOrder" in e && n(1, (s = e.sortOrder)),
          "iconAsc" in e && n(3, (i = e.iconAsc)),
          "iconDesc" in e && n(4, (u = e.iconDesc)),
          "classNameTable" in e && n(5, (a = e.classNameTable)),
          "classNameThead" in e && n(6, (f = e.classNameThead)),
          "classNameTbody" in e && n(7, (d = e.classNameTbody)),
          "classNameSelect" in e && n(8, (m = e.classNameSelect)),
          "classNameRow" in e && n(9, (h = e.classNameRow)),
          "classNameCell" in e && n(10, (p = e.classNameCell)),
          "$$scope" in e && n(25, (E = e.$$scope));
      }),
      (e.$$.update = () => {
        if (2097153 & e.$$.dirty[0]) {
          let e = w[c];
          void 0 !== e &&
            !0 === e.sortable &&
            "function" == typeof e.value &&
            n(20, (g = (t) => e.value(t)));
        }
        3674114 & e.$$.dirty[0] &&
          n(
            13,
            (C = r
              .filter((e) =>
                Object.keys($).every(
                  (t) =>
                    void 0 === $[t] ||
                    $[t] ===
                      ("function" == typeof w[t].filterValue
                        ? w[t].filterValue(e)
                        : w[t].value(e))
                )
              )
              .map((e) => Object.assign({}, e, { $sortOn: g(e) }))
              .sort((e, t) =>
                e.$sortOn > t.$sortOn ? s : e.$sortOn < t.$sortOn ? -s : 0
              ))
          );
      }),
      [
        c,
        s,
        o,
        i,
        u,
        a,
        f,
        d,
        m,
        h,
        p,
        v,
        $,
        C,
        y,
        (e) =>
          []
            .concat(e)
            .filter((e) => "string" == typeof e && "" !== e)
            .join(" "),
        N,
        O,
        x,
        r,
        g,
        w,
        l,
        b,
        k,
        E,
        T,
        function (e) {
          ($[e.key] = (function (e) {
            const t = e.querySelector(":checked") || e.options[0];
            return t && t.__value;
          })(this)),
            n(12, $),
            n(2, o),
            n(11, v);
        },
        (e, t) => N(t, e),
        (e, t, n) => {
          x(n, e, t.key);
        },
        (e, t) => {
          O(t, e);
        },
      ]
    );
  }
  return class extends class {
    $destroy() {
      !(function (e, t) {
        const n = e.$$;
        null !== n.fragment &&
          (l(n.on_destroy),
          n.fragment && n.fragment.d(t),
          (n.on_destroy = n.fragment = null),
          (n.ctx = []));
      })(this, 1),
        (this.$destroy = e);
    }
    $on(e, t) {
      const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return (
        n.push(t),
        () => {
          const e = n.indexOf(t);
          -1 !== e && n.splice(e, 1);
        }
      );
    }
    $set() {}
  } {
    constructor(e) {
      var t;
      super(),
        document.getElementById("svelte-w7dofd-style") ||
          (((t = h("style")).id = "svelte-w7dofd-style"),
          (t.textContent =
            "table.svelte-w7dofd.svelte-w7dofd{width:100%}.isSortable.svelte-w7dofd.svelte-w7dofd{cursor:pointer}tr.svelte-w7dofd th select.svelte-w7dofd{width:100%}"),
          a(document.head, t)),
        H(
          this,
          e,
          oe,
          le,
          r,
          {
            columns: 2,
            rows: 19,
            sortBy: 0,
            sortOrder: 1,
            iconAsc: 3,
            iconDesc: 4,
            classNameTable: 5,
            classNameThead: 6,
            classNameTbody: 7,
            classNameSelect: 8,
            classNameRow: 9,
            classNameCell: 10,
          },
          [-1, -1]
        );
    }
  };
})();
//# sourceMappingURL=SvelteTable.js.map
