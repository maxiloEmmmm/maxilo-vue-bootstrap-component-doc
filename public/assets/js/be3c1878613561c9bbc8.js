webpackJsonp([18],{520:function(t,e,r){var n=r(0)(r(563),r(564),!1,null,null,null);t.exports=n.exports},563:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{count:50,group:10,groupItem:[]}},mounted:function(){for(var t=5;t<=50;t++)this.groupItem.push({label:t,value:t})},computed:{template:function(){return{demo1:'<mxl-box :groups="'+this.group+'">\n    <span class="border border-primary" v-for="i in count" :key="i">{{ i }}</span>\n</mxl-box>'}}}}},564:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("dl",[r("dt",[t._v("无限箱子\n        "),r("mxl-emotion-text",[t._v("mxl-box")])],1),t._v(" "),t._m(0),t._v(" "),r("dt",[t._v("基本用法")]),t._v(" "),r("dd",[r("mxl-card",[r("mxl-list-in-line",[r("span",[t._v("每行个数")]),t._v(" "),r("mxl-select",{attrs:{options:t.groupItem},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}})],1),t._v(" "),r("mxl-box",{staticClass:"mb-2",attrs:{groups:t.group}},t._l(t.count,function(e){return r("span",{key:e,staticClass:"border border-primary"},[t._v(t._s(e))])})),t._v(" "),r("mxl-list-group",[r("mxl-tab",{attrs:{navs:["template"]}},[r("mxl-highlight",{attrs:{type:"javascript"}},[t._v(t._s(t.template.demo1))])],1)],1)],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("dd",[e("p",{staticClass:"mb-0"},[this._v("内容无限自动分组.")])])}]}}});