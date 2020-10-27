// Configurando caminho dos arquivos para evitar erros ao rodar no windows
const path = require('path');

// Configurando servidor
const express = require('express');
const server = express();

// configurando arquivos estaticos (css, js)
server.use(express.static('public'))

    // Configurando as rotas da aplicação
    .get('/', (request, response) => {
        return response.sendFile(path.join(__dirname, 'views', 'index.html'));
    })

server.listen(5500);