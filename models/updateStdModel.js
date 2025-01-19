const getDb = require("../utils/database").getDB;

const updateStdModel =(id,a,b,c,d,e)=>{
  const db = getDb();

  const update = db.collection("students").updateOne({firstName:id},{$set:{firstName:a,lastName:b,Age:c,Gender:d,Marks:e}}).then((success)=>{
    console.log("updated successfully");
    return success;
  }).catch((error)=>{
    console.log(error);
  })

  return update;
}

module.exports = updateStdModel;