<template>
    <dl>
        <dt>组件名
            <mxl-emotion-text>mxl-emotion-text</mxl-emotion-text>
        </dt>
        <dd>
            <p class="mb-0">包裹着文字.</p>
        </dd>

        <dt>基本用法</dt>
        <dd>
            <mxl-card>
                <mxl-emotion-text>hi~</mxl-emotion-text>
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
                <a href="http://code.z01.com/v4/components/badge.html#contextual-variations">查看具体</a> 
                <p>
                    <mxl-emotion-text type="success">hi, emotion-text.</mxl-emotion-text>
                </p>
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
`<mxl-emotion-text>hi~</mxl-emotion-text>`,
                    demo2: 
`<mxl-emotion-text type="success">hi, emotion-text.</mxl-emotion-text>`
                };
            }
        }
    };
</script>