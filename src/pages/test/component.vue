<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <mxl-form-container v-mxl-loading="hi" ref="test">
                    <mxl-input v-for="i in 5" :key="i">{{ i }}</mxl-input>
                </mxl-form-container>
                <!-- <mxl-loading-build v-model="hi" ref="test"></mxl-loading-build> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            q: '<h3>2</h3>',
            s: [
                {label: 123, value: 1, hasChild: 1, childs: [{label: '1-2', value: 3, hasChild: 0}]},
                {label: 1234, value: 2, hasChild: 1, childs: []},
            ],
            hi: true
        };
    },
    async mounted () {
        
    },
    methods: {
    }
}
</script>




