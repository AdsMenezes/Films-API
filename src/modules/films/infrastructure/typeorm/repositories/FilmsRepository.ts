import { Repository, getRepository } from 'typeorm'

import Film from '../entities/Film'
import IFilmsRepository from '@modules/films/domain/repositories/IFilmsRepository'
import IGetAllFilmsByPaginationDTO from '@modules/films/domain/dtos/IGetAllFilmsByPaginationDTO'
import ICreateFilmDTO from '@modules/films/domain/dtos/ICreateFilmDTO'

export default class FilmsRepository implements IFilmsRepository {
  private repository: Repository<Film>

  constructor() {
    this.repository = getRepository(Film)
  }

  public async getCount(): Promise<number> {
    return this.repository.createQueryBuilder().getCount()
  }

  public async findByTitleContaining(title: string): Promise<Film[]> {
    return this.repository
      .createQueryBuilder('films')
      .where('films.title ILIKE :title', { title: `%${title}%` })
      .orderBy('release_date', 'DESC')
      .getMany()
  }

  public async findAllByPagination({
    limit,
    offset,
  }: IGetAllFilmsByPaginationDTO): Promise<Film[]> {
    return this.repository.find({
      order: {
        release_date: 'DESC',
      },
      take: limit,
      skip: limit * (offset - 1),
    })
  }

  public async createAll(data: ICreateFilmDTO[]): Promise<void> {
    const films = this.repository.create(data)

    await this.repository.save(films)
  }
}
