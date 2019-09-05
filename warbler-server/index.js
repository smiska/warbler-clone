const   
    app         = require('express')(),
    cors        = require('cors'),
    bodyParser  = require('body-parser'),

    errorHandler = require('./handlers/error')

const PORT = 8081

app.use(cors())
app.use(bodyParser.json())

// all routes

app.use((req,res,next) => {
    let err = new Error('Not found')
    err.status = 404
    next(err)
})

app.use(errorHandler)

app.listen(PORT,() => {
    console.log(`Server started at port: ${PORT}`)
})