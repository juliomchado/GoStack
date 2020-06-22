import express from 'express'
import routes from './routes'

const app = express()

app.get('/', (request, response) => {
    return response.json({ messege: 'Hello World' })
})

app.listen(3333, () => {
    console.log(`Server started on port 3333🎉`)
})
