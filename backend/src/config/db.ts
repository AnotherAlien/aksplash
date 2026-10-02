import mongoose from "mongoose";
import {env} from './env.js'

mongoose.connection.on('connected',()=>
 console.log('MongoDb connnected')
)

mongoose.connection.on('error',(err)=>
 console.error('MongoDb connection error', err)
)

mongoose.connection.on('disconnected', ()=> console.log('disconnected'))

export const connectDB = async() : Promise<void> =>{
 try {
  await mongoose.connect(env.mongoDb_URI)
 } catch (error) {
  console.error('MongoDB connection error', error)
  process.exit(1)
 }
}