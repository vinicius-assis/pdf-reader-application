const express = require("express");
const { uploadFile } = require("../controllers/uploadFile");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: `${__dirname}/../uploads/tmp-file`,
  filename: function (req, file, cb) {
    cb(null, "tmpFile.pdf");
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.get("/upload", upload.single("file"), uploadFile);

module.exports = router;
