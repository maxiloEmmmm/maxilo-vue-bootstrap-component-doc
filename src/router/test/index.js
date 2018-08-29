import maxiloVue from 'maxilo-vue';
import './middleware';
let $router = maxiloVue.router.getRoute();

$router.add('/path/to', () =>
    import ('../../pages/test/index'));

$router.add('/test/component', () =>
    import ('../../pages/test/component'))

$router.add('/index', () =>
    import ('pages/index'));

$router.add('/data/table', () =>
    import ('pages/data/table.vue'));


$router.add('/layout/listGroup', () =>
    import ('pages/layout/listGroup.vue'));
$router.add('/layout/listInLine', () =>
    import ('pages/layout/listInLine.vue'));
$router.add('/layout/box', () =>
    import ('pages/layout/box.vue'));
$router.add('/layout/container', () =>
    import ('pages/layout/container.vue'));
$router.add('/layout/col', () =>
    import ('pages/layout/col.vue'));
$router.add('/layout/cols', () =>
    import ('pages/layout/cols.vue'));
$router.add('/layout/row', () =>
    import ('pages/layout/row.vue'));
$router.add('/layout/rowcol', () =>
    import ('pages/layout/rowcol.vue'));
$router.add('/layout/hierarchy', () =>
    import('pages/layout/hierarchy.vue'));


$router.add('/lib/alert', () =>
    import ('pages/lib/alert.vue'));
$router.add('/lib/modal', () =>
    import ('pages/lib/modal.vue'));
$router.add('/lib/emotion-text', () =>
    import ('pages/lib/emotion-text.vue'));
$router.add('/lib/loading', () =>
    import ('pages/lib/loading.vue'));
$router.add('/lib/loading/block', () =>
    import ('pages/lib/loading-block.vue'));
$router.add('/lib/tab', () =>
    import ('pages/lib/tab.vue'));
$router.add('/lib/card', () =>
    import ('pages/lib/card.vue'));
$router.add('/lib/dashboard', () =>
    import ('pages/lib/dashboard.vue'));

$router.add('/form/btn', () =>
    import ('pages/form/btn.vue'));
$router.add('/form/btn-group', () =>
    import ('pages/form/btn-group.vue'));
$router.add('/form/select', () =>
    import ('pages/form/select.vue'));
$router.add('/form/input', () =>
    import ('pages/form/input.vue'));
$router.add('/form/date', () =>
    import ('pages/form/date.vue'));
$router.add('/form/editor', () =>
    import ('pages/form/editor.vue'));
$router.add('/form/switch', () =>
    import ('pages/form/switch.vue'));
$router.add('/form/cascade', () =>
    import ('pages/form/cascade.vue'));
$router.add('/form/container', () =>
    import ('pages/form/container.vue'));
$router.add('/form/input-group', () =>
    import('pages/form/input-group.vue'));
$router.add('/form/drop-menu', () =>
    import ('pages/form/drop-menu.vue'));

$router.add('/example/dashboard', () =>
    import ('pages/example/dashboard/index.vue'));
$router.add('/example/dashboard/work-space', () =>
    import ('pages/example/dashboard/work-space.vue'));

$router.add('/wait', () =>
    import ('pages/wait.vue'));