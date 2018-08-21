webpackJsonp([19],{

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(571)
/* template */
var __vue_template__ = __webpack_require__(572)
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
Component.options.__file = "src/pages/form/select.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9127fb5a", Component.options)
  } else {
    hotAPI.reload("data-v-9127fb5a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 571:
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

exports.default = {
    data: function data() {
        return {
            data: '',
            options: [{ label: 'option1', value: 1 }, { label: 'option2', value: 2 }, { label: 'option3', value: 3 }, { label: 'option4', value: 4 }, { label: 'option5', value: 5 }],
            more: false
        };
    },

    computed: {
        template: function template() {
            return {
                demo1: '\n/**\n * options \u9009\u9879\n *      type: Array\n *      default: []\n *      data struct:\n *          [\n *              * label \u663E\u793A\u540D\n *              * value \u503C\n *              {label: \'option1\', value: 1},\n *              {label: \'option2\', value: 2}\n *          ]\n * v-model \u8BF4\u660E\n *      \u5355\u9009\u4E3A value\n *          1\n *      \u591A\u9009\u4E3A value \u96C6\u5408\u6570\u7EC4\n *          [1, 2]\n * more \u662F\u5426\u591A\u9009\n *      type: Boolean\n *      default: false\n * autoClickHide \u9009\u62E9\u662F\u5426\u5173\u95ED\u83DC\u5355, \u5982\u679C\u4E0D\u9ED8\u8BA4\u5173\u95ED\u5C31\u53EA\u6709\u5931\u53BB\u7126\u70B9\u65F6\u4F1A\u5173\u95ED\n *      type: Boolean\n *      default: true\n * single \u552F\u4E00\u5C55\u5F00 \u5F53\u9009\u62E9\u591A\u4E2A\u4E0B\u62C9\u6846\u65F6 \u53EF\u8BBE\u7F6E\u5F53\u524D\u4E0B\u62C9\u6846\u662F\u5426\u5728\u9009\u62E9\u53E6\u4E00\u4E2A\u65F6\u5173\u95ED\n *      type: Boolean\n *      default: true\n * placeholder \u672A\u9009\u62E9\u65F6\u4E0B\u62C9\u6846\u4E2D\u7684\u63D0\u793A\n *      type: String\n *      default: \'\'\n */ \n<mxl-select :options="options" v-model="data" :more="more" :autoClickHide="true" :single="true" placeholder="hi"></mxl-select>'
            };
        }
    }
};

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("dl", [
    _c(
      "dt",
      [
        _vm._v("组件名\n            "),
        _c("mxl-emotion-text", [_vm._v("mxl-select")])
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
                _c("mxl-select", {
                  attrs: {
                    options: _vm.options,
                    more: _vm.more,
                    autoClickHide: true,
                    single: true,
                    placeholder: "hi"
                  },
                  model: {
                    value: _vm.data,
                    callback: function($$v) {
                      _vm.data = $$v
                    },
                    expression: "data"
                  }
                }),
                _vm._v(" "),
                _c(
                  "mxl-btn",
                  {
                    on: {
                      click: function($event) {
                        _vm.more = !_vm.more
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.more ? "想单选" : "想多选"))]
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
                  { attrs: { navs: ["js", "template"] } },
                  [
                    _c("mxl-highlight", { attrs: { type: "javascript" } }, [
                      _vm._v(
                        "export default {\n    data () {\n        return {\n            data: " +
                          _vm._s(
                            _vm.data.toString() ? _vm.data.toString() : "''"
                          ) +
                          ",\n            options: [\n                {label: 'option1', value: 1},\n                {label: 'option2', value: 2},\n                {label: 'option3', value: 3},\n                {label: 'option4', value: 4},\n                {label: 'option5', value: 5}\n            ],\n            more: " +
                          _vm._s(_vm.more) +
                          "\n        }\n    }\n}"
                      )
                    ]),
                    _vm._v(" "),
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
    return _c("dd", [_c("p", { staticClass: "mb-0" }, [_vm._v("下拉.")])])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-9127fb5a", module.exports)
  }
}

/***/ })

});