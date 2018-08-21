webpackJsonp([6],{

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(565)
/* template */
var __vue_template__ = __webpack_require__(566)
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
Component.options.__file = "src/pages/lib/loading.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7de7e844", Component.options)
  } else {
    hotAPI.reload("data-v-7de7e844", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 565:
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
            test: true,
            block: true
        };
    },

    computed: {
        template: function template() {
            return {
                demo1: "<mxl-loading v-model=\"test\" ref=\"loading :block=\"block\" size=\"xs\"hi~</mxl-loading>\n<mxl-btn-group>\n    <mxl-btn @click=\"test = true\">\u5F00\u59CB(v-model)</mxl-btn>\n    <mxl-btn @click=\"test = false\">\u505C\u6B62(v-model)</mxl-btn>\n    <mxl-btn @click=\"() => $refs.loading.show()\">\u5F00\u59CB - \u65B9\u6CD5</mxl-btn>\n    <mxl-btn @click=\"() => $refs.loading.hide()\">\u505C\u6B62 - \u65B9\u6CD5</mxl-btn>\n    <mxl-btn @click=\"toggleView\">\u5207\u6362\u884C\u5185 \u53CA \u5757</mxl-btn>\n</mxl-btn-group>",
                demo2: "<mxl-loading ref=\"loading\">hi~</mxl-loading>\n<mxl-btn-group>\n    <mxl-btn @click=\"testLoading\">\u4E94\u79D2\u540E\u5F39\u51FA\u6846 \u5728\u6B64\u6B21\u671F\u95F4loading</mxl-btn>\n</mxl-btn-group>"
            };
        }
    },
    methods: {
        testLoading: function testLoading() {
            this.$refs.loading2.wait(function () {
                return new Promise(function (ok) {
                    setTimeout(function () {
                        alert(1);
                        ok();
                    }, 5000);
                });
            });
        },
        toggleView: function toggleView() {
            this.block = !this.block;
        }
    }
};

/***/ }),

/***/ 566:
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
        _c("mxl-emotion-text", [_vm._v("mxl-loading")])
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
              "mxl-loading",
              {
                ref: "loading",
                attrs: { block: _vm.block, size: "xs" },
                model: {
                  value: _vm.test,
                  callback: function($$v) {
                    _vm.test = $$v
                  },
                  expression: "test"
                }
              },
              [_vm._v("hi~")]
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
                        _vm.test = true
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
                        _vm.test = false
                      }
                    }
                  },
                  [_vm._v("停止(v-model)")]
                ),
                _vm._v(" "),
                _c(
                  "mxl-btn",
                  {
                    on: {
                      click: function() {
                        return _vm.$refs.loading.show()
                      }
                    }
                  },
                  [_vm._v("开始 - 方法")]
                ),
                _vm._v(" "),
                _c(
                  "mxl-btn",
                  {
                    on: {
                      click: function() {
                        return _vm.$refs.loading.hide()
                      }
                    }
                  },
                  [_vm._v("停止 - 方法")]
                ),
                _vm._v(" "),
                _c("mxl-btn", { on: { click: _vm.toggleView } }, [
                  _vm._v("切换行内 及 块")
                ])
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
                        "export default {\n    data () {\n        return {\n            test: true,\n            block: true\n        }\n    },\n    methods: {\n        toggleView(){\n            this.block = !this.block;\n        }\n    }\n}"
                      )
                    ]),
                    _vm._v(" "),
                    _c("mxl-highlight", { attrs: { type: "javascript" } }, [
                      _vm._v(_vm._s(_vm.template.demo1))
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "mxl-list-in-line",
                  [
                    _c("span", [_vm._v("大小设置: ")]),
                    _vm._v(" "),
                    _vm._l(["xs", "sm", "md", "lg"], function(item) {
                      return _c("mxl-emotion-text", { key: item }, [
                        _vm._v(_vm._s(item))
                      ])
                    })
                  ],
                  2
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
    _c("dt", [_vm._v("高级用法")]),
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
                _c("mxl-loading", { ref: "loading2" }, [_vm._v("hi~")]),
                _vm._v(" "),
                _c(
                  "mxl-btn-group",
                  [
                    _c("mxl-btn", { on: { click: _vm.testLoading } }, [
                      _vm._v("五秒后弹出框 在此次期间loading")
                    ])
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
                  { attrs: { navs: ["js", "template"] } },
                  [
                    _c("mxl-highlight", { attrs: { type: "javascript" } }, [
                      _vm._v(
                        "export default {\n    methods: {\n        async testLoading(){\n            let resolveData = await this.$refs.loading.wait(() => {\n                return new Promise(ok => {\n                    setTimeout(() => {\n                        alert(1);\n                        /* * 可以resolve数据返回, */\n                        ok();\n                    }, 5000);\n                });\n            });\n        }\n    }\n}"
                      )
                    ]),
                    _vm._v(" "),
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
    return _c("dd", [_c("p", { staticClass: "mb-0" }, [_vm._v("等待.")])])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-7de7e844", module.exports)
  }
}

/***/ })

});