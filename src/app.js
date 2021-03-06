const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')

const app = express()

app.use(cors()) // { origin: 'http://meuapp.com' }
app.use(express.json())
app.use(routes)
app.use(errors())

/**
 * Rota / Recurso / End Point
 * Métodos HTTP: 
 *  GET: retornar informações do backend, acessado via browser e aplicação
 *  POST: criar informação nova no backend, acessado via aplicação
 *  PUT: atualizar informação no backend, acessado via aplicação
 *  DELETE: delete informação no backend, acessado via aplicação
 */

module.exports = app