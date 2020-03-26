const express = require('express')
const routes = require('./routes')

const app = express()
app.use(express.json())
app.use(routes)

/**
 * Rota / Recurso / End Point
 * Métodos HTTP: 
 *  GET: retornar informações do backend, acessado via browser e aplicação
 *  POST: criar informação nova no backend, acessado via aplicação
 *  PUT: atualizar informação no backend, acessado via aplicação
 *  DELETE: delete informação no backend, acessado via aplicação
 */

app.listen(3333)