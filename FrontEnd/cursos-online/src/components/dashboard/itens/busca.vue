<template>
    <div id="barra-de-busca">
        <input type="text" name="input-pesquisa" id="input-pesquisa" @input="buscar">
    </div>
</template>


<script>
    export default {
        name:"busca",
        methods:{
            buscar(){
                let idsDivs = ['curso-python','curso-javascript','curso-laravel','curso-cozinha','curso-calculo','curso-fisica','curso-vue','curso-ingles','curso-adm']
                let busca = (String(document.getElementById("input-pesquisa").value)).toLocaleLowerCase()
                
                for (let i =0; i<idsDivs.length; i++){
                    let div = document.getElementById(idsDivs[i])
                    let id = div.id
                    if (!id.includes(busca)){
                        div.style.display = 'none'
                    } else {
                        div.style.display = 'block'
                    }
                }
            }
        }
    }
</script>


<style>
    :root{
        --background-input-pesquisa:#3B3B3B;
        --background-input-buscar:#2c2c2c;
    }

    div#barra-de-busca{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 25px;
        width: 550px;
        text-align: center; 
    }

    input{
        border: 1px solid black;
    }

    #input-pesquisa{
        border-radius: 30px 30px 30px 30px;
        height: 43px;
        width: 450px;
        background-color: var(--background-input-pesquisa);
        text-align: center;
        color: white;
    }

    @media (max-width:600px) {
        div#barra-de-busca > input {
            width: 400px;
        }

        div#barra-de-busca{
            width:100vw;
            max-width: 100%;
        }
    }

    @media (max-width:500px) {
        div#barra-de-busca > input {
            margin-top: 30px;
            width: 400px;
        }
    }

    @media (max-width:400px) {
        div#barra-de-busca > input {
            margin-top: 30px;
            width: 250px;
        }
    }
</style>