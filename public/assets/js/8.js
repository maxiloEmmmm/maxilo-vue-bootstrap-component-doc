webpackJsonp([8],{

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(597)
/* template */
var __vue_template__ = __webpack_require__(598)
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
Component.options.__file = "src/pages/lib/tab.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f296aa92", Component.options)
  } else {
    hotAPI.reload("data-v-f296aa92", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 597:
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

exports.default = {
    computed: {
        template: function template() {
            return {
                demo1: "\n/**\n * navs\n *  type: Array\n *  default: []\n *  \u9009\u9879\u5361\u6570\u636E\n *      \u5B57\u7B26\u4E32\u4E3A\u9009\u9879\u5361\u540D (\u7B2C\u4E00\u4E2A\u9009\u9879\u5361\u540D\u4F1A\u5207\u6362\u5230\u6807\u7B7E\u5305\u88F9\u7740\u7684\u7B2C\u4E00\u4E2A\u5185\u5BB9, \u4F9D\u6B21\u8BA1\u7B97~)\n *      \u5BF9\u8C61\n *          label \u5B57\u7B26\u4E32\u4E3A\u9009\u9879\u5361\u540D\n *          pane \u6307\u5B9A\u5207\u6362\u7684\u9009\u9879\u5361\u540D \u7528\u4E8E\u591A\u4E2A\u9009\u9879\u5361\u663E\u793A\u540C\u4E00\u5185\u5BB9\n */\n<mxl-tab :navs=\"['tab1', 'tab2', {label: 'tab3', pane: 'tab2'}]\">\n    <span>tab1's content</span>\n    <span>tab2's content</span>\n</mxl-tab>"
            };
        }
    }
};

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("dl", [
    _c(
      "dt",
      [_vm._v("选项卡\n        "), _c("mxl-emotion-text", [_vm._v("mxl-tab")])],
      1
    ),
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
              "mxl-tab",
              {
                attrs: {
                  navs: ["tab1", "tab2", { label: "tab3", pane: "tab2" }]
                }
              },
              [
                _c("span", [_vm._v("tab1's content")]),
                _vm._v(" "),
                _c("span", [_vm._v("tab2's content")])
              ]
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
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-f296aa92", module.exports)
  }
}

/***/ })

});