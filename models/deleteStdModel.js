const getDb = require("../utils/database").getDB;

const deleteStdModel =(id)=>{
  const db = getDb();

  const del = db.collection("students").deleteOne({firstName:id}).then((success)=>{
    console.log("data deleted successfully");
    return success;
  }).catch((error)=>{
    console.log(error);
  })

  return del;
}

module.exports = deleteStdModel;