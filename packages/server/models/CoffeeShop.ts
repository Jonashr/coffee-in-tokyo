import { model, Schema, Model, Types, Document } from 'mongoose'
import { RemoteWork } from '../types'

export type BaseCoffeeShop = {
  name:string,
  location: Types.ObjectId | Record<string, unknown>
  wifi: boolean,
  onlineStore: boolean,
  onlineStoreURL?: string,
  website?: string,
  description: string,
  remoteWork: RemoteWork
}

export interface ICoffeeShop extends BaseCoffeeShop, Document {}

const CoffeeShopSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  location: { type: Schema.Types.ObjectId, required: true, unique: true, ref: 'StoreLocation' },
  wifi: { type: Boolean, required: true},
  onlineStore: { type: Boolean, required: true},
  onlineStoreURL: { type: String},
  website: { type: String },
  description: { type: String, required: true},
  remoteWork: { type: Number, required: true}
})

export const CoffeeShop: Model<ICoffeeShop> = model('CoffeeShop', CoffeeShopSchema)