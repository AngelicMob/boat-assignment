const { MongoClient, ObjectID } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "boatDataBase";
const collectionName = "boats";


function getAll(callback) {
    getAllBoats({}, callback)
}


function add(boat, callback) {
  addBoats(boat, callback)
}


function getAllBoats(filter, callback) {
  MongoClient.connect(
    url,
    { useUnifiedTopology: true },
    async (error, client) => {
      if (error) {
        callback('"ERROR!! Could not connect"');
        return;
      }
      const col = client.db(dbName).collection(collectionName);
      try {
        const cursor = await col.find(filter);
        const array = await cursor.toArray();
        callback(array);
      } catch (error) {
        console.log("Query error: " + error.message);
        callback('"ERROR!! Query error"');
      } finally {
        client.close();
      }
    }
  );
}

function addBoats(requestBoat, callback) {
	const doc = requestBoat;
	MongoClient.connect(
		url,
		{ useUnifiedTopology: true},
		async (error, client) => {
			if( error ) {
				callback('"connection problem"');
				return;
			}
			const col = client.db(dbName).collection(collectionName);
			try {
				const result = await col.insertOne(doc);
				callback({
					result: result.result,
					ops: result.ops
				})

			} catch(error) {
				console.error('addBoat error: ' + error.message);
				callback('"ERROR!! Query error"');

			} finally {
				client.close();
			}
		}
	)
}

function remove(id, callback){


  MongoClient.connect(
  url,
  { useUnifiedTopology: true },
  async (error, client) => {
    if( error ) {
      callback('"connection problem"');
      return;
    }
    const col = client.db(dbName).collection(collectionName);
    try {
      const result = await col.deleteOne( { "_id" : ObjectID(id) } );
      callback({
        result: result.result,
        ops: result.ops
      })
    } catch(error) {
      console.log('Query error: ' + error.message);
      callback('"ERROR!! Query error"');

    } finally {
      client.close();
    }
      }

)
}


module.exports = {
  getAll, add, remove
};


