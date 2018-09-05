webpackJsonp([37],{

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(568)
/* template */
var __vue_template__ = __webpack_require__(569)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/data/table.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64aac62d", Component.options)
  } else {
    hotAPI.reload("data-v-64aac62d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _test = __webpack_require__(106);

exports.default = {
    data: function data() {
        return {
            code: {
                template: {
                    demo1: '\n/**\n * ths \u8868\u5934\n *      type: Array\n *      default: Array(0)\n * data \u6570\u636E\n *      type: Array\n *      default: Array(0)\n * toolColWidth \u5DE5\u5177\u5217(\u7B2C\u4E00\u5217)\u5BBD\u5EA6\u5360\u6BD4\n * useCheck\n *      type: Boolean\n *      default: false\n */\n<mxl-table :ths="ths" :data="ds" toolColWidth="10%" :useCheck="true">\n    <template slot="indexSlot" slot-scope="props">\n        {{ props.index + 1 }}\n    </template>\n    <template slot="sexSlot" slot-scope="props">\n        <!-- \n            props.view \u5F53\u524D\u884C\u7684\u6570\u636E\u96C6\u5408\n            props.th \u8868\u5934\u914D\u7F6E\u96C6\u5408 \u4E5F\u5C31\u662F\u4F20\u5165\u7684ths\n            props.index \u5F53\u524D\u884C\u7D22\u5F15\n            props.thIndex \u5F53\u524D\u5217\u7D22\u5F15(\u9690\u85CF\u5217\u4E0D\u5B58\u5728)\n        --> \n        {{ [\'\u672A\u77E5\', \'\u7537\', \'\u5973\'][props.view.sex] }}\n    </template>\n    <template slot="opearSlot" slot-scope="props">\n        <mxl-btn-group>\n            <mxl-btn @click="doEdit(props)">\u4FEE\u6539</mxl-btn>\n            <mxl-btn @click="doInfo(props)">\u8BE6\u60C5</mxl-btn>\n        </mxl-btn-group>\n    </template>\n</mxl-table>',
                    demo2: '\n/**\n * url \u63A5\u53E3\u5730\u5740\n *      type: String\n *      default: \'\'\n * listItemSize \u6BCF\u9875\u663E\u793A\u6761\u6570\n *      type: Number\n *      default: 3\n * async \u8BE6\u89C1async\u6A21\u5757\n * init \u521D\u59CB\u5316\u8868\u683C\n *      \u8868\u683C\u52A0\u8F7D\u540E\u82E5\u5B58\u5728api\u63A5\u53E3\u4F1A\u7ACB\u5373\u8BF7\u6C42, \u4F46\u6709\u65F6\u5019\u63A5\u53E3\u5730\u5740\u4E3A\u5F02\u6B65\u83B7\u53D6\u6216\u4E3A\u5177\u4F53\u64CD\u4F5C\u52A8\u6001\u8BBE\u5B9A\u8FD9\u65F6\u5019\u53EF\u4EE5\u8BBE\u5B9A\u4E3Afalse, \u4ECE\u800C\u53D6\u6D88\u521D\u59CB\u5316,\n *      \u5F85api\u786E\u5B9A\u540E, \u624B\u52A8 \u901A\u8FC7ref \u8C03\u7528refresh \u62C9\u53D6\u6570\u636E.\n */\n<mxl-table :ths="ths.demo1" :url="api.LIST" :listItemSize="10" :async="async" :init="true" :useCheck="true">\n    <template slot="sexSlot" slot-scope="props">\n        {{ [\'\u672A\u77E5\', \'\u7537\', \'\u5973\'][props.view.sex] }}\n    </template>\n</mxl-table>'
                }
            },
            ds: {
                demo1: [{ id: 1, username: 'hi', age: 12, sex: 1 }, { id: 2, username: 'xi', age: 50, sex: 2 }, { id: 3, username: 'ha', age: 25, sex: 0 }]
            },
            api: {
                LIST: _test.DATA.TABLE + '/1'
            },
            async: {
                responseFormat: function responseFormat(response) {
                    return response.data.data;
                }
            }
        };
    },

    computed: {
        ths: function ths() {
            return {
                demo1: [{ field: 'index', title: '索引', tdSlot: 'indexSlot' }, { field: 'id', title: 'ID', sort: true }, { field: 'username', title: '用户名', width: '10%', align: 'left' }, { field: 'age', title: '年龄', hide: true }, { field: 'sex', title: '性别', tdSlot: 'sexSlot' }, { title: '操作', tdSlot: 'opearSlot' }],
                demo2: [{ field: 'id', title: 'ID' }, { field: 'username', title: '用户名' }, { field: 'age', title: '年龄' }, { field: 'sex', title: '性别', tdSlot: 'sexSlot' }]
            };
        }
    },
    methods: {
        doEdit: function doEdit(d) {
            this.$utils.diy.alert.base('修改操作呢, 当前数据请见console');
            console.log(d);
        },
        doInfo: function doInfo(d) {
            this.$utils.diy.alert.base('详情操作呢, 当前数据请见console');
            console.log(d);
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("dl", [
    _c(
      "dt",
      [_vm._v("组件名 "), _c("mxl-emotion-text", [_vm._v("mxl-table")])],
      1
    ),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("dt", [_vm._v("基本用法")]),
    _vm._v(" "),
    _c("dd", [
      _c("div", { staticClass: "card", staticStyle: {} }, [
        _c("div", { staticClass: "card-body" }, [
          _c(
            "p",
            { staticClass: "card-text" },
            [
              _c("mxl-table", {
                attrs: {
                  ths: _vm.ths.demo1,
                  data: _vm.ds.demo1,
                  toolColWidth: "10%",
                  useCheck: true
                },
                scopedSlots: _vm._u([
                  {
                    key: "indexSlot",
                    fn: function(props) {
                      return [
                        _vm._v(
                          "\n                                " +
                            _vm._s(props.index + 1) +
                            "\n                            "
                        )
                      ]
                    }
                  },
                  {
                    key: "sexSlot",
                    fn: function(props) {
                      return [
                        _vm._v(
                          "\n                                " +
                            _vm._s(["未知", "男", "女"][props.view.sex]) +
                            "\n                            "
                        )
                      ]
                    }
                  },
                  {
                    key: "opearSlot",
                    fn: function(props) {
                      return [
                        _c(
                          "mxl-btn-group",
                          [
                            _c(
                              "mxl-btn",
                              {
                                on: {
                                  click: function($event) {
                                    _vm.doEdit(props)
                                  }
                                }
                              },
                              [_vm._v("修改")]
                            ),
                            _vm._v(" "),
                            _c(
                              "mxl-btn",
                              {
                                on: {
                                  click: function($event) {
                                    _vm.doInfo(props)
                                  }
                                }
                              },
                              [_vm._v("详情")]
                            )
                          ],
                          1
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "p",
            [
              _c(
                "mxl-tab",
                { attrs: { navs: ["js", "template"] } },
                [
                  _c("mxl-highlight", { attrs: { type: "javascript" } }, [
                    _vm._v(
                      "export default {\n    data(){\n        return {\n            ds: [\n                {id: 1, username: 'hi', age: 12, sex: 1},\n                {id: 2, username: 'xi', age: 50, sex: 2},\n                {id: 3, username: 'ha', age: 25, sex: 0}\n            ]\n        };\n    },\n    computed: {\n        ths(){\n            return [\n                /**\n                 * field 数据中对应的字段\n                 * title 标题文字\n                 * sort  字段排序\n                 *      default: false  \n                 * sortHandler 排序钩子\n                 *  默认采用逻辑表达式判断, 可传入自定义钩子排序\n                 *  ** 只作用本地数据\n                 *      sortHandler: (sort) => {\n                 *          sort[0] 排序字段,也就是当前field\n                 *          sort[1] 排序方式 desc / asc\n                 *          return (a, b) => {\n                 *              let r = a[sort[0]] > b[sort[0]];\n                 *              return sort[1] == 'asc' ? !!r : !r;\n                 *          }\n                 *      }\n                 * hide 是否隐藏\n                 *      default: false\n                 * tdSlot 列槽名 用于手动处理数据\n                 * width 列宽\n                 *      css计量单位即可\n                 * align 对其\n                 *      left / right / center(default)\n                 */\n                {field: 'index', title: '索引', tdSlot: 'indexSlot'},\n                {field: 'id', title: 'ID', sort: true},\n                {field: 'username', title: '用户名', width: '10%', align: 'left'},\n                {field: 'age', title: '年龄', hide: true},\n                {field: 'sex', title: '性别', tdSlot: 'sexSlot'},\n                {title: '操作', tdSlot: 'opearSlot'}\n            ];\n        }\n    },\n    methods: {\n        doEdit(d){\n            this.$utils.diy.alert.base('修改操作呢, 当前数据请见console');\n            console.log(d);\n        },\n        doInfo(d){\n            this.$utils.diy.alert.base('详情操作呢, 当前数据请见console');\n            console.log(d);\n        }\n    }\n}"
                    )
                  ]),
                  _vm._v(" "),
                  _c("mxl-highlight", { attrs: { type: "javascript" } }, [
                    _vm._v(_vm._s(_vm.code.template.demo1))
                  ])
                ],
                1
              )
            ],
            1
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("dt", [_vm._v("异步获取数据")]),
    _vm._v(" "),
    _c("dd", [
      _c("div", { staticClass: "card", staticStyle: {} }, [
        _c("div", { staticClass: "card-body" }, [
          _c(
            "p",
            { staticClass: "card-text" },
            [
              _c("mxl-table", {
                attrs: {
                  ths: _vm.ths.demo2,
                  url: _vm.api.LIST,
                  async: _vm.async,
                  listItemSize: 10,
                  init: true,
                  useCheck: true
                },
                scopedSlots: _vm._u([
                  {
                    key: "sexSlot",
                    fn: function(props) {
                      return [
                        _vm._v(
                          "\n                                " +
                            _vm._s(["未知", "男", "女"][props.view.sex]) +
                            "\n                            "
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "p",
            [
              _c(
                "mxl-tab",
                { attrs: { navs: ["js", "template"] } },
                [
                  _c("mxl-highlight", { attrs: { type: "javascript" } }, [
                    _vm._v(
                      "export default {\n    data(){\n        return {\n            /* 数据源于mock.js模拟拦截, mock模板请异步console */\n            api: {\n                LIST: DATA.TABLE + '/1'\n            },\n            async: {\n                /* 接口需返回给组件数据对象 包含rows数据 及 total总量 */\n                /* 若数据结构不满足则使用responseFormat进行数据格式化 */\n                responseFormat(response){\n                    return response.data.data;\n                }\n            }\n        };\n    },\n    computed: {\n        ths(){\n            return [\n                {field: 'id', title: 'ID'},\n                {field: 'username', title: '用户名'},\n                {field: 'age', title: '年龄'},\n                {field: 'sex', title: '性别', tdSlot: 'sexSlot'}\n            ];\n        }\n    }\n}"
                    )
                  ]),
                  _vm._v(" "),
                  _c("mxl-highlight", { attrs: { type: "javascript" } }, [
                    _vm._v(_vm._s(_vm.code.template.demo2))
                  ])
                ],
                1
              )
            ],
            1
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("dt", [_vm._v("方法")]),
    _vm._v(" "),
    _c(
      "dd",
      [
        _c("mxl-list-group", [
          _c("pre", [
            _vm._v(
              "                    getCheckData\n                    /* 获取勾选数据接口\n                    * [{id: 1, n: 'x'}, {id: 2, n: 'x2'}]\n                    * getCheckData('id') || getCheckData(['id']) -> [{id: 1}, {id: 2}]\n                    * getCheckData('id', true) || getCheckData(['id'], true) -> [1, 2]\n                    */"
            )
          ]),
          _vm._v(" "),
          _c("pre", [
            _vm._v(
              "                    checkAll\n                    /*全选*/\n                    checkNone\n                    /*清空*/\n                    checkToggle\n                    /*反选*/"
            )
          ])
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("dd", [
      _c("p", { staticClass: "mb-0" }, [_vm._v("表格数据展示, 支持自适应.")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-64aac62d", module.exports)
  }
}

/***/ })

});