<template> 
    <div class="container-fluid">
        <mxl-row>
            <mxl-col :size="2" v-show="active" layoutModel="xs" style="height:100vh" class="border-right border-light shadow-sm">
                <mxl-tree :data="assets.menus" @touch="getInfo" :spreadLevel="2"></mxl-tree>
            </mxl-col>
            <mxl-col :size="active ? 10 : 12" layoutModel="xs">
                <mxl-list-in-line>
                    <mxl-btn class="mt-1" @click="active = !active"> {{ active ? '隐藏' : '显示' }}</mxl-btn>
                    <mxl-emotion-text>
                        <a style="color:#fff" target="black" href="https://www.npmjs.com/package/maxilo-vue">核心版本: 1.2.79</a>
                    </mxl-emotion-text>
                    <mxl-emotion-text>
                        <a style="color:#fff" target="black" href="https://www.npmjs.com/package/maxilo-vue-bootstrap-component">组件版本: 1.0.73</a>
                    </mxl-emotion-text>
                </mxl-list-in-line>
                <div class="dropdown-divider shadow-sm"></div>
                <div class="embed-responsive embed-responsive-16by9" style="height:90vh">
                    <iframe 
                        class="embed-responsive-item" 
                        :src="current">
                    </iframe>
                </div>
            </mxl-col>
        </mxl-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            assets: {
                menus: []
            },
            current: '',
            active: true
        }
    },
    mounted () {
        this.initMenu();
    },
    methods: {
        initMenu(){
            this.$set(this.assets, 'menus', [
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
                    {title: '卡片', href: '/layout/card'},
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
                ]},
                {title: 'Form', href: '#', hasChild: 1, children: [
                    {title: '输入框', href: '/form/input'},
                    {title: '下拉', href: '/form/select'},
                    {title: '按钮', href: '/form/btn'},
                    {title: '按钮组', href: '/form/btn-group'},
                    {title: '日期', href: '/form/date'},
                    {title: '编辑器(第三方 - ckeditor5)', href: '/form/editor'},
                    {title: '开关', href: '/form/switch'}
                ]}
            ]);
        },
        getInfo(d){
            this.current = d.href;
        }
    }
}
</script>

