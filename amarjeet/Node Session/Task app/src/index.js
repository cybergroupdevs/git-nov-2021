const express = require('express')   //used for designing and building web apps quickly and easily
require('./db/mongoose')  //manages relationship between data, provides schema validation and is used to translate objects in code and the representaion of those objects in MongoDB
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

