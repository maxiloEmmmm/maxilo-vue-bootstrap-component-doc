<template>
    <dl>
        <dt>组件名
            <mxl-emotion-text>mxl-dashboard</mxl-emotion-text>
        </dt>
        <dd>
            <p class="mb-0">后台.</p>
        </dd>

        <dt><mxl-alert><a @click="goDashboard" href="#">另一个页面</a></mxl-alert></dt>
        <dd>
            <mxl-card>
                <mxl-list-group>
                    <mxl-tab :navs="['template', 'js']">
                        <mxl-highlight type="javascript">{{ template.demo1 }}</mxl-highlight>
<mxl-highlight type="javascript">export default {
    data () {
        return {
            pages: [
                {title: '测试work-space', href: '/example/dashboard/work-space'}
            ],
            menus: [
                {title: 'Data-Dispaly', href: '#', hasChild: 1, children: [
                    {title: '表格', href: '/data/table'},
                ]},
                {title: 'Layout', href: '#', hasChild: 1, children: [
                    {title: '小东西', href: '#', hasChild: 1, children: [
                        {title: '行', href: '/layout/row'},
                        {title: '列', href: '/layout/col'},
                        {title: '多列', href: '/layout/cols'},
                        {title: '一行一列', href: '/layout/rowcol'},
                        {title: '无限极', href: '/layout/hierarchy'}
                    ]},
                    {title: '列表组', href: '/layout/listGroup'},
                    {title: '行内组', href: '/layout/listInLine'},
                    {title: '无限箱子', href: '/layout/box'},
                    {title: '自适应容器', href: '/layout/container'},
    
                ]},
                {title: 'Lib', href: '#', hasChild: 1, children: [
                    {title: '警告', href: '/lib/alert'},
                    {title: '包裹着文字~', href: '/lib/emotion-text'},
                    {title: '等待', href: '#', hasChild: 1, children: [
                        {title: '小一点', href: '/lib/loading'},
                        {title: '块', href: '/lib/loading/block'},
                    ]},
                    {title: '弹出层', href: '/lib/modal'},
                    {title: '选项卡', href: '/lib/tab'},
                    {title: '卡片', href: '/lib/card'},
                    {title: '后台组件(完善中)', href: '/lib/dashboard'},
                ]},
                {title: 'Form', href: '#', hasChild: 1, children: [
                    {title: '输入框', href: '/form/input'},
                    {title: '下拉', href: '/form/select'},
                    {title: '下拉菜单', href: '/form/drop-menu'},
                    {title: '按钮', href: '/form/btn'},
                    {title: '按钮组', href: '/form/btn-group'},
                    {title: '日期', href: '/form/date'},
                    {title: '编辑器(第三方 - ckeditor5)', href: '/form/editor'},
                    {title: '开关', href: '/form/switch'},
                    {title: '联动', href: '/form/cascade'},
                    {title: '表单容器', href: '/form/container'},
                    {title: '输入组', href: '/form/input-group'}
                ]}
            ]
        }
    }
}</mxl-highlight>
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
`
/**
 * items 菜单项
 *      default: [],
 *      type: Array
 *          href 链接
 *          title 显示名
 * initPage 初始页面
 *      default: [],
 *      type: Array
 *          href 链接
 *          title 显示名
 */
<mxl-dashboard :items="menus" :initPage="pages"></mxl-dashboard>`,
                };
            }
        },
        methods: {
            goDashboard(){
                window.open('/example/dashboard');
            }
        }
    };
</script>