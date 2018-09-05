webpackJsonp([36],{

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(625)
/* template */
var __vue_template__ = __webpack_require__(626)
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
Component.options.__file = "src/pages/example/dashboard/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-005d151e", Component.options)
  } else {
    hotAPI.reload("data-v-005d151e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//

exports.default = {
    data: function data() {
        return {
            pages: [{
                title: '测试work-space',
                href: '/example/dashboard/work-space'
            }],
            menus: [{
                title: 'Data-Dispaly',
                href: '#',
                hasChild: 1,
                children: [{
                    title: '表格',
                    href: '/data/table'
                }]
            }, {
                title: 'Layout',
                href: '#',
                hasChild: 1,
                children: [{
                    title: '小东西',
                    href: '#',
                    hasChild: 1,
                    children: [{
                        title: '行',
                        href: '/layout/row'
                    }, {
                        title: '列',
                        href: '/layout/col'
                    }, {
                        title: '多列',
                        href: '/layout/cols'
                    }, {
                        title: '一行一列',
                        href: '/layout/rowcol'
                    }, {
                        title: '无限极',
                        href: '/layout/hierarchy'
                    }]
                }, {
                    title: '列表组',
                    href: '/layout/listGroup'
                }, {
                    title: '行内组',
                    href: '/layout/listInLine'
                }, {
                    title: '无限箱子',
                    href: '/layout/box'
                }, {
                    title: '自适应容器',
                    href: '/layout/container'
                }]
            }, {
                title: 'Lib',
                href: '#',
                hasChild: 1,
                children: [{
                    title: '警告',
                    href: '/lib/alert'
                }, {
                    title: '包裹着文字~',
                    href: '/lib/emotion-text'
                }, {
                    title: '等待',
                    href: '#',
                    hasChild: 1,
                    children: [{
                        title: '小一点',
                        href: '/lib/loading'
                    }, {
                        title: '块',
                        href: '/lib/loading/block'
                    }]
                }, {
                    title: '弹出层',
                    href: '/lib/modal'
                }, {
                    title: '选项卡',
                    href: '/lib/tab'
                }, {
                    title: '卡片',
                    href: '/lib/card'
                }, {
                    title: '后台组件(完善中)',
                    href: '/lib/dashboard'
                }]
            }, {
                title: 'Form',
                href: '#',
                hasChild: 1,
                children: [{
                    title: '输入框',
                    href: '/form/input'
                }, {
                    title: '下拉',
                    href: '/form/select'
                }, {
                    title: '下拉菜单',
                    href: '/form/drop-menu'
                }, {
                    title: '按钮',
                    href: '/form/btn'
                }, {
                    title: '按钮组',
                    href: '/form/btn-group'
                }, {
                    title: '日期',
                    href: '/form/date'
                }, {
                    title: '编辑器(第三方 - ckeditor5)',
                    href: '/form/editor'
                }, {
                    title: '开关',
                    href: '/form/switch'
                }, {
                    title: '联动',
                    href: '/form/cascade'
                }, {
                    title: '表单容器',
                    href: '/form/container'
                }, {
                    title: '输入组',
                    href: '/form/input-group'
                }]
            }]
        };
    }
};

/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("mxl-dashboard", {
    attrs: { items: _vm.menus, initPage: _vm.pages }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-005d151e", module.exports)
  }
}

/***/ })

});