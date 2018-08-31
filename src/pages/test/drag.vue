<template>
    <mxl-btn @click="($event) => hi($event)">x</mxl-btn>
</template>

<script>
export default {
    methods: {
        hi(a){
            console.log(a);
        }
    }
}
</script>

