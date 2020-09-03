const express = require('express');
const app = express();

const port = process.env.PORT || 1234;
const bodyParser = require("body-parser");
const { getAllBoats, getBoat, addBoat } = require('./database.js');


//Routes
app.get('/', (req, res) => {
	getAllBoats(dataOrError => {
		res.send()
	});
})

//GET
app.get('/hat', (req, res) => {
	getBoat(req.query.id, dataOrError => {
		res.send(dataOrError)
	})
})

// POST
app.post('/hat?', (req, res) => {
	addBoat(req.body, dataOrError => {
		res.send(dataOrError)
	})
})

//DELETE

app.delete()


//Middleware
app.use( bodyParser.urlencoded({ extended: true }) )
app.use( bodyParser.json() )
app.use(express.static(__dirname + '/../build'));


//Start Server
app.listen(port, () => console.log('Server is listening on port ' + port));