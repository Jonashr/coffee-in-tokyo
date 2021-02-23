/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { BaseLocation } from './models/Location'
import { Ward, Area } from './types'

export const toNewLocation = (location: any): BaseLocation => {
  return {
    address: parseGenericString(location.address, 'location.address'),
    ward: parseWard(location.ward),
    area: parseArea(location.area),
    closestTrainStation: parseGenericString(location.closestTrainStation, 'location.closestTrainStation')
  }
}

const parseGenericString = (value: string, fieldName: string): string => {
  if(!value || !isString(value)) {
    throw new Error(`${fieldName} is incorrect`)
  }

  return value
}

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String
}

const parseWard = (ward: any): Ward => {
  if(!ward || !isWard(ward)) {
    throw new Error(`Incorrect or missing ward ${ward as string}`)
  }
  return ward
}

const isWard = (param: any): param is Ward => {
  return Object.values(Ward).includes(param)
}

const parseArea = (area: any): Area => {
  if(!area || !isArea(area)) {
    throw new Error(`Incorrect or missing area ${area as string}`)

  }
  return area
}

const isArea = (param: any): param is Area => {
  return Object.values(Area).includes(param)
}

