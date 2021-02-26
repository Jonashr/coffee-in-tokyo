import { StoreLocation, BaseLocation, IStoreLocation } from '../models/StoreLocation'

const getLocations = async(): Promise<Array<IStoreLocation>> => {
  const locations: Array<IStoreLocation> = await StoreLocation.find()
  return locations
}

const getLocationById = async(id: string): Promise<IStoreLocation | null> => {
  const location = await StoreLocation.findById(id)
  return location
}

const addNewLocation = async (newLocation: BaseLocation): Promise<IStoreLocation> => {
  const location: IStoreLocation = await StoreLocation.create(newLocation)
  return location
}

const deleteLocation = async (id: string): Promise<IStoreLocation | null> => {
  const deletedLocation = await StoreLocation.findByIdAndDelete(id)

  return deletedLocation
}

export default {
  getLocations,
  getLocationById,
  addNewLocation,
  deleteLocation
}