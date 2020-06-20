import express from 'express'

import { helloWorld } from './routes.js'

const app = express()

app.get('/', helloWorld)

app.listen(3333)