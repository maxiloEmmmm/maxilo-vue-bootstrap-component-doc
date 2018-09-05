webpackJsonp([9],{

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(589)
/* template */
var __vue_template__ = __webpack_require__(590)
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
Component.options.__file = "src/pages/lib/modal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0cccff4f", Component.options)
  } else {
    hotAPI.reload("data-v-0cccff4f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 589:
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

exports.default = {
    data: function data() {
        return {
            show: false
        };
    },

    computed: {
        template: function template() {
            return {
                demo1: "\n/**\n * show \u5F39\u51FA\u5C42\u662F\u5426\u6253\u5F00\n *      \u8BF7\u7528.sync \u4FEE\u9970show \u5C5E\u6027, \u5426\u5219\u5185\u90E8\u81EA\u5E26\u5173\u95ED\u4F1A\u5931\u6548\n * fullScreen \u5168\u5C4F\u663E\u793A\n *      default: true\n *      type: Boolean\n * size \u5927\u5C0F\n *      default: 65\n *      type: String or Number (1-100)\n * useShadow \u9634\u5F71\u906E\u7F69\n *      default: true\n *      type: true\n */\n<mxl-modal :show.sync=\"show\" size=\"65\" :useShadow=\"true\"> \n    hi, modal.\n    <span slot=\"header\">modal header slot</span>\n    <span slot=\"footer\">modal footer slot</span> \n</mxl-modal>\n<mxl-btn @click=\"show = true\">\u6253\u5F00modal</mxl-btn>"
            };
        }
    }
};

/***/ }),

/***/ 590:
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
        _c("mxl-emotion-text", [_vm._v("mxl-modal")])
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
              "mxl-modal",
              {
                attrs: {
                  show: _vm.show,
                  fullScreen: false,
                  size: "65",
                  useShadow: true
                },
                on: {
                  "update:show": function($event) {
                    _vm.show = $event
                  }
                }
              },
              [
                _vm._v(" \n                hi, modal. \n                "),
                _c("span", { attrs: { slot: "header" }, slot: "header" }, [
                  _vm._v("modal header slot")
                ]),
                _vm._v(" "),
                _c("span", { attrs: { slot: "footer" }, slot: "footer" }, [
                  _vm._v("modal footer slot")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "mxl-btn",
              {
                staticClass: "mb-2",
                on: {
                  click: function($event) {
                    _vm.show = true
                  }
                }
              },
              [_vm._v("打开modal")]
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
    return _c("dd", [_c("p", { staticClass: "mb-0" }, [_vm._v(" 弹出层.")])])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-0cccff4f", module.exports)
  }
}

/***/ })

});