const uploadFile = async (req, res) => {
  try {
    console.log(req.file);
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
