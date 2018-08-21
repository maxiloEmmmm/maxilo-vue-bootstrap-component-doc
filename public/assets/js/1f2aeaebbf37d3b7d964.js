webpackJsonp([10],{

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(544)
/* template */
var __vue_template__ = __webpack_require__(545)
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
Component.options.__file = "src/pages/layout/listInLine.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-77720928", Component.options)
  } else {
    hotAPI.reload("data-v-77720928", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 544:
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
//
//
//
//
//

exports.default = {
    computed: {
        template: function template() {
            return {
                demo1: "<mxl-list-in-line>\n    <mxl-emotion-text>list-in-line-item1</mxl-emotion-text>\n    <mxl-emotion-text>list-in-line-item2</mxl-emotion-text>\n    <mxl-btn-group>\n        <mxl-btn>btn1</mxl-btn>\n        <mxl-btn>btn2</mxl-btn>\n    </mxl-btn-group>\n    <div>Test div</div>\n</mxl-list-in-line>"
            };
        }
    }
};

/***/ }),

/***/ 545:
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
        _c("mxl-emotion-text", [_vm._v("mxl-list-in-line")])
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
            _vm._v("\n            快速实现元素并排显示\n            "),
            _c(
              "mxl-list-in-line",
              { staticClass: "mb-2" },
              [
                _c("mxl-emotion-text", [_vm._v("list-in-line-item1")]),
                _vm._v(" "),
                _c("mxl-emotion-text", [_vm._v("list-in-line-item2")]),
                _vm._v(" "),
                _c(
                  "mxl-btn-group",
                  [
                    _c("mxl-btn", [_vm._v("btn1")]),
                    _vm._v(" "),
                    _c("mxl-btn", [_vm._v("btn2")])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", [_vm._v("Test div")])
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
    return _c("dd", [_c("p", { staticClass: "mb-0" }, [_vm._v("行内组.")])])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-77720928", module.exports)
  }
}

/***/ })

});