import { ErrorRequestHandler } from 'express'

interface ErrorType {
  message: string,
  code: string,
  name: string,
  kind: string
}

const errorHandler: ErrorRequestHandler = (error: ErrorType, _, response, next) => {
  console.log('Error caught by error handler:', error.message, error.name)

  if(error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if(error.name === 'ValidationError') {
    return response.status(400).send({ error: error.message })
  }

  return next(error)
}

export default {
  errorHandler
}