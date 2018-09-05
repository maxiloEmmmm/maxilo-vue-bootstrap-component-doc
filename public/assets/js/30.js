webpackJsonp([30],{

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(623)
/* template */
var __vue_template__ = __webpack_require__(624)
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
Component.options.__file = "src/pages/form/drop-menu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-471ce714", Component.options)
  } else {
    hotAPI.reload("data-v-471ce714", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 623:
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

exports.default = {
    data: function data() {
        return {
            menus: [{ text: 1, fn: function fn() {
                    alert(1);
                }
            }, { text: 2, fn: function fn(val) {
                    alert(val.text);
                }
            }]
        };
    },

    computed: {
        template: function template() {
            return {
                demo1: "\n/**\n * menus \u83DC\u5355\n *      default: [],\n *      type: Array\n *          text \u663E\u793A\n *          fn \u70B9\u51FB\u94A9\u5B50 \u4F1A\u4F20\u5165\u5F53\u524D\u83DC\u5355\u5BF9\u8C61\n *          \u5176\u4ED6\u81EA\u5B9A\u4E49\u5C5E\u6027   \n */\n<mxl-drop-menu :menus=\"menus\">\n    <i class=\"fa fa-user\"></i>\n</mxl-drop-menu>"
            };
        }
    }
};

/***/ }),

/***/ 624:
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
        _c("mxl-emotion-text", [_vm._v("mxl-drop-menu")])
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
                _c("mxl-drop-menu", { attrs: { menus: _vm.menus } }, [
                  _c("i", { staticClass: "fa fa-user" })
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
                  { attrs: { navs: ["template", "js"] } },
                  [
                    _c("mxl-highlight", { attrs: { type: "javascript" } }, [
                      _vm._v(_vm._s(_vm.template.demo1))
                    ]),
                    _vm._v(" "),
                    _c("mxl-highlight", { attrs: { type: "javascript" } }, [
                      _vm._v(
                        "export default {\n    data () {\n        return {\n            menus: [\n                {text: 1, fn(){alert(1)}}, \n                {text: 2, fn(val){alert(val.text)}}\n            ]\n        }\n    }\n}\n"
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
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("dd", [_c("p", { staticClass: "mb-0" }, [_vm._v("下拉菜单.")])])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-471ce714", module.exports)
  }
}

/***/ })

});