const connection = require("../../Connection/Database");
const bcrypt = require("bcrypt");
const validate = require("../../Middlewares/Register/register");


require("dotenv").config();

const register = (req, res) => {
  const { error, isValid } = validate(req.body);

  if (!isValid) {
    return res.json(error);
  }

      let FirstName = req.body.FirstName;
      let Email = req.body.Email;
      let Passowrd = req.body.Passowrd;
      let Phone = req.body.Phone;
      let Country = req.body.Country;
      let Image = req.file.filename;
      const sql = `INSERT INTO users (FirstName, Email, Passowrd,Phone,Country,Image)
  VALUES ('${FirstName}', '${Email}', '${Passowrd}','${Phone}','${Country}','${Image}')`;
      Passowrd = bcrypt.hashSync(Passowrd, Number("salt"));
      connection.query(sql, (err, result) => {
        if (err) {
          res.json({ err: "error" });
          console.log({ err: "Email is invalid" });
          console.log(err);
        }
        
        if (result) {
          res.json({ result: "Sign Up successfully" });
          console.log(req.file);
        }
      });
    }


module.exports = { register };
