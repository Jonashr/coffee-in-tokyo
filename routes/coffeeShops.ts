/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import coffeeShopsService from '../services/coffeeShopsService'
import { toNewCoffeeShop } from '../utils'

const router = express.Router()

router.get('/', async (_, response) => {
  const coffeeShops = await coffeeShopsService.getCoffeeShops()

  response.send(coffeeShops)
})

router.get('/:id', async (request, response, next) => {
  try {
    const coffeeShop = await coffeeShopsService.getCoffeeShopById(request.params.id)
  
    if(!coffeeShop) {
      response.status(404).json(`Store with id: ${request.params.id} was not found.`)
    }
  
    response.send(coffeeShop)
  } catch(error) {
    next(error)
  }
})

router.post('/', async (request, response, next) => {
  try {
    const newCoffeeShop = toNewCoffeeShop(request.body)
  
    const addedCoffeeShop = await coffeeShopsService.addNewCoffeeShop(newCoffeeShop)

    response.status(201).send(addedCoffeeShop)
  } catch(error) {
    next(error)
  }
})

router.delete('/:id', async (request, response, next) => {
  try {
    const deletedStore = await coffeeShopsService.deleteCoffeeShop(request.params.id)

    if(!deletedStore) {
      return response.status(404).json(`No store with id: ${request.params.id} was found.`)
    }
  
    return response.status(204).end()
  } catch(error) {  
    next(error)
  }

})

export default router