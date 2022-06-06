import { valuesService } from '../services/ValueService'
import BaseController from '../utils/BaseController'

export class ValuesController extends BaseController {
  constructor() {
    super('api/values')
    this.router
      .get('', this.getAll)
      .get('/secret', this.getSecret)
      .post('', this.create)
      .delete('/:valueId', this.remove)
  }

  /**
   * Sends found values to a client by request
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} nextDoor
   */
  async getAll(request, response, nextDoor) {
    try {
      const values = await valuesService.find()
      return response.send(values)
    } catch (error) {
      nextDoor(error)
    }
  }

  async getSecret(request, response, next){
    try {
      // NOTE just a quick example of api routes don't do this exactly this way
      response.send('you found the secret')
    } catch (error) {
      next(error)
    }
  }

  /**
   * Creates a value from request body and returns it
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async create(req, res, next) {
    try {
      const value = await valuesService.create(req.body)
      res.send(value)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Deletes a value using req params
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async remove(req, res, next) {
    try {
      const value = await valuesService.remove(req.params.valueId)
      res.send(value)
    } catch (error) {
      next(error)
    }
  }
}
