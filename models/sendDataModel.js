const getDB = require("../utils/database").getDB;

const sendDataModel=(a,b,c,d,e)=>{
  const db = getDB();

  const data = db.collection("students").insertOne({firstName:a,lastName:b,Age:c,Gender:d,Marks:e}).then((success)=>{
    console.log("Data inserted");
    // console.log(success)
  }).catch((error)=>{
    console.log("Data is not inserted");
  });

  return data;
}

module.exports = sendDataModel;