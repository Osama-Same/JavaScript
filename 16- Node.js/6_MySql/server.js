const express = require("express");
require("dotenv").config();
const mysql = require("./Connection/Database");
const app = express();
app.use(express.json());

// Get All Users

app.get("/GetUsers", (req, res) => {
  const sql = `select * from users`;
  mysql.query(sql, (err, result) => {
    if (err) {
      res.json({ err: "error" });
    }
    if (result) {
      res.json({ result: result });
    }
  });
});


// Get id User

app.get("/GetIdUser/:idUser", (req, res) => {
  let idUser = req.params.idUser;
  const sql = `select * from users where idUser = '${idUser}'`;
  mysql.query(sql, (err, result) => {
    if (err) {
      res.json({ err: "error" });
    }
    if (result) {
      res.json({ result: result });
    }
  });
});

// Post User
const { upload } = require("./Upload/Upload");
app.post("/PostUser", upload.single("Image"), (req, res) => {
  let Name = req.body.Name;
  let Email = req.body.Email;
  let Passowrd = req.body.Passowrd;
  let Phone = req.body.Phone;
  let Country = req.body.Country;
  let Image = req.file.filename;

  const sql = `insert INTO users(Name,Email,Passowrd,Phone,Country,Image)
  VALUES('${Name}','${Email}','${Passowrd}','${Phone}','${Country}','${Image}')`;
  mysql.query(sql, (err, result) => {
    if (err) {
      res.json({ err: err });
    }
    if (result) {
      res.json({ result: result });
    }
  });
});

// Update User idUser
app.put("/UpdateUser/:idUser", upload.single("Image"), (req, res) => {
  let idUser = req.params.idUser;
  let Name = req.body.Name;
  let Email = req.body.Email;
  let Passowrd = req.body.Passowrd;
  let Phone = req.body.Phone;
  let Country = req.body.Country;
  let Image = req.file.filename;

  let sql = `update users set 
  Name = '${Name}',
  Email = '${Email}',
  Passowrd = '${Passowrd}',
  Phone = '${Phone}',
  Country = '${Country}',
  Image = '${Image}'
  where idUser = '${idUser}'`;
  mysql.query(sql, (err, result) => {
    if (err) {
      res.json({ err: err });
    }
    if (result) {
      res.json({ idUser: idUser, Email: Email, Passowrd: Passowrd });
    }
  });
});

// Delete User idUser
app.delete("/DeleteUser/:idUser", (req, res) => {
  let idUser = req.params.idUser;
  let sql = `delete from users where idUser='${idUser}'`;
  mysql.query(sql, (err, result) => {
    if (err) {
      res.json({ err: err });
    }
    if (result) {
      res.json({ result: result.affectedRows });
    }
  });
});

// find Users Country = Jordan
app.get("/FindCountry", (req, res) => {
  let Country = req.body.Country;
  let sql = `select * from users where Country= '${Country}'`;
  mysql.query(sql, (err, result) => {
    if (err) {
      res.json({ err: err });
    }
    if (result) {
      res.json(result);
    }
  });
});
const { upload_Post } = require("./Upload/UploadPost");
// insert Post
app.post("/InsertPost/:idUser", upload_Post.single("Images_Post"), (req, res) => {
  let idUser = req.params.idUser;
  let Name_Post = req.body.Name_Post;
  let Category_Post = req.body.Category_Post;
  let Images_Post = req.file.filename;
  let Country_Post = req.body.Country_Post;
  let Price_Post = req.body.Price_Post;
  let Date_Post = req.body.Date_Post;
  let sql = `insert INTO Post(idUser,Name_Post,Category_Post,Images_Post,Country_Post,Price_Post,Date_Post)
  VALUES('${idUser}','${Name_Post}','${Category_Post}','${Images_Post}','${Country_Post}','${Price_Post}','${Date_Post}')`;
  mysql.query(sql, (err, result) => {
    if (err) {
      res.json({ err: err });
      console.log(err)
    }
    if (result) {
      res.json({ result: result });
    }
  });
});
// Get Post
app.get("/GetPost", (req, res) => {
  let sql = `select * from Post`;
  mysql.query(sql, (err, result) => {
    if (err) {
      res.json({ err: err });
    }
    if (result) {
      res.json({ result: result });
    }
  });
});
// join User and Post
app.get("/GetUserAndPost/:idUser", (req, res) => {
  // let idPost = req.params.idPost
   let idUser = req.params.idUser
  let sql = `select  users.Name ,Post.Price_Post from Post inner join users on Post.idUser = ${idUser}`;
  mysql.query(sql, (err, result) => {
    if (err) {
      res.json({ err: err });
    }
    if (result) {
      res.json({ result: result });
    }
  });
})
const PORT = 5000;
app.listen(PORT, () => console.log(`REVIEW at http://localhost:${PORT}`));