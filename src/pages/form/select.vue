<template>
    <dl>
        <dt>组件名
            <mxl-emotion-text>mxl-select</mxl-emotion-text>
        </dt>
        <dd>
            <p class="mb-0">下拉.</p>
        </dd>

        <dt>基本用法</dt>
        <dd>
            <mxl-card>
                <mxl-list-in-line>
                    <mxl-select :options="options" v-model="data" :more="more" :autoClickHide="true" :single="true" placeholder="hi"></mxl-select>
                    <mxl-btn @click="more = !more">{{ more ? '想单选' : '想多选' }}</mxl-btn>
                </mxl-list-in-line>
                <mxl-list-group>
                    <mxl-tab :navs="['js', 'template']">
<mxl-highlight type="javascript">export default {
    data () {
        return {
            data: {{ data.toString() ? data.toString() : "''" }},
            options: [
                {label: 'option1', value: 1},
                {label: 'option2', value: 2},
                {label: 'option3', value: 3},
                {label: 'option4', value: 4},
                {label: 'option5', value: 5}
            ],
            more: {{ more }}
        }
    }
}</mxl-highlight>
                        <mxl-highlight type="javascript">{{ template.demo1 }}</mxl-highlight>
                    </mxl-tab>
                </mxl-list-group>
            </mxl-card>
        </dd>
    </dl>
</template>

<script>
    export default {
        data () {
            return {
                data: '',
                options: [
                    {label: 'option1', value: 1},
                    {label: 'option2', value: 2},
                    {label: 'option3', value: 3},
                    {label: 'option4', value: 4},
                    {label: 'option5', value: 5}
                ],
                more: false
            }
        },
        computed: {
            template(){
                return {
                    demo1: 
`
/**
 * options 选项
 *      type: Array
 *      default: []
 *      data struct:
 *          [
 *              * label 显示名
 *              * value 值
 *              {label: 'option1', value: 1},
 *              {label: 'option2', value: 2}
 *          ]
 * v-model 说明
 *      单选为 value
 *          1
 *      多选为 value 集合数组
 *          [1, 2]
 * more 是否多选
 *      type: Boolean
 *      default: false
 * autoClickHide 选择是否关闭菜单, 如果不默认关闭就只有失去焦点时会关闭
 *      type: Boolean
 *      default: true
 * single 唯一展开 当选择多个下拉框时 可设置当前下拉框是否在选择另一个时关闭
 *      type: Boolean
 *      default: true
 * placeholder 未选择时下拉框中的提示
 *      type: String
 *      default: ''
 * disabled 禁用
 *      type: Boolean
 *      default: false
 */ 
<mxl-select :options="options" v-model="data" :more="more" :autoClickHide="true" :single="true" placeholder="hi"></mxl-select>`,
                };
            }
        }
    };
</script>