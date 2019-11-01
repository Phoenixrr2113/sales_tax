const express = require('express')
const db = require('../db')



const server = express()

server.get('/', async (req, res) => {
	res.status(200).json({ api: 'running', data:
	db['501']})
})


server.get('/:zip', (req, res) => {
	const {zip} = req.params; 
	res.status(200).json({ api: 'running', data:
	db[zip]})
})

module.exports = server
