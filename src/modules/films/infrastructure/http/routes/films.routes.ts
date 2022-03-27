import { Router } from 'express'

import QueryGhibliAPIController from '../controllers/QueryGhibliAPIController'

const routes = Router()

routes.get('/ghibli', QueryGhibliAPIController.handle)

export default routes
