const { Poppler } = require("pdf-images");

const uploadFile = async (req, res) => {
  try {
    const result = Poppler.convert(
      `${__dirname}/../example/test.pdf`,
      `${__dirname}/../uploads`,
      "result"
    );
    console.log(result);
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
