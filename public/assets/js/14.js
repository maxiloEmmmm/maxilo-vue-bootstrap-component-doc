webpackJsonp([14],{

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(599)
/* template */
var __vue_template__ = __webpack_require__(600)
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
Component.options.__file = "src/pages/lib/card.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-efdb0844", Component.options)
  } else {
    hotAPI.reload("data-v-efdb0844", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 599:
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
                demo1: "<mxl-card>\n    Test.\n    <template slot=\"header\">Test-Header.</template>\n    <template slot=\"footer\">Test-Footer.</template>\n</mxl-card>",
                demo2: "<mxl-card>\n    Test2.\n    <template slot=\"header\">Test-Header2.</template>\n    <mxl-list-group slot=\"other\" :card=\"true\">\n        <span>Test-card-list-group1</span>\n        <span>Test-card-list-group2</span>\n    </mxl-list-group>\n</mxl-card>"
            };
        }
    }
};

/***/ }),

/***/ 600:
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
        _c("mxl-emotion-text", [_vm._v("mxl-card")])
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
              "mxl-card",
              { staticClass: "mb-2" },
              [
                _vm._v("\n                Test.\n                "),
                _c("template", { slot: "header" }, [_vm._v("Test-Header.")]),
                _vm._v(" "),
                _c("template", { slot: "footer" }, [_vm._v("Test-Footer.")])
              ],
              2
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
    ),
    _vm._v(" "),
    _c(
      "dt",
      [_vm._v("嵌套"), _c("mxl-emotion-text", [_vm._v("mxl-list-group")])],
      1
    ),
    _vm._v(" "),
    _c(
      "dd",
      [
        _c(
          "mxl-card",
          [
            _c(
              "mxl-card",
              { staticClass: "mb-2" },
              [
                _vm._v("\n                Test2.\n                "),
                _c("template", { slot: "header" }, [_vm._v("Test-Header2.")]),
                _vm._v(" "),
                _c(
                  "mxl-list-group",
                  { attrs: { slot: "other", card: true }, slot: "other" },
                  [
                    _c("span", [_vm._v("Test-card-list-group1")]),
                    _vm._v(" "),
                    _c("span", [_vm._v("Test-card-list-group2")])
                  ]
                )
              ],
              2
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
                      _vm._v(_vm._s(_vm.template.demo2))
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
    return _c("dd", [_c("p", { staticClass: "mb-0" }, [_vm._v("卡片.")])])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-efdb0844", module.exports)
  }
}

/***/ })

});