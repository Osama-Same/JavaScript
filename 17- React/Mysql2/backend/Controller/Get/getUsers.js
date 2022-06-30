const connection = require("../../Connection/Database");

const getUsers = (req, res) => {
  const sql = "select * from users";
  connection.query(sql,(err,result)=>{
      if(err){
          res.json(err)
      }else{
          res.json(result)
        
      }
  })
};
module.exports = { getUsers };
