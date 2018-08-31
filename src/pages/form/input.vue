<template>
    <dl>
        <dt>组件名
            <mxl-emotion-text>mxl-input</mxl-emotion-text>
        </dt>
        <dd>
            <p class="mb-0">输入框.</p>
        </dd>

        <dt>基本用法</dt>
        <dd>
            <mxl-card>
                支持<router-link to="/mixs/rule">验证器</router-link>
                <mxl-list-in-line>
                    <mxl-input placeholder="输入点什么..." :disabled="disabled" type="text"></mxl-input>
                    <mxl-btn @click="disabled = !disabled">{{ (disabled ? '不' : '') + '禁用' }}</mxl-btn>
                </mxl-list-in-line>
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
                disabled: false
            }
        },
        computed: {
            template(){
                return {
                    demo1: 
`
/**
 * type 输入类型 支持html input类型
 *      default: input
 *      type: String
 * disabled 禁用
 *      default: true
 *      type: Boolean
 * placeholder 提示
 *      default: ''
 *      type: String
 */
<mxl-input :disabled="disabled" type="text" placeholder="输入点什么..."></mxl-input>`,
                };
            }
        }
    };
</script>