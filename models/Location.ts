import { model, Schema, Model, Document } from 'mongoose'
import { Ward, Area } from '../types'

export type BaseLocation = {
  address: string,
  ward: Ward,
  area: Area,
  closestTrainStation?: string
}

export interface ILocation extends BaseLocation, Document {}

const LocationSchema: Schema = new Schema({
  address: { type: String, required: true },
  ward: { type: String, required: true },
  area: { type: String, required: true },
  closestTrainStation: { type: String }
})

export const Location: Model<ILocation> = model('Location', LocationSchema)