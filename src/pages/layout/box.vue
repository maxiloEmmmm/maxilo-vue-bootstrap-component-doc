<template>
    <dl>
        <dt>无限箱子
            <mxl-emotion-text>mxl-box</mxl-emotion-text>
        </dt>
        <dd>
            <p class="mb-0">内容无限自动分组.</p>
        </dd>

        <dt>基本用法</dt>
        <dd>
            <mxl-card>
                <mxl-list-in-line>
                    <span>每行个数</span>
                    <mxl-select :options="groupItem" v-model="group"></mxl-select>
                </mxl-list-in-line>
                <mxl-box class="mb-2" :groups="group">
                    <span class="border border-primary" v-for="i in count" :key="i">{{ i }}</span>
                </mxl-box>
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
        data(){
            return {
                count: 50,
                group: 10,
                groupItem: []
            };
        },
        mounted () {
            for(let i = 5; i <= 50; i++) {
                this.groupItem.push({label: i, value: i});
            }
        },
        computed: {
            template(){
                return {
                    demo1: 
`<mxl-box :groups="${this.group}">
    <span class="border border-primary" v-for="i in count" :key="i">{{ i }}</span>
</mxl-box>`,
                };
            }
        }
    };
</script>