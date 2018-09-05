webpackJsonp([28],{

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(621)
/* template */
var __vue_template__ = __webpack_require__(622)
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
Component.options.__file = "src/pages/form/input-group.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-117a7df5", Component.options)
  } else {
    hotAPI.reload("data-v-117a7df5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 621:
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
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            hi: ''
        };
    },

    computed: {
        template: function template() {
            return {
                demo1: '\n/**\n * prepend \u8F93\u5165\u6846\u524D\u63D2\u69FD\n * append \u8F93\u5165\u6846\u540E\u63D2\u69FD\n */\n<mxl-input-group>\n    /* \u653E\u5165\u57FA\u672C\u8F93\u5165\u6846 */\n    <mxl-input></mxl-input>\n    <mxl-btn slot="prepend">&</mxl-btn>\n    <mxl-btn slot="append">&</mxl-btn>\n</mxl-input-group>',
                demo2: '\n/**\n * \u5F53\u5728\u524D\u540E\u653E\u7F6E\u6587\u672C\u6216\u56FE\u6807\u65F6 \u53EF\u4EE5\u4F7F\u7528 mxl-input-group-text \u5305\u88F9\n *      mxl-input-group-text\n *          \u5C5E\u6027\n *              type \u60C5\u666F\u8272 http://code.z01.com/v4/utilities/colors.html#background-color\n */\n<mxl-input-group>\n    <mxl-input></mxl-input>\n    <mxl-input-group-text slot="prepend" type="primary">\n        <i class="fa fa-times"></i>\n    </mxl-input-group-text>\n    <mxl-input-group-text slot="append" type="light">\n        hi\n    </mxl-input-group-text>\n</mxl-input-group>'
            };
        }
    }
};

/***/ }),

/***/ 622:
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
        _c("mxl-emotion-text", [_vm._v("mxl-input-group")])
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
              "mxl-list-in-line",
              [
                _c(
                  "mxl-input-group",
                  [
                    _c("mxl-input"),
                    _vm._v(" "),
                    _c(
                      "mxl-btn",
                      { attrs: { slot: "prepend" }, slot: "prepend" },
                      [_vm._v("&")]
                    ),
                    _vm._v(" "),
                    _c(
                      "mxl-btn",
                      { attrs: { slot: "append" }, slot: "append" },
                      [_vm._v("&")]
                    )
                  ],
                  1
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
    ),
    _vm._v(" "),
    _c("dt", [_vm._v("文字附加")]),
    _vm._v(" "),
    _c(
      "dd",
      [
        _c(
          "mxl-card",
          [
            _c(
              "mxl-list-in-line",
              [
                _c(
                  "mxl-input-group",
                  [
                    _c("mxl-input"),
                    _vm._v(" "),
                    _c(
                      "mxl-input-group-text",
                      { attrs: { slot: "prepend" }, slot: "prepend" },
                      [_c("i", { staticClass: "fa fa-times" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "mxl-input-group-text",
                      {
                        attrs: { slot: "append", type: "light" },
                        slot: "append"
                      },
                      [
                        _vm._v(
                          "\n                        hi\n                    "
                        )
                      ]
                    )
                  ],
                  1
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
    return _c("dd", [_c("p", { staticClass: "mb-0" }, [_vm._v("输入组.")])])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-117a7df5", module.exports)
  }
}

/***/ })

});