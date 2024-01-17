<template>
    <section id="section-logar">
        <input type="text" name="email" id="logarEmail" class="form-login">
        <input type="text" name="senha" id="logarSenha" class="form-login">
        <input type="button" value="LOGAR" id="botaoLogar" class="form-login" onclick="logar()">
        <p class="form-login">Ainda Não Tem Uma Conta? <a class="form-login" href="#">Cadastre-se</a></p>
    </section>
</template>


<script>
    export default{
        name:"form-login"
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

    #botaoLogar{
        margin-top:20px;
        width: 130px;
        height: 30px;
        cursor:pointer;
    }

    #botaoLogar:hover{
        background-color:#1d1d1d;
    }

    a.form-login{
        color:var(--Header-VueJs)
    }

</style>