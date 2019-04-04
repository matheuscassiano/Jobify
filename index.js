const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (request, response) => {
    response.render('home',{
    })
})

app.get('/vaga', (request, response) => {
    response.render('vaga',{
    })
})

app.listen(3000, (err) => {
    if(err){
        console.log('Não foi possivel iniciar o servisor do Jobify...')
    }    else{
        console.log('Servidor do Jobify rodando...')
    }
})
