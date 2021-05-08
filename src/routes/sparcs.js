const express = require('express')
const auth = require('../middlewares/auth')

const router = express.Router()
router.use(auth)

router.get('/', (_, res) => {
  res.send('hello sparcs')
})

router.get('/like', (_, res) => {
  res.send('hello sparcs like')
})

router.get('/hololo' , (_, res) => {
  res.send('hello sparcs hololo')
})

module.exports = router

