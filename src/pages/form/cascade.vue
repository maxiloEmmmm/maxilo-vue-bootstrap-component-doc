<template>
    <dl>
        <dt>组件名
            <mxl-emotion-text>mxl-cascade</mxl-emotion-text>
        </dt>
        <dd>
            <p class="mb-0">联动.</p>
        </dd>

        <dt>基本用法</dt>
        <dd>
            <mxl-card>
                <mxl-list-in-line>
                    <mxl-cascade :data="data" v-model="hi">hi</mxl-cascade>
                </mxl-list-in-line>
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