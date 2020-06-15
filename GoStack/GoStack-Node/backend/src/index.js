const express = require('express')

const app = express()

app.get('/projects', (req, res) => {
    return res.json({messege: 'Hello World'})
})

app.listen(3333, () => {
    console.log('Servidor rodando na porta 3333')
})

