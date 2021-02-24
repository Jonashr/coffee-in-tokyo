/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { BaseCoffeeShop } from './models/CoffeeShop'
import { BaseLocation } from './models/Location'
import { Ward, Area, RemoteWork } from './types'

export const toNewLocation = (location: any): BaseLocation => {
  return {
    address: parseGenericString(location.address, 'address'),
    ward: parseWard(location.ward),
    area: parseArea(location.area),
    closestTrainStation: parseGenericString(location.closestTrainStation, 'closestTrainStation')
  }
}

export const toNewCoffeeShop = (shop: any): BaseCoffeeShop => {
  return {
    name: parseGenericString(shop.name, 'name'),
    location: parseGenericString(shop.location, 'location'),
    wifi: parseBoolean(shop.wifi),
    onlineStore: parseBoolean(shop.onlineStore),
    onlineStoreURL: parseGenericString(shop.onlineStoreURL, 'onlineStoreURL'),
    website: parseGenericString(shop.website, 'website'),
    description: parseGenericString(shop.description, 'description'),
    remoteWork: parseRemoteWork(shop.remoteWork)
  }
}

const parseGenericString = (value: string, fieldName: string): string => {
  if(!value || !isString(value)) {
    throw new Error(`${fieldName} is incorrect`)
  }
  return value
}

const parseBoolean = (value: any): boolean => {
  return 'boolean' === typeof value
}

const parseWard = (ward: any): Ward => {
  if(!ward || !isWard(ward)) {
    throw new Error(`Incorrect or missing ward ${ward as string}`)
  }
  return ward
}

const parseArea = (area: any): Area => {
  if(!area || !isArea(area)) {
    throw new Error(`Incorrect or missing area ${area as string}`)

  }
  return area
}

const parseRemoteWork = (remoteWork: any): RemoteWork => {
  if(!remoteWork || !isRemoteWork(remoteWork)) {
    throw new Error(`Incorrect or missing variable ${remoteWork as string}`)
  }

  return remoteWork
}

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String
}

const isWard = (param: any): param is Ward => {
  return Object.values(Ward).includes(param)
}

const isArea = (param: any): param is Area => {
  return Object.values(Area).includes(param)
}

const isRemoteWork = (param: any): param is RemoteWork => {
  return Object.values(RemoteWork).includes(param)
}

