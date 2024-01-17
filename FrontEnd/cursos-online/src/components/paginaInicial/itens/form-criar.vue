<template>
    <section class="form-criar" >
        <input type="text" name="nome" id="nome" class="form-criar">
        <input type="text" name="email" id="email" class="form-criar">
        <input type="text" name="senha" id="senha" class="form-criar">
        <input type="text" name="senhaNovamente" id="senhaNovamente" class="form-criar">
        <input type="button" value="CRIAR CONTA" id="botaoCriar" class="form-criar">
        <p class="form-criar">Já Possui Uma Conta? <a class="form-criar" href="#">Faça Login!</a></p>
    </section>
</template>


<script>
    export default{
        name:"form-criar"
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

    #botaoCriar{
        margin-top:20px;
        width: 130px;
        height: 30px;
        cursor:pointer;
    }

    #botaoCriar:hover{
        background-color:#1d1d1d;
    }

    a.form-criar{
        color:var(--Header-VueJs)
    }

</style>