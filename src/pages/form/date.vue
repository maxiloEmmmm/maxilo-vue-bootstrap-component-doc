<template>
    <dl>
        <dt>组件名
            <mxl-emotion-text>mxl-date</mxl-emotion-text>
        </dt>
        <dd>
            <p class="mb-0">日期.</p>
        </dd>

        <dt>基本用法</dt>
        <dd>
            <mxl-card>
                <mxl-list-in-line>
                    <mxl-date split="&" v-model="hi"></mxl-date>
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
                hi: '',
            }
        },
        computed: {
            template(){
                return {
                    demo1: 
`
/**
 * split 分隔符
 *      default: '-',
 *      type: String
 */
<mxl-date split="&" v-model="hi"></mxl-date>`,
                };
            }
        }
    };
</script>