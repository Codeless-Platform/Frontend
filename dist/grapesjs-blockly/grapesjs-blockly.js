/*! grapesjs-blockly - 1.0.2 */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports['grapesjs-blockly'] = t())
    : (e['grapesjs-blockly'] = t());
})(window, function () {
  return (function (e) {
    var t = {};
    function n(a) {
      if (t[a]) return t[a].exports;
      var i = (t[a] = { i: a, l: !1, exports: {} });
      return e[a].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
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
        var a = Object.create(null);
        if (
          (n.r(a),
          Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var i in e)
            n.d(
              a,
              i,
              function (t) {
                return e[t];
              }.bind(null, i)
            );
        return a;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
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
      n((n.s = 5))
    );
  })([
    function (e, t) {
      e.exports = function (e, t, n) {
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
      };
    },
    function (e, t) {
      e.exports = function (e) {
        'use strict';
        return (
          (e.Blocks.bi_comment = {
            init: function () {
              this.appendDummyInput().appendField('comment'),
                this.setInputsInline(!0),
                this.setPreviousStatement(!0, null),
                this.setNextStatement(!0, null),
                this.setColour(90),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_assignment = {
            init: function () {
              this.appendValueInput('A').setCheck(null).appendField(''),
                this.appendValueInput('B')
                  .setCheck(null)
                  .appendField(new e.FieldTextInput('='), 'OP'),
                this.setInputsInline(!0),
                this.setPreviousStatement(!0, null),
                this.setNextStatement(!0, null),
                this.setColour(330),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_assignment_return = {
            init: function () {
              this.appendValueInput('A').setCheck(null).appendField(''),
                this.appendValueInput('B')
                  .setCheck(null)
                  .appendField(new e.FieldTextInput('='), 'OP'),
                this.setInputsInline(!0),
                this.setOutput(!0),
                this.setColour(330),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_math_arithmetic = {
            init: function () {
              var t = [
                [e.Msg.MATH_ADDITION_SYMBOL, 'ADD'],
                [e.Msg.MATH_SUBTRACTION_SYMBOL, 'MINUS'],
                [e.Msg.MATH_MULTIPLICATION_SYMBOL, 'MULTIPLY'],
                [e.Msg.MATH_DIVISION_SYMBOL, 'DIVIDE'],
                [e.Msg.MATH_POWER_SYMBOL, 'POWER'],
              ];
              this.setHelpUrl(e.Msg.MATH_ARITHMETIC_HELPURL),
                this.setColour(270),
                this.setOutput(!0, 'Number'),
                this.appendValueInput('A').setCheck(null),
                this.appendValueInput('B')
                  .setCheck(null)
                  .appendField(new e.FieldDropdown(t), 'OP'),
                this.setInputsInline(!0);
              var n = this;
              this.setTooltip(function () {
                var t = n.getFieldValue('OP');
                return {
                  ADD: e.Msg.MATH_ARITHMETIC_TOOLTIP_ADD,
                  MINUS: e.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS,
                  MULTIPLY: e.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
                  DIVIDE: e.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE,
                  POWER: e.Msg.MATH_ARITHMETIC_TOOLTIP_POWER,
                }[t];
              });
            },
          }),
          (e.Blocks.bi_logic_compare = {
            init: function () {
              var t = this.RTL
                ? [
                    ['=', 'EQ'],
                    ['≠', 'NEQ'],
                    ['>', 'LT'],
                    ['≥', 'LTE'],
                    ['<', 'GT'],
                    ['≤', 'GTE'],
                  ]
                : [
                    ['=', 'EQ'],
                    ['≠', 'NEQ'],
                    ['<', 'LT'],
                    ['≤', 'LTE'],
                    ['>', 'GT'],
                    ['≥', 'GTE'],
                  ];
              this.setHelpUrl(e.Msg.LOGIC_COMPARE_HELPURL),
                this.setColour(190),
                this.setOutput(!0, 'Boolean'),
                this.appendValueInput('A'),
                this.appendValueInput('B').appendField(
                  new e.FieldDropdown(t),
                  'OP'
                ),
                this.setInputsInline(!0);
              var n = this;
              this.setTooltip(function () {
                var t = n.getFieldValue('OP');
                return {
                  EQ: e.Msg.LOGIC_COMPARE_TOOLTIP_EQ,
                  NEQ: e.Msg.LOGIC_COMPARE_TOOLTIP_NEQ,
                  LT: e.Msg.LOGIC_COMPARE_TOOLTIP_LT,
                  LTE: e.Msg.LOGIC_COMPARE_TOOLTIP_LTE,
                  GT: e.Msg.LOGIC_COMPARE_TOOLTIP_GT,
                  GTE: e.Msg.LOGIC_COMPARE_TOOLTIP_GTE,
                }[t];
              }),
                (this.prevBlocks_ = [null, null]);
            },
          }),
          (e.Blocks.bi_logic_operation = {
            init: function () {
              var t = [
                [e.Msg.LOGIC_OPERATION_AND, 'AND'],
                [e.Msg.LOGIC_OPERATION_OR, 'OR'],
              ];
              this.setHelpUrl(e.Msg.LOGIC_OPERATION_HELPURL),
                this.setColour(190),
                this.setOutput(!0, 'Boolean'),
                this.appendValueInput('A'),
                this.appendValueInput('B').appendField(
                  new e.FieldDropdown(t),
                  'OP'
                ),
                this.setInputsInline(!0);
              var n = this;
              this.setTooltip(function () {
                var t = n.getFieldValue('OP');
                return {
                  AND: e.Msg.LOGIC_OPERATION_TOOLTIP_AND,
                  OR: e.Msg.LOGIC_OPERATION_TOOLTIP_OR,
                }[t];
              });
            },
          }),
          (e.Blocks.bi_try_catch = {
            init: function () {
              this.appendStatementInput('try')
                .setCheck(null)
                .appendField('try'),
                this.appendStatementInput('catch')
                  .setCheck(null)
                  .appendField('catch')
                  .appendField(new e.FieldTextInput(''), 'parameter'),
                this.appendStatementInput('finally')
                  .setCheck(null)
                  .appendField('finally'),
                this.setPreviousStatement(!0, null),
                this.setNextStatement(!0, null),
                this.setColour(90),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_catch = {
            init: function () {
              this.appendStatementInput('catch')
                .setCheck(null)
                .appendField('catch')
                .appendField(new e.FieldTextInput(''), 'parameter'),
                this.setPreviousStatement(!0, null),
                this.setNextStatement(!0, null),
                this.setColour(90),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_throw = {
            init: function () {
              this.appendValueInput('throw')
                .setCheck(null)
                .appendField('throw'),
                this.setPreviousStatement(!0, null),
                this.setNextStatement(!0, null),
                this.setColour(120),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_yield = {
            init: function () {
              this.appendValueInput('yield')
                .setCheck(null)
                .appendField('yield')
                .appendField(new e.FieldCheckbox('FALSE'), 'delegate'),
                this.setPreviousStatement(!0, null),
                this.setNextStatement(!0, null),
                this.setColour(120),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_yield_return = {
            init: function () {
              this.appendValueInput('yield')
                .setCheck(null)
                .appendField('yield')
                .appendField(new e.FieldCheckbox('FALSE'), 'delegate'),
                this.setOutput(!0),
                this.setColour(120),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_code_part = {
            init: function () {
              this.appendDummyInput()
                .appendField('Code part')
                .appendField(new e.FieldTextInput(''), 'code'),
                this.setOutput(!0, null),
                this.setColour(330),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_code_line = {
            init: function () {
              this.appendDummyInput()
                .appendField('Code line')
                .appendField(new e.FieldTextInput(''), 'code'),
                this.setPreviousStatement(!0, null),
                this.setNextStatement(!0, null),
                this.setColour(330),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_access_field = {
            init: function () {
              this.appendDummyInput()
                .appendField('set')
                .appendField(new e.FieldVariable('item'), 'variable'),
                this.appendDummyInput()
                  .appendField('.')
                  .appendField(new e.FieldTextInput(''), 'field'),
                this.appendValueInput('input').appendField('to'),
                this.setPreviousStatement(!0, null),
                this.setNextStatement(!0, null),
                this.setInputsInline(!0),
                this.setColour(330),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_set_to = {
            init: function () {
              this.appendDummyInput()
                .appendField('set')
                .appendField(new e.FieldTextInput(''), 'code'),
                this.appendValueInput('input').appendField('to'),
                this.setPreviousStatement(!0, null),
                this.setNextStatement(!0, null),
                this.setInputsInline(!0),
                this.setColour(330),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_for = {
            init: function () {
              this.appendStatementInput('init').appendField('for init'),
                this.appendValueInput('test').appendField('test'),
                this.appendStatementInput('update').appendField('update'),
                this.appendStatementInput('chain')
                  .appendField('loop')
                  .setCheck(null),
                this.setPreviousStatement(!0, null),
                this.setNextStatement(!0, null),
                this.setColour(120),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_for_in = {
            init: function () {
              this.appendValueInput('array')
                .appendField('for')
                .appendField(new e.FieldTextInput('i'), 'var')
                .appendField('in'),
                this.appendStatementInput('chain').setCheck(null),
                this.setPreviousStatement(!0, null),
                this.setNextStatement(!0, null),
                this.setColour(120),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_continue = {
            init: function () {
              this.appendDummyInput().appendField('continue'),
                this.setHelpUrl('http://www.example.com/'),
                this.setColour(120),
                this.setPreviousStatement(!0, null),
                this.setNextStatement(!0, null),
                this.setTooltip('');
            },
          }),
          (e.Blocks.bi_break = {
            init: function () {
              this.appendDummyInput().appendField('break'),
                this.setHelpUrl('http://www.example.com/'),
                this.setColour(120),
                this.setPreviousStatement(!0, null),
                this.setNextStatement(!0, null),
                this.setTooltip('');
            },
          }),
          (e.Blocks.bi_s1 = {
            init: function () {
              this.setHelpUrl('http://www.example.com/'),
                this.setColour(290),
                this.appendAddSubStatement('for init', 'items', null, ''),
                this.appendValueInput('test')
                  .appendField('test')
                  .setCheck(null),
                (this.itemCount_ = 1),
                this.setInputsInline(!1),
                this.setPreviousStatement(!0, null),
                this.setNextStatement(!0, null),
                this.setTooltip('');
            },
          }),
          (e.Blocks.bi_return = {
            init: function () {
              this.appendValueInput('ret').setCheck(null).appendField('return'),
                this.setPreviousStatement(!0, null),
                this.setNextStatement(!0, null),
                this.setColour(290),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_var = {
            init: function () {
              this.appendValueInput('val')
                .setCheck(null)
                .appendField(
                  new e.FieldDropdown([
                    ['var', 'var'],
                    ['let', 'let'],
                    ['const', 'const'],
                  ]),
                  'var_type'
                )
                .appendField(new e.FieldTextInput('var1'), 'var'),
                this.setPreviousStatement(!0, null),
                this.setNextStatement(!0, null),
                this.setColour(330),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_var_name = {
            init: function () {
              this.appendDummyInput()
                .appendField('')
                .appendField(new e.FieldTextInput('var1'), 'NAME'),
                this.setOutput(!0, null),
                this.setColour(330),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_new = {
            init: function () {
              this.appendValueInput('chain').appendField('new').setCheck(null),
                this.setOutput(!0, null),
                this.setColour(55),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_anonymous_class = {
            init: function () {
              this.appendDummyInput()
                .appendField('class')
                .appendField(new e.FieldTextInput(''), 'NAME'),
                this.appendDummyInput()
                  .appendField('extends')
                  .appendField(new e.FieldTextInput(''), 'extends'),
                this.appendStatementInput('chain').setCheck(null),
                this.setHelpUrl('http://www.example.com/'),
                this.setColour(55),
                this.setOutput(!0, null),
                this.setTooltip('');
            },
          }),
          (e.Blocks.bi_class = {
            init: function () {
              this.appendDummyInput()
                .appendField('class')
                .appendField(new e.FieldTextInput('Name'), 'NAME'),
                this.appendDummyInput()
                  .appendField('extends')
                  .appendField(new e.FieldTextInput(''), 'extends'),
                this.appendStatementInput('chain').setCheck(null),
                this.setHelpUrl('http://www.example.com/'),
                this.setColour(55),
                this.setPreviousStatement(!0, null),
                this.setNextStatement(!0, null),
                this.setTooltip('');
            },
          }),
          (e.Blocks.bi_static = {
            init: function () {
              this.appendStatementInput('static')
                .setCheck(null)
                .appendField('static'),
                this.setPreviousStatement(!0, null),
                this.setNextStatement(!0, null),
                this.setColour(55),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_get = {
            init: function () {
              this.appendStatementInput('get')
                .setCheck(null)
                .appendField('get'),
                this.setPreviousStatement(!0, null),
                this.setNextStatement(!0, null),
                this.setColour(55),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_set = {
            init: function () {
              this.appendStatementInput('set')
                .setCheck(null)
                .appendField('set'),
                this.setPreviousStatement(!0, null),
                this.setNextStatement(!0, null),
                this.setColour(55),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_field = {
            init: function () {
              this.appendValueInput('chain')
                .appendField(new e.FieldTextInput('field1'), 'NAME')
                .setCheck(null),
                this.setPreviousStatement(!0, null),
                this.setNextStatement(!0, null),
                this.setColour(330),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_field_return = {
            init: function () {
              this.appendValueInput('chain')
                .appendField('')
                .appendField(new e.FieldTextInput('field1'), 'NAME')
                .setCheck(null),
                this.setOutput(!0, null),
                this.setColour(330),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_string_return = {
            init: function () {
              this.appendValueInput('chain')
                .appendField('"')
                .appendField(new e.FieldTextInput(''), 'NAME')
                .appendField('"')
                .setCheck(null),
                this.setOutput(!0, null),
                this.setColour(160),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_index = {
            init: function () {
              this.appendValueInput('index').appendField('[').setCheck(null),
                this.appendValueInput('chain').appendField(']').setCheck(null),
                this.setInputsInline(!0),
                this.setOutput(!0, null),
                this.setColour(260),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_adaptor = {
            init: function () {
              this.appendDummyInput().appendField(''),
                this.appendStatementInput('chain').setCheck(null),
                this.setOutput(!0, null),
                this.setColour(55),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_statement = {
            init: function () {
              this.appendDummyInput().appendField(''),
                this.appendStatementInput('chain').setCheck(null),
                this.setPreviousStatement(!0, null),
                this.setNextStatement(!0, null),
                this.setColour(290),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_unary = {
            init: function () {
              this.appendValueInput('expression')
                .setCheck(null)
                .appendField(new e.FieldTextInput('++'), 'operator'),
                this.setPreviousStatement(!0, null),
                this.setNextStatement(!0, null),
                this.setColour(230),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_unary_return = {
            init: function () {
              this.appendValueInput('expression')
                .setCheck(null)
                .appendField(new e.FieldTextInput('++'), 'operator'),
                this.setOutput(!0, null),
                this.setColour(230),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_unary_postfix = {
            init: function () {
              this.appendValueInput('expression')
                .appendField('postfix')
                .setCheck(null)
                .appendField(new e.FieldTextInput('++'), 'operator'),
                this.setPreviousStatement(!0, null),
                this.setNextStatement(!0, null),
                this.setColour(230),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_unary_postfix_return = {
            init: function () {
              this.appendValueInput('expression')
                .appendField('postfix')
                .setCheck(null)
                .appendField(new e.FieldTextInput('++'), 'operator'),
                this.setOutput(!0, null),
                this.setColour(230),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_spread = {
            init: function () {
              this.appendValueInput('arg_array')
                .setCheck(null)
                .appendField('...'),
                this.setOutput(!0, null),
                this.setColour(290),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          (e.Blocks.bi_parenthesis = {
            init: function () {
              this.appendValueInput('expression')
                .setCheck(null)
                .appendField('(_)'),
                this.setOutput(!0, null),
                this.setColour(230),
                this.setTooltip(''),
                this.setHelpUrl('http://www.example.com/');
            },
          }),
          e.Blocks
        );
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return (
          (e.JavaScript.forBlock['bi_comment'] = function (e) {
            return '';
          }),
          (e.JavaScript.forBlock['bi_assignment'] = function (t) {
            var n = e.JavaScript.valueToCode(t, 'A', e.JavaScript.ORDER_ATOMIC),
              a = e.JavaScript.valueToCode(t, 'B', e.JavaScript.ORDER_ATOMIC);
            return n + ' ' + t.getFieldValue('OP') + ' ' + a + '\n';
          }),
          (e.JavaScript.forBlock['bi_assignment_return'] = function (t) {
            var n = e.JavaScript.valueToCode(t, 'A', e.JavaScript.ORDER_ATOMIC),
              a = e.JavaScript.valueToCode(t, 'B', e.JavaScript.ORDER_ATOMIC);
            return [
              n + ' ' + t.getFieldValue('OP') + ' ' + a,
              e.JavaScript.ORDER_ATOMIC,
            ];
          }),
          (e.JavaScript.forBlock['bi_math_arithmetic'] = function (t) {
            var n = {
                ADD: [' + ', e.JavaScript.ORDER_ADDITION],
                MINUS: [' - ', e.JavaScript.ORDER_SUBTRACTION],
                MULTIPLY: [' * ', e.JavaScript.ORDER_MULTIPLICATION],
                DIVIDE: [' / ', e.JavaScript.ORDER_DIVISION],
                POWER: [null, e.JavaScript.ORDER_COMMA],
              }[t.getFieldValue('OP')],
              a = ' ',
              i = e.JavaScript.ORDER_ATOMIC;
            n && ((a = n[0]), (i = n[1]));
            var l = e.JavaScript.valueToCode(t, 'A', i) || '0',
              o = e.JavaScript.valueToCode(t, 'B', i) || '0';
            return a
              ? [l + a + o, i]
              : [
                  'Math.pow(' + l + ', ' + o + ')',
                  e.JavaScript.ORDER_FUNCTION_CALL,
                ];
          }),
          (e.JavaScript.forBlock['bi_logic_compare'] = function (t) {
            var n = {
                EQ: '==',
                NEQ: '!=',
                LT: '<',
                LTE: '<=',
                GT: '>',
                GTE: '>=',
              }[t.getFieldValue('OP')],
              a =
                '==' === n || '!=' === n
                  ? e.JavaScript.ORDER_EQUALITY
                  : e.JavaScript.ORDER_RELATIONAL;
            return [
              (e.JavaScript.valueToCode(t, 'A', a) || '0') +
                ' ' +
                n +
                ' ' +
                (e.JavaScript.valueToCode(t, 'B', a) || '0'),
              a,
            ];
          }),
          (e.JavaScript.forBlock['bi_logic_operation'] = function (t) {
            var n = 'AND' === t.getFieldValue('OP') ? '&&' : '||',
              a =
                '&&' === n
                  ? e.JavaScript.ORDER_LOGICAL_AND
                  : e.JavaScript.ORDER_LOGICAL_OR,
              i = e.JavaScript.valueToCode(t, 'A', a),
              l = e.JavaScript.valueToCode(t, 'B', a);
            if (i || l) {
              var o = '&&' === n ? 'true' : 'false';
              i || (i = o), l || (l = o);
            } else (i = 'false'), (l = 'false');
            return [i + ' ' + n + ' ' + l, a];
          }),
          (e.JavaScript.forBlock['bi_try_catch'] = function (t) {
            var n = e.JavaScript.statementToCode(t, 'try'),
              a = e.JavaScript.statementToCode(t, 'catch'),
              i = e.JavaScript.statementToCode(t, 'finally');
            return (
              'try{\n' +
              n +
              '\n} catch(' +
              t.getFieldValue('parameter') +
              '){\n' +
              a +
              '\n} finally{\n' +
              i +
              '}\n'
            );
          }),
          (e.JavaScript.forBlock['bi_catch'] = function (t) {
            var n = e.JavaScript.statementToCode(t, 'catch');
            return 'catch(' + t.getFieldValue('parameter') + '){\n' + n + '}\n';
          }),
          (e.JavaScript.forBlock['bi_throw'] = function (t) {
            return (
              'throw ' +
              e.JavaScript.valueToCode(t, 'throw', e.JavaScript.ORDER_ATOMIC) +
              '\n'
            );
          }),
          (e.JavaScript.forBlock['bi_yield'] = function (t) {
            var n = e.JavaScript.valueToCode(
                t,
                'yield',
                e.JavaScript.ORDER_ATOMIC
              ),
              a = '';
            return (
              (a =
                'TRUE' === t.getFieldValue('delegate') ? 'yield* ' : 'yield '),
              (a += n + '\n')
            );
          }),
          (e.JavaScript.forBlock['bi_yield_return'] = function (t) {
            var n = e.JavaScript.valueToCode(
                t,
                'yield',
                e.JavaScript.ORDER_ATOMIC
              ),
              a = '';
            return (
              (a =
                'TRUE' === t.getFieldValue('delegate') ? 'yield* ' : 'yield '),
              [(a += n), e.JavaScript.ORDER_ATOMIC]
            );
          }),
          (e.JavaScript.forBlock['bi_export'] = function (t) {
            return 'export ' + e.JavaScript.statementToCode(t, 'export');
          }),
          (e.JavaScript.forBlock['bi_import'] = function (t) {
            for (
              var n = new Array(t.itemCount_ - 1), a = 1;
              a < t.itemCount_;
              a++
            )
              n[a - 1] =
                e.JavaScript.valueToCode(
                  t,
                  'items' + a,
                  e.JavaScript.ORDER_COMMA
                ) || 'null';
            var i = e.JavaScript.valueToCode(
                t,
                'from',
                e.JavaScript.ORDER_ATOMIC
              ),
              l = 'import ';
            return (
              2 === t.itemCount_ ? (l += n[0]) : (l += '{' + n.join(',') + '}'),
              (l += ' from ' + i + '\n')
            );
          }),
          (e.JavaScript.forBlock['bi_import_as'] = function (t) {
            return [
              t.getFieldValue('input') + ' as ' + t.getFieldValue('as'),
              e.JavaScript.ORDER_ATOMIC,
            ];
          }),
          (e.JavaScript.forBlock['bi_code_part'] = function (t) {
            return [t.getFieldValue('code'), e.JavaScript.ORDER_ATOMIC];
          }),
          (e.JavaScript.forBlock['bi_code_line'] = function (e) {
            return e.getFieldValue('code') + '\n';
          }),
          (e.JavaScript.forBlock['bi_access_field'] = function (t) {
            return (
              e.JavaScript.variableDB_.getName(
                t.getFieldValue('variable'),
                e.Variables.NAME_TYPE
              ) +
              '.' +
              t.getFieldValue('field') +
              ' = ' +
              e.JavaScript.valueToCode(t, 'input', e.JavaScript.ORDER_ATOMIC) +
              '\n'
            );
          }),
          (e.JavaScript.forBlock['bi_set_to'] = function (t) {
            return (
              t.getFieldValue('code') +
              ' = ' +
              e.JavaScript.valueToCode(t, 'input', e.JavaScript.ORDER_ATOMIC) +
              '\n'
            );
          }),
          (e.JavaScript.forBlock['bi_for'] = function (t) {
            e.Generator.prototype.STATEMENT_PREFIX = ', ';
            var n = e.JavaScript.statementToCode(t, 'init');
            e.Generator.prototype.STATEMENT_PREFIX = null;
            var a = e.JavaScript.valueToCode(
              t,
              'test',
              e.JavaScript.ORDER_ATOMIC
            );
            e.Generator.prototype.STATEMENT_PREFIX = ', ';
            var i = e.JavaScript.statementToCode(t, 'update');
            e.Generator.prototype.STATEMENT_PREFIX = null;
            var l = e.JavaScript.statementToCode(t, 'chain');
            return (
              'for( ' +
              (n = n
                .replace(', ', '')
                .replace(/\n {2}/g, '')
                .trim()) +
              '; ' +
              a +
              '; ' +
              (i = i
                .replace(', ', '')
                .replace(/\n {2}/g, '')
                .trim()) +
              ' ){\n' +
              l +
              '}\n'
            );
          }),
          (e.JavaScript.forBlock['bi_for_in'] = function (t) {
            return (
              'for(let ' +
              t.getFieldValue('var') +
              ' in ' +
              e.JavaScript.valueToCode(t, 'array', e.JavaScript.ORDER_ATOMIC) +
              '){\n' +
              e.JavaScript.statementToCode(t, 'chain') +
              '}\n'
            );
          }),
          (e.JavaScript.forBlock['bi_switch'] = function (t) {
            for (
              var n = e.JavaScript.valueToCode(
                  t,
                  'switch',
                  e.JavaScript.ORDER_ATOMIC
                ),
                a = e.JavaScript.statementToCode(t, 'default'),
                i = new Array(t.itemCount_ - 1),
                l = 1;
              l < t.itemCount_;
              l++
            )
              i[l - 1] =
                e.JavaScript.valueToCode(
                  t,
                  'items' + l,
                  e.JavaScript.ORDER_COMMA
                ) || 'null';
            return (
              'switch(' + n + '){\n' + i.join('\n') + '\ndefault: ' + a + '}\n'
            );
          }),
          (e.JavaScript.forBlock['bi_case'] = function (t) {
            return [
              'case ' +
                e.JavaScript.valueToCode(t, 'case', e.JavaScript.ORDER_ATOMIC) +
                ':' +
                e.JavaScript.statementToCode(t, 'statement'),
              e.JavaScript.ORDER_ATOMIC,
            ];
          }),
          (e.JavaScript.forBlock['bi_continue'] = function (e) {
            return '\ncontinue\n';
          }),
          (e.JavaScript.forBlock['bi_break'] = function (e) {
            return '\nbreak\n';
          }),
          (e.JavaScript.forBlock['bi_s1'] = function (t) {
            for (
              var n = e.JavaScript.valueToCode(
                  t,
                  'chain',
                  e.JavaScript.ORDER_ATOMIC
                ),
                a = new Array(t.itemCount_),
                i = 0;
              i < t.itemCount_;
              i++
            )
              a[i] = e.JavaScript.statementToCode(t, 'items' + i) || '';
            var l = '';
            return (
              '' !== n && (l = '\n  .' + n.trim()),
              'for(' + a.join(', ') + '){' + l + '}\n'
            );
          }),
          (e.JavaScript.forBlock['bi_call_statement'] = function (t) {
            for (
              var n = t.getFieldValue('NAME'),
                a = e.JavaScript.valueToCode(
                  t,
                  'chain',
                  e.JavaScript.ORDER_ATOMIC
                ),
                i = new Array(t.itemCount_ - 1),
                l = 1;
              l < t.itemCount_;
              l++
            )
              i[l - 1] =
                e.JavaScript.valueToCode(
                  t,
                  'items' + l,
                  e.JavaScript.ORDER_COMMA
                ) || 'null';
            var o = '';
            return (
              '' !== a && (o = '.' + a.trim()),
              n + '(' + i.join(', ') + ')' + o + '\n'
            );
          }),
          (e.JavaScript.forBlock['bi_call'] = function (t) {
            for (
              var n = t.getFieldValue('NAME'),
                a = e.JavaScript.valueToCode(
                  t,
                  'chain',
                  e.JavaScript.ORDER_ATOMIC
                ),
                i = new Array(t.itemCount_ - 1),
                l = 1;
              l < t.itemCount_;
              l++
            )
              i[l - 1] =
                e.JavaScript.valueToCode(
                  t,
                  'items' + l,
                  e.JavaScript.ORDER_COMMA
                ) || 'null';
            var o = '';
            return (
              '' !== a && (o = '.' + a.trim()),
              [n + '(' + i.join(', ') + ')' + o, e.JavaScript.ORDER_ATOMIC]
            );
          }),
          (e.JavaScript.forBlock['bi_direct_call_editable'] = function (t) {
            for (
              var n = e.JavaScript.valueToCode(
                  t,
                  'function',
                  e.JavaScript.ORDER_ATOMIC
                ),
                a = e.JavaScript.valueToCode(
                  t,
                  'chain',
                  e.JavaScript.ORDER_ATOMIC
                ),
                i = new Array(t.itemCount_ - 1),
                l = 1;
              l < t.itemCount_;
              l++
            )
              i[l - 1] =
                e.JavaScript.valueToCode(
                  t,
                  'items' + l,
                  e.JavaScript.ORDER_COMMA
                ) || 'null';
            var o = '';
            return (
              '' !== a && (o = '\n  .' + a.trim()),
              '(' + n + ')(' + i.join(', ') + ')' + o + '\n'
            );
          }),
          (e.JavaScript.forBlock['bi_direct_call_editable_return'] = function (
            t
          ) {
            for (
              var n = e.JavaScript.valueToCode(
                  t,
                  'function',
                  e.JavaScript.ORDER_ATOMIC
                ),
                a = e.JavaScript.valueToCode(
                  t,
                  'chain',
                  e.JavaScript.ORDER_ATOMIC
                ),
                i = new Array(t.itemCount_ - 1),
                l = 1;
              l < t.itemCount_;
              l++
            )
              i[l - 1] =
                e.JavaScript.valueToCode(
                  t,
                  'items' + l,
                  e.JavaScript.ORDER_COMMA
                ) || 'null';
            var o = '';
            return (
              '' !== a && (o = '\n  .' + a.trim()),
              [
                '(' + n + ')(' + i.join(', ') + ')' + o,
                e.JavaScript.ORDER_ATOMIC,
              ]
            );
          }),
          (e.JavaScript.forBlock['bi_call_editable'] = function (t) {
            for (
              var n = t.getFieldValue('NAME'),
                a = e.JavaScript.valueToCode(
                  t,
                  'chain',
                  e.JavaScript.ORDER_ATOMIC
                ),
                i = new Array(t.itemCount_ - 1),
                l = 1;
              l < t.itemCount_;
              l++
            )
              i[l - 1] =
                e.JavaScript.valueToCode(
                  t,
                  'items' + l,
                  e.JavaScript.ORDER_COMMA
                ) || 'null';
            var o = '';
            return (
              '' !== a && (o = '\n  .' + a.trim()),
              n + '(' + i.join(', ') + ')' + o + '\n'
            );
          }),
          (e.JavaScript.forBlock['bi_call_editable_return'] = function (t) {
            for (
              var n = t.getFieldValue('NAME'),
                a = e.JavaScript.valueToCode(
                  t,
                  'chain',
                  e.JavaScript.ORDER_ATOMIC
                ),
                i = new Array(t.itemCount_ - 1),
                l = 1;
              l < t.itemCount_;
              l++
            )
              i[l - 1] =
                e.JavaScript.valueToCode(
                  t,
                  'items' + l,
                  e.JavaScript.ORDER_COMMA
                ) || 'null';
            var o = '';
            return (
              '' !== a && (o = '\n  .' + a.trim()),
              [n + '(' + i.join(', ') + ')' + o, e.JavaScript.ORDER_ATOMIC]
            );
          }),
          (e.JavaScript.forBlock['bi_function_return'] = function (t) {
            var n =
              t.getFieldValue('function_type') + t.getFieldValue('name') + '(';
            return [
              (n +=
                t.getFieldValue('args') +
                '){\n' +
                e.JavaScript.statementToCode(t, 'chain') +
                '}\n'),
              e.JavaScript.ORDER_ATOMIC,
            ];
          }),
          (e.JavaScript.forBlock['bi_function'] = function (t) {
            var n = t.getFieldValue('name'),
              a = t.getFieldValue('function_type') + n + '(';
            return (a +=
              t.getFieldValue('args') +
              '){\n' +
              e.JavaScript.statementToCode(t, 'chain') +
              '}\n');
          }),
          (e.JavaScript.forBlock['bi_return'] = function (t) {
            return (
              'return ' +
              e.JavaScript.valueToCode(t, 'ret', e.JavaScript.ORDER_ATOMIC) +
              '\n'
            );
          }),
          (e.JavaScript.forBlock['bi_maps_set'] = function (t) {
            var n = 'set ' + t.getFieldValue('name') + '(';
            return [
              (n +=
                t.getFieldValue('val') +
                '){\n' +
                e.JavaScript.statementToCode(t, 'chain') +
                '}\n'),
              e.JavaScript.ORDER_ATOMIC,
            ];
          }),
          (e.JavaScript.forBlock['bi_maps_get'] = function (t) {
            var n = 'get ' + t.getFieldValue('name') + '(';
            return [
              (n += '){\n' + e.JavaScript.statementToCode(t, 'chain') + '}\n'),
              e.JavaScript.ORDER_ATOMIC,
            ];
          }),
          (e.JavaScript.forBlock['bi_var'] = function (t) {
            var n = t.getFieldValue('var_type'),
              a = t.getFieldValue('var'),
              i = e.JavaScript.valueToCode(t, 'val', e.JavaScript.ORDER_ATOMIC),
              l = n + ' ' + a;
            return (l += '' === i ? '\n' : ' = ' + i + '\n');
          }),
          (e.JavaScript.forBlock['bi_var_name'] = function (t) {
            return [t.getFieldValue('NAME') + ';\n', e.JavaScript.ORDER_ATOMIC];
          }),
          (e.JavaScript.forBlock['bi_new'] = function (t) {
            return [
              'new ' +
                e.JavaScript.valueToCode(
                  t,
                  'chain',
                  e.JavaScript.ORDER_ATOMIC
                ).trim(),
              e.JavaScript.ORDER_ATOMIC,
            ];
          }),
          (e.JavaScript.forBlock['bi_anonymous_class'] = function (t) {
            var n = t.getFieldValue('NAME'),
              a = t.getFieldValue('extends'),
              i = 'class ' + n;
            return (
              '' !== a && (i += ' extends ' + a),
              [
                (i += '{\n' + e.JavaScript.statementToCode(t, 'chain') + '}'),
                e.JavaScript.ORDER_ATOMIC,
              ]
            );
          }),
          (e.JavaScript.forBlock['bi_class'] = function (t) {
            var n = t.getFieldValue('NAME'),
              a = t.getFieldValue('extends'),
              i = 'class ' + n;
            return (
              '' !== a && (i += ' extends ' + a),
              (i += '{\n' + e.JavaScript.statementToCode(t, 'chain') + '}\n')
            );
          }),
          (e.JavaScript.forBlock['bi_static'] = function (t) {
            return 'static ' + e.JavaScript.statementToCode(t, 'static');
          }),
          (e.JavaScript.forBlock['bi_get'] = function (t) {
            return 'get ' + e.JavaScript.statementToCode(t, 'get');
          }),
          (e.JavaScript.forBlock['bi_set'] = function (t) {
            return 'set ' + e.JavaScript.statementToCode(t, 'set');
          }),
          (e.JavaScript.forBlock['bi_field'] = function (t) {
            var n = e.JavaScript.valueToCode(
                t,
                'chain',
                e.JavaScript.ORDER_ATOMIC
              ),
              a = t.getFieldValue('NAME'),
              i = '';
            return (
              '' !== n && (i = '[' === n[0] ? n.trim() : '.' + n.trim()),
              a + i + '\n'
            );
          }),
          (e.JavaScript.forBlock['bi_field_return'] = function (t) {
            var n = e.JavaScript.valueToCode(
                t,
                'chain',
                e.JavaScript.ORDER_ATOMIC
              ),
              a = t.getFieldValue('NAME'),
              i = '';
            return (
              '' !== n && (i = '[' === n[0] ? n.trim() : '.' + n.trim()),
              [a + i, e.JavaScript.ORDER_ATOMIC]
            );
          }),
          (e.JavaScript.forBlock['bi_string_return'] = function (t) {
            var n = e.JavaScript.valueToCode(
                t,
                'chain',
                e.JavaScript.ORDER_ATOMIC
              ),
              a = t.getFieldValue('NAME'),
              i = '';
            return (
              '' !== n && (i = '[' === n[0] ? n.trim() : '.' + n.trim()),
              ['"' + a + '"' + i, e.JavaScript.ORDER_ATOMIC]
            );
          }),
          (e.JavaScript.forBlock['bi_index'] = function (t) {
            var n = e.JavaScript.valueToCode(
                t,
                'chain',
                e.JavaScript.ORDER_ATOMIC
              ),
              a = e.JavaScript.valueToCode(
                t,
                'index',
                e.JavaScript.ORDER_ATOMIC
              ),
              i = '';
            return (
              '' !== n && (i = '.' + n.trim()),
              ['[' + a + ']' + i, e.JavaScript.ORDER_ATOMIC]
            );
          }),
          (e.JavaScript.forBlock['bi_adaptor'] = function (t) {
            return [
              e.JavaScript.statementToCode(t, 'chain').trim(),
              e.JavaScript.ORDER_ATOMIC,
            ];
          }),
          (e.JavaScript.forBlock['bi_statement'] = function (t) {
            return [
              e.JavaScript.statementToCode(t, 'chain').trim(),
              e.JavaScript.ORDER_ATOMIC,
            ];
          }),
          (e.JavaScript.forBlock['bi_unary'] = function (t) {
            var n,
              a = e.JavaScript.valueToCode(
                t,
                'expression',
                e.JavaScript.ORDER_ATOMIC
              ),
              i = t.getFieldValue('operator');
            return (
              (n = i[0]).toLowerCase() !== n.toUpperCase() && (i += ' '),
              i + a + '\n'
            );
          }),
          (e.JavaScript.forBlock['bi_unary_return'] = function (t) {
            var n,
              a = e.JavaScript.valueToCode(
                t,
                'expression',
                e.JavaScript.ORDER_ATOMIC
              ),
              i = t.getFieldValue('operator');
            return (
              (n = i[0]).toLowerCase() !== n.toUpperCase() && (i += ' '),
              [i + a, e.JavaScript.ORDER_ATOMIC]
            );
          }),
          (e.JavaScript.forBlock['bi_unary_postfix'] = function (t) {
            var n,
              a = e.JavaScript.valueToCode(
                t,
                'expression',
                e.JavaScript.ORDER_ATOMIC
              ),
              i = t.getFieldValue('operator');
            return (
              (n = i[0]).toLowerCase() !== n.toUpperCase() && (i += ' '),
              a + i + '\n'
            );
          }),
          (e.JavaScript.forBlock['bi_unary_postfix_return'] = function (t) {
            var n,
              a = e.JavaScript.valueToCode(
                t,
                'expression',
                e.JavaScript.ORDER_ATOMIC
              ),
              i = t.getFieldValue('operator');
            return (
              (n = i[0]).toLowerCase() !== n.toUpperCase() && (i += ' '),
              [a + i, e.JavaScript.ORDER_ATOMIC]
            );
          }),
          (e.JavaScript.forBlock['bi_spread'] = function (t) {
            return [
              '...' +
                e.JavaScript.valueToCode(
                  t,
                  'arg_array',
                  e.JavaScript.ORDER_ATOMIC
                ),
              e.JavaScript.ORDER_ATOMIC,
            ];
          }),
          (e.JavaScript.forBlock['bi_parenthesis'] = function (t) {
            return [
              '(' +
                e.JavaScript.valueToCode(
                  t,
                  'arg_array',
                  e.JavaScript.ORDER_ATOMIC
                ) +
                ')',
              e.JavaScript.ORDER_ATOMIC,
            ];
          }),
          e.JavaScript
        );
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      };
    },
    function (e, t) {
      function n(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      e.exports = function (e, t, a) {
        return t && n(e.prototype, t), a && n(e, a), e;
      };
    },
    function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        i = n.n(a),
        l = n(1),
        o = n.n(l),
        r = n(2),
        c = n.n(r),
        p = 'blockly-script',
        s = n(3),
        u = n.n(s),
        d = n(4),
        m = n.n(d);
      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var v = (function () {
        function e(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          u()(this, e);
          var a =
            n.toolbox ||
            '<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">\n        <category name="Logic" colour="%{BKY_LOGIC_HUE}">\n            <category name="If">\n                <block type="controls_if"></block>\n                <block type="controls_if">\n                    <mutation else="1"></mutation>\n                </block>\n                <block type="controls_if">\n                    <mutation elseif="1" else="1"></mutation>\n                </block>\n            </category>\n            <category name="Boolean" colour="%{BKY_LOGIC_HUE}">\n                <block type="logic_compare"></block>\n                <block type="logic_operation"></block>\n                <block type="logic_negate"></block>\n                <block type="logic_boolean"></block>\n                <block type="logic_null"></block>\n                <block type="logic_ternary"></block>\n            </category>\n        </category>\n        <category name="Loops" colour="%{BKY_LOOPS_HUE}">\n            <block type="controls_repeat_ext">\n                <value name="TIMES">\n                <block type="math_number">\n                    <field name="NUM">10</field>\n                </block>\n                </value>\n            </block>\n            <block type="controls_whileUntil"></block>\n            <block type="bi_for"></block>\n            <block type="controls_for">\n                <field name="VAR">i</field>\n                <value name="FROM">\n                <block type="math_number">\n                    <field name="NUM">1</field>\n                </block>\n                </value>\n                <value name="TO">\n                <block type="math_number">\n                    <field name="NUM">10</field>\n                </block>\n                </value>\n                <value name="BY">\n                <block type="math_number">\n                    <field name="NUM">1</field>\n                </block>\n                </value>\n            </block>\n            <block type="controls_forEach"></block>\n            <block type="controls_flow_statements"></block>\n        </category>\n        <category name="Math" colour="%{BKY_MATH_HUE}">\n            <block type="math_number">\n                <field name="NUM">123</field>\n            </block>\n                 <block type="bi_unary"></block>\n            <block type="bi_unary_return"></block>\n            <block type="bi_unary_postfix"></block>\n            <block type="bi_unary_postfix_return"></block>\n            <block type="math_arithmetic"></block>\n            <block type="math_single"></block>\n            <block type="math_trig"></block>\n            <block type="math_constant"></block>\n            <block type="math_number_property"></block>\n            <block type="math_round"></block>\n            <block type="math_on_list"></block>\n            <block type="math_modulo"></block>\n            <block type="math_constrain">\n                <value name="LOW">\n                <block type="math_number">\n                    <field name="NUM">1</field>\n                </block>\n                </value>\n                <value name="HIGH">\n                <block type="math_number">\n                    <field name="NUM">100</field>\n                </block>\n                </value>\n            </block>\n            <block type="math_random_int">\n                <value name="FROM">\n                <block type="math_number">\n                    <field name="NUM">1</field>\n                </block>\n                </value>\n                <value name="TO">\n                <block type="math_number">\n                    <field name="NUM">100</field>\n                </block>\n                </value>\n            </block>\n            <block type="math_random_float"></block>\n            <block type="math_atan2"></block>\n        </category>\n        <category name="Lists" colour="%{BKY_LISTS_HUE}">\n            <block type="lists_create_empty"></block>\n            <block type="lists_create_with"></block>\n            <block type="lists_repeat">\n                <value name="NUM">\n                <block type="math_number">\n                    <field name="NUM">5</field>\n                </block>\n                </value>\n            </block>\n            <block type="lists_length"></block>\n            <block type="lists_isEmpty"></block>\n            <block type="lists_indexOf"></block>\n            <block type="lists_getIndex"></block>\n            <block type="lists_setIndex"></block>\n        </category>\n        <sep></sep>\n        <category name="Text" colour="%{BKY_TEXTS_HUE}">\n            <block type="text"></block>\n            <block type="text_join"></block>\n            <block type="text_append">\n                <value name="TEXT">\n                <shadow type="text"></shadow>\n                </value>\n            </block>\n            <block type="text_length">\n                <value name="VALUE">\n                <shadow type="text">\n                    <field name="TEXT">abc</field>\n                </shadow>\n                </value>\n            </block>\n            <block type="text_isEmpty">\n                <value name="VALUE">\n                <shadow type="text">\n                    <field name="TEXT"></field>\n                </shadow>\n                </value>\n            </block>\n            <block type="text_indexOf">\n                <value name="VALUE">\n                <block type="variables_get">\n                    <field name="VAR">{textVariable}</field>\n                </block>\n                </value>\n                <value name="FIND">\n                <shadow type="text">\n                    <field name="TEXT">abc</field>\n                </shadow>\n                </value>\n            </block>\n            <block type="text_charAt">\n                <value name="VALUE">\n                <block type="variables_get">\n                    <field name="VAR">{textVariable}</field>\n                </block>\n                </value>\n            </block>\n            <block type="text_getSubstring">\n                <value name="STRING">\n                <block type="variables_get">\n                    <field name="VAR">{textVariable}</field>\n                </block>\n                </value>\n            </block>\n            <block type="text_changeCase">\n                <value name="TEXT">\n                <shadow type="text">\n                    <field name="TEXT">abc</field>\n                </shadow>\n                </value>\n            </block>\n            <block type="text_trim">\n                <value name="TEXT">\n                <shadow type="text">\n                    <field name="TEXT">abc</field>\n                </shadow>\n                </value>\n            </block>\n            <block type="text_print">\n                <value name="TEXT">\n                <shadow type="text">\n                    <field name="TEXT">abc</field>\n                </shadow>\n                </value>\n            </block>\n            <block type="text_prompt_ext">\n                <value name="TEXT">\n                <shadow type="text">\n                    <field name="TEXT">abc</field>\n                </shadow>\n                </value>\n            </block>\n        </category>\n        <category name="Variables" custom="VARIABLE" colour="%{BKY_VARIABLES_HUE}">\n        </category>\n        <category name="Functions" custom="PROCEDURE" colour="%{BKY_PROCEDURES_HUE}">\n        </category>\n        <category id="catColour" name="Color" colour="20">\n            <block type="colour_picker"></block>\n            <block type="colour_random"></block>\n            <block type="colour_rgb">\n                <value name="RED">\n                    <shadow type="math_number">\n                        <field name="NUM">100</field>\n                    </shadow>\n                </value>\n                <value name="GREEN">\n                    <shadow type="math_number">\n                        <field name="NUM">50</field>\n                    </shadow>\n                </value>\n                <value name="BLUE">\n                    <shadow type="math_number">\n                        <field name="NUM">0</field>\n                    </shadow>\n                </value>\n            </block>\n            <block type="colour_blend">\n                <value name="COLOUR1">\n                    <shadow type="colour_picker">\n                        <field name="COLOUR">#ff0000</field>\n                    </shadow>\n                </value>\n                <value name="COLOUR2">\n                    <shadow type="colour_picker">\n                        <field name="COLOUR">#3333ff</field>\n                    </shadow>\n                </value>\n                <value name="RATIO">\n                    <shadow type="math_number">\n                        <field name="NUM">0.5</field>\n                    </shadow>\n                </value>\n            </block>\n        </category>\n        <sep></sep>\n        <category name="Modern" colour="230">\n            <block type="bi_var"></block>\n            <block type="bi_var_name"></block>\n            <block type="bi_assignment"></block>      \n            <block type="bi_assignment_return"></block>      \n            <block type="bi_field"></block>\n            <block type="bi_field_return"></block>\n            <block type="bi_return"></block>\n            <block type="bi_spread"></block>\n        </category>\n        <category name="Advanced js" colour="90">\n            <block type="bi_new"></block>\n            <block type="bi_anonymous_class"></block>\n            <block type="bi_class"></block>\n            <block type="bi_static"></block>      \n            <block type="bi_get"></block>\n            <block type="bi_set"></block>\n            <block type="bi_try_catch"></block>      \n            <block type="bi_catch"></block>\n            <block type="bi_comment"></block>\n        </category>\n        '.concat(
              n.toolboxPush,
              '\n        <category name="Library" expanded="true">\n            <category name="Randomize">\n                <block type="procedures_defnoreturn">\n                <mutation>\n                    <arg name="list"></arg>\n                </mutation>\n                <field name="NAME">randomize</field>\n                <statement name="STACK">\n                    <block type="controls_for" inline="true">\n                    <field name="VAR">x</field>\n                    <value name="FROM">\n                        <block type="math_number">\n                        <field name="NUM">1</field>\n                        </block>\n                    </value>\n                    <value name="TO">\n                        <block type="lists_length" inline="false">\n                        <value name="VALUE">\n                            <block type="variables_get">\n                            <field name="VAR">list</field>\n                            </block>\n                        </value>\n                        </block>\n                    </value>\n                    <value name="BY">\n                        <block type="math_number">\n                        <field name="NUM">1</field>\n                        </block>\n                    </value>\n                    <statement name="DO">\n                        <block type="variables_set" inline="false">\n                        <field name="VAR">y</field>\n                        <value name="VALUE">\n                            <block type="math_random_int" inline="true">\n                            <value name="FROM">\n                                <block type="math_number">\n                                <field name="NUM">1</field>\n                                </block>\n                            </value>\n                            <value name="TO">\n                                <block type="lists_length" inline="false">\n                                <value name="VALUE">\n                                    <block type="variables_get">\n                                    <field name="VAR">list</field>\n                                    </block>\n                                </value>\n                                </block>\n                            </value>\n                            </block>\n                        </value>\n                        <next>\n                            <block type="variables_set" inline="false">\n                            <field name="VAR">temp</field>\n                            <value name="VALUE">\n                                <block type="lists_getIndex" inline="true">\n                                <mutation statement="false" at="true"></mutation>\n                                <field name="MODE">GET</field>\n                                <field name="WHERE">FROM_START</field>\n                                <value name="AT">\n                                    <block type="variables_get">\n                                    <field name="VAR">y</field>\n                                    </block>\n                                </value>\n                                <value name="VALUE">\n                                    <block type="variables_get">\n                                    <field name="VAR">list</field>\n                                    </block>\n                                </value>\n                                </block>\n                            </value>\n                            <next>\n                                <block type="lists_setIndex" inline="false">\n                                <value name="AT">\n                                    <block type="variables_get">\n                                    <field name="VAR">y</field>\n                                    </block>\n                                </value>\n                                <value name="LIST">\n                                    <block type="variables_get">\n                                    <field name="VAR">list</field>\n                                    </block>\n                                </value>\n                                <value name="TO">\n                                    <block type="lists_getIndex" inline="true">\n                                    <mutation statement="false" at="true"></mutation>\n                                    <field name="MODE">GET</field>\n                                    <field name="WHERE">FROM_START</field>\n                                    <value name="AT">\n                                        <block type="variables_get">\n                                        <field name="VAR">x</field>\n                                        </block>\n                                    </value>\n                                    <value name="VALUE">\n                                        <block type="variables_get">\n                                        <field name="VAR">list</field>\n                                        </block>\n                                    </value>\n                                    </block>\n                                </value>\n                                <next>\n                                    <block type="lists_setIndex" inline="false">\n                                    <value name="AT">\n                                        <block type="variables_get">\n                                        <field name="VAR">x</field>\n                                        </block>\n                                    </value>\n                                    <value name="LIST">\n                                        <block type="variables_get">\n                                        <field name="VAR">list</field>\n                                        </block>\n                                    </value>\n                                    <value name="TO">\n                                        <block type="variables_get">\n                                        <field name="VAR">temp</field>\n                                        </block>\n                                    </value>\n                                    </block>\n                                </next>\n                                </block>\n                            </next>\n                            </block>\n                        </next>\n                        </block>\n                    </statement>\n                    </block>\n                </statement>\n                </block>\n            </category>\n            <category name="Jabberwocky">\n                <block type="text_print">\n                <value name="TEXT">\n                    <block type="text">\n                    <field name="TEXT">\'Twas brillig, and the slithy toves</field>\n                    </block>\n                </value>\n                <next>\n                    <block type="text_print">\n                    <value name="TEXT">\n                        <block type="text">\n                        <field name="TEXT">  Did gyre and gimble in the wabe:</field>\n                        </block>\n                    </value>\n                    <next>\n                        <block type="text_print">\n                        <value name="TEXT">\n                            <block type="text">\n                            <field name="TEXT">All mimsy were the borogroves,</field>\n                            </block>\n                        </value>\n                        <next>\n                            <block type="text_print">\n                            <value name="TEXT">\n                                <block type="text">\n                                <field name="TEXT">  And the mome raths outgrabe.</field>\n                                </block>\n                            </value>\n                            </block>\n                        </next>\n                        </block>\n                    </next>\n                    </block>\n                </next>\n                </block>\n                <block type="text_print">\n                <value name="TEXT">\n                    <block type="text">\n                    <field name="TEXT">"Beware the Jabberwock, my son!</field>\n                    </block>\n                </value>\n                <next>\n                    <block type="text_print">\n                    <value name="TEXT">\n                        <block type="text">\n                        <field name="TEXT">  The jaws that bite, the claws that catch!</field>\n                        </block>\n                    </value>\n                    <next>\n                        <block type="text_print">\n                        <value name="TEXT">\n                            <block type="text">\n                            <field name="TEXT">Beware the Jubjub bird, and shun</field>\n                            </block>\n                        </value>\n                        <next>\n                            <block type="text_print">\n                            <value name="TEXT">\n                                <block type="text">\n                                <field name="TEXT">  The frumious Bandersnatch!"</field>\n                                </block>\n                            </value>\n                            </block>\n                        </next>\n                        </block>\n                    </next>\n                    </block>\n                </next>\n                </block>\n            </category>\n        </category>\n        </xml>'
            );
          this.workspace = Blockly.inject(
            t,
            b(
              {
                toolbox: a,
                zoom: {
                  controls: !0,
                  wheel: !0,
                  startScale: 1,
                  maxScale: 3,
                  minScale: 0.2,
                  scaleSpeed: 1.2,
                },
                grid: { spacing: 20, length: 3, color: '#ccc', snap: !0 },
                trashcan: !0,
              },
              n.workspaceOptions
            )
          );
        }
        return m()(e, [{ key: 'hide', value: function () {} }]), e;
      })();
      function _(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function f(e) {
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
      var T = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = e.Commands,
          a = e.Modal,
          i = e.Components,
          l = t.modalTitle,
          o = t.codeViewOptions,
          r = t.commandBlocklyScript,
          c = t.blocklyOptions,
          s = t.blocklyTypesSupport,
          u = t.toolbarIcon,
          d = t.onRun,
          m = t.onError,
          h = t.starter,
          b = null,
          _ = null,
          xy = null,
          T = function (e, t) {
            t instanceof HTMLElement
              ? e.appendChild(t)
              : t && e.insertAdjacentHTML('beforeend', t);
          };
        s &&
          s.forEach(function (e) {
            var n = i.getType(e).model;
            i.addType(e, {
              model: {
                initToolbar: function () {
                  n.prototype.initToolbar.apply(this, arguments);
                  var e = this.get('toolbar'),
                    a = e.some(function (e) {
                      return e.command === p;
                    });
                },
              },
            });
          }),
          n.add(
            p,
            f(
              {
                keyBlocklyXml: 'blockly-xml',
                run: function (e, t) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  (this.editor = e),
                    (this.options = n),
                    (this.target = n.target || e.getSelected());
                  var a = this.target;
                  a && this.showCustomCode(this.options);
                  let { m } = this;
                  return m;
                },
                stop: function (e) {
                  document.removeEventListener('keypress', xy);
                  b.workspace.clear(), a.close();
                },
                showCustomCode: function (e) {
                  var t = this,
                    n = this.editor,
                    i = this.options.title || l;
                  _ || (_ = this.getContent());
                  xy || (xy = t.handleKeyPress.bind(t));
                  a
                    .open({ title: i, content: _ })
                    .getModel()
                    .once('change:open', function () {
                      return n.stopCommand(t.id);
                    }),
                    b ||
                      (b = new v(
                        _.querySelector('#blockly'),
                        c
                      )).workspace.addChangeListener(function () {
                        return t.updateWorkspace();
                      });
                  var o = e.blockly || h;
                  if (e.name !== '&#43 New Handler') {
                    document.getElementById('x').value = e.name;
                  } else {
                    document.getElementById('x').value = '';
                  }
                  Blockly.Xml.domToWorkspace(
                    Blockly.utils.xml.textToDom(o),
                    b.workspace
                  );
                  document.addEventListener('keypress', xy);
                },
                getPreContent: function () {
                  var e = document.createElement('div');
                  e.id = 'Handler-name';
                  var inputLabel = document.createElement('label');
                  inputLabel.classList.add('inl');
                  inputLabel.style.marginRight = '10px';
                  var input = document.createElement('input');
                  input.id = 'x';
                  input.autocomplete = 'off';
                  inputLabel.textContent = 'Handler Name:';
                  var y = document.createElement('div');
                  y.classList.add('gjs-field');
                  y.classList.add('gjs-field-text');
                  y.style.height = 'fit-content';
                  y.style.borderRadius = '10px';
                  inputLabel.htmlFor = input.id;
                  var div = document.createElement('div');
                  div.style.display = 'flex';
                  y.appendChild(input);
                  div.appendChild(inputLabel);
                  div.appendChild(y);
                  div.style.height = '35px';
                  div.style.alignItems = 'center';
                  return e.appendChild(div), e;
                },
                getPostContent: function () {
                  var e = document.createElement('div');
                  e.id = 'code-viewer';
                  var t = this.getCodeViewer();
                  return (
                    t.refresh(),
                    setTimeout(function () {
                      return t.focus();
                    }, 0),
                    e.appendChild(t.getElement()),
                    e
                  );
                },
                getContent: function () {
                  var e = this.editor,
                    t = document.createElement('div'),
                    n = document.createElement('div');
                  (n.id = 'blockly-cont'),
                    (n.innerHTML = `<div id="blockly" style="width:100%;height:400px;color:grey"></div>
                     <div class="modal" id="messageModal"> 
                     <div class ="fa fa-circle-exclamation"></div>
                      <div class="modal-content">
                        <p id ="messageText"></p>
                        <button id="okButton">OK</button>
                      </div>
                     </div>`);
                  var a = e.getConfig('stylePrefix');
                  return (
                    (t.className = ''.concat(a, 'inject-logic')),
                    T(t, this.getPreContent()),
                    t.appendChild(n),
                    T(t, this.getPostContent()),
                    T(t, this.getContentActions()),
                    t
                  );
                },
                getContentActions: function () {
                  var e = this,
                    n = this.editor,
                    a = document.createElement('div');
                  (a.id = 'actns'),
                    (a.style =
                      'position:absolute;bottom:260px;right:20px;z-index:2');
                  var i = document.createElement('button'),
                    l = n.getConfig('stylePrefix');
                  (i.innerHTML = t.buttonLabel),
                    (i.className = ''
                      .concat(l, 'btn-prim ')
                      .concat(l, 'btn-save__inject-logic')),
                    (i.onclick = function () {
                      return e.handleSave();
                    });

                  var o = document.createElement('div');
                  return (
                    (o.id = 'logic-toolbar'),
                    (o.className = 'fa fa-bug'),
                    (o.style =
                      'margin:5px;padding:10px;background:rgba(0,0,0,0.2);border-radius:3px;border:1px solid rgba(0,0,0,0.2);cursor:pointer'),
                    (o.onclick = function () {
                      return e.runCode();
                    }),
                    a.appendChild(o),
                    a.appendChild(i),
                    a
                  );
                },
                handleKeyPress: function (e) {
                  if (e.key === 'Enter') {
                    this.handleSave();
                  }
                },
                handleSave: function () {
                  let status =
                    this.options.name !== '&#43 New Handler' ? 'NotNew' : 'New';
                  let m = document.getElementById('x').value;
                  let n = this.getCodeViewer().getContent();
                  let handlersCount = this.em.Events.handlers.length;
                  const handlerNames = this.em.Events.handlers.map(
                    (handler) => handler.name
                  );
                  let hid =
                    status === 'New'
                      ? handlersCount + 1
                      : this.options.handlerId;

                  if (!m) {
                    m = `New Handler ${handlersCount - 5}`;
                  }

                  if (
                    (status === 'New' && !handlerNames.includes(m)) ||
                    status === 'NotNew'
                  ) {
                    let h = {
                      handlerId: hid,
                      name: m,
                      value: m.replace(/\s/g, ''),
                      logic: n,
                      blockly: '',
                    };
                    let e = this.editor,
                      t = this.target,
                      a = Blockly.Xml.workspaceToDom(b.workspace),
                      o = this;
                    h.blockly = Blockly.Xml.domToText(a);
                    t.set('blockly-xml', Blockly.Xml.domToText(a));
                    document.getElementById('x').value = '';
                    e.Modal.close();
                    document.removeEventListener('keypress', xy);
                    this.fcs(this.target, h);
                  } else {
                    this.showErrorMessage('This Handler name already exists');
                  }
                },
                fcs: function (uu, h) {
                  uu.get('events').models[0].addHandler(h);
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
                getCodeViewer: function () {
                  var e = this.editor;
                  return (
                    this.codeViewer ||
                      (this.codeViewer = e.CodeManager.createViewer(
                        f(
                          {
                            codeName: 'javascript',
                            theme: 'hopscotch',
                            readOnly: 1,
                            autoBeautify: 1,
                          },
                          o
                        )
                      )),
                    this.codeViewer
                  );
                },
                toggleCodeViewer: function () {
                  var e = _.querySelector('#blockly').style,
                    t = _.querySelector('#code-viewer').style;
                  '0px' == e.height || '0' == e.height
                    ? ((e.height = '500px'), (t.display = 'none'))
                    : ((e.height = '0'), (t.display = 'block'));
                },
                updateWorkspace: function (e) {
                  var t = Blockly.JavaScript.workspaceToCode(
                    Blockly.getMainWorkspace()
                  );
                  try {
                    this.getCodeViewer().setContent(t);
                  } catch (e) {}
                },
                sync: function () {
                  this.getCodeViewer().getContent();
                },
                runCode: function () {
                  try {
                    var e = this.getCodeViewer().getContent();
                    Function('"use strict";' + e)(), d && d();
                  } catch (e) {
                    console.log('error', e), m && m(e);
                  }
                },
              },
              r
            )
          );
      };
      function k(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? k(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      t.default = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = y(
            y(
              {},
              {
                blocklyOptions: {
                  toolbox: '',
                  toolboxPush: '',
                  workspaceOptions: {},
                },
                starter:
                  '<xml xmlns="https://developers.google.com/blockly/xml"><block type="bi_var" id="OHq;p^O:()AR3;aG%CwD" x="90" y="30"><field name="var_type">let</field><field name="var">el</field><value name="val"><block type="bi_var_name" id="Je,,~AE%W2MCRA?7u.^0"><field name="NAME">this</field></block></value></block></xml>',
                toolbarIcon: '<i class="fa fa-puzzle-piece"></i>',
                blocklyTypesSupport: [
                  'default',
                  'wrapper',
                  'text',
                  'textnode',
                  'image',
                  'video',
                  'svg',
                ],
                toolbarBtnBlockly: {},
                onRun: function () {
                  return console.log('valid syntax');
                },
                onError: function (e) {
                  return console.log('error', e);
                },
                modalTitle: 'Blockly',
                codeViewOptions: {},
                buttonLabel: 'Save',
                commandBlocklyScript: {},
              }
            ),
            t
          );
        if (!Blockly) throw new Error('Blockly instance not found');
        o()(Blockly), c()(Blockly), T(e, n);
      };
    },
  ]);
});
//# sourceMappingURL=grapesjs-blockly.min.js.map
