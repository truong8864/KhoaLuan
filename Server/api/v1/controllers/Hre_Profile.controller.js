const Hre_ProfileModel = require("../models/Hre_Profile.model");
const T_Hre_ProfileModel = require("../models/T_Hre_Profile.model")

//nhân viên chưa có hợp đồng
module.exports.NotYet_THrProfile= async function(req,res){
  try{
      const contract = await T_Hre_ProfileModel.distinct("CodeEmp");
      const NotYet = await Hre_ProfileModel.find({CodeEmp:
          { $nin:  contract }
      })
      return res.json({
        result:NotYet
      })
  }
  catch(err)
  {
     return res.sendStatus(403)
  }
}

module.exports.getAll = async (req, res) => {
try{
  const result = await Hre_ProfileModel.find({});
  return res.status(200).json(result);
}
catch(err)
{
  return res.sendStatus(403)
}
};

module.exports.getByID = async (req, res) => {
  try{
    const { ID } = req.params;
    const result = await Hre_ProfileModel.find({ ID: ID });
    return res.status(200).json(result);
  }
  catch(err)
  {
    return res.sendStatus(403)
  }
  
};

module.exports.getWithFilter = async (req, res) => {
try{
  const filter = req.query;
  const result = await Hre_ProfileModel.find(filter);
  return res.status(200).json(result);
}
 catch(err)
 {
  return res.sendStatus(403)
 }
};

module.exports.update = async (req, res) => {
  try{
    const { ID } = req.params;
    const { data } = req.body;
    const result = Hre_ProfileModel.findOneAndUpdate({ ID: ID }, data);
   return res.status(200).json(result);
  }
  catch(err)
  {
    return res.sendStatus(403)
  }
};

module.exports.create = async (req, res) => {
  try{
    const { data } = req.body;
    const result = await Hre_ProfileModel.create({ data });
    return res.status(200).json(result);
  }
  catch(err)
  {
    return res.sendStatus(403)
  }
};

module.exports.delete = async (req, res) => {
  try{
    const { ID } = req.params;
    const result = await Hre_ProfileModel.findOneAndUpdate(
      { ID: ID },
      { IsDelete: true }
    );
    return res.status(200).json(result);
  }
  catch(err)
  {
    return res.sendStatus(403)
  }
};
