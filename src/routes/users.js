const express = require('express')

const router = express.Router()

router.get('/', (_, res) => {
  res.send('hello users')
})

router.get('/id/:id', (req, res) => {
  res.send(`${req.params.id} page`)
})

router.get('/id/:id/login', (req, res) => {
  res.send(`you logged in as ID:${req.params.id}, PW:${req.query.password}`)
})

module.exports = router
