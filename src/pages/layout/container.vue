<template>
    <dl>
        <dt>组件名
            <mxl-emotion-text>mxl-container</mxl-emotion-text>
        </dt>
        <dd>
            <p class="mb-0">自适应容器, 内容自动分组.</p>
        </dd>

        <dt>基本用法</dt>
        <dd>
            <mxl-card>
                <mxl-alert>拖动窗口查看自适应效果.</mxl-alert>
                <mxl-container :groups="4">
                    <span v-for="i in 50" :key="i">{{ `container-item-${i}` }}</span>
                </mxl-container>
                <mxl-alert type="danger">分组数&lt;=12</mxl-alert>
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
`<mxl-container :groups="4">
    <span v-for="i in 50" :key="i">{{ \`container-item-\${i}\` }}</span>
</mxl-container>`,
                };
            }
        }
    };
</script>