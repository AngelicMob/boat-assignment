const { MongoClient, ObjectID } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "boatDataBase";
const collectionName = "boats";


function getAll(callback) {
    getAllBoats({}, callback)
}
function getAllBoats(filter, callback) {
  MongoClient.connect(
    url,
    { useUnifiedTopology: true },
    async (error, client) => {
      if (error) {
        callback('"ERROR!! Could not connect"');
        return; // exit the callback function
      }
      const col = client.db(dbName).collection(collectionName);
      try {
        const cursor = await col.find(filter);
        const array = await cursor.toArray();
        console.log(array)
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

module.exports = {
  getAllBoats,
};


