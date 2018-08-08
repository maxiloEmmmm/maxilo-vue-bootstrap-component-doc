<template>
    <dl>
        <dt>组件名
            <mxl-emotion-text>mxl-hierarchy</mxl-emotion-text>
        </dt>
        <dd>
            <p class="mb-0">无限极分类.</p>
        </dd>

        <dt>基本用法</dt>
        <dd>
            <mxl-card>
                <mxl-hierarchy :options="options"></mxl-hierarchy>
                <mxl-list-group>
                    <mxl-tab :navs="['js', 'template']">
<mxl-highlight type="javascript">
export default {
    data(){
        return {
            options: [
                [
                    {label: 1},
                    {label: 2},
                    {label: 3},
                ], 
                [
                    {label: '1-1'},
                    {label: '1-2'},
                    {label: '1-3'},
                    {label: '1-4'},
                ]
            ]
        }
    }
};</mxl-highlight>
                        <mxl-highlight type="javascript">{{ template.demo1 }}</mxl-highlight>
                    </mxl-tab>
                </mxl-list-group>
            </mxl-card>
        </dd>
    </dl>
</template>

<script>
    export default {
        data(){
            return {
                options: [
                    [
                        {label: 1},
                        {label: 2},
                        {label: 3},
                    ], 
                    [
                        {label: '1-1'},
                        {label: '1-2'},
                        {label: '1-3'},
                        {label: '1-4'},
                    ]
                ]
            }
        },
        computed: {
            template(){
                return {
                    demo1: 
`<mxl-hierarchy :options="options"></mxl-hierarchy>`,
                };
            }
        }
    };
</script>