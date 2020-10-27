// Configurando caminho dos arquivos para evitar erros ao rodar no windows
const path = require('path');

// Configurando servidor
const express = require('express');
const server = express();

// configurando arquivos estaticos (css, js)
server.use(express.static('public'))

    // Configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // Configurando as rotas da aplicação
    .get('/', (request, response) => {
        return response.render('index')
    })

server.listen(5500);