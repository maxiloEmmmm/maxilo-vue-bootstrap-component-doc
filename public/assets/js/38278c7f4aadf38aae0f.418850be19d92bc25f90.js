webpackJsonp([32],{544:function(t,e,l){var n=l(0)(l(619),l(620),!1,null,null,null);t.exports=n.exports},619:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{group:2,groupItem:[]}},mounted:function(){for(var t=1;t<=4;t++)this.groupItem.push({label:t,value:t})},computed:{template:function(){return{demo1:'\n/**\n * data 数据\n *      default: [],\n *      type: Array\n */\n<mxl-cascade :data="data" v-model="hi">hi</mxl-cascade>'}}}}},620:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("dl",[l("dt",[t._v("组件名\n            "),l("mxl-emotion-text",[t._v("mxl-form-container")])],1),t._v(" "),t._m(0),t._v(" "),l("dt",[t._v("基本用法")]),t._v(" "),l("dd",[l("mxl-card",[l("mxl-list-in-line",[l("span",[t._v("每行表单数")]),t._v(" "),l("mxl-select",{attrs:{options:t.groupItem},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}})],1),t._v(" "),l("mxl-form-container",{attrs:{groups:t.group}},t._l(12,function(e){return l("mxl-input",{key:e},[t._v("输入框 - "+t._s(e))])})),t._v(" "),l("mxl-list-group",[l("mxl-tab",{attrs:{navs:["template","js"]}},[l("mxl-highlight",{attrs:{type:"javascript"}},[t._v(t._s(t.template.demo1))]),t._v(" "),l("mxl-highlight",{attrs:{type:"javascript"}},[t._v("\nexport default {\n    data () {\n        return {\n            hi: '',\n            data: [\n                {label: '无子节点', value: 1},\n                {label: '有子节点', value: 2, hasChild: 1, childs: [\n                    {label: '第二级 - 无子节点', value: 3},\n                    {label: '第二级 - 有子节点', value: 4, hasChild: 1, childs: [\n                        {label: '第三级 - 无子节点', value: 5}\n                    ]},\n                ]}\n            ]\n        }\n    }\n}\n")])],1)],1)],1)],1),t._v(" "),l("dt",[t._v("复杂及异步获取")]),t._v(" "),l("dd",{directives:[{name:"mxl-loading",rawName:"v-mxl-loading:girl",value:!0,expression:"true",arg:"girl"}],staticStyle:{width:"100%",height:"400px"},attrs:{"mxl-loading-title":"制作中"}})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("dd",[e("p",{staticClass:"mb-0"},[this._v("表单容器.")])])}]}}});