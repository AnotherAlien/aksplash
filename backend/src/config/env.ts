import dotenv from 'dotenv'

dotenv.config()

if(!process.env.MONGODB_URI){
 console.error('MONGODB_URI is not defined')
 process.exit(1)
}

export const env = {
  mongoDb_URI: process.env.MONGODB_URI,
  nodeEnv : process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT) || 3000,
}