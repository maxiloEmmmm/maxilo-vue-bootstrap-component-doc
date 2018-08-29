<template>
    <dl>
        <dt>选项卡
            <mxl-emotion-text>mxl-tab</mxl-emotion-text>
        </dt>

        <dt>基本用法</dt>
        <dd>
            <mxl-card>
                <mxl-tab :navs="['tab1', 'tab2', {label: 'tab3', pane: 'tab2'}]">
                    <span>tab1's content</span>
                    <span>tab2's content</span>
                </mxl-tab>
                <mxl-list-group>
                    <mxl-tab :navs="['template']">
                        <mxl-highlight type="javascript">{{ template.demo1 }}</mxl-highlight>
                    </mxl-tab>
                </mxl-list-group>
            </mxl-card>
        </dd>
    </dl>
</template>

<script>
    export default {
        computed: {
            template(){
                return {
                    demo1: 
`
/**
 * navs
 *  type: Array
 *  default: []
 *  选项卡数据
 *      字符串为选项卡名 (第一个选项卡名会切换到标签包裹着的第一个内容, 依次计算~)
 *      对象
 *          label 字符串为选项卡名
 *          pane 指定切换的选项卡名 用于多个选项卡显示同一内容
 */
<mxl-tab :navs="['tab1', 'tab2', {label: 'tab3', pane: 'tab2'}]">
    <span>tab1's content</span>
    <span>tab2's content</span>
</mxl-tab>`
                };
            }
        }
    };
</script>