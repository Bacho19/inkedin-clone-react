const express = require('express')

const route = express()

route.get('/', (req, res) => {
    res.json('Take your fucking posts!!')
})

module.exports = route