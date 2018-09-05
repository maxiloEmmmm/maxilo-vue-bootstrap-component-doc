webpackJsonp([23],{

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(574)
/* template */
var __vue_template__ = __webpack_require__(575)
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
Component.options.__file = "src/pages/layout/box.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46d787ea", Component.options)
  } else {
    hotAPI.reload("data-v-46d787ea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 574:
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

exports.default = {
    data: function data() {
        return {
            count: 50,
            group: 10,
            groupItem: []
        };
    },
    mounted: function mounted() {
        for (var i = 5; i <= 50; i++) {
            this.groupItem.push({ label: i, value: i });
        }
    },

    computed: {
        template: function template() {
            return {
                demo1: "<mxl-box :groups=\"" + this.group + "\">\n    <span class=\"border border-primary\" v-for=\"i in count\" :key=\"i\">{{ i }}</span>\n</mxl-box>"
            };
        }
    }
};

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("dl", [
    _c(
      "dt",
      [
        _vm._v("无限箱子\n        "),
        _c("mxl-emotion-text", [_vm._v("mxl-box")])
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
                _c("span", [_vm._v("每行个数")]),
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
              "mxl-box",
              { staticClass: "mb-2", attrs: { groups: _vm.group } },
              _vm._l(_vm.count, function(i) {
                return _c(
                  "span",
                  { key: i, staticClass: "border border-primary" },
                  [_vm._v(_vm._s(i))]
                )
              })
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
    return _c("dd", [
      _c("p", { staticClass: "mb-0" }, [_vm._v("内容无限自动分组.")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-46d787ea", module.exports)
  }
}

/***/ })

});