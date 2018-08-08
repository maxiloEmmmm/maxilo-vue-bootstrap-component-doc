<template>
    <dl>
        <dt>组件名
            <mxl-emotion-text>mxl-list-in-line</mxl-emotion-text>
        </dt>
        <dd>
            <p class="mb-0">行内组.</p>
        </dd>

        <dt>基本用法</dt>
        <dd>
            <mxl-card>
                快速实现元素并排显示
                <mxl-list-in-line class="mb-2">
                    <mxl-emotion-text>list-in-line-item1</mxl-emotion-text>
                    <mxl-emotion-text>list-in-line-item2</mxl-emotion-text>
                    <mxl-btn-group>
                        <mxl-btn>btn1</mxl-btn>
                        <mxl-btn>btn2</mxl-btn>
                    </mxl-btn-group>
                    <div>Test div</div>
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
        computed: {
            template(){
                return {
                    demo1: 
`<mxl-list-in-line>
    <mxl-emotion-text>list-in-line-item1</mxl-emotion-text>
    <mxl-emotion-text>list-in-line-item2</mxl-emotion-text>
    <mxl-btn-group>
        <mxl-btn>btn1</mxl-btn>
        <mxl-btn>btn2</mxl-btn>
    </mxl-btn-group>
    <div>Test div</div>
</mxl-list-in-line>`,
                };
            }
        }
    };
</script>