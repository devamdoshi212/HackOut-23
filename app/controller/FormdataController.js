const FormDataModel = require('../model/Formdatamodel') 

module.exports.formdata = async function(req,res){

    let formdata = new FormDataModel({
         diseasename: req.body.diseasename,
         description: req.body. description,
         symptoms: req.body.symptoms,
        remedies: req.body.remedies,
        precaution: req.body.precaution,
        visualcontent: req.body.visualcontent,
        emergency_contact: req.body.emergency_contact,
        general_contact: req.body.general_contact
        
      });

     let data = await formdata.save()

     console.log(data);

     res.json({ data: data, msg: 'Data Enterd sucessfully!!', rcode: 200 });
    
}