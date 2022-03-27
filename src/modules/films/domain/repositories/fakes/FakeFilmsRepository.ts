import { v4 as uuidv4 } from 'uuid'

import Film from '@modules/films/infrastructure/typeorm/entities/Film'
import IFilmsRepository from '../IFilmsRepository'
import ICreateFilmDTO from '../../dtos/ ICreateFilmDTO'

export default class FakeFilmsRepository implements IFilmsRepository {
  private films: Film[]

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
