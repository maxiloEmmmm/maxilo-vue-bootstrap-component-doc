<template>
    <dl>
        <dt>组件名
            <mxl-emotion-text>mxl-form-container</mxl-emotion-text>
        </dt>
        <dd>
            <p class="mb-0">表单容器.</p>
        </dd>

        <dt>基本用法</dt>
        <dd>
            <mxl-card>
                <mxl-list-in-line>
                    <span>每行表单数</span>
                    <mxl-select :options="groupItem" v-model="group"></mxl-select>
                </mxl-list-in-line>
                <mxl-form-container :groups="group">
                    <mxl-input v-for="i in 12" :key="i">输入框 - {{ i }}</mxl-input>
                </mxl-form-container>
                <mxl-list-group>
                    <mxl-tab :navs="['template', 'js']">
                        <mxl-highlight type="javascript">{{ template.demo1 }}</mxl-highlight>
<mxl-highlight type="javascript">
export default {
    data () {
        return {
            hi: '',
            data: [
                {label: '无子节点', value: 1},
                {label: '有子节点', value: 2, hasChild: 1, childs: [
                    {label: '第二级 - 无子节点', value: 3},
                    {label: '第二级 - 有子节点', value: 4, hasChild: 1, childs: [
                        {label: '第三级 - 无子节点', value: 5}
                    ]},
                ]}
            ]
        }
    }
}
</mxl-highlight>
                    </mxl-tab>
                </mxl-list-group>
            </mxl-card>
        </dd>

        <dt>复杂及异步获取</dt>
        <dd v-mxl-loading:girl="true" mxl-loading-title="制作中" style="width:100%;height: 400px;"></dd>
    </dl>
</template>

<script>
    export default {
        data () {
            return {
                group: 2,
                groupItem: []
            }
        },
        mounted () {
            for(let i = 1; i <= 4; i++) {
                this.groupItem.push({label: i, value: i});
            }
        },
        computed: {
            template(){
                return {
                    demo1: 
`
/**
 * data 数据
 *      default: [],
 *      type: Array
 */
<mxl-cascade :data="data" v-model="hi">hi</mxl-cascade>`,
                };
            }
        }
    };
</script>