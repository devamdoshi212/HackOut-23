const FormDataModel = require("../model/Formdatamodel");

module.exports.GetDataById = function (req, res) {
  let id = req.params.id;
  FormDataModel.findById({ _id: id })
    .then((data) => {
      res.json({ data: data, msg: "get information of disease!!", rcode: 200 });
    })
    .catch((err) => {
      res.json({ data: data, msg: "smw!!", rcode: 9 });
    });
};
