import { Request, Response } from 'express'
import { container } from 'tsyringe'

import ListFilmsService from '@modules/films/domain/services/ListFilmsService'

class ListFilmsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { limit, offset } = request.query

    const listFilms = container.resolve(ListFilmsService)

    const result = await listFilms.execute({
      limit: Number(limit),
      offset: Number(offset),
    })

    return response.json(result)
  }
}

export default new ListFilmsController()
