<template>
    <dl>
        <dt>组件名 <mxl-emotion-text>mxl-table</mxl-emotion-text></dt>
        <dd>
            <p class="mb-0">表格数据展示, 支持自适应.</p>
        </dd>

        <dt>基本用法</dt>
        <dd>
            <div class="card" style="border-radius-0">
                <div class="card-body">
                    <p class="card-text">
                        <mxl-table :ths="ths.demo1" :data="ds.demo1" toolColWidth="10%" :useCheck="true">
                            <template slot="indexSlot" slot-scope="props">
                                {{ props.index + 1 }}
                            </template>
                            <template slot="sexSlot" slot-scope="props">
                                {{ ['未知', '男', '女'][props.view.sex] }}
                            </template>
                            <template slot="opearSlot" slot-scope="props">
                                <mxl-btn-group>
                                    <mxl-btn @click="doEdit(props)">修改</mxl-btn>
                                    <mxl-btn @click="doInfo(props)">详情</mxl-btn>
                                </mxl-btn-group>
                            </template>
                        </mxl-table>
                    </p>
                    <p>
                        <mxl-tab :navs="['js', 'template']">
<mxl-highlight type="javascript">export default {
    data(){
        return {
            ds: [
                {id: 1, username: 'hi', age: 12, sex: 1},
                {id: 2, username: 'xi', age: 50, sex: 2},
                {id: 3, username: 'ha', age: 25, sex: 0}
            ]
        };
    },
    computed: {
        ths(){
            return [
                /**
                 * field 数据中对应的字段
                 * title 标题文字
                 * sort  字段排序
                 *      default: false  
                 * sortHandler 排序钩子
                 *  默认采用逻辑表达式判断, 可传入自定义钩子排序
                 *  ** 只作用本地数据
                 *      sortHandler: (sort) => {
                 *          sort[0] 排序字段,也就是当前field
                 *          sort[1] 排序方式 desc / asc
                 *          return (a, b) => {
                 *              let r = a[sort[0]] > b[sort[0]];
                 *              return sort[1] == 'asc' ? !!r : !r;
                 *          }
                 *      }
                 * hide 是否隐藏
                 *      default: false
                 * tdSlot 列槽名 用于手动处理数据
                 * width 列宽
                 *      css计量单位即可
                 * align 对其
                 *      left / right / center(default)
                 */
                {field: 'index', title: '索引', tdSlot: 'indexSlot'},
                {field: 'id', title: 'ID', sort: true},
                {field: 'username', title: '用户名', width: '10%', align: 'left'},
                {field: 'age', title: '年龄', hide: true},
                {field: 'sex', title: '性别', tdSlot: 'sexSlot'},
                {title: '操作', tdSlot: 'opearSlot'}
            ];
        }
    },
    methods: {
        doEdit(d){
            this.$utils.diy.alert.base('修改操作呢, 当前数据请见console');
            console.log(d);
        },
        doInfo(d){
            this.$utils.diy.alert.base('详情操作呢, 当前数据请见console');
            console.log(d);
        }
    }
}</mxl-highlight>
<mxl-highlight type="javascript">{{ code.template.demo1 }}</mxl-highlight>
                        </mxl-tab>
                    </p>
                </div>
            </div>
        </dd>

        <dt>异步获取数据</dt>
        <dd>
            <div class="card" style="border-radius-0">
                <div class="card-body">
                    <p class="card-text">
                        <mxl-table :ths="ths.demo2" :url="api.LIST" :async="async" :listItemSize="10" :init="true" :useCheck="true">
                            <template slot="sexSlot" slot-scope="props">
                                {{ ['未知', '男', '女'][props.view.sex] }}
                            </template>
                        </mxl-table>
                    </p>
                    <p>
                        <mxl-tab :navs="['js', 'template']">
<mxl-highlight type="javascript">export default {
    data(){
        return {
            /* 数据源于mock.js模拟拦截, mock模板请异步console */
            api: {
                LIST: DATA.TABLE + '/1'
            },
            async: {
                /* 接口需返回给组件数据对象 包含rows数据 及 total总量 */
                /* 若数据结构不满足则使用responseFormat进行数据格式化 */
                responseFormat(response){
                    return response.data.data;
                }
            }
        };
    },
    computed: {
        ths(){
            return [
                {field: 'id', title: 'ID'},
                {field: 'username', title: '用户名'},
                {field: 'age', title: '年龄'},
                {field: 'sex', title: '性别', tdSlot: 'sexSlot'}
            ];
        }
    }
}</mxl-highlight>
<mxl-highlight type="javascript">{{ code.template.demo2 }}</mxl-highlight>
                        </mxl-tab>
                    </p>
                </div>
            </div>
        </dd>

        <dt>方法</dt>
        <dd>
            <mxl-list-group>
                <pre>
                    getCheckData
                    /* 获取勾选数据接口
                    * [{id: 1, n: 'x'}, {id: 2, n: 'x2'}]
                    * getCheckData('id') || getCheckData(['id']) -> [{id: 1}, {id: 2}]
                    * getCheckData('id', true) || getCheckData(['id'], true) -> [1, 2]
                    */</pre>
                <pre>
                    checkAll
                    /*全选*/
                    checkNone
                    /*清空*/
                    checkToggle
                    /*反选*/</pre>
            </mxl-list-group>
        </dd>
    </dl>
</template>

<script>
import {DATA} from 'api/test';
export default {
    data(){
        return {
            code: {
                template: {
                    demo1: `
/**
 * ths 表头
 *      type: Array
 *      default: Array(0)
 * data 数据
 *      type: Array
 *      default: Array(0)
 * toolColWidth 工具列(第一列)宽度占比
 * useCheck
 *      type: Boolean
 *      default: false
 */
<mxl-table :ths="ths" :data="ds" toolColWidth="10%" :useCheck="true">
    <template slot="indexSlot" slot-scope="props">
        {{ props.index + 1 }}
    </template>
    <template slot="sexSlot" slot-scope="props">
        <!-- 
            props.view 当前行的数据集合
            props.th 表头配置集合 也就是传入的ths
            props.index 当前行索引
            props.thIndex 当前列索引(隐藏列不存在)
        --> 
        {{ ['未知', '男', '女'][props.view.sex] }}
    </template>
    <template slot="opearSlot" slot-scope="props">
        <mxl-btn-group>
            <mxl-btn @click="doEdit(props)">修改</mxl-btn>
            <mxl-btn @click="doInfo(props)">详情</mxl-btn>
        </mxl-btn-group>
    </template>
</mxl-table>`       ,
                    demo2:`
/**
 * url 接口地址
 *      type: String
 *      default: ''
 * listItemSize 每页显示条数
 *      type: Number
 *      default: 3
 * async 详见async模块
 * init 初始化表格
 *      表格加载后若存在api接口会立即请求, 但有时候接口地址为异步获取或为具体操作动态设定这时候可以设定为false, 从而取消初始化,
 *      待api确定后, 手动 通过ref 调用refresh 拉取数据.
 */
<mxl-table :ths="ths.demo1" :url="api.LIST" :listItemSize="10" :async="async" :init="true" :useCheck="true">
    <template slot="sexSlot" slot-scope="props">
        {{ ['未知', '男', '女'][props.view.sex] }}
    </template>
</mxl-table>`
                }
            },
            ds: {
                demo1: [
                    {id: 1, username: 'hi', age: 12, sex: 1},
                    {id: 2, username: 'xi', age: 50, sex: 2},
                    {id: 3, username: 'ha', age: 25, sex: 0}
                ]
            },
            api: {
                LIST: DATA.TABLE + '/1'
            },
            async: {
                responseFormat(response){
                    return response.data.data;
                }
            }
        }
    },
    computed: {
        ths(){
            return {
                demo1: [
                    {field: 'index', title: '索引', tdSlot: 'indexSlot'},
                    {field: 'id', title: 'ID', sort: true},
                    {field: 'username', title: '用户名', width: '10%', align: 'left'},
                    {field: 'age', title: '年龄', hide: true},
                    {field: 'sex', title: '性别', tdSlot: 'sexSlot'},
                    {title: '操作', tdSlot: 'opearSlot'}
                ],
                demo2: [
                    {field: 'id', title: 'ID'},
                    {field: 'username', title: '用户名'},
                    {field: 'age', title: '年龄'},
                    {field: 'sex', title: '性别', tdSlot: 'sexSlot'}
                ]
            }
        }
    },
    methods: {
        doEdit(d){
            this.$utils.diy.alert.base('修改操作呢, 当前数据请见console');
            console.log(d);
        },
        doInfo(d){
            this.$utils.diy.alert.base('详情操作呢, 当前数据请见console');
            console.log(d);
        }
    }
}
</script>



