const { MongoClient } = require("mongodb");
// Connection URI
let uri;
try {
  uri = process.env.MONGOURI;
  console.log(`Mongo URI set to ${uri}`);
} catch (error) {
  console.error(
    'There is no process.env.MONGOURI specified! Use $env:MONGOURI="xxxxxxxx" in powershell before running app'
  );
}
// Create a new MongoClient
const client = new MongoClient(uri);
export default async function connect() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
