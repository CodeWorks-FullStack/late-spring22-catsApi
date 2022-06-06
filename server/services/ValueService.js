import { dbContext } from '../db/DbContext.js'

class ValuesService {
  async find(query = {}) {
    const values = [1, 2, 3, 4, 5, 'sup']
    return values
  }
  async create(valueData) {
    const value = await dbContext.Values.create(valueData)
    return value
  }


  async remove(valueId) {
    const removedValue = await dbContext.Values.findByIdAndRemove(valueId)
    return removedValue
  }
}

export const valuesService = new ValuesService()
