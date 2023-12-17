const Tesseract = require("tesseract.js");

const extractText = async (pathFile) => {
  const worker = await Tesseract.createWorker("por");
  const {
    data: { text },
  } = await worker.recognize(pathFile);
  await worker.terminate();
  return text;
};

module.exports = extractText;
