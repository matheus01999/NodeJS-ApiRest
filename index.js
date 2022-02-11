const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')

const app = express()

app.listen(3000, ()=> console.log("Servidor rodando na porta 3000"))

app.get('/atendimentos', (req, res) => res.send("Voce est em atendimentos e chamados"))