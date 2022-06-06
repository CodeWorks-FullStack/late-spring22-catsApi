import { catsService } from "../services/CatsService";
import BaseController from "../utils/BaseController";
import { logger } from "../utils/Logger";



export class CatsController extends BaseController{
  constructor(){
    super('api/cats')
    this.router
      .get('', this.getCats)
      .post('', this.createCat)
      // NOTE the url is extend with the ':' to create a parameter
      .delete('/:name', this.deleteCat)
  }
  async getCats(request, response, next){
    try {
      let cats = await catsService.getCats()
      // NOTE response.send() sends the requester back the information the requested
      // return ends the function in the server
      return response.send(cats)
    } catch (error) {
      // NOTE if error happens, tells the night to move on
      next(error)
    }
  }

  async createCat(req, res, next){
    try {
    // NOTE req.body( request.body ) is the information the client sent with the request
      let cat = await catsService.createCat(req.body)
      return res.send(cat)
    } catch (error) {
      next(error)
    }
  }

  async deleteCat(req, res, next){
    try {
      logger.log(req.params.name)
      let message = await catsService.deleteCat(req.params.name)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }
}
