import express from 'express'
import dotenv from 'dotenv'
import recordRoutes from './routes/records.js'
import mongoose from 'mongoose'
import morgan from 'morgan'

// Load environment variables-makes dotenv work
dotenv.config()

//express app
const app = express()


//middleware
app.use(express.json());
app.use(morgan('dev'))

//routes
app.use('/api/records', recordRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => { 
        //listen for requests
        app.listen(process.env.PORT, () => {
        console.log('connected to db and listening on port', process.env.PORT)
})
    })
    .catch((error) => {
        console.log(error)
    })


