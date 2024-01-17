import gerenciamento_software as gs
from .conexao import *

class Usuario:
    def __init__(self,data_base):
        self.data_base = data_base  


    def criar_conta(self,nome,email,senha):
        resultado = gs.sql_criar_conta(tabela=DB_TABLE_USER,coluna_nome=DB_USER_COLUMN_NAME,coluna_email=DB_USER_COLUMN_EMAIL,coluna_senha=DB_USER_COLUMN_PASS,nome=nome,email=email,senha=senha)
        return resultado
    

    def logar_conta(self,email,senha):
        resultado = gs.sql_logar_conta(tabela=DB_TABLE_USER,coluna_email=DB_USER_COLUMN_EMAIL,coluna_senha=DB_USER_COLUMN_PASS,email=email,senha=senha)
        return resultado
    

    def alterar_conta(self,valor,email,campo):
        camposPermitidos = [DB_USER_COLUMN_NAME,DB_USER_COLUMN_PASS]
        if campo in camposPermitidos:
            if campo == DB_USER_COLUMN_PASS:
                valor = gs.criptografar_SHA256(valor)

            condicao = f'{DB_USER_COLUMN_EMAIL}="{email}"'
            valor = f'"{valor}"'

            resultado = gs.sql_alterar_conta(tabela=DB_TABLE_USER,coluna=campo,valor=valor,condicao=condicao)
            return resultado
        else:
            return False


    def excluir_conta(self,email):
        condicao = f'{DB_USER_COLUMN_EMAIL}="{email}"'
        resultado = gs.sql_excluir_conta(tabela=DB_TABLE_USER,condicao=condicao)
        return resultado
    
    

class StatusUsuario:
    def __init__(self,data_base):
        self.data_base = data_base


    def _consultar_status(self,id_usuario,id_curso):
        comando = f'SELECT {DB_STATUS_PORCENTAGEM} FROM {DB_TABLE_STATUS_USER} WHERE {DB_STATUS_ID_USER}={id_usuario} AND {DB_STATUS_ID_CURSO}={id_curso}'
        resultado = gs.sql_consultar_dado(comando)
        tamanho_resultado = len(resultado)
        if (tamanho_resultado>0):
            return True
        else:
            return False
    

    def _registrar_status_curso(self,id_usuario,id_curso,porcentagem_assisitida):
        comando = f'INSERT INTO {DB_TABLE_STATUS_USER} ({DB_STATUS_ID_USER},{DB_STATUS_ID_CURSO},{DB_STATUS_PORCENTAGEM}) VALUES ({id_usuario},{id_curso},{porcentagem_assisitida})'

        resultado = gs.sql_executar_comando(comando)
        return resultado


    def atualizar_status_curso(self,id_curso:int,email:str,porcentagem_assisitida:int):
        id_usuario = gs.sql_retornar_id_usuario(DB_TABLE_USER,DB_USER_COLUMN_ID,DB_USER_COLUMN_EMAIL,email)


        if(self._consultar_status(id_usuario,id_curso)):
            comando = f'UPDATE {DB_TABLE_STATUS_USER} SET {DB_STATUS_PORCENTAGEM}={porcentagem_assisitida} WHERE {DB_STATUS_ID_USER}={id_usuario} AND {DB_STATUS_ID_CURSO}={id_curso}'
            resultado = gs.sql_executar_comando(comando)
            return resultado
        else:
            resultado = self._registrar_status_curso(id_usuario,id_curso,porcentagem_assisitida)
            return resultado
        

    def retornar_cursos_usuario(self,email):
        id_usuario = gs.sql_retornar_id_usuario(DB_TABLE_USER,DB_USER_COLUMN_ID,DB_USER_COLUMN_EMAIL,email)
        comando = f'SELECT * FROM {DB_TABLE_STATUS_USER} WHERE {DB_STATUS_ID_USER}={id_usuario}'

        resultado = gs.sql_consultar_dado(comando)
        return resultado


usuario = Usuario(banco_de_dados)
status_usuario = StatusUsuario(banco_de_dados)

