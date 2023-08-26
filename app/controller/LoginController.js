const UserModel = require("../model/Usermodel");

module.exports.login = async function (req, res) {
  let email = req.body.email;
  let password = req.body.password;

  let user = await UserModel.findOne({ email: email });

  console.log(user);

  if (user && user.password == password) {
    res.json({ data: user, msg: "Login done", rcode: 200 });
  } else {
    res.json({ data: req.body, msg: "Invalid Credentials", rcode: -9 });
  }
};
