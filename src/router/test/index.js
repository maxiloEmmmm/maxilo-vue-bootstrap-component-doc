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


$router.add('/layout/card', () =>
    import ('pages/layout/card.vue'));
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

$router.add('/wait', () =>
    import ('pages/wait.vue'));