import 'dotenv-safe/config' 
import { __port__, __mongodburl__ } from './constants'

import express from 'express'
import mongoose from 'mongoose'
import locationsRouter from './routes/locations'

const app = express()

mongoose.connect(__mongodburl__ , { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.log(`Error connecting to MongoDB instance: ${error as string}`)
  })

app.use(express.json())

app.get('/api/ping', (_, response) => {
  response.send('pong')
})

app.use('/api/locations', locationsRouter)


app.listen(__port__, () => {
  console.log(`Listening to port: ${__port__}`)
})