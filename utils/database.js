const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

let _db;

const mongoConnect=(callback)=>{
  mongoClient.connect("mongodb://127.0.0.1:27017").then((success)=>{
        console.log("Mongodb connected with code successfully");
        _db=success.db('CRUD');
    }).catch((error)=>{
        console.log("Error while connecting the database"+error);
    });
    callback();
}

const getDB=()=>{
  if(_db){
    return _db;
  }
  else{
    console.log("could not find data");
  }
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB; 