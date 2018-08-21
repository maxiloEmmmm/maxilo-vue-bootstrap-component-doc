webpackJsonp([20],{

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(573)
/* template */
var __vue_template__ = __webpack_require__(574)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "src/pages/form/input.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-09aaee7a", Component.options)
  } else {
    hotAPI.reload("data-v-09aaee7a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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
//
//

exports.default = {
    data: function data() {
        return {
            disabled: false
        };
    },

    computed: {
        template: function template() {
            return {
                demo1: "\n/**\n * type \u8F93\u5165\u7C7B\u578B \u652F\u6301html input\u7C7B\u578B\n *      default: input\n *      type: String\n * disabled \u7981\u7528\n *      default: true\n *      type: Boolean\n */\n<mxl-input :disabled=\"disabled\" type=\"text\"></mxl-input>"
            };
        }
    }
};

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("dl", [
    _c(
      "dt",
      [
        _vm._v("组件名\n        "),
        _c("mxl-emotion-text", [_vm._v("mxl-input")])
      ],
      1
    ),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("dt", [_vm._v("基本用法")]),
    _vm._v(" "),
    _c(
      "dd",
      [
        _c(
          "mxl-card",
          [
            _vm._v("\n            支持"),
            _c("router-link", { attrs: { to: "/mixs/rule" } }, [
              _vm._v("验证器")
            ]),
            _vm._v(" "),
            _c(
              "mxl-list-in-line",
              [
                _c("mxl-input", {
                  attrs: { disabled: _vm.disabled, type: "text" }
                }),
                _vm._v(" "),
                _c(
                  "mxl-btn",
                  {
                    on: {
                      click: function($event) {
                        _vm.disabled = !_vm.disabled
                      }
                    }
                  },
                  [_vm._v(_vm._s((_vm.disabled ? "不" : "") + "禁用"))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "mxl-list-group",
              [
                _c(
                  "mxl-tab",
                  { attrs: { navs: ["template"] } },
                  [
                    _c("mxl-highlight", { attrs: { type: "javascript" } }, [
                      _vm._v(_vm._s(_vm.template.demo1))
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("dd", [_c("p", { staticClass: "mb-0" }, [_vm._v("输入框.")])])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-09aaee7a", module.exports)
  }
}

/***/ })

});