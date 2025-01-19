const findStdModel = require("../models/findStdModel");
const indexController = require("../controllers/indexController");


const findStdController=(req,res,next)=>{

  const val = false;
  
  stdName = req.query.stdName;
  const isFind = findStdModel(stdName);
  
  isFind.then((success)=>{
    console.log(success);
    const std = success;
    indexController(req,res,val,std);
  }).catch((error)=>{
    console.log(error);
  })
}

module.exports = findStdController;