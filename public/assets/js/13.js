webpackJsonp([13],{

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(601)
/* template */
var __vue_template__ = __webpack_require__(602)
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
Component.options.__file = "src/pages/lib/dashboard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b1a76294", Component.options)
  } else {
    hotAPI.reload("data-v-b1a76294", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 601:
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

exports.default = {
    computed: {
        template: function template() {
            return {
                demo1: '\n/**\n * items \u83DC\u5355\u9879\n *      default: [],\n *      type: Array\n *          href \u94FE\u63A5\n *          title \u663E\u793A\u540D\n * initPage \u521D\u59CB\u9875\u9762\n *      default: [],\n *      type: Array\n *          href \u94FE\u63A5\n *          title \u663E\u793A\u540D\n */\n<mxl-dashboard :items="menus" :initPage="pages"></mxl-dashboard>'
            };
        }
    },
    methods: {
        goDashboard: function goDashboard() {
            window.open('/example/dashboard');
        }
    }
};

/***/ }),

/***/ 602:
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
        _c("mxl-emotion-text", [_vm._v("mxl-dashboard")])
      ],
      1
    ),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c(
      "dt",
      [
        _c("mxl-alert", [
          _c("a", { attrs: { href: "#" }, on: { click: _vm.goDashboard } }, [
            _vm._v("另一个页面")
          ])
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "dd",
      [
        _c(
          "mxl-card",
          [
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
                        "export default {\n    data () {\n        return {\n            pages: [\n                {title: '测试work-space', href: '/example/dashboard/work-space'}\n            ],\n            menus: [\n                {title: 'Data-Dispaly', href: '#', hasChild: 1, children: [\n                    {title: '表格', href: '/data/table'},\n                ]},\n                {title: 'Layout', href: '#', hasChild: 1, children: [\n                    {title: '小东西', href: '#', hasChild: 1, children: [\n                        {title: '行', href: '/layout/row'},\n                        {title: '列', href: '/layout/col'},\n                        {title: '多列', href: '/layout/cols'},\n                        {title: '一行一列', href: '/layout/rowcol'},\n                        {title: '无限极', href: '/layout/hierarchy'}\n                    ]},\n                    {title: '列表组', href: '/layout/listGroup'},\n                    {title: '行内组', href: '/layout/listInLine'},\n                    {title: '无限箱子', href: '/layout/box'},\n                    {title: '自适应容器', href: '/layout/container'},\n    \n                ]},\n                {title: 'Lib', href: '#', hasChild: 1, children: [\n                    {title: '警告', href: '/lib/alert'},\n                    {title: '包裹着文字~', href: '/lib/emotion-text'},\n                    {title: '等待', href: '#', hasChild: 1, children: [\n                        {title: '小一点', href: '/lib/loading'},\n                        {title: '块', href: '/lib/loading/block'},\n                    ]},\n                    {title: '弹出层', href: '/lib/modal'},\n                    {title: '选项卡', href: '/lib/tab'},\n                    {title: '卡片', href: '/lib/card'},\n                    {title: '后台组件(完善中)', href: '/lib/dashboard'},\n                ]},\n                {title: 'Form', href: '#', hasChild: 1, children: [\n                    {title: '输入框', href: '/form/input'},\n                    {title: '下拉', href: '/form/select'},\n                    {title: '下拉菜单', href: '/form/drop-menu'},\n                    {title: '按钮', href: '/form/btn'},\n                    {title: '按钮组', href: '/form/btn-group'},\n                    {title: '日期', href: '/form/date'},\n                    {title: '编辑器(第三方 - ckeditor5)', href: '/form/editor'},\n                    {title: '开关', href: '/form/switch'},\n                    {title: '联动', href: '/form/cascade'},\n                    {title: '表单容器', href: '/form/container'},\n                    {title: '输入组', href: '/form/input-group'}\n                ]}\n            ]\n        }\n    }\n}"
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
    return _c("dd", [_c("p", { staticClass: "mb-0" }, [_vm._v("后台.")])])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-b1a76294", module.exports)
  }
}

/***/ })

});