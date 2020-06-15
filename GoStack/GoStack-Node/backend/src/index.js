const express = require('express')

const app = express()



app.get('/projects', (req, res) => {
    return res.json([
        'Project 1',
        'Project 2'
    ])
})

app.post('/projects', (req, res) => {
    return res.json([
        'Project 1',
        'Project 2',
        'Project 3'
    ])
})


app.put('/projects/:id', (req, res) => {
    return res.json([
        'Project 1',
        'Project 2',
        'Project 3'
    ])
})

app.listen(3333, () => {
    console.log('Servidor rodando na porta 3333 ✨')
})

