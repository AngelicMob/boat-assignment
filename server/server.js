const express = require('express');
const app = express();
const port = process.env.PORT || 1234;
const bodyParser = require("body-parser");
const { getAll, add, deleteBoats, search} = require('./database.js');



//Middleware
app.use( bodyParser.urlencoded({ extended: true }) )
app.use(express.static(__dirname + "/../build"));
app.use((req, res, next) => {
console.log(`${req.method} ${req.url}`);

  next();
});

//Routes
//GET Boats
app.get("/boats", (req, res) => {

    getAll(dataOrError => {
		res.send(dataOrError)
	});
	console.log('boats are working');
});

// POST
app.post('/addBoats', (req, res) => {
	console.log(req.body.params)
	  add(req.body.params, dataOrError => {
		  res.send(dataOrError)
	  })
  })


//DELETE
app.delete("/delete", (req, res) => {
    console.log('test',req.query.id)
    deleteBoats(req.query.id, dataOrError => {
    res.send(dataOrError)
  });
});


//SEARCH
app.get('/search', (req, res) => {

	search(req.query, dataOrError => {
		res.send(dataOrError)
	})
})


//Start Server
app.listen(port, () => console.log('Server is listening on port ' + port));