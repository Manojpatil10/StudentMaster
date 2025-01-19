const getDb = require("../utils/database").getDB;

const findStdModel = (id) =>{
  const db = getDb();

  const student = db.collection("students").findOne({firstName:id}).then((success)=>{
    console.log("data is find by model");
    // console.log(success);
    return success;
  }).catch((error)=>{
    console.log("error while finding student data");
  })

  return student;
}

module.exports = findStdModel;