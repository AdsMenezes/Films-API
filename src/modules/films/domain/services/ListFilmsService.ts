import { injectable, inject } from 'tsyringe'

import IFilmsRepository from '../repositories/IFilmsRepository'

interface IRequest {
  limit: number
  offset: number
}

@injectable()
export default class ListFilmsService {
  constructor(
    @inject('FilmsRepository')
    private readonly filmsRepository: IFilmsRepository
  ) {}

  public async execute({ limit, offset }: IRequest): Promise<any> {
    const films = await this.filmsRepository.findAllByPagination({
      limit,
      offset,
    })

    const totalFilms = await this.filmsRepository.getCount()

    return {
      limit,
      offset,
      total: totalFilms,
      data: films,
    }
  }
}
