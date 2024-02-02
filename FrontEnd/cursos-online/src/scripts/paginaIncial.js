// Uteis

function gerarCodigo(){
    let x = 0
    let codigo = ""
    while (x <6){
        let a = Math.floor(Math.random() * 10)
        a = String(a)
        codigo = codigo+`${a}`
        x++
    }
    return codigo
}

function setCookie(nome, valor, duracaoEmDias) {
    const dataExpiracao = new Date()
    dataExpiracao.setTime(dataExpiracao.getTime() + (duracaoEmDias * 24 * 60 * 60 * 1000))
  
    const expires = "expires=" + dataExpiracao.toUTCString()
    document.cookie = nome + "=" + valor + ";" + expires + ";path=/"
  }


function getCookieValue(nome) {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim()

        if (cookie.startsWith(nome + "=")) {
        return cookie.substring(nome.length + 1, cookie.length);
        }
    }
    return null
}

// Conta

async function requisicaoPost(url, dados) {
    const configuracaoRequisicao = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
    }

    try {
        const resposta = await fetch(url, configuracaoRequisicao)
        const dadosResposta = await resposta.json()
        return dadosResposta;
    } catch (erro) {
        throw erro
    }
}

async function contaLogar() {
    const url = 'http://127.0.0.1:5000/conta/logarConta'

    let email = document.getElementById('logarEmail')
    let senha = document.getElementById('logarSenha')
    email = String(email.value)
    senha = String(senha.value)

    const dados = {
        email: email,
        senha: senha,
    };

    try {
        const resultado = await requisicaoPost(url, dados)
        if (resultado[0] == true){
            setCookie('emailCookie',email,30)
            setCookie('senhaCookie',senha,30)
            return true
        } else {
            return false
        }
    } catch (erro) {
    }
}

async function criarConta() {

    codigoInserido = String(document.getElementById('confirmarCodigo').value)
    codigo = getCookieValue('codigoCookie')
    
    if(codigo == codigoInserido){

        nome = getCookieValue('nomeCookie')
        email = getCookieValue('emailCookie')
        senha = getCookieValue('senhaCookie')

        const url = 'http://127.0.0.1:5000/conta/criarConta'

        const dados = {
            nome: nome,
            email: email,
            senha: senha,
        };
    
        try {
            const resultado = await requisicaoPost(url, dados)
            console.log(resultado)
            console.log(resultado[0])
            if (resultado[0] == true){
                setCookie('emailCookie',email,30)
                setCookie('senhaCookie',senha,30)
                return true
            }
            else{
                return false
            }
            
        } catch (erro) {
        }
    } else {
        avisoConfirmar.innerHTML = "Código Errado"
    }
} 

async function verificarConta(nome,email,senha,codigo){
    const url = 'http://127.0.0.1:5000/conta/verificarEmail'

    setCookie('nomeCookie',nome,3)
    setCookie('emailCookie',email,3)
    setCookie('senhaCookie',senha,3)
    setCookie('codigoCookie',codigo,3)

    const dados = {
        nome:nome,
        email: email,
        codigo: codigo,
    };

    try {
        const resultado = await requisicaoPost(url, dados)
        return resultado
        
    } catch (erro) {
    }
}

async function verificarEstadoInicial(){
    let email = getCookieValue('emailCookie')
    let senha = getCookieValue('senhaCookie')

    const url = 'http://127.0.0.1:5000/conta/logarConta'

    const dados = {
        email: email,
        senha: senha,
    };

    try {
        const resultado = await requisicaoPost(url, dados)
        if (resultado[0] == true){
            return true
        } else {
            return false
        }
    } catch (erro) {
    }
}

function deslogarConta(){
    setCookie('emailCookie','',1)
    setCookie('senhaCookie','',1)
    location.reload()
}