webpackJsonp([8],{533:function(t,n,a){var e=a(0)(a(597),a(598),!1,null,null,null);t.exports=e.exports},597:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={computed:{template:function(){return{demo1:"\n/**\n * navs\n *  type: Array\n *  default: []\n *  选项卡数据\n *      字符串为选项卡名 (第一个选项卡名会切换到标签包裹着的第一个内容, 依次计算~)\n *      对象\n *          label 字符串为选项卡名\n *          pane 指定切换的选项卡名 用于多个选项卡显示同一内容\n */\n<mxl-tab :navs=\"['tab1', 'tab2', {label: 'tab3', pane: 'tab2'}]\">\n    <span>tab1's content</span>\n    <span>tab2's content</span>\n</mxl-tab>"}}}}},598:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("dl",[a("dt",[t._v("选项卡\n        "),a("mxl-emotion-text",[t._v("mxl-tab")])],1),t._v(" "),a("dt",[t._v("基本用法")]),t._v(" "),a("dd",[a("mxl-card",[a("mxl-tab",{attrs:{navs:["tab1","tab2",{label:"tab3",pane:"tab2"}]}},[a("span",[t._v("tab1's content")]),t._v(" "),a("span",[t._v("tab2's content")])]),t._v(" "),a("mxl-list-group",[a("mxl-tab",{attrs:{navs:["template"]}},[a("mxl-highlight",{attrs:{type:"javascript"}},[t._v(t._s(t.template.demo1))])],1)],1)],1)],1)])},staticRenderFns:[]}}});