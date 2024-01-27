<template>
    <BarraBusca v-if="verBusca"></BarraBusca>

    <BotaoConfig @click="mostrarConfiguracoes"></BotaoConfig>

    <div id="divConfig" v-if="verConfig">
        <h1 id="h1Config">Esta área está em manutenção..</h1>
        <input type="button" value="SAIR" onclick="deslogarConta()" id="deslogar">    
    </div>

    <div v-if="visaoGeral" id="pesquisa-box">
        <div id="pesquisa-container">
            <div @click="mostrarPlaylist(idCursoPython)" id="curso-python" class="curso"></div>
            <div @click="mostrarPlaylist(idCursoJs)" id="curso-javascript" class="curso"></div>
            <div @click="mostrarPlaylist(idCursoCozinha)" id="curso-cozinha" class="curso"></div>
            <div @click="mostrarPlaylist(idCursoCalculo)" id="curso-calculo" class="curso"></div>
            <div @click="mostrarPlaylist(idCursoLaravel)" id="curso-laravel" class="curso"></div>
            <div @click="mostrarPlaylist(idCursoIngles)" id="curso-ingles" class="curso"></div>
            <div @click="mostrarPlaylist(idCursoFisica)" id="curso-fisica" class="curso"></div>
            <div @click="mostrarPlaylist(idCursoVue)" id="curso-vue" class="curso"></div>
            <div @click="mostrarPlaylist(idCursoAdm)" id="curso-adm" class="curso"></div>
        </div>
    </div>

    <div v-if="verPlaylist">
        <input @click="mostrarTodasPlaylists" type="button" value="&#8592" id="voltarDaPlaylist">
        <PlayList :urlPlaylist="propDinamico"></PlayList>
    </div>    

</template>


<script>
    import PlayList from '../components/dashboard/curso.vue'
    import BarraBusca from '../components/dashboard/itens/busca.vue'
    import BotaoConfig from '../components/dashboard/itens/config.vue'

    export default{
        name:'dashboard',
        components:{
            PlayList,
            BarraBusca,
            BotaoConfig,
        },
        data(){
            return{
                visaoGeral: true,
                verPlaylist:false,
                verConfig:false,
                verBusca:true,
                propDinamico:'',
                idCursoPython:'playlist?list=PLHz_AreHm4dlKP6QQCekuIPky1CiwmdI6',
                idCursoJs:'playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1',
                idCursoLaravel:'playlist?list=PLnDvRpP8BnewYKI1n2chQrrR4EYiJKbUG',
                idCursoCozinha:'playlist?list=PLkQ6jjj52roiYogDGO9oXANRRdJ3qxOtU',
                idCursoIngles:'playlist?list=PLHz_AreHm4dl8FBQLBC0bWSdL2FGmZnne',
                idCursoFisica:'playlist?list=PLDZq_b995jD0HhKOurnyBu6UdBs8TrXEJ',
                idCursoVue:'playlist?list=PLnDvRpP8BnezDglaAvtWgQXzsOmXUuRHL',
                idCursoAdm:'playlist?list=PLPjPQR5HICvVZ_jIacocZ-U2MYJBkncLz',
                idCursoCalculo:'playlist?list=PLEfwqyY2ox86LhxKybOY3_IG-7R5herLC',
            }
        },

        methods:{
            mostrarPlaylist(idPlaylist){
                this.visaoGeral = false
                this.verPlaylist = true
                this.verBusca = false
                this.propDinamico = idPlaylist
            },
            mostrarConfiguracoes(){
                this.verConfig = !this.verConfig
                this.verBusca = false
            },
            mostrarTodasPlaylists(){
                this.verPlaylist = false
                this.visaoGeral = true
                this.verConfig = false
                this.verBusca = true
            }
        },

    }
</script>


<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: 0.01s;
    }

    #divConfig{
        position: absolute;
        width: 50vw;
        height: 400px;
        background-color: #535353;
        border: 5px solid #303030;
        top: 50%; 
        left: 50%; 
        transform: translate(-50%, -50%);
        text-align: center;
    }

    #h1Config{
        color: white;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        text-align: center;
        padding-top: 100px;
    }

    #deslogar{
        position: relative;
        margin: auto;
        margin-top: 70px;
        text-align: center;
        width: 100px;
        height: 30px;
        cursor:pointer;
        border: 2px solid black;
        background-color:#909090;
        color: white;
    }

    #voltarDaPlaylist{
        width: 30px;
        height: 30px;
        position: absolute;
        top: 8px;
        left: 10px;
        border: 0px;
        background-color: transparent;
        cursor: pointer;
        font-size: 30px;
        color: white;
        text-align: center;
    }

    #pesquisa-box{
        width: 100vw;
        max-width: 100%;
    }

    #pesquisa-container{
        margin: auto;
        margin-top: 125px;
        display: flex;  
        max-width: 999px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .curso{
        margin: 10px;
        margin-top:25px;
        background-color: rgb(170, 170, 170);
        width: 307px;
        height: 175px;
        max-width: 307px;
        max-height: 175px;
        cursor:pointer;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .curso:hover{
        border: 5px solid #0097B2;
    }

    /* CURSOS */

    #curso-python{
        background: url(../img/cursos-thumb/python.png);
    }

    #curso-javascript{
        background: url(../img/cursos-thumb/js.png);
    }

    #curso-cozinha{
        background: url(../img/cursos-thumb/gastronomia.png);
    }

    #curso-calculo{
        background: url(../img/cursos-thumb/calculo.png);
    }

    #curso-laravel{
        background: url(../img/cursos-thumb/laravel.png);
    }

    #curso-ingles{
        background: url(../img/cursos-thumb/ingles.png);
    }

    #curso-fisica{
        background: url(../img/cursos-thumb/fisica.png);
    }

    #curso-vue{
        background: url(../img/cursos-thumb/vue.png);
    }

    #curso-adm{
        background: url(../img/cursos-thumb/adm.png);
    }

</style>