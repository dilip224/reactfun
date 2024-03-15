import Model from "../model/model.js";

class RoutesController {
  static getAlldata =async (req, res, next) => {
try {
  const alldata=await Model.find()
  if(alldata){
    res.send({
      "msg":'data fatch successfully',
      'data':alldata,
      "status":'success'
    })
  }
} catch (error) {
  
}    



  };
  static postAlldata = async (req, res, next) => {
    console.log(req.body);
    console.log(req.files);
    const photo = req.files["images"][0].filename;
    const doc = req.files["doc"][0].filename;
    const { email, password, gender, age } = req.body;

    //   Validate the data before saving to database

    if (email && password && photo && gender && age && doc) {
      let data = await Model({
        email: email,
        password: password,
        age: age,
        photo: photo,
        gender: gender,
        doc: doc,
      });
      let datas = data.save().then(() => {
        res.status(201).send({
          msg: "success",
          status: 201,
          data: datas,
        });
      });
    }
  };
}

export default RoutesController;
