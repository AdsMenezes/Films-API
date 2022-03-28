import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

import AppException from '@shared/errors/AppException'

import FakeFilmsRepository from '../repositories/fakes/FakeFilmsRepository'
import QueryGhibliAPIService from './QueryGhibliAPIService'

const axiosMock = new MockAdapter(axios)

let fakeFilmsRepository: FakeFilmsRepository
let queryGhibliAPI: QueryGhibliAPIService

describe('QueryGhibliAPI', () => {
  beforeEach(() => {
    fakeFilmsRepository = new FakeFilmsRepository()
    queryGhibliAPI = new QueryGhibliAPIService(fakeFilmsRepository)
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

    axiosMock
      .onGet('https://ghibliapi.herokuapp.com/films?limit=200')
      .reply(200, films)

    await queryGhibliAPI.execute()

    const filmsCount = await fakeFilmsRepository.getCount()

    expect(filmsCount).toBe(films.length)
  })

  it('should be able to return the list of films filtered by title erro', async () => {
    axiosMock
      .onGet('https://ghibliapi.herokuapp.com/films?limit=200')
      .reply(500)

    await expect(queryGhibliAPI.execute()).rejects.toBeInstanceOf(AppException)
  })
})
