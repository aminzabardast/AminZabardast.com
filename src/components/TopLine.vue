<template>
    <div class="top-line"></div>
</template>

<script>
    export default {
        name: "TopLine"
    }
</script>

<style scoped>
    .top-line {
        background-color: #00a693;
        width: 100%;
        height: 10px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
    }
</style>