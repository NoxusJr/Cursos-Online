<template>
    <section id="section-logar">
        <input type="text" name="email" id="logarEmail" class="form-login" placeholder="Insira seu email">
        <input type="text" name="senha" id="logarSenha" class="form-login" placeholder="Insira sua senha">
        <input type="button" value="LOGAR" id="botaoLogar" class="form-login" onclick="logar()">
        <p class="form-login">Ainda Não Tem Uma Conta? <span @click="childToCriar" class="form-login">Cadastre-se</span></p>
        <p id="avisoLogin" class="form-login"></p>
    </section>
</template>


<script>
    export default{
        name:"form-login",
        methods:{
            childToCriar(){
                this.$emit('childToCriar');
            }
        }
    }

</script>


<style>
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

</style>