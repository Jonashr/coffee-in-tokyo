import express from 'express'

const router = express.Router()

router.get('/', (_, response) => {
  response.send('Empty')
})

export default router