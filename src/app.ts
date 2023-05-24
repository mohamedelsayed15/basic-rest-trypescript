//const express = require('express')
import express from 'express' // enables auto completion + npm i --save-dev @types/express

import todosRoutes from './routes/todos'

import bodyParser from 'body-parser'

const app = express()


var log = console.log

app.use(bodyParser.json())
//app.use(express.json({ limit: '1kb' }))
app.use(todosRoutes)


app.listen(process.env.PORT, () => {
    console.log(process.env.PORT)
})
