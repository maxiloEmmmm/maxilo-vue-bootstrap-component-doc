import maxiloVue from 'maxilo-vue';
import App from './App';
import './config';
import './router';
import './store';
import './i18n';
import './utils';
import './component';
import('highlight.js/styles/monokai-sublime.css');
maxiloVue.targetComponent = App;
maxiloVue.vue.use({
    install(vue){
        vue.directive('highlight', async function (el, bind, vnode) {
                await vue.nextTick();
                /* 清除已存在highlight */
                el.innerHTML = '';
                /* 设置新的code */
                el.textContent = vnode.children[0].text
                /* 计算行数 */
                let lines = vnode.children[0].text.split('\n').length;
                /* 删除上一次行号列表 */
                el.parentNode.getElementsByClassName('pre-numbering').length !== 0 && el.parentNode.getElementsByClassName('pre-numbering')[0].remove();
                /* 创建行号容器 */
                let node = document.createElement('ul');
                node.classList.add('pre-numbering');
                el.parentNode.appendChild(node);
                /* 填充行号容器 */
                el.classList.add('has-numbering');
                let target = el.parentNode.getElementsByClassName('pre-numbering')[0];
                for (let i = 1; i <= lines; i++) {
                    let node = document.createElement('li');
                    node.innerHTML = i;
                    target.appendChild(node);
                }
                let highlightJs = await import('highlight.js');
                highlightJs.highlightBlock(el);
            }
        );
    }
});

//hook
import './mock.js';

maxiloVue.run();