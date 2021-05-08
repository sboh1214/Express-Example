var express = require('express')
var user = require('./src/routes/users')
var board = require('./src/routes/board')
var sparcs = require('./src/routes/sparcs')

const app = express()
const port = 3000

app.use('/users', user)
app.use('/board', board)
app.use('/sparcs', sparcs)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})