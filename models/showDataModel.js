const getDb = require("../utils/database").getDB;

const showDataModel = () =>{
  const db = getDb();

  const students = db.collection("students").find().toArray().then((success)=>{
    // console.log(success);
    return success;
  }).catch((error)=>{
    console.log("error while finding student data");
  })

  return students;
}

module.exports = showDataModel;
