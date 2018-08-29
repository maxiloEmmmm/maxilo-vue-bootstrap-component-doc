<template>
    <dl>
        <dt>组件名
            <mxl-emotion-text>mxl-input-group</mxl-emotion-text>
        </dt>
        <dd>
            <p class="mb-0">输入组.</p>
        </dd>

        <dt>基本用法</dt>
        <dd>
            <mxl-card>
                <mxl-list-in-line>
                    <mxl-input-group>
                        <mxl-input></mxl-input>
                        <mxl-btn slot="prepend">&</mxl-btn>
                        <mxl-btn slot="append">&</mxl-btn>
                    </mxl-input-group>
                </mxl-list-in-line>
                <mxl-list-group>
                    <mxl-tab :navs="['template']">
                        <mxl-highlight type="javascript">{{ template.demo1 }}</mxl-highlight>
                    </mxl-tab>
                </mxl-list-group>
            </mxl-card>
        </dd>

        <dt>文字附加</dt>
        <dd>
            <mxl-card>
                <mxl-list-in-line>
                    <mxl-input-group>
                        <mxl-input></mxl-input>
                        <mxl-input-group-text slot="prepend">
                            <i class="fa fa-times"></i>
                        </mxl-input-group-text>
                        <mxl-input-group-text slot="append" type="light">
                            hi
                        </mxl-input-group-text>
                    </mxl-input-group>
                </mxl-list-in-line>
                <mxl-list-group>
                    <mxl-tab :navs="['template']">
                        <mxl-highlight type="javascript">{{ template.demo2 }}</mxl-highlight>
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
 * prepend 输入框前插槽
 * append 输入框后插槽
 */
<mxl-input-group>
    /* 放入基本输入框 */
    <mxl-input></mxl-input>
    <mxl-btn slot="prepend">&</mxl-btn>
    <mxl-btn slot="append">&</mxl-btn>
</mxl-input-group>`,
                    demo2: 
`
/**
 * 当在前后放置文本或图标时 可以使用 mxl-input-group-text 包裹
 *      mxl-input-group-text
 *          属性
 *              type 情景色 http://code.z01.com/v4/utilities/colors.html#background-color
 */
<mxl-input-group>
    <mxl-input></mxl-input>
    <mxl-input-group-text slot="prepend" type="primary">
        <i class="fa fa-times"></i>
    </mxl-input-group-text>
    <mxl-input-group-text slot="append" type="light">
        hi
    </mxl-input-group-text>
</mxl-input-group>`
                };
            }
        }
    };
</script>