<template> 
    <div class="container-fluid">
        <mxl-row>
            <mxl-col :size="2" v-show="active" layoutModel="xs" style="height:100vh" class="border-right border-light shadow-sm">
                <mxl-tree :data="assets.menus" @touch="getInfo" :spreadLevel="2"></mxl-tree>
            </mxl-col>
            <mxl-col :size="active ? 10 : 12" layoutModel="xs">
                <mxl-btn class="mt-1" @click="active = !active"> {{ active ? '隐藏' : '显示' }}</mxl-btn>
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
                    {title: 'test', href: '/path/to'}
                ]},
                {title: 'Layout', href: '#', hasChild: 1, children: [
                    {title: '卡片', href: '/layout/card'},
                ]}
            ]);
        },
        getInfo(d){
            this.current = d.href;
        }
    }
}
</script>

