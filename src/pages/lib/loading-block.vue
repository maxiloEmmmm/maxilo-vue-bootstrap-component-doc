<template>
    <dl>
        <dt>组件名
            <mxl-emotion-text>mxl-loading-?</mxl-emotion-text>
        </dt>
        <dd>
            <p class="mb-0">等待块.</p>
        </dd>

        <dt>依附于父级元素</dt>
        <dd>
            <mxl-card>
                <mxl-form-container v-mxl-loading:girl="hi">
                    <mxl-input v-for="i in 5" :key="i">{{ i }}</mxl-input>
                </mxl-form-container>
                <mxl-btn-group>
                    <mxl-btn @click="hi = true">开始(v-model)</mxl-btn>
                    <mxl-btn @click="hi = false">停止(v-model)</mxl-btn>
                </mxl-btn-group>
                <mxl-list-group>
                    <mxl-tab :navs="['js', 'template']">
<mxl-highlight type="javascript">export default {
    data () {
        return {
            hi: true,
        }
    }
}</mxl-highlight>
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
                hi: true
            }
        },
        computed: {
            template(){
                return {
                    demo1: 
`
/**
 * 监听一个变量控制loading
 * 支持
 *  v-mxl-loading:girl
 *  v-mxl-loading:w10
 *  v-mxl-loading:build
 *  v-mxl-loading   
 */
<mxl-form-container v-mxl-loading:girl="hi">
    <mxl-input v-for="i in 5" :key="i">{{ i }}</mxl-input>
</mxl-form-container>`,
                };
            }
        }
    };
</script>