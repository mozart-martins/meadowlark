const express = require('express')

const fortune = require('./src/lib/fortune')

const { engine } = require('express-handlebars')

const app = express()

const port = process.env.PORT || 3000

app.engine('handlebars', engine({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

// Configurando o diretório de arquivos estáticos, que será invisível para o cliente
app.use(express.static(__dirname + '/public'))



app.get('/', (req, res) => {
    // res.type('text/plain')
    // O status padrão é o 200
    res.render('home')
})

app.get('/about', (req, res) => {
    // res.type('text/plain')
    // O status padrão é o 200
    res.render('about', {
        fortune: fortune.getFortune()
    })
})

app.use((req, res) => {
    res.type('text/plain')
    res.status(400)
    res.render("Página não encontrada")
})

app.use((error, req, res, next) => {
    res.type('text/plain')
    res.status(500)
    res.render("Erro no servidor")
})


app.listen(port, () => {
    console.log(`O servidor foi iniciado em http://localhost:${port}.
    Pressione Ctrl + C para encerrar.`)
})