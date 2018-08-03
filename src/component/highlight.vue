<template><pre class="mxl-pre"><input type="text" style="position: absolute;z-index: -1;" :value="$slots.default[0].text" :id="random"><mxl-btn class="mxl-highlight-copy-btn" data-clipboard-action="copy" :data-clipboard-target="`#${random}`" @click="copy" :id="randomBtn">复制</mxl-btn><code :class="[type, 'mxl-code']" v-highlight><slot></slot></code></pre></template>

<script>
import ClipboardJS from 'clipboard';
export default {
    name: 'highlight',
    data(){
        return {
            random: this.$utils.tool.random('code'),
            randomBtn: this.$utils.tool.random('codeCopyBtn'),
            clipboard: null
        }
    },
    props: {
        type: {
            type: String,
            default: ''
        }
    },
    mounted () {
        this.clipboard = new ClipboardJS(`#${this.randomBtn}`);  
    },
    methods: {
        async copy(){
            this.clipboard.on('success', (e) => {
                this.$utils.diy.alert.base('成功了~');
                e.clearSelection();
                this.clipboard.destroy();
                this.clipboard = new ClipboardJS(`#${this.randomBtn}`);
            });
            this.clipboard.on('error', (e) => {
                this.$utils.diy.alert.base('失败了~');
                this.clipboard.destroy();
                this.clipboard = new ClipboardJS(`#${this.randomBtn}`);
            });
            await this.$nextTick();
            
        }
    }
}
</script>

<style>
.mxl-pre {
    position: relative;
    margin-bottom: 24px;
    border-radius: 3px;
    border: 1px solid #C3CCD0;
    background: #FFF;
    overflow: hidden;
}

.mxl-code {
  display: block;
  padding: 12px 24px;
  overflow-y: auto;
  font-weight: 300;
  font-family: Menlo, monospace;
  font-size: 0.8em;
}

.mxl-code.has-numbering {
    margin-left: 21px;
}

.pre-numbering {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    padding: 12px 2px 12px 0;
    border-right: 1px solid #C3CCD0;
    border-radius: 3px 0 0 3px;
    background-color: #EEE;
    text-align: right;
    font-family: Menlo, monospace;
    font-size: 0.8em;
    color: #AAA;
}

.mxl-highlight-copy-btn {
    position: absolute;
    right: 0.5rem;
    bottom: 0.15rem;
}
</style>


