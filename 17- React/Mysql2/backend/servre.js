const express = require("express");
const cors = require("cors");

require("dotenv").config();

const mysql = require("./Connection/Database");
const router = require("./Router/router");

const app = express();
//app.use(express.urlencoded({ extended: true }));

app.use(cors());
// to can read the body inside the req
app.use(express.json());
app.use(router);


const PORT = 5000;
app.listen(PORT, () => console.log(`REVIEW at http://localhost:${PORT}`));
