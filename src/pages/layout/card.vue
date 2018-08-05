<template>
    <dl>
        <dt>组件名
            <mxl-emotion-text>mxl-card</mxl-emotion-text>
        </dt>
        <dd>
            <p class="mb-0">卡片.</p>
        </dd>

        <dt>基本用法</dt>
        <dd>
            <mxl-card>
                <mxl-card class="mb-2">
                    Test.
                    <template slot="header">Test-Header.</template>
                    <template slot="footer">Test-Footer.</template>
                </mxl-card>
                <mxl-list-group>
                    <mxl-tab :navs="['template']">
                        <mxl-highlight type="javascript">{{ template.demo1 }}</mxl-highlight>
                    </mxl-tab>
                </mxl-list-group>
            </mxl-card>
        </dd>

        <dt>嵌套<mxl-emotion-text>mxl-list-group</mxl-emotion-text></dt>
        <dd>
            <mxl-card>
                <mxl-card class="mb-2">
                    Test2.
                    <template slot="header">Test-Header2.</template>
                    <mxl-list-group slot="other" :card="true">
                        <span>Test-card-list-group1</span>
                        <span>Test-card-list-group2</span>
                    </mxl-list-group>
                </mxl-card>
                <mxl-list-group>
                    <mxl-tab :navs="['template']">
                        <mxl-highlight type="javascript">{{ template.demo2 }}</mxl-highlight>
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
`<mxl-card>
    Test.
    <template slot="header">Test-Header.</template>
    <template slot="footer">Test-Footer.</template>
</mxl-card>`,
                    demo2: 
`<mxl-card>
    Test2.
    <template slot="header">Test-Header2.</template>
    <mxl-list-group slot="other" :card="true">
        <span>Test-card-list-group1</span>
        <span>Test-card-list-group2</span>
    </mxl-list-group>
</mxl-card>`
                };
            }
        }
    };
</script>