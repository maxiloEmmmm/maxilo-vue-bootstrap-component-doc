<template>
    <mxl-dashboard :nav="nav" :items="menus" :initPage="pages">
        <a slot="tab_right" @click="out"><i class="fa fa fa-sign-out"></i> 退出</a>
    </mxl-dashboard>
</template>

<script>
    export default {
        data() {
            return {
                navHeaderMenu: {
                    '退出': this.out
                },
                pages: [{
                    title: '测试work-space',
                    href: '/example/dashboard/work-space'
                }],
                menus: [
                    {
                    title: 'Data-Dispaly',
                    href: '#',
                    hasChild: 1,
                    children: [{
                        title: '表格',
                        href: '/data/table'
                    }, ]
                }, {
                    title: 'Layout',
                    href: '#',
                    hasChild: 1,
                    children: [{
                        title: '小东西',
                        href: '#',
                        hasChild: 1,
                        children: [{
                            title: '行',
                            href: '/layout/row'
                        }, {
                            title: '列',
                            href: '/layout/col'
                        }, {
                            title: '多列',
                            href: '/layout/cols'
                        }, {
                            title: '一行一列',
                            href: '/layout/rowcol'
                        }, {
                            title: '无限极',
                            href: '/layout/hierarchy'
                        }]
                    }, {
                        title: '列表组',
                        href: '/layout/listGroup'
                    }, {
                        title: '行内组',
                        href: '/layout/listInLine'
                    }, {
                        title: '无限箱子',
                        href: '/layout/box'
                    }, {
                        title: '自适应容器',
                        href: '/layout/container'
                    }, ]
                }, {
                    title: 'Lib',
                    href: '#',
                    hasChild: 1,
                    children: [{
                        title: '警告',
                        href: '/lib/alert'
                    }, {
                        title: '包裹着文字~',
                        href: '/lib/emotion-text'
                    }, {
                        title: '等待',
                        href: '#',
                        hasChild: 1,
                        children: [{
                            title: '小一点',
                            href: '/lib/loading'
                        }, {
                            title: '块',
                            href: '/lib/loading/block'
                        }, ]
                    }, {
                        title: '弹出层',
                        href: '/lib/modal'
                    }, {
                        title: '选项卡',
                        href: '/lib/tab'
                    }, {
                        title: '卡片',
                        href: '/lib/card'
                    }, {
                        title: '后台组件(完善中)',
                        href: '/lib/dashboard'
                    }, ]
                }, {
                    title: 'Form',
                    href: '#',
                    hasChild: 1,
                    children: [{
                        title: '输入框',
                        href: '/form/input'
                    }, {
                        title: '下拉',
                        href: '/form/select'
                    }, {
                        title: '下拉菜单',
                        href: '/form/drop-menu'
                    }, {
                        title: '按钮',
                        href: '/form/btn'
                    }, {
                        title: '按钮组',
                        href: '/form/btn-group'
                    }, {
                        title: '日期',
                        href: '/form/date'
                    }, {
                        title: '编辑器(第三方 - ckeditor5)',
                        href: '/form/editor'
                    }, {
                        title: '开关',
                        href: '/form/switch'
                    }, {
                        title: '联动',
                        href: '/form/cascade'
                    }, {
                        title: '表单容器',
                        href: '/form/container'
                    }, {
                        title: '输入组',
                        href: '/form/input-group'
                    }]
                }]
            }
        },
        methods: {
            async out(){
                this.$utils.diy.alert.base('out');
            }
        },
        computed: {
            nav(){
                return {
                    items: this.menus,
                    headerMenu: this.navHeaderMenu,
                    nick_name: '123',
                    role_name: '123'
                }
            }
        }
    }
</script>