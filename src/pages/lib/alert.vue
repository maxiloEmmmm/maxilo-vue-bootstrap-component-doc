<template>
    <dl>
        <dt>警告
            <mxl-emotion-text>mxl-alert</mxl-emotion-text>
        </dt>

        <dt>基本用法</dt>
        <dd>
            <mxl-card>
                <mxl-alert>hi, alert.</mxl-alert>
                <mxl-list-group>
                    <mxl-tab :navs="['template']">
                        <mxl-highlight type="javascript">{{ template.demo1 }}</mxl-highlight>
                    </mxl-tab>
                </mxl-list-group>
            </mxl-card>
        </dd>

        <dt>支持情景</dt>
        <dd>
            <mxl-card>
                <a href="http://code.z01.com/v4/components/alerts.html#examples">查看具体</a> 
                <mxl-alert type="success">hi, alert.</mxl-alert>
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
`<mxl-alert>hi, alert.</mxl-alert>`,
                    demo2: 
`<mxl-alert type="success">hi, alert.</mxl-alert>`
                };
            }
        }
    };
</script>