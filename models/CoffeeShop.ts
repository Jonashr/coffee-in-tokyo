import { model, Schema, Model, Document } from 'mongoose'

interface ICoffeeShop extends Document {
  name:string,
  location: string,
  wifi: boolean,
  study: boolean,
  onlineStore: boolean,
  website: string,
  description: string
}

const CoffeeShopSchema: Schema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  wifi: { type: Boolean, required: true},
  study: { type: Boolean, required: true },
  onlineStore: { type: Boolean, required: true},
  website: { type: String },
  description: { type: String, required: true}
})

export const CoffeeShop: Model<ICoffeeShop> = model('CoffeeShop', CoffeeShopSchema)