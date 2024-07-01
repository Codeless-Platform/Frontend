/*! grapesjs-script-editor - 1.0.3 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define([], e)
    : 'object' == typeof exports
    ? (exports['grapesjs-add-block'] = e())
    : (t['grapesjs-add-block'] = e());
})(window, function () {
  return (function (t) {
    var e = {};
    function r(n) {
      if (e[n]) return e[n].exports;
      var o = (e[n] = { i: n, l: !1, exports: {} });
      return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    return (
      (r.m = t),
      (r.c = e),
      (r.d = function (t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (r.r = function (t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (r.t = function (t, e) {
        if ((1 & e && (t = r(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
          2 & e && 'string' != typeof t)
        )
          for (var o in t)
            r.d(
              n,
              o,
              function (e) {
                return t[e];
              }.bind(null, o)
            );
        return n;
      }),
      (r.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return r.d(e, 'a', e), e;
      }),
      (r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (r.p = ''),
      r((r.s = 1))
    );
  })([
    function (t, e) {
      t.exports = function (t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      };
    },
    function (t, e, r) {
      'use strict';
      r.r(e);
      var n = r(0),
        o = r.n(n),
        i = 'add-block';
      function c(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(r), !0).forEach(function (e) {
                o()(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var s = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = t.Commands,
          n = t.Modal,
          o = t.Components,
          c = e.modalTitle,
          s = e.codeViewOptions,
          u = e.commandAttachScript,
          l = e.toolbarIcon,
          p = e.onRun,
          d = e.onError,
          f = e.starter,
          b = e.scriptTypesSupport,
          g = null,
          xy = null,
          h = function (t, e) {
            e instanceof HTMLElement
              ? t.appendChild(e)
              : e && t.insertAdjacentHTML('beforeend', e);
          };
        t.$.isString(b) && (b = b.split(',')),
          t.$.isArray(b) &&
            (b = b.includes('*')
              ? o.getTypes().map(function (t) {
                  return t.id;
                })
              : b),
          b &&
            b.forEach(function (t) {
              var r = o.getType(t).model;
              o.addType(t, {
                model: {
                  initToolbar: function () {
                    r.prototype.initToolbar.apply(this, arguments);
                    var t = this.get('toolbar'),
                      n = t.some(function (t) {
                        return t.command === i;
                      });
                    n ||
                      (t.unshift(
                        a({ command: i, label: l }, e.toolbarBtnCustomScript)
                      ),
                      this.set('toolbar', t));
                  },
                },
              });
            }),
          r.add(
            i,
            a(
              {
                run: function (t, e) {
                  var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  this.editor = t;
                  this.options = r;
                  this.target = r.target || t.getSelected();
                  var n = this.target;
                  var exists = t.Blocks.get(n.getId());
                  if (exists) {
                    t.Modal.open({
                      title: 'Error',
                      content: 'You already added this block',
                      attributes: { class: 'max-width-500' },
                    });
                  } else {
                    this.addBlock(n, t);
                  }
                },

                addBlock: function (t, e) {
                  var m = this;
                  g || (g = this.getContent());
                  n.open({
                    title: 'Add Custom Block',
                    content: g,
                    attributes: { class: 'max-width-500' },
                  })
                    .getModel()
                    .once('change:open', function () {
                      return m.addtoBlocks(e, t);
                    });
                },
                addtoBlocks(e, t) {
                  const newComp = t.clone();
                  e.Components.addType(`${t.getId()}`, {
                    model: {
                      defalut: {
                        components: [newComp],
                      },
                    },
                  });
                  setTimeout(() => {
                    e.Blocks.add(t.getId(), {
                      label:
                        document.getElementById('block-name-input').value ||
                        'Custom Block',
                      media: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <rect x="0" y="0" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1"/>\n  <rect x="2" y="2" width="8" height="4" fill="none" stroke="currentColor" stroke-width="1"/>\n  <rect x="2" y="8" width="6" height="6" fill="none" stroke="currentColor" stroke-width="1"/>\n  <rect x="10" y="8" width="12" height="4" fill="none" stroke="currentColor" stroke-width="1"/>\n  <rect x="10" y="2" width="12" height="4" fill="none" stroke="currentColor" stroke-width="1"/>\n  <rect x="2" y="16" width="8" height="6" fill="none" stroke="currentColor" stroke-width="1"/>\n  <rect x="12" y="14" width="10" height="8" fill="none" stroke="currentColor" stroke-width="1"/>\n</svg>`,
                      category: 'Custom',
                      content: { type: `${t.getId()}` },
                    });
                  }, 5000);
                  document.getElementById('block-name-input').value = '';
                },
                getContent: function () {
                  var e = this.editor,
                    t = document.createElement('div'),
                    n = document.createElement('div');
                  t.innerHTML = `<div class="modal" id="messageModal"><div class="fa fa-circle-exclamation"></div><div class="modal-content"><p id="messageText"></p><button id="okButton">OK</button></div></div>`;
                  var e = document.createElement('div');
                  e.id = 'Block-name';
                  var inputLabel = document.createElement('label');
                  inputLabel.classList.add('inl');
                  inputLabel.style.marginRight = '10px';
                  inputLabel.textContent = 'Block Name:';
                  var input = document.createElement('input');
                  input.id = 'block-name-input';
                  input.autocomplete = 'off';
                  inputLabel.htmlFor = input.id;
                  var y = document.createElement('div');
                  y.classList.add('gjs-field', 'gjs-field-text');
                  y.style.height = 'fit-content';
                  y.style.borderRadius = '10px';
                  y.appendChild(input);
                  var div = document.createElement('div');
                  div.style.display = 'flex';
                  div.style.height = '35px';
                  div.style.alignItems = 'center';
                  div.appendChild(inputLabel);
                  div.appendChild(y);
                  e.appendChild(div);
                  t.appendChild(e);

                  return (
                    setTimeout(function () {
                      return n.focus();
                    }, 0),
                    h(t, this.getContentActions()),
                    t
                  );
                },
                getContentActions: function () {
                  var t = this,
                    r = this.editor,
                    n = document.createElement('div');
                  n.id = 'actns';
                  var o = document.createElement('button'),
                    i = r.getConfig('stylePrefix');
                  (o.innerHTML = e.buttonLabel),
                    (o.className = ''
                      .concat(i, 'btn-prim ')
                      .concat(i, 'btn-save__inject-logic')),
                    (o.onclick = function () {
                      return t.handleSave();
                    });
                  return n.appendChild(o), n;
                },
                handleSave: function () {
                  let e = this.editor;
                  let input = document.getElementById('block-name-input').value;
                  if (!input) {
                    this.showErrorMessage('Block name is Empty');
                  } else {
                    e.Modal.close();
                  }
                },
                showErrorMessage: function (m) {
                  var messageModal = document.getElementById('messageModal');
                  var messageText = document.getElementById('messageText');
                  messageText.textContent = m;

                  messageModal.style.display = 'block';

                  var okButton = document.getElementById('okButton');
                  okButton.onclick = function () {
                    messageModal.classList.add('fadeOut');
                    setTimeout(function () {
                      messageModal.style.display = 'none';
                      messageModal.classList.remove('fadeOut');
                    }, 500);
                  };
                },
              },
              u
            )
          );
      };
      function u(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(r), !0).forEach(function (e) {
                o()(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      e.default = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = l(
            l(
              {},
              {
                starter: 'let el = this',
                toolbarIcon:
                  '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path fill="currentColor" d="M11,11V4h2v7h7v2h-7v7h-2v-7H4v-2h7z"/>\n</svg>',
                scriptTypesSupport: [
                  'default',
                  'wrapper',
                  'text',
                  'textnode',
                  'image',
                  'video',
                  'svg',
                ],
                toolbarBtnCustomScript: {},
                onRun: function () {
                  return console.log('valid syntax');
                },
                onError: function (t) {
                  return console.log('error', t);
                },
                modalTitle: 'Script',
                codeLabel: 'JS',
                codeViewOptions: {},
                buttonLabel: 'Save',
                commandAttachScript: {},
              }
            ),
            e
          );
        s(t, r);
      };
    },
  ]);
});
