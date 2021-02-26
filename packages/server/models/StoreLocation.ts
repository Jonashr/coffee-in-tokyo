import { model, Schema, Model, Document } from 'mongoose'
import { Ward, Area } from '../types'

export type BaseLocation = {
  address: string,
  ward: Ward,
  area: Area,
  closestTrainStation?: string
}

export interface IStoreLocation extends BaseLocation, Document {}

const StoreLocationSchema: Schema = new Schema({
  address: { type: String, required: true },
  ward: { type: String, required: true },
  area: { type: String, required: true },
  closestTrainStation: { type: String }
})

export const StoreLocation: Model<IStoreLocation> = model('StoreLocation', StoreLocationSchema)