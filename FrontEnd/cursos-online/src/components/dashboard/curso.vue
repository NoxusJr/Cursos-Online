<template>
    <div id="playerPlaylist">
        <iframe :src="`https://www.youtube.com/embed/${ urlPlaylist }`" frameborder="0"  allowfullscreen></iframe>
    </div>
</template>


<script>
    export default{
        name:'curso',
        methods:{},
        props:{
            urlPlaylist:{
                type: String,
                required: true
            }
        }
    }
</script>


<style>
    #playerPlaylist{
        margin:auto;
        margin-top: 150px;
        text-align: center;
    }

    iframe{
        width: 560px;
        height: 315px;
    }
</style>