<template>
    <header id="header-paginaInicial">
            <h1>CURSOS <br> ONLINE</h1>
            <p id="descricao">os melhores cursos em um só lugar</p>

          
            <div v-if="showForm">
                <section v-if=showCriar class="form-criar" >
                    <input type="text" name="nome" id="criarNome" class="form-criar" placeholder="Insira seu nome">
                    <input type="text" name="email" id="criarEmail" class="form-criar" placeholder="Insira seu email">
                    <input type="password" name="senha" id="criarSenha" class="form-criar" placeholder="Insira sua senha">
                    <input type="password" name="senhaNovamente" id="senhaNovamente" class="form-criar" placeholder="Confirme sua senha">
                    <input type="button" value="CRIAR CONTA" id="botaoCriar" class="form-criar" @click="cliqueCriarConta">
                    <p class="form-criar">Já Possui Uma Conta? <span @click="cliqueLogar" class="form-criar">Faça Login!</span></p>
                    <p id="avisoCriar" class="form-criar"></p>
                </section>

                <section v-if="showLogar" id="section-logar">
                    <input type="text" name="email" id="logarEmail" class="form-login" placeholder="Insira seu email">
                    <input type="password" name="senha" id="logarSenha" class="form-login" placeholder="Insira sua senha">
                    <input type="button" value="LOGAR" id="botaoLogar" class="form-login" @click="cliqueFazerLogin">
                    <p class="form-login">Ainda Não Tem Uma Conta? <span @click="cliqueCadastrar" class="form-login">Cadastre-se</span></p>
                    <p id="avisoLogin" class="form-login"></p>
                </section>

                <section v-if="showConfirmar" id="sectionConfirmar">
                    <h3 id="h3Confirmar">Um código foi enviado para seu Email.</h3>
                    <input class="confirmarBotoes" type="text" name="confirmarCodigo" id="confirmarCodigo">
                    <input class="confirmarBotoes" type="button" value="CONFIRMAR" id="botaoConfirmar" @click="cliqueConfirmar">
                    <p id="avisoConfirmar"></p>
                </section>
            </div>
            
            <div v-else>
                <input class="botaoConta" id="botaoLogar" type="button" value="LOGAR" @click="cliqueLogar">
                <input class="botaoConta" id="botaoCadastrar" type="button" value="CADASTRAR" @click="cliqueCadastrar">
            </div>
   

            <p id="tecnologia">Powered By: <span class="VueJs">VueJs</span> + <span class="Py">Python</span> + <span class="Yt">Yt</span></p>
            <p id="creditos">Desenvolvido Por: <a target="_blank" href="https://github.com/NoxusJr">NoxusJr</a></p>
    </header>
</template>


<script>

    export default {
        name:"header",
        data(){
            return{
                showForm: false,
                showLogar: false,
                showCriar: false,
                showConfirmar: false,
                logado:false,
            }
        },
        props:['objetoPai'],

        methods: {
            cliqueLogar(){
                this.showForm = true
                this.showLogar = true
                this.showCriar = false
                this.showConfirmar = false
            },
            cliqueCadastrar(){
                this.showForm = true
                this.showLogar = false
                this.showCriar = true
                this.showConfirmar = false      
            },
            async cliqueCriarConta(){
                let senha = String(document.getElementById('criarSenha').value)
                let senhaNovamente = String(document.getElementById('senhaNovamente').value)
                let nome = String(document.getElementById('criarNome').value)
                let email = String(document.getElementById('criarEmail').value)

                if (senha==senhaNovamente){
                    let codigo = gerarCodigo()
                    let resultado = await verificarConta(nome,email,senha,codigo)
                    
                    if (resultado[0][0] == false){
                        avisoCriar.innerHTML = "Email Já Utilizado"
                    } else {
                        this.showCriar = false
                        this.showConfirmar = true
                    }
                } else {
                    avisoCriar.innerHTML = "Senhas Incompativeis"
                }
            },
            async cliqueConfirmar(){
                let resultado = await criarConta()
                if (resultado == false){
                    avisoConfirmar.innerHTML = "Algum erro aconteceu"
                } else {
                    // LÓGICA PARA IR PARA O DASHBOARD
                    console.log('logado')
                }
            },
            async cliqueFazerLogin(){
                let resultado = await contaLogar()
                if (resultado == true){
                    this.logado = true
                    console.log('oii')
                    this.$emit('atualizar-estado-login',this.logado)
                } else {
                    avisoLogin.innerHTML = "Conta Não Encontrada"
                }
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
        color: rgb(0, 0, 228);
    }

    section.form-criar{
        text-align:center;
        width:100%;
    }

    input.form-criar{
        margin:auto;
        margin-top:25px;
        text-align: center;
        display:block;
        width: 250px;
        height: 30px;
        border-radius: 0;
        border: 0px;
        background-color: var(--Header-Botao-Background);
        color: var(--Header-Botao-Texto);
        font-weight: bolder;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
    p.form-criar{
        margin-top:15px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:white;
    }

    p#avisoCriar{
        color:red;
    }

    #botaoCriar{
        margin-top:20px;
        width: 130px;
        height: 30px;
        cursor:pointer;
    }

    #botaoCriar:hover{
        background-color:#1d1d1d;
    }

    span.form-criar{
        color:var(--Header-VueJs);
        cursor:pointer;
        text-decoration: underline;
    }

    section#section-logar{
        text-align:center;
        width:100%;
    }

    input.form-login{
        margin:auto;
        margin-top:25px;
        text-align: center;
        display:block;
        width: 250px;
        height: 30px;
        border-radius: 0;
        border: 0px;
        background-color: var(--Header-Botao-Background);
        color: var(--Header-Botao-Texto);
        font-weight: bolder;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
    p.form-login{
        margin-top:15px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:white;
    }

    p#avisoLogin{
        color:red;
    }

    #botaoLogar{
        margin-top:20px;
        width: 130px;
        height: 30px;
        cursor:pointer;
    }

    #botaoLogar:hover{
        background-color:#1d1d1d;
    }

    span.form-login{
        color:var(--Header-VueJs);
        cursor:pointer;
        text-decoration: underline;
    }

    .confirmarBotoes{
        margin: auto;
        margin-top: 30px;
        display: block;
        width: 250px;
        height: 30px;
        border-radius: 0;
        border: 0px;
        background-color: var(--Header-Botao-Background);
        color: var(--Header-Botao-Texto);
        text-align: center;
        font-weight: bolder;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    #botaoConfirmar{
        margin-top: 20px;
        cursor:pointer;
    }

    #h3Confirmar{
        margin-top: 15px;
        color: white;
        font-size: 16px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    #botaoConfirmar:hover{
        background-color:#1d1d1d;
    }

    #avisoConfirmar{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin-top: 15px;
        color: red;
    }
</style>