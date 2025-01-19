const sendDataModel = require("../models/sendDataModel");
const indexController = require("../controllers/indexController");

const sendDataController = (req, res, next) => {
  const val = true;
  const std = {};

  //send data
  let fname = req.body.fname;
  let lname = req.body.lname;
  let age = parseInt(req.body.age);
  let gender = req.body.gender;
  let marks = parseInt(req.body.marks);

  fname = fname.charAt(0).toUpperCase() + fname.slice(1);
  lname = lname.charAt(0).toUpperCase() + lname.slice(1);
  gender = gender.charAt(0).toUpperCase() + gender.slice(1);

  const send = sendDataModel(fname, lname, age, gender, marks);
  send
    .then((success) => {
      // indexController(req, res, val, std);
      res.redirect("/");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = sendDataController;
