const express = require("express");
const multer = require("multer");
const path = require("path");

require("dotenv").config();

const storage = multer.diskStorage({
  destination: path.join(__dirname, `../images`),
  //destination: "../../frontend/src/images",
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage:storage });


const router = express.Router();
const { register } = require("./../Controller/Register/register");
const { login } = require("./../Controller/Login/login");
const { getUsers } = require("../Controller/Get/getUsers");
const { update } = require("../Controller/Update/UpdataUsers");
const {getId}=require("../Controller/Get_Id/GetId")
router.get("/getusers", getUsers);
router.get("/getId/:idUser", getId);
router.put("/update/:idUser",upload.single("Image"),update)
router.post("/register",upload.single("Image"), register);
router.post("/login", login);
module.exports = router;