const showDataModel = require("../models/showDataModel");

const indexController = (req,res,val=true,std={})=>{
  
  // if(std === null){
  //   std = true;
  // }

  // show data
  data = showDataModel();
  data.then((success)=>{
    // console.log(success);
    res.render("index",{student:success,showAddData:val,std:std});
  }).catch((error)=>{
    console.log(error);
  })
}

module.exports=indexController;