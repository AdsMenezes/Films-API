import { v4 as uuidv4 } from 'uuid'

import Film from '@modules/films/infrastructure/typeorm/entities/Film'
import IFilmsRepository from '../IFilmsRepository'
import ICreateFilmDTO from '../../dtos/ICreateFilmDTO'
import IGetAllFilmsByPaginationDTO from '../../dtos/IGetAllFilmsByPaginationDTO'

export default class FakeFilmsRepository implements IFilmsRepository {
  private films: Film[] = []

  public async getCount(): Promise<number> {
    return this.films.length
  }

  public async findByTitleContaining(title: string): Promise<Film[]> {
    return this.films.filter(film => film.title.includes(title))
  }

  public async findAllByPagination({
    limit,
    offset,
  }: IGetAllFilmsByPaginationDTO): Promise<Film[]> {
    return this.films.slice(offset - 1, offset + limit)
  }

  public async createAll(data: ICreateFilmDTO[]): Promise<void> {
    data.map(
      ({
        title,
        original_title,
        image,
        description,
        release_date,
        rt_score,
      }) => {
        const film = new Film()

        Object.assign(film, {
          id: uuidv4(),
          title,
          original_title,
          image,
          description,
          release_date,
          rt_score,
          created_at: Date.now(),
          updated_at: Date.now(),
        })

        this.films.push(film)

        return film
      }
    )
  }
}
