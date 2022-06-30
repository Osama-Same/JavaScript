const connection = require("../../Connection/Database");

const update = (req, res) => {
  let idUser = req.params.idUser  
  let FirstName = req.body.FirstName;
  let Email = req.body.Email;
  let Passowrd = req.body.Passowrd;
  let Phone = req.body.Phone;
  let Country = req.body.Country;
  let Image = req.file.filename;
  let sql = `update users set 
  FirstName = '${FirstName}',
  Email = '${Email}',
  Passowrd = '${Passowrd}',
  Phone = '${Phone}',
  Country = '${Country}',
  Image = '${Image}'
  where idUser = '${idUser}'`
  connection.query(sql,(err,result)=>{
      if(err){
          res.json(err)
          console.log(err)
      }
      if(result){
          res.json({result: "Update successfully"})
      }
  })
};
module.exports = { update };
