//mongoclient ->allows you to create a connection to server
var {MongoClient,ObjectID}=require('mongodb');

//.connect ->method takes 2 arug=>1.url of connection may be amazon web services url or heroku url or localhost url 2.callabck function:- this function is thrown out when connection is either fail
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
//refering it to the db tht we want get connectded to
const db =client.db('TodoApp');
  /*fetching  of the  data present in the Todos table.
  .find is a method to do so
  toArray is going to present data in the form of object fetching from document*/
  db.collection('Todos').find().toArray().then((docs)=>{
   console.log('Todos');
   console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  console.log('Unable to fetch todos',err);
});


//client.close();
});
