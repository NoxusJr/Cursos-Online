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
        console.error('Erro na requisição:', erro)
        throw erro; // Rejeita a Promise para que o erro seja propagado
    }
}

async function logar() {
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
        avisoLogin.innerHTML = `${resultado[0][1]}`
    } catch (erro) {
        console.error('Erro no login:', erro)
    }
}

async function criarConta() {

    codigoInserido =''
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
            if (resultado){
                avisoCriar.innerHTML = resultado
            } else{
                avisoCriar.innerHTML = `${resultado[0][1]}`
            }
            
        } catch (erro) {
            console.error('Erro no login:', erro)
        }
    }


} 

async function verificarConta(){
    let senha = String(document.getElementById('criarSenha').value)
    let senhaNovamente = String(document.getElementById('senhaNovamente').value)
    let nome = String(document.getElementById('criarNome').value)
    let email = String(document.getElementById('criarEmail').value)

    if (senha == senhaNovamente){
        const url = 'http://127.0.0.1:5000/conta/verificarEmail'

        setCookie('nomeCookie',nome,3)
        setCookie('emailCookie',email,3)
        setCookie('senhaCookie',senha,3)
        codigo = gerarCodigo()
        setCookie('codigoCookie',codigo,3)

        const dados = {
            email: email,
            codigo: codigo,
        };
    
        try {
            const resultado = await requisicaoPost(url, dados)
            if (resultado){
                avisoCriar.innerHTML = resultado
            } else{
                avisoCriar.innerHTML = `${resultado[0][1]}`
            }
            
        } catch (erro) {
            console.error('Erro no login:', erro)
        }
    }
}

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