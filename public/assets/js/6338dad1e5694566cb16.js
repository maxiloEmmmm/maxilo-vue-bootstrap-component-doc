webpackJsonp([37],{521:function(t,e,n){var l=n(0)(n(571),n(572),!1,null,null,null);t.exports=l.exports},571:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=n(106);e.default={data:function(){return{code:{template:{demo1:'\n/**\n * ths 表头\n *      type: Array\n *      default: Array(0)\n * data 数据\n *      type: Array\n *      default: Array(0)\n * toolColWidth 工具列(第一列)宽度占比\n * useCheck\n *      type: Boolean\n *      default: false\n */\n<mxl-table :ths="ths" :data="ds" toolColWidth="10%" :useCheck="true">\n    <template slot="indexSlot" slot-scope="props">\n        {{ props.index + 1 }}\n    </template>\n    <template slot="sexSlot" slot-scope="props">\n        \x3c!-- \n            props.view 当前行的数据集合\n            props.th 表头配置集合 也就是传入的ths\n            props.index 当前行索引\n            props.thIndex 当前列索引(隐藏列不存在)\n        --\x3e \n        {{ [\'未知\', \'男\', \'女\'][props.view.sex] }}\n    </template>\n    <template slot="opearSlot" slot-scope="props">\n        <mxl-btn-group>\n            <mxl-btn @click="doEdit(props)">修改</mxl-btn>\n            <mxl-btn @click="doInfo(props)">详情</mxl-btn>\n        </mxl-btn-group>\n    </template>\n</mxl-table>',demo2:'\n/**\n * url 接口地址\n *      type: String\n *      default: \'\'\n * listItemSize 每页显示条数\n *      type: Number\n *      default: 3\n * async 详见async模块\n * init 初始化表格\n *      表格加载后若存在api接口会立即请求, 但有时候接口地址为异步获取或为具体操作动态设定这时候可以设定为false, 从而取消初始化,\n *      待api确定后, 手动 通过ref 调用refresh 拉取数据.\n */\n<mxl-table :ths="ths.demo1" :url="api.LIST" :listItemSize="10" :async="async" :init="true" :useCheck="true">\n    <template slot="sexSlot" slot-scope="props">\n        {{ [\'未知\', \'男\', \'女\'][props.view.sex] }}\n    </template>\n</mxl-table>'}},ds:{demo1:[{id:1,username:"hi",age:12,sex:1},{id:2,username:"xi",age:50,sex:2},{id:3,username:"ha",age:25,sex:0}]},api:{LIST:l.DATA.TABLE+"/1"},async:{responseFormat:function(t){return t.data.data}}}},computed:{ths:function(){return{demo1:[{field:"index",title:"索引",tdSlot:"indexSlot"},{field:"id",title:"ID",sort:!0},{field:"username",title:"用户名",width:"10%",align:"left"},{field:"age",title:"年龄",hide:!0},{field:"sex",title:"性别",tdSlot:"sexSlot"},{title:"操作",tdSlot:"opearSlot"}],demo2:[{field:"id",title:"ID"},{field:"username",title:"用户名"},{field:"age",title:"年龄"},{field:"sex",title:"性别",tdSlot:"sexSlot"}]}}},methods:{doEdit:function(t){this.$utils.diy.alert.base("修改操作呢, 当前数据请见console"),console.log(t)},doInfo:function(t){this.$utils.diy.alert.base("详情操作呢, 当前数据请见console"),console.log(t)}}}},572:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dl",[n("dt",[t._v("组件名 "),n("mxl-emotion-text",[t._v("mxl-table")])],1),t._v(" "),t._m(0),t._v(" "),n("dt",[t._v("基本用法")]),t._v(" "),n("dd",[n("div",{staticClass:"card",staticStyle:{}},[n("div",{staticClass:"card-body"},[n("p",{staticClass:"card-text"},[n("mxl-table",{attrs:{ths:t.ths.demo1,data:t.ds.demo1,toolColWidth:"10%",useCheck:!0},scopedSlots:t._u([{key:"indexSlot",fn:function(e){return[t._v("\n                                "+t._s(e.index+1)+"\n                            ")]}},{key:"sexSlot",fn:function(e){return[t._v("\n                                "+t._s(["未知","男","女"][e.view.sex])+"\n                            ")]}},{key:"opearSlot",fn:function(e){return[n("mxl-btn-group",[n("mxl-btn",{on:{click:function(n){t.doEdit(e)}}},[t._v("修改")]),t._v(" "),n("mxl-btn",{on:{click:function(n){t.doInfo(e)}}},[t._v("详情")])],1)]}}])})],1),t._v(" "),n("p",[n("mxl-tab",{attrs:{navs:["js","template"]}},[n("mxl-highlight",{attrs:{type:"javascript"}},[t._v("export default {\n    data(){\n        return {\n            ds: [\n                {id: 1, username: 'hi', age: 12, sex: 1},\n                {id: 2, username: 'xi', age: 50, sex: 2},\n                {id: 3, username: 'ha', age: 25, sex: 0}\n            ]\n        };\n    },\n    computed: {\n        ths(){\n            return [\n                /**\n                 * field 数据中对应的字段\n                 * title 标题文字\n                 * sort  字段排序\n                 *      default: false  \n                 * sortHandler 排序钩子\n                 *  默认采用逻辑表达式判断, 可传入自定义钩子排序\n                 *  ** 只作用本地数据\n                 *      sortHandler: (sort) => {\n                 *          sort[0] 排序字段,也就是当前field\n                 *          sort[1] 排序方式 desc / asc\n                 *          return (a, b) => {\n                 *              let r = a[sort[0]] > b[sort[0]];\n                 *              return sort[1] == 'asc' ? !!r : !r;\n                 *          }\n                 *      }\n                 * hide 是否隐藏\n                 *      default: false\n                 * tdSlot 列槽名 用于手动处理数据\n                 * width 列宽\n                 *      css计量单位即可\n                 * align 对其\n                 *      left / right / center(default)\n                 */\n                {field: 'index', title: '索引', tdSlot: 'indexSlot'},\n                {field: 'id', title: 'ID', sort: true},\n                {field: 'username', title: '用户名', width: '10%', align: 'left'},\n                {field: 'age', title: '年龄', hide: true},\n                {field: 'sex', title: '性别', tdSlot: 'sexSlot'},\n                {title: '操作', tdSlot: 'opearSlot'}\n            ];\n        }\n    },\n    methods: {\n        doEdit(d){\n            this.$utils.diy.alert.base('修改操作呢, 当前数据请见console');\n            console.log(d);\n        },\n        doInfo(d){\n            this.$utils.diy.alert.base('详情操作呢, 当前数据请见console');\n            console.log(d);\n        }\n    }\n}")]),t._v(" "),n("mxl-highlight",{attrs:{type:"javascript"}},[t._v(t._s(t.code.template.demo1))])],1)],1)])])]),t._v(" "),n("dt",[t._v("异步获取数据")]),t._v(" "),n("dd",[n("div",{staticClass:"card",staticStyle:{}},[n("div",{staticClass:"card-body"},[n("p",{staticClass:"card-text"},[n("mxl-table",{attrs:{ths:t.ths.demo2,url:t.api.LIST,async:t.async,listItemSize:10,init:!0,useCheck:!0},scopedSlots:t._u([{key:"sexSlot",fn:function(e){return[t._v("\n                                "+t._s(["未知","男","女"][e.view.sex])+"\n                            ")]}}])})],1),t._v(" "),n("p",[n("mxl-tab",{attrs:{navs:["js","template"]}},[n("mxl-highlight",{attrs:{type:"javascript"}},[t._v("export default {\n    data(){\n        return {\n            /* 数据源于mock.js模拟拦截, mock模板请异步console */\n            api: {\n                LIST: DATA.TABLE + '/1'\n            },\n            async: {\n                /* 接口需返回给组件数据对象 包含rows数据 及 total总量 */\n                /* 若数据结构不满足则使用responseFormat进行数据格式化 */\n                responseFormat(response){\n                    return response.data.data;\n                }\n            }\n        };\n    },\n    computed: {\n        ths(){\n            return [\n                {field: 'id', title: 'ID'},\n                {field: 'username', title: '用户名'},\n                {field: 'age', title: '年龄'},\n                {field: 'sex', title: '性别', tdSlot: 'sexSlot'}\n            ];\n        }\n    }\n}")]),t._v(" "),n("mxl-highlight",{attrs:{type:"javascript"}},[t._v(t._s(t.code.template.demo2))])],1)],1)])])]),t._v(" "),n("dt",[t._v("方法")]),t._v(" "),n("dd",[n("mxl-list-group",[n("pre",[t._v("                    getCheckData\n                    /* 获取勾选数据接口\n                    * [{id: 1, n: 'x'}, {id: 2, n: 'x2'}]\n                    * getCheckData('id') || getCheckData(['id']) -> [{id: 1}, {id: 2}]\n                    * getCheckData('id', true) || getCheckData(['id'], true) -> [1, 2]\n                    */")]),t._v(" "),n("pre",[t._v("                    checkAll\n                    /*全选*/\n                    checkNone\n                    /*清空*/\n                    checkToggle\n                    /*反选*/")])])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("dd",[e("p",{staticClass:"mb-0"},[this._v("表格数据展示, 支持自适应.")])])}]}}});