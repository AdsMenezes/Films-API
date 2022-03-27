import 'dotenv/config'

import express from 'express'
import bodyParser from 'body-parser'
import swagger from 'swagger-ui-express'
import helmet from 'helmet'
import cors from 'cors'

import '@shared/infrastructure/typeorm'

import routes from './routes'
import documentation from '../../../swagger.json'

const app = express()

app.use('/docs', swagger.serve, swagger.setup(documentation))
app.use(cors())
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(routes)

export default app
