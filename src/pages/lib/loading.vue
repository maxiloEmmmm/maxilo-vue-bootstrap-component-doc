<template>
    <dl>
        <dt>组件名
            <mxl-emotion-text>mxl-loading</mxl-emotion-text>
        </dt>
        <dd>
            <p class="mb-0">等待.</p>
        </dd>

        <dt>基本用法</dt>
        <dd>
            <mxl-card>
                <mxl-loading v-model="test" ref="loading" :block="block" size="xs">hi~</mxl-loading>
                <mxl-btn-group>
                    <mxl-btn @click="test = true">开始(v-model)</mxl-btn>
                    <mxl-btn @click="test = false">停止(v-model)</mxl-btn>
                    <mxl-btn @click="() => $refs.loading.show()">开始 - 方法</mxl-btn>
                    <mxl-btn @click="() => $refs.loading.hide()">停止 - 方法</mxl-btn>
                    <mxl-btn @click="toggleView">切换行内 及 块</mxl-btn>
                </mxl-btn-group>
                <mxl-list-group>
                    <mxl-tab :navs="['js', 'template']">
<mxl-highlight type="javascript">export default {
    data () {
        return {
            test: true,
            block: true
        }
    },
    methods: {
        toggleView(){
            this.block = !this.block;
        }
    }
}</mxl-highlight>
                        <mxl-highlight type="javascript">{{ template.demo1 }}</mxl-highlight>
                    </mxl-tab>
                    <mxl-list-in-line>
                        <span>大小设置: </span>
                        <mxl-emotion-text v-for="item in ['xs', 'sm', 'md', 'lg']" :key="item">{{ item }}</mxl-emotion-text>
                    </mxl-list-in-line>
                </mxl-list-group>
            </mxl-card>
        </dd>

        <dt>高级用法</dt>
        <dd>
            <mxl-card>
                <mxl-list-in-line>
                    <mxl-loading ref="loading2">hi~</mxl-loading>
                    <mxl-btn-group>
                        <mxl-btn @click="testLoading">五秒后弹出框 在此次期间loading</mxl-btn>
                    </mxl-btn-group>
                </mxl-list-in-line>
                <mxl-list-group>
                    <mxl-tab :navs="['js', 'template']">
<mxl-highlight type="javascript">export default {
    methods: {
        async testLoading(){
            let resolveData = await this.$refs.loading.wait(() => {
                return new Promise(ok => {
                    setTimeout(() => {
                        alert(1);
                        /* * 可以resolve数据返回, */
                        ok();
                    }, 5000);
                });
            });
        }
    }
}</mxl-highlight>
                        <mxl-highlight type="javascript">{{ template.demo2}}</mxl-highlight>
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
                test: true,
                block: true
            }
        },
        computed: {
            template(){
                return {
                    demo1: 
`<mxl-loading v-model="test" ref="loading :block="block" size="xs"hi~</mxl-loading>
<mxl-btn-group>
    <mxl-btn @click="test = true">开始(v-model)</mxl-btn>
    <mxl-btn @click="test = false">停止(v-model)</mxl-btn>
    <mxl-btn @click="() => $refs.loading.show()">开始 - 方法</mxl-btn>
    <mxl-btn @click="() => $refs.loading.hide()">停止 - 方法</mxl-btn>
    <mxl-btn @click="toggleView">切换行内 及 块</mxl-btn>
</mxl-btn-group>`,
                    demo2:
`<mxl-loading ref="loading">hi~</mxl-loading>
<mxl-btn-group>
    <mxl-btn @click="testLoading">五秒后弹出框 在此次期间loading</mxl-btn>
</mxl-btn-group>`
                };
            }
        },
        methods: {
            testLoading(){
                this.$refs.loading2.wait(() => {
                    return new Promise(ok => {
                        setTimeout(() => {
                            alert(1);
                            ok();
                        }, 5000);
                    });
                });
            },
            toggleView(){
                this.block = !this.block;
            }
        }
    };
</script>