<template>
    <header id="header-paginaInicial">
            <h1>CURSOS <br> ONLINE</h1>
            <p id="descricao">os melhores cursos em um só lugar</p>

            <div v-if="showForm">
                <FormLogin @childToCriar="toCriar" v-if="showLogar"></FormLogin>
                <FormCriar @childToLogar="toLogar" v-if="showCriar"></FormCriar>
            </div>

            <div v-else>
                <input class="botaoConta" id="botaoLogar" type="button" value="LOGAR" @click="toLogar">
                <input class="botaoConta" id="botaoCadastrar" type="button" value="CADASTRAR" @click="toCriar">
            </div>

            <p id="tecnologia">Powered By: <span class="VueJs">VueJs</span> + <span class="Py">Python</span>+<span class="Yt">Yt</span></p>
            <p id="creditos">Desenvolvido Por: <a target="_blank" href="https://github.com/NoxusJr">NoxusJr</a></p>
    </header>
</template>


<script>
    import FormLogin from './itens/form-login.vue';
    import FormCriar from './itens/form-criar.vue';

    export default {
        name:"header",
        components: {
            FormLogin,
            FormCriar
        },
        data(){
            return{
                showForm: false,
                showLogar: false,
                showCriar: false,
            }
        },
        methods: {
            toLogar(){
                changeToLogar(this,this.showForm,this.showLogar)
            },
            toCriar(){
                changeToCriar(this,this.showForm,this.showCriar)
            }
        }
    }
</script>


<style>
    @font-face {
        font-family: SquadaOne;
        src: url('../../fonts/SquadaOne-Regular.ttf');
    }

    header#header-paginaInicial{
        position: fixed;
        top: 0px;
        left: 0px;
        width: 40vw;
        max-width: 40%;
        height: 100vh;
        background-color: var(--Header-Background);
        text-align: center;
        z-index: 2;
    }

    header#header-paginaInicial > h1{
        margin: auto;
        margin-top: 30px;
        text-align: center;
        color: var(--Header-H1);
        font-family: SquadaOne;
        font-size: 70px;
    }

    header#header-paginaInicial > p#descricao{
        color: var(--Header-P);
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        text-align: center;
    }

    input.botaoConta{
        margin: 15px;
        margin-top: 80px;
        width: 130px;
        height: 30px;
        border-radius: 0;
        border: 0px;
        background-color: var(--Header-Botao-Background);
        color: var(--Header-Botao-Texto);
        font-weight: bolder;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        cursor: pointer;
    }

    input.botaoConta:hover{
        background-color: #1d1d1d;
    }

    header#header-paginaInicial > p#tecnologia{
        margin-top: 90px;
        color: var(--Header-P);
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    header#header-paginaInicial > p#creditos{
        margin-top: 10px;
        color: var(--Header-P);
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    header#header-paginaInicial > p > a{
        color: var(--Header-NoxusJr)
    }

    header#header-paginaInicial > p > a:hover{
        color: var(--Header-NoxusJr-Hover)
    }


    .VueJs{
        color: var(--Header-VueJs);
    }

    .Yt{
        color: var(--Header-PhPYt);
    }

    .Py{
        color: rgb(0, 0, 204);
    }

</style>