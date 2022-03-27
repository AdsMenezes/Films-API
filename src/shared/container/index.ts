import { container } from 'tsyringe'

import IFilmsRepository from '@modules/films/domain/repositories/IFilmsRepository'
import FilmsRepository from '@modules/films/infrastructure/typeorm/repositories/FilmsRepository'

// Films
container.registerSingleton<IFilmsRepository>(
  'FilmsRepository',
  FilmsRepository
)
