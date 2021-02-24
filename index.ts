import 'dotenv-safe/config' 
import { __port__, __mongodburl__ } from './constants'

import express from 'express'
import mongoose from 'mongoose'
import locationsRouter from './routes/locations'
import coffeeShopsRouter from './routes/coffeeShops'
import middleware from './utils/middleware'

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
app.use('/api/stores', coffeeShopsRouter)

app.use(middleware.errorHandler)

app.listen(__port__, () => {
  console.log(`Listening to port: ${__port__}`)
})