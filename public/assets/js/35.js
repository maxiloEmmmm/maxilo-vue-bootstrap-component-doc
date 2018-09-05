webpackJsonp([35],{

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(605)
/* template */
var __vue_template__ = __webpack_require__(606)
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
Component.options.__file = "src/pages/form/btn-group.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46424a47", Component.options)
  } else {
    hotAPI.reload("data-v-46424a47", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 605:
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

exports.default = {
    computed: {
        template: function template() {
            return {
                demo1: "\n/**\n * size \u6309\u94AE\u7EC4\u5927\u5C0F\n *      type: String\n *      http://code.z01.com/v4/components/button-group.html#sizing\n */\n<mxl-btn-group size=\"lg\">\n    <mxl-btn>1</mxl-btn>\n    <mxl-btn>2</mxl-btn>\n    <mxl-btn>3</mxl-btn>\n    <mxl-btn>4</mxl-btn>\n    <mxl-btn>5</mxl-btn>\n</mxl-btn-group>"
            };
        }
    }
};

/***/ }),

/***/ 606:
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
        _c("mxl-emotion-text", [_vm._v("mxl-btn-group")])
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
            _c(
              "mxl-btn-group",
              { staticClass: "mb-2", attrs: { size: "lg" } },
              [
                _c("mxl-btn", [_vm._v("1")]),
                _vm._v(" "),
                _c("mxl-btn", [_vm._v("2")]),
                _vm._v(" "),
                _c("mxl-btn", [_vm._v("3")]),
                _vm._v(" "),
                _c("mxl-btn", [_vm._v("4")]),
                _vm._v(" "),
                _c("mxl-btn", [_vm._v("5")])
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
    return _c("dd", [_c("p", { staticClass: "mb-0" }, [_vm._v("按钮组.")])])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-46424a47", module.exports)
  }
}

/***/ })

});