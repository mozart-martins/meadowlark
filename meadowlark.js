const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.get('/home', (req, res) => {
    res.type('text/plain')
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.type('text/plain')
    res.send('About')
})

app.use((req, res) => {
    res.type('text/plain')
    res.status(400)
    res.send("Página não encontrada")
})

app.use((error, req, res, next) => {
    res.type('text/plain')
    res.status(500)
    res.send("Erro no servidor")
})


app.listen(port, () => {
    console.log(`O servidor foi iniciado em http://localhost:${port}.
    Pressione Ctrl + C para encerrar.`)
})