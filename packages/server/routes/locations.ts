/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { toNewLocation } from '../utils'
import locationsService from '../services/locationsService'

const router = express.Router()

router.get('/', async (_, response) => {
  const locations = await locationsService.getLocations()

  return response.status(200).send(locations)
})

router.get('/:id', async (request, response) => {
  const location = await locationsService.getLocationById(request.params.id)
  
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

router.delete('/:id', async (request, response, next) => {
  try {
    const deletedLocation = await locationsService.deleteLocation(request.params.id)

    if(!deletedLocation) {
      return response.status(404).json(`No Location with id: ${request.params.id} was found.`)
    }
  
    return response.status(204).end()
  } catch(error) {
    next(error)
  }
})


export default router