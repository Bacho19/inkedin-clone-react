const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const route = express()

route.post('/register', async (req, res) => {
    try {
        const {name, password} = req.body

        const candidateUser = await User.findOne({name: name})

        if (candidateUser) {
            return res.status(400).json('User with this name already exists')
        }

        const hashedPassword = await bcrypt.hash(password, 4)

        const user = new User({
            name,
            password: hashedPassword
        })

        await user.save()
        res.status(201).json({message: 'User created', user})
    } catch (e) {
        res.status(500).json({message: 'Something went wrong, please try again'})
    }
})

route.post('/login', async (req, res) => {
    try {
        const {name, password} = req.body

        const candidateUser = await User.findOne({name: name})

        if (!candidateUser) {
            return res.status(400).json('User with this name not found')
        }

        const user = await bcrypt.compare(password, candidateUser.password)

        if (!user) {
            return res.status(400).json('Password is invalid')
        }

        const token = jwt.sign({userId: candidateUser.id}, process.env.JWT_SECRET, {
            expiresIn: '2h',
        })

        res.json({token, userId: candidateUser.id})
    } catch (e) {
        res.status(500).json({message: 'Something went wrong, please try again'})
    }
})

route.get('/get-user/:token', async (req, res) => {
    try {
        const {token} = req.params

        const id = jwt.decode(token).userId
        const user = await User.findById(id)

        if (!user) {
            return res.status(404).json('User not found')
        }

        res.json({name: user.name})
    } catch (e) {
        res.status(500).json({message: 'Something went wrong, please try again'})
    }
})

module.exports = route