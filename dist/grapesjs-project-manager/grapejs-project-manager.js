/*! grapesjs-project-manager - 2.0.6 */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports['grapesjs-project-manager'] = t())
    : (e['grapesjs-project-manager'] = t());
})(window, function () {
  return (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var a = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var a in e)
            n.d(
              r,
              a,
              function (t) {
                return e[t];
              }.bind(null, a)
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e['default'];
              }
            : function () {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 22))
    );
  })([
    function (e, t, n) {
      e.exports = n(14);
    },
    function (e, t) {
      function n(e, t, n, r, a, o, i) {
        try {
          var s = e[o](i),
            c = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, a);
      }
      (e.exports = function (e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (a, o) {
            var i = e.apply(t, r);
            function s(e) {
              n(i, a, o, s, c, 'next', e);
            }
            function c(e) {
              n(i, a, o, s, c, 'throw', e);
            }
            s(void 0);
          });
        };
      }),
        (e.exports['default'] = e.exports),
        (e.exports.__esModule = !0);
    },
    function (e, t) {
      (e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }),
        (e.exports['default'] = e.exports),
        (e.exports.__esModule = !0);
    },
    function (e, t) {
      (e.exports = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }),
        (e.exports['default'] = e.exports),
        (e.exports.__esModule = !0);
    },
    function (e, t) {
      function n(t) {
        return (
          (e.exports = n =
            Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
          (e.exports['default'] = e.exports),
          (e.exports.__esModule = !0),
          n(t)
        );
      }
      (e.exports = n),
        (e.exports['default'] = e.exports),
        (e.exports.__esModule = !0);
    },
    function (e, t) {
      (e.exports = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }),
        (e.exports['default'] = e.exports),
        (e.exports.__esModule = !0);
    },
    function (e, t) {
      function n(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      (e.exports = function (e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e;
      }),
        (e.exports['default'] = e.exports),
        (e.exports.__esModule = !0);
    },
    function (e, t, n) {
      var r = n(15);
      (e.exports = function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && r(e, t);
      }),
        (e.exports['default'] = e.exports),
        (e.exports.__esModule = !0);
    },
    function (e, t, n) {
      var r = n(16)['default'],
        a = n(2);
      (e.exports = function (e, t) {
        return !t || ('object' !== r(t) && 'function' != typeof t) ? a(e) : t;
      }),
        (e.exports['default'] = e.exports),
        (e.exports.__esModule = !0);
    },
    function (e, t, n) {
      var r = n(21);
      (e.exports = function (e, t) {
        if (null == e) return {};
        var n,
          a,
          o = r(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (a = 0; a < i.length; a++)
            (n = i[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }),
        (e.exports['default'] = e.exports),
        (e.exports.__esModule = !0);
    },
    function (e, t) {
      (e.exports = function (e) {
        throw new TypeError('"' + e + '" is read-only');
      }),
        (e.exports['default'] = e.exports),
        (e.exports.__esModule = !0);
    },
    function (e, t, n) {
      var r = n(17),
        a = n(18),
        o = n(19),
        i = n(20);
      (e.exports = function (e) {
        return r(e) || a(e) || o(e) || i();
      }),
        (e.exports['default'] = e.exports),
        (e.exports.__esModule = !0);
    },
    function (e, t, n) {
      !(function (t) {
        'use strict';
        var n = (function () {
            return {
              escape: function (e) {
                return e.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
              },
              parseExtension: t,
              mimeType: function (e) {
                var n = t(e).toLowerCase();
                return (
                  ((r = 'application/font-woff'),
                  (a = 'image/jpeg'),
                  {
                    woff: r,
                    woff2: r,
                    ttf: 'application/font-truetype',
                    eot: 'application/vnd.ms-fontobject',
                    png: 'image/png',
                    jpg: a,
                    jpeg: a,
                    gif: 'image/gif',
                    tiff: 'image/tiff',
                    svg: 'image/svg+xml',
                  })[n] || ''
                );
                var r, a;
              },
              dataAsUrl: function (e, t) {
                return 'data:' + t + ';base64,' + e;
              },
              isDataUrl: function (e) {
                return -1 !== e.search(/^(data:)/);
              },
              canvasToBlob: function (e) {
                return e.toBlob
                  ? new Promise(function (t) {
                      e.toBlob(t);
                    })
                  : (function (e) {
                      return new Promise(function (t) {
                        for (
                          var n = window.atob(e.toDataURL().split(',')[1]),
                            r = n.length,
                            a = new Uint8Array(r),
                            o = 0;
                          o < r;
                          o++
                        )
                          a[o] = n.charCodeAt(o);
                        t(new Blob([a], { type: 'image/png' }));
                      });
                    })(e);
              },
              resolveUrl: function (e, t) {
                var n = document.implementation.createHTMLDocument(),
                  r = n.createElement('base');
                n.head.appendChild(r);
                var a = n.createElement('a');
                return (
                  n.body.appendChild(a), (r.href = t), (a.href = e), a.href
                );
              },
              getAndEncode: function (e) {
                var t = 3e4;
                s.impl.options.cacheBust &&
                  (e += (/\?/.test(e) ? '&' : '?') + new Date().getTime());
                return new Promise(function (n) {
                  var r,
                    a = new XMLHttpRequest();
                  if (
                    ((a.onreadystatechange = function () {
                      if (4 !== a.readyState) return;
                      if (200 !== a.status)
                        return void (r
                          ? n(r)
                          : i(
                              'cannot fetch resource: ' +
                                e +
                                ', status: ' +
                                a.status
                            ));
                      var t = new FileReader();
                      (t.onloadend = function () {
                        var e = t.result.split(/,/)[1];
                        n(e);
                      }),
                        t.readAsDataURL(a.response);
                    }),
                    (a.ontimeout = function () {
                      r
                        ? n(r)
                        : i(
                            'timeout of ' +
                              t +
                              'ms occured while fetching resource: ' +
                              e
                          );
                    }),
                    (a.responseType = 'blob'),
                    (a.timeout = t),
                    a.open('GET', e, !0),
                    a.send(),
                    s.impl.options.imagePlaceholder)
                  ) {
                    var o = s.impl.options.imagePlaceholder.split(/,/);
                    o && o[1] && (r = o[1]);
                  }
                  function i(e) {
                    console.error(e), n('');
                  }
                });
              },
              uid:
                ((e = 0),
                function () {
                  return (
                    'u' +
                    (
                      '0000' +
                      ((Math.random() * Math.pow(36, 4)) << 0).toString(36)
                    ).slice(-4) +
                    e++
                  );
                }),
              delay: function (e) {
                return function (t) {
                  return new Promise(function (n) {
                    setTimeout(function () {
                      n(t);
                    }, e);
                  });
                };
              },
              asArray: function (e) {
                for (var t = [], n = e.length, r = 0; r < n; r++) t.push(e[r]);
                return t;
              },
              escapeXhtml: function (e) {
                return e.replace(/#/g, '%23').replace(/\n/g, '%0A');
              },
              makeImage: function (e) {
                return new Promise(function (t, n) {
                  var r = new Image();
                  (r.onload = function () {
                    t(r);
                  }),
                    (r.onerror = n),
                    (r.src = e);
                });
              },
              width: function (e) {
                var t = n(e, 'border-left-width'),
                  r = n(e, 'border-right-width');
                return e.scrollWidth + t + r;
              },
              height: function (e) {
                var t = n(e, 'border-top-width'),
                  r = n(e, 'border-bottom-width');
                return e.scrollHeight + t + r;
              },
            };
            var e;
            function t(e) {
              var t = /\.([^\.\/]*?)$/g.exec(e);
              return t ? t[1] : '';
            }
            function n(e, t) {
              var n = window.getComputedStyle(e).getPropertyValue(t);
              return parseFloat(n.replace('px', ''));
            }
          })(),
          r = (function () {
            var e = /url\(['"]?([^'"]+?)['"]?\)/g;
            return {
              inlineAll: function (e, n, o) {
                return (function () {
                  return !t(e);
                })()
                  ? Promise.resolve(e)
                  : Promise.resolve(e)
                      .then(r)
                      .then(function (t) {
                        var r = Promise.resolve(e);
                        return (
                          t.forEach(function (e) {
                            r = r.then(function (t) {
                              return a(t, e, n, o);
                            });
                          }),
                          r
                        );
                      });
              },
              shouldProcess: t,
              impl: { readUrls: r, inline: a },
            };
            function t(t) {
              return -1 !== t.search(e);
            }
            function r(t) {
              for (var r, a = []; null !== (r = e.exec(t)); ) a.push(r[1]);
              return a.filter(function (e) {
                return !n.isDataUrl(e);
              });
            }
            function a(e, t, r, a) {
              return Promise.resolve(t)
                .then(function (e) {
                  return r ? n.resolveUrl(e, r) : e;
                })
                .then(a || n.getAndEncode)
                .then(function (e) {
                  return n.dataAsUrl(e, n.mimeType(t));
                })
                .then(function (r) {
                  return e.replace(
                    (function (e) {
                      return new RegExp(
                        '(url\\([\'"]?)(' + n.escape(e) + ')([\'"]?\\))',
                        'g'
                      );
                    })(t),
                    '$1' + r + '$3'
                  );
                });
            }
          })(),
          a = (function () {
            return {
              resolveAll: function () {
                return e(document)
                  .then(function (e) {
                    return Promise.all(
                      e.map(function (e) {
                        return e.resolve();
                      })
                    );
                  })
                  .then(function (e) {
                    return e.join('\n');
                  });
              },
              impl: { readAll: e },
            };
            function e() {
              return Promise.resolve(n.asArray(document.styleSheets))
                .then(function (e) {
                  var t = [];
                  return (
                    e.forEach(function (e) {
                      try {
                        n.asArray(e.cssRules || []).forEach(t.push.bind(t));
                      } catch (t) {
                        console.log(
                          'Error while reading CSS rules from ' + e.href,
                          t.toString()
                        );
                      }
                    }),
                    t
                  );
                })
                .then(function (e) {
                  return e
                    .filter(function (e) {
                      return e.type === CSSRule.FONT_FACE_RULE;
                    })
                    .filter(function (e) {
                      return r.shouldProcess(e.style.getPropertyValue('src'));
                    });
                })
                .then(function (t) {
                  return t.map(e);
                });
              function e(e) {
                return {
                  resolve: function () {
                    var t = (e.parentStyleSheet || {}).href;
                    return r.inlineAll(e.cssText, t);
                  },
                  src: function () {
                    return e.style.getPropertyValue('src');
                  },
                };
              }
            }
          })(),
          o = (function () {
            return {
              inlineAll: function t(a) {
                return a instanceof Element
                  ? (function (e) {
                      var t = e.style.getPropertyValue('background');
                      return t
                        ? r
                            .inlineAll(t)
                            .then(function (t) {
                              e.style.setProperty(
                                'background',
                                t,
                                e.style.getPropertyPriority('background')
                              );
                            })
                            .then(function () {
                              return e;
                            })
                        : Promise.resolve(e);
                    })(a).then(function () {
                      return a instanceof HTMLImageElement
                        ? e(a).inline()
                        : Promise.all(
                            n.asArray(a.childNodes).map(function (e) {
                              return t(e);
                            })
                          );
                    })
                  : Promise.resolve(a);
              },
              impl: { newImage: e },
            };
            function e(e) {
              return {
                inline: function (t) {
                  return n.isDataUrl(e.src)
                    ? Promise.resolve()
                    : Promise.resolve(e.src)
                        .then(t || n.getAndEncode)
                        .then(function (t) {
                          return n.dataAsUrl(t, n.mimeType(e.src));
                        })
                        .then(function (t) {
                          return new Promise(function (n, r) {
                            (e.onload = n), (e.onerror = r), (e.src = t);
                          });
                        });
                },
              };
            }
          })(),
          i = { imagePlaceholder: void 0, cacheBust: !1 },
          s = {
            toSvg: c,
            toPng: function (e, t) {
              return u(e, t || {}).then(function (e) {
                return e.toDataURL();
              });
            },
            toJpeg: function (e, t) {
              return u(e, (t = t || {})).then(function (e) {
                return e.toDataURL('image/jpeg', t.quality || 1);
              });
            },
            toBlob: function (e, t) {
              return u(e, t || {}).then(n.canvasToBlob);
            },
            toPixelData: function (e, t) {
              return u(e, t || {}).then(function (t) {
                return t
                  .getContext('2d')
                  .getImageData(0, 0, n.width(e), n.height(e)).data;
              });
            },
            impl: { fontFaces: a, images: o, util: n, inliner: r, options: {} },
          };
        function c(e, t) {
          return (
            (function (e) {
              void 0 === e.imagePlaceholder
                ? (s.impl.options.imagePlaceholder = i.imagePlaceholder)
                : (s.impl.options.imagePlaceholder = e.imagePlaceholder);
              void 0 === e.cacheBust
                ? (s.impl.options.cacheBust = i.cacheBust)
                : (s.impl.options.cacheBust = e.cacheBust);
            })((t = t || {})),
            Promise.resolve(e)
              .then(function (e) {
                return (function e(t, r, a) {
                  return a || !r || r(t)
                    ? Promise.resolve(t)
                        .then(function (e) {
                          return e instanceof HTMLCanvasElement
                            ? n.makeImage(e.toDataURL())
                            : e.cloneNode(!1);
                        })
                        .then(function (e) {
                          return o(t, e, r);
                        })
                        .then(function (e) {
                          return (function (e, t) {
                            return t instanceof Element
                              ? Promise.resolve()
                                  .then(r)
                                  .then(a)
                                  .then(o)
                                  .then(i)
                                  .then(function () {
                                    return t;
                                  })
                              : t;
                            function r() {
                              var r, a;
                              (r = window.getComputedStyle(e)),
                                (a = t.style),
                                r.cssText
                                  ? (a.cssText = r.cssText)
                                  : (function (e, t) {
                                      n.asArray(e).forEach(function (n) {
                                        t.setProperty(
                                          n,
                                          e.getPropertyValue(n),
                                          e.getPropertyPriority(n)
                                        );
                                      });
                                    })(r, a);
                            }
                            function a() {
                              [':before', ':after'].forEach(function (r) {
                                !(function (r) {
                                  var a = window.getComputedStyle(e, r),
                                    o = a.getPropertyValue('content');
                                  if ('' === o || 'none' === o) return;
                                  var i = n.uid();
                                  t.className = t.className + ' ' + i;
                                  var s = document.createElement('style');
                                  s.appendChild(
                                    (function (e, t, r) {
                                      var a = '.' + e + ':' + t,
                                        o = r.cssText
                                          ? (function (e) {
                                              var t =
                                                e.getPropertyValue('content');
                                              return (
                                                e.cssText +
                                                ' content: ' +
                                                t +
                                                ';'
                                              );
                                            })(r)
                                          : (function (e) {
                                              return (
                                                n
                                                  .asArray(e)
                                                  .map(function (t) {
                                                    return (
                                                      t +
                                                      ': ' +
                                                      e.getPropertyValue(t) +
                                                      (e.getPropertyPriority(t)
                                                        ? ' !important'
                                                        : '')
                                                    );
                                                  })
                                                  .join('; ') + ';'
                                              );
                                            })(r);
                                      return document.createTextNode(
                                        a + '{' + o + '}'
                                      );
                                    })(i, r, a)
                                  ),
                                    t.appendChild(s);
                                })(r);
                              });
                            }
                            function o() {
                              e instanceof HTMLTextAreaElement &&
                                (t.innerHTML = e.value),
                                e instanceof HTMLInputElement &&
                                  t.setAttribute('value', '');
                            }
                            function i() {
                              t instanceof SVGElement &&
                                (t.setAttribute(
                                  'xmlns',
                                  'http://www.w3.org/2000/svg'
                                ),
                                t instanceof SVGRectElement &&
                                  ['width', 'height'].forEach(function (e) {
                                    var n = t.getAttribute(e);
                                    n && t.style.setProperty(e, n);
                                  }));
                            }
                          })(t, e);
                        })
                    : Promise.resolve();
                  function o(t, r, a) {
                    var o = t.childNodes;
                    return 0 === o.length
                      ? Promise.resolve(r)
                      : i(r, n.asArray(o), a).then(function () {
                          return r;
                        });
                    function i(t, n, r) {
                      var a = Promise.resolve();
                      return (
                        n.forEach(function (n) {
                          a = a
                            .then(function () {
                              return e(n, r);
                            })
                            .then(function (e) {
                              e && t.appendChild(e);
                            });
                        }),
                        a
                      );
                    }
                  }
                })(e, t.filter, !0);
              })
              .then(l)
              .then(d)
              .then(function (e) {
                t.bgcolor && (e.style.backgroundColor = t.bgcolor);
                t.width && (e.style.width = t.width + 'px');
                t.height && (e.style.height = t.height + 'px');
                t.style &&
                  Object.keys(t.style).forEach(function (n) {
                    e.style[n] = t.style[n];
                  });
                return e;
              })
              .then(function (r) {
                return (function (e, t, r) {
                  return Promise.resolve(e)
                    .then(function (e) {
                      return (
                        e.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml'),
                        new XMLSerializer().serializeToString(e)
                      );
                    })
                    .then(n.escapeXhtml)
                    .then(function (e) {
                      return (
                        '<foreignObject x="0" y="0" width="100%" height="100%">' +
                        e +
                        '</foreignObject>'
                      );
                    })
                    .then(function (e) {
                      return (
                        '<svg xmlns="http://www.w3.org/2000/svg" width="' +
                        t +
                        '" height="' +
                        r +
                        '">' +
                        e +
                        '</svg>'
                      );
                    })
                    .then(function (e) {
                      return 'data:image/svg+xml;charset=utf-8,' + e;
                    });
                })(r, t.width || n.width(e), t.height || n.height(e));
              })
          );
        }
        function u(e, t) {
          return c(e, t)
            .then(n.makeImage)
            .then(n.delay(100))
            .then(function (r) {
              var a = (function (e) {
                var r = document.createElement('canvas');
                if (
                  ((r.width = t.width || n.width(e)),
                  (r.height = t.height || n.height(e)),
                  t.bgcolor)
                ) {
                  var a = r.getContext('2d');
                  (a.fillStyle = t.bgcolor),
                    a.fillRect(0, 0, r.width, r.height);
                }
                return r;
              })(e);
              return a.getContext('2d').drawImage(r, 0, 0), a;
            });
        }
        function l(e) {
          return a.resolveAll().then(function (t) {
            var n = document.createElement('style');
            return (
              e.appendChild(n), n.appendChild(document.createTextNode(t)), e
            );
          });
        }
        function d(e) {
          return o.inlineAll(e).then(function () {
            return e;
          });
        }
        1 && (e.exports = s);
      })();
    },
    function (e, t) {
      (e.exports = function (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }),
        (e.exports['default'] = e.exports),
        (e.exports.__esModule = !0);
    },
    function (e, t, n) {
      var r = (function (e) {
        'use strict';
        var t,
          n = Object.prototype,
          r = n.hasOwnProperty,
          a = 'function' == typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          s = a.toStringTag || '@@toStringTag';
        function c(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, '');
        } catch (e) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, r) {
          var a = t && t.prototype instanceof m ? t : m,
            o = Object.create(a.prototype),
            i = new T(r || []);
          return (
            (o._invoke = (function (e, t, n) {
              var r = d;
              return function (a, o) {
                if (r === f) throw new Error('Generator is already running');
                if (r === h) {
                  if ('throw' === a) throw o;
                  return _();
                }
                for (n.method = a, n.arg = o; 1; ) {
                  var i = n.delegate;
                  if (i) {
                    var s = S(i, n);
                    if (s) {
                      if (s === g) continue;
                      return s;
                    }
                  }
                  if ('next' === n.method) n.sent = n._sent = n.arg;
                  else if ('throw' === n.method) {
                    if (r === d) throw ((r = h), n.arg);
                    n.dispatchException(n.arg);
                  } else 'return' === n.method && n.abrupt('return', n.arg);
                  r = f;
                  var c = l(e, t, n);
                  if ('normal' === c.type) {
                    if (((r = n.done ? h : p), c.arg === g)) continue;
                    return { value: c.arg, done: n.done };
                  }
                  'throw' === c.type &&
                    ((r = h), (n.method = 'throw'), (n.arg = c.arg));
                }
              };
            })(e, n, i)),
            o
          );
        }
        function l(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        e.wrap = u;
        var d = 'suspendedStart',
          p = 'suspendedYield',
          f = 'executing',
          h = 'completed',
          g = {};
        function m() {}
        function v() {}
        function y() {}
        var b = {};
        b[o] = function () {
          return this;
        };
        var w = Object.getPrototypeOf,
          x = w && w(w(E([])));
        x && x !== n && r.call(x, o) && (b = x);
        var j = (y.prototype = m.prototype = Object.create(b));
        function P(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function O(e, t) {
          var n;
          this._invoke = function (a, o) {
            function i() {
              return new t(function (n, i) {
                !(function n(a, o, i, s) {
                  var c = l(e[a], e, o);
                  if ('throw' !== c.type) {
                    var u = c.arg,
                      d = u.value;
                    return d && 'object' == typeof d && r.call(d, '__await')
                      ? t.resolve(d.__await).then(
                          function (e) {
                            n('next', e, i, s);
                          },
                          function (e) {
                            n('throw', e, i, s);
                          }
                        )
                      : t.resolve(d).then(
                          function (e) {
                            (u.value = e), i(u);
                          },
                          function (e) {
                            return n('throw', e, i, s);
                          }
                        );
                  }
                  s(c.arg);
                })(a, o, n, i);
              });
            }
            return (n = n ? n.then(i, i) : i());
          };
        }
        function S(e, n) {
          var r = e.iterator[n.method];
          if (r === t) {
            if (((n.delegate = null), 'throw' === n.method)) {
              if (
                e.iterator['return'] &&
                ((n.method = 'return'),
                (n.arg = t),
                S(e, n),
                'throw' === n.method)
              )
                return g;
              (n.method = 'throw'),
                (n.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return g;
          }
          var a = l(r, e.iterator, n.arg);
          if ('throw' === a.type)
            return (
              (n.method = 'throw'), (n.arg = a.arg), (n.delegate = null), g
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((n[e.resultName] = o.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                g)
              : o
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              g);
        }
        function k(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function I(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function T(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(k, this),
            this.reset(!0);
        }
        function E(e) {
          if (e) {
            var n = e[o];
            if (n) return n.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var a = -1,
                i = function n() {
                  for (; ++a < e.length; )
                    if (r.call(e, a)) return (n.value = e[a]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          return { next: _ };
        }
        function _() {
          return { value: t, done: !0 };
        }
        return (
          (v.prototype = j.constructor = y),
          (y.constructor = v),
          (v.displayName = c(y, s, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === v || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, y)
                : ((e.__proto__ = y), c(e, s, 'GeneratorFunction')),
              (e.prototype = Object.create(j)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          P(O.prototype),
          (O.prototype[i] = function () {
            return this;
          }),
          (e.AsyncIterator = O),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new O(u(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          P(j),
          c(j, s, 'Generator'),
          (j[o] = function () {
            return this;
          }),
          (j.toString = function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var r = t.pop();
                  if (r in e) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (e.values = E),
          (T.prototype = {
            constructor: T,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(I),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function a(r, a) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  a && ((n.method = 'next'), (n.arg = t)),
                  !!a
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  s = i.completion;
                if ('root' === i.tryLoc) return a('end');
                if (i.tryLoc <= this.prev) {
                  var c = r.call(i, 'catchLoc'),
                    u = r.call(i, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), g)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                g
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), I(n), g;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var a = r.arg;
                    I(n);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: E(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                g
              );
            },
          }),
          e
        );
      })(1 ? e.exports : void 0);
      try {
        regeneratorRuntime = r;
      } catch (e) {
        Function('r', 'regeneratorRuntime = r')(r);
      }
    },
    function (e, t) {
      function n(t, r) {
        return (
          (e.exports = n =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          (e.exports['default'] = e.exports),
          (e.exports.__esModule = !0),
          n(t, r)
        );
      }
      (e.exports = n),
        (e.exports['default'] = e.exports),
        (e.exports.__esModule = !0);
    },
    function (e, t) {
      function n(t) {
        return (
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? ((e.exports = n =
                function (e) {
                  return typeof e;
                }),
              (e.exports['default'] = e.exports),
              (e.exports.__esModule = !0))
            : ((e.exports = n =
                function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
              (e.exports['default'] = e.exports),
              (e.exports.__esModule = !0)),
          n(t)
        );
      }
      (e.exports = n),
        (e.exports['default'] = e.exports),
        (e.exports.__esModule = !0);
    },
    function (e, t, n) {
      var r = n(13);
      (e.exports = function (e) {
        if (Array.isArray(e)) return r(e);
      }),
        (e.exports['default'] = e.exports),
        (e.exports.__esModule = !0);
    },
    function (e, t) {
      (e.exports = function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }),
        (e.exports['default'] = e.exports),
        (e.exports.__esModule = !0);
    },
    function (e, t, n) {
      var r = n(13);
      (e.exports = function (e, t) {
        if (e) {
          if ('string' == typeof e) return r(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(e, t)
              : void 0
          );
        }
      }),
        (e.exports['default'] = e.exports),
        (e.exports.__esModule = !0);
    },
    function (e, t) {
      (e.exports = function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }),
        (e.exports['default'] = e.exports),
        (e.exports.__esModule = !0);
    },
    function (e, t) {
      (e.exports = function (e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }),
        (e.exports['default'] = e.exports),
        (e.exports.__esModule = !0);
    },
    function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n(1),
        a = n.n(r),
        o = n(3),
        i = n.n(o),
        s = n(0),
        c = n.n(s),
        u = n(5),
        l = n.n(u),
        d = n(6),
        p = n.n(d),
        f = n(2),
        h = n.n(f),
        g = n(7),
        m = n.n(g),
        v = n(8),
        y = n.n(v),
        b = n(4),
        w = n.n(b),
        x = n(10),
        j = n.n(x);
      function P(e, t) {
        var n,
          r = {
            second: 1e3,
            minute: 60 * 1e3,
            hour: 60 * 1e3 * 60,
            day: 24 * 60 * 1e3 * 60,
            week: 7 * 24 * 60 * 1e3 * 60,
            month: 30 * 24 * 60 * 1e3 * 60,
            year: 365 * 24 * 60 * 1e3 * 60,
          },
          a = Math.round,
          o = ' ago',
          i = function (e, n) {
            return void 0 === t
              ? ''.concat(n, ' ').concat(e + (n > 1 ? 's' : '') + o)
              : n + e.substring(0, 1);
          },
          s = Date.now() - new Date(e).getTime();
        for (var c in (s < 0 &&
          ((s *= (j()('ts'), -1)), j()('dir'), (o = ' from now')),
        r)) {
          if (a(s) < r[c]) return i(n || 'm', a(s / (r[n] || 1)));
          n = c;
        }
        return i(c, a(s / r[c]));
      }
      function O(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? O(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : O(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var k = (function () {
        function e(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          l()(this, e),
            (this.editor = t),
            (this.$ = t.$),
            (this.pfx = t.getConfig('stylePrefix')),
            (this.opts = n),
            (this.setState = this.setState.bind(this)),
            (this.setStateSilent = this.setStateSilent.bind(this)),
            (this.onRender = this.onRender.bind(this)),
            (this.handleTabs = this.handleTabs.bind(this));
        }
        return (
          p()(e, [
            {
              key: 'setState',
              value: function (e) {
                (this.state = S(S({}, this.state), e)), this.update();
              },
            },
            {
              key: 'setStateSilent',
              value: function (e) {
                this.state = S(S({}, this.state), e);
              },
            },
            {
              key: 'sm',
              get: function () {
                return this.editor.Storage;
              },
            },
            {
              key: 'cs',
              get: function () {
                return this.editor.Storage.getCurrentStorage();
              },
            },
            {
              key: 'pm',
              get: function () {
                return this.editor.Pages;
              },
            },
            { key: 'onRender', value: function () {} },
            { key: 'handleTabs', value: function () {} },
          ]),
          e
        );
      })();
      function I(e) {
        return T(e) / 1024;
      }
      function T(e) {
        return new TextEncoder().encode(JSON.stringify(e)).length;
      }
      function E(e, t) {
        return !(!t || !e) && t.toLowerCase().indexOf(e.toLowerCase()) > -1;
      }
      function _(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function A(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = w()(e);
          if (t) {
            var a = w()(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return y()(this, n);
        };
      }
      var C = (function (e) {
          m()(u, e);
          var t,
            n,
            r,
            o,
            s = A(u);
          function u(e) {
            var t,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            return (
              l()(this, u),
              ((t = s.call(this, e, n)).handleSort = t.handleSort.bind(h()(t))),
              (t.handleFilterInput = t.handleFilterInput.bind(h()(t))),
              (t.handleNameInput = t.handleNameInput.bind(h()(t))),
              (t.handleOpen = t.handleOpen.bind(h()(t))),
              (t.handleCreate = t.handleCreate.bind(h()(t))),
              (t.handleDelete = t.handleDelete.bind(h()(t))),
              (t.openEdit = t.openEdit.bind(h()(t))),
              (t.state = {
                editableProjectId: '',
                projectId: '',
                tab: 'pages',
                sites: [],
                nameText: '',
                filterText: '',
                loading: !1,
                sortBy: 'published_at',
                sortOrder: 'desc',
              }),
              t
            );
          }
          return (
            p()(u, [
              {
                key: 'editableId',
                get: function () {
                  return this.state.editableProjectId;
                },
              },
              {
                key: 'allSites',
                get: function () {
                  return this.state.sites;
                },
              },
              {
                key: 'allSitesSize',
                get: function () {
                  return I(this.state.sites);
                },
              },
              {
                key: 'onRender',
                value:
                  ((o = a()(
                    c.a.mark(function e() {
                      var t, n, r;
                      return c.a.wrap(
                        function (e) {
                          for (; 1; )
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = this.setState),
                                  (n = this.cs),
                                  t({ loading: !0 }),
                                  (e.next = 4),
                                  n.loadAll()
                                );
                              case 4:
                                (r = e.sent), t({ sites: r, loading: !1 });
                              case 6:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return o.apply(this, arguments);
                  }),
              },
              {
                key: 'handleFilterInput',
                value: function (e) {
                  this.setState({ filterText: e.target.value.trim() });
                },
              },
              {
                key: 'handleNameInput',
                value: function (e) {
                  this.setStateSilent({ nameText: e.target.value.trim() });
                },
              },
              {
                key: 'handleSort',
                value: function (e) {
                  var t = this.state.sortOrder;
                  e.target &&
                    e.target.dataset &&
                    this.setState({
                      sortBy: e.target.dataset.sort,
                      sortOrder: 'desc' === t ? 'asc' : 'desc',
                    });
                },
              },
              {
                key: 'handleTabs',
                value: function (e) {
                  var t = e.target,
                    n = this.$el,
                    r = this.pfx,
                    a = this.$;
                  n.find('.'.concat(r, 'tablinks')).removeClass('active'),
                    a(t).addClass('active'),
                    'pages' === t.id
                      ? this.setState({ tab: 'pages' })
                      : this.setState({ tab: 'templates' });
                },
              },
              {
                key: 'handleOpen',
                value:
                  ((r = a()(
                    c.a.mark(function e(t) {
                      var n, r, a, o;
                      return c.a.wrap(
                        function (e) {
                          for (; 1; )
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n = this.editor),
                                  (r = this.cs),
                                  (a = this.state.projectId) &&
                                    a !== r.currentId)
                                ) {
                                  e.next = 5;
                                  break;
                                }
                                return (
                                  this.opts.currentPageOpen(),
                                  e.abrupt('return')
                                );
                              case 5:
                                return r.setId(a), (e.next = 8), n.load();
                              case 8:
                                (o = e.sent),
                                  r.setName(o.name),
                                  r.setThumbnail(o.thumbnail || ''),
                                  r.setIsTemplate(o.template),
                                  r.setDescription(
                                    o.description || 'No description'
                                  ),
                                  n.Modal.close();
                              case 14:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function (e) {
                    return r.apply(this, arguments);
                  }),
              },
              {
                key: 'handleCreate',
                value:
                  ((n = a()(
                    c.a.mark(function e(t) {
                      var n, r, a, o, s, u, l, d, p, f, h;
                      return c.a.wrap(
                        function (e) {
                          for (; 1; )
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r = this.editor),
                                  (a = this.cs),
                                  (o = this.state),
                                  (s = o.projectId),
                                  (u = o.nameText),
                                  (l = r.runCommand('get-uuidv4')),
                                  (d = u || 'New-' + l.substring(0, 8)),
                                  (n = {
                                    id: l,
                                    name: d,
                                    template: !1,
                                    thumbnail: '',
                                    styles: '[]',
                                    description: 'No description',
                                    pages: '[{"id": "'.concat(
                                      crypto.randomUUID().substring(0, 13),
                                      '", "name": "index"}]'
                                    ),
                                  }),
                                  i()(n, 'styles', '[]'),
                                  i()(n, 'assets', '[]'),
                                  (p = n),
                                  s)
                                ) {
                                  e.next = 20;
                                  break;
                                }
                                return a.setId(l), (e.next = 9), a.store(p);
                              case 9:
                                return (
                                  a.setIsTemplate(!1), (e.next = 12), r.load()
                                );
                              case 12:
                                (f = e.sent),
                                  a.setId(f.id),
                                  a.setName(f.name),
                                  a.setThumbnail(f.thumbnail || ''),
                                  a.setDescription(
                                    f.description || 'No description'
                                  ),
                                  r.Modal.close(),
                                  (e.next = 30);
                                break;
                              case 20:
                                return (
                                  a.setId(s),
                                  a.setIsTemplate(!1),
                                  (e.next = 24),
                                  r.load()
                                );
                              case 24:
                                (h = e.sent),
                                  a.setId(l),
                                  a.setName(d),
                                  a.setThumbnail(h.thumbnail || ''),
                                  a.setDescription(
                                    h.description || 'No description'
                                  ),
                                  r.Modal.close();
                              case 30:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function (e) {
                    return n.apply(this, arguments);
                  }),
              },
              {
                key: 'openEdit',
                value: function (e) {
                  var t = this.editor;
                  (0, this.setStateSilent)({
                    editableProjectId: e.currentTarget.dataset.id,
                  }),
                    t.Modal.close(),
                    t.SettingsApp.setTab('project'),
                    t.runCommand('open-settings');
                },
              },
              {
                key: 'handleEdit',
                value: function (e) {
                  var t = this.opts,
                    n = this.cs,
                    r = this.editor;
                  'function' == typeof t.update
                    ? t.update(D(D({}, e), {}, { updated_at: Date.now() }), r)
                    : t.onUpdateAsync(
                        n.update(D(D({}, e), {}, { updated_at: Date.now() }))
                      );
                },
              },
              {
                key: 'handleDelete',
                value:
                  ((t = a()(
                    c.a.mark(function e(t) {
                      var n, r, a, o, i, s;
                      return c.a.wrap(
                        function (e) {
                          for (; 1; )
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n = this.cs),
                                  (r = this.setState),
                                  !(a = this.opts).confirmDeleteProject())
                                ) {
                                  e.next = 15;
                                  break;
                                }
                                if (
                                  ((o = t.currentTarget.dataset.id),
                                  'function' != typeof a.delete)
                                ) {
                                  e.next = 7;
                                  break;
                                }
                                a.delete(o), (e.next = 11);
                                break;
                              case 7:
                                return (
                                  (e.next = 9), a.onDeleteAsync(n.delete(o))
                                );
                              case 9:
                                (i = e.sent), a.onDelete(i);
                              case 11:
                                return (e.next = 13), n.loadAll();
                              case 13:
                                (s = e.sent), r({ sites: s });
                              case 15:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function (e) {
                    return t.apply(this, arguments);
                  }),
              },
              {
                key: 'renderSiteList',
                value: function () {
                  var e,
                    t = this.state,
                    n = t.sites,
                    r = t.tab,
                    a = t.filterText,
                    o = t.loading,
                    i = t.sortBy,
                    s = t.sortOrder,
                    c = this.pfx,
                    u = this.opts,
                    l = this.cs,
                    d = this.editor;
                  if (o) return u.loader || '<div>Loading sites...</div>';
                  if (!n.length) return u.nosites || '<div>No Sites</div>';
                  'id' === i
                    ? (e = (function (e, t) {
                        return function (n, r) {
                          if ('asc' === t) {
                            if (n[e] < r[e]) return -1;
                            if (n[e] > r[e]) return 1;
                          }
                          return n[e] > r[e] ? -1 : n[e] < r[e] ? 1 : 0;
                        };
                      })(i, s))
                    : 'updated_at' === i || 'created_at' === i
                    ? (e = (function (e, t) {
                        return function (n, r) {
                          var a = new Date(n[e]).getTime(),
                            o = new Date(r[e]).getTime();
                          return 'asc' === t ? a - o : o - a;
                        };
                      })(i, s))
                    : 'pages' === i
                    ? (e = (function (e, t) {
                        return function (n, r) {
                          var a = JSON.parse(n[e]),
                            o = JSON.parse(r[e]);
                          if ('desc' === t) {
                            if (a.length < o.length) return -1;
                            if (a.length > o.length) return 1;
                          }
                          return a.length > o.length
                            ? -1
                            : a.length < o.length
                            ? 1
                            : 0;
                        };
                      })(i, s))
                    : 'size' === i &&
                      (e = (function (e) {
                        return function (t, n) {
                          var r = I(t),
                            a = I(n);
                          if ('asc' === e) {
                            if (r < a) return -1;
                            if (r > a) return 1;
                          }
                          return r > a ? -1 : r < a ? 1 : 0;
                        };
                      })(s));
                  var p = n
                    .sort(e)
                    .filter(function (e) {
                      if (!a && 'pages' === r) return !0;
                      var t = e.id,
                        n = e.name,
                        o = e.template;
                      return (
                        !((!E(a, t) && !E(a, n)) || 'pages' !== r) ||
                        !('templates' !== r || !o)
                      );
                    })
                    .map(function (e, t) {
                      var n = e.id,
                        r = e.name,
                        a = e.description,
                        o = e.thumbnail,
                        i = e.created_at,
                        s = e.updated_at,
                        p = I(e),
                        f = e.pages
                          ? e.pages
                          : u.legacyPrefix
                          ? e[''.concat(u.legacyPrefix, 'pages')]
                          : [],
                        h = 'string' == typeof f ? JSON.parse(f) : f,
                        g = s ? P(s) : 'NA',
                        m = i ? P(i) : 'NA',
                        v = h
                          .map(function (e) {
                            return e.name;
                          })
                          .join(', ');
                      return '<div \n                    class="site-wrapper '
                        .concat(
                          l.currentId === n ? 'open' : '',
                          '" \n                    key="'
                        )
                        .concat(t, '" \n                    data-id="')
                        .concat(n, '" \n                    title="')
                        .concat(
                          d.I18n.t(
                            'grapesjs-project-manager.templates.titles.open'
                          ),
                          '">\n                        <div class="site-screenshot">\n                            <img src="'
                        )
                        .concat(
                          o,
                          '" alt="" />\n                        </div>\n                        <div class="site-info">\n                            <h2>\n                                '
                        )
                        .concat(
                          r,
                          '\n                            </h2>\n                            <div class="site-meta">\n                                '
                        )
                        .concat(
                          a,
                          '\n                            </div>\n                        </div>\n                        <div class="site-update-time">'
                        )
                        .concat(
                          g,
                          '</div>\n                        <div class="site-pages">\n                            <div title="'
                        )
                        .concat(v || n, '">\n                                ')
                        .concat(
                          h.length || 1,
                          '\n                            </div>\n                        </div>\n                        <div class="site-create-time">'
                        )
                        .concat(m, '</div>\n                        ')
                        .concat(
                          u.size
                            ? '<div class="site-size" title="'
                                .concat(
                                  p,
                                  ' KB">\n                            '
                                )
                                .concat(
                                  p.toFixed(2),
                                  ' KB\n                        </div>'
                                )
                            : '',
                          '\n                        <div class="site-actions">\n                            <i class="'
                        )
                        .concat(
                          c,
                          'caret-icon fa fa-hand-pointer-o edit" title="'
                        )
                        .concat(
                          d.I18n.t(
                            'grapesjs-project-manager.templates.titles.edit'
                          ),
                          '" data-id="'
                        )
                        .concat(n, '"></i>\n                            ')
                        .concat(
                          l.currentId !== n
                            ? '<i class="'
                                .concat(
                                  c,
                                  'caret-icon fa fa-trash-o delete" title="'
                                )
                                .concat(
                                  d.I18n.t(
                                    'grapesjs-project-manager.templates.titles.delete'
                                  ),
                                  '" data-id="'
                                )
                                .concat(n, '"></i>')
                            : '',
                          '\n                        </div>\n                    </div>'
                        );
                    })
                    .join('\n');
                  if (!p.length) {
                    if ('templates' === r)
                      return u.nosites || '<div>No Templates Available.</div>';
                    p =
                      "<div>\n                    <h3>\n                        No '".concat(
                        a,
                        "' examples found. Clear your search and try again.\n                    </h3>\n                </div>"
                      );
                  }
                  return p;
                },
              },
              {
                key: 'renderSiteActions',
                value: function () {
                  var e = this.editor;
                  return 'pages' === this.state.tab
                    ? '<div  class="flex-row">\n                <input \n                    class="search tm-input" \n                    placeholder="'
                        .concat(
                          e.I18n.t('grapesjs-project-manager.templates.search'),
                          '"\n                />\n                <button id="open" class="primary-button">\n                    '
                        )
                        .concat(
                          e.I18n.t('grapesjs-project-manager.templates.open'),
                          '\n                </button>\n            </div>'
                        )
                    : '<div class="'
                        .concat(this.pfx, 'tip-about ')
                        .concat(this.pfx, 'four-color">\n                ')
                        .concat(
                          e.I18n.t('grapesjs-project-manager.templates.help'),
                          '\n            </div>\n            <div class="flex-row">\n                <input \n                    class="name tm-input" \n                    placeholder="'
                        )
                        .concat(
                          e.I18n.t('grapesjs-project-manager.templates.new'),
                          '"\n                />\n                <button id="create" class="primary-button">\n                    '
                        )
                        .concat(
                          e.I18n.t('grapesjs-project-manager.templates.create'),
                          '\n                </button>\n            </div>'
                        );
                },
              },
              {
                key: 'renderThumbnail',
                value: function (e, t) {
                  var n = '<img src="'.concat(e, '" alt="" />');
                  return e
                    ? n
                    : t.html
                    ? '<svg xmlns="http://www.w3.org/2000/svg" class="template-preview" viewBox="0 0 1300 1100" width="99%" height="220">\n                <foreignObject width="100%" height="100%" style="pointer-events:none">\n                    <div xmlns="http://www.w3.org/1999/xhtml">\n                        '.concat(
                        t.html + '<style scoped>' + t.css + '</style>',
                        '\n                    </div>\n                </foreignObject>\n            </svg>'
                      )
                    : n;
                },
              },
              {
                key: 'update',
                value: function () {
                  var e,
                    t,
                    n,
                    r,
                    a,
                    o,
                    i,
                    s,
                    c,
                    u = this;
                  null === (e = this.$el) ||
                    void 0 === e ||
                    e.find('#site-list').html(this.renderSiteList()),
                    null === (t = this.$el) ||
                      void 0 === t ||
                      t.find('#tm-actions').html(this.renderSiteActions());
                  var l =
                      null === (n = this.$el) || void 0 === n
                        ? void 0
                        : n.find('.site-wrapper'),
                    d =
                      null === (r = this.$el) || void 0 === r
                        ? void 0
                        : r.find('input.search'),
                    p =
                      null === (a = this.$el) || void 0 === a
                        ? void 0
                        : a.find('input.name');
                  this.setStateSilent({ projectId: '' }),
                    l &&
                      l.on('click', function (e) {
                        l.removeClass('selected'),
                          u.$(e.currentTarget).addClass('selected'),
                          u.setStateSilent({
                            projectId: e.currentTarget.dataset.id,
                          });
                      }),
                    d &&
                      (d.val(this.state.filterText),
                      d.on('change', this.handleFilterInput)),
                    p &&
                      (p.val(this.state.nameText),
                      p.on('change', this.handleNameInput)),
                    null === (o = this.$el) ||
                      void 0 === o ||
                      o.find('#open').on('click', this.handleOpen),
                    null === (i = this.$el) ||
                      void 0 === i ||
                      i.find('#create').on('click', this.handleCreate),
                    null === (s = this.$el) ||
                      void 0 === s ||
                      s.find('i.edit').on('click', this.openEdit),
                    null === (c = this.$el) ||
                      void 0 === c ||
                      c.find('i.delete').on('click', this.handleDelete);
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.$,
                    n = this.pfx,
                    r = this.opts,
                    a = this.editor,
                    o = this.state.tab;
                  this.onRender(),
                    null === (e = this.$el) || void 0 === e || e.remove();
                  var i = t(
                    '<div class="app">\n                <div class="contents">\n                    <div class="'
                      .concat(
                        n,
                        'tab">\n                        <button id="pages" class="'
                      )
                      .concat(n, 'tablinks ')
                      .concat(
                        'pages' === o ? 'active' : '',
                        '">\n                            '
                      )
                      .concat(
                        a.I18n.t('grapesjs-project-manager.templates.all'),
                        '\n                        </button>\n                        <button id="templates" class="'
                      )
                      .concat(n, 'tablinks ')
                      .concat(
                        'templates' === o ? 'active' : '',
                        '"">\n                            '
                      )
                      .concat(
                        a.I18n.t(
                          'grapesjs-project-manager.templates.templates'
                        ),
                        '\n                        </button>\n                    </div>\n                    <div id="tm-actions">\n                        '
                      )
                      .concat(
                        this.renderSiteActions(),
                        '\n                    </div>\n                    <div class="site-wrapper-header">\n                        <div\n                            class="site-screenshot-header header"\n                            data-sort="id"\n                            title="'
                      )
                      .concat(
                        a.I18n.t(
                          'grapesjs-project-manager.templates.titles.info'
                        ),
                        '"\n                        >\n                            '
                      )
                      .concat(
                        a.I18n.t('grapesjs-project-manager.templates.info'),
                        '\n                        </div>\n                        <div\n                            class="site-info header"\n                            data-sort="id"\n                        ></div>\n                        <div\n                            class="site-update-time header"\n                            data-sort="updated_at"\n                            title="'
                      )
                      .concat(
                        a.I18n.t(
                          'grapesjs-project-manager.templates.titles.updated'
                        ),
                        '"\n                        >\n                            '
                      )
                      .concat(
                        a.I18n.t('grapesjs-project-manager.templates.updated'),
                        '\n                        </div>\n                        <div\n                            class="site-pages header"\n                            data-sort="pages"\n                            title="'
                      )
                      .concat(
                        a.I18n.t(
                          'grapesjs-project-manager.templates.titles.pages'
                        ),
                        '"\n                        >\n                            '
                      )
                      .concat(
                        a.I18n.t('grapesjs-project-manager.templates.pages'),
                        '\n                        </div>\n                        <div\n                            class="site-create-time header"\n                            data-sort="created_at"\n                            title="'
                      )
                      .concat(
                        a.I18n.t(
                          'grapesjs-project-manager.templates.titles.created'
                        ),
                        '"\n                        >\n                            '
                      )
                      .concat(
                        a.I18n.t('grapesjs-project-manager.templates.created'),
                        '\n                        </div>\n                        '
                      )
                      .concat(
                        r.size
                          ? '<div\n                            class="site-size header"\n                            data-sort="size"\n                            title="'
                              .concat(
                                a.I18n.t(
                                  'grapesjs-project-manager.templates.titles.size'
                                ),
                                '"\n                        >\n                            '
                              )
                              .concat(
                                a.I18n.t(
                                  'grapesjs-project-manager.templates.size'
                                ),
                                '\n                        </div>'
                              )
                          : '',
                        '\n                        <div\n                            class="site-actions header"\n                            data-sort="id"\n                            title="'
                      )
                      .concat(
                        a.I18n.t(
                          'grapesjs-project-manager.templates.titles.actions'
                        ),
                        '"\n                        >\n                            '
                      )
                      .concat(
                        a.I18n.t('grapesjs-project-manager.templates.actions'),
                        '\n                        </div>\n                    </div>\n                    <div id="site-list">\n                        '
                      )
                      .concat(
                        this.renderSiteList(),
                        '\n                    </div>\n                </div>\n            </div>'
                      )
                  );
                  return (
                    i.find('.header').on('click', this.handleSort),
                    i.find('#pages, #templates').on('click', this.handleTabs),
                    (this.$el = i),
                    i
                  );
                },
              },
            ]),
            u
          );
        })(k),
        L = n(11),
        M = n.n(L);
      function N(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = w()(e);
          if (t) {
            var a = w()(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return y()(this, n);
        };
      }
      var R = (function (e) {
        m()(n, e);
        var t = N(n);
        function n(e) {
          var r,
            a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (
            l()(this, n),
            ((r = t.call(this, e, a)).addPage = r.addPage.bind(h()(r))),
            (r.selectPage = r.selectPage.bind(h()(r))),
            (r.removePage = r.removePage.bind(h()(r))),
            (r.isSelected = r.isSelected.bind(h()(r))),
            (r.handleNameInput = r.handleNameInput.bind(h()(r))),
            (r.openEdit = r.openEdit.bind(h()(r))),
            (r.state = {
              editablePageId: '',
              isShowing: !0,
              nameText: '',
              pages: [],
              loading: !1,
            }),
            r
          );
        }
        return (
          p()(n, [
            {
              key: 'editableId',
              get: function () {
                return this.state.editablePageId;
              },
            },
            {
              key: 'onRender',
              value: function () {
                var e = this.pm,
                  t = this.setState,
                  n = this.editor;
                t({ loading: !0 }),
                  t({ pages: M()(e.getAll()) }),
                  n.on('page', function () {
                    t({ pages: M()(e.getAll()) });
                  }),
                  t({ loading: !1 });
              },
            },
            {
              key: 'isSelected',
              value: function (e) {
                return this.pm.getSelected().id === e.id;
              },
            },
            {
              key: 'selectPage',
              value: function (e) {
                this.pm.select(e.currentTarget.dataset.key), this.update();
              },
            },
            {
              key: 'removePage',
              value: function (e) {
                this.opts.confirmDeleteProject() &&
                  (this.pm.remove(e.currentTarget.dataset.key), this.update());
              },
            },
            {
              key: 'openEdit',
              value: function (e) {
                var t = this.editor;
                this.setStateSilent({
                  editablePageId: e.currentTarget.dataset.key,
                }),
                  t.Modal.close(),
                  t.SettingsApp.setTab('page'),
                  t.runCommand('open-settings');
              },
            },
            {
              key: 'editPage',
              value: function (e, t) {
                var n = this.pm.get(e);
                null == n || n.set('name', t), this.update();
              },
            },
            {
              key: 'addPage',
              value: function (m) {
                var e = this.pm,
                  t = this.state.nameText;
                m.find('input').get(0).value = '';
                t && (e.add({ name: t, component: '' }), this.update());
              },
            },
            {
              key: 'handleNameInput',
              value: function (e) {
                this.setStateSilent({ nameText: e.target.value.trim() });
              },
            },
            {
              key: 'renderPagesList',
              value: function () {
                var e = this.state,
                  t = e.pages,
                  n = e.loading,
                  r = this.opts,
                  a = this.isSelected;
                return n
                  ? r.loader || '<div>Loading pages...</div>'
                  : t
                      .map(function (e, t) {
                        return '<div \n                data-id="'
                          .concat(t, '" \n                data-key="')
                          .concat(
                            e.get('private') ? '' : e.id || e.get('name'),
                            '"  \n                class="page '
                          )
                          .concat(
                            a(e) ? 'selected' : '',
                            '"\n            >\n                <i class="fa fa-file-o" style="margin:5px;"></i>\n                '
                          )
                          .concat(e.get('name') || e.id, '\n                ')
                          .concat(
                            a(e) || e.get('internal')
                              ? ''
                              : '<span class="page-close" data-key="'.concat(
                                  e.id || e.get('name'),
                                  '">&Cross;</span>'
                                ),
                            '\n                '
                          )
                          .concat(
                            e.get('internal')
                              ? ''
                              : '<span class="page-edit" data-key="'.concat(
                                  e.id || e.get('name'),
                                  '"><i class="fa fa-hand-pointer-o"></i></span>'
                                ),
                            '\n            </div>'
                          );
                      })
                      .join('\n');
              },
            },
            {
              key: 'update',
              value: function () {
                var e, t, n, r;
                null === (e = this.$el) ||
                  void 0 === e ||
                  e.find('.pages').html(this.renderPagesList()),
                  null === (t = this.$el) ||
                    void 0 === t ||
                    t.find('.page').on('click', this.selectPage),
                  null === (n = this.$el) ||
                    void 0 === n ||
                    n.find('.page-edit').on('click', this.openEdit),
                  null === (r = this.$el) ||
                    void 0 === r ||
                    r.find('.page-close').on('click', this.removePage);
              },
            },
            {
              key: 'render',
              value: function () {
                var e,
                  t = this.$,
                  n = this.editor;
                this.onRender(),
                  null === (e = this.$el) || void 0 === e || e.remove();
                var r = t(
                  '<div style="display: '
                    .concat(
                      this.state.isShowing ? 'flex' : 'none',
                      '; flex: 0 0 25%" class="pages-wrp bottom-panel">\n                <div class="resizer">resizer</div> <div class="pages">\n                    '
                    )
                    .concat(
                      this.renderPagesList(),
                      '\n                </div>\n                <div  class="flex-row">\n                    <input \n                        class="tm-input sm" \n                        type="text" \n                        placeholder="'
                    )
                    .concat(
                      n.I18n.t('grapesjs-project-manager.pages.placeholder'),
                      '" \n                    />\n                </div>\n                <div class="add-page">\n                    '
                    )
                    .concat(
                      n.I18n.t('grapesjs-project-manager.pages.new'),
                      '\n                </div>\n            </div>'
                    )
                );
                return (
                  r.find('.add-page').on('click', () => this.addPage(r)),
                  r.find('input').on('change', this.handleNameInput),
                  (this.$el = r),
                  r
                );
              },
            },
            {
              key: 'findPanel',
              get: function () {
                let panelC;
                var panels = editor.Panels;
                if (!panels.getPanel('views-container')) {
                  panelC = panels.addPanel({ id: 'views-container' });
                } else {
                  panelC = panels.getPanel('views-container');
                }
                return this.editor.Panels.getPanel('views-container');
              },
            },
            {
              key: 'showPanel',
              value: function () {
                var e;
                (this.state.isShowing = !0),
                  null === (e = this.findPanel) ||
                    void 0 === e ||
                    e
                      .set('appendContent', this.render())
                      .trigger('change:appendContent'),
                  this.update();
              },
            },
            {
              key: 'hidePanel',
              value: function () {
                (this.state.isShowing = !1), this.render();
              },
            },
          ]),
          n
        );
      })(k);
      function $(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = w()(e);
          if (t) {
            var a = w()(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return y()(this, n);
        };
      }
      var B = (function (e) {
          m()(n, e);
          var t = $(n);
          function n(e) {
            var r,
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            return (
              l()(this, n),
              ((r = t.call(this, e, a)).handleSave = r.handleSave.bind(h()(r))),
              (r.handleThumbnail = r.handleThumbnail.bind(h()(r))),
              (r.handleThumbnailInput = r.handleThumbnailInput.bind(h()(r))),
              (r.state = { tab: 'page', loading: !1 }),
              r
            );
          }
          return (
            p()(n, [
              {
                key: 'setTab',
                value: function (e) {
                  this.state.tab = e;
                },
              },
              {
                key: 'update',
                value: function () {
                  var e = this.$el;
                  null == e || e.find('#settings').html(this.renderSettings()),
                    null == e ||
                      e.find('#generate').on('click', this.handleThumbnail),
                    null == e ||
                      e
                        .find('input#thumbnail')
                        .on('change', this.handleThumbnailInput);
                },
              },
              {
                key: 'onRender',
                value: function () {
                  var e = this.setState;
                  e({ loading: !0 }), e({ loading: !1 });
                },
              },
              {
                key: 'handleSave',
                value: function (e) {
                  var t = this.$el,
                    n = this.editor;
                  if ('page' === this.state.tab) {
                    var r = n.PagesApp.editableId,
                      a =
                        null == t ? void 0 : t.find('input.name').val().trim();
                    r && n.PagesApp.editPage(r, a);
                  } else {
                    var o = n.TemplateManager.editableId,
                      i =
                        null == t
                          ? void 0
                          : t.find('input.thumbnail').val().trim(),
                      s =
                        null == t ? void 0 : t.find('input.name').val().trim(),
                      c =
                        null == t ? void 0 : t.find('input.desc').val().trim(),
                      u =
                        null == t
                          ? void 0
                          : t.find('input.template').get(0).checked;
                    o &&
                      n.TemplateManager.handleEdit({
                        id: o,
                        thumbnail: i,
                        name: s,
                        description: c,
                        template: u,
                      });
                  }
                  n.Modal.close();
                },
              },
              {
                key: 'handleThumbnail',
                value: function (e) {
                  var t = this.editor,
                    n = this.$el,
                    r = this.opts;
                  t.runCommand('take-screenshot', {
                    clb: function (e) {
                      null == n || n.find('img').attr('src', e),
                        r.onThumbnail(
                          e,
                          null == n ? void 0 : n.find('input.thumbnail')
                        );
                    },
                  });
                },
              },
              {
                key: 'handleThumbnailInput',
                value: function (e) {
                  var t;
                  null === (t = this.$el) ||
                    void 0 === t ||
                    t.find('img').attr('src', e.target.value.trim());
                },
              },
              {
                key: 'renderSettings',
                value: function () {
                  var e = this.state,
                    t = e.tab,
                    n = e.loading,
                    r = this.opts,
                    a = this.pfx,
                    o = this.pm,
                    i = this.editor;
                  if (n) return r.loader || '<div>Loading settings...</div>';
                  if ('page' === t) {
                    var s = o.get(i.PagesApp.editableId),
                      c =
                        (null == s ? void 0 : s.get('name')) ||
                        (null == s ? void 0 : s.id) ||
                        '';
                    return '<label for="name">\n                    '
                      .concat(
                        i.I18n.t(
                          'grapesjs-project-manager.settings.labels.name'
                        ),
                        '\n                </label>\n                <div class="flex-row">\n                    <input \n                        class="name tm-input" \n                        value="'
                      )
                      .concat(c, '" \n                        placeholder="')
                      .concat(
                        i.I18n.t(
                          'grapesjs-project-manager.settings.placeholders.name'
                        ),
                        '"/>\n                </div>'
                      );
                  }
                  var u = i.TemplateManager.allSites.find(function (e) {
                    return e.id === i.TemplateManager.editableId;
                  });
                  return '<div class="'
                    .concat(a, 'tip-about ')
                    .concat(a, 'four-color">\n                    ')
                    .concat(
                      i.I18n.t('grapesjs-project-manager.settings.help'),
                      '\n                </div>\n                <label for="thumbnail">\n                    '
                    )
                    .concat(
                      i.I18n.t(
                        'grapesjs-project-manager.settings.labels.thumbnail'
                      ),
                      '\n                </label>\n                <div class="flex-row">\n                    <input \n                        id="thumbnail" \n                        class="thumbnail tm-input" \n                        value="'
                    )
                    .concat(
                      (null == u ? void 0 : u.thumbnail) || '',
                      '" \n                        placeholder="'
                    )
                    .concat(
                      i.I18n.t(
                        'grapesjs-project-manager.settings.placeholders.thumbnail'
                      ),
                      '"\n                    />\n                </div>\n                <div class="flex-row" style="margin-bottom:15px;">\n                    <div class="site-screenshot">\n                        <img src="'
                    )
                    .concat(
                      (null == u ? void 0 : u.thumbnail) || '',
                      '" alt="screenshot" />\n                    </div>\n                    <button id="generate" class="primary-button">\n                        '
                    )
                    .concat(
                      i.I18n.t('grapesjs-project-manager.settings.generate'),
                      '\n                    </button>\n                </div>\n                <label for="name">\n                    '
                    )
                    .concat(
                      i.I18n.t('grapesjs-project-manager.settings.labels.name'),
                      '\n                </label>\n                <div class="flex-row">\n                    <input \n                        id="name" \n                        class="name tm-input" \n                        value="'
                    )
                    .concat(
                      (null == u ? void 0 : u.name) || '',
                      '" \n                        placeholder="'
                    )
                    .concat(
                      i.I18n.t(
                        'grapesjs-project-manager.settings.placeholders.name'
                      ),
                      '"\n                    />\n                </div>\n                <label for="desc">\n                    '
                    )
                    .concat(
                      i.I18n.t(
                        'grapesjs-project-manager.settings.labels.description'
                      ),
                      '\n                </label>\n                <div class="flex-row">\n                    <input \n                        id="desc" \n                        class="desc tm-input" \n                        value="'
                    )
                    .concat(
                      (null == u ? void 0 : u.description) || '',
                      '" \n                        placeholder="'
                    )
                    .concat(
                      i.I18n.t(
                        'grapesjs-project-manager.settings.placeholders.description'
                      ),
                      '"\n                    />\n                </div>\n                <div class="flex-row group">\n                    <input id="template" class="template" type="checkbox" '
                    )
                    .concat(
                      null != u && u.template ? 'checked' : '',
                      '/>\n                    <label for="template">\n                        '
                    )
                    .concat(
                      i.I18n.t(
                        'grapesjs-project-manager.settings.labels.template'
                      ),
                      '\n                    </label>\n                </div>'
                    );
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.$,
                    n = this.editor;
                  this.onRender(),
                    null === (e = this.$el) || void 0 === e || e.remove();
                  var r = t(
                    '<div class="app">\n                <div id="settings">\n                    '
                      .concat(
                        this.renderSettings(),
                        '\n                </div>\n                <div class="flex-row">\n                    <button id="save" class="primary-button">\n                        '
                      )
                      .concat(
                        n.I18n.t('grapesjs-project-manager.settings.save'),
                        '\n                    </button>\n                </div>\n            </div>'
                      )
                  );
                  return (
                    r.find('#save').on('click', this.handleSave),
                    r.find('#generate').on('click', this.handleThumbnail),
                    r
                      .find('input#thumbnail')
                      .on('change', this.handleThumbnailInput),
                    (this.$el = r),
                    r
                  );
                },
              },
            ]),
            n
          );
        })(k),
        U = C,
        z = n(12),
        F = n.n(z);
      function V(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function G(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? V(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : V(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var q = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = e.Commands,
            r = e.Storage.getCurrentStorage(),
            o = e.Modal,
            i = e.getConfig('stylePrefix'),
            s = ''.concat(i, 'mdl-dialog-tml'),
            u = ''.concat(i, 'mdl-dialog-md');
          (e.domtoimage = F.a),
            n.add('open-templates', {
              run: function (e, n) {
                var r = document.querySelector('.'.concat(i, 'mdl-dialog'));
                r.classList.add(s),
                  (null == n ? void 0 : n.set) && n.set('active'),
                  o.setTitle(t.mdlTitle),
                  o.setContent(e.TemplateManager.render()),
                  o.open(),
                  o.getModel().once('change:open', function () {
                    r.classList.remove(s);
                  });
              },
            }),
            n.add('open-settings', {
              run: function (e, n) {
                var r = document.querySelector('.'.concat(i, 'mdl-dialog'));
                r.classList.add(u),
                  (null == n ? void 0 : n.set) && n.set('active'),
                  o.setTitle(t.mdlTitle),
                  o.setContent(e.SettingsApp.render()),
                  o.open(),
                  o.getModel().once('change:open', function () {
                    r.classList.remove(u);
                  });
              },
            }),
            n.add('open-pages', {
              run: function (e) {
                e.PagesApp.showPanel();
              },
              stop: function (e) {
                e.PagesApp.hidePanel();
              },
            });
          var l = function () {
              return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
                /[018]/g,
                function (e) {
                  return (
                    e ^
                    (crypto.getRandomValues(new Uint8Array(1))[0] &
                      (15 >> (e / 4)))
                  ).toString(16);
                }
              );
            },
            d = (function () {
              var e = a()(
                c.a.mark(function e(n) {
                  var r,
                    a,
                    o,
                    i,
                    s = arguments;
                  return c.a.wrap(
                    function (e) {
                      for (; 1; )
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (r = s.length > 1 && void 0 !== s[1] ? s[1] : {}),
                              (a = s.length > 2 ? s[2] : void 0),
                              (o = s.length > 3 ? s[3] : void 0),
                              (e.prev = 3),
                              (e.next = 6),
                              t.onScreenshotAsync(F.a.toJpeg(n, r))
                            );
                          case 6:
                            (i = e.sent), a && a(i), (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10), (e.t0 = e['catch'](3)), o && o(e.t0);
                          case 13:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, 10]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          n.add('get-uuidv4', function () {
            if (crypto) return crypto.randomUUID ? crypto.randomUUID() : l();
          }),
            n.add('take-screenshot', function (e, n) {
              var r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {
                        clb: function (e) {
                          return e;
                        },
                      },
                a = e.getWrapper().getEl();
              d(
                a,
                {
                  quality: t.quality,
                  height: 1e3,
                  cacheBust: !0,
                  style: G(
                    { 'background-color': 'white' },
                    e.getWrapper().getStyle()
                  ),
                },
                r.clb,
                t.onScreenshotError
              );
            }),
            n.add('save-as-template', function (e) {
              r.setIsTemplate(!0), e.store();
            }),
            n.add(
              'delete-template',
              (function () {
                var e = a()(
                  c.a.mark(function e(n) {
                    var a;
                    return c.a.wrap(function (e) {
                      for (; 1; )
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), r.delete();
                          case 2:
                            (a = e.sent), t.onDelete(a);
                          case 4:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()
            );
        },
        H = n(9),
        W = n.n(H),
        J = 'indexeddb',
        K = 'rest-api',
        X = 'firestore',
        Y = {
          currentName: 'Default',
          currentId: 'uuidv4',
          currentThumbnail: '',
          isTemplate: !1,
          description: 'No description',
          setId: function (e) {
            this.currentId = e;
          },
          setName: function (e) {
            this.currentName = e;
          },
          setThumbnail: function (e) {
            this.currentThumbnail = e;
          },
          setIsTemplate: function (e) {
            this.isTemplate = !!e;
          },
          setDescription: function (e) {
            this.description = e;
          },
        };
      function Q(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Q(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Q(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var ee = function (e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = e.StorageManager,
          o = J,
          i = n.objectStoreName,
          s = function () {
            return t;
          },
          u = function () {
            return new Promise(function (e, r) {
              if (t) e(t);
              else {
                var a = (
                  window.indexedDB ||
                  window.mozIndexedDB ||
                  window.webkitIndexedDB ||
                  window.msIndexedDB
                ).open(n.dbName, n.indexeddbVersion);
                (a.onerror = r),
                  (a.onsuccess = function () {
                    ((t = a.result).onerror = r), e(t);
                  }),
                  (a.onupgradeneeded = function (e) {
                    a.result
                      .createObjectStore(i, { keyPath: 'id' })
                      .createIndex('name', 'name', { unique: !1 });
                  });
              }
            });
          },
          l = function () {
            return t.transaction([i], 'readwrite').objectStore(i);
          },
          d = (function () {
            var e = a()(
              c.a.mark(function e() {
                return c.a.wrap(function (e) {
                  for (; 1; )
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!t) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt('return', l());
                      case 4:
                        return (e.next = 6), u();
                      case 6:
                        return e.abrupt('return', l());
                      case 7:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        r.add(
          o,
          Z(
            Z({}, Y),
            {},
            {
              getDb: s,
              getObjectStore: l,
              load: function (e) {
                var t = this;
                return a()(
                  c.a.mark(function e() {
                    var n;
                    return c.a.wrap(function (e) {
                      for (; 1; )
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), d();
                          case 2:
                            return (
                              (n = e.sent),
                              e.abrupt(
                                'return',
                                new Promise(function (e, r) {
                                  var a = n.get(t.currentId);
                                  (a.onerror = r),
                                    (a.onsuccess = function () {
                                      e(a.result || {});
                                    });
                                })
                              )
                            );
                          case 4:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              loadAll: function () {
                return a()(
                  c.a.mark(function e() {
                    var t;
                    return c.a.wrap(function (e) {
                      for (; 1; )
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), d();
                          case 2:
                            return (
                              (t = e.sent),
                              e.abrupt(
                                'return',
                                new Promise(function (e, n) {
                                  var r = t.getAll();
                                  (r.onerror = n),
                                    (r.onsuccess = function () {
                                      e(r.result || []);
                                    });
                                })
                              )
                            );
                          case 4:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              store: function (e) {
                var t = this;
                return a()(
                  c.a.mark(function n() {
                    var r;
                    return c.a.wrap(function (n) {
                      for (; 1; )
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (n.next = 2), d();
                          case 2:
                            return (
                              (r = n.sent),
                              n.abrupt(
                                'return',
                                new Promise(function (n, a) {
                                  var o = r.put(
                                    Z(
                                      {
                                        id: t.currentId,
                                        name: t.currentName,
                                        template: t.isTemplate,
                                        thumbnail: t.currentThumbnail,
                                        description: t.description,
                                        updated_at: Date.now(),
                                      },
                                      e
                                    )
                                  );
                                  (o.onerror = a),
                                    (o.onsuccess = function () {
                                      n(o.result);
                                    });
                                })
                              )
                            );
                          case 4:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  })
                )();
              },
              update: function (e) {
                return a()(
                  c.a.mark(function t() {
                    var n, r, a;
                    return c.a.wrap(function (t) {
                      for (; 1; )
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (n = e.id),
                              (r = W()(e, ['id'])),
                              (t.next = 3),
                              d()
                            );
                          case 3:
                            return (
                              (a = t.sent),
                              t.abrupt(
                                'return',
                                new Promise(function (e, t) {
                                  var o = a.get(n);
                                  (o.onerror = t),
                                    (o.onsuccess = function () {
                                      a.put(Z(Z({ id: n }, o.result), r)),
                                        e(o.result);
                                    });
                                })
                              )
                            );
                          case 5:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              delete: function (e) {
                var t = this;
                return a()(
                  c.a.mark(function n() {
                    var r;
                    return c.a.wrap(function (n) {
                      for (; 1; )
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (n.next = 2), d();
                          case 2:
                            return (
                              (r = n.sent),
                              n.abrupt(
                                'return',
                                new Promise(function (n, a) {
                                  var o = r.delete(e || t.currentId);
                                  (o.onerror = a),
                                    (o.onsuccess = function () {
                                      n(o.result);
                                    });
                                })
                              )
                            );
                          case 4:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  })
                )();
              },
            }
          )
        );
      };
      function te(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? te(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : te(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var re = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = e.StorageManager,
          r = K,
          o = n.get('remote'),
          i = n.getStorageOptions('remote');
        n.add(
          r,
          ne(
            ne({}, Y),
            {},
            {
              load: function () {
                var e = arguments,
                  t = this;
                return a()(
                  c.a.mark(function n() {
                    var r, a, s, u;
                    return c.a.wrap(function (n) {
                      for (; 1; )
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (r = e.length > 0 && void 0 !== e[0] ? e[0] : {}),
                              (a = i.urlLoad),
                              (s = a.endsWith('/')
                                ? t.currentId
                                : '/'.concat(t.currentId)),
                              (n.next = 5),
                              o.load(ne(ne(ne({}, i), { urlLoad: a + s }), r))
                            );
                          case 5:
                            return (u = n.sent), n.abrupt('return', u);
                          case 7:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  })
                )();
              },
              loadAll: function () {
                var e = arguments;
                return a()(
                  c.a.mark(function t() {
                    var n;
                    return c.a.wrap(function (t) {
                      for (; 1; )
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (n = e.length > 0 && void 0 !== e[0] ? e[0] : {}),
                              (t.next = 3),
                              o.load(ne(ne({}, i), n))
                            );
                          case 3:
                            return t.abrupt('return', t.sent);
                          case 4:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              store: function (e) {
                var n = arguments,
                  r = this;
                return a()(
                  c.a.mark(function a() {
                    var s, u, l, d;
                    return c.a.wrap(function (a) {
                      for (; 1; )
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (s = n.length > 1 && void 0 !== n[1] ? n[1] : {}),
                              (u = i.urlStore),
                              (l = u.endsWith('/')
                                ? r.currentId
                                : '/'.concat(r.currentId)),
                              (a.next = 5),
                              o.store(
                                ne(
                                  {
                                    id: r.currentId,
                                    name: r.currentName,
                                    template: r.isTemplate,
                                    thumbnail: r.currentThumbnail,
                                    description: r.description,
                                    updated_at: Date.now(),
                                  },
                                  e
                                ),
                                ne(
                                  ne(ne({}, i), {
                                    urlStore: t.uuidInPath ? u + l : u,
                                  }),
                                  s
                                )
                              )
                            );
                          case 5:
                            return (d = a.sent), a.abrupt('return', d);
                          case 7:
                          case 'end':
                            return a.stop();
                        }
                    }, a);
                  })
                )();
              },
              update: function (e) {
                var t = arguments;
                return a()(
                  c.a.mark(function n() {
                    var r, a, s, u;
                    return c.a.wrap(function (n) {
                      for (; 1; )
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (r = t.length > 1 && void 0 !== t[1] ? t[1] : {}),
                              (a = i.urlStore),
                              (s = e.id),
                              (s = a.endsWith('/') ? s : '/'.concat(s)),
                              (n.next = 6),
                              o.store(
                                e,
                                ne(ne(ne({}, i), { urlStore: a + s }), r)
                              )
                            );
                          case 6:
                            return (u = n.sent), n.abrupt('return', u);
                          case 8:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  })
                )();
              },
              delete: function (e) {
                var t = arguments,
                  n = this;
                return a()(
                  c.a.mark(function r() {
                    var a, s, u, l;
                    return c.a.wrap(function (r) {
                      for (; 1; )
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (a = t.length > 1 && void 0 !== t[1] ? t[1] : {}),
                              (s = i.urlDelete),
                              (u = e || n.currentId),
                              (u = s.endsWith('/') ? u : '/'.concat(u)),
                              (r.next = 6),
                              o.request(s + u, ne({ method: 'delete' }, a))
                            );
                          case 6:
                            return (l = r.sent), r.abrupt('return', l);
                          case 8:
                          case 'end':
                            return r.stop();
                        }
                    }, r);
                  })
                )();
              },
            }
          )
        );
      };
      function ae(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ae(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ae(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var ie = function (e) {
          var t,
            n,
            r,
            o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            i = e.StorageManager,
            s = X,
            u = o.apiKey,
            l = o.authDomain,
            d = o.projectId,
            p = o.settings,
            f = function (e) {
              return i.onError(s, e.code || e);
            },
            h = function () {
              return n;
            },
            g = function () {
              return (
                r ||
                (firebase.apps.length
                  ? (firebase.app(), (t = firebase.firestore()).settings(p))
                  : (firebase.initializeApp(
                      oe(
                        { apiKey: u, authDomain: l, projectId: d },
                        o.firebaseConfig
                      )
                    ),
                    (t = firebase.firestore()).settings(p)),
                o.enableOffline && t.enablePersistence().catch(f),
                (r = t.collection(o.objectStoreName)))
              );
            },
            m = function () {
              var t = g(),
                r = e.Storage.getCurrentStorage();
              return (n = t.doc(r.currentId));
            };
          i.add(
            s,
            oe(
              oe({}, Y),
              {},
              {
                getDoc: h,
                setDocId: function (e) {
                  this.currentId = e;
                },
                load: function (e) {
                  return a()(
                    c.a.mark(function e() {
                      var t, n;
                      return c.a.wrap(function (e) {
                        for (; 1; )
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (t = m()), (e.next = 3), t.get();
                            case 3:
                              return (
                                (n = e.sent),
                                e.abrupt('return', n.exists ? n.data() : {})
                              );
                            case 5:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  )();
                },
                loadAll: function () {
                  return a()(
                    c.a.mark(function e() {
                      var t, n, r;
                      return c.a.wrap(function (e) {
                        for (; 1; )
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (t = g()), (e.next = 3), t.get();
                            case 3:
                              return (
                                (n = e.sent),
                                (r = []),
                                n.forEach(function (e) {
                                  return r.push(e.data());
                                }),
                                e.abrupt('return', r)
                              );
                            case 7:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  )();
                },
                store: function (e) {
                  var t = this;
                  return a()(
                    c.a.mark(function n() {
                      var r;
                      return c.a.wrap(function (n) {
                        for (; 1; )
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                (r = g()),
                                (n.next = 3),
                                r.doc(e.id || t.currentId).set(
                                  oe(
                                    {
                                      id: t.currentId,
                                      name: t.currentName,
                                      template: t.isTemplate,
                                      thumbnail: t.currentThumbnail,
                                      description: t.description,
                                      updated_at: Date.now(),
                                    },
                                    e
                                  )
                                )
                              );
                            case 3:
                            case 'end':
                              return n.stop();
                          }
                      }, n);
                    })
                  )();
                },
                update: function (e) {
                  return a()(
                    c.a.mark(function t() {
                      var n, r, a;
                      return c.a.wrap(function (t) {
                        for (; 1; )
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (n = e.id),
                                (r = W()(e, ['id'])),
                                (a = g()),
                                (t.next = 4),
                                a.doc(n).set(r, { merge: !0 })
                              );
                            case 4:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    })
                  )();
                },
                delete: function (e) {
                  return a()(
                    c.a.mark(function t() {
                      var n, r;
                      return c.a.wrap(function (t) {
                        for (; 1; )
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (e) {
                                t.next = 6;
                                break;
                              }
                              return (n = m()), (t.next = 4), n.delete();
                            case 4:
                              t.next = 9;
                              break;
                            case 6:
                              return (r = g()), (t.next = 9), r.doc(e).delete();
                            case 9:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    })
                  )();
                },
              }
            )
          );
        },
        se = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          ee(e, t), re(e, t), ie(e, t);
        },
        ce = {
          'grapesjs-project-manager': {
            templates: {
              all: 'All',
              templates: 'Templates',
              search: 'Search for sites by name or id',
              open: 'Open',
              new: 'Enter new page name',
              create: 'Create',
              help: 'Select a template, enter project name, then click create. If no template is selected a blank project will be created.',
              info: 'Site Info',
              updated: 'Last Updated',
              pages: 'Pages',
              created: 'Created At',
              size: 'Size',
              actions: 'Actions',
              titles: {
                open: 'Select to open site',
                info: 'Click to sort by site name',
                updated: 'Click to sort by last update date',
                pages: 'Click to sort by number of pages',
                created: 'Click to sort by site creation date',
                size: 'Click to sort by site size',
                actions: 'Click to sort by site name',
                delete: 'Delete',
                edit: 'Edit',
              },
            },
            pages: { placeholder: 'Page name', new: 'New Page +' },
            settings: {
              save: 'Save',
              generate: 'Generate',
              help: 'Enter url, or generate thumbnail.',
              labels: {
                name: 'Name',
                thumbnail: 'Thumbnail',
                description: 'Description',
                template: 'Template',
              },
              placeholders: {
                name: 'Name...',
                thumbnail: 'Thumbnail...',
                description: 'Description...',
              },
            },
          },
        };
      function ue(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ue(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ue(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      t['default'] = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = le(
            le(
              {},
              {
                legacyPrefix: '',
                dbName: 'gjs',
                objectStoreName: 'projects',
                loadFirst: !0,
                customLoad: !1,
                uuidInPath: !0,
                indexeddbVersion: 6,
                delete: !1,
                confirmDeleteProject: function () {
                  return confirm('Are you sure to delete this project');
                },
                confirmDeletePage: function () {
                  return confirm('Are you sure to delete this page');
                },
                onDelete: function (e) {
                  console.log('Deleted:', e);
                },
                onDeleteAsync: function (e) {
                  return e;
                },
                update: !1,
                onUpdateAsync: function (e) {
                  return e;
                },
                onScreenshotAsync: function (e) {
                  return e;
                },
                onScreenshotError: function (e) {
                  console.log(e);
                },
                onThumbnail: function (e, t) {
                  t.val(e);
                },
                quality: 0.01,
                mdlTitle: 'Project Manager',
                nopages:
                  '<div style="display:flex;align-items:center;padding:50px;margin:auto;">No Projects Yet</div>',
                apiKey: '',
                authDomain: '',
                projectId: '',
                enableOffline: !0,
                firebaseConfig: {},
                settings: { timestampsInSnapshots: !0 },
                size: !1,
                currentPageOpen: function () {
                  console.log('Current page already open');
                },
                i18n: {},
              }
            ),
            t
          );
        e.I18n.addMessages(le({ en: ce }, n.i18n)),
          (e.TemplateManager = new U(e, n)),
          (e.PagesApp = new R(e, n)),
          (e.SettingsApp = new B(e, n)),
          q(e, n),
          se(e, n),
          e.on(
            'load',
            a()(
              c.a.mark(function t() {
                var r, a, o, i;
                return c.a.wrap(function (t) {
                  for (; 1; )
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((r = e.Storage.getCurrentStorage()),
                          (a = n.customLoad) &&
                            'function' == typeof a &&
                            a(e, r),
                          a)
                        ) {
                          t.next = 21;
                          break;
                        }
                        return (
                          (t.next = 6),
                          r && r.load && r.load() && r.loadAll && r.loadAll()
                        );
                      case 6:
                        o = t.sent;
                        if (o) {
                          if (!(i = o[0]) || !n.loadFirst) {
                            t.next = 19;
                            break;
                          }
                        }
                        return (
                          r && r.setId && r.setId(i.id),
                          r && r.setName && r.setName(i.name),
                          r && r.setThumbnail && r.setThumbnail(i.thumbnail),
                          r && r.setIsTemplate && r.setIsTemplate(i.template),
                          (t.next = 15)
                          // e.load()
                        );
                      case 15:
                        e.stopCommand('sw-visibility'),
                          e.runCommand('sw-visibility'),
                          (t.next = 21);
                        break;
                      case 19:
                        r.setId(e.runCommand('get-uuidv4')),
                          r.setName(
                            'Default-'.concat(r.currentId.substr(0, 7))
                          );
                      case 21:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            )
          );
      };
    },
  ]);
});
//# sourceMappingURL=grapesjs-project-manager.min.js.map
