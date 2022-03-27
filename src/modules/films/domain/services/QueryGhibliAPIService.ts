import { injectable, inject } from 'tsyringe'
import axios from 'axios'

import AppException from '@shared/errors/AppException'
import IFilmsRepository from '../repositories/IFilmsRepository'

interface IGhibliFilm {
  title: string
  original_title: string
  image: string
  description: string
  release_date: string
  rt_score: string
}

@injectable()
export default class QueryGhibliAPIService {
  constructor(
    @inject('FilmsRepository')
    private readonly filmsRepository: IFilmsRepository
  ) {}

  public async execute(): Promise<void> {
    try {
      const response = await axios.get<IGhibliFilm[]>(
        'https://ghibliapi.herokuapp.com/films?limit=200'
      )

      const dataFilms = response.data.map(films => {
        const {
          title,
          original_title,
          image,
          description,
          release_date,
          rt_score,
        } = films

        return {
          title,
          original_title,
          image,
          description,
          release_date,
          rt_score,
        }
      })

      this.filmsRepository.createAll(dataFilms)
    } catch {
      throw new AppException('There was a problem querying the ghibli API', 503)
    }
  }
}
