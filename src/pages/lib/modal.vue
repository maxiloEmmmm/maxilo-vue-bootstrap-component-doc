<template>
    <dl>
        <dt>组件名
            <mxl-emotion-text>mxl-modal</mxl-emotion-text>
        </dt>
        <dd>
            <p class="mb-0"> 弹出层.</p>
        </dd>

        <dt>基本用法</dt>
        <dd>
            <mxl-card>
                <mxl-modal :show.sync="show"> 
                    hi, modal. 
                    <span slot="header">modal header slot</span>
                    <span slot="footer">modal footer slot</span>
                </mxl-modal>
                <mxl-btn @click="show = true" class="mb-2">打开modal</mxl-btn>
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
        data () {
            return {
                show: false
            }
        },
        computed: {
            template(){
                return {
                    demo1: 
`
/**
 * show 弹出层是否打开
 *      请用.sync 修饰show 属性, 否则内部自带关闭会失效
 * fullScreen 全屏显示
 *      default: true
 *      type: Boolean
 */
<mxl-modal :show.sync="show"> 
    hi, modal.
    <span slot="header">modal header slot</span>
    <span slot="footer">modal footer slot</span> 
</mxl-modal>
<mxl-btn @click="show = true">打开modal</mxl-btn>`,
                };
            }
        }
    };
</script>