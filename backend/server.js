require('dotenv').config()

const express = require('express')

const workoutRoutes = require('./routes/workouts')


//express app
const app = express()

//middleware
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next()
    
})

//routes
app.use('/api/workouts',workoutRoutes)

app.listen(process.env.PORT, ()=>{
    console.log('Listening to port!!!');
    
})

