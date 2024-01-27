<template>
    <input type="button" value="C" id="config">
</template>

<script>
    export default{
        name:'config'
    }
</script>

<style scoped>
    #config{
        width: 30px;
        height: 30px;
        border: 1px solid black;
        border-radius: 100%;
        background-color: aqua;
        color:white;
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }
</style>