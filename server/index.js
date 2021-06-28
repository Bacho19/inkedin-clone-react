const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()


const app = express()

app.use(express.json())
app.use('/auth', require('./routes/auth'))
app.use('/posts', require('./routes/posts'))

const start = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    app.listen(process.env.PORT, () => {
        console.log(`server was started on port ${process.env.PORT}`)
    })
}

start()