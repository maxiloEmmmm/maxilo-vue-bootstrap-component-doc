webpackJsonp([20],{525:function(t,e,n){var r=n(0)(n(579),n(580),!1,null,null,null);t.exports=r.exports},579:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{template:function(){return{demo1:'<mxl-container :groups="4">\n    <span v-for="i in 50" :key="i">{{ `container-item-${i}` }}</span>\n</mxl-container>'}}}}},580:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dl",[n("dt",[t._v("组件名\n        "),n("mxl-emotion-text",[t._v("mxl-container")])],1),t._v(" "),t._m(0),t._v(" "),n("dt",[t._v("基本用法")]),t._v(" "),n("dd",[n("mxl-card",[n("mxl-alert",[t._v("拖动窗口查看自适应效果.")]),t._v(" "),n("mxl-container",{attrs:{groups:4}},t._l(50,function(e){return n("span",{key:e},[t._v(t._s("container-item-"+e))])})),t._v(" "),n("mxl-alert",{attrs:{type:"danger"}},[t._v("分组数<=12")]),t._v(" "),n("mxl-list-group",[n("mxl-tab",{attrs:{navs:["template"]}},[n("mxl-highlight",{attrs:{type:"javascript"}},[t._v(t._s(t.template.demo1))])],1)],1)],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("dd",[e("p",{staticClass:"mb-0"},[this._v("自适应容器, 内容自动分组.")])])}]}}});