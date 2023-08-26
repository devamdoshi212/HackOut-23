const express = require("express");
const cors = require("cors");

require("./app/config/dbconfig").getDbConnection();

const UserController = require("./app/controller/UserController");
const LoginController = require("./app/controller/LoginController");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/signup", UserController.signup);
app.post("/login", LoginController.login);

// app.get("/login", UserController.login);

app.listen(9999);
console.log("server started at 9999");
