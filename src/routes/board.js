const express = require('express')
const auth = require('../middlewares/auth')

const router = express.Router()
router.use(auth)

router.get('/', (_, res) => {
  res.send('hello board')
})

router.get('/write', (_, res) => {
  res.send('hello board write')
})

module.exports = router
