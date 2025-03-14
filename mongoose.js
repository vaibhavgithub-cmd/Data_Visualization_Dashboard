const { MongoClient } = require('mongodb');

const url = 'mongodb://0.0.0.0/Dashboard?directConnection=true';

const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  let db = result.db('Dashboard');
  return db.collection('dataset');
}

module.exports = dbConnect;