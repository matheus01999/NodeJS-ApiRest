const req = require("express/lib/request")
const res = require("express/lib/response")

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send("Voce esta na rota de atendimentos e esta realizando um GET"))

    app.post('/atendimentos', (req, res) => res.send("Voce está na rota de atendimentos e esta realizando um POST"))

}