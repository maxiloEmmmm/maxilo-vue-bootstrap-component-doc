webpackJsonp([11],{535:function(n,t,l){var e=l(0)(l(598),l(599),!1,null,null,null);n.exports=e.exports},598:function(n,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{hi:!0}},computed:{template:function(){return{demo1:'\n/**\n * 监听一个变量控制loading\n * 支持\n *  v-mxl-loading:girl\n *  v-mxl-loading:w10\n *  v-mxl-loading:build\n *  v-mxl-loading   \n */\n<mxl-form-container v-mxl-loading:girl="hi">\n    <mxl-input v-for="i in 5" :key="i">{{ i }}</mxl-input>\n</mxl-form-container>'}}}}},599:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,l=n._self._c||t;return l("dl",[l("dt",[n._v("指令名 (!!!注意这是vue指令 不是组件)\n            "),l("mxl-emotion-text",[n._v("v-mxl-loading(:.+)?")])],1),n._v(" "),n._m(0),n._v(" "),l("dt",[n._v("依附于父级元素")]),n._v(" "),l("dd",[l("mxl-card",[l("mxl-form-container",{directives:[{name:"mxl-loading",rawName:"v-mxl-loading:girl",value:n.hi,expression:"hi",arg:"girl"}]},n._l(5,function(t){return l("mxl-input",{key:t},[n._v(n._s(t))])})),n._v(" "),l("mxl-btn-group",[l("mxl-btn",{on:{click:function(t){n.hi=!0}}},[n._v("开始(v-model)")]),n._v(" "),l("mxl-btn",{on:{click:function(t){n.hi=!1}}},[n._v("停止(v-model)")])],1),n._v(" "),l("mxl-list-group",[l("mxl-tab",{attrs:{navs:["js","template"]}},[l("mxl-highlight",{attrs:{type:"javascript"}},[n._v("export default {\n    data () {\n        return {\n            hi: true,\n        }\n    }\n}")]),n._v(" "),l("mxl-highlight",{attrs:{type:"javascript"}},[n._v(n._s(n.template.demo1))])],1)],1)],1)],1)])},staticRenderFns:[function(){var n=this.$createElement,t=this._self._c||n;return t("dd",[t("p",{staticClass:"mb-0"},[this._v("等待块.")])])}]}}});