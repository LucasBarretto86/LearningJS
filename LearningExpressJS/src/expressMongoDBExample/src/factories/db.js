const { MongoClient } = require("mongodb");

const DATABASE_URL = process.env.DATABASE_URL;
const DATABASE_NAME = process.env.DATABASE_NAME;

let client;

async function connect() {
  if (!client || !client.isConnected()) {
    client = new MongoClient(DATABASE_URL);

    await client.connect();
  }
  return client.db(DATABASE_NAME);
}

async function close() {
  if (client && client.isConnected()) {
    await client.close();
  }
}

module.exports = { connect, close };
