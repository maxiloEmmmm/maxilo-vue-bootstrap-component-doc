<template>
    <mxl-loading-girl title="制作中" :value="true"></mxl-loading-girl>
</template>

<script>
export default {
    mounted () {
        let c = [122, 422, 321, 423, 512,6123, 7123,1238,311,422,1236,6116,6311];
        let max = Math.max(...c);
        let min = Math.min(...c);
        let range = max - min;
        c.forEach(v => {
            console.log(v, Math.ceil((v - min) / range * 6) + 1)
        });

    }
}
</script>

