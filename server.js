const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

require("./app/config/dbconfig").getDbConnection();

const UserController = require("./app/controller/UserController");
const FormDataController = require("./app/controller/FormdataController");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/signup", UserController.signup);
app.get("/login", UserController.login);
app.post("/formdata", FormDataController.formdata);

app.listen(9999);
console.log("server started at 9999");
