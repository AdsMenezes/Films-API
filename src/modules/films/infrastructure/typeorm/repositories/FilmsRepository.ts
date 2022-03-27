import { Repository, getRepository } from 'typeorm'

import Film from '../entities/Film'
import IFilmsRepository from '@modules/films/domain/repositories/IFilmsRepository'
import ICreateFilmDTO from '@modules/films/domain/dtos/ ICreateFilmDTO'

export default class FilmsRepository implements IFilmsRepository {
  private repository: Repository<Film>

  constructor() {
    this.repository = getRepository(Film)
  }

  public async createAll(data: ICreateFilmDTO[]): Promise<void> {
    const films = this.repository.create(data)

    await this.repository.save(films)
  }
}
