const path = require('path')
const express = require('express')
const request = require('superagent')

const welcome = require('./routes/welcome')

const kanyeWest = require('./routes/kayne')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/welcome', welcome)

server.use('/api/v1/kayneQuotes', kanyeWest)

module.exports = server
