if (function(a, b) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
            if (!a.document) throw new Error("jQuery requires a window with a document");
            return b(a)
        } : b(a)
    }("undefined" != typeof window ? window : this, function(a, b) {
        function c(a) {
            var b = "length" in a && a.length,
                c = ea.type(a);
            return "function" === c || ea.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
        }

        function d(a, b, c) {
            if (ea.isFunction(b)) return ea.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
            if (b.nodeType) return ea.grep(a, function(a) {
                return a === b !== c
            });
            if ("string" == typeof b) {
                if (ma.test(b)) return ea.filter(b, a, c);
                b = ea.filter(b, a)
            }
            return ea.grep(a, function(a) {
                return ea.inArray(a, b) >= 0 !== c
            })
        }

        function e(a, b) {
            do a = a[b]; while (a && 1 !== a.nodeType);
            return a
        }

        function f(a) {
            var b = ua[a] = {};
            return ea.each(a.match(ta) || [], function(a, c) {
                b[c] = !0
            }), b
        }

        function g() {
            oa.addEventListener ? (oa.removeEventListener("DOMContentLoaded", h, !1), a.removeEventListener("load", h, !1)) : (oa.detachEvent("onreadystatechange", h), a.detachEvent("onload", h))
        }

        function h() {
            (oa.addEventListener || "load" === event.type || "complete" === oa.readyState) && (g(), ea.ready())
        }

        function i(a, b, c) {
            if (void 0 === c && 1 === a.nodeType) {
                var d = "data-" + b.replace(za, "-$1").toLowerCase();
                if (c = a.getAttribute(d), "string" == typeof c) {
                    try {
                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ya.test(c) ? ea.parseJSON(c) : c
                    } catch (e) {}
                    ea.data(a, b, c)
                } else c = void 0
            }
            return c
        }

        function j(a) {
            var b;
            for (b in a)
                if (("data" !== b || !ea.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
            return !0
        }

        function k(a, b, c, d) {
            if (ea.acceptData(a)) {
                var e, f, g = ea.expando,
                    h = a.nodeType,
                    i = h ? ea.cache : a,
                    j = h ? a[g] : a[g] && g;
                if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b) return j || (j = h ? a[g] = W.pop() || ea.guid++ : g), i[j] || (i[j] = h ? {} : {
                    toJSON: ea.noop
                }), ("object" == typeof b || "function" == typeof b) && (d ? i[j] = ea.extend(i[j], b) : i[j].data = ea.extend(i[j].data, b)), f = i[j], d || (f.data || (f.data = {}), f = f.data), void 0 !== c && (f[ea.camelCase(b)] = c), "string" == typeof b ? (e = f[b], null == e && (e = f[ea.camelCase(b)])) : e = f, e
            }
        }

        function l(a, b, c) {
            if (ea.acceptData(a)) {
                var d, e, f = a.nodeType,
                    g = f ? ea.cache : a,
                    h = f ? a[ea.expando] : ea.expando;
                if (g[h]) {
                    if (b && (d = c ? g[h] : g[h].data)) {
                        ea.isArray(b) ? b = b.concat(ea.map(b, ea.camelCase)) : b in d ? b = [b] : (b = ea.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                        for (; e--;) delete d[b[e]];
                        if (c ? !j(d) : !ea.isEmptyObject(d)) return
                    }(c || (delete g[h].data, j(g[h]))) && (f ? ea.cleanData([a], !0) : ca.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
                }
            }
        }

        function m() {
            return !0
        }

        function n() {
            return !1
        }

        function o() {
            try {
                return oa.activeElement
            } catch (a) {}
        }

        function p(a) {
            var b = Ka.split("|"),
                c = a.createDocumentFragment();
            if (c.createElement)
                for (; b.length;) c.createElement(b.pop());
            return c
        }

        function q(a, b) {
            var c, d, e = 0,
                f = typeof a.getElementsByTagName !== xa ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== xa ? a.querySelectorAll(b || "*") : void 0;
            if (!f)
                for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || ea.nodeName(d, b) ? f.push(d) : ea.merge(f, q(d, b));
            return void 0 === b || b && ea.nodeName(a, b) ? ea.merge([a], f) : f
        }

        function r(a) {
            Ea.test(a.type) && (a.defaultChecked = a.checked)
        }

        function s(a, b) {
            return ea.nodeName(a, "table") && ea.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }

        function t(a) {
            return a.type = (null !== ea.find.attr(a, "type")) + "/" + a.type, a
        }

        function u(a) {
            var b = Va.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"), a
        }

        function v(a, b) {
            for (var c, d = 0; null != (c = a[d]); d++) ea._data(c, "globalEval", !b || ea._data(b[d], "globalEval"))
        }

        function w(a, b) {
            if (1 === b.nodeType && ea.hasData(a)) {
                var c, d, e, f = ea._data(a),
                    g = ea._data(b, f),
                    h = f.events;
                if (h) {
                    delete g.handle, g.events = {};
                    for (c in h)
                        for (d = 0, e = h[c].length; e > d; d++) ea.event.add(b, c, h[c][d])
                }
                g.data && (g.data = ea.extend({}, g.data))
            }
        }

        function x(a, b) {
            var c, d, e;
            if (1 === b.nodeType) {
                if (c = b.nodeName.toLowerCase(), !ca.noCloneEvent && b[ea.expando]) {
                    e = ea._data(b);
                    for (d in e.events) ea.removeEvent(b, d, e.handle);
                    b.removeAttribute(ea.expando)
                }
                "script" === c && b.text !== a.text ? (t(b).text = a.text, u(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), ca.html5Clone && a.innerHTML && !ea.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Ea.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
            }
        }

        function y(b, c) {
            var d, e = ea(c.createElement(b)).appendTo(c.body),
                f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : ea.css(e[0], "display");
            return e.detach(), f
        }

        function z(a) {
            var b = oa,
                c = _a[a];
            return c || (c = y(a, b), "none" !== c && c || ($a = ($a || ea("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = ($a[0].contentWindow || $a[0].contentDocument).document, b.write(), b.close(), c = y(a, b), $a.detach()), _a[a] = c), c
        }

        function A(a, b) {
            return {
                get: function() {
                    var c = a();
                    if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }

        function B(a, b) {
            if (b in a) return b;
            for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = mb.length; e--;)
                if (b = mb[e] + c, b in a) return b;
            return d
        }

        function C(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ea._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Ca(d) && (f[g] = ea._data(d, "olddisplay", z(d.nodeName)))) : (e = Ca(d), (c && "none" !== c || !e) && ea._data(d, "olddisplay", e ? c : ea.css(d, "display"))));
            for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
            return a
        }

        function D(a, b, c) {
            var d = ib.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
        }

        function E(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += ea.css(a, c + Ba[f], !0, e)), d ? ("content" === c && (g -= ea.css(a, "padding" + Ba[f], !0, e)), "margin" !== c && (g -= ea.css(a, "border" + Ba[f] + "Width", !0, e))) : (g += ea.css(a, "padding" + Ba[f], !0, e), "padding" !== c && (g += ea.css(a, "border" + Ba[f] + "Width", !0, e)));
            return g
        }

        function F(a, b, c) {
            var d = !0,
                e = "width" === b ? a.offsetWidth : a.offsetHeight,
                f = ab(a),
                g = ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if (e = bb(a, b, f), (0 > e || null == e) && (e = a.style[b]), db.test(e)) return e;
                d = g && (ca.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
            }
            return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }

        function G(a, b, c, d, e) {
            return new G.prototype.init(a, b, c, d, e)
        }

        function H() {
            return setTimeout(function() {
                nb = void 0
            }), nb = ea.now()
        }

        function I(a, b) {
            var c, d = {
                    height: a
                },
                e = 0;
            for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = Ba[e], d["margin" + c] = d["padding" + c] = a;
            return b && (d.opacity = d.width = a), d
        }

        function J(a, b, c) {
            for (var d, e = (tb[b] || []).concat(tb["*"]), f = 0, g = e.length; g > f; f++)
                if (d = e[f].call(c, b, a)) return d
        }

        function K(a, b, c) {
            var d, e, f, g, h, i, j, k, l = this,
                m = {},
                n = a.style,
                o = a.nodeType && Ca(a),
                p = ea._data(a, "fxshow");
            c.queue || (h = ea._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
                h.unqueued || i()
            }), h.unqueued++, l.always(function() {
                l.always(function() {
                    h.unqueued--, ea.queue(a, "fx").length || h.empty.fire()
                })
            })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = ea.css(a, "display"), k = "none" === j ? ea._data(a, "olddisplay") || z(a.nodeName) : j, "inline" === k && "none" === ea.css(a, "float") && (ca.inlineBlockNeedsLayout && "inline" !== z(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", ca.shrinkWrapBlocks() || l.always(function() {
                n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
            }));
            for (d in b)
                if (e = b[d], pb.exec(e)) {
                    if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                        if ("show" !== e || !p || void 0 === p[d]) continue;
                        o = !0
                    }
                    m[d] = p && p[d] || ea.style(a, d)
                } else j = void 0;
            if (ea.isEmptyObject(m)) "inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j);
            else {
                p ? "hidden" in p && (o = p.hidden) : p = ea._data(a, "fxshow", {}), f && (p.hidden = !o), o ? ea(a).show() : l.done(function() {
                    ea(a).hide()
                }), l.done(function() {
                    var b;
                    ea._removeData(a, "fxshow");
                    for (b in m) ea.style(a, b, m[b])
                });
                for (d in m) g = J(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }

        function L(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (d = ea.camelCase(c), e = b[d], f = a[c], ea.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = ea.cssHooks[d], g && "expand" in g) {
                    f = g.expand(f), delete a[d];
                    for (c in f) c in a || (a[c] = f[c], b[c] = e)
                } else b[d] = e
        }

        function M(a, b, c) {
            var d, e, f = 0,
                g = sb.length,
                h = ea.Deferred().always(function() {
                    delete i.elem
                }),
                i = function() {
                    if (e) return !1;
                    for (var b = nb || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                    return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                },
                j = h.promise({
                    elem: a,
                    props: ea.extend({}, b),
                    opts: ea.extend(!0, {
                        specialEasing: {}
                    }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: nb || H(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function(b, c) {
                        var d = ea.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d
                    },
                    stop: function(b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; d > c; c++) j.tweens[c].run(1);
                        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                    }
                }),
                k = j.props;
            for (L(k, j.opts.specialEasing); g > f; f++)
                if (d = sb[f].call(j, a, k, j.opts)) return d;
            return ea.map(k, J, j), ea.isFunction(j.opts.start) && j.opts.start.call(a, j), ea.fx.timer(ea.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }

        function N(a) {
            return function(b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0,
                    f = b.toLowerCase().match(ta) || [];
                if (ea.isFunction(c))
                    for (; d = f[e++];) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }

        function O(a, b, c, d) {
            function e(h) {
                var i;
                return f[h] = !0, ea.each(a[h] || [], function(a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
                }), i
            }
            var f = {},
                g = a === Rb;
            return e(b.dataTypes[0]) || !f["*"] && e("*")
        }

        function P(a, b) {
            var c, d, e = ea.ajaxSettings.flatOptions || {};
            for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
            return c && ea.extend(!0, a, c), a
        }

        function Q(a, b, c) {
            for (var d, e, f, g, h = a.contents, i = a.dataTypes;
                "*" === i[0];) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
            if (e)
                for (g in h)
                    if (h[g] && h[g].test(e)) {
                        i.unshift(g);
                        break
                    }
            if (i[0] in c) f = i[0];
            else {
                for (g in c) {
                    if (!i[0] || a.converters[g + " " + i[0]]) {
                        f = g;
                        break
                    }
                    d || (d = g)
                }
                f = f || d
            }
            return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
        }

        function R(a, b, c, d) {
            var e, f, g, h, i, j = {},
                k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f;)
                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                    if ("*" === f) f = i;
                    else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g)
                    for (e in j)
                        if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                            break
                        }
                if (g !== !0)
                    if (g && a["throws"]) b = g(b);
                    else try {
                        b = g(b)
                    } catch (l) {
                        return {
                            state: "parsererror",
                            error: g ? l : "No conversion from " + i + " to " + f
                        }
                    }
            }
            return {
                state: "success",
                data: b
            }
        }

        function S(a, b, c, d) {
            var e;
            if (ea.isArray(b)) ea.each(b, function(b, e) {
                c || Vb.test(a) ? d(a, e) : S(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
            else if (c || "object" !== ea.type(b)) d(a, b);
            else
                for (e in b) S(a + "[" + e + "]", b[e], c, d)
        }

        function T() {
            try {
                return new a.XMLHttpRequest
            } catch (b) {}
        }

        function U() {
            try {
                return new a.ActiveXObject("Microsoft.XMLHTTP")
            } catch (b) {}
        }

        function V(a) {
            return ea.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
        }
        var W = [],
            X = W.slice,
            Y = W.concat,
            Z = W.push,
            $ = W.indexOf,
            _ = {},
            aa = _.toString,
            ba = _.hasOwnProperty,
            ca = {},
            da = "1.11.3",
            ea = function(a, b) {
                return new ea.fn.init(a, b)
            },
            fa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ga = /^-ms-/,
            ha = /-([\da-z])/gi,
            ia = function(a, b) {
                return b.toUpperCase()
            };
        ea.fn = ea.prototype = {
            jquery: da,
            constructor: ea,
            selector: "",
            length: 0,
            toArray: function() {
                return X.call(this)
            },
            get: function(a) {
                return null != a ? 0 > a ? this[a + this.length] : this[a] : X.call(this)
            },
            pushStack: function(a) {
                var b = ea.merge(this.constructor(), a);
                return b.prevObject = this, b.context = this.context, b
            },
            each: function(a, b) {
                return ea.each(this, a, b)
            },
            map: function(a) {
                return this.pushStack(ea.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function() {
                return this.pushStack(X.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(a) {
                var b = this.length,
                    c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: Z,
            sort: W.sort,
            splice: W.splice
        }, ea.extend = ea.fn.extend = function() {
            var a, b, c, d, e, f, g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || ea.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
                if (null != (e = arguments[h]))
                    for (d in e) a = g[d], c = e[d], g !== c && (j && c && (ea.isPlainObject(c) || (b = ea.isArray(c))) ? (b ? (b = !1, f = a && ea.isArray(a) ? a : []) : f = a && ea.isPlainObject(a) ? a : {}, g[d] = ea.extend(j, f, c)) : void 0 !== c && (g[d] = c));
            return g
        }, ea.extend({
            expando: "jQuery" + (da + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) {
                throw new Error(a)
            },
            noop: function() {},
            isFunction: function(a) {
                return "function" === ea.type(a)
            },
            isArray: Array.isArray || function(a) {
                return "array" === ea.type(a)
            },
            isWindow: function(a) {
                return null != a && a == a.window
            },
            isNumeric: function(a) {
                return !ea.isArray(a) && a - parseFloat(a) + 1 >= 0
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a) return !1;
                return !0
            },
            isPlainObject: function(a) {
                var b;
                if (!a || "object" !== ea.type(a) || a.nodeType || ea.isWindow(a)) return !1;
                try {
                    if (a.constructor && !ba.call(a, "constructor") && !ba.call(a.constructor.prototype, "isPrototypeOf")) return !1
                } catch (c) {
                    return !1
                }
                if (ca.ownLast)
                    for (b in a) return ba.call(a, b);
                for (b in a);
                return void 0 === b || ba.call(a, b)
            },
            type: function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? _[aa.call(a)] || "object" : typeof a
            },
            globalEval: function(b) {
                b && ea.trim(b) && (a.execScript || function(b) {
                    a.eval.call(a, b)
                })(b)
            },
            camelCase: function(a) {
                return a.replace(ga, "ms-").replace(ha, ia)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, b, d) {
                var e, f = 0,
                    g = a.length,
                    h = c(a);
                if (d) {
                    if (h)
                        for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                    else
                        for (f in a)
                            if (e = b.apply(a[f], d), e === !1) break
                } else if (h)
                    for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.call(a[f], f, a[f]), e === !1) break; return a
            },
            trim: function(a) {
                return null == a ? "" : (a + "").replace(fa, "")
            },
            makeArray: function(a, b) {
                var d = b || [];
                return null != a && (c(Object(a)) ? ea.merge(d, "string" == typeof a ? [a] : a) : Z.call(d, a)), d
            },
            inArray: function(a, b, c) {
                var d;
                if (b) {
                    if ($) return $.call(b, a, c);
                    for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                        if (c in b && b[c] === a) return c
                }
                return -1
            },
            merge: function(a, b) {
                for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
                if (c !== c)
                    for (; void 0 !== b[d];) a[e++] = b[d++];
                return a.length = e, a
            },
            grep: function(a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
                return e
            },
            map: function(a, b, d) {
                var e, f = 0,
                    g = a.length,
                    h = c(a),
                    i = [];
                if (h)
                    for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
                else
                    for (f in a) e = b(a[f], f, d), null != e && i.push(e);
                return Y.apply([], i)
            },
            guid: 1,
            proxy: function(a, b) {
                var c, d, e;
                return "string" == typeof b && (e = a[b], b = a, a = e), ea.isFunction(a) ? (c = X.call(arguments, 2), d = function() {
                    return a.apply(b || this, c.concat(X.call(arguments)))
                }, d.guid = a.guid = a.guid || ea.guid++, d) : void 0
            },
            now: function() {
                return +new Date
            },
            support: ca
        }), ea.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
            _["[object " + b + "]"] = b.toLowerCase()
        });
        var ja = function(a) {
            function b(a, b, c, d) {
                var e, f, g, h, i, j, l, n, o, p;
                if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
                if (!d && I) {
                    if (11 !== h && (e = sa.exec(a)))
                        if (g = e[1]) {
                            if (9 === h) {
                                if (f = b.getElementById(g), !f || !f.parentNode) return c;
                                if (f.id === g) return c.push(f), c
                            } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                        } else {
                            if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                            if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c
                        }
                    if (v.qsa && (!J || !J.test(a))) {
                        if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                            for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                            o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
                        }
                        if (p) try {
                            return $.apply(c, o.querySelectorAll(p)), c
                        } catch (q) {} finally {
                            l || b.removeAttribute("id")
                        }
                    }
                }
                return B(a.replace(ia, "$1"), b, c, d)
            }

            function c() {
                function a(c, d) {
                    return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
                }
                var b = [];
                return a
            }

            function d(a) {
                return a[N] = !0, a
            }

            function e(a) {
                var b = G.createElement("div");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function f(a, b) {
                for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
            }

            function g(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
                if (d) return d;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === b) return -1;
                return a ? 1 : -1
            }

            function h(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function i(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function j(a) {
                return d(function(b) {
                    return b = +b, d(function(c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function k(a) {
                return a && "undefined" != typeof a.getElementsByTagName && a
            }

            function l() {}

            function m(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                return d
            }

            function n(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === d,
                    f = Q++;
                return b.first ? function(b, c, f) {
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) return a(b, c, f)
                } : function(b, c, g) {
                    var h, i, j = [P, f];
                    if (g) {
                        for (; b = b[d];)
                            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                    } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || e) {
                                if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                                if (i[d] = j, j[2] = a(b, c, g)) return !0
                            }
                }
            }

            function o(a) {
                return a.length > 1 ? function(b, c, d) {
                    for (var e = a.length; e--;)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function p(a, c, d) {
                for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
                return d
            }

            function q(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                return g
            }

            function r(a, b, c, e, f, g) {
                return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        r = d || p(b || "*", h.nodeType ? [h] : h, []),
                        s = !a || !d && b ? r : q(r, m, a, h, i),
                        t = c ? f || (d ? a : o || e) ? [] : g : s;
                    if (c && c(s, t, h, i), e)
                        for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                    if (d) {
                        if (f || a) {
                            if (f) {
                                for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                                f(null, t = [], j, i)
                            }
                            for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                        }
                    } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
                })
            }

            function s(a) {
                for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                        return a === b
                    }, g, !0), j = n(function(a) {
                        return aa(b, a) > -1
                    }, g, !0), k = [function(a, c, d) {
                        var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                        return b = null, e
                    }]; e > h; h++)
                    if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                    else {
                        if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                            for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                            return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                                value: " " === a[h - 2].type ? "*" : ""
                            })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                        }
                        k.push(c)
                    }
                return o(k)
            }

            function t(a, c) {
                var e = c.length > 0,
                    f = a.length > 0,
                    g = function(d, g, h, i, j) {
                        var k, l, m, n = 0,
                            o = "0",
                            p = d && [],
                            r = [],
                            s = C,
                            t = d || f && w.find.TAG("*", j),
                            u = P += null == s ? 1 : Math.random() || .1,
                            v = t.length;
                        for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                            if (f && k) {
                                for (l = 0; m = a[l++];)
                                    if (m(k, g, h)) {
                                        i.push(k);
                                        break
                                    }
                                j && (P = u)
                            }
                            e && ((k = !m && k) && n--, d && p.push(k))
                        }
                        if (n += o, e && o !== n) {
                            for (l = 0; m = c[l++];) m(p, r, g, h);
                            if (d) {
                                if (n > 0)
                                    for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                                r = q(r)
                            }
                            $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                        }
                        return j && (P = u, C = s), p
                    };
                return e ? d(g) : g
            }
            var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
                O = a.document,
                P = 0,
                Q = 0,
                R = c(),
                S = c(),
                T = c(),
                U = function(a, b) {
                    return a === b && (E = !0), 0
                },
                V = 1 << 31,
                W = {}.hasOwnProperty,
                X = [],
                Y = X.pop,
                Z = X.push,
                $ = X.push,
                _ = X.slice,
                aa = function(a, b) {
                    for (var c = 0, d = a.length; d > c; c++)
                        if (a[c] === b) return c;
                    return -1
                },
                ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ca = "[\\x20\\t\\r\\n\\f]",
                da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ea = da.replace("w", "w#"),
                fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
                ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
                ha = new RegExp(ca + "+", "g"),
                ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
                ja = new RegExp("^" + ca + "*," + ca + "*"),
                ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
                la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
                ma = new RegExp(ga),
                na = new RegExp("^" + ea + "$"),
                oa = {
                    ID: new RegExp("^#(" + da + ")"),
                    CLASS: new RegExp("^\\.(" + da + ")"),
                    TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + fa),
                    PSEUDO: new RegExp("^" + ga),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ba + ")$", "i"),
                    needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
                },
                pa = /^(?:input|select|textarea|button)$/i,
                qa = /^h\d$/i,
                ra = /^[^{]+\{\s*\[native \w/,
                sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ta = /[+~]/,
                ua = /'|\\/g,
                va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
                wa = function(a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                },
                xa = function() {
                    F()
                };
            try {
                $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
            } catch (ya) {
                $ = {
                    apply: X.length ? function(a, b) {
                        Z.apply(a, _.call(b))
                    } : function(a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++];);
                        a.length = c - 1
                    }
                }
            }
            v = b.support = {}, y = b.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }, F = b.setDocument = function(a) {
                var b, c, d = a ? a.ownerDocument || a : O;
                return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function(a) {
                    return a.className = "i", !a.getAttribute("className")
                }), v.getElementsByTagName = e(function(a) {
                    return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
                }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function(a) {
                    return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
                }), v.getById ? (w.find.ID = function(a, b) {
                    if ("undefined" != typeof b.getElementById && I) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : []
                    }
                }, w.filter.ID = function(a) {
                    var b = a.replace(va, wa);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete w.find.ID, w.filter.ID = function(a) {
                    var b = a.replace(va, wa);
                    return function(a) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
                } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                    return I ? b.getElementsByClassName(a) : void 0
                }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) {
                    H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
                }), e(function(a) {
                    var b = d.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
                })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                    v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
                }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function(a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0;
                    return !1
                }, U = b ? function(a, b) {
                    if (a === b) return E = !0, 0;
                    var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
                } : function(a, b) {
                    if (a === b) return E = !0, 0;
                    var c, e = 0,
                        f = a.parentNode,
                        h = b.parentNode,
                        i = [a],
                        j = [b];
                    if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                    if (f === h) return g(a, b);
                    for (c = a; c = c.parentNode;) i.unshift(c);
                    for (c = b; c = c.parentNode;) j.unshift(c);
                    for (; i[e] === j[e];) e++;
                    return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
                }, d) : G
            }, b.matches = function(a, c) {
                return b(a, null, null, c)
            }, b.matchesSelector = function(a, c) {
                if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), v.matchesSelector && I && (!K || !K.test(c)) && (!J || !J.test(c))) try {
                    var d = L.call(a, c);
                    if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                } catch (e) {}
                return b(c, G, null, [a]).length > 0
            }, b.contains = function(a, b) {
                return (a.ownerDocument || a) !== G && F(a), M(a, b)
            }, b.attr = function(a, b) {
                (a.ownerDocument || a) !== G && F(a);
                var c = w.attrHandle[b.toLowerCase()],
                    d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
                return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }, b.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, b.uniqueSort = function(a) {
                var b, c = [],
                    d = 0,
                    e = 0;
                if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                    for (; b = a[e++];) b === a[e] && (d = c.push(e));
                    for (; d--;) a.splice(c[d], 1)
                }
                return D = null, a
            }, x = b.getText = function(a) {
                var b, c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                    } else if (3 === e || 4 === e) return a.nodeValue
                } else
                    for (; b = a[d++];) c += x(b);
                return c
            }, w = b.selectors = {
                cacheLength: 50,
                createPseudo: d,
                match: oa,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var b, c = !a[6] && a[2];
                        return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(va, wa).toLowerCase();
                        return "*" === a ? function() {
                            return !0
                        } : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function(a) {
                        var b = R[a + " "];
                        return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, c, d) {
                        return function(e) {
                            var f = b.attr(e, a);
                            return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                        }
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode
                        } : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (l = b; l = l[p];)
                                            if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                        if (1 === l.nodeType && ++m && l === b) {
                                            k[a] = [P, n, m];
                                            break
                                        }
                                } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                                else
                                    for (;
                                        (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                                return m -= e, m === d || m % d === 0 && m / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, c) {
                        var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                        return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                            for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                        }) : function(a) {
                            return f(a, 0, e)
                        }) : f
                    }
                },
                pseudos: {
                    not: d(function(a) {
                        var b = [],
                            c = [],
                            e = A(a.replace(ia, "$1"));
                        return e[N] ? d(function(a, b, c, d) {
                            for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, d, f) {
                            return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                        }
                    }),
                    has: d(function(a) {
                        return function(c) {
                            return b(a, c).length > 0
                        }
                    }),
                    contains: d(function(a) {
                        return a = a.replace(va, wa),
                            function(b) {
                                return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                            }
                    }),
                    lang: d(function(a) {
                        return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
                            function(b) {
                                var c;
                                do
                                    if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                                while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === H
                    },
                    focus: function(a) {
                        return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function(a) {
                        return a.disabled === !1
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !w.pseudos.empty(a)
                    },
                    header: function(a) {
                        return qa.test(a.nodeName)
                    },
                    input: function(a) {
                        return pa.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: j(function() {
                        return [0]
                    }),
                    last: j(function(a, b) {
                        return [b - 1]
                    }),
                    eq: j(function(a, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: j(function(a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a
                    }),
                    odd: j(function(a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a
                    }),
                    lt: j(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                        return a
                    }),
                    gt: j(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            }, w.pseudos.nth = w.pseudos.eq;
            for (u in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) w.pseudos[u] = h(u);
            for (u in {
                    submit: !0,
                    reset: !0
                }) w.pseudos[u] = i(u);
            return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
                var d, e, f, g, h, i, j, k = S[a + " "];
                if (k) return c ? 0 : k.slice(0);
                for (h = a, i = [], j = w.preFilter; h;) {
                    (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
                        value: d,
                        type: e[0].replace(ia, " ")
                    }), h = h.slice(d.length));
                    for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(),
                        f.push({
                            value: d,
                            type: g,
                            matches: e
                        }), h = h.slice(d.length));
                    if (!d) break
                }
                return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
            }, A = b.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = T[a + " "];
                if (!f) {
                    for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                    f = T(a, t(e, d)), f.selector = a
                }
                return f
            }, B = b.select = function(a, b, c, d) {
                var e, f, g, h, i, j = "function" == typeof a && a,
                    l = !d && z(a = j.selector || a);
                if (c = c || [], 1 === l.length) {
                    if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                        if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                        j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                    }
                    for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
                        if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                            if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                            break
                        }
                }
                return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
            }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
                return 1 & a.compareDocumentPosition(G.createElement("div"))
            }), e(function(a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || f("type|href|height|width", function(a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), v.attributes && e(function(a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || f("value", function(a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }), e(function(a) {
                return null == a.getAttribute("disabled")
            }) || f(ba, function(a, b, c) {
                var d;
                return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }), b
        }(a);
        ea.find = ja, ea.expr = ja.selectors, ea.expr[":"] = ea.expr.pseudos, ea.unique = ja.uniqueSort, ea.text = ja.getText, ea.isXMLDoc = ja.isXML, ea.contains = ja.contains;
        var ka = ea.expr.match.needsContext,
            la = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ma = /^.[^:#\[\.,]*$/;
        ea.filter = function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? ea.find.matchesSelector(d, a) ? [d] : [] : ea.find.matches(a, ea.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        }, ea.fn.extend({
            find: function(a) {
                var b, c = [],
                    d = this,
                    e = d.length;
                if ("string" != typeof a) return this.pushStack(ea(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (ea.contains(d[b], this)) return !0
                }));
                for (b = 0; e > b; b++) ea.find(a, d[b], c);
                return c = this.pushStack(e > 1 ? ea.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
            },
            filter: function(a) {
                return this.pushStack(d(this, a || [], !1))
            },
            not: function(a) {
                return this.pushStack(d(this, a || [], !0))
            },
            is: function(a) {
                return !!d(this, "string" == typeof a && ka.test(a) ? ea(a) : a || [], !1).length
            }
        });
        var na, oa = a.document,
            pa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            qa = ea.fn.init = function(a, b) {
                var c, d;
                if (!a) return this;
                if ("string" == typeof a) {
                    if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : pa.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || na).find(a) : this.constructor(b).find(a);
                    if (c[1]) {
                        if (b = b instanceof ea ? b[0] : b, ea.merge(this, ea.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : oa, !0)), la.test(c[1]) && ea.isPlainObject(b))
                            for (c in b) ea.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                        return this
                    }
                    if (d = oa.getElementById(c[2]), d && d.parentNode) {
                        if (d.id !== c[2]) return na.find(a);
                        this.length = 1, this[0] = d
                    }
                    return this.context = oa, this.selector = a, this
                }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : ea.isFunction(a) ? "undefined" != typeof na.ready ? na.ready(a) : a(ea) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), ea.makeArray(a, this))
            };
        qa.prototype = ea.fn, na = ea(oa);
        var ra = /^(?:parents|prev(?:Until|All))/,
            sa = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ea.extend({
            dir: function(a, b, c) {
                for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !ea(e).is(c));) 1 === e.nodeType && d.push(e), e = e[b];
                return d
            },
            sibling: function(a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            }
        }), ea.fn.extend({
            has: function(a) {
                var b, c = ea(a, this),
                    d = c.length;
                return this.filter(function() {
                    for (b = 0; d > b; b++)
                        if (ea.contains(this, c[b])) return !0
                })
            },
            closest: function(a, b) {
                for (var c, d = 0, e = this.length, f = [], g = ka.test(a) || "string" != typeof a ? ea(a, b || this.context) : 0; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && ea.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
                return this.pushStack(f.length > 1 ? ea.unique(f) : f)
            },
            index: function(a) {
                return a ? "string" == typeof a ? ea.inArray(this[0], ea(a)) : ea.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(a, b) {
                return this.pushStack(ea.unique(ea.merge(this.get(), ea(a, b))))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        }), ea.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function(a) {
                return ea.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return ea.dir(a, "parentNode", c)
            },
            next: function(a) {
                return e(a, "nextSibling")
            },
            prev: function(a) {
                return e(a, "previousSibling")
            },
            nextAll: function(a) {
                return ea.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return ea.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return ea.dir(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return ea.dir(a, "previousSibling", c)
            },
            siblings: function(a) {
                return ea.sibling((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return ea.sibling(a.firstChild)
            },
            contents: function(a) {
                return ea.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ea.merge([], a.childNodes)
            }
        }, function(a, b) {
            ea.fn[a] = function(c, d) {
                var e = ea.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = ea.filter(d, e)), this.length > 1 && (sa[a] || (e = ea.unique(e)), ra.test(a) && (e = e.reverse())), this.pushStack(e)
            }
        });
        var ta = /\S+/g,
            ua = {};
        ea.Callbacks = function(a) {
            a = "string" == typeof a ? ua[a] || f(a) : ea.extend({}, a);
            var b, c, d, e, g, h, i = [],
                j = !a.once && [],
                k = function(f) {
                    for (c = a.memory && f, d = !0, g = h || 0, h = 0, e = i.length, b = !0; i && e > g; g++)
                        if (i[g].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                            c = !1;
                            break
                        }
                    b = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
                },
                l = {
                    add: function() {
                        if (i) {
                            var d = i.length;
                            ! function f(b) {
                                ea.each(b, function(b, c) {
                                    var d = ea.type(c);
                                    "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                                })
                            }(arguments), b ? e = i.length : c && (h = d, k(c))
                        }
                        return this
                    },
                    remove: function() {
                        return i && ea.each(arguments, function(a, c) {
                            for (var d;
                                (d = ea.inArray(c, i, d)) > -1;) i.splice(d, 1), b && (e >= d && e--, g >= d && g--)
                        }), this
                    },
                    has: function(a) {
                        return a ? ea.inArray(a, i) > -1 : !(!i || !i.length)
                    },
                    empty: function() {
                        return i = [], e = 0, this
                    },
                    disable: function() {
                        return i = j = c = void 0, this
                    },
                    disabled: function() {
                        return !i
                    },
                    lock: function() {
                        return j = void 0, c || l.disable(), this
                    },
                    locked: function() {
                        return !j
                    },
                    fireWith: function(a, c) {
                        return !i || d && !j || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? j.push(c) : k(c)), this
                    },
                    fire: function() {
                        return l.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!d
                    }
                };
            return l
        }, ea.extend({
            Deferred: function(a) {
                var b = [
                        ["resolve", "done", ea.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ea.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ea.Callbacks("memory")]
                    ],
                    c = "pending",
                    d = {
                        state: function() {
                            return c
                        },
                        always: function() {
                            return e.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var a = arguments;
                            return ea.Deferred(function(c) {
                                ea.each(b, function(b, f) {
                                    var g = ea.isFunction(a[b]) && a[b];
                                    e[f[1]](function() {
                                        var a = g && g.apply(this, arguments);
                                        a && ea.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        promise: function(a) {
                            return null != a ? ea.extend(a, d) : d
                        }
                    },
                    e = {};
                return d.pipe = d.then, ea.each(b, function(a, f) {
                    var g = f[2],
                        h = f[3];
                    d[f[1]] = g.add, h && g.add(function() {
                        c = h
                    }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                        return e[f[0] + "With"](this === e ? d : this, arguments), this
                    }, e[f[0] + "With"] = g.fireWith
                }), d.promise(e), a && a.call(e, e), e
            },
            when: function(a) {
                var b, c, d, e = 0,
                    f = X.call(arguments),
                    g = f.length,
                    h = 1 !== g || a && ea.isFunction(a.promise) ? g : 0,
                    i = 1 === h ? a : ea.Deferred(),
                    j = function(a, c, d) {
                        return function(e) {
                            c[a] = this, d[a] = arguments.length > 1 ? X.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                        }
                    };
                if (g > 1)
                    for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && ea.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
                return h || i.resolveWith(d, f), i.promise()
            }
        });
        var va;
        ea.fn.ready = function(a) {
            return ea.ready.promise().done(a), this
        }, ea.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? ea.readyWait++ : ea.ready(!0)
            },
            ready: function(a) {
                if (a === !0 ? !--ea.readyWait : !ea.isReady) {
                    if (!oa.body) return setTimeout(ea.ready);
                    ea.isReady = !0, a !== !0 && --ea.readyWait > 0 || (va.resolveWith(oa, [ea]), ea.fn.triggerHandler && (ea(oa).triggerHandler("ready"), ea(oa).off("ready")))
                }
            }
        }), ea.ready.promise = function(b) {
            if (!va)
                if (va = ea.Deferred(), "complete" === oa.readyState) setTimeout(ea.ready);
                else if (oa.addEventListener) oa.addEventListener("DOMContentLoaded", h, !1), a.addEventListener("load", h, !1);
            else {
                oa.attachEvent("onreadystatechange", h), a.attachEvent("onload", h);
                var c = !1;
                try {
                    c = null == a.frameElement && oa.documentElement
                } catch (d) {}
                c && c.doScroll && ! function e() {
                    if (!ea.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(e, 50)
                        }
                        g(), ea.ready()
                    }
                }()
            }
            return va.promise(b)
        };
        var wa, xa = "undefined";
        for (wa in ea(ca)) break;
        ca.ownLast = "0" !== wa, ca.inlineBlockNeedsLayout = !1, ea(function() {
                var a, b, c, d;
                c = oa.getElementsByTagName("body")[0], c && c.style && (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== xa && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ca.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
            }),
            function() {
                var a = oa.createElement("div");
                if (null == ca.deleteExpando) {
                    ca.deleteExpando = !0;
                    try {
                        delete a.test
                    } catch (b) {
                        ca.deleteExpando = !1
                    }
                }
                a = null
            }(), ea.acceptData = function(a) {
                var b = ea.noData[(a.nodeName + " ").toLowerCase()],
                    c = +a.nodeType || 1;
                return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
            };
        var ya = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            za = /([A-Z])/g;
        ea.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(a) {
                return a = a.nodeType ? ea.cache[a[ea.expando]] : a[ea.expando], !!a && !j(a)
            },
            data: function(a, b, c) {
                return k(a, b, c)
            },
            removeData: function(a, b) {
                return l(a, b)
            },
            _data: function(a, b, c) {
                return k(a, b, c, !0)
            },
            _removeData: function(a, b) {
                return l(a, b, !0)
            }
        }), ea.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = ea.data(f), 1 === f.nodeType && !ea._data(f, "parsedAttrs"))) {
                        for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = ea.camelCase(d.slice(5)), i(f, d, e[d])));
                        ea._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    ea.data(this, a)
                }) : arguments.length > 1 ? this.each(function() {
                    ea.data(this, a, b)
                }) : f ? i(f, a, ea.data(f, a)) : void 0
            },
            removeData: function(a) {
                return this.each(function() {
                    ea.removeData(this, a)
                })
            }
        }), ea.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = ea._data(a, b), c && (!d || ea.isArray(c) ? d = ea._data(a, b, ea.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = ea.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = ea._queueHooks(a, b),
                    g = function() {
                        ea.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return ea._data(a, c) || ea._data(a, c, {
                    empty: ea.Callbacks("once memory").add(function() {
                        ea._removeData(a, b + "queue"), ea._removeData(a, c)
                    })
                })
            }
        }), ea.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? ea.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = ea.queue(this, a, b);
                    ea._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && ea.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    ea.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1,
                    e = ea.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ea._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        });
        var Aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ba = ["Top", "Right", "Bottom", "Left"],
            Ca = function(a, b) {
                return a = b || a, "none" === ea.css(a, "display") || !ea.contains(a.ownerDocument, a)
            },
            Da = ea.access = function(a, b, c, d, e, f, g) {
                var h = 0,
                    i = a.length,
                    j = null == c;
                if ("object" === ea.type(c)) {
                    e = !0;
                    for (h in c) ea.access(a, b, h, c[h], !0, f, g)
                } else if (void 0 !== d && (e = !0, ea.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                        return j.call(ea(a), c)
                    })), b))
                    for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
            },
            Ea = /^(?:checkbox|radio)$/i;
        ! function() {
            var a = oa.createElement("input"),
                b = oa.createElement("div"),
                c = oa.createDocumentFragment();
            if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ca.leadingWhitespace = 3 === b.firstChild.nodeType, ca.tbody = !b.getElementsByTagName("tbody").length, ca.htmlSerialize = !!b.getElementsByTagName("link").length, ca.html5Clone = "<:nav></:nav>" !== oa.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), ca.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", ca.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", ca.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, ca.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
                    ca.noCloneEvent = !1
                }), b.cloneNode(!0).click()), null == ca.deleteExpando) {
                ca.deleteExpando = !0;
                try {
                    delete b.test
                } catch (d) {
                    ca.deleteExpando = !1
                }
            }
        }(),
        function() {
            var b, c, d = oa.createElement("div");
            for (b in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) c = "on" + b, (ca[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), ca[b + "Bubbles"] = d.attributes[c].expando === !1);
            d = null
        }();
        var Fa = /^(?:input|select|textarea)$/i,
            Ga = /^key/,
            Ha = /^(?:mouse|pointer|contextmenu)|click/,
            Ia = /^(?:focusinfocus|focusoutblur)$/,
            Ja = /^([^.]*)(?:\.(.+)|)$/;
        ea.event = {
            global: {},
            add: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = ea._data(a);
                if (q) {
                    for (c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = ea.guid++), (g = q.events) || (g = q.events = {}), (k = q.handle) || (k = q.handle = function(a) {
                            return typeof ea === xa || a && ea.event.triggered === a.type ? void 0 : ea.event.dispatch.apply(k.elem, arguments)
                        }, k.elem = a), b = (b || "").match(ta) || [""], h = b.length; h--;) f = Ja.exec(b[h]) || [], n = p = f[1], o = (f[2] || "").split(".").sort(), n && (j = ea.event.special[n] || {}, n = (e ? j.delegateType : j.bindType) || n, j = ea.event.special[n] || {}, l = ea.extend({
                        type: n,
                        origType: p,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && ea.expr.match.needsContext.test(e),
                        namespace: o.join(".")
                    }, i), (m = g[n]) || (m = g[n] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), ea.event.global[n] = !0);
                    a = null
                }
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = ea.hasData(a) && ea._data(a);
                if (q && (k = q.events)) {
                    for (b = (b || "").match(ta) || [""], j = b.length; j--;)
                        if (h = Ja.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                            for (l = ea.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                            i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ea.removeEvent(a, n, q.handle), delete k[n])
                        } else
                            for (n in k) ea.event.remove(a, n + b[j], c, d, !0);
                    ea.isEmptyObject(k) && (delete q.handle, ea._removeData(a, "events"))
                }
            },
            trigger: function(b, c, d, e) {
                var f, g, h, i, j, k, l, m = [d || oa],
                    n = ba.call(b, "type") ? b.type : b,
                    o = ba.call(b, "namespace") ? b.namespace.split(".") : [];
                if (h = k = d = d || oa, 3 !== d.nodeType && 8 !== d.nodeType && !Ia.test(n + ea.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), g = n.indexOf(":") < 0 && "on" + n, b = b[ea.expando] ? b : new ea.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : ea.makeArray(c, [b]), j = ea.event.special[n] || {}, e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
                    if (!e && !j.noBubble && !ea.isWindow(d)) {
                        for (i = j.delegateType || n, Ia.test(i + n) || (h = h.parentNode); h; h = h.parentNode) m.push(h), k = h;
                        k === (d.ownerDocument || oa) && m.push(k.defaultView || k.parentWindow || a)
                    }
                    for (l = 0;
                        (h = m[l++]) && !b.isPropagationStopped();) b.type = l > 1 ? i : j.bindType || n, f = (ea._data(h, "events") || {})[b.type] && ea._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && ea.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                    if (b.type = n, !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && ea.acceptData(d) && g && d[n] && !ea.isWindow(d)) {
                        k = d[g], k && (d[g] = null), ea.event.triggered = n;
                        try {
                            d[n]()
                        } catch (p) {}
                        ea.event.triggered = void 0, k && (d[g] = k)
                    }
                    return b.result
                }
            },
            dispatch: function(a) {
                a = ea.event.fix(a);
                var b, c, d, e, f, g = [],
                    h = X.call(arguments),
                    i = (ea._data(this, "events") || {})[a.type] || [],
                    j = ea.event.special[a.type] || {};
                if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                    for (g = ea.event.handlers.call(this, a, i), b = 0;
                        (e = g[b++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = e.elem, f = 0;
                            (d = e.handlers[f++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(d.namespace)) && (a.handleObj = d, a.data = d.data, c = ((ea.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, h), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
                    return j.postDispatch && j.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(a, b) {
                var c, d, e, f, g = [],
                    h = b.delegateCount,
                    i = a.target;
                if (h && i.nodeType && (!a.button || "click" !== a.type))
                    for (; i != this; i = i.parentNode || this)
                        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                            for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? ea(c, this).index(i) >= 0 : ea.find(c, this, null, [i]).length), e[c] && e.push(d);
                            e.length && g.push({
                                elem: i,
                                handlers: e
                            })
                        }
                return h < b.length && g.push({
                    elem: this,
                    handlers: b.slice(h)
                }), g
            },
            fix: function(a) {
                if (a[ea.expando]) return a;
                var b, c, d, e = a.type,
                    f = a,
                    g = this.fixHooks[e];
                for (g || (this.fixHooks[e] = g = Ha.test(e) ? this.mouseHooks : Ga.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new ea.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
                return a.target || (a.target = f.srcElement || oa), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, b) {
                    var c, d, e, f = b.button,
                        g = b.fromElement;
                    return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || oa, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== o() && this.focus) try {
                            return this.focus(), !1
                        } catch (a) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === o() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return ea.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(a) {
                        return ea.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(a) {
                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = ea.extend(new ea.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? ea.event.trigger(e, null, b) : ea.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, ea.removeEvent = oa.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function(a, b, c) {
            var d = "on" + b;
            a.detachEvent && (typeof a[d] === xa && (a[d] = null), a.detachEvent(d, c))
        }, ea.Event = function(a, b) {
            return this instanceof ea.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? m : n) : this.type = a, b && ea.extend(this, b), this.timeStamp = a && a.timeStamp || ea.now(), void(this[ea.expando] = !0)) : new ea.Event(a, b)
        }, ea.Event.prototype = {
            isDefaultPrevented: n,
            isPropagationStopped: n,
            isImmediatePropagationStopped: n,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = m, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = m, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = m, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ea.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(a, b) {
            ea.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return (!e || e !== d && !ea.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), ca.submitBubbles || (ea.event.special.submit = {
            setup: function() {
                return ea.nodeName(this, "form") ? !1 : void ea.event.add(this, "click._submit keypress._submit", function(a) {
                    var b = a.target,
                        c = ea.nodeName(b, "input") || ea.nodeName(b, "button") ? b.form : void 0;
                    c && !ea._data(c, "submitBubbles") && (ea.event.add(c, "submit._submit", function(a) {
                        a._submit_bubble = !0
                    }), ea._data(c, "submitBubbles", !0))
                })
            },
            postDispatch: function(a) {
                a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && ea.event.simulate("submit", this.parentNode, a, !0))
            },
            teardown: function() {
                return ea.nodeName(this, "form") ? !1 : void ea.event.remove(this, "._submit")
            }
        }), ca.changeBubbles || (ea.event.special.change = {
            setup: function() {
                return Fa.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ea.event.add(this, "propertychange._change", function(a) {
                    "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                }), ea.event.add(this, "click._change", function(a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1), ea.event.simulate("change", this, a, !0)
                })), !1) : void ea.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    Fa.test(b.nodeName) && !ea._data(b, "changeBubbles") && (ea.event.add(b, "change._change", function(a) {
                        !this.parentNode || a.isSimulated || a.isTrigger || ea.event.simulate("change", this.parentNode, a, !0)
                    }), ea._data(b, "changeBubbles", !0))
                })
            },
            handle: function(a) {
                var b = a.target;
                return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return ea.event.remove(this, "._change"), !Fa.test(this.nodeName)
            }
        }), ca.focusinBubbles || ea.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = function(a) {
                ea.event.simulate(b, a.target, ea.event.fix(a), !0)
            };
            ea.event.special[b] = {
                setup: function() {
                    var d = this.ownerDocument || this,
                        e = ea._data(d, b);
                    e || d.addEventListener(a, c, !0), ea._data(d, b, (e || 0) + 1)
                },
                teardown: function() {
                    var d = this.ownerDocument || this,
                        e = ea._data(d, b) - 1;
                    e ? ea._data(d, b, e) : (d.removeEventListener(a, c, !0), ea._removeData(d, b))
                }
            }
        }), ea.fn.extend({
            on: function(a, b, c, d, e) {
                var f, g;
                if ("object" == typeof a) {
                    "string" != typeof b && (c = c || b, b = void 0);
                    for (f in a) this.on(f, b, c, a[f], e);
                    return this
                }
                if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = n;
                else if (!d) return this;
                return 1 === e && (g = d, d = function(a) {
                    return ea().off(a), g.apply(this, arguments)
                }, d.guid = g.guid || (g.guid = ea.guid++)), this.each(function() {
                    ea.event.add(this, a, d, c, b)
                })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj) return d = a.handleObj, ea(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                if ("object" == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this
                }
                return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = n), this.each(function() {
                    ea.event.remove(this, a, c, b)
                })
            },
            trigger: function(a, b) {
                return this.each(function() {
                    ea.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                return c ? ea.event.trigger(a, b, c, !0) : void 0
            }
        });
        var Ka = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            La = / jQuery\d+="(?:null|\d+)"/g,
            Ma = new RegExp("<(?:" + Ka + ")[\\s/>]", "i"),
            Na = /^\s+/,
            Oa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Pa = /<([\w:]+)/,
            Qa = /<tbody/i,
            Ra = /<|&#?\w+;/,
            Sa = /<(?:script|style|link)/i,
            Ta = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ua = /^$|\/(?:java|ecma)script/i,
            Va = /^true\/(.*)/,
            Wa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Xa = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ca.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Ya = p(oa),
            Za = Ya.appendChild(oa.createElement("div"));
        Xa.optgroup = Xa.option, Xa.tbody = Xa.tfoot = Xa.colgroup = Xa.caption = Xa.thead, Xa.th = Xa.td, ea.extend({
            clone: function(a, b, c) {
                var d, e, f, g, h, i = ea.contains(a.ownerDocument, a);
                if (ca.html5Clone || ea.isXMLDoc(a) || !Ma.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Za.innerHTML = a.outerHTML, Za.removeChild(f = Za.firstChild)), !(ca.noCloneEvent && ca.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ea.isXMLDoc(a)))
                    for (d = q(f), h = q(a), g = 0; null != (e = h[g]); ++g) d[g] && x(e, d[g]);
                if (b)
                    if (c)
                        for (h = h || q(a), d = d || q(f), g = 0; null != (e = h[g]); g++) w(e, d[g]);
                    else w(a, f);
                return d = q(f, "script"), d.length > 0 && v(d, !i && q(a, "script")), d = h = e = null, f
            },
            buildFragment: function(a, b, c, d) {
                for (var e, f, g, h, i, j, k, l = a.length, m = p(b), n = [], o = 0; l > o; o++)
                    if (f = a[o], f || 0 === f)
                        if ("object" === ea.type(f)) ea.merge(n, f.nodeType ? [f] : f);
                        else if (Ra.test(f)) {
                    for (h = h || m.appendChild(b.createElement("div")), i = (Pa.exec(f) || ["", ""])[1].toLowerCase(), k = Xa[i] || Xa._default, h.innerHTML = k[1] + f.replace(Oa, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
                    if (!ca.leadingWhitespace && Na.test(f) && n.push(b.createTextNode(Na.exec(f)[0])), !ca.tbody)
                        for (f = "table" !== i || Qa.test(f) ? "<table>" !== k[1] || Qa.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) ea.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                    for (ea.merge(n, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                    h = m.lastChild
                } else n.push(b.createTextNode(f));
                for (h && m.removeChild(h), ca.appendChecked || ea.grep(q(n, "input"), r), o = 0; f = n[o++];)
                    if ((!d || -1 === ea.inArray(f, d)) && (g = ea.contains(f.ownerDocument, f), h = q(m.appendChild(f), "script"), g && v(h), c))
                        for (e = 0; f = h[e++];) Ua.test(f.type || "") && c.push(f);
                return h = null, m
            },
            cleanData: function(a, b) {
                for (var c, d, e, f, g = 0, h = ea.expando, i = ea.cache, j = ca.deleteExpando, k = ea.event.special; null != (c = a[g]); g++)
                    if ((b || ea.acceptData(c)) && (e = c[h], f = e && i[e])) {
                        if (f.events)
                            for (d in f.events) k[d] ? ea.event.remove(c, d) : ea.removeEvent(c, d, f.handle);
                        i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== xa ? c.removeAttribute(h) : c[h] = null, W.push(e))
                    }
            }
        }), ea.fn.extend({
            text: function(a) {
                return Da(this, function(a) {
                    return void 0 === a ? ea.text(this) : this.empty().append((this[0] && this[0].ownerDocument || oa).createTextNode(a))
                }, null, a, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = s(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = s(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            remove: function(a, b) {
                for (var c, d = a ? ea.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || ea.cleanData(q(c)), c.parentNode && (b && ea.contains(c.ownerDocument, c) && v(q(c, "script")), c.parentNode.removeChild(c));
                return this
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) {
                    for (1 === a.nodeType && ea.cleanData(q(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                    a.options && ea.nodeName(a, "select") && (a.options.length = 0)
                }
                return this
            },
            clone: function(a, b) {
                return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                    return ea.clone(this, a, b)
                })
            },
            html: function(a) {
                return Da(this, function(a) {
                    var b = this[0] || {},
                        c = 0,
                        d = this.length;
                    if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(La, "") : void 0;
                    if ("string" == typeof a && !Sa.test(a) && (ca.htmlSerialize || !Ma.test(a)) && (ca.leadingWhitespace || !Na.test(a)) && !Xa[(Pa.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = a.replace(Oa, "<$1></$2>");
                        try {
                            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (ea.cleanData(q(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (e) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() {
                var a = arguments[0];
                return this.domManip(arguments, function(b) {
                    a = this.parentNode, ea.cleanData(q(this)), a && a.replaceChild(b, this)
                }), a && (a.length || a.nodeType) ? this : this.remove()
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, b) {
                a = Y.apply([], a);
                var c, d, e, f, g, h, i = 0,
                    j = this.length,
                    k = this,
                    l = j - 1,
                    m = a[0],
                    n = ea.isFunction(m);
                if (n || j > 1 && "string" == typeof m && !ca.checkClone && Ta.test(m)) return this.each(function(c) {
                    var d = k.eq(c);
                    n && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
                });
                if (j && (h = ea.buildFragment(a, this[0].ownerDocument, !1, this), c = h.firstChild, 1 === h.childNodes.length && (h = c), c)) {
                    for (f = ea.map(q(h, "script"), t), e = f.length; j > i; i++) d = h, i !== l && (d = ea.clone(d, !0, !0), e && ea.merge(f, q(d, "script"))), b.call(this[i], d, i);
                    if (e)
                        for (g = f[f.length - 1].ownerDocument, ea.map(f, u), i = 0; e > i; i++) d = f[i], Ua.test(d.type || "") && !ea._data(d, "globalEval") && ea.contains(g, d) && (d.src ? ea._evalUrl && ea._evalUrl(d.src) : ea.globalEval((d.text || d.textContent || d.innerHTML || "").replace(Wa, "")));
                    h = c = null
                }
                return this
            }
        }), ea.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            ea.fn[a] = function(a) {
                for (var c, d = 0, e = [], f = ea(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), ea(f[d])[b](c), Z.apply(e, c.get());
                return this.pushStack(e)
            }
        });
        var $a, _a = {};
        ! function() {
            var a;
            ca.shrinkWrapBlocks = function() {
                if (null != a) return a;
                a = !1;
                var b, c, d;
                return c = oa.getElementsByTagName("body")[0], c && c.style ? (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== xa && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(oa.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
            }
        }();
        var ab, bb, cb = /^margin/,
            db = new RegExp("^(" + Aa + ")(?!px)[a-z%]+$", "i"),
            eb = /^(top|right|bottom|left)$/;
        a.getComputedStyle ? (ab = function(b) {
                return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
            }, bb = function(a, b, c) {
                var d, e, f, g, h = a.style;
                return c = c || ab(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || ea.contains(a.ownerDocument, a) || (g = ea.style(a, b)), db.test(g) && cb.test(b) && (d = h.width, e = h.minWidth,
                    f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
            }) : oa.documentElement.currentStyle && (ab = function(a) {
                return a.currentStyle
            }, bb = function(a, b, c) {
                var d, e, f, g, h = a.style;
                return c = c || ab(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), db.test(g) && !eb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
            }),
            function() {
                function b() {
                    var b, c, d, e;
                    c = oa.getElementsByTagName("body")[0], c && c.style && (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f = g = !1, i = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(b, null) || {}).top, g = "4px" === (a.getComputedStyle(b, null) || {
                        width: "4px"
                    }).width, e = b.appendChild(oa.createElement("div")), e.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", b.style.width = "1px", i = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(e)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = b.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", h = 0 === e[0].offsetHeight, h && (e[0].style.display = "", e[1].style.display = "none", h = 0 === e[0].offsetHeight), c.removeChild(d))
                }
                var c, d, e, f, g, h, i;
                c = oa.createElement("div"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = c.getElementsByTagName("a")[0], d = e && e.style, d && (d.cssText = "float:left;opacity:.5", ca.opacity = "0.5" === d.opacity, ca.cssFloat = !!d.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", ca.clearCloneStyle = "content-box" === c.style.backgroundClip, ca.boxSizing = "" === d.boxSizing || "" === d.MozBoxSizing || "" === d.WebkitBoxSizing, ea.extend(ca, {
                    reliableHiddenOffsets: function() {
                        return null == h && b(), h
                    },
                    boxSizingReliable: function() {
                        return null == g && b(), g
                    },
                    pixelPosition: function() {
                        return null == f && b(), f
                    },
                    reliableMarginRight: function() {
                        return null == i && b(), i
                    }
                }))
            }(), ea.swap = function(a, b, c, d) {
                var e, f, g = {};
                for (f in b) g[f] = a.style[f], a.style[f] = b[f];
                e = c.apply(a, d || []);
                for (f in b) a.style[f] = g[f];
                return e
            };
        var fb = /alpha\([^)]*\)/i,
            gb = /opacity\s*=\s*([^)]*)/,
            hb = /^(none|table(?!-c[ea]).+)/,
            ib = new RegExp("^(" + Aa + ")(.*)$", "i"),
            jb = new RegExp("^([+-])=(" + Aa + ")", "i"),
            kb = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            lb = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            mb = ["Webkit", "O", "Moz", "ms"];
        ea.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = bb(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ca.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = ea.camelCase(b),
                        i = a.style;
                    if (b = ea.cssProps[h] || (ea.cssProps[h] = B(i, h)), g = ea.cssHooks[b] || ea.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                    if (f = typeof c, "string" === f && (e = jb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(ea.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || ea.cssNumber[h] || (c += "px"), ca.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                        i[b] = c
                    } catch (j) {}
                }
            },
            css: function(a, b, c, d) {
                var e, f, g, h = ea.camelCase(b);
                return b = ea.cssProps[h] || (ea.cssProps[h] = B(a.style, h)), g = ea.cssHooks[b] || ea.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = bb(a, b, d)), "normal" === f && b in lb && (f = lb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || ea.isNumeric(e) ? e || 0 : f) : f
            }
        }), ea.each(["height", "width"], function(a, b) {
            ea.cssHooks[b] = {
                get: function(a, c, d) {
                    return c ? hb.test(ea.css(a, "display")) && 0 === a.offsetWidth ? ea.swap(a, kb, function() {
                        return F(a, b, d)
                    }) : F(a, b, d) : void 0
                },
                set: function(a, c, d) {
                    var e = d && ab(a);
                    return D(a, c, d ? E(a, b, d, ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, e), e) : 0)
                }
            }
        }), ca.opacity || (ea.cssHooks.opacity = {
            get: function(a, b) {
                return gb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
            },
            set: function(a, b) {
                var c = a.style,
                    d = a.currentStyle,
                    e = ea.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                    f = d && d.filter || c.filter || "";
                c.zoom = 1, (b >= 1 || "" === b) && "" === ea.trim(f.replace(fb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = fb.test(f) ? f.replace(fb, e) : f + " " + e)
            }
        }), ea.cssHooks.marginRight = A(ca.reliableMarginRight, function(a, b) {
            return b ? ea.swap(a, {
                display: "inline-block"
            }, bb, [a, "marginRight"]) : void 0
        }), ea.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            ea.cssHooks[a + b] = {
                expand: function(c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Ba[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            }, cb.test(a) || (ea.cssHooks[a + b].set = D)
        }), ea.fn.extend({
            css: function(a, b) {
                return Da(this, function(a, b, c) {
                    var d, e, f = {},
                        g = 0;
                    if (ea.isArray(b)) {
                        for (d = ab(a), e = b.length; e > g; g++) f[b[g]] = ea.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? ea.style(a, b, c) : ea.css(a, b)
                }, a, b, arguments.length > 1)
            },
            show: function() {
                return C(this, !0)
            },
            hide: function() {
                return C(this)
            },
            toggle: function(a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                    Ca(this) ? ea(this).show() : ea(this).hide()
                })
            }
        }), ea.Tween = G, G.prototype = {
            constructor: G,
            init: function(a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (ea.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = G.propHooks[this.prop];
                return a && a.get ? a.get(this) : G.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = G.propHooks[this.prop];
                return this.options.duration ? this.pos = b = ea.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : G.propHooks._default.set(this), this
            }
        }, G.prototype.init.prototype = G.prototype, G.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = ea.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
                },
                set: function(a) {
                    ea.fx.step[a.prop] ? ea.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ea.cssProps[a.prop]] || ea.cssHooks[a.prop]) ? ea.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        }, G.propHooks.scrollTop = G.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        }, ea.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            }
        }, ea.fx = G.prototype.init, ea.fx.step = {};
        var nb, ob, pb = /^(?:toggle|show|hide)$/,
            qb = new RegExp("^(?:([+-])=|)(" + Aa + ")([a-z%]*)$", "i"),
            rb = /queueHooks$/,
            sb = [K],
            tb = {
                "*": [function(a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = qb.exec(b),
                        f = e && e[3] || (ea.cssNumber[a] ? "" : "px"),
                        g = (ea.cssNumber[a] || "px" !== f && +d) && qb.exec(ea.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do h = h || ".5", g /= h, ea.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                }]
            };
        ea.Animation = ea.extend(M, {
                tweener: function(a, b) {
                    ea.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                    for (var c, d = 0, e = a.length; e > d; d++) c = a[d], tb[c] = tb[c] || [], tb[c].unshift(b)
                },
                prefilter: function(a, b) {
                    b ? sb.unshift(a) : sb.push(a)
                }
            }), ea.speed = function(a, b, c) {
                var d = a && "object" == typeof a ? ea.extend({}, a) : {
                    complete: c || !c && b || ea.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !ea.isFunction(b) && b
                };
                return d.duration = ea.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ea.fx.speeds ? ea.fx.speeds[d.duration] : ea.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                    ea.isFunction(d.old) && d.old.call(this), d.queue && ea.dequeue(this, d.queue)
                }, d
            }, ea.fn.extend({
                fadeTo: function(a, b, c, d) {
                    return this.filter(Ca).css("opacity", 0).show().end().animate({
                        opacity: b
                    }, a, c, d)
                },
                animate: function(a, b, c, d) {
                    var e = ea.isEmptyObject(a),
                        f = ea.speed(b, c, d),
                        g = function() {
                            var b = M(this, ea.extend({}, a), f);
                            (e || ea._data(this, "finish")) && b.stop(!0)
                        };
                    return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                },
                stop: function(a, b, c) {
                    var d = function(a) {
                        var b = a.stop;
                        delete a.stop, b(c)
                    };
                    return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                        var b = !0,
                            e = null != a && a + "queueHooks",
                            f = ea.timers,
                            g = ea._data(this);
                        if (e) g[e] && g[e].stop && d(g[e]);
                        else
                            for (e in g) g[e] && g[e].stop && rb.test(e) && d(g[e]);
                        for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                        (b || !c) && ea.dequeue(this, a)
                    })
                },
                finish: function(a) {
                    return a !== !1 && (a = a || "fx"), this.each(function() {
                        var b, c = ea._data(this),
                            d = c[a + "queue"],
                            e = c[a + "queueHooks"],
                            f = ea.timers,
                            g = d ? d.length : 0;
                        for (c.finish = !0, ea.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish
                    })
                }
            }), ea.each(["toggle", "show", "hide"], function(a, b) {
                var c = ea.fn[b];
                ea.fn[b] = function(a, d, e) {
                    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(I(b, !0), a, d, e)
                }
            }), ea.each({
                slideDown: I("show"),
                slideUp: I("hide"),
                slideToggle: I("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(a, b) {
                ea.fn[a] = function(a, c, d) {
                    return this.animate(b, a, c, d)
                }
            }), ea.timers = [], ea.fx.tick = function() {
                var a, b = ea.timers,
                    c = 0;
                for (nb = ea.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
                b.length || ea.fx.stop(), nb = void 0
            }, ea.fx.timer = function(a) {
                ea.timers.push(a), a() ? ea.fx.start() : ea.timers.pop()
            }, ea.fx.interval = 13, ea.fx.start = function() {
                ob || (ob = setInterval(ea.fx.tick, ea.fx.interval))
            }, ea.fx.stop = function() {
                clearInterval(ob), ob = null
            }, ea.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, ea.fn.delay = function(a, b) {
                return a = ea.fx ? ea.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function() {
                        clearTimeout(d)
                    }
                })
            },
            function() {
                var a, b, c, d, e;
                b = oa.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = oa.createElement("select"), e = c.appendChild(oa.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", ca.getSetAttribute = "t" !== b.className, ca.style = /top/.test(d.getAttribute("style")), ca.hrefNormalized = "/a" === d.getAttribute("href"), ca.checkOn = !!a.value, ca.optSelected = e.selected, ca.enctype = !!oa.createElement("form").enctype, c.disabled = !0, ca.optDisabled = !e.disabled, a = oa.createElement("input"), a.setAttribute("value", ""), ca.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), ca.radioValue = "t" === a.value
            }();
        var ub = /\r/g;
        ea.fn.extend({
            val: function(a) {
                var b, c, d, e = this[0]; {
                    if (arguments.length) return d = ea.isFunction(a), this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, ea(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : ea.isArray(e) && (e = ea.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })), b = ea.valHooks[this.type] || ea.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                    if (e) return b = ea.valHooks[e.type] || ea.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ub, "") : null == c ? "" : c)
                }
            }
        }), ea.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = ea.find.attr(a, "value");
                        return null != b ? b : ea.trim(ea.text(a))
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                            if (c = d[i], (c.selected || i === e) && (ca.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !ea.nodeName(c.parentNode, "optgroup"))) {
                                if (b = ea(c).val(), f) return b;
                                g.push(b)
                            }
                        return g
                    },
                    set: function(a, b) {
                        for (var c, d, e = a.options, f = ea.makeArray(b), g = e.length; g--;)
                            if (d = e[g], ea.inArray(ea.valHooks.option.get(d), f) >= 0) try {
                                d.selected = c = !0
                            } catch (h) {
                                d.scrollHeight
                            } else d.selected = !1;
                        return c || (a.selectedIndex = -1), e
                    }
                }
            }
        }), ea.each(["radio", "checkbox"], function() {
            ea.valHooks[this] = {
                set: function(a, b) {
                    return ea.isArray(b) ? a.checked = ea.inArray(ea(a).val(), b) >= 0 : void 0
                }
            }, ca.checkOn || (ea.valHooks[this].get = function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        });
        var vb, wb, xb = ea.expr.attrHandle,
            yb = /^(?:checked|selected)$/i,
            zb = ca.getSetAttribute,
            Ab = ca.input;
        ea.fn.extend({
            attr: function(a, b) {
                return Da(this, ea.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    ea.removeAttr(this, a)
                })
            }
        }), ea.extend({
            attr: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === xa ? ea.prop(a, b, c) : (1 === f && ea.isXMLDoc(a) || (b = b.toLowerCase(), d = ea.attrHooks[b] || (ea.expr.match.bool.test(b) ? wb : vb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = ea.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void ea.removeAttr(a, b))
            },
            removeAttr: function(a, b) {
                var c, d, e = 0,
                    f = b && b.match(ta);
                if (f && 1 === a.nodeType)
                    for (; c = f[e++];) d = ea.propFix[c] || c, ea.expr.match.bool.test(c) ? Ab && zb || !yb.test(c) ? a[d] = !1 : a[ea.camelCase("default-" + c)] = a[d] = !1 : ea.attr(a, c, ""), a.removeAttribute(zb ? c : d)
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!ca.radioValue && "radio" === b && ea.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            }
        }), wb = {
            set: function(a, b, c) {
                return b === !1 ? ea.removeAttr(a, c) : Ab && zb || !yb.test(c) ? a.setAttribute(!zb && ea.propFix[c] || c, c) : a[ea.camelCase("default-" + c)] = a[c] = !0, c
            }
        }, ea.each(ea.expr.match.bool.source.match(/\w+/g), function(a, b) {
            var c = xb[b] || ea.find.attr;
            xb[b] = Ab && zb || !yb.test(b) ? function(a, b, d) {
                var e, f;
                return d || (f = xb[b], xb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, xb[b] = f), e
            } : function(a, b, c) {
                return c ? void 0 : a[ea.camelCase("default-" + b)] ? b.toLowerCase() : null
            }
        }), Ab && zb || (ea.attrHooks.value = {
            set: function(a, b, c) {
                return ea.nodeName(a, "input") ? void(a.defaultValue = b) : vb && vb.set(a, b, c)
            }
        }), zb || (vb = {
            set: function(a, b, c) {
                var d = a.getAttributeNode(c);
                return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
            }
        }, xb.id = xb.name = xb.coords = function(a, b, c) {
            var d;
            return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
        }, ea.valHooks.button = {
            get: function(a, b) {
                var c = a.getAttributeNode(b);
                return c && c.specified ? c.value : void 0
            },
            set: vb.set
        }, ea.attrHooks.contenteditable = {
            set: function(a, b, c) {
                vb.set(a, "" === b ? !1 : b, c)
            }
        }, ea.each(["width", "height"], function(a, b) {
            ea.attrHooks[b] = {
                set: function(a, c) {
                    return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
                }
            }
        })), ca.style || (ea.attrHooks.style = {
            get: function(a) {
                return a.style.cssText || void 0
            },
            set: function(a, b) {
                return a.style.cssText = b + ""
            }
        });
        var Bb = /^(?:input|select|textarea|button|object)$/i,
            Cb = /^(?:a|area)$/i;
        ea.fn.extend({
            prop: function(a, b) {
                return Da(this, ea.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return a = ea.propFix[a] || a, this.each(function() {
                    try {
                        this[a] = void 0, delete this[a]
                    } catch (b) {}
                })
            }
        }), ea.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(a, b, c) {
                var d, e, f, g = a.nodeType;
                if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !ea.isXMLDoc(a), f && (b = ea.propFix[b] || b, e = ea.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var b = ea.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : Bb.test(a.nodeName) || Cb.test(a.nodeName) && a.href ? 0 : -1
                    }
                }
            }
        }), ca.hrefNormalized || ea.each(["href", "src"], function(a, b) {
            ea.propHooks[b] = {
                get: function(a) {
                    return a.getAttribute(b, 4)
                }
            }
        }), ca.optSelected || (ea.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
            }
        }), ea.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ea.propFix[this.toLowerCase()] = this
        }), ca.enctype || (ea.propFix.enctype = "encoding");
        var Db = /[\t\r\n\f]/g;
        ea.fn.extend({
            addClass: function(a) {
                var b, c, d, e, f, g, h = 0,
                    i = this.length,
                    j = "string" == typeof a && a;
                if (ea.isFunction(a)) return this.each(function(b) {
                    ea(this).addClass(a.call(this, b, this.className))
                });
                if (j)
                    for (b = (a || "").match(ta) || []; i > h; h++)
                        if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : " ")) {
                            for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                            g = ea.trim(d), c.className !== g && (c.className = g)
                        }
                return this
            },
            removeClass: function(a) {
                var b, c, d, e, f, g, h = 0,
                    i = this.length,
                    j = 0 === arguments.length || "string" == typeof a && a;
                if (ea.isFunction(a)) return this.each(function(b) {
                    ea(this).removeClass(a.call(this, b, this.className))
                });
                if (j)
                    for (b = (a || "").match(ta) || []; i > h; h++)
                        if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : "")) {
                            for (f = 0; e = b[f++];)
                                for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                            g = a ? ea.trim(d) : "", c.className !== g && (c.className = g)
                        }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : ea.isFunction(a) ? this.each(function(c) {
                    ea(this).toggleClass(a.call(this, c, this.className, b), b)
                }) : this.each(function() {
                    if ("string" === c)
                        for (var b, d = 0, e = ea(this), f = a.match(ta) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    else(c === xa || "boolean" === c) && (this.className && ea._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ea._data(this, "__className__") || "")
                })
            },
            hasClass: function(a) {
                for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                    if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Db, " ").indexOf(b) >= 0) return !0;
                return !1
            }
        }), ea.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            ea.fn[b] = function(a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), ea.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        });
        var Eb = ea.now(),
            Fb = /\?/,
            Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        ea.parseJSON = function(b) {
            if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
            var c, d = null,
                e = ea.trim(b + "");
            return e && !ea.trim(e.replace(Gb, function(a, b, e, f) {
                return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
            })) ? Function("return " + e)() : ea.error("Invalid JSON: " + b)
        }, ea.parseXML = function(b) {
            var c, d;
            if (!b || "string" != typeof b) return null;
            try {
                a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
            } catch (e) {
                c = void 0
            }
            return c && c.documentElement && !c.getElementsByTagName("parsererror").length || ea.error("Invalid XML: " + b), c
        };
        var Hb, Ib, Jb = /#.*$/,
            Kb = /([?&])_=[^&]*/,
            Lb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Mb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Nb = /^(?:GET|HEAD)$/,
            Ob = /^\/\//,
            Pb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Qb = {},
            Rb = {},
            Sb = "*/".concat("*");
        try {
            Ib = location.href
        } catch (Tb) {
            Ib = oa.createElement("a"), Ib.href = "", Ib = Ib.href
        }
        Hb = Pb.exec(Ib.toLowerCase()) || [], ea.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ib,
                type: "GET",
                isLocal: Mb.test(Hb[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Sb,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ea.parseJSON,
                    "text xml": ea.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? P(P(a, ea.ajaxSettings), b) : P(ea.ajaxSettings, a)
            },
            ajaxPrefilter: N(Qb),
            ajaxTransport: N(Rb),
            ajax: function(a, b) {
                function c(a, b, c, d) {
                    var e, k, r, s, u, w = b;
                    2 !== t && (t = 2, h && clearTimeout(h), j = void 0, g = d || "", v.readyState = a > 0 ? 4 : 0, e = a >= 200 && 300 > a || 304 === a, c && (s = Q(l, v, c)), s = R(l, s, v, e), e ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (ea.lastModified[f] = u), u = v.getResponseHeader("etag"), u && (ea.etag[f] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, e = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", e ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, i && n.trigger(e ? "ajaxSuccess" : "ajaxError", [v, l, e ? k : r]), p.fireWith(m, [v, w]), i && (n.trigger("ajaxComplete", [v, l]), --ea.active || ea.event.trigger("ajaxStop")))
                }
                "object" == typeof a && (b = a, a = void 0), b = b || {};
                var d, e, f, g, h, i, j, k, l = ea.ajaxSetup({}, b),
                    m = l.context || l,
                    n = l.context && (m.nodeType || m.jquery) ? ea(m) : ea.event,
                    o = ea.Deferred(),
                    p = ea.Callbacks("once memory"),
                    q = l.statusCode || {},
                    r = {},
                    s = {},
                    t = 0,
                    u = "canceled",
                    v = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === t) {
                                if (!k)
                                    for (k = {}; b = Lb.exec(g);) k[b[1].toLowerCase()] = b[2];
                                b = k[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() {
                            return 2 === t ? g : null
                        },
                        setRequestHeader: function(a, b) {
                            var c = a.toLowerCase();
                            return t || (a = s[c] = s[c] || a, r[a] = b), this
                        },
                        overrideMimeType: function(a) {
                            return t || (l.mimeType = a), this
                        },
                        statusCode: function(a) {
                            var b;
                            if (a)
                                if (2 > t)
                                    for (b in a) q[b] = [q[b], a[b]];
                                else v.always(a[v.status]);
                            return this
                        },
                        abort: function(a) {
                            var b = a || u;
                            return j && j.abort(b), c(0, b), this
                        }
                    };
                if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || Ib) + "").replace(Jb, "").replace(Ob, Hb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = ea.trim(l.dataType || "*").toLowerCase().match(ta) || [""], null == l.crossDomain && (d = Pb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Hb[1] && d[2] === Hb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Hb[3] || ("http:" === Hb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = ea.param(l.data, l.traditional)), O(Qb, l, b, v), 2 === t) return v;
                i = ea.event && l.global, i && 0 === ea.active++ && ea.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Nb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Kb.test(f) ? f.replace(Kb, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (ea.lastModified[f] && v.setRequestHeader("If-Modified-Since", ea.lastModified[f]), ea.etag[f] && v.setRequestHeader("If-None-Match", ea.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Sb + "; q=0.01" : "") : l.accepts["*"]);
                for (e in l.headers) v.setRequestHeader(e, l.headers[e]);
                if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
                u = "abort";
                for (e in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) v[e](l[e]);
                if (j = O(Rb, l, b, v)) {
                    v.readyState = 1, i && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                        v.abort("timeout")
                    }, l.timeout));
                    try {
                        t = 1, j.send(r, c)
                    } catch (w) {
                        if (!(2 > t)) throw w;
                        c(-1, w)
                    }
                } else c(-1, "No Transport");
                return v
            },
            getJSON: function(a, b, c) {
                return ea.get(a, b, c, "json")
            },
            getScript: function(a, b) {
                return ea.get(a, void 0, b, "script")
            }
        }), ea.each(["get", "post"], function(a, b) {
            ea[b] = function(a, c, d, e) {
                return ea.isFunction(c) && (e = e || d, d = c, c = void 0), ea.ajax({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d
                })
            }
        }), ea._evalUrl = function(a) {
            return ea.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, ea.fn.extend({
            wrapAll: function(a) {
                if (ea.isFunction(a)) return this.each(function(b) {
                    ea(this).wrapAll(a.call(this, b))
                });
                if (this[0]) {
                    var b = ea(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                        for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return ea.isFunction(a) ? this.each(function(b) {
                    ea(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = ea(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = ea.isFunction(a);
                return this.each(function(c) {
                    ea(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ea.nodeName(this, "body") || ea(this).replaceWith(this.childNodes)
                }).end()
            }
        }), ea.expr.filters.hidden = function(a) {
            return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !ca.reliableHiddenOffsets() && "none" === (a.style && a.style.display || ea.css(a, "display"))
        }, ea.expr.filters.visible = function(a) {
            return !ea.expr.filters.hidden(a)
        };
        var Ub = /%20/g,
            Vb = /\[\]$/,
            Wb = /\r?\n/g,
            Xb = /^(?:submit|button|image|reset|file)$/i,
            Yb = /^(?:input|select|textarea|keygen)/i;
        ea.param = function(a, b) {
            var c, d = [],
                e = function(a, b) {
                    b = ea.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            if (void 0 === b && (b = ea.ajaxSettings && ea.ajaxSettings.traditional), ea.isArray(a) || a.jquery && !ea.isPlainObject(a)) ea.each(a, function() {
                e(this.name, this.value)
            });
            else
                for (c in a) S(c, a[c], b, e);
            return d.join("&").replace(Ub, "+")
        }, ea.fn.extend({
            serialize: function() {
                return ea.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = ea.prop(this, "elements");
                    return a ? ea.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !ea(this).is(":disabled") && Yb.test(this.nodeName) && !Xb.test(a) && (this.checked || !Ea.test(a))
                }).map(function(a, b) {
                    var c = ea(this).val();
                    return null == c ? null : ea.isArray(c) ? ea.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(Wb, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(Wb, "\r\n")
                    }
                }).get()
            }
        }), ea.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && T() || U()
        } : T;
        var Zb = 0,
            $b = {},
            _b = ea.ajaxSettings.xhr();
        a.attachEvent && a.attachEvent("onunload", function() {
            for (var a in $b) $b[a](void 0, !0)
        }), ca.cors = !!_b && "withCredentials" in _b, _b = ca.ajax = !!_b, _b && ea.ajaxTransport(function(a) {
            if (!a.crossDomain || ca.cors) {
                var b;
                return {
                    send: function(c, d) {
                        var e, f = a.xhr(),
                            g = ++Zb;
                        if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                            for (e in a.xhrFields) f[e] = a.xhrFields[e];
                        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                        for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                        f.send(a.hasContent && a.data || null), b = function(c, e) {
                            var h, i, j;
                            if (b && (e || 4 === f.readyState))
                                if (delete $b[g], b = void 0, f.onreadystatechange = ea.noop, e) 4 !== f.readyState && f.abort();
                                else {
                                    j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                    try {
                                        i = f.statusText
                                    } catch (k) {
                                        i = ""
                                    }
                                    h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                                }
                            j && d(h, i, j, f.getAllResponseHeaders())
                        }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = $b[g] = b : b()
                    },
                    abort: function() {
                        b && b(void 0, !0)
                    }
                }
            }
        }), ea.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(a) {
                    return ea.globalEval(a), a
                }
            }
        }), ea.ajaxPrefilter("script", function(a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
        }), ea.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c = oa.head || ea("head")[0] || oa.documentElement;
                return {
                    send: function(d, e) {
                        b = oa.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                        }, c.insertBefore(b, c.firstChild)
                    },
                    abort: function() {
                        b && b.onload(void 0, !0)
                    }
                }
            }
        });
        var ac = [],
            bc = /(=)\?(?=&|$)|\?\?/;
        ea.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = ac.pop() || ea.expando + "_" + Eb++;
                return this[a] = !0, a
            }
        }), ea.ajaxPrefilter("json jsonp", function(b, c, d) {
            var e, f, g, h = b.jsonp !== !1 && (bc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bc.test(b.data) && "data");
            return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = ea.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(bc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
                return g || ea.error(e + " was not called"), g[0]
            }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
                g = arguments
            }, d.always(function() {
                a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ac.push(e)), g && ea.isFunction(f) && f(g[0]), g = f = void 0
            }), "script") : void 0
        }), ea.parseHTML = function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || oa;
            var d = la.exec(a),
                e = !c && [];
            return d ? [b.createElement(d[1])] : (d = ea.buildFragment([a], b, e), e && e.length && ea(e).remove(), ea.merge([], d.childNodes))
        };
        var cc = ea.fn.load;
        ea.fn.load = function(a, b, c) {
            if ("string" != typeof a && cc) return cc.apply(this, arguments);
            var d, e, f, g = this,
                h = a.indexOf(" ");
            return h >= 0 && (d = ea.trim(a.slice(h, a.length)), a = a.slice(0, h)), ea.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && ea.ajax({
                url: a,
                type: f,
                dataType: "html",
                data: b
            }).done(function(a) {
                e = arguments, g.html(d ? ea("<div>").append(ea.parseHTML(a)).find(d) : a)
            }).complete(c && function(a, b) {
                g.each(c, e || [a.responseText, b, a])
            }), this
        }, ea.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
            ea.fn[b] = function(a) {
                return this.on(b, a)
            }
        }), ea.expr.filters.animated = function(a) {
            return ea.grep(ea.timers, function(b) {
                return a === b.elem
            }).length
        };
        var dc = a.document.documentElement;
        ea.offset = {
            setOffset: function(a, b, c) {
                var d, e, f, g, h, i, j, k = ea.css(a, "position"),
                    l = ea(a),
                    m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = ea.css(a, "top"), i = ea.css(a, "left"), j = ("absolute" === k || "fixed" === k) && ea.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), ea.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, ea.fn.extend({
            offset: function(a) {
                if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                    ea.offset.setOffset(this, a, b)
                });
                var b, c, d = {
                        top: 0,
                        left: 0
                    },
                    e = this[0],
                    f = e && e.ownerDocument;
                if (f) return b = f.documentElement, ea.contains(b, e) ? (typeof e.getBoundingClientRect !== xa && (d = e.getBoundingClientRect()), c = V(f), {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
            },
            position: function() {
                if (this[0]) {
                    var a, b, c = {
                            top: 0,
                            left: 0
                        },
                        d = this[0];
                    return "fixed" === ea.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), ea.nodeName(a[0], "html") || (c = a.offset()), c.top += ea.css(a[0], "borderTopWidth", !0), c.left += ea.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - c.top - ea.css(d, "marginTop", !0),
                        left: b.left - c.left - ea.css(d, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent || dc; a && !ea.nodeName(a, "html") && "static" === ea.css(a, "position");) a = a.offsetParent;
                    return a || dc
                })
            }
        }), ea.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(a, b) {
            var c = /Y/.test(b);
            ea.fn[a] = function(d) {
                return Da(this, function(a, d, e) {
                    var f = V(a);
                    return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? ea(f).scrollLeft() : e, c ? e : ea(f).scrollTop()) : a[d] = e)
                }, a, d, arguments.length, null)
            }
        }), ea.each(["top", "left"], function(a, b) {
            ea.cssHooks[b] = A(ca.pixelPosition, function(a, c) {
                return c ? (c = bb(a, b), db.test(c) ? ea(a).position()[b] + "px" : c) : void 0
            })
        }), ea.each({
            Height: "height",
            Width: "width"
        }, function(a, b) {
            ea.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function(c, d) {
                ea.fn[d] = function(d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d),
                        g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return Da(this, function(b, c, d) {
                        var e;
                        return ea.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? ea.css(b, c, g) : ea.style(b, c, d, g)
                    }, b, f ? d : void 0, f, null)
                }
            })
        }), ea.fn.size = function() {
            return this.length
        }, ea.fn.andSelf = ea.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return ea
        });
        var ec = a.jQuery,
            fc = a.$;
        return ea.noConflict = function(b) {
            return a.$ === ea && (a.$ = fc), b && a.jQuery === ea && (a.jQuery = ec), ea
        }, typeof b === xa && (a.jQuery = a.$ = ea), ea
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function(b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.3.5", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.5", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function(a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
            k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this
    };
    var e = function(c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.5", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0
    }, d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function() {
            var d = a(this),
                e = b(d),
                f = {
                    relatedTarget: this
                };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f))))
        }))
    }

    function d(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.3.5", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e),
                g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }, g.prototype.keydown = function(c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d),
                    g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";

    function b(b, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function(b) {
        var d = this,
            e = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function(b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function(b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.isInStateTrue = function() {
        for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide())
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;
            if (j) {
                var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = d ? {
                top: 0,
                left: 0
            } : b.offset(),
            g = {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
            },
            h = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function(a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function() {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function() {
        this.enabled = !0
    }, c.prototype.disable = function() {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.5", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.5", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function() {
        var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", {
                    relatedTarget: b[0]
                }),
                g = a.Event("show.bs.tab", {
                    relatedTarget: e[0]
                });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }
        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this
    };
    var e = function(c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.5", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery),
function(a) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
    else if ("function" == typeof define && define.amd) define([], a);
    else {
        var b;
        b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.Quill = a()
    }
}(function() {
    var a;
    return function b(a, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!a[g]) {
                    var i = "function" == typeof require && require;
                    if (!h && i) return i(g, !0);
                    if (f) return f(g, !0);
                    var j = new Error("Cannot find module '" + g + "'");
                    throw j.code = "MODULE_NOT_FOUND", j
                }
                var k = c[g] = {
                    exports: {}
                };
                a[g][0].call(k.exports, function(b) {
                    var c = a[g][1][b];
                    return e(c ? c : b)
                }, k, k.exports, b, a, c, d)
            }
            return c[g].exports
        }
        for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
        return e
    }({
        1: [function(b, c, d) {
            (function(b) {
                (function() {
                    function e(a, b, c) {
                        for (var d = a.length, e = c ? d : -1; c ? e-- : ++e < d;)
                            if (b(a[e], e, a)) return e;
                        return -1
                    }

                    function f(a, b, c) {
                        if (b !== b) return i(a, c);
                        for (var d = c - 1, e = a.length; ++d < e;)
                            if (a[d] === b) return d;
                        return -1
                    }

                    function g(a) {
                        return "function" == typeof a || !1
                    }

                    function h(a) {
                        return "string" == typeof a ? a : null == a ? "" : a + ""
                    }

                    function i(a, b, c) {
                        for (var d = a.length, e = b + (c ? 0 : -1); c ? e-- : ++e < d;) {
                            var f = a[e];
                            if (f !== f) return e
                        }
                        return -1
                    }

                    function j(a) {
                        return !!a && "object" == typeof a
                    }

                    function k(a, b) {
                        for (var c = -1, d = a.length, e = -1, f = []; ++c < d;) a[c] === b && (a[c] = yb, f[++e] = c);
                        return f
                    }

                    function l() {}

                    function m() {}

                    function n(a) {
                        this.__wrapped__ = a, this.__actions__ = null, this.__dir__ = 1, this.__dropCount__ = 0, this.__filtered__ = !1, this.__iteratees__ = null, this.__takeCount__ = Ic, this.__views__ = null
                    }

                    function o(a) {
                        var b = a ? a.length : 0;
                        for (this.data = {
                                hash: Cc(null),
                                set: new yc
                            }; b--;) this.push(a[b])
                    }

                    function p(a, b) {
                        var c = a.data,
                            d = "string" == typeof b || Wa(b) ? c.set.has(b) : c.hash[b];
                        return d ? 0 : -1
                    }

                    function q(a) {
                        var b = this.data;
                        "string" == typeof a || Wa(a) ? b.set.add(a) : b.hash[a] = !0
                    }

                    function r(a, b) {
                        var c = -1,
                            d = a.length;
                        for (b || (b = Array(d)); ++c < d;) b[c] = a[c];
                        return b
                    }

                    function s(a, b) {
                        for (var c = -1, d = a.length; ++c < d && b(a[c], c, a) !== !1;);
                        return a
                    }

                    function t(a, b) {
                        for (var c = -1, d = a.length; ++c < d;)
                            if (!b(a[c], c, a)) return !1;
                        return !0
                    }

                    function u(a, b) {
                        for (var c = -1, d = a.length, e = Array(d); ++c < d;) e[c] = b(a[c], c, a);
                        return e
                    }

                    function v(a, b, c, d) {
                        var e = -1,
                            f = a.length;
                        for (d && f && (c = a[++e]); ++e < f;) c = b(c, a[e], e, a);
                        return c
                    }

                    function w(a, b) {
                        for (var c = -1, d = a.length; ++c < d;)
                            if (b(a[c], c, a)) return !0;
                        return !1
                    }

                    function x(a, b) {
                        return a === kb ? b : a
                    }

                    function y(a, b, c) {
                        for (var d = -1, e = md(b), f = e.length; ++d < f;) {
                            var g = e[d],
                                h = a[g],
                                i = c(h, b[g], g, a, b);
                            (i === i ? i === h : h !== h) && (h !== kb || g in a) || (a[g] = i)
                        }
                        return a
                    }

                    function z(a, b) {
                        return null == b ? a : A(b, md(b), a)
                    }

                    function A(a, b, c) {
                        c || (c = {});
                        for (var d = -1, e = b.length; ++d < e;) {
                            var f = b[d];
                            c[f] = a[f]
                        }
                        return c
                    }

                    function B(a, b, c) {
                        var d = typeof a;
                        return "function" == d ? b === kb ? a : Y(a, b, c) : null == a ? fb : "object" == d ? P(a) : b === kb ? ib(a) : Q(a, b)
                    }

                    function C(a, b, c, d, e, f, g) {
                        var h;
                        if (c && (h = e ? c(a, d, e) : c(a)), h !== kb) return h;
                        if (!Wa(a)) return a;
                        var i = hd(a);
                        if (i) {
                            if (h = ua(a), !b) return r(a, h)
                        } else {
                            var j = sc.call(a),
                                k = j == Eb;
                            if (j != Hb && j != zb && (!k || e)) return ec[j] ? wa(a, j, b) : e ? a : {};
                            if (h = va(k ? {} : a), !b) return z(h, a)
                        }
                        f || (f = []), g || (g = []);
                        for (var l = f.length; l--;)
                            if (f[l] == a) return g[l];
                        return f.push(a), g.push(h), (i ? s : J)(a, function(d, e) {
                            h[e] = C(d, b, c, e, a, f, g)
                        }), h
                    }

                    function D(a, b, c) {
                        if ("function" != typeof a) throw new TypeError(xb);
                        return setTimeout(function() {
                            a.apply(kb, c)
                        }, b)
                    }

                    function E(a, b) {
                        var c = a ? a.length : 0,
                            d = [];
                        if (!c) return d;
                        var e = -1,
                            g = ra(),
                            h = g == f,
                            i = h && b.length >= 200 ? Vc(b) : null,
                            j = b.length;
                        i && (g = p, h = !1, b = i);
                        a: for (; ++e < c;) {
                            var k = a[e];
                            if (h && k === k) {
                                for (var l = j; l--;)
                                    if (b[l] === k) continue a;
                                d.push(k)
                            } else g(b, k, 0) < 0 && d.push(k)
                        }
                        return d
                    }

                    function F(a, b) {
                        var c = !0;
                        return Sc(a, function(a, d, e) {
                            return c = !!b(a, d, e)
                        }), c
                    }

                    function G(a, b, c, d) {
                        var e;
                        return c(a, function(a, c, f) {
                            return b(a, c, f) ? (e = d ? c : a, !1) : void 0
                        }), e
                    }

                    function H(a, b, c) {
                        for (var d = -1, e = a.length, f = -1, g = []; ++d < e;) {
                            var h = a[d];
                            if (j(h) && ya(h) && (c || hd(h) || Ta(h))) {
                                b && (h = H(h, b, c));
                                for (var i = -1, k = h.length; ++i < k;) g[++f] = h[i]
                            } else c || (g[++f] = h)
                        }
                        return g
                    }

                    function I(a, b) {
                        return Tc(a, b, _a)
                    }

                    function J(a, b) {
                        return Tc(a, b, md)
                    }

                    function K(a, b, c) {
                        if (null != a) {
                            c !== kb && c in La(a) && (b = [c]);
                            for (var d = 0, e = b.length; null != a && e > d;) a = a[b[d++]];
                            return d && d == e ? a : kb
                        }
                    }

                    function L(a, b, c, d, e, f) {
                        return a === b ? !0 : null == a || null == b || !Wa(a) && !j(b) ? a !== a && b !== b : M(a, b, L, c, d, e, f)
                    }

                    function M(a, b, c, d, e, f, g) {
                        var h = hd(a),
                            i = hd(b),
                            j = Ab,
                            k = Ab;
                        h || (j = sc.call(a), j == zb ? j = Hb : j != Hb && (h = $a(a))), i || (k = sc.call(b), k == zb ? k = Hb : k != Hb && (i = $a(b)));
                        var l = j == Hb,
                            m = k == Hb,
                            n = j == k;
                        if (n && !h && !l) return na(a, b, j);
                        if (!e) {
                            var o = l && qc.call(a, "__wrapped__"),
                                p = m && qc.call(b, "__wrapped__");
                            if (o || p) return c(o ? a.value() : a, p ? b.value() : b, d, e, f, g)
                        }
                        if (!n) return !1;
                        f || (f = []), g || (g = []);
                        for (var q = f.length; q--;)
                            if (f[q] == a) return g[q] == b;
                        f.push(a), g.push(b);
                        var r = (h ? ma : oa)(a, b, c, d, e, f, g);
                        return f.pop(), g.pop(), r
                    }

                    function N(a, b, c) {
                        var d = b.length,
                            e = d,
                            f = !c;
                        if (null == a) return !e;
                        for (a = La(a); d--;) {
                            var g = b[d];
                            if (f && g[2] ? g[1] !== a[g[0]] : !(g[0] in a)) return !1
                        }
                        for (; ++d < e;) {
                            g = b[d];
                            var h = g[0],
                                i = a[h],
                                j = g[1];
                            if (f && g[2]) {
                                if (i === kb && !(h in a)) return !1
                            } else {
                                var k = c ? c(i, j, h) : kb;
                                if (!(k === kb ? L(j, i, c, !0) : k)) return !1
                            }
                        }
                        return !0
                    }

                    function O(a, b) {
                        var c = -1,
                            d = ya(a) ? Array(a.length) : [];
                        return Sc(a, function(a, e, f) {
                            d[++c] = b(a, e, f)
                        }), d
                    }

                    function P(a) {
                        var b = sa(a);
                        if (1 == b.length && b[0][2]) {
                            var c = b[0][0],
                                d = b[0][1];
                            return function(a) {
                                return null == a ? !1 : a[c] === d && (d !== kb || c in La(a))
                            }
                        }
                        return function(a) {
                            return N(a, b)
                        }
                    }

                    function Q(a, b) {
                        var c = hd(a),
                            d = Ba(a) && Ea(b),
                            e = a + "";
                        return a = Ma(a),
                            function(f) {
                                if (null == f) return !1;
                                var g = e;
                                if (f = La(f), (c || !d) && !(g in f)) {
                                    if (f = 1 == a.length ? f : K(f, U(a, 0, -1)), null == f) return !1;
                                    g = Oa(a), f = La(f)
                                }
                                return f[g] === b ? b !== kb || g in f : L(b, f[g], kb, !0)
                            }
                    }

                    function R(a) {
                        return function(b) {
                            return null == b ? kb : b[a]
                        }
                    }

                    function S(a) {
                        var b = a + "";
                        return a = Ma(a),
                            function(c) {
                                return K(c, a, b)
                            }
                    }

                    function T(a, b, c, d, e) {
                        return e(a, function(a, e, f) {
                            c = d ? (d = !1, a) : b(c, a, e, f)
                        }), c
                    }

                    function U(a, b, c) {
                        var d = -1,
                            e = a.length;
                        b = null == b ? 0 : +b || 0, 0 > b && (b = -b > e ? 0 : e + b), c = c === kb || c > e ? e : +c || 0, 0 > c && (c += e), e = b > c ? 0 : c - b >>> 0, b >>>= 0;
                        for (var f = Array(e); ++d < e;) f[d] = a[d + b];
                        return f
                    }

                    function V(a, b) {
                        for (var c = -1, d = b.length, e = Array(d); ++c < d;) e[c] = a[b[c]];
                        return e
                    }

                    function W(a, b, c) {
                        var d = 0,
                            e = a ? a.length : d;
                        if ("number" == typeof b && b === b && Lc >= e) {
                            for (; e > d;) {
                                var f = d + e >>> 1,
                                    g = a[f];
                                (c ? b >= g : b > g) && null !== g ? d = f + 1 : e = f
                            }
                            return e
                        }
                        return X(a, b, fb, c)
                    }

                    function X(a, b, c, d) {
                        b = c(b);
                        for (var e = 0, f = a ? a.length : 0, g = b !== b, h = null === b, i = b === kb; f > e;) {
                            var j = wc((e + f) / 2),
                                k = c(a[j]),
                                l = k !== kb,
                                m = k === k;
                            if (g) var n = m || d;
                            else n = h ? m && l && (d || null != k) : i ? m && (d || l) : null == k ? !1 : d ? b >= k : b > k;
                            n ? e = j + 1 : f = j
                        }
                        return Gc(f, Kc)
                    }

                    function Y(a, b, c) {
                        if ("function" != typeof a) return fb;
                        if (b === kb) return a;
                        switch (c) {
                            case 1:
                                return function(c) {
                                    return a.call(b, c)
                                };
                            case 3:
                                return function(c, d, e) {
                                    return a.call(b, c, d, e)
                                };
                            case 4:
                                return function(c, d, e, f) {
                                    return a.call(b, c, d, e, f)
                                };
                            case 5:
                                return function(c, d, e, f, g) {
                                    return a.call(b, c, d, e, f, g)
                                }
                        }
                        return function() {
                            return a.apply(b, arguments)
                        }
                    }

                    function Z(a) {
                        return vc.call(a, 0)
                    }

                    function $(a, b, c) {
                        for (var d = c.length, e = -1, f = Fc(a.length - d, 0), g = -1, h = b.length, i = Array(f + h); ++g < h;) i[g] = b[g];
                        for (; ++e < d;) i[c[e]] = a[e];
                        for (; f--;) i[g++] = a[e++];
                        return i
                    }

                    function _(a, b, c) {
                        for (var d = -1, e = c.length, f = -1, g = Fc(a.length - e, 0), h = -1, i = b.length, j = Array(g + i); ++f < g;) j[f] = a[f];
                        for (var k = f; ++h < i;) j[k + h] = b[h];
                        for (; ++d < e;) j[k + c[d]] = a[f++];
                        return j
                    }

                    function aa(a) {
                        return Ra(function(b, c) {
                            var d = -1,
                                e = null == b ? 0 : c.length,
                                f = e > 2 ? c[e - 2] : kb,
                                g = e > 2 ? c[2] : kb,
                                h = e > 1 ? c[e - 1] : kb;
                            for ("function" == typeof f ? (f = Y(f, h, 5), e -= 2) : (f = "function" == typeof h ? h : kb, e -= f ? 1 : 0), g && Aa(c[0], c[1], g) && (f = 3 > e ? kb : f, e = 1); ++d < e;) {
                                var i = c[d];
                                i && a(b, i, f)
                            }
                            return b
                        })
                    }

                    function ba(a, b) {
                        return function(c, d) {
                            var e = c ? Xc(c) : 0;
                            if (!Da(e)) return a(c, d);
                            for (var f = b ? e : -1, g = La(c);
                                (b ? f-- : ++f < e) && d(g[f], f, g) !== !1;);
                            return c
                        }
                    }

                    function ca(a) {
                        return function(b, c, d) {
                            for (var e = La(b), f = d(b), g = f.length, h = a ? g : -1; a ? h-- : ++h < g;) {
                                var i = f[h];
                                if (c(e[i], i, e) === !1) break
                            }
                            return b
                        }
                    }

                    function da(a, b) {
                        function c() {
                            var e = this && this !== mc && this instanceof c ? d : a;
                            return e.apply(b, arguments)
                        }
                        var d = ea(a);
                        return c
                    }

                    function ea(a) {
                        return function() {
                            var b = arguments;
                            switch (b.length) {
                                case 0:
                                    return new a;
                                case 1:
                                    return new a(b[0]);
                                case 2:
                                    return new a(b[0], b[1]);
                                case 3:
                                    return new a(b[0], b[1], b[2]);
                                case 4:
                                    return new a(b[0], b[1], b[2], b[3]);
                                case 5:
                                    return new a(b[0], b[1], b[2], b[3], b[4])
                            }
                            var c = Rc(a.prototype),
                                d = a.apply(c, b);
                            return Wa(d) ? d : c
                        }
                    }

                    function fa(a, b) {
                        return function(c, d, f) {
                            if (d = pa(d, f, 3), hd(c)) {
                                var g = e(c, d, b);
                                return g > -1 ? c[g] : kb
                            }
                            return G(c, d, a)
                        }
                    }

                    function ga(a, b) {
                        return function(c, d, e) {
                            return "function" == typeof d && e === kb && hd(c) ? a(c, d) : b(c, Y(d, e, 3))
                        }
                    }

                    function ha(a) {
                        var b = Ra(function(c, d) {
                            var e = k(d, b.placeholder);
                            return la(c, a, null, d, e)
                        });
                        return b
                    }

                    function ia(a, b) {
                        return function(c, d, e, f) {
                            var g = arguments.length < 3;
                            return "function" == typeof d && f === kb && hd(c) ? a(c, d, e, g) : T(c, pa(d, f, 4), e, g, b)
                        }
                    }

                    function ja(a, b, c, d, e, f, g, h, i, j) {
                        function l() {
                            for (var u = arguments.length, v = u, w = Array(u); v--;) w[v] = arguments[v];
                            if (d && (w = $(w, d, e)), f && (w = _(w, f, g)), p || s) {
                                var x = l.placeholder,
                                    y = k(w, x);
                                if (u -= y.length, j > u) {
                                    var z = h ? r(h) : null,
                                        A = Fc(j - u, 0),
                                        B = p ? y : null,
                                        C = p ? null : y,
                                        D = p ? w : null,
                                        E = p ? null : w;
                                    b |= p ? rb : sb, b &= ~(p ? sb : rb), q || (b &= ~(mb | nb));
                                    var F = [a, b, c, D, B, E, C, z, i, A],
                                        G = ja.apply(kb, F);
                                    return Ca(a) && Yc(G, F), G.placeholder = x, G
                                }
                            }
                            var H = n ? c : this,
                                I = o ? H[a] : a;
                            return h && (w = Ia(w, h)), m && i < w.length && (w.length = i), this && this !== mc && this instanceof l && (I = t || ea(a)), I.apply(H, w)
                        }
                        var m = b & tb,
                            n = b & mb,
                            o = b & nb,
                            p = b & pb,
                            q = b & ob,
                            s = b & qb,
                            t = o ? null : ea(a);
                        return l
                    }

                    function ka(a, b, c, d) {
                        function e() {
                            for (var b = -1, h = arguments.length, i = -1, j = d.length, k = Array(h + j); ++i < j;) k[i] = d[i];
                            for (; h--;) k[i++] = arguments[++b];
                            var l = this && this !== mc && this instanceof e ? g : a;
                            return l.apply(f ? c : this, k)
                        }
                        var f = b & mb,
                            g = ea(a);
                        return e
                    }

                    function la(a, b, c, d, e, f, g, h) {
                        var i = b & nb;
                        if (!i && "function" != typeof a) throw new TypeError(xb);
                        var j = d ? d.length : 0;
                        if (j || (b &= ~(rb | sb), d = e = null), j -= e ? e.length : 0, b & sb) {
                            var k = d,
                                l = e;
                            d = e = null
                        }
                        var m = i ? null : Wc(a),
                            n = [a, b, c, d, e, k, l, f, g, h];
                        if (m && (Fa(n, m), b = n[1], h = n[9]), n[9] = null == h ? i ? 0 : a.length : Fc(h - j, 0) || 0, b == mb) var o = da(n[0], n[2]);
                        else o = b != rb && b != (mb | rb) || n[4].length ? ja.apply(kb, n) : ka.apply(kb, n);
                        var p = m ? Uc : Yc;
                        return p(o, n)
                    }

                    function ma(a, b, c, d, e, f, g) {
                        var h = -1,
                            i = a.length,
                            j = b.length;
                        if (i != j && !(e && j > i)) return !1;
                        for (; ++h < i;) {
                            var k = a[h],
                                l = b[h],
                                m = d ? d(e ? l : k, e ? k : l, h) : kb;
                            if (m !== kb) {
                                if (m) continue;
                                return !1
                            }
                            if (e) {
                                if (!w(b, function(a) {
                                        return k === a || c(k, a, d, e, f, g)
                                    })) return !1
                            } else if (k !== l && !c(k, l, d, e, f, g)) return !1
                        }
                        return !0
                    }

                    function na(a, b, c) {
                        switch (c) {
                            case Bb:
                            case Cb:
                                return +a == +b;
                            case Db:
                                return a.name == b.name && a.message == b.message;
                            case Gb:
                                return a != +a ? b != +b : a == +b;
                            case Ib:
                            case Kb:
                                return a == b + ""
                        }
                        return !1
                    }

                    function oa(a, b, c, d, e, f, g) {
                        var h = md(a),
                            i = h.length,
                            j = md(b),
                            k = j.length;
                        if (i != k && !e) return !1;
                        for (var l = i; l--;) {
                            var m = h[l];
                            if (!(e ? m in b : qc.call(b, m))) return !1
                        }
                        for (var n = e; ++l < i;) {
                            m = h[l];
                            var o = a[m],
                                p = b[m],
                                q = d ? d(e ? p : o, e ? o : p, m) : kb;
                            if (!(q === kb ? c(o, p, d, e, f, g) : q)) return !1;
                            n || (n = "constructor" == m)
                        }
                        if (!n) {
                            var r = a.constructor,
                                s = b.constructor;
                            if (r != s && "constructor" in a && "constructor" in b && !("function" == typeof r && r instanceof r && "function" == typeof s && s instanceof s)) return !1
                        }
                        return !0
                    }

                    function pa(a, b, c) {
                        var d = l.callback || db;
                        return d = d === db ? B : d, c ? d(a, b, c) : d
                    }

                    function qa(a) {
                        for (var b = a.name, c = Pc[b], d = c ? c.length : 0; d--;) {
                            var e = c[d],
                                f = e.func;
                            if (null == f || f == a) return e.name
                        }
                        return b
                    }

                    function ra(a, b, c) {
                        var d = l.indexOf || Na;
                        return d = d === Na ? f : d, a ? d(a, b, c) : d
                    }

                    function sa(a) {
                        for (var b = ab(a), c = b.length; c--;) b[c][2] = Ea(b[c][1]);
                        return b
                    }

                    function ta(a, b) {
                        var c = null == a ? kb : a[b];
                        return Xa(c) ? c : kb
                    }

                    function ua(a) {
                        var b = a.length,
                            c = new a.constructor(b);
                        return b && "string" == typeof a[0] && qc.call(a, "index") && (c.index = a.index, c.input = a.input), c
                    }

                    function va(a) {
                        var b = a.constructor;
                        return "function" == typeof b && b instanceof b || (b = Object), new b
                    }

                    function wa(a, b, c) {
                        var d = a.constructor;
                        switch (b) {
                            case Mb:
                                return Z(a);
                            case Bb:
                            case Cb:
                                return new d(+a);
                            case Nb:
                            case Ob:
                            case Pb:
                            case Qb:
                            case Rb:
                            case Sb:
                            case Tb:
                            case Ub:
                            case Vb:
                                var e = a.buffer;
                                return new d(c ? Z(e) : e, a.byteOffset, a.length);
                            case Gb:
                            case Kb:
                                return new d(a);
                            case Ib:
                                var f = new d(a.source, ac.exec(a));
                                f.lastIndex = a.lastIndex
                        }
                        return f
                    }

                    function xa(a, b, c) {
                        null == a || Ba(b, a) || (b = Ma(b), a = 1 == b.length ? a : K(a, U(b, 0, -1)), b = Oa(b));
                        var d = null == a ? a : a[b];
                        return null == d ? kb : d.apply(a, c)
                    }

                    function ya(a) {
                        return null != a && Da(Xc(a))
                    }

                    function za(a, b) {
                        return a = "number" == typeof a || cc.test(a) ? +a : -1, b = null == b ? Nc : b, a > -1 && a % 1 == 0 && b > a
                    }

                    function Aa(a, b, c) {
                        if (!Wa(c)) return !1;
                        var d = typeof b;
                        if ("number" == d ? ya(c) && za(b, c.length) : "string" == d && b in c) {
                            var e = c[b];
                            return a === a ? a === e : e !== e
                        }
                        return !1
                    }

                    function Ba(a, b) {
                        var c = typeof a;
                        if ("string" == c && Xb.test(a) || "number" == c) return !0;
                        if (hd(a)) return !1;
                        var d = !Wb.test(a);
                        return d || null != b && a in La(b)
                    }

                    function Ca(a) {
                        var b = qa(a);
                        if (!(b in n.prototype)) return !1;
                        var c = l[b];
                        if (a === c) return !0;
                        var d = Wc(c);
                        return !!d && a === d[0]
                    }

                    function Da(a) {
                        return "number" == typeof a && a > -1 && a % 1 == 0 && Nc >= a
                    }

                    function Ea(a) {
                        return a === a && !Wa(a)
                    }

                    function Fa(a, b) {
                        var c = a[1],
                            d = b[1],
                            e = c | d,
                            f = tb > e,
                            g = d == tb && c == pb || d == tb && c == ub && a[7].length <= b[8] || d == (tb | ub) && c == pb;
                        if (!f && !g) return a;
                        d & mb && (a[2] = b[2], e |= c & mb ? 0 : ob);
                        var h = b[3];
                        if (h) {
                            var i = a[3];
                            a[3] = i ? $(i, h, b[4]) : r(h), a[4] = i ? k(a[3], yb) : r(b[4])
                        }
                        return h = b[5], h && (i = a[5], a[5] = i ? _(i, h, b[6]) : r(h), a[6] = i ? k(a[5], yb) : r(b[6])), h = b[7], h && (a[7] = r(h)), d & tb && (a[8] = null == a[8] ? b[8] : Gc(a[8], b[8])), null == a[9] && (a[9] = b[9]), a[0] = b[0], a[1] = e, a
                    }

                    function Ga(a, b) {
                        a = La(a);
                        for (var c = -1, d = b.length, e = {}; ++c < d;) {
                            var f = b[c];
                            f in a && (e[f] = a[f])
                        }
                        return e
                    }

                    function Ha(a, b) {
                        var c = {};
                        return I(a, function(a, d, e) {
                            b(a, d, e) && (c[d] = a)
                        }), c
                    }

                    function Ia(a, b) {
                        for (var c = a.length, d = Gc(b.length, c), e = r(a); d--;) {
                            var f = b[d];
                            a[d] = za(f, c) ? e[f] : kb
                        }
                        return a
                    }

                    function Ja(a) {
                        var b;
                        l.support;
                        if (!j(a) || sc.call(a) != Hb || !qc.call(a, "constructor") && (b = a.constructor, "function" == typeof b && !(b instanceof b))) return !1;
                        var c;
                        return I(a, function(a, b) {
                            c = b
                        }), c === kb || qc.call(a, c)
                    }

                    function Ka(a) {
                        for (var b = _a(a), c = b.length, d = c && a.length, e = !!d && Da(d) && (hd(a) || Ta(a)), f = -1, g = []; ++f < c;) {
                            var h = b[f];
                            (e && za(h, d) || qc.call(a, h)) && g.push(h)
                        }
                        return g
                    }

                    function La(a) {
                        return Wa(a) ? a : Object(a)
                    }

                    function Ma(a) {
                        if (hd(a)) return a;
                        var b = [];
                        return h(a).replace(Yb, function(a, c, d, e) {
                            b.push(d ? e.replace(_b, "$1") : c || a)
                        }), b
                    }

                    function Na(a, b, c) {
                        var d = a ? a.length : 0;
                        if (!d) return -1;
                        if ("number" == typeof c) c = 0 > c ? Fc(d + c, 0) : c;
                        else if (c) {
                            var e = W(a, b),
                                g = a[e];
                            return (b === b ? b === g : g !== g) ? e : -1
                        }
                        return f(a, b, c || 0)
                    }

                    function Oa(a) {
                        var b = a ? a.length : 0;
                        return b ? a[b - 1] : kb
                    }

                    function Pa(a, b, c) {
                        var d = hd(a) ? t : F;
                        return c && Aa(a, b, c) && (b = null), ("function" != typeof b || c !== kb) && (b = pa(b, c, 3)), d(a, b)
                    }

                    function Qa(a, b, c) {
                        var d = hd(a) ? u : O;
                        return b = pa(b, c, 3), d(a, b)
                    }

                    function Ra(a, b) {
                        if ("function" != typeof a) throw new TypeError(xb);
                        return b = Fc(b === kb ? a.length - 1 : +b || 0, 0),
                            function() {
                                for (var c = arguments, d = -1, e = Fc(c.length - b, 0), f = Array(e); ++d < e;) f[d] = c[b + d];
                                switch (b) {
                                    case 0:
                                        return a.call(this, f);
                                    case 1:
                                        return a.call(this, c[0], f);
                                    case 2:
                                        return a.call(this, c[0], c[1], f)
                                }
                                var g = Array(b + 1);
                                for (d = -1; ++d < b;) g[d] = c[d];
                                return g[b] = f, a.apply(this, g)
                            }
                    }

                    function Sa(a, b, c, d) {
                        return b && "boolean" != typeof b && Aa(a, b, c) ? b = !1 : "function" == typeof b && (d = c, c = b, b = !1), "function" == typeof c ? C(a, b, Y(c, d, 1)) : C(a, b)
                    }

                    function Ta(a) {
                        return j(a) && ya(a) && sc.call(a) == zb
                    }

                    function Ua(a) {
                        return !!a && 1 === a.nodeType && j(a) && sc.call(a).indexOf("Element") > -1
                    }

                    function Va(a, b, c, d) {
                        c = "function" == typeof c ? Y(c, d, 3) : kb;
                        var e = c ? c(a, b) : kb;
                        return e === kb ? L(a, b, c) : !!e
                    }

                    function Wa(a) {
                        var b = typeof a;
                        return !!a && ("object" == b || "function" == b)
                    }

                    function Xa(a) {
                        return null == a ? !1 : sc.call(a) == Eb ? tc.test(pc.call(a)) : j(a) && bc.test(a)
                    }

                    function Ya(a) {
                        return "number" == typeof a || j(a) && sc.call(a) == Gb
                    }

                    function Za(a) {
                        return "string" == typeof a || j(a) && sc.call(a) == Kb
                    }

                    function $a(a) {
                        return j(a) && Da(a.length) && !!dc[sc.call(a)]
                    }

                    function _a(a) {
                        if (null == a) return [];
                        Wa(a) || (a = Object(a));
                        var b = a.length;
                        b = b && Da(b) && (hd(a) || Ta(a)) && b || 0;
                        for (var c = a.constructor, d = -1, e = "function" == typeof c && c.prototype === a, f = Array(b), g = b > 0; ++d < b;) f[d] = d + "";
                        for (var h in a) g && za(h, b) || "constructor" == h && (e || !qc.call(a, h)) || f.push(h);
                        return f
                    }

                    function ab(a) {
                        a = La(a);
                        for (var b = -1, c = md(a), d = c.length, e = Array(d); ++b < d;) {
                            var f = c[b];
                            e[b] = [f, a[f]]
                        }
                        return e
                    }

                    function bb(a) {
                        return V(a, md(a))
                    }

                    function cb(a) {
                        return a = h(a), a && $b.test(a) ? a.replace(Zb, "\\$&") : a
                    }

                    function db(a, b, c) {
                        return c && Aa(a, b, c) && (b = null), j(a) ? gb(a) : B(a, b)
                    }

                    function eb(a) {
                        return function() {
                            return a
                        }
                    }

                    function fb(a) {
                        return a
                    }

                    function gb(a) {
                        return P(C(a, !0))
                    }

                    function hb() {}

                    function ib(a) {
                        return Ba(a) ? R(a) : S(a)
                    }

                    function jb(a) {
                        var b = ++rc;
                        return h(a) + b
                    }
                    var kb, lb = "3.9.3",
                        mb = 1,
                        nb = 2,
                        ob = 4,
                        pb = 8,
                        qb = 16,
                        rb = 32,
                        sb = 64,
                        tb = 128,
                        ub = 256,
                        vb = 150,
                        wb = 16,
                        xb = "Expected a function",
                        yb = "__lodash_placeholder__",
                        zb = "[object Arguments]",
                        Ab = "[object Array]",
                        Bb = "[object Boolean]",
                        Cb = "[object Date]",
                        Db = "[object Error]",
                        Eb = "[object Function]",
                        Fb = "[object Map]",
                        Gb = "[object Number]",
                        Hb = "[object Object]",
                        Ib = "[object RegExp]",
                        Jb = "[object Set]",
                        Kb = "[object String]",
                        Lb = "[object WeakMap]",
                        Mb = "[object ArrayBuffer]",
                        Nb = "[object Float32Array]",
                        Ob = "[object Float64Array]",
                        Pb = "[object Int8Array]",
                        Qb = "[object Int16Array]",
                        Rb = "[object Int32Array]",
                        Sb = "[object Uint8Array]",
                        Tb = "[object Uint8ClampedArray]",
                        Ub = "[object Uint16Array]",
                        Vb = "[object Uint32Array]",
                        Wb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
                        Xb = /^\w*$/,
                        Yb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
                        Zb = /[.*+?^${}()|[\]\/\\]/g,
                        $b = RegExp(Zb.source),
                        _b = /\\(\\)?/g,
                        ac = /\w*$/,
                        bc = /^\[object .+?Constructor\]$/,
                        cc = /^\d+$/,
                        dc = {};
                    dc[Nb] = dc[Ob] = dc[Pb] = dc[Qb] = dc[Rb] = dc[Sb] = dc[Tb] = dc[Ub] = dc[Vb] = !0, dc[zb] = dc[Ab] = dc[Mb] = dc[Bb] = dc[Cb] = dc[Db] = dc[Eb] = dc[Fb] = dc[Gb] = dc[Hb] = dc[Ib] = dc[Jb] = dc[Kb] = dc[Lb] = !1;
                    var ec = {};
                    ec[zb] = ec[Ab] = ec[Mb] = ec[Bb] = ec[Cb] = ec[Nb] = ec[Ob] = ec[Pb] = ec[Qb] = ec[Rb] = ec[Gb] = ec[Hb] = ec[Ib] = ec[Kb] = ec[Sb] = ec[Tb] = ec[Ub] = ec[Vb] = !0, ec[Db] = ec[Eb] = ec[Fb] = ec[Jb] = ec[Lb] = !1;
                    var fc = {
                            "function": !0,
                            object: !0
                        },
                        gc = fc[typeof d] && d && !d.nodeType && d,
                        hc = fc[typeof c] && c && !c.nodeType && c,
                        ic = gc && hc && "object" == typeof b && b && b.Object && b,
                        jc = fc[typeof self] && self && self.Object && self,
                        kc = fc[typeof window] && window && window.Object && window,
                        lc = hc && hc.exports === gc && gc,
                        mc = ic || kc !== (this && this.window) && kc || jc || this,
                        nc = Object.prototype,
                        oc = (oc = mc.window) ? oc.document : null,
                        pc = Function.prototype.toString,
                        qc = nc.hasOwnProperty,
                        rc = 0,
                        sc = nc.toString,
                        tc = RegExp("^" + cb(pc.call(qc)).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        uc = ta(mc, "ArrayBuffer"),
                        vc = ta(uc && new uc(0), "slice"),
                        wc = Math.floor,
                        xc = ta(Object, "getPrototypeOf"),
                        yc = ta(mc, "Set"),
                        zc = ta(mc, "Uint8Array"),
                        Ac = ta(mc, "WeakMap"),
                        Bc = function() {
                            try {
                                var a = ta(mc, "Float64Array"),
                                    b = new a(new uc(10), 0, 1) && a
                            } catch (c) {}
                            return b || null
                        }(),
                        Cc = ta(Object, "create"),
                        Dc = ta(Array, "isArray"),
                        Ec = ta(Object, "keys"),
                        Fc = Math.max,
                        Gc = Math.min,
                        Hc = ta(Date, "now"),
                        Ic = Number.POSITIVE_INFINITY,
                        Jc = 4294967295,
                        Kc = Jc - 1,
                        Lc = Jc >>> 1,
                        Mc = Bc ? Bc.BYTES_PER_ELEMENT : 0,
                        Nc = 9007199254740991,
                        Oc = Ac && new Ac,
                        Pc = {},
                        Qc = l.support = {};
                    ! function(a) {
                        var b = function() {
                                this.x = a
                            },
                            c = [];
                        b.prototype = {
                            valueOf: a,
                            y: a
                        };
                        for (var d in new b) c.push(d);
                        try {
                            Qc.dom = 11 === oc.createDocumentFragment().nodeType
                        } catch (e) {
                            Qc.dom = !1
                        }
                    }(1, 0);
                    var Rc = function() {
                            function a() {}
                            return function(b) {
                                if (Wa(b)) {
                                    a.prototype = b;
                                    var c = new a;
                                    a.prototype = null
                                }
                                return c || {}
                            }
                        }(),
                        Sc = ba(J),
                        Tc = ca(),
                        Uc = Oc ? function(a, b) {
                            return Oc.set(a, b), a
                        } : fb;
                    vc || (Z = uc && zc ? function(a) {
                        var b = a.byteLength,
                            c = Bc ? wc(b / Mc) : 0,
                            d = c * Mc,
                            e = new uc(b);
                        if (c) {
                            var f = new Bc(e, 0, c);
                            f.set(new Bc(a, 0, c))
                        }
                        return b != d && (f = new zc(e, d), f.set(new zc(a, d))), e
                    } : eb(null));
                    var Vc = Cc && yc ? function(a) {
                            return new o(a)
                        } : eb(null),
                        Wc = Oc ? function(a) {
                            return Oc.get(a)
                        } : hb,
                        Xc = R("length"),
                        Yc = function() {
                            var a = 0,
                                b = 0;
                            return function(c, d) {
                                var e = dd(),
                                    f = wb - (e - b);
                                if (b = e, f > 0) {
                                    if (++a >= vb) return c
                                } else a = 0;
                                return Uc(c, d)
                            }
                        }(),
                        Zc = Ra(function(a, b) {
                            return ya(a) ? E(a, H(b, !1, !0)) : []
                        }),
                        $c = Ra(function(a) {
                            for (var b = a.length, c = b, d = Array(l), e = ra(), g = e == f, h = []; c--;) {
                                var i = a[c] = ya(i = a[c]) ? i : [];
                                d[c] = g && i.length >= 120 ? Vc(c && i) : null
                            }
                            var j = a[0],
                                k = -1,
                                l = j ? j.length : 0,
                                m = d[0];
                            a: for (; ++k < l;)
                                if (i = j[k], (m ? p(m, i) : e(h, i, 0)) < 0) {
                                    for (var c = b; --c;) {
                                        var n = d[c];
                                        if ((n ? p(n, i) : e(a[c], i, 0)) < 0) continue a
                                    }
                                    m && m.push(i), h.push(i)
                                }
                            return h
                        }),
                        _c = fa(Sc),
                        ad = ga(s, Sc),
                        bd = Ra(function(a, b, c) {
                            var d = -1,
                                e = "function" == typeof b,
                                f = Ba(b),
                                g = ya(a) ? Array(a.length) : [];
                            return Sc(a, function(a) {
                                var h = e ? b : f && null != a ? a[b] : null;
                                g[++d] = h ? h.apply(a, c) : xa(a, b, c)
                            }), g
                        }),
                        cd = ia(v, Sc),
                        dd = Hc || function() {
                            return (new Date).getTime()
                        },
                        ed = Ra(function(a, b, c) {
                            var d = mb;
                            if (c.length) {
                                var e = k(c, ed.placeholder);
                                d |= rb
                            }
                            return la(a, d, b, c, e)
                        }),
                        fd = Ra(function(a, b) {
                            return D(a, 1, b)
                        }),
                        gd = ha(rb),
                        hd = Dc || function(a) {
                            return j(a) && Da(a.length) && sc.call(a) == Ab
                        };
                    Qc.dom || (Ua = function(a) {
                        return !!a && 1 === a.nodeType && j(a) && !jd(a)
                    });
                    var id = g(/x/) || zc && !g(zc) ? function(a) {
                            return sc.call(a) == Eb
                        } : g,
                        jd = xc ? function(a) {
                            if (!a || sc.call(a) != Hb) return !1;
                            var b = ta(a, "valueOf"),
                                c = b && (c = xc(b)) && xc(c);
                            return c ? a == c || xc(a) == c : Ja(a)
                        } : Ja,
                        kd = aa(function(a, b, c) {
                            return c ? y(a, b, c) : z(a, b)
                        }),
                        ld = Ra(function(a) {
                            var b = a[0];
                            return null == b ? b : (a.push(x), kd.apply(kb, a))
                        }),
                        md = Ec ? function(a) {
                            var b = null == a ? null : a.constructor;
                            return "function" == typeof b && b.prototype === a || "function" != typeof a && ya(a) ? Ka(a) : Wa(a) ? Ec(a) : []
                        } : Ka,
                        nd = Ra(function(a, b) {
                            if (null == a) return {};
                            if ("function" != typeof b[0]) {
                                var b = u(H(b), String);
                                return Ga(a, E(_a(a), b))
                            }
                            var c = Y(b[0], b[1], 3);
                            return Ha(a, function(a, b, d) {
                                return !c(a, b, d)
                            })
                        });
                    n.prototype = Rc(m.prototype), n.prototype.constructor = n, o.prototype.push = q, l.assign = kd, l.bind = ed, l.callback = db, l.constant = eb, l.defaults = ld, l.defer = fd, l.difference = Zc, l.forEach = ad, l.intersection = $c, l.invoke = bd, l.keys = md, l.keysIn = _a, l.map = Qa, l.matches = gb, l.omit = nd, l.pairs = ab, l.partial = gd, l.property = ib, l.restParam = Ra, l.values = bb, l.collect = Qa, l.each = ad, l.extend = kd, l.iteratee = db, l.clone = Sa, l.escapeRegExp = cb, l.every = Pa, l.find = _c, l.identity = fb, l.indexOf = Na, l.isArguments = Ta, l.isArray = hd, l.isElement = Ua, l.isEqual = Va, l.isFunction = id, l.isNative = Xa, l.isNumber = Ya, l.isObject = Wa, l.isPlainObject = jd, l.isString = Za, l.isTypedArray = $a, l.last = Oa, l.noop = hb, l.now = dd, l.reduce = cd, l.uniqueId = jb, l.all = Pa, l.eq = Va, l.detect = _c, l.foldl = cd, l.inject = cd, l.VERSION = lb, s(["bind", "partial"], function(a) {
                        l[a].placeholder = l
                    }), "function" == typeof a && "object" == typeof a.amd && a.amd ? (mc._ = l, a(function() {
                        return l
                    })) : gc && hc ? lc ? (hc.exports = l)._ = l : gc._ = l : mc._ = l
                }).call(this)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        2: [function(b, c, d) {
            ! function(b) {
                function c() {
                    this._events = {}, this._conf && e.call(this, this._conf)
                }

                function e(a) {
                    a && (this._conf = a, a.delimiter && (this.delimiter = a.delimiter), a.maxListeners && (this._events.maxListeners = a.maxListeners), a.wildcard && (this.wildcard = a.wildcard), a.newListener && (this.newListener = a.newListener), this.wildcard && (this.listenerTree = {}))
                }

                function f(a) {
                    this._events = {}, this.newListener = !1, e.call(this, a)
                }

                function g(a, b, c, d) {
                    if (!c) return [];
                    var e, f, h, i, j, k, l, m = [],
                        n = b.length,
                        o = b[d],
                        p = b[d + 1];
                    if (d === n && c._listeners) {
                        if ("function" == typeof c._listeners) return a && a.push(c._listeners), [c];
                        for (e = 0, f = c._listeners.length; f > e; e++) a && a.push(c._listeners[e]);
                        return [c]
                    }
                    if ("*" === o || "**" === o || c[o]) {
                        if ("*" === o) {
                            for (h in c) "_listeners" !== h && c.hasOwnProperty(h) && (m = m.concat(g(a, b, c[h], d + 1)));
                            return m
                        }
                        if ("**" === o) {
                            l = d + 1 === n || d + 2 === n && "*" === p, l && c._listeners && (m = m.concat(g(a, b, c, n)));
                            for (h in c) "_listeners" !== h && c.hasOwnProperty(h) && ("*" === h || "**" === h ? (c[h]._listeners && !l && (m = m.concat(g(a, b, c[h], n))), m = m.concat(g(a, b, c[h], d))) : m = h === p ? m.concat(g(a, b, c[h], d + 2)) : m.concat(g(a, b, c[h], d)));
                            return m
                        }
                        m = m.concat(g(a, b, c[o], d + 1))
                    }
                    if (i = c["*"], i && g(a, b, i, d + 1), j = c["**"])
                        if (n > d) {
                            j._listeners && g(a, b, j, n);
                            for (h in j) "_listeners" !== h && j.hasOwnProperty(h) && (h === p ? g(a, b, j[h], d + 2) : h === o ? g(a, b, j[h], d + 1) : (k = {}, k[h] = j[h], g(a, b, {
                                "**": k
                            }, d + 1)))
                        } else j._listeners ? g(a, b, j, n) : j["*"] && j["*"]._listeners && g(a, b, j["*"], n);
                    return m
                }

                function h(a, b) {
                    a = "string" == typeof a ? a.split(this.delimiter) : a.slice();
                    for (var c = 0, d = a.length; d > c + 1; c++)
                        if ("**" === a[c] && "**" === a[c + 1]) return;
                    for (var e = this.listenerTree, f = a.shift(); f;) {
                        if (e[f] || (e[f] = {}), e = e[f], 0 === a.length) {
                            if (e._listeners) {
                                if ("function" == typeof e._listeners) e._listeners = [e._listeners, b];
                                else if (i(e._listeners) && (e._listeners.push(b), !e._listeners.warned)) {
                                    var g = j;
                                    "undefined" != typeof this._events.maxListeners && (g = this._events.maxListeners), g > 0 && e._listeners.length > g && (e._listeners.warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", e._listeners.length), console.trace())
                                }
                            } else e._listeners = b;
                            return !0
                        }
                        f = a.shift()
                    }
                    return !0
                }
                var i = Array.isArray ? Array.isArray : function(a) {
                        return "[object Array]" === Object.prototype.toString.call(a)
                    },
                    j = 10;
                f.prototype.delimiter = ".", f.prototype.setMaxListeners = function(a) {
                    this._events || c.call(this), this._events.maxListeners = a, this._conf || (this._conf = {}), this._conf.maxListeners = a
                }, f.prototype.event = "", f.prototype.once = function(a, b) {
                    return this.many(a, 1, b), this
                }, f.prototype.many = function(a, b, c) {
                    function d() {
                        0 === --b && e.off(a, d), c.apply(this, arguments)
                    }
                    var e = this;
                    if ("function" != typeof c) throw new Error("many only accepts instances of Function");
                    return d._origin = c, this.on(a, d), e
                }, f.prototype.emit = function() {
                    this._events || c.call(this);
                    var a = arguments[0];
                    if ("newListener" === a && !this.newListener && !this._events.newListener) return !1;
                    if (this._all) {
                        for (var b = arguments.length, d = new Array(b - 1), e = 1; b > e; e++) d[e - 1] = arguments[e];
                        for (e = 0, b = this._all.length; b > e; e++) this.event = a, this._all[e].apply(this, d)
                    }
                    if ("error" === a && !(this._all || this._events.error || this.wildcard && this.listenerTree.error)) throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
                    var f;
                    if (this.wildcard) {
                        f = [];
                        var h = "string" == typeof a ? a.split(this.delimiter) : a.slice();
                        g.call(this, f, h, this.listenerTree, 0)
                    } else f = this._events[a];
                    if ("function" == typeof f) {
                        if (this.event = a, 1 === arguments.length) f.call(this);
                        else if (arguments.length > 1) switch (arguments.length) {
                            case 2:
                                f.call(this, arguments[1]);
                                break;
                            case 3:
                                f.call(this, arguments[1], arguments[2]);
                                break;
                            default:
                                for (var b = arguments.length, d = new Array(b - 1), e = 1; b > e; e++) d[e - 1] = arguments[e];
                                f.apply(this, d)
                        }
                        return !0
                    }
                    if (f) {
                        for (var b = arguments.length, d = new Array(b - 1), e = 1; b > e; e++) d[e - 1] = arguments[e];
                        for (var i = f.slice(), e = 0, b = i.length; b > e; e++) this.event = a, i[e].apply(this, d);
                        return i.length > 0 || !!this._all
                    }
                    return !!this._all
                }, f.prototype.on = function(a, b) {
                    if ("function" == typeof a) return this.onAny(a), this;
                    if ("function" != typeof b) throw new Error("on only accepts instances of Function");
                    if (this._events || c.call(this), this.emit("newListener", a, b), this.wildcard) return h.call(this, a, b), this;
                    if (this._events[a]) {
                        if ("function" == typeof this._events[a]) this._events[a] = [this._events[a], b];
                        else if (i(this._events[a]) && (this._events[a].push(b), !this._events[a].warned)) {
                            var d = j;
                            "undefined" != typeof this._events.maxListeners && (d = this._events.maxListeners), d > 0 && this._events[a].length > d && (this._events[a].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[a].length), console.trace())
                        }
                    } else this._events[a] = b;
                    return this
                }, f.prototype.onAny = function(a) {
                    if ("function" != typeof a) throw new Error("onAny only accepts instances of Function");
                    return this._all || (this._all = []), this._all.push(a), this
                }, f.prototype.addListener = f.prototype.on, f.prototype.off = function(a, b) {
                    if ("function" != typeof b) throw new Error("removeListener only takes instances of Function");
                    var c, d = [];
                    if (this.wildcard) {
                        var e = "string" == typeof a ? a.split(this.delimiter) : a.slice();
                        d = g.call(this, null, e, this.listenerTree, 0)
                    } else {
                        if (!this._events[a]) return this;
                        c = this._events[a], d.push({
                            _listeners: c
                        })
                    }
                    for (var f = 0; f < d.length; f++) {
                        var h = d[f];
                        if (c = h._listeners, i(c)) {
                            for (var j = -1, k = 0, l = c.length; l > k; k++)
                                if (c[k] === b || c[k].listener && c[k].listener === b || c[k]._origin && c[k]._origin === b) {
                                    j = k;
                                    break
                                }
                            if (0 > j) continue;
                            return this.wildcard ? h._listeners.splice(j, 1) : this._events[a].splice(j, 1), 0 === c.length && (this.wildcard ? delete h._listeners : delete this._events[a]), this
                        }(c === b || c.listener && c.listener === b || c._origin && c._origin === b) && (this.wildcard ? delete h._listeners : delete this._events[a])
                    }
                    return this
                }, f.prototype.offAny = function(a) {
                    var b, c = 0,
                        d = 0;
                    if (a && this._all && this._all.length > 0) {
                        for (b = this._all, c = 0, d = b.length; d > c; c++)
                            if (a === b[c]) return b.splice(c, 1), this
                    } else this._all = [];
                    return this
                }, f.prototype.removeListener = f.prototype.off, f.prototype.removeAllListeners = function(a) {
                    if (0 === arguments.length) return !this._events || c.call(this), this;
                    if (this.wildcard)
                        for (var b = "string" == typeof a ? a.split(this.delimiter) : a.slice(), d = g.call(this, null, b, this.listenerTree, 0), e = 0; e < d.length; e++) {
                            var f = d[e];
                            f._listeners = null
                        } else {
                            if (!this._events[a]) return this;
                            this._events[a] = null
                        }
                    return this
                }, f.prototype.listeners = function(a) {
                    if (this.wildcard) {
                        var b = [],
                            d = "string" == typeof a ? a.split(this.delimiter) : a.slice();
                        return g.call(this, b, d, this.listenerTree, 0), b
                    }
                    return this._events || c.call(this), this._events[a] || (this._events[a] = []), i(this._events[a]) || (this._events[a] = [this._events[a]]), this._events[a]
                }, f.prototype.listenersAny = function() {
                    return this._all ? this._all : []
                }, "function" == typeof a && a.amd ? a(function() {
                    return f
                }) : "object" == typeof d ? d.EventEmitter2 = f : window.EventEmitter2 = f
            }()
        }, {}],
        3: [function(a, b, c) {
            var d = a("fast-diff"),
                e = a("./is"),
                f = a("./op"),
                g = String.fromCharCode(0),
                h = function(a) {
                    e.array(a) ? this.ops = a : e.object(a) && e.array(a.ops) ? this.ops = a.ops : this.ops = []
                };
            h.prototype.insert = function(a, b) {
                var c = {};
                return 0 === a.length ? this : (c.insert = a, e.object(b) && Object.keys(b).length > 0 && (c.attributes = b), this.push(c))
            }, h.prototype["delete"] = function(a) {
                return 0 >= a ? this : this.push({
                    "delete": a
                })
            }, h.prototype.retain = function(a, b) {
                if (0 >= a) return this;
                var c = {
                    retain: a
                };
                return e.object(b) && Object.keys(b).length > 0 && (c.attributes = b), this.push(c)
            }, h.prototype.push = function(a) {
                var b = this.ops.length,
                    c = this.ops[b - 1];
                if (a = f.clone(a), e.object(c)) {
                    if (e.number(a["delete"]) && e.number(c["delete"])) return this.ops[b - 1] = {
                        "delete": c["delete"] + a["delete"]
                    }, this;
                    if (e.number(c["delete"]) && null != a.insert && (b -= 1, c = this.ops[b - 1], !e.object(c))) return this.ops.unshift(a), this;
                    if (e.equal(a.attributes, c.attributes)) {
                        if (e.string(a.insert) && e.string(c.insert)) return this.ops[b - 1] = {
                            insert: c.insert + a.insert
                        }, e.object(a.attributes) && (this.ops[b - 1].attributes = a.attributes), this;
                        if (e.number(a.retain) && e.number(c.retain)) return this.ops[b - 1] = {
                            retain: c.retain + a.retain
                        }, e.object(a.attributes) && (this.ops[b - 1].attributes = a.attributes), this
                    }
                }
                return b === this.ops.length ? this.ops.push(a) : this.ops.splice(b, 0, a), this
            }, h.prototype.chop = function() {
                var a = this.ops[this.ops.length - 1];
                return a && a.retain && !a.attributes && this.ops.pop(), this
            }, h.prototype.length = function() {
                return this.ops.reduce(function(a, b) {
                    return a + f.length(b)
                }, 0)
            }, h.prototype.slice = function(a, b) {
                a = a || 0, e.number(b) || (b = 1 / 0);
                for (var c = new h, d = f.iterator(this.ops), g = 0; b > g && d.hasNext();) {
                    var i;
                    a > g ? i = d.next(a - g) : (i = d.next(b - g), c.push(i)), g += f.length(i)
                }
                return c
            }, h.prototype.compose = function(a) {
                for (var b = f.iterator(this.ops), c = f.iterator(a.ops), d = new h; b.hasNext() || c.hasNext();)
                    if ("insert" === c.peekType()) d.push(c.next());
                    else if ("delete" === b.peekType()) d.push(b.next());
                else {
                    var g = Math.min(b.peekLength(), c.peekLength()),
                        i = b.next(g),
                        j = c.next(g);
                    if (e.number(j.retain)) {
                        var k = {};
                        e.number(i.retain) ? k.retain = g : k.insert = i.insert;
                        var l = f.attributes.compose(i.attributes, j.attributes, e.number(i.retain));
                        l && (k.attributes = l), d.push(k)
                    } else e.number(j["delete"]) && e.number(i.retain) && d.push(j)
                }
                return d.chop()
            }, h.prototype.diff = function(a) {
                var b = new h;
                if (this.ops === a.ops) return b;
                var c = [this.ops, a.ops].map(function(b) {
                        return b.map(function(c) {
                            if (null != c.insert) return e.string(c.insert) ? c.insert : g;
                            var d = b === a.ops ? "on" : "with";
                            throw new Error("diff() called " + d + " non-document")
                        }).join("")
                    }),
                    i = d(c[0], c[1]),
                    j = f.iterator(this.ops),
                    k = f.iterator(a.ops);
                return i.forEach(function(a) {
                    for (var c = a[1].length; c > 0;) {
                        var g = 0;
                        switch (a[0]) {
                            case d.INSERT:
                                g = Math.min(k.peekLength(), c), b.push(k.next(g));
                                break;
                            case d.DELETE:
                                g = Math.min(c, j.peekLength()), j.next(g), b["delete"](g);
                                break;
                            case d.EQUAL:
                                g = Math.min(j.peekLength(), k.peekLength(), c);
                                var h = j.next(g),
                                    i = k.next(g);
                                e.equal(h.insert, i.insert) ? b.retain(g, f.attributes.diff(h.attributes, i.attributes)) : b.push(i)["delete"](g)
                        }
                        c -= g
                    }
                }), b.chop()
            }, h.prototype.transform = function(a, b) {
                if (b = !!b, e.number(a)) return this.transformPosition(a, b);
                for (var c = f.iterator(this.ops), d = f.iterator(a.ops), g = new h; c.hasNext() || d.hasNext();)
                    if ("insert" !== c.peekType() || !b && "insert" === d.peekType())
                        if ("insert" === d.peekType()) g.push(d.next());
                        else {
                            var i = Math.min(c.peekLength(), d.peekLength()),
                                j = c.next(i),
                                k = d.next(i);
                            if (j["delete"]) continue;
                            k["delete"] ? g.push(k) : g.retain(i, f.attributes.transform(j.attributes, k.attributes, b))
                        } else g.retain(f.length(c.next()));
                return g.chop()
            }, h.prototype.transformPosition = function(a, b) {
                b = !!b;
                for (var c = f.iterator(this.ops), d = 0; c.hasNext() && a >= d;) {
                    var e = c.peekLength(),
                        g = c.peekType();
                    c.next(), "delete" !== g ? ("insert" === g && (a > d || !b) && (a += e), d += e) : a -= Math.min(e, a - d)
                }
                return a
            }, b.exports = h
        }, {
            "./is": 4,
            "./op": 5,
            "fast-diff": 6
        }],
        4: [function(a, b, c) {
            b.exports = {
                equal: function(a, b) {
                    if (a === b) return !0;
                    if (null == a && null == b) return !0;
                    if (null == a || null == b) return !1;
                    if (!this.object(a) || !this.object(b)) return !1;
                    if (Object.keys(a).length != Object.keys(b).length) return !1;
                    for (var c in a)
                        if (a[c] !== b[c]) return !1;
                    return !0
                },
                array: function(a) {
                    return Array.isArray(a)
                },
                number: function(a) {
                    return "number" == typeof a ? !0 : "object" == typeof a && "[object Number]" === Object.prototype.toString.call(a) ? !0 : !1
                },
                object: function(a) {
                    return a ? "function" == typeof a || "object" == typeof a : !1
                },
                string: function(a) {
                    return "string" == typeof a ? !0 : "object" == typeof a && "[object String]" === Object.prototype.toString.call(a) ? !0 : !1
                }
            }
        }, {}],
        5: [function(a, b, c) {
            function d(a) {
                this.ops = a, this.index = 0, this.offset = 0
            }
            var e = a("./is"),
                f = {
                    attributes: {
                        clone: function(a, b) {
                            return e.object(a) ? Object.keys(a).reduce(function(c, d) {
                                return void 0 === a[d] || null === a[d] && !b || (c[d] = a[d]), c
                            }, {}) : {}
                        },
                        compose: function(a, b, c) {
                            e.object(a) || (a = {}), e.object(b) || (b = {});
                            var d = this.clone(b, c);
                            for (var f in a) void 0 !== a[f] && void 0 === b[f] && (d[f] = a[f]);
                            return Object.keys(d).length > 0 ? d : void 0
                        },
                        diff: function(a, b) {
                            e.object(a) || (a = {}), e.object(b) || (b = {});
                            var c = Object.keys(a).concat(Object.keys(b)).reduce(function(c, d) {
                                return a[d] !== b[d] && (c[d] = void 0 === b[d] ? null : b[d]), c
                            }, {});
                            return Object.keys(c).length > 0 ? c : void 0
                        },
                        transform: function(a, b, c) {
                            if (!e.object(a)) return b;
                            if (!e.object(b)) return void 0;
                            if (!c) return b;
                            var d = Object.keys(b).reduce(function(c, d) {
                                return void 0 === a[d] && (c[d] = b[d]), c
                            }, {});
                            return Object.keys(d).length > 0 ? d : void 0
                        }
                    },
                    clone: function(a) {
                        var b = this.attributes.clone(a);
                        return e.object(b.attributes) && (b.attributes = this.attributes.clone(b.attributes, !0)), b
                    },
                    iterator: function(a) {
                        return new d(a)
                    },
                    length: function(a) {
                        return e.number(a["delete"]) ? a["delete"] : e.number(a.retain) ? a.retain : e.string(a.insert) ? a.insert.length : 1
                    }
                };
            d.prototype.hasNext = function() {
                return this.peekLength() < 1 / 0
            }, d.prototype.next = function(a) {
                a || (a = 1 / 0);
                var b = this.ops[this.index];
                if (b) {
                    var c = this.offset,
                        d = f.length(b);
                    if (a >= d - c ? (a = d - c, this.index += 1, this.offset = 0) : this.offset += a, e.number(b["delete"])) return {
                        "delete": a
                    };
                    var g = {};
                    return b.attributes && (g.attributes = b.attributes), e.number(b.retain) ? g.retain = a : e.string(b.insert) ? g.insert = b.insert.substr(c, a) : g.insert = b.insert, g
                }
                return {
                    retain: 1 / 0
                }
            }, d.prototype.peekLength = function() {
                return this.ops[this.index] ? f.length(this.ops[this.index]) - this.offset : 1 / 0
            }, d.prototype.peekType = function() {
                return this.ops[this.index] ? e.number(this.ops[this.index]["delete"]) ? "delete" : e.number(this.ops[this.index].retain) ? "retain" : "insert" : "retain"
            }, b.exports = f
        }, {
            "./is": 4
        }],
        6: [function(a, b, c) {
            function d(a, b) {
                if (a == b) return a ? [
                    [n, a]
                ] : [];
                var c = h(a, b),
                    d = a.substring(0, c);
                a = a.substring(c), b = b.substring(c), c = i(a, b);
                var f = a.substring(a.length - c);
                a = a.substring(0, a.length - c), b = b.substring(0, b.length - c);
                var g = e(a, b);
                return d && g.unshift([n, d]), f && g.push([n, f]), k(g), g
            }

            function e(a, b) {
                var c;
                if (!a) return [
                    [m, b]
                ];
                if (!b) return [
                    [l, a]
                ];
                var e = a.length > b.length ? a : b,
                    g = a.length > b.length ? b : a,
                    h = e.indexOf(g);
                if (-1 != h) return c = [
                    [m, e.substring(0, h)],
                    [n, g],
                    [m, e.substring(h + g.length)]
                ], a.length > b.length && (c[0][0] = c[2][0] = l), c;
                if (1 == g.length) return [
                    [l, a],
                    [m, b]
                ];
                var i = j(a, b);
                if (i) {
                    var k = i[0],
                        o = i[1],
                        p = i[2],
                        q = i[3],
                        r = i[4],
                        s = d(k, p),
                        t = d(o, q);
                    return s.concat([
                        [n, r]
                    ], t)
                }
                return f(a, b)
            }

            function f(a, b) {
                for (var c = a.length, d = b.length, e = Math.ceil((c + d) / 2), f = e, h = 2 * e, i = new Array(h), j = new Array(h), k = 0; h > k; k++) i[k] = -1, j[k] = -1;
                i[f + 1] = 0, j[f + 1] = 0;
                for (var n = c - d, o = n % 2 != 0, p = 0, q = 0, r = 0, s = 0, t = 0; e > t; t++) {
                    for (var u = -t + p; t - q >= u; u += 2) {
                        var v, w = f + u;
                        v = u == -t || u != t && i[w - 1] < i[w + 1] ? i[w + 1] : i[w - 1] + 1;
                        for (var x = v - u; c > v && d > x && a.charAt(v) == b.charAt(x);) v++, x++;
                        if (i[w] = v, v > c) q += 2;
                        else if (x > d) p += 2;
                        else if (o) {
                            var y = f + n - u;
                            if (y >= 0 && h > y && -1 != j[y]) {
                                var z = c - j[y];
                                if (v >= z) return g(a, b, v, x)
                            }
                        }
                    }
                    for (var A = -t + r; t - s >= A; A += 2) {
                        var z, y = f + A;
                        z = A == -t || A != t && j[y - 1] < j[y + 1] ? j[y + 1] : j[y - 1] + 1;
                        for (var B = z - A; c > z && d > B && a.charAt(c - z - 1) == b.charAt(d - B - 1);) z++, B++;
                        if (j[y] = z, z > c) s += 2;
                        else if (B > d) r += 2;
                        else if (!o) {
                            var w = f + n - A;
                            if (w >= 0 && h > w && -1 != i[w]) {
                                var v = i[w],
                                    x = f + v - w;
                                if (z = c - z, v >= z) return g(a, b, v, x)
                            }
                        }
                    }
                }
                return [
                    [l, a],
                    [m, b]
                ]
            }

            function g(a, b, c, e) {
                var f = a.substring(0, c),
                    g = b.substring(0, e),
                    h = a.substring(c),
                    i = b.substring(e),
                    j = d(f, g),
                    k = d(h, i);
                return j.concat(k)
            }

            function h(a, b) {
                if (!a || !b || a.charAt(0) != b.charAt(0)) return 0;
                for (var c = 0, d = Math.min(a.length, b.length), e = d, f = 0; e > c;) a.substring(f, e) == b.substring(f, e) ? (c = e, f = c) : d = e, e = Math.floor((d - c) / 2 + c);
                return e
            }

            function i(a, b) {
                if (!a || !b || a.charAt(a.length - 1) != b.charAt(b.length - 1)) return 0;
                for (var c = 0, d = Math.min(a.length, b.length), e = d, f = 0; e > c;) a.substring(a.length - e, a.length - f) == b.substring(b.length - e, b.length - f) ? (c = e, f = c) : d = e, e = Math.floor((d - c) / 2 + c);
                return e
            }

            function j(a, b) {
                function c(a, b, c) {
                    for (var d, e, f, g, j = a.substring(c, c + Math.floor(a.length / 4)), k = -1, l = ""; - 1 != (k = b.indexOf(j, k + 1));) {
                        var m = h(a.substring(c), b.substring(k)),
                            n = i(a.substring(0, c), b.substring(0, k));
                        l.length < n + m && (l = b.substring(k - n, k) + b.substring(k, k + m), d = a.substring(0, c - n), e = a.substring(c + m), f = b.substring(0, k - n), g = b.substring(k + m))
                    }
                    return 2 * l.length >= a.length ? [d, e, f, g, l] : null
                }
                var d = a.length > b.length ? a : b,
                    e = a.length > b.length ? b : a;
                if (d.length < 4 || 2 * e.length < d.length) return null;
                var f, g = c(d, e, Math.ceil(d.length / 4)),
                    j = c(d, e, Math.ceil(d.length / 2));
                if (!g && !j) return null;
                f = j ? g && g[4].length > j[4].length ? g : j : g;
                var k, l, m, n;
                a.length > b.length ? (k = f[0], l = f[1], m = f[2], n = f[3]) : (m = f[0], n = f[1], k = f[2], l = f[3]);
                var o = f[4];
                return [k, l, m, n, o]
            }

            function k(a) {
                a.push([n, ""]);
                for (var b, c = 0, d = 0, e = 0, f = "", g = ""; c < a.length;) switch (a[c][0]) {
                    case m:
                        e++, g += a[c][1], c++;
                        break;
                    case l:
                        d++, f += a[c][1], c++;
                        break;
                    case n:
                        d + e > 1 ? (0 !== d && 0 !== e && (b = h(g, f), 0 !== b && (c - d - e > 0 && a[c - d - e - 1][0] == n ? a[c - d - e - 1][1] += g.substring(0, b) : (a.splice(0, 0, [n, g.substring(0, b)]), c++), g = g.substring(b), f = f.substring(b)), b = i(g, f), 0 !== b && (a[c][1] = g.substring(g.length - b) + a[c][1], g = g.substring(0, g.length - b), f = f.substring(0, f.length - b))), 0 === d ? a.splice(c - e, d + e, [m, g]) : 0 === e ? a.splice(c - d, d + e, [l, f]) : a.splice(c - d - e, d + e, [l, f], [m, g]), c = c - d - e + (d ? 1 : 0) + (e ? 1 : 0) + 1) : 0 !== c && a[c - 1][0] == n ? (a[c - 1][1] += a[c][1], a.splice(c, 1)) : c++, e = 0, d = 0, f = "", g = ""
                }
                "" === a[a.length - 1][1] && a.pop();
                var j = !1;
                for (c = 1; c < a.length - 1;) a[c - 1][0] == n && a[c + 1][0] == n && (a[c][1].substring(a[c][1].length - a[c - 1][1].length) == a[c - 1][1] ? (a[c][1] = a[c - 1][1] + a[c][1].substring(0, a[c][1].length - a[c - 1][1].length), a[c + 1][1] = a[c - 1][1] + a[c + 1][1], a.splice(c - 1, 1), j = !0) : a[c][1].substring(0, a[c + 1][1].length) == a[c + 1][1] && (a[c - 1][1] += a[c + 1][1], a[c][1] = a[c][1].substring(a[c + 1][1].length) + a[c + 1][1], a.splice(c + 1, 1), j = !0)), c++;
                j && k(a)
            }
            var l = -1,
                m = 1,
                n = 0,
                o = d;
            o.INSERT = m, o.DELETE = l, o.EQUAL = n, b.exports = o
        }, {}],
        7: [function(a, b, c) {
            b.exports = {
                version: "0.20.0"
            }
        }, {}],
        8: [function(a, b, c) {
            var d, e, f, g, h, i, j, k;
            j = a("lodash"), d = a("rich-text/lib/delta"), k = a("../lib/dom"), f = a("./format"), g = a("./line"), h = a("../lib/linked-list"), i = a("./normalizer"), e = function() {
                function a(a, b) {
                    this.root = a, null == b && (b = {}), this.normalizer = new i, this.formats = {}, j.each(b.formats, j.bind(this.addFormat, this)), this.setHTML(this.root.innerHTML)
                }
                return a.prototype.addFormat = function(a, b) {
                    return j.isObject(b) || (b = f.FORMATS[a]), null != this.formats[a] && console.warn("Overwriting format", a, this.formats[a]), this.formats[a] = new f(b), this.normalizer.addFormat(b)
                }, a.prototype.appendLine = function(a) {
                    return this.insertLineBefore(a, null)
                }, a.prototype.findLeafAt = function(a, b) {
                    var c, d, e;
                    return e = this.findLineAt(a), c = e[0], d = e[1], null != c ? c.findLeafAt(d, b) : [void 0, d]
                }, a.prototype.findLine = function(a) {
                    for (var b; null != a && null == k.BLOCK_TAGS[a.tagName];) a = a.parentNode;
                    return b = null != a ? k(a).data(g.DATA_KEY) : void 0, (null != b ? b.node : void 0) === a ? b : void 0
                }, a.prototype.findLineAt = function(a) {
                    var b, c;
                    if (!(this.lines.length > 0)) return [void 0, a];
                    if (c = this.toDelta().length(), a === c) return [this.lines.last, this.lines.last.length];
                    if (a > c) return [void 0, a - c];
                    for (b = this.lines.first; null != b;) {
                        if (a < b.length) return [b, a];
                        a -= b.length, b = b.next
                    }
                    return [void 0, a]
                }, a.prototype.getHTML = function() {
                    return this.root.innerHTML.replace(/\>\s+\</g, ">&nbsp;<")
                }, a.prototype.insertLineBefore = function(a, b) {
                    var c;
                    return c = new g(this, a), null != b ? (k(a.parentNode).isElement() || this.root.insertBefore(a, b.node), this.lines.insertAfter(b.prev, c)) : (k(a.parentNode).isElement() || this.root.appendChild(a), this.lines.append(c)), c
                }, a.prototype.mergeLines = function(a, b) {
                    return b.length > 1 && (1 === a.length && k(a.leaves.last.node).remove(), j.each(k(b.node).childNodes(), function(b) {
                        return b.tagName !== k.DEFAULT_BREAK_TAG ? a.node.appendChild(b) : void 0
                    })), this.removeLine(b), a.rebuild()
                }, a.prototype.optimizeLines = function() {
                    return j.each(this.lines.toArray(), function(a, b) {
                        return a.optimize(), !0
                    })
                }, a.prototype.rebuild = function() {
                    var a, b, c;
                    for (b = this.lines.toArray(), a = this.root.firstChild, null != a && null != k.LIST_TAGS[a.tagName] && (a = a.firstChild), j.each(b, function(b) {
                            return function(c, d) {
                                for (var e, f; c.node !== a;) {
                                    if (c.node.parentNode !== b.root && (null != (f = c.node.parentNode) ? f.parentNode : void 0) !== b.root) return b.removeLine(c);
                                    a = b.normalizer.normalizeLine(a), e = b.insertLineBefore(a, c), a = k(a).nextLineNode(b.root)
                                }
                                return c.outerHTML !== a.outerHTML && (c.node = b.normalizer.normalizeLine(c.node), c.rebuild()), a = k(a).nextLineNode(b.root)
                            }
                        }(this)), c = []; null != a;) a = this.normalizer.normalizeLine(a), this.appendLine(a), c.push(a = k(a).nextLineNode(this.root));
                    return c
                }, a.prototype.removeLine = function(a) {
                    return null != a.node.parentNode && (k.LIST_TAGS[a.node.parentNode.tagName] && 1 === a.node.parentNode.childNodes.length ? k(a.node.parentNode).remove() : k(a.node).remove()), this.lines.remove(a)
                }, a.prototype.setHTML = function(a) {
                    return a = i.stripComments(a), a = i.stripWhitespace(a), this.root.innerHTML = a, this.lines = new h, this.rebuild()
                }, a.prototype.splitLine = function(a, b) {
                    var c, d, e, f;
                    return b = Math.min(b, a.length - 1), f = k(a.node).split(b, !0), c = f[0], d = f[1], a.node = c, a.rebuild(), e = this.insertLineBefore(d, a.next), e.formats = j.clone(a.formats), e.resetContent(), e
                }, a.prototype.toDelta = function() {
                    var a, b;
                    return b = this.lines.toArray(), a = new d, j.each(b, function(b) {
                        return j.each(b.delta.ops, function(b) {
                            return a.push(b)
                        })
                    }), a
                }, a
            }(), b.exports = e
        }, {
            "../lib/dom": 17,
            "../lib/linked-list": 18,
            "./format": 10,
            "./line": 12,
            "./normalizer": 13,
            lodash: 1,
            "rich-text/lib/delta": 3
        }],
        9: [function(a, b, c) {
            var d, e, f, g, h, i, j;
            i = a("lodash"), d = a("rich-text/lib/delta"), j = a("../lib/dom"), e = a("./document"), g = a("./line"), h = a("./selection"), f = function() {
                function a(a, b, c) {
                    this.root = a, this.quill = b, this.options = null != c ? c : {}, this.root.setAttribute("id", this.options.id), this.doc = new e(this.root, this.options), this.delta = this.doc.toDelta(), this.length = this.delta.length(), this.selection = new h(this.doc, this.quill), this.timer = setInterval(i.bind(this.checkUpdate, this), this.options.pollInterval), this.savedRange = null, this.quill.on("selection-change", function(a) {
                        return function(b) {
                            return a.savedRange = b
                        }
                    }(this)), this.options.readOnly || this.enable()
                }
                return a.sources = {
                    API: "api",
                    SILENT: "silent",
                    USER: "user"
                }, a.prototype.destroy = function() {
                    return clearInterval(this.timer)
                }, a.prototype.disable = function() {
                    return this.enable(!1)
                }, a.prototype.enable = function(a) {
                    return null == a && (a = !0), this.root.setAttribute("contenteditable", a)
                }, a.prototype.applyDelta = function(b, c) {
                    var d;
                    return d = this._update(), d && (b = d.transform(b, !0), d = b.transform(d, !1)), b.ops.length > 0 && (b = this._trackDelta(function(a) {
                        return function() {
                            var c;
                            return c = 0, i.each(b.ops, function(b) {
                                return i.isString(b.insert) ? (a._insertAt(c, b.insert, b.attributes), c += b.insert.length) : i.isNumber(b.insert) ? (a._insertEmbed(c, b.attributes), c += 1) : i.isNumber(b["delete"]) ? a._deleteAt(c, b["delete"]) : i.isNumber(b.retain) ? (i.each(b.attributes, function(d, e) {
                                    return a._formatAt(c, b.retain, e, d)
                                }), c += b.retain) : void 0
                            }), a.selection.shiftAfter(0, 0, i.bind(a.doc.optimizeLines, a.doc))
                        }
                    }(this)), this.delta = this.doc.toDelta(), this.length = this.delta.length(), this.innerHTML = this.root.innerHTML, b && c !== a.sources.SILENT && this.quill.emit(this.quill.constructor.events.TEXT_CHANGE, b, c)), d && d.ops.length > 0 && c !== a.sources.SILENT ? this.quill.emit(this.quill.constructor.events.TEXT_CHANGE, d, a.sources.USER) : void 0
                }, a.prototype.checkUpdate = function(b) {
                    var c;
                    return null == b && (b = "user"), null == this.root.parentNode ? clearInterval(this.timer) : (c = this._update(), c && (this.delta = this.delta.compose(c), this.length = this.delta.length(), this.quill.emit(this.quill.constructor.events.TEXT_CHANGE, c, b)), c && (b = a.sources.SILENT), this.selection.update(b))
                }, a.prototype.focus = function() {
                    return null != this.selection.range ? this.selection.setRange(this.selection.range) : this.root.focus()
                }, a.prototype.getBounds = function(a) {
                    var b, c, d, e, f, g, h;
                    return this.checkUpdate(), g = this.doc.findLeafAt(a, !0), d = g[0], e = g[1], null == d ? null : (c = this.root.parentNode.getBoundingClientRect(), h = "left", 0 === d.length ? b = d.node.parentNode.getBoundingClientRect() : j.VOID_TAGS[d.node.tagName] ? (b = d.node.getBoundingClientRect(), 1 === e && (h = "right")) : (f = document.createRange(), e < d.length ? (f.setStart(d.node, e), f.setEnd(d.node, e + 1)) : (f.setStart(d.node, e - 1), f.setEnd(d.node, e), h = "right"), b = f.getBoundingClientRect()), {
                        height: b.height,
                        left: b[h] - c.left,
                        top: b.top - c.top
                    })
                }, a.prototype._deleteAt = function(a, b) {
                    return 0 >= b ? void 0 : this.selection.shiftAfter(a, -1 * b, function(c) {
                        return function() {
                            var d, e, f, g, h, i, j;
                            for (j = c.doc.findLineAt(a), f = j[0], i = j[1], d = f, g = f.length - i <= b && i > 0; null != d && b > 0;) h = d.next, e = Math.min(d.length - i, b), 0 === i && b >= d.length ? c.doc.removeLine(d) : d.deleteText(i, e), b -= e, d = h, i = 0;
                            return g && f.next ? c.doc.mergeLines(f, f.next) : void 0
                        }
                    }(this))
                }, a.prototype._formatAt = function(a, b, c, d) {
                    return this.selection.shiftAfter(a, 0, function(e) {
                        return function() {
                            var f, g, h, i, j;
                            for (i = e.doc.findLineAt(a), g = i[0], h = i[1], j = []; null != g && b > 0;) f = Math.min(b, g.length - h - 1), g.formatText(h, f, c, d), b -= f, b > 0 && g.format(c, d), b -= 1, h = 0, j.push(g = g.next);
                            return j
                        }
                    }(this))
                }, a.prototype._insertEmbed = function(a, b) {
                    return this.selection.shiftAfter(a, 1, function(c) {
                        return function() {
                            var d, e, f;
                            return f = c.doc.findLineAt(a), d = f[0], e = f[1], d.insertEmbed(e, b)
                        }
                    }(this))
                }, a.prototype._insertAt = function(a, b, c) {
                    return null == c && (c = {}), this.selection.shiftAfter(a, b.length, function(d) {
                        return function() {
                            var e, f, g, h;
                            return b = b.replace(/\r\n?/g, "\n"), f = b.split("\n"), h = d.doc.findLineAt(a), e = h[0], g = h[1], i.each(f, function(a, b) {
                                var h;
                                return null == e || e.length <= g ? (b < f.length - 1 || a.length > 0) && (e = d.doc.appendLine(document.createElement(j.DEFAULT_BLOCK_TAG)), g = 0, e.insertText(g, a, c), e.format(c), h = null) : (e.insertText(g, a, c), b < f.length - 1 && (h = d.doc.splitLine(e, g + a.length), i.each(i.defaults({}, c, e.formats), function(a, b) {
                                    return e.format(b, c[b])
                                }), g = 0)), e = h
                            })
                        }
                    }(this))
                }, a.prototype._trackDelta = function(a) {
                    var b, c, d, e, f, g, h, j, k, l;
                    g = null != (k = this.savedRange) ? k.start : void 0, a(), c = this.doc.toDelta(), this.savedRange = this.selection.getRange(), d = null != (l = this.savedRange) ? l.start : void 0;
                    try {
                        if (null != g && null != d && g <= this.delta.length() && d <= c.length() && (j = this.delta.slice(g), f = c.slice(d), i.isEqual(j.ops, f.ops))) return h = this.delta.slice(0, g), e = c.slice(0, d), h.diff(e)
                    } catch (m) {
                        b = m
                    }
                    return this.delta.diff(c)
                }, a.prototype._update = function() {
                    var a;
                    return this.innerHTML === this.root.innerHTML ? !1 : (a = this._trackDelta(function(a) {
                        return function() {
                            return a.selection.preserve(i.bind(a.doc.rebuild, a.doc)), a.selection.shiftAfter(0, 0, i.bind(a.doc.optimizeLines, a.doc))
                        }
                    }(this)), this.innerHTML = this.root.innerHTML, a.ops.length > 0 ? a : !1)
                }, a
            }(), b.exports = f
        }, {
            "../lib/dom": 17,
            "./document": 8,
            "./line": 12,
            "./selection": 14,
            lodash: 1,
            "rich-text/lib/delta": 3
        }],
        10: [function(a, b, c) {
            var d, e, f;
            e = a("lodash"), f = a("../lib/dom"), d = function() {
                function a(a) {
                    this.config = a
                }
                return a.types = {
                    LINE: "line",
                    EMBED: "embed"
                }, a.FORMATS = {
                    bold: {
                        tag: "B",
                        prepare: "bold"
                    },
                    italic: {
                        tag: "I",
                        prepare: "italic"
                    },
                    underline: {
                        tag: "U",
                        prepare: "underline"
                    },
                    strike: {
                        tag: "S",
                        prepare: "strikeThrough"
                    },
                    color: {
                        style: "color",
                        "default": "rgb(0, 0, 0)",
                        prepare: "foreColor"
                    },
                    background: {
                        style: "backgroundColor",
                        "default": "rgb(255, 255, 255)",
                        prepare: "backColor"
                    },
                    font: {
                        style: "fontFamily",
                        "default": "'Helvetica', 'Arial', sans-serif",
                        prepare: "fontName"
                    },
                    size: {
                        style: "fontSize",
                        "default": "13px",
                        prepare: function(a) {
                            return document.execCommand("fontSize", !1, f.convertFontSize(a))
                        }
                    },
                    link: {
                        tag: "A",
                        add: function(a, b) {
                            return a.setAttribute("href", b), a
                        },
                        remove: function(a) {
                            return a.removeAttribute("href"), a
                        },
                        value: function(a) {
                            return a.getAttribute("href")
                        }
                    },
                    image: {
                        type: a.types.EMBED,
                        tag: "IMG",
                        attribute: "src"
                    },
                    align: {
                        type: a.types.LINE,
                        style: "textAlign",
                        "default": "left"
                    },
                    bullet: {
                        type: a.types.LINE,
                        exclude: "list",
                        parentTag: "UL",
                        tag: "LI"
                    },
                    list: {
                        type: a.types.LINE,
                        exclude: "bullet",
                        parentTag: "OL",
                        tag: "LI"
                    }
                }, a.prototype.add = function(b, c) {
                    var d, g, h, i, j;
                    return c ? this.value(b) === c ? b : (e.isString(this.config.parentTag) && (h = b.parentNode, h.tagName !== this.config.parentTag && (h = document.createElement(this.config.parentTag), f(b).wrap(h)), b.parentNode.tagName === (null != (i = b.parentNode.previousSibling) ? i.tagName : void 0) && f(b.parentNode.previousSibling).merge(b.parentNode), b.parentNode.tagName === (null != (j = b.parentNode.nextSibling) ? j.tagName : void 0) && f(b.parentNode).merge(b.parentNode.nextSibling)), e.isString(this.config.tag) && b.tagName !== this.config.tag && (d = document.createElement(this.config.tag), null != f.VOID_TAGS[d.tagName] ? (null != b.parentNode && f(b).replace(d), b = d) : this.isType(a.types.LINE) ? b = f(b).switchTag(this.config.tag).get() : (f(b).wrap(d), b = d)), (e.isString(this.config.style) || e.isString(this.config.attribute) || e.isString(this.config["class"])) && (e.isString(this.config["class"]) && (b = this.remove(b)), f(b).isTextNode() && (g = document.createElement(f.DEFAULT_INLINE_TAG), f(b).wrap(g), b = g), e.isString(this.config.style) && c !== this.config["default"] && (b.style[this.config.style] = c), e.isString(this.config.attribute) && b.setAttribute(this.config.attribute, c), e.isString(this.config["class"]) && f(b).addClass(this.config["class"] + c)), e.isFunction(this.config.add) && (b = this.config.add(b, c)), b) : this.remove(b)
                }, a.prototype.isType = function(a) {
                    return a === this.config.type
                }, a.prototype.match = function(a) {
                    var b, c, d, g, h;
                    if (!f(a).isElement()) return !1;
                    if (e.isString(this.config.parentTag) && (null != (g = a.parentNode) ? g.tagName : void 0) !== this.config.parentTag) return !1;
                    if (e.isString(this.config.tag) && a.tagName !== this.config.tag) return !1;
                    if (e.isString(this.config.style) && (!a.style[this.config.style] || a.style[this.config.style] === this.config["default"])) return !1;
                    if (e.isString(this.config.attribute) && !a.hasAttribute(this.config.attribute)) return !1;
                    if (e.isString(this.config["class"])) {
                        for (h = f(a).classes(), c = 0, d = h.length; d > c; c++)
                            if (b = h[c], 0 === b.indexOf(this.config["class"])) return !0;
                        return !1
                    }
                    return !0
                }, a.prototype.prepare = function(a) {
                    return e.isString(this.config.prepare) ? document.execCommand(this.config.prepare, !1, a) : e.isFunction(this.config.prepare) ? this.config.prepare(a) : void 0
                }, a.prototype.remove = function(b) {
                    var c, d, g, h;
                    if (!this.match(b)) return b;
                    if (e.isString(this.config.style) && (b.style[this.config.style] = "", b.getAttribute("style") || b.removeAttribute("style")), e.isString(this.config.attribute) && b.removeAttribute(this.config.attribute), e.isString(this.config["class"]))
                        for (h = f(b).classes(), d = 0, g = h.length; g > d; d++) c = h[d], 0 === c.indexOf(this.config["class"]) && f(b).removeClass(c);
                    if (e.isString(this.config.tag))
                        if (this.isType(a.types.LINE)) e.isString(this.config.parentTag) && (null != b.previousSibling && f(b).splitBefore(b.parentNode.parentNode), null != b.nextSibling && f(b.nextSibling).splitBefore(b.parentNode.parentNode)), b = f(b).switchTag(f.DEFAULT_BLOCK_TAG).get();
                        else {
                            if (this.isType(a.types.EMBED)) return void f(b).remove();
                            b = f(b).switchTag(f.DEFAULT_INLINE_TAG).get()
                        }
                    return e.isString(this.config.parentTag) && f(b.parentNode).unwrap(), e.isFunction(this.config.remove) && (b = this.config.remove(b)), b.tagName !== f.DEFAULT_INLINE_TAG || b.hasAttributes() || (b = f(b).unwrap()), b
                }, a.prototype.value = function(a) {
                    var b, c, d, g;
                    if (!this.match(a)) return void 0;
                    if (this.config.value) return this.config.value(a);
                    if (e.isString(this.config.attribute)) return a.getAttribute(this.config.attribute) || void 0;
                    if (e.isString(this.config.style)) return a.style[this.config.style] || void 0;
                    if (e.isString(this.config["class"])) {
                        for (g = f(a).classes(), c = 0, d = g.length; d > c; c++)
                            if (b = g[c], 0 === b.indexOf(this.config["class"])) return b.slice(this.config["class"].length)
                    } else if (e.isString(this.config.tag)) return !0;
                    return void 0
                }, a
            }(), b.exports = d
        }, {
            "../lib/dom": 17,
            lodash: 1
        }],
        11: [function(a, b, c) {
            var d, e, f, g, h, i = function(a, b) {
                    function c() {
                        this.constructor = a
                    }
                    for (var d in b) j.call(b, d) && (a[d] = b[d]);
                    return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
                },
                j = {}.hasOwnProperty;
            g = a("lodash"), h = a("../lib/dom"), d = a("./format"), f = a("../lib/linked-list"), e = function(a) {
                function b(a, c) {
                    this.node = a, this.formats = g.clone(c), this.text = h(this.node).text(), this.length = this.text.length, h(this.node).data(b.DATA_KEY, this)
                }
                return i(b, a), b.DATA_KEY = "leaf", b.isLeafNode = function(a) {
                    return h(a).isTextNode() || null == a.firstChild
                }, b.prototype.deleteText = function(a, c) {
                    var d;
                    if (c > 0) return this.text = this.text.slice(0, a) + this.text.slice(a + c), this.length = this.text.length, null != h.EMBED_TAGS[this.node.tagName] ? (d = document.createTextNode(this.text), h(d).data(b.DATA_KEY, this), this.node = h(this.node).replace(d).get()) : h(this.node).text(this.text)
                }, b.prototype.insertText = function(a, c) {
                    var d;
                    return this.text = this.text.slice(0, a) + c + this.text.slice(a), h(this.node).isTextNode() ? h(this.node).text(this.text) : (d = document.createTextNode(c), h(d).data(b.DATA_KEY, this), this.node.tagName === h.DEFAULT_BREAK_TAG ? this.node = h(this.node).replace(d).get() : (this.node.appendChild(d), this.node = d)), this.length = this.text.length
                }, b
            }(f.Node), b.exports = e
        }, {
            "../lib/dom": 17,
            "../lib/linked-list": 18,
            "./format": 10,
            lodash: 1
        }],
        12: [function(a, b, c) {
            var d, e, f, g, h, i, j, k, l = function(a, b) {
                    function c() {
                        this.constructor = a
                    }
                    for (var d in b) m.call(b, d) && (a[d] = b[d]);
                    return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
                },
                m = {}.hasOwnProperty;
            j = a("lodash"), d = a("rich-text/lib/delta"), k = a("../lib/dom"), e = a("./format"), f = a("./leaf"), g = a("./line"), h = a("../lib/linked-list"), i = a("./normalizer"), g = function(a) {
                function b(a, c) {
                    this.doc = a, this.node = c, this.formats = {}, this.rebuild(), b.__super__.constructor.call(this, this.node)
                }
                return l(b, a), b.DATA_KEY = "line", b.prototype.buildLeaves = function(a, b) {
                    return j.each(k(a).childNodes(), function(a) {
                        return function(c) {
                            var d;
                            return c = a.doc.normalizer.normalizeNode(c), d = j.clone(b), j.each(a.doc.formats, function(a, b) {
                                return !a.isType(e.types.LINE) && a.match(c) ? d[b] = a.value(c) : void 0
                            }), f.isLeafNode(c) ? a.leaves.append(new f(c, d)) : a.buildLeaves(c, d)
                        }
                    }(this))
                }, b.prototype.deleteText = function(a, b) {
                    var c, d, e;
                    if (b > 0) {
                        for (e = this.findLeafAt(a), d = e[0], a = e[1]; null != d && b > 0;) c = Math.min(b, d.length - a), d.deleteText(a, c), b -= c, d = d.next, a = 0;
                        return this.rebuild()
                    }
                }, b.prototype.findLeaf = function(a) {
                    return null != a ? k(a).data(f.DATA_KEY) : void 0
                }, b.prototype.findLeafAt = function(a, b) {
                    var c;
                    if (null == b && (b = !1), a >= this.length - 1) return [this.leaves.last, this.leaves.last.length];
                    for (c = this.leaves.first; null != c;) {
                        if (a < c.length || a === c.length && b) return [c, a];
                        a -= c.length, c = c.next
                    }
                    return [this.leaves.last, a - this.leaves.last.length]
                }, b.prototype.format = function(a, b) {
                    var c;
                    return j.isObject(a) ? c = a : (c = {}, c[a] = b), j.each(c, function(a) {
                        return function(b, c) {
                            var d, f;
                            return f = a.doc.formats[c], null != f ? (f.isType(e.types.LINE) && (f.config.exclude && a.formats[f.config.exclude] && (d = a.doc.formats[f.config.exclude], null != d && (a.node = d.remove(a.node), delete a.formats[f.config.exclude])), a.node = f.add(a.node, b)), b ? a.formats[c] = b : delete a.formats[c]) : void 0
                        }
                    }(this)), this.resetContent()
                }, b.prototype.formatText = function(a, b, c, d) {
                    var f, g, h, i, j, l, m, n, o, p;
                    if (l = this.findLeafAt(a), g = l[0], h = l[1], f = this.doc.formats[c], null != f && f.config.type !== e.types.LINE) {
                        for (; null != g && b > 0;) {
                            if (j = g.next, d && g.formats[c] !== d || !d && null != g.formats[c]) {
                                if (p = g.node, null != g.formats[c]) {
                                    for (k(p).splitBefore(this.node); !f.match(p);) p = p.parentNode;
                                    k(p).split(g.length)
                                }
                                h > 0 && (m = k(p).split(h), i = m[0], p = m[1]), g.length > h + b && (n = k(p).split(b), p = n[0], o = n[1]), f.add(p, d)
                            }
                            b -= g.length - h, h = 0, g = j
                        }
                        return this.rebuild()
                    }
                }, b.prototype._insert = function(a, b, c) {
                    var d, e, f, g, h, i;
                    return h = this.findLeafAt(a), d = h[0], e = h[1], b = j.reduce(c, function(a) {
                        return function(b, c, d) {
                            var e;
                            return e = a.doc.formats[d], null != e && (b = e.add(b, c)), b
                        }
                    }(this), b), i = k(d.node).split(e), g = i[0], f = i[1], f && (f = k(f).splitBefore(this.node).get()), this.node.insertBefore(b, f), this.rebuild()
                }, b.prototype.insertEmbed = function(a, b) {
                    var c, d, f, g, h, i, l, m;
                    return l = this.findLeafAt(a), d = l[0], f = l[1], m = k(d.node).split(f), i = m[0], g = m[1], c = j.find(Object.keys(b), function(a) {
                        return function(b) {
                            return a.doc.formats[b].isType(e.types.EMBED)
                        }
                    }(this)), h = this.doc.formats[c].add({}, b[c]), b = j.clone(b), delete b[c], this._insert(a, h, b)
                }, b.prototype.insertText = function(a, b, c) {
                    var d, e, f;
                    return null == c && (c = {}), b.length > 0 ? (f = this.findLeafAt(a), d = f[0], e = f[1], j.isEqual(d.formats, c) ? (d.insertText(e, b), this.resetContent()) : this._insert(a, document.createTextNode(b), c)) : void 0
                }, b.prototype.optimize = function() {
                    return i.optimizeLine(this.node), this.rebuild()
                }, b.prototype.rebuild = function(a) {
                    return null == a && (a = !1), !a && null != this.outerHTML && this.outerHTML === this.node.outerHTML && j.all(this.leaves.toArray(), function(a) {
                        return function(b) {
                            return k(b.node).isAncestor(a.node)
                        }
                    }(this)) ? !1 : (this.node = this.doc.normalizer.normalizeNode(this.node), 0 !== k(this.node).length() || this.node.querySelector(k.DEFAULT_BREAK_TAG) || this.node.appendChild(document.createElement(k.DEFAULT_BREAK_TAG)), this.leaves = new h, this.formats = j.reduce(this.doc.formats, function(a) {
                        return function(b, c, d) {
                            return c.isType(e.types.LINE) && (c.match(a.node) ? b[d] = c.value(a.node) : delete b[d]), b
                        }
                    }(this), this.formats), this.buildLeaves(this.node, {}), this.resetContent(), !0)
                }, b.prototype.resetContent = function() {
                    return k(this.node).data(b.DATA_KEY, this), this.outerHTML = this.node.outerHTML, this.length = 1, this.delta = new d, j.each(this.leaves.toArray(), function(a) {
                        return function(b) {
                            return a.length += b.length, null != k.EMBED_TAGS[b.node.tagName] ? a.delta.insert(1, b.formats) : a.delta.insert(b.text, b.formats)
                        }
                    }(this)), this.delta.insert("\n", this.formats)
                }, b
            }(h.Node), b.exports = g
        }, {
            "../lib/dom": 17,
            "../lib/linked-list": 18,
            "./format": 10,
            "./leaf": 11,
            "./line": 12,
            "./normalizer": 13,
            lodash: 1,
            "rich-text/lib/delta": 3
        }],
        13: [function(a, b, c) {
            var d, e, f, g;
            e = a("lodash"), g = a("../lib/dom"), f = function(a) {
                return a = a.replace(/(?:^|[-_])(\w)/g, function(a, b) {
                    return b ? b.toUpperCase() : ""
                }), a.charAt(0).toLowerCase() + a.slice(1)
            }, d = function() {
                function a() {
                    this.whitelist = {
                        styles: {},
                        tags: {}
                    }, this.whitelist.tags[g.DEFAULT_BREAK_TAG] = !0, this.whitelist.tags[g.DEFAULT_BLOCK_TAG] = !0, this.whitelist.tags[g.DEFAULT_INLINE_TAG] = !0
                }
                return a.ALIASES = {
                    STRONG: "B",
                    EM: "I",
                    DEL: "S",
                    STRIKE: "S"
                }, a.ATTRIBUTES = {
                    color: "color",
                    face: "fontFamily",
                    size: "fontSize"
                }, a.prototype.addFormat = function(a) {
                    return null != a.tag && (this.whitelist.tags[a.tag] = !0),
                        null != a.parentTag && (this.whitelist.tags[a.parentTag] = !0), null != a.style ? this.whitelist.styles[a.style] = !0 : void 0
                }, a.prototype.normalizeLine = function(b) {
                    return b = a.wrapInline(b), b = a.handleBreaks(b), "LI" === b.tagName && a.flattenList(b), b = a.pullBlocks(b), b = this.normalizeNode(b), a.unwrapText(b), null != b && null != g.LIST_TAGS[b.tagName] && (b = b.firstChild), b
                }, a.prototype.normalizeNode = function(b) {
                    return g(b).isTextNode() ? b : (e.each(a.ATTRIBUTES, function(a, c) {
                        var d;
                        return b.hasAttribute(c) ? (d = b.getAttribute(c), "size" === c && (d = g.convertFontSize(d)), b.style[a] = d, b.removeAttribute(c)) : void 0
                    }), "bold" === b.style.fontWeight && (b.style.fontWeight = "", g(b).wrap(document.createElement("b"))), this.whitelistStyles(b), this.whitelistTags(b))
                }, a.prototype.whitelistStyles = function(a) {
                    var b, c;
                    return b = g(a).styles(), c = e.omit(b, function(a) {
                        return function(b, c) {
                            return null == a.whitelist.styles[f(c)]
                        }
                    }(this)), Object.keys(c).length < Object.keys(b).length ? Object.keys(c).length > 0 ? g(a).styles(c, !0) : a.removeAttribute("style") : void 0
                }, a.prototype.whitelistTags = function(b) {
                    return g(b).isElement() ? (null != a.ALIASES[b.tagName] ? b = g(b).switchTag(a.ALIASES[b.tagName]).get() : null == this.whitelist.tags[b.tagName] && (b = null != g.BLOCK_TAGS[b.tagName] ? g(b).switchTag(g.DEFAULT_BLOCK_TAG).get() : b.hasAttributes() || null == b.firstChild ? g(b).switchTag(g.DEFAULT_INLINE_TAG).get() : g(b).unwrap()), b) : b
                }, a.flattenList = function(a) {
                    var b, c, d;
                    return d = a.nextSibling, b = e.map(a.querySelectorAll("li")), b.forEach(function(b) {
                        return a.parentNode.insertBefore(b, d), d = b.nextSibling
                    }), c = e.map(a.querySelectorAll(Object.keys(g.LIST_TAGS).join(","))), c.forEach(function(a) {
                        return g(a).remove()
                    })
                }, a.handleBreaks = function(a) {
                    var b;
                    return b = e.map(a.querySelectorAll(g.DEFAULT_BREAK_TAG)), e.each(b, function(b) {
                        return function(b) {
                            return null == b.nextSibling || g.isIE(10) && null == b.previousSibling ? void 0 : g(b.nextSibling).splitBefore(a.parentNode)
                        }
                    }(this)), a
                }, a.optimizeLine = function(a) {
                    var b, c, d, f;
                    for (a.normalize(), b = g(a).length(), d = g(a).descendants(), f = []; d.length > 0;) c = d.pop(), null != (null != c ? c.parentNode : void 0) && null == g.EMBED_TAGS[c.tagName] && (c.tagName === g.DEFAULT_BREAK_TAG ? 0 !== b ? f.push(g(c).remove()) : f.push(void 0) : 0 === g(c).length() ? (d.push(c.nextSibling), f.push(g(c).unwrap())) : null != c.previousSibling && c.tagName === c.previousSibling.tagName && e.isEqual(g(c).attributes(), g(c.previousSibling).attributes()) ? (d.push(c.firstChild), f.push(g(c.previousSibling).merge(c))) : f.push(void 0));
                    return f
                }, a.pullBlocks = function(b) {
                    var c;
                    for (c = b.firstChild; null != c;) {
                        if (null != g.BLOCK_TAGS[c.tagName] && "LI" !== c.tagName) {
                            g(c).isolate(b.parentNode), null != g.LIST_TAGS[c.tagName] && c.firstChild ? (g(c.parentNode).unwrap(), null == b.parentNode && (b = c)) : (g(c).unwrap(), a.pullBlocks(b));
                            break
                        }
                        c = c.nextSibling
                    }
                    return b
                }, a.stripComments = function(a) {
                    return a.replace(/<!--[\s\S]*?-->/g, "")
                }, a.stripWhitespace = function(a) {
                    return a = a.trim(), a = a.replace(/(\r?\n|\r)+/g, " "), a = a.replace(/\>\s+\</g, "><")
                }, a.wrapInline = function(a) {
                    var b, c;
                    if (null != g.BLOCK_TAGS[a.tagName]) return a;
                    for (b = document.createElement(g.DEFAULT_BLOCK_TAG), a.parentNode.insertBefore(b, a); null != a && null == g.BLOCK_TAGS[a.tagName];) c = a.nextSibling, b.appendChild(a), a = c;
                    return b
                }, a.unwrapText = function(a) {
                    var b;
                    return b = e.map(a.querySelectorAll(g.DEFAULT_INLINE_TAG)), e.each(b, function(a) {
                        return a.hasAttributes() ? void 0 : g(a).unwrap()
                    })
                }, a
            }(), b.exports = d
        }, {
            "../lib/dom": 17,
            lodash: 1
        }],
        14: [function(a, b, c) {
            var d, e, f, g, h, i;
            h = a("lodash"), i = a("../lib/dom"), d = a("./leaf"), e = a("./normalizer"), f = a("../lib/range"), g = function() {
                function a(a, b) {
                    this.doc = a, this.emitter = b, this.focus = !1, this.range = new f(0, 0), this.nullDelay = !1, this.update("silent")
                }
                return a.prototype.checkFocus = function() {
                    return document.activeElement === this.doc.root
                }, a.prototype.getRange = function(a) {
                    var b, c, d;
                    return null == a && (a = !1), this.checkFocus() ? (c = this._getNativeRange(), null == c ? null : (d = this._positionToIndex(c.startContainer, c.startOffset), b = c.startContainer === c.endContainer && c.startOffset === c.endOffset ? d : this._positionToIndex(c.endContainer, c.endOffset), new f(Math.min(d, b), Math.max(d, b)))) : a ? this.range : null
                }, a.prototype.preserve = function(a) {
                    var b, c, d, e, f, g, h, i, j;
                    return d = this._getNativeRange(), null != d && this.checkFocus() ? (e = this._encodePosition(d.startContainer, d.startOffset), i = e[0], j = e[1], f = this._encodePosition(d.endContainer, d.endOffset), b = f[0], c = f[1], a(), g = this._decodePosition(i, j), i = g[0], j = g[1], h = this._decodePosition(b, c), b = h[0], c = h[1], this._setNativeRange(i, j, b, c)) : a()
                }, a.prototype.setRange = function(a, b) {
                    var c, d, e, f, g, h, i;
                    return null != a ? (e = this._indexToPosition(a.start), h = e[0], i = e[1], a.isCollapsed() ? (f = [h, i], c = f[0], d = f[1]) : (g = this._indexToPosition(a.end), c = g[0], d = g[1]), this._setNativeRange(h, i, c, d)) : this._setNativeRange(null), this.update(b)
                }, a.prototype.shiftAfter = function(a, b, c) {
                    var d;
                    return d = this.getRange(), c(), null != d ? (d.shift(a, b), this.setRange(d, "silent")) : void 0
                }, a.prototype.update = function(a) {
                    var b, c, d, e;
                    return c = this.checkFocus(), d = this.getRange(!0), b = "silent" !== a && (!f.compare(d, this.range) || c !== this.focus), e = c ? d : null, null !== e || "user" !== a || this.nullDelay ? (this.nullDelay = !1, this.range = d, this.focus = c, b ? this.emitter.emit(this.emitter.constructor.events.SELECTION_CHANGE, e, a) : void 0) : this.nullDelay = !0
                }, a.prototype._decodePosition = function(a, b) {
                    var c;
                    return i(a).isElement() && (c = i(a.parentNode).childNodes().indexOf(a), b += c, a = a.parentNode), [a, b]
                }, a.prototype._encodePosition = function(a, b) {
                    for (var c;;) {
                        if (i(a).isTextNode() || a.tagName === i.DEFAULT_BREAK_TAG || null != i.EMBED_TAGS[a.tagName]) return [a, b];
                        if (b < a.childNodes.length) a = a.childNodes[b], b = 0;
                        else {
                            if (0 === a.childNodes.length) return null == this.doc.normalizer.whitelist.tags[a.tagName] && (c = document.createTextNode(""), a.appendChild(c), a = c), [a, 0];
                            if (a = a.lastChild, !i(a).isElement()) return [a, i(a).length()];
                            if (a.tagName === i.DEFAULT_BREAK_TAG || null != i.EMBED_TAGS[a.tagName]) return [a, 1];
                            b = a.childNodes.length
                        }
                    }
                }, a.prototype._getNativeRange = function() {
                    var a, b;
                    return b = document.getSelection(), (null != b ? b.rangeCount : void 0) > 0 && (a = b.getRangeAt(0), i(a.startContainer).isAncestor(this.doc.root, !0) && (a.startContainer === a.endContainer || i(a.endContainer).isAncestor(this.doc.root, !0))) ? a : null
                }, a.prototype._indexToPosition = function(a) {
                    var b, c, d;
                    return 0 === this.doc.lines.length ? [this.doc.root, 0] : (d = this.doc.findLeafAt(a, !0), b = d[0], c = d[1], this._decodePosition(b.node, c))
                }, a.prototype._positionToIndex = function(a, b) {
                    var c, d, e, f, g, h;
                    if (i.isIE(10) && "BR" === a.tagName && 1 === b && (b = 0), h = this._encodePosition(a, b), d = h[0], b = h[1], f = this.doc.findLine(d), null == f) return 0;
                    for (c = f.findLeaf(d), g = 0; null != f.prev;) f = f.prev, g += f.length;
                    if (null == c) return g;
                    for (e = 0; null != c.prev;) c = c.prev, e += c.length;
                    return g + e + b
                }, a.prototype._setNativeRange = function(a, b, c, d) {
                    var e, f;
                    if (f = document.getSelection())
                        if (null != a) {
                            if (this.checkFocus() || this.doc.root.focus(), e = this._getNativeRange(), null == e || a !== e.startContainer || b !== e.startOffset || c !== e.endContainer || d !== e.endOffset) return f.removeAllRanges(), e = document.createRange(), e.setStart(a, b), e.setEnd(c, d), f.addRange(e)
                        } else if (f.removeAllRanges(), this.doc.root.blur(), i.isIE(11) && !i.isIE(9)) return document.body.focus()
                }, a
            }(), b.exports = g
        }, {
            "../lib/dom": 17,
            "../lib/range": 20,
            "./leaf": 11,
            "./normalizer": 13,
            lodash: 1
        }],
        15: [function(a, b, c) {
            a("./modules/authorship"), a("./modules/image-tooltip"), a("./modules/keyboard"), a("./modules/link-tooltip"), a("./modules/multi-cursor"), a("./modules/paste-manager"), a("./modules/toolbar"), a("./modules/tooltip"), a("./modules/undo-manager"), b.exports = a("./quill")
        }, {
            "./modules/authorship": 21,
            "./modules/image-tooltip": 22,
            "./modules/keyboard": 23,
            "./modules/link-tooltip": 24,
            "./modules/multi-cursor": 25,
            "./modules/paste-manager": 26,
            "./modules/toolbar": 27,
            "./modules/tooltip": 28,
            "./modules/undo-manager": 29,
            "./quill": 30
        }],
        16: [function(a, b, c) {
            var d, e, f, g = function(a, b) {
                    function c() {
                        this.constructor = a
                    }
                    for (var d in b) h.call(b, d) && (a[d] = b[d]);
                    return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
                },
                h = {}.hasOwnProperty;
            f = a("./dom"), e = a("./picker"), d = function(a) {
                function b() {
                    b.__super__.constructor.apply(this, arguments), f(this.container).addClass("ql-color-picker")
                }
                return g(b, a), b.prototype.buildItem = function(a, c, d) {
                    var e;
                    return e = b.__super__.buildItem.call(this, a, c, d), e.style.backgroundColor = c.value, e
                }, b
            }(e), b.exports = d
        }, {
            "./dom": 17,
            "./picker": 19
        }],
        17: [function(a, b, c) {
            var d, e, f, g, h, i = function(a, b) {
                    return function() {
                        return a.apply(b, arguments)
                    }
                },
                j = function(a, b) {
                    function c() {
                        this.constructor = a
                    }
                    for (var d in b) k.call(b, d) && (a[d] = b[d]);
                    return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
                },
                k = {}.hasOwnProperty;
            f = a("lodash"), h = null, e = function() {
                function a(a) {
                    this.node = a, this.trigger = i(this.trigger, this)
                }
                return a.prototype.addClass = function(a) {
                    return this.hasClass(a) ? void 0 : (null != this.node.classList ? this.node.classList.add(a) : null != this.node.className && (this.node.className = (this.node.className + " " + a).trim()), this)
                }, a.prototype.attributes = function(a) {
                    var b, c, d, e, g, h;
                    if (a) return f.each(a, function(a) {
                        return function(b, c) {
                            return a.node.setAttribute(c, b)
                        }
                    }(this)), this;
                    if (null == this.node.attributes) return {};
                    for (a = {}, g = this.node.attributes, c = d = 0, e = g.length; e > d; c = ++d) h = g[c], b = this.node.attributes[c], a[b.name] = b.value;
                    return a
                }, a.prototype.child = function(a) {
                    var b, c;
                    for (b = this.node.firstChild, c = g(b).length(); null != b && !(c > a);) a -= c, b = b.nextSibling, c = g(b).length();
                    return null == b && (b = this.node.lastChild, a = g(b).length()), [b, a]
                }, a.prototype.childNodes = function() {
                    return f.map(this.node.childNodes)
                }, a.prototype.classes = function() {
                    return this.node.className.split(/\s+/)
                }, a.prototype.data = function(a, b) {
                    var c;
                    return null != b ? (null == this.node["ql-data"] && (this.node["ql-data"] = {}), this.node["ql-data"][a] = b, this) : null != (c = this.node["ql-data"]) ? c[a] : void 0
                }, a.prototype.descendants = function() {
                    return f.map(this.node.getElementsByTagName("*"))
                }, a.prototype.get = function() {
                    return this.node
                }, a.prototype.hasClass = function(a) {
                    return null != this.node.classList ? this.node.classList.contains(a) : null != this.node.className ? this.classes().indexOf(a) > -1 : !1
                }, a.prototype.isAncestor = function(a, b) {
                    var c;
                    if (null == b && (b = !1), a === this.node) return b;
                    for (c = this.node; c;) {
                        if (c === a) return !0;
                        c = c.parentNode
                    }
                    return !1
                }, a.prototype.isElement = function() {
                    var a;
                    return (null != (a = this.node) ? a.nodeType : void 0) === g.ELEMENT_NODE
                }, a.prototype.isTextNode = function() {
                    var a;
                    return (null != (a = this.node) ? a.nodeType : void 0) === g.TEXT_NODE
                }, a.prototype.isolate = function(a) {
                    return null != this.node.nextSibling && g(this.node.nextSibling).splitBefore(a), this.splitBefore(a), this
                }, a.prototype.length = function() {
                    var a;
                    return null == this.node ? 0 : (a = this.text().length, this.isElement() && (a += this.node.querySelectorAll(Object.keys(g.EMBED_TAGS).join(",")).length), a)
                }, a.prototype.merge = function(a) {
                    var b;
                    return b = g(a), this.isElement() ? (b.moveChildren(this.node), this.normalize()) : this.text(this.text() + b.text()), b.remove(), this
                }, a.prototype.moveChildren = function(a) {
                    return f.each(this.childNodes(), function(b) {
                        return a.appendChild(b)
                    }), this
                }, a.prototype.nextLineNode = function(a) {
                    var b;
                    return b = this.node.nextSibling, null == b && this.node.parentNode !== a && (b = this.node.parentNode.nextSibling), null != b && null != g.LIST_TAGS[b.tagName] && (b = b.firstChild), b
                }, a.prototype.normalize = function() {
                    var a, b, c, d;
                    for (b = this.node.firstChild; null != b;) d = b.nextSibling, a = g(b), null != d && g(d).isTextNode() && (0 === a.text().length ? a.remove() : a.isTextNode() && (c = d.nextSibling, a.merge(d), d = c)), b = d;
                    return this
                }, a.prototype.on = function(a, b) {
                    return this.node.addEventListener(a, function(c) {
                        return function(d) {
                            var e, f;
                            return e = !h || "keydown" !== a && "keyup" !== a ? d : h, f = b.call(c.node, e), f || (d.preventDefault(), d.stopPropagation()), f
                        }
                    }(this)), this
                }, a.prototype.remove = function() {
                    var a;
                    return null != (a = this.node.parentNode) && a.removeChild(this.node), this.node = null, null
                }, a.prototype.removeClass = function(a) {
                    var b;
                    if (this.hasClass(a)) return null != this.node.classList ? this.node.classList.remove(a) : null != this.node.className && (b = this.classes(), b.splice(b.indexOf(a), 1), this.node.className = b.join(" ")), this.node.getAttribute("class") || this.node.removeAttribute("class"), this
                }, a.prototype.replace = function(a) {
                    return this.node.parentNode.replaceChild(a, this.node), this.node = a, this
                }, a.prototype.splitBefore = function(a, b) {
                    var c, d, e, f;
                    if (null == b && (b = !1), this.node === a || this.node.parentNode === a) return this;
                    if (null != this.node.previousSibling || b) {
                        for (e = this.node.parentNode, d = e.cloneNode(!1), e.parentNode.insertBefore(d, e.nextSibling), f = this.node; null != f;) c = f.nextSibling, d.appendChild(f), f = c;
                        return g(d).splitBefore(a)
                    }
                    return g(this.node.parentNode).splitBefore(a)
                }, a.prototype.split = function(a, b) {
                    var c, d, e, f, h, i, j, k, l, m;
                    if (null == b && (b = !1), j = this.length(), a = Math.max(0, a), a = Math.min(a, j), !b && 0 === a) return [this.node.previousSibling, this.node, !1];
                    if (!b && a === j) return [this.node, this.node.nextSibling, !1];
                    if (this.node.nodeType === g.TEXT_NODE) return c = this.node.splitText(a), [this.node, c, !0];
                    for (h = this.node, m = this.node.cloneNode(!1), this.node.parentNode.insertBefore(m, h.nextSibling), k = this.child(a), d = k[0], a = k[1], l = g(d).split(a), e = l[0], f = l[1]; null !== f;) i = f.nextSibling, m.appendChild(f), f = i;
                    return [h, m, !0]
                }, a.prototype.styles = function(a, b) {
                    var c, d;
                    return null == b && (b = !1), a ? (b || (a = f.defaults(a, this.styles())), d = f.map(a, function(a, b) {
                        return b + ": " + a
                    }).join("; ") + ";", this.node.setAttribute("style", d), this) : (d = this.node.getAttribute("style") || "", c = f.reduce(d.split(";"), function(a, b) {
                        var c, d, e;
                        return d = b.split(":"), c = d[0], e = d[1], c && e && (c = c.trim(), e = e.trim(), a[c.toLowerCase()] = e), a
                    }, {}))
                }, a.prototype.switchTag = function(a) {
                    var b, c;
                    return a = a.toUpperCase(), this.node.tagName === a ? this : (c = document.createElement(a), b = this.attributes(), null == g.VOID_TAGS[a] && this.moveChildren(c), this.replace(c), this.node = c, this.attributes(b))
                }, a.prototype.text = function(a) {
                    if (null != a) {
                        switch (this.node.nodeType) {
                            case g.ELEMENT_NODE:
                                this.node.textContent = a;
                                break;
                            case g.TEXT_NODE:
                                this.node.data = a
                        }
                        return this
                    }
                    switch (this.node.nodeType) {
                        case g.ELEMENT_NODE:
                            return this.node.tagName === g.DEFAULT_BREAK_TAG ? "" : null != g.EMBED_TAGS[this.node.tagName] ? g.EMBED_TEXT : null != this.node.textContent ? this.node.textContent : "";
                        case g.TEXT_NODE:
                            return this.node.data || "";
                        default:
                            return ""
                    }
                }, a.prototype.textNodes = function() {
                    var a, b, c;
                    for (c = document.createTreeWalker(this.node, NodeFilter.SHOW_TEXT, null, !1), b = []; a = c.nextNode();) b.push(a);
                    return b
                }, a.prototype.toggleClass = function(a, b) {
                    return null == b && (b = !this.hasClass(a)), b ? this.addClass(a) : this.removeClass(a), this
                }, a.prototype.trigger = function(a, b) {
                    var c, d, e;
                    return null == b && (b = {}), ["keypress", "keydown", "keyup"].indexOf(a) < 0 ? (c = document.createEvent("Event"), c.initEvent(a, b.bubbles, b.cancelable)) : (c = document.createEvent("KeyboardEvent"), h = f.clone(b), f.isNumber(b.key) ? h.which = b.key : f.isString(b.key) ? h.which = b.key.toUpperCase().charCodeAt(0) : h.which = 0, g.isIE(10) ? (e = [], b.altKey && e.push("Alt"), b.ctrlKey && e.push("Control"), b.metaKey && e.push("Meta"), b.shiftKey && e.push("Shift"), c.initKeyboardEvent(a, b.bubbles, b.cancelable, window, 0, 0, e.join(" "), null, null)) : (d = f.isFunction(c.initKeyboardEvent) ? "initKeyboardEvent" : "initKeyEvent", c[d](a, b.bubbles, b.cancelable, window, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, 0, 0))), this.node.dispatchEvent(c), h = null, this
                }, a.prototype.unwrap = function() {
                    var a, b;
                    return b = this.node.firstChild, a = this.node.nextSibling, f.each(this.childNodes(), function(b) {
                        return function(c) {
                            return b.node.parentNode.insertBefore(c, a)
                        }
                    }(this)), this.remove(), b
                }, a.prototype.wrap = function(a) {
                    var b;
                    for (null != this.node.parentNode && this.node.parentNode.insertBefore(a, this.node), b = a; null != b.firstChild;) b = a.firstChild;
                    return b.appendChild(this.node), this
                }, a
            }(), d = function(a) {
                function b() {
                    return b.__super__.constructor.apply(this, arguments)
                }
                return j(b, a), b.prototype["default"] = function() {
                    return this.node.querySelector("option[selected]")
                }, b.prototype.option = function(a, b) {
                    var c, d, e, g, h, i;
                    if (null == b && (b = !0), i = f.isElement(a) ? a.value : a) {
                        for (i = i.replace(/[^\w]+/g, ""), h = this.node.children, d = e = 0, g = h.length; g > e; d = ++e)
                            if (c = h[d], c.value.replace(/[^\w]+/g, "") === i) {
                                this.node.selectedIndex = d;
                                break
                            }
                    } else this.node.selectedIndex = -1;
                    return b && this.trigger("change"), this
                }, b.prototype.reset = function(a) {
                    var b;
                    return null == a && (a = !0), b = this["default"](), null != b ? b.selected = !0 : this.node.selectedIndex = 0, a && this.trigger("change"), this
                }, b.prototype.value = function() {
                    return this.node.selectedIndex > -1 ? this.node.options[this.node.selectedIndex].value : ""
                }, b
            }(e), g = function(a) {
                return "SELECT" === (null != a ? a.tagName : void 0) ? new d(a) : new e(a)
            }, g = f.extend(g, {
                ELEMENT_NODE: 1,
                NOBREAK_SPACE: "&nbsp;",
                TEXT_NODE: 3,
                ZERO_WIDTH_NOBREAK_SPACE: "\ufeff",
                DEFAULT_BLOCK_TAG: "DIV",
                DEFAULT_BREAK_TAG: "BR",
                DEFAULT_INLINE_TAG: "SPAN",
                EMBED_TEXT: "!",
                FONT_SIZES: {
                    "10px": 1,
                    "13px": 2,
                    "16px": 3,
                    "18px": 4,
                    "24px": 5,
                    "32px": 6,
                    "48px": 7
                },
                KEYS: {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    ESCAPE: 27,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    DELETE: 46
                },
                BLOCK_TAGS: {
                    ADDRESS: "ADDRESS",
                    ARTICLE: "ARTICLE",
                    ASIDE: "ASIDE",
                    AUDIO: "AUDIO",
                    BLOCKQUOTE: "BLOCKQUOTE",
                    CANVAS: "CANVAS",
                    DD: "DD",
                    DIV: "DIV",
                    DL: "DL",
                    FIGCAPTION: "FIGCAPTION",
                    FIGURE: "FIGURE",
                    FOOTER: "FOOTER",
                    FORM: "FORM",
                    H1: "H1",
                    H2: "H2",
                    H3: "H3",
                    H4: "H4",
                    H5: "H5",
                    H6: "H6",
                    HEADER: "HEADER",
                    HGROUP: "HGROUP",
                    LI: "LI",
                    OL: "OL",
                    OUTPUT: "OUTPUT",
                    P: "P",
                    PRE: "PRE",
                    SECTION: "SECTION",
                    TABLE: "TABLE",
                    TBODY: "TBODY",
                    TD: "TD",
                    TFOOT: "TFOOT",
                    TH: "TH",
                    THEAD: "THEAD",
                    TR: "TR",
                    UL: "UL",
                    VIDEO: "VIDEO"
                },
                EMBED_TAGS: {
                    IMG: "IMG"
                },
                LINE_TAGS: {
                    DIV: "DIV",
                    LI: "LI"
                },
                LIST_TAGS: {
                    OL: "OL",
                    UL: "UL"
                },
                VOID_TAGS: {
                    AREA: "AREA",
                    BASE: "BASE",
                    BR: "BR",
                    COL: "COL",
                    COMMAND: "COMMAND",
                    EMBED: "EMBED",
                    HR: "HR",
                    IMG: "IMG",
                    INPUT: "INPUT",
                    KEYGEN: "KEYGEN",
                    LINK: "LINK",
                    META: "META",
                    PARAM: "PARAM",
                    SOURCE: "SOURCE",
                    TRACK: "TRACK",
                    WBR: "WBR"
                },
                convertFontSize: function(a) {
                    var b, c, d, e;
                    f.isString(a) && a.indexOf("px") > -1 ? (d = Object.keys(g.FONT_SIZES), e = f.values(g.FONT_SIZES)) : (e = Object.keys(g.FONT_SIZES), d = f.values(g.FONT_SIZES));
                    for (b in d)
                        if (c = d[b], parseInt(a) <= parseInt(c)) return e[b];
                    return f.last(e)
                },
                isIE: function(a) {
                    var b;
                    return b = document.documentMode, b && a >= b
                },
                isIOS: function() {
                    return /iPhone|iPad/i.test(navigator.userAgent)
                },
                isMac: function() {
                    return /Mac/i.test(navigator.platform)
                }
            }), b.exports = g
        }, {
            lodash: 1
        }],
        18: [function(a, b, c) {
            var d, e;
            e = function() {
                function a(a) {
                    this.data = a, this.prev = this.next = null
                }
                return a
            }(), d = function() {
                function a() {
                    this.length = 0, this.first = this.last = null
                }
                return a.Node = e, a.prototype.append = function(a) {
                    return null != this.first ? (a.next = null, this.last.next = a) : this.first = a, a.prev = this.last, this.last = a, this.length += 1
                }, a.prototype.insertAfter = function(a, b) {
                    return b.prev = a, null != a ? (b.next = a.next, null != a.next && (a.next.prev = b), a.next = b, a === this.last && (this.last = b)) : (b.next = this.first, this.first.prev = b, this.first = b), this.length += 1
                }, a.prototype.remove = function(a) {
                    return this.length > 1 ? (null != a.prev && (a.prev.next = a.next), null != a.next && (a.next.prev = a.prev), a === this.first && (this.first = a.next), a === this.last && (this.last = a.prev)) : this.first = this.last = null, a.prev = a.next = null, this.length -= 1
                }, a.prototype.toArray = function() {
                    var a, b;
                    for (a = [], b = this.first; null != b;) a.push(b), b = b.next;
                    return a
                }, a
            }(), b.exports = d
        }, {}],
        19: [function(a, b, c) {
            var d, e, f;
            e = a("lodash"), f = a("./dom"), d = function() {
                function a(a) {
                    this.select = a, this.container = document.createElement("span"), this.buildPicker(), f(this.container).addClass("ql-picker"), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), f(document).on("click", function(a) {
                        return function() {
                            return a.close(), !0
                        }
                    }(this)), f(this.label).on("click", function(a) {
                        return function() {
                            return e.defer(function() {
                                return f(a.container).toggleClass("ql-expanded")
                            }), !1
                        }
                    }(this)), f(this.select).on("change", function(a) {
                        return function() {
                            var b, c;
                            return a.select.selectedIndex > -1 && (b = a.container.querySelectorAll(".ql-picker-item")[a.select.selectedIndex], c = a.select.options[a.select.selectedIndex]), a.selectItem(b, !1), f(a.label).toggleClass("ql-active", c !== f(a.select)["default"]())
                        }
                    }(this))
                }
                return a.TEMPLATE = '<span class="ql-picker-label"></span><span class="ql-picker-options"></span>', a.prototype.buildItem = function(a, b, c) {
                    var d;
                    return d = document.createElement("span"), d.setAttribute("data-value", b.getAttribute("value")), f(d).addClass("ql-picker-item").text(f(b).text()).on("click", function(a) {
                        return function() {
                            return a.selectItem(d, !0), a.close()
                        }
                    }(this)), this.select.selectedIndex === c && this.selectItem(d, !1), d
                }, a.prototype.buildPicker = function() {
                    var b;
                    return e.each(f(this.select).attributes(), function(a) {
                        return function(b, c) {
                            return a.container.setAttribute(c, b)
                        }
                    }(this)), this.container.innerHTML = a.TEMPLATE, this.label = this.container.querySelector(".ql-picker-label"), b = this.container.querySelector(".ql-picker-options"), e.each(this.select.options, function(a) {
                        return function(c, d) {
                            var e;
                            return e = a.buildItem(b, c, d), b.appendChild(e)
                        }
                    }(this))
                }, a.prototype.close = function() {
                    return f(this.container).removeClass("ql-expanded")
                }, a.prototype.selectItem = function(a, b) {
                    var c, d;
                    return c = this.container.querySelector(".ql-selected"), null != c && f(c).removeClass("ql-selected"), null != a ? (d = a.getAttribute("data-value"), f(a).addClass("ql-selected"), f(this.label).text(f(a).text()), f(this.select).option(d, b), this.label.setAttribute("data-value", d)) : (this.label.innerHTML = "&nbsp;", this.label.removeAttribute("data-value"))
                }, a
            }(), b.exports = d
        }, {
            "./dom": 17,
            lodash: 1
        }],
        20: [function(a, b, c) {
            var d, e;
            e = a("lodash"), d = function() {
                function a(a, b) {
                    this.start = a, this.end = b
                }
                return a.compare = function(a, b) {
                    return a === b ? !0 : null == a || null == b ? !1 : a.equals(b)
                }, a.prototype.equals = function(a) {
                    return null == a ? !1 : this.start === a.start && this.end === a.end
                }, a.prototype.shift = function(a, b) {
                    var c;
                    return c = e.map([this.start, this.end], function(c) {
                        return a > c ? c : b >= 0 ? c + b : Math.max(a, c + b)
                    }), this.start = c[0], this.end = c[1], c
                }, a.prototype.isCollapsed = function() {
                    return this.start === this.end
                }, a
            }(), b.exports = d
        }, {
            lodash: 1
        }],
        21: [function(a, b, c) {
            var d, e, f, g, h;
            f = a("../quill"), g = f.require("lodash"), h = f.require("dom"), e = f.require("delta"), d = function() {
                function a(a, b) {
                    this.quill = a, this.options = b, null != this.options.button && this.attachButton(this.options.button), this.options.enabled && this.enable(), this.quill.addFormat("author", {
                        "class": "author-"
                    }), null != this.options.authorId && (this.quill.on(this.quill.constructor.events.PRE_EVENT, function(a) {
                        return function(b, c, d) {
                            var h, i;
                            return b === a.quill.constructor.events.TEXT_CHANGE && "user" === d ? (h = new e, i = {
                                author: a.options.authorId
                            }, g.each(c.ops, function(b) {
                                return null == b["delete"] ? null != b.insert || null != b.retain && null != b.attributes ? (b.attributes || (b.attributes = {}), b.attributes.author = a.options.authorId, h.retain(b.retain || b.insert.length || 1, i)) : h.retain(b.retain) : void 0
                            }), a.quill.updateContents(h, f.sources.SILENT)) : void 0
                        }
                    }(this)), this.addAuthor(this.options.authorId, this.options.color))
                }
                return a.DEFAULTS = {
                    authorId: null,
                    color: "transparent",
                    enabled: !1
                }, a.prototype.addAuthor = function(a, b) {
                    var c;
                    return c = {}, c[".authorship .author-" + a] = {
                        "background-color": "" + b
                    }, this.quill.theme.addStyles(c)
                }, a.prototype.attachButton = function(a) {
                    var b;
                    return b = h(a), b.on("click", function(a) {
                        return function() {
                            return b.toggleClass("ql-on"), a.enable($dom.hasClass("ql-on"))
                        }
                    }(this))
                }, a.prototype.enable = function(a) {
                    return null == a && (a = !0), h(this.quill.root).toggleClass("authorship", a)
                }, a.prototype.disable = function() {
                    return this.enable(!1)
                }, a
            }(), f.registerModule("authorship", d), b.exports = d
        }, {
            "../quill": 30
        }],
        22: [function(a, b, c) {
            var d, e, f, g, h, i, j, k = function(a, b) {
                    function c() {
                        this.constructor = a
                    }
                    for (var d in b) l.call(b, d) && (a[d] = b[d]);
                    return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
                },
                l = {}.hasOwnProperty;
            f = a("../quill"), h = a("./tooltip"), i = f.require("lodash"), j = f.require("dom"), d = f.require("delta"), g = f.require("range"), e = function(a) {
                function b(a, c) {
                    this.quill = a, this.options = c, this.options = i.defaults(this.options, h.DEFAULTS), b.__super__.constructor.call(this, this.quill, this.options), this.preview = this.container.querySelector(".preview"), this.textbox = this.container.querySelector(".input"), j(this.container).addClass("ql-image-tooltip"), this.initListeners()
                }
                return k(b, a), b.DEFAULTS = {
                    template: '<input class="input" type="textbox"> <div class="preview"> <span>Preview</span> </div> <a href="javascript:;" class="cancel">Cancel</a> <a href="javascript:;" class="insert">Insert</a>'
                }, b.prototype.initListeners = function() {
                    return j(this.quill.root).on("focus", i.bind(this.hide, this)), j(this.container.querySelector(".insert")).on("click", i.bind(this.insertImage, this)), j(this.container.querySelector(".cancel")).on("click", i.bind(this.hide, this)), j(this.textbox).on("input", i.bind(this._preview, this)), this.initTextbox(this.textbox, this.insertImage, this.hide), this.quill.onModuleLoad("toolbar", function(a) {
                        return function(b) {
                            return a.toolbar = b, b.initFormat("image", i.bind(a._onToolbar, a))
                        }
                    }(this))
                }, b.prototype.insertImage = function() {
                    var a, b;
                    return b = this._normalizeURL(this.textbox.value), null == this.range && (this.range = new g(0, 0)), this.range && (this.preview.innerHTML = "<span>Preview</span>", this.textbox.value = "", a = this.range.end, this.quill.insertEmbed(a, "image", b, "user"), this.quill.setSelection(a + 1, a + 1)), this.hide()
                }, b.prototype._onToolbar = function(a, b) {
                    return b ? (this.textbox.value || (this.textbox.value = "http://"), this.show(), this.textbox.focus(), i.defer(function(a) {
                        return function() {
                            return a.textbox.setSelectionRange(a.textbox.value.length, a.textbox.value.length)
                        }
                    }(this))) : (this.quill.deleteText(a, "user"), this.toolbar.setActive("image", !1))
                }, b.prototype._preview = function() {
                    var a;
                    if (this._matchImageURL(this.textbox.value)) return "IMG" === this.preview.firstChild.tagName ? this.preview.firstChild.setAttribute("src", this.textbox.value) : (a = document.createElement("img"), a.setAttribute("src", this.textbox.value), this.preview.replaceChild(a, this.preview.firstChild))
                }, b.prototype._matchImageURL = function(a) {
                    return /^https?:\/\/.+\.(jpe?g|gif|png)$/.test(a)
                }, b.prototype._normalizeURL = function(a) {
                    return /^https?:\/\//.test(a) || (a = "http://" + a), a
                }, b
            }(h), f.registerModule("image-tooltip", e), b.exports = e
        }, {
            "../quill": 30,
            "./tooltip": 28
        }],
        23: [function(a, b, c) {
            var d, e, f, g, h;
            f = a("../quill"), g = f.require("lodash"), h = f.require("dom"), d = f.require("delta"), e = function() {
                function a(a, b) {
                    this.quill = a, this.hotkeys = {}, this._initListeners(), this._initHotkeys(), this.quill.onModuleLoad("toolbar", function(a) {
                        return function(b) {
                            return a.toolbar = b
                        }
                    }(this))
                }
                return a.hotkeys = {
                    BOLD: {
                        key: "B",
                        metaKey: !0
                    },
                    INDENT: {
                        key: h.KEYS.TAB
                    },
                    ITALIC: {
                        key: "I",
                        metaKey: !0
                    },
                    OUTDENT: {
                        key: h.KEYS.TAB,
                        shiftKey: !0
                    },
                    UNDERLINE: {
                        key: "U",
                        metaKey: !0
                    }
                }, a.prototype.addHotkey = function(a, b) {
                    return Array.isArray(a) || (a = [a]), g.each(a, function(a) {
                        return function(c) {
                            var d, e;
                            return c = g.isObject(c) ? g.clone(c) : {
                                key: c
                            }, c.callback = b, e = g.isNumber(c.key) ? c.key : c.key.toUpperCase().charCodeAt(0), null == (d = a.hotkeys)[e] && (d[e] = []), a.hotkeys[e].push(c)
                        }
                    }(this))
                }, a.prototype.toggleFormat = function(a, b) {
                    var c, d;
                    return c = a.isCollapsed() ? this.quill.getContents(Math.max(0, a.start - 1), a.end) : this.quill.getContents(a), d = 0 === c.ops.length || !g.all(c.ops, function(a) {
                        var c;
                        return null != (c = a.attributes) ? c[b] : void 0
                    }), a.isCollapsed() ? this.quill.prepareFormat(b, d, f.sources.USER) : this.quill.formatText(a, b, d, f.sources.USER), null != this.toolbar ? this.toolbar.setActive(b, d) : void 0
                }, a.prototype._initEnter = function() {
                    var a;
                    return a = [{
                        key: h.KEYS.ENTER
                    }, {
                        key: h.KEYS.ENTER,
                        shiftKey: !0
                    }], this.addHotkey(a, function(a) {
                        return function(b, c) {
                            var e, h, i, j, k, l;
                            return null == b ? !0 : (k = a.quill.editor.doc.findLineAt(b.start), i = k[0], j = k[1], l = i.findLeafAt(j), h = l[0], j = l[1], e = (new d).retain(b.start).insert("\n", i.formats)["delete"](b.end - b.start), a.quill.updateContents(e, f.sources.USER), g.each(h.formats, function(b, c) {
                                a.quill.prepareFormat(c, b), null != a.toolbar && a.toolbar.setActive(c, b)
                            }), !1)
                        }
                    }(this))
                }, a.prototype._initDeletes = function() {
                    return this.addHotkey([h.KEYS.DELETE, h.KEYS.BACKSPACE], function(a) {
                        return function(b, c) {
                            var d, e, g, i;
                            return null != b && a.quill.getLength() > 0 && (b.start !== b.end ? a.quill.deleteText(b.start, b.end, f.sources.USER) : c.key === h.KEYS.BACKSPACE ? (i = a.quill.editor.doc.findLineAt(b.start), e = i[0], g = i[1], 0 === g && (e.formats.bullet || e.formats.list) ? (d = e.formats.bullet ? "bullet" : "list", a.quill.formatLine(b.start, b.start, d, !1)) : b.start > 0 && a.quill.deleteText(b.start - 1, b.start, f.sources.USER)) : b.start < a.quill.getLength() - 1 && a.quill.deleteText(b.start, b.start + 1, f.sources.USER)), !1
                        }
                    }(this))
                }, a.prototype._initHotkeys = function() {
                    return this.addHotkey(a.hotkeys.INDENT, function(a) {
                        return function(b) {
                            return a._onTab(b, !1), !1
                        }
                    }(this)), this.addHotkey(a.hotkeys.OUTDENT, function(a) {
                        return function(a) {
                            return !1
                        }
                    }(this)), g.each(["bold", "italic", "underline"], function(b) {
                        return function(c) {
                            return b.addHotkey(a.hotkeys[c.toUpperCase()], function(a) {
                                return b.toggleFormat(a, c), !1
                            })
                        }
                    }(this)), this._initDeletes(), this._initEnter()
                }, a.prototype._initListeners = function() {
                    return h(this.quill.root).on("keydown", function(a) {
                        return function(b) {
                            var c;
                            return c = !1, g.each(a.hotkeys[b.which], function(d) {
                                var e;
                                return e = h.isMac() ? b.metaKey : b.metaKey || b.ctrlKey, !!d.metaKey == !!e && !!d.shiftKey == !!b.shiftKey && !!d.altKey == !!b.altKey ? (c = d.callback(a.quill.getSelection(), d, b) === !1 || c, !0) : void 0
                            }), !c
                        }
                    }(this))
                }, a.prototype._onTab = function(a, b) {
                    var c;
                    return null == b && (b = !1), c = (new d).retain(a.start).insert("  ")["delete"](a.end - a.start).retain(this.quill.getLength() - a.end), this.quill.updateContents(c, f.sources.USER), this.quill.setSelection(a.start + 1, a.start + 1)
                }, a
            }(), f.registerModule("keyboard", e), b.exports = e
        }, {
            "../quill": 30
        }],
        24: [function(a, b, c) {
            var d, e, f, g, h, i = function(a, b) {
                    function c() {
                        this.constructor = a
                    }
                    for (var d in b) j.call(b, d) && (a[d] = b[d]);
                    return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
                },
                j = {}.hasOwnProperty;
            e = a("../quill"), f = a("./tooltip"), g = e.require("lodash"), h = e.require("dom"), d = function(a) {
                function b(a, c) {
                    this.quill = a, this.options = c, this.options = g.defaults(this.options, f.DEFAULTS), b.__super__.constructor.call(this, this.quill, this.options), h(this.container).addClass("ql-link-tooltip"), this.textbox = this.container.querySelector(".input"), this.link = this.container.querySelector(".url"), this.initListeners()
                }
                return i(b, a), b.DEFAULTS = {
                    maxLength: 50,
                    template: '<span class="title">Visit URL:&nbsp;</span> <a href="#" class="url" target="_blank" href="about:blank"></a> <input class="input" type="text"> <span>&nbsp;&#45;&nbsp;</span> <a href="javascript:;" class="change">Change</a> <a href="javascript:;" class="remove">Remove</a> <a href="javascript:;" class="done">Done</a>'
                }, b.hotkeys = {
                    LINK: {
                        key: "K",
                        metaKey: !0
                    }
                }, b.prototype.initListeners = function() {
                    return this.quill.on(this.quill.constructor.events.SELECTION_CHANGE, function(a) {
                        return function(b) {
                            var c;
                            if (null != b && b.isCollapsed()) return c = a._findAnchor(b), c ? (a.setMode(c.href, !1), a.show(c)) : a.container.style.left !== f.HIDE_MARGIN ? (a.range = null, a.hide()) : void 0
                        }
                    }(this)), h(this.container.querySelector(".done")).on("click", g.bind(this.saveLink, this)), h(this.container.querySelector(".remove")).on("click", function(a) {
                        return function() {
                            return a.removeLink(a.range)
                        }
                    }(this)), h(this.container.querySelector(".change")).on("click", function(a) {
                        return function() {
                            return a.setMode(a.link.href, !0)
                        }
                    }(this)), this.initTextbox(this.textbox, this.saveLink, this.hide), this.quill.onModuleLoad("toolbar", function(a) {
                        return function(b) {
                            return a.toolbar = b, b.initFormat("link", g.bind(a._onToolbar, a))
                        }
                    }(this)), this.quill.onModuleLoad("keyboard", function(a) {
                        return function(c) {
                            return c.addHotkey(b.hotkeys.LINK, g.bind(a._onKeyboard, a))
                        }
                    }(this))
                }, b.prototype.saveLink = function() {
                    var a, b, c;
                    return c = this._normalizeURL(this.textbox.value), null != this.range && (b = this.range.end, this.range.isCollapsed() ? (a = this._findAnchor(this.range), null != a && (a.href = c)) : this.quill.formatText(this.range, "link", c, "user"), this.quill.setSelection(b, b)), this.setMode(c, !1)
                }, b.prototype.removeLink = function(a) {
                    return a.isCollapsed() && (a = this._expandRange(a)), this.hide(), this.quill.formatText(a, "link", !1, "user"), null != this.toolbar ? this.toolbar.setActive("link", !1) : void 0
                }, b.prototype.setMode = function(a, b) {
                    var c;
                    return null == b && (b = !1), b ? (this.textbox.value = a, g.defer(function(b) {
                        return function() {
                            return b.textbox.focus(), b.textbox.setSelectionRange(0, a.length)
                        }
                    }(this))) : (this.link.href = a, a = this.link.href, c = a.length > this.options.maxLength ? a.slice(0, this.options.maxLength) + "..." : a, h(this.link).text(c)), h(this.container).toggleClass("editing", b)
                }, b.prototype._findAnchor = function(a) {
                    var b, c, d, e;
                    for (e = this.quill.editor.doc.findLeafAt(a.start, !0), b = e[0], d = e[1], null != b && (c = b.node); null != c && c !== this.quill.root;) {
                        if ("A" === c.tagName) return c;
                        c = c.parentNode
                    }
                    return null
                }, b.prototype._expandRange = function(a) {
                    var b, c, d, e, f;
                    return e = this.quill.editor.doc.findLeafAt(a.start, !0), c = e[0], d = e[1], f = a.start - d, b = f + c.length, {
                        start: f,
                        end: b
                    }
                }, b.prototype._onToolbar = function(a, b) {
                    return this._toggle(a, b)
                }, b.prototype._onKeyboard = function() {
                    var a;
                    return a = this.quill.getSelection(), this._toggle(a, !this._findAnchor(a))
                }, b.prototype._toggle = function(a, b) {
                    var c;
                    if (a) return b ? a.isCollapsed() ? void 0 : (this.setMode(this._suggestURL(a), !0), c = this.quill.editor.selection._getNativeRange(), this.show(c)) : this.removeLink(a)
                }, b.prototype._normalizeURL = function(a) {
                    return /^(https?:\/\/|mailto:)/.test(a) || (a = "http://" + a), a
                }, b.prototype._suggestURL = function(a) {
                    var b;
                    return b = this.quill.getText(a), this._normalizeURL(b)
                }, b
            }(f), e.registerModule("link-tooltip", d), b.exports = d
        }, {
            "../quill": 30,
            "./tooltip": 28
        }],
        25: [function(a, b, c) {
            var d, e, f, g, h, i = function(a, b) {
                    function c() {
                        this.constructor = a
                    }
                    for (var d in b) j.call(b, d) && (a[d] = b[d]);
                    return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
                },
                j = {}.hasOwnProperty;
            f = a("../quill"), d = a("eventemitter2").EventEmitter2, g = f.require("lodash"), h = f.require("dom"), e = function(a) {
                function b(a, b) {
                    this.quill = a, this.options = b, this.cursors = {}, this.container = this.quill.addContainer("ql-multi-cursor", !0), this.quill.on(this.quill.constructor.events.TEXT_CHANGE, g.bind(this._applyDelta, this))
                }
                return i(b, a), b.DEFAULTS = {
                    template: '<span class="cursor-flag"> <span class="cursor-name"></span> </span> <span class="cursor-caret"></span>',
                    timeout: 2500
                }, b.events = {
                    CURSOR_ADDED: "cursor-addded",
                    CURSOR_MOVED: "cursor-moved",
                    CURSOR_REMOVED: "cursor-removed"
                }, b.prototype.clearCursors = function() {
                    return g.each(Object.keys(this.cursors), g.bind(this.removeCursor, this)), this.cursors = {}
                }, b.prototype.moveCursor = function(a, b) {
                    var c;
                    return c = this.cursors[a], c.index = b, h(c.elem).removeClass("hidden"), clearTimeout(c.timer), c.timer = setTimeout(function(a) {
                        return function() {
                            return h(c.elem).addClass("hidden"), c.timer = null
                        }
                    }(this), this.options.timeout), this._updateCursor(c), c
                }, b.prototype.removeCursor = function(a) {
                    var c;
                    return c = this.cursors[a], this.emit(b.events.CURSOR_REMOVED, c), null != c && c.elem.parentNode.removeChild(c.elem), delete this.cursors[a]
                }, b.prototype.setCursor = function(a, c, d, e) {
                    var f;
                    return null == this.cursors[a] && (this.cursors[a] = f = {
                        userId: a,
                        index: c,
                        color: e,
                        elem: this._buildCursor(d, e)
                    }, this.emit(b.events.CURSOR_ADDED, f)), g.defer(function(b) {
                        return function() {
                            return b.moveCursor(a, c)
                        }
                    }(this)), this.cursors[a]
                }, b.prototype.shiftCursors = function(a, b, c) {
                    return null == c && (c = null), g.each(this.cursors, function(d) {
                        return function(d, e) {
                            return d && (d.index > a || d.userId === c) ? d.index += Math.max(b, a - d.index) : void 0
                        }
                    }(this))
                }, b.prototype.update = function() {
                    return g.each(this.cursors, function(a) {
                        return function(b, c) {
                            return null != b ? (a._updateCursor(b), !0) : void 0
                        }
                    }(this))
                }, b.prototype._applyDelta = function(a) {
                    var b;
                    return b = 0, g.each(a.ops, function(a) {
                        return function(c) {
                            var d, e;
                            return d = 0, null != c.insert ? (d = c.insert.length || 1, a.shiftCursors(b, d, null != (e = c.attributes) ? e.author : void 0)) : null != c["delete"] ? a.shiftCursors(b, -1 * c["delete"], null) : null != c.retain && (a.shiftCursors(b, 0, null), d = c.retain), b += d
                        }
                    }(this)), this.update()
                }, b.prototype._buildCursor = function(a, b) {
                    var c, d, e, f;
                    return c = document.createElement("span"), h(c).addClass("cursor"), c.innerHTML = this.options.template, e = c.querySelector(".cursor-flag"), f = c.querySelector(".cursor-name"), h(f).text(a), d = c.querySelector(".cursor-caret"), d.style.backgroundColor = f.style.backgroundColor = b, this.container.appendChild(c), c
                }, b.prototype._updateCursor = function(a) {
                    var c, d;
                    return c = this.quill.getBounds(a.index), null == c ? this.removeCursor(a.userId) : (a.elem.style.top = c.top + this.quill.container.scrollTop + "px", a.elem.style.left = c.left + "px", a.elem.style.height = c.height + "px", d = a.elem.querySelector(".cursor-flag"), h(a.elem).toggleClass("top", parseInt(a.elem.style.top) <= d.offsetHeight).toggleClass("left", parseInt(a.elem.style.left) <= d.offsetWidth).toggleClass("right", this.quill.root.offsetWidth - parseInt(a.elem.style.left) <= d.offsetWidth), this.emit(b.events.CURSOR_MOVED, a))
                }, b
            }(d), f.registerModule("multi-cursor", e), b.exports = e
        }, {
            "../quill": 30,
            eventemitter2: 2
        }],
        26: [function(a, b, c) {
            var d, e, f, g, h, i, j = function(a, b) {
                return function() {
                    return a.apply(b, arguments)
                }
            };
            g = a("../quill"), e = a("../core/document"), h = g.require("lodash"), i = g.require("dom"), d = g.require("delta"), f = function() {
                function a(b, c) {
                    var d;
                    this.quill = b, this._onConvert = j(this._onConvert, this), this.container = this.quill.addContainer("ql-paste-manager"), this.container.setAttribute("contenteditable", !0), i(this.quill.root).on("paste", h.bind(this._paste, this)), this.options = h.defaults(c, a.DEFAULTS), null == (d = this.options).onConvert && (d.onConvert = this._onConvert)
                }
                return a.DEFAULTS = {
                    onConvert: null
                }, a.prototype._onConvert = function(a) {
                    var b, c, f;
                    return c = new e(a, this.quill.options), b = c.toDelta(), f = b.length(), 0 === f ? b : b.compose((new d).retain(f - 1)["delete"](1))
                }, a.prototype._paste = function() {
                    var a, b;
                    return a = this.quill.getLength(), b = this.quill.getSelection(), null != b ? (this.container.focus(), h.defer(function(a) {
                        return function() {
                            var c, d, e, f, g, h, i;
                            return c = a.options.onConvert(a.container), d = c.length(), d > 0 && (b.start > 0 && c.ops.unshift({
                                retain: b.start
                            }), c["delete"](b.end - b.start), a.quill.updateContents(c, "user")), a.quill.setSelection(b.start + d, b.start + d), h = a.quill.editor.doc.findLineAt(b.start + d), e = h[0], g = h[1], f = e.node.getBoundingClientRect().bottom, i = document.documentElement.clientHeight, f > i && e.node.scrollIntoView(!1), a.container.innerHTML = ""
                        }
                    }(this))) : void 0
                }, a
            }(), g.registerModule("paste-manager", f), b.exports = f
        }, {
            "../core/document": 8,
            "../quill": 30
        }],
        27: [function(a, b, c) {
            var d, e, f, g;
            d = a("../quill"), f = d.require("lodash"), g = d.require("dom"), e = function() {
                function a(b, c) {
                    if (this.quill = b, this.options = c, (f.isString(this.options) || f.isElement(this.options)) && (this.options = {
                            container: this.options
                        }), null == this.options.container) throw new Error("container required for toolbar", this.options);
                    this.container = f.isString(this.options.container) ? document.querySelector(this.options.container) : this.options.container, this.inputs = {}, this.preventUpdate = !1, this.triggering = !1, f.each(this.quill.options.formats, function(b) {
                        return function(c) {
                            return null == a.formats.TOOLTIP[c] ? b.initFormat(c, f.bind(b._applyFormat, b, c)) : void 0
                        }
                    }(this)), this.quill.on(d.events.FORMAT_INIT, function(b) {
                        return function(c) {
                            return null == a.formats.TOOLTIP[c] ? b.initFormat(c, f.bind(b._applyFormat, b, c)) : void 0
                        }
                    }(this)), this.quill.on(d.events.SELECTION_CHANGE, function(a) {
                        return function(b) {
                            return null != b ? a.updateActive(b) : void 0
                        }
                    }(this)), this.quill.on(d.events.TEXT_CHANGE, function(a) {
                        return function() {
                            return a.updateActive()
                        }
                    }(this)), this.quill.onModuleLoad("keyboard", function(a) {
                        return function(b) {
                            return b.addHotkey([g.KEYS.BACKSPACE, g.KEYS.DELETE], function() {
                                return f.defer(f.bind(a.updateActive, a))
                            })
                        }
                    }(this)), g(this.container).addClass("ql-toolbar"), g.isIOS() && g(this.container).addClass("ios")
                }
                return a.DEFAULTS = {
                    container: null
                }, a.formats = {
                    LINE: {
                        align: "align",
                        bullet: "bullet",
                        list: "list"
                    },
                    SELECT: {
                        align: "align",
                        background: "background",
                        color: "color",
                        font: "font",
                        size: "size"
                    },
                    TOGGLE: {
                        bold: "bold",
                        bullet: "bullet",
                        image: "image",
                        italic: "italic",
                        link: "link",
                        list: "list",
                        strike: "strike",
                        underline: "underline"
                    },
                    TOOLTIP: {
                        image: "image",
                        link: "link"
                    }
                }, a.prototype.initFormat = function(b, c) {
                    var d, e, f;
                    return f = ".ql-" + b, null != a.formats.SELECT[b] ? (f = "select" + f, d = "change") : d = "click", e = this.container.querySelector(f), null != e ? (this.inputs[b] = e, g(e).on(d, function(a) {
                        return function() {
                            var b, f;
                            return f = "change" === d ? g(e).value() : !g(e).hasClass("ql-active"), a.preventUpdate = !0, a.quill.focus(), b = a.quill.getSelection(), null != b && c(b, f), a.preventUpdate = !1, !0
                        }
                    }(this))) : void 0
                }, a.prototype.setActive = function(a, b) {
                    var c, d, e, f;
                    return "image" === a && (b = !1), d = this.inputs[a], null != d ? (c = g(d), "SELECT" === d.tagName ? (this.triggering = !0, f = c.value(d), null == b && (b = null != (e = c["default"]()) ? e.value : void 0), Array.isArray(b) && (b = ""), b !== f && (null != b ? c.option(b) : c.reset()), this.triggering = !1) : c.toggleClass("ql-active", b || !1)) : void 0
                }, a.prototype.updateActive = function(a, b) {
                    var c;
                    return null == b && (b = null), a || (a = this.quill.getSelection()), null == a || this.preventUpdate ? void 0 : (c = this._getActive(a), f.each(this.inputs, function(a) {
                        return function(d, e) {
                            return (!Array.isArray(b) || b.indexOf(e) > -1) && a.setActive(e, c[e]), !0
                        }
                    }(this)))
                }, a.prototype._applyFormat = function(b, c, d) {
                    return this.triggering ? void 0 : (c.isCollapsed() ? this.quill.prepareFormat(b, d, "user") : null != a.formats.LINE[b] ? this.quill.formatLine(c, b, d, "user") : this.quill.formatText(c, b, d, "user"), f.defer(function(a) {
                        return function() {
                            return a.updateActive(c, ["bullet", "list"]), a.setActive(b, d)
                        }
                    }(this)))
                }, a.prototype._getActive = function(a) {
                    var b, c;
                    return b = this._getLeafActive(a), c = this._getLineActive(a), f.defaults({}, b, c)
                }, a.prototype._getLeafActive = function(a) {
                    var b, c, d, e, g;
                    return a.isCollapsed() ? (g = this.quill.editor.doc.findLineAt(a.start), d = g[0], e = g[1], b = 0 === e ? this.quill.getContents(a.start, a.end + 1) : this.quill.getContents(a.start - 1, a.end)) : b = this.quill.getContents(a), c = f.map(b.ops, "attributes"), this._intersectFormats(c)
                }, a.prototype._getLineActive = function(a) {
                    var b, c, d, e, g, h;
                    for (c = [], g = this.quill.editor.doc.findLineAt(a.start), b = g[0], e = g[1], h = this.quill.editor.doc.findLineAt(a.end), d = h[0], e = h[1], null != d && d === b && (d = d.next); null != b && b !== d;) c.push(f.clone(b.formats)), b = b.next;
                    return this._intersectFormats(c)
                }, a.prototype._intersectFormats = function(b) {
                    return f.reduce(b.slice(1), function(b, c) {
                        var d, e, g, h, i;
                        return null == c && (c = {}), d = Object.keys(b), g = null != c ? Object.keys(c) : {}, h = f.intersection(d, g), i = f.difference(d, g), e = f.difference(g, d), f.each(h, function(d) {
                            if (null != a.formats.SELECT[d])
                                if (Array.isArray(b[d])) {
                                    if (b[d].indexOf(c[d]) < 0) return b[d].push(c[d])
                                } else if (b[d] !== c[d]) return b[d] = [b[d], c[d]]
                        }), f.each(i, function(c) {
                            return null != a.formats.TOGGLE[c] ? delete b[c] : null == a.formats.SELECT[c] || Array.isArray(b[c]) ? void 0 : b[c] = [b[c]]
                        }), f.each(e, function(d) {
                            return null != a.formats.SELECT[d] ? b[d] = [c[d]] : void 0
                        }), b
                    }, b[0] || {})
                }, a
            }(), d.registerModule("toolbar", e), b.exports = e
        }, {
            "../quill": 30
        }],
        28: [function(a, b, c) {
            var d, e, f, g;
            d = a("../quill"), f = d.require("lodash"), g = d.require("dom"), e = function() {
                function a(b, c) {
                    this.quill = b, this.options = c, this.container = this.quill.addContainer("ql-tooltip"), this.container.innerHTML = this.options.template, this.hide(), this.quill.on(this.quill.constructor.events.TEXT_CHANGE, function(b) {
                        return function(c, d) {
                            return b.container.style.left !== a.HIDE_MARGIN ? (b.range = null, b.hide()) : void 0
                        }
                    }(this))
                }
                return a.DEFAULTS = {
                    offset: 10,
                    template: ""
                }, a.HIDE_MARGIN = "-10000px", a.prototype.initTextbox = function(a, b, c) {
                    return g(a).on("keydown", function(a) {
                        return function(d) {
                            switch (d.which) {
                                case g.KEYS.ENTER:
                                    return d.preventDefault(), b.call(a);
                                case g.KEYS.ESCAPE:
                                    return d.preventDefault(), c.call(a);
                                default:
                                    return !0
                            }
                        }
                    }(this))
                }, a.prototype.hide = function() {
                    return this.container.style.left = a.HIDE_MARGIN, this.range && this.quill.setSelection(this.range), this.range = null
                }, a.prototype.position = function(a) {
                    var b, c, d, e, f, g, h;
                    return null != a ? (g = a.getBoundingClientRect(), f = this.quill.container.getBoundingClientRect(), d = g.left - f.left, e = g.top - f.top, c = g.bottom - f.bottom, b = d + g.width / 2 - this.container.offsetWidth / 2, h = e + g.height + this.options.offset, h + this.container.offsetHeight > this.quill.container.offsetHeight && (h = e - this.container.offsetHeight - this.options.offset), b = Math.max(0, Math.min(b, this.quill.container.offsetWidth - this.container.offsetWidth)), h = Math.max(0, Math.min(h, this.quill.container.offsetHeight - this.container.offsetHeight))) : (b = this.quill.container.offsetWidth / 2 - this.container.offsetWidth / 2, h = this.quill.container.offsetHeight / 2 - this.container.offsetHeight / 2), h += this.quill.container.scrollTop, [b, h]
                }, a.prototype.show = function(a) {
                    var b, c, d;
                    return this.range = this.quill.getSelection(), c = this.position(a), b = c[0], d = c[1], this.container.style.left = b + "px", this.container.style.top = d + "px", this.container.focus()
                }, a
            }(), d.registerModule("tooltip", e), b.exports = e
        }, {
            "../quill": 30
        }],
        29: [function(a, b, c) {
            var d, e, f, g;
            e = a("../quill"), g = e.require("lodash"), d = e.require("delta"), f = function() {
                function a(a, b) {
                    this.quill = a, this.options = null != b ? b : {}, this.lastRecorded = 0, this.ignoreChange = !1, this.clear(), this.initListeners()
                }
                return a.DEFAULTS = {
                    delay: 1e3,
                    maxStack: 100,
                    userOnly: !1
                }, a.hotkeys = {
                    UNDO: {
                        key: "Z",
                        metaKey: !0
                    },
                    REDO: {
                        key: "Z",
                        metaKey: !0,
                        shiftKey: !0
                    }
                }, a.prototype.initListeners = function() {
                    return this.quill.onModuleLoad("keyboard", function(b) {
                        return function(c) {
                            return c.addHotkey(a.hotkeys.UNDO, function() {
                                return b.quill.editor.checkUpdate(), b.undo(), !1
                            }), c.addHotkey(a.hotkeys.REDO, function() {
                                return b.quill.editor.checkUpdate(), b.redo(), !1
                            })
                        }
                    }(this)), this.quill.on(this.quill.constructor.events.TEXT_CHANGE, function(a) {
                        return function(b, c) {
                            return a.ignoreChange ? void 0 : (a.options.userOnly && c !== e.sources.USER ? a._transform(b) : a.record(b, a.oldDelta), a.oldDelta = a.quill.getContents())
                        }
                    }(this))
                }, a.prototype.clear = function() {
                    return this.stack = {
                        undo: [],
                        redo: []
                    }, this.oldDelta = this.quill.getContents()
                }, a.prototype.record = function(a, b) {
                    var c, d, e, f;
                    if (a.ops.length > 0) {
                        this.stack.redo = [];
                        try {
                            if (f = this.quill.getContents().diff(this.oldDelta), e = (new Date).getTime(), this.lastRecorded + this.options.delay > e && this.stack.undo.length > 0 ? (c = this.stack.undo.pop(), f = f.compose(c.undo), a = c.redo.compose(a)) : this.lastRecorded = e, this.stack.undo.push({
                                    redo: a,
                                    undo: f
                                }), this.stack.undo.length > this.options.maxStack) return this.stack.undo.unshift()
                        } catch (g) {
                            return d = g, console.warn("Could not record change... clearing undo stack."), this.clear()
                        }
                    }
                }, a.prototype.redo = function() {
                    return this._change("redo", "undo")
                }, a.prototype.undo = function() {
                    return this._change("undo", "redo")
                }, a.prototype._getLastChangeIndex = function(a) {
                    var b, c;
                    return c = 0, b = 0, g.each(a.ops, function(a) {
                        return null != a.insert ? c = Math.max(b + (a.insert.length || 1), c) : null != a["delete"] ? c = Math.max(b, c) : null != a.retain ? (null != a.attributes && (c = Math.max(b + a.retain, c)), b += a.retain) : void 0
                    }), c
                }, a.prototype._change = function(a, b) {
                    var c, d;
                    return this.stack[a].length > 0 ? (c = this.stack[a].pop(), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(c[a], e.sources.USER), this.ignoreChange = !1, d = this._getLastChangeIndex(c[a]), this.quill.setSelection(d, d), this.oldDelta = this.quill.getContents(), this.stack[b].push(c)) : void 0
                }, a.prototype._transform = function(a) {
                    var b, c, d, e, f, g, h, i;
                    for (this.oldDelta = a.transform(this.oldDelta, !0), g = this.stack.undo, c = 0, e = g.length; e > c; c++) b = g[c], b.undo = a.transform(b.undo, !0), b.redo = a.transform(b.redo, !0);
                    for (h = this.stack.redo, i = [], d = 0, f = h.length; f > d; d++) b = h[d], b.undo = a.transform(b.undo, !0), i.push(b.redo = a.transform(b.redo, !0));
                    return i
                }, a
            }(), e.registerModule("undo-manager", f), b.exports = f
        }, {
            "../quill": 30
        }],
        30: [function(a, b, c) {
            var d, e, f, g, h, i, j, k, l, m, n, o = function(a, b) {
                    function c() {
                        this.constructor = a
                    }
                    for (var d in b) p.call(b, d) && (a[d] = b[d]);
                    return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
                },
                p = {}.hasOwnProperty,
                q = [].slice;
            l = a("lodash"), n = a("../package.json"), d = a("rich-text/lib/delta"), g = a("eventemitter2").EventEmitter2, m = a("./lib/dom"), e = a("./core/document"), f = a("./core/editor"), h = a("./core/format"), i = a("./core/normalizer"), k = a("./lib/range"), j = function(a) {
                function b(a, c) {
                    var d, e, g;
                    if (this.container = a, null == c && (c = {}), l.isString(this.container) && (this.container = document.querySelector(this.container)), null == this.container) throw new Error("Invalid Quill container");
                    if (e = l.defaults(c.modules || {}, b.DEFAULTS.modules), d = this.container.innerHTML, this.container.innerHTML = "", this.options = l.defaults(c, b.DEFAULTS), this.options.modules = e, this.options.id = this.id = "ql-editor-" + (b.editors.length + 1), this.modules = {}, this.root = this.addContainer("ql-editor"), this.editor = new f(this.root, this, this.options), b.editors.push(this), this.setHTML(d, b.sources.SILENT), g = b.themes[this.options.theme], null == g) throw new Error("Cannot load " + this.options.theme + " theme. Are you sure you registered it?");
                    this.theme = new g(this, this.options), l.each(this.options.modules, function(a) {
                        return function(b, c) {
                            return a.addModule(c, b)
                        }
                    }(this))
                }
                return o(b, a), b.version = n.version, b.editors = [], b.modules = [], b.themes = [], b.DEFAULTS = {
                    formats: ["align", "bold", "italic", "strike", "underline", "color", "background", "font", "size", "link", "image", "bullet", "list"],
                    modules: {
                        keyboard: !0,
                        "paste-manager": !0,
                        "undo-manager": !0
                    },
                    pollInterval: 100,
                    readOnly: !1,
                    styles: {},
                    theme: "base"
                }, b.events = {
                    FORMAT_INIT: "format-init",
                    MODULE_INIT: "module-init",
                    POST_EVENT: "post-event",
                    PRE_EVENT: "pre-event",
                    SELECTION_CHANGE: "selection-change",
                    TEXT_CHANGE: "text-change"
                }, b.sources = f.sources, b.registerModule = function(a, c) {
                    return null != b.modules[a] && console.warn("Overwriting " + a + " module"), b.modules[a] = c
                }, b.registerTheme = function(a, c) {
                    return null != b.themes[a] && console.warn("Overwriting " + a + " theme"), b.themes[a] = c
                }, b.require = function(a) {
                    switch (a) {
                        case "lodash":
                            return l;
                        case "delta":
                            return d;
                        case "format":
                            return h;
                        case "normalizer":
                            return i;
                        case "dom":
                            return m;
                        case "document":
                            return e;
                        case "range":
                            return k;
                        default:
                            return null
                    }
                }, b.prototype.destroy = function() {
                    var a;
                    return a = this.getHTML(), l.each(this.modules, function(a, b) {
                        return l.isFunction(a.destroy) ? a.destroy() : void 0
                    }), this.editor.destroy(), this.removeAllListeners(), b.editors.splice(l.indexOf(b.editors, this), 1), this.container.innerHTML = a
                }, b.prototype.addContainer = function(a, b) {
                    var c, d;
                    return null == b && (b = !1), d = b ? this.root : null, c = document.createElement("div"), m(c).addClass(a), this.container.insertBefore(c, d), c
                }, b.prototype.addFormat = function(a, c) {
                    return this.editor.doc.addFormat(a, c), this.emit(b.events.FORMAT_INIT, a)
                }, b.prototype.addModule = function(a, c) {
                    var d;
                    if (d = b.modules[a], null == d) throw new Error("Cannot load " + a + " module. Are you sure you registered it?");
                    return c === !0 && (c = {}), c = l.defaults(c, this.theme.constructor.OPTIONS[a] || {}, d.DEFAULTS || {}), this.modules[a] = new d(this, c), this.emit(b.events.MODULE_INIT, a, this.modules[a]), this.modules[a]
                }, b.prototype.deleteText = function(a, c, e) {
                    var f, g, h;
                    return null == e && (e = b.sources.API), h = this._buildParams(a, c, {}, e), a = h[0], c = h[1], g = h[2], e = h[3], c > a ? (f = (new d).retain(a)["delete"](c - a), this.editor.applyDelta(f, e)) : void 0
                }, b.prototype.emit = function() {
                    var a, c;
                    return c = arguments[0], a = 2 <= arguments.length ? q.call(arguments, 1) : [], b.__super__.emit.apply(this, [b.events.PRE_EVENT, c].concat(q.call(a))), b.__super__.emit.apply(this, [c].concat(q.call(a))), b.__super__.emit.apply(this, [b.events.POST_EVENT, c].concat(q.call(a)))
                }, b.prototype.focus = function() {
                    return this.editor.focus()
                }, b.prototype.formatLine = function(a, b, c, d, e) {
                    var f, g, h, i, j;
                    return i = this._buildParams(a, b, c, d, e), a = i[0], b = i[1], f = i[2], e = i[3], j = this.editor.doc.findLineAt(b), g = j[0], h = j[1], null != g && (b += g.length - h), this.formatText(a, b, f, e)
                }, b.prototype.formatText = function(a, b, c, e, f) {
                    var g, h, i;
                    return i = this._buildParams(a, b, c, e, f), a = i[0], b = i[1], h = i[2], f = i[3], h = l.reduce(h, function(a) {
                        return function(b, c, d) {
                            var e;
                            return e = a.editor.doc.formats[d], c && c !== e.config["default"] || (b[d] = null), b
                        }
                    }(this), h), g = (new d).retain(a).retain(b - a, h), this.editor.applyDelta(g, f)
                }, b.prototype.getBounds = function(a) {
                    return this.editor.getBounds(a)
                }, b.prototype.getContents = function(a, b) {
                    return null == a && (a = 0), null == b && (b = null), l.isObject(a) && (b = a.end, a = a.start), this.editor.delta.slice(a, b)
                }, b.prototype.getHTML = function() {
                    return this.editor.doc.getHTML()
                }, b.prototype.getLength = function() {
                    return this.editor.length
                }, b.prototype.getModule = function(a) {
                    return this.modules[a]
                }, b.prototype.getSelection = function() {
                    return this.editor.checkUpdate(), this.editor.selection.getRange()
                }, b.prototype.getText = function(a, b) {
                    return null == a && (a = 0), null == b && (b = null), l.map(this.getContents(a, b).ops, function(a) {
                        return l.isString(a.insert) ? a.insert : ""
                    }).join("")
                }, b.prototype.insertEmbed = function(a, b, c, e) {
                    var f, g, h, i;
                    return i = this._buildParams(a, 0, b, c, e), a = i[0], g = i[1], h = i[2], e = i[3], f = (new d).retain(a).insert(1, h), this.editor.applyDelta(f, e)
                }, b.prototype.insertText = function(a, b, c, e, f) {
                    var g, h, i, j;
                    return j = this._buildParams(a, 0, c, e, f), a = j[0], h = j[1], i = j[2], f = j[3], b.length > 0 ? (g = (new d).retain(a).insert(b, i), this.editor.applyDelta(g, f)) : void 0
                }, b.prototype.onModuleLoad = function(a, c) {
                    return this.modules[a] ? c(this.modules[a]) : this.on(b.events.MODULE_INIT, function(b, d) {
                        return b === a ? c(d) : void 0
                    })
                }, b.prototype.prepareFormat = function(a, c, d) {
                    var e, f;
                    return null == d && (d = b.sources.API), e = this.editor.doc.formats[a], null != e && (f = this.getSelection(), null != f ? f.isCollapsed() : void 0) ? e.isType(h.types.LINE) ? this.formatLine(f, a, c, d) : e.prepare(c) : void 0
                }, b.prototype.setContents = function(a, c) {
                    var e;
                    return null == c && (c = b.sources.API), a = new d(Array.isArray(a) ? a.slice() : a.ops.slice()), e = l.last(a.slice(a.length() - 1).ops), a["delete"](this.getLength() - 1), null != e && l.isString(e.insert) && "\n" === l.last(e.insert) && a["delete"](1), this.updateContents(a, c)
                }, b.prototype.setHTML = function(a, c) {
                    return null == c && (c = b.sources.API), a.trim() || (a = "<" + m.DEFAULT_BLOCK_TAG + "><" + m.DEFAULT_BREAK_TAG + "></" + m.DEFAULT_BLOCK_TAG + ">"), this.editor.doc.setHTML(a), this.editor.checkUpdate(c)
                }, b.prototype.setSelection = function(a, c, d) {
                    var e;
                    return null == d && (d = b.sources.API), l.isNumber(a) && l.isNumber(c) ? e = new k(a, c) : (e = a, d = c || d), this.editor.selection.setRange(e, d)
                }, b.prototype.setText = function(a, c) {
                    var e;
                    return null == c && (c = b.sources.API), e = (new d).insert(a), this.setContents(e, c)
                }, b.prototype.updateContents = function(a, c) {
                    return null == c && (c = b.sources.API), Array.isArray(a) && (a = {
                        ops: a
                    }), this.editor.applyDelta(a, c)
                }, b.prototype._buildParams = function() {
                    var a, c;
                    return c = 1 <= arguments.length ? q.call(arguments, 0) : [], l.isObject(c[0]) && c.splice(0, 1, c[0].start, c[0].end), l.isString(c[2]) && (a = {}, a[c[2]] = c[3], c.splice(2, 2, a)), null == c[3] && (c[3] = b.sources.API), c
                }, b
            }(g), j.registerTheme("base", a("./themes/base")), j.registerTheme("snow", a("./themes/snow")), b.exports = j
        }, {
            "../package.json": 7,
            "./core/document": 8,
            "./core/editor": 9,
            "./core/format": 10,
            "./core/normalizer": 13,
            "./lib/dom": 17,
            "./lib/range": 20,
            "./themes/base": 32,
            "./themes/snow": 33,
            eventemitter2: 2,
            lodash: 1,
            "rich-text/lib/delta": 3
        }],
        31: [function(a, b, c) {
            b.exports = '.ql-image-tooltip{padding:10px;width:300px}.ql-image-tooltip:after{clear:both;content:"";display:table}.ql-image-tooltip a{border:1px solid #000;box-sizing:border-box;display:inline-block;float:left;padding:5px;text-align:center;width:50%}.ql-image-tooltip img{bottom:0;left:0;margin:auto;max-height:100%;max-width:100%;position:absolute;right:0;top:0}.ql-image-tooltip .input{box-sizing:border-box;width:100%}.ql-image-tooltip .preview{margin:10px 0;position:relative;border:1px dashed #000;height:200px}.ql-image-tooltip .preview span{display:inline-block;position:absolute;text-align:center;top:40%;width:100%}.ql-link-tooltip{padding:5px 10px}.ql-link-tooltip input.input{width:170px}.ql-link-tooltip a.done,.ql-link-tooltip input.input{display:none}.ql-link-tooltip a.change{margin-right:4px}.ql-link-tooltip.editing a.done,.ql-link-tooltip.editing input.input{display:inline-block}.ql-link-tooltip.editing a.change,.ql-link-tooltip.editing a.remove,.ql-link-tooltip.editing a.url{display:none}.ql-multi-cursor{position:absolute;left:0;top:0;z-index:1000}.ql-multi-cursor .cursor{margin-left:-1px;position:absolute}.ql-multi-cursor .cursor-flag{bottom:100%;position:absolute;white-space:nowrap}.ql-multi-cursor .cursor-name{display:inline-block;color:#fff;padding:2px 8px}.ql-multi-cursor .cursor-caret{height:100%;position:absolute;width:2px}.ql-multi-cursor .cursor.hidden .cursor-flag{display:none}.ql-multi-cursor .cursor.top .cursor-flag{bottom:auto;top:100%}.ql-multi-cursor .cursor.right .cursor-flag{right:-2px}.ql-paste-manager{left:-100000px;position:absolute;top:50%}.ql-toolbar{box-sizing:border-box}.ql-tooltip{background-color:#fff;border:1px solid #000;box-sizing:border-box;position:absolute;top:0;white-space:nowrap;z-index:2000}.ql-tooltip a{cursor:pointer;text-decoration:none}.ql-container{box-sizing:border-box;cursor:text;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;line-height:1.42;margin:0;overflow-x:hidden;overflow-y:auto;padding:12px 15px;position:relative}.ql-editor{box-sizing:border-box;min-height:100%;outline:0;tab-size:4;white-space:pre-wrap}.ql-editor div{margin:0;padding:0}.ql-editor a{text-decoration:underline}.ql-editor b{font-weight:700}.ql-editor i{font-style:italic}.ql-editor s{text-decoration:line-through}.ql-editor u{text-decoration:underline}.ql-editor a,.ql-editor b,.ql-editor i,.ql-editor s,.ql-editor span,.ql-editor u{background-color:inherit}.ql-editor img{max-width:100%}.ql-editor blockquote,.ql-editor ol,.ql-editor ul{margin:0 0 0 2em;padding:0}.ql-editor ol{list-style-type:decimal}.ql-editor ul{list-style-type:disc}.ql-editor.ql-ie-10 br,.ql-editor.ql-ie-9 br{display:none}'
        }, {}],
        32: [function(a, b, c) {
            var d, e, f, g;
            e = a("lodash"), g = a("../../lib/dom"), f = a("./base.styl"), d = function() {
                function a(b, c) {
                    var d;
                    this.quill = b, this.options = c, g(this.quill.container).addClass("ql-container"), this.options.styles && this.addStyles(f + a.objToCss(this.options.styles)), g.isIE(10) && (d = g.isIE(9) ? "9" : "10", g(this.quill.root).addClass("ql-ie-" + d))
                }
                return a.OPTIONS = {}, a.objToCss = function(a) {
                    return e.map(a, function(a, b) {
                        var c;
                        return c = e.map(a, function(a, b) {
                            return b + ": " + a + ";"
                        }).join(" "), b + " { " + c + " }"
                    }).join("\n")
                }, a.prototype.addStyles = function(b) {
                    var c;
                    return e.isObject(b) && (b = a.objToCss(b)), c = document.createElement("style"), c.type = "text/css", c.appendChild(document.createTextNode(b)), document.head.appendChild(c)
                }, a
            }(), b.exports = d
        }, {
            "../../lib/dom": 17,
            "./base.styl": 31,
            lodash: 1
        }],
        33: [function(a, b, c) {
            var d, e, f, g, h, i, j = function(a, b) {
                    function c() {
                        this.constructor = a
                    }
                    for (var d in b) k.call(b, d) && (a[d] = b[d]);
                    return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
                },
                k = {}.hasOwnProperty;
            h = a("lodash"), e = a("../../lib/color-picker"), d = a("../base"), i = a("../../lib/dom"), f = a("../../lib/picker"), g = function(a) {
                function b(a, c) {
                    this.quill = a, this.options = c, b.__super__.constructor.apply(this, arguments), i(this.quill.container).addClass("ql-snow"), this.pickers = [], this.quill.on(this.quill.constructor.events.SELECTION_CHANGE, function(a) {
                        return function(b) {
                            return null != b ? h.invoke(a.pickers, "close") : void 0
                        }
                    }(this)), this.quill.onModuleLoad("multi-cursor", h.bind(this.extendMultiCursor, this)), this.quill.onModuleLoad("toolbar", h.bind(this.extendToolbar, this))
                }
                return j(b, a), b.COLORS = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008A00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"], b.OPTIONS = {
                    "multi-cursor": {
                        template: '<span class="cursor-flag"> <span class="cursor-triangle top"></span> <span class="cursor-name"></span> <span class="cursor-triangle bottom"></span> </span> <span class="cursor-caret"></span>'
                    }
                }, b.prototype.extendMultiCursor = function(a) {
                    return a.on(a.constructor.events.CURSOR_ADDED, function(a) {
                        var b, c;
                        return b = a.elem.querySelector(".cursor-triangle.bottom"), c = a.elem.querySelector(".cursor-triangle.top"), b.style.borderTopColor = c.style.borderBottomColor = a.color
                    })
                }, b.prototype.extendToolbar = function(a) {
                    return i(a.container).addClass("ql-snow"), h.each(["color", "background", "font", "size", "align"], function(b) {
                        return function(c) {
                            var d, g;
                            if (g = a.container.querySelector(".ql-" + c), null != g) {
                                switch (c) {
                                    case "font":
                                    case "size":
                                    case "align":
                                        d = new f(g);
                                        break;
                                    case "color":
                                    case "background":
                                        d = new e(g), h.each(d.container.querySelectorAll(".ql-picker-item"), function(a, b) {
                                            return 7 > b ? i(a).addClass("ql-primary-color") : void 0
                                        })
                                }
                                return null != d ? b.pickers.push(d) : void 0
                            }
                        }
                    }(this)), h.each(i(a.container).textNodes(), function(a) {
                        return 0 === i(a).text().trim().length ? i(a).remove() : void 0
                    })
                }, b
            }(d), b.exports = g
        }, {
            "../../lib/color-picker": 16,
            "../../lib/dom": 17,
            "../../lib/picker": 19,
            "../base": 32,
            lodash: 1
        }]
    }, {}, [15])(15)
}), ! function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        function b(b, d) {
            var e, f = this;
            f.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(b),
                appendDots: a(b),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(a, b) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (b + 1) + "</button>"
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, f.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, a.extend(f, f.initials), f.activeBreakpoint = null, f.animType = null, f.animProp = null, f.breakpoints = [], f.breakpointSettings = [], f.cssTransitions = !1, f.hidden = "hidden", f.paused = !1, f.positionProp = null, f.respondTo = null, f.rowCount = 1, f.shouldClick = !0, f.$slider = a(b), f.$slidesCache = null, f.transformType = null, f.transitionType = null, f.visibilityChange = "visibilitychange", f.windowWidth = 0, f.windowTimer = null, e = a(b).data("slick") || {}, f.options = a.extend({}, f.defaults, e, d), f.currentSlide = f.options.initialSlide, f.originalSettings = f.options, "undefined" != typeof document.mozHidden ? (f.hidden = "mozHidden", f.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (f.hidden = "webkitHidden", f.visibilityChange = "webkitvisibilitychange"), f.autoPlay = a.proxy(f.autoPlay, f), f.autoPlayClear = a.proxy(f.autoPlayClear, f), f.changeSlide = a.proxy(f.changeSlide, f), f.clickHandler = a.proxy(f.clickHandler, f), f.selectHandler = a.proxy(f.selectHandler, f), f.setPosition = a.proxy(f.setPosition, f), f.swipeHandler = a.proxy(f.swipeHandler, f), f.dragHandler = a.proxy(f.dragHandler, f), f.keyHandler = a.proxy(f.keyHandler, f), f.autoPlayIterator = a.proxy(f.autoPlayIterator, f), f.instanceUid = c++, f.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, f.registerBreakpoints(), f.init(!0), f.checkResponsive(!0)
        }
        var c = 0;
        return b
    }(), b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
        var e = this;
        if ("boolean" == typeof c) d = c, c = null;
        else if (0 > c || c >= e.slideCount) return !1;
        e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b)
        }), e.$slidesCache = e.$slides, e.reinit()
    }, b.prototype.animateHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({
                height: b
            }, a.options.speed)
        }
    }, b.prototype.animateSlide = function(b, c) {
        var d = {},
            e = this;
        e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
            left: b
        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft),
            a({
                animStart: e.currentLeft
            }).animate({
                animStart: b
            }, {
                duration: e.options.speed,
                easing: e.options.easing,
                step: function(a) {
                    a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
                },
                complete: function() {
                    c && c.call()
                }
            })) : (e.applyTransition(), b = Math.ceil(b), d[e.animType] = e.options.vertical === !1 ? "translate3d(" + b + "px, 0px, 0px)" : "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
            e.disableTransition(), c.call()
        }, e.options.speed))
    }, b.prototype.asNavFor = function(b) {
        var c = this,
            d = c.options.asNavFor;
        d && null !== d && (d = a(d).not(c.$slider)), null !== d && "object" == typeof d && d.each(function() {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0)
        })
    }, b.prototype.applyTransition = function(a) {
        var b = this,
            c = {};
        c[b.transitionType] = b.options.fade === !1 ? b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.autoPlay = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }, b.prototype.autoPlayClear = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }, b.prototype.autoPlayIterator = function() {
        var a = this;
        a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (0 === a.currentSlide - 1 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
    }, b.prototype.buildArrows = function() {
        var b = this;
        b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, b.prototype.buildDots = function() {
        var b, c, d = this;
        if (d.options.dots === !0 && d.slideCount > d.options.slidesToShow) {
            for (c = '<ul class="' + d.options.dotsClass + '">', b = 0; b <= d.getDotCount(); b += 1) c += "<li>" + d.options.customPaging.call(this, d, b) + "</li>";
            c += "</ul>", d.$dots = a(c).appendTo(d.options.appendDots), d.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
        }), b.$slidesCache = b.$slides, b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
    }, b.prototype.buildRows = function() {
        var a, b, c, d, e, f, g, h = this;
        if (d = document.createDocumentFragment(), f = h.$slider.children(), h.options.rows > 1) {
            for (g = h.options.slidesPerRow * h.options.rows, e = Math.ceil(f.length / g), a = 0; e > a; a++) {
                var i = document.createElement("div");
                for (b = 0; b < h.options.rows; b++) {
                    var j = document.createElement("div");
                    for (c = 0; c < h.options.slidesPerRow; c++) {
                        var k = a * g + (b * h.options.slidesPerRow + c);
                        f.get(k) && j.appendChild(f.get(k))
                    }
                    i.appendChild(j)
                }
                d.appendChild(i)
            }
            h.$slider.html(d), h.$slider.children().children().children().css({
                width: 100 / h.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, b.prototype.checkResponsive = function(b, c) {
        var d, e, f, g = this,
            h = !1,
            i = g.$slider.width(),
            j = window.innerWidth || a(window).width();
        if ("window" === g.respondTo ? f = j : "slider" === g.respondTo ? f = i : "min" === g.respondTo && (f = Math.min(j, i)), g.options.responsive && g.options.responsive.length && null !== g.options.responsive) {
            e = null;
            for (d in g.breakpoints) g.breakpoints.hasOwnProperty(d) && (g.originalSettings.mobileFirst === !1 ? f < g.breakpoints[d] && (e = g.breakpoints[d]) : f > g.breakpoints[d] && (e = g.breakpoints[d]));
            null !== e ? null !== g.activeBreakpoint ? (e !== g.activeBreakpoint || c) && (g.activeBreakpoint = e, "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b)), h = e) : (g.activeBreakpoint = e, "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b)), h = e) : null !== g.activeBreakpoint && (g.activeBreakpoint = null, g.options = g.originalSettings, b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b), h = e), b || h === !1 || g.$slider.trigger("breakpoint", [g, h])
        }
    }, b.prototype.changeSlide = function(b, c) {
        var d, e, f, g = this,
            h = a(b.target);
        switch (h.is("a") && b.preventDefault(), h.is("li") || (h = h.closest("li")), f = 0 !== g.slideCount % g.options.slidesToScroll, d = f ? 0 : (g.slideCount - g.currentSlide) % g.options.slidesToScroll, b.data.message) {
            case "previous":
                e = 0 === d ? g.options.slidesToScroll : g.options.slidesToShow - d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide - e, !1, c);
                break;
            case "next":
                e = 0 === d ? g.options.slidesToScroll : d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide + e, !1, c);
                break;
            case "index":
                var i = 0 === b.data.index ? 0 : b.data.index || h.index() * g.options.slidesToScroll;
                g.slideHandler(g.checkNavigable(i), !1, c), h.children().trigger("focus");
                break;
            default:
                return
        }
    }, b.prototype.checkNavigable = function(a) {
        var b, c, d = this;
        if (b = d.getNavigableIndexes(), c = 0, a > b[b.length - 1]) a = b[b.length - 1];
        else
            for (var e in b) {
                if (a < b[e]) {
                    a = c;
                    break
                }
                c = b[e]
            }
        return a
    }, b.prototype.cleanUpEvents = function() {
        var b = this;
        b.options.dots && null !== b.$dots && (a("li", b.$dots).off("click.slick", b.changeSlide), b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).off("mouseenter.slick", a.proxy(b.setPaused, b, !0)).off("mouseleave.slick", a.proxy(b.setPaused, b, !1))), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.$list.off("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.cleanUpRows = function() {
        var a, b = this;
        b.options.rows > 1 && (a = b.$slides.children().children(), a.removeAttr("style"), b.$slider.html(a))
    }, b.prototype.clickHandler = function(a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
    }, b.prototype.destroy = function(b) {
        var c = this;
        c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            a(this).attr("style", a(this).data("originalStyling"))
        }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
    }, b.prototype.disableTransition = function(a) {
        var b = this,
            c = {};
        c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.fadeSlide = function(a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({
            zIndex: c.options.zIndex
        }), c.$slides.eq(a).animate({
            opacity: 1
        }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
            opacity: 1,
            zIndex: c.options.zIndex
        }), b && setTimeout(function() {
            c.disableTransition(a), b.call()
        }, c.options.speed))
    }, b.prototype.fadeSlideOut = function(a) {
        var b = this;
        b.cssTransitions === !1 ? b.$slides.eq(a).animate({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }))
    }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
        var b = this;
        null !== a && (b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
        var a = this;
        return a.currentSlide
    }, b.prototype.getDotCount = function() {
        var a = this,
            b = 0,
            c = 0,
            d = 0;
        if (a.options.infinite === !0)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToShow, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else if (a.options.centerMode === !0) d = a.slideCount;
        else
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToShow, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d - 1
    }, b.prototype.getLeft = function(a) {
        var b, c, d, e = this,
            f = 0;
        return e.slideOffset = 0, c = e.$slides.first().outerHeight(!0), e.options.infinite === !0 ? (e.slideCount > e.options.slidesToShow && (e.slideOffset = -1 * e.slideWidth * e.options.slidesToShow, f = -1 * c * e.options.slidesToShow), 0 !== e.slideCount % e.options.slidesToScroll && a + e.options.slidesToScroll > e.slideCount && e.slideCount > e.options.slidesToShow && (a > e.slideCount ? (e.slideOffset = -1 * (e.options.slidesToShow - (a - e.slideCount)) * e.slideWidth, f = -1 * (e.options.slidesToShow - (a - e.slideCount)) * c) : (e.slideOffset = -1 * e.slideCount % e.options.slidesToScroll * e.slideWidth, f = -1 * e.slideCount % e.options.slidesToScroll * c))) : a + e.options.slidesToShow > e.slideCount && (e.slideOffset = (a + e.options.slidesToShow - e.slideCount) * e.slideWidth, f = (a + e.options.slidesToShow - e.slideCount) * c), e.slideCount <= e.options.slidesToShow && (e.slideOffset = 0, f = 0), e.options.centerMode === !0 && e.options.infinite === !0 ? e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2) - e.slideWidth : e.options.centerMode === !0 && (e.slideOffset = 0, e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2)), b = e.options.vertical === !1 ? -1 * a * e.slideWidth + e.slideOffset : -1 * a * c + f, e.options.variableWidth === !0 && (d = e.slideCount <= e.options.slidesToShow || e.options.infinite === !1 ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow), b = d[0] ? -1 * d[0].offsetLeft : 0, e.options.centerMode === !0 && (d = e.options.infinite === !1 ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow + 1), b = d[0] ? -1 * d[0].offsetLeft : 0, b += (e.$list.width() - d.outerWidth()) / 2)), b
    }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
        var b = this;
        return b.options[a]
    }, b.prototype.getNavigableIndexes = function() {
        var a, b = this,
            c = 0,
            d = 0,
            e = [];
        for (b.options.infinite === !1 ? a = b.slideCount : (c = -1 * b.options.slidesToScroll, d = -1 * b.options.slidesToScroll, a = 2 * b.slideCount); a > c;) e.push(c), c = d + b.options.slidesToScroll, d += b.options.slidesToScroll <= b.options.slidesToShow ? b.options.slidesToScroll : b.options.slidesToShow;
        return e
    }, b.prototype.getSlick = function() {
        return this
    }, b.prototype.getSlideCount = function() {
        var b, c, d, e = this;
        return d = e.options.centerMode === !0 ? e.slideWidth * Math.floor(e.options.slidesToShow / 2) : 0, e.options.swipeToSlide === !0 ? (e.$slideTrack.find(".slick-slide").each(function(b, f) {
            return f.offsetLeft - d + a(f).outerWidth() / 2 > -1 * e.swipeLeft ? (c = f, !1) : void 0
        }), b = Math.abs(a(c).attr("data-slick-index") - e.currentSlide) || 1) : e.options.slidesToScroll
    }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
        var c = this;
        c.changeSlide({
            data: {
                message: "index",
                index: parseInt(a)
            }
        }, b)
    }, b.prototype.init = function(b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA()
    }, b.prototype.initArrowEvents = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
            message: "previous"
        }, a.changeSlide), a.$nextArrow.on("click.slick", {
            message: "next"
        }, a.changeSlide))
    }, b.prototype.initDotEvents = function() {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.setPaused, b, !0)).on("mouseleave.slick", a.proxy(b.setPaused, b, !1))
    }, b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.$list.on("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.initUI = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay()
    }, b.prototype.keyHandler = function(a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
            data: {
                message: "next"
            }
        }))
    }, b.prototype.lazyLoad = function() {
        function b(b) {
            a("img[data-lazy]", b).each(function() {
                var b = a(this),
                    c = a(this).attr("data-lazy"),
                    d = document.createElement("img");
                d.onload = function() {
                    b.animate({
                        opacity: 0
                    }, 100, function() {
                        b.attr("src", c).animate({
                            opacity: 1
                        }, 200, function() {
                            b.removeAttr("data-lazy").removeClass("slick-loading")
                        })
                    })
                }, d.src = c
            })
        }
        var c, d, e, f, g = this;
        g.options.centerMode === !0 ? g.options.infinite === !0 ? (e = g.currentSlide + (g.options.slidesToShow / 2 + 1), f = e + g.options.slidesToShow + 2) : (e = Math.max(0, g.currentSlide - (g.options.slidesToShow / 2 + 1)), f = 2 + (g.options.slidesToShow / 2 + 1) + g.currentSlide) : (e = g.options.infinite ? g.options.slidesToShow + g.currentSlide : g.currentSlide, f = e + g.options.slidesToShow, g.options.fade === !0 && (e > 0 && e--, f <= g.slideCount && f++)), c = g.$slider.find(".slick-slide").slice(e, f), b(c), g.slideCount <= g.options.slidesToShow ? (d = g.$slider.find(".slick-slide"), b(d)) : g.currentSlide >= g.slideCount - g.options.slidesToShow ? (d = g.$slider.find(".slick-cloned").slice(0, g.options.slidesToShow), b(d)) : 0 === g.currentSlide && (d = g.$slider.find(".slick-cloned").slice(-1 * g.options.slidesToShow), b(d))
    }, b.prototype.loadSlider = function() {
        var a = this;
        a.setPosition(), a.$slideTrack.css({
            opacity: 1
        }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }, b.prototype.next = b.prototype.slickNext = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "next"
            }
        })
    }, b.prototype.orientationChange = function() {
        var a = this;
        a.checkResponsive(), a.setPosition()
    }, b.prototype.pause = b.prototype.slickPause = function() {
        var a = this;
        a.autoPlayClear(), a.paused = !0
    }, b.prototype.play = b.prototype.slickPlay = function() {
        var a = this;
        a.paused = !1, a.autoPlay()
    }, b.prototype.postSlide = function(a) {
        var b = this;
        b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay(), b.options.accessibility === !0 && b.initADA()
    }, b.prototype.prev = b.prototype.slickPrev = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, b.prototype.preventDefault = function(a) {
        a.preventDefault()
    }, b.prototype.progressiveLazyLoad = function() {
        var b, c, d = this;
        b = a("img[data-lazy]", d.$slider).length, b > 0 && (c = a("img[data-lazy]", d.$slider).first(), c.attr("src", c.attr("data-lazy")).removeClass("slick-loading").load(function() {
            c.removeAttr("data-lazy"), d.progressiveLazyLoad(), d.options.adaptiveHeight === !0 && d.setPosition()
        }).error(function() {
            c.removeAttr("data-lazy"), d.progressiveLazyLoad()
        }))
    }, b.prototype.refresh = function(b) {
        var c = this,
            d = c.currentSlide;
        c.destroy(!0), a.extend(c, c.initials, {
            currentSlide: d
        }), c.init(), b || c.changeSlide({
            data: {
                message: "index",
                index: d
            }
        }, !1)
    }, b.prototype.registerBreakpoints = function() {
        var b, c, d, e = this,
            f = e.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
            e.respondTo = e.options.respondTo || "window";
            for (b in f)
                if (d = e.breakpoints.length - 1, c = f[b].breakpoint, f.hasOwnProperty(b)) {
                    for (; d >= 0;) e.breakpoints[d] && e.breakpoints[d] === c && e.breakpoints.splice(d, 1), d--;
                    e.breakpoints.push(c), e.breakpointSettings[c] = f[b].settings
                }
            e.breakpoints.sort(function(a, b) {
                return e.options.mobileFirst ? a - b : b - a
            })
        }
    }, b.prototype.reinit = function() {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), b.$slider.trigger("reInit", [b]), b.options.autoplay === !0 && b.focusHandler()
    }, b.prototype.resize = function() {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
            b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
        }, 50))
    }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
        var d = this;
        return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
    }, b.prototype.setCSS = function(a) {
        var b, c, d = this,
            e = {};
        d.options.rtl === !0 && (a = -a), b = "left" == d.positionProp ? Math.ceil(a) + "px" : "0px", c = "top" == d.positionProp ? Math.ceil(a) + "px" : "0px", e[d.positionProp] = a, d.transformsEnabled === !1 ? d.$slideTrack.css(e) : (e = {}, d.cssTransitions === !1 ? (e[d.animType] = "translate(" + b + ", " + c + ")", d.$slideTrack.css(e)) : (e[d.animType] = "translate3d(" + b + ", " + c + ", 0px)", d.$slideTrack.css(e)))
    }, b.prototype.setDimensions = function() {
        var a = this;
        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
            padding: "0px " + a.options.centerPadding
        }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
            padding: a.options.centerPadding + " 0px"
        })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }, b.prototype.setFade = function() {
        var b, c = this;
        c.$slides.each(function(d, e) {
            b = -1 * c.slideWidth * d, c.options.rtl === !0 ? a(e).css({
                position: "relative",
                right: b,
                top: 0,
                zIndex: c.options.zIndex - 2,
                opacity: 0
            }) : a(e).css({
                position: "relative",
                left: b,
                top: 0,
                zIndex: c.options.zIndex - 2,
                opacity: 0
            })
        }), c.$slides.eq(c.currentSlide).css({
            zIndex: c.options.zIndex - 1,
            opacity: 1
        })
    }, b.prototype.setHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }, b.prototype.setOption = b.prototype.slickSetOption = function(b, c, d) {
        var e, f, g = this;
        if ("responsive" === b && "array" === a.type(c))
            for (f in c)
                if ("array" !== a.type(g.options.responsive)) g.options.responsive = [c[f]];
                else {
                    for (e = g.options.responsive.length - 1; e >= 0;) g.options.responsive[e].breakpoint === c[f].breakpoint && g.options.responsive.splice(e, 1), e--;
                    g.options.responsive.push(c[f])
                } else g.options[b] = c;
        d === !0 && (g.unload(), g.reinit())
    }, b.prototype.setPosition = function() {
        var a = this;
        a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
    }, b.prototype.setProps = function() {
        var a = this,
            b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = null !== a.animType && a.animType !== !1
    }, b.prototype.setSlideClasses = function(a) {
        var b, c, d, e, f = this;
        c = f.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), f.$slides.eq(a).addClass("slick-current"), f.options.centerMode === !0 ? (b = Math.floor(f.options.slidesToShow / 2), f.options.infinite === !0 && (a >= b && a <= f.slideCount - 1 - b ? f.$slides.slice(a - b, a + b + 1).addClass("slick-active").attr("aria-hidden", "false") : (d = f.options.slidesToShow + a, c.slice(d - b + 1, d + b + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? c.eq(c.length - 1 - f.options.slidesToShow).addClass("slick-center") : a === f.slideCount - 1 && c.eq(f.options.slidesToShow).addClass("slick-center")), f.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= f.slideCount - f.options.slidesToShow ? f.$slides.slice(a, a + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : c.length <= f.options.slidesToShow ? c.addClass("slick-active").attr("aria-hidden", "false") : (e = f.slideCount % f.options.slidesToShow, d = f.options.infinite === !0 ? f.options.slidesToShow + a : a, f.options.slidesToShow == f.options.slidesToScroll && f.slideCount - a < f.options.slidesToShow ? c.slice(d - (f.options.slidesToShow - e), d + e).addClass("slick-active").attr("aria-hidden", "false") : c.slice(d, d + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === f.options.lazyLoad && f.lazyLoad()
    }, b.prototype.setupInfinite = function() {
        var b, c, d, e = this;
        if (e.options.fade === !0 && (e.options.centerMode = !1), e.options.infinite === !0 && e.options.fade === !1 && (c = null, e.slideCount > e.options.slidesToShow)) {
            for (d = e.options.centerMode === !0 ? e.options.slidesToShow + 1 : e.options.slidesToShow, b = e.slideCount; b > e.slideCount - d; b -= 1) c = b - 1, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c - e.slideCount).prependTo(e.$slideTrack).addClass("slick-cloned");
            for (b = 0; d > b; b += 1) c = b, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c + e.slideCount).appendTo(e.$slideTrack).addClass("slick-cloned");
            e.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "")
            })
        }
    }, b.prototype.setPaused = function(a) {
        var b = this;
        b.options.autoplay === !0 && b.options.pauseOnHover === !0 && (b.paused = a, a ? b.autoPlayClear() : b.autoPlay())
    }, b.prototype.selectHandler = function(b) {
        var c = this,
            d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
            e = parseInt(d.attr("data-slick-index"));
        return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
    }, b.prototype.slideHandler = function(a, b, c) {
        var d, e, f, g, h = null,
            i = this;
        return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), e = 0 > d ? 0 !== i.slideCount % i.options.slidesToScroll ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? 0 !== i.slideCount % i.options.slidesToScroll ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function() {
            i.postSlide(e)
        })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function() {
            i.postSlide(e)
        }) : i.postSlide(e))))
    }, b.prototype.startLoad = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
    }, b.prototype.swipeDirection = function() {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "left" : "right" : "vertical"
    }, b.prototype.swipeEnd = function() {
        var a, b = this;
        if (b.dragging = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
        if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) switch (b.swipeDirection()) {
            case "left":
                a = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.slideHandler(a), b.currentDirection = 0, b.touchObject = {}, b.$slider.trigger("swipe", [b, "left"]);
                break;
            case "right":
                a = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.slideHandler(a), b.currentDirection = 1, b.touchObject = {}, b.$slider.trigger("swipe", [b, "right"])
        } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
    }, b.prototype.swipeHandler = function(a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
            case "start":
                b.swipeStart(a);
                break;
            case "move":
                b.swipeMove(a);
                break;
            case "end":
                b.swipeEnd(a)
        }
    }, b.prototype.swipeMove = function(a) {
        var b, c, d, e, f, g = this;
        return f = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !g.dragging || f && 1 !== f.length ? !1 : (b = g.getLeft(g.currentSlide), g.touchObject.curX = void 0 !== f ? f[0].pageX : a.clientX, g.touchObject.curY = void 0 !== f ? f[0].pageY : a.clientY, g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curX - g.touchObject.startX, 2))), g.options.verticalSwiping === !0 && (g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curY - g.touchObject.startY, 2)))), c = g.swipeDirection(), "vertical" !== c ? (void 0 !== a.originalEvent && g.touchObject.swipeLength > 4 && a.preventDefault(), e = (g.options.rtl === !1 ? 1 : -1) * (g.touchObject.curX > g.touchObject.startX ? 1 : -1), g.options.verticalSwiping === !0 && (e = g.touchObject.curY > g.touchObject.startY ? 1 : -1), d = g.touchObject.swipeLength, g.touchObject.edgeHit = !1, g.options.infinite === !1 && (0 === g.currentSlide && "right" === c || g.currentSlide >= g.getDotCount() && "left" === c) && (d = g.touchObject.swipeLength * g.options.edgeFriction, g.touchObject.edgeHit = !0), g.swipeLeft = g.options.vertical === !1 ? b + d * e : b + d * (g.$list.height() / g.listWidth) * e, g.options.verticalSwiping === !0 && (g.swipeLeft = b + d * e), g.options.fade === !0 || g.options.touchMove === !1 ? !1 : g.animating === !0 ? (g.swipeLeft = null, !1) : void g.setCSS(g.swipeLeft)) : void 0)
    }, b.prototype.swipeStart = function(a) {
        var b, c = this;
        return 1 !== c.touchObject.fingerCount || c.slideCount <= c.options.slidesToShow ? (c.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (b = a.originalEvent.touches[0]), c.touchObject.startX = c.touchObject.curX = void 0 !== b ? b.pageX : a.clientX, c.touchObject.startY = c.touchObject.curY = void 0 !== b ? b.pageY : a.clientY, void(c.dragging = !0));
    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
        var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
    }, b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, b.prototype.unslick = function(a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]), b.destroy()
    }, b.prototype.updateArrows = function() {
        var a, b = this;
        a = Math.floor(b.options.slidesToShow / 2), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && !b.options.infinite && (b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === b.currentSlide ? (b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : b.currentSlide >= b.slideCount - b.options.slidesToShow && b.options.centerMode === !1 ? (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : b.currentSlide >= b.slideCount - 1 && b.options.centerMode === !0 && (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, b.prototype.updateDots = function() {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, b.prototype.visibility = function() {
        var a = this;
        document[a.hidden] ? (a.paused = !0, a.autoPlayClear()) : a.options.autoplay === !0 && (a.paused = !1, a.autoPlay())
    }, b.prototype.initADA = function() {
        var b = this;
        b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
            a(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + b.instanceUid + c
            })
        }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
            a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
    }, b.prototype.activateADA = function() {
        var a = this,
            b = a.$slider.find("*").is(":focus");
        a.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false",
            tabindex: "0"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        }), b && a.$slideTrack.find(".slick-active").focus()
    }, b.prototype.focusHandler = function() {
        var b = this;
        b.$slider.on("focus.slick blur.slick", "*", function(c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function() {
                b.isPlay && (d.is(":focus") ? (b.autoPlayClear(), b.paused = !0) : (b.paused = !1, b.autoPlay()))
            }, 0)
        })
    }, a.fn.slick = function() {
        var a, c = this,
            d = arguments[0],
            e = Array.prototype.slice.call(arguments, 1),
            f = c.length,
            g = 0;
        for (g; f > g; g++)
            if ("object" == typeof d || "undefined" == typeof d ? c[g].slick = new b(c[g], d) : a = c[g].slick[d].apply(c[g].slick, e), "undefined" != typeof a) return a;
        return c
    }
});