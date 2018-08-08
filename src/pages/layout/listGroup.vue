<template>
    <dl>
        <dt>组件名
            <mxl-emotion-text>mxl-list-group</mxl-emotion-text>
        </dt>
        <dd>
            <p class="mb-0">卡片.</p>
        </dd>

        <dt>基本用法</dt>
        <dd>
            <mxl-card>
                内容必须为html标签, 不能直接放置文本
                <mxl-list-group class="mb-2">
                    <span>list-group-item1</span>
                    <span>list-group-item2</span>
                </mxl-list-group>
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
`<mxl-list-group>
    <span>list-group-item1</span>
    <span>list-group-item2</span>
</mxl-list-group>`,
                };
            }
        }
    };
</script>