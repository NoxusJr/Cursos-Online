<template>
        <main>
        <input type="button" value="M" id="botaoChangeMode" onclick="trocarModo(),salvarModo()">

        <h2 id="conteudo">Conteudo</h2>
        <div id="scrollBox">
            <div id="cursoBox">
                <div class="curso"></div>
                <div class="curso"></div>
                <div class="curso"></div>
                <div class="curso"></div>
                <div class="curso"></div>
                <div class="curso"></div>
            </div>
        </div>
        <h2 id="quemSomos">Quem Somos?</h2>
        <p id="pQuemSomos">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore iure tenetur, voluptatum cupiditate praesentium animi eaque at illo recusandae alias sit repellat minus assumen</p>
        
        <h2 id="comoFunciona">Como Funciona?</h2>
        <p id="pComoFunciona">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit facilis labore ab esse expedita ipsa ratione doloremque, maxime officia quam rerum ea fuga, qui aliquid.</p>

        <h2 id="objetivo">Objetivo do projeto</h2>
        <p id="pObjetivo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet tempora sapiente voluptate harum debitis earum quam, nesciunt nostrum eum autem recusandae placeat ipsa dolorum soluta dolores exercitationem. Unde, id?</p>

        
        <div id="foto"></div>
        <div id="linksBox">
            <a target="_blank" class="linkCredito" id="codigoProjeto" href="https://github.com/NoxusJr/Cursos-Online">Codigo Do Projeto</a>
            <a target="_blank" class="linkCredito" id="meuPortfolio" href="https://noxusjr.github.io/Portfolio">Meu Portfólio</a>
            <a target="_blank" class="linkCredito" id="meuGithub" href="https://github.com/NoxusJr">Meu GitHub</a>
        </div>
    </main>

    
</template>


<script>
    export default {
        name:"main"
    }
</script>


<style>
    *{
        transition: 0.3777s;
    }

    main{
        position: absolute;
        top: 0px;
        right: 0px;
        width: 60vw;
        max-width: 60%;
        min-height: 100vh;
        height: auto;
        background-color: var(--Main-Background);
        z-index: 1;
        overflow-x: hidden;
        padding-bottom: 30px;
    }

    h2{
        color: var(--Main-H2);
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 35px;
        margin-left: 20px;
        margin-top: 40px;
    }

    #scrollBox{
        overflow-x: scroll;
    }

    #scrollBox::-webkit-scrollbar{
        background-color: var(--Main-ScrollBar);
        height: 10px;
    }

    #scrollBox::-webkit-scrollbar-thumb{
        background-color: var(--Main-ScrollBar-Thumb);
    }

    #scrollBox::-webkit-scrollbar-button{
        background-color: var(--Main-ScrollBar-Button);
        width: 10px;    
    }

    #cursoBox{
        display: flex;
        flex-wrap: nowrap;
        width: 110vw;
        margin-left: -90px;
    }

    .curso{
        margin: 10px;
        width: 300px;
        height: 130px;
        background-color: var(--Main-Div);
    }

    h2#conteudo{
        margin-top: 30px;
    }

    main > p {
        margin-left: 20px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        width: 50vw;
        font-size: 16px;
        color: var(--Main-P);
    }

    div#foto{
        margin: auto;
        margin-top: 60px;
        width: 250px;
        height: 250px;
        background-color: var(--Main-Div);
        border: 2px solid black;
        border-radius: 0%;
    }

    div#linksBox{
        margin-top: 20px;
        width: 60vw;
        text-align: center;
    }

    a.linkCredito{    
        margin: 2px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        text-decoration: none;
        color: var(--Main-Credito-Texto);
        width: 200px;
        padding:5px;
        background-color: var(--Main-Credito-Background);
        border: 2px solid black;
        border-radius: 5px;
    }

    a.linkCredito:hover{
        color: var(--Main-Credito-Texto-Hover);
        background-color: var(--Main-Credito-Background-Hover);
    }

    input#botaoChangeMode{
        position: absolute;
        top: 3px;
        right: 3px;
        width: 30px;
        height: 30px;
        border: 1px solid black;
        border-radius: 100%;
        background-color: var(--Main-H2);
        cursor: pointer;
    }
</style>