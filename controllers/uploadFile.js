const fs = require("fs");
const { Poppler } = require("pdf-images");

const uploadFile = async (req, res) => {
  try {
    const tmpFilePath = `${__dirname}/../uploads/tmp-file/tmpFile.pdf`;
    const result = Poppler.convert(
      tmpFilePath,
      `${__dirname}/../uploads`,
      "result"
    );

    if (result.success) {
      fs.rm(tmpFilePath, () => console.log("Tmp file removed"));
    }
    res.status(200).json({
      status: "Success",
      message: "Deu bom",
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error,
    });
  }
};

module.exports = {
  uploadFile,
};
