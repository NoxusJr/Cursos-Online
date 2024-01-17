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
        console.log(resultado[0])
    } catch (erro) {
        console.error('Erro no login:', erro)
    }
}

async function criarConta() {
    const url = 'http://127.0.0.1:5000/conta/criarConta'

    let nome = document.getElementById('criarNome')
    let email = document.getElementById('criarEmail')
    let senha = document.getElementById('criarSenha')

    nome = String(nome.value)
    email = String(email.value)
    senha = String(senha.value)

    const dados = {
        nome: nome,
        email: email,
        senha: senha,
    };

    try {
        const resultado = await requisicaoPost(url, dados)
        console.log(resultado[0])
    } catch (erro) {
        console.error('Erro no login:', erro)
    }
}