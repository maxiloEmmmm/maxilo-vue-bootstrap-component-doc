import maxiloVue from 'maxilo-vue';
import './middleware'; 
let $router = maxiloVue.router.getRoute();

$router.add('/path/to', () => import('../../pages/test/index'));

$router.middlewareGroup('auth', function(){
    return [
        $router.add('/test/component', () => import('../../pages/test/component'))
    ];
});

$router.add('/index', () => import('pages/index'));

$router.add('/data/table', () => import('pages/data/table.vue'));