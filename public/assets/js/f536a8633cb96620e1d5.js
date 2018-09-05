webpackJsonp([32],{

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(619)
/* template */
var __vue_template__ = __webpack_require__(620)
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
Component.options.__file = "src/pages/form/container.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e0eb17a", Component.options)
  } else {
    hotAPI.reload("data-v-5e0eb17a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 619:
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

exports.default = {
    data: function data() {
        return {
            group: 2,
            groupItem: []
        };
    },
    mounted: function mounted() {
        for (var i = 1; i <= 4; i++) {
            this.groupItem.push({ label: i, value: i });
        }
    },

    computed: {
        template: function template() {
            return {
                demo1: "\n/**\n * data \u6570\u636E\n *      default: [],\n *      type: Array\n */\n<mxl-cascade :data=\"data\" v-model=\"hi\">hi</mxl-cascade>"
            };
        }
    }
};

/***/ }),

/***/ 620:
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
        _c("mxl-emotion-text", [_vm._v("mxl-form-container")])
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
                _c("span", [_vm._v("每行表单数")]),
                _vm._v(" "),
                _c("mxl-select", {
                  attrs: { options: _vm.groupItem },
                  model: {
                    value: _vm.group,
                    callback: function($$v) {
                      _vm.group = $$v
                    },
                    expression: "group"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "mxl-form-container",
              { attrs: { groups: _vm.group } },
              _vm._l(12, function(i) {
                return _c("mxl-input", { key: i }, [
                  _vm._v("输入框 - " + _vm._s(i))
                ])
              })
            ),
            _vm._v(" "),
            _c(
              "mxl-list-group",
              [
                _c(
                  "mxl-tab",
                  { attrs: { navs: ["template", "js"] } },
                  [
                    _c("mxl-highlight", { attrs: { type: "javascript" } }, [
                      _vm._v(_vm._s(_vm.template.demo1))
                    ]),
                    _vm._v(" "),
                    _c("mxl-highlight", { attrs: { type: "javascript" } }, [
                      _vm._v(
                        "\nexport default {\n    data () {\n        return {\n            hi: '',\n            data: [\n                {label: '无子节点', value: 1},\n                {label: '有子节点', value: 2, hasChild: 1, childs: [\n                    {label: '第二级 - 无子节点', value: 3},\n                    {label: '第二级 - 有子节点', value: 4, hasChild: 1, childs: [\n                        {label: '第三级 - 无子节点', value: 5}\n                    ]},\n                ]}\n            ]\n        }\n    }\n}\n"
                      )
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
    _c("dt", [_vm._v("复杂及异步获取")]),
    _vm._v(" "),
    _c("dd", {
      directives: [
        {
          name: "mxl-loading",
          rawName: "v-mxl-loading:girl",
          value: true,
          expression: "true",
          arg: "girl"
        }
      ],
      staticStyle: { width: "100%", height: "400px" },
      attrs: { "mxl-loading-title": "制作中" }
    })
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("dd", [_c("p", { staticClass: "mb-0" }, [_vm._v("表单容器.")])])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-5e0eb17a", module.exports)
  }
}

/***/ })

});