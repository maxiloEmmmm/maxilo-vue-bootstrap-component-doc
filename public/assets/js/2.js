webpackJsonp([2],{

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(560)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(562)
/* template */
var __vue_template__ = __webpack_require__(563)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/test/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ef8037ce", Component.options)
  } else {
    hotAPI.reload("data-v-ef8037ce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(561);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("d0dd8aea", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ef8037ce\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ef8037ce\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.warning {\n    color: red;\n}\n", ""]);

// exports


/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _test = __webpack_require__(106);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            d: '',
            response: '',
            u: _test.TEST.MOCK
        };
    },
    mounted: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var _ref2, data, _ref3, q;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.$http.post(this.u + '?a=123213');

                        case 2:
                            _ref2 = _context.sent;
                            data = _ref2.data;

                            this.response = JSON.stringify(data);
                            // let {data:d} = await this.$http.post('/auth/login', {
                            //     username: 1,
                            //     password: 2,
                            //     code: 3
                            // });
                            _context.next = 7;
                            return this.$http.get('/doctor/manage/list');

                        case 7:
                            _ref3 = _context.sent;
                            q = _ref3.data;

                            console.log(q);

                        case 10:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function mounted() {
            return _ref.apply(this, arguments);
        }

        return mounted;
    }(),
    beforeRouteLeave: function beforeRouteLeave(to, from, next) {
        var answer = true;
        if (answer) {
            alert('ok');
            next();
        } else {
            next(false);
        }
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        console.log('route enter');
        next();
    },
    beforeResolve: function beforeResolve(to, from, next) {
        console.log('route resolve');
        next();
    },
    beforeCreate: function beforeCreate() {
        console.log('before create');
    },
    created: function created() {
        console.log('create');
    },

    methods: {
        routeto: function routeto() {
            this.$router.push('/test/component');
        },
        t: function t() {
            this.$store.dispatch('testAuth/test', { u: 123 });
        },
        testH: function testH() {}
    }
};

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h1", [
      _vm._v(
        "测试i18n: " +
          _vm._s(_vm.$t("base.key1")) +
          " (看到value1 而不是base.key1)"
      )
    ]),
    _vm._v(" "),
    _c("h1", [_vm._v("测试路由: /path/to 得到当前页面")]),
    _vm._v(" "),
    _c("h1", [
      _vm._v("测试路由跳转: /test/component "),
      _c("button", { on: { click: _vm.routeto } }, [_vm._v("->")])
    ]),
    _vm._v(" "),
    _c("button", { on: { click: _vm.t } }, [
      _vm._v("测试store: 点击后填充store 刷新页面, store内容依旧存在.")
    ]),
    _vm._v(" "),
    _c("div", [
      _vm._v("\n        测试验证1: \n        "),
      _c("input", {
        directives: [
          { name: "model", rawName: "v-model", value: _vm.d, expression: "d" },
          {
            name: "validate",
            rawName: "v-validate",
            value: "required|numeric|min_value:5",
            expression: "'required|numeric|min_value:5'"
          }
        ],
        attrs: { type: "text", "data-vv-name": "测试验证" },
        domProps: { value: _vm.d },
        on: {
          input: [
            function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.d = $event.target.value
            },
            _vm.testH
          ]
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.errors.has("测试验证"),
              expression: "errors.has('测试验证')"
            }
          ],
          staticClass: "warning"
        },
        [_vm._v(_vm._s(_vm.errors.first("测试验证")) + ".")]
      )
    ]),
    _vm._v(" "),
    _c("div", [
      _c("h1", [_vm._v("测试mock(将.mock.example 复制一份重命名 .mock):")]),
      _vm._v(
        "\n        请求: " +
          _vm._s(_vm.u) +
          "\n        方法: POST\n        响应: " +
          _vm._s(_vm.response ? "√" + _vm.response : "✘") +
          "\n    "
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-ef8037ce", module.exports)
  }
}

/***/ })

});