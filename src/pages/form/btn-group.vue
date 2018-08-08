<template>
    <dl>
        <dt>组件名
            <mxl-emotion-text>mxl-btn-group</mxl-emotion-text>
        </dt>
        <dd>
            <p class="mb-0">按钮组.</p>
        </dd>

        <dt>基本用法</dt>
        <dd>
            <mxl-card>
                <mxl-btn-group class="mb-2" size="lg">
                    <mxl-btn>1</mxl-btn>
                    <mxl-btn>2</mxl-btn>
                    <mxl-btn>3</mxl-btn>
                    <mxl-btn>4</mxl-btn>
                    <mxl-btn>5</mxl-btn>
                </mxl-btn-group>
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
 * size 按钮组大小
 *      type: String
 *      http://code.z01.com/v4/components/button-group.html#sizing
 */
<mxl-btn-group size="lg">
    <mxl-btn>1</mxl-btn>
    <mxl-btn>2</mxl-btn>
    <mxl-btn>3</mxl-btn>
    <mxl-btn>4</mxl-btn>
    <mxl-btn>5</mxl-btn>
</mxl-btn-group>`,
                };
            }
        }
    };
</script>