webpackJsonp([13],{538:function(t,e,n){var l=n(0)(n(604),n(605),!1,null,null,null);t.exports=l.exports},604:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{template:function(){return{demo1:'\n/**\n * items 菜单项\n *      default: [],\n *      type: Array\n *          href 链接\n *          title 显示名\n * initPage 初始页面\n *      default: [],\n *      type: Array\n *          href 链接\n *          title 显示名\n */\n<mxl-dashboard :items="menus" :initPage="pages"></mxl-dashboard>'}}},methods:{goDashboard:function(){window.open("/example/dashboard")}}}},605:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dl",[n("dt",[t._v("组件名\n            "),n("mxl-emotion-text",[t._v("mxl-dashboard")])],1),t._v(" "),t._m(0),t._v(" "),n("dt",[n("mxl-alert",[n("a",{attrs:{href:"#"},on:{click:t.goDashboard}},[t._v("另一个页面")])])],1),t._v(" "),n("dd",[n("mxl-card",[n("mxl-list-group",[n("mxl-tab",{attrs:{navs:["template","js"]}},[n("mxl-highlight",{attrs:{type:"javascript"}},[t._v(t._s(t.template.demo1))]),t._v(" "),n("mxl-highlight",{attrs:{type:"javascript"}},[t._v("export default {\n    data () {\n        return {\n            pages: [\n                {title: '测试work-space', href: '/example/dashboard/work-space'}\n            ],\n            menus: [\n                {title: 'Data-Dispaly', href: '#', hasChild: 1, children: [\n                    {title: '表格', href: '/data/table'},\n                ]},\n                {title: 'Layout', href: '#', hasChild: 1, children: [\n                    {title: '小东西', href: '#', hasChild: 1, children: [\n                        {title: '行', href: '/layout/row'},\n                        {title: '列', href: '/layout/col'},\n                        {title: '多列', href: '/layout/cols'},\n                        {title: '一行一列', href: '/layout/rowcol'},\n                        {title: '无限极', href: '/layout/hierarchy'}\n                    ]},\n                    {title: '列表组', href: '/layout/listGroup'},\n                    {title: '行内组', href: '/layout/listInLine'},\n                    {title: '无限箱子', href: '/layout/box'},\n                    {title: '自适应容器', href: '/layout/container'},\n    \n                ]},\n                {title: 'Lib', href: '#', hasChild: 1, children: [\n                    {title: '警告', href: '/lib/alert'},\n                    {title: '包裹着文字~', href: '/lib/emotion-text'},\n                    {title: '等待', href: '#', hasChild: 1, children: [\n                        {title: '小一点', href: '/lib/loading'},\n                        {title: '块', href: '/lib/loading/block'},\n                    ]},\n                    {title: '弹出层', href: '/lib/modal'},\n                    {title: '选项卡', href: '/lib/tab'},\n                    {title: '卡片', href: '/lib/card'},\n                    {title: '后台组件(完善中)', href: '/lib/dashboard'},\n                ]},\n                {title: 'Form', href: '#', hasChild: 1, children: [\n                    {title: '输入框', href: '/form/input'},\n                    {title: '下拉', href: '/form/select'},\n                    {title: '下拉菜单', href: '/form/drop-menu'},\n                    {title: '按钮', href: '/form/btn'},\n                    {title: '按钮组', href: '/form/btn-group'},\n                    {title: '日期', href: '/form/date'},\n                    {title: '编辑器(第三方 - ckeditor5)', href: '/form/editor'},\n                    {title: '开关', href: '/form/switch'},\n                    {title: '联动', href: '/form/cascade'},\n                    {title: '表单容器', href: '/form/container'},\n                    {title: '输入组', href: '/form/input-group'}\n                ]}\n            ]\n        }\n    }\n}")])],1)],1)],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("dd",[e("p",{staticClass:"mb-0"},[this._v("后台.")])])}]}}});