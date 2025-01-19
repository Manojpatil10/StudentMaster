const deleteStdModel = require("../models/deleteStdModel");
const indexController = require("../controllers/indexController");
// const findStd = require('../models/findStudent');
// const findStd = require("../models/findStudent");

const deleteStdController=(req,res,next)=>{
  const val = true;
  const std = {};
  stdName = req.query.stdName;
  const isDel = deleteStdModel(stdName);

  isDel.then((success)=>{
    res.redirect("/")
    // indexController(req,res,val,std);
  }).catch((error)=>{
    console.log(error)
  })

}

module.exports = deleteStdController