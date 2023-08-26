const UserModel = require("../model/Usermodel");

//signup function
module.exports.signup = async function (req, res) {
  let user = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    con_password: req.body.password,
  });

  // let user = new UserModel(req.body)
  // console.log(user);

  let data = await user.save();

  res.json({ data: data, msg: "signup done!!", rcode: 200 });
};

//login function
