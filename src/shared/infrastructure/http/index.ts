import app from './server'

const { APP_PORT } = process.env

app.listen(APP_PORT, () => {
  console.log(`🎉 Server started at http://localhost:${APP_PORT}`)
  console.log(`📖 See the documentation at http://localhost:${APP_PORT}/docs/`)
})
