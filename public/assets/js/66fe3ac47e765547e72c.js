webpackJsonp([15],{

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(550)
/* template */
var __vue_template__ = __webpack_require__(551)
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
Component.options.__file = "src/pages/layout/col.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b14a91f", Component.options)
  } else {
    hotAPI.reload("data-v-7b14a91f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 550:
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
    computed: {
        template: function template() {
            return {
                demo1: "<mxl-row>\n    <mxl-col class=\"border\" :size=\"5\" layoutModel=\"md\">col-md-5</mxl-col>\n    <mxl-col class=\"border\" :size=\"5\" layoutModel=\"md\">col-md-5</mxl-col>\n    <mxl-col class=\"border\" :size=\"1\" layoutModel=\"md\">col-md-1</mxl-col>\n</mxl-row>"
            };
        }
    }
};

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("dl", [
    _c(
      "dt",
      [_vm._v("组件名\n        "), _c("mxl-emotion-text", [_vm._v("mxl-col")])],
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
              "mxl-row",
              [
                _c(
                  "mxl-col",
                  {
                    staticClass: "border",
                    attrs: { size: 5, layoutModel: "md" }
                  },
                  [_vm._v("col-md-5")]
                ),
                _vm._v(" "),
                _c(
                  "mxl-col",
                  {
                    staticClass: "border",
                    attrs: { size: 5, layoutModel: "md" }
                  },
                  [_vm._v("col-md-5")]
                ),
                _vm._v(" "),
                _c(
                  "mxl-col",
                  {
                    staticClass: "border",
                    attrs: { size: 1, layoutModel: "md" }
                  },
                  [_vm._v("col-md-1")]
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
    return _c("dd", [_c("p", { staticClass: "mb-0" }, [_vm._v("列.")])])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-7b14a91f", module.exports)
  }
}

/***/ })

});