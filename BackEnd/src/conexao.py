import gerenciamento_software as gs
from dotenv import load_dotenv,find_dotenv
from os import getenv

load_dotenv(find_dotenv())

DB_HOST = getenv("db_host")
DB_USER = getenv("db_user")
DB_PASS = getenv("db_pass")
DB_DATA = getenv("db_data")

DB_TABLE_USER = getenv("table_user")
DB_USER_COLUMN_NAME = getenv("table_user_nome")
DB_USER_COLUMN_EMAIL = getenv("table_user_email")
DB_USER_COLUMN_PASS = getenv("table_user_senha")
DB_USER_COLUMN_ID = getenv("table_user_id")

DB_TABLE_STATUS_USER = getenv("table_status_user")
DB_STATUS_ID_USER = getenv("status_user_id_user")
DB_STATUS_ID_CURSO = getenv("status_user_id_curso")
DB_STATUS_PORCENTAGEM = getenv("status_user_porcentagem")

DB_TABLE_LOG = getenv("table_log")


class BancoDeDados:
    def __init__(self,DB_HOST,DB_USER,DB_PASS,DB_DATA):
        self.host = DB_HOST
        self.user = DB_USER
        self.password = DB_PASS
        self.data = DB_DATA

        gs.sql_conectar_db(host=self.host,user=self.user,password=self.password,database=self.data)

banco_de_dados = BancoDeDados(DB_HOST, DB_USER, DB_PASS, DB_DATA)