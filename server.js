const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("./app/config/dbconfig").getDbConnection();
const FormdataController = require("./app/controller/FormdataController");
const UserController = require("./app/controller/UserController");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/signup", function (req, res) {
  UserController.signup;
});
app.post("/login", function (req, res) {
  UserController.login;
});
app.post("/formdata", function (req, res) {
  FormdataController.formdata;
});

app.listen(9999);
console.log("server started at 9999");
