(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function (t, e, n) {
      t.exports = n("zUnb");
    },
    crnd: function (t, e) {
      function n(t) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        });
      }
      (n.keys = function () {
        return [];
      }),
        (n.resolve = n),
        (t.exports = n),
        (n.id = "crnd");
    },
    zUnb: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = function (t, e) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(t, e);
      };
      function o(t, e) {
        function n() {
          this.constructor = t;
        }
        r(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      var i = function () {
        return (i =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var o in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
          }).apply(this, arguments);
      };
      function s(t, e, n, r) {
        var o,
          i = arguments.length,
          s =
            i < 3
              ? e
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(e, n))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          s = Reflect.decorate(t, e, n, r);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      }
      function a(t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(t, e);
      }
      function l(t) {
        var e = "function" == typeof Symbol && t[Symbol.iterator],
          n = 0;
        return e
          ? e.call(t)
          : {
              next: function () {
                return (
                  t && n >= t.length && (t = void 0),
                  { value: t && t[n++], done: !t }
                );
              },
            };
      }
      function u(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          o,
          i = n.call(t),
          s = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
            s.push(r.value);
        } catch (a) {
          o = { error: a };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return s;
      }
      function c() {
        for (var t = [], e = 0; e < arguments.length; e++)
          t = t.concat(u(arguments[e]));
        return t;
      }
      var p =
        Array.isArray ||
        function (t) {
          return t && "number" == typeof t.length;
        };
      function h(t) {
        return null != t && "object" == typeof t;
      }
      function f(t) {
        return "function" == typeof t;
      }
      var d,
        g = { e: {} };
      function v() {
        try {
          return d.apply(this, arguments);
        } catch (t) {
          return (g.e = t), g;
        }
      }
      function y(t) {
        return (d = t), v;
      }
      function m(t) {
        return (
          Error.call(this),
          (this.message = t
            ? t.length +
              " errors occurred during unsubscription:\n" +
              t
                .map(function (t, e) {
                  return e + 1 + ") " + t.toString();
                })
                .join("\n  ")
            : ""),
          (this.name = "UnsubscriptionError"),
          (this.errors = t),
          this
        );
      }
      m.prototype = Object.create(Error.prototype);
      var b = m,
        _ = (function () {
          function t(t) {
            (this.closed = !1),
              (this._parent = null),
              (this._parents = null),
              (this._subscriptions = null),
              t && (this._unsubscribe = t);
          }
          var e;
          return (
            (t.prototype.unsubscribe = function () {
              var t,
                e = !1;
              if (!this.closed) {
                var n = this._parent,
                  r = this._parents,
                  o = this._unsubscribe,
                  i = this._subscriptions;
                (this.closed = !0),
                  (this._parent = null),
                  (this._parents = null),
                  (this._subscriptions = null);
                for (var s = -1, a = r ? r.length : 0; n; )
                  n.remove(this), (n = (++s < a && r[s]) || null);
                if (
                  (f(o) &&
                    y(o).call(this) === g &&
                    ((e = !0),
                    (t = t || (g.e instanceof b ? w(g.e.errors) : [g.e]))),
                  p(i))
                )
                  for (s = -1, a = i.length; ++s < a; ) {
                    var l = i[s];
                    if (h(l) && y(l.unsubscribe).call(l) === g) {
                      (e = !0), (t = t || []);
                      var u = g.e;
                      u instanceof b ? (t = t.concat(w(u.errors))) : t.push(u);
                    }
                  }
                if (e) throw new b(t);
              }
            }),
            (t.prototype.add = function (e) {
              if (!e || e === t.EMPTY) return t.EMPTY;
              if (e === this) return this;
              var n = e;
              switch (typeof e) {
                case "function":
                  n = new t(e);
                case "object":
                  if (n.closed || "function" != typeof n.unsubscribe) return n;
                  if (this.closed) return n.unsubscribe(), n;
                  if ("function" != typeof n._addParent) {
                    var r = n;
                    (n = new t())._subscriptions = [r];
                  }
                  break;
                default:
                  throw new Error(
                    "unrecognized teardown " + e + " added to Subscription."
                  );
              }
              return (
                (this._subscriptions || (this._subscriptions = [])).push(n),
                n._addParent(this),
                n
              );
            }),
            (t.prototype.remove = function (t) {
              var e = this._subscriptions;
              if (e) {
                var n = e.indexOf(t);
                -1 !== n && e.splice(n, 1);
              }
            }),
            (t.prototype._addParent = function (t) {
              var e = this._parent,
                n = this._parents;
              e && e !== t
                ? n
                  ? -1 === n.indexOf(t) && n.push(t)
                  : (this._parents = [t])
                : (this._parent = t);
            }),
            (t.EMPTY = (((e = new t()).closed = !0), e)),
            t
          );
        })();
      function w(t) {
        return t.reduce(function (t, e) {
          return t.concat(e instanceof b ? e.errors : e);
        }, []);
      }
      var C = !1,
        S = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(t) {
            C = t;
          },
          get useDeprecatedSynchronousErrorHandling() {
            return C;
          },
        };
      function E(t) {
        setTimeout(function () {
          throw t;
        });
      }
      var x = {
          closed: !0,
          next: function (t) {},
          error: function (t) {
            if (S.useDeprecatedSynchronousErrorHandling) throw t;
            E(t);
          },
          complete: function () {},
        },
        P =
          "function" == typeof Symbol
            ? Symbol("rxSubscriber")
            : "@@rxSubscriber_" + Math.random(),
        O = (function (t) {
          function e(n, r, o) {
            var i = t.call(this) || this;
            switch (
              ((i.syncErrorValue = null),
              (i.syncErrorThrown = !1),
              (i.syncErrorThrowable = !1),
              (i.isStopped = !1),
              (i._parentSubscription = null),
              arguments.length)
            ) {
              case 0:
                i.destination = x;
                break;
              case 1:
                if (!n) {
                  i.destination = x;
                  break;
                }
                if ("object" == typeof n) {
                  n instanceof e
                    ? ((i.syncErrorThrowable = n.syncErrorThrowable),
                      (i.destination = n),
                      n.add(i))
                    : ((i.syncErrorThrowable = !0),
                      (i.destination = new T(i, n)));
                  break;
                }
              default:
                (i.syncErrorThrowable = !0),
                  (i.destination = new T(i, n, r, o));
            }
            return i;
          }
          return (
            o(e, t),
            (e.prototype[P] = function () {
              return this;
            }),
            (e.create = function (t, n, r) {
              var o = new e(t, n, r);
              return (o.syncErrorThrowable = !1), o;
            }),
            (e.prototype.next = function (t) {
              this.isStopped || this._next(t);
            }),
            (e.prototype.error = function (t) {
              this.isStopped || ((this.isStopped = !0), this._error(t));
            }),
            (e.prototype.complete = function () {
              this.isStopped || ((this.isStopped = !0), this._complete());
            }),
            (e.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0), t.prototype.unsubscribe.call(this));
            }),
            (e.prototype._next = function (t) {
              this.destination.next(t);
            }),
            (e.prototype._error = function (t) {
              this.destination.error(t), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.destination.complete(), this.unsubscribe();
            }),
            (e.prototype._unsubscribeAndRecycle = function () {
              var t = this._parent,
                e = this._parents;
              return (
                (this._parent = null),
                (this._parents = null),
                this.unsubscribe(),
                (this.closed = !1),
                (this.isStopped = !1),
                (this._parent = t),
                (this._parents = e),
                (this._parentSubscription = null),
                this
              );
            }),
            e
          );
        })(_),
        T = (function (t) {
          function e(e, n, r, o) {
            var i,
              s = t.call(this) || this;
            s._parentSubscriber = e;
            var a = s;
            return (
              f(n)
                ? (i = n)
                : n &&
                  ((i = n.next),
                  (r = n.error),
                  (o = n.complete),
                  n !== x &&
                    (f((a = Object.create(n)).unsubscribe) &&
                      s.add(a.unsubscribe.bind(a)),
                    (a.unsubscribe = s.unsubscribe.bind(s)))),
              (s._context = a),
              (s._next = i),
              (s._error = r),
              (s._complete = o),
              s
            );
          }
          return (
            o(e, t),
            (e.prototype.next = function (t) {
              if (!this.isStopped && this._next) {
                var e = this._parentSubscriber;
                S.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
                  ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
                  : this.__tryOrUnsub(this._next, t);
              }
            }),
            (e.prototype.error = function (t) {
              if (!this.isStopped) {
                var e = this._parentSubscriber,
                  n = S.useDeprecatedSynchronousErrorHandling;
                if (this._error)
                  n && e.syncErrorThrowable
                    ? (this.__tryOrSetError(e, this._error, t),
                      this.unsubscribe())
                    : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                else if (e.syncErrorThrowable)
                  n ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0)) : E(t),
                    this.unsubscribe();
                else {
                  if ((this.unsubscribe(), n)) throw t;
                  E(t);
                }
              }
            }),
            (e.prototype.complete = function () {
              var t = this;
              if (!this.isStopped) {
                var e = this._parentSubscriber;
                if (this._complete) {
                  var n = function () {
                    return t._complete.call(t._context);
                  };
                  S.useDeprecatedSynchronousErrorHandling &&
                  e.syncErrorThrowable
                    ? (this.__tryOrSetError(e, n), this.unsubscribe())
                    : (this.__tryOrUnsub(n), this.unsubscribe());
                } else this.unsubscribe();
              }
            }),
            (e.prototype.__tryOrUnsub = function (t, e) {
              try {
                t.call(this._context, e);
              } catch (n) {
                if (
                  (this.unsubscribe(), S.useDeprecatedSynchronousErrorHandling)
                )
                  throw n;
                E(n);
              }
            }),
            (e.prototype.__tryOrSetError = function (t, e, n) {
              if (!S.useDeprecatedSynchronousErrorHandling)
                throw new Error("bad call");
              try {
                e.call(this._context, n);
              } catch (r) {
                return S.useDeprecatedSynchronousErrorHandling
                  ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0), !0)
                  : (E(r), !0);
              }
              return !1;
            }),
            (e.prototype._unsubscribe = function () {
              var t = this._parentSubscriber;
              (this._context = null),
                (this._parentSubscriber = null),
                t.unsubscribe();
            }),
            e
          );
        })(O),
        k =
          ("function" == typeof Symbol && Symbol.observable) || "@@observable";
      function M() {}
      function R() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return I(t);
      }
      function I(t) {
        return t
          ? 1 === t.length
            ? t[0]
            : function (e) {
                return t.reduce(function (t, e) {
                  return e(t);
                }, e);
              }
          : M;
      }
      var A = (function () {
        function t(t) {
          (this._isScalar = !1), t && (this._subscribe = t);
        }
        return (
          (t.prototype.lift = function (e) {
            var n = new t();
            return (n.source = this), (n.operator = e), n;
          }),
          (t.prototype.subscribe = function (t, e, n) {
            var r = this.operator,
              o = (function (t, e, n) {
                if (t) {
                  if (t instanceof O) return t;
                  if (t[P]) return t[P]();
                }
                return t || e || n ? new O(t, e, n) : new O(x);
              })(t, e, n);
            if (
              (r
                ? r.call(o, this.source)
                : o.add(
                    this.source ||
                      (S.useDeprecatedSynchronousErrorHandling &&
                        !o.syncErrorThrowable)
                      ? this._subscribe(o)
                      : this._trySubscribe(o)
                  ),
              S.useDeprecatedSynchronousErrorHandling &&
                o.syncErrorThrowable &&
                ((o.syncErrorThrowable = !1), o.syncErrorThrown))
            )
              throw o.syncErrorValue;
            return o;
          }),
          (t.prototype._trySubscribe = function (t) {
            try {
              return this._subscribe(t);
            } catch (e) {
              S.useDeprecatedSynchronousErrorHandling &&
                ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                (function (t) {
                  for (; t; ) {
                    var e = t.destination;
                    if (t.closed || t.isStopped) return !1;
                    t = e && e instanceof O ? e : null;
                  }
                  return !0;
                })(t)
                  ? t.error(e)
                  : console.warn(e);
            }
          }),
          (t.prototype.forEach = function (t, e) {
            var n = this;
            return new (e = N(e))(function (e, r) {
              var o;
              o = n.subscribe(
                function (e) {
                  try {
                    t(e);
                  } catch (n) {
                    r(n), o && o.unsubscribe();
                  }
                },
                r,
                e
              );
            });
          }),
          (t.prototype._subscribe = function (t) {
            var e = this.source;
            return e && e.subscribe(t);
          }),
          (t.prototype[k] = function () {
            return this;
          }),
          (t.prototype.pipe = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            return 0 === t.length ? this : I(t)(this);
          }),
          (t.prototype.toPromise = function (t) {
            var e = this;
            return new (t = N(t))(function (t, n) {
              var r;
              e.subscribe(
                function (t) {
                  return (r = t);
                },
                function (t) {
                  return n(t);
                },
                function () {
                  return t(r);
                }
              );
            });
          }),
          (t.create = function (e) {
            return new t(e);
          }),
          t
        );
      })();
      function N(t) {
        if ((t || (t = S.Promise || Promise), !t))
          throw new Error("no Promise impl found");
        return t;
      }
      function D() {
        return (
          Error.call(this),
          (this.message = "object unsubscribed"),
          (this.name = "ObjectUnsubscribedError"),
          this
        );
      }
      D.prototype = Object.create(Error.prototype);
      var j = D,
        L = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (r.subject = e), (r.subscriber = n), (r.closed = !1), r;
          }
          return (
            o(e, t),
            (e.prototype.unsubscribe = function () {
              if (!this.closed) {
                this.closed = !0;
                var t = this.subject,
                  e = t.observers;
                if (
                  ((this.subject = null),
                  e && 0 !== e.length && !t.isStopped && !t.closed)
                ) {
                  var n = e.indexOf(this.subscriber);
                  -1 !== n && e.splice(n, 1);
                }
              }
            }),
            e
          );
        })(_),
        F = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (n.destination = e), n;
          }
          return o(e, t), e;
        })(O),
        H = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return (
              (e.observers = []),
              (e.closed = !1),
              (e.isStopped = !1),
              (e.hasError = !1),
              (e.thrownError = null),
              e
            );
          }
          return (
            o(e, t),
            (e.prototype[P] = function () {
              return new F(this);
            }),
            (e.prototype.lift = function (t) {
              var e = new V(this, this);
              return (e.operator = t), e;
            }),
            (e.prototype.next = function (t) {
              if (this.closed) throw new j();
              if (!this.isStopped)
                for (
                  var e = this.observers, n = e.length, r = e.slice(), o = 0;
                  o < n;
                  o++
                )
                  r[o].next(t);
            }),
            (e.prototype.error = function (t) {
              if (this.closed) throw new j();
              (this.hasError = !0),
                (this.thrownError = t),
                (this.isStopped = !0);
              for (
                var e = this.observers, n = e.length, r = e.slice(), o = 0;
                o < n;
                o++
              )
                r[o].error(t);
              this.observers.length = 0;
            }),
            (e.prototype.complete = function () {
              if (this.closed) throw new j();
              this.isStopped = !0;
              for (
                var t = this.observers, e = t.length, n = t.slice(), r = 0;
                r < e;
                r++
              )
                n[r].complete();
              this.observers.length = 0;
            }),
            (e.prototype.unsubscribe = function () {
              (this.isStopped = !0),
                (this.closed = !0),
                (this.observers = null);
            }),
            (e.prototype._trySubscribe = function (e) {
              if (this.closed) throw new j();
              return t.prototype._trySubscribe.call(this, e);
            }),
            (e.prototype._subscribe = function (t) {
              if (this.closed) throw new j();
              return this.hasError
                ? (t.error(this.thrownError), _.EMPTY)
                : this.isStopped
                ? (t.complete(), _.EMPTY)
                : (this.observers.push(t), new L(this, t));
            }),
            (e.prototype.asObservable = function () {
              var t = new A();
              return (t.source = this), t;
            }),
            (e.create = function (t, e) {
              return new V(t, e);
            }),
            e
          );
        })(A),
        V = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (r.destination = e), (r.source = n), r;
          }
          return (
            o(e, t),
            (e.prototype.next = function (t) {
              var e = this.destination;
              e && e.next && e.next(t);
            }),
            (e.prototype.error = function (t) {
              var e = this.destination;
              e && e.error && this.destination.error(t);
            }),
            (e.prototype.complete = function () {
              var t = this.destination;
              t && t.complete && this.destination.complete();
            }),
            (e.prototype._subscribe = function (t) {
              return this.source ? this.source.subscribe(t) : _.EMPTY;
            }),
            e
          );
        })(H);
      function U(t) {
        return t && "function" == typeof t.schedule;
      }
      var B = (function (t) {
          function e(e, n, r) {
            var o = t.call(this) || this;
            return (
              (o.parent = e),
              (o.outerValue = n),
              (o.outerIndex = r),
              (o.index = 0),
              o
            );
          }
          return (
            o(e, t),
            (e.prototype._next = function (t) {
              this.parent.notifyNext(
                this.outerValue,
                t,
                this.outerIndex,
                this.index++,
                this
              );
            }),
            (e.prototype._error = function (t) {
              this.parent.notifyError(t, this), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.parent.notifyComplete(this), this.unsubscribe();
            }),
            e
          );
        })(O),
        z = function (t) {
          return function (e) {
            for (var n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
            e.closed || e.complete();
          };
        },
        q = function (t) {
          return function (e) {
            return (
              t
                .then(
                  function (t) {
                    e.closed || (e.next(t), e.complete());
                  },
                  function (t) {
                    return e.error(t);
                  }
                )
                .then(null, E),
              e
            );
          };
        };
      function W() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      }
      var Y = W(),
        X = function (t) {
          return function (e) {
            for (var n = t[Y](); ; ) {
              var r = n.next();
              if (r.done) {
                e.complete();
                break;
              }
              if ((e.next(r.value), e.closed)) break;
            }
            return (
              "function" == typeof n.return &&
                e.add(function () {
                  n.return && n.return();
                }),
              e
            );
          };
        },
        Q = function (t) {
          return function (e) {
            var n = t[k]();
            if ("function" != typeof n.subscribe)
              throw new TypeError(
                "Provided object does not correctly implement Symbol.observable"
              );
            return n.subscribe(e);
          };
        },
        K = function (t) {
          return t && "number" == typeof t.length && "function" != typeof t;
        };
      function Z(t) {
        return (
          t && "function" != typeof t.subscribe && "function" == typeof t.then
        );
      }
      var G = function (t) {
        if (t instanceof A)
          return function (e) {
            return t._isScalar
              ? (e.next(t.value), void e.complete())
              : t.subscribe(e);
          };
        if (t && "function" == typeof t[k]) return Q(t);
        if (K(t)) return z(t);
        if (Z(t)) return q(t);
        if (t && "function" == typeof t[Y]) return X(t);
        var e = h(t) ? "an invalid object" : "'" + t + "'";
        throw new TypeError(
          "You provided " +
            e +
            " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable."
        );
      };
      function $(t, e, n, r, o) {
        if ((void 0 === o && (o = new B(t, n, r)), !o.closed)) return G(e)(o);
      }
      var J = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          o(e, t),
          (e.prototype.notifyNext = function (t, e, n, r, o) {
            this.destination.next(e);
          }),
          (e.prototype.notifyError = function (t, e) {
            this.destination.error(t);
          }),
          (e.prototype.notifyComplete = function (t) {
            this.destination.complete();
          }),
          e
        );
      })(O);
      function tt(t, e) {
        return function (n) {
          if ("function" != typeof t)
            throw new TypeError(
              "argument is not a function. Are you looking for `mapTo()`?"
            );
          return n.lift(new et(t, e));
        };
      }
      var et = (function () {
          function t(t, e) {
            (this.project = t), (this.thisArg = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new nt(t, this.project, this.thisArg));
            }),
            t
          );
        })(),
        nt = (function (t) {
          function e(e, n, r) {
            var o = t.call(this, e) || this;
            return (o.project = n), (o.count = 0), (o.thisArg = r || o), o;
          }
          return (
            o(e, t),
            (e.prototype._next = function (t) {
              var e;
              try {
                e = this.project.call(this.thisArg, t, this.count++);
              } catch (n) {
                return void this.destination.error(n);
              }
              this.destination.next(e);
            }),
            e
          );
        })(O);
      function rt(t, e) {
        return new A(
          e
            ? function (n) {
                var r = new _(),
                  o = 0;
                return (
                  r.add(
                    e.schedule(function () {
                      o !== t.length
                        ? (n.next(t[o++]), n.closed || r.add(this.schedule()))
                        : n.complete();
                    })
                  ),
                  r
                );
              }
            : z(t)
        );
      }
      function ot(t, e) {
        if (!e) return t instanceof A ? t : new A(G(t));
        if (null != t) {
          if (
            (function (t) {
              return t && "function" == typeof t[k];
            })(t)
          )
            return (function (t, e) {
              return new A(
                e
                  ? function (n) {
                      var r = new _();
                      return (
                        r.add(
                          e.schedule(function () {
                            var o = t[k]();
                            r.add(
                              o.subscribe({
                                next: function (t) {
                                  r.add(
                                    e.schedule(function () {
                                      return n.next(t);
                                    })
                                  );
                                },
                                error: function (t) {
                                  r.add(
                                    e.schedule(function () {
                                      return n.error(t);
                                    })
                                  );
                                },
                                complete: function () {
                                  r.add(
                                    e.schedule(function () {
                                      return n.complete();
                                    })
                                  );
                                },
                              })
                            );
                          })
                        ),
                        r
                      );
                    }
                  : Q(t)
              );
            })(t, e);
          if (Z(t))
            return (function (t, e) {
              return new A(
                e
                  ? function (n) {
                      var r = new _();
                      return (
                        r.add(
                          e.schedule(function () {
                            return t.then(
                              function (t) {
                                r.add(
                                  e.schedule(function () {
                                    n.next(t),
                                      r.add(
                                        e.schedule(function () {
                                          return n.complete();
                                        })
                                      );
                                  })
                                );
                              },
                              function (t) {
                                r.add(
                                  e.schedule(function () {
                                    return n.error(t);
                                  })
                                );
                              }
                            );
                          })
                        ),
                        r
                      );
                    }
                  : q(t)
              );
            })(t, e);
          if (K(t)) return rt(t, e);
          if (
            (function (t) {
              return t && "function" == typeof t[Y];
            })(t) ||
            "string" == typeof t
          )
            return (function (t, e) {
              if (!t) throw new Error("Iterable cannot be null");
              return new A(
                e
                  ? function (n) {
                      var r,
                        o = new _();
                      return (
                        o.add(function () {
                          r && "function" == typeof r.return && r.return();
                        }),
                        o.add(
                          e.schedule(function () {
                            (r = t[Y]()),
                              o.add(
                                e.schedule(function () {
                                  if (!n.closed) {
                                    var t, e;
                                    try {
                                      var o = r.next();
                                      (t = o.value), (e = o.done);
                                    } catch (i) {
                                      return void n.error(i);
                                    }
                                    e
                                      ? n.complete()
                                      : (n.next(t), this.schedule());
                                  }
                                })
                              );
                          })
                        ),
                        o
                      );
                    }
                  : X(t)
              );
            })(t, e);
        }
        throw new TypeError(
          ((null !== t && typeof t) || t) + " is not observable"
        );
      }
      function it(t, e, n) {
        return (
          void 0 === n && (n = Number.POSITIVE_INFINITY),
          "function" == typeof e
            ? function (r) {
                return r.pipe(
                  it(function (n, r) {
                    return ot(t(n, r)).pipe(
                      tt(function (t, o) {
                        return e(n, t, r, o);
                      })
                    );
                  }, n)
                );
              }
            : ("number" == typeof e && (n = e),
              function (e) {
                return e.lift(new st(t, n));
              })
        );
      }
      var st = (function () {
          function t(t, e) {
            void 0 === e && (e = Number.POSITIVE_INFINITY),
              (this.project = t),
              (this.concurrent = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new at(t, this.project, this.concurrent));
            }),
            t
          );
        })(),
        at = (function (t) {
          function e(e, n, r) {
            void 0 === r && (r = Number.POSITIVE_INFINITY);
            var o = t.call(this, e) || this;
            return (
              (o.project = n),
              (o.concurrent = r),
              (o.hasCompleted = !1),
              (o.buffer = []),
              (o.active = 0),
              (o.index = 0),
              o
            );
          }
          return (
            o(e, t),
            (e.prototype._next = function (t) {
              this.active < this.concurrent
                ? this._tryNext(t)
                : this.buffer.push(t);
            }),
            (e.prototype._tryNext = function (t) {
              var e,
                n = this.index++;
              try {
                e = this.project(t, n);
              } catch (r) {
                return void this.destination.error(r);
              }
              this.active++, this._innerSub(e, t, n);
            }),
            (e.prototype._innerSub = function (t, e, n) {
              var r = new B(this, void 0, void 0);
              this.destination.add(r), $(this, t, e, n, r);
            }),
            (e.prototype._complete = function () {
              (this.hasCompleted = !0),
                0 === this.active &&
                  0 === this.buffer.length &&
                  this.destination.complete(),
                this.unsubscribe();
            }),
            (e.prototype.notifyNext = function (t, e, n, r, o) {
              this.destination.next(e);
            }),
            (e.prototype.notifyComplete = function (t) {
              var e = this.buffer;
              this.remove(t),
                this.active--,
                e.length > 0
                  ? this._next(e.shift())
                  : 0 === this.active &&
                    this.hasCompleted &&
                    this.destination.complete();
            }),
            e
          );
        })(J);
      function lt(t) {
        return t;
      }
      function ut(t) {
        return void 0 === t && (t = Number.POSITIVE_INFINITY), it(lt, t);
      }
      function ct() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = Number.POSITIVE_INFINITY,
          r = null,
          o = t[t.length - 1];
        return (
          U(o)
            ? ((r = t.pop()),
              t.length > 1 &&
                "number" == typeof t[t.length - 1] &&
                (n = t.pop()))
            : "number" == typeof o && (n = t.pop()),
          null === r && 1 === t.length && t[0] instanceof A
            ? t[0]
            : ut(n)(rt(t, r))
        );
      }
      function pt() {
        return function (t) {
          return t.lift(new ht(t));
        };
      }
      var ht = (function () {
          function t(t) {
            this.connectable = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              var n = this.connectable;
              n._refCount++;
              var r = new ft(t, n),
                o = e.subscribe(r);
              return r.closed || (r.connection = n.connect()), o;
            }),
            t
          );
        })(),
        ft = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.connectable = n), r;
          }
          return (
            o(e, t),
            (e.prototype._unsubscribe = function () {
              var t = this.connectable;
              if (t) {
                this.connectable = null;
                var e = t._refCount;
                if (e <= 0) this.connection = null;
                else if (((t._refCount = e - 1), e > 1)) this.connection = null;
                else {
                  var n = this.connection,
                    r = t._connection;
                  (this.connection = null),
                    !r || (n && r !== n) || r.unsubscribe();
                }
              } else this.connection = null;
            }),
            e
          );
        })(O),
        dt = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (
              (r.source = e),
              (r.subjectFactory = n),
              (r._refCount = 0),
              (r._isComplete = !1),
              r
            );
          }
          return (
            o(e, t),
            (e.prototype._subscribe = function (t) {
              return this.getSubject().subscribe(t);
            }),
            (e.prototype.getSubject = function () {
              var t = this._subject;
              return (
                (t && !t.isStopped) || (this._subject = this.subjectFactory()),
                this._subject
              );
            }),
            (e.prototype.connect = function () {
              var t = this._connection;
              return (
                t ||
                  ((this._isComplete = !1),
                  (t = this._connection = new _()).add(
                    this.source.subscribe(new vt(this.getSubject(), this))
                  ),
                  t.closed
                    ? ((this._connection = null), (t = _.EMPTY))
                    : (this._connection = t)),
                t
              );
            }),
            (e.prototype.refCount = function () {
              return pt()(this);
            }),
            e
          );
        })(A).prototype,
        gt = {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: dt._subscribe },
          _isComplete: { value: dt._isComplete, writable: !0 },
          getSubject: { value: dt.getSubject },
          connect: { value: dt.connect },
          refCount: { value: dt.refCount },
        },
        vt = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.connectable = n), r;
          }
          return (
            o(e, t),
            (e.prototype._error = function (e) {
              this._unsubscribe(), t.prototype._error.call(this, e);
            }),
            (e.prototype._complete = function () {
              (this.connectable._isComplete = !0),
                this._unsubscribe(),
                t.prototype._complete.call(this);
            }),
            (e.prototype._unsubscribe = function () {
              var t = this.connectable;
              if (t) {
                this.connectable = null;
                var e = t._connection;
                (t._refCount = 0),
                  (t._subject = null),
                  (t._connection = null),
                  e && e.unsubscribe();
              }
            }),
            e
          );
        })(F);
      function yt() {
        return new H();
      }
      function mt(t) {
        for (var e in t) if (t[e] === mt) return e;
        throw Error("Could not find renamed property on target object.");
      }
      var bt = mt({ ngComponentDef: mt }),
        _t = mt({ ngInjectableDef: mt }),
        wt = mt({ ngInjectorDef: mt }),
        Ct = mt({ ngModuleDef: mt }),
        St = mt({ __NG_ELEMENT_ID__: mt });
      function Et(t) {
        return {
          providedIn: t.providedIn || null,
          factory: t.factory,
          value: void 0,
        };
      }
      function xt(t) {
        return t.hasOwnProperty(_t) ? t[_t] : null;
      }
      function Pt(t) {
        return t.hasOwnProperty(wt) ? t[wt] : null;
      }
      var Ot = (function () {
          function t(t, e) {
            (this._desc = t),
              (this.ngMetadataName = "InjectionToken"),
              (this.ngInjectableDef =
                void 0 !== e
                  ? Et({
                      providedIn: e.providedIn || "root",
                      factory: e.factory,
                    })
                  : void 0);
          }
          return (
            (t.prototype.toString = function () {
              return "InjectionToken " + this._desc;
            }),
            t
          );
        })(),
        Tt = "__parameters__";
      function kt(t, e, n) {
        var r = (function (t) {
          return function () {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            if (t) {
              var r = t.apply(void 0, c(e));
              for (var o in r) this[o] = r[o];
            }
          };
        })(e);
        function o() {
          for (var t, e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          if (this instanceof o) return r.apply(this, e), this;
          var i = new ((t = o).bind.apply(t, c([void 0], e)))();
          return (s.annotation = i), s;
          function s(t, e, n) {
            for (
              var r = t.hasOwnProperty(Tt)
                ? t[Tt]
                : Object.defineProperty(t, Tt, { value: [] })[Tt];
              r.length <= n;

            )
              r.push(null);
            return (r[n] = r[n] || []).push(i), t;
          }
        }
        return (
          n && (o.prototype = Object.create(n.prototype)),
          (o.prototype.ngMetadataName = t),
          (o.annotationCls = o),
          o
        );
      }
      var Mt = new Ot("AnalyzeForEntryComponents"),
        Rt = (function (t) {
          return (
            (t[(t.Emulated = 0)] = "Emulated"),
            (t[(t.Native = 1)] = "Native"),
            (t[(t.None = 2)] = "None"),
            (t[(t.ShadowDom = 3)] = "ShadowDom"),
            t
          );
        })({}),
        It = "undefined" != typeof window && window,
        At =
          "undefined" != typeof self &&
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        Nt = ("undefined" != typeof global && global) || It || At,
        Dt = Promise.resolve(0),
        jt = null;
      function Lt() {
        if (!jt) {
          var t = Nt.Symbol;
          if (t && t.iterator) jt = t.iterator;
          else
            for (
              var e = Object.getOwnPropertyNames(Map.prototype), n = 0;
              n < e.length;
              ++n
            ) {
              var r = e[n];
              "entries" !== r &&
                "size" !== r &&
                Map.prototype[r] === Map.prototype.entries &&
                (jt = r);
            }
        }
        return jt;
      }
      function Ft(t) {
        "undefined" == typeof Zone
          ? Dt.then(function () {
              t && t.apply(null, null);
            })
          : Zone.current.scheduleMicroTask("scheduleMicrotask", t);
      }
      function Ht(t, e) {
        return (
          t === e ||
          ("number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e))
        );
      }
      function Vt(t) {
        if ("string" == typeof t) return t;
        if (t instanceof Array) return "[" + t.map(Vt).join(", ") + "]";
        if (null == t) return "" + t;
        if (t.overriddenName) return "" + t.overriddenName;
        if (t.name) return "" + t.name;
        var e = t.toString();
        if (null == e) return "" + e;
        var n = e.indexOf("\n");
        return -1 === n ? e : e.substring(0, n);
      }
      var Ut,
        Bt = kt("Inject", function (t) {
          return { token: t };
        }),
        zt = kt("Optional"),
        qt = kt("Self"),
        Wt = kt("SkipSelf"),
        Yt = (function (t) {
          return (
            (t[(t.Default = 0)] = "Default"),
            (t[(t.Host = 1)] = "Host"),
            (t[(t.Self = 2)] = "Self"),
            (t[(t.SkipSelf = 4)] = "SkipSelf"),
            (t[(t.Optional = 8)] = "Optional"),
            t
          );
        })({}),
        Xt = void 0;
      function Qt(t) {
        var e = Xt;
        return (Xt = t), e;
      }
      function Kt(t) {
        var e = Ut;
        return (Ut = t), e;
      }
      function Zt(t, e) {
        return (
          void 0 === e && (e = Yt.Default),
          (
            Ut ||
            function (t, e) {
              if ((void 0 === e && (e = Yt.Default), void 0 === Xt))
                throw new Error(
                  "inject() must be called from an injection context"
                );
              return null === Xt
                ? Gt(t, void 0, e)
                : Xt.get(t, e & Yt.Optional ? null : void 0, e);
            }
          )(t, e)
        );
      }
      function Gt(t, e, n) {
        var r = xt(t);
        if (r && "root" == r.providedIn)
          return void 0 === r.value ? (r.value = r.factory()) : r.value;
        if (n & Yt.Optional) return null;
        if (void 0 !== e) return e;
        throw new Error("Injector: NOT_FOUND [" + Vt(t) + "]");
      }
      function $t(t) {
        for (var e = [], n = 0; n < t.length; n++) {
          var r = t[n];
          if (Array.isArray(r)) {
            if (0 === r.length)
              throw new Error("Arguments array must have arguments.");
            for (var o = void 0, i = Yt.Default, s = 0; s < r.length; s++) {
              var a = r[s];
              a instanceof zt || "Optional" === a.ngMetadataName
                ? (i |= Yt.Optional)
                : a instanceof Wt || "SkipSelf" === a.ngMetadataName
                ? (i |= Yt.SkipSelf)
                : a instanceof qt || "Self" === a.ngMetadataName
                ? (i |= Yt.Self)
                : (o = a instanceof Bt ? a.token : a);
            }
            e.push(Zt(o, i));
          } else e.push(Zt(r));
        }
        return e;
      }
      var Jt = 8,
        te = 8,
        ee = 9,
        ne = -1,
        re = (function () {
          return function (t, e, n) {
            (this.factory = t),
              (this.resolving = !1),
              (this.canSeeViewProviders = e),
              (this.injectImpl = n);
          };
        })(),
        oe = re.prototype,
        ie = 17,
        se = 0,
        ae = 1,
        le = 2,
        ue = 3,
        ce = 4,
        pe = 5,
        he = 6,
        fe = 7,
        de = 8,
        ge = 9,
        ve = 10,
        ye = 11,
        me = 12,
        be = 14,
        _e = 16;
      function we(t, e, n) {
        t.afterContentInit &&
          (e.contentHooks || (e.contentHooks = [])).push(n, t.afterContentInit),
          t.afterContentChecked &&
            ((e.contentHooks || (e.contentHooks = [])).push(
              n,
              t.afterContentChecked
            ),
            (e.contentCheckHooks || (e.contentCheckHooks = [])).push(
              n,
              t.afterContentChecked
            ));
      }
      function Ce(t, e, n) {
        t.afterViewInit &&
          (e.viewHooks || (e.viewHooks = [])).push(n, t.afterViewInit),
          t.afterViewChecked &&
            ((e.viewHooks || (e.viewHooks = [])).push(n, t.afterViewChecked),
            (e.viewCheckHooks || (e.viewCheckHooks = [])).push(
              n,
              t.afterViewChecked
            ));
      }
      function Se(t, e, n) {
        null != t.onDestroy &&
          (e.destroyHooks || (e.destroyHooks = [])).push(n, t.onDestroy);
      }
      function Ee(t, e, n, r) {
        var o = r ? e : n;
        o && xe(t, o);
      }
      function xe(t, e) {
        for (var n = 0; n < e.length; n += 2) e[n + 1].call(t[e[n]]);
      }
      function Pe(t, e) {
        var n = ke(t),
          r = ke(e);
        return n && r
          ? (function (t, e, n) {
              for (var r = t[Lt()](), o = e[Lt()](); ; ) {
                var i = r.next(),
                  s = o.next();
                if (i.done && s.done) return !0;
                if (i.done || s.done) return !1;
                if (!n(i.value, s.value)) return !1;
              }
            })(t, e, Pe)
          : !(
              n ||
              !t ||
              ("object" != typeof t && "function" != typeof t) ||
              r ||
              !e ||
              ("object" != typeof e && "function" != typeof e)
            ) || Ht(t, e);
      }
      var Oe = (function () {
          function t(t) {
            this.wrapped = t;
          }
          return (
            (t.wrap = function (e) {
              return new t(e);
            }),
            (t.unwrap = function (e) {
              return t.isWrapped(e) ? e.wrapped : e;
            }),
            (t.isWrapped = function (e) {
              return e instanceof t;
            }),
            t
          );
        })(),
        Te = (function () {
          function t(t, e, n) {
            (this.previousValue = t),
              (this.currentValue = e),
              (this.firstChange = n);
          }
          return (
            (t.prototype.isFirstChange = function () {
              return this.firstChange;
            }),
            t
          );
        })();
      function ke(t) {
        return (
          !!Me(t) && (Array.isArray(t) || (!(t instanceof Map) && Lt() in t))
        );
      }
      function Me(t) {
        return null !== t && ("function" == typeof t || "object" == typeof t);
      }
      var Re = 0,
        Ie = 1,
        Ae = 6,
        Ne = "__ngContext__";
      function De(t) {
        return "function" == typeof t
          ? t.name || t
          : "string" == typeof t
          ? t
          : null == t
          ? ""
          : "" + t;
      }
      function je(t) {
        for (; Array.isArray(t); ) t = t[pe];
        return t;
      }
      function Le(t, e) {
        return je(e[t.index]);
      }
      function Fe(t, e) {
        var n = e[t];
        return n.length >= ie ? n : n[pe];
      }
      function He(t) {
        return t[Ne];
      }
      function Ve(t) {
        var e = He(t);
        return e ? (Array.isArray(e) ? e : e.lViewData) : null;
      }
      function Ue(t) {
        return 32767 & t;
      }
      function Be(t, e) {
        for (var n = t >> 16, r = e; n > 0; ) (r = r[_e]), n--;
        return r;
      }
      var ze,
        qe,
        We,
        Ye,
        Xe,
        Qe,
        Ke,
        Ze,
        Ge = (
          ("undefined" != typeof requestAnimationFrame &&
            requestAnimationFrame) ||
          setTimeout
        ).bind(Nt);
      function $e() {
        return ze;
      }
      function Je() {
        return qe;
      }
      function tn() {
        return We;
      }
      function en(t) {
        We = t;
      }
      function nn(t, e) {
        (We = t), (Ze = e);
      }
      function rn() {
        return Ye;
      }
      function on(t) {
        Ye = t;
      }
      function sn() {
        return Xe;
      }
      function an() {
        return Ke;
      }
      function ln() {
        return Ze;
      }
      var un = !1;
      function cn() {
        return un;
      }
      function pn(t) {
        un = t;
      }
      var hn = !0;
      function fn(t) {
        hn = t;
      }
      function dn(t, e) {
        var n = Ze;
        return (
          (Xe = t && t[se]),
          (Ke = t && 1 == (1 & t[ae])),
          (hn = t && Xe.firstTemplatePass),
          (ze = t && t[ye]),
          (We = e),
          (Ye = !0),
          (Ze = t),
          n && (n[ce] = Qe),
          (Qe = t && t[ce]),
          n
        );
      }
      function gn(t, e) {
        e ||
          (un || Ee(Ze, Xe.viewHooks, Xe.viewCheckHooks, Ke), (Ze[ae] &= -6)),
          (Ze[ae] |= 16),
          (Ze[fe] = Xe.bindingStartIndex),
          dn(t, null);
      }
      var vn = !1;
      function yn(t) {
        var e = vn;
        return (vn = t), e;
      }
      var mn = 255,
        bn = 0;
      function _n(t, e) {
        var n = Cn(t, e);
        if (-1 !== n) return n;
        var r = e[se];
        r.firstTemplatePass &&
          ((t.injectorIndex = e.length),
          wn(r.data, t),
          wn(e, null),
          wn(r.blueprint, null));
        var o = Sn(t, e),
          i = Ue(o),
          s = Be(o, e),
          a = t.injectorIndex;
        if (o !== ne)
          for (var l = s[se].data, u = 0; u < 8; u++)
            e[a + u] = s[i + u] | l[i + u];
        return (e[a + te] = o), a;
      }
      function wn(t, e) {
        t.push(0, 0, 0, 0, 0, 0, 0, 0, e);
      }
      function Cn(t, e) {
        return -1 === t.injectorIndex ||
          (t.parent && t.parent.injectorIndex === t.injectorIndex) ||
          null == e[t.injectorIndex + te]
          ? -1
          : t.injectorIndex;
      }
      function Sn(t, e) {
        if (t.parent && -1 !== t.parent.injectorIndex)
          return t.parent.injectorIndex;
        for (var n = e[he], r = 1; n && -1 === n.injectorIndex; )
          (n = (e = e[_e])[he]), r++;
        return n
          ? n.injectorIndex | (r << 16) | (n && 3 === n.type ? 32768 : 0)
          : -1;
      }
      var En = {};
      function xn(t, e, n, r) {
        var o = e[se],
          i = o.data[t + Jt],
          s = i.flags,
          a = i.providerIndexes,
          l = o.data,
          u = !1;
        ((null == r &&
          (function (t) {
            return 4096 == (4096 & t.flags);
          })(i) &&
          vn) ||
          (null != r && r != o && (null == o.node || 3 === o.node.type))) &&
          (u = !0);
        for (
          var c = 65535 & a,
            p = s >> 16,
            h = 4095 & s,
            f = u ? c : c + (a >> 16);
          f < p + h;
          f++
        ) {
          var d = l[f];
          if ((f < p && n === d) || (f >= p && d.type === n))
            return Pn(l, e, f, i);
        }
        return En;
      }
      function Pn(t, e, n, r) {
        var o,
          i = e[n];
        if (
          null != (o = i) &&
          "object" == typeof o &&
          Object.getPrototypeOf(o) == oe
        ) {
          var s = i;
          if (s.resolving) throw new Error("Circular dep for " + De(t[n]));
          var a = yn(s.canSeeViewProviders);
          s.resolving = !0;
          var l = void 0;
          s.injectImpl && (l = Kt(s.injectImpl));
          var u = tn(),
            c = ln();
          nn(r, e);
          try {
            i = e[n] = s.factory(null, t, e, r);
          } finally {
            s.injectImpl && Kt(l), yn(a), (s.resolving = !1), nn(u, c);
          }
        }
        return i;
      }
      function On(t, e, n) {
        var r = 64 & t,
          o = 32 & t;
        return !!(
          (128 & t
            ? r
              ? o
                ? n[e + 7]
                : n[e + 6]
              : o
              ? n[e + 5]
              : n[e + 4]
            : r
            ? o
              ? n[e + 3]
              : n[e + 2]
            : o
            ? n[e + 1]
            : n[e]) &
          (1 << t)
        );
      }
      function Tn(t, e) {
        return !(t & Yt.Self || (t & Yt.Host && 32768 & e));
      }
      var kn = (function () {
        function t(t, e) {
          (this._tNode = t),
            (this._hostView = e),
            (this._injectorIndex = _n(t, e));
        }
        return (
          (t.prototype.get = function (t) {
            return (
              nn(this._tNode, this._hostView),
              (function (t, e, n, r, o) {
                void 0 === r && (r = Yt.Default);
                var i = (function (t) {
                  var e = t[St];
                  return "number" == typeof e ? e & mn : e;
                })(n);
                if ("function" == typeof i) {
                  var s = tn(),
                    a = ln();
                  nn(t, e);
                  try {
                    var l = i();
                    if (null != l || r & Yt.Optional) return l;
                    throw new Error("No provider for " + De(n));
                  } finally {
                    nn(s, a);
                  }
                } else if ("number" == typeof i) {
                  var u = null,
                    c = Cn(t, e),
                    p = ne;
                  for (
                    (-1 === c || r & Yt.SkipSelf) &&
                    (Tn(r, (p = -1 === c ? Sn(t, e) : e[c + te]))
                      ? ((u = e[se]), (c = Ue(p)), (e = Be(p, e)))
                      : (c = -1));
                    -1 !== c;

                  ) {
                    p = e[c + te];
                    var h = e[se];
                    if (On(i, c, h.data)) {
                      var f = xn(c, e, n, u);
                      if (f !== En) return f;
                    }
                    Tn(r, p) && On(i, c, e)
                      ? ((u = h), (c = Ue(p)), (e = Be(p, e)))
                      : (c = -1);
                  }
                }
                if (
                  (r & Yt.Optional && void 0 === o && (o = null),
                  0 == (r & (Yt.Self | Yt.Host)))
                ) {
                  var d = e[ve];
                  return d
                    ? d.get(n, o, r & Yt.Optional)
                    : Gt(n, o, r & Yt.Optional);
                }
                if (r & Yt.Optional) return o;
                throw new Error("NodeInjector: NOT_FOUND [" + De(n) + "]");
              })(this._tNode, this._hostView, t)
            );
          }),
          t
        );
      })();
      function Mn(t, e) {
        t[Ne] = e;
      }
      function Rn() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      }
      var In = mt({ __forward_ref__: mt });
      function An(t) {
        return (
          (t.__forward_ref__ = An),
          (t.toString = function () {
            return Vt(this());
          }),
          t
        );
      }
      function Nn(t) {
        var e = t;
        return "function" == typeof e &&
          e.hasOwnProperty(In) &&
          e.__forward_ref__ === An
          ? e()
          : t;
      }
      var Dn = "__source",
        jn = new Object(),
        Ln = jn,
        Fn = new Ot("INJECTOR"),
        Hn = (function () {
          function t() {}
          return (
            (t.prototype.get = function (t, e) {
              if ((void 0 === e && (e = jn), e === jn))
                throw new Error(
                  "NullInjectorError: No provider for " + Vt(t) + "!"
                );
              return e;
            }),
            t
          );
        })(),
        Vn = (function () {
          function t() {}
          return (
            (t.create = function (t, e) {
              return Array.isArray(t)
                ? new Zn(t, e)
                : new Zn(t.providers, t.parent, t.name || null);
            }),
            (t.THROW_IF_NOT_FOUND = jn),
            (t.NULL = new Hn()),
            (t.ngInjectableDef = Et({
              providedIn: "any",
              factory: function () {
                return Zt(Fn);
              },
            })),
            (t.__NG_ELEMENT_ID__ = function () {
              return Un();
            }),
            t
          );
        })(),
        Un = Rn,
        Bn = function (t) {
          return t;
        },
        zn = [],
        qn = Bn,
        Wn = function () {
          return Array.prototype.slice.call(arguments);
        },
        Yn = mt({ provide: String, useValue: mt }),
        Xn = Vn.NULL,
        Qn = /\n/gm,
        Kn = "\u0275",
        Zn = (function () {
          function t(t, e, n) {
            void 0 === e && (e = Xn),
              void 0 === n && (n = null),
              (this.parent = e),
              (this.source = n);
            var r = (this._records = new Map());
            r.set(Vn, { token: Vn, fn: Bn, deps: zn, value: this, useNew: !1 }),
              r.set(Fn, {
                token: Fn,
                fn: Bn,
                deps: zn,
                value: this,
                useNew: !1,
              }),
              (function t(e, n) {
                if (n)
                  if ((n = Nn(n)) instanceof Array)
                    for (var r = 0; r < n.length; r++) t(e, n[r]);
                  else {
                    if ("function" == typeof n)
                      throw Jn("Function/Class not supported", n);
                    if (!n || "object" != typeof n || !n.provide)
                      throw Jn("Unexpected provider", n);
                    var o = Nn(n.provide),
                      i = (function (t) {
                        var e = (function (t) {
                            var e = zn,
                              n = t.deps;
                            if (n && n.length) {
                              e = [];
                              for (var r = 0; r < n.length; r++) {
                                var o = 6;
                                if ((l = Nn(n[r])) instanceof Array)
                                  for (var i = 0, s = l; i < s.length; i++) {
                                    var a = s[i];
                                    a instanceof zt || a == zt
                                      ? (o |= 1)
                                      : a instanceof Wt || a == Wt
                                      ? (o &= -3)
                                      : a instanceof qt || a == qt
                                      ? (o &= -5)
                                      : (l = a instanceof Bt ? a.token : Nn(a));
                                  }
                                e.push({ token: l, options: o });
                              }
                            } else if (t.useExisting) {
                              var l;
                              e = [
                                { token: (l = Nn(t.useExisting)), options: 6 },
                              ];
                            } else if (!(n || Yn in t))
                              throw Jn("'deps' required", t);
                            return e;
                          })(t),
                          n = Bn,
                          r = zn,
                          o = !1,
                          i = Nn(t.provide);
                        if (Yn in t) r = t.useValue;
                        else if (t.useFactory) n = t.useFactory;
                        else if (t.useExisting);
                        else if (t.useClass) (o = !0), (n = Nn(t.useClass));
                        else {
                          if ("function" != typeof i)
                            throw Jn(
                              "StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable",
                              t
                            );
                          (o = !0), (n = i);
                        }
                        return { deps: e, fn: n, useNew: o, value: r };
                      })(n);
                    if (!0 === n.multi) {
                      var s = e.get(o);
                      if (s) {
                        if (s.fn !== Wn) throw Gn(o);
                      } else
                        e.set(
                          o,
                          (s = {
                            token: n.provide,
                            deps: [],
                            useNew: !1,
                            fn: Wn,
                            value: zn,
                          })
                        );
                      s.deps.push({ token: (o = n), options: 6 });
                    }
                    var a = e.get(o);
                    if (a && a.fn == Wn) throw Gn(o);
                    e.set(o, i);
                  }
              })(r, t);
          }
          return (
            (t.prototype.get = function (t, e, n) {
              void 0 === n && (n = Yt.Default);
              var r = this._records.get(t);
              try {
                return (function t(e, n, r, o, i, s) {
                  try {
                    return (function (e, n, r, o, i, s) {
                      var a, l;
                      if (!n || s & Yt.SkipSelf)
                        s & Yt.Self || (l = o.get(e, i, Yt.Default));
                      else {
                        if ((l = n.value) == qn)
                          throw Error(Kn + "Circular dependency");
                        if (l === zn) {
                          n.value = qn;
                          var u = n.useNew,
                            p = n.fn,
                            h = n.deps,
                            f = zn;
                          if (h.length) {
                            f = [];
                            for (var d = 0; d < h.length; d++) {
                              var g = h[d],
                                v = g.options,
                                y = 2 & v ? r.get(g.token) : void 0;
                              f.push(
                                t(
                                  g.token,
                                  y,
                                  r,
                                  y || 4 & v ? o : Xn,
                                  1 & v ? null : Vn.THROW_IF_NOT_FOUND,
                                  Yt.Default
                                )
                              );
                            }
                          }
                          n.value = l = u
                            ? new ((a = p).bind.apply(a, c([void 0], f)))()
                            : p.apply(void 0, f);
                        }
                      }
                      return l;
                    })(e, n, r, o, i, s);
                  } catch (a) {
                    throw (
                      (a instanceof Error || (a = new Error(a)),
                      (a.ngTempTokenPath = a.ngTempTokenPath || []).unshift(e),
                      n && n.value == qn && (n.value = zn),
                      a)
                    );
                  }
                })(t, r, this._records, this.parent, e, n);
              } catch (i) {
                var o = i.ngTempTokenPath;
                throw (
                  (t[Dn] && o.unshift(t[Dn]),
                  (i.message = $n("\n" + i.message, o, this.source)),
                  (i.ngTokenPath = o),
                  (i.ngTempTokenPath = null),
                  i)
                );
              }
            }),
            (t.prototype.toString = function () {
              var t = [];
              return (
                this._records.forEach(function (e, n) {
                  return t.push(Vt(n));
                }),
                "StaticInjector[" + t.join(", ") + "]"
              );
            }),
            t
          );
        })();
      function Gn(t) {
        return Jn("Cannot mix multi providers and regular providers", t);
      }
      function $n(t, e, n) {
        void 0 === n && (n = null),
          (t =
            t && "\n" === t.charAt(0) && t.charAt(1) == Kn ? t.substr(2) : t);
        var r = Vt(e);
        if (e instanceof Array) r = e.map(Vt).join(" -> ");
        else if ("object" == typeof e) {
          var o = [];
          for (var i in e)
            if (e.hasOwnProperty(i)) {
              var s = e[i];
              o.push(
                i + ":" + ("string" == typeof s ? JSON.stringify(s) : Vt(s))
              );
            }
          r = "{" + o.join(", ") + "}";
        }
        return (
          "StaticInjectorError" +
          (n ? "(" + n + ")" : "") +
          "[" +
          r +
          "]: " +
          t.replace(Qn, "\n  ")
        );
      }
      function Jn(t, e) {
        return new Error($n(t, e));
      }
      var tr = (function () {
          return function () {};
        })(),
        er = (function () {
          return function () {};
        })(),
        nr = "ngProjectAs";
      function rr(t) {
        return !!t.listen;
      }
      var or = {
          createRenderer: function (t, e) {
            return document;
          },
        },
        ir = [];
      function sr(t) {
        for (var e = t[he]; e && 2 === e.type; ) e = (t = t[le])[he];
        return t;
      }
      function ar(t, e, n, r, o) {
        0 === t
          ? rr(e)
            ? e.insertBefore(n, r, o)
            : n.insertBefore(r, o, !0)
          : 1 === t
          ? rr(e)
            ? e.removeChild(n, r)
            : n.removeChild(r)
          : 2 === t && e.destroyNode(r);
      }
      function lr(t) {
        var e = t[se].childIndex;
        return -1 === e ? null : t[e];
      }
      function ur(t, e) {
        var n;
        return t.length >= ie && (n = t[he]) && 2 === n.type
          ? (function (e, n) {
              if (-1 === e.index) {
                var r = t[be];
                return r > -1 ? t[le][r] : null;
              }
              return t[le][e.parent.index];
            })(n)
          : t[le] === e
          ? null
          : t[le];
      }
      function cr(t) {
        if (t.length >= ie) {
          var e = t;
          !(function (t) {
            var e = t[se].cleanup;
            if (null != e) {
              for (var n = 0; n < e.length - 1; n += 2)
                "string" == typeof e[n]
                  ? (je(t[e[n + 1]]).removeEventListener(
                      e[n],
                      t[de][e[n + 2]],
                      e[n + 3]
                    ),
                    (n += 2))
                  : "number" == typeof e[n]
                  ? (0, t[de][e[n]])()
                  : e[n].call(t[de][e[n + 1]]);
              t[de] = null;
            }
          })(e),
            (function (t) {
              var e,
                n = t[se];
              null != n && null != (e = n.destroyHooks) && xe(t, e);
            })(e),
            (r = (n = e)[se] && n[se].pipeDestroyHooks) && xe(n, r),
            -1 === e[se].id && rr(e[ye]) && e[ye].destroy();
        }
        var n, r;
      }
      var pr = {},
        hr = Promise.resolve(null);
      function fr(t, e) {
        var n = sn(),
          r = hn;
        if (((n.firstTemplatePass = !1), fn(!1), 1 !== e)) {
          var o = an(),
            i = cn();
          i ||
            (function (t, e, n) {
              16 & t[ae] &&
                (Ee(t, e.initHooks, e.checkHooks, n), (t[ae] &= -17));
            })(t, n, o),
            (function (e) {
              for (var n = lr(t); null !== n; n = n[ue])
                if (n.length < ie && -1 === n[Re])
                  for (var r = n, o = 0; o < r[Ie].length; o++) {
                    var i = r[Ie][o];
                    vr(i, i[se], i[ge], 2);
                  }
            })(),
            (function (t) {
              if (null != t.contentQueries)
                for (var e = 0; e < t.contentQueries.length; e += 2) {
                  var n = t.contentQueries[e];
                  t.data[n].contentQueriesRefresh(
                    n - ie,
                    t.contentQueries[e + 1]
                  );
                }
            })(n),
            i || Ee(t, n.contentHooks, n.contentCheckHooks, o),
            (function (t, e) {
              if (t.expandoInstructions)
                for (
                  var n = (e[fe] = t.expandoStartIndex), r = -1, o = -1, i = 0;
                  i < t.expandoInstructions.length;
                  i++
                ) {
                  var s = t.expandoInstructions[i];
                  if ("number" == typeof s)
                    if (s <= 0) {
                      o = -s;
                      var a = t.expandoInstructions[++i];
                      r = n += ee + a;
                    } else n += s;
                  else (e[fe] = n), en(sn().data[o + ie]), s(r - ie, o), r++;
                }
            })(n, t);
        }
        !(function (t, e, n) {
          if (null != t) for (var r = 0; r < t.length; r++) Er(t[r], e, n);
        })(n.components, r, e);
      }
      function dr(t, e, n, r, o, i, s) {
        var a = n.blueprint.slice();
        return (
          (a[ae] = 25 | o),
          (a[le] = a[_e] = t),
          (a[ge] = r),
          (a[ve] = void 0 === s ? (t ? t[ve] : null) : s),
          (a[ye] = e),
          (a[me] = i || null),
          a
        );
      }
      function gr(t, e, n, r, o) {
        var i = ln(),
          s = sn(),
          a = t + ie;
        i[a] = n;
        var l = s.data[a];
        if (null == l) {
          var u = tn(),
            c = rn();
          (l = s.data[a] = Sr(i, e, a, r, o, null)),
            u &&
              (!c || null != u.child || (null === l.parent && 2 !== u.type)
                ? c || (u.next = l)
                : (u.child = l));
        }
        return (
          null == s.firstChild && 3 === e && (s.firstChild = l),
          en(l),
          on(!0),
          l
        );
      }
      function vr(t, e, n, r) {
        var o,
          i = rn(),
          s = tn();
        if ((on(!0), en(null), 64 & t[ae]))
          Pr(
            (function (t) {
              for (var e = Array.isArray(t) ? t : Ve(t); e && !(64 & e[ae]); )
                e = e[le];
              return e;
            })(t)[ge]
          );
        else
          try {
            on(!0),
              en(null),
              (o = dn(t, t[he])),
              _r(),
              e.template(r, n),
              2 & r ? fr(t, null) : ((t[se].firstTemplatePass = !1), fn(!1));
          } finally {
            gn(o, 1 == (1 & r)), on(i), en(s);
          }
      }
      function yr(t, e, n, r) {
        var o = Je(),
          i = dn(t, t[he]);
        try {
          o.begin && o.begin(), r && (_r(), r(n || mr(t), e)), fr(t, n);
        } finally {
          o.end && o.end(), gn(i);
        }
      }
      function mr(t) {
        return 1 & t[ae] ? 3 : 2;
      }
      var br = null;
      function _r() {
        br = null;
      }
      function wr(t, e, n, r, o, i, s) {
        var a = ie + n,
          l = a + r,
          u = (function (t, e) {
            var n = new Array(e).fill(null, 0, t).fill(pr, t);
            return (n[be] = -1), (n[fe] = t), n;
          })(a, l);
        return (u[se] = {
          id: t,
          blueprint: u,
          template: e,
          viewQuery: s,
          node: null,
          data: u.slice(),
          childIndex: -1,
          bindingStartIndex: a,
          expandoStartIndex: l,
          expandoInstructions: null,
          firstTemplatePass: !0,
          initHooks: null,
          checkHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          pipeDestroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof o ? o() : o,
          pipeRegistry: "function" == typeof i ? i() : i,
          firstChild: null,
        });
      }
      function Cr(t, e) {
        !(function (t) {
          qe = t;
        })(t);
        var n = t.createRenderer(null, null);
        return "string" == typeof e
          ? rr(n)
            ? n.selectRootElement(e)
            : n.querySelector(e)
          : e;
      }
      function Sr(t, e, n, r, o, i) {
        var s = tn(),
          a = rn() ? s : s && s.parent,
          l = a && t && a !== t[he] ? a : null;
        return {
          type: e,
          index: n,
          injectorIndex: l ? l.injectorIndex : -1,
          flags: 0,
          providerIndexes: 0,
          tagName: r,
          attrs: o,
          localNames: null,
          initialInputs: void 0,
          inputs: void 0,
          outputs: void 0,
          tViews: i,
          next: null,
          child: null,
          parent: l,
          detached: null,
          stylingTemplate: null,
          projection: null,
        };
      }
      function Er(t, e, n) {
        var r = Fe(t, ln());
        xr(r) &&
          6 & r[ae] &&
          (e &&
            (function (t) {
              for (var e = t[se], n = t.length; n < e.blueprint.length; n++)
                t[n] = e.blueprint[n];
            })(r),
          kr(r, r[ge], n));
      }
      function xr(t) {
        return 8 == (8 & t[ae]);
      }
      function Pr(t) {
        for (var e = 0; e < t.components.length; e++) {
          var n = t.components[e];
          yr(Ve(n), n, 2);
        }
      }
      function Or(t) {
        kr(
          (function (t) {
            var e,
              n = He(t);
            if (Array.isArray(n)) {
              var r = (function (t, e) {
                var n = t[se].components;
                if (n)
                  for (var r = 0; r < n.length; r++) {
                    var o = n[r];
                    if (Fe(o, t)[ge] === e) return o;
                  }
                else if (Fe(ie, t)[ge] === e) return ie;
                return -1;
              })(n, t);
              ((o = (function (t, e, n) {
                return {
                  lViewData: t,
                  nodeIndex: e,
                  native: n,
                  component: void 0,
                  directives: void 0,
                  localRefs: void 0,
                };
              })(n, r, (e = Fe(r, n))[pe])).component = t),
                Mn(t, o),
                Mn(o.native, o);
            } else {
              var o;
              e = Fe((o = n).nodeIndex, o.lViewData);
            }
            return e;
          })(t),
          t,
          null
        );
      }
      function Tr(t) {
        Pr(t[ge]);
      }
      function kr(t, e, n) {
        var r = t[se],
          o = dn(t, t[he]),
          i = r.template,
          s = r.viewQuery;
        try {
          _r(),
            (function (e, r, o, i) {
              e && (1 === n || (null === n && 1 & t[ae])) && e(1, i);
            })(s, 0, 0, e),
            i(n || mr(t), e),
            fr(t, n),
            (function (e, n, r) {
              e && 2 & t[ae] && e(2, r);
            })(s, 0, e);
        } finally {
          gn(o, 1 === n);
        }
      }
      var Mr,
        Rr = hr,
        Ir = (function (t) {
          function e(e) {
            var n = t.call(this, e, null, -1) || this;
            return (n._view = e), n;
          }
          return (
            o(e, t),
            (e.prototype.detectChanges = function () {
              Tr(this._view);
            }),
            (e.prototype.checkNoChanges = function () {
              !(function (t) {
                pn(!0);
                try {
                  Tr(t);
                } finally {
                  pn(!1);
                }
              })(this._view);
            }),
            Object.defineProperty(e.prototype, "context", {
              get: function () {
                return null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            e
          );
        })(
          (function () {
            function t(t, e, n) {
              (this._context = e),
                (this._componentIndex = n),
                (this._appRef = null),
                (this._viewContainerRef = null),
                (this._tViewNode = null),
                (this._view = t);
            }
            return (
              Object.defineProperty(t.prototype, "rootNodes", {
                get: function () {
                  return null == this._view[pe]
                    ? (function t(e, n, r) {
                        for (var o = n.child; o; )
                          r.push(Le(o, e)),
                            4 === o.type && t(e, o, r),
                            (o = o.next);
                        return r;
                      })(this._view, this._view[he], [])
                    : [];
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "context", {
                get: function () {
                  return this._context ? this._context : this._lookUpContext();
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "destroyed", {
                get: function () {
                  return 32 == (32 & this._view[ae]);
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.destroy = function () {
                var t, e;
                this._viewContainerRef &&
                  xr(this._view) &&
                  (this._viewContainerRef.detach(
                    this._viewContainerRef.indexOf(this)
                  ),
                  (this._viewContainerRef = null)),
                  rr((e = (t = this._view)[ye])) &&
                    e.destroyNode &&
                    (function (e, n, r, o, i) {
                      for (
                        var s = t[se].node, a = -1, l = t, u = s.child;
                        u;

                      ) {
                        var c = null;
                        if (3 === u.type) {
                          ar(2, r, null, Le(u, l), i);
                          var p = l[u.index];
                          (g = p),
                            Array.isArray(g) &&
                              "number" == typeof g[Re] &&
                              ar(2, r, null, p[Ae], i);
                        } else if (0 === u.type) {
                          var h = l[u.index];
                          ar(2, r, null, h[Ae], i),
                            h[Ie].length &&
                              ((c = (l = h[Ie][0])[se].node), (i = h[Ae]));
                        } else if (1 === u.type) {
                          var f = sr(l),
                            d = f[he].projection[u.projection];
                          (ir[++a] = u),
                            (ir[++a] = l),
                            d && (c = (l = f[le])[se].data[d.index]);
                        } else c = u.child;
                        if (null === c)
                          for (
                            null === u.next &&
                              8192 & u.flags &&
                              ((l = ir[a--]), (u = ir[a--])),
                              c = u.next;
                            !c;

                          ) {
                            if (
                              null === (u = u.parent || l[se].node) ||
                              u === s
                            )
                              return null;
                            0 === u.type && (i = (l = l[le])[u.index][Ae]),
                              (c =
                                2 === u.type && l[ue]
                                  ? (l = l[ue])[se].node
                                  : u.next);
                          }
                        u = c;
                      }
                      var g;
                    })(0, 0, e),
                  (function (t) {
                    if (-1 === t[se].childIndex) return cr(t);
                    for (var e = lr(t); e; ) {
                      var n = null;
                      if (
                        (e.length >= ie
                          ? e[se].childIndex > -1 && (n = lr(e))
                          : e[Ie].length && (n = e[Ie][0]),
                        null == n)
                      ) {
                        for (; e && !e[ue] && e !== t; ) cr(e), (e = ur(e, t));
                        cr(e || t), (n = e && e[ue]);
                      }
                      e = n;
                    }
                  })(t),
                  (t[ae] |= 32);
              }),
              (t.prototype.onDestroy = function (t) {
                var e, n;
                (n = t),
                  (function (t) {
                    return t[de] || (t[de] = []);
                  })((e = this._view)).push(n),
                  e[se].firstTemplatePass &&
                    (function (t) {
                      return t[se].cleanup || (t[se].cleanup = []);
                    })(e).push(e[de].length - 1, null);
              }),
              (t.prototype.markForCheck = function () {
                !(function (t) {
                  for (var e = t; e && !(64 & e[ae]); )
                    (e[ae] |= 4), (e = e[le]);
                  var n, r, o;
                  (e[ae] |= 4),
                    (o = 0 === (n = e[ge]).flags),
                    (n.flags |= 1),
                    o &&
                      n.clean == hr &&
                      ((n.clean = new Promise(function (t) {
                        return (r = t);
                      })),
                      n.scheduler(function () {
                        if (
                          (1 & n.flags && ((n.flags &= -2), Pr(n)), 2 & n.flags)
                        ) {
                          n.flags &= -3;
                          var t = n.playerHandler;
                          t && t.flushPlayers();
                        }
                        (n.clean = hr), r(null);
                      }));
                })(this._view);
              }),
              (t.prototype.detach = function () {
                this._view[ae] &= -9;
              }),
              (t.prototype.reattach = function () {
                this._view[ae] |= 8;
              }),
              (t.prototype.detectChanges = function () {
                var t = Je();
                t.begin && t.begin(), Or(this.context), t.end && t.end();
              }),
              (t.prototype.checkNoChanges = function () {
                !(function (t) {
                  pn(!0);
                  try {
                    Or(t);
                  } finally {
                    pn(!1);
                  }
                })(this.context);
              }),
              (t.prototype.attachToViewContainerRef = function (t) {
                this._viewContainerRef = t;
              }),
              (t.prototype.detachFromAppRef = function () {
                this._appRef = null;
              }),
              (t.prototype.attachToAppRef = function (t) {
                this._appRef = t;
              }),
              (t.prototype._lookUpContext = function () {
                return (this._context = this._view[le][this._componentIndex]);
              }),
              t
            );
          })()
        );
      function Ar(t, e, n, r, o) {
        var i = n[se],
          s = (function (t, e, n) {
            var r = tn();
            t.firstTemplatePass &&
              (n.providersResolver && n.providersResolver(n),
              (function (t, e, n) {
                var o = -(r.index - ie),
                  i = t.data.length - (65535 & r.providerIndexes);
                (t.expandoInstructions || (t.expandoInstructions = [])).push(
                  o,
                  i,
                  1
                );
              })(t),
              (function (t, e, n, r) {
                t.data.push(n);
                var o = new re(
                  r,
                  (function (t) {
                    return null !== t.template;
                  })(n),
                  null
                );
                t.blueprint.push(o),
                  e.push(o),
                  (function (t, e) {
                    t.expandoInstructions.push(e.hostBindings || Rn),
                      e.hostVars && t.expandoInstructions.push(e.hostVars);
                  })(t, n);
              })(t, e, n, n.factory));
            var o = Pn(t.data, e, e.length - 1, r);
            return (
              (function (t, e, n, r) {
                var o = Le(e, t);
                Mn(n, t),
                  o && Mn(o, t),
                  null != r.attributes &&
                    3 == e.type &&
                    (function (t, e) {
                      for (var n = $e(), r = rr(n), o = 0; o < e.length; ) {
                        var i = e[o];
                        if (1 === i) break;
                        if (i === nr) o += 2;
                        else if (0 === i) {
                          var s = e[o + 1],
                            a = e[o + 2],
                            l = e[o + 3];
                          r
                            ? n.setAttribute(t, a, l, s)
                            : t.setAttributeNS(s, a, l),
                            (o += 4);
                        } else
                          (l = e[o + 1]),
                            r ? n.setAttribute(t, i, l) : t.setAttribute(i, l),
                            (o += 2);
                      }
                    })(o, r.attributes);
              })(e, r, o, n),
              o
            );
          })(i, n, e);
        return (
          r.components.push(s),
          (t[ge] = s),
          o &&
            o.forEach(function (t) {
              return t(s, e);
            }),
          i.firstTemplatePass &&
            (function (t, e, n) {
              for (var r = 0; r < n; r++)
                e.push(pr), t.blueprint.push(pr), t.data.push(null);
            })(i, n, e.hostVars),
          s
        );
      }
      function Nr(t, e) {
        return {
          components: [],
          scheduler: t || Ge,
          clean: Rr,
          playerHandler: e || null,
          flags: 0,
        };
      }
      function Dr(t, e) {
        var n,
          r,
          o,
          i,
          s = Ve(t)[se],
          a = s.data.length - 1;
        (n = a),
          (o = e.doCheck),
          (i = s),
          (r = e.onInit) && (i.initHooks || (i.initHooks = [])).push(n, r),
          o &&
            ((i.initHooks || (i.initHooks = [])).push(n, o),
            (i.checkHooks || (i.checkHooks = [])).push(n, o)),
          (function (t, e) {
            if (e.firstTemplatePass)
              for (var n = t >> 16, r = n + (4095 & t), o = n; o < r; o++) {
                var i = e.data[o];
                we(i, e, o), Ce(i, e, o), Se(i, e, o);
              }
          })((a << 16) | 1, s);
      }
      var jr = new Ot(
          "The presence of this token marks an injector as being the root injector."
        ),
        Lr = {},
        Fr = {},
        Hr = [],
        Vr = void 0;
      function Ur() {
        return void 0 === Vr && (Vr = new Hn()), Vr;
      }
      var Br = (function () {
        function t(t, e, n) {
          var r = this;
          (this.parent = n),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this.destroyed = !1);
          var o = [];
          Wr([t], function (t) {
            return r.processInjectorType(t, [], o);
          }),
            e &&
              Wr(e, function (t) {
                return r.processProvider(t);
              }),
            this.records.set(Fn, qr(void 0, this)),
            (this.isRootInjector = this.records.has(jr)),
            this.injectorDefTypes.forEach(function (t) {
              return r.get(t);
            });
        }
        return (
          (t.prototype.destroy = function () {
            this.assertNotDestroyed(), (this.destroyed = !0);
            try {
              this.onDestroy.forEach(function (t) {
                return t.ngOnDestroy();
              });
            } finally {
              this.records.clear(),
                this.onDestroy.clear(),
                this.injectorDefTypes.clear();
            }
          }),
          (t.prototype.get = function (t, e, n) {
            void 0 === e && (e = Ln),
              void 0 === n && (n = Yt.Default),
              this.assertNotDestroyed();
            var r,
              o = Qt(this);
            try {
              if (!(n & Yt.SkipSelf)) {
                var i = this.records.get(t);
                if (void 0 === i) {
                  var s =
                    ("function" == typeof (r = t) ||
                      ("object" == typeof r && r instanceof Ot)) &&
                    xt(t);
                  s &&
                    this.injectableDefInScope(s) &&
                    ((i = qr(zr(t), Lr)), this.records.set(t, i));
                }
                if (void 0 !== i) return this.hydrate(t, i);
              }
              return (n & Yt.Self ? Ur() : this.parent).get(t, e);
            } finally {
              Qt(o);
            }
          }),
          (t.prototype.assertNotDestroyed = function () {
            if (this.destroyed)
              throw new Error("Injector has already been destroyed.");
          }),
          (t.prototype.processInjectorType = function (t, e, n) {
            var r = this;
            if ((t = Nn(t))) {
              var o = Pt(t),
                i = (null == o && t.ngModule) || void 0,
                s = void 0 === i ? t : i;
              if (-1 === n.indexOf(s)) {
                var a = (void 0 !== i && t.providers) || Hr;
                if ((void 0 !== i && (o = Pt(i)), null != o)) {
                  if (
                    (this.injectorDefTypes.add(s),
                    this.records.set(s, qr(o.factory)),
                    null != o.imports)
                  ) {
                    n.push(s);
                    try {
                      Wr(o.imports, function (t) {
                        return r.processInjectorType(t, e, n);
                      });
                    } finally {
                    }
                  }
                  null != o.providers &&
                    Wr(o.providers, function (t) {
                      return r.processProvider(t);
                    }),
                    Wr(a, function (t) {
                      return r.processProvider(t);
                    });
                }
              }
            }
          }),
          (t.prototype.processProvider = function (t) {
            var e = Xr((t = Nn(t))) ? t : Nn(t.provide),
              n = (function (t) {
                var e = (function (t) {
                  var e = void 0;
                  if (Xr(t)) return zr(Nn(t));
                  if (Yr(t))
                    e = function () {
                      return Nn(t.useValue);
                    };
                  else if (t.useExisting)
                    e = function () {
                      return Zt(Nn(t.useExisting));
                    };
                  else if (t.useFactory)
                    e = function () {
                      return t.useFactory.apply(t, c($t(t.deps || [])));
                    };
                  else {
                    var n = Nn(t.useClass || t.provide);
                    if (!t.deps) return zr(n);
                    e = function () {
                      return new (n.bind.apply(n, c([void 0], $t(t.deps))))();
                    };
                  }
                  return e;
                })(t);
                return Yr(t) ? qr(void 0, t.useValue) : qr(e, Lr);
              })(t);
            if (Xr(t) || !0 !== t.multi) {
              var r = this.records.get(e);
              if (r && void 0 !== r.multi)
                throw new Error("Mixed multi-provider for " + Vt(e));
            } else {
              var o = this.records.get(e);
              if (o) {
                if (void 0 === o.multi)
                  throw new Error("Mixed multi-provider for " + e + ".");
              } else
                ((o = qr(void 0, Lr, !0)).factory = function () {
                  return $t(o.multi);
                }),
                  this.records.set(e, o);
              (e = t), o.multi.push(t);
            }
            this.records.set(e, n);
          }),
          (t.prototype.hydrate = function (t, e) {
            if (e.value === Fr) throw new Error("Circular dep for " + Vt(t));
            var n;
            return (
              e.value === Lr && ((e.value = Fr), (e.value = e.factory())),
              "object" == typeof e.value &&
                e.value &&
                "object" == typeof (n = e.value) &&
                null != n &&
                n.ngOnDestroy &&
                "function" == typeof n.ngOnDestroy &&
                this.onDestroy.add(e.value),
              e.value
            );
          }),
          (t.prototype.injectableDefInScope = function (t) {
            return (
              !!t.providedIn &&
              ("string" == typeof t.providedIn
                ? "any" === t.providedIn ||
                  ("root" === t.providedIn && this.isRootInjector)
                : this.injectorDefTypes.has(t.providedIn))
            );
          }),
          t
        );
      })();
      function zr(t) {
        var e = xt(t);
        if (null === e) {
          if (t instanceof Ot)
            throw new Error(
              "Token " + Vt(t) + " is missing an ngInjectableDef definition."
            );
          return function () {
            return new t();
          };
        }
        return e.factory;
      }
      function qr(t, e, n) {
        return (
          void 0 === e && (e = Lr),
          void 0 === n && (n = !1),
          { factory: t, value: e, multi: n ? [] : void 0 }
        );
      }
      function Wr(t, e) {
        t.forEach(function (t) {
          return Array.isArray(t) ? Wr(t, e) : e(t);
        });
      }
      function Yr(t) {
        return Yn in t;
      }
      function Xr(t) {
        return "function" == typeof t;
      }
      var Qr = (function () {
          return function () {};
        })(),
        Kr = (function () {
          return function () {};
        })();
      function Zr(t) {
        var e = Error(
          "No component factory found for " +
            Vt(t) +
            ". Did you add it to @NgModule.entryComponents?"
        );
        return (e[Gr] = t), e;
      }
      var Gr = "ngComponent",
        $r = (function () {
          function t() {}
          return (
            (t.prototype.resolveComponentFactory = function (t) {
              throw Zr(t);
            }),
            t
          );
        })(),
        Jr = (function () {
          function t() {}
          return (t.NULL = new $r()), t;
        })(),
        to = (function () {
          function t(t, e, n) {
            (this._parent = e),
              (this._ngModule = n),
              (this._factories = new Map());
            for (var r = 0; r < t.length; r++) {
              var o = t[r];
              this._factories.set(o.componentType, o);
            }
          }
          return (
            (t.prototype.resolveComponentFactory = function (t) {
              var e = this._factories.get(t);
              if (
                (!e &&
                  this._parent &&
                  (e = this._parent.resolveComponentFactory(t)),
                !e)
              )
                throw Zr(t);
              return new eo(e, this._ngModule);
            }),
            t
          );
        })(),
        eo = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (
              (r.factory = e),
              (r.ngModule = n),
              (r.selector = e.selector),
              (r.componentType = e.componentType),
              (r.ngContentSelectors = e.ngContentSelectors),
              (r.inputs = e.inputs),
              (r.outputs = e.outputs),
              r
            );
          }
          return (
            o(e, t),
            (e.prototype.create = function (t, e, n, r) {
              return this.factory.create(t, e, n, r || this.ngModule);
            }),
            e
          );
        })(Kr),
        no = (function () {
          function t(t) {
            this.nativeElement = t;
          }
          return (
            (t.__NG_ELEMENT_ID__ = function () {
              return ro(t);
            }),
            t
          );
        })(),
        ro = Rn,
        oo = (function () {
          return function () {};
        })(),
        io = (function () {
          return function () {};
        })(),
        so = (function (t) {
          return (
            (t[(t.Important = 1)] = "Important"),
            (t[(t.DashCase = 2)] = "DashCase"),
            t
          );
        })({}),
        ao = (function () {
          function t() {}
          return (
            (t.__NG_ELEMENT_ID__ = function () {
              return lo();
            }),
            t
          );
        })(),
        lo = Rn,
        uo = new ((function () {
          return function (t) {
            (this.full = t),
              (this.major = t.split(".")[0]),
              (this.minor = t.split(".")[1]),
              (this.patch = t.split(".").slice(2).join("."));
          };
        })())("7.1.2"),
        co = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            o(e, t),
            (e.prototype.resolveComponentFactory = function (t) {
              return new yo(t[bt] || null);
            }),
            e
          );
        })(Jr);
      function po(t) {
        var e = [];
        for (var n in t)
          t.hasOwnProperty(n) && e.push({ propName: t[n], templateName: n });
        return e;
      }
      var ho = new Ot("ROOT_CONTEXT_TOKEN", {
          providedIn: "root",
          factory: function () {
            return Nr(Zt(fo));
          },
        }),
        fo = new Ot("SCHEDULER_TOKEN", {
          providedIn: "root",
          factory: function () {
            return Ge;
          },
        }),
        go = new Ot("WRAP_RENDERER_FACTORY2"),
        vo = {},
        yo = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              (n.componentDef = e),
              (n.componentType = e.type),
              (n.selector = e.selectors[0][0]),
              (n.ngContentSelectors = []),
              n
            );
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "inputs", {
              get: function () {
                return po(this.componentDef.inputs);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "outputs", {
              get: function () {
                return po(this.componentDef.outputs);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.create = function (t, e, n, r) {
              var i,
                s = void 0 === n;
              i = r
                ? r.injector.get(go, function (t) {
                    return t;
                  })(r.injector.get(io))
                : or;
              var a,
                l,
                u = s
                  ? ((a = this.selector),
                    rr((l = i.createRenderer(null, this.componentDef) || $e()))
                      ? l.createElement(a, br)
                      : null === br
                      ? l.createElement(a)
                      : l.createElementNS(br, a))
                  : Cr(i, n),
                c = this.componentDef.onPush ? 68 : 66,
                p = r && !s ? r.injector.get(ho) : Nr(),
                h = i.createRenderer(u, this.componentDef),
                f = r
                  ? (function (t, e) {
                      return {
                        get: function (n, r) {
                          var o = t.get(n, vo);
                          return o !== vo ? o : e.get(n, r);
                        },
                      };
                    })(t, r.injector)
                  : t;
              n &&
                u &&
                (rr(h)
                  ? h.setAttribute(u, "ng-version", uo.full)
                  : u.setAttribute("ng-version", uo.full));
              var d,
                g,
                v = dr(
                  null,
                  h,
                  wr(-1, null, 1, 0, null, null, null),
                  p,
                  c,
                  void 0,
                  f
                ),
                y = dn(v, null);
              try {
                i.begin && i.begin();
                var m = (function (t, e, n, r, o) {
                  (Ye = !1), (We = null);
                  var i,
                    s,
                    a,
                    l = n[se],
                    u = dr(
                      n,
                      r,
                      (i = e.template).ngPrivateData ||
                        (i.ngPrivateData = wr(
                          -1,
                          i,
                          e.consts,
                          e.vars,
                          e.directiveDefs,
                          e.pipeDefs,
                          e.viewQuery
                        )),
                      null,
                      e.onPush ? 4 : 2,
                      o
                    ),
                    c = gr(0, 3, t, null, null);
                  return (
                    l.firstTemplatePass &&
                      ((s = _n(c, n)),
                      (a = e.type),
                      (function (t, e, n) {
                        var r = a[St];
                        null == r && (r = a[St] = bn++);
                        var o = r & mn,
                          i = 1 << o,
                          s = 64 & o,
                          l = 32 & o,
                          u = e.data;
                        128 & o
                          ? s
                            ? l
                              ? (u[t + 7] |= i)
                              : (u[t + 6] |= i)
                            : l
                            ? (u[t + 5] |= i)
                            : (u[t + 4] |= i)
                          : s
                          ? l
                            ? (u[t + 3] |= i)
                            : (u[t + 2] |= i)
                          : l
                          ? (u[t + 1] |= i)
                          : (u[t] |= i);
                      })(s, n[se]),
                      (c.flags = 4096),
                      (function (t, e, n) {
                        (t.flags = (e << 16) | (4096 & t.flags) | 1),
                          (t.providerIndexes = e);
                      })(c, n.length),
                      (function (t) {
                        var e = sn();
                        (e.components || (e.components = [])).push(t.index);
                      })(c)),
                    (u[pe] = n[ie]),
                    (u[he] = c),
                    (n[ie] = u)
                  );
                })(u, this.componentDef, v, h);
                if (((g = v[se].data[0 + ie]), e))
                  for (
                    var b = 0, _ = v[se], w = (g.projection = []), C = 0;
                    C < e.length;
                    C++
                  ) {
                    for (
                      var S = e[C], E = null, x = null, P = 0;
                      P < S.length;
                      P++
                    ) {
                      _.firstTemplatePass &&
                        (_.expandoStartIndex++,
                        _.blueprint.splice(++b + ie, 0, null),
                        _.data.splice(b + ie, 0, null),
                        v.splice(b + ie, 0, null));
                      var O = gr(b, 3, S[P], null, null);
                      x ? (x.next = O) : (E = O), (x = O);
                    }
                    w.push(E);
                  }
                (d = Ar(m, this.componentDef, v, p, [Dr])), fr(v, 1);
              } finally {
                gn(y, !0), i.end && i.end();
              }
              var T = new mo(
                this.componentType,
                d,
                (function (t, e, n) {
                  return (
                    Mr ||
                      (Mr = (function (t) {
                        function e() {
                          return (
                            (null !== t && t.apply(this, arguments)) || this
                          );
                        }
                        return o(e, t), e;
                      })(no)),
                    new Mr(Le(e, n))
                  );
                })(0, g, v),
                v,
                g
              );
              return s && (T.hostView._tViewNode.child = g), T;
            }),
            e
          );
        })(Kr),
        mo = (function (t) {
          function e(e, n, r, o, i) {
            var s = t.call(this) || this;
            return (
              (s.location = r),
              (s._rootView = o),
              (s._tNode = i),
              (s.destroyCbs = []),
              (s.instance = n),
              (s.hostView = s.changeDetectorRef = new Ir(o)),
              (s.hostView._tViewNode = (function (t, e) {
                null == e[se].node &&
                  (e[se].node = Sr(e, 2, -1, null, null, null)),
                  on(!0);
                var n = e[se].node;
                return en(n), (e[he] = n);
              })(0, o)),
              (s.componentType = e),
              s
            );
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "injector", {
              get: function () {
                return new kn(this._tNode, this._rootView);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.destroy = function () {
              this.destroyCbs.forEach(function (t) {
                return t();
              }),
                (this.destroyCbs = null);
            }),
            (e.prototype.onDestroy = function (t) {
              this.destroyCbs.push(t);
            }),
            e
          );
        })(Qr),
        bo = !0,
        _o = !1;
      function wo() {
        return (_o = !0), bo;
      }
      var Co = (function () {
          function t(t) {
            if (
              ((this.defaultDoc = t),
              (this.inertDocument =
                this.defaultDoc.implementation.createHTMLDocument(
                  "sanitization-inert"
                )),
              (this.inertBodyElement = this.inertDocument.body),
              null == this.inertBodyElement)
            ) {
              var e = this.inertDocument.createElement("html");
              this.inertDocument.appendChild(e),
                (this.inertBodyElement =
                  this.inertDocument.createElement("body")),
                e.appendChild(this.inertBodyElement);
            }
            (this.inertBodyElement.innerHTML =
              '<svg><g onload="this.parentNode.remove()"></g></svg>'),
              !this.inertBodyElement.querySelector ||
              this.inertBodyElement.querySelector("svg")
                ? ((this.inertBodyElement.innerHTML =
                    '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'),
                  (this.getInertBodyElement =
                    this.inertBodyElement.querySelector &&
                    this.inertBodyElement.querySelector("svg img") &&
                    (function () {
                      try {
                        return !!window.DOMParser;
                      } catch (t) {
                        return !1;
                      }
                    })()
                      ? this.getInertBodyElement_DOMParser
                      : this.getInertBodyElement_InertDocument))
                : (this.getInertBodyElement = this.getInertBodyElement_XHR);
          }
          return (
            (t.prototype.getInertBodyElement_XHR = function (t) {
              t = "<body><remove></remove>" + t + "</body>";
              try {
                t = encodeURI(t);
              } catch (r) {
                return null;
              }
              var e = new XMLHttpRequest();
              (e.responseType = "document"),
                e.open("GET", "data:text/html;charset=utf-8," + t, !1),
                e.send(void 0);
              var n = e.response.body;
              return n.removeChild(n.firstChild), n;
            }),
            (t.prototype.getInertBodyElement_DOMParser = function (t) {
              t = "<body><remove></remove>" + t + "</body>";
              try {
                var e = new window.DOMParser().parseFromString(
                  t,
                  "text/html"
                ).body;
                return e.removeChild(e.firstChild), e;
              } catch (n) {
                return null;
              }
            }),
            (t.prototype.getInertBodyElement_InertDocument = function (t) {
              var e = this.inertDocument.createElement("template");
              return "content" in e
                ? ((e.innerHTML = t), e)
                : ((this.inertBodyElement.innerHTML = t),
                  this.defaultDoc.documentMode &&
                    this.stripCustomNsAttrs(this.inertBodyElement),
                  this.inertBodyElement);
            }),
            (t.prototype.stripCustomNsAttrs = function (t) {
              for (var e = t.attributes, n = e.length - 1; 0 < n; n--) {
                var r = e.item(n).name;
                ("xmlns:ns1" !== r && 0 !== r.indexOf("ns1:")) ||
                  t.removeAttribute(r);
              }
              for (var o = t.firstChild; o; )
                o.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(o),
                  (o = o.nextSibling);
            }),
            t
          );
        })(),
        So = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
        Eo =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function xo(t) {
        return (t = String(t)).match(So) || t.match(Eo)
          ? t
          : (wo() &&
              console.warn(
                "WARNING: sanitizing unsafe URL value " +
                  t +
                  " (see http://g.co/ng/security#xss)"
              ),
            "unsafe:" + t);
      }
      function Po(t) {
        var e,
          n,
          r = {};
        try {
          for (var o = l(t.split(",")), i = o.next(); !i.done; i = o.next())
            r[i.value] = !0;
        } catch (s) {
          e = { error: s };
        } finally {
          try {
            i && !i.done && (n = o.return) && n.call(o);
          } finally {
            if (e) throw e.error;
          }
        }
        return r;
      }
      function Oo() {
        for (var t, e, n = [], r = 0; r < arguments.length; r++)
          n[r] = arguments[r];
        var o = {};
        try {
          for (var i = l(n), s = i.next(); !s.done; s = i.next()) {
            var a = s.value;
            for (var u in a) a.hasOwnProperty(u) && (o[u] = !0);
          }
        } catch (c) {
          t = { error: c };
        } finally {
          try {
            s && !s.done && (e = i.return) && e.call(i);
          } finally {
            if (t) throw t.error;
          }
        }
        return o;
      }
      var To,
        ko = Po("area,br,col,hr,img,wbr"),
        Mo = Po("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
        Ro = Po("rp,rt"),
        Io = Oo(Ro, Mo),
        Ao = Oo(
          ko,
          Oo(
            Mo,
            Po(
              "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul"
            )
          ),
          Oo(
            Ro,
            Po(
              "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video"
            )
          ),
          Io
        ),
        No = Po("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
        Do = Po("srcset"),
        jo = Oo(
          No,
          Do,
          Po(
            "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"
          )
        ),
        Lo = (function () {
          function t() {
            (this.sanitizedSomething = !1), (this.buf = []);
          }
          return (
            (t.prototype.sanitizeChildren = function (t) {
              for (var e = t.firstChild, n = !0; e; )
                if (
                  (e.nodeType === Node.ELEMENT_NODE
                    ? (n = this.startElement(e))
                    : e.nodeType === Node.TEXT_NODE
                    ? this.chars(e.nodeValue)
                    : (this.sanitizedSomething = !0),
                  n && e.firstChild)
                )
                  e = e.firstChild;
                else
                  for (; e; ) {
                    e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
                    var r = this.checkClobberedElement(e, e.nextSibling);
                    if (r) {
                      e = r;
                      break;
                    }
                    e = this.checkClobberedElement(e, e.parentNode);
                  }
              return this.buf.join("");
            }),
            (t.prototype.startElement = function (t) {
              var e,
                n = t.nodeName.toLowerCase();
              if (!Ao.hasOwnProperty(n))
                return (this.sanitizedSomething = !0), !1;
              this.buf.push("<"), this.buf.push(n);
              for (var r = t.attributes, o = 0; o < r.length; o++) {
                var i = r.item(o),
                  s = i.name,
                  a = s.toLowerCase();
                if (jo.hasOwnProperty(a)) {
                  var l = i.value;
                  No[a] && (l = xo(l)),
                    Do[a] &&
                      ((e = l),
                      (l = (e = String(e))
                        .split(",")
                        .map(function (t) {
                          return xo(t.trim());
                        })
                        .join(", "))),
                    this.buf.push(" ", s, '="', Vo(l), '"');
                } else this.sanitizedSomething = !0;
              }
              return this.buf.push(">"), !0;
            }),
            (t.prototype.endElement = function (t) {
              var e = t.nodeName.toLowerCase();
              Ao.hasOwnProperty(e) &&
                !ko.hasOwnProperty(e) &&
                (this.buf.push("</"), this.buf.push(e), this.buf.push(">"));
            }),
            (t.prototype.chars = function (t) {
              this.buf.push(Vo(t));
            }),
            (t.prototype.checkClobberedElement = function (t, e) {
              if (
                e &&
                (t.compareDocumentPosition(e) &
                  Node.DOCUMENT_POSITION_CONTAINED_BY) ===
                  Node.DOCUMENT_POSITION_CONTAINED_BY
              )
                throw new Error(
                  "Failed to sanitize html because the element is clobbered: " +
                    t.outerHTML
                );
              return e;
            }),
            t
          );
        })(),
        Fo = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Ho = /([^\#-~ |!])/g;
      function Vo(t) {
        return t
          .replace(/&/g, "&amp;")
          .replace(Fo, function (t) {
            return (
              "&#" +
              (1024 * (t.charCodeAt(0) - 55296) +
                (t.charCodeAt(1) - 56320) +
                65536) +
              ";"
            );
          })
          .replace(Ho, function (t) {
            return "&#" + t.charCodeAt(0) + ";";
          })
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      function Uo(t) {
        return "content" in t &&
          (function (t) {
            return (
              t.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === t.nodeName
            );
          })(t)
          ? t.content
          : null;
      }
      var Bo = {
          provide: Jr,
          useFactory: function () {
            return new co();
          },
          deps: [],
        },
        zo = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (
              (r._bootstrapComponents = []),
              (r.destroyCbs = []),
              (r._bootstrapComponents = (e[Ct] || null).bootstrap),
              (r.injector = (function (t, e, n) {
                return (
                  void 0 === e && (e = null),
                  void 0 === n && (n = null),
                  (e = e || Ur()),
                  new Br(t, n, e)
                );
              })(e, n, [Bo, { provide: tr, useValue: r }])),
              (r.instance = r.injector.get(e)),
              (r.componentFactoryResolver = new co()),
              r
            );
          }
          return (
            o(e, t),
            (e.prototype.destroy = function () {
              this.destroyCbs.forEach(function (t) {
                return t();
              }),
                (this.destroyCbs = null);
            }),
            (e.prototype.onDestroy = function (t) {
              this.destroyCbs.push(t);
            }),
            e
          );
        })(tr);
      !(function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (n.moduleType = e), n;
        }
        o(e, t),
          (e.prototype.create = function (t) {
            return new zo(this.moduleType, t);
          });
      })(er);
      var qo = (function (t) {
          function e(e) {
            void 0 === e && (e = !1);
            var n = t.call(this) || this;
            return (n.__isAsync = e), n;
          }
          return (
            o(e, t),
            (e.prototype.emit = function (e) {
              t.prototype.next.call(this, e);
            }),
            (e.prototype.subscribe = function (e, n, r) {
              var o,
                i = function (t) {
                  return null;
                },
                s = function () {
                  return null;
                };
              e && "object" == typeof e
                ? ((o = this.__isAsync
                    ? function (t) {
                        setTimeout(function () {
                          return e.next(t);
                        });
                      }
                    : function (t) {
                        e.next(t);
                      }),
                  e.error &&
                    (i = this.__isAsync
                      ? function (t) {
                          setTimeout(function () {
                            return e.error(t);
                          });
                        }
                      : function (t) {
                          e.error(t);
                        }),
                  e.complete &&
                    (s = this.__isAsync
                      ? function () {
                          setTimeout(function () {
                            return e.complete();
                          });
                        }
                      : function () {
                          e.complete();
                        }))
                : ((o = this.__isAsync
                    ? function (t) {
                        setTimeout(function () {
                          return e(t);
                        });
                      }
                    : function (t) {
                        e(t);
                      }),
                  n &&
                    (i = this.__isAsync
                      ? function (t) {
                          setTimeout(function () {
                            return n(t);
                          });
                        }
                      : function (t) {
                          n(t);
                        }),
                  r &&
                    (s = this.__isAsync
                      ? function () {
                          setTimeout(function () {
                            return r();
                          });
                        }
                      : function () {
                          r();
                        }));
              var a = t.prototype.subscribe.call(this, o, i, s);
              return e instanceof _ && e.add(a), a;
            }),
            e
          );
        })(H),
        Wo = (function () {
          function t() {}
          return (
            (t.__NG_ELEMENT_ID__ = function () {
              return Yo(t, no);
            }),
            t
          );
        })(),
        Yo = Rn,
        Xo = (function (t) {
          return (
            (t[(t.NONE = 0)] = "NONE"),
            (t[(t.HTML = 1)] = "HTML"),
            (t[(t.STYLE = 2)] = "STYLE"),
            (t[(t.SCRIPT = 3)] = "SCRIPT"),
            (t[(t.URL = 4)] = "URL"),
            (t[(t.RESOURCE_URL = 5)] = "RESOURCE_URL"),
            t
          );
        })({}),
        Qo = (function () {
          return function () {};
        })(),
        Ko = new RegExp(
          "^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$",
          "g"
        ),
        Zo = /^url\(([^)]+)\)$/;
      Function, String, String;
      var Go = "ngDebugContext",
        $o = "ngOriginalError",
        Jo = "ngErrorLogger";
      function ti(t) {
        return t[Go];
      }
      function ei(t) {
        return t[$o];
      }
      function ni(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        t.error.apply(t, c(e));
      }
      var ri = (function () {
        function t() {
          this._console = console;
        }
        return (
          (t.prototype.handleError = function (t) {
            var e = this._findOriginalError(t),
              n = this._findContext(t),
              r = (function (t) {
                return t[Jo] || ni;
              })(t);
            r(this._console, "ERROR", t),
              e && r(this._console, "ORIGINAL ERROR", e),
              n && r(this._console, "ERROR CONTEXT", n);
          }),
          (t.prototype._findContext = function (t) {
            return t ? (ti(t) ? ti(t) : this._findContext(ei(t))) : null;
          }),
          (t.prototype._findOriginalError = function (t) {
            for (var e = ei(t); e && ei(e); ) e = ei(e);
            return e;
          }),
          t
        );
      })();
      function oi(t) {
        return !!t && "function" == typeof t.then;
      }
      function ii(t) {
        return !!t && "function" == typeof t.subscribe;
      }
      var si = new Ot("Application Initializer"),
        ai = (function () {
          function t(t) {
            var e = this;
            (this.appInits = t),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise(function (t, n) {
                (e.resolve = t), (e.reject = n);
              }));
          }
          return (
            (t.prototype.runInitializers = function () {
              var t = this;
              if (!this.initialized) {
                var e = [],
                  n = function () {
                    (t.done = !0), t.resolve();
                  };
                if (this.appInits)
                  for (var r = 0; r < this.appInits.length; r++) {
                    var o = this.appInits[r]();
                    oi(o) && e.push(o);
                  }
                Promise.all(e)
                  .then(function () {
                    n();
                  })
                  .catch(function (e) {
                    t.reject(e);
                  }),
                  0 === e.length && n(),
                  (this.initialized = !0);
              }
            }),
            t
          );
        })(),
        li = new Ot("AppId");
      function ui() {
        return "" + ci() + ci() + ci();
      }
      function ci() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      var pi = new Ot("Platform Initializer"),
        hi = new Ot("Platform ID"),
        fi = new Ot("appBootstrapListener"),
        di = (function () {
          function t() {}
          return (
            (t.prototype.log = function (t) {
              console.log(t);
            }),
            (t.prototype.warn = function (t) {
              console.warn(t);
            }),
            t
          );
        })();
      function gi() {
        throw new Error("Runtime compiler is not loaded");
      }
      var vi,
        yi,
        mi = (function () {
          function t() {}
          return (
            (t.prototype.compileModuleSync = function (t) {
              throw gi();
            }),
            (t.prototype.compileModuleAsync = function (t) {
              throw gi();
            }),
            (t.prototype.compileModuleAndAllComponentsSync = function (t) {
              throw gi();
            }),
            (t.prototype.compileModuleAndAllComponentsAsync = function (t) {
              throw gi();
            }),
            (t.prototype.clearCache = function () {}),
            (t.prototype.clearCacheFor = function (t) {}),
            (t.prototype.getModuleId = function (t) {}),
            t
          );
        })(),
        bi = (function () {
          return function () {};
        })();
      function _i() {
        var t = Nt.wtf;
        return !(!t || !(vi = t.trace) || ((yi = vi.events), 0));
      }
      var wi = _i();
      function Ci(t, e) {
        return null;
      }
      var Si = wi
          ? function (t, e) {
              return void 0 === e && (e = null), yi.createScope(t, e);
            }
          : function (t, e) {
              return Ci;
            },
        Ei = wi
          ? function (t, e) {
              return vi.leaveScope(t, e), e;
            }
          : function (t, e) {
              return e;
            },
        xi = (function () {
          function t(t) {
            var e,
              n = t.enableLongStackTrace,
              r = void 0 !== n && n;
            if (
              ((this.hasPendingMicrotasks = !1),
              (this.hasPendingMacrotasks = !1),
              (this.isStable = !0),
              (this.onUnstable = new qo(!1)),
              (this.onMicrotaskEmpty = new qo(!1)),
              (this.onStable = new qo(!1)),
              (this.onError = new qo(!1)),
              "undefined" == typeof Zone)
            )
              throw new Error("In this configuration Angular requires Zone.js");
            Zone.assertZonePatched(),
              (this._nesting = 0),
              (this._outer = this._inner = Zone.current),
              Zone.wtfZoneSpec &&
                (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
              Zone.TaskTrackingZoneSpec &&
                (this._inner = this._inner.fork(
                  new Zone.TaskTrackingZoneSpec()
                )),
              r &&
                Zone.longStackTraceZoneSpec &&
                (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
              ((e = this)._inner = e._inner.fork({
                name: "angular",
                properties: { isAngularZone: !0 },
                onInvokeTask: function (t, n, r, o, i, s) {
                  try {
                    return ki(e), t.invokeTask(r, o, i, s);
                  } finally {
                    Mi(e);
                  }
                },
                onInvoke: function (t, n, r, o, i, s, a) {
                  try {
                    return ki(e), t.invoke(r, o, i, s, a);
                  } finally {
                    Mi(e);
                  }
                },
                onHasTask: function (t, n, r, o) {
                  t.hasTask(r, o),
                    n === r &&
                      ("microTask" == o.change
                        ? ((e.hasPendingMicrotasks = o.microTask), Ti(e))
                        : "macroTask" == o.change &&
                          (e.hasPendingMacrotasks = o.macroTask));
                },
                onHandleError: function (t, n, r, o) {
                  return (
                    t.handleError(r, o),
                    e.runOutsideAngular(function () {
                      return e.onError.emit(o);
                    }),
                    !1
                  );
                },
              }));
          }
          return (
            (t.isInAngularZone = function () {
              return !0 === Zone.current.get("isAngularZone");
            }),
            (t.assertInAngularZone = function () {
              if (!t.isInAngularZone())
                throw new Error(
                  "Expected to be in Angular Zone, but it is not!"
                );
            }),
            (t.assertNotInAngularZone = function () {
              if (t.isInAngularZone())
                throw new Error(
                  "Expected to not be in Angular Zone, but it is!"
                );
            }),
            (t.prototype.run = function (t, e, n) {
              return this._inner.run(t, e, n);
            }),
            (t.prototype.runTask = function (t, e, n, r) {
              var o = this._inner,
                i = o.scheduleEventTask("NgZoneEvent: " + r, t, Oi, Pi, Pi);
              try {
                return o.runTask(i, e, n);
              } finally {
                o.cancelTask(i);
              }
            }),
            (t.prototype.runGuarded = function (t, e, n) {
              return this._inner.runGuarded(t, e, n);
            }),
            (t.prototype.runOutsideAngular = function (t) {
              return this._outer.run(t);
            }),
            t
          );
        })();
      function Pi() {}
      var Oi = {};
      function Ti(t) {
        if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
          try {
            t._nesting++, t.onMicrotaskEmpty.emit(null);
          } finally {
            if ((t._nesting--, !t.hasPendingMicrotasks))
              try {
                t.runOutsideAngular(function () {
                  return t.onStable.emit(null);
                });
              } finally {
                t.isStable = !0;
              }
          }
      }
      function ki(t) {
        t._nesting++,
          t.isStable && ((t.isStable = !1), t.onUnstable.emit(null));
      }
      function Mi(t) {
        t._nesting--, Ti(t);
      }
      var Ri,
        Ii = (function () {
          function t() {
            (this.hasPendingMicrotasks = !1),
              (this.hasPendingMacrotasks = !1),
              (this.isStable = !0),
              (this.onUnstable = new qo()),
              (this.onMicrotaskEmpty = new qo()),
              (this.onStable = new qo()),
              (this.onError = new qo());
          }
          return (
            (t.prototype.run = function (t) {
              return t();
            }),
            (t.prototype.runGuarded = function (t) {
              return t();
            }),
            (t.prototype.runOutsideAngular = function (t) {
              return t();
            }),
            (t.prototype.runTask = function (t) {
              return t();
            }),
            t
          );
        })(),
        Ai = (function () {
          function t(t) {
            var e = this;
            (this._ngZone = t),
              (this._pendingCount = 0),
              (this._isZoneStable = !0),
              (this._didWork = !1),
              (this._callbacks = []),
              (this.taskTrackingZone = null),
              this._watchAngularEvents(),
              t.run(function () {
                e.taskTrackingZone =
                  "undefined" == typeof Zone
                    ? null
                    : Zone.current.get("TaskTrackingZone");
              });
          }
          return (
            (t.prototype._watchAngularEvents = function () {
              var t = this;
              this._ngZone.onUnstable.subscribe({
                next: function () {
                  (t._didWork = !0), (t._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(function () {
                  t._ngZone.onStable.subscribe({
                    next: function () {
                      xi.assertNotInAngularZone(),
                        Ft(function () {
                          (t._isZoneStable = !0), t._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }),
            (t.prototype.increasePendingRequestCount = function () {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }),
            (t.prototype.decreasePendingRequestCount = function () {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount;
            }),
            (t.prototype.isStable = function () {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }),
            (t.prototype._runCallbacksIfReady = function () {
              var t = this;
              if (this.isStable())
                Ft(function () {
                  for (; 0 !== t._callbacks.length; ) {
                    var e = t._callbacks.pop();
                    clearTimeout(e.timeoutId), e.doneCb(t._didWork);
                  }
                  t._didWork = !1;
                });
              else {
                var e = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(function (t) {
                  return (
                    !t.updateCb ||
                    !t.updateCb(e) ||
                    (clearTimeout(t.timeoutId), !1)
                  );
                })),
                  (this._didWork = !0);
              }
            }),
            (t.prototype.getPendingTasks = function () {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map(function (t) {
                    return {
                      source: t.source,
                      creationLocation: t.creationLocation,
                      data: t.data,
                    };
                  })
                : [];
            }),
            (t.prototype.addCallback = function (t, e, n) {
              var r = this,
                o = -1;
              e &&
                e > 0 &&
                (o = setTimeout(function () {
                  (r._callbacks = r._callbacks.filter(function (t) {
                    return t.timeoutId !== o;
                  })),
                    t(r._didWork, r.getPendingTasks());
                }, e)),
                this._callbacks.push({ doneCb: t, timeoutId: o, updateCb: n });
            }),
            (t.prototype.whenStable = function (t, e, n) {
              if (n && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
                );
              this.addCallback(t, e, n), this._runCallbacksIfReady();
            }),
            (t.prototype.getPendingRequestCount = function () {
              return this._pendingCount;
            }),
            (t.prototype.findProviders = function (t, e, n) {
              return [];
            }),
            t
          );
        })(),
        Ni = (function () {
          function t() {
            (this._applications = new Map()), Di.addToWindow(this);
          }
          return (
            (t.prototype.registerApplication = function (t, e) {
              this._applications.set(t, e);
            }),
            (t.prototype.unregisterApplication = function (t) {
              this._applications.delete(t);
            }),
            (t.prototype.unregisterAllApplications = function () {
              this._applications.clear();
            }),
            (t.prototype.getTestability = function (t) {
              return this._applications.get(t) || null;
            }),
            (t.prototype.getAllTestabilities = function () {
              return Array.from(this._applications.values());
            }),
            (t.prototype.getAllRootElements = function () {
              return Array.from(this._applications.keys());
            }),
            (t.prototype.findTestabilityInTree = function (t, e) {
              return (
                void 0 === e && (e = !0), Di.findTestabilityInTree(this, t, e)
              );
            }),
            s([a("design:paramtypes", [])], t)
          );
        })(),
        Di = new ((function () {
          function t() {}
          return (
            (t.prototype.addToWindow = function (t) {}),
            (t.prototype.findTestabilityInTree = function (t, e, n) {
              return null;
            }),
            t
          );
        })())(),
        ji = new Ot("AllowMultipleToken"),
        Li = (function () {
          return function (t, e) {
            (this.name = t), (this.token = e);
          };
        })();
      function Fi(t, e, n) {
        void 0 === n && (n = []);
        var r = "Platform: " + e,
          o = new Ot(r);
        return function (e) {
          void 0 === e && (e = []);
          var i = Hi();
          if (!i || i.injector.get(ji, !1))
            if (t) t(n.concat(e).concat({ provide: o, useValue: !0 }));
            else {
              var s = n.concat(e).concat({ provide: o, useValue: !0 });
              !(function (t) {
                if (Ri && !Ri.destroyed && !Ri.injector.get(ji, !1))
                  throw new Error(
                    "There can be only one platform. Destroy the previous one to create a new one."
                  );
                Ri = t.get(Vi);
                var e = t.get(pi, null);
                e &&
                  e.forEach(function (t) {
                    return t();
                  });
              })(Vn.create({ providers: s, name: r }));
            }
          return (function (t) {
            var e = Hi();
            if (!e) throw new Error("No platform exists!");
            if (!e.injector.get(t, null))
              throw new Error(
                "A platform with a different configuration has been created. Please destroy it first."
              );
            return e;
          })(o);
        };
      }
      function Hi() {
        return Ri && !Ri.destroyed ? Ri : null;
      }
      var Vi = (function () {
        function t(t) {
          (this._injector = t),
            (this._modules = []),
            (this._destroyListeners = []),
            (this._destroyed = !1);
        }
        return (
          (t.prototype.bootstrapModuleFactory = function (t, e) {
            var n,
              r = this,
              o =
                "noop" === (n = e ? e.ngZone : void 0)
                  ? new Ii()
                  : ("zone.js" === n ? void 0 : n) ||
                    new xi({ enableLongStackTrace: wo() }),
              i = [{ provide: xi, useValue: o }];
            return o.run(function () {
              var e = Vn.create({
                  providers: i,
                  parent: r.injector,
                  name: t.moduleType.name,
                }),
                n = t.create(e),
                s = n.injector.get(ri, null);
              if (!s)
                throw new Error(
                  "No ErrorHandler. Is platform module (BrowserModule) included?"
                );
              return (
                n.onDestroy(function () {
                  return zi(r._modules, n);
                }),
                o.runOutsideAngular(function () {
                  return o.onError.subscribe({
                    next: function (t) {
                      s.handleError(t);
                    },
                  });
                }),
                (function (t, e, o) {
                  try {
                    var i =
                      ((s = n.injector.get(ai)).runInitializers(),
                      s.donePromise.then(function () {
                        return r._moduleDoBootstrap(n), n;
                      }));
                    return oi(i)
                      ? i.catch(function (n) {
                          throw (
                            (e.runOutsideAngular(function () {
                              return t.handleError(n);
                            }),
                            n)
                          );
                        })
                      : i;
                  } catch (a) {
                    throw (
                      (e.runOutsideAngular(function () {
                        return t.handleError(a);
                      }),
                      a)
                    );
                  }
                  var s;
                })(s, o)
              );
            });
          }),
          (t.prototype.bootstrapModule = function (t, e) {
            var n = this;
            void 0 === e && (e = []);
            var r = Ui({}, e);
            return (function (t, e, n) {
              return t.get(bi).createCompiler([e]).compileModuleAsync(n);
            })(this.injector, r, t).then(function (t) {
              return n.bootstrapModuleFactory(t, r);
            });
          }),
          (t.prototype._moduleDoBootstrap = function (t) {
            var e = t.injector.get(Bi);
            if (t._bootstrapComponents.length > 0)
              t._bootstrapComponents.forEach(function (t) {
                return e.bootstrap(t);
              });
            else {
              if (!t.instance.ngDoBootstrap)
                throw new Error(
                  "The module " +
                    Vt(t.instance.constructor) +
                    ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.'
                );
              t.instance.ngDoBootstrap(e);
            }
            this._modules.push(t);
          }),
          (t.prototype.onDestroy = function (t) {
            this._destroyListeners.push(t);
          }),
          Object.defineProperty(t.prototype, "injector", {
            get: function () {
              return this._injector;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.destroy = function () {
            if (this._destroyed)
              throw new Error("The platform has already been destroyed!");
            this._modules.slice().forEach(function (t) {
              return t.destroy();
            }),
              this._destroyListeners.forEach(function (t) {
                return t();
              }),
              (this._destroyed = !0);
          }),
          Object.defineProperty(t.prototype, "destroyed", {
            get: function () {
              return this._destroyed;
            },
            enumerable: !0,
            configurable: !0,
          }),
          t
        );
      })();
      function Ui(t, e) {
        return Array.isArray(e) ? e.reduce(Ui, t) : i({}, t, e);
      }
      var Bi = (function () {
        function t(t, e, n, r, o, i) {
          var s = this;
          (this._zone = t),
            (this._console = e),
            (this._injector = n),
            (this._exceptionHandler = r),
            (this._componentFactoryResolver = o),
            (this._initStatus = i),
            (this._bootstrapListeners = []),
            (this._views = []),
            (this._runningTick = !1),
            (this._enforceNoNewChanges = !1),
            (this._stable = !0),
            (this.componentTypes = []),
            (this.components = []),
            (this._enforceNoNewChanges = wo()),
            this._zone.onMicrotaskEmpty.subscribe({
              next: function () {
                s._zone.run(function () {
                  s.tick();
                });
              },
            });
          var a = new A(function (t) {
              (s._stable =
                s._zone.isStable &&
                !s._zone.hasPendingMacrotasks &&
                !s._zone.hasPendingMicrotasks),
                s._zone.runOutsideAngular(function () {
                  t.next(s._stable), t.complete();
                });
            }),
            l = new A(function (t) {
              var e;
              s._zone.runOutsideAngular(function () {
                e = s._zone.onStable.subscribe(function () {
                  xi.assertNotInAngularZone(),
                    Ft(function () {
                      s._stable ||
                        s._zone.hasPendingMacrotasks ||
                        s._zone.hasPendingMicrotasks ||
                        ((s._stable = !0), t.next(!0));
                    });
                });
              });
              var n = s._zone.onUnstable.subscribe(function () {
                xi.assertInAngularZone(),
                  s._stable &&
                    ((s._stable = !1),
                    s._zone.runOutsideAngular(function () {
                      t.next(!1);
                    }));
              });
              return function () {
                e.unsubscribe(), n.unsubscribe();
              };
            });
          this.isStable = ct(
            a,
            l.pipe(function (t) {
              return pt()(
                ((e = yt),
                function (t) {
                  var n;
                  n =
                    "function" == typeof e
                      ? e
                      : function () {
                          return e;
                        };
                  var r = Object.create(t, gt);
                  return (r.source = t), (r.subjectFactory = n), r;
                })(t)
              );
              var e;
            })
          );
        }
        var e;
        return (
          (e = t),
          (t.prototype.bootstrap = function (t, e) {
            var n,
              r = this;
            if (!this._initStatus.done)
              throw new Error(
                "Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module."
              );
            (n =
              t instanceof Kr
                ? t
                : this._componentFactoryResolver.resolveComponentFactory(t)),
              this.componentTypes.push(n.componentType);
            var o = n instanceof eo ? null : this._injector.get(tr),
              i = n.create(Vn.NULL, [], e || n.selector, o);
            i.onDestroy(function () {
              r._unloadComponent(i);
            });
            var s = i.injector.get(Ai, null);
            return (
              s &&
                i.injector
                  .get(Ni)
                  .registerApplication(i.location.nativeElement, s),
              this._loadComponent(i),
              wo() &&
                this._console.log(
                  "Angular is running in the development mode. Call enableProdMode() to enable the production mode."
                ),
              i
            );
          }),
          (t.prototype.tick = function () {
            var t = this;
            if (this._runningTick)
              throw new Error("ApplicationRef.tick is called recursively");
            var n = e._tickScope();
            try {
              (this._runningTick = !0),
                this._views.forEach(function (t) {
                  return t.detectChanges();
                }),
                this._enforceNoNewChanges &&
                  this._views.forEach(function (t) {
                    return t.checkNoChanges();
                  });
            } catch (r) {
              this._zone.runOutsideAngular(function () {
                return t._exceptionHandler.handleError(r);
              });
            } finally {
              (this._runningTick = !1), Ei(n);
            }
          }),
          (t.prototype.attachView = function (t) {
            var e = t;
            this._views.push(e), e.attachToAppRef(this);
          }),
          (t.prototype.detachView = function (t) {
            var e = t;
            zi(this._views, e), e.detachFromAppRef();
          }),
          (t.prototype._loadComponent = function (t) {
            this.attachView(t.hostView),
              this.tick(),
              this.components.push(t),
              this._injector
                .get(fi, [])
                .concat(this._bootstrapListeners)
                .forEach(function (e) {
                  return e(t);
                });
          }),
          (t.prototype._unloadComponent = function (t) {
            this.detachView(t.hostView), zi(this.components, t);
          }),
          (t.prototype.ngOnDestroy = function () {
            this._views.slice().forEach(function (t) {
              return t.destroy();
            });
          }),
          Object.defineProperty(t.prototype, "viewCount", {
            get: function () {
              return this._views.length;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t._tickScope = Si("ApplicationRef#tick()")),
          t
        );
      })();
      function zi(t, e) {
        var n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      var qi = (function () {
          return function () {};
        })(),
        Wi = (function () {
          function t() {
            (this.dirty = !0),
              (this._results = []),
              (this.changes = new qo()),
              (this.length = 0);
          }
          return (
            (t.prototype.map = function (t) {
              return this._results.map(t);
            }),
            (t.prototype.filter = function (t) {
              return this._results.filter(t);
            }),
            (t.prototype.find = function (t) {
              return this._results.find(t);
            }),
            (t.prototype.reduce = function (t, e) {
              return this._results.reduce(t, e);
            }),
            (t.prototype.forEach = function (t) {
              this._results.forEach(t);
            }),
            (t.prototype.some = function (t) {
              return this._results.some(t);
            }),
            (t.prototype.toArray = function () {
              return this._results.slice();
            }),
            (t.prototype[Lt()] = function () {
              return this._results[Lt()]();
            }),
            (t.prototype.toString = function () {
              return this._results.toString();
            }),
            (t.prototype.reset = function (t) {
              (this._results = (function t(e) {
                return e.reduce(function (e, n) {
                  var r = Array.isArray(n) ? t(n) : n;
                  return e.concat(r);
                }, []);
              })(t)),
                (this.dirty = !1),
                (this.length = this._results.length),
                (this.last = this._results[this.length - 1]),
                (this.first = this._results[0]);
            }),
            (t.prototype.notifyOnChanges = function () {
              this.changes.emit(this);
            }),
            (t.prototype.setDirty = function () {
              this.dirty = !0;
            }),
            (t.prototype.destroy = function () {
              this.changes.complete(), this.changes.unsubscribe();
            }),
            t
          );
        })(),
        Yi = (function () {
          return function () {};
        })(),
        Xi = { factoryPathPrefix: "", factoryPathSuffix: ".ngfactory" },
        Qi = (function () {
          function t(t, e) {
            (this._compiler = t), (this._config = e || Xi);
          }
          return (
            (t.prototype.load = function (t) {
              return this._compiler instanceof mi
                ? this.loadFactory(t)
                : this.loadAndCompile(t);
            }),
            (t.prototype.loadAndCompile = function (t) {
              var e = this,
                r = u(t.split("#"), 2),
                o = r[0],
                i = r[1];
              return (
                void 0 === i && (i = "default"),
                n("crnd")(o)
                  .then(function (t) {
                    return t[i];
                  })
                  .then(function (t) {
                    return Ki(t, o, i);
                  })
                  .then(function (t) {
                    return e._compiler.compileModuleAsync(t);
                  })
              );
            }),
            (t.prototype.loadFactory = function (t) {
              var e = u(t.split("#"), 2),
                r = e[0],
                o = e[1],
                i = "NgFactory";
              return (
                void 0 === o && ((o = "default"), (i = "")),
                n("crnd")(
                  this._config.factoryPathPrefix +
                    r +
                    this._config.factoryPathSuffix
                )
                  .then(function (t) {
                    return t[o + i];
                  })
                  .then(function (t) {
                    return Ki(t, r, o);
                  })
              );
            }),
            t
          );
        })();
      function Ki(t, e, n) {
        if (!t) throw new Error("Cannot find '" + n + "' in '" + e + "'");
        return t;
      }
      var Zi,
        Gi = (function () {
          function t() {}
          return (
            (t.__NG_ELEMENT_ID__ = function () {
              return $i(t, no);
            }),
            t
          );
        })(),
        $i = Rn,
        Ji = (function () {
          function t() {}
          return (
            (t.__NG_ELEMENT_ID__ = function () {
              return ts();
            }),
            t
          );
        })(),
        ts = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        },
        es =
          (o(function () {
            return (null !== Zi && Zi.apply(this, arguments)) || this;
          }, (Zi = Ji)),
          (function () {
            return function (t, e) {
              (this.name = t), (this.callback = e);
            };
          })()),
        ns = (function () {
          function t(t, e, n) {
            (this.nativeNode = t),
              (this._debugContext = n),
              (this.listeners = []),
              (this.parent = null),
              e && e instanceof rs && e.addChild(this);
          }
          return (
            Object.defineProperty(t.prototype, "injector", {
              get: function () {
                return this._debugContext.injector;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "componentInstance", {
              get: function () {
                return this._debugContext.component;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "context", {
              get: function () {
                return this._debugContext.context;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "references", {
              get: function () {
                return this._debugContext.references;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "providerTokens", {
              get: function () {
                return this._debugContext.providerTokens;
              },
              enumerable: !0,
              configurable: !0,
            }),
            t
          );
        })(),
        rs = (function (t) {
          function e(e, n, r) {
            var o = t.call(this, e, n, r) || this;
            return (
              (o.properties = {}),
              (o.attributes = {}),
              (o.classes = {}),
              (o.styles = {}),
              (o.childNodes = []),
              (o.nativeElement = e),
              o
            );
          }
          return (
            o(e, t),
            (e.prototype.addChild = function (t) {
              t && (this.childNodes.push(t), (t.parent = this));
            }),
            (e.prototype.removeChild = function (t) {
              var e = this.childNodes.indexOf(t);
              -1 !== e && ((t.parent = null), this.childNodes.splice(e, 1));
            }),
            (e.prototype.insertChildrenAfter = function (t, e) {
              var n,
                r = this,
                o = this.childNodes.indexOf(t);
              -1 !== o &&
                ((n = this.childNodes).splice.apply(n, c([o + 1, 0], e)),
                e.forEach(function (t) {
                  t.parent && t.parent.removeChild(t), (t.parent = r);
                }));
            }),
            (e.prototype.insertBefore = function (t, e) {
              var n = this.childNodes.indexOf(t);
              -1 === n
                ? this.addChild(e)
                : (e.parent && e.parent.removeChild(e),
                  (e.parent = this),
                  this.childNodes.splice(n, 0, e));
            }),
            (e.prototype.query = function (t) {
              return this.queryAll(t)[0] || null;
            }),
            (e.prototype.queryAll = function (t) {
              var e = [];
              return (
                (function t(e, n, r) {
                  e.childNodes.forEach(function (e) {
                    e instanceof rs && (n(e) && r.push(e), t(e, n, r));
                  });
                })(this, t, e),
                e
              );
            }),
            (e.prototype.queryAllNodes = function (t) {
              var e = [];
              return (
                (function t(e, n, r) {
                  e instanceof rs &&
                    e.childNodes.forEach(function (e) {
                      n(e) && r.push(e), e instanceof rs && t(e, n, r);
                    });
                })(this, t, e),
                e
              );
            }),
            Object.defineProperty(e.prototype, "children", {
              get: function () {
                return this.childNodes.filter(function (t) {
                  return t instanceof e;
                });
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.triggerEventHandler = function (t, e) {
              this.listeners.forEach(function (n) {
                n.name == t && n.callback(e);
              });
            }),
            e
          );
        })(ns),
        os = new Map();
      function is(t) {
        return os.get(t) || null;
      }
      function ss(t) {
        os.set(t.nativeNode, t);
      }
      var as = (function () {
          function t() {}
          return (
            (t.prototype.supports = function (t) {
              return ke(t);
            }),
            (t.prototype.create = function (t) {
              return new us(t);
            }),
            t
          );
        })(),
        ls = function (t, e) {
          return e;
        },
        us = (function () {
          function t(t) {
            (this.length = 0),
              (this._linkedRecords = null),
              (this._unlinkedRecords = null),
              (this._previousItHead = null),
              (this._itHead = null),
              (this._itTail = null),
              (this._additionsHead = null),
              (this._additionsTail = null),
              (this._movesHead = null),
              (this._movesTail = null),
              (this._removalsHead = null),
              (this._removalsTail = null),
              (this._identityChangesHead = null),
              (this._identityChangesTail = null),
              (this._trackByFn = t || ls);
          }
          return (
            (t.prototype.forEachItem = function (t) {
              var e;
              for (e = this._itHead; null !== e; e = e._next) t(e);
            }),
            (t.prototype.forEachOperation = function (t) {
              for (
                var e = this._itHead, n = this._removalsHead, r = 0, o = null;
                e || n;

              ) {
                var i = !n || (e && e.currentIndex < fs(n, r, o)) ? e : n,
                  s = fs(i, r, o),
                  a = i.currentIndex;
                if (i === n) r--, (n = n._nextRemoved);
                else if (((e = e._next), null == i.previousIndex)) r++;
                else {
                  o || (o = []);
                  var l = s - r,
                    u = a - r;
                  if (l != u) {
                    for (var c = 0; c < l; c++) {
                      var p = c < o.length ? o[c] : (o[c] = 0),
                        h = p + c;
                      u <= h && h < l && (o[c] = p + 1);
                    }
                    o[i.previousIndex] = u - l;
                  }
                }
                s !== a && t(i, s, a);
              }
            }),
            (t.prototype.forEachPreviousItem = function (t) {
              var e;
              for (e = this._previousItHead; null !== e; e = e._nextPrevious)
                t(e);
            }),
            (t.prototype.forEachAddedItem = function (t) {
              var e;
              for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
            }),
            (t.prototype.forEachMovedItem = function (t) {
              var e;
              for (e = this._movesHead; null !== e; e = e._nextMoved) t(e);
            }),
            (t.prototype.forEachRemovedItem = function (t) {
              var e;
              for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
            }),
            (t.prototype.forEachIdentityChange = function (t) {
              var e;
              for (
                e = this._identityChangesHead;
                null !== e;
                e = e._nextIdentityChange
              )
                t(e);
            }),
            (t.prototype.diff = function (t) {
              if ((null == t && (t = []), !ke(t)))
                throw new Error(
                  "Error trying to diff '" +
                    Vt(t) +
                    "'. Only arrays and iterables are allowed"
                );
              return this.check(t) ? this : null;
            }),
            (t.prototype.onDestroy = function () {}),
            (t.prototype.check = function (t) {
              var e = this;
              this._reset();
              var n,
                r,
                o,
                i = this._itHead,
                s = !1;
              if (Array.isArray(t)) {
                this.length = t.length;
                for (var a = 0; a < this.length; a++)
                  (o = this._trackByFn(a, (r = t[a]))),
                    null !== i && Ht(i.trackById, o)
                      ? (s && (i = this._verifyReinsertion(i, r, o, a)),
                        Ht(i.item, r) || this._addIdentityChange(i, r))
                      : ((i = this._mismatch(i, r, o, a)), (s = !0)),
                    (i = i._next);
              } else
                (n = 0),
                  (function (t, e) {
                    if (Array.isArray(t))
                      for (var n = 0; n < t.length; n++) e(t[n]);
                    else
                      for (
                        var r = t[Lt()](), o = void 0;
                        !(o = r.next()).done;

                      )
                        e(o.value);
                  })(t, function (t) {
                    (o = e._trackByFn(n, t)),
                      null !== i && Ht(i.trackById, o)
                        ? (s && (i = e._verifyReinsertion(i, t, o, n)),
                          Ht(i.item, t) || e._addIdentityChange(i, t))
                        : ((i = e._mismatch(i, t, o, n)), (s = !0)),
                      (i = i._next),
                      n++;
                  }),
                  (this.length = n);
              return this._truncate(i), (this.collection = t), this.isDirty;
            }),
            Object.defineProperty(t.prototype, "isDirty", {
              get: function () {
                return (
                  null !== this._additionsHead ||
                  null !== this._movesHead ||
                  null !== this._removalsHead ||
                  null !== this._identityChangesHead
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype._reset = function () {
              if (this.isDirty) {
                var t = void 0,
                  e = void 0;
                for (
                  t = this._previousItHead = this._itHead;
                  null !== t;
                  t = t._next
                )
                  t._nextPrevious = t._next;
                for (t = this._additionsHead; null !== t; t = t._nextAdded)
                  t.previousIndex = t.currentIndex;
                for (
                  this._additionsHead = this._additionsTail = null,
                    t = this._movesHead;
                  null !== t;
                  t = e
                )
                  (t.previousIndex = t.currentIndex), (e = t._nextMoved);
                (this._movesHead = this._movesTail = null),
                  (this._removalsHead = this._removalsTail = null),
                  (this._identityChangesHead = this._identityChangesTail =
                    null);
              }
            }),
            (t.prototype._mismatch = function (t, e, n, r) {
              var o;
              return (
                null === t
                  ? (o = this._itTail)
                  : ((o = t._prev), this._remove(t)),
                null !==
                (t =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(n, r))
                  ? (Ht(t.item, e) || this._addIdentityChange(t, e),
                    this._moveAfter(t, o, r))
                  : null !==
                    (t =
                      null === this._unlinkedRecords
                        ? null
                        : this._unlinkedRecords.get(n, null))
                  ? (Ht(t.item, e) || this._addIdentityChange(t, e),
                    this._reinsertAfter(t, o, r))
                  : (t = this._addAfter(new cs(e, n), o, r)),
                t
              );
            }),
            (t.prototype._verifyReinsertion = function (t, e, n, r) {
              var o =
                null === this._unlinkedRecords
                  ? null
                  : this._unlinkedRecords.get(n, null);
              return (
                null !== o
                  ? (t = this._reinsertAfter(o, t._prev, r))
                  : t.currentIndex != r &&
                    ((t.currentIndex = r), this._addToMoves(t, r)),
                t
              );
            }),
            (t.prototype._truncate = function (t) {
              for (; null !== t; ) {
                var e = t._next;
                this._addToRemovals(this._unlink(t)), (t = e);
              }
              null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
                null !== this._additionsTail &&
                  (this._additionsTail._nextAdded = null),
                null !== this._movesTail && (this._movesTail._nextMoved = null),
                null !== this._itTail && (this._itTail._next = null),
                null !== this._removalsTail &&
                  (this._removalsTail._nextRemoved = null),
                null !== this._identityChangesTail &&
                  (this._identityChangesTail._nextIdentityChange = null);
            }),
            (t.prototype._reinsertAfter = function (t, e, n) {
              null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
              var r = t._prevRemoved,
                o = t._nextRemoved;
              return (
                null === r ? (this._removalsHead = o) : (r._nextRemoved = o),
                null === o ? (this._removalsTail = r) : (o._prevRemoved = r),
                this._insertAfter(t, e, n),
                this._addToMoves(t, n),
                t
              );
            }),
            (t.prototype._moveAfter = function (t, e, n) {
              return (
                this._unlink(t),
                this._insertAfter(t, e, n),
                this._addToMoves(t, n),
                t
              );
            }),
            (t.prototype._addAfter = function (t, e, n) {
              return (
                this._insertAfter(t, e, n),
                (this._additionsTail =
                  null === this._additionsTail
                    ? (this._additionsHead = t)
                    : (this._additionsTail._nextAdded = t)),
                t
              );
            }),
            (t.prototype._insertAfter = function (t, e, n) {
              var r = null === e ? this._itHead : e._next;
              return (
                (t._next = r),
                (t._prev = e),
                null === r ? (this._itTail = t) : (r._prev = t),
                null === e ? (this._itHead = t) : (e._next = t),
                null === this._linkedRecords &&
                  (this._linkedRecords = new hs()),
                this._linkedRecords.put(t),
                (t.currentIndex = n),
                t
              );
            }),
            (t.prototype._remove = function (t) {
              return this._addToRemovals(this._unlink(t));
            }),
            (t.prototype._unlink = function (t) {
              null !== this._linkedRecords && this._linkedRecords.remove(t);
              var e = t._prev,
                n = t._next;
              return (
                null === e ? (this._itHead = n) : (e._next = n),
                null === n ? (this._itTail = e) : (n._prev = e),
                t
              );
            }),
            (t.prototype._addToMoves = function (t, e) {
              return t.previousIndex === e
                ? t
                : ((this._movesTail =
                    null === this._movesTail
                      ? (this._movesHead = t)
                      : (this._movesTail._nextMoved = t)),
                  t);
            }),
            (t.prototype._addToRemovals = function (t) {
              return (
                null === this._unlinkedRecords &&
                  (this._unlinkedRecords = new hs()),
                this._unlinkedRecords.put(t),
                (t.currentIndex = null),
                (t._nextRemoved = null),
                null === this._removalsTail
                  ? ((this._removalsTail = this._removalsHead = t),
                    (t._prevRemoved = null))
                  : ((t._prevRemoved = this._removalsTail),
                    (this._removalsTail = this._removalsTail._nextRemoved = t)),
                t
              );
            }),
            (t.prototype._addIdentityChange = function (t, e) {
              return (
                (t.item = e),
                (this._identityChangesTail =
                  null === this._identityChangesTail
                    ? (this._identityChangesHead = t)
                    : (this._identityChangesTail._nextIdentityChange = t)),
                t
              );
            }),
            t
          );
        })(),
        cs = (function () {
          return function (t, e) {
            (this.item = t),
              (this.trackById = e),
              (this.currentIndex = null),
              (this.previousIndex = null),
              (this._nextPrevious = null),
              (this._prev = null),
              (this._next = null),
              (this._prevDup = null),
              (this._nextDup = null),
              (this._prevRemoved = null),
              (this._nextRemoved = null),
              (this._nextAdded = null),
              (this._nextMoved = null),
              (this._nextIdentityChange = null);
          };
        })(),
        ps = (function () {
          function t() {
            (this._head = null), (this._tail = null);
          }
          return (
            (t.prototype.add = function (t) {
              null === this._head
                ? ((this._head = this._tail = t),
                  (t._nextDup = null),
                  (t._prevDup = null))
                : ((this._tail._nextDup = t),
                  (t._prevDup = this._tail),
                  (t._nextDup = null),
                  (this._tail = t));
            }),
            (t.prototype.get = function (t, e) {
              var n;
              for (n = this._head; null !== n; n = n._nextDup)
                if ((null === e || e <= n.currentIndex) && Ht(n.trackById, t))
                  return n;
              return null;
            }),
            (t.prototype.remove = function (t) {
              var e = t._prevDup,
                n = t._nextDup;
              return (
                null === e ? (this._head = n) : (e._nextDup = n),
                null === n ? (this._tail = e) : (n._prevDup = e),
                null === this._head
              );
            }),
            t
          );
        })(),
        hs = (function () {
          function t() {
            this.map = new Map();
          }
          return (
            (t.prototype.put = function (t) {
              var e = t.trackById,
                n = this.map.get(e);
              n || ((n = new ps()), this.map.set(e, n)), n.add(t);
            }),
            (t.prototype.get = function (t, e) {
              var n = this.map.get(t);
              return n ? n.get(t, e) : null;
            }),
            (t.prototype.remove = function (t) {
              var e = t.trackById;
              return this.map.get(e).remove(t) && this.map.delete(e), t;
            }),
            Object.defineProperty(t.prototype, "isEmpty", {
              get: function () {
                return 0 === this.map.size;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.clear = function () {
              this.map.clear();
            }),
            t
          );
        })();
      function fs(t, e, n) {
        var r = t.previousIndex;
        if (null === r) return r;
        var o = 0;
        return n && r < n.length && (o = n[r]), r + e + o;
      }
      var ds = (function () {
          function t() {}
          return (
            (t.prototype.supports = function (t) {
              return t instanceof Map || Me(t);
            }),
            (t.prototype.create = function () {
              return new gs();
            }),
            t
          );
        })(),
        gs = (function () {
          function t() {
            (this._records = new Map()),
              (this._mapHead = null),
              (this._appendAfter = null),
              (this._previousMapHead = null),
              (this._changesHead = null),
              (this._changesTail = null),
              (this._additionsHead = null),
              (this._additionsTail = null),
              (this._removalsHead = null),
              (this._removalsTail = null);
          }
          return (
            Object.defineProperty(t.prototype, "isDirty", {
              get: function () {
                return (
                  null !== this._additionsHead ||
                  null !== this._changesHead ||
                  null !== this._removalsHead
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.forEachItem = function (t) {
              var e;
              for (e = this._mapHead; null !== e; e = e._next) t(e);
            }),
            (t.prototype.forEachPreviousItem = function (t) {
              var e;
              for (e = this._previousMapHead; null !== e; e = e._nextPrevious)
                t(e);
            }),
            (t.prototype.forEachChangedItem = function (t) {
              var e;
              for (e = this._changesHead; null !== e; e = e._nextChanged) t(e);
            }),
            (t.prototype.forEachAddedItem = function (t) {
              var e;
              for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
            }),
            (t.prototype.forEachRemovedItem = function (t) {
              var e;
              for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
            }),
            (t.prototype.diff = function (t) {
              if (t) {
                if (!(t instanceof Map || Me(t)))
                  throw new Error(
                    "Error trying to diff '" +
                      Vt(t) +
                      "'. Only maps and objects are allowed"
                  );
              } else t = new Map();
              return this.check(t) ? this : null;
            }),
            (t.prototype.onDestroy = function () {}),
            (t.prototype.check = function (t) {
              var e = this;
              this._reset();
              var n = this._mapHead;
              if (
                ((this._appendAfter = null),
                this._forEach(t, function (t, r) {
                  if (n && n.key === r)
                    e._maybeAddToChanges(n, t),
                      (e._appendAfter = n),
                      (n = n._next);
                  else {
                    var o = e._getOrCreateRecordForKey(r, t);
                    n = e._insertBeforeOrAppend(n, o);
                  }
                }),
                n)
              ) {
                n._prev && (n._prev._next = null), (this._removalsHead = n);
                for (var r = n; null !== r; r = r._nextRemoved)
                  r === this._mapHead && (this._mapHead = null),
                    this._records.delete(r.key),
                    (r._nextRemoved = r._next),
                    (r.previousValue = r.currentValue),
                    (r.currentValue = null),
                    (r._prev = null),
                    (r._next = null);
              }
              return (
                this._changesTail && (this._changesTail._nextChanged = null),
                this._additionsTail && (this._additionsTail._nextAdded = null),
                this.isDirty
              );
            }),
            (t.prototype._insertBeforeOrAppend = function (t, e) {
              if (t) {
                var n = t._prev;
                return (
                  (e._next = t),
                  (e._prev = n),
                  (t._prev = e),
                  n && (n._next = e),
                  t === this._mapHead && (this._mapHead = e),
                  (this._appendAfter = t),
                  t
                );
              }
              return (
                this._appendAfter
                  ? ((this._appendAfter._next = e),
                    (e._prev = this._appendAfter))
                  : (this._mapHead = e),
                (this._appendAfter = e),
                null
              );
            }),
            (t.prototype._getOrCreateRecordForKey = function (t, e) {
              if (this._records.has(t)) {
                var n = this._records.get(t);
                this._maybeAddToChanges(n, e);
                var r = n._prev,
                  o = n._next;
                return (
                  r && (r._next = o),
                  o && (o._prev = r),
                  (n._next = null),
                  (n._prev = null),
                  n
                );
              }
              var i = new vs(t);
              return (
                this._records.set(t, i),
                (i.currentValue = e),
                this._addToAdditions(i),
                i
              );
            }),
            (t.prototype._reset = function () {
              if (this.isDirty) {
                var t = void 0;
                for (
                  this._previousMapHead = this._mapHead,
                    t = this._previousMapHead;
                  null !== t;
                  t = t._next
                )
                  t._nextPrevious = t._next;
                for (t = this._changesHead; null !== t; t = t._nextChanged)
                  t.previousValue = t.currentValue;
                for (t = this._additionsHead; null != t; t = t._nextAdded)
                  t.previousValue = t.currentValue;
                (this._changesHead = this._changesTail = null),
                  (this._additionsHead = this._additionsTail = null),
                  (this._removalsHead = null);
              }
            }),
            (t.prototype._maybeAddToChanges = function (t, e) {
              Ht(e, t.currentValue) ||
                ((t.previousValue = t.currentValue),
                (t.currentValue = e),
                this._addToChanges(t));
            }),
            (t.prototype._addToAdditions = function (t) {
              null === this._additionsHead
                ? (this._additionsHead = this._additionsTail = t)
                : ((this._additionsTail._nextAdded = t),
                  (this._additionsTail = t));
            }),
            (t.prototype._addToChanges = function (t) {
              null === this._changesHead
                ? (this._changesHead = this._changesTail = t)
                : ((this._changesTail._nextChanged = t),
                  (this._changesTail = t));
            }),
            (t.prototype._forEach = function (t, e) {
              t instanceof Map
                ? t.forEach(e)
                : Object.keys(t).forEach(function (n) {
                    return e(t[n], n);
                  });
            }),
            t
          );
        })(),
        vs = (function () {
          return function (t) {
            (this.key = t),
              (this.previousValue = null),
              (this.currentValue = null),
              (this._nextPrevious = null),
              (this._next = null),
              (this._prev = null),
              (this._nextAdded = null),
              (this._nextRemoved = null),
              (this._nextChanged = null);
          };
        })(),
        ys = (function () {
          function t(t) {
            this.factories = t;
          }
          return (
            (t.create = function (e, n) {
              if (null != n) {
                var r = n.factories.slice();
                e = e.concat(r);
              }
              return new t(e);
            }),
            (t.extend = function (e) {
              return {
                provide: t,
                useFactory: function (n) {
                  if (!n)
                    throw new Error(
                      "Cannot extend IterableDiffers without a parent injector"
                    );
                  return t.create(e, n);
                },
                deps: [[t, new Wt(), new zt()]],
              };
            }),
            (t.prototype.find = function (t) {
              var e,
                n = this.factories.find(function (e) {
                  return e.supports(t);
                });
              if (null != n) return n;
              throw new Error(
                "Cannot find a differ supporting object '" +
                  t +
                  "' of type '" +
                  ((e = t).name || typeof e) +
                  "'"
              );
            }),
            (t.ngInjectableDef = Et({
              providedIn: "root",
              factory: function () {
                return new t([new as()]);
              },
            })),
            t
          );
        })(),
        ms = (function () {
          function t(t) {
            this.factories = t;
          }
          return (
            (t.create = function (e, n) {
              if (n) {
                var r = n.factories.slice();
                e = e.concat(r);
              }
              return new t(e);
            }),
            (t.extend = function (e) {
              return {
                provide: t,
                useFactory: function (n) {
                  if (!n)
                    throw new Error(
                      "Cannot extend KeyValueDiffers without a parent injector"
                    );
                  return t.create(e, n);
                },
                deps: [[t, new Wt(), new zt()]],
              };
            }),
            (t.prototype.find = function (t) {
              var e = this.factories.find(function (e) {
                return e.supports(t);
              });
              if (e) return e;
              throw new Error(
                "Cannot find a differ supporting object '" + t + "'"
              );
            }),
            (t.ngInjectableDef = Et({
              providedIn: "root",
              factory: function () {
                return new t([new ds()]);
              },
            })),
            t
          );
        })(),
        bs = [new ds()],
        _s = new ys([new as()]),
        ws = new ms(bs),
        Cs = Fi(null, "core", [
          { provide: hi, useValue: "unknown" },
          { provide: Vi, deps: [Vn] },
          { provide: Ni, deps: [] },
          { provide: di, deps: [] },
        ]),
        Ss = new Ot("LocaleId");
      function Es() {
        return _s;
      }
      function xs() {
        return ws;
      }
      function Ps(t) {
        return t || "en-US";
      }
      var Os = (function () {
        return function (t) {};
      })();
      function Ts(t, e, n) {
        var r = t.state,
          o = 1792 & r;
        return o === e
          ? ((t.state = (-1793 & r) | n), (t.initIndex = -1), !0)
          : o === n;
      }
      function ks(t, e, n) {
        return (
          (1792 & t.state) === e &&
          t.initIndex <= n &&
          ((t.initIndex = n + 1), !0)
        );
      }
      function Ms(t, e) {
        return t.nodes[e];
      }
      function Rs(t, e) {
        return t.nodes[e];
      }
      function Is(t, e) {
        return t.nodes[e];
      }
      function As(t, e) {
        return t.nodes[e];
      }
      function Ns(t, e) {
        return t.nodes[e];
      }
      var Ds = {
        setCurrentNode: void 0,
        createRootView: void 0,
        createEmbeddedView: void 0,
        createComponentView: void 0,
        createNgModuleRef: void 0,
        overrideProvider: void 0,
        overrideComponentView: void 0,
        clearOverrides: void 0,
        checkAndUpdateView: void 0,
        checkNoChangesView: void 0,
        destroyView: void 0,
        resolveDep: void 0,
        createDebugContext: void 0,
        handleEvent: void 0,
        updateDirectives: void 0,
        updateRenderer: void 0,
        dirtyParentQueries: void 0,
      };
      function js(t, e, n, r) {
        var o =
          "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" +
          e +
          "'. Current value: '" +
          n +
          "'.";
        return (
          r &&
            (o +=
              " It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"),
          (function (t, e) {
            var n = new Error(t);
            return Ls(n, e), n;
          })(o, t)
        );
      }
      function Ls(t, e) {
        (t[Go] = e), (t[Jo] = e.logError.bind(e));
      }
      function Fs(t) {
        return new Error(
          "ViewDestroyedError: Attempt to use a destroyed view: " + t
        );
      }
      var Hs = function () {},
        Vs = new Map();
      function Us(t) {
        var e = Vs.get(t);
        return e || ((e = Vt(t) + "_" + Vs.size), Vs.set(t, e)), e;
      }
      var Bs = "$$undefined",
        zs = "$$empty";
      function qs(t) {
        return {
          id: Bs,
          styles: t.styles,
          encapsulation: t.encapsulation,
          data: t.data,
        };
      }
      var Ws = 0;
      function Ys(t, e, n, r) {
        return !(!(2 & t.state) && Ht(t.oldValues[e.bindingIndex + n], r));
      }
      function Xs(t, e, n, r) {
        return !!Ys(t, e, n, r) && ((t.oldValues[e.bindingIndex + n] = r), !0);
      }
      function Qs(t, e, n, r) {
        var o = t.oldValues[e.bindingIndex + n];
        if (1 & t.state || !Pe(o, r)) {
          var i = e.bindings[n].name;
          throw js(
            Ds.createDebugContext(t, e.nodeIndex),
            i + ": " + o,
            i + ": " + r,
            0 != (1 & t.state)
          );
        }
      }
      function Ks(t) {
        for (var e = t; e; )
          2 & e.def.flags && (e.state |= 8),
            (e = e.viewContainerParent || e.parent);
      }
      function Zs(t, e) {
        for (var n = t; n && n !== e; )
          (n.state |= 64), (n = n.viewContainerParent || n.parent);
      }
      function Gs(t, e, n, r) {
        try {
          return (
            Ks(33554432 & t.def.nodes[e].flags ? Rs(t, e).componentView : t),
            Ds.handleEvent(t, e, n, r)
          );
        } catch (o) {
          t.root.errorHandler.handleError(o);
        }
      }
      function $s(t) {
        return t.parent ? Rs(t.parent, t.parentNodeDef.nodeIndex) : null;
      }
      function Js(t) {
        return t.parent ? t.parentNodeDef.parent : null;
      }
      function ta(t, e) {
        switch (201347067 & e.flags) {
          case 1:
            return Rs(t, e.nodeIndex).renderElement;
          case 2:
            return Ms(t, e.nodeIndex).renderText;
        }
      }
      function ea(t) {
        return !!t.parent && !!(32768 & t.parentNodeDef.flags);
      }
      function na(t) {
        return !(!t.parent || 32768 & t.parentNodeDef.flags);
      }
      function ra(t) {
        return 1 << t % 32;
      }
      function oa(t) {
        var e = {},
          n = 0,
          r = {};
        return (
          t &&
            t.forEach(function (t) {
              var o = u(t, 2),
                i = o[0],
                s = o[1];
              "number" == typeof i ? ((e[i] = s), (n |= ra(i))) : (r[i] = s);
            }),
          { matchedQueries: e, references: r, matchedQueryIds: n }
        );
      }
      function ia(t, e) {
        return t.map(function (t) {
          var n, r, o;
          return (
            Array.isArray(t)
              ? ((o = (n = u(t, 2))[0]), (r = n[1]))
              : ((o = 0), (r = t)),
            r &&
              ("function" == typeof r || "object" == typeof r) &&
              e &&
              Object.defineProperty(r, Dn, { value: e, configurable: !0 }),
            { flags: o, token: r, tokenKey: Us(r) }
          );
        });
      }
      function sa(t, e, n) {
        var r = n.renderParent;
        return r
          ? 0 == (1 & r.flags) ||
            0 == (33554432 & r.flags) ||
            (r.element.componentRendererType &&
              r.element.componentRendererType.encapsulation === Rt.Native)
            ? Rs(t, n.renderParent.nodeIndex).renderElement
            : void 0
          : e;
      }
      var aa = new WeakMap();
      function la(t) {
        var e = aa.get(t);
        return (
          e ||
            (((e = t(function () {
              return Hs;
            })).factory = t),
            aa.set(t, e)),
          e
        );
      }
      function ua(t, e, n, r, o) {
        3 === e && (n = t.renderer.parentNode(ta(t, t.def.lastRenderRootNode))),
          ca(t, e, 0, t.def.nodes.length - 1, n, r, o);
      }
      function ca(t, e, n, r, o, i, s) {
        for (var a = n; a <= r; a++) {
          var l = t.def.nodes[a];
          11 & l.flags && ha(t, l, e, o, i, s), (a += l.childCount);
        }
      }
      function pa(t, e, n, r, o, i) {
        for (var s = t; s && !ea(s); ) s = s.parent;
        for (
          var a = s.parent,
            l = Js(s),
            u = l.nodeIndex + l.childCount,
            c = l.nodeIndex + 1;
          c <= u;
          c++
        ) {
          var p = a.def.nodes[c];
          p.ngContentIndex === e && ha(a, p, n, r, o, i), (c += p.childCount);
        }
        if (!a.parent) {
          var h = t.root.projectableNodes[e];
          if (h) for (c = 0; c < h.length; c++) fa(t, h[c], n, r, o, i);
        }
      }
      function ha(t, e, n, r, o, i) {
        if (8 & e.flags) pa(t, e.ngContent.index, n, r, o, i);
        else {
          var s = ta(t, e);
          if (
            (3 === n && 33554432 & e.flags && 48 & e.bindingFlags
              ? (16 & e.bindingFlags && fa(t, s, n, r, o, i),
                32 & e.bindingFlags &&
                  fa(Rs(t, e.nodeIndex).componentView, s, n, r, o, i))
              : fa(t, s, n, r, o, i),
            16777216 & e.flags)
          )
            for (
              var a = Rs(t, e.nodeIndex).viewContainer._embeddedViews, l = 0;
              l < a.length;
              l++
            )
              ua(a[l], n, r, o, i);
          1 & e.flags &&
            !e.element.name &&
            ca(t, n, e.nodeIndex + 1, e.nodeIndex + e.childCount, r, o, i);
        }
      }
      function fa(t, e, n, r, o, i) {
        var s = t.renderer;
        switch (n) {
          case 1:
            s.appendChild(r, e);
            break;
          case 2:
            s.insertBefore(r, e, o);
            break;
          case 3:
            s.removeChild(r, e);
            break;
          case 0:
            i.push(e);
        }
      }
      var da = /^:([^:]+):(.+)$/;
      function ga(t) {
        if (":" === t[0]) {
          var e = t.match(da);
          return [e[1], e[2]];
        }
        return ["", t];
      }
      function va(t) {
        for (var e = 0, n = 0; n < t.length; n++) e |= t[n].flags;
        return e;
      }
      function ya(t, e, n, r, o, i) {
        t |= 1;
        var s = oa(e);
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          flags: t,
          checkIndex: -1,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: s.matchedQueries,
          matchedQueryIds: s.matchedQueryIds,
          references: s.references,
          ngContentIndex: n,
          childCount: r,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: {
            ns: null,
            name: null,
            attrs: null,
            template: i ? la(i) : null,
            componentProvider: null,
            componentView: null,
            componentRendererType: null,
            publicProviders: null,
            allProviders: null,
            handleEvent: o || Hs,
          },
          provider: null,
          text: null,
          query: null,
          ngContent: null,
        };
      }
      function ma(t, e, n, r, o, i, s, a, l, c, p, h) {
        var f;
        void 0 === s && (s = []), c || (c = Hs);
        var d = oa(n),
          g = d.matchedQueries,
          v = d.references,
          y = d.matchedQueryIds,
          m = null,
          b = null;
        i && ((m = (f = u(ga(i), 2))[0]), (b = f[1])), (a = a || []);
        for (var _ = new Array(a.length), w = 0; w < a.length; w++) {
          var C = u(a[w], 3),
            S = C[0],
            E = C[2],
            x = u(ga(C[1]), 2),
            P = x[0],
            O = x[1],
            T = void 0,
            k = void 0;
          switch (15 & S) {
            case 4:
              k = E;
              break;
            case 1:
            case 8:
              T = E;
          }
          _[w] = {
            flags: S,
            ns: P,
            name: O,
            nonMinifiedName: O,
            securityContext: T,
            suffix: k,
          };
        }
        l = l || [];
        var M = new Array(l.length);
        for (w = 0; w < l.length; w++) {
          var R = u(l[w], 2);
          M[w] = { type: 0, target: R[0], eventName: R[1], propName: null };
        }
        var I = (s = s || []).map(function (t) {
          var e = u(t, 2),
            n = e[1],
            r = u(ga(e[0]), 2);
          return [r[0], r[1], n];
        });
        return (
          (h = (function (t) {
            if (t && t.id === Bs) {
              var e =
                (null != t.encapsulation && t.encapsulation !== Rt.None) ||
                t.styles.length ||
                Object.keys(t.data).length;
              t.id = e ? "c" + Ws++ : zs;
            }
            return t && t.id === zs && (t = null), t || null;
          })(h)),
          p && (e |= 33554432),
          {
            nodeIndex: -1,
            parent: null,
            renderParent: null,
            bindingIndex: -1,
            outputIndex: -1,
            checkIndex: t,
            flags: (e |= 1),
            childFlags: 0,
            directChildFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: g,
            matchedQueryIds: y,
            references: v,
            ngContentIndex: r,
            childCount: o,
            bindings: _,
            bindingFlags: va(_),
            outputs: M,
            element: {
              ns: m,
              name: b,
              attrs: I,
              template: null,
              componentProvider: null,
              componentView: p || null,
              componentRendererType: h,
              publicProviders: null,
              allProviders: null,
              handleEvent: c || Hs,
            },
            provider: null,
            text: null,
            query: null,
            ngContent: null,
          }
        );
      }
      function ba(t, e, n) {
        var r,
          o = n.element,
          i = t.root.selectorOrNode,
          s = t.renderer;
        if (t.parent || !i) {
          r = o.name ? s.createElement(o.name, o.ns) : s.createComment("");
          var a = sa(t, e, n);
          a && s.appendChild(a, r);
        } else
          r = s.selectRootElement(
            i,
            !!o.componentRendererType &&
              o.componentRendererType.encapsulation === Rt.ShadowDom
          );
        if (o.attrs)
          for (var l = 0; l < o.attrs.length; l++) {
            var c = u(o.attrs[l], 3);
            s.setAttribute(r, c[1], c[2], c[0]);
          }
        return r;
      }
      function _a(t, e, n, r) {
        for (var o = 0; o < n.outputs.length; o++) {
          var i = n.outputs[o],
            s = wa(
              t,
              n.nodeIndex,
              ((p = i.eventName), (c = i.target) ? c + ":" + p : p)
            ),
            a = i.target,
            l = t;
          "component" === i.target && ((a = null), (l = e));
          var u = l.renderer.listen(a || r, i.eventName, s);
          t.disposables[n.outputIndex + o] = u;
        }
        var c, p;
      }
      function wa(t, e, n) {
        return function (r) {
          return Gs(t, e, n, r);
        };
      }
      function Ca(t, e, n, r) {
        if (!Xs(t, e, n, r)) return !1;
        var o = e.bindings[n],
          i = Rs(t, e.nodeIndex),
          s = i.renderElement,
          a = o.name;
        switch (15 & o.flags) {
          case 1:
            !(function (t, e, n, r, o, i) {
              var s = e.securityContext,
                a = s ? t.root.sanitizer.sanitize(s, i) : i;
              a = null != a ? a.toString() : null;
              var l = t.renderer;
              null != i
                ? l.setAttribute(n, o, a, r)
                : l.removeAttribute(n, o, r);
            })(t, o, s, o.ns, a, r);
            break;
          case 2:
            !(function (t, e, n, r) {
              var o = t.renderer;
              r ? o.addClass(e, n) : o.removeClass(e, n);
            })(t, s, a, r);
            break;
          case 4:
            !(function (t, e, n, r, o) {
              var i = t.root.sanitizer.sanitize(Xo.STYLE, o);
              if (null != i) {
                i = i.toString();
                var s = e.suffix;
                null != s && (i += s);
              } else i = null;
              var a = t.renderer;
              null != i ? a.setStyle(n, r, i) : a.removeStyle(n, r);
            })(t, o, s, a, r);
            break;
          case 8:
            !(function (t, e, n, r, o) {
              var i = e.securityContext,
                s = i ? t.root.sanitizer.sanitize(i, o) : o;
              t.renderer.setProperty(n, r, s);
            })(
              33554432 & e.flags && 32 & o.flags ? i.componentView : t,
              o,
              s,
              a,
              r
            );
        }
        return !0;
      }
      var Sa = new Object(),
        Ea = Us(Vn),
        xa = Us(Fn),
        Pa = Us(tr);
      function Oa(t, e, n, r) {
        return (
          (n = Nn(n)),
          { index: -1, deps: ia(r, Vt(e)), flags: t, token: e, value: n }
        );
      }
      function Ta(t, e, n) {
        void 0 === n && (n = Vn.THROW_IF_NOT_FOUND);
        var r,
          o,
          i = Qt(t);
        try {
          if (8 & e.flags) return e.token;
          if ((2 & e.flags && (n = null), 1 & e.flags))
            return t._parent.get(e.token, n);
          var s = e.tokenKey;
          switch (s) {
            case Ea:
            case xa:
            case Pa:
              return t;
          }
          var a,
            l = t._def.providersByKey[s];
          if (l) {
            var u = t._providers[l.index];
            return (
              void 0 === u && (u = t._providers[l.index] = ka(t, l)),
              u === Sa ? void 0 : u
            );
          }
          if (
            (a = xt(e.token)) &&
            ((r = t),
            null != (o = a).providedIn &&
              ((function (t, e) {
                return t._def.modules.indexOf(o.providedIn) > -1;
              })(r) ||
                ("root" === o.providedIn && r._def.isRoot)))
          ) {
            var c = t._providers.length;
            return (
              (t._def.providersByKey[e.tokenKey] = {
                flags: 5120,
                value: a.factory,
                deps: [],
                index: c,
                token: e.token,
              }),
              (t._providers[c] = Sa),
              (t._providers[c] = ka(t, t._def.providersByKey[e.tokenKey]))
            );
          }
          return 4 & e.flags ? n : t._parent.get(e.token, n);
        } finally {
          Qt(i);
        }
      }
      function ka(t, e) {
        var n;
        switch (201347067 & e.flags) {
          case 512:
            n = (function (t, e, n) {
              var r = n.length;
              switch (r) {
                case 0:
                  return new e();
                case 1:
                  return new e(Ta(t, n[0]));
                case 2:
                  return new e(Ta(t, n[0]), Ta(t, n[1]));
                case 3:
                  return new e(Ta(t, n[0]), Ta(t, n[1]), Ta(t, n[2]));
                default:
                  for (var o = new Array(r), i = 0; i < r; i++)
                    o[i] = Ta(t, n[i]);
                  return new (e.bind.apply(e, c([void 0], o)))();
              }
            })(t, e.value, e.deps);
            break;
          case 1024:
            n = (function (t, e, n) {
              var r = n.length;
              switch (r) {
                case 0:
                  return e();
                case 1:
                  return e(Ta(t, n[0]));
                case 2:
                  return e(Ta(t, n[0]), Ta(t, n[1]));
                case 3:
                  return e(Ta(t, n[0]), Ta(t, n[1]), Ta(t, n[2]));
                default:
                  for (var o = Array(r), i = 0; i < r; i++) o[i] = Ta(t, n[i]);
                  return e.apply(void 0, c(o));
              }
            })(t, e.value, e.deps);
            break;
          case 2048:
            n = Ta(t, e.deps[0]);
            break;
          case 256:
            n = e.value;
        }
        return (
          n === Sa ||
            null == n ||
            "object" != typeof n ||
            131072 & e.flags ||
            "function" != typeof n.ngOnDestroy ||
            (e.flags |= 131072),
          void 0 === n ? Sa : n
        );
      }
      function Ma(t, e) {
        var n = t.viewContainer._embeddedViews;
        if (((null == e || e >= n.length) && (e = n.length - 1), e < 0))
          return null;
        var r = n[e];
        return (
          (r.viewContainerParent = null),
          Na(n, e),
          Ds.dirtyParentQueries(r),
          Ia(r),
          r
        );
      }
      function Ra(t, e, n) {
        var r = e ? ta(e, e.def.lastRenderRootNode) : t.renderElement,
          o = n.renderer.parentNode(r),
          i = n.renderer.nextSibling(r);
        ua(n, 2, o, i, void 0);
      }
      function Ia(t) {
        ua(t, 3, null, null, void 0);
      }
      function Aa(t, e, n) {
        e >= t.length ? t.push(n) : t.splice(e, 0, n);
      }
      function Na(t, e) {
        e >= t.length - 1 ? t.pop() : t.splice(e, 1);
      }
      var Da = new Object();
      function ja(t, e, n, r, o, i) {
        return new La(t, e, n, r, o, i);
      }
      var La = (function (t) {
          function e(e, n, r, o, i, s) {
            var a = t.call(this) || this;
            return (
              (a.selector = e),
              (a.componentType = n),
              (a._inputs = o),
              (a._outputs = i),
              (a.ngContentSelectors = s),
              (a.viewDefFactory = r),
              a
            );
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "inputs", {
              get: function () {
                var t = [],
                  e = this._inputs;
                for (var n in e) t.push({ propName: n, templateName: e[n] });
                return t;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "outputs", {
              get: function () {
                var t = [];
                for (var e in this._outputs)
                  t.push({ propName: e, templateName: this._outputs[e] });
                return t;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.create = function (t, e, n, r) {
              if (!r) throw new Error("ngModule should be provided");
              var o = la(this.viewDefFactory),
                i = o.nodes[0].element.componentProvider.nodeIndex,
                s = Ds.createRootView(t, e || [], n, o, r, Da),
                a = Is(s, i).instance;
              return (
                n &&
                  s.renderer.setAttribute(
                    Rs(s, 0).renderElement,
                    "ng-version",
                    uo.full
                  ),
                new Fa(s, new Ba(s), a)
              );
            }),
            e
          );
        })(Kr),
        Fa = (function (t) {
          function e(e, n, r) {
            var o = t.call(this) || this;
            return (
              (o._view = e),
              (o._viewRef = n),
              (o._component = r),
              (o._elDef = o._view.def.nodes[0]),
              (o.hostView = n),
              (o.changeDetectorRef = n),
              (o.instance = r),
              o
            );
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "location", {
              get: function () {
                return new no(
                  Rs(this._view, this._elDef.nodeIndex).renderElement
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "injector", {
              get: function () {
                return new Ya(this._view, this._elDef);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "componentType", {
              get: function () {
                return this._component.constructor;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.destroy = function () {
              this._viewRef.destroy();
            }),
            (e.prototype.onDestroy = function (t) {
              this._viewRef.onDestroy(t);
            }),
            e
          );
        })(Qr);
      function Ha(t, e, n) {
        return new Va(t, e, n);
      }
      var Va = (function () {
        function t(t, e, n) {
          (this._view = t),
            (this._elDef = e),
            (this._data = n),
            (this._embeddedViews = []);
        }
        return (
          Object.defineProperty(t.prototype, "element", {
            get: function () {
              return new no(this._data.renderElement);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "injector", {
            get: function () {
              return new Ya(this._view, this._elDef);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "parentInjector", {
            get: function () {
              for (var t = this._view, e = this._elDef.parent; !e && t; )
                (e = Js(t)), (t = t.parent);
              return t ? new Ya(t, e) : new Ya(this._view, null);
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.clear = function () {
            for (var t = this._embeddedViews.length - 1; t >= 0; t--) {
              var e = Ma(this._data, t);
              Ds.destroyView(e);
            }
          }),
          (t.prototype.get = function (t) {
            var e = this._embeddedViews[t];
            if (e) {
              var n = new Ba(e);
              return n.attachToViewContainerRef(this), n;
            }
            return null;
          }),
          Object.defineProperty(t.prototype, "length", {
            get: function () {
              return this._embeddedViews.length;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.createEmbeddedView = function (t, e, n) {
            var r = t.createEmbeddedView(e || {});
            return this.insert(r, n), r;
          }),
          (t.prototype.createComponent = function (t, e, n, r, o) {
            var i = n || this.parentInjector;
            o || t instanceof eo || (o = i.get(tr));
            var s = t.create(i, r, void 0, o);
            return this.insert(s.hostView, e), s;
          }),
          (t.prototype.insert = function (t, e) {
            if (t.destroyed)
              throw new Error(
                "Cannot insert a destroyed View in a ViewContainer!"
              );
            var n,
              r,
              o,
              i,
              s = t;
            return (
              (i = (n = this._data).viewContainer._embeddedViews),
              null == (r = e) && (r = i.length),
              ((o = s._view).viewContainerParent = this._view),
              Aa(i, r, o),
              (function (t, e) {
                var n = $s(e);
                if (n && n !== t && !(16 & e.state)) {
                  e.state |= 16;
                  var r = n.template._projectedViews;
                  r || (r = n.template._projectedViews = []),
                    r.push(e),
                    (function (t, n) {
                      if (!(4 & n.flags)) {
                        (e.parent.def.nodeFlags |= 4), (n.flags |= 4);
                        for (var r = n.parent; r; )
                          (r.childFlags |= 4), (r = r.parent);
                      }
                    })(0, e.parentNodeDef);
                }
              })(n, o),
              Ds.dirtyParentQueries(o),
              Ra(n, r > 0 ? i[r - 1] : null, o),
              s.attachToViewContainerRef(this),
              t
            );
          }),
          (t.prototype.move = function (t, e) {
            if (t.destroyed)
              throw new Error(
                "Cannot move a destroyed View in a ViewContainer!"
              );
            var n,
              r,
              o,
              i,
              s,
              a = this._embeddedViews.indexOf(t._view);
            return (
              (o = e),
              (s = (i = (n = this._data).viewContainer._embeddedViews)[
                (r = a)
              ]),
              Na(i, r),
              null == o && (o = i.length),
              Aa(i, o, s),
              Ds.dirtyParentQueries(s),
              Ia(s),
              Ra(n, o > 0 ? i[o - 1] : null, s),
              t
            );
          }),
          (t.prototype.indexOf = function (t) {
            return this._embeddedViews.indexOf(t._view);
          }),
          (t.prototype.remove = function (t) {
            var e = Ma(this._data, t);
            e && Ds.destroyView(e);
          }),
          (t.prototype.detach = function (t) {
            var e = Ma(this._data, t);
            return e ? new Ba(e) : null;
          }),
          t
        );
      })();
      function Ua(t) {
        return new Ba(t);
      }
      var Ba = (function () {
        function t(t) {
          (this._view = t),
            (this._viewContainerRef = null),
            (this._appRef = null);
        }
        return (
          Object.defineProperty(t.prototype, "rootNodes", {
            get: function () {
              return ua(this._view, 0, void 0, void 0, (t = [])), t;
              var t;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "context", {
            get: function () {
              return this._view.context;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "destroyed", {
            get: function () {
              return 0 != (128 & this._view.state);
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.markForCheck = function () {
            Ks(this._view);
          }),
          (t.prototype.detach = function () {
            this._view.state &= -5;
          }),
          (t.prototype.detectChanges = function () {
            var t = this._view.root.rendererFactory;
            t.begin && t.begin();
            try {
              Ds.checkAndUpdateView(this._view);
            } finally {
              t.end && t.end();
            }
          }),
          (t.prototype.checkNoChanges = function () {
            Ds.checkNoChangesView(this._view);
          }),
          (t.prototype.reattach = function () {
            this._view.state |= 4;
          }),
          (t.prototype.onDestroy = function (t) {
            this._view.disposables || (this._view.disposables = []),
              this._view.disposables.push(t);
          }),
          (t.prototype.destroy = function () {
            this._appRef
              ? this._appRef.detachView(this)
              : this._viewContainerRef &&
                this._viewContainerRef.detach(
                  this._viewContainerRef.indexOf(this)
                ),
              Ds.destroyView(this._view);
          }),
          (t.prototype.detachFromAppRef = function () {
            (this._appRef = null),
              Ia(this._view),
              Ds.dirtyParentQueries(this._view);
          }),
          (t.prototype.attachToAppRef = function (t) {
            if (this._viewContainerRef)
              throw new Error(
                "This view is already attached to a ViewContainer!"
              );
            this._appRef = t;
          }),
          (t.prototype.attachToViewContainerRef = function (t) {
            if (this._appRef)
              throw new Error(
                "This view is already attached directly to the ApplicationRef!"
              );
            this._viewContainerRef = t;
          }),
          t
        );
      })();
      function za(t, e) {
        return new qa(t, e);
      }
      var qa = (function (t) {
        function e(e, n) {
          var r = t.call(this) || this;
          return (r._parentView = e), (r._def = n), r;
        }
        return (
          o(e, t),
          (e.prototype.createEmbeddedView = function (t) {
            return new Ba(
              Ds.createEmbeddedView(
                this._parentView,
                this._def,
                this._def.element.template,
                t
              )
            );
          }),
          Object.defineProperty(e.prototype, "elementRef", {
            get: function () {
              return new no(
                Rs(this._parentView, this._def.nodeIndex).renderElement
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })(Wo);
      function Wa(t, e) {
        return new Ya(t, e);
      }
      var Ya = (function () {
        function t(t, e) {
          (this.view = t), (this.elDef = e);
        }
        return (
          (t.prototype.get = function (t, e) {
            return (
              void 0 === e && (e = Vn.THROW_IF_NOT_FOUND),
              Ds.resolveDep(
                this.view,
                this.elDef,
                !!this.elDef && 0 != (33554432 & this.elDef.flags),
                { flags: 0, token: t, tokenKey: Us(t) },
                e
              )
            );
          }),
          t
        );
      })();
      function Xa(t, e) {
        var n = t.def.nodes[e];
        if (1 & n.flags) {
          var r = Rs(t, n.nodeIndex);
          return n.element.template ? r.template : r.renderElement;
        }
        if (2 & n.flags) return Ms(t, n.nodeIndex).renderText;
        if (20240 & n.flags) return Is(t, n.nodeIndex).instance;
        throw new Error("Illegal state: read nodeValue for node index " + e);
      }
      function Qa(t) {
        return new Ka(t.renderer);
      }
      var Ka = (function () {
        function t(t) {
          this.delegate = t;
        }
        return (
          (t.prototype.selectRootElement = function (t) {
            return this.delegate.selectRootElement(t);
          }),
          (t.prototype.createElement = function (t, e) {
            var n = u(ga(e), 2),
              r = this.delegate.createElement(n[1], n[0]);
            return t && this.delegate.appendChild(t, r), r;
          }),
          (t.prototype.createViewRoot = function (t) {
            return t;
          }),
          (t.prototype.createTemplateAnchor = function (t) {
            var e = this.delegate.createComment("");
            return t && this.delegate.appendChild(t, e), e;
          }),
          (t.prototype.createText = function (t, e) {
            var n = this.delegate.createText(e);
            return t && this.delegate.appendChild(t, n), n;
          }),
          (t.prototype.projectNodes = function (t, e) {
            for (var n = 0; n < e.length; n++)
              this.delegate.appendChild(t, e[n]);
          }),
          (t.prototype.attachViewAfter = function (t, e) {
            for (
              var n = this.delegate.parentNode(t),
                r = this.delegate.nextSibling(t),
                o = 0;
              o < e.length;
              o++
            )
              this.delegate.insertBefore(n, e[o], r);
          }),
          (t.prototype.detachView = function (t) {
            for (var e = 0; e < t.length; e++) {
              var n = t[e],
                r = this.delegate.parentNode(n);
              this.delegate.removeChild(r, n);
            }
          }),
          (t.prototype.destroyView = function (t, e) {
            for (var n = 0; n < e.length; n++) this.delegate.destroyNode(e[n]);
          }),
          (t.prototype.listen = function (t, e, n) {
            return this.delegate.listen(t, e, n);
          }),
          (t.prototype.listenGlobal = function (t, e, n) {
            return this.delegate.listen(t, e, n);
          }),
          (t.prototype.setElementProperty = function (t, e, n) {
            this.delegate.setProperty(t, e, n);
          }),
          (t.prototype.setElementAttribute = function (t, e, n) {
            var r = u(ga(e), 2),
              o = r[0],
              i = r[1];
            null != n
              ? this.delegate.setAttribute(t, i, n, o)
              : this.delegate.removeAttribute(t, i, o);
          }),
          (t.prototype.setBindingDebugInfo = function (t, e, n) {}),
          (t.prototype.setElementClass = function (t, e, n) {
            n ? this.delegate.addClass(t, e) : this.delegate.removeClass(t, e);
          }),
          (t.prototype.setElementStyle = function (t, e, n) {
            null != n
              ? this.delegate.setStyle(t, e, n)
              : this.delegate.removeStyle(t, e);
          }),
          (t.prototype.invokeElementMethod = function (t, e, n) {
            t[e].apply(t, n);
          }),
          (t.prototype.setText = function (t, e) {
            this.delegate.setValue(t, e);
          }),
          (t.prototype.animate = function () {
            throw new Error("Renderer.animate is no longer supported!");
          }),
          t
        );
      })();
      function Za(t, e, n, r) {
        return new Ga(t, e, n, r);
      }
      var Ga = (function () {
          function t(t, e, n, r) {
            (this._moduleType = t),
              (this._parent = e),
              (this._bootstrapComponents = n),
              (this._def = r),
              (this._destroyListeners = []),
              (this._destroyed = !1),
              (this.injector = this),
              (function (t) {
                for (
                  var e = t._def,
                    n = (t._providers = new Array(e.providers.length)),
                    r = 0;
                  r < e.providers.length;
                  r++
                ) {
                  var o = e.providers[r];
                  4096 & o.flags || (void 0 === n[r] && (n[r] = ka(t, o)));
                }
              })(this);
          }
          return (
            (t.prototype.get = function (t, e, n) {
              void 0 === e && (e = Vn.THROW_IF_NOT_FOUND),
                void 0 === n && (n = Yt.Default);
              var r = 0;
              return (
                n & Yt.SkipSelf ? (r |= 1) : n & Yt.Self && (r |= 4),
                Ta(this, { token: t, tokenKey: Us(t), flags: r }, e)
              );
            }),
            Object.defineProperty(t.prototype, "instance", {
              get: function () {
                return this.get(this._moduleType);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "componentFactoryResolver", {
              get: function () {
                return this.get(Jr);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.destroy = function () {
              if (this._destroyed)
                throw new Error(
                  "The ng module " +
                    Vt(this.instance.constructor) +
                    " has already been destroyed."
                );
              (this._destroyed = !0),
                (function (t, e) {
                  for (
                    var n = t._def, r = new Set(), o = 0;
                    o < n.providers.length;
                    o++
                  )
                    if (131072 & n.providers[o].flags) {
                      var i = t._providers[o];
                      if (i && i !== Sa) {
                        var s = i.ngOnDestroy;
                        "function" != typeof s ||
                          r.has(i) ||
                          (s.apply(i), r.add(i));
                      }
                    }
                })(this),
                this._destroyListeners.forEach(function (t) {
                  return t();
                });
            }),
            (t.prototype.onDestroy = function (t) {
              this._destroyListeners.push(t);
            }),
            t
          );
        })(),
        $a = Us(oo),
        Ja = Us(ao),
        tl = Us(no),
        el = Us(Gi),
        nl = Us(Wo),
        rl = Us(Ji),
        ol = Us(Vn),
        il = Us(Fn);
      function sl(t, e, n, r, o, i, s, a) {
        var l = [];
        if (s)
          for (var c in s) {
            var p = u(s[c], 2);
            l[p[0]] = {
              flags: 8,
              name: c,
              nonMinifiedName: p[1],
              ns: null,
              securityContext: null,
              suffix: null,
            };
          }
        var h = [];
        if (a)
          for (var f in a)
            h.push({ type: 1, propName: f, target: null, eventName: a[f] });
        return ll(t, (e |= 16384), n, r, o, o, i, l, h);
      }
      function al(t, e, n, r, o) {
        return ll(-1, t, e, 0, n, r, o);
      }
      function ll(t, e, n, r, o, i, s, a, l) {
        var u = oa(n),
          c = u.matchedQueries,
          p = u.references,
          h = u.matchedQueryIds;
        l || (l = []), a || (a = []), (i = Nn(i));
        var f = ia(s, Vt(o));
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: t,
          flags: e,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: c,
          matchedQueryIds: h,
          references: p,
          ngContentIndex: -1,
          childCount: r,
          bindings: a,
          bindingFlags: va(a),
          outputs: l,
          element: null,
          provider: { token: o, value: i, deps: f },
          text: null,
          query: null,
          ngContent: null,
        };
      }
      function ul(t, e) {
        return fl(t, e);
      }
      function cl(t, e) {
        for (var n = t; n.parent && !ea(n); ) n = n.parent;
        return dl(n.parent, Js(n), !0, e.provider.value, e.provider.deps);
      }
      function pl(t, e) {
        var n = dl(
          t,
          e.parent,
          (32768 & e.flags) > 0,
          e.provider.value,
          e.provider.deps
        );
        if (e.outputs.length)
          for (var r = 0; r < e.outputs.length; r++) {
            var o = e.outputs[r],
              i = n[o.propName];
            if (!ii(i))
              throw new Error(
                "@Output " +
                  o.propName +
                  " not initialized in '" +
                  n.constructor.name +
                  "'."
              );
            var s = i.subscribe(hl(t, e.parent.nodeIndex, o.eventName));
            t.disposables[e.outputIndex + r] = s.unsubscribe.bind(s);
          }
        return n;
      }
      function hl(t, e, n) {
        return function (r) {
          return Gs(t, e, n, r);
        };
      }
      function fl(t, e) {
        var n = (8192 & e.flags) > 0,
          r = e.provider;
        switch (201347067 & e.flags) {
          case 512:
            return dl(t, e.parent, n, r.value, r.deps);
          case 1024:
            return (function (t, e, n, r, o) {
              var i = o.length;
              switch (i) {
                case 0:
                  return r();
                case 1:
                  return r(vl(t, e, n, o[0]));
                case 2:
                  return r(vl(t, e, n, o[0]), vl(t, e, n, o[1]));
                case 3:
                  return r(
                    vl(t, e, n, o[0]),
                    vl(t, e, n, o[1]),
                    vl(t, e, n, o[2])
                  );
                default:
                  for (var s = Array(i), a = 0; a < i; a++)
                    s[a] = vl(t, e, n, o[a]);
                  return r.apply(void 0, c(s));
              }
            })(t, e.parent, n, r.value, r.deps);
          case 2048:
            return vl(t, e.parent, n, r.deps[0]);
          case 256:
            return r.value;
        }
      }
      function dl(t, e, n, r, o) {
        var i = o.length;
        switch (i) {
          case 0:
            return new r();
          case 1:
            return new r(vl(t, e, n, o[0]));
          case 2:
            return new r(vl(t, e, n, o[0]), vl(t, e, n, o[1]));
          case 3:
            return new r(
              vl(t, e, n, o[0]),
              vl(t, e, n, o[1]),
              vl(t, e, n, o[2])
            );
          default:
            for (var s = new Array(i), a = 0; a < i; a++)
              s[a] = vl(t, e, n, o[a]);
            return new (r.bind.apply(r, c([void 0], s)))();
        }
      }
      var gl = {};
      function vl(t, e, n, r, o) {
        if ((void 0 === o && (o = Vn.THROW_IF_NOT_FOUND), 8 & r.flags))
          return r.token;
        var i = t;
        2 & r.flags && (o = null);
        var s = r.tokenKey;
        s === rl && (n = !(!e || !e.element.componentView)),
          e && 1 & r.flags && ((n = !1), (e = e.parent));
        for (var a = t; a; ) {
          if (e)
            switch (s) {
              case $a:
                return Qa(yl(a, e, n));
              case Ja:
                return yl(a, e, n).renderer;
              case tl:
                return new no(Rs(a, e.nodeIndex).renderElement);
              case el:
                return Rs(a, e.nodeIndex).viewContainer;
              case nl:
                if (e.element.template) return Rs(a, e.nodeIndex).template;
                break;
              case rl:
                return Ua(yl(a, e, n));
              case ol:
              case il:
                return Wa(a, e);
              default:
                var l = (
                  n ? e.element.allProviders : e.element.publicProviders
                )[s];
                if (l) {
                  var u = Is(a, l.nodeIndex);
                  return (
                    u ||
                      ((u = { instance: fl(a, l) }),
                      (a.nodes[l.nodeIndex] = u)),
                    u.instance
                  );
                }
            }
          (n = ea(a)), (e = Js(a)), (a = a.parent), 4 & r.flags && (a = null);
        }
        var c = i.root.injector.get(r.token, gl);
        return c !== gl || o === gl
          ? c
          : i.root.ngModule.injector.get(r.token, o);
      }
      function yl(t, e, n) {
        var r;
        if (n) r = Rs(t, e.nodeIndex).componentView;
        else for (r = t; r.parent && !ea(r); ) r = r.parent;
        return r;
      }
      function ml(t, e, n, r, o, i) {
        if (32768 & n.flags) {
          var s = Rs(t, n.parent.nodeIndex).componentView;
          2 & s.def.flags && (s.state |= 8);
        }
        if (((e.instance[n.bindings[r].name] = o), 524288 & n.flags)) {
          i = i || {};
          var a = Oe.unwrap(t.oldValues[n.bindingIndex + r]);
          i[n.bindings[r].nonMinifiedName] = new Te(a, o, 0 != (2 & t.state));
        }
        return (t.oldValues[n.bindingIndex + r] = o), i;
      }
      function bl(t, e) {
        if (t.def.nodeFlags & e)
          for (var n = t.def.nodes, r = 0, o = 0; o < n.length; o++) {
            var i = n[o],
              s = i.parent;
            for (
              !s && i.flags & e && wl(t, o, i.flags & e, r++),
                0 == (i.childFlags & e) && (o += i.childCount);
              s && 1 & s.flags && o === s.nodeIndex + s.childCount;

            )
              s.directChildFlags & e && (r = _l(t, s, e, r)), (s = s.parent);
          }
      }
      function _l(t, e, n, r) {
        for (var o = e.nodeIndex + 1; o <= e.nodeIndex + e.childCount; o++) {
          var i = t.def.nodes[o];
          i.flags & n && wl(t, o, i.flags & n, r++), (o += i.childCount);
        }
        return r;
      }
      function wl(t, e, n, r) {
        var o = Is(t, e);
        if (o) {
          var i = o.instance;
          i &&
            (Ds.setCurrentNode(t, e),
            1048576 & n && ks(t, 512, r) && i.ngAfterContentInit(),
            2097152 & n && i.ngAfterContentChecked(),
            4194304 & n && ks(t, 768, r) && i.ngAfterViewInit(),
            8388608 & n && i.ngAfterViewChecked(),
            131072 & n && i.ngOnDestroy());
        }
      }
      function Cl(t, e, n) {
        var r = [];
        for (var o in n) r.push({ propName: o, bindingType: n[o] });
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: -1,
          flags: t,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          ngContentIndex: -1,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          childCount: 0,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: { id: e, filterId: ra(e), bindings: r },
          ngContent: null,
        };
      }
      function Sl(t) {
        for (var e = t.def.nodeMatchedQueries; t.parent && na(t); ) {
          var n = t.parentNodeDef;
          t = t.parent;
          for (var r = n.nodeIndex + n.childCount, o = 0; o <= r; o++)
            67108864 & (i = t.def.nodes[o]).flags &&
              536870912 & i.flags &&
              (i.query.filterId & e) === i.query.filterId &&
              Ns(t, o).setDirty(),
              (!(1 & i.flags && o + i.childCount < n.nodeIndex) &&
                67108864 & i.childFlags &&
                536870912 & i.childFlags) ||
                (o += i.childCount);
        }
        if (134217728 & t.def.nodeFlags)
          for (o = 0; o < t.def.nodes.length; o++) {
            var i;
            134217728 & (i = t.def.nodes[o]).flags &&
              536870912 & i.flags &&
              Ns(t, o).setDirty(),
              (o += i.childCount);
          }
      }
      function El(t, e) {
        var n = Ns(t, e.nodeIndex);
        if (n.dirty) {
          var r,
            o = void 0;
          if (67108864 & e.flags) {
            var i = e.parent.parent;
            (o = xl(t, i.nodeIndex, i.nodeIndex + i.childCount, e.query, [])),
              (r = Is(t, e.parent.nodeIndex).instance);
          } else
            134217728 & e.flags &&
              ((o = xl(t, 0, t.def.nodes.length - 1, e.query, [])),
              (r = t.component));
          n.reset(o);
          for (var s = e.query.bindings, a = !1, l = 0; l < s.length; l++) {
            var u = s[l],
              c = void 0;
            switch (u.bindingType) {
              case 0:
                c = n.first;
                break;
              case 1:
                (c = n), (a = !0);
            }
            r[u.propName] = c;
          }
          a && n.notifyOnChanges();
        }
      }
      function xl(t, e, n, r, o) {
        for (var i = e; i <= n; i++) {
          var s = t.def.nodes[i],
            a = s.matchedQueries[r.id];
          if (
            (null != a && o.push(Pl(t, s, a)),
            1 & s.flags &&
              s.element.template &&
              (s.element.template.nodeMatchedQueries & r.filterId) ===
                r.filterId)
          ) {
            var l = Rs(t, i);
            if (
              ((s.childMatchedQueries & r.filterId) === r.filterId &&
                (xl(t, i + 1, i + s.childCount, r, o), (i += s.childCount)),
              16777216 & s.flags)
            )
              for (
                var u = l.viewContainer._embeddedViews, c = 0;
                c < u.length;
                c++
              ) {
                var p = u[c],
                  h = $s(p);
                h && h === l && xl(p, 0, p.def.nodes.length - 1, r, o);
              }
            var f = l.template._projectedViews;
            if (f)
              for (c = 0; c < f.length; c++) {
                var d = f[c];
                xl(d, 0, d.def.nodes.length - 1, r, o);
              }
          }
          (s.childMatchedQueries & r.filterId) !== r.filterId &&
            (i += s.childCount);
        }
        return o;
      }
      function Pl(t, e, n) {
        if (null != n)
          switch (n) {
            case 1:
              return Rs(t, e.nodeIndex).renderElement;
            case 0:
              return new no(Rs(t, e.nodeIndex).renderElement);
            case 2:
              return Rs(t, e.nodeIndex).template;
            case 3:
              return Rs(t, e.nodeIndex).viewContainer;
            case 4:
              return Is(t, e.nodeIndex).instance;
          }
      }
      function Ol(t, e) {
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: -1,
          flags: 8,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: t,
          childCount: 0,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: null,
          ngContent: { index: e },
        };
      }
      function Tl(t, e, n) {
        var r = sa(t, e, n);
        r && pa(t, n.ngContent.index, 1, r, null, void 0);
      }
      function kl(t, e) {
        for (
          var n = Object.keys(e), r = n.length, o = new Array(r), i = 0;
          i < r;
          i++
        ) {
          var s = n[i];
          o[e[s]] = s;
        }
        return (function (t, e, n) {
          for (var r = new Array(n.length), o = 0; o < n.length; o++) {
            var i = n[o];
            r[o] = {
              flags: 8,
              name: i,
              ns: null,
              nonMinifiedName: i,
              securityContext: null,
              suffix: null,
            };
          }
          return {
            nodeIndex: -1,
            parent: null,
            renderParent: null,
            bindingIndex: -1,
            outputIndex: -1,
            checkIndex: e,
            flags: 64,
            childFlags: 0,
            directChildFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: {},
            matchedQueryIds: 0,
            references: {},
            ngContentIndex: -1,
            childCount: 0,
            bindings: r,
            bindingFlags: va(r),
            outputs: [],
            element: null,
            provider: null,
            text: null,
            query: null,
            ngContent: null,
          };
        })(0, t, o);
      }
      function Ml(t, e, n) {
        for (var r = new Array(n.length - 1), o = 1; o < n.length; o++)
          r[o - 1] = {
            flags: 8,
            name: null,
            ns: null,
            nonMinifiedName: null,
            securityContext: null,
            suffix: n[o],
          };
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: t,
          flags: 2,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: e,
          childCount: 0,
          bindings: r,
          bindingFlags: 8,
          outputs: [],
          element: null,
          provider: null,
          text: { prefix: n[0] },
          query: null,
          ngContent: null,
        };
      }
      function Rl(t, e, n) {
        var r,
          o = t.renderer;
        r = o.createText(n.text.prefix);
        var i = sa(t, e, n);
        return i && o.appendChild(i, r), { renderText: r };
      }
      function Il(t, e) {
        return (null != t ? t.toString() : "") + e.suffix;
      }
      function Al(t, e, n, r) {
        for (
          var o = 0,
            i = 0,
            s = 0,
            a = 0,
            l = 0,
            u = null,
            c = null,
            p = !1,
            h = !1,
            f = null,
            d = 0;
          d < e.length;
          d++
        ) {
          var g = e[d];
          if (
            ((g.nodeIndex = d),
            (g.parent = u),
            (g.bindingIndex = o),
            (g.outputIndex = i),
            (g.renderParent = c),
            (s |= g.flags),
            (l |= g.matchedQueryIds),
            g.element)
          ) {
            var v = g.element;
            (v.publicProviders = u
              ? u.element.publicProviders
              : Object.create(null)),
              (v.allProviders = v.publicProviders),
              (p = !1),
              (h = !1),
              g.element.template &&
                (l |= g.element.template.nodeMatchedQueries);
          }
          if (
            (Dl(u, g, e.length),
            (o += g.bindings.length),
            (i += g.outputs.length),
            !c && 3 & g.flags && (f = g),
            20224 & g.flags)
          ) {
            p ||
              ((p = !0),
              (u.element.publicProviders = Object.create(
                u.element.publicProviders
              )),
              (u.element.allProviders = u.element.publicProviders));
            var y = 0 != (32768 & g.flags);
            0 == (8192 & g.flags) || y
              ? (u.element.publicProviders[Us(g.provider.token)] = g)
              : (h ||
                  ((h = !0),
                  (u.element.allProviders = Object.create(
                    u.element.publicProviders
                  ))),
                (u.element.allProviders[Us(g.provider.token)] = g)),
              y && (u.element.componentProvider = g);
          }
          if (
            (u
              ? ((u.childFlags |= g.flags),
                (u.directChildFlags |= g.flags),
                (u.childMatchedQueries |= g.matchedQueryIds),
                g.element &&
                  g.element.template &&
                  (u.childMatchedQueries |=
                    g.element.template.nodeMatchedQueries))
              : (a |= g.flags),
            g.childCount > 0)
          )
            (u = g), Nl(g) || (c = g);
          else
            for (; u && d === u.nodeIndex + u.childCount; ) {
              var m = u.parent;
              m &&
                ((m.childFlags |= u.childFlags),
                (m.childMatchedQueries |= u.childMatchedQueries)),
                (c = (u = m) && Nl(u) ? u.renderParent : u);
            }
        }
        return {
          factory: null,
          nodeFlags: s,
          rootNodeFlags: a,
          nodeMatchedQueries: l,
          flags: t,
          nodes: e,
          updateDirectives: n || Hs,
          updateRenderer: r || Hs,
          handleEvent: function (t, n, r, o) {
            return e[n].element.handleEvent(t, r, o);
          },
          bindingCount: o,
          outputCount: i,
          lastRenderRootNode: f,
        };
      }
      function Nl(t) {
        return 0 != (1 & t.flags) && null === t.element.name;
      }
      function Dl(t, e, n) {
        var r = e.element && e.element.template;
        if (r) {
          if (!r.lastRenderRootNode)
            throw new Error(
              "Illegal State: Embedded templates without nodes are not allowed!"
            );
          if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags)
            throw new Error(
              "Illegal State: Last root node of a template can't have embedded views, at index " +
                e.nodeIndex +
                "!"
            );
        }
        if (20224 & e.flags && 0 == (1 & (t ? t.flags : 0)))
          throw new Error(
            "Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index " +
              e.nodeIndex +
              "!"
          );
        if (e.query) {
          if (67108864 & e.flags && (!t || 0 == (16384 & t.flags)))
            throw new Error(
              "Illegal State: Content Query nodes need to be children of directives, at index " +
                e.nodeIndex +
                "!"
            );
          if (134217728 & e.flags && t)
            throw new Error(
              "Illegal State: View Query nodes have to be top level nodes, at index " +
                e.nodeIndex +
                "!"
            );
        }
        if (e.childCount) {
          var o = t ? t.nodeIndex + t.childCount : n - 1;
          if (e.nodeIndex <= o && e.nodeIndex + e.childCount > o)
            throw new Error(
              "Illegal State: childCount of node leads outside of parent, at index " +
                e.nodeIndex +
                "!"
            );
        }
      }
      function jl(t, e, n, r) {
        var o = Hl(t.root, t.renderer, t, e, n);
        return Vl(o, t.component, r), Ul(o), o;
      }
      function Ll(t, e, n) {
        var r = Hl(t, t.renderer, null, null, e);
        return Vl(r, n, n), Ul(r), r;
      }
      function Fl(t, e, n, r) {
        var o,
          i = e.element.componentRendererType;
        return (
          (o = i
            ? t.root.rendererFactory.createRenderer(r, i)
            : t.root.renderer),
          Hl(t.root, o, t, e.element.componentProvider, n)
        );
      }
      function Hl(t, e, n, r, o) {
        var i = new Array(o.nodes.length),
          s = o.outputCount ? new Array(o.outputCount) : null;
        return {
          def: o,
          parent: n,
          viewContainerParent: null,
          parentNodeDef: r,
          context: null,
          component: null,
          nodes: i,
          state: 13,
          root: t,
          renderer: e,
          oldValues: new Array(o.bindingCount),
          disposables: s,
          initIndex: -1,
        };
      }
      function Vl(t, e, n) {
        (t.component = e), (t.context = n);
      }
      function Ul(t) {
        var e;
        ea(t) &&
          (e = Rs(t.parent, t.parentNodeDef.parent.nodeIndex).renderElement);
        for (var n = t.def, r = t.nodes, o = 0; o < n.nodes.length; o++) {
          var i = n.nodes[o];
          Ds.setCurrentNode(t, o);
          var s = void 0;
          switch (201347067 & i.flags) {
            case 1:
              var a = ba(t, e, i),
                l = void 0;
              if (33554432 & i.flags) {
                var u = la(i.element.componentView);
                l = Ds.createComponentView(t, i, u, a);
              }
              _a(t, l, i, a),
                (s = {
                  renderElement: a,
                  componentView: l,
                  viewContainer: null,
                  template: i.element.template ? za(t, i) : void 0,
                }),
                16777216 & i.flags && (s.viewContainer = Ha(t, i, s));
              break;
            case 2:
              s = Rl(t, e, i);
              break;
            case 512:
            case 1024:
            case 2048:
            case 256:
              (s = r[o]) || 4096 & i.flags || (s = { instance: ul(t, i) });
              break;
            case 16:
              s = { instance: cl(t, i) };
              break;
            case 16384:
              (s = r[o]) || (s = { instance: pl(t, i) }),
                32768 & i.flags &&
                  Vl(
                    Rs(t, i.parent.nodeIndex).componentView,
                    s.instance,
                    s.instance
                  );
              break;
            case 32:
            case 64:
            case 128:
              s = { value: void 0 };
              break;
            case 67108864:
            case 134217728:
              s = new Wi();
              break;
            case 8:
              Tl(t, e, i), (s = void 0);
          }
          r[o] = s;
        }
        Zl(t, Kl.CreateViewNodes), tu(t, 201326592, 268435456, 0);
      }
      function Bl(t) {
        Wl(t),
          Ds.updateDirectives(t, 1),
          Gl(t, Kl.CheckNoChanges),
          Ds.updateRenderer(t, 1),
          Zl(t, Kl.CheckNoChanges),
          (t.state &= -97);
      }
      function zl(t) {
        1 & t.state ? ((t.state &= -2), (t.state |= 2)) : (t.state &= -3),
          Ts(t, 0, 256),
          Wl(t),
          Ds.updateDirectives(t, 0),
          Gl(t, Kl.CheckAndUpdate),
          tu(t, 67108864, 536870912, 0);
        var e = Ts(t, 256, 512);
        bl(t, 2097152 | (e ? 1048576 : 0)),
          Ds.updateRenderer(t, 0),
          Zl(t, Kl.CheckAndUpdate),
          tu(t, 134217728, 536870912, 0),
          bl(t, 8388608 | ((e = Ts(t, 512, 768)) ? 4194304 : 0)),
          2 & t.def.flags && (t.state &= -9),
          (t.state &= -97),
          Ts(t, 768, 1024);
      }
      function ql(t, e, n, r, o, i, s, a, l, u, p, h, f) {
        return 0 === n
          ? (function (t, e, n, r, o, i, s, a, l, u, c, p) {
              switch (201347067 & e.flags) {
                case 1:
                  return (function (t, e, n, r, o, i, s, a, l, u, c, p) {
                    var h = e.bindings.length,
                      f = !1;
                    return (
                      h > 0 && Ca(t, e, 0, n) && (f = !0),
                      h > 1 && Ca(t, e, 1, r) && (f = !0),
                      h > 2 && Ca(t, e, 2, o) && (f = !0),
                      h > 3 && Ca(t, e, 3, i) && (f = !0),
                      h > 4 && Ca(t, e, 4, s) && (f = !0),
                      h > 5 && Ca(t, e, 5, a) && (f = !0),
                      h > 6 && Ca(t, e, 6, l) && (f = !0),
                      h > 7 && Ca(t, e, 7, u) && (f = !0),
                      h > 8 && Ca(t, e, 8, c) && (f = !0),
                      h > 9 && Ca(t, e, 9, p) && (f = !0),
                      f
                    );
                  })(t, e, n, r, o, i, s, a, l, u, c, p);
                case 2:
                  return (function (t, e, n, r, o, i, s, a, l, u, c, p) {
                    var h = !1,
                      f = e.bindings,
                      d = f.length;
                    if (
                      (d > 0 && Xs(t, e, 0, n) && (h = !0),
                      d > 1 && Xs(t, e, 1, r) && (h = !0),
                      d > 2 && Xs(t, e, 2, o) && (h = !0),
                      d > 3 && Xs(t, e, 3, i) && (h = !0),
                      d > 4 && Xs(t, e, 4, s) && (h = !0),
                      d > 5 && Xs(t, e, 5, a) && (h = !0),
                      d > 6 && Xs(t, e, 6, l) && (h = !0),
                      d > 7 && Xs(t, e, 7, u) && (h = !0),
                      d > 8 && Xs(t, e, 8, c) && (h = !0),
                      d > 9 && Xs(t, e, 9, p) && (h = !0),
                      h)
                    ) {
                      var g = e.text.prefix;
                      d > 0 && (g += Il(n, f[0])),
                        d > 1 && (g += Il(r, f[1])),
                        d > 2 && (g += Il(o, f[2])),
                        d > 3 && (g += Il(i, f[3])),
                        d > 4 && (g += Il(s, f[4])),
                        d > 5 && (g += Il(a, f[5])),
                        d > 6 && (g += Il(l, f[6])),
                        d > 7 && (g += Il(u, f[7])),
                        d > 8 && (g += Il(c, f[8])),
                        d > 9 && (g += Il(p, f[9]));
                      var v = Ms(t, e.nodeIndex).renderText;
                      t.renderer.setValue(v, g);
                    }
                    return h;
                  })(t, e, n, r, o, i, s, a, l, u, c, p);
                case 16384:
                  return (function (t, e, n, r, o, i, s, a, l, u, c, p) {
                    var h = Is(t, e.nodeIndex),
                      f = h.instance,
                      d = !1,
                      g = void 0,
                      v = e.bindings.length;
                    return (
                      v > 0 &&
                        Ys(t, e, 0, n) &&
                        ((d = !0), (g = ml(t, h, e, 0, n, g))),
                      v > 1 &&
                        Ys(t, e, 1, r) &&
                        ((d = !0), (g = ml(t, h, e, 1, r, g))),
                      v > 2 &&
                        Ys(t, e, 2, o) &&
                        ((d = !0), (g = ml(t, h, e, 2, o, g))),
                      v > 3 &&
                        Ys(t, e, 3, i) &&
                        ((d = !0), (g = ml(t, h, e, 3, i, g))),
                      v > 4 &&
                        Ys(t, e, 4, s) &&
                        ((d = !0), (g = ml(t, h, e, 4, s, g))),
                      v > 5 &&
                        Ys(t, e, 5, a) &&
                        ((d = !0), (g = ml(t, h, e, 5, a, g))),
                      v > 6 &&
                        Ys(t, e, 6, l) &&
                        ((d = !0), (g = ml(t, h, e, 6, l, g))),
                      v > 7 &&
                        Ys(t, e, 7, u) &&
                        ((d = !0), (g = ml(t, h, e, 7, u, g))),
                      v > 8 &&
                        Ys(t, e, 8, c) &&
                        ((d = !0), (g = ml(t, h, e, 8, c, g))),
                      v > 9 &&
                        Ys(t, e, 9, p) &&
                        ((d = !0), (g = ml(t, h, e, 9, p, g))),
                      g && f.ngOnChanges(g),
                      65536 & e.flags &&
                        ks(t, 256, e.nodeIndex) &&
                        f.ngOnInit(),
                      262144 & e.flags && f.ngDoCheck(),
                      d
                    );
                  })(t, e, n, r, o, i, s, a, l, u, c, p);
                case 32:
                case 64:
                case 128:
                  return (function (t, e, n, r, o, i, s, a, l, u, c, p) {
                    var h = e.bindings,
                      f = !1,
                      d = h.length;
                    if (
                      (d > 0 && Xs(t, e, 0, n) && (f = !0),
                      d > 1 && Xs(t, e, 1, r) && (f = !0),
                      d > 2 && Xs(t, e, 2, o) && (f = !0),
                      d > 3 && Xs(t, e, 3, i) && (f = !0),
                      d > 4 && Xs(t, e, 4, s) && (f = !0),
                      d > 5 && Xs(t, e, 5, a) && (f = !0),
                      d > 6 && Xs(t, e, 6, l) && (f = !0),
                      d > 7 && Xs(t, e, 7, u) && (f = !0),
                      d > 8 && Xs(t, e, 8, c) && (f = !0),
                      d > 9 && Xs(t, e, 9, p) && (f = !0),
                      f)
                    ) {
                      var g = As(t, e.nodeIndex),
                        v = void 0;
                      switch (201347067 & e.flags) {
                        case 32:
                          (v = new Array(h.length)),
                            d > 0 && (v[0] = n),
                            d > 1 && (v[1] = r),
                            d > 2 && (v[2] = o),
                            d > 3 && (v[3] = i),
                            d > 4 && (v[4] = s),
                            d > 5 && (v[5] = a),
                            d > 6 && (v[6] = l),
                            d > 7 && (v[7] = u),
                            d > 8 && (v[8] = c),
                            d > 9 && (v[9] = p);
                          break;
                        case 64:
                          (v = {}),
                            d > 0 && (v[h[0].name] = n),
                            d > 1 && (v[h[1].name] = r),
                            d > 2 && (v[h[2].name] = o),
                            d > 3 && (v[h[3].name] = i),
                            d > 4 && (v[h[4].name] = s),
                            d > 5 && (v[h[5].name] = a),
                            d > 6 && (v[h[6].name] = l),
                            d > 7 && (v[h[7].name] = u),
                            d > 8 && (v[h[8].name] = c),
                            d > 9 && (v[h[9].name] = p);
                          break;
                        case 128:
                          var y = n;
                          switch (d) {
                            case 1:
                              v = y.transform(n);
                              break;
                            case 2:
                              v = y.transform(r);
                              break;
                            case 3:
                              v = y.transform(r, o);
                              break;
                            case 4:
                              v = y.transform(r, o, i);
                              break;
                            case 5:
                              v = y.transform(r, o, i, s);
                              break;
                            case 6:
                              v = y.transform(r, o, i, s, a);
                              break;
                            case 7:
                              v = y.transform(r, o, i, s, a, l);
                              break;
                            case 8:
                              v = y.transform(r, o, i, s, a, l, u);
                              break;
                            case 9:
                              v = y.transform(r, o, i, s, a, l, u, c);
                              break;
                            case 10:
                              v = y.transform(r, o, i, s, a, l, u, c, p);
                          }
                      }
                      g.value = v;
                    }
                    return f;
                  })(t, e, n, r, o, i, s, a, l, u, c, p);
                default:
                  throw "unreachable";
              }
            })(t, e, r, o, i, s, a, l, u, p, h, f)
          : (function (t, e, n) {
              switch (201347067 & e.flags) {
                case 1:
                  return (function (t, e, n) {
                    for (var r = !1, o = 0; o < n.length; o++)
                      Ca(t, e, o, n[o]) && (r = !0);
                    return r;
                  })(t, e, n);
                case 2:
                  return (function (t, e, n) {
                    for (var r = e.bindings, o = !1, i = 0; i < n.length; i++)
                      Xs(t, e, i, n[i]) && (o = !0);
                    if (o) {
                      var s = "";
                      for (i = 0; i < n.length; i++) s += Il(n[i], r[i]);
                      s = e.text.prefix + s;
                      var a = Ms(t, e.nodeIndex).renderText;
                      t.renderer.setValue(a, s);
                    }
                    return o;
                  })(t, e, n);
                case 16384:
                  return (function (t, e, n) {
                    for (
                      var r = Is(t, e.nodeIndex),
                        o = r.instance,
                        i = !1,
                        s = void 0,
                        a = 0;
                      a < n.length;
                      a++
                    )
                      Ys(t, e, a, n[a]) &&
                        ((i = !0), (s = ml(t, r, e, a, n[a], s)));
                    return (
                      s && o.ngOnChanges(s),
                      65536 & e.flags &&
                        ks(t, 256, e.nodeIndex) &&
                        o.ngOnInit(),
                      262144 & e.flags && o.ngDoCheck(),
                      i
                    );
                  })(t, e, n);
                case 32:
                case 64:
                case 128:
                  return (function (t, e, n) {
                    for (var r = e.bindings, o = !1, i = 0; i < n.length; i++)
                      Xs(t, e, i, n[i]) && (o = !0);
                    if (o) {
                      var s = As(t, e.nodeIndex),
                        a = void 0;
                      switch (201347067 & e.flags) {
                        case 32:
                          a = n;
                          break;
                        case 64:
                          for (a = {}, i = 0; i < n.length; i++)
                            a[r[i].name] = n[i];
                          break;
                        case 128:
                          var l = n[0],
                            u = n.slice(1);
                          a = l.transform.apply(l, c(u));
                      }
                      s.value = a;
                    }
                    return o;
                  })(t, e, n);
                default:
                  throw "unreachable";
              }
            })(t, e, r);
      }
      function Wl(t) {
        var e = t.def;
        if (4 & e.nodeFlags)
          for (var n = 0; n < e.nodes.length; n++) {
            var r = e.nodes[n];
            if (4 & r.flags) {
              var o = Rs(t, n).template._projectedViews;
              if (o)
                for (var i = 0; i < o.length; i++) {
                  var s = o[i];
                  (s.state |= 32), Zs(s, t);
                }
            } else 0 == (4 & r.childFlags) && (n += r.childCount);
          }
      }
      function Yl(t, e, n, r, o, i, s, a, l, u, c, p, h) {
        return (
          0 === n
            ? (function (t, e, n, r, o, i, s, a, l, u, c, p) {
                var h = e.bindings.length;
                h > 0 && Qs(t, e, 0, n),
                  h > 1 && Qs(t, e, 1, r),
                  h > 2 && Qs(t, e, 2, o),
                  h > 3 && Qs(t, e, 3, i),
                  h > 4 && Qs(t, e, 4, s),
                  h > 5 && Qs(t, e, 5, a),
                  h > 6 && Qs(t, e, 6, l),
                  h > 7 && Qs(t, e, 7, u),
                  h > 8 && Qs(t, e, 8, c),
                  h > 9 && Qs(t, e, 9, p);
              })(t, e, r, o, i, s, a, l, u, c, p, h)
            : (function (t, e, n) {
                for (var r = 0; r < n.length; r++) Qs(t, e, r, n[r]);
              })(t, e, r),
          !1
        );
      }
      function Xl(t, e) {
        if (Ns(t, e.nodeIndex).dirty)
          throw js(
            Ds.createDebugContext(t, e.nodeIndex),
            "Query " + e.query.id + " not dirty",
            "Query " + e.query.id + " dirty",
            0 != (1 & t.state)
          );
      }
      function Ql(t) {
        if (!(128 & t.state)) {
          if (
            (Gl(t, Kl.Destroy), Zl(t, Kl.Destroy), bl(t, 131072), t.disposables)
          )
            for (var e = 0; e < t.disposables.length; e++) t.disposables[e]();
          !(function (t) {
            if (16 & t.state) {
              var e = $s(t);
              if (e) {
                var n = e.template._projectedViews;
                n && (Na(n, n.indexOf(t)), Ds.dirtyParentQueries(t));
              }
            }
          })(t),
            t.renderer.destroyNode &&
              (function (t) {
                for (var e = t.def.nodes.length, n = 0; n < e; n++) {
                  var r = t.def.nodes[n];
                  1 & r.flags
                    ? t.renderer.destroyNode(Rs(t, n).renderElement)
                    : 2 & r.flags
                    ? t.renderer.destroyNode(Ms(t, n).renderText)
                    : (67108864 & r.flags || 134217728 & r.flags) &&
                      Ns(t, n).destroy();
                }
              })(t),
            ea(t) && t.renderer.destroy(),
            (t.state |= 128);
        }
      }
      var Kl = (function (t) {
        return (
          (t[(t.CreateViewNodes = 0)] = "CreateViewNodes"),
          (t[(t.CheckNoChanges = 1)] = "CheckNoChanges"),
          (t[(t.CheckNoChangesProjectedViews = 2)] =
            "CheckNoChangesProjectedViews"),
          (t[(t.CheckAndUpdate = 3)] = "CheckAndUpdate"),
          (t[(t.CheckAndUpdateProjectedViews = 4)] =
            "CheckAndUpdateProjectedViews"),
          (t[(t.Destroy = 5)] = "Destroy"),
          t
        );
      })({});
      function Zl(t, e) {
        var n = t.def;
        if (33554432 & n.nodeFlags)
          for (var r = 0; r < n.nodes.length; r++) {
            var o = n.nodes[r];
            33554432 & o.flags
              ? $l(Rs(t, r).componentView, e)
              : 0 == (33554432 & o.childFlags) && (r += o.childCount);
          }
      }
      function Gl(t, e) {
        var n = t.def;
        if (16777216 & n.nodeFlags)
          for (var r = 0; r < n.nodes.length; r++) {
            var o = n.nodes[r];
            if (16777216 & o.flags)
              for (
                var i = Rs(t, r).viewContainer._embeddedViews, s = 0;
                s < i.length;
                s++
              )
                $l(i[s], e);
            else 0 == (16777216 & o.childFlags) && (r += o.childCount);
          }
      }
      function $l(t, e) {
        var n = t.state;
        switch (e) {
          case Kl.CheckNoChanges:
            0 == (128 & n) &&
              (12 == (12 & n)
                ? Bl(t)
                : 64 & n && Jl(t, Kl.CheckNoChangesProjectedViews));
            break;
          case Kl.CheckNoChangesProjectedViews:
            0 == (128 & n) && (32 & n ? Bl(t) : 64 & n && Jl(t, e));
            break;
          case Kl.CheckAndUpdate:
            0 == (128 & n) &&
              (12 == (12 & n)
                ? zl(t)
                : 64 & n && Jl(t, Kl.CheckAndUpdateProjectedViews));
            break;
          case Kl.CheckAndUpdateProjectedViews:
            0 == (128 & n) && (32 & n ? zl(t) : 64 & n && Jl(t, e));
            break;
          case Kl.Destroy:
            Ql(t);
            break;
          case Kl.CreateViewNodes:
            Ul(t);
        }
      }
      function Jl(t, e) {
        Gl(t, e), Zl(t, e);
      }
      function tu(t, e, n, r) {
        if (t.def.nodeFlags & e && t.def.nodeFlags & n)
          for (var o = t.def.nodes.length, i = 0; i < o; i++) {
            var s = t.def.nodes[i];
            if (s.flags & e && s.flags & n)
              switch ((Ds.setCurrentNode(t, s.nodeIndex), r)) {
                case 0:
                  El(t, s);
                  break;
                case 1:
                  Xl(t, s);
              }
            (s.childFlags & e && s.childFlags & n) || (i += s.childCount);
          }
      }
      var eu = !1;
      function nu(t, e, n, r, o, i) {
        var s = o.injector.get(io);
        return Ll(ou(t, o, s, e, n), r, i);
      }
      function ru(t, e, n, r, o, i) {
        var s = o.injector.get(io),
          a = ou(t, o, new Fu(s), e, n),
          l = du(r);
        return ju(Su.create, Ll, null, [a, l, i]);
      }
      function ou(t, e, n, r, o) {
        var i = e.injector.get(Qo),
          s = e.injector.get(ri),
          a = n.createRenderer(null, null);
        return {
          ngModule: e,
          injector: t,
          projectableNodes: r,
          selectorOrNode: o,
          sanitizer: i,
          rendererFactory: n,
          renderer: a,
          errorHandler: s,
        };
      }
      function iu(t, e, n, r) {
        var o = du(n);
        return ju(Su.create, jl, null, [t, e, o, r]);
      }
      function su(t, e, n, r) {
        return (
          (n = cu.get(e.element.componentProvider.provider.token) || du(n)),
          ju(Su.create, Fl, null, [t, e, n, r])
        );
      }
      function au(t, e, n, r) {
        return Za(
          t,
          e,
          n,
          (function (t) {
            var e = (function (t) {
                var e = !1,
                  n = !1;
                return 0 === lu.size
                  ? { hasOverrides: e, hasDeprecatedOverrides: n }
                  : (t.providers.forEach(function (t) {
                      var r = lu.get(t.token);
                      3840 & t.flags &&
                        r &&
                        ((e = !0), (n = n || r.deprecatedBehavior));
                    }),
                    t.modules.forEach(function (t) {
                      uu.forEach(function (r, o) {
                        xt(o).providedIn === t &&
                          ((e = !0), (n = n || r.deprecatedBehavior));
                      });
                    }),
                    { hasOverrides: e, hasDeprecatedOverrides: n });
              })(t),
              n = e.hasDeprecatedOverrides;
            return e.hasOverrides
              ? ((function (t) {
                  for (var e = 0; e < t.providers.length; e++) {
                    var r = t.providers[e];
                    n && (r.flags |= 4096);
                    var o = lu.get(r.token);
                    o &&
                      ((r.flags = (-3841 & r.flags) | o.flags),
                      (r.deps = ia(o.deps)),
                      (r.value = o.value));
                  }
                  if (uu.size > 0) {
                    var i = new Set(t.modules);
                    uu.forEach(function (e, r) {
                      if (i.has(xt(r).providedIn)) {
                        var o = {
                          token: r,
                          flags: e.flags | (n ? 4096 : 0),
                          deps: ia(e.deps),
                          value: e.value,
                          index: t.providers.length,
                        };
                        t.providers.push(o), (t.providersByKey[Us(r)] = o);
                      }
                    });
                  }
                })(
                  (t = t.factory(function () {
                    return Hs;
                  }))
                ),
                t)
              : t;
          })(r)
        );
      }
      var lu = new Map(),
        uu = new Map(),
        cu = new Map();
      function pu(t) {
        var e;
        lu.set(t.token, t),
          "function" == typeof t.token &&
            (e = xt(t.token)) &&
            "function" == typeof e.providedIn &&
            uu.set(t.token, t);
      }
      function hu(t, e) {
        var n = la(e.viewDefFactory),
          r = la(n.nodes[0].element.componentView);
        cu.set(t, r);
      }
      function fu() {
        lu.clear(), uu.clear(), cu.clear();
      }
      function du(t) {
        if (0 === lu.size) return t;
        var e = (function (t) {
          for (var e = [], n = null, r = 0; r < t.nodes.length; r++) {
            var o = t.nodes[r];
            1 & o.flags && (n = o),
              n &&
                3840 & o.flags &&
                lu.has(o.provider.token) &&
                (e.push(n.nodeIndex), (n = null));
          }
          return e;
        })(t);
        if (0 === e.length) return t;
        t = t.factory(function () {
          return Hs;
        });
        for (var n = 0; n < e.length; n++) r(t, e[n]);
        return t;
        function r(t, e) {
          for (var n = e + 1; n < t.nodes.length; n++) {
            var r = t.nodes[n];
            if (1 & r.flags) return;
            if (3840 & r.flags) {
              var o = r.provider,
                i = lu.get(o.token);
              i &&
                ((r.flags = (-3841 & r.flags) | i.flags),
                (o.deps = ia(i.deps)),
                (o.value = i.value));
            }
          }
        }
      }
      function gu(t, e, n, r, o, i, s, a, l, u, c, p, h) {
        var f = t.def.nodes[e];
        return (
          ql(t, f, n, r, o, i, s, a, l, u, c, p, h),
          224 & f.flags ? As(t, e).value : void 0
        );
      }
      function vu(t, e, n, r, o, i, s, a, l, u, c, p, h) {
        var f = t.def.nodes[e];
        return (
          Yl(t, f, n, r, o, i, s, a, l, u, c, p, h),
          224 & f.flags ? As(t, e).value : void 0
        );
      }
      function yu(t) {
        return ju(Su.detectChanges, zl, null, [t]);
      }
      function mu(t) {
        return ju(Su.checkNoChanges, Bl, null, [t]);
      }
      function bu(t) {
        return ju(Su.destroy, Ql, null, [t]);
      }
      var _u,
        wu,
        Cu,
        Su = (function (t) {
          return (
            (t[(t.create = 0)] = "create"),
            (t[(t.detectChanges = 1)] = "detectChanges"),
            (t[(t.checkNoChanges = 2)] = "checkNoChanges"),
            (t[(t.destroy = 3)] = "destroy"),
            (t[(t.handleEvent = 4)] = "handleEvent"),
            t
          );
        })({});
      function Eu(t, e) {
        (wu = t), (Cu = e);
      }
      function xu(t, e, n, r) {
        return (
          Eu(t, e), ju(Su.handleEvent, t.def.handleEvent, null, [t, e, n, r])
        );
      }
      function Pu(t, e) {
        if (128 & t.state) throw Fs(Su[_u]);
        return (
          Eu(t, Iu(t, 0)),
          t.def.updateDirectives(function (t, n, r) {
            for (var o = [], i = 3; i < arguments.length; i++)
              o[i - 3] = arguments[i];
            var s = t.def.nodes[n];
            return (
              0 === e ? Tu(t, s, r, o) : ku(t, s, r, o),
              16384 & s.flags && Eu(t, Iu(t, n)),
              224 & s.flags ? As(t, s.nodeIndex).value : void 0
            );
          }, t)
        );
      }
      function Ou(t, e) {
        if (128 & t.state) throw Fs(Su[_u]);
        return (
          Eu(t, Au(t, 0)),
          t.def.updateRenderer(function (t, n, r) {
            for (var o = [], i = 3; i < arguments.length; i++)
              o[i - 3] = arguments[i];
            var s = t.def.nodes[n];
            return (
              0 === e ? Tu(t, s, r, o) : ku(t, s, r, o),
              3 & s.flags && Eu(t, Au(t, n)),
              224 & s.flags ? As(t, s.nodeIndex).value : void 0
            );
          }, t)
        );
      }
      function Tu(t, e, n, r) {
        if (ql.apply(void 0, c([t, e, n], r))) {
          var o = 1 === n ? r[0] : r;
          if (16384 & e.flags) {
            for (var i = {}, s = 0; s < e.bindings.length; s++) {
              var a = e.bindings[s],
                l = o[s];
              8 & a.flags &&
                (i[
                  ((f = a.nonMinifiedName),
                  (d = void 0),
                  (d = f.replace(/[$@]/g, "_")),
                  "ng-reflect-" +
                    (f = d.replace(Mu, function () {
                      for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                      return "-" + t[1].toLowerCase();
                    })))
                ] = Ru(l));
            }
            var u = e.parent,
              p = Rs(t, u.nodeIndex).renderElement;
            if (u.element.name)
              for (var h in i)
                null != (l = i[h])
                  ? t.renderer.setAttribute(p, h, l)
                  : t.renderer.removeAttribute(p, h);
            else
              t.renderer.setValue(p, "bindings=" + JSON.stringify(i, null, 2));
          }
        }
        var f, d;
      }
      function ku(t, e, n, r) {
        Yl.apply(void 0, c([t, e, n], r));
      }
      var Mu = /([A-Z])/g;
      function Ru(t) {
        try {
          return null != t ? t.toString().slice(0, 30) : t;
        } catch (e) {
          return "[ERROR] Exception while trying to serialize the value";
        }
      }
      function Iu(t, e) {
        for (var n = e; n < t.def.nodes.length; n++) {
          var r = t.def.nodes[n];
          if (16384 & r.flags && r.bindings && r.bindings.length) return n;
        }
        return null;
      }
      function Au(t, e) {
        for (var n = e; n < t.def.nodes.length; n++) {
          var r = t.def.nodes[n];
          if (3 & r.flags && r.bindings && r.bindings.length) return n;
        }
        return null;
      }
      var Nu = (function () {
        function t(t, e) {
          (this.view = t),
            (this.nodeIndex = e),
            null == e && (this.nodeIndex = e = 0),
            (this.nodeDef = t.def.nodes[e]);
          for (var n = this.nodeDef, r = t; n && 0 == (1 & n.flags); )
            n = n.parent;
          if (!n) for (; !n && r; ) (n = Js(r)), (r = r.parent);
          (this.elDef = n), (this.elView = r);
        }
        return (
          Object.defineProperty(t.prototype, "elOrCompView", {
            get: function () {
              return (
                Rs(this.elView, this.elDef.nodeIndex).componentView || this.view
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "injector", {
            get: function () {
              return Wa(this.elView, this.elDef);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "component", {
            get: function () {
              return this.elOrCompView.component;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "context", {
            get: function () {
              return this.elOrCompView.context;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "providerTokens", {
            get: function () {
              var t = [];
              if (this.elDef)
                for (
                  var e = this.elDef.nodeIndex + 1;
                  e <= this.elDef.nodeIndex + this.elDef.childCount;
                  e++
                ) {
                  var n = this.elView.def.nodes[e];
                  20224 & n.flags && t.push(n.provider.token),
                    (e += n.childCount);
                }
              return t;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "references", {
            get: function () {
              var t = {};
              if (this.elDef) {
                Du(this.elView, this.elDef, t);
                for (
                  var e = this.elDef.nodeIndex + 1;
                  e <= this.elDef.nodeIndex + this.elDef.childCount;
                  e++
                ) {
                  var n = this.elView.def.nodes[e];
                  20224 & n.flags && Du(this.elView, n, t), (e += n.childCount);
                }
              }
              return t;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "componentRenderElement", {
            get: function () {
              var t = (function (t) {
                for (; t && !ea(t); ) t = t.parent;
                return t.parent ? Rs(t.parent, Js(t).nodeIndex) : null;
              })(this.elOrCompView);
              return t ? t.renderElement : void 0;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "renderNode", {
            get: function () {
              return 2 & this.nodeDef.flags
                ? ta(this.view, this.nodeDef)
                : ta(this.elView, this.elDef);
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.logError = function (t) {
            for (var e, n, r = [], o = 1; o < arguments.length; o++)
              r[o - 1] = arguments[o];
            2 & this.nodeDef.flags
              ? ((e = this.view.def), (n = this.nodeDef.nodeIndex))
              : ((e = this.elView.def), (n = this.elDef.nodeIndex));
            var i = (function (t, e) {
                for (var n = -1, r = 0; r <= e; r++)
                  3 & t.nodes[r].flags && n++;
                return n;
              })(e, n),
              s = -1;
            e.factory(function () {
              var e;
              return ++s === i ? (e = t.error).bind.apply(e, c([t], r)) : Hs;
            }),
              s < i &&
                (t.error(
                  "Illegal state: the ViewDefinitionFactory did not call the logger!"
                ),
                t.error.apply(t, c(r)));
          }),
          t
        );
      })();
      function Du(t, e, n) {
        for (var r in e.references) n[r] = Pl(t, e, e.references[r]);
      }
      function ju(t, e, n, r) {
        var o = _u,
          i = wu,
          s = Cu;
        try {
          _u = t;
          var a = e.apply(n, r);
          return (wu = i), (Cu = s), (_u = o), a;
        } catch (l) {
          if (ti(l) || !wu) throw l;
          throw (function (t, e) {
            return (
              t instanceof Error || (t = new Error(t.toString())), Ls(t, e), t
            );
          })(l, Lu());
        }
      }
      function Lu() {
        return wu ? new Nu(wu, Cu) : null;
      }
      var Fu = (function () {
          function t(t) {
            this.delegate = t;
          }
          return (
            (t.prototype.createRenderer = function (t, e) {
              return new Hu(this.delegate.createRenderer(t, e));
            }),
            (t.prototype.begin = function () {
              this.delegate.begin && this.delegate.begin();
            }),
            (t.prototype.end = function () {
              this.delegate.end && this.delegate.end();
            }),
            (t.prototype.whenRenderingDone = function () {
              return this.delegate.whenRenderingDone
                ? this.delegate.whenRenderingDone()
                : Promise.resolve(null);
            }),
            t
          );
        })(),
        Hu = (function () {
          function t(t) {
            (this.delegate = t),
              (this.debugContextFactory = Lu),
              (this.data = this.delegate.data);
          }
          return (
            (t.prototype.createDebugContext = function (t) {
              return this.debugContextFactory(t);
            }),
            (t.prototype.destroyNode = function (t) {
              !(function (t) {
                os.delete(t.nativeNode);
              })(is(t)),
                this.delegate.destroyNode && this.delegate.destroyNode(t);
            }),
            (t.prototype.destroy = function () {
              this.delegate.destroy();
            }),
            (t.prototype.createElement = function (t, e) {
              var n = this.delegate.createElement(t, e),
                r = this.createDebugContext(n);
              if (r) {
                var o = new rs(n, null, r);
                (o.name = t), ss(o);
              }
              return n;
            }),
            (t.prototype.createComment = function (t) {
              var e = this.delegate.createComment(t),
                n = this.createDebugContext(e);
              return n && ss(new ns(e, null, n)), e;
            }),
            (t.prototype.createText = function (t) {
              var e = this.delegate.createText(t),
                n = this.createDebugContext(e);
              return n && ss(new ns(e, null, n)), e;
            }),
            (t.prototype.appendChild = function (t, e) {
              var n = is(t),
                r = is(e);
              n && r && n instanceof rs && n.addChild(r),
                this.delegate.appendChild(t, e);
            }),
            (t.prototype.insertBefore = function (t, e, n) {
              var r = is(t),
                o = is(e),
                i = is(n);
              r && o && r instanceof rs && r.insertBefore(i, o),
                this.delegate.insertBefore(t, e, n);
            }),
            (t.prototype.removeChild = function (t, e) {
              var n = is(t),
                r = is(e);
              n && r && n instanceof rs && n.removeChild(r),
                this.delegate.removeChild(t, e);
            }),
            (t.prototype.selectRootElement = function (t, e) {
              var n = this.delegate.selectRootElement(t, e),
                r = Lu() || null;
              return r && ss(new rs(n, null, r)), n;
            }),
            (t.prototype.setAttribute = function (t, e, n, r) {
              var o = is(t);
              o && o instanceof rs && (o.attributes[r ? r + ":" + e : e] = n),
                this.delegate.setAttribute(t, e, n, r);
            }),
            (t.prototype.removeAttribute = function (t, e, n) {
              var r = is(t);
              r &&
                r instanceof rs &&
                (r.attributes[n ? n + ":" + e : e] = null),
                this.delegate.removeAttribute(t, e, n);
            }),
            (t.prototype.addClass = function (t, e) {
              var n = is(t);
              n && n instanceof rs && (n.classes[e] = !0),
                this.delegate.addClass(t, e);
            }),
            (t.prototype.removeClass = function (t, e) {
              var n = is(t);
              n && n instanceof rs && (n.classes[e] = !1),
                this.delegate.removeClass(t, e);
            }),
            (t.prototype.setStyle = function (t, e, n, r) {
              var o = is(t);
              o && o instanceof rs && (o.styles[e] = n),
                this.delegate.setStyle(t, e, n, r);
            }),
            (t.prototype.removeStyle = function (t, e, n) {
              var r = is(t);
              r && r instanceof rs && (r.styles[e] = null),
                this.delegate.removeStyle(t, e, n);
            }),
            (t.prototype.setProperty = function (t, e, n) {
              var r = is(t);
              r && r instanceof rs && (r.properties[e] = n),
                this.delegate.setProperty(t, e, n);
            }),
            (t.prototype.listen = function (t, e, n) {
              if ("string" != typeof t) {
                var r = is(t);
                r && r.listeners.push(new es(e, n));
              }
              return this.delegate.listen(t, e, n);
            }),
            (t.prototype.parentNode = function (t) {
              return this.delegate.parentNode(t);
            }),
            (t.prototype.nextSibling = function (t) {
              return this.delegate.nextSibling(t);
            }),
            (t.prototype.setValue = function (t, e) {
              return this.delegate.setValue(t, e);
            }),
            t
          );
        })();
      function Vu(t, e, n) {
        return new Uu(t, e, n);
      }
      var Uu = (function (t) {
          function e(e, n, r) {
            var o = t.call(this) || this;
            return (
              (o.moduleType = e),
              (o._bootstrapComponents = n),
              (o._ngModuleDefFactory = r),
              o
            );
          }
          return (
            o(e, t),
            (e.prototype.create = function (t) {
              !(function () {
                if (!eu) {
                  eu = !0;
                  var t = wo()
                    ? {
                        setCurrentNode: Eu,
                        createRootView: ru,
                        createEmbeddedView: iu,
                        createComponentView: su,
                        createNgModuleRef: au,
                        overrideProvider: pu,
                        overrideComponentView: hu,
                        clearOverrides: fu,
                        checkAndUpdateView: yu,
                        checkNoChangesView: mu,
                        destroyView: bu,
                        createDebugContext: function (t, e) {
                          return new Nu(t, e);
                        },
                        handleEvent: xu,
                        updateDirectives: Pu,
                        updateRenderer: Ou,
                      }
                    : {
                        setCurrentNode: function () {},
                        createRootView: nu,
                        createEmbeddedView: jl,
                        createComponentView: Fl,
                        createNgModuleRef: Za,
                        overrideProvider: Hs,
                        overrideComponentView: Hs,
                        clearOverrides: Hs,
                        checkAndUpdateView: zl,
                        checkNoChangesView: Bl,
                        destroyView: Ql,
                        createDebugContext: function (t, e) {
                          return new Nu(t, e);
                        },
                        handleEvent: function (t, e, n, r) {
                          return t.def.handleEvent(t, e, n, r);
                        },
                        updateDirectives: function (t, e) {
                          return t.def.updateDirectives(0 === e ? gu : vu, t);
                        },
                        updateRenderer: function (t, e) {
                          return t.def.updateRenderer(0 === e ? gu : vu, t);
                        },
                      };
                  (Ds.setCurrentNode = t.setCurrentNode),
                    (Ds.createRootView = t.createRootView),
                    (Ds.createEmbeddedView = t.createEmbeddedView),
                    (Ds.createComponentView = t.createComponentView),
                    (Ds.createNgModuleRef = t.createNgModuleRef),
                    (Ds.overrideProvider = t.overrideProvider),
                    (Ds.overrideComponentView = t.overrideComponentView),
                    (Ds.clearOverrides = t.clearOverrides),
                    (Ds.checkAndUpdateView = t.checkAndUpdateView),
                    (Ds.checkNoChangesView = t.checkNoChangesView),
                    (Ds.destroyView = t.destroyView),
                    (Ds.resolveDep = vl),
                    (Ds.createDebugContext = t.createDebugContext),
                    (Ds.handleEvent = t.handleEvent),
                    (Ds.updateDirectives = t.updateDirectives),
                    (Ds.updateRenderer = t.updateRenderer),
                    (Ds.dirtyParentQueries = Sl);
                }
              })();
              var e = (function (t) {
                var e = Array.from(t.providers),
                  n = Array.from(t.modules),
                  r = {};
                for (var o in t.providersByKey) r[o] = t.providersByKey[o];
                return {
                  factory: t.factory,
                  isRoot: t.isRoot,
                  providers: e,
                  modules: n,
                  providersByKey: r,
                };
              })(la(this._ngModuleDefFactory));
              return Ds.createNgModuleRef(
                this.moduleType,
                t || Vn.NULL,
                this._bootstrapComponents,
                e
              );
            }),
            e
          );
        })(er),
        Bu = { suppressScrollX: !0 },
        zu = (function () {
          return function () {};
        })(),
        qu = (function () {
          function t() {
            (this.toggled = !1),
              (this._hasBackgroundImage = !0),
              (this.menus = [
                { title: "general", type: "header" },
                {
                  title: "Dashboard",
                  icon: "fa fa-tachometer-alt",
                  active: !1,
                  type: "dropdown",
                  badge: { text: "New ", class: "badge-warning" },
                  submenus: [
                    {
                      title: "Dashboard 1",
                      badge: { text: "Pro ", class: "badge-success" },
                    },
                    { title: "Dashboard 2" },
                    { title: "Dashboard 3" },
                  ],
                },
                {
                  title: "E-commerce",
                  icon: "fa fa-shopping-cart",
                  active: !1,
                  type: "dropdown",
                  badge: { text: "3", class: "badge-danger" },
                  submenus: [
                    { title: "Products" },
                    { title: "Orders" },
                    { title: "Credit cart" },
                  ],
                },
                {
                  title: "Components",
                  icon: "far fa-gem",
                  active: !1,
                  type: "dropdown",
                  submenus: [
                    { title: "General" },
                    { title: "Panels" },
                    { title: "Tables" },
                    { title: "Icons" },
                    { title: "Forms" },
                  ],
                },
                {
                  title: "Charts",
                  icon: "fa fa-chart-line",
                  active: !1,
                  type: "dropdown",
                  submenus: [
                    { title: "Pie chart" },
                    { title: "Line chart" },
                    { title: "Bar chart" },
                    { title: "Histogram" },
                  ],
                },
                {
                  title: "Maps",
                  icon: "fa fa-globe",
                  active: !1,
                  type: "dropdown",
                  submenus: [
                    { title: "Google maps" },
                    { title: "Open street map" },
                  ],
                },
                { title: "Extra", type: "header" },
                {
                  title: "Documentation",
                  icon: "fa fa-book",
                  active: !1,
                  type: "simple",
                  badge: { text: "Beta", class: "badge-primary" },
                },
                {
                  title: "Calendar",
                  icon: "fa fa-calendar",
                  active: !1,
                  type: "simple",
                },
                {
                  title: "Examples",
                  icon: "fa fa-folder",
                  active: !1,
                  type: "simple",
                },
              ]);
          }
          return (
            (t.prototype.toggle = function () {
              this.toggled = !this.toggled;
            }),
            (t.prototype.getSidebarState = function () {
              return this.toggled;
            }),
            (t.prototype.setSidebarState = function (t) {
              this.toggled = t;
            }),
            (t.prototype.getMenuList = function () {
              return this.menus;
            }),
            Object.defineProperty(t.prototype, "hasBackgroundImage", {
              get: function () {
                return this._hasBackgroundImage;
              },
              set: function (t) {
                this._hasBackgroundImage = t;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.ngInjectableDef = Et({
              factory: function () {
                return new t();
              },
              token: t,
              providedIn: "root",
            })),
            t
          );
        })(),
        Wu = (function () {
          function t(t) {
            (this.sidebarservice = t), (this.title = "angular-pro-sidebar");
          }
          return (
            (t.prototype.toggleSidebar = function () {
              this.sidebarservice.setSidebarState(
                !this.sidebarservice.getSidebarState()
              );
            }),
            (t.prototype.toggleBackgroundImage = function () {
              this.sidebarservice.hasBackgroundImage =
                !this.sidebarservice.hasBackgroundImage;
            }),
            (t.prototype.getSideBarState = function () {
              return this.sidebarservice.getSidebarState();
            }),
            (t.prototype.hideSidebar = function () {
              this.sidebarservice.setSidebarState(!0);
            }),
            t
          );
        })(),
        Yu = new A(function (t) {
          return t.complete();
        });
      function Xu(t) {
        return t
          ? (function (t) {
              return new A(function (e) {
                return t.schedule(function () {
                  return e.complete();
                });
              });
            })(t)
          : Yu;
      }
      function Qu(t) {
        var e = new A(function (e) {
          e.next(t), e.complete();
        });
        return (e._isScalar = !0), (e.value = t), e;
      }
      function Ku() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = t[t.length - 1];
        switch ((U(n) ? t.pop() : (n = void 0), t.length)) {
          case 0:
            return Xu(n);
          case 1:
            return n ? rt(t, n) : Qu(t[0]);
          default:
            return rt(t, n);
        }
      }
      var Zu = (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (n._value = e), n;
        }
        return (
          o(e, t),
          Object.defineProperty(e.prototype, "value", {
            get: function () {
              return this.getValue();
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype._subscribe = function (e) {
            var n = t.prototype._subscribe.call(this, e);
            return n && !n.closed && e.next(this._value), n;
          }),
          (e.prototype.getValue = function () {
            if (this.hasError) throw this.thrownError;
            if (this.closed) throw new j();
            return this._value;
          }),
          (e.prototype.next = function (e) {
            t.prototype.next.call(this, (this._value = e));
          }),
          e
        );
      })(H);
      function Gu() {
        return (
          Error.call(this),
          (this.message = "no elements in sequence"),
          (this.name = "EmptyError"),
          this
        );
      }
      Gu.prototype = Object.create(Error.prototype);
      var $u = Gu,
        Ju = {},
        tc = (function () {
          function t(t) {
            this.resultSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new ec(t, this.resultSelector));
            }),
            t
          );
        })(),
        ec = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (
              (r.resultSelector = n),
              (r.active = 0),
              (r.values = []),
              (r.observables = []),
              r
            );
          }
          return (
            o(e, t),
            (e.prototype._next = function (t) {
              this.values.push(Ju), this.observables.push(t);
            }),
            (e.prototype._complete = function () {
              var t = this.observables,
                e = t.length;
              if (0 === e) this.destination.complete();
              else {
                (this.active = e), (this.toRespond = e);
                for (var n = 0; n < e; n++) {
                  var r = t[n];
                  this.add($(this, r, r, n));
                }
              }
            }),
            (e.prototype.notifyComplete = function (t) {
              0 == (this.active -= 1) && this.destination.complete();
            }),
            (e.prototype.notifyNext = function (t, e, n, r, o) {
              var i = this.values,
                s = this.toRespond
                  ? i[n] === Ju
                    ? --this.toRespond
                    : this.toRespond
                  : 0;
              (i[n] = e),
                0 === s &&
                  (this.resultSelector
                    ? this._tryResultSelector(i)
                    : this.destination.next(i.slice()));
            }),
            (e.prototype._tryResultSelector = function (t) {
              var e;
              try {
                e = this.resultSelector.apply(this, t);
              } catch (n) {
                return void this.destination.error(n);
              }
              this.destination.next(e);
            }),
            e
          );
        })(J);
      function nc(t) {
        return new A(function (e) {
          var n;
          try {
            n = t();
          } catch (r) {
            return void e.error(r);
          }
          return (n ? ot(n) : Xu()).subscribe(e);
        });
      }
      function rc() {
        return ut(1);
      }
      function oc(t, e) {
        return function (n) {
          return n.lift(new ic(t, e));
        };
      }
      var ic = (function () {
          function t(t, e) {
            (this.predicate = t), (this.thisArg = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new sc(t, this.predicate, this.thisArg));
            }),
            t
          );
        })(),
        sc = (function (t) {
          function e(e, n, r) {
            var o = t.call(this, e) || this;
            return (o.predicate = n), (o.thisArg = r), (o.count = 0), o;
          }
          return (
            o(e, t),
            (e.prototype._next = function (t) {
              var e;
              try {
                e = this.predicate.call(this.thisArg, t, this.count++);
              } catch (n) {
                return void this.destination.error(n);
              }
              e && this.destination.next(t);
            }),
            e
          );
        })(O);
      function ac() {
        return (
          Error.call(this),
          (this.message = "argument out of range"),
          (this.name = "ArgumentOutOfRangeError"),
          this
        );
      }
      ac.prototype = Object.create(Error.prototype);
      var lc = ac;
      function uc(t) {
        return function (e) {
          return 0 === t ? Xu() : e.lift(new cc(t));
        };
      }
      var cc = (function () {
          function t(t) {
            if (((this.total = t), this.total < 0)) throw new lc();
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new pc(t, this.total));
            }),
            t
          );
        })(),
        pc = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.total = n), (r.ring = new Array()), (r.count = 0), r;
          }
          return (
            o(e, t),
            (e.prototype._next = function (t) {
              var e = this.ring,
                n = this.total,
                r = this.count++;
              e.length < n ? e.push(t) : (e[r % n] = t);
            }),
            (e.prototype._complete = function () {
              var t = this.destination,
                e = this.count;
              if (e > 0)
                for (
                  var n = this.count >= this.total ? this.total : this.count,
                    r = this.ring,
                    o = 0;
                  o < n;
                  o++
                ) {
                  var i = e++ % n;
                  t.next(r[i]);
                }
              t.complete();
            }),
            e
          );
        })(O);
      function hc(t, e, n) {
        return function (r) {
          return r.lift(new fc(t, e, n));
        };
      }
      var fc = (function () {
          function t(t, e, n) {
            (this.nextOrObserver = t), (this.error = e), (this.complete = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new dc(t, this.nextOrObserver, this.error, this.complete)
              );
            }),
            t
          );
        })(),
        dc = (function (t) {
          function e(e, n, r, o) {
            var i = t.call(this, e) || this;
            return (
              (i._tapNext = M),
              (i._tapError = M),
              (i._tapComplete = M),
              (i._tapError = r || M),
              (i._tapComplete = o || M),
              f(n)
                ? ((i._context = i), (i._tapNext = n))
                : n &&
                  ((i._context = n),
                  (i._tapNext = n.next || M),
                  (i._tapError = n.error || M),
                  (i._tapComplete = n.complete || M)),
              i
            );
          }
          return (
            o(e, t),
            (e.prototype._next = function (t) {
              try {
                this._tapNext.call(this._context, t);
              } catch (e) {
                return void this.destination.error(e);
              }
              this.destination.next(t);
            }),
            (e.prototype._error = function (t) {
              try {
                this._tapError.call(this._context, t);
              } catch (t) {
                return void this.destination.error(t);
              }
              this.destination.error(t);
            }),
            (e.prototype._complete = function () {
              try {
                this._tapComplete.call(this._context);
              } catch (t) {
                return void this.destination.error(t);
              }
              return this.destination.complete();
            }),
            e
          );
        })(O),
        gc = function (t) {
          return (
            void 0 === t && (t = vc),
            hc({
              hasValue: !1,
              next: function () {
                this.hasValue = !0;
              },
              complete: function () {
                if (!this.hasValue) throw t();
              },
            })
          );
        };
      function vc() {
        return new $u();
      }
      function yc(t) {
        return (
          void 0 === t && (t = null),
          function (e) {
            return e.lift(new mc(t));
          }
        );
      }
      var mc = (function () {
          function t(t) {
            this.defaultValue = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new bc(t, this.defaultValue));
            }),
            t
          );
        })(),
        bc = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.defaultValue = n), (r.isEmpty = !0), r;
          }
          return (
            o(e, t),
            (e.prototype._next = function (t) {
              (this.isEmpty = !1), this.destination.next(t);
            }),
            (e.prototype._complete = function () {
              this.isEmpty && this.destination.next(this.defaultValue),
                this.destination.complete();
            }),
            e
          );
        })(O);
      function _c(t, e) {
        var n = arguments.length >= 2;
        return function (r) {
          return r.pipe(
            t
              ? oc(function (e, n) {
                  return t(e, n, r);
                })
              : lt,
            uc(1),
            n
              ? yc(e)
              : gc(function () {
                  return new $u();
                })
          );
        };
      }
      function wc(t) {
        return function (e) {
          var n = new Cc(t),
            r = e.lift(n);
          return (n.caught = r);
        };
      }
      var Cc = (function () {
          function t(t) {
            this.selector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Sc(t, this.selector, this.caught));
            }),
            t
          );
        })(),
        Sc = (function (t) {
          function e(e, n, r) {
            var o = t.call(this, e) || this;
            return (o.selector = n), (o.caught = r), o;
          }
          return (
            o(e, t),
            (e.prototype.error = function (e) {
              if (!this.isStopped) {
                var n = void 0;
                try {
                  n = this.selector(e, this.caught);
                } catch (o) {
                  return void t.prototype.error.call(this, o);
                }
                this._unsubscribeAndRecycle();
                var r = new B(this, void 0, void 0);
                this.add(r), $(this, n, void 0, void 0, r);
              }
            }),
            e
          );
        })(J);
      function Ec(t) {
        return function (e) {
          return 0 === t ? Xu() : e.lift(new xc(t));
        };
      }
      var xc = (function () {
          function t(t) {
            if (((this.total = t), this.total < 0)) throw new lc();
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Pc(t, this.total));
            }),
            t
          );
        })(),
        Pc = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.total = n), (r.count = 0), r;
          }
          return (
            o(e, t),
            (e.prototype._next = function (t) {
              var e = this.total,
                n = ++this.count;
              n <= e &&
                (this.destination.next(t),
                n === e && (this.destination.complete(), this.unsubscribe()));
            }),
            e
          );
        })(O);
      function Oc(t, e) {
        var n = arguments.length >= 2;
        return function (r) {
          return r.pipe(
            t
              ? oc(function (e, n) {
                  return t(e, n, r);
                })
              : lt,
            Ec(1),
            n
              ? yc(e)
              : gc(function () {
                  return new $u();
                })
          );
        };
      }
      var Tc = (function () {
          function t(t, e, n) {
            (this.predicate = t), (this.thisArg = e), (this.source = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new kc(t, this.predicate, this.thisArg, this.source)
              );
            }),
            t
          );
        })(),
        kc = (function (t) {
          function e(e, n, r, o) {
            var i = t.call(this, e) || this;
            return (
              (i.predicate = n),
              (i.thisArg = r),
              (i.source = o),
              (i.index = 0),
              (i.thisArg = r || i),
              i
            );
          }
          return (
            o(e, t),
            (e.prototype.notifyComplete = function (t) {
              this.destination.next(t), this.destination.complete();
            }),
            (e.prototype._next = function (t) {
              var e = !1;
              try {
                e = this.predicate.call(
                  this.thisArg,
                  t,
                  this.index++,
                  this.source
                );
              } catch (n) {
                return void this.destination.error(n);
              }
              e || this.notifyComplete(!1);
            }),
            (e.prototype._complete = function () {
              this.notifyComplete(!0);
            }),
            e
          );
        })(O);
      function Mc(t, e) {
        return "function" == typeof e
          ? function (n) {
              return n.pipe(
                Mc(function (n, r) {
                  return ot(t(n, r)).pipe(
                    tt(function (t, o) {
                      return e(n, t, r, o);
                    })
                  );
                })
              );
            }
          : function (e) {
              return e.lift(new Rc(t));
            };
      }
      var Rc = (function () {
          function t(t) {
            this.project = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Ic(t, this.project));
            }),
            t
          );
        })(),
        Ic = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.project = n), (r.index = 0), r;
          }
          return (
            o(e, t),
            (e.prototype._next = function (t) {
              var e,
                n = this.index++;
              try {
                e = this.project(t, n);
              } catch (r) {
                return void this.destination.error(r);
              }
              this._innerSub(e, t, n);
            }),
            (e.prototype._innerSub = function (t, e, n) {
              var r = this.innerSubscription;
              r && r.unsubscribe();
              var o = new B(this, void 0, void 0);
              this.destination.add(o),
                (this.innerSubscription = $(this, t, e, n, o));
            }),
            (e.prototype._complete = function () {
              var e = this.innerSubscription;
              (e && !e.closed) || t.prototype._complete.call(this),
                this.unsubscribe();
            }),
            (e.prototype._unsubscribe = function () {
              this.innerSubscription = null;
            }),
            (e.prototype.notifyComplete = function (e) {
              this.destination.remove(e),
                (this.innerSubscription = null),
                this.isStopped && t.prototype._complete.call(this);
            }),
            (e.prototype.notifyNext = function (t, e, n, r, o) {
              this.destination.next(e);
            }),
            e
          );
        })(J);
      function Ac(t, e) {
        var n = !1;
        return (
          arguments.length >= 2 && (n = !0),
          function (r) {
            return r.lift(new Nc(t, e, n));
          }
        );
      }
      var Nc = (function () {
          function t(t, e, n) {
            void 0 === n && (n = !1),
              (this.accumulator = t),
              (this.seed = e),
              (this.hasSeed = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Dc(t, this.accumulator, this.seed, this.hasSeed)
              );
            }),
            t
          );
        })(),
        Dc = (function (t) {
          function e(e, n, r, o) {
            var i = t.call(this, e) || this;
            return (
              (i.accumulator = n),
              (i._seed = r),
              (i.hasSeed = o),
              (i.index = 0),
              i
            );
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "seed", {
              get: function () {
                return this._seed;
              },
              set: function (t) {
                (this.hasSeed = !0), (this._seed = t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype._next = function (t) {
              if (this.hasSeed) return this._tryNext(t);
              (this.seed = t), this.destination.next(t);
            }),
            (e.prototype._tryNext = function (t) {
              var e,
                n = this.index++;
              try {
                e = this.accumulator(this.seed, t, n);
              } catch (r) {
                this.destination.error(r);
              }
              (this.seed = e), this.destination.next(e);
            }),
            e
          );
        })(O);
      function jc(t, e) {
        return it(t, e, 1);
      }
      var Lc = (function () {
          function t(t) {
            this.callback = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Fc(t, this.callback));
            }),
            t
          );
        })(),
        Fc = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return r.add(new _(n)), r;
          }
          return o(e, t), e;
        })(O),
        Hc = (function () {
          return function () {};
        })(),
        Vc = new Ot("Location Initialized"),
        Uc = (function () {
          return function () {};
        })(),
        Bc = new Ot("appBaseHref"),
        zc = (function () {
          function t(t) {
            var n = this;
            (this._subject = new qo()), (this._platformStrategy = t);
            var r = this._platformStrategy.getBaseHref();
            (this._baseHref = e.stripTrailingSlash(qc(r))),
              this._platformStrategy.onPopState(function (t) {
                n._subject.emit({
                  url: n.path(!0),
                  pop: !0,
                  state: t.state,
                  type: t.type,
                });
              });
          }
          var e;
          return (
            (e = t),
            (t.prototype.path = function (t) {
              return (
                void 0 === t && (t = !1),
                this.normalize(this._platformStrategy.path(t))
              );
            }),
            (t.prototype.isCurrentPathEqualTo = function (t, n) {
              return (
                void 0 === n && (n = ""),
                this.path() == this.normalize(t + e.normalizeQueryParams(n))
              );
            }),
            (t.prototype.normalize = function (t) {
              return e.stripTrailingSlash(
                (function (t, e) {
                  return t && e.startsWith(t) ? e.substring(t.length) : e;
                })(this._baseHref, qc(t))
              );
            }),
            (t.prototype.prepareExternalUrl = function (t) {
              return (
                t && "/" !== t[0] && (t = "/" + t),
                this._platformStrategy.prepareExternalUrl(t)
              );
            }),
            (t.prototype.go = function (t, e, n) {
              void 0 === e && (e = ""),
                void 0 === n && (n = null),
                this._platformStrategy.pushState(n, "", t, e);
            }),
            (t.prototype.replaceState = function (t, e, n) {
              void 0 === e && (e = ""),
                void 0 === n && (n = null),
                this._platformStrategy.replaceState(n, "", t, e);
            }),
            (t.prototype.forward = function () {
              this._platformStrategy.forward();
            }),
            (t.prototype.back = function () {
              this._platformStrategy.back();
            }),
            (t.prototype.subscribe = function (t, e, n) {
              return this._subject.subscribe({
                next: t,
                error: e,
                complete: n,
              });
            }),
            (t.normalizeQueryParams = function (t) {
              return t && "?" !== t[0] ? "?" + t : t;
            }),
            (t.joinWithSlash = function (t, e) {
              if (0 == t.length) return e;
              if (0 == e.length) return t;
              var n = 0;
              return (
                t.endsWith("/") && n++,
                e.startsWith("/") && n++,
                2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e
              );
            }),
            (t.stripTrailingSlash = function (t) {
              var e = t.match(/#|\?|$/),
                n = (e && e.index) || t.length;
              return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n);
            }),
            t
          );
        })();
      function qc(t) {
        return t.replace(/\/index.html$/, "");
      }
      var Wc = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (
              (r._platformLocation = e),
              (r._baseHref = ""),
              null != n && (r._baseHref = n),
              r
            );
          }
          return (
            o(e, t),
            (e.prototype.onPopState = function (t) {
              this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t);
            }),
            (e.prototype.getBaseHref = function () {
              return this._baseHref;
            }),
            (e.prototype.path = function (t) {
              void 0 === t && (t = !1);
              var e = this._platformLocation.hash;
              return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e;
            }),
            (e.prototype.prepareExternalUrl = function (t) {
              var e = zc.joinWithSlash(this._baseHref, t);
              return e.length > 0 ? "#" + e : e;
            }),
            (e.prototype.pushState = function (t, e, n, r) {
              var o = this.prepareExternalUrl(n + zc.normalizeQueryParams(r));
              0 == o.length && (o = this._platformLocation.pathname),
                this._platformLocation.pushState(t, e, o);
            }),
            (e.prototype.replaceState = function (t, e, n, r) {
              var o = this.prepareExternalUrl(n + zc.normalizeQueryParams(r));
              0 == o.length && (o = this._platformLocation.pathname),
                this._platformLocation.replaceState(t, e, o);
            }),
            (e.prototype.forward = function () {
              this._platformLocation.forward();
            }),
            (e.prototype.back = function () {
              this._platformLocation.back();
            }),
            e
          );
        })(Uc),
        Yc = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            if (
              ((r._platformLocation = e),
              null == n && (n = r._platformLocation.getBaseHrefFromDOM()),
              null == n)
            )
              throw new Error(
                "No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document."
              );
            return (r._baseHref = n), r;
          }
          return (
            o(e, t),
            (e.prototype.onPopState = function (t) {
              this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t);
            }),
            (e.prototype.getBaseHref = function () {
              return this._baseHref;
            }),
            (e.prototype.prepareExternalUrl = function (t) {
              return zc.joinWithSlash(this._baseHref, t);
            }),
            (e.prototype.path = function (t) {
              void 0 === t && (t = !1);
              var e =
                  this._platformLocation.pathname +
                  zc.normalizeQueryParams(this._platformLocation.search),
                n = this._platformLocation.hash;
              return n && t ? "" + e + n : e;
            }),
            (e.prototype.pushState = function (t, e, n, r) {
              var o = this.prepareExternalUrl(n + zc.normalizeQueryParams(r));
              this._platformLocation.pushState(t, e, o);
            }),
            (e.prototype.replaceState = function (t, e, n, r) {
              var o = this.prepareExternalUrl(n + zc.normalizeQueryParams(r));
              this._platformLocation.replaceState(t, e, o);
            }),
            (e.prototype.forward = function () {
              this._platformLocation.forward();
            }),
            (e.prototype.back = function () {
              this._platformLocation.back();
            }),
            e
          );
        })(Uc),
        Xc = void 0,
        Qc = [
          "en",
          [["a", "p"], ["AM", "PM"], Xc],
          [["AM", "PM"], Xc, Xc],
          [
            ["S", "M", "T", "W", "T", "F", "S"],
            ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          ],
          Xc,
          [
            ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
          ],
          Xc,
          [
            ["B", "A"],
            ["BC", "AD"],
            ["Before Christ", "Anno Domini"],
          ],
          0,
          [6, 0],
          ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
          ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
          ["{1}, {0}", Xc, "{1} 'at' {0}", Xc],
          [
            ".",
            ",",
            ";",
            "%",
            "+",
            "-",
            "E",
            "\xd7",
            "\u2030",
            "\u221e",
            "NaN",
            ":",
          ],
          ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
          "$",
          "US Dollar",
          {},
          function (t) {
            var e = Math.floor(Math.abs(t)),
              n = t.toString().replace(/^[^.]*\.?/, "").length;
            return 1 === e && 0 === n ? 1 : 5;
          },
        ],
        Kc = {},
        Zc = (function (t) {
          return (
            (t[(t.Zero = 0)] = "Zero"),
            (t[(t.One = 1)] = "One"),
            (t[(t.Two = 2)] = "Two"),
            (t[(t.Few = 3)] = "Few"),
            (t[(t.Many = 4)] = "Many"),
            (t[(t.Other = 5)] = "Other"),
            t
          );
        })({}),
        Gc = new Ot("UseV4Plurals"),
        $c = (function () {
          return function () {};
        })(),
        Jc = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (r.locale = e), (r.deprecatedPluralFn = n), r;
          }
          return (
            o(e, t),
            (e.prototype.getPluralCategory = function (t, e) {
              switch (
                this.deprecatedPluralFn
                  ? this.deprecatedPluralFn(e || this.locale, t)
                  : (function (t) {
                      return (function (t) {
                        var e = t.toLowerCase().replace(/_/g, "-"),
                          n = Kc[e];
                        if (n) return n;
                        var r = e.split("-")[0];
                        if ((n = Kc[r])) return n;
                        if ("en" === r) return Qc;
                        throw new Error(
                          'Missing locale data for the locale "' + t + '".'
                        );
                      })(t)[18];
                    })(e || this.locale)(t)
              ) {
                case Zc.Zero:
                  return "zero";
                case Zc.One:
                  return "one";
                case Zc.Two:
                  return "two";
                case Zc.Few:
                  return "few";
                case Zc.Many:
                  return "many";
                default:
                  return "other";
              }
            }),
            e
          );
        })($c),
        tp = (function () {
          function t(t, e, n, r) {
            (this._iterableDiffers = t),
              (this._keyValueDiffers = e),
              (this._ngEl = n),
              (this._renderer = r),
              (this._initialClasses = []);
          }
          return (
            Object.defineProperty(t.prototype, "klass", {
              set: function (t) {
                this._removeClasses(this._initialClasses),
                  (this._initialClasses =
                    "string" == typeof t ? t.split(/\s+/) : []),
                  this._applyClasses(this._initialClasses),
                  this._applyClasses(this._rawClass);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "ngClass", {
              set: function (t) {
                this._removeClasses(this._rawClass),
                  this._applyClasses(this._initialClasses),
                  (this._iterableDiffer = null),
                  (this._keyValueDiffer = null),
                  (this._rawClass = "string" == typeof t ? t.split(/\s+/) : t),
                  this._rawClass &&
                    (ke(this._rawClass)
                      ? (this._iterableDiffer = this._iterableDiffers
                          .find(this._rawClass)
                          .create())
                      : (this._keyValueDiffer = this._keyValueDiffers
                          .find(this._rawClass)
                          .create()));
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.ngDoCheck = function () {
              if (this._iterableDiffer) {
                var t = this._iterableDiffer.diff(this._rawClass);
                t && this._applyIterableChanges(t);
              } else if (this._keyValueDiffer) {
                var e = this._keyValueDiffer.diff(this._rawClass);
                e && this._applyKeyValueChanges(e);
              }
            }),
            (t.prototype._applyKeyValueChanges = function (t) {
              var e = this;
              t.forEachAddedItem(function (t) {
                return e._toggleClass(t.key, t.currentValue);
              }),
                t.forEachChangedItem(function (t) {
                  return e._toggleClass(t.key, t.currentValue);
                }),
                t.forEachRemovedItem(function (t) {
                  t.previousValue && e._toggleClass(t.key, !1);
                });
            }),
            (t.prototype._applyIterableChanges = function (t) {
              var e = this;
              t.forEachAddedItem(function (t) {
                if ("string" != typeof t.item)
                  throw new Error(
                    "NgClass can only toggle CSS classes expressed as strings, got " +
                      Vt(t.item)
                  );
                e._toggleClass(t.item, !0);
              }),
                t.forEachRemovedItem(function (t) {
                  return e._toggleClass(t.item, !1);
                });
            }),
            (t.prototype._applyClasses = function (t) {
              var e = this;
              t &&
                (Array.isArray(t) || t instanceof Set
                  ? t.forEach(function (t) {
                      return e._toggleClass(t, !0);
                    })
                  : Object.keys(t).forEach(function (n) {
                      return e._toggleClass(n, !!t[n]);
                    }));
            }),
            (t.prototype._removeClasses = function (t) {
              var e = this;
              t &&
                (Array.isArray(t) || t instanceof Set
                  ? t.forEach(function (t) {
                      return e._toggleClass(t, !1);
                    })
                  : Object.keys(t).forEach(function (t) {
                      return e._toggleClass(t, !1);
                    }));
            }),
            (t.prototype._toggleClass = function (t, e) {
              var n = this;
              (t = t.trim()) &&
                t.split(/\s+/g).forEach(function (t) {
                  e
                    ? n._renderer.addClass(n._ngEl.nativeElement, t)
                    : n._renderer.removeClass(n._ngEl.nativeElement, t);
                });
            }),
            t
          );
        })(),
        ep = (function () {
          function t(t, e, n, r) {
            (this.$implicit = t),
              (this.ngForOf = e),
              (this.index = n),
              (this.count = r);
          }
          return (
            Object.defineProperty(t.prototype, "first", {
              get: function () {
                return 0 === this.index;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "last", {
              get: function () {
                return this.index === this.count - 1;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "even", {
              get: function () {
                return this.index % 2 == 0;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "odd", {
              get: function () {
                return !this.even;
              },
              enumerable: !0,
              configurable: !0,
            }),
            t
          );
        })(),
        np = (function () {
          function t(t, e, n) {
            (this._viewContainer = t),
              (this._template = e),
              (this._differs = n),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          return (
            Object.defineProperty(t.prototype, "ngForOf", {
              set: function (t) {
                (this._ngForOf = t), (this._ngForOfDirty = !0);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "ngForTrackBy", {
              get: function () {
                return this._trackByFn;
              },
              set: function (t) {
                wo() &&
                  null != t &&
                  "function" != typeof t &&
                  console &&
                  console.warn &&
                  console.warn(
                    "trackBy must be a function, but received " +
                      JSON.stringify(t) +
                      ". See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information."
                  ),
                  (this._trackByFn = t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "ngForTemplate", {
              set: function (t) {
                t && (this._template = t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.ngDoCheck = function () {
              if (this._ngForOfDirty) {
                this._ngForOfDirty = !1;
                var t = this._ngForOf;
                if (!this._differ && t)
                  try {
                    this._differ = this._differs
                      .find(t)
                      .create(this.ngForTrackBy);
                  } catch (r) {
                    throw new Error(
                      "Cannot find a differ supporting object '" +
                        t +
                        "' of type '" +
                        ((e = t).name || typeof e) +
                        "'. NgFor only supports binding to Iterables such as Arrays."
                    );
                  }
              }
              var e;
              if (this._differ) {
                var n = this._differ.diff(this._ngForOf);
                n && this._applyChanges(n);
              }
            }),
            (t.prototype._applyChanges = function (t) {
              var e = this,
                n = [];
              t.forEachOperation(function (t, r, o) {
                if (null == t.previousIndex) {
                  var i = e._viewContainer.createEmbeddedView(
                      e._template,
                      new ep(null, e._ngForOf, -1, -1),
                      o
                    ),
                    s = new rp(t, i);
                  n.push(s);
                } else null == o ? e._viewContainer.remove(r) : ((i = e._viewContainer.get(r)), e._viewContainer.move(i, o), (s = new rp(t, i)), n.push(s));
              });
              for (var r = 0; r < n.length; r++)
                this._perViewChange(n[r].view, n[r].record);
              r = 0;
              for (var o = this._viewContainer.length; r < o; r++) {
                var i = this._viewContainer.get(r);
                (i.context.index = r),
                  (i.context.count = o),
                  (i.context.ngForOf = this._ngForOf);
              }
              t.forEachIdentityChange(function (t) {
                e._viewContainer.get(t.currentIndex).context.$implicit = t.item;
              });
            }),
            (t.prototype._perViewChange = function (t, e) {
              t.context.$implicit = e.item;
            }),
            (t.ngTemplateContextGuard = function (t, e) {
              return !0;
            }),
            t
          );
        })(),
        rp = (function () {
          return function (t, e) {
            (this.record = t), (this.view = e);
          };
        })(),
        op = (function () {
          function t(t, e) {
            (this._viewContainer = t),
              (this._context = new ip()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = e);
          }
          return (
            Object.defineProperty(t.prototype, "ngIf", {
              set: function (t) {
                (this._context.$implicit = this._context.ngIf = t),
                  this._updateView();
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "ngIfThen", {
              set: function (t) {
                sp("ngIfThen", t),
                  (this._thenTemplateRef = t),
                  (this._thenViewRef = null),
                  this._updateView();
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "ngIfElse", {
              set: function (t) {
                sp("ngIfElse", t),
                  (this._elseTemplateRef = t),
                  (this._elseViewRef = null),
                  this._updateView();
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype._updateView = function () {
              this._context.$implicit
                ? this._thenViewRef ||
                  (this._viewContainer.clear(),
                  (this._elseViewRef = null),
                  this._thenTemplateRef &&
                    (this._thenViewRef = this._viewContainer.createEmbeddedView(
                      this._thenTemplateRef,
                      this._context
                    )))
                : this._elseViewRef ||
                  (this._viewContainer.clear(),
                  (this._thenViewRef = null),
                  this._elseTemplateRef &&
                    (this._elseViewRef = this._viewContainer.createEmbeddedView(
                      this._elseTemplateRef,
                      this._context
                    )));
            }),
            (t.ngTemplateGuard_ngIf = function (t, e) {
              return !0;
            }),
            t
          );
        })(),
        ip = (function () {
          return function () {
            (this.$implicit = null), (this.ngIf = null);
          };
        })();
      function sp(t, e) {
        if (e && !e.createEmbeddedView)
          throw new Error(
            t + " must be a TemplateRef, but received '" + Vt(e) + "'."
          );
      }
      var ap = (function () {
          return function () {};
        })(),
        lp = new Ot("DocumentToken"),
        up = "browser",
        cp = "server";
      function pp(t) {
        return t === up;
      }
      var hp = (function () {
          function t() {}
          return (
            (t.ngInjectableDef = Et({
              providedIn: "root",
              factory: function () {
                return new fp(Zt(lp), window);
              },
            })),
            t
          );
        })(),
        fp = (function () {
          function t(t, e) {
            (this.document = t),
              (this.window = e),
              (this.offset = function () {
                return [0, 0];
              });
          }
          return (
            (t.prototype.setOffset = function (t) {
              this.offset = Array.isArray(t)
                ? function () {
                    return t;
                  }
                : t;
            }),
            (t.prototype.getScrollPosition = function () {
              return this.supportScrollRestoration()
                ? [this.window.scrollX, this.window.scrollY]
                : [0, 0];
            }),
            (t.prototype.scrollToPosition = function (t) {
              this.supportScrollRestoration() &&
                this.window.scrollTo(t[0], t[1]);
            }),
            (t.prototype.scrollToAnchor = function (t) {
              if (this.supportScrollRestoration()) {
                var e = this.document.querySelector("#" + t);
                if (e) return void this.scrollToElement(e);
                var n = this.document.querySelector("[name='" + t + "']");
                if (n) return void this.scrollToElement(n);
              }
            }),
            (t.prototype.setHistoryScrollRestoration = function (t) {
              if (this.supportScrollRestoration()) {
                var e = this.window.history;
                e && e.scrollRestoration && (e.scrollRestoration = t);
              }
            }),
            (t.prototype.scrollToElement = function (t) {
              var e = t.getBoundingClientRect(),
                n = e.left + this.window.pageXOffset,
                r = e.top + this.window.pageYOffset,
                o = this.offset();
              this.window.scrollTo(n - o[0], r - o[1]);
            }),
            (t.prototype.supportScrollRestoration = function () {
              try {
                return !!this.window && !!this.window.scrollTo;
              } catch (t) {
                return !1;
              }
            }),
            t
          );
        })(),
        dp = null;
      function gp() {
        return dp;
      }
      var vp,
        yp = {
          class: "className",
          innerHtml: "innerHTML",
          readonly: "readOnly",
          tabindex: "tabIndex",
        },
        mp = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS",
        },
        bp = {
          A: "1",
          B: "2",
          C: "3",
          D: "4",
          E: "5",
          F: "6",
          G: "7",
          H: "8",
          I: "9",
          J: "*",
          K: "+",
          M: "-",
          N: ".",
          O: "/",
          "`": "0",
          "\x90": "NumLock",
        };
      Nt.Node &&
        (vp =
          Nt.Node.prototype.contains ||
          function (t) {
            return !!(16 & this.compareDocumentPosition(t));
          });
      var _p,
        wp = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            o(e, t),
            (e.prototype.parse = function (t) {
              throw new Error("parse not implemented");
            }),
            (e.makeCurrent = function () {
              var t;
              (t = new e()), dp || (dp = t);
            }),
            (e.prototype.hasProperty = function (t, e) {
              return e in t;
            }),
            (e.prototype.setProperty = function (t, e, n) {
              t[e] = n;
            }),
            (e.prototype.getProperty = function (t, e) {
              return t[e];
            }),
            (e.prototype.invoke = function (t, e, n) {
              var r;
              (r = t)[e].apply(r, c(n));
            }),
            (e.prototype.logError = function (t) {
              window.console &&
                (console.error ? console.error(t) : console.log(t));
            }),
            (e.prototype.log = function (t) {
              window.console && window.console.log && window.console.log(t);
            }),
            (e.prototype.logGroup = function (t) {
              window.console && window.console.group && window.console.group(t);
            }),
            (e.prototype.logGroupEnd = function () {
              window.console &&
                window.console.groupEnd &&
                window.console.groupEnd();
            }),
            Object.defineProperty(e.prototype, "attrToPropMap", {
              get: function () {
                return yp;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.contains = function (t, e) {
              return vp.call(t, e);
            }),
            (e.prototype.querySelector = function (t, e) {
              return t.querySelector(e);
            }),
            (e.prototype.querySelectorAll = function (t, e) {
              return t.querySelectorAll(e);
            }),
            (e.prototype.on = function (t, e, n) {
              t.addEventListener(e, n, !1);
            }),
            (e.prototype.onAndCancel = function (t, e, n) {
              return (
                t.addEventListener(e, n, !1),
                function () {
                  t.removeEventListener(e, n, !1);
                }
              );
            }),
            (e.prototype.dispatchEvent = function (t, e) {
              t.dispatchEvent(e);
            }),
            (e.prototype.createMouseEvent = function (t) {
              var e = this.getDefaultDocument().createEvent("MouseEvent");
              return e.initEvent(t, !0, !0), e;
            }),
            (e.prototype.createEvent = function (t) {
              var e = this.getDefaultDocument().createEvent("Event");
              return e.initEvent(t, !0, !0), e;
            }),
            (e.prototype.preventDefault = function (t) {
              t.preventDefault(), (t.returnValue = !1);
            }),
            (e.prototype.isPrevented = function (t) {
              return (
                t.defaultPrevented || (null != t.returnValue && !t.returnValue)
              );
            }),
            (e.prototype.getInnerHTML = function (t) {
              return t.innerHTML;
            }),
            (e.prototype.getTemplateContent = function (t) {
              return "content" in t && this.isTemplateElement(t)
                ? t.content
                : null;
            }),
            (e.prototype.getOuterHTML = function (t) {
              return t.outerHTML;
            }),
            (e.prototype.nodeName = function (t) {
              return t.nodeName;
            }),
            (e.prototype.nodeValue = function (t) {
              return t.nodeValue;
            }),
            (e.prototype.type = function (t) {
              return t.type;
            }),
            (e.prototype.content = function (t) {
              return this.hasProperty(t, "content") ? t.content : t;
            }),
            (e.prototype.firstChild = function (t) {
              return t.firstChild;
            }),
            (e.prototype.nextSibling = function (t) {
              return t.nextSibling;
            }),
            (e.prototype.parentElement = function (t) {
              return t.parentNode;
            }),
            (e.prototype.childNodes = function (t) {
              return t.childNodes;
            }),
            (e.prototype.childNodesAsList = function (t) {
              for (
                var e = t.childNodes, n = new Array(e.length), r = 0;
                r < e.length;
                r++
              )
                n[r] = e[r];
              return n;
            }),
            (e.prototype.clearNodes = function (t) {
              for (; t.firstChild; ) t.removeChild(t.firstChild);
            }),
            (e.prototype.appendChild = function (t, e) {
              t.appendChild(e);
            }),
            (e.prototype.removeChild = function (t, e) {
              t.removeChild(e);
            }),
            (e.prototype.replaceChild = function (t, e, n) {
              t.replaceChild(e, n);
            }),
            (e.prototype.remove = function (t) {
              return t.parentNode && t.parentNode.removeChild(t), t;
            }),
            (e.prototype.insertBefore = function (t, e, n) {
              t.insertBefore(n, e);
            }),
            (e.prototype.insertAllBefore = function (t, e, n) {
              n.forEach(function (n) {
                return t.insertBefore(n, e);
              });
            }),
            (e.prototype.insertAfter = function (t, e, n) {
              t.insertBefore(n, e.nextSibling);
            }),
            (e.prototype.setInnerHTML = function (t, e) {
              t.innerHTML = e;
            }),
            (e.prototype.getText = function (t) {
              return t.textContent;
            }),
            (e.prototype.setText = function (t, e) {
              t.textContent = e;
            }),
            (e.prototype.getValue = function (t) {
              return t.value;
            }),
            (e.prototype.setValue = function (t, e) {
              t.value = e;
            }),
            (e.prototype.getChecked = function (t) {
              return t.checked;
            }),
            (e.prototype.setChecked = function (t, e) {
              t.checked = e;
            }),
            (e.prototype.createComment = function (t) {
              return this.getDefaultDocument().createComment(t);
            }),
            (e.prototype.createTemplate = function (t) {
              var e = this.getDefaultDocument().createElement("template");
              return (e.innerHTML = t), e;
            }),
            (e.prototype.createElement = function (t, e) {
              return (e = e || this.getDefaultDocument()).createElement(t);
            }),
            (e.prototype.createElementNS = function (t, e, n) {
              return (n = n || this.getDefaultDocument()).createElementNS(t, e);
            }),
            (e.prototype.createTextNode = function (t, e) {
              return (e = e || this.getDefaultDocument()).createTextNode(t);
            }),
            (e.prototype.createScriptTag = function (t, e, n) {
              var r = (n = n || this.getDefaultDocument()).createElement(
                "SCRIPT"
              );
              return r.setAttribute(t, e), r;
            }),
            (e.prototype.createStyleElement = function (t, e) {
              var n = (e = e || this.getDefaultDocument()).createElement(
                "style"
              );
              return this.appendChild(n, this.createTextNode(t, e)), n;
            }),
            (e.prototype.createShadowRoot = function (t) {
              return t.createShadowRoot();
            }),
            (e.prototype.getShadowRoot = function (t) {
              return t.shadowRoot;
            }),
            (e.prototype.getHost = function (t) {
              return t.host;
            }),
            (e.prototype.clone = function (t) {
              return t.cloneNode(!0);
            }),
            (e.prototype.getElementsByClassName = function (t, e) {
              return t.getElementsByClassName(e);
            }),
            (e.prototype.getElementsByTagName = function (t, e) {
              return t.getElementsByTagName(e);
            }),
            (e.prototype.classList = function (t) {
              return Array.prototype.slice.call(t.classList, 0);
            }),
            (e.prototype.addClass = function (t, e) {
              t.classList.add(e);
            }),
            (e.prototype.removeClass = function (t, e) {
              t.classList.remove(e);
            }),
            (e.prototype.hasClass = function (t, e) {
              return t.classList.contains(e);
            }),
            (e.prototype.setStyle = function (t, e, n) {
              t.style[e] = n;
            }),
            (e.prototype.removeStyle = function (t, e) {
              t.style[e] = "";
            }),
            (e.prototype.getStyle = function (t, e) {
              return t.style[e];
            }),
            (e.prototype.hasStyle = function (t, e, n) {
              var r = this.getStyle(t, e) || "";
              return n ? r == n : r.length > 0;
            }),
            (e.prototype.tagName = function (t) {
              return t.tagName;
            }),
            (e.prototype.attributeMap = function (t) {
              for (
                var e = new Map(), n = t.attributes, r = 0;
                r < n.length;
                r++
              ) {
                var o = n.item(r);
                e.set(o.name, o.value);
              }
              return e;
            }),
            (e.prototype.hasAttribute = function (t, e) {
              return t.hasAttribute(e);
            }),
            (e.prototype.hasAttributeNS = function (t, e, n) {
              return t.hasAttributeNS(e, n);
            }),
            (e.prototype.getAttribute = function (t, e) {
              return t.getAttribute(e);
            }),
            (e.prototype.getAttributeNS = function (t, e, n) {
              return t.getAttributeNS(e, n);
            }),
            (e.prototype.setAttribute = function (t, e, n) {
              t.setAttribute(e, n);
            }),
            (e.prototype.setAttributeNS = function (t, e, n, r) {
              t.setAttributeNS(e, n, r);
            }),
            (e.prototype.removeAttribute = function (t, e) {
              t.removeAttribute(e);
            }),
            (e.prototype.removeAttributeNS = function (t, e, n) {
              t.removeAttributeNS(e, n);
            }),
            (e.prototype.templateAwareRoot = function (t) {
              return this.isTemplateElement(t) ? this.content(t) : t;
            }),
            (e.prototype.createHtmlDocument = function () {
              return document.implementation.createHTMLDocument("fakeTitle");
            }),
            (e.prototype.getDefaultDocument = function () {
              return document;
            }),
            (e.prototype.getBoundingClientRect = function (t) {
              try {
                return t.getBoundingClientRect();
              } catch (e) {
                return {
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  width: 0,
                  height: 0,
                };
              }
            }),
            (e.prototype.getTitle = function (t) {
              return t.title;
            }),
            (e.prototype.setTitle = function (t, e) {
              t.title = e || "";
            }),
            (e.prototype.elementMatches = function (t, e) {
              return (
                !!this.isElementNode(t) &&
                ((t.matches && t.matches(e)) ||
                  (t.msMatchesSelector && t.msMatchesSelector(e)) ||
                  (t.webkitMatchesSelector && t.webkitMatchesSelector(e)))
              );
            }),
            (e.prototype.isTemplateElement = function (t) {
              return this.isElementNode(t) && "TEMPLATE" === t.nodeName;
            }),
            (e.prototype.isTextNode = function (t) {
              return t.nodeType === Node.TEXT_NODE;
            }),
            (e.prototype.isCommentNode = function (t) {
              return t.nodeType === Node.COMMENT_NODE;
            }),
            (e.prototype.isElementNode = function (t) {
              return t.nodeType === Node.ELEMENT_NODE;
            }),
            (e.prototype.hasShadowRoot = function (t) {
              return null != t.shadowRoot && t instanceof HTMLElement;
            }),
            (e.prototype.isShadowRoot = function (t) {
              return t instanceof DocumentFragment;
            }),
            (e.prototype.importIntoDoc = function (t) {
              return document.importNode(this.templateAwareRoot(t), !0);
            }),
            (e.prototype.adoptNode = function (t) {
              return document.adoptNode(t);
            }),
            (e.prototype.getHref = function (t) {
              return t.getAttribute("href");
            }),
            (e.prototype.getEventKey = function (t) {
              var e = t.key;
              if (null == e) {
                if (null == (e = t.keyIdentifier)) return "Unidentified";
                e.startsWith("U+") &&
                  ((e = String.fromCharCode(parseInt(e.substring(2), 16))),
                  3 === t.location && bp.hasOwnProperty(e) && (e = bp[e]));
              }
              return mp[e] || e;
            }),
            (e.prototype.getGlobalEventTarget = function (t, e) {
              return "window" === e
                ? window
                : "document" === e
                ? t
                : "body" === e
                ? t.body
                : null;
            }),
            (e.prototype.getHistory = function () {
              return window.history;
            }),
            (e.prototype.getLocation = function () {
              return window.location;
            }),
            (e.prototype.getBaseHref = function (t) {
              var e,
                n =
                  Cp || (Cp = document.querySelector("base"))
                    ? Cp.getAttribute("href")
                    : null;
              return null == n
                ? null
                : ((e = n),
                  _p || (_p = document.createElement("a")),
                  _p.setAttribute("href", e),
                  "/" === _p.pathname.charAt(0)
                    ? _p.pathname
                    : "/" + _p.pathname);
            }),
            (e.prototype.resetBaseElement = function () {
              Cp = null;
            }),
            (e.prototype.getUserAgent = function () {
              return window.navigator.userAgent;
            }),
            (e.prototype.setData = function (t, e, n) {
              this.setAttribute(t, "data-" + e, n);
            }),
            (e.prototype.getData = function (t, e) {
              return this.getAttribute(t, "data-" + e);
            }),
            (e.prototype.getComputedStyle = function (t) {
              return getComputedStyle(t);
            }),
            (e.prototype.supportsWebAnimation = function () {
              return "function" == typeof Element.prototype.animate;
            }),
            (e.prototype.performanceNow = function () {
              return window.performance && window.performance.now
                ? window.performance.now()
                : new Date().getTime();
            }),
            (e.prototype.supportsCookies = function () {
              return !0;
            }),
            (e.prototype.getCookie = function (t) {
              return (function (t, e) {
                var n, r;
                e = encodeURIComponent(e);
                try {
                  for (
                    var o = l(t.split(";")), i = o.next();
                    !i.done;
                    i = o.next()
                  ) {
                    var s = i.value,
                      a = s.indexOf("="),
                      c = u(
                        -1 == a ? [s, ""] : [s.slice(0, a), s.slice(a + 1)],
                        2
                      ),
                      p = c[1];
                    if (c[0].trim() === e) return decodeURIComponent(p);
                  }
                } catch (h) {
                  n = { error: h };
                } finally {
                  try {
                    i && !i.done && (r = o.return) && r.call(o);
                  } finally {
                    if (n) throw n.error;
                  }
                }
                return null;
              })(document.cookie, t);
            }),
            (e.prototype.setCookie = function (t, e) {
              document.cookie =
                encodeURIComponent(t) + "=" + encodeURIComponent(e);
            }),
            e
          );
        })(
          (function (t) {
            function e() {
              var e = t.call(this) || this;
              (e._animationPrefix = null), (e._transitionEnd = null);
              try {
                var n = e.createElement("div", document);
                if (null != e.getStyle(n, "animationName"))
                  e._animationPrefix = "";
                else
                  for (
                    var r = ["Webkit", "Moz", "O", "ms"], o = 0;
                    o < r.length;
                    o++
                  )
                    if (null != e.getStyle(n, r[o] + "AnimationName")) {
                      e._animationPrefix = "-" + r[o].toLowerCase() + "-";
                      break;
                    }
                var i = {
                  WebkitTransition: "webkitTransitionEnd",
                  MozTransition: "transitionend",
                  OTransition: "oTransitionEnd otransitionend",
                  transition: "transitionend",
                };
                Object.keys(i).forEach(function (t) {
                  null != e.getStyle(n, t) && (e._transitionEnd = i[t]);
                });
              } catch (s) {
                (e._animationPrefix = null), (e._transitionEnd = null);
              }
              return e;
            }
            return (
              o(e, t),
              (e.prototype.getDistributedNodes = function (t) {
                return t.getDistributedNodes();
              }),
              (e.prototype.resolveAndSetHref = function (t, e, n) {
                t.href = null == n ? e : e + "/../" + n;
              }),
              (e.prototype.supportsDOMEvents = function () {
                return !0;
              }),
              (e.prototype.supportsNativeShadowDOM = function () {
                return "function" == typeof document.body.createShadowRoot;
              }),
              (e.prototype.getAnimationPrefix = function () {
                return this._animationPrefix ? this._animationPrefix : "";
              }),
              (e.prototype.getTransitionEnd = function () {
                return this._transitionEnd ? this._transitionEnd : "";
              }),
              (e.prototype.supportsAnimation = function () {
                return (
                  null != this._animationPrefix && null != this._transitionEnd
                );
              }),
              e
            );
          })(
            (function () {
              function t() {
                this.resourceLoaderType = null;
              }
              return (
                Object.defineProperty(t.prototype, "attrToPropMap", {
                  get: function () {
                    return this._attrToPropMap;
                  },
                  set: function (t) {
                    this._attrToPropMap = t;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                t
              );
            })()
          )
        ),
        Cp = null,
        Sp = lp;
      function Ep() {
        return !!window.history.pushState;
      }
      var xp = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (n._doc = e), n._init(), n;
          }
          var n;
          return (
            o(e, t),
            (e.prototype._init = function () {
              (this.location = gp().getLocation()),
                (this._history = gp().getHistory());
            }),
            (e.prototype.getBaseHrefFromDOM = function () {
              return gp().getBaseHref(this._doc);
            }),
            (e.prototype.onPopState = function (t) {
              gp()
                .getGlobalEventTarget(this._doc, "window")
                .addEventListener("popstate", t, !1);
            }),
            (e.prototype.onHashChange = function (t) {
              gp()
                .getGlobalEventTarget(this._doc, "window")
                .addEventListener("hashchange", t, !1);
            }),
            Object.defineProperty(e.prototype, "pathname", {
              get: function () {
                return this.location.pathname;
              },
              set: function (t) {
                this.location.pathname = t;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "search", {
              get: function () {
                return this.location.search;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "hash", {
              get: function () {
                return this.location.hash;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.pushState = function (t, e, n) {
              Ep()
                ? this._history.pushState(t, e, n)
                : (this.location.hash = n);
            }),
            (e.prototype.replaceState = function (t, e, n) {
              Ep()
                ? this._history.replaceState(t, e, n)
                : (this.location.hash = n);
            }),
            (e.prototype.forward = function () {
              this._history.forward();
            }),
            (e.prototype.back = function () {
              this._history.back();
            }),
            s(
              [
                ((n = Bt(Sp)),
                function (t, e) {
                  n(t, e, 0);
                }),
                a("design:paramtypes", [Object]),
              ],
              e
            )
          );
        })(Hc),
        Pp = new Ot("TRANSITION_ID"),
        Op = [
          {
            provide: si,
            useFactory: function (t, e, n) {
              return function () {
                n.get(ai).donePromise.then(function () {
                  var n = gp();
                  Array.prototype.slice
                    .apply(n.querySelectorAll(e, "style[ng-transition]"))
                    .filter(function (e) {
                      return n.getAttribute(e, "ng-transition") === t;
                    })
                    .forEach(function (t) {
                      return n.remove(t);
                    });
                });
              };
            },
            deps: [Pp, Sp, Vn],
            multi: !0,
          },
        ],
        Tp = (function () {
          function t() {}
          return (
            (t.init = function () {
              var e;
              (e = new t()), (Di = e);
            }),
            (t.prototype.addToWindow = function (t) {
              (Nt.getAngularTestability = function (e, n) {
                void 0 === n && (n = !0);
                var r = t.findTestabilityInTree(e, n);
                if (null == r)
                  throw new Error("Could not find testability for element.");
                return r;
              }),
                (Nt.getAllAngularTestabilities = function () {
                  return t.getAllTestabilities();
                }),
                (Nt.getAllAngularRootElements = function () {
                  return t.getAllRootElements();
                }),
                Nt.frameworkStabilizers || (Nt.frameworkStabilizers = []),
                Nt.frameworkStabilizers.push(function (t) {
                  var e = Nt.getAllAngularTestabilities(),
                    n = e.length,
                    r = !1,
                    o = function (e) {
                      (r = r || e), 0 == --n && t(r);
                    };
                  e.forEach(function (t) {
                    t.whenStable(o);
                  });
                });
            }),
            (t.prototype.findTestabilityInTree = function (t, e, n) {
              if (null == e) return null;
              var r = t.getTestability(e);
              return null != r
                ? r
                : n
                ? gp().isShadowRoot(e)
                  ? this.findTestabilityInTree(t, gp().getHost(e), !0)
                  : this.findTestabilityInTree(t, gp().parentElement(e), !0)
                : null;
            }),
            t
          );
        })();
      function kp(t, e) {
        ("undefined" != typeof COMPILED && COMPILED) ||
          ((Nt.ng = Nt.ng || {})[t] = e);
      }
      var Mp = { ApplicationRef: Bi, NgZone: xi };
      function Rp(t) {
        return is(t);
      }
      var Ip = new Ot("EventManagerPlugins"),
        Ap = (function () {
          function t(t, e) {
            var n = this;
            (this._zone = e),
              (this._eventNameToPlugin = new Map()),
              t.forEach(function (t) {
                return (t.manager = n);
              }),
              (this._plugins = t.slice().reverse());
          }
          return (
            (t.prototype.addEventListener = function (t, e, n) {
              return this._findPluginFor(e).addEventListener(t, e, n);
            }),
            (t.prototype.addGlobalEventListener = function (t, e, n) {
              return this._findPluginFor(e).addGlobalEventListener(t, e, n);
            }),
            (t.prototype.getZone = function () {
              return this._zone;
            }),
            (t.prototype._findPluginFor = function (t) {
              var e = this._eventNameToPlugin.get(t);
              if (e) return e;
              for (var n = this._plugins, r = 0; r < n.length; r++) {
                var o = n[r];
                if (o.supports(t)) return this._eventNameToPlugin.set(t, o), o;
              }
              throw new Error("No event manager plugin found for event " + t);
            }),
            t
          );
        })(),
        Np = (function () {
          function t(t) {
            this._doc = t;
          }
          return (
            (t.prototype.addGlobalEventListener = function (t, e, n) {
              var r = gp().getGlobalEventTarget(this._doc, t);
              if (!r)
                throw new Error(
                  "Unsupported event target " + r + " for event " + e
                );
              return this.addEventListener(r, e, n);
            }),
            t
          );
        })(),
        Dp = (function () {
          function t() {
            this._stylesSet = new Set();
          }
          return (
            (t.prototype.addStyles = function (t) {
              var e = this,
                n = new Set();
              t.forEach(function (t) {
                e._stylesSet.has(t) || (e._stylesSet.add(t), n.add(t));
              }),
                this.onStylesAdded(n);
            }),
            (t.prototype.onStylesAdded = function (t) {}),
            (t.prototype.getAllStyles = function () {
              return Array.from(this._stylesSet);
            }),
            t
          );
        })(),
        jp = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              (n._doc = e),
              (n._hostNodes = new Set()),
              (n._styleNodes = new Set()),
              n._hostNodes.add(e.head),
              n
            );
          }
          return (
            o(e, t),
            (e.prototype._addStylesToHost = function (t, e) {
              var n = this;
              t.forEach(function (t) {
                var r = n._doc.createElement("style");
                (r.textContent = t), n._styleNodes.add(e.appendChild(r));
              });
            }),
            (e.prototype.addHost = function (t) {
              this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t);
            }),
            (e.prototype.removeHost = function (t) {
              this._hostNodes.delete(t);
            }),
            (e.prototype.onStylesAdded = function (t) {
              var e = this;
              this._hostNodes.forEach(function (n) {
                return e._addStylesToHost(t, n);
              });
            }),
            (e.prototype.ngOnDestroy = function () {
              this._styleNodes.forEach(function (t) {
                return gp().remove(t);
              });
            }),
            e
          );
        })(Dp),
        Lp = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        Fp = /%COMP%/g,
        Hp = "_nghost-%COMP%",
        Vp = "_ngcontent-%COMP%";
      function Up(t, e, n) {
        for (var r = 0; r < e.length; r++) {
          var o = e[r];
          Array.isArray(o) ? Up(t, o, n) : ((o = o.replace(Fp, t)), n.push(o));
        }
        return n;
      }
      function Bp(t) {
        return function (e) {
          !1 === t(e) && (e.preventDefault(), (e.returnValue = !1));
        };
      }
      var zp = (function () {
          function t(t, e) {
            (this.eventManager = t),
              (this.sharedStylesHost = e),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new qp(t));
          }
          return (
            (t.prototype.createRenderer = function (t, e) {
              if (!t || !e) return this.defaultRenderer;
              switch (e.encapsulation) {
                case Rt.Emulated:
                  var n = this.rendererByCompId.get(e.id);
                  return (
                    n ||
                      ((n = new Qp(
                        this.eventManager,
                        this.sharedStylesHost,
                        e
                      )),
                      this.rendererByCompId.set(e.id, n)),
                    n.applyToHost(t),
                    n
                  );
                case Rt.Native:
                case Rt.ShadowDom:
                  return new Kp(this.eventManager, this.sharedStylesHost, t, e);
                default:
                  if (!this.rendererByCompId.has(e.id)) {
                    var r = Up(e.id, e.styles, []);
                    this.sharedStylesHost.addStyles(r),
                      this.rendererByCompId.set(e.id, this.defaultRenderer);
                  }
                  return this.defaultRenderer;
              }
            }),
            (t.prototype.begin = function () {}),
            (t.prototype.end = function () {}),
            t
          );
        })(),
        qp = (function () {
          function t(t) {
            (this.eventManager = t), (this.data = Object.create(null));
          }
          return (
            (t.prototype.destroy = function () {}),
            (t.prototype.createElement = function (t, e) {
              return e
                ? document.createElementNS(Lp[e], t)
                : document.createElement(t);
            }),
            (t.prototype.createComment = function (t) {
              return document.createComment(t);
            }),
            (t.prototype.createText = function (t) {
              return document.createTextNode(t);
            }),
            (t.prototype.appendChild = function (t, e) {
              t.appendChild(e);
            }),
            (t.prototype.insertBefore = function (t, e, n) {
              t && t.insertBefore(e, n);
            }),
            (t.prototype.removeChild = function (t, e) {
              t && t.removeChild(e);
            }),
            (t.prototype.selectRootElement = function (t, e) {
              var n = "string" == typeof t ? document.querySelector(t) : t;
              if (!n)
                throw new Error(
                  'The selector "' + t + '" did not match any elements'
                );
              return e || (n.textContent = ""), n;
            }),
            (t.prototype.parentNode = function (t) {
              return t.parentNode;
            }),
            (t.prototype.nextSibling = function (t) {
              return t.nextSibling;
            }),
            (t.prototype.setAttribute = function (t, e, n, r) {
              if (r) {
                e = r + ":" + e;
                var o = Lp[r];
                o ? t.setAttributeNS(o, e, n) : t.setAttribute(e, n);
              } else t.setAttribute(e, n);
            }),
            (t.prototype.removeAttribute = function (t, e, n) {
              if (n) {
                var r = Lp[n];
                r ? t.removeAttributeNS(r, e) : t.removeAttribute(n + ":" + e);
              } else t.removeAttribute(e);
            }),
            (t.prototype.addClass = function (t, e) {
              t.classList.add(e);
            }),
            (t.prototype.removeClass = function (t, e) {
              t.classList.remove(e);
            }),
            (t.prototype.setStyle = function (t, e, n, r) {
              r & so.DashCase
                ? t.style.setProperty(e, n, r & so.Important ? "important" : "")
                : (t.style[e] = n);
            }),
            (t.prototype.removeStyle = function (t, e, n) {
              n & so.DashCase ? t.style.removeProperty(e) : (t.style[e] = "");
            }),
            (t.prototype.setProperty = function (t, e, n) {
              Yp(e, "property"), (t[e] = n);
            }),
            (t.prototype.setValue = function (t, e) {
              t.nodeValue = e;
            }),
            (t.prototype.listen = function (t, e, n) {
              return (
                Yp(e, "listener"),
                "string" == typeof t
                  ? this.eventManager.addGlobalEventListener(t, e, Bp(n))
                  : this.eventManager.addEventListener(t, e, Bp(n))
              );
            }),
            t
          );
        })(),
        Wp = "@".charCodeAt(0);
      function Yp(t, e) {
        if (t.charCodeAt(0) === Wp)
          throw new Error(
            "Found the synthetic " +
              e +
              " " +
              t +
              '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.'
          );
      }
      var Xp,
        Qp = (function (t) {
          function e(e, n, r) {
            var o = t.call(this, e) || this;
            o.component = r;
            var i = Up(r.id, r.styles, []);
            return (
              n.addStyles(i),
              (o.contentAttr = Vp.replace(Fp, r.id)),
              (o.hostAttr = Hp.replace(Fp, r.id)),
              o
            );
          }
          return (
            o(e, t),
            (e.prototype.applyToHost = function (e) {
              t.prototype.setAttribute.call(this, e, this.hostAttr, "");
            }),
            (e.prototype.createElement = function (e, n) {
              var r = t.prototype.createElement.call(this, e, n);
              return (
                t.prototype.setAttribute.call(this, r, this.contentAttr, ""), r
              );
            }),
            e
          );
        })(qp),
        Kp = (function (t) {
          function e(e, n, r, o) {
            var i = t.call(this, e) || this;
            (i.sharedStylesHost = n),
              (i.hostEl = r),
              (i.component = o),
              (i.shadowRoot =
                o.encapsulation === Rt.ShadowDom
                  ? r.attachShadow({ mode: "open" })
                  : r.createShadowRoot()),
              i.sharedStylesHost.addHost(i.shadowRoot);
            for (var s = Up(o.id, o.styles, []), a = 0; a < s.length; a++) {
              var l = document.createElement("style");
              (l.textContent = s[a]), i.shadowRoot.appendChild(l);
            }
            return i;
          }
          return (
            o(e, t),
            (e.prototype.nodeOrShadowRoot = function (t) {
              return t === this.hostEl ? this.shadowRoot : t;
            }),
            (e.prototype.destroy = function () {
              this.sharedStylesHost.removeHost(this.shadowRoot);
            }),
            (e.prototype.appendChild = function (e, n) {
              return t.prototype.appendChild.call(
                this,
                this.nodeOrShadowRoot(e),
                n
              );
            }),
            (e.prototype.insertBefore = function (e, n, r) {
              return t.prototype.insertBefore.call(
                this,
                this.nodeOrShadowRoot(e),
                n,
                r
              );
            }),
            (e.prototype.removeChild = function (e, n) {
              return t.prototype.removeChild.call(
                this,
                this.nodeOrShadowRoot(e),
                n
              );
            }),
            (e.prototype.parentNode = function (e) {
              return this.nodeOrShadowRoot(
                t.prototype.parentNode.call(this, this.nodeOrShadowRoot(e))
              );
            }),
            e
          );
        })(qp),
        Zp =
          ("undefined" != typeof Zone && Zone.__symbol__) ||
          function (t) {
            return "__zone_symbol__" + t;
          },
        Gp = Zp("addEventListener"),
        $p = Zp("removeEventListener"),
        Jp = {},
        th = "__zone_symbol__propagationStopped";
      "undefined" != typeof Zone &&
        Zone[Zp("BLACK_LISTED_EVENTS")] &&
        (Xp = {});
      var eh = function (t) {
          return !!Xp && Xp.hasOwnProperty(t);
        },
        nh = function (t) {
          var e = Jp[t.type];
          if (e) {
            var n = this[e];
            if (n) {
              var r = [t];
              if (1 === n.length)
                return (s = n[0]).zone !== Zone.current
                  ? s.zone.run(s.handler, this, r)
                  : s.handler.apply(this, r);
              for (
                var o = n.slice(), i = 0;
                i < o.length && !0 !== t[th];
                i++
              ) {
                var s;
                (s = o[i]).zone !== Zone.current
                  ? s.zone.run(s.handler, this, r)
                  : s.handler.apply(this, r);
              }
            }
          }
        },
        rh = (function (t) {
          function e(e, n, r) {
            var o = t.call(this, e) || this;
            return (
              (o.ngZone = n),
              (r &&
                (function (t) {
                  return t === cp;
                })(r)) ||
                o.patchEvent(),
              o
            );
          }
          return (
            o(e, t),
            (e.prototype.patchEvent = function () {
              if (
                "undefined" != typeof Event &&
                Event &&
                Event.prototype &&
                !Event.prototype.__zone_symbol__stopImmediatePropagation
              ) {
                var t =
                  (Event.prototype.__zone_symbol__stopImmediatePropagation =
                    Event.prototype.stopImmediatePropagation);
                Event.prototype.stopImmediatePropagation = function () {
                  this && (this[th] = !0), t && t.apply(this, arguments);
                };
              }
            }),
            (e.prototype.supports = function (t) {
              return !0;
            }),
            (e.prototype.addEventListener = function (t, e, n) {
              var r = this,
                o = n;
              if (!t[Gp] || (xi.isInAngularZone() && !eh(e)))
                t.addEventListener(e, o, !1);
              else {
                var i = Jp[e];
                i || (i = Jp[e] = Zp("ANGULAR" + e + "FALSE"));
                var s = t[i],
                  a = s && s.length > 0;
                s || (s = t[i] = []);
                var l = eh(e) ? Zone.root : Zone.current;
                if (0 === s.length) s.push({ zone: l, handler: o });
                else {
                  for (var u = !1, c = 0; c < s.length; c++)
                    if (s[c].handler === o) {
                      u = !0;
                      break;
                    }
                  u || s.push({ zone: l, handler: o });
                }
                a || t[Gp](e, nh, !1);
              }
              return function () {
                return r.removeEventListener(t, e, o);
              };
            }),
            (e.prototype.removeEventListener = function (t, e, n) {
              var r = t[$p];
              if (!r) return t.removeEventListener.apply(t, [e, n, !1]);
              var o = Jp[e],
                i = o && t[o];
              if (!i) return t.removeEventListener.apply(t, [e, n, !1]);
              for (var s = !1, a = 0; a < i.length; a++)
                if (i[a].handler === n) {
                  (s = !0), i.splice(a, 1);
                  break;
                }
              s
                ? 0 === i.length && r.apply(t, [e, nh, !1])
                : t.removeEventListener.apply(t, [e, n, !1]);
            }),
            e
          );
        })(Np),
        oh = {
          pan: !0,
          panstart: !0,
          panmove: !0,
          panend: !0,
          pancancel: !0,
          panleft: !0,
          panright: !0,
          panup: !0,
          pandown: !0,
          pinch: !0,
          pinchstart: !0,
          pinchmove: !0,
          pinchend: !0,
          pinchcancel: !0,
          pinchin: !0,
          pinchout: !0,
          press: !0,
          pressup: !0,
          rotate: !0,
          rotatestart: !0,
          rotatemove: !0,
          rotateend: !0,
          rotatecancel: !0,
          swipe: !0,
          swipeleft: !0,
          swiperight: !0,
          swipeup: !0,
          swipedown: !0,
          tap: !0,
        },
        ih = new Ot("HammerGestureConfig"),
        sh = new Ot("HammerLoader"),
        ah = (function () {
          function t() {
            (this.events = []), (this.overrides = {});
          }
          return (
            (t.prototype.buildHammer = function (t) {
              var e = new Hammer(t, this.options);
              for (var n in (e.get("pinch").set({ enable: !0 }),
              e.get("rotate").set({ enable: !0 }),
              this.overrides))
                e.get(n).set(this.overrides[n]);
              return e;
            }),
            t
          );
        })(),
        lh = (function (t) {
          function e(e, n, r, o) {
            var i = t.call(this, e) || this;
            return (i._config = n), (i.console = r), (i.loader = o), i;
          }
          return (
            o(e, t),
            (e.prototype.supports = function (t) {
              return !(
                (!oh.hasOwnProperty(t.toLowerCase()) &&
                  !this.isCustomEvent(t)) ||
                (!window.Hammer &&
                  !this.loader &&
                  (this.console.warn(
                    'The "' +
                      t +
                      '" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.'
                  ),
                  1))
              );
            }),
            (e.prototype.addEventListener = function (t, e, n) {
              var r = this,
                o = this.manager.getZone();
              if (((e = e.toLowerCase()), !window.Hammer && this.loader)) {
                var i = !1,
                  s = function () {
                    i = !0;
                  };
                return (
                  this.loader()
                    .then(function () {
                      if (!window.Hammer)
                        return (
                          r.console.warn(
                            "The custom HAMMER_LOADER completed, but Hammer.JS is not present."
                          ),
                          void (s = function () {})
                        );
                      i || (s = r.addEventListener(t, e, n));
                    })
                    .catch(function () {
                      r.console.warn(
                        'The "' +
                          e +
                          '" event cannot be bound because the custom Hammer.JS loader failed.'
                      ),
                        (s = function () {});
                    }),
                  function () {
                    s();
                  }
                );
              }
              return o.runOutsideAngular(function () {
                var i = r._config.buildHammer(t),
                  s = function (t) {
                    o.runGuarded(function () {
                      n(t);
                    });
                  };
                return (
                  i.on(e, s),
                  function () {
                    i.off(e, s), "function" == typeof i.destroy && i.destroy();
                  }
                );
              });
            }),
            (e.prototype.isCustomEvent = function (t) {
              return this._config.events.indexOf(t) > -1;
            }),
            e
          );
        })(Np),
        uh = ["alt", "control", "meta", "shift"],
        ch = {
          alt: function (t) {
            return t.altKey;
          },
          control: function (t) {
            return t.ctrlKey;
          },
          meta: function (t) {
            return t.metaKey;
          },
          shift: function (t) {
            return t.shiftKey;
          },
        },
        ph = (function (t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          var n;
          return (
            o(e, t),
            (n = e),
            (e.prototype.supports = function (t) {
              return null != n.parseEventName(t);
            }),
            (e.prototype.addEventListener = function (t, e, r) {
              var o = n.parseEventName(e),
                i = n.eventCallback(o.fullKey, r, this.manager.getZone());
              return this.manager.getZone().runOutsideAngular(function () {
                return gp().onAndCancel(t, o.domEventName, i);
              });
            }),
            (e.parseEventName = function (t) {
              var e = t.toLowerCase().split("."),
                r = e.shift();
              if (0 === e.length || ("keydown" !== r && "keyup" !== r))
                return null;
              var o = n._normalizeKey(e.pop()),
                i = "";
              if (
                (uh.forEach(function (t) {
                  var n = e.indexOf(t);
                  n > -1 && (e.splice(n, 1), (i += t + "."));
                }),
                (i += o),
                0 != e.length || 0 === o.length)
              )
                return null;
              var s = {};
              return (s.domEventName = r), (s.fullKey = i), s;
            }),
            (e.getEventFullKey = function (t) {
              var e = "",
                n = gp().getEventKey(t);
              return (
                " " === (n = n.toLowerCase())
                  ? (n = "space")
                  : "." === n && (n = "dot"),
                uh.forEach(function (r) {
                  r != n && (0, ch[r])(t) && (e += r + ".");
                }),
                (e += n)
              );
            }),
            (e.eventCallback = function (t, e, r) {
              return function (o) {
                n.getEventFullKey(o) === t &&
                  r.runGuarded(function () {
                    return e(o);
                  });
              };
            }),
            (e._normalizeKey = function (t) {
              switch (t) {
                case "esc":
                  return "escape";
                default:
                  return t;
              }
            }),
            e
          );
        })(Np),
        hh = (function () {
          return function () {};
        })(),
        fh = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (n._doc = e), n;
          }
          return (
            o(e, t),
            (e.prototype.sanitize = function (t, e) {
              if (null == e) return null;
              switch (t) {
                case Xo.NONE:
                  return e;
                case Xo.HTML:
                  return e instanceof gh
                    ? e.changingThisBreaksApplicationSecurity
                    : (this.checkNotSafeValue(e, "HTML"),
                      (function (t, e) {
                        var n = null;
                        try {
                          To = To || new Co(t);
                          var r = e ? String(e) : "";
                          n = To.getInertBodyElement(r);
                          var o = 5,
                            i = r;
                          do {
                            if (0 === o)
                              throw new Error(
                                "Failed to sanitize html because the input is unstable"
                              );
                            o--,
                              (r = i),
                              (i = n.innerHTML),
                              (n = To.getInertBodyElement(r));
                          } while (r !== i);
                          var s = new Lo(),
                            a = s.sanitizeChildren(Uo(n) || n);
                          return (
                            wo() &&
                              s.sanitizedSomething &&
                              console.warn(
                                "WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss)."
                              ),
                            a
                          );
                        } finally {
                          if (n)
                            for (var l = Uo(n) || n; l.firstChild; )
                              l.removeChild(l.firstChild);
                        }
                      })(this._doc, String(e)));
                case Xo.STYLE:
                  return e instanceof vh
                    ? e.changingThisBreaksApplicationSecurity
                    : (this.checkNotSafeValue(e, "Style"),
                      (function (t) {
                        if (!(t = String(t).trim())) return "";
                        var e = t.match(Zo);
                        return (e && xo(e[1]) === e[1]) ||
                          (t.match(Ko) &&
                            (function (t) {
                              for (
                                var e = !0, n = !0, r = 0;
                                r < t.length;
                                r++
                              ) {
                                var o = t.charAt(r);
                                "'" === o && n
                                  ? (e = !e)
                                  : '"' === o && e && (n = !n);
                              }
                              return e && n;
                            })(t))
                          ? t
                          : (wo() &&
                              console.warn(
                                "WARNING: sanitizing unsafe style value " +
                                  t +
                                  " (see http://g.co/ng/security#xss)."
                              ),
                            "unsafe");
                      })(e));
                case Xo.SCRIPT:
                  if (e instanceof yh)
                    return e.changingThisBreaksApplicationSecurity;
                  throw (
                    (this.checkNotSafeValue(e, "Script"),
                    new Error("unsafe value used in a script context"))
                  );
                case Xo.URL:
                  return e instanceof bh || e instanceof mh
                    ? e.changingThisBreaksApplicationSecurity
                    : (this.checkNotSafeValue(e, "URL"), xo(String(e)));
                case Xo.RESOURCE_URL:
                  if (e instanceof bh)
                    return e.changingThisBreaksApplicationSecurity;
                  throw (
                    (this.checkNotSafeValue(e, "ResourceURL"),
                    new Error(
                      "unsafe value used in a resource URL context (see http://g.co/ng/security#xss)"
                    ))
                  );
                default:
                  throw new Error(
                    "Unexpected SecurityContext " +
                      t +
                      " (see http://g.co/ng/security#xss)"
                  );
              }
            }),
            (e.prototype.checkNotSafeValue = function (t, e) {
              if (t instanceof dh)
                throw new Error(
                  "Required a safe " +
                    e +
                    ", got a " +
                    t.getTypeName() +
                    " (see http://g.co/ng/security#xss)"
                );
            }),
            (e.prototype.bypassSecurityTrustHtml = function (t) {
              return new gh(t);
            }),
            (e.prototype.bypassSecurityTrustStyle = function (t) {
              return new vh(t);
            }),
            (e.prototype.bypassSecurityTrustScript = function (t) {
              return new yh(t);
            }),
            (e.prototype.bypassSecurityTrustUrl = function (t) {
              return new mh(t);
            }),
            (e.prototype.bypassSecurityTrustResourceUrl = function (t) {
              return new bh(t);
            }),
            e
          );
        })(hh),
        dh = (function () {
          function t(t) {
            this.changingThisBreaksApplicationSecurity = t;
          }
          return (
            (t.prototype.toString = function () {
              return (
                "SafeValue must use [property]=binding: " +
                this.changingThisBreaksApplicationSecurity +
                " (see http://g.co/ng/security#xss)"
              );
            }),
            t
          );
        })(),
        gh = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            o(e, t),
            (e.prototype.getTypeName = function () {
              return "HTML";
            }),
            e
          );
        })(dh),
        vh = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            o(e, t),
            (e.prototype.getTypeName = function () {
              return "Style";
            }),
            e
          );
        })(dh),
        yh = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            o(e, t),
            (e.prototype.getTypeName = function () {
              return "Script";
            }),
            e
          );
        })(dh),
        mh = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            o(e, t),
            (e.prototype.getTypeName = function () {
              return "URL";
            }),
            e
          );
        })(dh),
        bh = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            o(e, t),
            (e.prototype.getTypeName = function () {
              return "ResourceURL";
            }),
            e
          );
        })(dh),
        _h = Fi(Cs, "browser", [
          { provide: hi, useValue: up },
          {
            provide: pi,
            useValue: function () {
              wp.makeCurrent(), Tp.init();
            },
            multi: !0,
          },
          { provide: Hc, useClass: xp, deps: [Sp] },
          {
            provide: Sp,
            useFactory: function () {
              return document;
            },
            deps: [],
          },
        ]);
      function wh() {
        return new ri();
      }
      var Ch = (function () {
        function t(t) {
          if (t)
            throw new Error(
              "BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead."
            );
        }
        var e;
        return (
          (e = t),
          (t.withServerTransition = function (t) {
            return {
              ngModule: e,
              providers: [
                { provide: li, useValue: t.appId },
                { provide: Pp, useExisting: li },
                Op,
              ],
            };
          }),
          t
        );
      })();
      "undefined" != typeof window && window;
      var Sh = (function () {
          return function (t, e) {
            (this.id = t), (this.url = e);
          };
        })(),
        Eh = (function (t) {
          function e(e, n, r, o) {
            void 0 === r && (r = "imperative"), void 0 === o && (o = null);
            var i = t.call(this, e, n) || this;
            return (i.navigationTrigger = r), (i.restoredState = o), i;
          }
          return (
            o(e, t),
            (e.prototype.toString = function () {
              return (
                "NavigationStart(id: " + this.id + ", url: '" + this.url + "')"
              );
            }),
            e
          );
        })(Sh),
        xh = (function (t) {
          function e(e, n, r) {
            var o = t.call(this, e, n) || this;
            return (o.urlAfterRedirects = r), o;
          }
          return (
            o(e, t),
            (e.prototype.toString = function () {
              return (
                "NavigationEnd(id: " +
                this.id +
                ", url: '" +
                this.url +
                "', urlAfterRedirects: '" +
                this.urlAfterRedirects +
                "')"
              );
            }),
            e
          );
        })(Sh),
        Ph = (function (t) {
          function e(e, n, r) {
            var o = t.call(this, e, n) || this;
            return (o.reason = r), o;
          }
          return (
            o(e, t),
            (e.prototype.toString = function () {
              return (
                "NavigationCancel(id: " + this.id + ", url: '" + this.url + "')"
              );
            }),
            e
          );
        })(Sh),
        Oh = (function (t) {
          function e(e, n, r) {
            var o = t.call(this, e, n) || this;
            return (o.error = r), o;
          }
          return (
            o(e, t),
            (e.prototype.toString = function () {
              return (
                "NavigationError(id: " +
                this.id +
                ", url: '" +
                this.url +
                "', error: " +
                this.error +
                ")"
              );
            }),
            e
          );
        })(Sh),
        Th = (function (t) {
          function e(e, n, r, o) {
            var i = t.call(this, e, n) || this;
            return (i.urlAfterRedirects = r), (i.state = o), i;
          }
          return (
            o(e, t),
            (e.prototype.toString = function () {
              return (
                "RoutesRecognized(id: " +
                this.id +
                ", url: '" +
                this.url +
                "', urlAfterRedirects: '" +
                this.urlAfterRedirects +
                "', state: " +
                this.state +
                ")"
              );
            }),
            e
          );
        })(Sh),
        kh = (function (t) {
          function e(e, n, r, o) {
            var i = t.call(this, e, n) || this;
            return (i.urlAfterRedirects = r), (i.state = o), i;
          }
          return (
            o(e, t),
            (e.prototype.toString = function () {
              return (
                "GuardsCheckStart(id: " +
                this.id +
                ", url: '" +
                this.url +
                "', urlAfterRedirects: '" +
                this.urlAfterRedirects +
                "', state: " +
                this.state +
                ")"
              );
            }),
            e
          );
        })(Sh),
        Mh = (function (t) {
          function e(e, n, r, o, i) {
            var s = t.call(this, e, n) || this;
            return (
              (s.urlAfterRedirects = r),
              (s.state = o),
              (s.shouldActivate = i),
              s
            );
          }
          return (
            o(e, t),
            (e.prototype.toString = function () {
              return (
                "GuardsCheckEnd(id: " +
                this.id +
                ", url: '" +
                this.url +
                "', urlAfterRedirects: '" +
                this.urlAfterRedirects +
                "', state: " +
                this.state +
                ", shouldActivate: " +
                this.shouldActivate +
                ")"
              );
            }),
            e
          );
        })(Sh),
        Rh = (function (t) {
          function e(e, n, r, o) {
            var i = t.call(this, e, n) || this;
            return (i.urlAfterRedirects = r), (i.state = o), i;
          }
          return (
            o(e, t),
            (e.prototype.toString = function () {
              return (
                "ResolveStart(id: " +
                this.id +
                ", url: '" +
                this.url +
                "', urlAfterRedirects: '" +
                this.urlAfterRedirects +
                "', state: " +
                this.state +
                ")"
              );
            }),
            e
          );
        })(Sh),
        Ih = (function (t) {
          function e(e, n, r, o) {
            var i = t.call(this, e, n) || this;
            return (i.urlAfterRedirects = r), (i.state = o), i;
          }
          return (
            o(e, t),
            (e.prototype.toString = function () {
              return (
                "ResolveEnd(id: " +
                this.id +
                ", url: '" +
                this.url +
                "', urlAfterRedirects: '" +
                this.urlAfterRedirects +
                "', state: " +
                this.state +
                ")"
              );
            }),
            e
          );
        })(Sh),
        Ah = (function () {
          function t(t) {
            this.route = t;
          }
          return (
            (t.prototype.toString = function () {
              return "RouteConfigLoadStart(path: " + this.route.path + ")";
            }),
            t
          );
        })(),
        Nh = (function () {
          function t(t) {
            this.route = t;
          }
          return (
            (t.prototype.toString = function () {
              return "RouteConfigLoadEnd(path: " + this.route.path + ")";
            }),
            t
          );
        })(),
        Dh = (function () {
          function t(t) {
            this.snapshot = t;
          }
          return (
            (t.prototype.toString = function () {
              return (
                "ChildActivationStart(path: '" +
                ((this.snapshot.routeConfig &&
                  this.snapshot.routeConfig.path) ||
                  "") +
                "')"
              );
            }),
            t
          );
        })(),
        jh = (function () {
          function t(t) {
            this.snapshot = t;
          }
          return (
            (t.prototype.toString = function () {
              return (
                "ChildActivationEnd(path: '" +
                ((this.snapshot.routeConfig &&
                  this.snapshot.routeConfig.path) ||
                  "") +
                "')"
              );
            }),
            t
          );
        })(),
        Lh = (function () {
          function t(t) {
            this.snapshot = t;
          }
          return (
            (t.prototype.toString = function () {
              return (
                "ActivationStart(path: '" +
                ((this.snapshot.routeConfig &&
                  this.snapshot.routeConfig.path) ||
                  "") +
                "')"
              );
            }),
            t
          );
        })(),
        Fh = (function () {
          function t(t) {
            this.snapshot = t;
          }
          return (
            (t.prototype.toString = function () {
              return (
                "ActivationEnd(path: '" +
                ((this.snapshot.routeConfig &&
                  this.snapshot.routeConfig.path) ||
                  "") +
                "')"
              );
            }),
            t
          );
        })(),
        Hh = (function () {
          function t(t, e, n) {
            (this.routerEvent = t), (this.position = e), (this.anchor = n);
          }
          return (
            (t.prototype.toString = function () {
              return (
                "Scroll(anchor: '" +
                this.anchor +
                "', position: '" +
                (this.position
                  ? this.position[0] + ", " + this.position[1]
                  : null) +
                "')"
              );
            }),
            t
          );
        })(),
        Vh = (function () {
          return function () {};
        })(),
        Uh = "primary",
        Bh = (function () {
          function t(t) {
            this.params = t || {};
          }
          return (
            (t.prototype.has = function (t) {
              return this.params.hasOwnProperty(t);
            }),
            (t.prototype.get = function (t) {
              if (this.has(t)) {
                var e = this.params[t];
                return Array.isArray(e) ? e[0] : e;
              }
              return null;
            }),
            (t.prototype.getAll = function (t) {
              if (this.has(t)) {
                var e = this.params[t];
                return Array.isArray(e) ? e : [e];
              }
              return [];
            }),
            Object.defineProperty(t.prototype, "keys", {
              get: function () {
                return Object.keys(this.params);
              },
              enumerable: !0,
              configurable: !0,
            }),
            t
          );
        })();
      function zh(t) {
        return new Bh(t);
      }
      var qh = "ngNavigationCancelingError";
      function Wh(t) {
        var e = Error("NavigationCancelingError: " + t);
        return (e[qh] = !0), e;
      }
      function Yh(t, e, n) {
        var r = n.path.split("/");
        if (r.length > t.length) return null;
        if ("full" === n.pathMatch && (e.hasChildren() || r.length < t.length))
          return null;
        for (var o = {}, i = 0; i < r.length; i++) {
          var s = r[i],
            a = t[i];
          if (s.startsWith(":")) o[s.substring(1)] = a;
          else if (s !== a.path) return null;
        }
        return { consumed: t.slice(0, r.length), posParams: o };
      }
      var Xh = (function () {
        return function (t, e) {
          (this.routes = t), (this.module = e);
        };
      })();
      function Qh(t, e) {
        void 0 === e && (e = "");
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          Kh(r, Zh(e, r));
        }
      }
      function Kh(t, e) {
        if (!t)
          throw new Error(
            "\n      Invalid configuration of route '" +
              e +
              "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    "
          );
        if (Array.isArray(t))
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': Array cannot be specified"
          );
        if (
          !t.component &&
          !t.children &&
          !t.loadChildren &&
          t.outlet &&
          t.outlet !== Uh
        )
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': a componentless route without children or loadChildren cannot have a named outlet set"
          );
        if (t.redirectTo && t.children)
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': redirectTo and children cannot be used together"
          );
        if (t.redirectTo && t.loadChildren)
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': redirectTo and loadChildren cannot be used together"
          );
        if (t.children && t.loadChildren)
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': children and loadChildren cannot be used together"
          );
        if (t.redirectTo && t.component)
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': redirectTo and component cannot be used together"
          );
        if (t.path && t.matcher)
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': path and matcher cannot be used together"
          );
        if (
          void 0 === t.redirectTo &&
          !t.component &&
          !t.children &&
          !t.loadChildren
        )
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "'. One of the following must be provided: component, redirectTo, children or loadChildren"
          );
        if (void 0 === t.path && void 0 === t.matcher)
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': routes must have either a path or a matcher specified"
          );
        if ("string" == typeof t.path && "/" === t.path.charAt(0))
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': path cannot start with a slash"
          );
        if ("" === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch)
          throw new Error(
            "Invalid configuration of route '{path: \"" +
              e +
              '", redirectTo: "' +
              t.redirectTo +
              "\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'."
          );
        if (
          void 0 !== t.pathMatch &&
          "full" !== t.pathMatch &&
          "prefix" !== t.pathMatch
        )
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': pathMatch can only be set to 'prefix' or 'full'"
          );
        t.children && Qh(t.children, e);
      }
      function Zh(t, e) {
        return e
          ? t || e.path
            ? t && !e.path
              ? t + "/"
              : !t && e.path
              ? e.path
              : t + "/" + e.path
            : ""
          : t;
      }
      function Gh(t) {
        var e = t.children && t.children.map(Gh),
          n = e ? i({}, t, { children: e }) : i({}, t);
        return (
          !n.component &&
            (e || n.loadChildren) &&
            n.outlet &&
            n.outlet !== Uh &&
            (n.component = Vh),
          n
        );
      }
      function $h(t, e) {
        var n,
          r = Object.keys(t),
          o = Object.keys(e);
        if (r.length != o.length) return !1;
        for (var i = 0; i < r.length; i++)
          if (t[(n = r[i])] !== e[n]) return !1;
        return !0;
      }
      function Jh(t) {
        return Array.prototype.concat.apply([], t);
      }
      function tf(t) {
        return t.length > 0 ? t[t.length - 1] : null;
      }
      function ef(t, e) {
        for (var n in t) t.hasOwnProperty(n) && e(t[n], n);
      }
      function nf(t) {
        return ii(t) ? t : oi(t) ? ot(Promise.resolve(t)) : Ku(t);
      }
      function rf(t, e, n) {
        return n
          ? (function (t, e) {
              return $h(t, e);
            })(t.queryParams, e.queryParams) &&
              (function t(e, n) {
                if (!lf(e.segments, n.segments)) return !1;
                if (e.numberOfChildren !== n.numberOfChildren) return !1;
                for (var r in n.children) {
                  if (!e.children[r]) return !1;
                  if (!t(e.children[r], n.children[r])) return !1;
                }
                return !0;
              })(t.root, e.root)
          : (function (t, e) {
              return (
                Object.keys(e).length <= Object.keys(t).length &&
                Object.keys(e).every(function (n) {
                  return e[n] === t[n];
                })
              );
            })(t.queryParams, e.queryParams) &&
              (function t(e, n) {
                return (function e(n, r, o) {
                  if (n.segments.length > o.length)
                    return (
                      !!lf((s = n.segments.slice(0, o.length)), o) &&
                      !r.hasChildren()
                    );
                  if (n.segments.length === o.length) {
                    if (!lf(n.segments, o)) return !1;
                    for (var i in r.children) {
                      if (!n.children[i]) return !1;
                      if (!t(n.children[i], r.children[i])) return !1;
                    }
                    return !0;
                  }
                  var s = o.slice(0, n.segments.length),
                    a = o.slice(n.segments.length);
                  return (
                    !!lf(n.segments, s) &&
                    !!n.children[Uh] &&
                    e(n.children[Uh], r, a)
                  );
                })(e, n, n.segments);
              })(t.root, e.root);
      }
      var of = (function () {
          function t(t, e, n) {
            (this.root = t), (this.queryParams = e), (this.fragment = n);
          }
          return (
            Object.defineProperty(t.prototype, "queryParamMap", {
              get: function () {
                return (
                  this._queryParamMap ||
                    (this._queryParamMap = zh(this.queryParams)),
                  this._queryParamMap
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.toString = function () {
              return hf.serialize(this);
            }),
            t
          );
        })(),
        sf = (function () {
          function t(t, e) {
            var n = this;
            (this.segments = t),
              (this.children = e),
              (this.parent = null),
              ef(e, function (t, e) {
                return (t.parent = n);
              });
          }
          return (
            (t.prototype.hasChildren = function () {
              return this.numberOfChildren > 0;
            }),
            Object.defineProperty(t.prototype, "numberOfChildren", {
              get: function () {
                return Object.keys(this.children).length;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.toString = function () {
              return ff(this);
            }),
            t
          );
        })(),
        af = (function () {
          function t(t, e) {
            (this.path = t), (this.parameters = e);
          }
          return (
            Object.defineProperty(t.prototype, "parameterMap", {
              get: function () {
                return (
                  this._parameterMap ||
                    (this._parameterMap = zh(this.parameters)),
                  this._parameterMap
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.toString = function () {
              return bf(this);
            }),
            t
          );
        })();
      function lf(t, e) {
        return (
          t.length === e.length &&
          t.every(function (t, n) {
            return t.path === e[n].path;
          })
        );
      }
      function uf(t, e) {
        var n = [];
        return (
          ef(t.children, function (t, r) {
            r === Uh && (n = n.concat(e(t, r)));
          }),
          ef(t.children, function (t, r) {
            r !== Uh && (n = n.concat(e(t, r)));
          }),
          n
        );
      }
      var cf = (function () {
          return function () {};
        })(),
        pf = (function () {
          function t() {}
          return (
            (t.prototype.parse = function (t) {
              var e = new Ef(t);
              return new of(
                e.parseRootSegment(),
                e.parseQueryParams(),
                e.parseFragment()
              );
            }),
            (t.prototype.serialize = function (t) {
              var e, n;
              return (
                "/" +
                (function t(e, n) {
                  if (!e.hasChildren()) return ff(e);
                  if (n) {
                    var r = e.children[Uh] ? t(e.children[Uh], !1) : "",
                      o = [];
                    return (
                      ef(e.children, function (e, n) {
                        n !== Uh && o.push(n + ":" + t(e, !1));
                      }),
                      o.length > 0 ? r + "(" + o.join("//") + ")" : r
                    );
                  }
                  var i = uf(e, function (n, r) {
                    return r === Uh
                      ? [t(e.children[Uh], !1)]
                      : [r + ":" + t(n, !1)];
                  });
                  return ff(e) + "/(" + i.join("//") + ")";
                })(t.root, !0) +
                ((e = t.queryParams),
                (n = Object.keys(e).map(function (t) {
                  var n = e[t];
                  return Array.isArray(n)
                    ? n
                        .map(function (e) {
                          return gf(t) + "=" + gf(e);
                        })
                        .join("&")
                    : gf(t) + "=" + gf(n);
                })).length
                  ? "?" + n.join("&")
                  : "") +
                ("string" == typeof t.fragment
                  ? "#" + encodeURI(t.fragment)
                  : "")
              );
            }),
            t
          );
        })(),
        hf = new pf();
      function ff(t) {
        return t.segments
          .map(function (t) {
            return bf(t);
          })
          .join("/");
      }
      function df(t) {
        return encodeURIComponent(t)
          .replace(/%40/g, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",");
      }
      function gf(t) {
        return df(t).replace(/%3B/gi, ";");
      }
      function vf(t) {
        return df(t)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29")
          .replace(/%26/gi, "&");
      }
      function yf(t) {
        return decodeURIComponent(t);
      }
      function mf(t) {
        return yf(t.replace(/\+/g, "%20"));
      }
      function bf(t) {
        return (
          "" +
          vf(t.path) +
          ((e = t.parameters),
          Object.keys(e)
            .map(function (t) {
              return ";" + vf(t) + "=" + vf(e[t]);
            })
            .join(""))
        );
        var e;
      }
      var _f = /^[^\/()?;=#]+/;
      function wf(t) {
        var e = t.match(_f);
        return e ? e[0] : "";
      }
      var Cf = /^[^=?&#]+/,
        Sf = /^[^?&#]+/,
        Ef = (function () {
          function t(t) {
            (this.url = t), (this.remaining = t);
          }
          return (
            (t.prototype.parseRootSegment = function () {
              return (
                this.consumeOptional("/"),
                "" === this.remaining ||
                this.peekStartsWith("?") ||
                this.peekStartsWith("#")
                  ? new sf([], {})
                  : new sf([], this.parseChildren())
              );
            }),
            (t.prototype.parseQueryParams = function () {
              var t = {};
              if (this.consumeOptional("?"))
                do {
                  this.parseQueryParam(t);
                } while (this.consumeOptional("&"));
              return t;
            }),
            (t.prototype.parseFragment = function () {
              return this.consumeOptional("#")
                ? decodeURIComponent(this.remaining)
                : null;
            }),
            (t.prototype.parseChildren = function () {
              if ("" === this.remaining) return {};
              this.consumeOptional("/");
              var t = [];
              for (
                this.peekStartsWith("(") || t.push(this.parseSegment());
                this.peekStartsWith("/") &&
                !this.peekStartsWith("//") &&
                !this.peekStartsWith("/(");

              )
                this.capture("/"), t.push(this.parseSegment());
              var e = {};
              this.peekStartsWith("/(") &&
                (this.capture("/"), (e = this.parseParens(!0)));
              var n = {};
              return (
                this.peekStartsWith("(") && (n = this.parseParens(!1)),
                (t.length > 0 || Object.keys(e).length > 0) &&
                  (n[Uh] = new sf(t, e)),
                n
              );
            }),
            (t.prototype.parseSegment = function () {
              var t = wf(this.remaining);
              if ("" === t && this.peekStartsWith(";"))
                throw new Error(
                  "Empty path url segment cannot have parameters: '" +
                    this.remaining +
                    "'."
                );
              return this.capture(t), new af(yf(t), this.parseMatrixParams());
            }),
            (t.prototype.parseMatrixParams = function () {
              for (var t = {}; this.consumeOptional(";"); ) this.parseParam(t);
              return t;
            }),
            (t.prototype.parseParam = function (t) {
              var e = wf(this.remaining);
              if (e) {
                this.capture(e);
                var n = "";
                if (this.consumeOptional("=")) {
                  var r = wf(this.remaining);
                  r && this.capture((n = r));
                }
                t[yf(e)] = yf(n);
              }
            }),
            (t.prototype.parseQueryParam = function (t) {
              var e,
                n = (e = this.remaining.match(Cf)) ? e[0] : "";
              if (n) {
                this.capture(n);
                var r = "";
                if (this.consumeOptional("=")) {
                  var o = (function (t) {
                    var e = t.match(Sf);
                    return e ? e[0] : "";
                  })(this.remaining);
                  o && this.capture((r = o));
                }
                var i = mf(n),
                  s = mf(r);
                if (t.hasOwnProperty(i)) {
                  var a = t[i];
                  Array.isArray(a) || (t[i] = a = [a]), a.push(s);
                } else t[i] = s;
              }
            }),
            (t.prototype.parseParens = function (t) {
              var e = {};
              for (
                this.capture("(");
                !this.consumeOptional(")") && this.remaining.length > 0;

              ) {
                var n = wf(this.remaining),
                  r = this.remaining[n.length];
                if ("/" !== r && ")" !== r && ";" !== r)
                  throw new Error("Cannot parse url '" + this.url + "'");
                var o = void 0;
                n.indexOf(":") > -1
                  ? ((o = n.substr(0, n.indexOf(":"))),
                    this.capture(o),
                    this.capture(":"))
                  : t && (o = Uh);
                var i = this.parseChildren();
                (e[o] = 1 === Object.keys(i).length ? i[Uh] : new sf([], i)),
                  this.consumeOptional("//");
              }
              return e;
            }),
            (t.prototype.peekStartsWith = function (t) {
              return this.remaining.startsWith(t);
            }),
            (t.prototype.consumeOptional = function (t) {
              return (
                !!this.peekStartsWith(t) &&
                ((this.remaining = this.remaining.substring(t.length)), !0)
              );
            }),
            (t.prototype.capture = function (t) {
              if (!this.consumeOptional(t))
                throw new Error('Expected "' + t + '".');
            }),
            t
          );
        })(),
        xf = (function () {
          function t(t) {
            this._root = t;
          }
          return (
            Object.defineProperty(t.prototype, "root", {
              get: function () {
                return this._root.value;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.parent = function (t) {
              var e = this.pathFromRoot(t);
              return e.length > 1 ? e[e.length - 2] : null;
            }),
            (t.prototype.children = function (t) {
              var e = Pf(t, this._root);
              return e
                ? e.children.map(function (t) {
                    return t.value;
                  })
                : [];
            }),
            (t.prototype.firstChild = function (t) {
              var e = Pf(t, this._root);
              return e && e.children.length > 0 ? e.children[0].value : null;
            }),
            (t.prototype.siblings = function (t) {
              var e = Of(t, this._root);
              return e.length < 2
                ? []
                : e[e.length - 2].children
                    .map(function (t) {
                      return t.value;
                    })
                    .filter(function (e) {
                      return e !== t;
                    });
            }),
            (t.prototype.pathFromRoot = function (t) {
              return Of(t, this._root).map(function (t) {
                return t.value;
              });
            }),
            t
          );
        })();
      function Pf(t, e) {
        var n, r;
        if (t === e.value) return e;
        try {
          for (var o = l(e.children), i = o.next(); !i.done; i = o.next()) {
            var s = Pf(t, i.value);
            if (s) return s;
          }
        } catch (a) {
          n = { error: a };
        } finally {
          try {
            i && !i.done && (r = o.return) && r.call(o);
          } finally {
            if (n) throw n.error;
          }
        }
        return null;
      }
      function Of(t, e) {
        var n, r;
        if (t === e.value) return [e];
        try {
          for (var o = l(e.children), i = o.next(); !i.done; i = o.next()) {
            var s = Of(t, i.value);
            if (s.length) return s.unshift(e), s;
          }
        } catch (a) {
          n = { error: a };
        } finally {
          try {
            i && !i.done && (r = o.return) && r.call(o);
          } finally {
            if (n) throw n.error;
          }
        }
        return [];
      }
      var Tf = (function () {
        function t(t, e) {
          (this.value = t), (this.children = e);
        }
        return (
          (t.prototype.toString = function () {
            return "TreeNode(" + this.value + ")";
          }),
          t
        );
      })();
      function kf(t) {
        var e = {};
        return (
          t &&
            t.children.forEach(function (t) {
              return (e[t.value.outlet] = t);
            }),
          e
        );
      }
      var Mf = (function (t) {
        function e(e, n) {
          var r = t.call(this, e) || this;
          return (r.snapshot = n), jf(r, e), r;
        }
        return (
          o(e, t),
          (e.prototype.toString = function () {
            return this.snapshot.toString();
          }),
          e
        );
      })(xf);
      function Rf(t, e) {
        var n = (function (t, e) {
            var n = new Nf([], {}, {}, "", {}, Uh, e, null, t.root, -1, {});
            return new Df("", new Tf(n, []));
          })(t, e),
          r = new Zu([new af("", {})]),
          o = new Zu({}),
          i = new Zu({}),
          s = new Zu({}),
          a = new Zu(""),
          l = new If(r, o, s, a, i, Uh, e, n.root);
        return (l.snapshot = n.root), new Mf(new Tf(l, []), n);
      }
      var If = (function () {
        function t(t, e, n, r, o, i, s, a) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = o),
            (this.outlet = i),
            (this.component = s),
            (this._futureSnapshot = a);
        }
        return (
          Object.defineProperty(t.prototype, "routeConfig", {
            get: function () {
              return this._futureSnapshot.routeConfig;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "root", {
            get: function () {
              return this._routerState.root;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "parent", {
            get: function () {
              return this._routerState.parent(this);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "firstChild", {
            get: function () {
              return this._routerState.firstChild(this);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "children", {
            get: function () {
              return this._routerState.children(this);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "pathFromRoot", {
            get: function () {
              return this._routerState.pathFromRoot(this);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "paramMap", {
            get: function () {
              return (
                this._paramMap ||
                  (this._paramMap = this.params.pipe(
                    tt(function (t) {
                      return zh(t);
                    })
                  )),
                this._paramMap
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "queryParamMap", {
            get: function () {
              return (
                this._queryParamMap ||
                  (this._queryParamMap = this.queryParams.pipe(
                    tt(function (t) {
                      return zh(t);
                    })
                  )),
                this._queryParamMap
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.toString = function () {
            return this.snapshot
              ? this.snapshot.toString()
              : "Future(" + this._futureSnapshot + ")";
          }),
          t
        );
      })();
      function Af(t, e) {
        void 0 === e && (e = "emptyOnly");
        var n = t.pathFromRoot,
          r = 0;
        if ("always" !== e)
          for (r = n.length - 1; r >= 1; ) {
            var o = n[r],
              s = n[r - 1];
            if (o.routeConfig && "" === o.routeConfig.path) r--;
            else {
              if (s.component) break;
              r--;
            }
          }
        return (function (t) {
          return t.reduce(
            function (t, e) {
              return {
                params: i({}, t.params, e.params),
                data: i({}, t.data, e.data),
                resolve: i({}, t.resolve, e._resolvedData),
              };
            },
            { params: {}, data: {}, resolve: {} }
          );
        })(n.slice(r));
      }
      var Nf = (function () {
          function t(t, e, n, r, o, i, s, a, l, u, c) {
            (this.url = t),
              (this.params = e),
              (this.queryParams = n),
              (this.fragment = r),
              (this.data = o),
              (this.outlet = i),
              (this.component = s),
              (this.routeConfig = a),
              (this._urlSegment = l),
              (this._lastPathIndex = u),
              (this._resolve = c);
          }
          return (
            Object.defineProperty(t.prototype, "root", {
              get: function () {
                return this._routerState.root;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "parent", {
              get: function () {
                return this._routerState.parent(this);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "firstChild", {
              get: function () {
                return this._routerState.firstChild(this);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "children", {
              get: function () {
                return this._routerState.children(this);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "pathFromRoot", {
              get: function () {
                return this._routerState.pathFromRoot(this);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "paramMap", {
              get: function () {
                return (
                  this._paramMap || (this._paramMap = zh(this.params)),
                  this._paramMap
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "queryParamMap", {
              get: function () {
                return (
                  this._queryParamMap ||
                    (this._queryParamMap = zh(this.queryParams)),
                  this._queryParamMap
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.toString = function () {
              return (
                "Route(url:'" +
                this.url
                  .map(function (t) {
                    return t.toString();
                  })
                  .join("/") +
                "', path:'" +
                (this.routeConfig ? this.routeConfig.path : "") +
                "')"
              );
            }),
            t
          );
        })(),
        Df = (function (t) {
          function e(e, n) {
            var r = t.call(this, n) || this;
            return (r.url = e), jf(r, n), r;
          }
          return (
            o(e, t),
            (e.prototype.toString = function () {
              return Lf(this._root);
            }),
            e
          );
        })(xf);
      function jf(t, e) {
        (e.value._routerState = t),
          e.children.forEach(function (e) {
            return jf(t, e);
          });
      }
      function Lf(t) {
        var e =
          t.children.length > 0
            ? " { " + t.children.map(Lf).join(", ") + " } "
            : "";
        return "" + t.value + e;
      }
      function Ff(t) {
        if (t.snapshot) {
          var e = t.snapshot,
            n = t._futureSnapshot;
          (t.snapshot = n),
            $h(e.queryParams, n.queryParams) ||
              t.queryParams.next(n.queryParams),
            e.fragment !== n.fragment && t.fragment.next(n.fragment),
            $h(e.params, n.params) || t.params.next(n.params),
            (function (t, e) {
              if (t.length !== e.length) return !1;
              for (var n = 0; n < t.length; ++n) if (!$h(t[n], e[n])) return !1;
              return !0;
            })(e.url, n.url) || t.url.next(n.url),
            $h(e.data, n.data) || t.data.next(n.data);
        } else
          (t.snapshot = t._futureSnapshot), t.data.next(t._futureSnapshot.data);
      }
      function Hf(t, e) {
        var n, r;
        return (
          $h(t.params, e.params) &&
          lf((n = t.url), (r = e.url)) &&
          n.every(function (t, e) {
            return $h(t.parameters, r[e].parameters);
          }) &&
          !(!t.parent != !e.parent) &&
          (!t.parent || Hf(t.parent, e.parent))
        );
      }
      function Vf(t) {
        return (
          "object" == typeof t && null != t && !t.outlets && !t.segmentPath
        );
      }
      function Uf(t, e, n, r, o) {
        var i = {};
        return (
          r &&
            ef(r, function (t, e) {
              i[e] = Array.isArray(t)
                ? t.map(function (t) {
                    return "" + t;
                  })
                : "" + t;
            }),
          new of(
            n.root === t
              ? e
              : (function t(e, n, r) {
                  var o = {};
                  return (
                    ef(e.children, function (e, i) {
                      o[i] = e === n ? r : t(e, n, r);
                    }),
                    new sf(e.segments, o)
                  );
                })(n.root, t, e),
            i,
            o
          )
        );
      }
      var Bf = (function () {
          function t(t, e, n) {
            if (
              ((this.isAbsolute = t),
              (this.numberOfDoubleDots = e),
              (this.commands = n),
              t && n.length > 0 && Vf(n[0]))
            )
              throw new Error("Root segment cannot have matrix parameters");
            var r = n.find(function (t) {
              return "object" == typeof t && null != t && t.outlets;
            });
            if (r && r !== tf(n))
              throw new Error("{outlets:{}} has to be the last command");
          }
          return (
            (t.prototype.toRoot = function () {
              return (
                this.isAbsolute &&
                1 === this.commands.length &&
                "/" == this.commands[0]
              );
            }),
            t
          );
        })(),
        zf = (function () {
          return function (t, e, n) {
            (this.segmentGroup = t),
              (this.processChildren = e),
              (this.index = n);
          };
        })();
      function qf(t) {
        return "object" == typeof t && null != t && t.outlets
          ? t.outlets[Uh]
          : "" + t;
      }
      function Wf(t, e, n) {
        if (
          (t || (t = new sf([], {})),
          0 === t.segments.length && t.hasChildren())
        )
          return Yf(t, e, n);
        var r = (function (t, e, n) {
            for (
              var r = 0,
                o = e,
                i = { match: !1, pathIndex: 0, commandIndex: 0 };
              o < t.segments.length;

            ) {
              if (r >= n.length) return i;
              var s = t.segments[o],
                a = qf(n[r]),
                l = r < n.length - 1 ? n[r + 1] : null;
              if (o > 0 && void 0 === a) break;
              if (a && l && "object" == typeof l && void 0 === l.outlets) {
                if (!Zf(a, l, s)) return i;
                r += 2;
              } else {
                if (!Zf(a, {}, s)) return i;
                r++;
              }
              o++;
            }
            return { match: !0, pathIndex: o, commandIndex: r };
          })(t, e, n),
          o = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < t.segments.length) {
          var i = new sf(t.segments.slice(0, r.pathIndex), {});
          return (
            (i.children[Uh] = new sf(
              t.segments.slice(r.pathIndex),
              t.children
            )),
            Yf(i, 0, o)
          );
        }
        return r.match && 0 === o.length
          ? new sf(t.segments, {})
          : r.match && !t.hasChildren()
          ? Xf(t, e, n)
          : r.match
          ? Yf(t, 0, o)
          : Xf(t, e, n);
      }
      function Yf(t, e, n) {
        if (0 === n.length) return new sf(t.segments, {});
        var r = (function (t) {
            var e, n;
            return "object" != typeof t[0]
              ? (((e = {})[Uh] = t), e)
              : void 0 === t[0].outlets
              ? (((n = {})[Uh] = t), n)
              : t[0].outlets;
          })(n),
          o = {};
        return (
          ef(r, function (n, r) {
            null !== n && (o[r] = Wf(t.children[r], e, n));
          }),
          ef(t.children, function (t, e) {
            void 0 === r[e] && (o[e] = t);
          }),
          new sf(t.segments, o)
        );
      }
      function Xf(t, e, n) {
        for (var r = t.segments.slice(0, e), o = 0; o < n.length; ) {
          if ("object" == typeof n[o] && void 0 !== n[o].outlets) {
            var i = Qf(n[o].outlets);
            return new sf(r, i);
          }
          if (0 === o && Vf(n[0]))
            r.push(new af(t.segments[e].path, n[0])), o++;
          else {
            var s = qf(n[o]),
              a = o < n.length - 1 ? n[o + 1] : null;
            s && a && Vf(a)
              ? (r.push(new af(s, Kf(a))), (o += 2))
              : (r.push(new af(s, {})), o++);
          }
        }
        return new sf(r, {});
      }
      function Qf(t) {
        var e = {};
        return (
          ef(t, function (t, n) {
            null !== t && (e[n] = Xf(new sf([], {}), 0, t));
          }),
          e
        );
      }
      function Kf(t) {
        var e = {};
        return (
          ef(t, function (t, n) {
            return (e[n] = "" + t);
          }),
          e
        );
      }
      function Zf(t, e, n) {
        return t == n.path && $h(e, n.parameters);
      }
      var Gf = (function () {
        function t(t, e, n, r) {
          (this.routeReuseStrategy = t),
            (this.futureState = e),
            (this.currState = n),
            (this.forwardEvent = r);
        }
        return (
          (t.prototype.activate = function (t) {
            var e = this.futureState._root,
              n = this.currState ? this.currState._root : null;
            this.deactivateChildRoutes(e, n, t),
              Ff(this.futureState.root),
              this.activateChildRoutes(e, n, t);
          }),
          (t.prototype.deactivateChildRoutes = function (t, e, n) {
            var r = this,
              o = kf(e);
            t.children.forEach(function (t) {
              var e = t.value.outlet;
              r.deactivateRoutes(t, o[e], n), delete o[e];
            }),
              ef(o, function (t, e) {
                r.deactivateRouteAndItsChildren(t, n);
              });
          }),
          (t.prototype.deactivateRoutes = function (t, e, n) {
            var r = t.value,
              o = e ? e.value : null;
            if (r === o)
              if (r.component) {
                var i = n.getContext(r.outlet);
                i && this.deactivateChildRoutes(t, e, i.children);
              } else this.deactivateChildRoutes(t, e, n);
            else o && this.deactivateRouteAndItsChildren(e, n);
          }),
          (t.prototype.deactivateRouteAndItsChildren = function (t, e) {
            this.routeReuseStrategy.shouldDetach(t.value.snapshot)
              ? this.detachAndStoreRouteSubtree(t, e)
              : this.deactivateRouteAndOutlet(t, e);
          }),
          (t.prototype.detachAndStoreRouteSubtree = function (t, e) {
            var n = e.getContext(t.value.outlet);
            if (n && n.outlet) {
              var r = n.outlet.detach(),
                o = n.children.onOutletDeactivated();
              this.routeReuseStrategy.store(t.value.snapshot, {
                componentRef: r,
                route: t,
                contexts: o,
              });
            }
          }),
          (t.prototype.deactivateRouteAndOutlet = function (t, e) {
            var n = this,
              r = e.getContext(t.value.outlet);
            if (r) {
              var o = kf(t),
                i = t.value.component ? r.children : e;
              ef(o, function (t, e) {
                return n.deactivateRouteAndItsChildren(t, i);
              }),
                r.outlet &&
                  (r.outlet.deactivate(), r.children.onOutletDeactivated());
            }
          }),
          (t.prototype.activateChildRoutes = function (t, e, n) {
            var r = this,
              o = kf(e);
            t.children.forEach(function (t) {
              r.activateRoutes(t, o[t.value.outlet], n),
                r.forwardEvent(new Fh(t.value.snapshot));
            }),
              t.children.length && this.forwardEvent(new jh(t.value.snapshot));
          }),
          (t.prototype.activateRoutes = function (t, e, n) {
            var r = t.value,
              o = e ? e.value : null;
            if ((Ff(r), r === o))
              if (r.component) {
                var i = n.getOrCreateContext(r.outlet);
                this.activateChildRoutes(t, e, i.children);
              } else this.activateChildRoutes(t, e, n);
            else if (r.component)
              if (
                ((i = n.getOrCreateContext(r.outlet)),
                this.routeReuseStrategy.shouldAttach(r.snapshot))
              ) {
                var s = this.routeReuseStrategy.retrieve(r.snapshot);
                this.routeReuseStrategy.store(r.snapshot, null),
                  i.children.onOutletReAttached(s.contexts),
                  (i.attachRef = s.componentRef),
                  (i.route = s.route.value),
                  i.outlet && i.outlet.attach(s.componentRef, s.route.value),
                  $f(s.route);
              } else {
                var a = (function (t) {
                    for (var e = r.snapshot.parent; e; e = e.parent) {
                      var n = e.routeConfig;
                      if (n && n._loadedConfig) return n._loadedConfig;
                      if (n && n.component) return null;
                    }
                    return null;
                  })(),
                  l = a ? a.module.componentFactoryResolver : null;
                (i.attachRef = null),
                  (i.route = r),
                  (i.resolver = l),
                  i.outlet && i.outlet.activateWith(r, l),
                  this.activateChildRoutes(t, null, i.children);
              }
            else this.activateChildRoutes(t, null, n);
          }),
          t
        );
      })();
      function $f(t) {
        Ff(t.value), t.children.forEach($f);
      }
      function Jf(t) {
        return "function" == typeof t;
      }
      function td(t) {
        return t instanceof of;
      }
      var ed = (function () {
          return function (t) {
            this.segmentGroup = t || null;
          };
        })(),
        nd = (function () {
          return function (t) {
            this.urlTree = t;
          };
        })();
      function rd(t) {
        return new A(function (e) {
          return e.error(new ed(t));
        });
      }
      function od(t) {
        return new A(function (e) {
          return e.error(new nd(t));
        });
      }
      function id(t) {
        return new A(function (e) {
          return e.error(
            new Error(
              "Only absolute redirects can have named outlets. redirectTo: '" +
                t +
                "'"
            )
          );
        });
      }
      var sd = (function () {
        function t(t, e, n, r, o) {
          (this.configLoader = e),
            (this.urlSerializer = n),
            (this.urlTree = r),
            (this.config = o),
            (this.allowRedirects = !0),
            (this.ngModule = t.get(tr));
        }
        return (
          (t.prototype.apply = function () {
            var t = this;
            return this.expandSegmentGroup(
              this.ngModule,
              this.config,
              this.urlTree.root,
              Uh
            )
              .pipe(
                tt(function (e) {
                  return t.createUrlTree(
                    e,
                    t.urlTree.queryParams,
                    t.urlTree.fragment
                  );
                })
              )
              .pipe(
                wc(function (e) {
                  if (e instanceof nd)
                    return (t.allowRedirects = !1), t.match(e.urlTree);
                  if (e instanceof ed) throw t.noMatchError(e);
                  throw e;
                })
              );
          }),
          (t.prototype.match = function (t) {
            var e = this;
            return this.expandSegmentGroup(
              this.ngModule,
              this.config,
              t.root,
              Uh
            )
              .pipe(
                tt(function (n) {
                  return e.createUrlTree(n, t.queryParams, t.fragment);
                })
              )
              .pipe(
                wc(function (t) {
                  if (t instanceof ed) throw e.noMatchError(t);
                  throw t;
                })
              );
          }),
          (t.prototype.noMatchError = function (t) {
            return new Error(
              "Cannot match any routes. URL Segment: '" + t.segmentGroup + "'"
            );
          }),
          (t.prototype.createUrlTree = function (t, e, n) {
            var r,
              o =
                t.segments.length > 0 ? new sf([], (((r = {})[Uh] = t), r)) : t;
            return new of(o, e, n);
          }),
          (t.prototype.expandSegmentGroup = function (t, e, n, r) {
            return 0 === n.segments.length && n.hasChildren()
              ? this.expandChildren(t, e, n).pipe(
                  tt(function (t) {
                    return new sf([], t);
                  })
                )
              : this.expandSegment(t, n, e, n.segments, r, !0);
          }),
          (t.prototype.expandChildren = function (t, e, n) {
            var r = this;
            return (function (n, o) {
              if (0 === Object.keys(n).length) return Ku({});
              var i = [],
                s = [],
                a = {};
              return (
                ef(n, function (n, o) {
                  var l,
                    u,
                    c = ((l = o),
                    (u = n),
                    r.expandSegmentGroup(t, e, u, l)).pipe(
                      tt(function (t) {
                        return (a[o] = t);
                      })
                    );
                  o === Uh ? i.push(c) : s.push(c);
                }),
                Ku.apply(null, i.concat(s)).pipe(
                  rc(),
                  _c(),
                  tt(function () {
                    return a;
                  })
                )
              );
            })(n.children);
          }),
          (t.prototype.expandSegment = function (t, e, n, r, o, i) {
            var s = this;
            return Ku.apply(void 0, c(n)).pipe(
              tt(function (a) {
                return s.expandSegmentAgainstRoute(t, e, n, a, r, o, i).pipe(
                  wc(function (t) {
                    if (t instanceof ed) return Ku(null);
                    throw t;
                  })
                );
              }),
              rc(),
              Oc(function (t) {
                return !!t;
              }),
              wc(function (t, n) {
                if (t instanceof $u || "EmptyError" === t.name) {
                  if (s.noLeftoversInUrl(e, r, o)) return Ku(new sf([], {}));
                  throw new ed(e);
                }
                throw t;
              })
            );
          }),
          (t.prototype.noLeftoversInUrl = function (t, e, n) {
            return 0 === e.length && !t.children[n];
          }),
          (t.prototype.expandSegmentAgainstRoute = function (
            t,
            e,
            n,
            r,
            o,
            i,
            s
          ) {
            return cd(r) !== i
              ? rd(e)
              : void 0 === r.redirectTo
              ? this.matchSegmentAgainstRoute(t, e, r, o)
              : s && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, o, i)
              : rd(e);
          }),
          (t.prototype.expandSegmentAgainstRouteUsingRedirect = function (
            t,
            e,
            n,
            r,
            o,
            i
          ) {
            return "**" === r.path
              ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(
                  t,
                  n,
                  r,
                  i
                )
              : this.expandRegularSegmentAgainstRouteUsingRedirect(
                  t,
                  e,
                  n,
                  r,
                  o,
                  i
                );
          }),
          (t.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect =
            function (t, e, n, r) {
              var o = this,
                i = this.applyRedirectCommands([], n.redirectTo, {});
              return n.redirectTo.startsWith("/")
                ? od(i)
                : this.lineralizeSegments(n, i).pipe(
                    it(function (n) {
                      var i = new sf(n, {});
                      return o.expandSegment(t, i, e, n, r, !1);
                    })
                  );
            }),
          (t.prototype.expandRegularSegmentAgainstRouteUsingRedirect =
            function (t, e, n, r, o, i) {
              var s = this,
                a = ad(e, r, o),
                l = a.consumedSegments,
                u = a.lastChild,
                c = a.positionalParamSegments;
              if (!a.matched) return rd(e);
              var p = this.applyRedirectCommands(l, r.redirectTo, c);
              return r.redirectTo.startsWith("/")
                ? od(p)
                : this.lineralizeSegments(r, p).pipe(
                    it(function (r) {
                      return s.expandSegment(
                        t,
                        e,
                        n,
                        r.concat(o.slice(u)),
                        i,
                        !1
                      );
                    })
                  );
            }),
          (t.prototype.matchSegmentAgainstRoute = function (t, e, n, r) {
            var o = this;
            if ("**" === n.path)
              return n.loadChildren
                ? this.configLoader.load(t.injector, n).pipe(
                    tt(function (t) {
                      return (n._loadedConfig = t), new sf(r, {});
                    })
                  )
                : Ku(new sf(r, {}));
            var s = ad(e, n, r),
              a = s.consumedSegments,
              u = s.lastChild;
            if (!s.matched) return rd(e);
            var c = r.slice(u);
            return this.getChildConfig(t, n, r).pipe(
              it(function (t) {
                var n = t.module,
                  r = t.routes,
                  s = (function (t, e, n, r) {
                    return n.length > 0 &&
                      (function (t, e, n) {
                        return r.some(function (n) {
                          return ud(t, e, n) && cd(n) !== Uh;
                        });
                      })(t, n)
                      ? {
                          segmentGroup: ld(
                            new sf(
                              e,
                              (function (t, e) {
                                var n,
                                  r,
                                  o = {};
                                o[Uh] = e;
                                try {
                                  for (
                                    var i = l(t), s = i.next();
                                    !s.done;
                                    s = i.next()
                                  ) {
                                    var a = s.value;
                                    "" === a.path &&
                                      cd(a) !== Uh &&
                                      (o[cd(a)] = new sf([], {}));
                                  }
                                } catch (u) {
                                  n = { error: u };
                                } finally {
                                  try {
                                    s && !s.done && (r = i.return) && r.call(i);
                                  } finally {
                                    if (n) throw n.error;
                                  }
                                }
                                return o;
                              })(r, new sf(n, t.children))
                            )
                          ),
                          slicedSegments: [],
                        }
                      : 0 === n.length &&
                        (function (t, e, n) {
                          return r.some(function (n) {
                            return ud(t, e, n);
                          });
                        })(t, n)
                      ? {
                          segmentGroup: ld(
                            new sf(
                              t.segments,
                              (function (t, e, n, r) {
                                var o,
                                  s,
                                  a = {};
                                try {
                                  for (
                                    var u = l(n), c = u.next();
                                    !c.done;
                                    c = u.next()
                                  ) {
                                    var p = c.value;
                                    ud(t, e, p) &&
                                      !r[cd(p)] &&
                                      (a[cd(p)] = new sf([], {}));
                                  }
                                } catch (h) {
                                  o = { error: h };
                                } finally {
                                  try {
                                    c && !c.done && (s = u.return) && s.call(u);
                                  } finally {
                                    if (o) throw o.error;
                                  }
                                }
                                return i({}, r, a);
                              })(t, n, r, t.children)
                            )
                          ),
                          slicedSegments: n,
                        }
                      : { segmentGroup: t, slicedSegments: n };
                  })(e, a, c, r),
                  u = s.segmentGroup,
                  p = s.slicedSegments;
                return 0 === p.length && u.hasChildren()
                  ? o.expandChildren(n, r, u).pipe(
                      tt(function (t) {
                        return new sf(a, t);
                      })
                    )
                  : 0 === r.length && 0 === p.length
                  ? Ku(new sf(a, {}))
                  : o.expandSegment(n, u, r, p, Uh, !0).pipe(
                      tt(function (t) {
                        return new sf(a.concat(t.segments), t.children);
                      })
                    );
              })
            );
          }),
          (t.prototype.getChildConfig = function (t, e, n) {
            var r = this;
            return e.children
              ? Ku(new Xh(e.children, t))
              : e.loadChildren
              ? void 0 !== e._loadedConfig
                ? Ku(e._loadedConfig)
                : (function (t, e, n) {
                    var r,
                      o = e.canLoad;
                    return o && 0 !== o.length
                      ? ot(o)
                          .pipe(
                            tt(function (r) {
                              var o,
                                i = t.get(r);
                              if (
                                (function (t) {
                                  return t && Jf(t.canLoad);
                                })(i)
                              )
                                o = i.canLoad(e, n);
                              else {
                                if (!Jf(i))
                                  throw new Error("Invalid CanLoad guard");
                                o = i(e, n);
                              }
                              return nf(o);
                            })
                          )
                          .pipe(
                            rc(),
                            ((r = function (t) {
                              return !0 === t;
                            }),
                            function (t) {
                              return t.lift(new Tc(r, void 0, t));
                            })
                          )
                      : Ku(!0);
                  })(t.injector, e, n).pipe(
                    it(function (n) {
                      return n
                        ? r.configLoader.load(t.injector, e).pipe(
                            tt(function (t) {
                              return (e._loadedConfig = t), t;
                            })
                          )
                        : (function (t) {
                            return new A(function (e) {
                              return e.error(
                                Wh(
                                  "Cannot load children because the guard of the route \"path: '" +
                                    t.path +
                                    "'\" returned false"
                                )
                              );
                            });
                          })(e);
                    })
                  )
              : Ku(new Xh([], t));
          }),
          (t.prototype.lineralizeSegments = function (t, e) {
            for (var n = [], r = e.root; ; ) {
              if (((n = n.concat(r.segments)), 0 === r.numberOfChildren))
                return Ku(n);
              if (r.numberOfChildren > 1 || !r.children[Uh])
                return id(t.redirectTo);
              r = r.children[Uh];
            }
          }),
          (t.prototype.applyRedirectCommands = function (t, e, n) {
            return this.applyRedirectCreatreUrlTree(
              e,
              this.urlSerializer.parse(e),
              t,
              n
            );
          }),
          (t.prototype.applyRedirectCreatreUrlTree = function (t, e, n, r) {
            var o = this.createSegmentGroup(t, e.root, n, r);
            return new of(
              o,
              this.createQueryParams(e.queryParams, this.urlTree.queryParams),
              e.fragment
            );
          }),
          (t.prototype.createQueryParams = function (t, e) {
            var n = {};
            return (
              ef(t, function (t, r) {
                if ("string" == typeof t && t.startsWith(":")) {
                  var o = t.substring(1);
                  n[r] = e[o];
                } else n[r] = t;
              }),
              n
            );
          }),
          (t.prototype.createSegmentGroup = function (t, e, n, r) {
            var o = this,
              i = this.createSegments(t, e.segments, n, r),
              s = {};
            return (
              ef(e.children, function (e, i) {
                s[i] = o.createSegmentGroup(t, e, n, r);
              }),
              new sf(i, s)
            );
          }),
          (t.prototype.createSegments = function (t, e, n, r) {
            var o = this;
            return e.map(function (e) {
              return e.path.startsWith(":")
                ? o.findPosParam(t, e, r)
                : o.findOrReturn(e, n);
            });
          }),
          (t.prototype.findPosParam = function (t, e, n) {
            var r = n[e.path.substring(1)];
            if (!r)
              throw new Error(
                "Cannot redirect to '" + t + "'. Cannot find '" + e.path + "'."
              );
            return r;
          }),
          (t.prototype.findOrReturn = function (t, e) {
            var n,
              r,
              o = 0;
            try {
              for (var i = l(e), s = i.next(); !s.done; s = i.next()) {
                var a = s.value;
                if (a.path === t.path) return e.splice(o), a;
                o++;
              }
            } catch (u) {
              n = { error: u };
            } finally {
              try {
                s && !s.done && (r = i.return) && r.call(i);
              } finally {
                if (n) throw n.error;
              }
            }
            return t;
          }),
          t
        );
      })();
      function ad(t, e, n) {
        if ("" === e.path)
          return "full" === e.pathMatch && (t.hasChildren() || n.length > 0)
            ? {
                matched: !1,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {},
              }
            : {
                matched: !0,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {},
              };
        var r = (e.matcher || Yh)(n, t, e);
        return r
          ? {
              matched: !0,
              consumedSegments: r.consumed,
              lastChild: r.consumed.length,
              positionalParamSegments: r.posParams,
            }
          : {
              matched: !1,
              consumedSegments: [],
              lastChild: 0,
              positionalParamSegments: {},
            };
      }
      function ld(t) {
        if (1 === t.numberOfChildren && t.children[Uh]) {
          var e = t.children[Uh];
          return new sf(t.segments.concat(e.segments), e.children);
        }
        return t;
      }
      function ud(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) &&
          "" === n.path &&
          void 0 !== n.redirectTo
        );
      }
      function cd(t) {
        return t.outlet || Uh;
      }
      var pd = (function () {
          return function (t) {
            (this.path = t), (this.route = this.path[this.path.length - 1]);
          };
        })(),
        hd = (function () {
          return function (t, e) {
            (this.component = t), (this.route = e);
          };
        })();
      function fd(t, e, n) {
        var r = (function (t) {
          if (!t) return null;
          for (var e = t.parent; e; e = e.parent) {
            var n = e.routeConfig;
            if (n && n._loadedConfig) return n._loadedConfig;
          }
          return null;
        })(e);
        return (r ? r.module.injector : n).get(t);
      }
      function dd(t, e, n, r, o) {
        void 0 === o &&
          (o = { canDeactivateChecks: [], canActivateChecks: [] });
        var i = kf(e);
        return (
          t.children.forEach(function (t) {
            !(function (t, e, n, r, o) {
              void 0 === o &&
                (o = { canDeactivateChecks: [], canActivateChecks: [] });
              var i = t.value,
                s = e ? e.value : null,
                a = n ? n.getContext(t.value.outlet) : null;
              if (s && i.routeConfig === s.routeConfig) {
                var l = (function (t, e, n) {
                  switch (n) {
                    case "pathParamsChange":
                      return !lf(t.url, e.url);
                    case "always":
                      return !0;
                    case "paramsOrQueryParamsChange":
                      return !Hf(t, e) || !$h(t.queryParams, e.queryParams);
                    case "paramsChange":
                    default:
                      return !Hf(t, e);
                  }
                })(s, i, i.routeConfig.runGuardsAndResolvers);
                l
                  ? o.canActivateChecks.push(new pd(r))
                  : ((i.data = s.data), (i._resolvedData = s._resolvedData)),
                  dd(t, e, i.component ? (a ? a.children : null) : n, r, o),
                  l &&
                    o.canDeactivateChecks.push(
                      new hd((a && a.outlet && a.outlet.component) || null, s)
                    );
              } else
                s && gd(e, a, o),
                  o.canActivateChecks.push(new pd(r)),
                  dd(t, null, i.component ? (a ? a.children : null) : n, r, o);
            })(t, i[t.value.outlet], n, r.concat([t.value]), o),
              delete i[t.value.outlet];
          }),
          ef(i, function (t, e) {
            return gd(t, n.getContext(e), o);
          }),
          o
        );
      }
      function gd(t, e, n) {
        var r = kf(t),
          o = t.value;
        ef(r, function (t, r) {
          gd(t, o.component ? (e ? e.children.getContext(r) : null) : e, n);
        }),
          n.canDeactivateChecks.push(
            new hd(
              o.component && e && e.outlet && e.outlet.isActivated
                ? e.outlet.component
                : null,
              o
            )
          );
      }
      var vd = Symbol("INITIAL_VALUE");
      function yd() {
        return Mc(function (t) {
          return function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            var n = null,
              r = null;
            return (
              U(t[t.length - 1]) && (r = t.pop()),
              "function" == typeof t[t.length - 1] && (n = t.pop()),
              1 === t.length && p(t[0]) && (t = t[0]),
              rt(t, r).lift(new tc(n))
            );
          }
            .apply(
              void 0,
              c(
                t.map(function (t) {
                  return t.pipe(
                    Ec(1),
                    (function () {
                      for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                      return function (e) {
                        var n = t[t.length - 1];
                        U(n) ? t.pop() : (n = null);
                        var r = t.length;
                        return (function () {
                          for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e];
                          return 1 === t.length || (2 === t.length && U(t[1]))
                            ? ot(t[0])
                            : rc()(Ku.apply(void 0, t));
                        })(
                          1 !== r || n ? (r > 0 ? rt(t, n) : Xu(n)) : Qu(t[0]),
                          e
                        );
                      };
                    })(vd)
                  );
                })
              )
            )
            .pipe(
              Ac(function (t, e) {
                var n = !1;
                return e.reduce(function (t, r, o) {
                  if (t !== vd) return t;
                  if ((r === vd && (n = !0), !n)) {
                    if (!1 === r) return r;
                    if (o === e.length - 1 || td(r)) return r;
                  }
                  return t;
                }, t);
              }, vd),
              oc(function (t) {
                return t !== vd;
              }),
              tt(function (t) {
                return td(t) ? t : !0 === t;
              }),
              Ec(1)
            );
        });
      }
      function md(t, e) {
        return null !== t && e && e(new Lh(t)), Ku(!0);
      }
      function bd(t, e) {
        return null !== t && e && e(new Dh(t)), Ku(!0);
      }
      function _d(t, e, n) {
        var r = e.routeConfig ? e.routeConfig.canActivate : null;
        return r && 0 !== r.length
          ? Ku(
              r.map(function (r) {
                return nc(function () {
                  var o,
                    i = fd(r, e, n);
                  if (
                    (function (t) {
                      return t && Jf(t.canActivate);
                    })(i)
                  )
                    o = nf(i.canActivate(e, t));
                  else {
                    if (!Jf(i)) throw new Error("Invalid CanActivate guard");
                    o = nf(i(e, t));
                  }
                  return o.pipe(Oc());
                });
              })
            ).pipe(yd())
          : Ku(!0);
      }
      function wd(t, e, n) {
        var r = e[e.length - 1],
          o = e
            .slice(0, e.length - 1)
            .reverse()
            .map(function (t) {
              return (function (t) {
                var e = t.routeConfig ? t.routeConfig.canActivateChild : null;
                return e && 0 !== e.length ? { node: t, guards: e } : null;
              })(t);
            })
            .filter(function (t) {
              return null !== t;
            })
            .map(function (e) {
              return nc(function () {
                return Ku(
                  e.guards.map(function (o) {
                    var i,
                      s = fd(o, e.node, n);
                    if (
                      (function (t) {
                        return t && Jf(t.canActivateChild);
                      })(s)
                    )
                      i = nf(s.canActivateChild(r, t));
                    else {
                      if (!Jf(s))
                        throw new Error("Invalid CanActivateChild guard");
                      i = nf(s(r, t));
                    }
                    return i.pipe(Oc());
                  })
                ).pipe(yd());
              });
            });
        return Ku(o).pipe(yd());
      }
      var Cd = (function () {
          return function () {};
        })(),
        Sd = (function () {
          function t(t, e, n, r, o, i) {
            (this.rootComponentType = t),
              (this.config = e),
              (this.urlTree = n),
              (this.url = r),
              (this.paramsInheritanceStrategy = o),
              (this.relativeLinkResolution = i);
          }
          return (
            (t.prototype.recognize = function () {
              try {
                var t = Pd(
                    this.urlTree.root,
                    [],
                    [],
                    this.config,
                    this.relativeLinkResolution
                  ).segmentGroup,
                  e = this.processSegmentGroup(this.config, t, Uh),
                  n = new Nf(
                    [],
                    Object.freeze({}),
                    Object.freeze(i({}, this.urlTree.queryParams)),
                    this.urlTree.fragment,
                    {},
                    Uh,
                    this.rootComponentType,
                    null,
                    this.urlTree.root,
                    -1,
                    {}
                  ),
                  r = new Tf(n, e),
                  o = new Df(this.url, r);
                return this.inheritParamsAndData(o._root), Ku(o);
              } catch (s) {
                return new A(function (t) {
                  return t.error(s);
                });
              }
            }),
            (t.prototype.inheritParamsAndData = function (t) {
              var e = this,
                n = t.value,
                r = Af(n, this.paramsInheritanceStrategy);
              (n.params = Object.freeze(r.params)),
                (n.data = Object.freeze(r.data)),
                t.children.forEach(function (t) {
                  return e.inheritParamsAndData(t);
                });
            }),
            (t.prototype.processSegmentGroup = function (t, e, n) {
              return 0 === e.segments.length && e.hasChildren()
                ? this.processChildren(t, e)
                : this.processSegment(t, e, e.segments, n);
            }),
            (t.prototype.processChildren = function (t, e) {
              var n,
                r = this,
                o = uf(e, function (e, n) {
                  return r.processSegmentGroup(t, e, n);
                });
              return (
                (n = {}),
                o.forEach(function (t) {
                  var e = n[t.value.outlet];
                  if (e) {
                    var r = e.url
                        .map(function (t) {
                          return t.toString();
                        })
                        .join("/"),
                      o = t.value.url
                        .map(function (t) {
                          return t.toString();
                        })
                        .join("/");
                    throw new Error(
                      "Two segments cannot have the same outlet name: '" +
                        r +
                        "' and '" +
                        o +
                        "'."
                    );
                  }
                  n[t.value.outlet] = t.value;
                }),
                o.sort(function (t, e) {
                  return t.value.outlet === Uh
                    ? -1
                    : e.value.outlet === Uh
                    ? 1
                    : t.value.outlet.localeCompare(e.value.outlet);
                }),
                o
              );
            }),
            (t.prototype.processSegment = function (t, e, n, r) {
              var o, i;
              try {
                for (var s = l(t), a = s.next(); !a.done; a = s.next()) {
                  var u = a.value;
                  try {
                    return this.processSegmentAgainstRoute(u, e, n, r);
                  } catch (c) {
                    if (!(c instanceof Cd)) throw c;
                  }
                }
              } catch (p) {
                o = { error: p };
              } finally {
                try {
                  a && !a.done && (i = s.return) && i.call(s);
                } finally {
                  if (o) throw o.error;
                }
              }
              if (this.noLeftoversInUrl(e, n, r)) return [];
              throw new Cd();
            }),
            (t.prototype.noLeftoversInUrl = function (t, e, n) {
              return 0 === e.length && !t.children[n];
            }),
            (t.prototype.processSegmentAgainstRoute = function (t, e, n, r) {
              if (t.redirectTo) throw new Cd();
              if ((t.outlet || Uh) !== r) throw new Cd();
              var o,
                s = [],
                a = [];
              if ("**" === t.path) {
                var l = n.length > 0 ? tf(n).parameters : {};
                o = new Nf(
                  n,
                  l,
                  Object.freeze(i({}, this.urlTree.queryParams)),
                  this.urlTree.fragment,
                  kd(t),
                  r,
                  t.component,
                  t,
                  Ed(e),
                  xd(e) + n.length,
                  Md(t)
                );
              } else {
                var u = (function (t, e, n) {
                  if ("" === e.path) {
                    if (
                      "full" === e.pathMatch &&
                      (t.hasChildren() || n.length > 0)
                    )
                      throw new Cd();
                    return {
                      consumedSegments: [],
                      lastChild: 0,
                      parameters: {},
                    };
                  }
                  var r = (e.matcher || Yh)(n, t, e);
                  if (!r) throw new Cd();
                  var o = {};
                  ef(r.posParams, function (t, e) {
                    o[e] = t.path;
                  });
                  var s =
                    r.consumed.length > 0
                      ? i({}, o, r.consumed[r.consumed.length - 1].parameters)
                      : o;
                  return {
                    consumedSegments: r.consumed,
                    lastChild: r.consumed.length,
                    parameters: s,
                  };
                })(e, t, n);
                (s = u.consumedSegments),
                  (a = n.slice(u.lastChild)),
                  (o = new Nf(
                    s,
                    u.parameters,
                    Object.freeze(i({}, this.urlTree.queryParams)),
                    this.urlTree.fragment,
                    kd(t),
                    r,
                    t.component,
                    t,
                    Ed(e),
                    xd(e) + s.length,
                    Md(t)
                  ));
              }
              var c = (function (t) {
                  return t.children
                    ? t.children
                    : t.loadChildren
                    ? t._loadedConfig.routes
                    : [];
                })(t),
                p = Pd(e, s, a, c, this.relativeLinkResolution),
                h = p.segmentGroup,
                f = p.slicedSegments;
              if (0 === f.length && h.hasChildren()) {
                var d = this.processChildren(c, h);
                return [new Tf(o, d)];
              }
              if (0 === c.length && 0 === f.length) return [new Tf(o, [])];
              var g = this.processSegment(c, h, f, Uh);
              return [new Tf(o, g)];
            }),
            t
          );
        })();
      function Ed(t) {
        for (var e = t; e._sourceSegment; ) e = e._sourceSegment;
        return e;
      }
      function xd(t) {
        for (
          var e = t, n = e._segmentIndexShift ? e._segmentIndexShift : 0;
          e._sourceSegment;

        )
          n += (e = e._sourceSegment)._segmentIndexShift
            ? e._segmentIndexShift
            : 0;
        return n - 1;
      }
      function Pd(t, e, n, r, o) {
        if (
          n.length > 0 &&
          (function (t, e, n) {
            return r.some(function (n) {
              return Od(t, e, n) && Td(n) !== Uh;
            });
          })(t, n)
        ) {
          var s = new sf(
            e,
            (function (t, e, n, r) {
              var o,
                i,
                s = {};
              (s[Uh] = r),
                (r._sourceSegment = t),
                (r._segmentIndexShift = e.length);
              try {
                for (var a = l(n), u = a.next(); !u.done; u = a.next()) {
                  var c = u.value;
                  if ("" === c.path && Td(c) !== Uh) {
                    var p = new sf([], {});
                    (p._sourceSegment = t),
                      (p._segmentIndexShift = e.length),
                      (s[Td(c)] = p);
                  }
                }
              } catch (h) {
                o = { error: h };
              } finally {
                try {
                  u && !u.done && (i = a.return) && i.call(a);
                } finally {
                  if (o) throw o.error;
                }
              }
              return s;
            })(t, e, r, new sf(n, t.children))
          );
          return (
            (s._sourceSegment = t),
            (s._segmentIndexShift = e.length),
            { segmentGroup: s, slicedSegments: [] }
          );
        }
        if (
          0 === n.length &&
          (function (t, e, n) {
            return r.some(function (n) {
              return Od(t, e, n);
            });
          })(t, n)
        ) {
          var a = new sf(
            t.segments,
            (function (t, e, n, r, o, s) {
              var a,
                u,
                c = {};
              try {
                for (var p = l(r), h = p.next(); !h.done; h = p.next()) {
                  var f = h.value;
                  if (Od(t, n, f) && !o[Td(f)]) {
                    var d = new sf([], {});
                    (d._sourceSegment = t),
                      (d._segmentIndexShift =
                        "legacy" === s ? t.segments.length : e.length),
                      (c[Td(f)] = d);
                  }
                }
              } catch (g) {
                a = { error: g };
              } finally {
                try {
                  h && !h.done && (u = p.return) && u.call(p);
                } finally {
                  if (a) throw a.error;
                }
              }
              return i({}, o, c);
            })(t, e, n, r, t.children, o)
          );
          return (
            (a._sourceSegment = t),
            (a._segmentIndexShift = e.length),
            { segmentGroup: a, slicedSegments: n }
          );
        }
        var u = new sf(t.segments, t.children);
        return (
          (u._sourceSegment = t),
          (u._segmentIndexShift = e.length),
          { segmentGroup: u, slicedSegments: n }
        );
      }
      function Od(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) &&
          "" === n.path &&
          void 0 === n.redirectTo
        );
      }
      function Td(t) {
        return t.outlet || Uh;
      }
      function kd(t) {
        return t.data || {};
      }
      function Md(t) {
        return t.resolve || {};
      }
      function Rd(t, e, n, r) {
        var o = fd(t, e, r);
        return nf(o.resolve ? o.resolve(e, n) : o(e, n));
      }
      function Id(t) {
        return function (e) {
          return e.pipe(
            Mc(function (e) {
              var n = t(e);
              return n
                ? ot(n).pipe(
                    tt(function () {
                      return e;
                    })
                  )
                : ot([e]);
            })
          );
        };
      }
      var Ad = (function () {
          return function () {};
        })(),
        Nd = (function () {
          function t() {}
          return (
            (t.prototype.shouldDetach = function (t) {
              return !1;
            }),
            (t.prototype.store = function (t, e) {}),
            (t.prototype.shouldAttach = function (t) {
              return !1;
            }),
            (t.prototype.retrieve = function (t) {
              return null;
            }),
            (t.prototype.shouldReuseRoute = function (t, e) {
              return t.routeConfig === e.routeConfig;
            }),
            t
          );
        })(),
        Dd = new Ot("ROUTES"),
        jd = (function () {
          function t(t, e, n, r) {
            (this.loader = t),
              (this.compiler = e),
              (this.onLoadStartListener = n),
              (this.onLoadEndListener = r);
          }
          return (
            (t.prototype.load = function (t, e) {
              var n = this;
              return (
                this.onLoadStartListener && this.onLoadStartListener(e),
                this.loadModuleFactory(e.loadChildren).pipe(
                  tt(function (r) {
                    n.onLoadEndListener && n.onLoadEndListener(e);
                    var o = r.create(t);
                    return new Xh(Jh(o.injector.get(Dd)).map(Gh), o);
                  })
                )
              );
            }),
            (t.prototype.loadModuleFactory = function (t) {
              var e = this;
              return "string" == typeof t
                ? ot(this.loader.load(t))
                : nf(t()).pipe(
                    it(function (t) {
                      return t instanceof er
                        ? Ku(t)
                        : ot(e.compiler.compileModuleAsync(t));
                    })
                  );
            }),
            t
          );
        })(),
        Ld = (function () {
          return function () {};
        })(),
        Fd = (function () {
          function t() {}
          return (
            (t.prototype.shouldProcessUrl = function (t) {
              return !0;
            }),
            (t.prototype.extract = function (t) {
              return t;
            }),
            (t.prototype.merge = function (t, e) {
              return t;
            }),
            t
          );
        })();
      function Hd(t) {
        throw t;
      }
      function Vd(t, e, n) {
        return e.parse("/");
      }
      function Ud(t, e) {
        return Ku(null);
      }
      var Bd = (function () {
          function t(t, e, n, r, o, i, s, a) {
            var l = this;
            (this.rootComponentType = t),
              (this.urlSerializer = e),
              (this.rootContexts = n),
              (this.location = r),
              (this.config = a),
              (this.navigationId = 0),
              (this.isNgZoneEnabled = !1),
              (this.events = new H()),
              (this.errorHandler = Hd),
              (this.malformedUriErrorHandler = Vd),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1),
              (this.hooks = {
                beforePreactivation: Ud,
                afterPreactivation: Ud,
              }),
              (this.urlHandlingStrategy = new Fd()),
              (this.routeReuseStrategy = new Nd()),
              (this.onSameUrlNavigation = "ignore"),
              (this.paramsInheritanceStrategy = "emptyOnly"),
              (this.urlUpdateStrategy = "deferred"),
              (this.relativeLinkResolution = "legacy"),
              (this.ngModule = o.get(tr)),
              (this.console = o.get(di));
            var u = o.get(xi);
            (this.isNgZoneEnabled = u instanceof xi),
              this.resetConfig(a),
              (this.currentUrlTree = new of(new sf([], {}), {}, null)),
              (this.rawUrlTree = this.currentUrlTree),
              (this.configLoader = new jd(
                i,
                s,
                function (t) {
                  return l.triggerEvent(new Ah(t));
                },
                function (t) {
                  return l.triggerEvent(new Nh(t));
                }
              )),
              (this.routerState = Rf(
                this.currentUrlTree,
                this.rootComponentType
              )),
              (this.transitions = new Zu({
                id: 0,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.currentUrlTree,
                extractedUrl: this.urlHandlingStrategy.extract(
                  this.currentUrlTree
                ),
                urlAfterRedirects: this.urlHandlingStrategy.extract(
                  this.currentUrlTree
                ),
                rawUrl: this.currentUrlTree,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: "imperative",
                state: null,
                currentSnapshot: this.routerState.snapshot,
                targetSnapshot: null,
                currentRouterState: this.routerState,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
              })),
              (this.navigations = this.setupNavigations(this.transitions)),
              this.processNavigations();
          }
          return (
            (t.prototype.setupNavigations = function (t) {
              var e = this,
                n = this.events;
              return t.pipe(
                oc(function (t) {
                  return 0 !== t.id;
                }),
                tt(function (t) {
                  return i({}, t, {
                    extractedUrl: e.urlHandlingStrategy.extract(t.rawUrl),
                  });
                }),
                Mc(function (t) {
                  var r,
                    o,
                    s,
                    a,
                    u = !1,
                    c = !1;
                  return Ku(t).pipe(
                    Mc(function (t) {
                      var r,
                        o,
                        s,
                        a,
                        l =
                          !e.navigated ||
                          t.extractedUrl.toString() !==
                            e.currentUrlTree.toString();
                      if (
                        ("reload" === e.onSameUrlNavigation || l) &&
                        e.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)
                      )
                        return Ku(t).pipe(
                          hc(function (t) {
                            return (
                              "eager" === e.urlUpdateStrategy &&
                              !t.extras.skipLocationChange &&
                              e.setBrowserUrl(
                                t.rawUrl,
                                !!t.extras.replaceUrl,
                                t.id
                              )
                            );
                          }),
                          Mc(function (t) {
                            var r = e.transitions.getValue();
                            return (
                              n.next(
                                new Eh(
                                  t.id,
                                  e.serializeUrl(t.extractedUrl),
                                  t.source,
                                  t.state
                                )
                              ),
                              r !== e.transitions.getValue() ? Yu : [t]
                            );
                          }),
                          Mc(function (t) {
                            return Promise.resolve(t);
                          }),
                          ((r = e.ngModule.injector),
                          (o = e.configLoader),
                          (s = e.urlSerializer),
                          (a = e.config),
                          function (t) {
                            return t.pipe(
                              Mc(function (t) {
                                return (function (e, n, r, o, i) {
                                  return new sd(
                                    e,
                                    n,
                                    r,
                                    t.extractedUrl,
                                    i
                                  ).apply();
                                })(r, o, s, 0, a).pipe(
                                  tt(function (e) {
                                    return i({}, t, { urlAfterRedirects: e });
                                  })
                                );
                              })
                            );
                          }),
                          (function (t, n, r, o, s) {
                            return function (r) {
                              return r.pipe(
                                it(function (r) {
                                  return (function (t, e, n, r, o, i) {
                                    return (
                                      void 0 === o && (o = "emptyOnly"),
                                      void 0 === i && (i = "legacy"),
                                      new Sd(t, e, n, r, o, i).recognize()
                                    );
                                  })(
                                    t,
                                    n,
                                    r.urlAfterRedirects,
                                    ((a = r.urlAfterRedirects),
                                    e.serializeUrl(a)),
                                    o,
                                    s
                                  ).pipe(
                                    tt(function (t) {
                                      return i({}, r, { targetSnapshot: t });
                                    })
                                  );
                                  var a;
                                })
                              );
                            };
                          })(
                            e.rootComponentType,
                            e.config,
                            0,
                            e.paramsInheritanceStrategy,
                            e.relativeLinkResolution
                          ),
                          hc(function (t) {
                            var r = new Th(
                              t.id,
                              e.serializeUrl(t.extractedUrl),
                              e.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            n.next(r);
                          })
                        );
                      if (
                        l &&
                        e.rawUrlTree &&
                        e.urlHandlingStrategy.shouldProcessUrl(e.rawUrlTree)
                      ) {
                        var u = t.extractedUrl,
                          c = t.source,
                          p = t.state,
                          h = t.extras,
                          f = new Eh(t.id, e.serializeUrl(u), c, p);
                        n.next(f);
                        var d = Rf(u, e.rootComponentType).snapshot;
                        return Ku(
                          i({}, t, {
                            targetSnapshot: d,
                            urlAfterRedirects: u,
                            extras: i({}, h, {
                              skipLocationChange: !1,
                              replaceUrl: !1,
                            }),
                          })
                        );
                      }
                      return (e.rawUrlTree = t.rawUrl), t.resolve(null), Yu;
                    }),
                    Id(function (t) {
                      var n = t.extras;
                      return e.hooks.beforePreactivation(t.targetSnapshot, {
                        navigationId: t.id,
                        appliedUrlTree: t.extractedUrl,
                        rawUrlTree: t.rawUrl,
                        skipLocationChange: !!n.skipLocationChange,
                        replaceUrl: !!n.replaceUrl,
                      });
                    }),
                    hc(function (t) {
                      var n = new kh(
                        t.id,
                        e.serializeUrl(t.extractedUrl),
                        e.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot
                      );
                      e.triggerEvent(n);
                    }),
                    tt(function (t) {
                      return i({}, t, {
                        guards:
                          ((n = t.targetSnapshot),
                          (r = t.currentSnapshot),
                          (o = e.rootContexts),
                          (s = n._root),
                          dd(s, r ? r._root : null, o, [s.value])),
                      });
                      var n, r, o, s;
                    }),
                    (function (t, e) {
                      return function (n) {
                        return n.pipe(
                          it(function (n) {
                            var r = n.targetSnapshot,
                              o = n.currentSnapshot,
                              s = n.guards,
                              a = s.canActivateChecks,
                              l = s.canDeactivateChecks;
                            return 0 === l.length && 0 === a.length
                              ? Ku(i({}, n, { guardsResult: !0 }))
                              : (function (t, e, n, r) {
                                  return ot(l).pipe(
                                    it(function (t) {
                                      return (function (t, e, n, r, o) {
                                        var i =
                                          e && e.routeConfig
                                            ? e.routeConfig.canDeactivate
                                            : null;
                                        return i && 0 !== i.length
                                          ? Ku(
                                              i.map(function (i) {
                                                var s,
                                                  a = fd(i, e, o);
                                                if (
                                                  (function (t) {
                                                    return (
                                                      t && Jf(t.canDeactivate)
                                                    );
                                                  })(a)
                                                )
                                                  s = nf(
                                                    a.canDeactivate(t, e, n, r)
                                                  );
                                                else {
                                                  if (!Jf(a))
                                                    throw new Error(
                                                      "Invalid CanDeactivate guard"
                                                    );
                                                  s = nf(a(t, e, n, r));
                                                }
                                                return s.pipe(Oc());
                                              })
                                            ).pipe(yd())
                                          : Ku(!0);
                                      })(t.component, t.route, n, e, r);
                                    }),
                                    Oc(function (t) {
                                      return !0 !== t;
                                    }, !0)
                                  );
                                })(0, r, o, t).pipe(
                                  it(function (n) {
                                    return n && "boolean" == typeof n
                                      ? (function (t, e, n, r) {
                                          return ot(a).pipe(
                                            jc(function (e) {
                                              return ot([
                                                bd(e.route.parent, r),
                                                md(e.route, r),
                                                wd(t, e.path, n),
                                                _d(t, e.route, n),
                                              ]).pipe(
                                                rc(),
                                                Oc(function (t) {
                                                  return !0 !== t;
                                                }, !0)
                                              );
                                            }),
                                            Oc(function (t) {
                                              return !0 !== t;
                                            }, !0)
                                          );
                                        })(r, 0, t, e)
                                      : Ku(n);
                                  }),
                                  tt(function (t) {
                                    return i({}, n, { guardsResult: t });
                                  })
                                );
                          })
                        );
                      };
                    })(e.ngModule.injector, function (t) {
                      return e.triggerEvent(t);
                    }),
                    hc(function (t) {
                      if (td(t.guardsResult)) {
                        var n = Wh(
                          'Redirecting to "' +
                            e.serializeUrl(t.guardsResult) +
                            '"'
                        );
                        throw ((n.url = t.guardsResult), n);
                      }
                    }),
                    hc(function (t) {
                      var n = new Mh(
                        t.id,
                        e.serializeUrl(t.extractedUrl),
                        e.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot,
                        !!t.guardsResult
                      );
                      e.triggerEvent(n);
                    }),
                    oc(function (t) {
                      if (!t.guardsResult) {
                        e.resetUrlToCurrentUrlTree();
                        var r = new Ph(
                          t.id,
                          e.serializeUrl(t.extractedUrl),
                          ""
                        );
                        return n.next(r), t.resolve(!1), !1;
                      }
                      return !0;
                    }),
                    Id(function (t) {
                      if (t.guards.canActivateChecks.length)
                        return Ku(t).pipe(
                          hc(function (t) {
                            var n = new Rh(
                              t.id,
                              e.serializeUrl(t.extractedUrl),
                              e.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            e.triggerEvent(n);
                          }),
                          ((n = e.paramsInheritanceStrategy),
                          (r = e.ngModule.injector),
                          function (t) {
                            return t.pipe(
                              it(function (t) {
                                var e = t.targetSnapshot,
                                  o = t.guards.canActivateChecks;
                                return o.length
                                  ? ot(o).pipe(
                                      jc(function (t) {
                                        return (function (t, n, r, o) {
                                          return (function (t, e, n, r) {
                                            var o = Object.keys(t);
                                            if (0 === o.length) return Ku({});
                                            if (1 === o.length) {
                                              var i = o[0];
                                              return Rd(t[i], e, n, r).pipe(
                                                tt(function (t) {
                                                  var e;
                                                  return ((e = {})[i] = t), e;
                                                })
                                              );
                                            }
                                            var s = {};
                                            return ot(o)
                                              .pipe(
                                                it(function (o) {
                                                  return Rd(t[o], e, n, r).pipe(
                                                    tt(function (t) {
                                                      return (s[o] = t), t;
                                                    })
                                                  );
                                                })
                                              )
                                              .pipe(
                                                _c(),
                                                tt(function () {
                                                  return s;
                                                })
                                              );
                                          })(t._resolve, t, e, o).pipe(
                                            tt(function (e) {
                                              return (
                                                (t._resolvedData = e),
                                                (t.data = i(
                                                  {},
                                                  t.data,
                                                  Af(t, r).resolve
                                                )),
                                                null
                                              );
                                            })
                                          );
                                        })(t.route, 0, n, r);
                                      }),
                                      (function (t, e) {
                                        return arguments.length >= 2
                                          ? function (e) {
                                              return R(
                                                Ac(t, void 0),
                                                uc(1),
                                                yc(void 0)
                                              )(e);
                                            }
                                          : function (e) {
                                              return R(
                                                Ac(function (e, n, r) {
                                                  return t(e);
                                                }),
                                                uc(1)
                                              )(e);
                                            };
                                      })(function (t, e) {
                                        return t;
                                      }),
                                      tt(function (e) {
                                        return t;
                                      })
                                    )
                                  : Ku(t);
                              })
                            );
                          }),
                          hc(function (t) {
                            var n = new Ih(
                              t.id,
                              e.serializeUrl(t.extractedUrl),
                              e.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            e.triggerEvent(n);
                          })
                        );
                      var n, r;
                    }),
                    Id(function (t) {
                      var n = t.extras;
                      return e.hooks.afterPreactivation(t.targetSnapshot, {
                        navigationId: t.id,
                        appliedUrlTree: t.extractedUrl,
                        rawUrlTree: t.rawUrl,
                        skipLocationChange: !!n.skipLocationChange,
                        replaceUrl: !!n.replaceUrl,
                      });
                    }),
                    tt(function (t) {
                      var n,
                        r,
                        o,
                        s =
                          ((o = (function t(e, n, r) {
                            if (
                              r &&
                              e.shouldReuseRoute(n.value, r.value.snapshot)
                            ) {
                              (u = r.value)._futureSnapshot = n.value;
                              var o = (function (e, n, r) {
                                return n.children.map(function (n) {
                                  var o, i;
                                  try {
                                    for (
                                      var s = l(r.children), a = s.next();
                                      !a.done;
                                      a = s.next()
                                    ) {
                                      var u = a.value;
                                      if (
                                        e.shouldReuseRoute(
                                          u.value.snapshot,
                                          n.value
                                        )
                                      )
                                        return t(e, n, u);
                                    }
                                  } catch (c) {
                                    o = { error: c };
                                  } finally {
                                    try {
                                      a &&
                                        !a.done &&
                                        (i = s.return) &&
                                        i.call(s);
                                    } finally {
                                      if (o) throw o.error;
                                    }
                                  }
                                  return t(e, n);
                                });
                              })(e, n, r);
                              return new Tf(u, o);
                            }
                            var i = e.retrieve(n.value);
                            if (i) {
                              var s = i.route;
                              return (
                                (function t(e, n) {
                                  if (
                                    e.value.routeConfig !== n.value.routeConfig
                                  )
                                    throw new Error(
                                      "Cannot reattach ActivatedRouteSnapshot created from a different route"
                                    );
                                  if (e.children.length !== n.children.length)
                                    throw new Error(
                                      "Cannot reattach ActivatedRouteSnapshot with a different number of children"
                                    );
                                  n.value._futureSnapshot = e.value;
                                  for (var r = 0; r < e.children.length; ++r)
                                    t(e.children[r], n.children[r]);
                                })(n, s),
                                s
                              );
                            }
                            var a,
                              u = new If(
                                new Zu((a = n.value).url),
                                new Zu(a.params),
                                new Zu(a.queryParams),
                                new Zu(a.fragment),
                                new Zu(a.data),
                                a.outlet,
                                a.component,
                                a
                              );
                            return (
                              (o = n.children.map(function (n) {
                                return t(e, n);
                              })),
                              new Tf(u, o)
                            );
                          })(
                            e.routeReuseStrategy,
                            (n = t.targetSnapshot)._root,
                            (r = t.currentRouterState) ? r._root : void 0
                          )),
                          new Mf(o, n));
                      return i({}, t, { targetRouterState: s });
                    }),
                    hc(function (t) {
                      (e.currentUrlTree = t.urlAfterRedirects),
                        (e.rawUrlTree = e.urlHandlingStrategy.merge(
                          e.currentUrlTree,
                          t.rawUrl
                        )),
                        (e.routerState = t.targetRouterState),
                        "deferred" !== e.urlUpdateStrategy ||
                          t.extras.skipLocationChange ||
                          e.setBrowserUrl(
                            e.rawUrlTree,
                            !!t.extras.replaceUrl,
                            t.id
                          );
                    }),
                    ((o = e.rootContexts),
                    (s = e.routeReuseStrategy),
                    (a = function (t) {
                      return e.triggerEvent(t);
                    }),
                    tt(function (t) {
                      return (
                        new Gf(
                          s,
                          t.targetRouterState,
                          t.currentRouterState,
                          a
                        ).activate(o),
                        t
                      );
                    })),
                    hc({
                      next: function () {
                        u = !0;
                      },
                      complete: function () {
                        u = !0;
                      },
                    }),
                    ((r = function () {
                      if (!u && !c) {
                        e.resetUrlToCurrentUrlTree();
                        var r = new Ph(
                          t.id,
                          e.serializeUrl(t.extractedUrl),
                          "Navigation ID " +
                            t.id +
                            " is not equal to the current navigation id " +
                            e.navigationId
                        );
                        n.next(r), t.resolve(!1);
                      }
                    }),
                    function (t) {
                      return t.lift(new Lc(r));
                    }),
                    wc(function (r) {
                      if (((c = !0), (a = r) && a[qh])) {
                        e.navigated = !0;
                        var o = td(r.url);
                        o ||
                          e.resetStateAndUrl(
                            t.currentRouterState,
                            t.currentUrlTree,
                            t.rawUrl
                          );
                        var i = new Ph(
                          t.id,
                          e.serializeUrl(t.extractedUrl),
                          r.message
                        );
                        n.next(i), t.resolve(!1), o && e.navigateByUrl(r.url);
                      } else {
                        e.resetStateAndUrl(
                          t.currentRouterState,
                          t.currentUrlTree,
                          t.rawUrl
                        );
                        var s = new Oh(t.id, e.serializeUrl(t.extractedUrl), r);
                        n.next(s);
                        try {
                          t.resolve(e.errorHandler(r));
                        } catch (l) {
                          t.reject(l);
                        }
                      }
                      var a;
                      return Yu;
                    })
                  );
                })
              );
            }),
            (t.prototype.resetRootComponentType = function (t) {
              (this.rootComponentType = t),
                (this.routerState.root.component = this.rootComponentType);
            }),
            (t.prototype.getTransition = function () {
              return this.transitions.value;
            }),
            (t.prototype.setTransition = function (t) {
              this.transitions.next(i({}, this.getTransition(), t));
            }),
            (t.prototype.initialNavigation = function () {
              this.setUpLocationChangeListener(),
                0 === this.navigationId &&
                  this.navigateByUrl(this.location.path(!0), {
                    replaceUrl: !0,
                  });
            }),
            (t.prototype.setUpLocationChangeListener = function () {
              var t = this;
              this.locationSubscription ||
                (this.locationSubscription = this.location.subscribe(function (
                  e
                ) {
                  var n = t.parseUrl(e.url),
                    r = "popstate" === e.type ? "popstate" : "hashchange",
                    o =
                      e.state && e.state.navigationId
                        ? { navigationId: e.state.navigationId }
                        : null;
                  setTimeout(function () {
                    t.scheduleNavigation(n, r, o, { replaceUrl: !0 });
                  }, 0);
                }));
            }),
            Object.defineProperty(t.prototype, "url", {
              get: function () {
                return this.serializeUrl(this.currentUrlTree);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.triggerEvent = function (t) {
              this.events.next(t);
            }),
            (t.prototype.resetConfig = function (t) {
              Qh(t),
                (this.config = t.map(Gh)),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1);
            }),
            (t.prototype.ngOnDestroy = function () {
              this.dispose();
            }),
            (t.prototype.dispose = function () {
              this.locationSubscription &&
                (this.locationSubscription.unsubscribe(),
                (this.locationSubscription = null));
            }),
            (t.prototype.createUrlTree = function (t, e) {
              void 0 === e && (e = {});
              var n = e.relativeTo,
                r = e.queryParams,
                o = e.fragment,
                s = e.preserveQueryParams,
                a = e.queryParamsHandling,
                l = e.preserveFragment;
              wo() &&
                s &&
                console &&
                console.warn &&
                console.warn(
                  "preserveQueryParams is deprecated, use queryParamsHandling instead."
                );
              var u = n || this.routerState.root,
                p = l ? this.currentUrlTree.fragment : o,
                h = null;
              if (a)
                switch (a) {
                  case "merge":
                    h = i({}, this.currentUrlTree.queryParams, r);
                    break;
                  case "preserve":
                    h = this.currentUrlTree.queryParams;
                    break;
                  default:
                    h = r || null;
                }
              else h = s ? this.currentUrlTree.queryParams : r || null;
              return (
                null !== h && (h = this.removeEmptyProps(h)),
                (function (t, e, n, r, o) {
                  if (0 === n.length) return Uf(e.root, e.root, e, r, o);
                  var i = (function (t) {
                    if (
                      "string" == typeof t[0] &&
                      1 === t.length &&
                      "/" === t[0]
                    )
                      return new Bf(!0, 0, t);
                    var e = 0,
                      n = !1,
                      r = t.reduce(function (t, r, o) {
                        if ("object" == typeof r && null != r) {
                          if (r.outlets) {
                            var i = {};
                            return (
                              ef(r.outlets, function (t, e) {
                                i[e] = "string" == typeof t ? t.split("/") : t;
                              }),
                              c(t, [{ outlets: i }])
                            );
                          }
                          if (r.segmentPath) return c(t, [r.segmentPath]);
                        }
                        return "string" != typeof r
                          ? c(t, [r])
                          : 0 === o
                          ? (r.split("/").forEach(function (r, o) {
                              (0 == o && "." === r) ||
                                (0 == o && "" === r
                                  ? (n = !0)
                                  : ".." === r
                                  ? e++
                                  : "" != r && t.push(r));
                            }),
                            t)
                          : c(t, [r]);
                      }, []);
                    return new Bf(n, e, r);
                  })(n);
                  if (i.toRoot()) return Uf(e.root, new sf([], {}), e, r, o);
                  var s = (function (t, n, r) {
                      if (t.isAbsolute) return new zf(e.root, !0, 0);
                      if (-1 === r.snapshot._lastPathIndex)
                        return new zf(r.snapshot._urlSegment, !0, 0);
                      var o = Vf(t.commands[0]) ? 0 : 1;
                      return (function (e, n, i) {
                        for (
                          var s = r.snapshot._urlSegment,
                            a = r.snapshot._lastPathIndex + o,
                            l = t.numberOfDoubleDots;
                          l > a;

                        ) {
                          if (((l -= a), !(s = s.parent)))
                            throw new Error("Invalid number of '../'");
                          a = s.segments.length;
                        }
                        return new zf(s, !1, a - l);
                      })();
                    })(i, 0, t),
                    a = s.processChildren
                      ? Yf(s.segmentGroup, s.index, i.commands)
                      : Wf(s.segmentGroup, s.index, i.commands);
                  return Uf(s.segmentGroup, a, e, r, o);
                })(u, this.currentUrlTree, t, h, p)
              );
            }),
            (t.prototype.navigateByUrl = function (t, e) {
              void 0 === e && (e = { skipLocationChange: !1 }),
                wo() &&
                  this.isNgZoneEnabled &&
                  !xi.isInAngularZone() &&
                  this.console.warn(
                    "Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?"
                  );
              var n = td(t) ? t : this.parseUrl(t),
                r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
              return this.scheduleNavigation(r, "imperative", null, e);
            }),
            (t.prototype.navigate = function (t, e) {
              return (
                void 0 === e && (e = { skipLocationChange: !1 }),
                (function (t) {
                  for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (null == n)
                      throw new Error(
                        "The requested path contains " +
                          n +
                          " segment at index " +
                          e
                      );
                  }
                })(t),
                this.navigateByUrl(this.createUrlTree(t, e), e)
              );
            }),
            (t.prototype.serializeUrl = function (t) {
              return this.urlSerializer.serialize(t);
            }),
            (t.prototype.parseUrl = function (t) {
              var e;
              try {
                e = this.urlSerializer.parse(t);
              } catch (n) {
                e = this.malformedUriErrorHandler(n, this.urlSerializer, t);
              }
              return e;
            }),
            (t.prototype.isActive = function (t, e) {
              if (td(t)) return rf(this.currentUrlTree, t, e);
              var n = this.parseUrl(t);
              return rf(this.currentUrlTree, n, e);
            }),
            (t.prototype.removeEmptyProps = function (t) {
              return Object.keys(t).reduce(function (e, n) {
                var r = t[n];
                return null != r && (e[n] = r), e;
              }, {});
            }),
            (t.prototype.processNavigations = function () {
              var t = this;
              this.navigations.subscribe(
                function (e) {
                  (t.navigated = !0),
                    (t.lastSuccessfulId = e.id),
                    t.events.next(
                      new xh(
                        e.id,
                        t.serializeUrl(e.extractedUrl),
                        t.serializeUrl(t.currentUrlTree)
                      )
                    ),
                    e.resolve(!0);
                },
                function (e) {
                  t.console.warn("Unhandled Navigation Error: ");
                }
              );
            }),
            (t.prototype.scheduleNavigation = function (t, e, n, r) {
              var o = this.getTransition();
              if (
                o &&
                "imperative" !== e &&
                "imperative" === o.source &&
                o.rawUrl.toString() === t.toString()
              )
                return Promise.resolve(!0);
              if (
                o &&
                "hashchange" == e &&
                "popstate" === o.source &&
                o.rawUrl.toString() === t.toString()
              )
                return Promise.resolve(!0);
              if (
                o &&
                "popstate" == e &&
                "hashchange" === o.source &&
                o.rawUrl.toString() === t.toString()
              )
                return Promise.resolve(!0);
              var i = null,
                s = null,
                a = new Promise(function (t, e) {
                  (i = t), (s = e);
                }),
                l = ++this.navigationId;
              return (
                this.setTransition({
                  id: l,
                  source: e,
                  state: n,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.rawUrlTree,
                  rawUrl: t,
                  extras: r,
                  resolve: i,
                  reject: s,
                  promise: a,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState,
                }),
                a.catch(function (t) {
                  return Promise.reject(t);
                })
              );
            }),
            (t.prototype.setBrowserUrl = function (t, e, n) {
              var r = this.urlSerializer.serialize(t);
              this.location.isCurrentPathEqualTo(r) || e
                ? this.location.replaceState(r, "", { navigationId: n })
                : this.location.go(r, "", { navigationId: n });
            }),
            (t.prototype.resetStateAndUrl = function (t, e, n) {
              (this.routerState = t),
                (this.currentUrlTree = e),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(
                  this.currentUrlTree,
                  n
                )),
                this.resetUrlToCurrentUrlTree();
            }),
            (t.prototype.resetUrlToCurrentUrlTree = function () {
              this.location.replaceState(
                this.urlSerializer.serialize(this.rawUrlTree),
                "",
                { navigationId: this.lastSuccessfulId }
              );
            }),
            t
          );
        })(),
        zd = (function () {
          return function () {
            (this.outlet = null),
              (this.route = null),
              (this.resolver = null),
              (this.children = new qd()),
              (this.attachRef = null);
          };
        })(),
        qd = (function () {
          function t() {
            this.contexts = new Map();
          }
          return (
            (t.prototype.onChildOutletCreated = function (t, e) {
              var n = this.getOrCreateContext(t);
              (n.outlet = e), this.contexts.set(t, n);
            }),
            (t.prototype.onChildOutletDestroyed = function (t) {
              var e = this.getContext(t);
              e && (e.outlet = null);
            }),
            (t.prototype.onOutletDeactivated = function () {
              var t = this.contexts;
              return (this.contexts = new Map()), t;
            }),
            (t.prototype.onOutletReAttached = function (t) {
              this.contexts = t;
            }),
            (t.prototype.getOrCreateContext = function (t) {
              var e = this.getContext(t);
              return e || ((e = new zd()), this.contexts.set(t, e)), e;
            }),
            (t.prototype.getContext = function (t) {
              return this.contexts.get(t) || null;
            }),
            t
          );
        })(),
        Wd = (function () {
          function t(t, e, n, r, o) {
            (this.parentContexts = t),
              (this.location = e),
              (this.resolver = n),
              (this.changeDetector = o),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new qo()),
              (this.deactivateEvents = new qo()),
              (this.name = r || Uh),
              t.onChildOutletCreated(this.name, this);
          }
          return (
            (t.prototype.ngOnDestroy = function () {
              this.parentContexts.onChildOutletDestroyed(this.name);
            }),
            (t.prototype.ngOnInit = function () {
              if (!this.activated) {
                var t = this.parentContexts.getContext(this.name);
                t &&
                  t.route &&
                  (t.attachRef
                    ? this.attach(t.attachRef, t.route)
                    : this.activateWith(t.route, t.resolver || null));
              }
            }),
            Object.defineProperty(t.prototype, "isActivated", {
              get: function () {
                return !!this.activated;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "component", {
              get: function () {
                if (!this.activated) throw new Error("Outlet is not activated");
                return this.activated.instance;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "activatedRoute", {
              get: function () {
                if (!this.activated) throw new Error("Outlet is not activated");
                return this._activatedRoute;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "activatedRouteData", {
              get: function () {
                return this._activatedRoute
                  ? this._activatedRoute.snapshot.data
                  : {};
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.detach = function () {
              if (!this.activated) throw new Error("Outlet is not activated");
              this.location.detach();
              var t = this.activated;
              return (this.activated = null), (this._activatedRoute = null), t;
            }),
            (t.prototype.attach = function (t, e) {
              (this.activated = t),
                (this._activatedRoute = e),
                this.location.insert(t.hostView);
            }),
            (t.prototype.deactivate = function () {
              if (this.activated) {
                var t = this.component;
                this.activated.destroy(),
                  (this.activated = null),
                  (this._activatedRoute = null),
                  this.deactivateEvents.emit(t);
              }
            }),
            (t.prototype.activateWith = function (t, e) {
              if (this.isActivated)
                throw new Error("Cannot activate an already activated outlet");
              this._activatedRoute = t;
              var n = (e = e || this.resolver).resolveComponentFactory(
                  t._futureSnapshot.routeConfig.component
                ),
                r = this.parentContexts.getOrCreateContext(this.name).children,
                o = new Yd(t, r, this.location.injector);
              (this.activated = this.location.createComponent(
                n,
                this.location.length,
                o
              )),
                this.changeDetector.markForCheck(),
                this.activateEvents.emit(this.activated.instance);
            }),
            t
          );
        })(),
        Yd = (function () {
          function t(t, e, n) {
            (this.route = t), (this.childContexts = e), (this.parent = n);
          }
          return (
            (t.prototype.get = function (t, e) {
              return t === If
                ? this.route
                : t === qd
                ? this.childContexts
                : this.parent.get(t, e);
            }),
            t
          );
        })(),
        Xd = (function () {
          return function () {};
        })(),
        Qd = (function () {
          function t() {}
          return (
            (t.prototype.preload = function (t, e) {
              return e().pipe(
                wc(function () {
                  return Ku(null);
                })
              );
            }),
            t
          );
        })(),
        Kd = (function () {
          function t() {}
          return (
            (t.prototype.preload = function (t, e) {
              return Ku(null);
            }),
            t
          );
        })(),
        Zd = (function () {
          function t(t, e, n, r, o) {
            (this.router = t),
              (this.injector = r),
              (this.preloadingStrategy = o),
              (this.loader = new jd(
                e,
                n,
                function (e) {
                  return t.triggerEvent(new Ah(e));
                },
                function (e) {
                  return t.triggerEvent(new Nh(e));
                }
              ));
          }
          return (
            (t.prototype.setUpPreloading = function () {
              var t = this;
              this.subscription = this.router.events
                .pipe(
                  oc(function (t) {
                    return t instanceof xh;
                  }),
                  jc(function () {
                    return t.preload();
                  })
                )
                .subscribe(function () {});
            }),
            (t.prototype.preload = function () {
              var t = this.injector.get(tr);
              return this.processRoutes(t, this.router.config);
            }),
            (t.prototype.ngOnDestroy = function () {
              this.subscription.unsubscribe();
            }),
            (t.prototype.processRoutes = function (t, e) {
              var n,
                r,
                o = [];
              try {
                for (var i = l(e), s = i.next(); !s.done; s = i.next()) {
                  var a = s.value;
                  if (a.loadChildren && !a.canLoad && a._loadedConfig) {
                    var u = a._loadedConfig;
                    o.push(this.processRoutes(u.module, u.routes));
                  } else
                    a.loadChildren && !a.canLoad
                      ? o.push(this.preloadConfig(t, a))
                      : a.children && o.push(this.processRoutes(t, a.children));
                }
              } catch (c) {
                n = { error: c };
              } finally {
                try {
                  s && !s.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return ot(o).pipe(
                ut(),
                tt(function (t) {})
              );
            }),
            (t.prototype.preloadConfig = function (t, e) {
              var n = this;
              return this.preloadingStrategy.preload(e, function () {
                return n.loader.load(t.injector, e).pipe(
                  it(function (t) {
                    return (
                      (e._loadedConfig = t), n.processRoutes(t.module, t.routes)
                    );
                  })
                );
              });
            }),
            t
          );
        })(),
        Gd = (function () {
          function t(t, e, n) {
            void 0 === n && (n = {}),
              (this.router = t),
              (this.viewportScroller = e),
              (this.options = n),
              (this.lastId = 0),
              (this.lastSource = "imperative"),
              (this.restoredId = 0),
              (this.store = {}),
              (n.scrollPositionRestoration =
                n.scrollPositionRestoration || "disabled"),
              (n.anchorScrolling = n.anchorScrolling || "disabled");
          }
          return (
            (t.prototype.init = function () {
              "disabled" !== this.options.scrollPositionRestoration &&
                this.viewportScroller.setHistoryScrollRestoration("manual"),
                (this.routerEventsSubscription = this.createScrollEvents()),
                (this.scrollEventsSubscription = this.consumeScrollEvents());
            }),
            (t.prototype.createScrollEvents = function () {
              var t = this;
              return this.router.events.subscribe(function (e) {
                e instanceof Eh
                  ? ((t.store[t.lastId] =
                      t.viewportScroller.getScrollPosition()),
                    (t.lastSource = e.navigationTrigger),
                    (t.restoredId = e.restoredState
                      ? e.restoredState.navigationId
                      : 0))
                  : e instanceof xh &&
                    ((t.lastId = e.id),
                    t.scheduleScrollEvent(
                      e,
                      t.router.parseUrl(e.urlAfterRedirects).fragment
                    ));
              });
            }),
            (t.prototype.consumeScrollEvents = function () {
              var t = this;
              return this.router.events.subscribe(function (e) {
                e instanceof Hh &&
                  (e.position
                    ? "top" === t.options.scrollPositionRestoration
                      ? t.viewportScroller.scrollToPosition([0, 0])
                      : "enabled" === t.options.scrollPositionRestoration &&
                        t.viewportScroller.scrollToPosition(e.position)
                    : e.anchor && "enabled" === t.options.anchorScrolling
                    ? t.viewportScroller.scrollToAnchor(e.anchor)
                    : "disabled" !== t.options.scrollPositionRestoration &&
                      t.viewportScroller.scrollToPosition([0, 0]));
              });
            }),
            (t.prototype.scheduleScrollEvent = function (t, e) {
              this.router.triggerEvent(
                new Hh(
                  t,
                  "popstate" === this.lastSource
                    ? this.store[this.restoredId]
                    : null,
                  e
                )
              );
            }),
            (t.prototype.ngOnDestroy = function () {
              this.routerEventsSubscription &&
                this.routerEventsSubscription.unsubscribe(),
                this.scrollEventsSubscription &&
                  this.scrollEventsSubscription.unsubscribe();
            }),
            t
          );
        })(),
        $d = new Ot("ROUTER_CONFIGURATION"),
        Jd = new Ot("ROUTER_FORROOT_GUARD"),
        tg = [
          zc,
          { provide: cf, useClass: pf },
          {
            provide: Bd,
            useFactory: ag,
            deps: [
              Bi,
              cf,
              qd,
              zc,
              Vn,
              qi,
              mi,
              Dd,
              $d,
              [Ld, new zt()],
              [Ad, new zt()],
            ],
          },
          qd,
          { provide: If, useFactory: lg, deps: [Bd] },
          { provide: qi, useClass: Qi },
          Zd,
          Kd,
          Qd,
          { provide: $d, useValue: { enableTracing: !1 } },
        ];
      function eg() {
        return new Li("Router", Bd);
      }
      var ng = (function () {
        function t(t, e) {}
        var e;
        return (
          (e = t),
          (t.forRoot = function (t, n) {
            return {
              ngModule: e,
              providers: [
                tg,
                sg(t),
                {
                  provide: Jd,
                  useFactory: ig,
                  deps: [[Bd, new zt(), new Wt()]],
                },
                { provide: $d, useValue: n || {} },
                {
                  provide: Uc,
                  useFactory: og,
                  deps: [Hc, [new Bt(Bc), new zt()], $d],
                },
                { provide: Gd, useFactory: rg, deps: [Bd, hp, $d] },
                {
                  provide: Xd,
                  useExisting:
                    n && n.preloadingStrategy ? n.preloadingStrategy : Kd,
                },
                { provide: Li, multi: !0, useFactory: eg },
                [
                  ug,
                  { provide: si, multi: !0, useFactory: cg, deps: [ug] },
                  { provide: hg, useFactory: pg, deps: [ug] },
                  { provide: fi, multi: !0, useExisting: hg },
                ],
              ],
            };
          }),
          (t.forChild = function (t) {
            return { ngModule: e, providers: [sg(t)] };
          }),
          t
        );
      })();
      function rg(t, e, n) {
        return n.scrollOffset && e.setOffset(n.scrollOffset), new Gd(t, e, n);
      }
      function og(t, e, n) {
        return (
          void 0 === n && (n = {}), n.useHash ? new Wc(t, e) : new Yc(t, e)
        );
      }
      function ig(t) {
        if (t)
          throw new Error(
            "RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead."
          );
        return "guarded";
      }
      function sg(t) {
        return [
          { provide: Mt, multi: !0, useValue: t },
          { provide: Dd, multi: !0, useValue: t },
        ];
      }
      function ag(t, e, n, r, o, i, s, a, l, u, c) {
        void 0 === l && (l = {});
        var p = new Bd(null, e, n, r, o, i, s, Jh(a));
        if (
          (u && (p.urlHandlingStrategy = u),
          c && (p.routeReuseStrategy = c),
          l.errorHandler && (p.errorHandler = l.errorHandler),
          l.malformedUriErrorHandler &&
            (p.malformedUriErrorHandler = l.malformedUriErrorHandler),
          l.enableTracing)
        ) {
          var h = gp();
          p.events.subscribe(function (t) {
            h.logGroup("Router Event: " + t.constructor.name),
              h.log(t.toString()),
              h.log(t),
              h.logGroupEnd();
          });
        }
        return (
          l.onSameUrlNavigation &&
            (p.onSameUrlNavigation = l.onSameUrlNavigation),
          l.paramsInheritanceStrategy &&
            (p.paramsInheritanceStrategy = l.paramsInheritanceStrategy),
          l.urlUpdateStrategy && (p.urlUpdateStrategy = l.urlUpdateStrategy),
          l.relativeLinkResolution &&
            (p.relativeLinkResolution = l.relativeLinkResolution),
          p
        );
      }
      function lg(t) {
        return t.routerState.root;
      }
      var ug = (function () {
        function t(t) {
          (this.injector = t),
            (this.initNavigation = !1),
            (this.resultOfPreactivationDone = new H());
        }
        return (
          (t.prototype.appInitializer = function () {
            var t = this;
            return this.injector
              .get(Vc, Promise.resolve(null))
              .then(function () {
                var e = null,
                  n = new Promise(function (t) {
                    return (e = t);
                  }),
                  r = t.injector.get(Bd),
                  o = t.injector.get($d);
                if (t.isLegacyDisabled(o) || t.isLegacyEnabled(o)) e(!0);
                else if ("disabled" === o.initialNavigation)
                  r.setUpLocationChangeListener(), e(!0);
                else {
                  if ("enabled" !== o.initialNavigation)
                    throw new Error(
                      "Invalid initialNavigation options: '" +
                        o.initialNavigation +
                        "'"
                    );
                  (r.hooks.afterPreactivation = function () {
                    return t.initNavigation
                      ? Ku(null)
                      : ((t.initNavigation = !0),
                        e(!0),
                        t.resultOfPreactivationDone);
                  }),
                    r.initialNavigation();
                }
                return n;
              });
          }),
          (t.prototype.bootstrapListener = function (t) {
            var e = this.injector.get($d),
              n = this.injector.get(Zd),
              r = this.injector.get(Gd),
              o = this.injector.get(Bd),
              i = this.injector.get(Bi);
            t === i.components[0] &&
              (this.isLegacyEnabled(e)
                ? o.initialNavigation()
                : this.isLegacyDisabled(e) && o.setUpLocationChangeListener(),
              n.setUpPreloading(),
              r.init(),
              o.resetRootComponentType(i.componentTypes[0]),
              this.resultOfPreactivationDone.next(null),
              this.resultOfPreactivationDone.complete());
          }),
          (t.prototype.isLegacyEnabled = function (t) {
            return (
              "legacy_enabled" === t.initialNavigation ||
              !0 === t.initialNavigation ||
              void 0 === t.initialNavigation
            );
          }),
          (t.prototype.isLegacyDisabled = function (t) {
            return (
              "legacy_disabled" === t.initialNavigation ||
              !1 === t.initialNavigation
            );
          }),
          t
        );
      })();
      function cg(t) {
        return t.appInitializer.bind(t);
      }
      function pg(t) {
        return t.bootstrapListener.bind(t);
      }
      var hg = new Ot("Router Initializer"),
        fg = qs({ encapsulation: 2, styles: [], data: {} });
      function dg(t) {
        return Al(
          0,
          [
            (t()(),
            ma(
              0,
              16777216,
              null,
              null,
              1,
              "router-outlet",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            sl(1, 212992, null, 0, Wd, [qd, Gi, Jr, [8, null], Ji], null, null),
          ],
          function (t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      function gg(t) {
        return Al(
          0,
          [
            (t()(),
            ma(
              0,
              0,
              null,
              null,
              1,
              "ng-component",
              [],
              null,
              null,
              null,
              dg,
              fg
            )),
            sl(1, 49152, null, 0, Vh, [], null, null),
          ],
          null,
          null
        );
      }
      var vg,
        yg = ja("ng-component", Vh, gg, {}, {}, []),
        mg = (function () {
          function t(t, e) {
            (this.open = t), (this.close = e || t);
          }
          return (
            (t.prototype.isManual = function () {
              return "manual" === this.open || "manual" === this.close;
            }),
            t
          );
        })(),
        bg = {
          hover: ["mouseover", "mouseout"],
          focus: ["focusin", "focusout"],
        },
        _g = ("undefined" != typeof window && window) || {};
      function wg() {
        return (
          void 0 === _g ||
          (void 0 === _g.__theme
            ? vg
              ? "bs3" === vg
              : "bs3" ===
                (vg = (function () {
                  if ("undefined" == typeof document) return null;
                  var t = document.createElement("span");
                  (t.innerText = "test bs version"),
                    document.body.appendChild(t),
                    t.classList.add("d-none");
                  var e = t.getBoundingClientRect();
                  return (
                    document.body.removeChild(t),
                    e && 0 === e.top ? "bs4" : "bs3"
                  );
                })())
            : "bs4" !== _g.__theme)
        );
      }
      "undefined" == typeof console || console;
      var Cg = (function () {
          return function (t, e, n) {
            (this.nodes = t), (this.viewRef = e), (this.componentRef = n);
          };
        })(),
        Sg = (function () {
          function t(t, e, n, r, o, i, s, a) {
            (this._viewContainerRef = t),
              (this._renderer = e),
              (this._elementRef = n),
              (this._injector = r),
              (this._componentFactoryResolver = o),
              (this._ngZone = i),
              (this._applicationRef = s),
              (this._posService = a),
              (this.onBeforeShow = new qo()),
              (this.onShown = new qo()),
              (this.onBeforeHide = new qo()),
              (this.onHidden = new qo()),
              (this._providers = []),
              (this._isHiding = !1),
              (this._listenOpts = {}),
              (this._globalListener = Function.prototype);
          }
          return (
            Object.defineProperty(t.prototype, "isShown", {
              get: function () {
                return !this._isHiding && !!this._componentRef;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.attach = function (t) {
              return (
                (this._componentFactory =
                  this._componentFactoryResolver.resolveComponentFactory(t)),
                this
              );
            }),
            (t.prototype.to = function (t) {
              return (this.container = t || this.container), this;
            }),
            (t.prototype.position = function (t) {
              return (
                (this.attachment = t.attachment || this.attachment),
                (this._elementRef = t.target || this._elementRef),
                this
              );
            }),
            (t.prototype.provide = function (t) {
              return this._providers.push(t), this;
            }),
            (t.prototype.show = function (t) {
              if (
                (void 0 === t && (t = {}),
                this._subscribePositioning(),
                (this._innerComponent = null),
                !this._componentRef)
              ) {
                this.onBeforeShow.emit(),
                  (this._contentRef = this._getContentRef(
                    t.content,
                    t.context,
                    t.initialState
                  ));
                var e = Vn.create({
                  providers: this._providers,
                  parent: this._injector,
                });
                (this._componentRef = this._componentFactory.create(
                  e,
                  this._contentRef.nodes
                )),
                  this._applicationRef.attachView(this._componentRef.hostView),
                  (this.instance = this._componentRef.instance),
                  Object.assign(this._componentRef.instance, t),
                  this.container instanceof no &&
                    this.container.nativeElement.appendChild(
                      this._componentRef.location.nativeElement
                    ),
                  "body" === this.container &&
                    "undefined" != typeof document &&
                    document
                      .querySelector(this.container)
                      .appendChild(this._componentRef.location.nativeElement),
                  !this.container &&
                    this._elementRef &&
                    this._elementRef.nativeElement.parentElement &&
                    this._elementRef.nativeElement.parentElement.appendChild(
                      this._componentRef.location.nativeElement
                    ),
                  this._contentRef.componentRef &&
                    ((this._innerComponent =
                      this._contentRef.componentRef.instance),
                    this._contentRef.componentRef.changeDetectorRef.markForCheck(),
                    this._contentRef.componentRef.changeDetectorRef.detectChanges()),
                  this._componentRef.changeDetectorRef.markForCheck(),
                  this._componentRef.changeDetectorRef.detectChanges(),
                  this.onShown.emit(this._componentRef.instance);
              }
              return this._registerOutsideClick(), this._componentRef;
            }),
            (t.prototype.hide = function () {
              if (!this._componentRef) return this;
              this.onBeforeHide.emit(this._componentRef.instance);
              var t = this._componentRef.location.nativeElement;
              return (
                t.parentNode.removeChild(t),
                this._contentRef.componentRef &&
                  this._contentRef.componentRef.destroy(),
                this._componentRef.destroy(),
                this._viewContainerRef &&
                  this._contentRef.viewRef &&
                  this._viewContainerRef.remove(
                    this._viewContainerRef.indexOf(this._contentRef.viewRef)
                  ),
                this._contentRef.viewRef && this._contentRef.viewRef.destroy(),
                (this._contentRef = null),
                (this._componentRef = null),
                this._removeGlobalListener(),
                this.onHidden.emit(),
                this
              );
            }),
            (t.prototype.toggle = function () {
              this.isShown ? this.hide() : this.show();
            }),
            (t.prototype.dispose = function () {
              this.isShown && this.hide(),
                this._unsubscribePositioning(),
                this._unregisterListenersFn && this._unregisterListenersFn();
            }),
            (t.prototype.listen = function (t) {
              var e = this;
              (this.triggers = t.triggers || this.triggers),
                (this._listenOpts.outsideClick = t.outsideClick),
                (t.target = t.target || this._elementRef.nativeElement);
              var n = (this._listenOpts.hide = function () {
                  return t.hide ? t.hide() : void e.hide();
                }),
                r = (this._listenOpts.show = function (n) {
                  t.show ? t.show(n) : e.show(n), n();
                });
              return (
                (this._unregisterListenersFn = (function (t, e) {
                  var n = (function (t, n) {
                      void 0 === n && (n = bg);
                      var r = (e.triggers || "").trim();
                      if (0 === r.length) return [];
                      var o = r
                          .split(/\s+/)
                          .map(function (t) {
                            return t.split(":");
                          })
                          .map(function (t) {
                            var e = n[t[0]] || t;
                            return new mg(e[0], e[1]);
                          }),
                        i = o.filter(function (t) {
                          return t.isManual();
                        });
                      if (i.length > 1)
                        throw new Error(
                          "Triggers parse error: only one manual trigger is allowed"
                        );
                      if (1 === i.length && o.length > 1)
                        throw new Error(
                          "Triggers parse error: manual trigger can't be mixed with other triggers"
                        );
                      return o;
                    })(),
                    r = e.target;
                  if (1 === n.length && n[0].isManual())
                    return Function.prototype;
                  var o = [],
                    i = [],
                    s = function () {
                      i.forEach(function (t) {
                        return o.push(t());
                      }),
                        (i.length = 0);
                    };
                  return (
                    n.forEach(function (n) {
                      var a = n.open === n.close,
                        l = a ? e.toggle : e.show;
                      a ||
                        i.push(function () {
                          return t.listen(r, n.close, e.hide);
                        }),
                        o.push(
                          t.listen(r, n.open, function () {
                            return l(s);
                          })
                        );
                    }),
                    function () {
                      o.forEach(function (t) {
                        return t();
                      });
                    }
                  );
                })(this._renderer, {
                  target: t.target,
                  triggers: t.triggers,
                  show: r,
                  hide: n,
                  toggle: function (t) {
                    e.isShown ? n() : r(t);
                  },
                })),
                this
              );
            }),
            (t.prototype._removeGlobalListener = function () {
              this._globalListener &&
                (this._globalListener(), (this._globalListener = null));
            }),
            (t.prototype.attachInline = function (t, e) {
              return (this._inlineViewRef = t.createEmbeddedView(e)), this;
            }),
            (t.prototype._registerOutsideClick = function () {
              var t = this;
              if (
                this._componentRef &&
                this._componentRef.location &&
                this._listenOpts.outsideClick
              ) {
                var e = this._componentRef.location.nativeElement;
                setTimeout(function () {
                  var n;
                  t._globalListener = (n = {
                    targets: [e, t._elementRef.nativeElement],
                    outsideClick: t._listenOpts.outsideClick,
                    hide: function () {
                      return t._listenOpts.hide();
                    },
                  }).outsideClick
                    ? t._renderer.listen("document", "click", function (t) {
                        (n.target && n.target.contains(t.target)) ||
                          (n.targets &&
                            n.targets.some(function (e) {
                              return e.contains(t.target);
                            })) ||
                          n.hide();
                      })
                    : Function.prototype;
                });
              }
            }),
            (t.prototype.getInnerComponent = function () {
              return this._innerComponent;
            }),
            (t.prototype._subscribePositioning = function () {
              var t = this;
              !this._zoneSubscription &&
                this.attachment &&
                (this._zoneSubscription = this._ngZone.onStable.subscribe(
                  function () {
                    t._componentRef &&
                      t._posService.position({
                        element: t._componentRef.location,
                        target: t._elementRef,
                        attachment: t.attachment,
                        appendToBody: "body" === t.container,
                      });
                  }
                ));
            }),
            (t.prototype._unsubscribePositioning = function () {
              this._zoneSubscription &&
                (this._zoneSubscription.unsubscribe(),
                (this._zoneSubscription = null));
            }),
            (t.prototype._getContentRef = function (t, e, n) {
              if (!t) return new Cg([]);
              if (t instanceof Wo) {
                if (this._viewContainerRef) {
                  var r = this._viewContainerRef.createEmbeddedView(t, e);
                  return r.markForCheck(), new Cg([r.rootNodes], r);
                }
                var o = t.createEmbeddedView({});
                return (
                  this._applicationRef.attachView(o), new Cg([o.rootNodes], o)
                );
              }
              if ("function" == typeof t) {
                var i =
                    this._componentFactoryResolver.resolveComponentFactory(t),
                  s = Vn.create({
                    providers: this._providers,
                    parent: this._injector,
                  }),
                  a = i.create(s);
                return (
                  Object.assign(a.instance, n),
                  this._applicationRef.attachView(a.hostView),
                  new Cg([[a.location.nativeElement]], a.hostView, a)
                );
              }
              return new Cg([[this._renderer.createText("" + t)]]);
            }),
            t
          );
        })(),
        Eg = (function () {
          function t(t, e, n, r, o) {
            (this._componentFactoryResolver = t),
              (this._ngZone = e),
              (this._injector = n),
              (this._posService = r),
              (this._applicationRef = o);
          }
          return (
            (t.prototype.createLoader = function (t, e, n) {
              return new Sg(
                e,
                n,
                t,
                this._injector,
                this._componentFactoryResolver,
                this._ngZone,
                this._applicationRef,
                this._posService
              );
            }),
            t
          );
        })(),
        xg = new ((function () {
          function t() {}
          return (
            (t.prototype.position = function (t, e) {
              var n;
              void 0 === e && (e = !0);
              var r = {
                width: 0,
                height: 0,
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              };
              if ("fixed" === this.getStyle(t, "position")) {
                var o = t.getBoundingClientRect();
                n = {
                  width: o.width,
                  height: o.height,
                  top: o.top,
                  bottom: o.bottom,
                  left: o.left,
                  right: o.right,
                };
              } else {
                var i = this.offsetParent(t);
                (n = this.offset(t, !1)),
                  i !== document.documentElement && (r = this.offset(i, !1)),
                  (r.top += i.clientTop),
                  (r.left += i.clientLeft);
              }
              return (
                (n.top -= r.top),
                (n.bottom -= r.top),
                (n.left -= r.left),
                (n.right -= r.left),
                e &&
                  ((n.top = Math.round(n.top)),
                  (n.bottom = Math.round(n.bottom)),
                  (n.left = Math.round(n.left)),
                  (n.right = Math.round(n.right))),
                n
              );
            }),
            (t.prototype.offset = function (t, e) {
              void 0 === e && (e = !0);
              var n = t.getBoundingClientRect(),
                r = window.pageYOffset - document.documentElement.clientTop,
                o = window.pageXOffset - document.documentElement.clientLeft,
                i = {
                  height: n.height || t.offsetHeight,
                  width: n.width || t.offsetWidth,
                  top: n.top + r,
                  bottom: n.bottom + r,
                  left: n.left + o,
                  right: n.right + o,
                };
              return (
                e &&
                  ((i.height = Math.round(i.height)),
                  (i.width = Math.round(i.width)),
                  (i.top = Math.round(i.top)),
                  (i.bottom = Math.round(i.bottom)),
                  (i.left = Math.round(i.left)),
                  (i.right = Math.round(i.right))),
                i
              );
            }),
            (t.prototype.positionElements = function (t, e, n, r) {
              var o = r ? this.offset(t, !1) : this.position(t, !1),
                i = this.getAllStyles(e),
                s = e.getBoundingClientRect(),
                a = n.split(" ")[0] || "top",
                l = n.split(" ")[1] || "center",
                u = {
                  height: s.height || e.offsetHeight,
                  width: s.width || e.offsetWidth,
                  top: 0,
                  bottom: s.height || e.offsetHeight,
                  left: 0,
                  right: s.width || e.offsetWidth,
                },
                c = {
                  top: o.top,
                  center: o.top + o.height / 2 - u.height / 2,
                  bottom: o.top + o.height,
                },
                p = {
                  left: o.left,
                  center: o.left + o.width / 2 - u.width / 2,
                  right: o.left + o.width,
                };
              if ("auto" === a) {
                var h = this.autoPosition(u, o, e, l);
                h || (h = this.autoPosition(u, o, e)),
                  h && (a = h),
                  e.classList.add(a);
              }
              switch (a) {
                case "top":
                  (u.top = o.top - (u.height + parseFloat(i.marginBottom))),
                    (u.bottom += o.top - u.height),
                    (u.left = p[l]),
                    (u.right += p[l]);
                  break;
                case "bottom":
                  (u.top = c[a]),
                    (u.bottom += c[a]),
                    (u.left = p[l]),
                    (u.right += p[l]);
                  break;
                case "left":
                  (u.top = c[l]),
                    (u.bottom += c[l]),
                    (u.left = o.left - (u.width + parseFloat(i.marginRight))),
                    (u.right += o.left - u.width);
                  break;
                case "right":
                  (u.top = c[l]),
                    (u.bottom += c[l]),
                    (u.left = p[a]),
                    (u.right += p[a]);
              }
              return (
                (u.top = Math.round(u.top)),
                (u.bottom = Math.round(u.bottom)),
                (u.left = Math.round(u.left)),
                (u.right = Math.round(u.right)),
                u
              );
            }),
            (t.prototype.autoPosition = function (t, e, n, r) {
              return (!r || "right" === r) && t.left + e.left - t.width < 0
                ? "right"
                : (!r || "top" === r) &&
                  t.bottom + e.bottom + t.height > window.innerHeight
                ? "top"
                : (!r || "bottom" === r) && t.top + e.top - t.height < 0
                ? "bottom"
                : (!r || "left" === r) &&
                  t.right + e.right + t.width > window.innerWidth
                ? "left"
                : null;
            }),
            (t.prototype.getAllStyles = function (t) {
              return window.getComputedStyle(t);
            }),
            (t.prototype.getStyle = function (t, e) {
              return this.getAllStyles(t)[e];
            }),
            (t.prototype.isStaticPositioned = function (t) {
              return "static" === (this.getStyle(t, "position") || "static");
            }),
            (t.prototype.offsetParent = function (t) {
              for (
                var e = t.offsetParent || document.documentElement;
                e &&
                e !== document.documentElement &&
                this.isStaticPositioned(e);

              )
                e = e.offsetParent;
              return e || document.documentElement;
            }),
            t
          );
        })())(),
        Pg = (function () {
          function t() {}
          return (
            (t.prototype.position = function (t) {
              var e = t.element,
                n = t.attachment,
                r = t.appendToBody;
              !(function (t, e, r, o) {
                var i = xg.positionElements(t, e, n, o);
                (e.style.top = i.top + "px"), (e.style.left = i.left + "px");
              })(Og(t.target), Og(e), 0, r);
            }),
            t
          );
        })();
      function Og(t) {
        return "string" == typeof t
          ? document.querySelector(t)
          : t instanceof no
          ? t.nativeElement
          : t;
      }
      var Tg = (function () {
          return function () {
            this.autoClose = !0;
          };
        })(),
        kg = (function () {
          return function () {
            var t = this;
            (this.direction = "down"),
              (this.isOpenChange = new qo()),
              (this.isDisabledChange = new qo()),
              (this.toggleClick = new qo()),
              (this.dropdownMenu = new Promise(function (e) {
                t.resolveDropdownMenu = e;
              }));
          };
        })(),
        Mg = (function () {
          function t(t, e, n, r) {
            var o = this;
            (this._state = t),
              (this.cd = e),
              (this._renderer = n),
              (this.isOpen = !1),
              (this._subscription = t.isOpenChange.subscribe(function (t) {
                o.isOpen = t;
                var e = r.nativeElement.querySelector(".dropdown-menu");
                e &&
                  !wg() &&
                  (o._renderer.addClass(e, "show"),
                  e.classList.contains("dropdown-menu-right") &&
                    (o._renderer.setStyle(e, "left", "auto"),
                    o._renderer.setStyle(e, "right", "0")),
                  "up" === o.direction &&
                    (o._renderer.setStyle(e, "top", "auto"),
                    o._renderer.setStyle(e, "transform", "translateY(-101%)"))),
                  o.cd.markForCheck(),
                  o.cd.detectChanges();
              }));
          }
          return (
            Object.defineProperty(t.prototype, "direction", {
              get: function () {
                return this._state.direction;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.ngOnDestroy = function () {
              this._subscription.unsubscribe();
            }),
            t
          );
        })(),
        Rg = (function () {
          function t(t, e, n, r, o, i) {
            (this._elementRef = t),
              (this._renderer = e),
              (this._viewContainerRef = n),
              (this._cis = r),
              (this._config = o),
              (this._state = i),
              (this._isInlineOpen = !1),
              (this._subscriptions = []),
              (this._isInited = !1),
              (this._state.autoClose = this._config.autoClose),
              (this._dropdown = this._cis
                .createLoader(
                  this._elementRef,
                  this._viewContainerRef,
                  this._renderer
                )
                .provide({ provide: kg, useValue: this._state })),
              (this.onShown = this._dropdown.onShown),
              (this.onHidden = this._dropdown.onHidden),
              (this.isOpenChange = this._state.isOpenChange);
          }
          return (
            Object.defineProperty(t.prototype, "autoClose", {
              get: function () {
                return this._state.autoClose;
              },
              set: function (t) {
                this._state.autoClose = t;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "isDisabled", {
              get: function () {
                return this._isDisabled;
              },
              set: function (t) {
                (this._isDisabled = t),
                  this._state.isDisabledChange.emit(t),
                  t && this.hide();
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "isOpen", {
              get: function () {
                return this._showInline
                  ? this._isInlineOpen
                  : this._dropdown.isShown;
              },
              set: function (t) {
                t ? this.show() : this.hide();
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "isBs4", {
              get: function () {
                return !wg();
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "_showInline", {
              get: function () {
                return !this.container;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.ngOnInit = function () {
              var t = this;
              this._isInited ||
                ((this._isInited = !0),
                this._dropdown.listen({
                  outsideClick: !1,
                  triggers: this.triggers,
                  show: function () {
                    return t.show();
                  },
                }),
                this._subscriptions.push(
                  this._state.toggleClick.subscribe(function (e) {
                    return t.toggle(e);
                  })
                ),
                this._subscriptions.push(
                  this._state.isDisabledChange
                    .pipe(
                      oc(function (t) {
                        return t;
                      })
                    )
                    .subscribe(function (e) {
                      return t.hide();
                    })
                ));
            }),
            (t.prototype.show = function () {
              var t = this;
              if (!this.isOpen && !this.isDisabled)
                return this._showInline
                  ? (this._inlinedMenu ||
                      this._state.dropdownMenu
                        .then(function (e) {
                          t._dropdown.attachInline(
                            e.viewContainer,
                            e.templateRef
                          ),
                            (t._inlinedMenu = t._dropdown._inlineViewRef),
                            t.addBs4Polyfills();
                        })
                        .catch(),
                    this.addBs4Polyfills(),
                    (this._isInlineOpen = !0),
                    this.onShown.emit(!0),
                    void this._state.isOpenChange.emit(!0))
                  : void this._state.dropdownMenu
                      .then(function (e) {
                        var n = t.dropup || (void 0 !== t.dropup && t.dropup);
                        t._state.direction = n ? "up" : "down";
                        var r = t.placement || (n ? "top left" : "bottom left");
                        t._dropdown
                          .attach(Mg)
                          .to(t.container)
                          .position({ attachment: r })
                          .show({ content: e.templateRef, placement: r }),
                          t._state.isOpenChange.emit(!0);
                      })
                      .catch();
            }),
            (t.prototype.hide = function () {
              this.isOpen &&
                (this._showInline
                  ? (this.removeShowClass(),
                    this.removeDropupStyles(),
                    (this._isInlineOpen = !1),
                    this.onHidden.emit(!0))
                  : this._dropdown.hide(),
                this._state.isOpenChange.emit(!1));
            }),
            (t.prototype.toggle = function (t) {
              return this.isOpen || !t ? this.hide() : this.show();
            }),
            (t.prototype.ngOnDestroy = function () {
              try {
                for (
                  var t = l(this._subscriptions), e = t.next();
                  !e.done;
                  e = t.next()
                )
                  e.value.unsubscribe();
              } catch (o) {
                n = { error: o };
              } finally {
                try {
                  e && !e.done && (r = t.return) && r.call(t);
                } finally {
                  if (n) throw n.error;
                }
              }
              var n, r;
              this._dropdown.dispose();
            }),
            (t.prototype.addBs4Polyfills = function () {
              wg() ||
                (this.addShowClass(),
                this.checkRightAlignment(),
                this.addDropupStyles());
            }),
            (t.prototype.addShowClass = function () {
              this._inlinedMenu &&
                this._inlinedMenu.rootNodes[0] &&
                this._renderer.addClass(this._inlinedMenu.rootNodes[0], "show");
            }),
            (t.prototype.removeShowClass = function () {
              this._inlinedMenu &&
                this._inlinedMenu.rootNodes[0] &&
                this._renderer.removeClass(
                  this._inlinedMenu.rootNodes[0],
                  "show"
                );
            }),
            (t.prototype.checkRightAlignment = function () {
              if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
                var t = this._inlinedMenu.rootNodes[0].classList.contains(
                  "dropdown-menu-right"
                );
                this._renderer.setStyle(
                  this._inlinedMenu.rootNodes[0],
                  "left",
                  t ? "auto" : "0"
                ),
                  this._renderer.setStyle(
                    this._inlinedMenu.rootNodes[0],
                    "right",
                    t ? "0" : "auto"
                  );
              }
            }),
            (t.prototype.addDropupStyles = function () {
              this._inlinedMenu &&
                this._inlinedMenu.rootNodes[0] &&
                (this._renderer.setStyle(
                  this._inlinedMenu.rootNodes[0],
                  "top",
                  this.dropup ? "auto" : "100%"
                ),
                this._renderer.setStyle(
                  this._inlinedMenu.rootNodes[0],
                  "transform",
                  this.dropup ? "translateY(-101%)" : "translateY(0)"
                ));
            }),
            (t.prototype.removeDropupStyles = function () {
              this._inlinedMenu &&
                this._inlinedMenu.rootNodes[0] &&
                (this._renderer.removeStyle(
                  this._inlinedMenu.rootNodes[0],
                  "top"
                ),
                this._renderer.removeStyle(
                  this._inlinedMenu.rootNodes[0],
                  "transform"
                ));
            }),
            t
          );
        })(),
        Ig = (function () {
          return function (t, e, n) {
            t.resolveDropdownMenu({ templateRef: n, viewContainer: e });
          };
        })(),
        Ag = (function () {
          function t(t, e) {
            var n = this;
            (this._state = t),
              (this._element = e),
              (this.isDisabled = null),
              (this._subscriptions = []),
              this._subscriptions.push(
                this._state.isOpenChange.subscribe(function (t) {
                  return (n.isOpen = t);
                })
              ),
              this._subscriptions.push(
                this._state.isDisabledChange.subscribe(function (t) {
                  return (n.isDisabled = t || null);
                })
              );
          }
          return (
            (t.prototype.onClick = function () {
              this.isDisabled || this._state.toggleClick.emit(!0);
            }),
            (t.prototype.onDocumentClick = function (t) {
              this._state.autoClose &&
                2 !== t.button &&
                !this._element.nativeElement.contains(t.target) &&
                this._state.toggleClick.emit(!1);
            }),
            (t.prototype.onEsc = function () {
              this._state.autoClose && this._state.toggleClick.emit(!1);
            }),
            (t.prototype.ngOnDestroy = function () {
              try {
                for (
                  var t = l(this._subscriptions), e = t.next();
                  !e.done;
                  e = t.next()
                )
                  e.value.unsubscribe();
              } catch (o) {
                n = { error: o };
              } finally {
                try {
                  e && !e.done && (r = t.return) && r.call(t);
                } finally {
                  if (n) throw n.error;
                }
              }
              var n, r;
            }),
            t
          );
        })(),
        Ng = (function () {
          function t() {}
          return (
            (t.forRoot = function (e) {
              return {
                ngModule: t,
                providers: [
                  Eg,
                  Pg,
                  kg,
                  { provide: Tg, useValue: e || { autoClose: !0 } },
                ],
              };
            }),
            t
          );
        })(),
        Dg = qs({ encapsulation: 2, styles: [], data: {} });
      function jg(t) {
        return Al(
          2,
          [
            (t()(),
            ma(
              0,
              0,
              null,
              null,
              1,
              "div",
              [],
              [
                [2, "dropup", null],
                [2, "dropdown", null],
                [2, "show", null],
                [2, "open", null],
              ],
              null,
              null,
              null,
              null
            )),
            Ol(null, 0),
          ],
          null,
          function (t, e) {
            var n = e.component;
            t(
              e,
              0,
              0,
              "up" === n.direction,
              "down" === n.direction,
              n.isOpen,
              n.isOpen
            );
          }
        );
      }
      function Lg(t) {
        return Al(
          0,
          [
            (t()(),
            ma(
              0,
              0,
              null,
              null,
              1,
              "bs-dropdown-container",
              [["style", "display:block;position: absolute;"]],
              null,
              null,
              null,
              jg,
              Dg
            )),
            sl(1, 180224, null, 0, Mg, [kg, Ji, ao, no], null, null),
          ],
          null,
          null
        );
      }
      var Fg = ja("bs-dropdown-container", Mg, Lg, {}, {}, ["*"]);
      function Hg(t) {
        return getComputedStyle(t);
      }
      function Vg(t, e) {
        for (var n in e) {
          var r = e[n];
          "number" == typeof r && (r += "px"), (t.style[n] = r);
        }
        return t;
      }
      function Ug(t) {
        var e = document.createElement("div");
        return (e.className = t), e;
      }
      var Bg =
        "undefined" != typeof Element &&
        (Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector);
      function zg(t, e) {
        if (!Bg) throw new Error("No element matching method supported");
        return Bg.call(t, e);
      }
      function qg(t) {
        t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t);
      }
      function Wg(t, e) {
        return Array.prototype.filter.call(t.children, function (t) {
          return zg(t, e);
        });
      }
      var Yg = {
          main: "ps",
          element: {
            thumb: function (t) {
              return "ps__thumb-" + t;
            },
            rail: function (t) {
              return "ps__rail-" + t;
            },
            consuming: "ps__child--consume",
          },
          state: {
            focus: "ps--focus",
            clicking: "ps--clicking",
            active: function (t) {
              return "ps--active-" + t;
            },
            scrolling: function (t) {
              return "ps--scrolling-" + t;
            },
          },
        },
        Xg = { x: null, y: null };
      function Qg(t, e) {
        var n = t.element.classList,
          r = Yg.state.scrolling(e);
        n.contains(r) ? clearTimeout(Xg[e]) : n.add(r);
      }
      function Kg(t, e) {
        Xg[e] = setTimeout(function () {
          return t.isAlive && t.element.classList.remove(Yg.state.scrolling(e));
        }, t.settings.scrollingThreshold);
      }
      var Zg = function (t) {
          (this.element = t), (this.handlers = {});
        },
        Gg = { isEmpty: { configurable: !0 } };
      (Zg.prototype.bind = function (t, e) {
        void 0 === this.handlers[t] && (this.handlers[t] = []),
          this.handlers[t].push(e),
          this.element.addEventListener(t, e, !1);
      }),
        (Zg.prototype.unbind = function (t, e) {
          var n = this;
          this.handlers[t] = this.handlers[t].filter(function (r) {
            return (
              !(!e || r === e) || (n.element.removeEventListener(t, r, !1), !1)
            );
          });
        }),
        (Zg.prototype.unbindAll = function () {
          for (var t in this.handlers) this.unbind(t);
        }),
        (Gg.isEmpty.get = function () {
          var t = this;
          return Object.keys(this.handlers).every(function (e) {
            return 0 === t.handlers[e].length;
          });
        }),
        Object.defineProperties(Zg.prototype, Gg);
      var $g = function () {
        this.eventElements = [];
      };
      function Jg(t) {
        if ("function" == typeof window.CustomEvent) return new CustomEvent(t);
        var e = document.createEvent("CustomEvent");
        return e.initCustomEvent(t, !1, !1, void 0), e;
      }
      ($g.prototype.eventElement = function (t) {
        var e = this.eventElements.filter(function (e) {
          return e.element === t;
        })[0];
        return e || ((e = new Zg(t)), this.eventElements.push(e)), e;
      }),
        ($g.prototype.bind = function (t, e, n) {
          this.eventElement(t).bind(e, n);
        }),
        ($g.prototype.unbind = function (t, e, n) {
          var r = this.eventElement(t);
          r.unbind(e, n),
            r.isEmpty &&
              this.eventElements.splice(this.eventElements.indexOf(r), 1);
        }),
        ($g.prototype.unbindAll = function () {
          this.eventElements.forEach(function (t) {
            return t.unbindAll();
          }),
            (this.eventElements = []);
        }),
        ($g.prototype.once = function (t, e, n) {
          var r = this.eventElement(t),
            o = function (t) {
              r.unbind(e, o), n(t);
            };
          r.bind(e, o);
        });
      var tv = function (t, e, n, r, o) {
        var i;
        if ((void 0 === r && (r = !0), void 0 === o && (o = !1), "top" === e))
          i = [
            "contentHeight",
            "containerHeight",
            "scrollTop",
            "y",
            "up",
            "down",
          ];
        else {
          if ("left" !== e) throw new Error("A proper axis should be provided");
          i = [
            "contentWidth",
            "containerWidth",
            "scrollLeft",
            "x",
            "left",
            "right",
          ];
        }
        !(function (t, e, n, r, o) {
          var s = i[0],
            a = i[1],
            l = i[2],
            u = i[3],
            c = i[4],
            p = i[5];
          void 0 === r && (r = !0), void 0 === o && (o = !1);
          var h = t.element;
          (t.reach[u] = null),
            h[l] < 1 && (t.reach[u] = "start"),
            h[l] > t[s] - t[a] - 1 && (t.reach[u] = "end"),
            e &&
              (h.dispatchEvent(Jg("ps-scroll-" + u)),
              e < 0
                ? h.dispatchEvent(Jg("ps-scroll-" + c))
                : e > 0 && h.dispatchEvent(Jg("ps-scroll-" + p)),
              r &&
                (function (t, e) {
                  Qg(t, e), Kg(t, e);
                })(t, u)),
            t.reach[u] &&
              (e || o) &&
              h.dispatchEvent(Jg("ps-" + u + "-reach-" + t.reach[u]));
        })(t, n, 0, r, o);
      };
      function ev(t) {
        return parseInt(t, 10) || 0;
      }
      var nv = {
          isWebKit:
            "undefined" != typeof document &&
            "WebkitAppearance" in document.documentElement.style,
          supportsTouch:
            "undefined" != typeof window &&
            ("ontouchstart" in window ||
              (window.DocumentTouch &&
                document instanceof window.DocumentTouch)),
          supportsIePointer:
            "undefined" != typeof navigator && navigator.msMaxTouchPoints,
          isChrome:
            "undefined" != typeof navigator &&
            /Chrome/i.test(navigator && navigator.userAgent),
        },
        rv = function (t) {
          var e = t.element,
            n = Math.floor(e.scrollTop);
          (t.containerWidth = e.clientWidth),
            (t.containerHeight = e.clientHeight),
            (t.contentWidth = e.scrollWidth),
            (t.contentHeight = e.scrollHeight),
            e.contains(t.scrollbarXRail) ||
              (Wg(e, Yg.element.rail("x")).forEach(function (t) {
                return qg(t);
              }),
              e.appendChild(t.scrollbarXRail)),
            e.contains(t.scrollbarYRail) ||
              (Wg(e, Yg.element.rail("y")).forEach(function (t) {
                return qg(t);
              }),
              e.appendChild(t.scrollbarYRail)),
            !t.settings.suppressScrollX &&
            t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth
              ? ((t.scrollbarXActive = !0),
                (t.railXWidth = t.containerWidth - t.railXMarginWidth),
                (t.railXRatio = t.containerWidth / t.railXWidth),
                (t.scrollbarXWidth = ov(
                  t,
                  ev((t.railXWidth * t.containerWidth) / t.contentWidth)
                )),
                (t.scrollbarXLeft = ev(
                  ((t.negativeScrollAdjustment + e.scrollLeft) *
                    (t.railXWidth - t.scrollbarXWidth)) /
                    (t.contentWidth - t.containerWidth)
                )))
              : (t.scrollbarXActive = !1),
            !t.settings.suppressScrollY &&
            t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight
              ? ((t.scrollbarYActive = !0),
                (t.railYHeight = t.containerHeight - t.railYMarginHeight),
                (t.railYRatio = t.containerHeight / t.railYHeight),
                (t.scrollbarYHeight = ov(
                  t,
                  ev((t.railYHeight * t.containerHeight) / t.contentHeight)
                )),
                (t.scrollbarYTop = ev(
                  (n * (t.railYHeight - t.scrollbarYHeight)) /
                    (t.contentHeight - t.containerHeight)
                )))
              : (t.scrollbarYActive = !1),
            t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth &&
              (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth),
            t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight &&
              (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight),
            (function (t, e) {
              var n = { width: e.railXWidth },
                r = Math.floor(t.scrollTop);
              (n.left = e.isRtl
                ? e.negativeScrollAdjustment +
                  t.scrollLeft +
                  e.containerWidth -
                  e.contentWidth
                : t.scrollLeft),
                e.isScrollbarXUsingBottom
                  ? (n.bottom = e.scrollbarXBottom - r)
                  : (n.top = e.scrollbarXTop + r),
                Vg(e.scrollbarXRail, n);
              var o = { top: r, height: e.railYHeight };
              e.isScrollbarYUsingRight
                ? (o.right = e.isRtl
                    ? e.contentWidth -
                      (e.negativeScrollAdjustment + t.scrollLeft) -
                      e.scrollbarYRight -
                      e.scrollbarYOuterWidth
                    : e.scrollbarYRight - t.scrollLeft)
                : (o.left = e.isRtl
                    ? e.negativeScrollAdjustment +
                      t.scrollLeft +
                      2 * e.containerWidth -
                      e.contentWidth -
                      e.scrollbarYLeft -
                      e.scrollbarYOuterWidth
                    : e.scrollbarYLeft + t.scrollLeft),
                Vg(e.scrollbarYRail, o),
                Vg(e.scrollbarX, {
                  left: e.scrollbarXLeft,
                  width: e.scrollbarXWidth - e.railBorderXWidth,
                }),
                Vg(e.scrollbarY, {
                  top: e.scrollbarYTop,
                  height: e.scrollbarYHeight - e.railBorderYWidth,
                });
            })(e, t),
            t.scrollbarXActive
              ? e.classList.add(Yg.state.active("x"))
              : (e.classList.remove(Yg.state.active("x")),
                (t.scrollbarXWidth = 0),
                (t.scrollbarXLeft = 0),
                (e.scrollLeft = 0)),
            t.scrollbarYActive
              ? e.classList.add(Yg.state.active("y"))
              : (e.classList.remove(Yg.state.active("y")),
                (t.scrollbarYHeight = 0),
                (t.scrollbarYTop = 0),
                (e.scrollTop = 0));
        };
      function ov(t, e) {
        return (
          t.settings.minScrollbarLength &&
            (e = Math.max(e, t.settings.minScrollbarLength)),
          t.settings.maxScrollbarLength &&
            (e = Math.min(e, t.settings.maxScrollbarLength)),
          e
        );
      }
      function iv(t, e) {
        var n = e[0],
          r = e[1],
          o = e[2],
          i = e[3],
          s = e[5],
          a = e[6],
          l = e[7],
          u = e[8],
          c = t.element,
          p = null,
          h = null,
          f = null;
        function d(e) {
          (c[a] = p + f * (e[o] - h)),
            Qg(t, l),
            rv(t),
            e.stopPropagation(),
            e.preventDefault();
        }
        function g() {
          Kg(t, l),
            t[u].classList.remove(Yg.state.clicking),
            t.event.unbind(t.ownerDocument, "mousemove", d);
        }
        t.event.bind(t[e[4]], "mousedown", function (e) {
          (p = c[a]),
            (h = e[o]),
            (f = (t[r] - t[n]) / (t[i] - t[s])),
            t.event.bind(t.ownerDocument, "mousemove", d),
            t.event.once(t.ownerDocument, "mouseup", g),
            t[u].classList.add(Yg.state.clicking),
            e.stopPropagation(),
            e.preventDefault();
        });
      }
      var sv = {
          "click-rail": function (t) {
            t.event.bind(t.scrollbarY, "mousedown", function (t) {
              return t.stopPropagation();
            }),
              t.event.bind(t.scrollbarYRail, "mousedown", function (e) {
                var n =
                  e.pageY -
                  window.pageYOffset -
                  t.scrollbarYRail.getBoundingClientRect().top;
                (t.element.scrollTop +=
                  (n > t.scrollbarYTop ? 1 : -1) * t.containerHeight),
                  rv(t),
                  e.stopPropagation();
              }),
              t.event.bind(t.scrollbarX, "mousedown", function (t) {
                return t.stopPropagation();
              }),
              t.event.bind(t.scrollbarXRail, "mousedown", function (e) {
                var n =
                  e.pageX -
                  window.pageXOffset -
                  t.scrollbarXRail.getBoundingClientRect().left;
                (t.element.scrollLeft +=
                  (n > t.scrollbarXLeft ? 1 : -1) * t.containerWidth),
                  rv(t),
                  e.stopPropagation();
              });
          },
          "drag-thumb": function (t) {
            iv(t, [
              "containerWidth",
              "contentWidth",
              "pageX",
              "railXWidth",
              "scrollbarX",
              "scrollbarXWidth",
              "scrollLeft",
              "x",
              "scrollbarXRail",
            ]),
              iv(t, [
                "containerHeight",
                "contentHeight",
                "pageY",
                "railYHeight",
                "scrollbarY",
                "scrollbarYHeight",
                "scrollTop",
                "y",
                "scrollbarYRail",
              ]);
          },
          keyboard: function (t) {
            var e = t.element;
            t.event.bind(t.ownerDocument, "keydown", function (n) {
              if (
                !(
                  (n.isDefaultPrevented && n.isDefaultPrevented()) ||
                  n.defaultPrevented
                ) &&
                (zg(e, ":hover") ||
                  zg(t.scrollbarX, ":focus") ||
                  zg(t.scrollbarY, ":focus"))
              ) {
                var r,
                  o = document.activeElement
                    ? document.activeElement
                    : t.ownerDocument.activeElement;
                if (o) {
                  if ("IFRAME" === o.tagName)
                    o = o.contentDocument.activeElement;
                  else for (; o.shadowRoot; ) o = o.shadowRoot.activeElement;
                  if (
                    zg((r = o), "input,[contenteditable]") ||
                    zg(r, "select,[contenteditable]") ||
                    zg(r, "textarea,[contenteditable]") ||
                    zg(r, "button,[contenteditable]")
                  )
                    return;
                }
                var i = 0,
                  s = 0;
                switch (n.which) {
                  case 37:
                    i = n.metaKey
                      ? -t.contentWidth
                      : n.altKey
                      ? -t.containerWidth
                      : -30;
                    break;
                  case 38:
                    s = n.metaKey
                      ? t.contentHeight
                      : n.altKey
                      ? t.containerHeight
                      : 30;
                    break;
                  case 39:
                    i = n.metaKey
                      ? t.contentWidth
                      : n.altKey
                      ? t.containerWidth
                      : 30;
                    break;
                  case 40:
                    s = n.metaKey
                      ? -t.contentHeight
                      : n.altKey
                      ? -t.containerHeight
                      : -30;
                    break;
                  case 32:
                    s = n.shiftKey ? t.containerHeight : -t.containerHeight;
                    break;
                  case 33:
                    s = t.containerHeight;
                    break;
                  case 34:
                    s = -t.containerHeight;
                    break;
                  case 36:
                    s = t.contentHeight;
                    break;
                  case 35:
                    s = -t.contentHeight;
                    break;
                  default:
                    return;
                }
                (t.settings.suppressScrollX && 0 !== i) ||
                  (t.settings.suppressScrollY && 0 !== s) ||
                  ((e.scrollTop -= s),
                  (e.scrollLeft += i),
                  rv(t),
                  (function (n, r) {
                    var o = Math.floor(e.scrollTop);
                    if (0 === n) {
                      if (!t.scrollbarYActive) return !1;
                      if (
                        (0 === o && r > 0) ||
                        (o >= t.contentHeight - t.containerHeight && r < 0)
                      )
                        return !t.settings.wheelPropagation;
                    }
                    var i = e.scrollLeft;
                    if (0 === r) {
                      if (!t.scrollbarXActive) return !1;
                      if (
                        (0 === i && n < 0) ||
                        (i >= t.contentWidth - t.containerWidth && n > 0)
                      )
                        return !t.settings.wheelPropagation;
                    }
                    return !0;
                  })(i, s) && n.preventDefault());
              }
            });
          },
          wheel: function (t) {
            var e = t.element;
            function n(n) {
              var r = (function (t) {
                  var e = t.deltaX,
                    n = -1 * t.deltaY;
                  return (
                    (void 0 !== e && void 0 !== n) ||
                      ((e = (-1 * t.wheelDeltaX) / 6), (n = t.wheelDeltaY / 6)),
                    t.deltaMode && 1 === t.deltaMode && ((e *= 10), (n *= 10)),
                    e != e && n != n && ((e = 0), (n = t.wheelDelta)),
                    t.shiftKey ? [-n, -e] : [e, n]
                  );
                })(n),
                o = r[0],
                i = r[1];
              if (
                !(function (t, n, r) {
                  if (!nv.isWebKit && e.querySelector("select:focus"))
                    return !0;
                  if (!e.contains(t)) return !1;
                  for (var o = t; o && o !== e; ) {
                    if (o.classList.contains(Yg.element.consuming)) return !0;
                    var i = Hg(o);
                    if (
                      [i.overflow, i.overflowX, i.overflowY]
                        .join("")
                        .match(/(scroll|auto)/)
                    ) {
                      var s = o.scrollHeight - o.clientHeight;
                      if (
                        s > 0 &&
                        !(
                          (0 === o.scrollTop && r > 0) ||
                          (o.scrollTop === s && r < 0)
                        )
                      )
                        return !0;
                      var a = o.scrollWidth - o.clientWidth;
                      if (
                        a > 0 &&
                        !(
                          (0 === o.scrollLeft && n < 0) ||
                          (o.scrollLeft === a && n > 0)
                        )
                      )
                        return !0;
                    }
                    o = o.parentNode;
                  }
                  return !1;
                })(n.target, o, i)
              ) {
                var s = !1;
                t.settings.useBothWheelAxes
                  ? t.scrollbarYActive && !t.scrollbarXActive
                    ? (i
                        ? (e.scrollTop -= i * t.settings.wheelSpeed)
                        : (e.scrollTop += o * t.settings.wheelSpeed),
                      (s = !0))
                    : t.scrollbarXActive &&
                      !t.scrollbarYActive &&
                      (o
                        ? (e.scrollLeft += o * t.settings.wheelSpeed)
                        : (e.scrollLeft -= i * t.settings.wheelSpeed),
                      (s = !0))
                  : ((e.scrollTop -= i * t.settings.wheelSpeed),
                    (e.scrollLeft += o * t.settings.wheelSpeed)),
                  rv(t),
                  (s =
                    s ||
                    (function (n, r) {
                      var o = Math.floor(e.scrollTop),
                        i = 0 === e.scrollTop,
                        s = o + e.offsetHeight === e.scrollHeight,
                        a = 0 === e.scrollLeft,
                        l = e.scrollLeft + e.offsetWidth === e.scrollWidth;
                      return (
                        !(Math.abs(r) > Math.abs(n) ? i || s : a || l) ||
                        !t.settings.wheelPropagation
                      );
                    })(o, i)) &&
                    !n.ctrlKey &&
                    (n.stopPropagation(), n.preventDefault());
              }
            }
            void 0 !== window.onwheel
              ? t.event.bind(e, "wheel", n)
              : void 0 !== window.onmousewheel &&
                t.event.bind(e, "mousewheel", n);
          },
          touch: function (t) {
            if (nv.supportsTouch || nv.supportsIePointer) {
              var e = t.element,
                n = {},
                r = 0,
                o = {},
                i = null;
              nv.supportsTouch
                ? (t.event.bind(e, "touchstart", u),
                  t.event.bind(e, "touchmove", c),
                  t.event.bind(e, "touchend", p))
                : nv.supportsIePointer &&
                  (window.PointerEvent
                    ? (t.event.bind(e, "pointerdown", u),
                      t.event.bind(e, "pointermove", c),
                      t.event.bind(e, "pointerup", p))
                    : window.MSPointerEvent &&
                      (t.event.bind(e, "MSPointerDown", u),
                      t.event.bind(e, "MSPointerMove", c),
                      t.event.bind(e, "MSPointerUp", p)));
            }
            function s(n, r) {
              (e.scrollTop -= r), (e.scrollLeft -= n), rv(t);
            }
            function a(t) {
              return t.targetTouches ? t.targetTouches[0] : t;
            }
            function l(t) {
              return !(
                (t.pointerType && "pen" === t.pointerType && 0 === t.buttons) ||
                ((!t.targetTouches || 1 !== t.targetTouches.length) &&
                  (!t.pointerType ||
                    "mouse" === t.pointerType ||
                    t.pointerType === t.MSPOINTER_TYPE_MOUSE))
              );
            }
            function u(t) {
              if (l(t)) {
                var e = a(t);
                (n.pageX = e.pageX),
                  (n.pageY = e.pageY),
                  (r = new Date().getTime()),
                  null !== i && clearInterval(i);
              }
            }
            function c(i) {
              if (l(i)) {
                var u = a(i),
                  c = { pageX: u.pageX, pageY: u.pageY },
                  p = c.pageX - n.pageX,
                  h = c.pageY - n.pageY;
                if (
                  (function (t, n, r) {
                    if (!e.contains(t)) return !1;
                    for (var o = t; o && o !== e; ) {
                      if (o.classList.contains(Yg.element.consuming)) return !0;
                      var i = Hg(o);
                      if (
                        [i.overflow, i.overflowX, i.overflowY]
                          .join("")
                          .match(/(scroll|auto)/)
                      ) {
                        var s = o.scrollHeight - o.clientHeight;
                        if (
                          s > 0 &&
                          !(
                            (0 === o.scrollTop && r > 0) ||
                            (o.scrollTop === s && r < 0)
                          )
                        )
                          return !0;
                        var a = o.scrollLeft - o.clientWidth;
                        if (
                          a > 0 &&
                          !(
                            (0 === o.scrollLeft && n < 0) ||
                            (o.scrollLeft === a && n > 0)
                          )
                        )
                          return !0;
                      }
                      o = o.parentNode;
                    }
                    return !1;
                  })(i.target, p, h)
                )
                  return;
                s(p, h), (n = c);
                var f = new Date().getTime(),
                  d = f - r;
                d > 0 && ((o.x = p / d), (o.y = h / d), (r = f)),
                  (function (n, r) {
                    var o = Math.floor(e.scrollTop),
                      i = e.scrollLeft,
                      s = Math.abs(n),
                      a = Math.abs(r);
                    if (a > s) {
                      if (
                        (r < 0 && o === t.contentHeight - t.containerHeight) ||
                        (r > 0 && 0 === o)
                      )
                        return 0 === window.scrollY && r > 0 && nv.isChrome;
                    } else if (
                      s > a &&
                      ((n < 0 && i === t.contentWidth - t.containerWidth) ||
                        (n > 0 && 0 === i))
                    )
                      return !0;
                    return !0;
                  })(p, h) && i.preventDefault();
              }
            }
            function p() {
              t.settings.swipeEasing &&
                (clearInterval(i),
                (i = setInterval(function () {
                  t.isInitialized
                    ? clearInterval(i)
                    : o.x || o.y
                    ? Math.abs(o.x) < 0.01 && Math.abs(o.y) < 0.01
                      ? clearInterval(i)
                      : (s(30 * o.x, 30 * o.y), (o.x *= 0.8), (o.y *= 0.8))
                    : clearInterval(i);
                }, 10)));
            }
          },
        },
        av = function (t, e) {
          var n = this;
          if (
            (void 0 === e && (e = {}),
            "string" == typeof t && (t = document.querySelector(t)),
            !t || !t.nodeName)
          )
            throw new Error(
              "no element is specified to initialize PerfectScrollbar"
            );
          for (var r in ((this.element = t),
          t.classList.add(Yg.main),
          (this.settings = {
            handlers: [
              "click-rail",
              "drag-thumb",
              "keyboard",
              "wheel",
              "touch",
            ],
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollingThreshold: 1e3,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipeEasing: !0,
            useBothWheelAxes: !1,
            wheelPropagation: !0,
            wheelSpeed: 1,
          }),
          e))
            n.settings[r] = e[r];
          (this.containerWidth = null),
            (this.containerHeight = null),
            (this.contentWidth = null),
            (this.contentHeight = null);
          var o,
            i,
            s = function () {
              return t.classList.add(Yg.state.focus);
            },
            a = function () {
              return t.classList.remove(Yg.state.focus);
            };
          (this.isRtl = "rtl" === Hg(t).direction),
            (this.isNegativeScroll =
              ((i = t.scrollLeft),
              (t.scrollLeft = -1),
              (o = t.scrollLeft < 0),
              (t.scrollLeft = i),
              o)),
            (this.negativeScrollAdjustment = this.isNegativeScroll
              ? t.scrollWidth - t.clientWidth
              : 0),
            (this.event = new $g()),
            (this.ownerDocument = t.ownerDocument || document),
            (this.scrollbarXRail = Ug(Yg.element.rail("x"))),
            t.appendChild(this.scrollbarXRail),
            (this.scrollbarX = Ug(Yg.element.thumb("x"))),
            this.scrollbarXRail.appendChild(this.scrollbarX),
            this.scrollbarX.setAttribute("tabindex", 0),
            this.event.bind(this.scrollbarX, "focus", s),
            this.event.bind(this.scrollbarX, "blur", a),
            (this.scrollbarXActive = null),
            (this.scrollbarXWidth = null),
            (this.scrollbarXLeft = null);
          var l = Hg(this.scrollbarXRail);
          (this.scrollbarXBottom = parseInt(l.bottom, 10)),
            isNaN(this.scrollbarXBottom)
              ? ((this.isScrollbarXUsingBottom = !1),
                (this.scrollbarXTop = ev(l.top)))
              : (this.isScrollbarXUsingBottom = !0),
            (this.railBorderXWidth =
              ev(l.borderLeftWidth) + ev(l.borderRightWidth)),
            Vg(this.scrollbarXRail, { display: "block" }),
            (this.railXMarginWidth = ev(l.marginLeft) + ev(l.marginRight)),
            Vg(this.scrollbarXRail, { display: "" }),
            (this.railXWidth = null),
            (this.railXRatio = null),
            (this.scrollbarYRail = Ug(Yg.element.rail("y"))),
            t.appendChild(this.scrollbarYRail),
            (this.scrollbarY = Ug(Yg.element.thumb("y"))),
            this.scrollbarYRail.appendChild(this.scrollbarY),
            this.scrollbarY.setAttribute("tabindex", 0),
            this.event.bind(this.scrollbarY, "focus", s),
            this.event.bind(this.scrollbarY, "blur", a),
            (this.scrollbarYActive = null),
            (this.scrollbarYHeight = null),
            (this.scrollbarYTop = null);
          var u = Hg(this.scrollbarYRail);
          (this.scrollbarYRight = parseInt(u.right, 10)),
            isNaN(this.scrollbarYRight)
              ? ((this.isScrollbarYUsingRight = !1),
                (this.scrollbarYLeft = ev(u.left)))
              : (this.isScrollbarYUsingRight = !0),
            (this.scrollbarYOuterWidth = this.isRtl
              ? (function (t) {
                  var e = Hg(t);
                  return (
                    ev(e.width) +
                    ev(e.paddingLeft) +
                    ev(e.paddingRight) +
                    ev(e.borderLeftWidth) +
                    ev(e.borderRightWidth)
                  );
                })(this.scrollbarY)
              : null),
            (this.railBorderYWidth =
              ev(u.borderTopWidth) + ev(u.borderBottomWidth)),
            Vg(this.scrollbarYRail, { display: "block" }),
            (this.railYMarginHeight = ev(u.marginTop) + ev(u.marginBottom)),
            Vg(this.scrollbarYRail, { display: "" }),
            (this.railYHeight = null),
            (this.railYRatio = null),
            (this.reach = {
              x:
                t.scrollLeft <= 0
                  ? "start"
                  : t.scrollLeft >= this.contentWidth - this.containerWidth
                  ? "end"
                  : null,
              y:
                t.scrollTop <= 0
                  ? "start"
                  : t.scrollTop >= this.contentHeight - this.containerHeight
                  ? "end"
                  : null,
            }),
            (this.isAlive = !0),
            this.settings.handlers.forEach(function (t) {
              return sv[t](n);
            }),
            (this.lastScrollTop = Math.floor(t.scrollTop)),
            (this.lastScrollLeft = t.scrollLeft),
            this.event.bind(this.element, "scroll", function (t) {
              return n.onScroll(t);
            }),
            rv(this);
        };
      (av.prototype.update = function () {
        this.isAlive &&
          ((this.negativeScrollAdjustment = this.isNegativeScroll
            ? this.element.scrollWidth - this.element.clientWidth
            : 0),
          Vg(this.scrollbarXRail, { display: "block" }),
          Vg(this.scrollbarYRail, { display: "block" }),
          (this.railXMarginWidth =
            ev(Hg(this.scrollbarXRail).marginLeft) +
            ev(Hg(this.scrollbarXRail).marginRight)),
          (this.railYMarginHeight =
            ev(Hg(this.scrollbarYRail).marginTop) +
            ev(Hg(this.scrollbarYRail).marginBottom)),
          Vg(this.scrollbarXRail, { display: "none" }),
          Vg(this.scrollbarYRail, { display: "none" }),
          rv(this),
          tv(this, "top", 0, !1, !0),
          tv(this, "left", 0, !1, !0),
          Vg(this.scrollbarXRail, { display: "" }),
          Vg(this.scrollbarYRail, { display: "" }));
      }),
        (av.prototype.onScroll = function (t) {
          this.isAlive &&
            (rv(this),
            tv(this, "top", this.element.scrollTop - this.lastScrollTop),
            tv(this, "left", this.element.scrollLeft - this.lastScrollLeft),
            (this.lastScrollTop = Math.floor(this.element.scrollTop)),
            (this.lastScrollLeft = this.element.scrollLeft));
        }),
        (av.prototype.destroy = function () {
          this.isAlive &&
            (this.event.unbindAll(),
            qg(this.scrollbarX),
            qg(this.scrollbarY),
            qg(this.scrollbarXRail),
            qg(this.scrollbarYRail),
            this.removePsClasses(),
            (this.element = null),
            (this.scrollbarX = null),
            (this.scrollbarY = null),
            (this.scrollbarXRail = null),
            (this.scrollbarYRail = null),
            (this.isAlive = !1));
        }),
        (av.prototype.removePsClasses = function () {
          this.element.className = this.element.className
            .split(" ")
            .filter(function (t) {
              return !t.match(/^ps([-_].+|)$/);
            })
            .join(" ");
        });
      var lv = av,
        uv = (function () {
          if ("undefined" != typeof Map) return Map;
          function t(t, e) {
            var n = -1;
            return (
              t.some(function (t, r) {
                return t[0] === e && ((n = r), !0);
              }),
              n
            );
          }
          return (function () {
            function e() {
              this.__entries__ = [];
            }
            return (
              Object.defineProperty(e.prototype, "size", {
                get: function () {
                  return this.__entries__.length;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.get = function (e) {
                var n = t(this.__entries__, e),
                  r = this.__entries__[n];
                return r && r[1];
              }),
              (e.prototype.set = function (e, n) {
                var r = t(this.__entries__, e);
                ~r
                  ? (this.__entries__[r][1] = n)
                  : this.__entries__.push([e, n]);
              }),
              (e.prototype.delete = function (e) {
                var n = this.__entries__,
                  r = t(n, e);
                ~r && n.splice(r, 1);
              }),
              (e.prototype.has = function (e) {
                return !!~t(this.__entries__, e);
              }),
              (e.prototype.clear = function () {
                this.__entries__.splice(0);
              }),
              (e.prototype.forEach = function (t, e) {
                void 0 === e && (e = null);
                for (var n = 0, r = this.__entries__; n < r.length; n++) {
                  var o = r[n];
                  t.call(e, o[1], o[0]);
                }
              }),
              e
            );
          })();
        })(),
        cv =
          "undefined" != typeof window &&
          "undefined" != typeof document &&
          window.document === document,
        pv =
          "undefined" != typeof global && global.Math === Math
            ? global
            : "undefined" != typeof self && self.Math === Math
            ? self
            : "undefined" != typeof window && window.Math === Math
            ? window
            : Function("return this")(),
        hv =
          "function" == typeof requestAnimationFrame
            ? requestAnimationFrame.bind(pv)
            : function (t) {
                return setTimeout(function () {
                  return t(Date.now());
                }, 1e3 / 60);
              },
        fv = 2,
        dv = 20,
        gv = [
          "top",
          "right",
          "bottom",
          "left",
          "width",
          "height",
          "size",
          "weight",
        ],
        vv = "undefined" != typeof MutationObserver,
        yv = (function () {
          function t() {
            (this.connected_ = !1),
              (this.mutationEventsAdded_ = !1),
              (this.mutationsObserver_ = null),
              (this.observers_ = []),
              (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
              (this.refresh = (function (t, e) {
                var n = !1,
                  r = !1,
                  o = 0;
                function i() {
                  n && ((n = !1), t()), r && a();
                }
                function s() {
                  hv(i);
                }
                function a() {
                  var t = Date.now();
                  if (n) {
                    if (t - o < fv) return;
                    r = !0;
                  } else (n = !0), (r = !1), setTimeout(s, e);
                  o = t;
                }
                return a;
              })(this.refresh.bind(this), dv));
          }
          return (
            (t.prototype.addObserver = function (t) {
              ~this.observers_.indexOf(t) || this.observers_.push(t),
                this.connected_ || this.connect_();
            }),
            (t.prototype.removeObserver = function (t) {
              var e = this.observers_,
                n = e.indexOf(t);
              ~n && e.splice(n, 1),
                !e.length && this.connected_ && this.disconnect_();
            }),
            (t.prototype.refresh = function () {
              this.updateObservers_() && this.refresh();
            }),
            (t.prototype.updateObservers_ = function () {
              var t = this.observers_.filter(function (t) {
                return t.gatherActive(), t.hasActive();
              });
              return (
                t.forEach(function (t) {
                  return t.broadcastActive();
                }),
                t.length > 0
              );
            }),
            (t.prototype.connect_ = function () {
              cv &&
                !this.connected_ &&
                (document.addEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.addEventListener("resize", this.refresh),
                vv
                  ? ((this.mutationsObserver_ = new MutationObserver(
                      this.refresh
                    )),
                    this.mutationsObserver_.observe(document, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    }))
                  : (document.addEventListener(
                      "DOMSubtreeModified",
                      this.refresh
                    ),
                    (this.mutationEventsAdded_ = !0)),
                (this.connected_ = !0));
            }),
            (t.prototype.disconnect_ = function () {
              cv &&
                this.connected_ &&
                (document.removeEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.removeEventListener("resize", this.refresh),
                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                this.mutationEventsAdded_ &&
                  document.removeEventListener(
                    "DOMSubtreeModified",
                    this.refresh
                  ),
                (this.mutationsObserver_ = null),
                (this.mutationEventsAdded_ = !1),
                (this.connected_ = !1));
            }),
            (t.prototype.onTransitionEnd_ = function (t) {
              var e = t.propertyName,
                n = void 0 === e ? "" : e;
              gv.some(function (t) {
                return !!~n.indexOf(t);
              }) && this.refresh();
            }),
            (t.getInstance = function () {
              return (
                this.instance_ || (this.instance_ = new t()), this.instance_
              );
            }),
            (t.instance_ = null),
            t
          );
        })(),
        mv = function (t, e) {
          for (var n = 0, r = Object.keys(e); n < r.length; n++) {
            var o = r[n];
            Object.defineProperty(t, o, {
              value: e[o],
              enumerable: !1,
              writable: !1,
              configurable: !0,
            });
          }
          return t;
        },
        bv = function (t) {
          return (t && t.ownerDocument && t.ownerDocument.defaultView) || pv;
        },
        _v = Ev(0, 0, 0, 0);
      function wv(t) {
        return parseFloat(t) || 0;
      }
      function Cv(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        return e.reduce(function (e, n) {
          return e + wv(t["border-" + n + "-width"]);
        }, 0);
      }
      var Sv =
        "undefined" != typeof SVGGraphicsElement
          ? function (t) {
              return t instanceof bv(t).SVGGraphicsElement;
            }
          : function (t) {
              return (
                t instanceof bv(t).SVGElement && "function" == typeof t.getBBox
              );
            };
      function Ev(t, e, n, r) {
        return { x: t, y: e, width: n, height: r };
      }
      var xv = (function () {
          function t(t) {
            (this.broadcastWidth = 0),
              (this.broadcastHeight = 0),
              (this.contentRect_ = Ev(0, 0, 0, 0)),
              (this.target = t);
          }
          return (
            (t.prototype.isActive = function () {
              var t,
                e =
                  ((t = this.target),
                  cv
                    ? Sv(t)
                      ? (function (t) {
                          var e = t.getBBox();
                          return Ev(0, 0, e.width, e.height);
                        })(t)
                      : (function (t) {
                          var e = t.clientWidth,
                            n = t.clientHeight;
                          if (!e && !n) return _v;
                          var r = bv(t).getComputedStyle(t),
                            o = (function (t) {
                              for (
                                var e = {},
                                  n = 0,
                                  r = ["top", "right", "bottom", "left"];
                                n < r.length;
                                n++
                              ) {
                                var o = r[n];
                                e[o] = wv(t["padding-" + o]);
                              }
                              return e;
                            })(r),
                            i = o.left + o.right,
                            s = o.top + o.bottom,
                            a = wv(r.width),
                            l = wv(r.height);
                          if (
                            ("border-box" === r.boxSizing &&
                              (Math.round(a + i) !== e &&
                                (a -= Cv(r, "left", "right") + i),
                              Math.round(l + s) !== n &&
                                (l -= Cv(r, "top", "bottom") + s)),
                            !(function (t) {
                              return t === bv(t).document.documentElement;
                            })(t))
                          ) {
                            var u = Math.round(a + i) - e,
                              c = Math.round(l + s) - n;
                            1 !== Math.abs(u) && (a -= u),
                              1 !== Math.abs(c) && (l -= c);
                          }
                          return Ev(o.left, o.top, a, l);
                        })(t)
                    : _v);
              return (
                (this.contentRect_ = e),
                e.width !== this.broadcastWidth ||
                  e.height !== this.broadcastHeight
              );
            }),
            (t.prototype.broadcastRect = function () {
              var t = this.contentRect_;
              return (
                (this.broadcastWidth = t.width),
                (this.broadcastHeight = t.height),
                t
              );
            }),
            t
          );
        })(),
        Pv = (function () {
          return function (t, e) {
            var n,
              r,
              o,
              i,
              s,
              a,
              l,
              u =
                ((r = (n = e).x),
                (o = n.y),
                (i = n.width),
                (s = n.height),
                (a =
                  "undefined" != typeof DOMRectReadOnly
                    ? DOMRectReadOnly
                    : Object),
                (l = Object.create(a.prototype)),
                mv(l, {
                  x: r,
                  y: o,
                  width: i,
                  height: s,
                  top: o,
                  right: r + i,
                  bottom: s + o,
                  left: r,
                }),
                l);
            mv(this, { target: t, contentRect: u });
          };
        })(),
        Ov = (function () {
          function t(t, e, n) {
            if (
              ((this.activeObservations_ = []),
              (this.observations_ = new uv()),
              "function" != typeof t)
            )
              throw new TypeError(
                "The callback provided as parameter 1 is not a function."
              );
            (this.callback_ = t),
              (this.controller_ = e),
              (this.callbackCtx_ = n);
          }
          return (
            (t.prototype.observe = function (t) {
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(t instanceof bv(t).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var e = this.observations_;
                e.has(t) ||
                  (e.set(t, new xv(t)),
                  this.controller_.addObserver(this),
                  this.controller_.refresh());
              }
            }),
            (t.prototype.unobserve = function (t) {
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(t instanceof bv(t).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var e = this.observations_;
                e.has(t) &&
                  (e.delete(t),
                  e.size || this.controller_.removeObserver(this));
              }
            }),
            (t.prototype.disconnect = function () {
              this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this);
            }),
            (t.prototype.gatherActive = function () {
              var t = this;
              this.clearActive(),
                this.observations_.forEach(function (e) {
                  e.isActive() && t.activeObservations_.push(e);
                });
            }),
            (t.prototype.broadcastActive = function () {
              if (this.hasActive()) {
                var t = this.callbackCtx_,
                  e = this.activeObservations_.map(function (t) {
                    return new Pv(t.target, t.broadcastRect());
                  });
                this.callback_.call(t, e, t), this.clearActive();
              }
            }),
            (t.prototype.clearActive = function () {
              this.activeObservations_.splice(0);
            }),
            (t.prototype.hasActive = function () {
              return this.activeObservations_.length > 0;
            }),
            t
          );
        })(),
        Tv = "undefined" != typeof WeakMap ? new WeakMap() : new uv(),
        kv = (function () {
          return function t(e) {
            if (!(this instanceof t))
              throw new TypeError("Cannot call a class as a function.");
            if (!arguments.length)
              throw new TypeError("1 argument required, but only 0 present.");
            var n = yv.getInstance(),
              r = new Ov(e, n, this);
            Tv.set(this, r);
          };
        })();
      ["observe", "unobserve", "disconnect"].forEach(function (t) {
        kv.prototype[t] = function () {
          var e;
          return (e = Tv.get(this))[t].apply(e, arguments);
        };
      });
      var Mv = void 0 !== pv.ResizeObserver ? pv.ResizeObserver : kv;
      function Rv(t, e, n, r) {
        return (
          f(n) && ((r = n), (n = void 0)),
          r
            ? Rv(t, e, n).pipe(
                tt(function (t) {
                  return p(t) ? r.apply(void 0, t) : r(t);
                })
              )
            : new A(function (r) {
                !(function t(e, n, r, o, i) {
                  var s;
                  if (
                    (function (t) {
                      return (
                        t &&
                        "function" == typeof t.addEventListener &&
                        "function" == typeof t.removeEventListener
                      );
                    })(e)
                  ) {
                    var a = e;
                    e.addEventListener(n, r, i),
                      (s = function () {
                        return a.removeEventListener(n, r, i);
                      });
                  } else if (
                    (function (t) {
                      return (
                        t &&
                        "function" == typeof t.on &&
                        "function" == typeof t.off
                      );
                    })(e)
                  ) {
                    var l = e;
                    e.on(n, r),
                      (s = function () {
                        return l.off(n, r);
                      });
                  } else if (
                    (function (t) {
                      return (
                        t &&
                        "function" == typeof t.addListener &&
                        "function" == typeof t.removeListener
                      );
                    })(e)
                  ) {
                    var u = e;
                    e.addListener(n, r),
                      (s = function () {
                        return u.removeListener(n, r);
                      });
                  } else {
                    if (!e || !e.length)
                      throw new TypeError("Invalid event target");
                    for (var c = 0, p = e.length; c < p; c++)
                      t(e[c], n, r, o, i);
                  }
                  o.add(s);
                })(
                  t,
                  e,
                  function (t) {
                    r.next(
                      arguments.length > 1
                        ? Array.prototype.slice.call(arguments)
                        : t
                    );
                  },
                  r,
                  n
                );
              })
        );
      }
      Object;
      var Iv = (function (t) {
          function e(e, n) {
            var r = t.call(this, e, n) || this;
            return (r.scheduler = e), (r.work = n), (r.pending = !1), r;
          }
          return (
            o(e, t),
            (e.prototype.schedule = function (t, e) {
              if ((void 0 === e && (e = 0), this.closed)) return this;
              this.state = t;
              var n = this.id,
                r = this.scheduler;
              return (
                null != n && (this.id = this.recycleAsyncId(r, n, e)),
                (this.pending = !0),
                (this.delay = e),
                (this.id = this.id || this.requestAsyncId(r, this.id, e)),
                this
              );
            }),
            (e.prototype.requestAsyncId = function (t, e, n) {
              return (
                void 0 === n && (n = 0), setInterval(t.flush.bind(t, this), n)
              );
            }),
            (e.prototype.recycleAsyncId = function (t, e, n) {
              if (
                (void 0 === n && (n = 0),
                null !== n && this.delay === n && !1 === this.pending)
              )
                return e;
              clearInterval(e);
            }),
            (e.prototype.execute = function (t, e) {
              if (this.closed) return new Error("executing a cancelled action");
              this.pending = !1;
              var n = this._execute(t, e);
              if (n) return n;
              !1 === this.pending &&
                null != this.id &&
                (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
            }),
            (e.prototype._execute = function (t, e) {
              var n = !1,
                r = void 0;
              try {
                this.work(t);
              } catch (o) {
                (n = !0), (r = (!!o && o) || new Error(o));
              }
              if (n) return this.unsubscribe(), r;
            }),
            (e.prototype._unsubscribe = function () {
              var t = this.id,
                e = this.scheduler,
                n = e.actions,
                r = n.indexOf(this);
              (this.work = null),
                (this.state = null),
                (this.pending = !1),
                (this.scheduler = null),
                -1 !== r && n.splice(r, 1),
                null != t && (this.id = this.recycleAsyncId(e, t, null)),
                (this.delay = null);
            }),
            e
          );
        })(
          (function (t) {
            function e(e, n) {
              return t.call(this) || this;
            }
            return (
              o(e, t),
              (e.prototype.schedule = function (t, e) {
                return void 0 === e && (e = 0), this;
              }),
              e
            );
          })(_)
        ),
        Av = (function () {
          function t(e, n) {
            void 0 === n && (n = t.now),
              (this.SchedulerAction = e),
              (this.now = n);
          }
          return (
            (t.prototype.schedule = function (t, e, n) {
              return (
                void 0 === e && (e = 0),
                new this.SchedulerAction(this, t).schedule(n, e)
              );
            }),
            (t.now = function () {
              return Date.now();
            }),
            t
          );
        })(),
        Nv = new ((function (t) {
          function e(n, r) {
            void 0 === r && (r = Av.now);
            var o =
              t.call(this, n, function () {
                return e.delegate && e.delegate !== o ? e.delegate.now() : r();
              }) || this;
            return (o.actions = []), (o.active = !1), (o.scheduled = void 0), o;
          }
          return (
            o(e, t),
            (e.prototype.schedule = function (n, r, o) {
              return (
                void 0 === r && (r = 0),
                e.delegate && e.delegate !== this
                  ? e.delegate.schedule(n, r, o)
                  : t.prototype.schedule.call(this, n, r, o)
              );
            }),
            (e.prototype.flush = function (t) {
              var e = this.actions;
              if (this.active) e.push(t);
              else {
                var n;
                this.active = !0;
                do {
                  if ((n = t.execute(t.state, t.delay))) break;
                } while ((t = e.shift()));
                if (((this.active = !1), n)) {
                  for (; (t = e.shift()); ) t.unsubscribe();
                  throw n;
                }
              }
            }),
            e
          );
        })(Av))(Iv),
        Dv = (function () {
          function t(t, e) {
            (this.dueTime = t), (this.scheduler = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new jv(t, this.dueTime, this.scheduler));
            }),
            t
          );
        })(),
        jv = (function (t) {
          function e(e, n, r) {
            var o = t.call(this, e) || this;
            return (
              (o.dueTime = n),
              (o.scheduler = r),
              (o.debouncedSubscription = null),
              (o.lastValue = null),
              (o.hasValue = !1),
              o
            );
          }
          return (
            o(e, t),
            (e.prototype._next = function (t) {
              this.clearDebounce(),
                (this.lastValue = t),
                (this.hasValue = !0),
                this.add(
                  (this.debouncedSubscription = this.scheduler.schedule(
                    Lv,
                    this.dueTime,
                    this
                  ))
                );
            }),
            (e.prototype._complete = function () {
              this.debouncedNext(), this.destination.complete();
            }),
            (e.prototype.debouncedNext = function () {
              if ((this.clearDebounce(), this.hasValue)) {
                var t = this.lastValue;
                (this.lastValue = null),
                  (this.hasValue = !1),
                  this.destination.next(t);
              }
            }),
            (e.prototype.clearDebounce = function () {
              var t = this.debouncedSubscription;
              null !== t &&
                (this.remove(t),
                t.unsubscribe(),
                (this.debouncedSubscription = null));
            }),
            e
          );
        })(O);
      function Lv(t) {
        t.debouncedNext();
      }
      function Fv(t) {
        return function (e) {
          return e.lift(new Hv(t));
        };
      }
      var Hv = (function () {
          function t(t) {
            this.notifier = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              var n = new Vv(t),
                r = $(n, this.notifier);
              return r && !n.seenValue ? (n.add(r), e.subscribe(n)) : n;
            }),
            t
          );
        })(),
        Vv = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (n.seenValue = !1), n;
          }
          return (
            o(e, t),
            (e.prototype.notifyNext = function (t, e, n, r, o) {
              (this.seenValue = !0), this.complete();
            }),
            (e.prototype.notifyComplete = function () {}),
            e
          );
        })(J),
        Uv = (function () {
          function t(t, e) {
            (this.compare = t), (this.keySelector = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Bv(t, this.compare, this.keySelector));
            }),
            t
          );
        })(),
        Bv = (function (t) {
          function e(e, n, r) {
            var o = t.call(this, e) || this;
            return (
              (o.keySelector = r),
              (o.hasKey = !1),
              "function" == typeof n && (o.compare = n),
              o
            );
          }
          return (
            o(e, t),
            (e.prototype.compare = function (t, e) {
              return t === e;
            }),
            (e.prototype._next = function (t) {
              var e = t;
              if (this.keySelector && (e = y(this.keySelector)(t)) === g)
                return this.destination.error(g.e);
              var n = !1;
              if (this.hasKey) {
                if ((n = y(this.compare)(this.key, e)) === g)
                  return this.destination.error(g.e);
              } else this.hasKey = !0;
              !1 === Boolean(n) && ((this.key = e), this.destination.next(t));
            }),
            e
          );
        })(O);
      function zv(t) {
        return function (e) {
          return e.lift(new qv(t));
        };
      }
      var qv = (function () {
          function t(t) {
            this.value = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Wv(t, this.value));
            }),
            t
          );
        })(),
        Wv = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.value = n), r;
          }
          return (
            o(e, t),
            (e.prototype._next = function (t) {
              this.destination.next(this.value);
            }),
            e
          );
        })(O),
        Yv = new Ot("PERFECT_SCROLLBAR_CONFIG"),
        Xv = (function () {
          return function (t, e, n, r) {
            (this.x = t), (this.y = e), (this.w = n), (this.h = r);
          };
        })(),
        Qv = (function () {
          return function (t, e) {
            (this.x = t), (this.y = e);
          };
        })(),
        Kv = [
          "psScrollY",
          "psScrollX",
          "psScrollUp",
          "psScrollDown",
          "psScrollLeft",
          "psScrollRight",
          "psYReachEnd",
          "psYReachStart",
          "psXReachEnd",
          "psXReachStart",
        ],
        Zv = (function () {
          function t(t) {
            void 0 === t && (t = {}), this.assign(t);
          }
          return (
            (t.prototype.assign = function (t) {
              for (var e in (void 0 === t && (t = {}), t)) this[e] = t[e];
            }),
            t
          );
        })(),
        Gv = (function () {
          function t(t, e, n, r, o) {
            (this.zone = t),
              (this.differs = e),
              (this.elementRef = n),
              (this.platformId = r),
              (this.defaults = o),
              (this.instance = null),
              (this.ro = null),
              (this.timeout = null),
              (this.animation = null),
              (this.configDiff = null),
              (this.ngDestroy = new H()),
              (this.disabled = !1),
              (this.psScrollY = new qo()),
              (this.psScrollX = new qo()),
              (this.psScrollUp = new qo()),
              (this.psScrollDown = new qo()),
              (this.psScrollLeft = new qo()),
              (this.psScrollRight = new qo()),
              (this.psYReachEnd = new qo()),
              (this.psYReachStart = new qo()),
              (this.psXReachEnd = new qo()),
              (this.psXReachStart = new qo());
          }
          return (
            (t.prototype.ngOnInit = function () {
              var t = this;
              if (!this.disabled && pp(this.platformId)) {
                var e = new Zv(this.defaults);
                e.assign(this.config),
                  this.zone.runOutsideAngular(function () {
                    t.instance = new lv(t.elementRef.nativeElement, e);
                  }),
                  this.configDiff ||
                    ((this.configDiff = this.differs
                      .find(this.config || {})
                      .create()),
                    this.configDiff.diff(this.config || {})),
                  this.zone.runOutsideAngular(function () {
                    (t.ro = new Mv(function () {
                      t.update();
                    })),
                      t.elementRef.nativeElement.children[0] &&
                        t.ro.observe(t.elementRef.nativeElement.children[0]),
                      t.ro.observe(t.elementRef.nativeElement);
                  }),
                  this.zone.runOutsideAngular(function () {
                    Kv.forEach(function (e) {
                      var n,
                        r = e.replace(/([A-Z])/g, function (t) {
                          return "-" + t.toLowerCase();
                        });
                      Rv(t.elementRef.nativeElement, r)
                        .pipe(
                          (void 0 === n && (n = Nv),
                          function (t) {
                            return t.lift(new Dv(20, n));
                          }),
                          Fv(t.ngDestroy)
                        )
                        .subscribe(function (n) {
                          t[e].emit(n);
                        });
                    });
                  });
              }
            }),
            (t.prototype.ngOnDestroy = function () {
              var t = this;
              pp(this.platformId) &&
                (this.ngDestroy.next(),
                this.ngDestroy.complete(),
                this.ro && this.ro.disconnect(),
                this.timeout &&
                  "undefined" != typeof window &&
                  window.clearTimeout(this.timeout),
                this.zone.runOutsideAngular(function () {
                  t.instance && t.instance.destroy();
                }),
                (this.instance = null));
            }),
            (t.prototype.ngDoCheck = function () {
              !this.disabled &&
                this.configDiff &&
                pp(this.platformId) &&
                this.configDiff.diff(this.config || {}) &&
                (this.ngOnDestroy(), this.ngOnInit());
            }),
            (t.prototype.ngOnChanges = function (t) {
              t.disabled &&
                !t.disabled.isFirstChange() &&
                pp(this.platformId) &&
                t.disabled.currentValue !== t.disabled.previousValue &&
                (!0 === t.disabled.currentValue
                  ? this.ngOnDestroy()
                  : !1 === t.disabled.currentValue && this.ngOnInit());
            }),
            (t.prototype.ps = function () {
              return this.instance;
            }),
            (t.prototype.update = function () {
              var t = this;
              "undefined" != typeof window &&
                (this.timeout && window.clearTimeout(this.timeout),
                (this.timeout = window.setTimeout(function () {
                  if (!t.disabled && t.configDiff)
                    try {
                      t.zone.runOutsideAngular(function () {
                        t.instance && t.instance.update();
                      });
                    } catch (e) {}
                }, 0)));
            }),
            (t.prototype.geometry = function (t) {
              return (
                void 0 === t && (t = "scroll"),
                new Xv(
                  this.elementRef.nativeElement[t + "Left"],
                  this.elementRef.nativeElement[t + "Top"],
                  this.elementRef.nativeElement[t + "Width"],
                  this.elementRef.nativeElement[t + "Height"]
                )
              );
            }),
            (t.prototype.position = function (t) {
              return (
                void 0 === t && (t = !1),
                !t && this.instance
                  ? new Qv(
                      this.instance.reach.x || 0,
                      this.instance.reach.y || 0
                    )
                  : new Qv(
                      this.elementRef.nativeElement.scrollLeft,
                      this.elementRef.nativeElement.scrollTop
                    )
              );
            }),
            (t.prototype.scrollable = function (t) {
              void 0 === t && (t = "any");
              var e = this.elementRef.nativeElement;
              return "any" === t
                ? e.classList.contains("ps--active-x") ||
                    e.classList.contains("ps--active-y")
                : "both" === t
                ? e.classList.contains("ps--active-x") &&
                  e.classList.contains("ps--active-y")
                : e.classList.contains("ps--active-" + t);
            }),
            (t.prototype.scrollTo = function (t, e, n) {
              this.disabled ||
                (null == e && null == n
                  ? this.animateScrolling("scrollTop", t, n)
                  : (null != t && this.animateScrolling("scrollLeft", t, n),
                    null != e && this.animateScrolling("scrollTop", e, n)));
            }),
            (t.prototype.scrollToX = function (t, e) {
              this.animateScrolling("scrollLeft", t, e);
            }),
            (t.prototype.scrollToY = function (t, e) {
              this.animateScrolling("scrollTop", t, e);
            }),
            (t.prototype.scrollToTop = function (t, e) {
              this.animateScrolling("scrollTop", t || 0, e);
            }),
            (t.prototype.scrollToLeft = function (t, e) {
              this.animateScrolling("scrollLeft", t || 0, e);
            }),
            (t.prototype.scrollToRight = function (t, e) {
              this.animateScrolling(
                "scrollLeft",
                this.elementRef.nativeElement.scrollWidth -
                  this.elementRef.nativeElement.clientWidth -
                  (t || 0),
                e
              );
            }),
            (t.prototype.scrollToBottom = function (t, e) {
              this.animateScrolling(
                "scrollTop",
                this.elementRef.nativeElement.scrollHeight -
                  this.elementRef.nativeElement.clientHeight -
                  (t || 0),
                e
              );
            }),
            (t.prototype.scrollToElement = function (t, e, n) {
              var r = this.elementRef.nativeElement.querySelector(t);
              if (r) {
                var o = r.getBoundingClientRect(),
                  i = this.elementRef.nativeElement.getBoundingClientRect();
                this.elementRef.nativeElement.classList.contains(
                  "ps--active-x"
                ) &&
                  this.animateScrolling(
                    "scrollLeft",
                    o.left -
                      i.left +
                      this.elementRef.nativeElement.scrollLeft +
                      (e || 0),
                    n
                  ),
                  this.elementRef.nativeElement.classList.contains(
                    "ps--active-y"
                  ) &&
                    this.animateScrolling(
                      "scrollTop",
                      o.top -
                        i.top +
                        this.elementRef.nativeElement.scrollTop +
                        (e || 0),
                      n
                    );
              }
            }),
            (t.prototype.animateScrolling = function (t, e, n) {
              var r = this;
              if (
                (this.animation &&
                  (window.cancelAnimationFrame(this.animation),
                  (this.animation = null)),
                n && "undefined" != typeof window)
              ) {
                if (e !== this.elementRef.nativeElement[t]) {
                  var o = 0,
                    i = 0,
                    s = performance.now(),
                    a = this.elementRef.nativeElement[t],
                    l = (a - e) / 2,
                    u = function (c) {
                      (i += Math.PI / (n / (c - s))),
                        (o = Math.round(e + l + l * Math.cos(i))),
                        r.elementRef.nativeElement[t] === a &&
                          (i >= Math.PI
                            ? r.animateScrolling(t, e, 0)
                            : ((r.elementRef.nativeElement[t] = o),
                              (a = r.elementRef.nativeElement[t]),
                              (s = c),
                              (r.animation = window.requestAnimationFrame(u))));
                    };
                  window.requestAnimationFrame(u);
                }
              } else this.elementRef.nativeElement[t] = e;
            }),
            t
          );
        })(),
        $v = (function () {
          function t(t, e, n) {
            (this.zone = t),
              (this.cdRef = e),
              (this.platformId = n),
              (this.states = {}),
              (this.indicatorX = !1),
              (this.indicatorY = !1),
              (this.interaction = !1),
              (this.scrollPositionX = 0),
              (this.scrollPositionY = 0),
              (this.scrollDirectionX = 0),
              (this.scrollDirectionY = 0),
              (this.usePropagationX = !1),
              (this.usePropagationY = !1),
              (this.allowPropagationX = !1),
              (this.allowPropagationY = !1),
              (this.stateTimeout = null),
              (this.ngDestroy = new H()),
              (this.stateUpdate = new H()),
              (this.disabled = !1),
              (this.usePSClass = !0),
              (this.autoPropagation = !1),
              (this.scrollIndicators = !1),
              (this.psScrollY = new qo()),
              (this.psScrollX = new qo()),
              (this.psScrollUp = new qo()),
              (this.psScrollDown = new qo()),
              (this.psScrollLeft = new qo()),
              (this.psScrollRight = new qo()),
              (this.psYReachEnd = new qo()),
              (this.psYReachStart = new qo()),
              (this.psXReachEnd = new qo()),
              (this.psXReachStart = new qo());
          }
          return (
            (t.prototype.ngOnInit = function () {
              var t,
                e = this;
              pp(this.platformId) &&
                (this.stateUpdate
                  .pipe(
                    Fv(this.ngDestroy),
                    ((t = function (t, n) {
                      return t === n && !e.stateTimeout;
                    }),
                    function (e) {
                      return e.lift(new Uv(t, void 0));
                    })
                  )
                  .subscribe(function (t) {
                    e.stateTimeout &&
                      "undefined" != typeof window &&
                      (window.clearTimeout(e.stateTimeout),
                      (e.stateTimeout = null)),
                      "x" === t || "y" === t
                        ? ((e.interaction = !1),
                          "x" === t
                            ? ((e.indicatorX = !1),
                              (e.states.left = !1),
                              (e.states.right = !1),
                              e.autoPropagation &&
                                e.usePropagationX &&
                                (e.allowPropagationX = !1))
                            : "y" === t &&
                              ((e.indicatorY = !1),
                              (e.states.top = !1),
                              (e.states.bottom = !1),
                              e.autoPropagation &&
                                e.usePropagationY &&
                                (e.allowPropagationY = !1)))
                        : ("left" === t || "right" === t
                            ? ((e.states.left = !1),
                              (e.states.right = !1),
                              (e.states[t] = !0),
                              e.autoPropagation &&
                                e.usePropagationX &&
                                (e.indicatorX = !0))
                            : ("top" !== t && "bottom" !== t) ||
                              ((e.states.top = !1),
                              (e.states.bottom = !1),
                              (e.states[t] = !0),
                              e.autoPropagation &&
                                e.usePropagationY &&
                                (e.indicatorY = !0)),
                          e.autoPropagation &&
                            "undefined" != typeof window &&
                            (e.stateTimeout = window.setTimeout(function () {
                              (e.indicatorX = !1),
                                (e.indicatorY = !1),
                                (e.stateTimeout = null),
                                e.interaction &&
                                  (e.states.left || e.states.right) &&
                                  (e.allowPropagationX = !0),
                                e.interaction &&
                                  (e.states.top || e.states.bottom) &&
                                  (e.allowPropagationY = !0),
                                e.cdRef.markForCheck();
                            }, 500))),
                      e.cdRef.markForCheck(),
                      e.cdRef.detectChanges();
                  }),
                this.zone.runOutsideAngular(function () {
                  if (e.directiveRef) {
                    var t = e.directiveRef.elementRef.nativeElement;
                    Rv(t, "wheel")
                      .pipe(Fv(e.ngDestroy))
                      .subscribe(function (t) {
                        !e.disabled &&
                          e.autoPropagation &&
                          e.checkPropagation(t, t.deltaX, t.deltaY);
                      }),
                      Rv(t, "touchmove")
                        .pipe(Fv(e.ngDestroy))
                        .subscribe(function (t) {
                          if (!e.disabled && e.autoPropagation) {
                            var n = t.touches[0].clientX,
                              r = t.touches[0].clientY;
                            e.checkPropagation(
                              t,
                              n - e.scrollPositionX,
                              r - e.scrollPositionY
                            ),
                              (e.scrollPositionX = n),
                              (e.scrollPositionY = r);
                          }
                        }),
                      ct(
                        Rv(t, "ps-scroll-x").pipe(zv("x")),
                        Rv(t, "ps-scroll-y").pipe(zv("y")),
                        Rv(t, "ps-x-reach-end").pipe(zv("right")),
                        Rv(t, "ps-y-reach-end").pipe(zv("bottom")),
                        Rv(t, "ps-x-reach-start").pipe(zv("left")),
                        Rv(t, "ps-y-reach-start").pipe(zv("top"))
                      )
                        .pipe(Fv(e.ngDestroy))
                        .subscribe(function (t) {
                          e.disabled ||
                            (!e.autoPropagation && !e.scrollIndicators) ||
                            e.stateUpdate.next(t);
                        });
                  }
                }),
                window.setTimeout(function () {
                  Kv.forEach(function (t) {
                    e.directiveRef && (e.directiveRef[t] = e[t]);
                  });
                }, 0));
            }),
            (t.prototype.ngOnDestroy = function () {
              pp(this.platformId) &&
                (this.ngDestroy.next(),
                this.ngDestroy.unsubscribe(),
                this.stateTimeout &&
                  "undefined" != typeof window &&
                  window.clearTimeout(this.stateTimeout));
            }),
            (t.prototype.ngDoCheck = function () {
              if (
                pp(this.platformId) &&
                !this.disabled &&
                this.autoPropagation &&
                this.directiveRef
              ) {
                var t = this.directiveRef.elementRef.nativeElement;
                (this.usePropagationX = t.classList.contains("ps--active-x")),
                  (this.usePropagationY = t.classList.contains("ps--active-y"));
              }
            }),
            (t.prototype.checkPropagation = function (t, e, n) {
              this.interaction = !0;
              var r = e < 0 ? -1 : 1,
                o = n < 0 ? -1 : 1;
              ((this.usePropagationX && this.usePropagationY) ||
                (this.usePropagationX &&
                  (!this.allowPropagationX || this.scrollDirectionX !== r)) ||
                (this.usePropagationY &&
                  (!this.allowPropagationY || this.scrollDirectionY !== o))) &&
                (t.preventDefault(), t.stopPropagation()),
                e && (this.scrollDirectionX = r),
                n && (this.scrollDirectionY = o),
                this.stateUpdate.next("interaction"),
                this.cdRef.detectChanges();
            }),
            t
          );
        })(),
        Jv = (function () {
          return function () {};
        })(),
        ty = qs({
          encapsulation: 2,
          styles: [
            "\n\nperfect-scrollbar {\n  position: relative;\n\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n\nperfect-scrollbar[hidden] {\n  display: none;\n}\n\nperfect-scrollbar[fxflex] {\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  min-width: 0;\n  min-height: 0;\n\n  -webkit-box-direction: column;\n  -webkit-box-orient: column;\n}\n\nperfect-scrollbar[fxflex] > .ps {\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n  width: auto;\n  height: auto;\n  min-width: 0;\n  min-height: 0;\n\n  -webkit-box-flex: 1;\n}\n\nperfect-scrollbar[fxlayout] > .ps,\nperfect-scrollbar[fxlayout] > .ps > .ps-content {\n  display: flex;\n\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n  flex-direction: inherit;\n  align-items: inherit;\n  align-content: inherit;\n  justify-content: inherit;\n  width: 100%;\n  height: 100%;\n\n  -webkit-box-align: inherit;\n  -webkit-box-direction: inherit;\n  -webkit-box-flex: 1;\n  -webkit-box-orient: inherit;\n  -webkit-box-pack: inherit;\n}\n\nperfect-scrollbar[fxlayout='row'] > .ps,\nperfect-scrollbar[fxlayout='row'] > .ps > .ps-content, {\n  flex-direction: row !important;\n\n  -webkit-box-direction: row !important;\n  -webkit-box-orient: row !important;\n}\n\nperfect-scrollbar[fxlayout='column'] > .ps,\nperfect-scrollbar[fxlayout='column'] > .ps > .ps-content {\n  flex-direction: column !important;\n\n  -webkit-box-direction: column !important;\n  -webkit-box-orient: column !important;\n}\n\nperfect-scrollbar > .ps {\n  position: static;\n\n  display: block;\n  width: inherit;\n  height: inherit;\n  max-width: inherit;\n  max-height: inherit;\n}\n\nperfect-scrollbar > .ps > .ps-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  display: block;\n  overflow: hidden;\n\n  pointer-events: none;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-top,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-left,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-right,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n  position: absolute;\n\n  opacity: 0;\n\n  transition: opacity 300ms ease-in-out;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-top,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n  left: 0;\n\n  min-width: 100%;\n  min-height: 24px;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-left,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-right {\n  top: 0;\n\n  min-width: 24px;\n  min-height: 100%;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-top {\n  top: 0;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-left {\n  left: 0;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-right {\n  right: 0;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n  bottom: 0;\n}\n\nperfect-scrollbar > .ps.ps--active-y > .ps__rail-y {\n  top: 0 !important;\n  right: 0 !important;\n  left: auto !important;\n\n  width: 10px;\n\n  cursor: default;\n\n  transition:\n    width 200ms linear,\n    opacity 200ms linear,\n    background-color 200ms linear;\n}\n\nperfect-scrollbar > .ps.ps--active-y > .ps__rail-y:hover,\nperfect-scrollbar > .ps.ps--active-y > .ps__rail-y.ps--clicking {\n  width: 15px;\n}\n\nperfect-scrollbar > .ps.ps--active-x > .ps__rail-x {\n  top: auto !important;\n  bottom: 0 !important;\n  left: 0 !important;\n\n  height: 10px;\n\n  cursor: default;\n\n  transition:\n    height 200ms linear,\n    opacity 200ms linear,\n    background-color 200ms linear;\n}\n\nperfect-scrollbar > .ps.ps--active-x > .ps__rail-x:hover,\nperfect-scrollbar > .ps.ps--active-x > .ps__rail-x.ps--clicking {\n  height: 15px;\n}\n\nperfect-scrollbar > .ps.ps--active-x.ps--active-y > .ps__rail-y {\n  margin: 0 0 10px;\n}\n\nperfect-scrollbar > .ps.ps--active-x.ps--active-y > .ps__rail-x {\n  margin: 0 10px 0 0;\n}\n\nperfect-scrollbar > .ps.ps--scrolling-y > .ps__rail-y,\nperfect-scrollbar > .ps.ps--scrolling-x > .ps__rail-x {\n  opacity: 0.9;\n\n  background-color: #eee;\n}\n\nperfect-scrollbar.ps-show-always > .ps.ps--active-y > .ps__rail-y,\nperfect-scrollbar.ps-show-always > .ps.ps--active-x > .ps__rail-x {\n  opacity: 0.6;\n}\n\nperfect-scrollbar.ps-show-active > .ps.ps--active-y > .ps-overlay:not(.ps-at-top) .ps-indicator-top {\n  opacity: 1;\n\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active > .ps.ps--active-y > .ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom {\n  opacity: 1;\n\n  background: linear-gradient(to top, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active > .ps.ps--active-x > .ps-overlay:not(.ps-at-left) .ps-indicator-left {\n  opacity: 1;\n\n  background: linear-gradient(to right, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active > .ps.ps--active-x > .ps-overlay:not(.ps-at-right) .ps-indicator-right {\n  opacity: 1;\n\n  background: linear-gradient(to left, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-top .ps-indicator-top {\n  background: linear-gradient(to bottom, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-bottom .ps-indicator-bottom {\n  background: linear-gradient(to top, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-left .ps-indicator-left {\n  background: linear-gradient(to right, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-right .ps-indicator-right {\n  background: linear-gradient(to left, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show,\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show {\n  opacity: 1;\n}\n",
            "\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n\n\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  \n  bottom: 0px;\n  \n  position: absolute;\n}\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  \n  right: 0;\n  \n  position: absolute;\n}\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  \n  bottom: 2px;\n  \n  position: absolute;\n}\n\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  \n  right: 2px;\n  \n  position: absolute;\n}\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x,\n.ps__rail-x.ps--clicking .ps__thumb-x {\n  background-color: #999;\n  height: 11px;\n}\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: #999;\n  width: 11px;\n}\n\n\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n",
          ],
          data: {},
        });
      function ey(t) {
        return Al(
          0,
          [
            (t()(),
            ma(
              0,
              0,
              null,
              null,
              4,
              "div",
              [["class", "ps-overlay"]],
              [
                [2, "ps-at-top", null],
                [2, "ps-at-left", null],
                [2, "ps-at-right", null],
                [2, "ps-at-bottom", null],
              ],
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              1,
              0,
              null,
              null,
              0,
              "div",
              [["class", "ps-indicator-top"]],
              [[2, "ps-indicator-show", null]],
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              2,
              0,
              null,
              null,
              0,
              "div",
              [["class", "ps-indicator-left"]],
              [[2, "ps-indicator-show", null]],
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              3,
              0,
              null,
              null,
              0,
              "div",
              [["class", "ps-indicator-right"]],
              [[2, "ps-indicator-show", null]],
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              4,
              0,
              null,
              null,
              0,
              "div",
              [["class", "ps-indicator-bottom"]],
              [[2, "ps-indicator-show", null]],
              null,
              null,
              null,
              null
            )),
          ],
          null,
          function (t, e) {
            var n = e.component;
            t(
              e,
              0,
              0,
              n.states.top,
              n.states.left,
              n.states.right,
              n.states.bottom
            ),
              t(e, 1, 0, n.indicatorY && n.interaction),
              t(e, 2, 0, n.indicatorX && n.interaction),
              t(e, 3, 0, n.indicatorX && n.interaction),
              t(e, 4, 0, n.indicatorY && n.interaction);
          }
        );
      }
      function ny(t) {
        return Al(
          0,
          [
            Cl(402653184, 1, { directiveRef: 0 }),
            (t()(),
            ma(
              1,
              0,
              null,
              null,
              5,
              "div",
              [["style", "position: static;"]],
              [[2, "ps", null]],
              null,
              null,
              null,
              null
            )),
            sl(
              2,
              999424,
              [[1, 4]],
              0,
              Gv,
              [xi, ms, no, hi, [2, Yv]],
              { disabled: [0, "disabled"], config: [1, "config"] },
              null
            ),
            (t()(),
            ma(
              3,
              0,
              null,
              null,
              1,
              "div",
              [["class", "ps-content"]],
              null,
              null,
              null,
              null,
              null
            )),
            Ol(null, 0),
            (t()(), ya(16777216, null, null, 1, null, ey)),
            sl(6, 16384, null, 0, op, [Gi, Wo], { ngIf: [0, "ngIf"] }, null),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 2, 0, n.disabled, n.config), t(e, 6, 0, n.scrollIndicators);
          },
          function (t, e) {
            t(e, 1, 0, e.component.usePSClass);
          }
        );
      }
      var ry = (function () {
          function t(t) {
            (this.sidebarservice = t),
              (this.menus = []),
              (this.menus = t.getMenuList());
          }
          return (
            (t.prototype.ngOnInit = function () {}),
            (t.prototype.getSideBarState = function () {
              return this.sidebarservice.getSidebarState();
            }),
            (t.prototype.toggle = function (t) {
              "dropdown" === t.type &&
                this.menus.forEach(function (e) {
                  e === t ? (t.active = !t.active) : (e.active = !1);
                });
            }),
            (t.prototype.getState = function (t) {
              return t.active ? "down" : "up";
            }),
            (t.prototype.hasBackgroundImage = function () {
              return this.sidebarservice.hasBackgroundImage;
            }),
            t
          );
        })(),
        oy = qs({
          encapsulation: 0,
          styles: [
            [
              '@-webkit-keyframes swing{0%,100%,30%,50%,70%{-webkit-transform:rotate(0);transform:rotate(0)}10%{-webkit-transform:rotate(10deg);transform:rotate(10deg)}40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}}@keyframes swing{0%,100%,30%,50%,70%{-webkit-transform:rotate(0);transform:rotate(0)}10%{-webkit-transform:rotate(10deg);transform:rotate(10deg)}40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}}@-webkit-keyframes sonar{0%{-webkit-transform:scale(.9);transform:scale(.9);opacity:1}100%{-webkit-transform:scale(2);transform:scale(2);opacity:0}}@keyframes sonar{0%{-webkit-transform:scale(.9);transform:scale(.9);opacity:1}100%{-webkit-transform:scale(2);transform:scale(2);opacity:0}}.sidebar[_ngcontent-%COMP%]{width:260px;height:100%;max-height:100%;position:fixed;top:0;left:0;z-index:999;transition:left .3s ease;background-color:#1d1d1d}.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;transition:color .3s ease}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]{max-height:calc(100% - 30px);height:calc(100% - 30px);overflow-y:auto;position:relative}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]{padding:10px 20px;display:flex;align-items:center}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{text-transform:uppercase;font-weight:700;flex-grow:1;text-decoration:none}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%]{cursor:pointer;font-size:20px;transition:color .3s ease}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]{padding:20px;overflow:hidden}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-pic[_ngcontent-%COMP%]{float:left;width:60px;padding:2px;border-radius:12px;margin-right:15px;overflow:hidden}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover;height:100%;width:100%}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]{float:left}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:block}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%]{font-size:12px}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%]{font-size:11px;margin-top:4px}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:8px;margin-right:4px;color:#5cb85c}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:10px 20px}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{border-left:0}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]{padding-bottom:10px}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700;font-size:14px;padding:15px 20px 5px;display:inline-block}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;padding:0;margin:0}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;width:100%;text-decoration:none;position:relative;padding:8px 30px 8px 20px}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px;font-size:12px;width:30px;height:30px;line-height:30px;text-align:center;border-radius:4px}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover > i[_ngcontent-%COMP%]::before{display:inline-block;-webkit-animation:.5s ease-in-out alternate swing;animation:.5s ease-in-out alternate swing}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.badge[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%]{float:right;margin-top:8px;margin-left:5px}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:after{font-family:"Font Awesome 5 Free";font-weight:900;content:"\\f105";display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;background:0 0;position:absolute;right:15px;top:14px;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]{overflow:hidden}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:5px 0}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-left:25px;font-size:13px}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{content:"\\f111";font-family:"Font Awesome 5 Free";font-weight:400;font-style:normal;display:inline-block;text-align:center;text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin-right:10px;font-size:8px}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{float:right;margin-top:0}.sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:after{-webkit-transform:rotate(90deg);transform:rotate(90deg);right:15px}.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex-grow:1;text-align:center;height:30px;line-height:30px;position:static;display:flex}.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{flex-grow:1}.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]{position:absolute;top:0}.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{bottom:31px;left:0!important;top:initial!important;right:0!important;-webkit-transform:none!important;transform:none!important;border-bottom-left-radius:0;border-bottom-right-radius:0;font-size:.9rem}.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{padding:.25rem 1rem}.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .messages-header[_ngcontent-%COMP%]{padding:0 1rem}.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]{display:flex}.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:4px;overflow:hidden}.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover;height:100%}.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{line-height:1.6;padding-left:5px;width:calc(100% - 40px)}.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-title[_ngcontent-%COMP%]{font-size:13px}.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-detail[_ngcontent-%COMP%]{font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{padding:.25rem 1rem}.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .notifications-header[_ngcontent-%COMP%]{padding:0 1rem}.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]{display:flex}.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:40px;height:40px}.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{width:35px;height:35px;text-align:center;line-height:35px;border-radius:4px}.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{line-height:1.6;padding-left:5px;width:calc(100% - 40px)}.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notification-time[_ngcontent-%COMP%]{font-size:.7rem;color:#828282}.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notification-detail[_ngcontent-%COMP%]{font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .badge-sonar[_ngcontent-%COMP%]{display:inline-block;background:#980303;border-radius:50%;height:8px;width:8px;position:absolute;top:0}.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .badge-sonar[_ngcontent-%COMP%]:after{content:\'\';position:absolute;top:0;left:0;border:2px solid #980303;opacity:0;border-radius:50%;width:100%;height:100%;-webkit-animation:1.5s infinite sonar;animation:1.5s infinite sonar}.sidebar[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]{border-top:1px solid #2b2b2b}.sidebar[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%]{box-shadow:none}.sidebar[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%]{color:#bdbdbd}.sidebar[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%]:hover, .sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before, .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .sidebar[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff}.sidebar[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%]{background-color:#2b2b2b;border:none;margin-left:1px}.sidebar[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#6c7b88}.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]{position:absolute;width:100%;bottom:0;display:flex;background-color:#2b2b2b;box-shadow:0 -1px 5px #131212;border-top:1px solid #3a3a3a}.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{border-left:none}.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{border-right:none}.sidebar.sidebar-bg[_ngcontent-%COMP%]{background-image:url(/angular-pro-sidebar/demo/assets/img/bg1.jpg);background-size:cover;background-position:center;background-repeat:no-repeat}.sidebar.sidebar-bg[_ngcontent-%COMP%]:before{content:\'\';position:absolute;top:0;right:0;bottom:0;left:0;background-color:rgba(29,29,29,.8)}.sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%], .sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%], .sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]{border-top:1px solid rgba(255,255,255,.1)}.sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.1);box-shadow:none}.sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}.sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]{background-color:rgba(43,43,43,.5);box-shadow:0 -1px 5px rgba(43,43,43,.5);border-top:1px solid rgba(255,255,255,.1)}',
            ],
          ],
          data: {
            animation: [
              {
                type: 7,
                name: "slide",
                definitions: [
                  {
                    type: 0,
                    name: "up",
                    styles: { type: 6, styles: { height: 0 }, offset: null },
                    options: void 0,
                  },
                  {
                    type: 0,
                    name: "down",
                    styles: { type: 6, styles: { height: "*" }, offset: null },
                    options: void 0,
                  },
                  {
                    type: 1,
                    expr: "up <=> down",
                    animation: { type: 4, styles: null, timings: 200 },
                    options: null,
                  },
                ],
                options: {},
              },
            ],
          },
        });
      function iy(t) {
        return Al(
          0,
          [
            (t()(),
            ma(0, 0, null, null, 1, "span", [], null, null, null, null, null)),
            (t()(), Ml(1, null, ["", ""])),
          ],
          null,
          function (t, e) {
            t(e, 1, 0, e.parent.context.$implicit.title);
          }
        );
      }
      function sy(t) {
        return Al(
          0,
          [
            (t()(),
            ma(
              0,
              0,
              null,
              null,
              2,
              "span",
              [["class", "badge badge-pill"]],
              null,
              null,
              null,
              null,
              null
            )),
            sl(
              1,
              278528,
              null,
              0,
              tp,
              [ys, ms, no, ao],
              { klass: [0, "klass"], ngClass: [1, "ngClass"] },
              null
            ),
            (t()(), Ml(2, null, ["", ""])),
          ],
          function (t, e) {
            t(
              e,
              1,
              0,
              "badge badge-pill",
              e.parent.parent.context.$implicit.badge.class
            );
          },
          function (t, e) {
            t(e, 2, 0, e.parent.parent.context.$implicit.badge.text);
          }
        );
      }
      function ay(t) {
        return Al(
          0,
          [
            (t()(),
            ma(
              0,
              0,
              null,
              null,
              5,
              "a",
              [["href", "#"]],
              null,
              [[null, "click"]],
              function (t, e, n) {
                var r = !0;
                return (
                  "click" === e &&
                    (r =
                      !1 !== t.component.toggle(t.parent.context.$implicit) &&
                      r),
                  r
                );
              },
              null,
              null
            )),
            (t()(),
            ma(
              1,
              0,
              null,
              null,
              0,
              "i",
              [],
              [[8, "className", 0]],
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(2, 0, null, null, 1, "span", [], null, null, null, null, null)),
            (t()(), Ml(3, null, ["", ""])),
            (t()(), ya(16777216, null, null, 1, null, sy)),
            sl(5, 16384, null, 0, op, [Gi, Wo], { ngIf: [0, "ngIf"] }, null),
          ],
          function (t, e) {
            t(e, 5, 0, e.parent.context.$implicit.badge);
          },
          function (t, e) {
            var n;
            t(
              e,
              1,
              0,
              "" +
                (null != (n = e.parent.context.$implicit.icon)
                  ? n.toString()
                  : "")
            ),
              t(e, 3, 0, e.parent.context.$implicit.title);
          }
        );
      }
      function ly(t) {
        return Al(
          0,
          [
            (t()(),
            ma(
              0,
              0,
              null,
              null,
              2,
              "span",
              [["class", "badge badge-pill"]],
              null,
              null,
              null,
              null,
              null
            )),
            sl(
              1,
              278528,
              null,
              0,
              tp,
              [ys, ms, no, ao],
              { klass: [0, "klass"], ngClass: [1, "ngClass"] },
              null
            ),
            (t()(), Ml(2, null, ["", ""])),
          ],
          function (t, e) {
            t(
              e,
              1,
              0,
              "badge badge-pill",
              e.parent.context.$implicit.badge.class
            );
          },
          function (t, e) {
            t(e, 2, 0, e.parent.context.$implicit.badge.text);
          }
        );
      }
      function uy(t) {
        return Al(
          0,
          [
            (t()(),
            ma(0, 0, null, null, 4, "li", [], null, null, null, null, null)),
            (t()(),
            ma(
              1,
              0,
              null,
              null,
              3,
              "a",
              [["href", "#"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ml(2, null, [" ", " "])),
            (t()(), ya(16777216, null, null, 1, null, ly)),
            sl(4, 16384, null, 0, op, [Gi, Wo], { ngIf: [0, "ngIf"] }, null),
          ],
          function (t, e) {
            t(e, 4, 0, e.context.$implicit.badge);
          },
          function (t, e) {
            t(e, 2, 0, e.context.$implicit.title);
          }
        );
      }
      function cy(t) {
        return Al(
          0,
          [
            (t()(),
            ma(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["class", "sidebar-submenu"]],
              [[24, "@slide", 0]],
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(1, 0, null, null, 2, "ul", [], null, null, null, null, null)),
            (t()(), ya(16777216, null, null, 1, null, uy)),
            sl(
              3,
              278528,
              null,
              0,
              np,
              [Gi, Wo, ys],
              { ngForOf: [0, "ngForOf"] },
              null
            ),
          ],
          function (t, e) {
            t(e, 3, 0, e.parent.context.$implicit.submenus);
          },
          function (t, e) {
            t(e, 0, 0, e.component.getState(e.parent.context.$implicit));
          }
        );
      }
      function py(t) {
        return Al(
          0,
          [
            (t()(),
            ma(0, 0, null, null, 8, "li", [], null, null, null, null, null)),
            sl(
              1,
              278528,
              null,
              0,
              tp,
              [ys, ms, no, ao],
              { ngClass: [0, "ngClass"] },
              null
            ),
            kl(2, { active: 0, "sidebar-dropdown": 1, "header-menu": 2 }),
            (t()(), ya(16777216, null, null, 1, null, iy)),
            sl(4, 16384, null, 0, op, [Gi, Wo], { ngIf: [0, "ngIf"] }, null),
            (t()(), ya(16777216, null, null, 1, null, ay)),
            sl(6, 16384, null, 0, op, [Gi, Wo], { ngIf: [0, "ngIf"] }, null),
            (t()(), ya(16777216, null, null, 1, null, cy)),
            sl(8, 16384, null, 0, op, [Gi, Wo], { ngIf: [0, "ngIf"] }, null),
          ],
          function (t, e) {
            var n = t(
              e,
              2,
              0,
              e.context.$implicit.active,
              "dropdown" === e.context.$implicit.type,
              "header" === e.context.$implicit.type
            );
            t(e, 1, 0, n),
              t(e, 4, 0, "header" === e.context.$implicit.type),
              t(e, 6, 0, "header" !== e.context.$implicit.type),
              t(e, 8, 0, "dropdown" === e.context.$implicit.type);
          },
          null
        );
      }
      function hy(t) {
        return Al(
          0,
          [
            (t()(),
            ma(
              0,
              0,
              null,
              null,
              34,
              "div",
              [["class", "dropdown-menu notifications"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              1,
              0,
              null,
              null,
              2,
              "div",
              [["class", "notifications-header"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              2,
              0,
              null,
              null,
              0,
              "i",
              [["class", "fa fa-bell"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ml(-1, null, [" Notifications "])),
            (t()(),
            ma(
              4,
              0,
              null,
              null,
              0,
              "div",
              [["class", "dropdown-divider"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              5,
              0,
              null,
              null,
              8,
              "a",
              [
                ["class", "dropdown-item"],
                ["href", "#"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              6,
              0,
              null,
              null,
              7,
              "div",
              [["class", "notification-content"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              7,
              0,
              null,
              null,
              1,
              "div",
              [["class", "icon"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              8,
              0,
              null,
              null,
              0,
              "i",
              [["class", "fas fa-check text-success border border-success"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              9,
              0,
              null,
              null,
              4,
              "div",
              [["class", "content"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              10,
              0,
              null,
              null,
              1,
              "div",
              [["class", "notification-detail"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            Ml(-1, null, [
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo",
            ])),
            (t()(),
            ma(
              12,
              0,
              null,
              null,
              1,
              "div",
              [["class", "notification-time"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ml(-1, null, [" 6 minutes ago "])),
            (t()(),
            ma(
              14,
              0,
              null,
              null,
              8,
              "a",
              [
                ["class", "dropdown-item"],
                ["href", "#"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              15,
              0,
              null,
              null,
              7,
              "div",
              [["class", "notification-content"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              16,
              0,
              null,
              null,
              1,
              "div",
              [["class", "icon"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              17,
              0,
              null,
              null,
              0,
              "i",
              [["class", "fas fa-exclamation text-info border border-info"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              18,
              0,
              null,
              null,
              4,
              "div",
              [["class", "content"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              19,
              0,
              null,
              null,
              1,
              "div",
              [["class", "notification-detail"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            Ml(-1, null, [
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo",
            ])),
            (t()(),
            ma(
              21,
              0,
              null,
              null,
              1,
              "div",
              [["class", "notification-time"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ml(-1, null, [" Today "])),
            (t()(),
            ma(
              23,
              0,
              null,
              null,
              8,
              "a",
              [
                ["class", "dropdown-item"],
                ["href", "#"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              24,
              0,
              null,
              null,
              7,
              "div",
              [["class", "notification-content"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              25,
              0,
              null,
              null,
              1,
              "div",
              [["class", "icon"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              26,
              0,
              null,
              null,
              0,
              "i",
              [
                [
                  "class",
                  "fas fa-exclamation-triangle text-warning border border-warning",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              27,
              0,
              null,
              null,
              4,
              "div",
              [["class", "content"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              28,
              0,
              null,
              null,
              1,
              "div",
              [["class", "notification-detail"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            Ml(-1, null, [
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo",
            ])),
            (t()(),
            ma(
              30,
              0,
              null,
              null,
              1,
              "div",
              [["class", "notification-time"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ml(-1, null, [" Yesterday "])),
            (t()(),
            ma(
              32,
              0,
              null,
              null,
              0,
              "div",
              [["class", "dropdown-divider"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              33,
              0,
              null,
              null,
              1,
              "a",
              [
                ["class", "dropdown-item text-center"],
                ["href", "#"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ml(-1, null, ["View all notifications"])),
          ],
          null,
          null
        );
      }
      function fy(t) {
        return Al(
          0,
          [
            (t()(),
            ma(
              0,
              0,
              null,
              null,
              37,
              "div",
              [["class", "dropdown-menu messages"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              1,
              0,
              null,
              null,
              2,
              "div",
              [["class", "messages-header"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              2,
              0,
              null,
              null,
              0,
              "i",
              [["class", "fa fa-envelope"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ml(-1, null, [" Messages "])),
            (t()(),
            ma(
              4,
              0,
              null,
              null,
              0,
              "div",
              [["class", "dropdown-divider"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              5,
              0,
              null,
              null,
              9,
              "a",
              [
                ["class", "dropdown-item"],
                ["href", "#"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              6,
              0,
              null,
              null,
              8,
              "div",
              [["class", "message-content"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              7,
              0,
              null,
              null,
              1,
              "div",
              [["class", "pic"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              8,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", ""],
                ["src", "assets/img/user.jpg"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              9,
              0,
              null,
              null,
              5,
              "div",
              [["class", "content"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              10,
              0,
              null,
              null,
              2,
              "div",
              [["class", "message-title"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              11,
              0,
              null,
              null,
              1,
              "strong",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ml(-1, null, [" Jhon doe"])),
            (t()(),
            ma(
              13,
              0,
              null,
              null,
              1,
              "div",
              [["class", "message-detail"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            Ml(-1, null, [
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo",
            ])),
            (t()(),
            ma(
              15,
              0,
              null,
              null,
              9,
              "a",
              [
                ["class", "dropdown-item"],
                ["href", "#"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              16,
              0,
              null,
              null,
              8,
              "div",
              [["class", "message-content"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              17,
              0,
              null,
              null,
              1,
              "div",
              [["class", "pic"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              18,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", ""],
                ["src", "assets/img/user.jpg"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              19,
              0,
              null,
              null,
              5,
              "div",
              [["class", "content"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              20,
              0,
              null,
              null,
              2,
              "div",
              [["class", "message-title"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              21,
              0,
              null,
              null,
              1,
              "strong",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ml(-1, null, [" Jhon doe"])),
            (t()(),
            ma(
              23,
              0,
              null,
              null,
              1,
              "div",
              [["class", "message-detail"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            Ml(-1, null, [
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo",
            ])),
            (t()(),
            ma(
              25,
              0,
              null,
              null,
              9,
              "a",
              [
                ["class", "dropdown-item"],
                ["href", "#"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              26,
              0,
              null,
              null,
              8,
              "div",
              [["class", "message-content"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              27,
              0,
              null,
              null,
              1,
              "div",
              [["class", "pic"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              28,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", ""],
                ["src", "assets/img/user.jpg"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              29,
              0,
              null,
              null,
              5,
              "div",
              [["class", "content"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              30,
              0,
              null,
              null,
              2,
              "div",
              [["class", "message-title"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              31,
              0,
              null,
              null,
              1,
              "strong",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ml(-1, null, [" Jhon doe"])),
            (t()(),
            ma(
              33,
              0,
              null,
              null,
              1,
              "div",
              [["class", "message-detail"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            Ml(-1, null, [
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo",
            ])),
            (t()(),
            ma(
              35,
              0,
              null,
              null,
              0,
              "div",
              [["class", "dropdown-divider"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              36,
              0,
              null,
              null,
              1,
              "a",
              [
                ["class", "dropdown-item text-center"],
                ["href", "#"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ml(-1, null, ["View all messages"])),
          ],
          null,
          null
        );
      }
      function dy(t) {
        return Al(
          0,
          [
            (t()(),
            ma(
              0,
              0,
              null,
              null,
              6,
              "div",
              [["class", "dropdown-menu"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              1,
              0,
              null,
              null,
              1,
              "a",
              [
                ["class", "dropdown-item"],
                ["href", "#"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ml(-1, null, ["My profile"])),
            (t()(),
            ma(
              3,
              0,
              null,
              null,
              1,
              "a",
              [
                ["class", "dropdown-item"],
                ["href", "#"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ml(-1, null, ["Help"])),
            (t()(),
            ma(
              5,
              0,
              null,
              null,
              1,
              "a",
              [
                ["class", "dropdown-item"],
                ["href", "#"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ml(-1, null, ["Setting"])),
          ],
          null,
          null
        );
      }
      function gy(t) {
        return Al(
          0,
          [
            (t()(),
            ma(
              0,
              0,
              null,
              null,
              66,
              "nav",
              [
                ["class", "sidebar"],
                ["id", "sidebar"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            sl(
              1,
              278528,
              null,
              0,
              tp,
              [ys, ms, no, ao],
              { klass: [0, "klass"], ngClass: [1, "ngClass"] },
              null
            ),
            kl(2, { "sidebar-bg": 0 }),
            (t()(),
            ma(
              3,
              0,
              null,
              null,
              30,
              "div",
              [["class", "sidebar-content"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              4,
              0,
              null,
              null,
              29,
              "perfect-scrollbar",
              [],
              [
                [2, "ps-show-limits", null],
                [2, "ps-show-active", null],
              ],
              null,
              null,
              ny,
              ty
            )),
            sl(5, 507904, null, 0, $v, [xi, Ji, hi], null, null),
            (t()(),
            ma(
              6,
              0,
              null,
              0,
              2,
              "div",
              [["class", "sidebar-header"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              7,
              0,
              null,
              null,
              1,
              "a",
              [["href", "#"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ml(-1, null, ["Pro Sidebar"])),
            (t()(),
            ma(
              9,
              0,
              null,
              0,
              13,
              "div",
              [["class", "sidebar-profile"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              10,
              0,
              null,
              null,
              1,
              "div",
              [["class", "user-pic"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              11,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", "User picture"],
                ["class", "img-responsive img-rounded"],
                ["src", "assets/img/user.jpg"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              12,
              0,
              null,
              null,
              10,
              "div",
              [["class", "user-info"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              13,
              0,
              null,
              null,
              3,
              "span",
              [["class", "user-name"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ml(-1, null, ["Jhon "])),
            (t()(),
            ma(
              15,
              0,
              null,
              null,
              1,
              "strong",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ml(-1, null, ["Smith"])),
            (t()(),
            ma(
              17,
              0,
              null,
              null,
              1,
              "span",
              [["class", "user-role"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ml(-1, null, ["Administrator"])),
            (t()(),
            ma(
              19,
              0,
              null,
              null,
              3,
              "span",
              [["class", "user-status"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              20,
              0,
              null,
              null,
              0,
              "i",
              [["class", "fa fa-circle"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(21, 0, null, null, 1, "span", [], null, null, null, null, null)),
            (t()(), Ml(-1, null, ["Online"])),
            (t()(),
            ma(
              23,
              0,
              null,
              0,
              6,
              "div",
              [["class", "sidebar-search"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(24, 0, null, null, 5, "div", [], null, null, null, null, null)),
            (t()(),
            ma(
              25,
              0,
              null,
              null,
              4,
              "div",
              [["class", "input-group"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              26,
              0,
              null,
              null,
              0,
              "input",
              [
                ["class", "form-control search-menu"],
                ["placeholder", "Search..."],
                ["type", "text"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              27,
              0,
              null,
              null,
              2,
              "div",
              [["class", "input-group-append"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              28,
              0,
              null,
              null,
              1,
              "span",
              [["class", "input-group-text"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              29,
              0,
              null,
              null,
              0,
              "i",
              [
                ["aria-hidden", "true"],
                ["class", "fa fa-search"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              30,
              0,
              null,
              0,
              3,
              "div",
              [["class", "sidebar-menu"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(31, 0, null, null, 2, "ul", [], null, null, null, null, null)),
            (t()(), ya(16777216, null, null, 1, null, py)),
            sl(
              33,
              278528,
              null,
              0,
              np,
              [Gi, Wo, ys],
              { ngForOf: [0, "ngForOf"] },
              null
            ),
            (t()(),
            ma(
              34,
              0,
              null,
              null,
              32,
              "div",
              [["class", "sidebar-footer"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              35,
              16777216,
              null,
              null,
              9,
              "div",
              [
                ["class", "dropdown"],
                ["dropdown", ""],
              ],
              [
                [2, "dropup", null],
                [2, "open", null],
                [2, "show", null],
              ],
              null,
              null,
              null,
              null
            )),
            al(512, null, kg, kg, []),
            sl(37, 212992, null, 0, Rg, [no, ao, Gi, Eg, Tg, kg], null, null),
            (t()(),
            ma(
              38,
              0,
              null,
              null,
              4,
              "a",
              [
                ["dropdownToggle", ""],
                ["href", "#"],
              ],
              [
                [1, "aria-haspopup", 0],
                [1, "disabled", 0],
                [1, "aria-expanded", 0],
              ],
              [
                [null, "click"],
                ["document", "click"],
                [null, "keyup.esc"],
              ],
              function (t, e, n) {
                var r = !0;
                return (
                  "click" === e && (r = !1 !== Xa(t, 39).onClick() && r),
                  "document:click" === e &&
                    (r = !1 !== Xa(t, 39).onDocumentClick(n) && r),
                  "keyup.esc" === e && (r = !1 !== Xa(t, 39).onEsc() && r),
                  r
                );
              },
              null,
              null
            )),
            sl(39, 147456, null, 0, Ag, [kg, no], null, null),
            (t()(),
            ma(
              40,
              0,
              null,
              null,
              0,
              "i",
              [["class", "fa fa-bell"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              41,
              0,
              null,
              null,
              1,
              "span",
              [["class", "badge badge-pill badge-warning notification"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ml(-1, null, ["5"])),
            (t()(), ya(16777216, null, null, 1, null, hy)),
            sl(44, 16384, null, 0, Ig, [kg, Gi, Wo], null, null),
            (t()(),
            ma(
              45,
              16777216,
              null,
              null,
              9,
              "div",
              [
                ["class", "dropdown"],
                ["dropdown", ""],
              ],
              [
                [2, "dropup", null],
                [2, "open", null],
                [2, "show", null],
              ],
              null,
              null,
              null,
              null
            )),
            al(512, null, kg, kg, []),
            sl(47, 212992, null, 0, Rg, [no, ao, Gi, Eg, Tg, kg], null, null),
            (t()(),
            ma(
              48,
              0,
              null,
              null,
              4,
              "a",
              [
                ["dropdownToggle", ""],
                ["href", "#"],
              ],
              [
                [1, "aria-haspopup", 0],
                [1, "disabled", 0],
                [1, "aria-expanded", 0],
              ],
              [
                [null, "click"],
                ["document", "click"],
                [null, "keyup.esc"],
              ],
              function (t, e, n) {
                var r = !0;
                return (
                  "click" === e && (r = !1 !== Xa(t, 49).onClick() && r),
                  "document:click" === e &&
                    (r = !1 !== Xa(t, 49).onDocumentClick(n) && r),
                  "keyup.esc" === e && (r = !1 !== Xa(t, 49).onEsc() && r),
                  r
                );
              },
              null,
              null
            )),
            sl(49, 147456, null, 0, Ag, [kg, no], null, null),
            (t()(),
            ma(
              50,
              0,
              null,
              null,
              0,
              "i",
              [["class", "fa fa-envelope"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              51,
              0,
              null,
              null,
              1,
              "span",
              [["class", "badge badge-pill badge-success notification"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ml(-1, null, ["7"])),
            (t()(), ya(16777216, null, null, 1, null, fy)),
            sl(54, 16384, null, 0, Ig, [kg, Gi, Wo], null, null),
            (t()(),
            ma(
              55,
              16777216,
              null,
              null,
              8,
              "div",
              [
                ["class", "dropdown"],
                ["dropdown", ""],
              ],
              [
                [2, "dropup", null],
                [2, "open", null],
                [2, "show", null],
              ],
              null,
              null,
              null,
              null
            )),
            al(512, null, kg, kg, []),
            sl(57, 212992, null, 0, Rg, [no, ao, Gi, Eg, Tg, kg], null, null),
            (t()(),
            ma(
              58,
              0,
              null,
              null,
              3,
              "a",
              [
                ["dropdownToggle", ""],
                ["href", "#"],
              ],
              [
                [1, "aria-haspopup", 0],
                [1, "disabled", 0],
                [1, "aria-expanded", 0],
              ],
              [
                [null, "click"],
                ["document", "click"],
                [null, "keyup.esc"],
              ],
              function (t, e, n) {
                var r = !0;
                return (
                  "click" === e && (r = !1 !== Xa(t, 59).onClick() && r),
                  "document:click" === e &&
                    (r = !1 !== Xa(t, 59).onDocumentClick(n) && r),
                  "keyup.esc" === e && (r = !1 !== Xa(t, 59).onEsc() && r),
                  r
                );
              },
              null,
              null
            )),
            sl(59, 147456, null, 0, Ag, [kg, no], null, null),
            (t()(),
            ma(
              60,
              0,
              null,
              null,
              0,
              "i",
              [["class", "fa fa-cog"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              61,
              0,
              null,
              null,
              0,
              "span",
              [["class", "badge-sonar"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), ya(16777216, null, null, 1, null, dy)),
            sl(63, 16384, null, 0, Ig, [kg, Gi, Wo], null, null),
            (t()(),
            ma(64, 0, null, null, 2, "div", [], null, null, null, null, null)),
            (t()(),
            ma(
              65,
              0,
              null,
              null,
              1,
              "a",
              [["href", "#"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              66,
              0,
              null,
              null,
              0,
              "i",
              [["class", "fa fa-power-off"]],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          function (t, e) {
            var n = e.component,
              r = t(e, 2, 0, n.hasBackgroundImage());
            t(e, 1, 0, "sidebar", r),
              t(e, 5, 0),
              t(e, 33, 0, n.menus),
              t(e, 37, 0),
              t(e, 47, 0),
              t(e, 57, 0);
          },
          function (t, e) {
            t(e, 4, 0, Xa(e, 5).autoPropagation, Xa(e, 5).scrollIndicators),
              t(
                e,
                35,
                0,
                Xa(e, 37).dropup,
                Xa(e, 37).isOpen,
                Xa(e, 37).isOpen && Xa(e, 37).isBs4
              ),
              t(e, 38, 0, !0, Xa(e, 39).isDisabled, Xa(e, 39).isOpen),
              t(
                e,
                45,
                0,
                Xa(e, 47).dropup,
                Xa(e, 47).isOpen,
                Xa(e, 47).isOpen && Xa(e, 47).isBs4
              ),
              t(e, 48, 0, !0, Xa(e, 49).isDisabled, Xa(e, 49).isOpen),
              t(
                e,
                55,
                0,
                Xa(e, 57).dropup,
                Xa(e, 57).isOpen,
                Xa(e, 57).isOpen && Xa(e, 57).isBs4
              ),
              t(e, 58, 0, !0, Xa(e, 59).isDisabled, Xa(e, 59).isOpen);
          }
        );
      }
      var vy = qs({
        encapsulation: 0,
        styles: [
          [
            ".page-wrapper[_ngcontent-%COMP%]{height:100vh}.page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]{display:inline-block;width:100%;padding-top:20px;transition:padding-left .3s ease}@media screen and (min-width:768px){.page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]{padding-left:300px}}.page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:998;background:#000;opacity:.5;display:none}@media screen and (max-width:768px){.page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .overlay.show[_ngcontent-%COMP%]{display:block}}.page-wrapper[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{left:0}.page-wrapper.toggled[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]{padding-left:0}.page-wrapper[_ngcontent-%COMP%]   .attribution[_ngcontent-%COMP%]{position:fixed;bottom:0;right:0;padding:5px;margin:5px;letter-spacing:1px}",
          ],
        ],
        data: {},
      });
      function yy(t) {
        return Al(
          0,
          [
            (t()(),
            ma(
              0,
              0,
              null,
              null,
              26,
              "div",
              [["class", "page-wrapper"]],
              null,
              null,
              null,
              null,
              null
            )),
            sl(
              1,
              278528,
              null,
              0,
              tp,
              [ys, ms, no, ao],
              { klass: [0, "klass"], ngClass: [1, "ngClass"] },
              null
            ),
            kl(2, { toggled: 0 }),
            (t()(),
            ma(
              3,
              0,
              null,
              null,
              1,
              "app-sidebar",
              [],
              null,
              null,
              null,
              gy,
              oy
            )),
            sl(4, 114688, null, 0, ry, [qu], null, null),
            (t()(),
            ma(
              5,
              0,
              null,
              null,
              21,
              "main",
              [["class", "page-content"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              6,
              0,
              null,
              null,
              17,
              "div",
              [["class", "container-fluid"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              7,
              0,
              null,
              null,
              12,
              "div",
              [["class", "row"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(
              8,
              0,
              null,
              null,
              11,
              "div",
              [["class", "form-group col-md-12"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            ma(9, 0, null, null, 2, "h2", [], null, null, null, null, null)),
            (t()(),
            ma(
              10,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", "angular logo"],
                ["src", "assets/img/angular.png"],
                ["width", "70px"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ml(-1, null, [" Angular Sidebar Template"])),
            (t()(),
            ma(12, 0, null, null, 0, "hr", [], null, null, null, null, null)),
            (t()(),
            ma(13, 0, null, null, 1, "p", [], null, null, null, null, null)),
            (t()(),
            Ml(-1, null, [
              "This is a responsive sidebar template with dropdown menu built with angular 7 and bootstrap 4.",
            ])),
            (t()(),
            ma(15, 0, null, null, 0, "hr", [], null, null, null, null, null)),
            (t()(),
            ma(
              16,
              0,
              null,
              null,
              1,
              "a",
              [
                ["class", "btn btn-outline-secondary mr-1 mb-1"],
                ["href", "#"],
              ],
              null,
              [[null, "click"]],
              function (t, e, n) {
                var r = !0;
                return (
                  "click" === e &&
                    (r = !1 !== t.component.toggleSidebar() && r),
                  r
                );
              },
              null,
              null
            )),
            (t()(), Ml(-1, null, ["Toggle Sidebar"])),
            (t()(),
            ma(
              18,
              0,
              null,
              null,
              1,
              "a",
              [
                ["class", "btn btn-secondary"],
                ["href", "#"],
              ],
              null,
              [[null, "click"]],
              function (t, e, n) {
                var r = !0;
                return (
                  "click" === e &&
                    (r = !1 !== t.component.toggleBackgroundImage() && r),
                  r
                );
              },
              null,
              null
            )),
            (t()(), Ml(-1, null, ["Toggle Background Image"])),
            (t()(),
            ma(
              20,
              0,
              null,
              null,
              3,
              "div",
              [["class", "attribution text-center badge badge-warning"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ml(-1, null, [" Created by "])),
            (t()(),
            ma(
              22,
              0,
              null,
              null,
              1,
              "strong",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ml(-1, null, ["Mark Mohamed"])),
            (t()(),
            ma(
              24,
              0,
              null,
              null,
              2,
              "div",
              [["class", "overlay"]],
              null,
              [[null, "click"]],
              function (t, e, n) {
                var r = !0;
                return (
                  "click" === e &&
                    (r = !1 !== t.component.toggleSidebar() && r),
                  r
                );
              },
              null,
              null
            )),
            sl(
              25,
              278528,
              null,
              0,
              tp,
              [ys, ms, no, ao],
              { klass: [0, "klass"], ngClass: [1, "ngClass"] },
              null
            ),
            kl(26, { show: 0 }),
          ],
          function (t, e) {
            var n = e.component,
              r = t(e, 2, 0, n.getSideBarState());
            t(e, 1, 0, "page-wrapper", r), t(e, 4, 0);
            var o = t(e, 26, 0, !n.getSideBarState());
            t(e, 25, 0, "overlay", o);
          },
          null
        );
      }
      function my(t) {
        return Al(
          0,
          [
            (t()(),
            ma(0, 0, null, null, 1, "app-root", [], null, null, null, yy, vy)),
            sl(1, 49152, null, 0, Wu, [qu], null, null),
          ],
          null,
          null
        );
      }
      var by = ja("app-root", Wu, my, {}, {}, []),
        _y = (function () {
          return function () {};
        })(),
        wy = (function () {
          return function () {};
        })(),
        Cy = "*";
      function Sy(t, e) {
        return void 0 === e && (e = null), { type: 2, steps: t, options: e };
      }
      function Ey(t) {
        return { type: 6, styles: t, offset: null };
      }
      function xy(t) {
        Promise.resolve(null).then(t);
      }
      var Py = (function () {
          function t(t, e) {
            void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              (this._onDoneFns = []),
              (this._onStartFns = []),
              (this._onDestroyFns = []),
              (this._started = !1),
              (this._destroyed = !1),
              (this._finished = !1),
              (this.parentPlayer = null),
              (this.totalTime = t + e);
          }
          return (
            (t.prototype._onFinish = function () {
              this._finished ||
                ((this._finished = !0),
                this._onDoneFns.forEach(function (t) {
                  return t();
                }),
                (this._onDoneFns = []));
            }),
            (t.prototype.onStart = function (t) {
              this._onStartFns.push(t);
            }),
            (t.prototype.onDone = function (t) {
              this._onDoneFns.push(t);
            }),
            (t.prototype.onDestroy = function (t) {
              this._onDestroyFns.push(t);
            }),
            (t.prototype.hasStarted = function () {
              return this._started;
            }),
            (t.prototype.init = function () {}),
            (t.prototype.play = function () {
              this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
                (this._started = !0);
            }),
            (t.prototype.triggerMicrotask = function () {
              var t = this;
              xy(function () {
                return t._onFinish();
              });
            }),
            (t.prototype._onStart = function () {
              this._onStartFns.forEach(function (t) {
                return t();
              }),
                (this._onStartFns = []);
            }),
            (t.prototype.pause = function () {}),
            (t.prototype.restart = function () {}),
            (t.prototype.finish = function () {
              this._onFinish();
            }),
            (t.prototype.destroy = function () {
              this._destroyed ||
                ((this._destroyed = !0),
                this.hasStarted() || this._onStart(),
                this.finish(),
                this._onDestroyFns.forEach(function (t) {
                  return t();
                }),
                (this._onDestroyFns = []));
            }),
            (t.prototype.reset = function () {}),
            (t.prototype.setPosition = function (t) {}),
            (t.prototype.getPosition = function () {
              return 0;
            }),
            (t.prototype.triggerCallback = function (t) {
              var e = "start" == t ? this._onStartFns : this._onDoneFns;
              e.forEach(function (t) {
                return t();
              }),
                (e.length = 0);
            }),
            t
          );
        })(),
        Oy = (function () {
          function t(t) {
            var e = this;
            (this._onDoneFns = []),
              (this._onStartFns = []),
              (this._finished = !1),
              (this._started = !1),
              (this._destroyed = !1),
              (this._onDestroyFns = []),
              (this.parentPlayer = null),
              (this.totalTime = 0),
              (this.players = t);
            var n = 0,
              r = 0,
              o = 0,
              i = this.players.length;
            0 == i
              ? xy(function () {
                  return e._onFinish();
                })
              : this.players.forEach(function (t) {
                  t.onDone(function () {
                    ++n == i && e._onFinish();
                  }),
                    t.onDestroy(function () {
                      ++r == i && e._onDestroy();
                    }),
                    t.onStart(function () {
                      ++o == i && e._onStart();
                    });
                }),
              (this.totalTime = this.players.reduce(function (t, e) {
                return Math.max(t, e.totalTime);
              }, 0));
          }
          return (
            (t.prototype._onFinish = function () {
              this._finished ||
                ((this._finished = !0),
                this._onDoneFns.forEach(function (t) {
                  return t();
                }),
                (this._onDoneFns = []));
            }),
            (t.prototype.init = function () {
              this.players.forEach(function (t) {
                return t.init();
              });
            }),
            (t.prototype.onStart = function (t) {
              this._onStartFns.push(t);
            }),
            (t.prototype._onStart = function () {
              this.hasStarted() ||
                ((this._started = !0),
                this._onStartFns.forEach(function (t) {
                  return t();
                }),
                (this._onStartFns = []));
            }),
            (t.prototype.onDone = function (t) {
              this._onDoneFns.push(t);
            }),
            (t.prototype.onDestroy = function (t) {
              this._onDestroyFns.push(t);
            }),
            (t.prototype.hasStarted = function () {
              return this._started;
            }),
            (t.prototype.play = function () {
              this.parentPlayer || this.init(),
                this._onStart(),
                this.players.forEach(function (t) {
                  return t.play();
                });
            }),
            (t.prototype.pause = function () {
              this.players.forEach(function (t) {
                return t.pause();
              });
            }),
            (t.prototype.restart = function () {
              this.players.forEach(function (t) {
                return t.restart();
              });
            }),
            (t.prototype.finish = function () {
              this._onFinish(),
                this.players.forEach(function (t) {
                  return t.finish();
                });
            }),
            (t.prototype.destroy = function () {
              this._onDestroy();
            }),
            (t.prototype._onDestroy = function () {
              this._destroyed ||
                ((this._destroyed = !0),
                this._onFinish(),
                this.players.forEach(function (t) {
                  return t.destroy();
                }),
                this._onDestroyFns.forEach(function (t) {
                  return t();
                }),
                (this._onDestroyFns = []));
            }),
            (t.prototype.reset = function () {
              this.players.forEach(function (t) {
                return t.reset();
              }),
                (this._destroyed = !1),
                (this._finished = !1),
                (this._started = !1);
            }),
            (t.prototype.setPosition = function (t) {
              var e = t * this.totalTime;
              this.players.forEach(function (t) {
                var n = t.totalTime ? Math.min(1, e / t.totalTime) : 1;
                t.setPosition(n);
              });
            }),
            (t.prototype.getPosition = function () {
              var t = 0;
              return (
                this.players.forEach(function (e) {
                  var n = e.getPosition();
                  t = Math.min(n, t);
                }),
                t
              );
            }),
            (t.prototype.beforeDestroy = function () {
              this.players.forEach(function (t) {
                t.beforeDestroy && t.beforeDestroy();
              });
            }),
            (t.prototype.triggerCallback = function (t) {
              var e = "start" == t ? this._onStartFns : this._onDoneFns;
              e.forEach(function (t) {
                return t();
              }),
                (e.length = 0);
            }),
            t
          );
        })(),
        Ty = "!";
      function ky() {
        return "undefined" != typeof process;
      }
      function My(t) {
        switch (t.length) {
          case 0:
            return new Py();
          case 1:
            return t[0];
          default:
            return new Oy(t);
        }
      }
      function Ry(t, e, n, r, o, i) {
        void 0 === o && (o = {}), void 0 === i && (i = {});
        var s = [],
          a = [],
          l = -1,
          u = null;
        if (
          (r.forEach(function (t) {
            var n = t.offset,
              r = n == l,
              c = (r && u) || {};
            Object.keys(t).forEach(function (n) {
              var r = n,
                a = t[n];
              if ("offset" !== n)
                switch (((r = e.normalizePropertyName(r, s)), a)) {
                  case Ty:
                    a = o[n];
                    break;
                  case Cy:
                    a = i[n];
                    break;
                  default:
                    a = e.normalizeStyleValue(n, r, a, s);
                }
              c[r] = a;
            }),
              r || a.push(c),
              (u = c),
              (l = n);
          }),
          s.length)
        )
          throw new Error(
            "Unable to animate due to the following errors:\n - " +
              s.join("\n - ")
          );
        return a;
      }
      function Iy(t, e, n, r) {
        switch (e) {
          case "start":
            t.onStart(function () {
              return r(n && Ay(n, "start", t));
            });
            break;
          case "done":
            t.onDone(function () {
              return r(n && Ay(n, "done", t));
            });
            break;
          case "destroy":
            t.onDestroy(function () {
              return r(n && Ay(n, "destroy", t));
            });
        }
      }
      function Ay(t, e, n) {
        var r = n.totalTime,
          o = Ny(
            t.element,
            t.triggerName,
            t.fromState,
            t.toState,
            e || t.phaseName,
            null == r ? t.totalTime : r,
            !!n.disabled
          ),
          i = t._data;
        return null != i && (o._data = i), o;
      }
      function Ny(t, e, n, r, o, i, s) {
        return (
          void 0 === o && (o = ""),
          void 0 === i && (i = 0),
          {
            element: t,
            triggerName: e,
            fromState: n,
            toState: r,
            phaseName: o,
            totalTime: i,
            disabled: !!s,
          }
        );
      }
      function Dy(t, e, n) {
        var r;
        return (
          t instanceof Map
            ? (r = t.get(e)) || t.set(e, (r = n))
            : (r = t[e]) || (r = t[e] = n),
          r
        );
      }
      function jy(t) {
        var e = t.indexOf(":");
        return [t.substring(1, e), t.substr(e + 1)];
      }
      var Ly = function (t, e) {
          return !1;
        },
        Fy = function (t, e) {
          return !1;
        },
        Hy = function (t, e, n) {
          return [];
        },
        Vy = ky();
      if (Vy || "undefined" != typeof Element) {
        if (
          ((Ly = function (t, e) {
            return t.contains(e);
          }),
          Vy || Element.prototype.matches)
        )
          Fy = function (t, e) {
            return t.matches(e);
          };
        else {
          var Uy = Element.prototype,
            By =
              Uy.matchesSelector ||
              Uy.mozMatchesSelector ||
              Uy.msMatchesSelector ||
              Uy.oMatchesSelector ||
              Uy.webkitMatchesSelector;
          By &&
            (Fy = function (t, e) {
              return By.apply(t, [e]);
            });
        }
        Hy = function (t, e, n) {
          var r = [];
          if (n) r.push.apply(r, c(t.querySelectorAll(e)));
          else {
            var o = t.querySelector(e);
            o && r.push(o);
          }
          return r;
        };
      }
      var zy = null,
        qy = !1;
      function Wy(t) {
        zy ||
          ((zy = ("undefined" != typeof document ? document.body : null) || {}),
          (qy = !!zy.style && "WebkitAppearance" in zy.style));
        var e = !0;
        return (
          zy.style &&
            !(function (t) {
              return "ebkit" == t.substring(1, 6);
            })(t) &&
            !(e = t in zy.style) &&
            qy &&
            (e =
              "Webkit" + t.charAt(0).toUpperCase() + t.substr(1) in zy.style),
          e
        );
      }
      var Yy = Fy,
        Xy = Ly,
        Qy = Hy;
      function Ky(t) {
        var e = {};
        return (
          Object.keys(t).forEach(function (n) {
            var r = n.replace(/([a-z])([A-Z])/g, "$1-$2");
            e[r] = t[n];
          }),
          e
        );
      }
      var Zy = (function () {
          function t() {}
          return (
            (t.prototype.validateStyleProperty = function (t) {
              return Wy(t);
            }),
            (t.prototype.matchesElement = function (t, e) {
              return Yy(t, e);
            }),
            (t.prototype.containsElement = function (t, e) {
              return Xy(t, e);
            }),
            (t.prototype.query = function (t, e, n) {
              return Qy(t, e, n);
            }),
            (t.prototype.computeStyle = function (t, e, n) {
              return n || "";
            }),
            (t.prototype.animate = function (t, e, n, r, o, i, s) {
              return void 0 === i && (i = []), new Py(n, r);
            }),
            t
          );
        })(),
        Gy = (function () {
          function t() {}
          return (t.NOOP = new Zy()), t;
        })(),
        $y = 1e3;
      function Jy(t) {
        if ("number" == typeof t) return t;
        var e = t.match(/^(-?[\.\d]+)(m?s)/);
        return !e || e.length < 2 ? 0 : tm(parseFloat(e[1]), e[2]);
      }
      function tm(t, e) {
        switch (e) {
          case "s":
            return t * $y;
          default:
            return t;
        }
      }
      function em(t, e, n) {
        return t.hasOwnProperty("duration")
          ? t
          : (function (t, e, n) {
              var r,
                o = 0,
                i = "";
              if ("string" == typeof t) {
                var s = t.match(
                  /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i
                );
                if (null === s)
                  return (
                    e.push('The provided timing value "' + t + '" is invalid.'),
                    { duration: 0, delay: 0, easing: "" }
                  );
                r = tm(parseFloat(s[1]), s[2]);
                var a = s[3];
                null != a && (o = tm(Math.floor(parseFloat(a)), s[4]));
                var l = s[5];
                l && (i = l);
              } else r = t;
              if (!n) {
                var u = !1,
                  c = e.length;
                r < 0 &&
                  (e.push(
                    "Duration values below 0 are not allowed for this animation step."
                  ),
                  (u = !0)),
                  o < 0 &&
                    (e.push(
                      "Delay values below 0 are not allowed for this animation step."
                    ),
                    (u = !0)),
                  u &&
                    e.splice(
                      c,
                      0,
                      'The provided timing value "' + t + '" is invalid.'
                    );
              }
              return { duration: r, delay: o, easing: i };
            })(t, e, n);
      }
      function nm(t, e) {
        return (
          void 0 === e && (e = {}),
          Object.keys(t).forEach(function (n) {
            e[n] = t[n];
          }),
          e
        );
      }
      function rm(t, e, n) {
        if ((void 0 === n && (n = {}), e)) for (var r in t) n[r] = t[r];
        else nm(t, n);
        return n;
      }
      function om(t, e, n) {
        return n ? e + ":" + n + ";" : "";
      }
      function im(t) {
        for (var e = "", n = 0; n < t.style.length; n++)
          e += om(0, (r = t.style.item(n)), t.style.getPropertyValue(r));
        for (var r in t.style)
          t.style.hasOwnProperty(r) &&
            !r.startsWith("_") &&
            (e += om(
              0,
              r.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
              t.style[r]
            ));
        t.setAttribute("style", e);
      }
      function sm(t, e) {
        t.style &&
          (Object.keys(e).forEach(function (n) {
            var r = dm(n);
            t.style[r] = e[n];
          }),
          ky() && im(t));
      }
      function am(t, e) {
        t.style &&
          (Object.keys(e).forEach(function (e) {
            var n = dm(e);
            t.style[n] = "";
          }),
          ky() && im(t));
      }
      function lm(t) {
        return Array.isArray(t) ? (1 == t.length ? t[0] : Sy(t)) : t;
      }
      var um = new RegExp("{{\\s*(.+?)\\s*}}", "g");
      function cm(t) {
        var e = [];
        if ("string" == typeof t) {
          for (var n = t.toString(), r = void 0; (r = um.exec(n)); )
            e.push(r[1]);
          um.lastIndex = 0;
        }
        return e;
      }
      function pm(t, e, n) {
        var r = t.toString(),
          o = r.replace(um, function (t, r) {
            var o = e[r];
            return (
              e.hasOwnProperty(r) ||
                (n.push("Please provide a value for the animation param " + r),
                (o = "")),
              o.toString()
            );
          });
        return o == r ? t : o;
      }
      function hm(t) {
        for (var e = [], n = t.next(); !n.done; )
          e.push(n.value), (n = t.next());
        return e;
      }
      var fm = /-+([a-z0-9])/g;
      function dm(t) {
        return t.replace(fm, function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          return t[1].toUpperCase();
        });
      }
      function gm(t, e) {
        return 0 === t || 0 === e;
      }
      function vm(t, e, n) {
        var r = Object.keys(n);
        if (r.length && e.length) {
          var o = e[0],
            i = [];
          if (
            (r.forEach(function (t) {
              o.hasOwnProperty(t) || i.push(t), (o[t] = n[t]);
            }),
            i.length)
          )
            for (
              var s = function () {
                  var n = e[a];
                  i.forEach(function (e) {
                    n[e] = mm(t, e);
                  });
                },
                a = 1;
              a < e.length;
              a++
            )
              s();
        }
        return e;
      }
      function ym(t, e, n) {
        switch (e.type) {
          case 7:
            return t.visitTrigger(e, n);
          case 0:
            return t.visitState(e, n);
          case 1:
            return t.visitTransition(e, n);
          case 2:
            return t.visitSequence(e, n);
          case 3:
            return t.visitGroup(e, n);
          case 4:
            return t.visitAnimate(e, n);
          case 5:
            return t.visitKeyframes(e, n);
          case 6:
            return t.visitStyle(e, n);
          case 8:
            return t.visitReference(e, n);
          case 9:
            return t.visitAnimateChild(e, n);
          case 10:
            return t.visitAnimateRef(e, n);
          case 11:
            return t.visitQuery(e, n);
          case 12:
            return t.visitStagger(e, n);
          default:
            throw new Error(
              "Unable to resolve animation metadata node #" + e.type
            );
        }
      }
      function mm(t, e) {
        return window.getComputedStyle(t)[e];
      }
      var bm = "*",
        _m = new Set(["true", "1"]),
        wm = new Set(["false", "0"]);
      function Cm(t, e) {
        var n = _m.has(t) || wm.has(t),
          r = _m.has(e) || wm.has(e);
        return function (o, i) {
          var s = t == bm || t == o,
            a = e == bm || e == i;
          return (
            !s && n && "boolean" == typeof o && (s = o ? _m.has(t) : wm.has(t)),
            !a && r && "boolean" == typeof i && (a = i ? _m.has(e) : wm.has(e)),
            s && a
          );
        };
      }
      var Sm = new RegExp("s*:selfs*,?", "g");
      function Em(t, e, n) {
        return new xm(t).build(e, n);
      }
      var xm = (function () {
          function t(t) {
            this._driver = t;
          }
          return (
            (t.prototype.build = function (t, e) {
              var n = new Pm(e);
              return this._resetContextStyleTimingState(n), ym(this, lm(t), n);
            }),
            (t.prototype._resetContextStyleTimingState = function (t) {
              (t.currentQuerySelector = ""),
                (t.collectedStyles = {}),
                (t.collectedStyles[""] = {}),
                (t.currentTime = 0);
            }),
            (t.prototype.visitTrigger = function (t, e) {
              var n = this,
                r = (e.queryCount = 0),
                o = (e.depCount = 0),
                i = [],
                s = [];
              return (
                "@" == t.name.charAt(0) &&
                  e.errors.push(
                    "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"
                  ),
                t.definitions.forEach(function (t) {
                  if ((n._resetContextStyleTimingState(e), 0 == t.type)) {
                    var a = t,
                      l = a.name;
                    l
                      .toString()
                      .split(/\s*,\s*/)
                      .forEach(function (t) {
                        (a.name = t), i.push(n.visitState(a, e));
                      }),
                      (a.name = l);
                  } else if (1 == t.type) {
                    var u = n.visitTransition(t, e);
                    (r += u.queryCount), (o += u.depCount), s.push(u);
                  } else
                    e.errors.push(
                      "only state() and transition() definitions can sit inside of a trigger()"
                    );
                }),
                {
                  type: 7,
                  name: t.name,
                  states: i,
                  transitions: s,
                  queryCount: r,
                  depCount: o,
                  options: null,
                }
              );
            }),
            (t.prototype.visitState = function (t, e) {
              var n = this.visitStyle(t.styles, e),
                r = (t.options && t.options.params) || null;
              if (n.containsDynamicStyles) {
                var o = new Set(),
                  i = r || {};
                if (
                  (n.styles.forEach(function (t) {
                    if (Om(t)) {
                      var e = t;
                      Object.keys(e).forEach(function (t) {
                        cm(e[t]).forEach(function (t) {
                          i.hasOwnProperty(t) || o.add(t);
                        });
                      });
                    }
                  }),
                  o.size)
                ) {
                  var s = hm(o.values());
                  e.errors.push(
                    'state("' +
                      t.name +
                      '", ...) must define default values for all the following style substitutions: ' +
                      s.join(", ")
                  );
                }
              }
              return {
                type: 0,
                name: t.name,
                style: n,
                options: r ? { params: r } : null,
              };
            }),
            (t.prototype.visitTransition = function (t, e) {
              (e.queryCount = 0), (e.depCount = 0);
              var n,
                r,
                o,
                i = ym(this, lm(t.animation), e);
              return {
                type: 1,
                matchers:
                  ((n = t.expr),
                  (r = e.errors),
                  (o = []),
                  "string" == typeof n
                    ? n.split(/\s*,\s*/).forEach(function (t) {
                        return (function (t, e, n) {
                          if (":" == t[0]) {
                            var r = (function (t, e) {
                              switch (t) {
                                case ":enter":
                                  return "void => *";
                                case ":leave":
                                  return "* => void";
                                case ":increment":
                                  return function (t, e) {
                                    return parseFloat(e) > parseFloat(t);
                                  };
                                case ":decrement":
                                  return function (t, e) {
                                    return parseFloat(e) < parseFloat(t);
                                  };
                                default:
                                  return (
                                    e.push(
                                      'The transition alias value "' +
                                        t +
                                        '" is not supported'
                                    ),
                                    "* => *"
                                  );
                              }
                            })(t, n);
                            if ("function" == typeof r) return void e.push(r);
                            t = r;
                          }
                          var o = t.match(
                            /^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/
                          );
                          if (null == o || o.length < 4)
                            return (
                              n.push(
                                'The provided transition expression "' +
                                  t +
                                  '" is not supported'
                              ),
                              e
                            );
                          var i = o[1],
                            s = o[2],
                            a = o[3];
                          e.push(Cm(i, a)),
                            "<" != s[0] ||
                              (i == bm && a == bm) ||
                              e.push(Cm(a, i));
                        })(t, o, r);
                      })
                    : o.push(n),
                  o),
                animation: i,
                queryCount: e.queryCount,
                depCount: e.depCount,
                options: Tm(t.options),
              };
            }),
            (t.prototype.visitSequence = function (t, e) {
              var n = this;
              return {
                type: 2,
                steps: t.steps.map(function (t) {
                  return ym(n, t, e);
                }),
                options: Tm(t.options),
              };
            }),
            (t.prototype.visitGroup = function (t, e) {
              var n = this,
                r = e.currentTime,
                o = 0,
                i = t.steps.map(function (t) {
                  e.currentTime = r;
                  var i = ym(n, t, e);
                  return (o = Math.max(o, e.currentTime)), i;
                });
              return (
                (e.currentTime = o),
                { type: 3, steps: i, options: Tm(t.options) }
              );
            }),
            (t.prototype.visitAnimate = function (t, e) {
              var n,
                r = (function (t, e) {
                  var n = null;
                  if (t.hasOwnProperty("duration")) n = t;
                  else if ("number" == typeof t)
                    return km(em(t, e).duration, 0, "");
                  var r = t;
                  if (
                    r.split(/\s+/).some(function (t) {
                      return "{" == t.charAt(0) && "{" == t.charAt(1);
                    })
                  ) {
                    var o = km(0, 0, "");
                    return (o.dynamic = !0), (o.strValue = r), o;
                  }
                  return km((n = n || em(r, e)).duration, n.delay, n.easing);
                })(t.timings, e.errors);
              e.currentAnimateTimings = r;
              var o = t.styles ? t.styles : Ey({});
              if (5 == o.type) n = this.visitKeyframes(o, e);
              else {
                var i = t.styles,
                  s = !1;
                if (!i) {
                  s = !0;
                  var a = {};
                  r.easing && (a.easing = r.easing), (i = Ey(a));
                }
                e.currentTime += r.duration + r.delay;
                var l = this.visitStyle(i, e);
                (l.isEmptyStep = s), (n = l);
              }
              return (
                (e.currentAnimateTimings = null),
                { type: 4, timings: r, style: n, options: null }
              );
            }),
            (t.prototype.visitStyle = function (t, e) {
              var n = this._makeStyleAst(t, e);
              return this._validateStyleAst(n, e), n;
            }),
            (t.prototype._makeStyleAst = function (t, e) {
              var n = [];
              Array.isArray(t.styles)
                ? t.styles.forEach(function (t) {
                    "string" == typeof t
                      ? t == Cy
                        ? n.push(t)
                        : e.errors.push(
                            "The provided style string value " +
                              t +
                              " is not allowed."
                          )
                      : n.push(t);
                  })
                : n.push(t.styles);
              var r = !1,
                o = null;
              return (
                n.forEach(function (t) {
                  if (Om(t)) {
                    var e = t,
                      n = e.easing;
                    if ((n && ((o = n), delete e.easing), !r))
                      for (var i in e)
                        if (e[i].toString().indexOf("{{") >= 0) {
                          r = !0;
                          break;
                        }
                  }
                }),
                {
                  type: 6,
                  styles: n,
                  easing: o,
                  offset: t.offset,
                  containsDynamicStyles: r,
                  options: null,
                }
              );
            }),
            (t.prototype._validateStyleAst = function (t, e) {
              var n = this,
                r = e.currentAnimateTimings,
                o = e.currentTime,
                i = e.currentTime;
              r && i > 0 && (i -= r.duration + r.delay),
                t.styles.forEach(function (t) {
                  "string" != typeof t &&
                    Object.keys(t).forEach(function (r) {
                      if (n._driver.validateStyleProperty(r)) {
                        var s,
                          a,
                          l,
                          u = e.collectedStyles[e.currentQuerySelector],
                          c = u[r],
                          p = !0;
                        c &&
                          (i != o &&
                            i >= c.startTime &&
                            o <= c.endTime &&
                            (e.errors.push(
                              'The CSS property "' +
                                r +
                                '" that exists between the times of "' +
                                c.startTime +
                                'ms" and "' +
                                c.endTime +
                                'ms" is also being animated in a parallel animation between the times of "' +
                                i +
                                'ms" and "' +
                                o +
                                'ms"'
                            ),
                            (p = !1)),
                          (i = c.startTime)),
                          p && (u[r] = { startTime: i, endTime: o }),
                          e.options &&
                            ((s = e.errors),
                            (a = e.options.params || {}),
                            (l = cm(t[r])).length &&
                              l.forEach(function (t) {
                                a.hasOwnProperty(t) ||
                                  s.push(
                                    "Unable to resolve the local animation param " +
                                      t +
                                      " in the given list of values"
                                  );
                              }));
                      } else
                        e.errors.push(
                          'The provided animation property "' +
                            r +
                            '" is not a supported CSS property for animations'
                        );
                    });
                });
            }),
            (t.prototype.visitKeyframes = function (t, e) {
              var n = this,
                r = { type: 5, styles: [], options: null };
              if (!e.currentAnimateTimings)
                return (
                  e.errors.push(
                    "keyframes() must be placed inside of a call to animate()"
                  ),
                  r
                );
              var o = 0,
                i = [],
                s = !1,
                a = !1,
                l = 0,
                u = t.steps.map(function (t) {
                  var r = n._makeStyleAst(t, e),
                    u =
                      null != r.offset
                        ? r.offset
                        : (function (t) {
                            if ("string" == typeof t) return null;
                            var e = null;
                            if (Array.isArray(t))
                              t.forEach(function (t) {
                                if (Om(t) && t.hasOwnProperty("offset")) {
                                  var n = t;
                                  (e = parseFloat(n.offset)), delete n.offset;
                                }
                              });
                            else if (Om(t) && t.hasOwnProperty("offset")) {
                              var n = t;
                              (e = parseFloat(n.offset)), delete n.offset;
                            }
                            return e;
                          })(r.styles),
                    c = 0;
                  return (
                    null != u && (o++, (c = r.offset = u)),
                    (a = a || c < 0 || c > 1),
                    (s = s || c < l),
                    (l = c),
                    i.push(c),
                    r
                  );
                });
              a &&
                e.errors.push(
                  "Please ensure that all keyframe offsets are between 0 and 1"
                ),
                s &&
                  e.errors.push(
                    "Please ensure that all keyframe offsets are in order"
                  );
              var c = t.steps.length,
                p = 0;
              o > 0 && o < c
                ? e.errors.push(
                    "Not all style() steps within the declared keyframes() contain offsets"
                  )
                : 0 == o && (p = 1 / (c - 1));
              var h = c - 1,
                f = e.currentTime,
                d = e.currentAnimateTimings,
                g = d.duration;
              return (
                u.forEach(function (t, o) {
                  var s = p > 0 ? (o == h ? 1 : p * o) : i[o],
                    a = s * g;
                  (e.currentTime = f + d.delay + a),
                    (d.duration = a),
                    n._validateStyleAst(t, e),
                    (t.offset = s),
                    r.styles.push(t);
                }),
                r
              );
            }),
            (t.prototype.visitReference = function (t, e) {
              return {
                type: 8,
                animation: ym(this, lm(t.animation), e),
                options: Tm(t.options),
              };
            }),
            (t.prototype.visitAnimateChild = function (t, e) {
              return e.depCount++, { type: 9, options: Tm(t.options) };
            }),
            (t.prototype.visitAnimateRef = function (t, e) {
              return {
                type: 10,
                animation: this.visitReference(t.animation, e),
                options: Tm(t.options),
              };
            }),
            (t.prototype.visitQuery = function (t, e) {
              var n = e.currentQuerySelector,
                r = t.options || {};
              e.queryCount++, (e.currentQuery = t);
              var o = u(
                  (function (t) {
                    var e = !!t.split(/\s*,\s*/).find(function (t) {
                      return ":self" == t;
                    });
                    return (
                      e && (t = t.replace(Sm, "")),
                      [
                        (t = t
                          .replace(/@\*/g, ".ng-trigger")
                          .replace(/@\w+/g, function (t) {
                            return ".ng-trigger-" + t.substr(1);
                          })
                          .replace(/:animating/g, ".ng-animating")),
                        e,
                      ]
                    );
                  })(t.selector),
                  2
                ),
                i = o[0],
                s = o[1];
              (e.currentQuerySelector = n.length ? n + " " + i : i),
                Dy(e.collectedStyles, e.currentQuerySelector, {});
              var a = ym(this, lm(t.animation), e);
              return (
                (e.currentQuery = null),
                (e.currentQuerySelector = n),
                {
                  type: 11,
                  selector: i,
                  limit: r.limit || 0,
                  optional: !!r.optional,
                  includeSelf: s,
                  animation: a,
                  originalSelector: t.selector,
                  options: Tm(t.options),
                }
              );
            }),
            (t.prototype.visitStagger = function (t, e) {
              e.currentQuery ||
                e.errors.push("stagger() can only be used inside of query()");
              var n =
                "full" === t.timings
                  ? { duration: 0, delay: 0, easing: "full" }
                  : em(t.timings, e.errors, !0);
              return {
                type: 12,
                animation: ym(this, lm(t.animation), e),
                timings: n,
                options: null,
              };
            }),
            t
          );
        })(),
        Pm = (function () {
          return function (t) {
            (this.errors = t),
              (this.queryCount = 0),
              (this.depCount = 0),
              (this.currentTransition = null),
              (this.currentQuery = null),
              (this.currentQuerySelector = null),
              (this.currentAnimateTimings = null),
              (this.currentTime = 0),
              (this.collectedStyles = {}),
              (this.options = null);
          };
        })();
      function Om(t) {
        return !Array.isArray(t) && "object" == typeof t;
      }
      function Tm(t) {
        var e;
        return (
          t
            ? (t = nm(t)).params && (t.params = (e = t.params) ? nm(e) : null)
            : (t = {}),
          t
        );
      }
      function km(t, e, n) {
        return { duration: t, delay: e, easing: n };
      }
      function Mm(t, e, n, r, o, i, s, a) {
        return (
          void 0 === s && (s = null),
          void 0 === a && (a = !1),
          {
            type: 1,
            element: t,
            keyframes: e,
            preStyleProps: n,
            postStyleProps: r,
            duration: o,
            delay: i,
            totalTime: o + i,
            easing: s,
            subTimeline: a,
          }
        );
      }
      var Rm = (function () {
          function t() {
            this._map = new Map();
          }
          return (
            (t.prototype.consume = function (t) {
              var e = this._map.get(t);
              return e ? this._map.delete(t) : (e = []), e;
            }),
            (t.prototype.append = function (t, e) {
              var n = this._map.get(t);
              n || this._map.set(t, (n = [])), n.push.apply(n, c(e));
            }),
            (t.prototype.has = function (t) {
              return this._map.has(t);
            }),
            (t.prototype.clear = function () {
              this._map.clear();
            }),
            t
          );
        })(),
        Im = new RegExp(":enter", "g"),
        Am = new RegExp(":leave", "g");
      function Nm(t, e, n, r, o, i, s, a, l, u) {
        return (
          void 0 === i && (i = {}),
          void 0 === s && (s = {}),
          void 0 === u && (u = []),
          new Dm().buildKeyframes(t, e, n, r, o, i, s, a, l, u)
        );
      }
      var Dm = (function () {
          function t() {}
          return (
            (t.prototype.buildKeyframes = function (
              t,
              e,
              n,
              r,
              o,
              i,
              s,
              a,
              l,
              u
            ) {
              void 0 === u && (u = []), (l = l || new Rm());
              var c = new Lm(t, e, l, r, o, u, []);
              (c.options = a),
                c.currentTimeline.setStyles([i], null, c.errors, a),
                ym(this, n, c);
              var p = c.timelines.filter(function (t) {
                return t.containsAnimation();
              });
              if (p.length && Object.keys(s).length) {
                var h = p[p.length - 1];
                h.allowOnlyTimelineStyles() ||
                  h.setStyles([s], null, c.errors, a);
              }
              return p.length
                ? p.map(function (t) {
                    return t.buildKeyframes();
                  })
                : [Mm(e, [], [], [], 0, 0, "", !1)];
            }),
            (t.prototype.visitTrigger = function (t, e) {}),
            (t.prototype.visitState = function (t, e) {}),
            (t.prototype.visitTransition = function (t, e) {}),
            (t.prototype.visitAnimateChild = function (t, e) {
              var n = e.subInstructions.consume(e.element);
              if (n) {
                var r = e.createSubContext(t.options),
                  o = e.currentTimeline.currentTime,
                  i = this._visitSubInstructions(n, r, r.options);
                o != i && e.transformIntoNewTimeline(i);
              }
              e.previousNode = t;
            }),
            (t.prototype.visitAnimateRef = function (t, e) {
              var n = e.createSubContext(t.options);
              n.transformIntoNewTimeline(),
                this.visitReference(t.animation, n),
                e.transformIntoNewTimeline(n.currentTimeline.currentTime),
                (e.previousNode = t);
            }),
            (t.prototype._visitSubInstructions = function (t, e, n) {
              var r = e.currentTimeline.currentTime,
                o = null != n.duration ? Jy(n.duration) : null,
                i = null != n.delay ? Jy(n.delay) : null;
              return (
                0 !== o &&
                  t.forEach(function (t) {
                    var n = e.appendInstructionToTimeline(t, o, i);
                    r = Math.max(r, n.duration + n.delay);
                  }),
                r
              );
            }),
            (t.prototype.visitReference = function (t, e) {
              e.updateOptions(t.options, !0),
                ym(this, t.animation, e),
                (e.previousNode = t);
            }),
            (t.prototype.visitSequence = function (t, e) {
              var n = this,
                r = e.subContextCount,
                o = e,
                i = t.options;
              if (
                i &&
                (i.params || i.delay) &&
                ((o = e.createSubContext(i)).transformIntoNewTimeline(),
                null != i.delay)
              ) {
                6 == o.previousNode.type &&
                  (o.currentTimeline.snapshotCurrentStyles(),
                  (o.previousNode = jm));
                var s = Jy(i.delay);
                o.delayNextStep(s);
              }
              t.steps.length &&
                (t.steps.forEach(function (t) {
                  return ym(n, t, o);
                }),
                o.currentTimeline.applyStylesToKeyframe(),
                o.subContextCount > r && o.transformIntoNewTimeline()),
                (e.previousNode = t);
            }),
            (t.prototype.visitGroup = function (t, e) {
              var n = this,
                r = [],
                o = e.currentTimeline.currentTime,
                i = t.options && t.options.delay ? Jy(t.options.delay) : 0;
              t.steps.forEach(function (s) {
                var a = e.createSubContext(t.options);
                i && a.delayNextStep(i),
                  ym(n, s, a),
                  (o = Math.max(o, a.currentTimeline.currentTime)),
                  r.push(a.currentTimeline);
              }),
                r.forEach(function (t) {
                  return e.currentTimeline.mergeTimelineCollectedStyles(t);
                }),
                e.transformIntoNewTimeline(o),
                (e.previousNode = t);
            }),
            (t.prototype._visitTiming = function (t, e) {
              if (t.dynamic) {
                var n = t.strValue;
                return em(e.params ? pm(n, e.params, e.errors) : n, e.errors);
              }
              return { duration: t.duration, delay: t.delay, easing: t.easing };
            }),
            (t.prototype.visitAnimate = function (t, e) {
              var n = (e.currentAnimateTimings = this._visitTiming(
                  t.timings,
                  e
                )),
                r = e.currentTimeline;
              n.delay && (e.incrementTime(n.delay), r.snapshotCurrentStyles());
              var o = t.style;
              5 == o.type
                ? this.visitKeyframes(o, e)
                : (e.incrementTime(n.duration),
                  this.visitStyle(o, e),
                  r.applyStylesToKeyframe()),
                (e.currentAnimateTimings = null),
                (e.previousNode = t);
            }),
            (t.prototype.visitStyle = function (t, e) {
              var n = e.currentTimeline,
                r = e.currentAnimateTimings;
              !r && n.getCurrentStyleProperties().length && n.forwardFrame();
              var o = (r && r.easing) || t.easing;
              t.isEmptyStep
                ? n.applyEmptyStep(o)
                : n.setStyles(t.styles, o, e.errors, e.options),
                (e.previousNode = t);
            }),
            (t.prototype.visitKeyframes = function (t, e) {
              var n = e.currentAnimateTimings,
                r = e.currentTimeline.duration,
                o = n.duration,
                i = e.createSubContext().currentTimeline;
              (i.easing = n.easing),
                t.styles.forEach(function (t) {
                  i.forwardTime((t.offset || 0) * o),
                    i.setStyles(t.styles, t.easing, e.errors, e.options),
                    i.applyStylesToKeyframe();
                }),
                e.currentTimeline.mergeTimelineCollectedStyles(i),
                e.transformIntoNewTimeline(r + o),
                (e.previousNode = t);
            }),
            (t.prototype.visitQuery = function (t, e) {
              var n = this,
                r = e.currentTimeline.currentTime,
                o = t.options || {},
                i = o.delay ? Jy(o.delay) : 0;
              i &&
                (6 === e.previousNode.type ||
                  (0 == r &&
                    e.currentTimeline.getCurrentStyleProperties().length)) &&
                (e.currentTimeline.snapshotCurrentStyles(),
                (e.previousNode = jm));
              var s = r,
                a = e.invokeQuery(
                  t.selector,
                  t.originalSelector,
                  t.limit,
                  t.includeSelf,
                  !!o.optional,
                  e.errors
                );
              e.currentQueryTotal = a.length;
              var l = null;
              a.forEach(function (r, o) {
                e.currentQueryIndex = o;
                var a = e.createSubContext(t.options, r);
                i && a.delayNextStep(i),
                  r === e.element && (l = a.currentTimeline),
                  ym(n, t.animation, a),
                  a.currentTimeline.applyStylesToKeyframe(),
                  (s = Math.max(s, a.currentTimeline.currentTime));
              }),
                (e.currentQueryIndex = 0),
                (e.currentQueryTotal = 0),
                e.transformIntoNewTimeline(s),
                l &&
                  (e.currentTimeline.mergeTimelineCollectedStyles(l),
                  e.currentTimeline.snapshotCurrentStyles()),
                (e.previousNode = t);
            }),
            (t.prototype.visitStagger = function (t, e) {
              var n = e.parentContext,
                r = e.currentTimeline,
                o = t.timings,
                i = Math.abs(o.duration),
                s = i * (e.currentQueryTotal - 1),
                a = i * e.currentQueryIndex;
              switch (o.duration < 0 ? "reverse" : o.easing) {
                case "reverse":
                  a = s - a;
                  break;
                case "full":
                  a = n.currentStaggerTime;
              }
              var l = e.currentTimeline;
              a && l.delayNextStep(a);
              var u = l.currentTime;
              ym(this, t.animation, e),
                (e.previousNode = t),
                (n.currentStaggerTime =
                  r.currentTime -
                  u +
                  (r.startTime - n.currentTimeline.startTime));
            }),
            t
          );
        })(),
        jm = {},
        Lm = (function () {
          function t(t, e, n, r, o, i, s, a) {
            (this._driver = t),
              (this.element = e),
              (this.subInstructions = n),
              (this._enterClassName = r),
              (this._leaveClassName = o),
              (this.errors = i),
              (this.timelines = s),
              (this.parentContext = null),
              (this.currentAnimateTimings = null),
              (this.previousNode = jm),
              (this.subContextCount = 0),
              (this.options = {}),
              (this.currentQueryIndex = 0),
              (this.currentQueryTotal = 0),
              (this.currentStaggerTime = 0),
              (this.currentTimeline = a || new Fm(this._driver, e, 0)),
              s.push(this.currentTimeline);
          }
          return (
            Object.defineProperty(t.prototype, "params", {
              get: function () {
                return this.options.params;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.updateOptions = function (t, e) {
              var n = this;
              if (t) {
                var r = t,
                  o = this.options;
                null != r.duration && (o.duration = Jy(r.duration)),
                  null != r.delay && (o.delay = Jy(r.delay));
                var i = r.params;
                if (i) {
                  var s = o.params;
                  s || (s = this.options.params = {}),
                    Object.keys(i).forEach(function (t) {
                      (e && s.hasOwnProperty(t)) ||
                        (s[t] = pm(i[t], s, n.errors));
                    });
                }
              }
            }),
            (t.prototype._copyOptions = function () {
              var t = {};
              if (this.options) {
                var e = this.options.params;
                if (e) {
                  var n = (t.params = {});
                  Object.keys(e).forEach(function (t) {
                    n[t] = e[t];
                  });
                }
              }
              return t;
            }),
            (t.prototype.createSubContext = function (e, n, r) {
              void 0 === e && (e = null);
              var o = n || this.element,
                i = new t(
                  this._driver,
                  o,
                  this.subInstructions,
                  this._enterClassName,
                  this._leaveClassName,
                  this.errors,
                  this.timelines,
                  this.currentTimeline.fork(o, r || 0)
                );
              return (
                (i.previousNode = this.previousNode),
                (i.currentAnimateTimings = this.currentAnimateTimings),
                (i.options = this._copyOptions()),
                i.updateOptions(e),
                (i.currentQueryIndex = this.currentQueryIndex),
                (i.currentQueryTotal = this.currentQueryTotal),
                (i.parentContext = this),
                this.subContextCount++,
                i
              );
            }),
            (t.prototype.transformIntoNewTimeline = function (t) {
              return (
                (this.previousNode = jm),
                (this.currentTimeline = this.currentTimeline.fork(
                  this.element,
                  t
                )),
                this.timelines.push(this.currentTimeline),
                this.currentTimeline
              );
            }),
            (t.prototype.appendInstructionToTimeline = function (t, e, n) {
              var r = {
                  duration: null != e ? e : t.duration,
                  delay:
                    this.currentTimeline.currentTime +
                    (null != n ? n : 0) +
                    t.delay,
                  easing: "",
                },
                o = new Hm(
                  this._driver,
                  t.element,
                  t.keyframes,
                  t.preStyleProps,
                  t.postStyleProps,
                  r,
                  t.stretchStartingKeyframe
                );
              return this.timelines.push(o), r;
            }),
            (t.prototype.incrementTime = function (t) {
              this.currentTimeline.forwardTime(
                this.currentTimeline.duration + t
              );
            }),
            (t.prototype.delayNextStep = function (t) {
              t > 0 && this.currentTimeline.delayNextStep(t);
            }),
            (t.prototype.invokeQuery = function (t, e, n, r, o, i) {
              var s = [];
              if ((r && s.push(this.element), t.length > 0)) {
                t = (t = t.replace(Im, "." + this._enterClassName)).replace(
                  Am,
                  "." + this._leaveClassName
                );
                var a = this._driver.query(this.element, t, 1 != n);
                0 !== n &&
                  (a = n < 0 ? a.slice(a.length + n, a.length) : a.slice(0, n)),
                  s.push.apply(s, c(a));
              }
              return (
                o ||
                  0 != s.length ||
                  i.push(
                    '`query("' +
                      e +
                      '")` returned zero elements. (Use `query("' +
                      e +
                      '", { optional: true })` if you wish to allow this.)'
                  ),
                s
              );
            }),
            t
          );
        })(),
        Fm = (function () {
          function t(t, e, n, r) {
            (this._driver = t),
              (this.element = e),
              (this.startTime = n),
              (this._elementTimelineStylesLookup = r),
              (this.duration = 0),
              (this._previousKeyframe = {}),
              (this._currentKeyframe = {}),
              (this._keyframes = new Map()),
              (this._styleSummary = {}),
              (this._pendingStyles = {}),
              (this._backFill = {}),
              (this._currentEmptyStepKeyframe = null),
              this._elementTimelineStylesLookup ||
                (this._elementTimelineStylesLookup = new Map()),
              (this._localTimelineStyles = Object.create(this._backFill, {})),
              (this._globalTimelineStyles =
                this._elementTimelineStylesLookup.get(e)),
              this._globalTimelineStyles ||
                ((this._globalTimelineStyles = this._localTimelineStyles),
                this._elementTimelineStylesLookup.set(
                  e,
                  this._localTimelineStyles
                )),
              this._loadKeyframe();
          }
          return (
            (t.prototype.containsAnimation = function () {
              switch (this._keyframes.size) {
                case 0:
                  return !1;
                case 1:
                  return this.getCurrentStyleProperties().length > 0;
                default:
                  return !0;
              }
            }),
            (t.prototype.getCurrentStyleProperties = function () {
              return Object.keys(this._currentKeyframe);
            }),
            Object.defineProperty(t.prototype, "currentTime", {
              get: function () {
                return this.startTime + this.duration;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.delayNextStep = function (t) {
              var e =
                1 == this._keyframes.size &&
                Object.keys(this._pendingStyles).length;
              this.duration || e
                ? (this.forwardTime(this.currentTime + t),
                  e && this.snapshotCurrentStyles())
                : (this.startTime += t);
            }),
            (t.prototype.fork = function (e, n) {
              return (
                this.applyStylesToKeyframe(),
                new t(
                  this._driver,
                  e,
                  n || this.currentTime,
                  this._elementTimelineStylesLookup
                )
              );
            }),
            (t.prototype._loadKeyframe = function () {
              this._currentKeyframe &&
                (this._previousKeyframe = this._currentKeyframe),
                (this._currentKeyframe = this._keyframes.get(this.duration)),
                this._currentKeyframe ||
                  ((this._currentKeyframe = Object.create(this._backFill, {})),
                  this._keyframes.set(this.duration, this._currentKeyframe));
            }),
            (t.prototype.forwardFrame = function () {
              (this.duration += 1), this._loadKeyframe();
            }),
            (t.prototype.forwardTime = function (t) {
              this.applyStylesToKeyframe(),
                (this.duration = t),
                this._loadKeyframe();
            }),
            (t.prototype._updateStyle = function (t, e) {
              (this._localTimelineStyles[t] = e),
                (this._globalTimelineStyles[t] = e),
                (this._styleSummary[t] = { time: this.currentTime, value: e });
            }),
            (t.prototype.allowOnlyTimelineStyles = function () {
              return this._currentEmptyStepKeyframe !== this._currentKeyframe;
            }),
            (t.prototype.applyEmptyStep = function (t) {
              var e = this;
              t && (this._previousKeyframe.easing = t),
                Object.keys(this._globalTimelineStyles).forEach(function (t) {
                  (e._backFill[t] = e._globalTimelineStyles[t] || Cy),
                    (e._currentKeyframe[t] = Cy);
                }),
                (this._currentEmptyStepKeyframe = this._currentKeyframe);
            }),
            (t.prototype.setStyles = function (t, e, n, r) {
              var o = this;
              e && (this._previousKeyframe.easing = e);
              var i = (r && r.params) || {},
                s = (function (t, e) {
                  var n,
                    r = {};
                  return (
                    t.forEach(function (t) {
                      "*" === t
                        ? (n = n || Object.keys(e)).forEach(function (t) {
                            r[t] = Cy;
                          })
                        : rm(t, !1, r);
                    }),
                    r
                  );
                })(t, this._globalTimelineStyles);
              Object.keys(s).forEach(function (t) {
                var e = pm(s[t], i, n);
                (o._pendingStyles[t] = e),
                  o._localTimelineStyles.hasOwnProperty(t) ||
                    (o._backFill[t] = o._globalTimelineStyles.hasOwnProperty(t)
                      ? o._globalTimelineStyles[t]
                      : Cy),
                  o._updateStyle(t, e);
              });
            }),
            (t.prototype.applyStylesToKeyframe = function () {
              var t = this,
                e = this._pendingStyles,
                n = Object.keys(e);
              0 != n.length &&
                ((this._pendingStyles = {}),
                n.forEach(function (n) {
                  t._currentKeyframe[n] = e[n];
                }),
                Object.keys(this._localTimelineStyles).forEach(function (e) {
                  t._currentKeyframe.hasOwnProperty(e) ||
                    (t._currentKeyframe[e] = t._localTimelineStyles[e]);
                }));
            }),
            (t.prototype.snapshotCurrentStyles = function () {
              var t = this;
              Object.keys(this._localTimelineStyles).forEach(function (e) {
                var n = t._localTimelineStyles[e];
                (t._pendingStyles[e] = n), t._updateStyle(e, n);
              });
            }),
            (t.prototype.getFinalKeyframe = function () {
              return this._keyframes.get(this.duration);
            }),
            Object.defineProperty(t.prototype, "properties", {
              get: function () {
                var t = [];
                for (var e in this._currentKeyframe) t.push(e);
                return t;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.mergeTimelineCollectedStyles = function (t) {
              var e = this;
              Object.keys(t._styleSummary).forEach(function (n) {
                var r = e._styleSummary[n],
                  o = t._styleSummary[n];
                (!r || o.time > r.time) && e._updateStyle(n, o.value);
              });
            }),
            (t.prototype.buildKeyframes = function () {
              var t = this;
              this.applyStylesToKeyframe();
              var e = new Set(),
                n = new Set(),
                r = 1 === this._keyframes.size && 0 === this.duration,
                o = [];
              this._keyframes.forEach(function (i, s) {
                var a = rm(i, !0);
                Object.keys(a).forEach(function (t) {
                  var r = a[t];
                  r == Ty ? e.add(t) : r == Cy && n.add(t);
                }),
                  r || (a.offset = s / t.duration),
                  o.push(a);
              });
              var i = e.size ? hm(e.values()) : [],
                s = n.size ? hm(n.values()) : [];
              if (r) {
                var a = o[0],
                  l = nm(a);
                (a.offset = 0), (l.offset = 1), (o = [a, l]);
              }
              return Mm(
                this.element,
                o,
                i,
                s,
                this.duration,
                this.startTime,
                this.easing,
                !1
              );
            }),
            t
          );
        })(),
        Hm = (function (t) {
          function e(e, n, r, o, i, s, a) {
            void 0 === a && (a = !1);
            var l = t.call(this, e, n, s.delay) || this;
            return (
              (l.element = n),
              (l.keyframes = r),
              (l.preStyleProps = o),
              (l.postStyleProps = i),
              (l._stretchStartingKeyframe = a),
              (l.timings = {
                duration: s.duration,
                delay: s.delay,
                easing: s.easing,
              }),
              l
            );
          }
          return (
            o(e, t),
            (e.prototype.containsAnimation = function () {
              return this.keyframes.length > 1;
            }),
            (e.prototype.buildKeyframes = function () {
              var t = this.keyframes,
                e = this.timings,
                n = e.delay,
                r = e.duration,
                o = e.easing;
              if (this._stretchStartingKeyframe && n) {
                var i = [],
                  s = r + n,
                  a = n / s,
                  l = rm(t[0], !1);
                (l.offset = 0), i.push(l);
                var u = rm(t[0], !1);
                (u.offset = Vm(a)), i.push(u);
                for (var c = t.length - 1, p = 1; p <= c; p++) {
                  var h = rm(t[p], !1);
                  (h.offset = Vm((n + h.offset * r) / s)), i.push(h);
                }
                (r = s), (n = 0), (o = ""), (t = i);
              }
              return Mm(
                this.element,
                t,
                this.preStyleProps,
                this.postStyleProps,
                r,
                n,
                o,
                !0
              );
            }),
            e
          );
        })(Fm);
      function Vm(t, e) {
        void 0 === e && (e = 3);
        var n = Math.pow(10, e - 1);
        return Math.round(t * n) / n;
      }
      var Um = (function () {
          return function () {};
        })(),
        Bm = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            o(e, t),
            (e.prototype.normalizePropertyName = function (t, e) {
              return dm(t);
            }),
            (e.prototype.normalizeStyleValue = function (t, e, n, r) {
              var o = "",
                i = n.toString().trim();
              if (zm[e] && 0 !== n && "0" !== n)
                if ("number" == typeof n) o = "px";
                else {
                  var s = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
                  s &&
                    0 == s[1].length &&
                    r.push(
                      "Please provide a CSS unit value for " + t + ":" + n
                    );
                }
              return i + o;
            }),
            e
          );
        })(Um),
        zm = qm(
          "width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(
            ","
          )
        );
      function qm(t) {
        var e = {};
        return (
          t.forEach(function (t) {
            return (e[t] = !0);
          }),
          e
        );
      }
      function Wm(t, e, n, r, o, i, s, a, l, u, c, p, h) {
        return {
          type: 0,
          element: t,
          triggerName: e,
          isRemovalTransition: o,
          fromState: n,
          fromStyles: i,
          toState: r,
          toStyles: s,
          timelines: a,
          queriedElements: l,
          preStyleProps: u,
          postStyleProps: c,
          totalTime: p,
          errors: h,
        };
      }
      var Ym = {},
        Xm = (function () {
          function t(t, e, n) {
            (this._triggerName = t), (this.ast = e), (this._stateStyles = n);
          }
          return (
            (t.prototype.match = function (t, e, n, r) {
              return (function (t, e, n, r, o) {
                return t.some(function (t) {
                  return t(e, n, r, o);
                });
              })(this.ast.matchers, t, e, n, r);
            }),
            (t.prototype.buildStyles = function (t, e, n) {
              var r = this._stateStyles["*"],
                o = this._stateStyles[t],
                i = r ? r.buildStyles(e, n) : {};
              return o ? o.buildStyles(e, n) : i;
            }),
            (t.prototype.build = function (t, e, n, r, o, s, a, l, u, c) {
              var p = [],
                h = (this.ast.options && this.ast.options.params) || Ym,
                f = this.buildStyles(n, (a && a.params) || Ym, p),
                d = (l && l.params) || Ym,
                g = this.buildStyles(r, d, p),
                v = new Set(),
                y = new Map(),
                m = new Map(),
                b = "void" === r,
                _ = { params: i({}, h, d) },
                w = c ? [] : Nm(t, e, this.ast.animation, o, s, f, g, _, u, p),
                C = 0;
              if (
                (w.forEach(function (t) {
                  C = Math.max(t.duration + t.delay, C);
                }),
                p.length)
              )
                return Wm(
                  e,
                  this._triggerName,
                  n,
                  r,
                  b,
                  f,
                  g,
                  [],
                  [],
                  y,
                  m,
                  C,
                  p
                );
              w.forEach(function (t) {
                var n = t.element,
                  r = Dy(y, n, {});
                t.preStyleProps.forEach(function (t) {
                  return (r[t] = !0);
                });
                var o = Dy(m, n, {});
                t.postStyleProps.forEach(function (t) {
                  return (o[t] = !0);
                }),
                  n !== e && v.add(n);
              });
              var S = hm(v.values());
              return Wm(e, this._triggerName, n, r, b, f, g, w, S, y, m, C);
            }),
            t
          );
        })(),
        Qm = (function () {
          function t(t, e) {
            (this.styles = t), (this.defaultParams = e);
          }
          return (
            (t.prototype.buildStyles = function (t, e) {
              var n = {},
                r = nm(this.defaultParams);
              return (
                Object.keys(t).forEach(function (e) {
                  var n = t[e];
                  null != n && (r[e] = n);
                }),
                this.styles.styles.forEach(function (t) {
                  if ("string" != typeof t) {
                    var o = t;
                    Object.keys(o).forEach(function (t) {
                      var i = o[t];
                      i.length > 1 && (i = pm(i, r, e)), (n[t] = i);
                    });
                  }
                }),
                n
              );
            }),
            t
          );
        })(),
        Km = (function () {
          function t(t, e) {
            var n = this;
            (this.name = t),
              (this.ast = e),
              (this.transitionFactories = []),
              (this.states = {}),
              e.states.forEach(function (t) {
                n.states[t.name] = new Qm(
                  t.style,
                  (t.options && t.options.params) || {}
                );
              }),
              Zm(this.states, "true", "1"),
              Zm(this.states, "false", "0"),
              e.transitions.forEach(function (e) {
                n.transitionFactories.push(new Xm(t, e, n.states));
              }),
              (this.fallbackTransition = new Xm(
                t,
                {
                  type: 1,
                  animation: { type: 2, steps: [], options: null },
                  matchers: [
                    function (t, e) {
                      return !0;
                    },
                  ],
                  options: null,
                  queryCount: 0,
                  depCount: 0,
                },
                this.states
              ));
          }
          return (
            Object.defineProperty(t.prototype, "containsQueries", {
              get: function () {
                return this.ast.queryCount > 0;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.matchTransition = function (t, e, n, r) {
              return (
                this.transitionFactories.find(function (o) {
                  return o.match(t, e, n, r);
                }) || null
              );
            }),
            (t.prototype.matchStyles = function (t, e, n) {
              return this.fallbackTransition.buildStyles(t, e, n);
            }),
            t
          );
        })();
      function Zm(t, e, n) {
        t.hasOwnProperty(e)
          ? t.hasOwnProperty(n) || (t[n] = t[e])
          : t.hasOwnProperty(n) && (t[e] = t[n]);
      }
      var Gm = new Rm(),
        $m = (function () {
          function t(t, e, n) {
            (this.bodyNode = t),
              (this._driver = e),
              (this._normalizer = n),
              (this._animations = {}),
              (this._playersById = {}),
              (this.players = []);
          }
          return (
            (t.prototype.register = function (t, e) {
              var n = [],
                r = Em(this._driver, e, n);
              if (n.length)
                throw new Error(
                  "Unable to build the animation due to the following errors: " +
                    n.join("\n")
                );
              this._animations[t] = r;
            }),
            (t.prototype._buildPlayer = function (t, e, n) {
              var r = t.element,
                o = Ry(0, this._normalizer, 0, t.keyframes, e, n);
              return this._driver.animate(
                r,
                o,
                t.duration,
                t.delay,
                t.easing,
                [],
                !0
              );
            }),
            (t.prototype.create = function (t, e, n) {
              var r = this;
              void 0 === n && (n = {});
              var o,
                i = [],
                s = this._animations[t],
                a = new Map();
              if (
                (s
                  ? (o = Nm(
                      this._driver,
                      e,
                      s,
                      "ng-enter",
                      "ng-leave",
                      {},
                      {},
                      n,
                      Gm,
                      i
                    )).forEach(function (t) {
                      var e = Dy(a, t.element, {});
                      t.postStyleProps.forEach(function (t) {
                        return (e[t] = null);
                      });
                    })
                  : (i.push(
                      "The requested animation doesn't exist or has already been destroyed"
                    ),
                    (o = [])),
                i.length)
              )
                throw new Error(
                  "Unable to create the animation due to the following errors: " +
                    i.join("\n")
                );
              a.forEach(function (t, e) {
                Object.keys(t).forEach(function (n) {
                  t[n] = r._driver.computeStyle(e, n, Cy);
                });
              });
              var l = My(
                o.map(function (t) {
                  var e = a.get(t.element);
                  return r._buildPlayer(t, {}, e);
                })
              );
              return (
                (this._playersById[t] = l),
                l.onDestroy(function () {
                  return r.destroy(t);
                }),
                this.players.push(l),
                l
              );
            }),
            (t.prototype.destroy = function (t) {
              var e = this._getPlayer(t);
              e.destroy(), delete this._playersById[t];
              var n = this.players.indexOf(e);
              n >= 0 && this.players.splice(n, 1);
            }),
            (t.prototype._getPlayer = function (t) {
              var e = this._playersById[t];
              if (!e)
                throw new Error(
                  "Unable to find the timeline player referenced by " + t
                );
              return e;
            }),
            (t.prototype.listen = function (t, e, n, r) {
              var o = Ny(e, "", "", "");
              return Iy(this._getPlayer(t), n, o, r), function () {};
            }),
            (t.prototype.command = function (t, e, n, r) {
              if ("register" != n)
                if ("create" != n) {
                  var o = this._getPlayer(t);
                  switch (n) {
                    case "play":
                      o.play();
                      break;
                    case "pause":
                      o.pause();
                      break;
                    case "reset":
                      o.reset();
                      break;
                    case "restart":
                      o.restart();
                      break;
                    case "finish":
                      o.finish();
                      break;
                    case "init":
                      o.init();
                      break;
                    case "setPosition":
                      o.setPosition(parseFloat(r[0]));
                      break;
                    case "destroy":
                      this.destroy(t);
                  }
                } else this.create(t, e, r[0] || {});
              else this.register(t, r[0]);
            }),
            t
          );
        })(),
        Jm = [],
        tb = {
          namespaceId: "",
          setForRemoval: !1,
          setForMove: !1,
          hasAnimation: !1,
          removedBeforeQueried: !1,
        },
        eb = {
          namespaceId: "",
          setForMove: !1,
          setForRemoval: !1,
          hasAnimation: !1,
          removedBeforeQueried: !0,
        },
        nb = "__ng_removed",
        rb = (function () {
          function t(t, e) {
            void 0 === e && (e = ""), (this.namespaceId = e);
            var n = t && t.hasOwnProperty("value");
            if (
              ((this.value = (function (t) {
                return null != t ? t : null;
              })(n ? t.value : t)),
              n)
            ) {
              var r = nm(t);
              delete r.value, (this.options = r);
            } else this.options = {};
            this.options.params || (this.options.params = {});
          }
          return (
            Object.defineProperty(t.prototype, "params", {
              get: function () {
                return this.options.params;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.absorbOptions = function (t) {
              var e = t.params;
              if (e) {
                var n = this.options.params;
                Object.keys(e).forEach(function (t) {
                  null == n[t] && (n[t] = e[t]);
                });
              }
            }),
            t
          );
        })(),
        ob = new rb("void"),
        ib = (function () {
          function t(t, e, n) {
            (this.id = t),
              (this.hostElement = e),
              (this._engine = n),
              (this.players = []),
              (this._triggers = {}),
              (this._queue = []),
              (this._elementListeners = new Map()),
              (this._hostClassName = "ng-tns-" + t),
              fb(e, this._hostClassName);
          }
          return (
            (t.prototype.listen = function (t, e, n, r) {
              var o,
                i = this;
              if (!this._triggers.hasOwnProperty(e))
                throw new Error(
                  'Unable to listen on the animation trigger event "' +
                    n +
                    '" because the animation trigger "' +
                    e +
                    "\" doesn't exist!"
                );
              if (null == n || 0 == n.length)
                throw new Error(
                  'Unable to listen on the animation trigger "' +
                    e +
                    '" because the provided event is undefined!'
                );
              if ("start" != (o = n) && "done" != o)
                throw new Error(
                  'The provided animation trigger event "' +
                    n +
                    '" for the animation trigger "' +
                    e +
                    '" is not supported!'
                );
              var s = Dy(this._elementListeners, t, []),
                a = { name: e, phase: n, callback: r };
              s.push(a);
              var l = Dy(this._engine.statesByElement, t, {});
              return (
                l.hasOwnProperty(e) ||
                  (fb(t, "ng-trigger"), fb(t, "ng-trigger-" + e), (l[e] = ob)),
                function () {
                  i._engine.afterFlush(function () {
                    var t = s.indexOf(a);
                    t >= 0 && s.splice(t, 1), i._triggers[e] || delete l[e];
                  });
                }
              );
            }),
            (t.prototype.register = function (t, e) {
              return !this._triggers[t] && ((this._triggers[t] = e), !0);
            }),
            (t.prototype._getTrigger = function (t) {
              var e = this._triggers[t];
              if (!e)
                throw new Error(
                  'The provided animation trigger "' +
                    t +
                    '" has not been registered!'
                );
              return e;
            }),
            (t.prototype.trigger = function (t, e, n, r) {
              var o = this;
              void 0 === r && (r = !0);
              var i = this._getTrigger(e),
                s = new ab(this.id, e, t),
                a = this._engine.statesByElement.get(t);
              a ||
                (fb(t, "ng-trigger"),
                fb(t, "ng-trigger-" + e),
                this._engine.statesByElement.set(t, (a = {})));
              var l = a[e],
                u = new rb(n, this.id);
              if (
                (!(n && n.hasOwnProperty("value")) &&
                  l &&
                  u.absorbOptions(l.options),
                (a[e] = u),
                l || (l = ob),
                "void" === u.value || l.value !== u.value)
              ) {
                var c = Dy(this._engine.playersByElement, t, []);
                c.forEach(function (t) {
                  t.namespaceId == o.id &&
                    t.triggerName == e &&
                    t.queued &&
                    t.destroy();
                });
                var p = i.matchTransition(l.value, u.value, t, u.params),
                  h = !1;
                if (!p) {
                  if (!r) return;
                  (p = i.fallbackTransition), (h = !0);
                }
                return (
                  this._engine.totalQueuedPlayers++,
                  this._queue.push({
                    element: t,
                    triggerName: e,
                    transition: p,
                    fromState: l,
                    toState: u,
                    player: s,
                    isFallbackTransition: h,
                  }),
                  h ||
                    (fb(t, "ng-animate-queued"),
                    s.onStart(function () {
                      db(t, "ng-animate-queued");
                    })),
                  s.onDone(function () {
                    var e = o.players.indexOf(s);
                    e >= 0 && o.players.splice(e, 1);
                    var n = o._engine.playersByElement.get(t);
                    if (n) {
                      var r = n.indexOf(s);
                      r >= 0 && n.splice(r, 1);
                    }
                  }),
                  this.players.push(s),
                  c.push(s),
                  s
                );
              }
              if (
                !(function (t, e) {
                  var n = Object.keys(t),
                    r = Object.keys(e);
                  if (n.length != r.length) return !1;
                  for (var o = 0; o < n.length; o++) {
                    var i = n[o];
                    if (!e.hasOwnProperty(i) || t[i] !== e[i]) return !1;
                  }
                  return !0;
                })(l.params, u.params)
              ) {
                var f = [],
                  d = i.matchStyles(l.value, l.params, f),
                  g = i.matchStyles(u.value, u.params, f);
                f.length
                  ? this._engine.reportError(f)
                  : this._engine.afterFlush(function () {
                      am(t, d), sm(t, g);
                    });
              }
            }),
            (t.prototype.deregister = function (t) {
              var e = this;
              delete this._triggers[t],
                this._engine.statesByElement.forEach(function (e, n) {
                  delete e[t];
                }),
                this._elementListeners.forEach(function (n, r) {
                  e._elementListeners.set(
                    r,
                    n.filter(function (e) {
                      return e.name != t;
                    })
                  );
                });
            }),
            (t.prototype.clearElementCache = function (t) {
              this._engine.statesByElement.delete(t),
                this._elementListeners.delete(t);
              var e = this._engine.playersByElement.get(t);
              e &&
                (e.forEach(function (t) {
                  return t.destroy();
                }),
                this._engine.playersByElement.delete(t));
            }),
            (t.prototype._signalRemovalForInnerTriggers = function (t, e, n) {
              var r = this;
              void 0 === n && (n = !1),
                this._engine.driver
                  .query(t, ".ng-trigger", !0)
                  .forEach(function (t) {
                    if (!t[nb]) {
                      var n = r._engine.fetchNamespacesByElement(t);
                      n.size
                        ? n.forEach(function (n) {
                            return n.triggerLeaveAnimation(t, e, !1, !0);
                          })
                        : r.clearElementCache(t);
                    }
                  });
            }),
            (t.prototype.triggerLeaveAnimation = function (t, e, n, r) {
              var o = this,
                i = this._engine.statesByElement.get(t);
              if (i) {
                var s = [];
                if (
                  (Object.keys(i).forEach(function (e) {
                    if (o._triggers[e]) {
                      var n = o.trigger(t, e, "void", r);
                      n && s.push(n);
                    }
                  }),
                  s.length)
                )
                  return (
                    this._engine.markElementAsRemoved(this.id, t, !0, e),
                    n &&
                      My(s).onDone(function () {
                        return o._engine.processLeaveNode(t);
                      }),
                    !0
                  );
              }
              return !1;
            }),
            (t.prototype.prepareLeaveAnimationListeners = function (t) {
              var e = this,
                n = this._elementListeners.get(t);
              if (n) {
                var r = new Set();
                n.forEach(function (n) {
                  var o = n.name;
                  if (!r.has(o)) {
                    r.add(o);
                    var i = e._triggers[o].fallbackTransition,
                      s = e._engine.statesByElement.get(t)[o] || ob,
                      a = new rb("void"),
                      l = new ab(e.id, o, t);
                    e._engine.totalQueuedPlayers++,
                      e._queue.push({
                        element: t,
                        triggerName: o,
                        transition: i,
                        fromState: s,
                        toState: a,
                        player: l,
                        isFallbackTransition: !0,
                      });
                  }
                });
              }
            }),
            (t.prototype.removeNode = function (t, e) {
              var n = this,
                r = this._engine;
              if (
                (t.childElementCount &&
                  this._signalRemovalForInnerTriggers(t, e, !0),
                !this.triggerLeaveAnimation(t, e, !0))
              ) {
                var o = !1;
                if (r.totalAnimations) {
                  var i = r.players.length
                    ? r.playersByQueriedElement.get(t)
                    : [];
                  if (i && i.length) o = !0;
                  else
                    for (var s = t; (s = s.parentNode); )
                      if (r.statesByElement.get(s)) {
                        o = !0;
                        break;
                      }
                }
                this.prepareLeaveAnimationListeners(t),
                  o
                    ? r.markElementAsRemoved(this.id, t, !1, e)
                    : (r.afterFlush(function () {
                        return n.clearElementCache(t);
                      }),
                      r.destroyInnerAnimations(t),
                      r._onRemovalComplete(t, e));
              }
            }),
            (t.prototype.insertNode = function (t, e) {
              fb(t, this._hostClassName);
            }),
            (t.prototype.drainQueuedTransitions = function (t) {
              var e = this,
                n = [];
              return (
                this._queue.forEach(function (r) {
                  var o = r.player;
                  if (!o.destroyed) {
                    var i = r.element,
                      s = e._elementListeners.get(i);
                    s &&
                      s.forEach(function (e) {
                        if (e.name == r.triggerName) {
                          var n = Ny(
                            i,
                            r.triggerName,
                            r.fromState.value,
                            r.toState.value
                          );
                          (n._data = t), Iy(r.player, e.phase, n, e.callback);
                        }
                      }),
                      o.markedForDestroy
                        ? e._engine.afterFlush(function () {
                            o.destroy();
                          })
                        : n.push(r);
                  }
                }),
                (this._queue = []),
                n.sort(function (t, n) {
                  var r = t.transition.ast.depCount,
                    o = n.transition.ast.depCount;
                  return 0 == r || 0 == o
                    ? r - o
                    : e._engine.driver.containsElement(t.element, n.element)
                    ? 1
                    : -1;
                })
              );
            }),
            (t.prototype.destroy = function (t) {
              this.players.forEach(function (t) {
                return t.destroy();
              }),
                this._signalRemovalForInnerTriggers(this.hostElement, t);
            }),
            (t.prototype.elementContainsData = function (t) {
              var e = !1;
              return (
                this._elementListeners.has(t) && (e = !0),
                !!this._queue.find(function (e) {
                  return e.element === t;
                }) || e
              );
            }),
            t
          );
        })(),
        sb = (function () {
          function t(t, e, n) {
            (this.bodyNode = t),
              (this.driver = e),
              (this._normalizer = n),
              (this.players = []),
              (this.newHostElements = new Map()),
              (this.playersByElement = new Map()),
              (this.playersByQueriedElement = new Map()),
              (this.statesByElement = new Map()),
              (this.disabledNodes = new Set()),
              (this.totalAnimations = 0),
              (this.totalQueuedPlayers = 0),
              (this._namespaceLookup = {}),
              (this._namespaceList = []),
              (this._flushFns = []),
              (this._whenQuietFns = []),
              (this.namespacesByHostElement = new Map()),
              (this.collectedEnterElements = []),
              (this.collectedLeaveElements = []),
              (this.onRemovalComplete = function (t, e) {});
          }
          return (
            (t.prototype._onRemovalComplete = function (t, e) {
              this.onRemovalComplete(t, e);
            }),
            Object.defineProperty(t.prototype, "queuedPlayers", {
              get: function () {
                var t = [];
                return (
                  this._namespaceList.forEach(function (e) {
                    e.players.forEach(function (e) {
                      e.queued && t.push(e);
                    });
                  }),
                  t
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.createNamespace = function (t, e) {
              var n = new ib(t, e, this);
              return (
                e.parentNode
                  ? this._balanceNamespaceList(n, e)
                  : (this.newHostElements.set(e, n),
                    this.collectEnterElement(e)),
                (this._namespaceLookup[t] = n)
              );
            }),
            (t.prototype._balanceNamespaceList = function (t, e) {
              var n = this._namespaceList.length - 1;
              if (n >= 0) {
                for (var r = !1, o = n; o >= 0; o--)
                  if (
                    this.driver.containsElement(
                      this._namespaceList[o].hostElement,
                      e
                    )
                  ) {
                    this._namespaceList.splice(o + 1, 0, t), (r = !0);
                    break;
                  }
                r || this._namespaceList.splice(0, 0, t);
              } else this._namespaceList.push(t);
              return this.namespacesByHostElement.set(e, t), t;
            }),
            (t.prototype.register = function (t, e) {
              var n = this._namespaceLookup[t];
              return n || (n = this.createNamespace(t, e)), n;
            }),
            (t.prototype.registerTrigger = function (t, e, n) {
              var r = this._namespaceLookup[t];
              r && r.register(e, n) && this.totalAnimations++;
            }),
            (t.prototype.destroy = function (t, e) {
              var n = this;
              if (t) {
                var r = this._fetchNamespace(t);
                this.afterFlush(function () {
                  n.namespacesByHostElement.delete(r.hostElement),
                    delete n._namespaceLookup[t];
                  var e = n._namespaceList.indexOf(r);
                  e >= 0 && n._namespaceList.splice(e, 1);
                }),
                  this.afterFlushAnimationsDone(function () {
                    return r.destroy(e);
                  });
              }
            }),
            (t.prototype._fetchNamespace = function (t) {
              return this._namespaceLookup[t];
            }),
            (t.prototype.fetchNamespacesByElement = function (t) {
              var e = new Set(),
                n = this.statesByElement.get(t);
              if (n)
                for (var r = Object.keys(n), o = 0; o < r.length; o++) {
                  var i = n[r[o]].namespaceId;
                  if (i) {
                    var s = this._fetchNamespace(i);
                    s && e.add(s);
                  }
                }
              return e;
            }),
            (t.prototype.trigger = function (t, e, n, r) {
              if (lb(e)) {
                var o = this._fetchNamespace(t);
                if (o) return o.trigger(e, n, r), !0;
              }
              return !1;
            }),
            (t.prototype.insertNode = function (t, e, n, r) {
              if (lb(e)) {
                var o = e[nb];
                if (o && o.setForRemoval) {
                  (o.setForRemoval = !1), (o.setForMove = !0);
                  var i = this.collectedLeaveElements.indexOf(e);
                  i >= 0 && this.collectedLeaveElements.splice(i, 1);
                }
                if (t) {
                  var s = this._fetchNamespace(t);
                  s && s.insertNode(e, n);
                }
                r && this.collectEnterElement(e);
              }
            }),
            (t.prototype.collectEnterElement = function (t) {
              this.collectedEnterElements.push(t);
            }),
            (t.prototype.markElementAsDisabled = function (t, e) {
              e
                ? this.disabledNodes.has(t) ||
                  (this.disabledNodes.add(t), fb(t, "ng-animate-disabled"))
                : this.disabledNodes.has(t) &&
                  (this.disabledNodes.delete(t), db(t, "ng-animate-disabled"));
            }),
            (t.prototype.removeNode = function (t, e, n) {
              if (lb(e)) {
                var r = t ? this._fetchNamespace(t) : null;
                r ? r.removeNode(e, n) : this.markElementAsRemoved(t, e, !1, n);
              } else this._onRemovalComplete(e, n);
            }),
            (t.prototype.markElementAsRemoved = function (t, e, n, r) {
              this.collectedLeaveElements.push(e),
                (e[nb] = {
                  namespaceId: t,
                  setForRemoval: r,
                  hasAnimation: n,
                  removedBeforeQueried: !1,
                });
            }),
            (t.prototype.listen = function (t, e, n, r, o) {
              return lb(e)
                ? this._fetchNamespace(t).listen(e, n, r, o)
                : function () {};
            }),
            (t.prototype._buildInstruction = function (t, e, n, r, o) {
              return t.transition.build(
                this.driver,
                t.element,
                t.fromState.value,
                t.toState.value,
                n,
                r,
                t.fromState.options,
                t.toState.options,
                e,
                o
              );
            }),
            (t.prototype.destroyInnerAnimations = function (t) {
              var e = this,
                n = this.driver.query(t, ".ng-trigger", !0);
              n.forEach(function (t) {
                return e.destroyActiveAnimationsForElement(t);
              }),
                0 != this.playersByQueriedElement.size &&
                  (n = this.driver.query(t, ".ng-animating", !0)).forEach(
                    function (t) {
                      return e.finishActiveQueriedAnimationOnElement(t);
                    }
                  );
            }),
            (t.prototype.destroyActiveAnimationsForElement = function (t) {
              var e = this.playersByElement.get(t);
              e &&
                e.forEach(function (t) {
                  t.queued ? (t.markedForDestroy = !0) : t.destroy();
                });
            }),
            (t.prototype.finishActiveQueriedAnimationOnElement = function (t) {
              var e = this.playersByQueriedElement.get(t);
              e &&
                e.forEach(function (t) {
                  return t.finish();
                });
            }),
            (t.prototype.whenRenderingDone = function () {
              var t = this;
              return new Promise(function (e) {
                if (t.players.length)
                  return My(t.players).onDone(function () {
                    return e();
                  });
                e();
              });
            }),
            (t.prototype.processLeaveNode = function (t) {
              var e = this,
                n = t[nb];
              if (n && n.setForRemoval) {
                if (((t[nb] = tb), n.namespaceId)) {
                  this.destroyInnerAnimations(t);
                  var r = this._fetchNamespace(n.namespaceId);
                  r && r.clearElementCache(t);
                }
                this._onRemovalComplete(t, n.setForRemoval);
              }
              this.driver.matchesElement(t, ".ng-animate-disabled") &&
                this.markElementAsDisabled(t, !1),
                this.driver
                  .query(t, ".ng-animate-disabled", !0)
                  .forEach(function (n) {
                    e.markElementAsDisabled(t, !1);
                  });
            }),
            (t.prototype.flush = function (t) {
              var e = this;
              void 0 === t && (t = -1);
              var n = [];
              if (
                (this.newHostElements.size &&
                  (this.newHostElements.forEach(function (t, n) {
                    return e._balanceNamespaceList(t, n);
                  }),
                  this.newHostElements.clear()),
                this.totalAnimations && this.collectedEnterElements.length)
              )
                for (var r = 0; r < this.collectedEnterElements.length; r++)
                  fb(this.collectedEnterElements[r], "ng-star-inserted");
              if (
                this._namespaceList.length &&
                (this.totalQueuedPlayers || this.collectedLeaveElements.length)
              ) {
                var o = [];
                try {
                  n = this._flushAnimations(o, t);
                } finally {
                  for (r = 0; r < o.length; r++) o[r]();
                }
              } else
                for (r = 0; r < this.collectedLeaveElements.length; r++)
                  this.processLeaveNode(this.collectedLeaveElements[r]);
              if (
                ((this.totalQueuedPlayers = 0),
                (this.collectedEnterElements.length = 0),
                (this.collectedLeaveElements.length = 0),
                this._flushFns.forEach(function (t) {
                  return t();
                }),
                (this._flushFns = []),
                this._whenQuietFns.length)
              ) {
                var i = this._whenQuietFns;
                (this._whenQuietFns = []),
                  n.length
                    ? My(n).onDone(function () {
                        i.forEach(function (t) {
                          return t();
                        });
                      })
                    : i.forEach(function (t) {
                        return t();
                      });
              }
            }),
            (t.prototype.reportError = function (t) {
              throw new Error(
                "Unable to process animations due to the following failed trigger transitions\n " +
                  t.join("\n")
              );
            }),
            (t.prototype._flushAnimations = function (t, e) {
              var n = this,
                r = new Rm(),
                o = [],
                s = new Map(),
                a = [],
                l = new Map(),
                u = new Map(),
                p = new Map(),
                h = new Set();
              this.disabledNodes.forEach(function (t) {
                h.add(t);
                for (
                  var e = n.driver.query(t, ".ng-animate-queued", !0), r = 0;
                  r < e.length;
                  r++
                )
                  h.add(e[r]);
              });
              var f = this.bodyNode,
                d = Array.from(this.statesByElement.keys()),
                g = pb(d, this.collectedEnterElements),
                v = new Map(),
                y = 0;
              g.forEach(function (t, e) {
                var n = "ng-enter" + y++;
                v.set(e, n),
                  t.forEach(function (t) {
                    return fb(t, n);
                  });
              });
              for (
                var m = [], b = new Set(), _ = new Set(), w = 0;
                w < this.collectedLeaveElements.length;
                w++
              )
                (F = (L = this.collectedLeaveElements[w])[nb]) &&
                  F.setForRemoval &&
                  (m.push(L),
                  b.add(L),
                  F.hasAnimation
                    ? this.driver
                        .query(L, ".ng-star-inserted", !0)
                        .forEach(function (t) {
                          return b.add(t);
                        })
                    : _.add(L));
              var C = new Map(),
                S = pb(d, Array.from(b));
              S.forEach(function (t, e) {
                var n = "ng-leave" + y++;
                C.set(e, n),
                  t.forEach(function (t) {
                    return fb(t, n);
                  });
              }),
                t.push(function () {
                  g.forEach(function (t, e) {
                    var n = v.get(e);
                    t.forEach(function (t) {
                      return db(t, n);
                    });
                  }),
                    S.forEach(function (t, e) {
                      var n = C.get(e);
                      t.forEach(function (t) {
                        return db(t, n);
                      });
                    }),
                    m.forEach(function (t) {
                      n.processLeaveNode(t);
                    });
                });
              for (
                var E = [], x = [], P = this._namespaceList.length - 1;
                P >= 0;
                P--
              )
                this._namespaceList[P].drainQueuedTransitions(e).forEach(
                  function (t) {
                    var e = t.player,
                      i = t.element;
                    if ((E.push(e), n.collectedEnterElements.length)) {
                      var s = i[nb];
                      if (s && s.setForMove) return void e.destroy();
                    }
                    var c = !f || !n.driver.containsElement(f, i),
                      h = C.get(i),
                      d = v.get(i),
                      g = n._buildInstruction(t, r, d, h, c);
                    if (g.errors && g.errors.length) x.push(g);
                    else {
                      if (c)
                        return (
                          e.onStart(function () {
                            return am(i, g.fromStyles);
                          }),
                          e.onDestroy(function () {
                            return sm(i, g.toStyles);
                          }),
                          void o.push(e)
                        );
                      if (t.isFallbackTransition)
                        return (
                          e.onStart(function () {
                            return am(i, g.fromStyles);
                          }),
                          e.onDestroy(function () {
                            return sm(i, g.toStyles);
                          }),
                          void o.push(e)
                        );
                      g.timelines.forEach(function (t) {
                        return (t.stretchStartingKeyframe = !0);
                      }),
                        r.append(i, g.timelines),
                        a.push({ instruction: g, player: e, element: i }),
                        g.queriedElements.forEach(function (t) {
                          return Dy(l, t, []).push(e);
                        }),
                        g.preStyleProps.forEach(function (t, e) {
                          var n = Object.keys(t);
                          if (n.length) {
                            var r = u.get(e);
                            r || u.set(e, (r = new Set())),
                              n.forEach(function (t) {
                                return r.add(t);
                              });
                          }
                        }),
                        g.postStyleProps.forEach(function (t, e) {
                          var n = Object.keys(t),
                            r = p.get(e);
                          r || p.set(e, (r = new Set())),
                            n.forEach(function (t) {
                              return r.add(t);
                            });
                        });
                    }
                  }
                );
              if (x.length) {
                var O = [];
                x.forEach(function (t) {
                  O.push("@" + t.triggerName + " has failed due to:\n"),
                    t.errors.forEach(function (t) {
                      return O.push("- " + t + "\n");
                    });
                }),
                  E.forEach(function (t) {
                    return t.destroy();
                  }),
                  this.reportError(O);
              }
              var T = new Map(),
                k = new Map();
              a.forEach(function (t) {
                var e = t.element;
                r.has(e) &&
                  (k.set(e, e),
                  n._beforeAnimationBuild(
                    t.player.namespaceId,
                    t.instruction,
                    T
                  ));
              }),
                o.forEach(function (t) {
                  var e = t.element;
                  n._getPreviousPlayers(
                    e,
                    !1,
                    t.namespaceId,
                    t.triggerName,
                    null
                  ).forEach(function (t) {
                    Dy(T, e, []).push(t), t.destroy();
                  });
                });
              var M = m.filter(function (t) {
                  return vb(t, u, p);
                }),
                R = new Map();
              cb(R, this.driver, _, p, Cy).forEach(function (t) {
                vb(t, u, p) && M.push(t);
              });
              var I = new Map();
              g.forEach(function (t, e) {
                cb(I, n.driver, new Set(t), u, Ty);
              }),
                M.forEach(function (t) {
                  var e = R.get(t),
                    n = I.get(t);
                  R.set(t, i({}, e, n));
                });
              var A = [],
                N = [],
                D = {};
              a.forEach(function (t) {
                var e = t.element,
                  i = t.player,
                  a = t.instruction;
                if (r.has(e)) {
                  if (h.has(e))
                    return (
                      i.onDestroy(function () {
                        return sm(e, a.toStyles);
                      }),
                      (i.disabled = !0),
                      i.overrideTotalTime(a.totalTime),
                      void o.push(i)
                    );
                  var l = D;
                  if (k.size > 1) {
                    for (var u = e, c = []; (u = u.parentNode); ) {
                      var p = k.get(u);
                      if (p) {
                        l = p;
                        break;
                      }
                      c.push(u);
                    }
                    c.forEach(function (t) {
                      return k.set(t, l);
                    });
                  }
                  var f = n._buildAnimation(i.namespaceId, a, T, s, I, R);
                  if ((i.setRealPlayer(f), l === D)) A.push(i);
                  else {
                    var d = n.playersByElement.get(l);
                    d && d.length && (i.parentPlayer = My(d)), o.push(i);
                  }
                } else
                  am(e, a.fromStyles),
                    i.onDestroy(function () {
                      return sm(e, a.toStyles);
                    }),
                    N.push(i),
                    h.has(e) && o.push(i);
              }),
                N.forEach(function (t) {
                  var e = s.get(t.element);
                  if (e && e.length) {
                    var n = My(e);
                    t.setRealPlayer(n);
                  }
                }),
                o.forEach(function (t) {
                  t.parentPlayer
                    ? t.syncPlayerEvents(t.parentPlayer)
                    : t.destroy();
                });
              for (var j = 0; j < m.length; j++) {
                var L,
                  F = (L = m[j])[nb];
                if ((db(L, "ng-leave"), !F || !F.hasAnimation)) {
                  var H = [];
                  if (l.size) {
                    var V = l.get(L);
                    V && V.length && H.push.apply(H, c(V));
                    for (
                      var U = this.driver.query(L, ".ng-animating", !0), B = 0;
                      B < U.length;
                      B++
                    ) {
                      var z = l.get(U[B]);
                      z && z.length && H.push.apply(H, c(z));
                    }
                  }
                  var q = H.filter(function (t) {
                    return !t.destroyed;
                  });
                  q.length ? gb(this, L, q) : this.processLeaveNode(L);
                }
              }
              return (
                (m.length = 0),
                A.forEach(function (t) {
                  n.players.push(t),
                    t.onDone(function () {
                      t.destroy();
                      var e = n.players.indexOf(t);
                      n.players.splice(e, 1);
                    }),
                    t.play();
                }),
                A
              );
            }),
            (t.prototype.elementContainsData = function (t, e) {
              var n = !1,
                r = e[nb];
              return (
                r && r.setForRemoval && (n = !0),
                this.playersByElement.has(e) && (n = !0),
                this.playersByQueriedElement.has(e) && (n = !0),
                this.statesByElement.has(e) && (n = !0),
                this._fetchNamespace(t).elementContainsData(e) || n
              );
            }),
            (t.prototype.afterFlush = function (t) {
              this._flushFns.push(t);
            }),
            (t.prototype.afterFlushAnimationsDone = function (t) {
              this._whenQuietFns.push(t);
            }),
            (t.prototype._getPreviousPlayers = function (t, e, n, r, o) {
              var i = [];
              if (e) {
                var s = this.playersByQueriedElement.get(t);
                s && (i = s);
              } else {
                var a = this.playersByElement.get(t);
                if (a) {
                  var l = !o || "void" == o;
                  a.forEach(function (t) {
                    t.queued || ((l || t.triggerName == r) && i.push(t));
                  });
                }
              }
              return (
                (n || r) &&
                  (i = i.filter(function (t) {
                    return !(
                      (n && n != t.namespaceId) ||
                      (r && r != t.triggerName)
                    );
                  })),
                i
              );
            }),
            (t.prototype._beforeAnimationBuild = function (t, e, n) {
              var r,
                o,
                i = e.element,
                s = e.isRemovalTransition ? void 0 : t,
                a = e.isRemovalTransition ? void 0 : e.triggerName,
                u = function (t) {
                  var r = t.element,
                    o = r !== i,
                    l = Dy(n, r, []);
                  c._getPreviousPlayers(r, o, s, a, e.toState).forEach(
                    function (t) {
                      var e = t.getRealPlayer();
                      e.beforeDestroy && e.beforeDestroy(),
                        t.destroy(),
                        l.push(t);
                    }
                  );
                },
                c = this;
              try {
                for (
                  var p = l(e.timelines), h = p.next();
                  !h.done;
                  h = p.next()
                )
                  u(h.value);
              } catch (f) {
                r = { error: f };
              } finally {
                try {
                  h && !h.done && (o = p.return) && o.call(p);
                } finally {
                  if (r) throw r.error;
                }
              }
              am(i, e.fromStyles);
            }),
            (t.prototype._buildAnimation = function (t, e, n, r, o, i) {
              var s = this,
                a = e.triggerName,
                l = e.element,
                u = [],
                c = new Set(),
                p = new Set(),
                h = e.timelines.map(function (e) {
                  var h = e.element;
                  c.add(h);
                  var f = h[nb];
                  if (f && f.removedBeforeQueried)
                    return new Py(e.duration, e.delay);
                  var d,
                    g,
                    v = h !== l,
                    y = ((d = (n.get(h) || Jm).map(function (t) {
                      return t.getRealPlayer();
                    })),
                    (g = []),
                    (function t(e, n) {
                      for (var r = 0; r < e.length; r++) {
                        var o = e[r];
                        o instanceof Oy ? t(o.players, n) : n.push(o);
                      }
                    })(d, g),
                    g).filter(function (t) {
                      return !!t.element && t.element === h;
                    }),
                    m = o.get(h),
                    b = i.get(h),
                    _ = Ry(0, s._normalizer, 0, e.keyframes, m, b),
                    w = s._buildPlayer(e, _, y);
                  if ((e.subTimeline && r && p.add(h), v)) {
                    var C = new ab(t, a, h);
                    C.setRealPlayer(w), u.push(C);
                  }
                  return w;
                });
              u.forEach(function (t) {
                Dy(s.playersByQueriedElement, t.element, []).push(t),
                  t.onDone(function () {
                    return (function (t, e, n) {
                      var r;
                      if (t instanceof Map) {
                        if ((r = t.get(e))) {
                          if (r.length) {
                            var o = r.indexOf(n);
                            r.splice(o, 1);
                          }
                          0 == r.length && t.delete(e);
                        }
                      } else (r = t[e]) && (r.length && ((o = r.indexOf(n)), r.splice(o, 1)), 0 == r.length && delete t[e]);
                      return r;
                    })(s.playersByQueriedElement, t.element, t);
                  });
              }),
                c.forEach(function (t) {
                  return fb(t, "ng-animating");
                });
              var f = My(h);
              return (
                f.onDestroy(function () {
                  c.forEach(function (t) {
                    return db(t, "ng-animating");
                  }),
                    sm(l, e.toStyles);
                }),
                p.forEach(function (t) {
                  Dy(r, t, []).push(f);
                }),
                f
              );
            }),
            (t.prototype._buildPlayer = function (t, e, n) {
              return e.length > 0
                ? this.driver.animate(
                    t.element,
                    e,
                    t.duration,
                    t.delay,
                    t.easing,
                    n
                  )
                : new Py(t.duration, t.delay);
            }),
            t
          );
        })(),
        ab = (function () {
          function t(t, e, n) {
            (this.namespaceId = t),
              (this.triggerName = e),
              (this.element = n),
              (this._player = new Py()),
              (this._containsRealPlayer = !1),
              (this._queuedCallbacks = {}),
              (this.destroyed = !1),
              (this.markedForDestroy = !1),
              (this.disabled = !1),
              (this.queued = !0),
              (this.totalTime = 0);
          }
          return (
            (t.prototype.setRealPlayer = function (t) {
              var e = this;
              this._containsRealPlayer ||
                ((this._player = t),
                Object.keys(this._queuedCallbacks).forEach(function (n) {
                  e._queuedCallbacks[n].forEach(function (e) {
                    return Iy(t, n, void 0, e);
                  });
                }),
                (this._queuedCallbacks = {}),
                (this._containsRealPlayer = !0),
                this.overrideTotalTime(t.totalTime),
                (this.queued = !1));
            }),
            (t.prototype.getRealPlayer = function () {
              return this._player;
            }),
            (t.prototype.overrideTotalTime = function (t) {
              this.totalTime = t;
            }),
            (t.prototype.syncPlayerEvents = function (t) {
              var e = this,
                n = this._player;
              n.triggerCallback &&
                t.onStart(function () {
                  return n.triggerCallback("start");
                }),
                t.onDone(function () {
                  return e.finish();
                }),
                t.onDestroy(function () {
                  return e.destroy();
                });
            }),
            (t.prototype._queueEvent = function (t, e) {
              Dy(this._queuedCallbacks, t, []).push(e);
            }),
            (t.prototype.onDone = function (t) {
              this.queued && this._queueEvent("done", t),
                this._player.onDone(t);
            }),
            (t.prototype.onStart = function (t) {
              this.queued && this._queueEvent("start", t),
                this._player.onStart(t);
            }),
            (t.prototype.onDestroy = function (t) {
              this.queued && this._queueEvent("destroy", t),
                this._player.onDestroy(t);
            }),
            (t.prototype.init = function () {
              this._player.init();
            }),
            (t.prototype.hasStarted = function () {
              return !this.queued && this._player.hasStarted();
            }),
            (t.prototype.play = function () {
              !this.queued && this._player.play();
            }),
            (t.prototype.pause = function () {
              !this.queued && this._player.pause();
            }),
            (t.prototype.restart = function () {
              !this.queued && this._player.restart();
            }),
            (t.prototype.finish = function () {
              this._player.finish();
            }),
            (t.prototype.destroy = function () {
              (this.destroyed = !0), this._player.destroy();
            }),
            (t.prototype.reset = function () {
              !this.queued && this._player.reset();
            }),
            (t.prototype.setPosition = function (t) {
              this.queued || this._player.setPosition(t);
            }),
            (t.prototype.getPosition = function () {
              return this.queued ? 0 : this._player.getPosition();
            }),
            (t.prototype.triggerCallback = function (t) {
              var e = this._player;
              e.triggerCallback && e.triggerCallback(t);
            }),
            t
          );
        })();
      function lb(t) {
        return t && 1 === t.nodeType;
      }
      function ub(t, e) {
        var n = t.style.display;
        return (t.style.display = null != e ? e : "none"), n;
      }
      function cb(t, e, n, r, o) {
        var i = [];
        n.forEach(function (t) {
          return i.push(ub(t));
        });
        var s = [];
        r.forEach(function (n, r) {
          var i = {};
          n.forEach(function (t) {
            var n = (i[t] = e.computeStyle(r, t, o));
            (n && 0 != n.length) || ((r[nb] = eb), s.push(r));
          }),
            t.set(r, i);
        });
        var a = 0;
        return (
          n.forEach(function (t) {
            return ub(t, i[a++]);
          }),
          s
        );
      }
      function pb(t, e) {
        var n = new Map();
        if (
          (t.forEach(function (t) {
            return n.set(t, []);
          }),
          0 == e.length)
        )
          return n;
        var r = new Set(e),
          o = new Map();
        return (
          e.forEach(function (t) {
            var e = (function t(e) {
              if (!e) return 1;
              var i = o.get(e);
              if (i) return i;
              var s = e.parentNode;
              return (i = n.has(s) ? s : r.has(s) ? 1 : t(s)), o.set(e, i), i;
            })(t);
            1 !== e && n.get(e).push(t);
          }),
          n
        );
      }
      var hb = "$$classes";
      function fb(t, e) {
        if (t.classList) t.classList.add(e);
        else {
          var n = t[hb];
          n || (n = t[hb] = {}), (n[e] = !0);
        }
      }
      function db(t, e) {
        if (t.classList) t.classList.remove(e);
        else {
          var n = t[hb];
          n && delete n[e];
        }
      }
      function gb(t, e, n) {
        My(n).onDone(function () {
          return t.processLeaveNode(e);
        });
      }
      function vb(t, e, n) {
        var r = n.get(t);
        if (!r) return !1;
        var o = e.get(t);
        return (
          o
            ? r.forEach(function (t) {
                return o.add(t);
              })
            : e.set(t, r),
          n.delete(t),
          !0
        );
      }
      var yb = (function () {
          function t(t, e, n) {
            var r = this;
            (this.bodyNode = t),
              (this._driver = e),
              (this._triggerCache = {}),
              (this.onRemovalComplete = function (t, e) {}),
              (this._transitionEngine = new sb(t, e, n)),
              (this._timelineEngine = new $m(t, e, n)),
              (this._transitionEngine.onRemovalComplete = function (t, e) {
                return r.onRemovalComplete(t, e);
              });
          }
          return (
            (t.prototype.registerTrigger = function (t, e, n, r, o) {
              var i = t + "-" + r,
                s = this._triggerCache[i];
              if (!s) {
                var a = [],
                  l = Em(this._driver, o, a);
                if (a.length)
                  throw new Error(
                    'The animation trigger "' +
                      r +
                      '" has failed to build due to the following errors:\n - ' +
                      a.join("\n - ")
                  );
                (s = (function (t, e) {
                  return new Km(t, e);
                })(r, l)),
                  (this._triggerCache[i] = s);
              }
              this._transitionEngine.registerTrigger(e, r, s);
            }),
            (t.prototype.register = function (t, e) {
              this._transitionEngine.register(t, e);
            }),
            (t.prototype.destroy = function (t, e) {
              this._transitionEngine.destroy(t, e);
            }),
            (t.prototype.onInsert = function (t, e, n, r) {
              this._transitionEngine.insertNode(t, e, n, r);
            }),
            (t.prototype.onRemove = function (t, e, n) {
              this._transitionEngine.removeNode(t, e, n);
            }),
            (t.prototype.disableAnimations = function (t, e) {
              this._transitionEngine.markElementAsDisabled(t, e);
            }),
            (t.prototype.process = function (t, e, n, r) {
              if ("@" == n.charAt(0)) {
                var o = u(jy(n), 2);
                this._timelineEngine.command(o[0], e, o[1], r);
              } else this._transitionEngine.trigger(t, e, n, r);
            }),
            (t.prototype.listen = function (t, e, n, r, o) {
              if ("@" == n.charAt(0)) {
                var i = u(jy(n), 2);
                return this._timelineEngine.listen(i[0], e, i[1], o);
              }
              return this._transitionEngine.listen(t, e, n, r, o);
            }),
            (t.prototype.flush = function (t) {
              void 0 === t && (t = -1), this._transitionEngine.flush(t);
            }),
            Object.defineProperty(t.prototype, "players", {
              get: function () {
                return this._transitionEngine.players.concat(
                  this._timelineEngine.players
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.whenRenderingDone = function () {
              return this._transitionEngine.whenRenderingDone();
            }),
            t
          );
        })(),
        mb = "animation",
        bb = "animationend",
        _b = (function () {
          function t(t, e, n, r, o, i, s) {
            var a = this;
            (this._element = t),
              (this._name = e),
              (this._duration = n),
              (this._delay = r),
              (this._easing = o),
              (this._fillMode = i),
              (this._onDoneFn = s),
              (this._finished = !1),
              (this._destroyed = !1),
              (this._startTime = 0),
              (this._position = 0),
              (this._eventFn = function (t) {
                return a._handleCallback(t);
              });
          }
          return (
            (t.prototype.apply = function () {
              var t, e, n;
              (e =
                this._duration +
                "ms " +
                this._easing +
                " " +
                this._delay +
                "ms 1 normal " +
                this._fillMode +
                " " +
                this._name),
                (n = Pb((t = this._element), "").trim()).length &&
                  ((function (t, e) {
                    for (var n = 0; n < t.length; n++) "," === t.charAt(n) && 0;
                  })(n),
                  (e = n + ", " + e)),
                xb(t, "", e),
                Eb(this._element, this._eventFn, !1),
                (this._startTime = Date.now());
            }),
            (t.prototype.pause = function () {
              wb(this._element, this._name, "paused");
            }),
            (t.prototype.resume = function () {
              wb(this._element, this._name, "running");
            }),
            (t.prototype.setPosition = function (t) {
              var e = Cb(this._element, this._name);
              (this._position = t * this._duration),
                xb(this._element, "Delay", "-" + this._position + "ms", e);
            }),
            (t.prototype.getPosition = function () {
              return this._position;
            }),
            (t.prototype._handleCallback = function (t) {
              var e = t._ngTestManualTimestamp || Date.now(),
                n = 1e3 * parseFloat(t.elapsedTime.toFixed(3));
              t.animationName == this._name &&
                Math.max(e - this._startTime, 0) >= this._delay &&
                n >= this._duration &&
                this.finish();
            }),
            (t.prototype.finish = function () {
              this._finished ||
                ((this._finished = !0),
                this._onDoneFn(),
                Eb(this._element, this._eventFn, !0));
            }),
            (t.prototype.destroy = function () {
              var t, e, n, r;
              this._destroyed ||
                ((this._destroyed = !0),
                this.finish(),
                (e = this._name),
                (r = Sb((n = Pb((t = this._element), "").split(",")), e)) >=
                  0 && (n.splice(r, 1), xb(t, "", n.join(","))));
            }),
            t
          );
        })();
      function wb(t, e, n) {
        xb(t, "PlayState", n, Cb(t, e));
      }
      function Cb(t, e) {
        var n = Pb(t, "");
        return n.indexOf(",") > 0 ? Sb(n.split(","), e) : Sb([n], e);
      }
      function Sb(t, e) {
        for (var n = 0; n < t.length; n++) if (t[n].indexOf(e) >= 0) return n;
        return -1;
      }
      function Eb(t, e, n) {
        n ? t.removeEventListener(bb, e) : t.addEventListener(bb, e);
      }
      function xb(t, e, n, r) {
        var o = mb + e;
        if (null != r) {
          var i = t.style[o];
          if (i.length) {
            var s = i.split(",");
            (s[r] = n), (n = s.join(","));
          }
        }
        t.style[o] = n;
      }
      function Pb(t, e) {
        return t.style[mb + e];
      }
      var Ob = "linear",
        Tb = (function () {
          function t(t, e, n, r, o, i, s) {
            (this.element = t),
              (this.keyframes = e),
              (this.animationName = n),
              (this._duration = r),
              (this._delay = o),
              (this._finalStyles = s),
              (this._onDoneFns = []),
              (this._onStartFns = []),
              (this._onDestroyFns = []),
              (this._started = !1),
              (this.currentSnapshot = {}),
              (this._state = 0),
              (this.easing = i || Ob),
              (this.totalTime = r + o),
              this._buildStyler();
          }
          return (
            (t.prototype.onStart = function (t) {
              this._onStartFns.push(t);
            }),
            (t.prototype.onDone = function (t) {
              this._onDoneFns.push(t);
            }),
            (t.prototype.onDestroy = function (t) {
              this._onDestroyFns.push(t);
            }),
            (t.prototype.destroy = function () {
              this.init(),
                this._state >= 4 ||
                  ((this._state = 4),
                  this._styler.destroy(),
                  this._flushStartFns(),
                  this._flushDoneFns(),
                  this._onDestroyFns.forEach(function (t) {
                    return t();
                  }),
                  (this._onDestroyFns = []));
            }),
            (t.prototype._flushDoneFns = function () {
              this._onDoneFns.forEach(function (t) {
                return t();
              }),
                (this._onDoneFns = []);
            }),
            (t.prototype._flushStartFns = function () {
              this._onStartFns.forEach(function (t) {
                return t();
              }),
                (this._onStartFns = []);
            }),
            (t.prototype.finish = function () {
              this.init(),
                this._state >= 3 ||
                  ((this._state = 3),
                  this._styler.finish(),
                  this._flushStartFns(),
                  this._flushDoneFns());
            }),
            (t.prototype.setPosition = function (t) {
              this._styler.setPosition(t);
            }),
            (t.prototype.getPosition = function () {
              return this._styler.getPosition();
            }),
            (t.prototype.hasStarted = function () {
              return this._state >= 2;
            }),
            (t.prototype.init = function () {
              this._state >= 1 ||
                ((this._state = 1),
                this._styler.apply(),
                this._delay && this._styler.pause());
            }),
            (t.prototype.play = function () {
              this.init(),
                this.hasStarted() || (this._flushStartFns(), (this._state = 2)),
                this._styler.resume();
            }),
            (t.prototype.pause = function () {
              this.init(), this._styler.pause();
            }),
            (t.prototype.restart = function () {
              this.reset(), this.play();
            }),
            (t.prototype.reset = function () {
              this._styler.destroy(), this._buildStyler(), this._styler.apply();
            }),
            (t.prototype._buildStyler = function () {
              var t = this;
              this._styler = new _b(
                this.element,
                this.animationName,
                this._duration,
                this._delay,
                this.easing,
                "forwards",
                function () {
                  return t.finish();
                }
              );
            }),
            (t.prototype.triggerCallback = function (t) {
              var e = "start" == t ? this._onStartFns : this._onDoneFns;
              e.forEach(function (t) {
                return t();
              }),
                (e.length = 0);
            }),
            (t.prototype.beforeDestroy = function () {
              var t = this;
              this.init();
              var e = {};
              if (this.hasStarted()) {
                var n = this._state >= 3;
                Object.keys(this._finalStyles).forEach(function (r) {
                  "offset" != r &&
                    (e[r] = n ? t._finalStyles[r] : mm(t.element, r));
                });
              }
              this.currentSnapshot = e;
            }),
            t
          );
        })(),
        kb = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (
              (r.element = e),
              (r._startingStyles = {}),
              (r.__initialized = !1),
              (r._styles = Ky(n)),
              r
            );
          }
          return (
            o(e, t),
            (e.prototype.init = function () {
              var e = this;
              !this.__initialized &&
                this._startingStyles &&
                ((this.__initialized = !0),
                Object.keys(this._styles).forEach(function (t) {
                  e._startingStyles[t] = e.element.style[t];
                }),
                t.prototype.init.call(this));
            }),
            (e.prototype.play = function () {
              var e = this;
              this._startingStyles &&
                (this.init(),
                Object.keys(this._styles).forEach(function (t) {
                  return e.element.style.setProperty(t, e._styles[t]);
                }),
                t.prototype.play.call(this));
            }),
            (e.prototype.destroy = function () {
              var e = this;
              this._startingStyles &&
                (Object.keys(this._startingStyles).forEach(function (t) {
                  var n = e._startingStyles[t];
                  n
                    ? e.element.style.setProperty(t, n)
                    : e.element.style.removeProperty(t);
                }),
                (this._startingStyles = null),
                t.prototype.destroy.call(this));
            }),
            e
          );
        })(Py),
        Mb = (function () {
          function t() {
            (this._count = 0),
              (this._head = document.querySelector("head")),
              (this._warningIssued = !1);
          }
          return (
            (t.prototype.validateStyleProperty = function (t) {
              return Wy(t);
            }),
            (t.prototype.matchesElement = function (t, e) {
              return Yy(t, e);
            }),
            (t.prototype.containsElement = function (t, e) {
              return Xy(t, e);
            }),
            (t.prototype.query = function (t, e, n) {
              return Qy(t, e, n);
            }),
            (t.prototype.computeStyle = function (t, e, n) {
              return window.getComputedStyle(t)[e];
            }),
            (t.prototype.buildKeyframeElement = function (t, e, n) {
              n = n.map(function (t) {
                return Ky(t);
              });
              var r = "@keyframes " + e + " {\n",
                o = "";
              n.forEach(function (t) {
                o = " ";
                var e = parseFloat(t.offset);
                (r += "" + o + 100 * e + "% {\n"),
                  (o += " "),
                  Object.keys(t).forEach(function (e) {
                    var n = t[e];
                    switch (e) {
                      case "offset":
                        return;
                      case "easing":
                        return void (
                          n &&
                          (r += o + "animation-timing-function: " + n + ";\n")
                        );
                      default:
                        return void (r += "" + o + e + ": " + n + ";\n");
                    }
                  }),
                  (r += o + "}\n");
              }),
                (r += "}\n");
              var i = document.createElement("style");
              return (i.innerHTML = r), i;
            }),
            (t.prototype.animate = function (t, e, n, r, o, i, s) {
              void 0 === i && (i = []), s && this._notifyFaultyScrubber();
              var a = i.filter(function (t) {
                  return t instanceof Tb;
                }),
                l = {};
              gm(n, r) &&
                a.forEach(function (t) {
                  var e = t.currentSnapshot;
                  Object.keys(e).forEach(function (t) {
                    return (l[t] = e[t]);
                  });
                });
              var u = (function (t) {
                var e = {};
                return (
                  t &&
                    (Array.isArray(t) ? t : [t]).forEach(function (t) {
                      Object.keys(t).forEach(function (n) {
                        "offset" != n && "easing" != n && (e[n] = t[n]);
                      });
                    }),
                  e
                );
              })((e = vm(t, e, l)));
              if (0 == n) return new kb(t, u);
              var c = "gen_css_kf_" + this._count++,
                p = this.buildKeyframeElement(t, c, e);
              document.querySelector("head").appendChild(p);
              var h = new Tb(t, e, c, n, r, o, u);
              return (
                h.onDestroy(function () {
                  var t;
                  (t = p).parentNode.removeChild(t);
                }),
                h
              );
            }),
            (t.prototype._notifyFaultyScrubber = function () {
              this._warningIssued ||
                (console.warn(
                  "@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n",
                  "  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill."
                ),
                (this._warningIssued = !0));
            }),
            t
          );
        })(),
        Rb = (function () {
          function t(t, e, n) {
            (this.element = t),
              (this.keyframes = e),
              (this.options = n),
              (this._onDoneFns = []),
              (this._onStartFns = []),
              (this._onDestroyFns = []),
              (this._initialized = !1),
              (this._finished = !1),
              (this._started = !1),
              (this._destroyed = !1),
              (this.time = 0),
              (this.parentPlayer = null),
              (this.currentSnapshot = {}),
              (this._duration = n.duration),
              (this._delay = n.delay || 0),
              (this.time = this._duration + this._delay);
          }
          return (
            (t.prototype._onFinish = function () {
              this._finished ||
                ((this._finished = !0),
                this._onDoneFns.forEach(function (t) {
                  return t();
                }),
                (this._onDoneFns = []));
            }),
            (t.prototype.init = function () {
              this._buildPlayer(), this._preparePlayerBeforeStart();
            }),
            (t.prototype._buildPlayer = function () {
              var t = this;
              if (!this._initialized) {
                this._initialized = !0;
                var e = this.keyframes;
                (this.domPlayer = this._triggerWebAnimation(
                  this.element,
                  e,
                  this.options
                )),
                  (this._finalKeyframe = e.length ? e[e.length - 1] : {}),
                  this.domPlayer.addEventListener("finish", function () {
                    return t._onFinish();
                  });
              }
            }),
            (t.prototype._preparePlayerBeforeStart = function () {
              this._delay
                ? this._resetDomPlayerState()
                : this.domPlayer.pause();
            }),
            (t.prototype._triggerWebAnimation = function (t, e, n) {
              return t.animate(e, n);
            }),
            (t.prototype.onStart = function (t) {
              this._onStartFns.push(t);
            }),
            (t.prototype.onDone = function (t) {
              this._onDoneFns.push(t);
            }),
            (t.prototype.onDestroy = function (t) {
              this._onDestroyFns.push(t);
            }),
            (t.prototype.play = function () {
              this._buildPlayer(),
                this.hasStarted() ||
                  (this._onStartFns.forEach(function (t) {
                    return t();
                  }),
                  (this._onStartFns = []),
                  (this._started = !0)),
                this.domPlayer.play();
            }),
            (t.prototype.pause = function () {
              this.init(), this.domPlayer.pause();
            }),
            (t.prototype.finish = function () {
              this.init(), this._onFinish(), this.domPlayer.finish();
            }),
            (t.prototype.reset = function () {
              this._resetDomPlayerState(),
                (this._destroyed = !1),
                (this._finished = !1),
                (this._started = !1);
            }),
            (t.prototype._resetDomPlayerState = function () {
              this.domPlayer && this.domPlayer.cancel();
            }),
            (t.prototype.restart = function () {
              this.reset(), this.play();
            }),
            (t.prototype.hasStarted = function () {
              return this._started;
            }),
            (t.prototype.destroy = function () {
              this._destroyed ||
                ((this._destroyed = !0),
                this._resetDomPlayerState(),
                this._onFinish(),
                this._onDestroyFns.forEach(function (t) {
                  return t();
                }),
                (this._onDestroyFns = []));
            }),
            (t.prototype.setPosition = function (t) {
              this.domPlayer.currentTime = t * this.time;
            }),
            (t.prototype.getPosition = function () {
              return this.domPlayer.currentTime / this.time;
            }),
            Object.defineProperty(t.prototype, "totalTime", {
              get: function () {
                return this._delay + this._duration;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.beforeDestroy = function () {
              var t = this,
                e = {};
              this.hasStarted() &&
                Object.keys(this._finalKeyframe).forEach(function (n) {
                  "offset" != n &&
                    (e[n] = t._finished
                      ? t._finalKeyframe[n]
                      : mm(t.element, n));
                }),
                (this.currentSnapshot = e);
            }),
            (t.prototype.triggerCallback = function (t) {
              var e = "start" == t ? this._onStartFns : this._onDoneFns;
              e.forEach(function (t) {
                return t();
              }),
                (e.length = 0);
            }),
            t
          );
        })(),
        Ib = (function () {
          function t() {
            (this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(
              Ab().toString()
            )),
              (this._cssKeyframesDriver = new Mb());
          }
          return (
            (t.prototype.validateStyleProperty = function (t) {
              return Wy(t);
            }),
            (t.prototype.matchesElement = function (t, e) {
              return Yy(t, e);
            }),
            (t.prototype.containsElement = function (t, e) {
              return Xy(t, e);
            }),
            (t.prototype.query = function (t, e, n) {
              return Qy(t, e, n);
            }),
            (t.prototype.computeStyle = function (t, e, n) {
              return window.getComputedStyle(t)[e];
            }),
            (t.prototype.overrideWebAnimationsSupport = function (t) {
              this._isNativeImpl = t;
            }),
            (t.prototype.animate = function (t, e, n, r, o, i, s) {
              if ((void 0 === i && (i = []), !s && !this._isNativeImpl))
                return this._cssKeyframesDriver.animate(t, e, n, r, o, i);
              var a = {
                duration: n,
                delay: r,
                fill: 0 == r ? "both" : "forwards",
              };
              o && (a.easing = o);
              var l = {},
                u = i.filter(function (t) {
                  return t instanceof Rb;
                });
              return (
                gm(n, r) &&
                  u.forEach(function (t) {
                    var e = t.currentSnapshot;
                    Object.keys(e).forEach(function (t) {
                      return (l[t] = e[t]);
                    });
                  }),
                (e = vm(
                  t,
                  (e = e.map(function (t) {
                    return rm(t, !1);
                  })),
                  l
                )),
                new Rb(t, e, a)
              );
            }),
            t
          );
        })();
      function Ab() {
        return (
          ("undefined" != typeof window &&
            void 0 !== window.document &&
            Element.prototype.animate) ||
          {}
        );
      }
      var Nb = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (
              (r._nextAnimationId = 0),
              (r._renderer = e.createRenderer(n.body, {
                id: "0",
                encapsulation: Rt.None,
                styles: [],
                data: { animation: [] },
              })),
              r
            );
          }
          return (
            o(e, t),
            (e.prototype.build = function (t) {
              var e = this._nextAnimationId.toString();
              this._nextAnimationId++;
              var n = Array.isArray(t) ? Sy(t) : t;
              return (
                Lb(this._renderer, null, e, "register", [n]),
                new Db(e, this._renderer)
              );
            }),
            e
          );
        })(_y),
        Db = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (r._id = e), (r._renderer = n), r;
          }
          return (
            o(e, t),
            (e.prototype.create = function (t, e) {
              return new jb(this._id, t, e || {}, this._renderer);
            }),
            e
          );
        })(wy),
        jb = (function () {
          function t(t, e, n, r) {
            (this.id = t),
              (this.element = e),
              (this._renderer = r),
              (this.parentPlayer = null),
              (this._started = !1),
              (this.totalTime = 0),
              this._command("create", n);
          }
          return (
            (t.prototype._listen = function (t, e) {
              return this._renderer.listen(
                this.element,
                "@@" + this.id + ":" + t,
                e
              );
            }),
            (t.prototype._command = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              return Lb(this._renderer, this.element, this.id, t, e);
            }),
            (t.prototype.onDone = function (t) {
              this._listen("done", t);
            }),
            (t.prototype.onStart = function (t) {
              this._listen("start", t);
            }),
            (t.prototype.onDestroy = function (t) {
              this._listen("destroy", t);
            }),
            (t.prototype.init = function () {
              this._command("init");
            }),
            (t.prototype.hasStarted = function () {
              return this._started;
            }),
            (t.prototype.play = function () {
              this._command("play"), (this._started = !0);
            }),
            (t.prototype.pause = function () {
              this._command("pause");
            }),
            (t.prototype.restart = function () {
              this._command("restart");
            }),
            (t.prototype.finish = function () {
              this._command("finish");
            }),
            (t.prototype.destroy = function () {
              this._command("destroy");
            }),
            (t.prototype.reset = function () {
              this._command("reset");
            }),
            (t.prototype.setPosition = function (t) {
              this._command("setPosition", t);
            }),
            (t.prototype.getPosition = function () {
              return 0;
            }),
            t
          );
        })();
      function Lb(t, e, n, r, o) {
        return t.setProperty(e, "@@" + n + ":" + r, o);
      }
      var Fb = (function () {
          function t(t, e, n) {
            (this.delegate = t),
              (this.engine = e),
              (this._zone = n),
              (this._currentId = 0),
              (this._microtaskId = 1),
              (this._animationCallbacksBuffer = []),
              (this._rendererCache = new Map()),
              (this._cdRecurDepth = 0),
              (this.promise = Promise.resolve(0)),
              (e.onRemovalComplete = function (t, e) {
                e && e.parentNode(t) && e.removeChild(t.parentNode, t);
              });
          }
          return (
            (t.prototype.createRenderer = function (t, e) {
              var n = this,
                r = this.delegate.createRenderer(t, e);
              if (!(t && e && e.data && e.data.animation)) {
                var o = this._rendererCache.get(r);
                return (
                  o ||
                    ((o = new Hb("", r, this.engine)),
                    this._rendererCache.set(r, o)),
                  o
                );
              }
              var i = e.id,
                s = e.id + "-" + this._currentId;
              return (
                this._currentId++,
                this.engine.register(s, t),
                e.data.animation.forEach(function (e) {
                  return n.engine.registerTrigger(i, s, t, e.name, e);
                }),
                new Vb(this, s, r, this.engine)
              );
            }),
            (t.prototype.begin = function () {
              this._cdRecurDepth++,
                this.delegate.begin && this.delegate.begin();
            }),
            (t.prototype._scheduleCountTask = function () {
              var t = this;
              this.promise.then(function () {
                t._microtaskId++;
              });
            }),
            (t.prototype.scheduleListenerCallback = function (t, e, n) {
              var r = this;
              t >= 0 && t < this._microtaskId
                ? this._zone.run(function () {
                    return e(n);
                  })
                : (0 == this._animationCallbacksBuffer.length &&
                    Promise.resolve(null).then(function () {
                      r._zone.run(function () {
                        r._animationCallbacksBuffer.forEach(function (t) {
                          var e = u(t, 2);
                          (0, e[0])(e[1]);
                        }),
                          (r._animationCallbacksBuffer = []);
                      });
                    }),
                  this._animationCallbacksBuffer.push([e, n]));
            }),
            (t.prototype.end = function () {
              var t = this;
              this._cdRecurDepth--,
                0 == this._cdRecurDepth &&
                  this._zone.runOutsideAngular(function () {
                    t._scheduleCountTask(), t.engine.flush(t._microtaskId);
                  }),
                this.delegate.end && this.delegate.end();
            }),
            (t.prototype.whenRenderingDone = function () {
              return this.engine.whenRenderingDone();
            }),
            t
          );
        })(),
        Hb = (function () {
          function t(t, e, n) {
            (this.namespaceId = t),
              (this.delegate = e),
              (this.engine = n),
              (this.destroyNode = this.delegate.destroyNode
                ? function (t) {
                    return e.destroyNode(t);
                  }
                : null);
          }
          return (
            Object.defineProperty(t.prototype, "data", {
              get: function () {
                return this.delegate.data;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.destroy = function () {
              this.engine.destroy(this.namespaceId, this.delegate),
                this.delegate.destroy();
            }),
            (t.prototype.createElement = function (t, e) {
              return this.delegate.createElement(t, e);
            }),
            (t.prototype.createComment = function (t) {
              return this.delegate.createComment(t);
            }),
            (t.prototype.createText = function (t) {
              return this.delegate.createText(t);
            }),
            (t.prototype.appendChild = function (t, e) {
              this.delegate.appendChild(t, e),
                this.engine.onInsert(this.namespaceId, e, t, !1);
            }),
            (t.prototype.insertBefore = function (t, e, n) {
              this.delegate.insertBefore(t, e, n),
                this.engine.onInsert(this.namespaceId, e, t, !0);
            }),
            (t.prototype.removeChild = function (t, e) {
              this.engine.onRemove(this.namespaceId, e, this.delegate);
            }),
            (t.prototype.selectRootElement = function (t, e) {
              return this.delegate.selectRootElement(t, e);
            }),
            (t.prototype.parentNode = function (t) {
              return this.delegate.parentNode(t);
            }),
            (t.prototype.nextSibling = function (t) {
              return this.delegate.nextSibling(t);
            }),
            (t.prototype.setAttribute = function (t, e, n, r) {
              this.delegate.setAttribute(t, e, n, r);
            }),
            (t.prototype.removeAttribute = function (t, e, n) {
              this.delegate.removeAttribute(t, e, n);
            }),
            (t.prototype.addClass = function (t, e) {
              this.delegate.addClass(t, e);
            }),
            (t.prototype.removeClass = function (t, e) {
              this.delegate.removeClass(t, e);
            }),
            (t.prototype.setStyle = function (t, e, n, r) {
              this.delegate.setStyle(t, e, n, r);
            }),
            (t.prototype.removeStyle = function (t, e, n) {
              this.delegate.removeStyle(t, e, n);
            }),
            (t.prototype.setProperty = function (t, e, n) {
              "@" == e.charAt(0) && "@.disabled" == e
                ? this.disableAnimations(t, !!n)
                : this.delegate.setProperty(t, e, n);
            }),
            (t.prototype.setValue = function (t, e) {
              this.delegate.setValue(t, e);
            }),
            (t.prototype.listen = function (t, e, n) {
              return this.delegate.listen(t, e, n);
            }),
            (t.prototype.disableAnimations = function (t, e) {
              this.engine.disableAnimations(t, e);
            }),
            t
          );
        })(),
        Vb = (function (t) {
          function e(e, n, r, o) {
            var i = t.call(this, n, r, o) || this;
            return (i.factory = e), (i.namespaceId = n), i;
          }
          return (
            o(e, t),
            (e.prototype.setProperty = function (t, e, n) {
              "@" == e.charAt(0)
                ? "." == e.charAt(1) && "@.disabled" == e
                  ? this.disableAnimations(t, (n = void 0 === n || !!n))
                  : this.engine.process(this.namespaceId, t, e.substr(1), n)
                : this.delegate.setProperty(t, e, n);
            }),
            (e.prototype.listen = function (t, e, n) {
              var r,
                o,
                i,
                s = this;
              if ("@" == e.charAt(0)) {
                var a = (function (t) {
                    switch (t) {
                      case "body":
                        return document.body;
                      case "document":
                        return document;
                      case "window":
                        return window;
                      default:
                        return t;
                    }
                  })(t),
                  l = e.substr(1),
                  c = "";
                return (
                  "@" != l.charAt(0) &&
                    ((l = (r = u(
                      ((o = l),
                      (i = o.indexOf(".")),
                      [o.substring(0, i), o.substr(i + 1)]),
                      2
                    ))[0]),
                    (c = r[1])),
                  this.engine.listen(this.namespaceId, a, l, c, function (t) {
                    s.factory.scheduleListenerCallback(t._data || -1, n, t);
                  })
                );
              }
              return this.delegate.listen(t, e, n);
            }),
            e
          );
        })(Hb),
        Ub = (function (t) {
          function e(e, n, r) {
            return t.call(this, e.body, n, r) || this;
          }
          return o(e, t), e;
        })(yb);
      function Bb() {
        return "function" == typeof Ab() ? new Ib() : new Mb();
      }
      function zb() {
        return new Bm();
      }
      function qb(t, e, n) {
        return new Fb(t, e, n);
      }
      var Wb = new Ot("AnimationModuleType"),
        Yb = (function () {
          return function () {};
        })(),
        Xb = (function () {
          return function () {};
        })(),
        Qb = Vu(zu, [Wu], function (t) {
          return (function (t) {
            for (var e = {}, n = [], r = !1, o = 0; o < t.length; o++) {
              var i = t[o];
              i.token === jr && !0 === i.value && (r = !0),
                1073741824 & i.flags && n.push(i.token),
                (i.index = o),
                (e[Us(i.token)] = i);
            }
            return {
              factory: null,
              providersByKey: e,
              providers: t,
              modules: n,
              isRoot: r,
            };
          })([
            Oa(512, Jr, to, [[8, [yg, Fg, by]], [3, Jr], tr]),
            Oa(5120, Ss, Ps, [[3, Ss]]),
            Oa(4608, $c, Jc, [Ss, [2, Gc]]),
            Oa(5120, li, ui, []),
            Oa(5120, ys, Es, []),
            Oa(5120, ms, xs, []),
            Oa(4608, hh, fh, [lp]),
            Oa(6144, Qo, null, [hh]),
            Oa(4608, ih, ah, []),
            Oa(
              5120,
              Ip,
              function (t, e, n, r, o, i, s, a) {
                return [new rh(t, e, n), new ph(r), new lh(o, i, s, a)];
              },
              [lp, xi, hi, lp, lp, ih, di, [2, sh]]
            ),
            Oa(4608, Ap, Ap, [Ip, xi]),
            Oa(135680, jp, jp, [lp]),
            Oa(4608, zp, zp, [Ap, jp]),
            Oa(5120, Gy, Bb, []),
            Oa(5120, Um, zb, []),
            Oa(4608, yb, Ub, [lp, Gy, Um]),
            Oa(5120, io, qb, [zp, yb, xi]),
            Oa(6144, Dp, null, [jp]),
            Oa(4608, Ai, Ai, [xi]),
            Oa(4608, _y, Nb, [io, Sp]),
            Oa(5120, If, lg, [Bd]),
            Oa(4608, Kd, Kd, []),
            Oa(6144, Xd, null, [Kd]),
            Oa(135680, Zd, Zd, [Bd, qi, mi, Vn, Xd]),
            Oa(4608, Qd, Qd, []),
            Oa(5120, Gd, rg, [Bd, hp, $d]),
            Oa(5120, hg, pg, [ug]),
            Oa(
              5120,
              fi,
              function (t) {
                return [t];
              },
              [hg]
            ),
            Oa(4608, Pg, Pg, []),
            Oa(4608, Eg, Eg, [Jr, xi, Vn, Pg, Bi]),
            Oa(4608, kg, kg, []),
            Oa(1073742336, ap, ap, []),
            Oa(1024, ri, wh, []),
            Oa(
              1024,
              Li,
              function () {
                return [eg()];
              },
              []
            ),
            Oa(512, ug, ug, [Vn]),
            Oa(
              1024,
              si,
              function (t, e) {
                return [
                  ((n = t),
                  kp("probe", Rp),
                  kp(
                    "coreTokens",
                    i(
                      {},
                      Mp,
                      (n || []).reduce(function (t, e) {
                        return (t[e.name] = e.token), t;
                      }, {})
                    )
                  ),
                  function () {
                    return Rp;
                  }),
                  cg(e),
                ];
                var n;
              },
              [[2, Li], ug]
            ),
            Oa(512, ai, ai, [[2, si]]),
            Oa(131584, Bi, Bi, [xi, di, Vn, ri, Jr, ai]),
            Oa(1073742336, Os, Os, [Bi]),
            Oa(1073742336, Ch, Ch, [[3, Ch]]),
            Oa(1073742336, Yb, Yb, []),
            Oa(1024, Jd, ig, [[3, Bd]]),
            Oa(512, cf, pf, []),
            Oa(512, qd, qd, []),
            Oa(256, $d, {}, []),
            Oa(1024, Uc, og, [Hc, [2, Bc], $d]),
            Oa(512, zc, zc, [Uc]),
            Oa(512, mi, mi, []),
            Oa(512, qi, Qi, [mi, [2, Yi]]),
            Oa(
              1024,
              Dd,
              function () {
                return [[]];
              },
              []
            ),
            Oa(1024, Bd, ag, [
              Bi,
              cf,
              qd,
              zc,
              Vn,
              qi,
              mi,
              Dd,
              $d,
              [2, Ld],
              [2, Ad],
            ]),
            Oa(1073742336, ng, ng, [
              [2, Jd],
              [2, Bd],
            ]),
            Oa(1073742336, Xb, Xb, []),
            Oa(1073742336, Ng, Ng, []),
            Oa(1073742336, Jv, Jv, []),
            Oa(1073742336, zu, zu, []),
            Oa(256, jr, !0, []),
            Oa(256, Wb, "BrowserAnimations", []),
            Oa(256, Tg, { autoClose: !0 }, []),
            Oa(256, Yv, Bu, []),
          ]);
        });
      (function () {
        if (_o)
          throw new Error("Cannot enable prod mode after platform setup.");
        bo = !1;
      })(),
        _h()
          .bootstrapModuleFactory(Qb)
          .catch(function (t) {
            return console.error(t);
          });
    },
  },
  [[0, 0]],
]);
