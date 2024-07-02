/*! gjs-blocks-api */
!(function (n, a) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = a())
    : 'function' == typeof define && define.amd
    ? define([], a)
    : 'object' == typeof exports
    ? (exports['gjs-blocks-api'] = a())
    : (n['gjs-blocks-api'] = a());
})(
  'undefined' != typeof globalThis
    ? globalThis
    : 'undefined' != typeof window
    ? window
    : this,
  () =>
    (() => {
      'use strict';
      var n = {
          d: (a, e) => {
            for (var t in e)
              n.o(e, t) &&
                !n.o(a, t) &&
                Object.defineProperty(a, t, { enumerable: !0, get: e[t] });
          },
          o: (n, a) => Object.prototype.hasOwnProperty.call(n, a),
          r: (n) => {
            'undefined' != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
              Object.defineProperty(n, '__esModule', { value: !0 });
          },
        },
        a = {};
      n.r(a), n.d(a, { default: () => l });
      var e =
        (void 0 && (void 0).__assign) ||
        function () {
          return (
            (e =
              Object.assign ||
              function (n) {
                for (var a, e = 1, t = arguments.length; e < t; e++)
                  for (var l in (a = arguments[e]))
                    Object.prototype.hasOwnProperty.call(a, l) && (n[l] = a[l]);
                return n;
              }),
            e.apply(this, arguments)
          );
        };
      var t =
        (void 0 && (void 0).__assign) ||
        function () {
          return (
            (t =
              Object.assign ||
              function (n) {
                for (var a, e = 1, t = arguments.length; e < t; e++)
                  for (var l in (a = arguments[e]))
                    Object.prototype.hasOwnProperty.call(a, l) && (n[l] = a[l]);
                return n;
              }),
            t.apply(this, arguments)
          );
        };
      const l = function (n, a) {
        void 0 === a && (a = {}),
          (function (n, a) {
            var t = n.BlockManager,
              l = a.category,
              o = a.blocks,
              c = a.stylePrefix,
              i = a.flexGrid,
              d = a.rowHeight,
              r = a.addBasicStyle,
              s = ''.concat(c, 'row'),
              v = ''.concat(c, 'cell'),
              m = i
                ? '\n    .'
                    .concat(
                      s,
                      ' {\n      display: flex;\n      justify-content: flex-start;\n      align-items: stretch;\n      flex-wrap: nowrap;\n      padding: 10px;\n    }\n    @media (max-width: 768px) {\n      .'
                    )
                    .concat(s, ' {\n        flex-wrap: wrap;\n      }\n    }')
                : '\n    .'
                    .concat(
                      s,
                      ' {\n      display: table;\n      padding: 10px;\n      width: 100%;\n    }\n    @media (max-width: 768px) {\n      .'
                    )
                    .concat(c, 'cell, .')
                    .concat(c, 'cell30, .')
                    .concat(
                      c,
                      'cell70 {\n        width: 100%;\n        display: block;\n      }\n    }'
                    ),
              p = i
                ? '\n    .'
                    .concat(v, ' {\n      min-height: ')
                    .concat(
                      d,
                      'px;\n      flex-grow: 1;\n      flex-basis: 100%;\n    }'
                    )
                : '\n    .'
                    .concat(
                      v,
                      ' {\n      width: 8%;\n      display: table-cell;\n      height: '
                    )
                    .concat(d, 'px;\n    }'),
              u = '\n  .'.concat(c, 'cell30 {\n    width: 30%;\n  }'),
              b = '\n  .'.concat(c, 'cell70 {\n    width: 70%;\n  }'),
              g = 1,
              h = {
                tl: 0,
                tc: 0,
                tr: 0,
                cl: 0,
                cr: 0,
                bl: 0,
                br: 0,
                minDim: g,
              },
              f = e(e({}, h), {
                cr: 1,
                bc: 0,
                currentUnit: 1,
                minDim: g,
                step: 0.2,
              });
            i && (f.keyWidth = 'flex-basis');
            var y = {
                class: s,
                'data-gjs-droppable': '.'.concat(v),
                'data-gjs-resizable': h,
                'data-gjs-name': 'Row',
              },
              C = {
                class: v,
                'data-gjs-draggable': '.'.concat(s),
                'data-gjs-resizable': f,
                'data-gjs-name': 'Cell',
              };
            i &&
              ((C['data-gjs-unstylable'] = ['width']),
              (C['data-gjs-stylable-require'] = ['flex-basis']));
            var x = ['.'.concat(s), '.'.concat(v)];
            n.on('selector:add', function (n) {
              return x.indexOf(n.getFullName()) >= 0 && n.set('private', 1);
            });
            var V = function (n) {
                var a = [];
                for (var e in n) {
                  var t = n[e];
                  (t =
                    t instanceof Array || t instanceof Object
                      ? JSON.stringify(t)
                      : t),
                    a.push(''.concat(e, '=').concat("'".concat(t, "'")));
                }
                return a.length ? ' '.concat(a.join(' ')) : '';
              },
              w = function (n) {
                return o.indexOf(n) >= 0;
              },
              L = V(y),
              H = V(C),
              M = { category: l, select: !0 };
            w('apiText') &&
              t.add(
                'apiText',
                e(e({}, M), {
                  label: a.labelApiText,
                  media:
                    '<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />\n      </svg>',
                  content: {
                    type: 'APIText',
                    content: 'Insert your text here',
                    style: { padding: '10px' },
                  },
                })
              ),
              w('apiImage') &&
                t.add(
                  'apiImage',
                  e(e({}, M), {
                    activate: !0,
                    label: a.labelApiImage,
                    media:
                      '<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z" />\n      </svg>',
                    content: { style: { color: 'black' }, type: 'APIImage' },
                  })
                );
            // w('apiArray') &&
            //   t.add(
            //     'apiArray',
            //     e(e({}, M), {
            //       activate: !0,
            //       label: a.labelApiArray,
            //       media:
            //         '<svg viewBox="0 0 24 24" fill="currentColor">\n <path d="M4 10.5C3.17 10.5 2.5 11.17 2.5 12S3.17 13.5 4 13.5 5.5 12.83 5.5 12 4.83 10.5 4 10.5zm0 5C3.17 15.5 2.5 16.17 2.5 17S3.17 18.5 4 18.5 5.5 17.83 5.5 17 4.83 15.5 4 15.5zM4 5.5C3.17 5.5 2.5 6.17 2.5 7S3.17 8.5 4 8.5 5.5 7.83 5.5 7 4.83 5.5 4 5.5zm5 5h14v2H9v-2zm0 5h14v2H9v-2zm0-10h14v2H9V5.5z"/>\n</svg>',
            //       content: {
            //         style: {
            //           width: '100%',
            //           'min-height': '75px',
            //           display: 'flex',
            //           'flex-direction': 'column',
            //         },
            //         type: 'APIArray',
            //       },
            //     })
            //   );
          })(
            n,
            t(
              {
                blocks: ['apiText', 'apiImage', 'apiArray'],
                flexGrid: !1,
                stylePrefix: 'gjs-',
                addBasicStyle: !0,
                category: 'Dynamic Data',
                labelApiText: 'API Text',
                labelApiImage: 'API Image',
                labelApiArray: 'API Array',
                rowHeight: 75,
              },
              a
            )
          );
      };
      return a;
    })()
);
//# sourceMappingURL=index.js.map
