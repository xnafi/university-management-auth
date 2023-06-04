import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response, next: NextFunction) =>
  res.send('Hello World!')
)
export default app
