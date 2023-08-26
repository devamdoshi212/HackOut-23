const FormDataModel = require('../model/Formdatamodel') 

module.exports.GetAllDisease = function(req,res){

    FormDataModel.find().then((data)=>{

        res.json({ "msg": "All disease retrived", "data": data, "rcode": 200 })

    }).catch((err)=>{

        res.json({ "msg": "smw", "data": data, "rcode": 9 })
    })

}
