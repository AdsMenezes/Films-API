import { Router } from 'express'

import filmsRoutes from '@modules/films/infrastructure/http/routes/films.routes'

const routes = Router()

routes.use('/films', filmsRoutes)

export default routes
