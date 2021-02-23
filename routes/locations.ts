/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { Location, ILocation } from '../models/Location'
import { toNewLocation } from '../utils'

const router = express.Router()

router.get('/', async (_, response) => {
  const locations: Array<ILocation> = await Location.find()
  return response.status(200).send(locations)
})

router.get('/:id', async (request, response) => {
  const location = await Location.findById(request.params.id)
  
  if(!location) {
    response.status(404).send(`Location with id: ${request.params.id} not found`)
  }

  response.status(200).send(location)
})

router.post('/', async(request, response) => {
  const newLocation = toNewLocation(request.body)

  const location: ILocation = await Location.create(newLocation)
  
  response.status(201).send(location)
})

export default router