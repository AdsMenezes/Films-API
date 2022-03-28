import FakeFilmsRepository from '../repositories/fakes/FakeFilmsRepository'
import ListFilmsService from './ListFilmsService'

let fakeFilmsRepository: FakeFilmsRepository
let listFilms: ListFilmsService

describe('ListFilms', () => {
  beforeEach(() => {
    fakeFilmsRepository = new FakeFilmsRepository()
    listFilms = new ListFilmsService(fakeFilmsRepository)
  })

  it('should be able to return the list of films', async () => {
    const films = [
      {
        title: 'film sample',
        original_title: 'film sample',
        image: 'image',
        description: 'just a film sample',
        release_date: '2000',
        rt_score: '93',
      },
      {
        title: 'film john',
        original_title: 'film john doe',
        image: 'image',
        description: 'just a film john',
        release_date: '2022',
        rt_score: '100',
      },
    ]

    await fakeFilmsRepository.createAll(films)

    const response = await listFilms.execute({ limit: 5, offset: 1 })

    expect(response).toEqual(
      expect.objectContaining({
        limit: 5,
        offset: 1,
        total: 2,
      })
    )
    expect(response.data.length).toBe(films.length)
  })
})
