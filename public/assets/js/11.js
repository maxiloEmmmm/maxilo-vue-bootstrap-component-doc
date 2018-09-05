webpackJsonp([11],{

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(595)
/* template */
var __vue_template__ = __webpack_require__(596)
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
Component.options.__file = "src/pages/lib/loading-block.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b9b17de", Component.options)
  } else {
    hotAPI.reload("data-v-1b9b17de", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 595:
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

exports.default = {
    data: function data() {
        return {
            hi: true
        };
    },

    computed: {
        template: function template() {
            return {
                demo1: "\n/**\n * \u76D1\u542C\u4E00\u4E2A\u53D8\u91CF\u63A7\u5236loading\n * \u652F\u6301\n *  v-mxl-loading:girl\n *  v-mxl-loading:w10\n *  v-mxl-loading:build\n *  v-mxl-loading   \n */\n<mxl-form-container v-mxl-loading:girl=\"hi\">\n    <mxl-input v-for=\"i in 5\" :key=\"i\">{{ i }}</mxl-input>\n</mxl-form-container>"
            };
        }
    }
};

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("dl", [
    _c(
      "dt",
      [
        _vm._v("指令名 (!!!注意这是vue指令 不是组件)\n            "),
        _c("mxl-emotion-text", [_vm._v("v-mxl-loading(:.+)?")])
      ],
      1
    ),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("dt", [_vm._v("依附于父级元素")]),
    _vm._v(" "),
    _c(
      "dd",
      [
        _c(
          "mxl-card",
          [
            _c(
              "mxl-form-container",
              {
                directives: [
                  {
                    name: "mxl-loading",
                    rawName: "v-mxl-loading:girl",
                    value: _vm.hi,
                    expression: "hi",
                    arg: "girl"
                  }
                ]
              },
              _vm._l(5, function(i) {
                return _c("mxl-input", { key: i }, [_vm._v(_vm._s(i))])
              })
            ),
            _vm._v(" "),
            _c(
              "mxl-btn-group",
              [
                _c(
                  "mxl-btn",
                  {
                    on: {
                      click: function($event) {
                        _vm.hi = true
                      }
                    }
                  },
                  [_vm._v("开始(v-model)")]
                ),
                _vm._v(" "),
                _c(
                  "mxl-btn",
                  {
                    on: {
                      click: function($event) {
                        _vm.hi = false
                      }
                    }
                  },
                  [_vm._v("停止(v-model)")]
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
                        "export default {\n    data () {\n        return {\n            hi: true,\n        }\n    }\n}"
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
    return _c("dd", [_c("p", { staticClass: "mb-0" }, [_vm._v("等待块.")])])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-1b9b17de", module.exports)
  }
}

/***/ })

});