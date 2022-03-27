import ICreateFilmDTO from '../dtos/ ICreateFilmDTO'

export default interface IFilmsRepository {
  createAll(data: ICreateFilmDTO[]): Promise<void>
}
