import { Router } from 'express'

import ListFilmsController from '../controllers/ListFilmsController'
import SearchFilmsController from '../controllers/SearchFilmsController'
import QueryGhibliAPIController from '../controllers/QueryGhibliAPIController'

import ListFilmsValidator from '../validators/ListFilmsValidator'
import SearchFilmsValidator from '../validators/SearchFilmsValidator'

const routes = Router()

routes.get('/', ListFilmsValidator, ListFilmsController.handle)
routes.get('/search', SearchFilmsValidator, SearchFilmsController.handle)

routes.get('/ghibli', QueryGhibliAPIController.handle)

export default routes
