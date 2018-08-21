<template>
    <dl>
        <dt>组件名
            <mxl-emotion-text>mxl-switch</mxl-emotion-text>
        </dt>
        <dd>
            <p class="mb-0">开关.</p>
        </dd>

        <dt>基本用法</dt>
        <dd>
            <mxl-card>
                <mxl-list-in-line>
                    <mxl-switch v-model="hi" openText="开" closeText="关"></mxl-switch>
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
                hi: false,
            }
        },
        computed: {
            template(){
                return {
                    demo1: 
`
<mxl-switch v-model="hi" openText="开" closeText="关"></mxl-switch>`,
                };
            }
        }
    };
</script>