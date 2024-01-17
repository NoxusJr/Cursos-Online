<template>
    <section class="form-criar" >
        <input type="text" name="nome" id="criarNome" class="form-criar" placeholder="Insira seu nome">
        <input type="text" name="email" id="criarEmail" class="form-criar" placeholder="Insira seu email">
        <input type="text" name="senha" id="criarSenha" class="form-criar" placeholder="Insira sua senha">
        <input type="text" name="senhaNovamente" id="senhaNovamente" class="form-criar" placeholder="Confirme sua senha">
        <input type="button" value="CRIAR CONTA" id="botaoCriar" class="form-criar" onclick="criarConta()">
        <p class="form-criar">Já Possui Uma Conta? <span @click="childToLogar" class="form-criar">Faça Login!</span></p>
        <p id="avisoCriar" class="form-criar"></p>
    </section>
</template>


<script>
    export default{
        name:"form-criar",
        methods:{
            childToLogar(){
                this.$emit('childToLogar');
            }
        }
    }
</script>


<style>
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

</style>