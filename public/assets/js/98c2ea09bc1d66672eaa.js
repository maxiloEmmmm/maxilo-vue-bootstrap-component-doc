webpackJsonp([30],{543:function(a,e,l){var t=l(0)(l(614),l(615),!1,null,null,null);a.exports=t.exports},614:function(a,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{hi:"",data:[{label:"无子节点",value:1},{label:"有子节点",value:2,hasChild:1,childs:[{label:"第二级 - 无子节点",value:3},{label:"第二级 - 有子节点",value:4,hasChild:1,childs:[{label:"第三级 - 无子节点",value:5}]}]}]}},computed:{template:function(){return{demo1:'\n/**\n * data 数据\n *      default: [],\n *      type: Array\n */\n<mxl-cascade :data="data" v-model="hi">hi</mxl-cascade>'}}}}},615:function(a,e){a.exports={render:function(){var a=this,e=a.$createElement,l=a._self._c||e;return l("dl",[l("dt",[a._v("组件名\n            "),l("mxl-emotion-text",[a._v("mxl-cascade")])],1),a._v(" "),a._m(0),a._v(" "),l("dt",[a._v("基本用法")]),a._v(" "),l("dd",[l("mxl-card",[l("mxl-list-in-line",[l("mxl-cascade",{attrs:{data:a.data},model:{value:a.hi,callback:function(e){a.hi=e},expression:"hi"}},[a._v("hi")])],1),a._v(" "),l("mxl-list-group",[l("mxl-tab",{attrs:{navs:["template","js"]}},[l("mxl-highlight",{attrs:{type:"javascript"}},[a._v(a._s(a.template.demo1))]),a._v(" "),l("mxl-highlight",{attrs:{type:"javascript"}},[a._v("\nexport default {\n    data () {\n        return {\n            hi: '',\n            data: [\n                {label: '无子节点', value: 1},\n                {label: '有子节点', value: 2, hasChild: 1, childs: [\n                    {label: '第二级 - 无子节点', value: 3},\n                    {label: '第二级 - 有子节点', value: 4, hasChild: 1, childs: [\n                        {label: '第三级 - 无子节点', value: 5}\n                    ]},\n                ]}\n            ]\n        }\n    }\n}\n")])],1)],1)],1)],1),a._v(" "),l("dt",[a._v("复杂及异步获取")]),a._v(" "),l("dd",{directives:[{name:"mxl-loading",rawName:"v-mxl-loading:girl",value:!0,expression:"true",arg:"girl"}],staticStyle:{width:"100%",height:"400px"},attrs:{"mxl-loading-title":"制作中"}})])},staticRenderFns:[function(){var a=this.$createElement,e=this._self._c||a;return e("dd",[e("p",{staticClass:"mb-0"},[this._v("联动.")])])}]}}});