<template>
    <dl>
        <dt>组件名
            <mxl-emotion-text>mxl-drop-menu</mxl-emotion-text>
        </dt>
        <dd>
            <p class="mb-0">下拉菜单.</p>
        </dd>

        <dt>基本用法</dt>
        <dd>
            <mxl-card>
                <mxl-list-in-line>
                    <mxl-drop-menu :menus="menus">
                        <i class="fa fa-user"></i>
                    </mxl-drop-menu>
                </mxl-list-in-line>
                <mxl-list-group>
                    <mxl-tab :navs="['template', 'js']">
                        <mxl-highlight type="javascript">{{ template.demo1 }}</mxl-highlight>
<mxl-highlight type="javascript">export default {
    data () {
        return {
            menus: [
                {text: 1, fn(){alert(1)}}, 
                {text: 2, fn(val){alert(val.text)}}
            ]
        }
    }
}
</mxl-highlight>
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
                menus: [
                    {text: 1, fn(){alert(1)}}, 
                    {text: 2, fn(val){alert(val.text)}}
                ]
            }
        },
        computed: {
            template(){
                return {
                    demo1: 
`
/**
 * menus 菜单
 *      default: [],
 *      type: Array
 *          text 显示
 *          fn 点击钩子 会传入当前菜单对象
 *          其他自定义属性   
 */
<mxl-drop-menu :menus="menus">
    <i class="fa fa-user"></i>
</mxl-drop-menu>`,
                };
            }
        }
    };
</script>