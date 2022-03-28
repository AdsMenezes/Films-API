import { Request, Response } from 'express'
import { container } from 'tsyringe'

import SearchFilmsService from '@modules/films/domain/services/SearchFilmsService'

class SearchFilmsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { title } = request.query
    const searchFilms = container.resolve(SearchFilmsService)

    const films = await searchFilms.execute(title as string)

    return response.json(films)
  }
}

export default new SearchFilmsController()
