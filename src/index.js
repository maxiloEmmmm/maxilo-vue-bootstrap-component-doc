import maxiloVue from 'maxilo-vue';
import App from './App';
import './config';
import './router';
import './store';
import './i18n';
import './utils';
import './component';
import highlightJs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css'
maxiloVue.targetComponent = App;
maxiloVue.vue.use({
    install(vue){
        vue.directive('highlight', {
            inserted: function (el) {
                let lines = el.innerHTML.split('\n').length;
                el.classList.add('has-numbering');
                setTimeout(() => {
                    let node = document.createElement('ul');
                    node.classList.add('pre-numbering');
                    el.parentNode.appendChild(node);
                    let target = el.parentNode.getElementsByClassName('pre-numbering')[0];
                    for (let i = 1; i <= lines; i++) {
                        let node = document.createElement('li');
                        node.innerHTML = i;
                        target.appendChild(node);
                    }
                    highlightJs.highlightBlock(el);
                }, 0)
            }
        });
    }
});

//hook
import './mock.js';

maxiloVue.run();