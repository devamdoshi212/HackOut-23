const UserModel = require('../model/Usermodel');

//signup function
module.exports.signup = async function (req, res) {
  let user = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    con_password: req.body.password,
  });

  // let user = new UserModel(req.body)
  console.log(user);

  let data = await user.save();

  res.json({ data: data, msg: 'signup done!!', rcode: 200 });
};

//login function

module.exports.login = async function (req, res) {
  let email = req.body.email;
  let password = req.body.password;

  let user = await UserModel.findOne({ email: email });

  if (user && user.password == password) {
    res.json({ data: user, msg: 'Login done', rcode: 200 });
  } else {
    res.json({ data: req.body, msg: 'Invalid Credentials', rcode: -9 });
  }
};
