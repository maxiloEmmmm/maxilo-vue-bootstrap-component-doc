<template>
    <dl>
        <dt>组件名
            <mxl-emotion-text>mxl-col</mxl-emotion-text>
        </dt>
        <dd>
            <p class="mb-0">列.</p>
        </dd>

        <dt>基本用法</dt>
        <dd>
            <mxl-card>
                <mxl-row>
                    <mxl-col class="border" :size="5" layoutModel="md">col-md-5</mxl-col>
                    <mxl-col class="border" :size="5" layoutModel="md">col-md-5</mxl-col>
                    <mxl-col class="border" :size="1" layoutModel="md">col-md-1</mxl-col>
                </mxl-row>
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
`<mxl-row>
    <mxl-col class="border" :size="5" layoutModel="md">col-md-5</mxl-col>
    <mxl-col class="border" :size="5" layoutModel="md">col-md-5</mxl-col>
    <mxl-col class="border" :size="1" layoutModel="md">col-md-1</mxl-col>
</mxl-row>`,
                };
            }
        }
    };
</script>