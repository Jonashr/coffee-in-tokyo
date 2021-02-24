/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { Location, ILocation } from '../models/Location'
import { toNewLocation } from '../utils'
import locationsService from '../services/locationsService'

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

router.post('/', (request, response, next) => {
  try {
    const newLocation = toNewLocation(request.body)
  
    const addedLocation = locationsService.addNewLocation(newLocation)
  
    response.status(201).send(addedLocation)
  } catch(error) {
    next(error)
  }
})


export default router