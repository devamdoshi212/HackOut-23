const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("./app/config/dbconfig").getDbConnection();
const FormdataController = require("./app/controller/FormdataController");
const UserController = require("./app/controller/UserController");
const LoginController = require("./app/controller/LoginController");
const GetAllDiseaseController = require("./app/controller/GetallDiseaseController");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/signup", UserController.signup);
app.post("/login", LoginController.login);
app.post("/formdata", FormdataController.formdata);
app.get("/GetAllDisease", GetAllDiseaseController.GetAllDisease);

app.listen(9999);
console.log("server started at 9999");
