webpackJsonp([19],{515:function(t,e,i){var l=i(0)(i(553),i(554),!1,null,null,null);t.exports=l.exports},553:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{assets:{menus:[]},current:"",active:!0}},mounted:function(){this.initMenu()},methods:{initMenu:function(){this.$set(this.assets,"menus",[{title:"Data-Dispaly",href:"#",hasChild:1,children:[{title:"表格",href:"/data/table"}]},{title:"Layout",href:"#",hasChild:1,children:[{title:"小东西",href:"#",hasChild:1,children:[{title:"行",href:"/layout/row"},{title:"列",href:"/layout/col"},{title:"多列",href:"/layout/cols"},{title:"一行一列",href:"/layout/rowcol"},{title:"无限极",href:"/layout/hierarchy"}]},{title:"卡片",href:"/layout/card"},{title:"列表组",href:"/layout/listGroup"},{title:"行内组",href:"/layout/listInLine"},{title:"无限箱子",href:"/layout/box"},{title:"自适应容器",href:"/layout/container"}]},{title:"Lib",href:"#",hasChild:1,children:[{title:"警告",href:"/lib/alert"},{title:"包裹着文字~",href:"/lib/emotion-text"},{title:"等待",href:"#",hasChild:1,children:[{title:"小一点",href:"/lib/loading"},{title:"块",href:"/lib/loading/block"}]},{title:"弹出层",href:"/lib/modal"}]},{title:"Form",href:"#",hasChild:1,children:[{title:"输入框",href:"/form/input"},{title:"下拉",href:"/form/select"},{title:"按钮",href:"/form/btn"},{title:"按钮组",href:"/form/btn-group"},{title:"日期",href:"/form/date"},{title:"编辑器(第三方 - ckeditor5)",href:"/form/editor"},{title:"开关",href:"/form/switch"}]}])},getInfo:function(t){this.current=t.href}}}},554:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-fluid"},[i("mxl-row",[i("mxl-col",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"border-right border-light shadow-sm",staticStyle:{height:"100vh"},attrs:{size:2,layoutModel:"xs"}},[i("mxl-tree",{attrs:{data:t.assets.menus,spreadLevel:2},on:{touch:t.getInfo}})],1),t._v(" "),i("mxl-col",{attrs:{size:t.active?10:12,layoutModel:"xs"}},[i("mxl-list-in-line",[i("mxl-btn",{staticClass:"mt-1",on:{click:function(e){t.active=!t.active}}},[t._v(" "+t._s(t.active?"隐藏":"显示"))]),t._v(" "),i("mxl-emotion-text",[i("a",{staticStyle:{color:"#fff"},attrs:{target:"black",href:"https://www.npmjs.com/package/maxilo-vue"}},[t._v("核心版本: 1.2.79")])]),t._v(" "),i("mxl-emotion-text",[i("a",{staticStyle:{color:"#fff"},attrs:{target:"black",href:"https://www.npmjs.com/package/maxilo-vue-bootstrap-component"}},[t._v("组件版本: 1.0.73")])])],1),t._v(" "),i("div",{staticClass:"dropdown-divider shadow-sm"}),t._v(" "),i("div",{staticClass:"embed-responsive embed-responsive-16by9",staticStyle:{height:"90vh"}},[i("iframe",{staticClass:"embed-responsive-item",attrs:{src:t.current}})])],1)],1)],1)},staticRenderFns:[]}}});