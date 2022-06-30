const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
    destination: path.join(__dirname, `../Images_Post`),
    filename: (req, file, callback) => {
      callback(null, file.originalname);
    },
  });
  const upload_Post = multer({ storage:storage });

  module.exports = {upload_Post}