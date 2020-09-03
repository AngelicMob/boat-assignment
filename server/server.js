const express = require('express');
const app = express();

const port = process.env.PORT || 1234;
const bodyParser = require("body-parser");
const { getAllBoats } = require('./database.js');
//Routes



//Middleware

app.use( bodyParser.urlencoded({ extended: true }) )
app.use( bodyParser.json() )

app.get('/', (req, res) => {
	getAllBoats(dataOrError => {
		res.send()
	});
})
//Start Server


app.listen(port, () => console.log('Server is listening on port ' + port));