webpackJsonp([18],{

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(536)
/* template */
var __vue_template__ = __webpack_require__(537)
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
Component.options.__file = "src/pages/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-57509004", Component.options)
  } else {
    hotAPI.reload("data-v-57509004", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 536:
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

exports.default = {
    data: function data() {
        return {
            assets: {
                menus: []
            },
            current: '',
            active: true
        };
    },
    mounted: function mounted() {
        this.initMenu();
    },

    methods: {
        initMenu: function initMenu() {
            this.$set(this.assets, 'menus', [{ title: 'Data-Dispaly', href: '#', hasChild: 1, children: [{ title: '表格', href: '/data/table' }] }, { title: 'Layout', href: '#', hasChild: 1, children: [{ title: '小东西', href: '#', hasChild: 1, children: [{ title: '行', href: '/layout/row' }, { title: '列', href: '/layout/col' }, { title: '多列', href: '/layout/cols' }, { title: '一行一列', href: '/layout/rowcol' }, { title: '无限极', href: '/layout/hierarchy' }] }, { title: '卡片', href: '/layout/card' }, { title: '列表组', href: '/layout/listGroup' }, { title: '行内组', href: '/layout/listInLine' }, { title: '无限箱子', href: '/layout/box' }, { title: '自适应容器', href: '/layout/container' }] }, { title: 'Lib', href: '#', hasChild: 1, children: [{ title: '警告', href: '/lib/alert' }, { title: '包裹着文字~', href: '/lib/emotion-text' }, { title: '等待', href: '/lib/loading' }, { title: '弹出层', href: '/lib/modal' }] }, { title: 'Form', href: '#', hasChild: 1, children: [{ title: '输入框', href: '/form/input' }, { title: '下拉', href: '/form/select' }, { title: '按钮', href: '/form/btn' }, { title: '按钮组', href: '/form/btn-group' }] }]);
        },
        getInfo: function getInfo(d) {
            this.current = d.href;
        }
    }
};

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container-fluid" },
    [
      _c(
        "mxl-row",
        [
          _c(
            "mxl-col",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.active,
                  expression: "active"
                }
              ],
              staticClass: "border-right border-light shadow-sm",
              staticStyle: { height: "100vh" },
              attrs: { size: 2, layoutModel: "xs" }
            },
            [
              _c("mxl-tree", {
                attrs: { data: _vm.assets.menus, spreadLevel: 2 },
                on: { touch: _vm.getInfo }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "mxl-col",
            { attrs: { size: _vm.active ? 10 : 12, layoutModel: "xs" } },
            [
              _c(
                "mxl-btn",
                {
                  staticClass: "mt-1",
                  on: {
                    click: function($event) {
                      _vm.active = !_vm.active
                    }
                  }
                },
                [_vm._v(" " + _vm._s(_vm.active ? "隐藏" : "显示"))]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "dropdown-divider shadow-sm" }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "embed-responsive embed-responsive-16by9",
                  staticStyle: { height: "90vh" }
                },
                [
                  _c("iframe", {
                    staticClass: "embed-responsive-item",
                    attrs: { src: _vm.current }
                  })
                ]
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-57509004", module.exports)
  }
}

/***/ })

});