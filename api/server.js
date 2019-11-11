const express = require('express')
const bodyParser = require('body-parser');
const cors = require("cors");
const db = require('../db')



const server = express()
server.use(cors());
server.use(bodyParser.json());

server.get('/', async (req, res) => {
	res.status(200).json({ api: 'running'})
})

server.get('/all_states', async (req, res) => {

	let page = req.query.page;
    let limit = req.query.limit;


	res.status(200).json({ api: 'running'})
})


server.get('/:zip', (req, res) => {
	const zip = parseInt(req.params.zip);
	res.status(200).send({ [`${zip}`]:
	db[zip]})
})

module.exports = server
