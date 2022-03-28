import { injectable, inject } from 'tsyringe'

import Film from '@modules/films/infrastructure/typeorm/entities/Film'
import IFilmsRepository from '../repositories/IFilmsRepository'

@injectable()
export default class SearchFilmsService {
  constructor(
    @inject('FilmsRepository')
    private readonly filmsRepository: IFilmsRepository
  ) {}

  public async execute(title: string): Promise<Film[]> {
    return this.filmsRepository.findByTitleContaining(title)
  }
}
