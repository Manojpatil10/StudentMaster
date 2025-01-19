const updateStdModel = require("../models/updateStdModel");
// const findStd = require("../models/findStudent");
const findStdModel = require("../models/findStdModel");
const indexController = require("./indexController");

const updateStdController=(req,res)=>{

  stdName = req.query.stdName;
  let updatefname = req.body.updateFName;
  let updatelname = req.body.updateLName;
  let updateage = parseInt(req.body.updateAge);
  let updategender = req.body.updateGender;
  let updatemarks = parseInt(req.body.updateMarks);

  updatefname = updatefname.charAt(0).toUpperCase() + updatefname.slice(1);
  updatelname = updatelname.charAt(0).toUpperCase() + updatelname.slice(1);
  updategender = updategender.charAt(0).toUpperCase() + updategender.slice(1);
  // const val = true;
  // const std = {};

  const isUpdate = updateStdModel(stdName,updatefname,updatelname,updateage,updategender,updatemarks);

  isUpdate.then((success)=>{
    // indexController(req,res,val,std);
    res.redirect("/");
  }).catch((error)=>{
    console.log(error)
  })
}

module.exports = updateStdController;