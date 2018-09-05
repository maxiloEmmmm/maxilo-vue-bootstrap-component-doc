<template>
    <div class="container">
        <mxl-row-col>
            <mxl-doc-log-1-0-1 class="mb-1 mt-1"></mxl-doc-log-1-0-1>
            <mxl-doc-log-1-0-0></mxl-doc-log-1-0-0>
        </mxl-row-col>
    </div>
</template>

<script>
import log_1_0_0 from 'pages/logs/log_1_0_0.vue';
import log_1_0_1 from 'pages/logs/log_1_0_1.vue';
export default {
    components: {
        'mxl-doc-log-1-0-0': log_1_0_0,
        'mxl-doc-log-1-0-1': log_1_0_1
    }
}
</script>

