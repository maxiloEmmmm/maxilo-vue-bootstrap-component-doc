webpackJsonp([4],{528:function(t,o,e){var n=e(0)(e(577),e(578),!1,null,null,null);t.exports=n.exports},577:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{show:!1}},computed:{template:function(){return{demo1:'\n/**\n * show 弹出层是否打开\n *      请用.sync 修饰show 属性, 否则内部自带关闭会失效\n * fullScreen 全屏显示\n *      default: true\n *      type: Boolean\n */\n<mxl-modal :show.sync="show"> \n    hi, modal.\n    <span slot="header">modal header slot</span>\n    <span slot="footer">modal footer slot</span> \n</mxl-modal>\n<mxl-btn @click="show = true">打开modal</mxl-btn>'}}}}},578:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("dl",[e("dt",[t._v("组件名\n        "),e("mxl-emotion-text",[t._v("mxl-modal")])],1),t._v(" "),t._m(0),t._v(" "),e("dt",[t._v("基本用法")]),t._v(" "),e("dd",[e("mxl-card",[e("mxl-modal",{attrs:{show:t.show},on:{"update:show":function(o){t.show=o}}},[t._v(" \n                hi, modal. \n                "),e("span",{attrs:{slot:"header"},slot:"header"},[t._v("modal header slot")]),t._v(" "),e("span",{attrs:{slot:"footer"},slot:"footer"},[t._v("modal footer slot")])]),t._v(" "),e("mxl-btn",{staticClass:"mb-2",on:{click:function(o){t.show=!0}}},[t._v("打开modal")]),t._v(" "),e("mxl-list-group",[e("mxl-tab",{attrs:{navs:["template"]}},[e("mxl-highlight",{attrs:{type:"javascript"}},[t._v(t._s(t.template.demo1))])],1)],1)],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,o=this._self._c||t;return o("dd",[o("p",{staticClass:"mb-0"},[this._v(" 弹出层.")])])}]}}});