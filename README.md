Node Version v12.22.9
Npm Version 8.19.2

Padrão de arquitetura MVC

Express -> Usado para subir o servidor local e gerenciar rotas criadas,
Body-Parser -> Converte os dados do corpo das requisições HTTP [dados convertidos para o tipo JSON],
Nodemon -> Vai escutar todas as alterações da aplicação, derrubando e subindo o servidor automaticamente [seria o mesmo do live server],
Sequelize -> ORM,
Sequelize-cli -> ORM linha de comando [command line interface = Terminal],
Bcryptjs -> Criptgrafar a senha do cliente,
UUID -> Geração de uuids,
JsonWebToken -> Autenticação,



Passo nº 0)
    npm init
    npm install mysql2

1º Passo) Configurar as configurações certas em [api -> config -> config.json -> "developer"]
2º Passo) Criar um arquivo chamado ".sequelizerc" na pasta raiz e inserir o seguinte código:
    const path = require('path');

    module.exports = {
    'config': path.resolve('./api/config', 'config.json'),
    'models-path': path.resolve('./api/models'),
    'seeders-path': path.resolve('./api/seeders'),
    'migrations-path': path.resolve('./api/migrations')
    }

2º Passo NOTA) Aparentemente .sequelizerc é um arquivo sensível, portanto inseri no .gitignore =(

3º Passo) No terminal, digitar sem as aspas duplas: "npx sequelize-cli db:create"
4º Passo) No terminal, digitar sem as aspas duplas: "npx sequelize-cli db:migrate"
