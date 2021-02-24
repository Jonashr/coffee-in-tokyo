import { Location, BaseLocation, ILocation } from '../models/Location'

const addNewLocation = async (newLocation: BaseLocation): Promise<ILocation> => {
  const location: ILocation = await Location.create(newLocation)
  return location
}

export default {
  addNewLocation
}