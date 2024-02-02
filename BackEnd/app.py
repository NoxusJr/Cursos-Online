from src import *
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)


@cross_origin
@app.route('/conta/verificarEmail', methods=['POST'])
def rota_enviar_email_verificacao():
    dados_do_corpo = request.get_json()
    nome = dados_do_corpo['nome']
    email = dados_do_corpo['email']
    codigo = dados_do_corpo['codigo']

    execucao = usuario.verificar_conta(nome,email,codigo)
    return [execucao]

@cross_origin
@app.route('/conta/criarConta',methods=['POST'])
def rota_criar_conta():
    dados_do_corpo = request.get_json()
    nome = dados_do_corpo['nome']
    email = dados_do_corpo['email']
    senha = dados_do_corpo['senha']

    execucao = usuario.criar_conta(nome,email,senha)
    return [execucao]


@cross_origin
@app.route('/conta/logarConta', methods=['POST'])
def rota_logar_conta():
    dados_do_corpo = request.get_json()
    email = dados_do_corpo['email']
    senha = dados_do_corpo['senha']

    execucao = usuario.logar_conta(email,senha)
    return [execucao]
	

@cross_origin
@app.route('/conta/alterarConta/<valor>,<string:email>,<coluna>',methods=['PUT'])
def rota_alterar_conta(valor,email,coluna):
    execucao = usuario.alterar_conta(valor,email,coluna)
    return [execucao]


@cross_origin
@app.route('/conta/excluirConta/<string:email>', methods=['DELETE'])
def rota_excluir_conta(email):
    execucao = usuario.excluir_conta(email)
    return [execucao]


@cross_origin
@app.route('/status/atualizarStatus/<int:id_curso>,<string:email>,<int:porcentagem_assisitida>',methods=['PUT'])
def rota_atualizar_status(id_curso,email,porcentagem_assisitida):
    execucao = status_usuario.atualizar_status_curso(id_curso,email,porcentagem_assisitida)
    return [execucao]


@cross_origin
@app.route('/status/retornarStatus', methods=['POST'])
def rota_retornar_status():
    dados_do_corpo = request.get_json()
    email = dados_do_corpo['email']

    execucao = status_usuario.retornar_cursos_usuario(email)
    return [execucao]