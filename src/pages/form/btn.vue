<template>
    <dl>
        <dt>组件名
            <mxl-emotion-text>mxl-btn</mxl-emotion-text>
        </dt>
        <dd>
            <p class="mb-0">按钮.</p>
        </dd>

        <dt>基本用法</dt>
        <dd>
            <mxl-card>
                <mxl-btn class="mb-2" size="lg" type="success">hi</mxl-btn>
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
 * size 按钮大小
 *      type: String
 *      http://code.z01.com/v4/components/buttons.html#sizes
 * type 按钮颜色
 *      type: String
 *      http://code.z01.com/v4/components/buttons.html#examples
 * outline 轮廓模式: 有边框颜色 无填充
 *      default: false
 *      type: Boolean
 * block 块模式
 *      default: false
 *      type: Boolean
 */
<mxl-btn size="lg" type="success">hi</mxl-btn>`,
                };
            }
        }
    };
</script>