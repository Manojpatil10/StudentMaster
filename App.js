const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const path = require("path");
const router = require("./routes/main-routes");
const mongoConnect = require("./utils/database").mongoConnect;


app.use(express.static((path.join(__dirname,"public"))));
app.use(bodyparser.urlencoded({extended:false}));
app.set("view engine","ejs");
app.use(router);


mongoConnect(()=>{
  app.listen(3000);
});