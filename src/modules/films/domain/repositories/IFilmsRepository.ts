import Film from '@modules/films/infrastructure/typeorm/entities/Film'
import IGetAllFilmsByPaginationDTO from '../dtos/IGetAllFilmsByPaginationDTO'
import ICreateFilmDTO from '../dtos/ICreateFilmDTO'

export default interface IFilmsRepository {
  getCount(): Promise<number>
  findByTitleContaining(title: string): Promise<Film[]>
  findAllByPagination(data: IGetAllFilmsByPaginationDTO): Promise<Film[]>
  createAll(data: ICreateFilmDTO[]): Promise<void>
}
