// Configurando caminho dos arquivos para evitar erros ao rodar no windows
const path = require('path');

// Configurando importação das funções para exibir as paginas
const pages = require('./pages');

// Configurando servidor
const express = require('express');
const saveOrphanage = require('./database/saveOrphanage');
const server = express();

// configurando arquivos estaticos (css, js)
server.use(express.static('public'))

    // Configurando para usar req.body e pegar dados via POST
    .use(express.urlencoded({extended: true}))

    // Configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // Configurando as rotas da aplicação
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

server.listen(5500);