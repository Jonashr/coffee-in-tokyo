import { BaseCoffeeShop, CoffeeShop, ICoffeeShop } from '../models/CoffeeShop'

const addNewCoffeeShop = async (newCoffeeShop: BaseCoffeeShop): Promise<ICoffeeShop> => {
  console.log('New Coffee Shop', newCoffeeShop)
  const coffeeShop: ICoffeeShop = await CoffeeShop.create(newCoffeeShop)
  return coffeeShop
}

const getCoffeeShops = async(): Promise<Array<ICoffeeShop>> => {
  const coffeeShop: Array<ICoffeeShop> = await CoffeeShop.find().populate('location').exec()
  return coffeeShop
}

const getCoffeeShopById = async(id: string): Promise<ICoffeeShop | null> => {
  const coffeeShop = await CoffeeShop.findById(id).populate('location').exec()

  return coffeeShop
}

const deleteCoffeeShop = async(id: string): Promise<ICoffeeShop | null> => {
  const deletedStore = await CoffeeShop.findByIdAndDelete(id)

  return deletedStore
}

export default {
  addNewCoffeeShop,
  getCoffeeShops,
  getCoffeeShopById,
  deleteCoffeeShop
}