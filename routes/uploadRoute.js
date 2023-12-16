const express = require("express");
const { uploadFile } = require("../controllers/uploadFile");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.get("/upload", upload.single("file"), uploadFile);

module.exports = router;
