import express, { type Express, type Request, type Response } from 'express'
import cors from 'cors'
import {env} from './config/env.js'
import {connectDB} from './config/db.js'

const app: Express = express()
await connectDB()

app.use(cors())


// create an express werb server and define a http route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(env.port, () => {
  console.log(`Server is running on port ${env.port} in ${env.nodeEnv} mode`)}
)

