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
                <mxl-input></mxl-input>
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
`<mxl-input></mxl-input>`,
                };
            }
        }
    };
</script>