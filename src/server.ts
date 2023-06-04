import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Successfully connected')
    app.listen(config.port, () =>
      console.log(`app app listening on ${config.port}!`)
    )
  } catch (error) {
    console.log(`error occurred`, error)
  }
}
main()
