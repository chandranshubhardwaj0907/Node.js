

const { MongoClient } = require('mongodb');



const url = 'mongodb+srv://chandranshubhardwaj:<Password>@movierecommendation.xdaqs.mongodb.net/';
const client = new MongoClient(url);

const dbName = 'HelloWorld';

async function main() {
  
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

// insert
  const data = {
    "First_name" : "Ashmit",
    "Last_name" : "Thawait",
    "City" : "Raigarh",
    "Phone_number": "7987403728"
  };
  const insertResult = await collection.insertMany([data]);
console.log('Inserted documents =>', insertResult);

 // Read
  const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
