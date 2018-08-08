<template>
    <dl>
        <dt>组件名
            <mxl-emotion-text>mxl-row-col</mxl-emotion-text>
        </dt>
        <dd>
            <p class="mb-0">快速行列.</p>
        </dd>

        <dt>基本用法</dt>
        <dd>
            <mxl-card>
                <mxl-row-col class="mb-2" :size="3" layoutModel="md">
                    <mxl-emotion-text>list-in-line-item1</mxl-emotion-text>
                    <mxl-emotion-text>list-in-line-item2</mxl-emotion-text>
                    <div>Test div</div>
                </mxl-row-col>
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
`<mxl-row-col :size="3" layoutModel="md">
    <mxl-emotion-text>list-in-line-item1</mxl-emotion-text>
    <mxl-emotion-text>list-in-line-item2</mxl-emotion-text>
    <div>Test div</div>
</mxl-row-col>`,
                };
            }
        }
    };
</script>