import FakeFilmsRepository from '../repositories/fakes/FakeFilmsRepository'
import SearchFilmsService from './SearchFilmsService'

let fakeFilmsRepository: FakeFilmsRepository
let searchFilms: SearchFilmsService

describe('SearchFilms', () => {
  beforeEach(() => {
    fakeFilmsRepository = new FakeFilmsRepository()
    searchFilms = new SearchFilmsService(fakeFilmsRepository)
  })

  it('should be able to return the list of films filtered by title', async () => {
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
        release_date: '2021',
        rt_score: '100',
      },
      {
        title: 'the return of john',
        original_title: 'film john doe',
        image: 'image',
        description: 'just a film john',
        release_date: '2022',
        rt_score: '95',
      },
    ]

    await fakeFilmsRepository.createAll(films)

    const response = await searchFilms.execute('john')

    expect(response.length).toBe(2)
  })
})
