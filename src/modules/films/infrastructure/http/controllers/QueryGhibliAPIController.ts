import { Request, Response } from 'express'
import { container } from 'tsyringe'

import QueryGhibliAPIService from '@modules/films/domain/services/QueryGhibliAPIService'

class QueryGhibliAPIController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(QueryGhibliAPIService)

    await service.execute()

    return response.status(201).send()
  }
}

export default new QueryGhibliAPIController()
