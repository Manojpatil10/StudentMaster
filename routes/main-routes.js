const express = require("express");
const sendDataController = require("../controllers/sendDataController");
const deleteStdController = require("../controllers/deleteStdController");
const findStdController = require("../controllers/findStdController");
const updateStdController = require("../controllers/updateStudentController");
const indexController = require("../controllers/indexController");
const router = express.Router();

router.post("/sendData",sendDataController);
router.use("/deleteStd",deleteStdController);
router.use("/updateStd",findStdController);
router.use("/updateData",updateStdController);
router.use("/", indexController);

module.exports=router;