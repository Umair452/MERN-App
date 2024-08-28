const express = require('express')

const router = express.Router()

//Get all workouts
router.get('/', (req, res)=>{
    res.json({mssg: 'Get all workouts'})
})

//get singlw workout
router.get('/:id', (req, res)=>{
    res.json({mssg: 'Get single workout'})
})

//post new workout
router.post('/', (req, res)=>{
    res.json({mssg: 'Post a workout'})
})

//delete a workout
router.delete('/:id', (req, res)=>{
    res.json({mssg: 'Delete a workout'})
})

//update a workout
router.patch('/:id', (req, res)=>{
    res.json({mssg: 'Update a workout'})
})

module.exports = router