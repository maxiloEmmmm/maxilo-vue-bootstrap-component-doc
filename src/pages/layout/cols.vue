<template>
    <dl>
        <dt>组件名
            <mxl-emotion-text>mxl-cols</mxl-emotion-text>
        </dt>
        <dd>
            <p class="mb-0">快速生成一行多列.</p>
        </dd>

        <dt>基本用法1</dt>
        <dd>
            <mxl-card>
                添加cols属性 '-'分割列参数, 参数为纯数字意味列宽
                <mxl-row>
                    <mxl-cols class="mb-2" cols="2-8-2">
                        <mxl-emotion-text>list-in-line-item1</mxl-emotion-text>
                        <mxl-emotion-text>list-in-line-item2</mxl-emotion-text>
                        <mxl-btn-group>
                            <mxl-btn>btn1</mxl-btn>
                            <mxl-btn>btn2</mxl-btn>
                        </mxl-btn-group>
                        <div>Test div</div>
                    </mxl-cols>
                </mxl-row>
                <mxl-list-group>
                    <mxl-tab :navs="['template']">
                        <mxl-highlight type="javascript">{{ template.demo1 }}</mxl-highlight>
                    </mxl-tab>
                </mxl-list-group>
            </mxl-card>
        </dd>

        <dt>基本用法2</dt>
        <dd>
            <mxl-card>
                列参数可加入场景 使用','分割
                <mxl-row>
                    <mxl-cols class="mb-2" cols="2,xs-6-2,lg-2,md">
                        <mxl-emotion-text>list-in-line-item1</mxl-emotion-text>
                        <mxl-emotion-text>list-in-line-item2</mxl-emotion-text>
                        <mxl-btn-group>
                            <mxl-btn>btn1</mxl-btn>
                            <mxl-btn>btn2</mxl-btn>
                        </mxl-btn-group>
                        <div>Test div</div>
                    </mxl-cols>
                </mxl-row>
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
`<mxl-row>
    <mxl-cols cols="2-8-2">
        <mxl-emotion-text>list-in-line-item1</mxl-emotion-text>
        <mxl-emotion-text>list-in-line-item2</mxl-emotion-text>
        <mxl-btn-group>
            <mxl-btn>btn1</mxl-btn>
            <mxl-btn>btn2</mxl-btn>
        </mxl-btn-group>
    </mxl-cols>
</mxl-row>`,
                    demo2: 
`<mxl-row>
    <mxl-cols cols="2,xs-6-2,lg-2,md">
        <mxl-emotion-text>list-in-line-item1</mxl-emotion-text>
        <mxl-emotion-text>list-in-line-item2</mxl-emotion-text>
        <mxl-btn-group>
            <mxl-btn>btn1</mxl-btn>
            <mxl-btn>btn2</mxl-btn>
        </mxl-btn-group>
        <div>Test div</div>
    </mxl-cols>
</mxl-row>`,
                };
            }
        }
    };
</script>