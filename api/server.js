const express = require('express')

const server = express()

server.get('/', async (req, res) => {
	res.status(200).json({ api: 'running'})
})

module.exports = server
