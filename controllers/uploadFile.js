const fs = require("fs");
const extractText = require("../utils/extractText");
const { Poppler } = require("pdf-images");

const uploadFile = async (req, res) => {
  try {
    let resultText = "";
    const imagesPaths = [];
    const tmpFilePath = `${__dirname}/../uploads/storage/tmpFile.pdf`;
    const result = Poppler.convert(
      tmpFilePath,
      `${__dirname}/../uploads`,
      "result"
    );

    const resultDirPath = `${__dirname}/../uploads/result`;
    fs.readdirSync(resultDirPath).forEach(async (file, index) => {
      imagesPaths.push(`${resultDirPath}/${file}`);
    });

    if (result.success) {
      fs.rm(tmpFilePath, () => console.log("Tmp file removed"));
    }

    if (imagesPaths?.length) {
      imagesPaths.forEach(async (imagePath, index, self) => {
        const text = await extractText(imagePath);
        resultText += text;
        fs.writeFileSync(
          `${__dirname}/../uploads/result.txt`,
          resultText,
          "utf-8"
        );
        fs.rm(imagePath, () =>
          console.log(`Processing files ${index + 1}/${self.length}`)
        );
      });
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
