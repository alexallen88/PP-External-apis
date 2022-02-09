const express = require('express')
const request = require('superagent')

const router = express.Router()

// GET /api/v1/kayneQuotes
router.get('/', (req, res) => {
  return request.get('https://api.kanye.rest/api/v1/kayneQuotes')
    .then((response) => {
      res.json(response.body)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
