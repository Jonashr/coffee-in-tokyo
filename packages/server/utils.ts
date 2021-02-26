/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { BaseCoffeeShop } from './models/CoffeeShop'
import { BaseLocation } from './models/StoreLocation'
import { Ward, Area, RemoteWork } from './types'
import { Types } from 'mongoose'


export const toNewLocation = (location: any): BaseLocation => {
  const baseLocation: BaseLocation = {
    address: parseGenericString(location.address, 'address'),
    ward: parseWard(location.ward),
    area: parseArea(location.area),
  }

  if(location.closestTrainStation) {
    location.closestTrainStation = parseGenericString(location.closestTrainStation, 'closestTrainStation')
  }

  return baseLocation
}

export const toNewCoffeeShop = (shop: any): BaseCoffeeShop => {
  const baseShop: BaseCoffeeShop = {
    name: parseGenericString(shop.name, 'name'),
    location: parseObjectId(shop.location),
    wifi: parseBoolean(shop.wifi),
    onlineStore: parseBoolean(shop.onlineStore),
    description: parseGenericString(shop.description, 'description'),
    remoteWork: parseRemoteWork(shop.remoteWork)
  }

  if(shop.onlineStoreURL) {
    shop.onlineStoreURL = parseGenericString(shop.onlineStoreURL, 'onlineStoreURL')
  }

  if(shop.website) {
    shop.website =  parseGenericString(shop.website, 'website')
  }

  return baseShop
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

const parseObjectId = (objectId: any): Types.ObjectId | Record<string, unknown> => {

  if(!Types.ObjectId.isValid(objectId)) {
    throw new Error(`Invalid key ${objectId as string}`)
  }

  const validObjectId = new Types.ObjectId(objectId)

  return validObjectId
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

