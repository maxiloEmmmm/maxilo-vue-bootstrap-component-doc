<template>
    <div>
        <ul class="nav nav-tabs" role="tablist">
            <li 
                v-for="(nav, index) in navs"
                :key="index"
                style="cursor:pointer"
                class="nav-item">
                <a 
                    :class="['nav-link', index === active ? 'active' : '']"
                    @click="touchNav(nav, index)">
                    {{ nav.label ? nav.label : nav }}
                </a>
            </li>
            <li style="position: absolute;right: 0.5rem;">
                <mxl-btn @click="toggle">{{ paneShow ? '收起来' : '让我看看'}}</mxl-btn>
                <slot name="nav-right" :instance="_self"></slot>
            </li>
        </ul>
        <div class="tab-content" v-show="paneShow">
            <mxl-render
                v-for="i in slotLength" :key="i"
                :render="(h) => slotRender(h, i-1)"
            >
            </mxl-render>
        </div>
    </div>
</template>

<script>
export default {
    name: 'mxlTab',
    data(){
        return {
            active: 0,
            paneShow: true
        }
    },
    props: {
        navs: {
            default(){
                return [];
            },
            type: Array
        }
    },
    computed: {
        currentPane(){
            return (this.navs[this.active] && this.navs[this.active].pane) 
                        ? this.navs[this.active].pane 
                        : (this.active + 1 > this.slotLength ? 0 : this.active);
        },
        slotLength(){
            return this.$slots.default ? this.$slots.default.filter(v => v.tag).length : 0;
        }
    },
    methods: {
        touchNav(item, index){
            this.active = index;
        },
        slotRender(h, i){
            return h('div', {
                class: ['tab-pane', 'fade', 'show', this.currentPane == i ? 'active' : '']
            }, [this.$utils.tool.getSlot(this.$slots.default, i, h)]);
        },
        toggle(){
            this.paneShow = !this.paneShow;
        }
    }
}
</script>

